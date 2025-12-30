tywx.PropagateInterface = {
    ShareConfig: {},
    getShareConfigInfo: function(t) {
        "object" != typeof t && (t = {});
        var e = new Date().getTime();
        t.act = "api.getShareConfig", t.time = e, t.game_mark = tywx.SystemInfo.cloudId + "-" + tywx.SystemInfo.gameId;
        var n = this.getConfigSignStr(t), i = [];
        for (var r in t) i.push(r + "=" + t[r]);
        i.push("sign=" + n);
        var a = tywx.SystemInfo.shareManagerUrl + "?" + i.join("&");
        tywx.HttpUtil.httpGet({
            url: a
        }, function(t) {
            tywx.LOGE("GET_SHARE_CONFIG_INFO_SUCCESS", JSON.stringify(t));
            for (var e in t.retmsg) tywx.PropagateInterface.ShareConfig[e] = t.retmsg[e];
            tywx.NotificationCenter.trigger(tywx.EventType.GET_SHARE_CONFIG_SUCCESS, t);
        }, function(t) {
            tywx.LOGE("GET_SHARE_CONFIG_INFO_FAIL", JSON.stringify(t)), tywx.NotificationCenter.trigger(tywx.EventType.GET_SHARE_CONFIG_FAIL, t);
        });
    },
    _cachedShareConfig: void 0,
    _pendingFlag: !1,
    getShareConfigInfoAutoWeight: function() {
        void 0 == this._cachedShareConfig ? this._pendingFlag = !0 : tywx.NotificationCenter.trigger(tywx.EventType.GET_SHARE_CONFIG_SUCCESS, this._shuffleByWeights());
    },
    _doHttpGetShareConfig: function() {
        var t = {}, e = new Date().getTime();
        t.act = "api.getShareConfig", t.time = e, t.game_mark = tywx.SystemInfo.cloudId + "-" + tywx.SystemInfo.gameId;
        var n = this.getConfigSignStr(t), i = [];
        for (var r in t) i.push(r + "=" + t[r]);
        i.push("sign=" + n);
        var a = tywx.SystemInfo.shareManagerUrl + "?" + i.join("&"), o = this;
        tywx.HttpUtil.httpGet({
            url: a
        }, function(t) {
            o._cachedShareConfig = t.retmsg, o._pendingFlag && (tywx.NotificationCenter.trigger(tywx.EventType.GET_SHARE_CONFIG_SUCCESS, o._shuffleByWeights()), 
            o._pendingFlag = !1);
        }, function(t) {
            o._pendingFlag && (tywx.NotificationCenter.trigger(tywx.EventType.GET_SHARE_CONFIG_FAIL, t), 
            o._pendingFlag = !1);
            "undefined" != typeof cc && cc.director || setTimeout(function() {
                o._doHttpGetShareConfig();
            }, 1e4);
        });
    },
    _shuffleByWeights: function() {
        var t = {};
        for (var e in this._cachedShareConfig) if ("shareExt" != e) {
            var n = this._cachedShareConfig[e];
            if (0 == n.length) t[e] = {}; else if (1 == n.length) t[e] = n[0]; else for (var i = n.reduce(function(t, e) {
                return t + e.weight;
            }, 0), r = Math.random() * i, a = 0; a < n.length; a++) if ((r -= n[a].weight) <= 0) {
                t[e] = n[a];
                break;
            }
        }
        return t;
    },
    getUserFeatureInfo: function() {
        var t = {}, e = new Date().getTime();
        t.act = "api.getUserFeature", t.cloud_id = tywx.SystemInfo.cloudId, t.game_id = tywx.SystemInfo.gameId, 
        t.user_id = tywx.UserInfo.userId, t.time = e;
        var n = this.getConfigSignStr(t), i = [];
        for (var r in t) i.push(r + "=" + t[r]);
        i.push("sign=" + n);
        var a = tywx.SystemInfo.shareManagerUrl + "?" + i.join("&");
        tywx.HttpUtil.httpGet({
            url: a
        }, function(t) {
            tywx.NotificationCenter.trigger(tywx.EventType.GET_USER_FEATURE_SUCCESS, t);
        }, function(t) {
            tywx.NotificationCenter.trigger(tywx.EventType.GET_USER_FEATURE_FAIL, t);
        });
    },
    getConfigSignStr: function(t) {
        for (var e = Object.keys(t).sort(), n = "", i = 0; i < e.length; i++) {
            var r = e[i];
            "act" != r && "sign" != r && (n += r + "=" + t[r]);
        }
        return tywx.hex_md5("market.tuyoo.com-api-" + n + "-market.tuyoo-api") || "";
    }
};