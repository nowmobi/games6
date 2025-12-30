console.log("TuyooSDK loaded"), tywx.TuyooSDK = {
    SESSION_KEY: "TU_SESSION_STORAGE",
    baseUrl: "http://localhost:3000",
    onLoginUrl: "http://localhost:3000/onLogin",
    decryptUrl: "http://localhost:3000/decrypt",
    UserInteractiveInfo: {},
    login: function() {
        tywx.IsWechatPlatform() && (tywx.TuyooSDK.getSystemInfo(), tywx.TuyooSDK.wechatLogin(), 
        tywx.PropagateInterface._doHttpGetShareConfig(), tywx.TuyooSDK.getUserAreaInfo());
    },
    wechatLogin: function() {
        try {
            if (!tywx.IsWechatPlatform()) return;
            tywx.BiLog.clickStat(tywx.clickStatEventType.clickStatEventTypeWxLoginStart, []), 
            wx.login({
                success: function(t) {
                    if (tywx.LOGD(null, "wx login success, params:" + JSON.stringify(t)), tywx.BiLog.clickStat(tywx.clickStatEventType.clickStatEventTypeWxLoginSuccess, [ t.code ]), 
                    t.code) {
                        var e = t.code;
                        tywx.TuyooSDK.loginTuyooWithCode(e, {}), tywx.NotificationCenter.trigger(tywx.EventType.WEIXIN_LOGIN_SUCCESS);
                    }
                },
                fail: function(t) {
                    tywx.BiLog.clickStat(tywx.clickStatEventType.clickStatEventTypeWxLoginFailed, []), 
                    tywx.LOGD(null, "wx login fail, params:" + JSON.stringify(t)), tywx.NotificationCenter.trigger(tywx.EventType.WEIXIN_LOGIN_FAIL);
                },
                complete: function(t) {}
            });
        } catch (t) {
            tywx.LOGE("error:", "tywx.TuyooSDK.wechatLogin——" + JSON.stringify(t));
        }
    },
    wxLogin: function() {
        return new Promise(function(t, e) {
            wx.login({
                success: function(t) {
                    tywx.LOGD(null, "互动链登录成功1：" + JSON.stringify(t)), t.code;
                }
            });
        });
    },
    getSelfOpenId: function() {
        return new Promise(function(t, e) {
            wx.getStorage({
                key: "openid",
                success: function(e) {
                    tywx.LOGD(null, "getSelfOpenId res:" + JSON.stringify(e));
                    var n = e.data;
                    t(n);
                },
                fail: function(e) {
                    tywx.LOGD(null, "getSelfOpenId err:" + JSON.stringify(e)), t(tywx.TuyooSDK.wxLogin());
                }
            });
        });
    },
    initUserInteractiveStorage: function() {
        tywx.LOGD(null, "获取用户的加密交互数据1"), wx.hasOwnProperty("getUserInteractiveStorage") && wx.getUserInteractiveStorage({
            keyList: [ "1", "2", "3" ],
            success: function(t) {
                tywx.LOGD(null, "获取用户的加密交互数据2：" + JSON.stringify(t));
                var e = t.encryptedData, n = t.iv;
                tywx.TuyooSDK.decryptDataBySelf(tywx.UserInfo.wxgame_session_key, e, n);
            }
        });
    },
    decryptDataBySelf: function(t, e, n) {
        wx.request({
            method: "POST",
            url: tywx.SystemInfo.loginUrl + "api/sxlzc/decrypt",
            data: {
                userId: tywx.UserInfo.userId,
                sessionKey: tywx.UserInfo.wxgame_session_key,
                encryptedData: e,
                iv: n
            },
            success: function(t) {
                if (tywx.LOGD(null, "互动数据解密成功：" + JSON.stringify(t)), t.data && 1 == t.data.code && t.data.decrypted) {
                    var e = t.data.decrypted.kv_list;
                    console.log("获取用户的加密交互数据 kvList：" + JSON.stringify(e)), tywx.TuyooSDK.UserInteractiveInfo = e, 
                    tywx.NotificationCenter.trigger(tywx.EventType.INTERACTVESTORAGE_REFRESH_SUCCESS);
                }
            }
        });
    },
    delInteractionData: function() {
        wx.request({
            method: "POST",
            url: tywx.SystemInfo.loginUrl + "api/sxlzc/delInteractionData",
            data: {
                userId: tywx.UserInfo.userId,
                sessionKey: tywx.UserInfo.wxgame_session_key,
                openId: tywx.UserInfo.wxgame_openid
            },
            success: function(t) {
                tywx.LOGD(null, "互动数据删除成功：" + JSON.stringify(t));
            }
        });
    },
    updateSession: function() {
        return new Promise(function(t, e) {
            wx.checkSession({
                success: function() {
                    t(tywx.TuyooSDK.wxLogin());
                },
                fail: function() {
                    t(tywx.TuyooSDK.wxLogin());
                }
            });
        });
    },
    decrypt: function(t) {
        t.encryptedData, t.iv, t.openid;
        return new Promise(function(t, e) {});
    },
    loginTuyooWith3rdSession: function() {
        try {
            if (!tywx.IsWechatPlatform()) return;
            wx.getStorage({
                key: tywx.TuyooSDK.SESSION_KEY,
                success: function(t) {
                    t.data ? wx.request({
                        url: tywx.SystemInfo.loginUrl + "open/v3/user/processSnsIdNew",
                        data: {
                            snsId: t.data,
                            deviceName: "wechatGame",
                            clientId: tywx.SystemInfo.clientId,
                            appId: tywx.SystemInfo.appId
                        },
                        success: function(t) {
                            tywx.LOGD(null, "tuyoo login success, params:" + JSON.stringify(t));
                        },
                        fail: function(t) {
                            tywx.LOGD(null, "tuyoo login fail, params:" + JSON.stringify(t));
                        },
                        complete: function(t) {}
                    }) : tywx.TuyooSDK.wechatLogin();
                },
                fail: function(t) {
                    tywx.TuyooSDK.wechatLogin();
                },
                complete: function(t) {}
            });
        } catch (t) {
            tywx.LOGE("error:", "tywx.TuyooSDK.loginTuyooWith3rdSession——" + JSON.stringify(t));
        }
    },
    loginTuyooWithCode: function(t, e) {
        try {
            if (!tywx.IsWechatPlatform()) return;
            wx.showShareMenu({
                withShareTicket: !0
            });
            var n = e.gender || 0, o = tywx.Util.getLocalUUID();
            tywx.LOGD("local_uuid:", o);
            var r = tywx.SystemInfo.loginUrl, i = {
                appId: tywx.SystemInfo.appId,
                wxAppId: tywx.SystemInfo.wxAppId,
                clientId: tywx.SystemInfo.clientId,
                snsId: "wxapp:" + t,
                uuid: o,
                gender: n,
                scene_id: tywx.UserInfo.scene_id || "",
                scene_param: tywx.UserInfo.scene_param || "",
                invite_id: tywx.UserInfo.invite_id || 0
            };
            e && e.nickName && (i.nickName = e.nickName), e && e.avatarUrl && (i.avatarUrl = e.avatarUrl), 
            tywx.BiLog.clickStat(tywx.clickStatEventType.clickStatEventTypeLoginSDKStart, [ t, o, e.nickName ]), 
            wx.request({
                url: r + "open/v6/user/LoginBySnsIdNoVerify",
                header: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                data: i,
                method: "POST",
                success: function(n) {
                    tywx.LOGD(null, "tuyoo login success, params:" + JSON.stringify(n));
                    var r = n.data;
                    if (r.error && 1 == r.error.code || !r.result || !r.result.userId) return console.log("tuyoo login fail..."), 
                    void setTimeout(tywx.TuyooSDK.login, 200);
                    var i = r.result;
                    tywx.UserInfo.userId = i.userId, tywx.UserInfo.userName = i.userName, tywx.UserInfo.userPic = i.purl, 
                    tywx.UserInfo.authorCode = i.authorCode, tywx.UserInfo.wxgame_session_key = i.wxgame_session_key, 
                    tywx.UserInfo.wxgame_openid = i.wxgame_openid, tywx.UserInfo.isCreate = i.isCreate, 
                    tywx.LOGD(null, "userId:" + tywx.UserInfo.userId + " userName:" + tywx.UserInfo.userName + " userPic:" + tywx.UserInfo.userPic), 
                    tywx.UserInfo.userId && tywx.UserInfo.userName ? tywx.LOGE("TUYOO_SDK_LOGIN_SUCCESS", JSON.stringify(n)) : tywx.LOGE("TUYOO_SDK_LOGIN_FAIL", JSON.stringify(n));
                    var c = i.token;
                    tywx.LOGD(null, "token:" + c), wx.setStorage({
                        key: tywx.TuyooSDK.SESSION_KEY,
                        data: c
                    }), tywx.BiLog.clickStat(tywx.clickStatEventType.clickStatEventTypeLoginSDKSuccess, [ t, o, e.nickName, i.userId ]), 
                    tywx.showScene && tywx.showQuery && tywx.showQuery.sourceCode && tywx.BiLog.clickStat(tywx.clickStatEventType.clickStatEventTypeUserFrom, [ tywx.showScene, tywx.showQuery.inviteCode, tywx.showQuery.sourceCode, tywx.showQuery.imageType, "GameStart" ]), 
                    tywx.TuyooSDK.initWebSocketUrl(i), null != tywx.SystemInfo.webSocketUrl && "" != tywx.SystemInfo.webSocketUrl && tywx.TCPClient.connect(tywx.SystemInfo.webSocketUrl), 
                    tywx.NotificationCenter.trigger(tywx.EventType.SDK_LOGIN_SUCCESS), tywx.TuyooSDK.initUserInteractiveStorage();
                },
                fail: function(n) {
                    tywx.BiLog.clickStat(tywx.clickStatEventType.clickStatEventTypeLoginSDKFailed, [ t, o, e.nickName ]), 
                    tywx.LOGD(null, "tuyoo login fail, params:" + JSON.stringify(n)), tywx.LOGE("TUYOO_SDK_LOGIN_FAIL", JSON.stringify(n)), 
                    tywx.NotificationCenter.trigger(tywx.EventType.SDK_LOGIN_FAIL);
                },
                complete: function(t) {}
            });
        } catch (t) {
            tywx.LOGE("error:", "tywx.TuyooSDK.loginTuyooWithCode——" + JSON.stringify(t));
        }
    },
    initWebSocketUrl: function(t) {
        if (t && t.tcpsrv) {
            var e, n = t.tcpsrv.ip, o = t.tcpsrv.wsport || t.tcpsrv.port;
            e = tywx.SystemInfo.loginUrl.indexOf("https://") > -1 ? "wss://" + n + "/" : "ws://" + n + ":" + o.toString() + "/", 
            tywx.LOGD(null, "webSocketUrl:" + e), tywx.SystemInfo.webSocketUrl = e;
        }
    },
    getSystemInfo: function() {
        try {
            if (!tywx.IsWechatPlatform()) return;
            wx.getSystemInfo({
                success: function(t) {
                    var e = t.model.indexOf("iPhone") >= 0, n = t.windowHeight, o = t.windowWidth, r = 0;
                    if (e) r = 812 == n || 896 == n ? 2 : 736 == n ? 4 : 1; else {
                        r = 3;
                        var i = n / o;
                        i >= 1.99 && i <= 2 && (r = 5);
                    }
                    tywx.LOGE("手机屏幕适配:", "手机类型" + r + "长宽比：" + n / o), tywx.UserInfo.systemType = r, 
                    tywx.UserInfo.wechatType = t.version, tywx.UserInfo.model = t.model, tywx.UserInfo.system = t.system, 
                    tywx.UserInfo.sdkVersion = t.SDKVersion, console.error("基础库版本为:" + tywx.UserInfo.sdkVersion), 
                    tywx.BiLog.clickStat(tywx.clickStatEventType.clickStatEventTypeSubmitVersionInfo, [ t.version, t.SDKVersion, t.platform, t.system ]);
                },
                fail: function() {},
                complete: function() {}
            });
        } catch (t) {
            tywx.LOGE("error:", "tywx.TuyooSDK.getSystemInfo——" + JSON.stringify(t));
        }
    },
    wechatAuthorize: function() {
        try {
            if (!tywx.IsWechatPlatform()) return;
            wx.getSetting({
                success: function(t) {
                    t.authSetting["scope.userInfo"] ? tywx.NotificationCenter.trigger(tywx.EventType.START_AUTHORIZATION_SUCCESS) : (tywx.BiLog.clickStat(tywx.clickStatEventType.clickStatEventTypeAuthorizationStart, []), 
                    wx.authorize({
                        scope: "scope.userInfo",
                        success: function() {
                            tywx.BiLog.clickStat(tywx.clickStatEventType.clickStatEventTypeAuthorizationSuccess, []), 
                            tywx.NotificationCenter.trigger(tywx.EventType.START_AUTHORIZATION_SUCCESS);
                        },
                        fail: function() {
                            tywx.BiLog.clickStat(tywx.clickStatEventType.clickStatEventTypeAuthorizationFailed, []), 
                            tywx.NotificationCenter.trigger(tywx.EventType.START_AUTHORIZATION_FAILED);
                        },
                        complete: function() {}
                    }));
                }
            });
        } catch (t) {
            tywx.LOGE("error:", "tywx.TuyooSDK.wechatAuthorize——" + JSON.stringify(t));
        }
    },
    createOrder: function(t, e, n, o, r, i) {
        var c = {};
        c.prodId = t, c.prodPrice = e, c.chargeType = "wxapp.iap", c.gameId = tywx.SystemInfo.gameId, 
        c.prodName = n, c.prodCount = o, c.appInfo = i || {}, c.extraProdId = r || "", tywx.TuyooSDK.rechargeOrder(c);
    },
    orderCallFunc: function(t, e, n) {
        try {
            if (!tywx.IsWechatPlatform()) return;
            var o = tywx.Util.getLocalUUID();
            wx.request({
                url: t,
                header: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                data: {
                    userId: tywx.UserInfo.userId,
                    appId: tywx.SystemInfo.appId,
                    wxAppId: tywx.SystemInfo.wxAppId,
                    clientId: tywx.SystemInfo.clientId,
                    imei: "null",
                    uuid: o,
                    platformOrderId: e
                },
                method: "POST",
                success: function(t) {
                    tywx.LOGD("购买成功" + JSON.stringify(t));
                },
                fail: function(t) {
                    tywx.LOGE(null, "file = [Recharge] fun = [OrderCallFun] 充值失败 params = " + JSON.stringify(t));
                },
                complete: function(t) {}
            });
        } catch (t) {
            tywx.LOGE("error:", "tywx.TuyooSDK.orderCallFunc——" + JSON.stringify(t));
        }
    },
    rechargeOrder: function(t) {
        try {
            if (!tywx.IsWechatPlatform()) return;
            var e = tywx.Util.getLocalUUID(), n = tywx.SystemInfo.loginUrl, o = "hall37" == tywx.SystemInfo.hall_version ? n + "open/v4/pay/order" : n + "open/v5/pay/order";
            wx.request({
                url: o,
                header: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                data: {
                    userId: tywx.UserInfo.userId,
                    appId: tywx.SystemInfo.appId,
                    wxAppId: tywx.SystemInfo.wxAppId,
                    clientId: tywx.SystemInfo.clientId,
                    imei: "null",
                    uuid: e,
                    prodId: t.prodId,
                    prodName: t.prodName,
                    prodCount: t.prodCount || 1,
                    prodPrice: t.prodPrice,
                    chargeType: t.chargeType,
                    gameId: t.gameId,
                    appInfo: t.appInfo,
                    mustcharge: t.mustcharge || 1,
                    prodOrderId: t.extraProdId
                },
                method: "POST",
                success: function(t) {
                    tywx.LOGE(null, "tuyoo rechargeOrder success, params:" + JSON.stringify(t));
                    var e = t.data.result;
                    if (0 == e.code) {
                        var n = e.chargeInfo, o = n.chargeData, r = o.notifyUrl, i = o.platformOrderId;
                        tywx.LOGE(null, "tuyoo rechargeOrder success 创建订单成功, chargeData.mustcharge =" + o.mustcharge), 
                        o && 1 == o.mustcharge ? wx.requestMidasPayment({
                            mode: o.mode,
                            env: o.env,
                            offerId: o.offerId,
                            buyQuantity: 10 * n.chargeTotal,
                            platform: o.platform,
                            currencyType: "CNY",
                            zoneId: o.zoneId,
                            success: function(t) {
                                tywx.TuyooSDK.orderCallFunc(r, i, n.chargeCoin);
                            },
                            fail: function(e) {
                                tywx.LOGE(null, "米大师支付 fail params = " + JSON.stringify(t)), e.errCode && 1 == e.errCode && tywx.TuyooSDK.cancelOrder(i);
                            }
                        }) : o && 0 == o.mustcharge && tywx.TuyooSDK.orderCallFunc(r, i, n.chargeCoin);
                    } else 1 == e.code || e.code;
                },
                fail: function(t) {},
                complete: function(t) {}
            });
        } catch (t) {
            tywx.LOGE("error:", "tywx.TuyooSDK.rechargeOrder——" + JSON.stringify(t));
        }
    },
    cancelOrder: function(t) {
        try {
            var e = tywx.SystemInfo.loginUrl + "open/v4/pay/cancelorder", n = {
                platformOrderId: t,
                appId: tywx.SystemInfo.appId,
                userId: tywx.UserInfo.userId,
                clientId: tywx.SystemInfo.clientId,
                payType: "wxapp.iap"
            };
            wx.request({
                url: e,
                header: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                data: n,
                method: "POST",
                success: function(t) {
                    tywx.LOGE(null, "tuyoo cancelOrder success, params:" + JSON.stringify(t));
                },
                fail: function(t) {
                    tywx.LOGE(null, "tuyoo cancelOrder fail, params:" + JSON.stringify(t));
                },
                complete: function(t) {}
            });
        } catch (t) {
            tywx.LOGE("error:", "tywx.TuyooSDK.cancelOrder——" + JSON.stringify(t));
        }
    },
    getUserAreaInfo: function() {
        var t = tywx.SystemInfo.areaUrl + "api/iploc5/search/city";
        tywx.HttpUtil.httpGet({
            url: t
        }, function(t) {
            if (t && 1 === t.ok) {
                var e = t.loc;
                e && e.length > 3 && (tywx.LOGD("fengbing", " *--*-*-*-*-*  获取用户区域:  " + e[2]), 
                tywx.UserInfo.userArea = e[2]);
            }
        }, function(t) {});
    }
}, tywx.WechatInterfaceInit = function() {
    try {
        if (tywx.IsWechatPlatform()) {
            wx.onShow(function(t) {
                tywx.LOGE("", "+++++++++++++++++onShow+++++++++++++++++" + JSON.stringify(t));
                var e = t.scene, n = t.query, o = "";
                tywx.showScene = e, tywx.showQuery = n, tywx.UserInfo.scene_id = e, tywx.UserInfo.scene_param = n.from || "", 
                tywx.UserInfo.invite_id = n.inviteCode || 0, tywx.StateInfo.isOnForeground = !0, 
                tywx.NotificationCenter.trigger(tywx.EventType.GAME_SHOW, t);
                var r = tywx.Util.checkLocalUUID() ? 1 : 0;
                if (n && n.gdt_vid && n.weixinadinfo) {
                    var i = "gdt." + n.weixinadinfo;
                    tywx.UserInfo.scene_param = i, tywx.BiLog.clickStat(tywx.clickStatEventType.clickStatEventTypeUserFrom, [ e, i, r ]);
                } else if (n && n.sourceCode) tywx.BiLog.clickStat(tywx.clickStatEventType.clickStatEventTypeUserFrom, [ e, n.inviteCode, n.sourceCode, n.imageType, "CardActive", r ]); else if (n && n.shareMessageToFriendScene) switch (console.log("定向分享链接进入 scene" + n.shareMessageToFriendScene), 
                n.shareMessageToFriendScene + "") {
                  case "1":
                    wx.getOpenDataContext().postMessage({
                        message: JSON.stringify({
                            tag: "modifyFriendStorage",
                            scene: n.shareMessageToFriendScene
                        })
                    });
                } else tywx.Util.isSceneQrCode(e) ? (n.hasOwnProperty("scene") ? o = n.scene : t.hasOwnProperty("path") && (o = t.path), 
                o.replace(".html", ""), o = decodeURIComponent(o), tywx.UserInfo.scene_param = o, 
                tywx.BiLog.clickStat(tywx.clickStatEventType.clickStatEventTypeUserFrom, [ e, o, r ])) : tywx.BiLog.clickStat(tywx.clickStatEventType.clickStatEventTypeUserFrom, [ e, n.from, r ]);
                tywx.BiLog.clickStat(tywx.clickStatEventType.clickStatEventTypeOnShowTimeStampSubmit, []), 
                tywx.TuyooSDK.login(), tywx.AdManager && tywx.AdManager.onForeGround && tywx.AdManager.onForeGround();
            }), wx.onHide(function() {
                tywx.LOGE("", "+++++++++++++++++onHide+++++++++++++++++"), tywx.BiLog.clickStat(tywx.clickStatEventType.clickStatEventTypeOnHideTimeStampSubmit, []), 
                tywx.UserInfo.scene_id = 0, tywx.StateInfo.isOnForeground = !1, tywx.NotificationCenter.trigger(tywx.EventType.GAME_HIDE), 
                tywx.TCPClient.close();
            });
            var t = function(t) {
                t.hasOwnProperty("isConnected") ? tywx.StateInfo.networkConnected = t.isConnected : t.hasOwnProperty("errMsg") && (tywx.StateInfo.networkConnected = "getNetworkType:ok" == t.errMsg), 
                tywx.StateInfo.networkConnected = "none" != t.networkType, tywx.StateInfo.networkType = t.networkType, 
                console.log("=====66========getNetSuccess: " + JSON.stringify(t) + " : " + tywx.StateInfo.networkConnected);
            };
            wx.getNetworkType({
                success: t
            }), wx.onNetworkStatusChange(t), wx.onError(function(t) {
                var e = new Date(), n = "userId:" + tywx.UserInfo.userId + "time:" + e.toDateString() + " " + e.toTimeString() + ";" + t.message;
                tywx.BiLog.uploadLogTimely(n);
            });
        }
    } catch (t) {
        tywx.LOGE("error:", "tywx.WechatInterfaceInit——" + JSON.stringify(t));
    }
}, tywx.WechatInterfaceInit();