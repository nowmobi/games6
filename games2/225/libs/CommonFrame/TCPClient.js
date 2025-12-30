tywx.TCPClient = {
    TAG: "TCP client",
    CONNECT_STATUS_OK: 1,
    CONNECT_STATUS_OPENING: 2,
    CONNECT_STATUS_CLOSING: 3,
    CONNECT_STATUS_FAIL: 0,
    connectStatus: 0,
    isTimerInited: !1,
    tickCount: 0,
    filterCmds: "heartbeat",
    timerSchedule: function() {
        tywx.TCPClient.tickCount = (tywx.TCPClient.tickCount + 1) % 3, 2 == tywx.TCPClient.tickCount && tywx.TCPClient.connectStatus == tywx.TCPClient.CONNECT_STATUS_OK && tywx.NotificationCenter.trigger(tywx.EventType.SEND_HEART_BEAT), 
        tywx.TCPClient.reconnet();
    },
    startCheckTimer: function() {
        tywx.TCPClient.isTimerInited = !0;
    },
    stopCheckTimer: function() {
        tywx.TCPClient.isTimerInited = !1;
    },
    connect: function(t) {
        tywx.BiLog.clickStat(tywx.clickStatEventType.clickStatEventTypeTCPStart, [ t ]), 
        tywx.TCPClient.connectStatus != tywx.TCPClient.CONNECT_STATUS_OPENING && tywx.TCPClient.connectStatus != tywx.TCPClient.CONNECT_STATUS_OK && (tywx.TCPClient.connectStatus = tywx.TCPClient.CONNECT_STATUS_OPENING, 
        tywx.IsWechatPlatform() && this.doWechatConnect(t));
    },
    doWechatConnect: function(t) {
        try {
            if (!tywx.IsWechatPlatform()) return;
            wx.connectSocket({
                url: t
            }), wx.onSocketOpen(function(e) {
                tywx.LOGD(tywx.TCPClient.TAG, "TCP webSocket opened..."), tywx.TCPClient.connectStatus = tywx.TCPClient.CONNECT_STATUS_OK, 
                tywx.NotificationCenter.trigger(tywx.EventType.TCP_OPENED), tywx.BiLog.clickStat(tywx.clickStatEventType.clickStatEventTypeTCPSuccess, [ t ]);
            }), wx.onSocketError(function(e) {
                tywx.LOGD(tywx.TCPClient.TAG, "TCP webSocket error..."), tywx.BiLog.clickStat(tywx.clickStatEventType.clickStatEventTypeTCPFailed, [ t ]), 
                tywx.TCPClient.connectStatus = tywx.TCPClient.CONNECT_STATUS_FAIL, tywx.NotificationCenter.trigger(tywx.EventType.TCP_ERROR);
            }), wx.onSocketClose(function(t) {
                tywx.LOGD(tywx.TCPClient.TAG, "WebSocket 已关闭！"), tywx.TCPClient.connectStatus = tywx.TCPClient.CONNECT_STATUS_FAIL, 
                tywx.NotificationCenter.trigger(tywx.EventType.TCP_CLOSE);
            }), wx.onSocketMessage(function(t) {
                if (tywx.StateInfo.isOnForeground) {
                    var e = tywx.TCPClient.decodeMessage(t.data);
                    if (null != e && "0000" != e) {
                        var n = "[Receive TCP Msg]: " + unescape(e.replace(/\\u/gi, "%u")), C = e.substr(0, e.length - 0);
                        if (null != C && C.length > 0) {
                            var i = JSON.parse(C);
                            -1 == tywx.TCPClient.filterCmds.indexOf(i.cmd) && tywx.LOGD(tywx.TCPClient.TAG, n), 
                            tywx.NotificationCenter.trigger(tywx.EventType.TCP_RECEIVE, i);
                        }
                    }
                }
            });
        } catch (t) {
            tywx.LOGE("error:", "tywx.TCPClient.doWechatConnect——" + JSON.stringify(t));
        }
    },
    decodeMessage: function(t) {
        if ("undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer) {
            for (var e = new Uint8Array(t), n = "", C = 0, i = e.length; C < i; C++) {
                n += String.fromCharCode(e[C]);
            }
            return n;
        }
        for (var c = (t = tywx.EncodeDecode.base64Decode(t)).slice(0, 4), C = 0, i = (t = t.slice(4)).length; C < i; C++) {
            var T = t[C];
            T ^= c[C % 4], t[C] = T;
        }
        return tywx.EncodeDecode.utf8Decode(t);
    },
    reconnet: function() {
        tywx.StateInfo.isOnForeground && tywx.TCPClient.connectStatus == tywx.TCPClient.CONNECT_STATUS_FAIL && (tywx.NotificationCenter.trigger(tywx.EventType.TCP_RECONNECT), 
        tywx.TCPClient.connect(tywx.SystemInfo.webSocketUrl));
    },
    sendMsg: function(t) {
        try {
            if (tywx.TCPClient.connectStatus != tywx.TCPClient.CONNECT_STATUS_OK) return;
            var e = JSON.stringify(t);
            tywx.Util.isNullOrEmpty(t.params) || -1 != tywx.TCPClient.filterCmds.indexOf(t.params.action) || tywx.LOGD(tywx.TCPClient.TAG, "[Send TCP Msg]: " + e), 
            tywx.IsWechatPlatform() && wx.sendSocketMessage({
                data: e,
                success: function(t) {},
                fail: function(t) {
                    var e = t[0];
                    e && "sendSocketMessage:fail taskID not exist" === e.errMsg && (wx.closeSocket(), 
                    tywx.TCPClient.connectStatus = tywx.TCPClient.CONNECT_STATUS_FAIL), tywx.LOGD(tywx.TCPClient.TAG, "[Send TCP Msg fail]: " + JSON.stringify(arguments));
                },
                complete: function(t) {}
            });
        } catch (t) {
            tywx.LOGE("error:", "tywx.TCPClient.sendMsg——" + JSON.stringify(t));
        }
    },
    close: function() {
        try {
            tywx.TCPClient.connectStatus = tywx.TCPClient.CONNECT_STATUS_CLOSING, tywx.IsWechatPlatform() && wx.closeSocket(), 
            tywx.LOGD(tywx.TCPClient.TAG, "TCP close..............");
        } catch (t) {
            tywx.LOGE("error:", "tywx.TCPClient.close——" + JSON.stringify(t));
        }
    }
};