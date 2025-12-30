tywx.HttpUtil = {
    httpPost: function(t, s) {
        try {
            tywx.IsWechatPlatform() && wx.request({
                url: t.url,
                data: t.postData,
                header: t.header,
                method: "POST",
                dataType: "json",
                success: function(t) {
                    200 == t.statusCode ? t.data && t.data.hasOwnProperty("/api/bilog5/clientlog") && "ok" == t.data["/api/bilog5/clientlog"] && tywx.LOGD("ty.HttpUtil.httpPost", "post success! ") : tywx.LOGD("ty.HttpUtil.httpPost", "statusCode:" + t.statusCode);
                },
                fail: function(s) {
                    tywx.LOGD("ty.HttpUtil.httpPost", "post error! " + t.url);
                }
            });
        } catch (t) {
            tywx.LOGE("error:", "tywx.HttpUtil.httpPost——" + JSON.stringify(t));
        }
    },
    httpGet: function(t, s, e) {
        try {
            tywx.IsWechatPlatform() && (tywx.LOGD("ty.HttpUtil.httpGet", "url:" + t.url), wx.request({
                url: t.url,
                method: "GET",
                success: function(t) {
                    200 == t.statusCode ? (tywx.LOGD("ty.HttpUtil.httpGet", "res:" + JSON.stringify(t.data)), 
                    s && s(t.data)) : tywx.LOGD("ty.HttpUtil.httpGet", "statusCode:" + t.statusCode);
                },
                fail: function(s) {
                    tywx.LOGD("ty.HttpUtil.httpGet", "post error! " + t.url), e && e(s);
                }
            }));
        } catch (t) {
            tywx.LOGE("error:", "tywx.HttpUtil.httpGet——" + JSON.stringify(t));
        }
    }
};