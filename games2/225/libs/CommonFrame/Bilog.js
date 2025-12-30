tywx.clickStatEventType = {
    clickStatEventTypeUserFrom: 99990001,
    clickStatEventTypeUserShare: 99990002,
    clickStatEventTypeShowAdBtn: 99990003,
    clickStatEventTypeClickShowQRCode: 99990004,
    clickStatEventTypeClickAdBtn: 99990007,
    clickStatEventTypeClickDirectToMiniGameSuccess: 99990005,
    clickStatEventTypeClickDirectToMiniGameFail: 99990006,
    clickStatEventTypeOnShowTimeStampSubmit: 99990010,
    clickStatEventTypeOnHideTimeStampSubmit: 99990011,
    clickStatEventTypeSubmitVersionInfo: 9999,
    clickStatEventTypeWxLoginStart: 10001,
    clickStatEventTypeWxLoginSuccess: 10002,
    clickStatEventTypeWxLoginFailed: 10003,
    clickStatEventTypeAuthorizationStart: 10004,
    clickStatEventTypeAuthorizationSuccess: 10005,
    clickStatEventTypeAuthorizationFailed: 10006,
    clickStatEventTypeLoginSDKStart: 10007,
    clickStatEventTypeLoginSDKSuccess: 10008,
    clickStatEventTypeLoginSDKFailed: 10009,
    clickStatEventTypeTCPStart: 10010,
    clickStatEventTypeTCPSuccess: 10011,
    clickStatEventTypeTCPFailed: 10012
}, tywx.BiLog = {
    uploadLogTimely: function(t) {
        if (tywx.StateInfo.networkConnected) {
            if (t) {
                var e = {
                    url: tywx.SystemInfo.errorLogServer + "?cloudname=" + tywx.SystemInfo.cloudId + "." + tywx.SystemInfo.intClientId,
                    header: [ "Content-Type:text/plain" ],
                    postData: t,
                    callback: null
                };
                tywx.HttpUtil.httpPost(e, "POST");
            }
        } else tywx.LOGD("tywx.BiLog", "net error!");
    },
    getSystemInfo: function() {
        this.cloud_id = tywx.SystemInfo.cloudId, this.rec_type = "1", this.rec_id = "0", 
        this.receive_time = "0", this.user_id = tywx.UserInfo.userId || "0", this.game_id = tywx.SystemInfo.gameId, 
        this.client_id = tywx.SystemInfo.clientId, this.device_id = this.device_id || tywx.Util.getLocalUUID(), 
        this.ip_addr = "#IP", this.nettype = "0", this.phone_maker = "0", this.phone_model = tywx.UserInfo.model, 
        this.phone_carrier = "0", this.reserved = "0";
    },
    uploadClickStatLogTimely: function(t) {
        if (void 0 != t && "" != t) var e = {
            url: tywx.SystemInfo.biLogServer,
            headers: [ "Content-Type:text/plain" ],
            postData: t,
            obj: this,
            tag: null,
            callback: null
        };
        tywx.HttpUtil.httpPost(e, "POST");
    },
    clickStat: function(t, e) {
        var i = [];
        if ((e = e || []).length < 10) for (var n = 0; n < 9; n++) n < e.length ? i.push(e[n]) : i.push(0); else i = e;
        tywx.LOGD("BI打点", "eventid= " + t + " 描述 = " + JSON.stringify(i));
        var c = this.assemblelog(t, i);
        this.uploadClickStatLogTimely(c + "\n");
    },
    assemblelog: function(t, e) {
        var i = new Date().getTime();
        i - this._timetag > 6e4 && (this._timetag = i, this.nettype = 0);
        var n = e.join("\t");
        this.getSystemInfo();
        var c = this.cloud_id + "\t" + this.rec_type + "\t" + i + "\t" + this.rec_id + "\t" + this.receive_time + "\t" + t + "\t" + this.user_id + "\t" + this.game_id + "\t" + this.client_id + "\t" + this.device_id + "\t" + this.ip_addr + "\t" + this.nettype + "\t" + this.phone_maker + "\t" + this.phone_model + "\t" + this.phone_carrier + "\t" + n + "\t" + this.reserved;
        return this.trimTab0(c);
    },
    trimTab0: function(t) {
        if (null == t || void 0 == t) return "";
        return t.replace(/(\t0)*$/, "");
    }
};