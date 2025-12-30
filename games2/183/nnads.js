var nnsdkCom = {
    second: 60,
    timeCount: 0,
    gameFlag: !1,
    init: function() {
        this.logReport.logStart(),
        this.logReport.customEvent("101", "初始化完成"),
        setTimeout(()=>{
            //vigoo.HideLoading(),
            this.logReport.customEvent("102", "隐藏vigoo界面")
        }
        , 1e3)
    },
    showTitleAdv() {
        console.log("showTitleAdv");
    },
    showScreenVideo: function(e) {
        console.log("showScreenVideo");
    }
};
nnsdkCom.logReport = {
    lastTime: Date.now(),
    uuid: function() {
        return localStorage.getItem("uuid") || this.getUuid()
    },
    logStart: function() {
        SeasunDcLogger.config({
            appId: "999075",
            appVersion: "1.1.1",
            channel: "vigoo"
        }),
        SeasunDcLogger.start()
    },
    roleLogin: function() {
        SeasunDcLogger.push({
            msgType: "role.login",
            accountId: this.uuid()
        })
    },
    customEvent: function(e, o) {
        SeasunDcLogger.push({
            msgType: "custom.event",
            accountId: this.uuid(),
            eventId: "loading_transform",
            eventDesc: "前端加载转化",
            eventBody: {
                eventTargetId: e,
                eventTargetName: o,
                loadingTime: parseInt((Date.now() - this.lastTime) / 1e3)
            }
        })
    },
    onAdClick: function() {
        SeasunDcLogger.push({
            msgType: "custom.event",
            accountId: this.uuid(),
            eventId: "ad.click",
            eventDesc: "玩家点击广告",
            eventBody: {
                eventTargetId: "1",
                eventTargetName: "插屏广告弹出"
            }
        })
    },
    onAdWatch: function() {
        SeasunDcLogger.push({
            msgType: "custom.event",
            accountId: this.uuid(),
            eventId: "ad.watch",
            eventDesc: "vgoo",
            eventBody: {
                eventTargetId: "",
                eventTargetName: ""
            }
        })
    },
    getUuid: function() {
        let e = [];
        for (let o = 0; o < 36; o++)
            e[o] = "0123456789abcdef".substr(Math.floor(16 * Math.random()), 1);
        e[14] = "4",
        e[19] = "0123456789abcdef".substr(3 & e[19] | 8, 1),
        e[8] = e[13] = e[18] = e[23] = "-";
        let o = e.join("");
        return localStorage.setItem("uuid", o),
        o
    }
},
nnsdkCom.init();
