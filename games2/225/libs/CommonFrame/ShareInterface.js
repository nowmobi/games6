tywx.ShareInterface = {
    OnShareAppMessageInfo: null,
    setOnShareAppMessageInfo: function(e, t, a, r) {
        this.OnShareAppMessageInfo = {
            title: e,
            imageUrl: t,
            sharePointId: a,
            shareSchemeId: r
        };
    },
    getOnShareAppMessageInfo: function() {
        return this.OnShareAppMessageInfo;
    },
    getRandomOnShareAppMessageInfo: function() {
        var e = [];
        for (var t in tywx.PropagateInterface._cachedShareConfig) e.push(t);
        if (e && e.length > 0) {
            var a = Math.floor(1e4 * Math.random()) % e.length, r = e[a], n = tywx.PropagateInterface._cachedShareConfig[r];
            if (n && n.length > 0) {
                return {
                    title: n[a = Math.floor(1e4 * Math.random()) % n.length].shareContent,
                    imageUrl: n[a].sharePicUrl,
                    sharePointId: n[a].sharePointId,
                    shareSchemeId: n[a].shareSchemeId
                };
            }
        }
        return null;
    },
    share: function(e, t, a, r, n, i, s) {
        try {
            tywx.IsWechatPlatform() && (tywx.BiLog.clickStat(tywx.clickStatEventType.clickStatEventTypeUserShare, [ a, 1, r ]), 
            wx.shareAppMessage({
                title: e,
                imageUrl: t,
                query: "inviteCode=" + tywx.UserInfo.userId + "&sourceCode=" + a + "&inviteName=" + tywx.UserInfo.userName + "&imageType=" + r + "&extraInfo=" + (s || ""),
                success: function(e) {
                    n && n(e), tywx.BiLog.clickStat(tywx.clickStatEventType.clickStatEventTypeUserShare, [ a, 2, r ]);
                },
                fail: function(e) {
                    i && i(e);
                },
                complete: function() {}
            }));
        } catch (e) {
            tywx.LOGE("error:", "tywx.ShareInterface.share——" + JSON.stringify(e));
        }
    }
}, tywx.onShareAppMessageInit = function() {
    try {
        tywx.IsWechatPlatform() && wx.onShareAppMessage(function(e) {
            var t = tywx.ShareInterface.getOnShareAppMessageInfo();
            return null == t && (t = tywx.ShareInterface.getRandomOnShareAppMessageInfo()), 
            tywx.BiLog.clickStat(tywx.clickStatEventType.clickStatEventTypeUserShare, [ t.sharePointId, 1, t.shareSchemeId ]), 
            {
                title: t.title,
                imageUrl: t.imageUrl,
                query: "inviteCode=" + tywx.UserInfo.userId + "&sourceCode=" + t.sharePointId + "&inviteName=" + tywx.UserInfo.userName + "&imageType=" + t.shareSchemeId,
                success: function(e, a) {
                    tywx.BiLog.clickStat(tywx.clickStatEventType.clickStatEventTypeUserShare, [ t.sharePointId, 2, t.shareSchemeId ]);
                },
                fail: function() {},
                complete: function() {}
            };
        });
    } catch (e) {
        tywx.LOGE("error:", "tywx.ShareInterface.share——" + JSON.stringify(e));
    }
}, tywx.onShareAppMessageInit();