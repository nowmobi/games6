var _assertThisInitialized2 = arequire("../_babel/runtime/helpers/assertThisInitialized"),
    _toConsumableArray2 = arequire("../_babel/runtime/helpers/toConsumableArray"),
    _typeof2 = arequire("../_babel/runtime/helpers/typeof"),
    _classCallCheck2 = arequire("../_babel/runtime/helpers/classCallCheck"),
    _createClass2 = arequire("../_babel/runtime/helpers/createClass"),
    _get2 = arequire("../_babel/runtime/helpers/get"),
    _getPrototypeOf2 = arequire("../_babel/runtime/helpers/getPrototypeOf"),
    _inherits2 = arequire("../_babel/runtime/helpers/inherits"),
    _createSuper2 = arequire("../_babel/runtime/helpers/createSuper");
! function () {
    "use strict";

    function e() {
        if (!c)
            if (c = !0, t(Laya.LocalStorage.getJSON("VERSION")) != u.VERSION)
                for (var e in h) u[e] = u[e];
            else
                for (var i in h) {
                    var n = t(Laya.LocalStorage.getJSON(i));
                    u[i] = n || 0 === n ? n : u[i]
                }
    }

    function t(e) {
        if ("string" != typeof e) return e;
        try {
            var t = JSON.parse(e);
            return "object" == _typeof2(t) && t ? t : e
        } catch (t) {
            return e
        }
    }
    var i, n, a = Laya.View,
        o = Laya.ClassUtils.regClass;
    n = i || (i = {}),
        function (e) {
            var t = function (e) {
                function t() {
                    return _classCallCheck2(this, t), i.call(this)
                }
                _inherits2(t, e);
                var i = _createSuper2(t);
                return _createClass2(t, [{
                    key: "createChildren",
                    value: function () {
                        _get2(_getPrototypeOf2(t.prototype), "createChildren", this).call(this), this.loadScene("sdkviews/BannerBox")
                    }
                }]), t
            }(a);
            e.BannerBoxUI = t, o("ui.sdkviews.BannerBoxUI", t);
            var i = function (e) {
                function t() {
                    return _classCallCheck2(this, t), i.call(this)
                }
                _inherits2(t, e);
                var i = _createSuper2(t);
                return _createClass2(t, [{
                    key: "createChildren",
                    value: function () {
                        _get2(_getPrototypeOf2(t.prototype), "createChildren", this).call(this), this.loadScene("sdkviews/GeziBox")
                    }
                }]), t
            }(a);
            e.GeziBoxUI = i, o("ui.sdkviews.GeziBoxUI", i);
            var n = function (e) {
                function t() {
                    return _classCallCheck2(this, t), i.call(this)
                }
                _inherits2(t, e);
                var i = _createSuper2(t);
                return _createClass2(t, [{
                    key: "createChildren",
                    value: function () {
                        _get2(_getPrototypeOf2(t.prototype), "createChildren", this).call(this), this.loadScene("sdkviews/Remen")
                    }
                }]), t
            }(a);
            e.RemenUI = n, o("ui.sdkviews.RemenUI", n)
        }(n.sdkviews || (n.sdkviews = {})),
        function (e) {
            var t = function (e) {
                function t() {
                    return _classCallCheck2(this, t), i.call(this)
                }
                _inherits2(t, e);
                var i = _createSuper2(t);
                return _createClass2(t, [{
                    key: "createChildren",
                    value: function () {
                        _get2(_getPrototypeOf2(t.prototype), "createChildren", this).call(this), this.loadScene("views/view_Award")
                    }
                }]), t
            }(a);
            e.view_AwardUI = t, o("ui.view_AwardUI", t);
            var i = function (e) {
                function t() {
                    return _classCallCheck2(this, t), i.call(this)
                }
                _inherits2(t, e);
                var i = _createSuper2(t);
                return _createClass2(t, [{
                    key: "createChildren",
                    value: function () {
                        _get2(_getPrototypeOf2(t.prototype), "createChildren", this).call(this), this.loadScene("views/View_end")
                    }
                }]), t
            }(a);
            e.View_endUI = i, o("ui.View_endUI", i);
            var n = function (e) {
                function t() {
                    return _classCallCheck2(this, t), i.call(this)
                }
                _inherits2(t, e);
                var i = _createSuper2(t);
                return _createClass2(t, [{
                    key: "createChildren",
                    value: function () {
                        _get2(_getPrototypeOf2(t.prototype), "createChildren", this).call(this), this.loadScene("views/View_game")
                    }
                }]), t
            }(a);
            e.View_gameUI = n, o("ui.View_gameUI", n);
            var s = function (e) {
                function t() {
                    return _classCallCheck2(this, t), i.call(this)
                }
                _inherits2(t, e);
                var i = _createSuper2(t);
                return _createClass2(t, [{
                    key: "createChildren",
                    value: function () {
                        _get2(_getPrototypeOf2(t.prototype), "createChildren", this).call(this), this.loadScene("views/View_gameLoad")
                    }
                }]), t
            }(a);
            e.View_gameLoadUI = s, o("ui.View_gameLoadUI", s);
            var r = function (e) {
                function t() {
                    return _classCallCheck2(this, t), i.call(this)
                }
                _inherits2(t, e);
                var i = _createSuper2(t);
                return _createClass2(t, [{
                    key: "createChildren",
                    value: function () {
                        _get2(_getPrototypeOf2(t.prototype), "createChildren", this).call(this), this.loadScene("views/View_Garage")
                    }
                }]), t
            }(a);
            e.View_GarageUI = r, o("ui.View_GarageUI", r);
            var l = function (e) {
                function t() {
                    return _classCallCheck2(this, t), i.call(this)
                }
                _inherits2(t, e);
                var i = _createSuper2(t);
                return _createClass2(t, [{
                    key: "createChildren",
                    value: function () {
                        _get2(_getPrototypeOf2(t.prototype), "createChildren", this).call(this), this.loadScene("views/View_Level")
                    }
                }]), t
            }(a);
            e.View_LevelUI = l, o("ui.View_LevelUI", l);
            var h = function (e) {
                function t() {
                    return _classCallCheck2(this, t), i.call(this)
                }
                _inherits2(t, e);
                var i = _createSuper2(t);
                return _createClass2(t, [{
                    key: "createChildren",
                    value: function () {
                        _get2(_getPrototypeOf2(t.prototype), "createChildren", this).call(this), this.loadScene("views/View_loading")
                    }
                }]), t
            }(a);
            e.View_loadingUI = h, o("ui.View_loadingUI", h);
            var c = function (e) {
                function t() {
                    return _classCallCheck2(this, t), i.call(this)
                }
                _inherits2(t, e);
                var i = _createSuper2(t);
                return _createClass2(t, [{
                    key: "createChildren",
                    value: function () {
                        _get2(_getPrototypeOf2(t.prototype), "createChildren", this).call(this), this.loadScene("views/View_main")
                    }
                }]), t
            }(a);
            e.View_mainUI = c, o("ui.View_mainUI", c);
            var u = function (e) {
                function t() {
                    return _classCallCheck2(this, t), i.call(this)
                }
                _inherits2(t, e);
                var i = _createSuper2(t);
                return _createClass2(t, [{
                    key: "createChildren",
                    value: function () {
                        _get2(_getPrototypeOf2(t.prototype), "createChildren", this).call(this), this.loadScene("views/View_OffLine")
                    }
                }]), t
            }(a);
            e.View_OffLineUI = u, o("ui.View_OffLineUI", u);
            var d = function (e) {
                function t() {
                    return _classCallCheck2(this, t), i.call(this)
                }
                _inherits2(t, e);
                var i = _createSuper2(t);
                return _createClass2(t, [{
                    key: "createChildren",
                    value: function () {
                        _get2(_getPrototypeOf2(t.prototype), "createChildren", this).call(this), this.loadScene("views/View_Repair")
                    }
                }]), t
            }(a);
            e.View_RepairUI = d, o("ui.View_RepairUI", d);
            var y = function (e) {
                function t() {
                    return _classCallCheck2(this, t), i.call(this)
                }
                _inherits2(t, e);
                var i = _createSuper2(t);
                return _createClass2(t, [{
                    key: "createChildren",
                    value: function () {
                        _get2(_getPrototypeOf2(t.prototype), "createChildren", this).call(this), this.loadScene("views/View_Set")
                    }
                }]), t
            }(a);
            e.View_SetUI = y, o("ui.View_SetUI", y);
            var f = function (e) {
                function t() {
                    return _classCallCheck2(this, t), i.call(this)
                }
                _inherits2(t, e);
                var i = _createSuper2(t);
                return _createClass2(t, [{
                    key: "createChildren",
                    value: function () {
                        _get2(_getPrototypeOf2(t.prototype), "createChildren", this).call(this), this.loadScene("views/View_SetDriving")
                    }
                }]), t
            }(a);
            e.View_SetDrivingUI = f, o("ui.View_SetDrivingUI", f);
            var g = function (e) {
                function t() {
                    return _classCallCheck2(this, t), i.call(this)
                }
                _inherits2(t, e);
                var i = _createSuper2(t);
                return _createClass2(t, [{
                    key: "createChildren",
                    value: function () {
                        _get2(_getPrototypeOf2(t.prototype), "createChildren", this).call(this), this.loadScene("views/View_shop")
                    }
                }]), t
            }(a);
            e.View_shopUI = g, o("ui.View_shopUI", g);
            var v = function (e) {
                function t() {
                    return _classCallCheck2(this, t), i.call(this)
                }
                _inherits2(t, e);
                var i = _createSuper2(t);
                return _createClass2(t, [{
                    key: "createChildren",
                    value: function () {
                        _get2(_getPrototypeOf2(t.prototype), "createChildren", this).call(this), this.loadScene("views/View_Sign")
                    }
                }]), t
            }(a);
            e.View_SignUI = v, o("ui.View_SignUI", v);
            var m = function (e) {
                function t() {
                    return _classCallCheck2(this, t), i.call(this)
                }
                _inherits2(t, e);
                var i = _createSuper2(t);
                return _createClass2(t, [{
                    key: "createChildren",
                    value: function () {
                        _get2(_getPrototypeOf2(t.prototype), "createChildren", this).call(this), this.loadScene("views/View_Skin")
                    }
                }]), t
            }(a);
            e.View_SkinUI = m, o("ui.View_SkinUI", m);
            var p = function (e) {
                function t() {
                    return _classCallCheck2(this, t), i.call(this)
                }
                _inherits2(t, e);
                var i = _createSuper2(t);
                return _createClass2(t, [{
                    key: "createChildren",
                    value: function () {
                        _get2(_getPrototypeOf2(t.prototype), "createChildren", this).call(this), this.loadScene("views/View_tip")
                    }
                }]), t
            }(a);
            e.View_tipUI = p, o("ui.View_tipUI", p);
            var w = function (e) {
                function t() {
                    return _classCallCheck2(this, t), i.call(this)
                }
                _inherits2(t, e);
                var i = _createSuper2(t);
                return _createClass2(t, [{
                    key: "createChildren",
                    value: function () {
                        _get2(_getPrototypeOf2(t.prototype), "createChildren", this).call(this), this.loadScene("views/View_Zhuan")
                    }
                }]), t
            }(a);
            e.View_ZhuanUI = w, o("ui.View_ZhuanUI", w)
        }(i || (i = {}));
    var s = new(function () {
            function e() {
                _classCallCheck2(this, e), this.eventDispatcher = new Laya.EventDispatcher
            }
            return _createClass2(e, [{
                key: "emit",
                value: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    return this.eventDispatcher.event(e, [t])
                }
            }, {
                key: "on",
                value: function (e, t, i, n) {
                    this.eventDispatcher.on(e, t, i, n)
                }
            }, {
                key: "once",
                value: function (e, t, i, n) {
                    this.eventDispatcher.once(e, t, i, n)
                }
            }, {
                key: "off",
                value: function (e, t, i) {
                    this.eventDispatcher.off(e, t, i)
                }
            }, {
                key: "offAll",
                value: function (e) {
                    this.eventDispatcher.offAllCaller(e)
                }
            }]), e
        }()),
        r = function e() {
            _classCallCheck2(this, e)
        };
    r.isFristTime = !0, r.GameType = "", r.shareTime = 0, r.showGoldViewTime = 0, r.firstEnterLoading = !0, r.passLoading = !0, r.enterCityMode = !0, r.enterLicenseMode = !0, r.enterTrainMode = !0;
    var l = new(function () {
            function e() {
                _classCallCheck2(this, e), this.FrameEmit = {
                    SetLocalData: "FrameEmit_SetLocalData",
                    GetLocalData: "FrameEmit_GetLocalData",
                    ShowUI: "FrameEmit_ShowUI",
                    HideUI: "FrameEmit_HideUI",
                    RemoveUI: "FrameEmit_RemoveUI"
                }, this.FrameOn = {
                    StartGame: "FrameOn_StartGame",
                    GameOver: "FrameOn_GameOver"
                }, this.UpdateGold = "UpdateGold", this.UpdateEnergy = "UpdateEnergy", this.Game_AddNeng = "Game_AddNeng"
            }
            return e
        }()),
        h = {
            VERSION: "tingche4",
            SDK_LOGIN: !1,
            SDK_ROLE: !1,
            drivingType: 1,
            drivingView: 0,
            isAuto: 1,
            NormalLevel: 1,
            LicenseLevel: 1,
            CityLevel: 1,
            zhuanCount: 0,
            carData: {
                use: 0,
                have: [0]
            },
            lastUse: 0,
            durability: [5],
            gold: 1e3,
            power: 10,
            isOnePlay: 0,
            videoNum: 0,
            signTime: 0,
            signDay: 0,
            zhuanTime: 0,
            offTime: 0,
            OnlineTime: 0,
            unlockFree: 0
        },
        c = !1,
        u = new Proxy(h, {
            get: function (t, i) {
                return e(), s.emit(l.FrameEmit.GetLocalData, [i]), t[i]
            },
            set: function (t, i, n) {
                var a;
                return Reflect.set(t, i, n), Laya.LocalStorage.setJSON(i, "object" == _typeof2(a = n) ? JSON.stringify(a) : a), s.emit(l.FrameEmit.SetLocalData, [i, n]), e(), !0
            }
        }),
        d = new(function () {
            function e() {
                _classCallCheck2(this, e), this.Config = {
                    allowMistouch: 0,
                    sceneList: "1095",
                    channel_ditch: 0,
                    version: 0,
                    loadingVideo: 0,
                    showRemen: 0,
                    remenBanner: 0,
                    gridBoxVideo: 0,
                    gridBox: 0,
                    homepageVideo: 0,
                    startVideo: 0,
                    showVitualWx: 0,
                    bannerBox: 0,
                    startRemen: 0,
                    endRemen: 30,
                    homeBanner_time: 0,
                    endBanner: 0,
                    delay_play_count: 0,
                    delay_play_countBanner: 0,
                    delay_play_countVideo: 0,
                    refresh_banner_time: 0,
                    updateBanner: 0,
                    remenBanner_count: 0,
                    "Regional shielding": 0,
                    RegionalShielding: 0,
                    is_vip: 1,
                    Advertising_free_privilege: 2,
                    remenBanner_count1: 1,
                    Video_viewing_times: 2,
                    Scene_value_mask: "1095",
                    Regional_shielding: "Bei Jing",
                    video_banner: 0,
                    startGridBox: 0,
                    endGridBox: 0,
                    Skin_video: 0,
                    GameGrid: 0,
                    GameBanner: 0,
                    Refresh_video_banner: 0,
                    video_rewards: 0,
                    Refresh_video_rewards: 30,
                    video_banner2: 1,
                    Interface1: 1,
                    Interface2: 1,
                    Interface3: 1,
                    Banner_pull: 5
                }, this.Ad = {
                    ad_banner: [],
                    ad_videos: []
                }
            }
            return e
        }()),
        y = new(function () {
            function e() {
                _classCallCheck2(this, e)
            }
            return _createClass2(e, [{
                key: "getPlatform",
                get: function () {
                    return Laya.Browser.window.qq && "function" == typeof Laya.Browser.window.qq.getSystemInfoSync && Laya.Browser.window.qq.getSystemInfoSync().benchmarkLevel ? "qq" : Laya.Browser.window.tt && "function" == typeof Laya.Browser.window.tt.getSystemInfoSync && Laya.Browser.window.tt.getSystemInfoSync().safeArea ? "tt" : Laya.Browser.window.wx && "function" == typeof Laya.Browser.window.wx.getSystemInfoSync && Laya.Browser.window.wx.getSystemInfoSync().benchmarkLevel ? "wx" : Laya.Browser.onVVMiniGame ? "vivo" : Laya.Browser.onQGMiniGame ? "oppo" : "other"
                }
            }, {
                key: "showTips",
                value: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
                        i = new Laya.Label(e);
                    i.centerX = 0, i.centerY = 0, i.fontSize = 40, i.font = "Microsoft YaHei", i.color = "#ffffff", i.align = "center", i.valign = "middle", i.bgColor = "#00000099", i.padding = "20,50,20,50", i.zOrder = 99, i.mouseEnabled = !0, Laya.stage.addChild(i), Laya.Tween.to(i, {
                        centerY: -200
                    }, 2500), Laya.Tween.to(i, {
                        alpha: 0
                    }, 1500, null, null, 1e3), Laya.timer.once(1e3 * t, this, function () {
                        i.removeSelf(), i.destroy()
                    })
                }
            }, {
                key: "getRandom",
                value: function (e, t) {
                    if (e == t) return e;
                    var i = Math.random();
                    return Math.floor(i * t + (1 - i) * e + i)
                }
            }]), e
        }()),
        f = function () {
            function e() {
                _classCallCheck2(this, e)
            }
            return _createClass2(e, null, [{
                key: "getSystemInfoSync",
                value: function () {
                    if (Laya.Browser.onWeiXin) return this.sysInfo || (this.sysInfo = window.wx.getSystemInfoSync()), this.sysInfo
                }
            }, {
                key: "initGridAd",
                value: function () {
                    Laya.Browser.onWeiXin && (this.createFullGrid1(), this.createFullGrid2())
                }
            }, {
                key: "initBannerADIndex",
                value: function () {
                    var e = Laya.LocalStorage.getItem("Parking-ACE-3D-indexData");
                    e ? (this.startIndex = Number(e.split("_")[0]), Number(e.split("_")[1]) != (new Date).getDate() && (this.startIndex += 5, this.startIndex > d.Ad.ad_banner.length - 5 && (this.startIndex = 0), Laya.LocalStorage.setItem("Parking-ACE-3D-indexData", "".concat(this.startIndex, "_").concat((new Date).getDate())))) : Laya.LocalStorage.setItem("Parking-ACE-3D-indexData", "".concat(this.startIndex, "_").concat((new Date).getDate()))
                }
            }, {
                key: "initAd",
                value: function () {
                    var e = this;
                    if (Laya.Browser.onWeiXin) {
                        var t;
                        if (d.Ad.ad_banner && d.Ad.ad_banner.length) {
                            this.bannerIdArr = [], t = d.Ad.ad_banner;
                            for (var i = 0; i < t.length; i++) this.bannerIdArr.push(t[i]);
                            console.log("bannerIdArr", this.bannerIdArr)
                        }
                        this.initBanner(), this.createVideoAd(), this.createBottomSingleGrid1(), this.createBottomSingleGrid2(), this.createBottomSingleGrid3(), this.createBottomSingleGrid4(), wx.onHide(function () {
                            r.shareTime = 0, e.outTime = Date.now(), console.log(e.outTime, "outTime")
                        }), wx.onShow(function () {
                            e.isShare && (e.isShare = !1, Date.now() - e.outTime > 3e3 ? (u.gold += 1e3, y.showTips("获得1000金币"), s.emit("updateGold")) : y.showTips("分享失败,请重新分享"))
                        })
                    }
                }
            }, {
                key: "initBanner",
                value: function () {
                    if (Laya.Browser.onWeiXin) {
                        for (var e = 0; e < d.Config.Banner_pull; e++) this.bannerTimesArr.push(0), this.bannerShowCount.push(0), this.bannerErrorArr.push(!1);
                        for (var t = 0; t < this.bannerIdArr.length; t++) {
                            var i = this.createBannerAd(t);
                            this.bannerAds.push(i)
                        }
                        console.log("this.bannerAds", this.bannerAds)
                    }
                }
            }, {
                key: "isAllBannerError",
                get: function () {
                    for (var e = !0, t = 0; t < this.bannerErrorArr.length; t++)
                        if (!this.bannerErrorArr[t]) {
                            e = !1;
                            break
                        } return e
                }
            }, {
                key: "initVideoBanner",
                value: function () {
                    var t = this;
                    console.log("init video banner"), Laya.Scene.load("sdkviews/BannerBox.scene", Laya.Handler.create(this, function (i) {
                        i ? (t.videoBanner = i.getChildByName("videoBanner"), t.videoBanner && (console.log("video banner load success"), Laya.stage.addChildren(t.videoBanner), t.videoBanner.zOrder = 99, t.videoBanner.on(Laya.Event.CLICK, t, function () {
                            e.showVideo(function (e) {
                                e && (u.gold += 1e3, y.showTips("恭喜获得1000金币"))
                            })
                        }))) : console.error("Banner box sccene laod fail")
                    }))
                }
            }, {
                key: "showBanner",
                value: function () {
                    Laya.Browser.onWeiXin && (this.isAllBannerError ? this.stopCountBannerTime() : (this.bannerAds[this.bannerIndex] && !this.bannerErrorArr[this.bannerIndex] && (console.log("banner".concat(this.bannerIndex, "曝光")), this.bannerAds[this.bannerIndex].show()), de.canTrapAll && (this.stopCountBannerTime(), Laya.timer.loop(1e3, this, this.countBannerTime))))
                }
            }, {
                key: "hideBanner",
                value: function () {
                    Laya.Browser.onWeiXin && ("wx" != y.getPlatform || this.isAllBannerError ? this.stopCountBannerTime() : (this.bannerAds[this.bannerIndex] && this.bannerAds[this.bannerIndex].hide(), this.stopCountBannerTime()))
                }
            }, {
                key: "countBannerTime",
                value: function () {
                    this.bannerTimesArr[this.bannerIndex] += 1, this.showTime++, this.bannerTimesArr[this.bannerIndex] >= d.Config.refresh_banner_time && (this.bannerAds[this.bannerIndex] && this.bannerAds[this.bannerIndex].hide(), this.bannerTimesArr[this.bannerIndex] = 0, this.bannerShowCount[this.bannerIndex]++, console.log("banner".concat(this.bannerIndex, "曝光次数"), this.bannerShowCount[this.bannerIndex]), this.bannerShowCount[this.bannerIndex] % d.Config.updateBanner == 0 && (console.log("banner".concat(this.bannerIndex, "销毁重建")), this.bannerAds[this.bannerIndex] && this.bannerAds[this.bannerIndex].destroy(), this.bannerAds[this.bannerIndex] = null, this.bannerAds[this.bannerIndex] = this.createBannerAd(this.bannerIndex)), this.bannerIndex++, this.showBanner())
                }
            }, {
                key: "stopCountBannerTime",
                value: function () {
                    Laya.timer.clear(this, this.countBannerTime)
                }
            }, {
                key: "createBannerAd",
                value: function (e) {
                    var t = this,
                        i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (Laya.Browser.onWeiXin) {
                        var n = this.getSystemInfoSync(),
                            a = Laya.Browser.window.wx.createBannerAd({
                                adUnitId: this.bannerIdArr[e],
                                style: {
                                    top: .8 * n.screenHeight,
                                    width: 300,
                                    left: n.screenWidth / 2 - 150
                                },
                                adIntervals: 30
                            });
                        return a.onLoad(function () {
                            i && a.show(), t.bannerErrorArr[e] = !1, console.log("Banner广告加载成功")
                        }), a.onError(function (i) {
                            t.bannerErrorArr[e] = !0, console.error("Banner广告加载失败", JSON.stringify(i))
                        }), a.onResize(function (e) {
                            var t = a.style.realHeight + .1;
                            a.style.top = n.screenHeight - t
                        }), a
                    }
                }
            }, {
                key: "createVideoAd",
                value: function () {
                    function e() {
                        console.log("video 加载成功"), a.isExistVideoAd = !0
                    }

                    function t(e) {
                        console.error("video 加载错误", e), this.videoCallback && this.videoCallback(!1), y.showTips("视频加载失败，请稍后重试"), a.isExistVideoAd = !1
                    }

                    function i(e) {
                        !!(e && e.isEnded || void 0 === e) && (a.videoCallback && a.videoCallback(!0), a.videoCallback = null), a.videoCallback && a.videoCallback(!1), a.videoCallback = null
                    }
                    if (Laya.Browser.onWeiXin) {
                        var n, a = this;
                        null != (n = this.videoAd) && (n.offLoad(e), n.offError(t), n.offClose(i)), (n = Laya.Browser.window.wx.createRewardedVideoAd({
                            adUnitId: a.videoIds
                        })).onLoad(e), n.onError(t), n.onClose(i), this.videoAd = n
                    }
                }
            }, {
                key: "showVideo",
                value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    if ("wx" == y.getPlatform) {
                        if (this.videoCallback = e, this.isExistVideoAd || this.createVideoAd(), Laya.Browser.onWeiXin) {
                            var t = this.videoAd;
                            t.show().then(function () {}).catch(function (i) {
                                t.load().then(function () {
                                    return t.show()
                                }).catch(function (t) {
                                    e && e(!1), y.showTips("视频播放失败，请稍后重试")
                                })
                            })
                        }
                    } else e && e(!0)
                }
            }, {
                key: "destroyVideoAd",
                value: function () {
                    this.videoAd && (this.videoAd.destroy(), this.videoAd = null)
                }
            }, {
                key: "createFullGrid",
                value: function () {
                    var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    Laya.Browser.onWeiXin && (this.fullGridAd = Laya.Browser.window.wx.createCustomAd({
                        adUnitId: this.fullGridIds,
                        adIntervals: 30,
                        style: {
                            left: this.getSystemInfoSync().screenWidth / 2 - (this.getSystemInfoSync().screenWidth / 4 - 50),
                            top: 5,
                            width: this.getSystemInfoSync().screenWidth / 2 - 200
                        }
                    }), this.fullGridAd.onError(function (t) {
                        e.fullGridError = !0, console.log("全屏格子加载失败", t)
                    }), this.fullGridAd.onLoad(function () {
                        e.fullGridError = !1, console.log("全屏格子加载成功", e.fullGridAd), t && e.fullGridAd.show()
                    }))
                }
            }, {
                key: "visibleFullGridAd",
                value: function () {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    Laya.Browser.onWeiXin && this.fullGridAd && !this.fullGridError ? e ? this.fullGridAd.show() : this.fullGridAd.hide() : this.createFullGrid(e)
                }
            }, {
                key: "shareGame",
                value: function () {
                    console.log("share"), Laya.Browser.onMiniGame && (wx.shareAppMessage({}), this.isShare = !0)
                }
            }, {
                key: "createFullGrid1",
                value: function () {
                    var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    console.log("width  = ", this.getSystemInfoSync().screenWidth);
                    var i = this.getSystemInfoSync().screenWidth < 812 ? 110 : 95;
                    Laya.Browser.onWeiXin && (this.fullGridAd1 = Laya.Browser.window.wx.createCustomAd({
                        adUnitId: this.fullGridIds,
                        adIntervals: 30,
                        style: {
                            left: this.getSystemInfoSync().screenWidth / 4 - i,
                            top: 10,
                            width: this.getSystemInfoSync().screenWidth / 4
                        }
                    }), this.fullGridAd1.onError(function (t) {
                        e.fullGridError1 = !0, console.log("全屏格子1加载失败", t)
                    }), this.fullGridAd1.onLoad(function () {
                        e.fullGridError1 = !1, console.log("全屏格子1加载成功"), t && e.fullGridAd1.show()
                    }))
                }
            }, {
                key: "visibleFullGridAd1",
                value: function () {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    Laya.Browser.onWeiXin && this.fullGridAd1 && !this.fullGridError1 ? e ? this.fullGridAd1.show() : this.fullGridAd1.hide() : this.createFullGrid1(e)
                }
            }, {
                key: "createFullGrid2",
                value: function () {
                    var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        i = this.getSystemInfoSync().screenWidth < 812 ? 20 : 5;
                    Laya.Browser.onWeiXin && (this.fullGridAd2 = Laya.Browser.window.wx.createCustomAd({
                        adUnitId: this.fullGridIds,
                        adIntervals: 30,
                        style: {
                            left: this.getSystemInfoSync().screenWidth / 2 + i,
                            top: 10,
                            width: this.getSystemInfoSync().screenWidth / 4
                        }
                    }), this.fullGridAd2.onError(function (t) {
                        e.fullGridError2 = !0, console.log("全屏格子2加载失败", t)
                    }), this.fullGridAd2.onLoad(function () {
                        e.fullGridError2 = !1, console.log("全屏格子2加载成功"), t && e.fullGridAd2.show()
                    }))
                }
            }, {
                key: "visibleFullGridAd2",
                value: function () {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    Laya.Browser.onWeiXin && (Laya.Browser.onWeiXin && this.fullGridAd2 && !this.fullGridError2 ? e ? this.fullGridAd2.show() : this.fullGridAd2.hide() : this.createFullGrid2(e))
                }
            }, {
                key: "createLeftGrid",
                value: function () {
                    var e = this;
                    arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    "wx" == y.getPlatform && (this.leftSideGridAd = Laya.Browser.window.wx.createCustomAd({
                        adUnitId: this.sideGridIds,
                        adIntervals: 30,
                        style: {
                            left: 10,
                            top: 60
                        },
                        gridCount: 3
                    }), this.leftSideGridAd.onError(function (t) {
                        e.leftSideGridError = !0, console.log("左侧多格子加载失败", t)
                    }), this.leftSideGridAd.onLoad(function () {
                        e.leftSideGridError = !1, console.log("左侧多格子加载成功")
                    }))
                }
            }, {
                key: "visibleLeftGrid",
                value: function () {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    "wx" == y.getPlatform && this.leftSideGridAd && !this.leftSideGridError ? e ? this.leftSideGridAd.show() : this.leftSideGridAd.hide() : this.createLeftGrid(e)
                }
            }, {
                key: "createRightGrid",
                value: function () {
                    var e = this;
                    arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    "wx" == y.getPlatform && (this.rightSideGridAd = Laya.Browser.window.wx.createCustomAd({
                        adUnitId: this.sideGridIds,
                        adIntervals: 30,
                        style: {
                            left: this.getSystemInfoSync().screenWidth - 85,
                            top: 60
                        }
                    }), this.rightSideGridAd.onError(function (t) {
                        e.rightSideGridError = !0, console.log("右侧多格子加载失败", t)
                    }), this.rightSideGridAd.onLoad(function () {
                        e.rightSideGridError = !1, console.log("右侧多格子加载成功")
                    }))
                }
            }, {
                key: "visibleRightGrid",
                value: function () {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    "wx" == y.getPlatform && this.rightSideGridAd && !this.rightSideGridError ? e ? this.rightSideGridAd.show() : this.rightSideGridAd.hide() : this.createRightGrid(e)
                }
            }, {
                key: "createLeftSingleGrid",
                value: function () {
                    var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    "wx" == y.getPlatform && (this.leftSingleGridAd = Laya.Browser.window.wx.createCustomAd({
                        adUnitId: this.singleGridId1,
                        adIntervals: 30,
                        style: {
                            left: 120,
                            top: 60
                        }
                    }), this.leftSingleGridAd.onError(function (t) {
                        e.leftSingleGridError = !0, console.log("主界面左侧单格子加载失败", t)
                    }), this.leftSingleGridAd.onLoad(function () {
                        e.leftSingleGridError = !1, console.log("主界面左侧单格子加载成功")
                    }), t && this.leftSingleGridAd.show())
                }
            }, {
                key: "visibleSingleGridAdLeft",
                value: function () {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    "wx" == y.getPlatform && this.leftSingleGridAd && !this.leftSingleGridError ? e ? this.leftSingleGridAd.show() : this.leftSingleGridAd.hide() : this.createLeftSingleGrid(e)
                }
            }, {
                key: "createRightSingleGrid",
                value: function () {
                    var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    "wx" == y.getPlatform && (this.rightSingleGridAd = Laya.Browser.window.wx.createCustomAd({
                        adUnitId: this.singleGridId1,
                        adIntervals: 30,
                        style: {
                            left: this.getSystemInfoSync().screenWidth - 70,
                            top: 80
                        }
                    }), this.rightSingleGridAd.onError(function (t) {
                        e.rightSingleGridError = !0, console.log("主界面右侧单格子加载失败", t)
                    }), this.rightSingleGridAd.onLoad(function () {
                        e.rightSingleGridError = !1, console.log("主界面右侧单格子加载成功")
                    }), t && this.rightSingleGridAd.show())
                }
            }, {
                key: "visibleSingleGridAdRight",
                value: function () {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    "wx" == y.getPlatform && this.rightSingleGridAd && !this.rightSingleGridError ? e ? this.rightSingleGridAd.show() : this.rightSingleGridAd.hide() : this.createRightSingleGrid(e)
                }
            }, {
                key: "createLeftSingleGrid1",
                value: function () {
                    var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    "wx" == y.getPlatform && (this.leftSingleGridAd1 = Laya.Browser.window.wx.createCustomAd({
                        adUnitId: this.singleGridId3,
                        adIntervals: 30,
                        style: {
                            left: 30,
                            top: 80
                        }
                    }), this.leftSingleGridAd1.onError(function (t) {
                        e.leftSingleGridError1 = !0, console.log("等级界面单格子加载失败", t)
                    }), this.leftSingleGridAd1.onLoad(function () {
                        e.leftSingleGridError1 = !1, console.log("等级界面单格子加载成功")
                    }), t && this.leftSingleGridAd1.show())
                }
            }, {
                key: "visibleSingleGridAdLeft1",
                value: function () {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    "wx" == y.getPlatform && this.leftSingleGridAd1 && !this.leftSingleGridError1 ? e ? this.leftSingleGridAd1.show() : this.leftSingleGridAd1.hide() : this.createLeftSingleGrid1(e)
                }
            }, {
                key: "createRightSingleGrid1",
                value: function () {
                    var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    "wx" == y.getPlatform && (this.rightSingleGridAd1 = Laya.Browser.window.wx.createCustomAd({
                        adUnitId: this.singleGridId4,
                        adIntervals: 30,
                        style: {
                            left: this.getSystemInfoSync().screenWidth - 70,
                            top: 50
                        }
                    }), this.rightSingleGridAd1.onError(function (t) {
                        e.rightSingleGridError1 = !0, console.log("游戏界面单格子加载失败", t)
                    }), this.rightSingleGridAd1.onLoad(function () {
                        e.rightSingleGridError1 = !1, console.log("游戏界面单格子加载成功")
                    }), t && this.rightSingleGridAd1.show())
                }
            }, {
                key: "visibleSingleGridAdRight1",
                value: function () {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    "wx" == y.getPlatform && this.rightSingleGridAd1 && !this.rightSingleGridError1 ? e ? this.rightSingleGridAd1.show() : this.rightSingleGridAd1.hide() : this.createRightSingleGrid1(e)
                }
            }, {
                key: "ShowBottomSingleGrid",
                value: function () {
                    this.visibleSingleGridAdBottom1(), this.visibleSingleGridAdBottom2()
                }
            }, {
                key: "HideBottomSingleGrid",
                value: function () {
                    this.visibleSingleGridAdBottom1(!1), this.visibleSingleGridAdBottom2(!1)
                }
            }, {
                key: "ShowBottomSingleGrid1",
                value: function () {
                    this.visibleSingleGridAdBottom3(), this.visibleSingleGridAdBottom4()
                }
            }, {
                key: "HideBottomSingleGrid1",
                value: function () {
                    this.visibleSingleGridAdBottom3(!1), this.visibleSingleGridAdBottom4(!1)
                }
            }, {
                key: "createBottomSingleGrid1",
                value: function () {
                    var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    "wx" == y.getPlatform && (this.bottomSingleGridAd1 = Laya.Browser.window.wx.createCustomAd({
                        adUnitId: this.singleGridId1,
                        adIntervals: 30,
                        style: {
                            left: this.getSystemInfoSync().screenWidth / 2 - 55,
                            top: .8 * this.getSystemInfoSync().screenHeight
                        }
                    }), this.bottomSingleGridAd1.onError(function (t) {
                        e.bottomSingleGridError1 = !0, console.log("底部单格子1加载失败", t)
                    }), this.bottomSingleGridAd1.onLoad(function () {
                        e.bottomSingleGridError1 = !1, console.log("底部单格子1加载成功")
                    }), t && this.bottomSingleGridAd1.show())
                }
            }, {
                key: "visibleSingleGridAdBottom1",
                value: function () {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    "wx" == y.getPlatform && this.bottomSingleGridAd1 && !this.bottomSingleGridError1 ? e ? this.bottomSingleGridAd1.show() : this.bottomSingleGridAd1.hide() : this.createBottomSingleGrid1(e)
                }
            }, {
                key: "createBottomSingleGrid2",
                value: function () {
                    var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    "wx" == y.getPlatform && (this.bottomSingleGridAd2 = Laya.Browser.window.wx.createCustomAd({
                        adUnitId: this.singleGridId1,
                        adIntervals: 30,
                        style: {
                            left: this.getSystemInfoSync().screenWidth / 2 + 5,
                            top: .8 * this.getSystemInfoSync().screenHeight
                        }
                    }), this.bottomSingleGridAd2.onError(function (t) {
                        e.bottomSingleGridError2 = !0, console.log("底部单格子2加载失败", t)
                    }), this.bottomSingleGridAd2.onLoad(function () {
                        e.bottomSingleGridError2 = !1, console.log("底部单格子2加载成功")
                    }), t && this.bottomSingleGridAd2.show())
                }
            }, {
                key: "visibleSingleGridAdBottom2",
                value: function () {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    "wx" == y.getPlatform && this.bottomSingleGridAd2 && !this.bottomSingleGridError2 ? e ? this.bottomSingleGridAd2.show() : this.bottomSingleGridAd2.hide() : this.createBottomSingleGrid2(e)
                }
            }, {
                key: "createBottomSingleGrid3",
                value: function () {
                    var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    "wx" == y.getPlatform && (this.bottomSingleGridAd3 = Laya.Browser.window.wx.createCustomAd({
                        adUnitId: this.singleGridId3,
                        adIntervals: 30,
                        style: {
                            left: this.getSystemInfoSync().screenWidth / 2 - 55,
                            top: .8 * this.getSystemInfoSync().screenHeight
                        }
                    }), this.bottomSingleGridAd3.onError(function (t) {
                        e.bottomSingleGridError3 = !0, console.log("底部单格子3加载失败", t)
                    }), this.bottomSingleGridAd3.onLoad(function () {
                        e.bottomSingleGridError3 = !1, console.log("底部单格子3加载成功")
                    }), t && this.bottomSingleGridAd3.show())
                }
            }, {
                key: "visibleSingleGridAdBottom3",
                value: function () {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    "wx" == y.getPlatform && this.bottomSingleGridAd3 && !this.bottomSingleGridError3 ? e ? this.bottomSingleGridAd3.show() : this.bottomSingleGridAd3.hide() : this.createBottomSingleGrid3(e)
                }
            }, {
                key: "createBottomSingleGrid4",
                value: function () {
                    var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    "wx" == y.getPlatform && (this.bottomSingleGridAd4 = Laya.Browser.window.wx.createCustomAd({
                        adUnitId: this.singleGridId4,
                        adIntervals: 30,
                        style: {
                            left: this.getSystemInfoSync().screenWidth / 2 + 5,
                            top: .8 * this.getSystemInfoSync().screenHeight
                        }
                    }), this.bottomSingleGridAd4.onError(function (t) {
                        e.bottomSingleGridError4 = !0, console.log("底部单格子4加载失败", t)
                    }), this.bottomSingleGridAd4.onLoad(function () {
                        e.bottomSingleGridError4 = !1, console.log("底部单格子4加载成功")
                    }), t && this.bottomSingleGridAd4.show())
                }
            }, {
                key: "visibleSingleGridAdBottom4",
                value: function () {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    "wx" == y.getPlatform && this.bottomSingleGridAd4 && !this.bottomSingleGridError4 ? e ? this.bottomSingleGridAd4.show() : this.bottomSingleGridAd4.hide() : this.createBottomSingleGrid4(e)
                }
            }]), e
        }();
    f.wuchuProgressValue = 0, f.wuchuProgressStepAdd = .1, f.wuchuProgressFrameSub = .0032, f.gameCount = 1, f.bannerIdArr = ["adunit-9bf8dc8122e03746", "adunit-d3091e710da3cef1", "adunit-871d2ae4a77ac66c", "adunit-d205398b8ba4ca04", "adunit-22642f125b12ade3"], f.videoIds = "adunit-95478b7024c08bc0", f.fullGridIds = "adunit-2c7bbbbe494d0908", f.sideGridIds = "adunit-8d00bbc069d10ba5", f.singleGridId1 = "adunit-82ecb9652b3146c0", f.singleGridId2 = "adunit-2a5aabd205195cfe", f.singleGridId3 = "adunit-d74428a29cd5bdf8", f.singleGridId4 = "adunit-66a09ef732a44302", f.ishideBannerAd = !1, f.fullGridReLoadTime = 0, f.fullGridReLoadTime1 = 0, f.fullGridReLoadTime2 = 0, f.isShowing = !1, f.startIndex = 0, f.canShowBanner = !0, f.showTime = 0, f.bannerAds = [], f.bannerIndex = 0, f.bannerTimesArr = [], f.bannerShowCount = [], f.bannerErrorArr = [], f.isExistVideoAd = !1, f.fullGridAd = null, f.fullGridError = !1, f.fullGridAd1 = null, f.fullGridAd2 = null, f.leftSideGridAd = null, f.leftSideGridError = !1, f.rightSideGridError = !1, f.leftSingleGridError = !1, f.rightSingleGridError = !1, f.leftSingleGridError1 = !1, f.rightSingleGridError1 = !1, f.bottomSingleGridError1 = !1, f.bottomSingleGridError2 = !1, f.bottomSingleGridError3 = !1, f.bottomSingleGridError4 = !1;
    var g = {
            "bgm.mp3": "res/sound/bgm.mp3",
            "brake.mp3": "res/sound/brake.mp3",
            "btn.mp3": "res/sound/btn.mp3",
            "coin.mp3": "res/sound/coin.mp3",
            "Crash.mp3": "res/sound/Crash.mp3",
            "engine.mp3": "res/sound/engine.mp3",
            "fail.mp3": "res/sound/fail.mp3",
            "light.mp3": "res/sound/light.mp3",
            "trumpet.mp3": "res/sound/trumpet.mp3",
            "vehicle.mp3": "res/sound/vehicle.mp3",
            "win.mp3": "res/sound/win.mp3",
            "SampleSceneGIReflection.ltcb.ls": "res/game3d/LayaScene_SampleScene/Conventional/Assets/Scenes/SampleSceneGIReflection.ltcb.ls",
            "SampleScene.ls": "res/game3d/LayaScene_SampleScene/Conventional/SampleScene.ls",
            "CityMode.lh": "res/game3d/LayaScene_SampleScene/Conventional/CityMode.lh",
            "CityScene.lh": "res/game3d/LayaScene_SampleScene/Conventional/CityScene.lh",
            "LicenseMode.lh": "res/game3d/LayaScene_SampleScene/Conventional/LicenseMode.lh",
            "LicenseScene.lh": "res/game3d/LayaScene_SampleScene/Conventional/LicenseScene.lh",
            "MainScene.lh": "res/game3d/LayaScene_SampleScene/Conventional/MainScene.lh",
            "NormalMode.lh": "res/game3d/LayaScene_SampleScene/Conventional/NormalMode.lh",
            "NormalScene.lh": "res/game3d/LayaScene_SampleScene/Conventional/NormalScene.lh",
            "pointTo.lh": "res/game3d/LayaScene_SampleScene/Conventional/pointTo.lh",
            "skin0.lh": "res/game3d/LayaScene_SampleScene/Conventional/skin0.lh",
            "skin1.lh": "res/game3d/LayaScene_SampleScene/Conventional/skin1.lh",
            "skin10.lh": "res/game3d/LayaScene_SampleScene/Conventional/skin10.lh",
            "skin11.lh": "res/game3d/LayaScene_SampleScene/Conventional/skin11.lh",
            "skin12.lh": "res/game3d/LayaScene_SampleScene/Conventional/skin12.lh",
            "skin13.lh": "res/game3d/LayaScene_SampleScene/Conventional/skin13.lh",
            "skin14.lh": "res/game3d/LayaScene_SampleScene/Conventional/skin14.lh",
            "skin15.lh": "res/game3d/LayaScene_SampleScene/Conventional/skin15.lh",
            "skin16.lh": "res/game3d/LayaScene_SampleScene/Conventional/skin16.lh",
            "skin17.lh": "res/game3d/LayaScene_SampleScene/Conventional/skin17.lh",
            "skin18.lh": "res/game3d/LayaScene_SampleScene/Conventional/skin18.lh",
            "skin19.lh": "res/game3d/LayaScene_SampleScene/Conventional/skin19.lh",
            "skin2.lh": "res/game3d/LayaScene_SampleScene/Conventional/skin2.lh",
            "skin3.lh": "res/game3d/LayaScene_SampleScene/Conventional/skin3.lh",
            "skin4.lh": "res/game3d/LayaScene_SampleScene/Conventional/skin4.lh",
            "skin5.lh": "res/game3d/LayaScene_SampleScene/Conventional/skin5.lh",
            "skin6.lh": "res/game3d/LayaScene_SampleScene/Conventional/skin6.lh",
            "skin7.lh": "res/game3d/LayaScene_SampleScene/Conventional/skin7.lh",
            "skin8.lh": "res/game3d/LayaScene_SampleScene/Conventional/skin8.lh",
            "skin9.lh": "res/game3d/LayaScene_SampleScene/Conventional/skin9.lh"
        },
        v = new Proxy({
            "bgm.mp3": null,
            "brake.mp3": null,
            "btn.mp3": null,
            "coin.mp3": null,
            "Crash.mp3": null,
            "engine.mp3": null,
            "fail.mp3": null,
            "light.mp3": null,
            "trumpet.mp3": null,
            "vehicle.mp3": null,
            "win.mp3": null,
            "SampleSceneGIReflection.ltcb.ls": null,
            "SampleScene.ls": null,
            "CityMode.lh": null,
            "CityScene.lh": null,
            "LicenseMode.lh": null,
            "LicenseScene.lh": null,
            "MainScene.lh": null,
            "NormalMode.lh": null,
            "NormalScene.lh": null,
            "pointTo.lh": null,
            "skin0.lh": null,
            "skin1.lh": null,
            "skin10.lh": null,
            "skin11.lh": null,
            "skin12.lh": null,
            "skin13.lh": null,
            "skin14.lh": null,
            "skin15.lh": null,
            "skin16.lh": null,
            "skin17.lh": null,
            "skin18.lh": null,
            "skin19.lh": null,
            "skin2.lh": null,
            "skin3.lh": null,
            "skin4.lh": null,
            "skin5.lh": null,
            "skin6.lh": null,
            "skin7.lh": null,
            "skin8.lh": null,
            "skin9.lh": null
        }, {
            get: function (e, t, i) {
                var n = Laya.loader.getRes(g[t]);
                return n || null
            }
        }),
        m = new(function () {
            function e() {
                _classCallCheck2(this, e), this.PackageLoadNum = 0, this.GetResState = 0, this.ResList = [], this.IsInit = !1
            }
            return _createClass2(e, [{
                key: "ResState",
                value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                        n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                        a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
                    e || (e = []), Laya.loader.create(e, Laya.Handler.create(t, i), Laya.Handler.create(t, n), null, null, null, a, !0)
                }
            }, {
                key: "loadPackage",
                value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        i = arguments.length > 2 ? arguments[2] : void 0,
                        n = arguments.length > 3 ? arguments[3] : void 0;
                    e || (e = []), "function" != typeof i && (i = function () {}), "function" != typeof n && (n = function () {}), i = i.bind(t), n = n.bind(t);
                    var a = 0,
                        o = 0,
                        s = [];
                    ! function t() {
                        if ("wx" == me.getPlatform) {
                            var i = function e() {
                                s[n] >= .95 ? Laya.timer.clear(m, e) : s[n] >= .75 ? s[n] += .005 : s[n] += .01
                            };
                            if (a >= e.length) return;
                            var n = a;
                            s[n] = 0, Laya.Browser.window.wx.loadSubpackage({
                                name: e[n],
                                success: function () {
                                    var t = "分包[" + e[n] + "]加载成功";
                                    console.info("%c" + t, "color: #43bb88;font-size: 10px;"), o++, s[n] = 1
                                },
                                fail: function (t) {
                                    var i = "分包[" + e[n] + "]加载失败";
                                    console.error("%c" + i, "color: red;font-size: 14px;font-weight: bold;", t), s[n] = 1
                                }
                            }), Laya.timer.loop(100, m, i), a++, t()
                        } else if ("qq" == me.getPlatform) {
                            var r = function e() {
                                s[l] >= .95 ? Laya.timer.clear(m, e) : s[l] >= .75 ? s[l] += .005 : s[l] += .01
                            };
                            if (a >= e.length) return;
                            var l = a;
                            s[l] = 0, Laya.Browser.window.qq.loadSubpackage({
                                name: e[l],
                                success: function () {
                                    var i = "分包[" + e[l] + "]加载成功";
                                    console.info("%c" + i, "color: #43bb88;font-size: 10px;"), o++, s[l] = 1, a++, t()
                                },
                                fail: function (i) {
                                    var n = "分包[" + e[l] + "]加载失败";
                                    console.error("%c" + n, "color: red;font-size: 14px;font-weight: bold;", i), s[l] = 1, a++, t()
                                }
                            }), Laya.timer.loop(100, m, r)
                        } else if ("oppo" == me.getPlatform || "vivo" == me.getPlatform) {
                            var h = function e() {
                                s[c] >= .95 ? Laya.timer.clear(m, e) : s[c] >= .75 ? s[c] += .005 : s[c] += .01
                            };
                            if (a >= e.length) return;
                            var c = a;
                            s[c] = 0, Laya.Browser.window.qg.loadSubpackage({
                                name: e[c],
                                success: function () {
                                    var i = "分包[" + e[c] + "]加载成功";
                                    console.info("%c" + i, "color: #43bb88;font-size: 10px;"), o++, s[c] = 1, a++, t()
                                },
                                fail: function (i) {
                                    var n = "分包[" + e[c] + "]加载失败";
                                    console.error("%c" + n, "color: red;font-size: 14px;font-weight: bold;", i), s[c] = 1, a++, t()
                                }
                            }), Laya.timer.loop(100, m, h)
                        } else {
                            var u = function e() {
                                s[d] >= .95 ? Laya.timer.clear(m, e) : s[d] >= .75 ? s[d] += .005 : s[d] += .01
                            };
                            if (a >= e.length) return;
                            var d = a;
                            s[d] = 0, o++, s[d] = 1, Laya.timer.loop(100, m, u), a++, t()
                        }
                    }(), Laya.timer.loop(100, m, function t() {
                        var a = 0;
                        s.forEach(function (e) {
                            a += e
                        }), a /= e.length, n(a), a >= 1 && (i(o == e.length), Laya.timer.clear(m, t))
                    })
                }
            }]), e
        }()),
        p = new(function () {
            function e() {
                _classCallCheck2(this, e), this._IsOpenMusic = !0, this._isStop = !1, this._IsOpenAudio = !0, this._IsZhen = !0, this.music = null, this.musicUrl = "", this.tt = 0, this._alwayZhen = !1, this._alwayT = 0, this._alwayNum = .2
            }
            return _createClass2(e, [{
                key: "Update",
                value: function () {}
            }, {
                key: "IsOpenMusic",
                get: function () {
                    return this._IsOpenMusic
                },
                set: function (e) {
                    1 == e ? this.music = Laya.SoundManager.playMusic(this.musicUrl, 0) : Laya.SoundManager.stopAll(), this._IsOpenMusic = e
                }
            }, {
                key: "isStop",
                get: function () {
                    return this._isStop
                },
                set: function (e) {
                    e ? (Laya.SoundManager.stopAll(), this.IsOpenAudio = !1, this.IsOpenMusic = !1, this.IsZhen = !1) : (this.init(), this.IsOpenAudio = !0, this.IsOpenMusic = !0, this.IsZhen = !0)
                }
            }, {
                key: "IsOpenAudio",
                get: function () {
                    return this._IsOpenAudio
                },
                set: function (e) {
                    this._IsOpenAudio = e
                }
            }, {
                key: "IsZhen",
                get: function () {
                    return this._IsZhen
                },
                set: function (e) {
                    this._IsZhen = e
                }
            }, {
                key: "init",
                value: function () {
                    var e = this;
                    m.ResState([g["bgm.mp3"]], this, function (t) {
                        1 == t && (console.log("播放bgm"), e.PlayMusic("bgm"))
                    })
                }
            }, {
                key: "PlayMusic",
                value: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ".mp3";
                    console.log("ssss:", this._IsOpenMusic), 1 == this._IsOpenMusic && (this.musicUrl = "res/sound/" + e + t, this.music = Laya.SoundManager.playMusic("res/sound/" + e + t, 0))
                }
            }, {
                key: "PlayAudio",
                value: function (e) {
                    arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ".mp3";
                    1 == this._IsOpenAudio && Laya.SoundManager.playSound("res/sound/" + e + t)
                }
            }, {
                key: "StopAudio",
                value: function (e) {
                    Laya.SoundManager.stopSound("res/sound/" + e + o)
                }
            }, {
                key: "StopAll",
                value: function () {
                    Laya.SoundManager.stopAll()
                }
            }, {
                key: "zhen",
                value: function () {
                    "other" != me.getPlatform && this.IsZhen && ("wx" == me.getPlatform ? wx.vibrateShort() : "vivo" == me.getPlatform || "oppo" == me.getPlatform ? Laya.Browser.window.qg.vibrateShort() : "tt" == me.getPlatform && Laya.Browser.window.tt.vibrateShort())
                }
            }, {
                key: "zhen2",
                value: function () {
                    "wx" == me.getPlatform || "qq" == me.getPlatform ? this._IsZhen && wx.vibrateLong() : "vivo" == me.getPlatform || "oppo" == me.getPlatform ? Laya.Browser.window.qg.vibrateLong() : "tt" == me.getPlatform && Laya.Browser.window.tt.vibrateLong()
                }
            }, {
                key: "alwayZhen",
                value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : .2;
                    this._alwayZhen = !0, this._alwayNum = e
                }
            }, {
                key: "stopAlwayZhen",
                value: function () {
                    this._alwayZhen = !1
                }
            }]), e
        }()),
        w = function e() {
            _classCallCheck2(this, e)
        };
    w.scale = "scale", w.color = "color", w.normal = "normal";
    var S = function e() {
        _classCallCheck2(this, e)
    };
    S.scale = "scale_", S.letf = "letf_", S.right = "right_", S.top = "top_", S.bottom = "bottom_";
    var k, L, C, _, b, A, I, B, M = function e(t, i) {
            _classCallCheck2(this, e), this.ty = "", this.obj = null, this.ty = t, this.obj = i
        },
        T = {
            btnType: w,
            util: new(function () {
                function e() {
                    _classCallCheck2(this, e), this.guideContainer = null, this.guideStep = 0, this.unHitcircle = null, this.drawCircle = null, this.data = null
                }
                return _createClass2(e, [{
                    key: "viewAuto",
                    value: function (e) {
                        e.width = Laya.stage.width, e.height = Laya.stage.height
                    }
                }, {
                    key: "on",
                    value: function (e, t, i) {
                        arguments.length > 3 && void 0 !== arguments[3] && arguments[3], arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                        t.anchorX = t.anchorY = .5, p.PlayAudio("btn"), t.on(Laya.Event.CLICK, this, function (t) {
                            t.stopPropagation(), i.apply(e)
                        }), t.on(Laya.Event.MOUSE_DOWN, this, function () {}), t.on(Laya.Event.MOUSE_UP, this, function () {}), t.on(Laya.Event.MOUSE_OUT, this, function () {})
                    }
                }, {
                    key: "drawMaskInit",
                    value: function () {
                        this.guideContainer = new Laya.Sprite, this.guideContainer.cacheAs = "bitmap", Laya.stage.addChild(this.guideContainer);
                        var e = new Laya.Sprite;
                        e.alpha = .5, e.graphics.drawRect(0, 0, Laya.stage.width, Laya.stage.height, "#000000"), this.guideContainer.addChild(e), this.interactionArea = new Laya.Sprite, this.interactionArea.blendMode = "destination-out", this.guideContainer.addChild(this.interactionArea), this.hitArea = new Laya.HitArea, this.hitArea.hit.drawRect(0, 0, Laya.stage.width, Laya.stage.height, "#000000"), this.guideContainer.hitArea = this.hitArea, this.guideContainer.mouseEnabled = !0
                    }
                }, {
                    key: "RemoveDrawMask",
                    value: function () {
                        null != this.guideContainer && this.guideContainer.removeSelf()
                    }
                }, {
                    key: "drawMask",
                    value: function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            i = this.posToWorld(e);
                        if (null == this.guideContainer && this.drawMaskInit(), this.guideContainer.visible = !0, this.data = {
                                x: i.x,
                                y: i.y,
                                radius: e.width
                            }, this.hitArea.unHit.clear(), this.unHitcircle = this.hitArea.unHit.drawCircle(this.data.x, this.data.y, this.data.radius, "#000000"), this.interactionArea.graphics.clear(), this.drawCircle = this.interactionArea.graphics.drawCircle(this.data.x, this.data.y, this.data.radius, "#000000"), null != t) {
                            var n = this.posToWorld(t);
                            this.guideContainer.addChild(t), t.x = n.x, t.y = n.y
                        }
                    }
                }, {
                    key: "posToWorld",
                    value: function (e) {
                        var t = this.getParent(e);
                        return t.x += e.x, t.y += e.y, t
                    }
                }, {
                    key: "posToLocal",
                    value: function (e, t) {
                        var i = this.getParent(e);
                        return i.x = t.x - i.x, i.y = t.y - i.y, i
                    }
                }, {
                    key: "getParent",
                    value: function (e) {
                        for (var t = !0, i = e, n = 0, a = 0; t;) {
                            var o = 0;
                            i.parent.pivotX && (o = i.parent.pivotX);
                            var s = 0;
                            i.parent.pivotY && (s = i.parent.pivotY), n += i.parent._x - o, a += i.parent._y - s, (i = i.parent) == Laya.stage && (t = !1)
                        }
                        return {
                            x: n,
                            y: a
                        }
                    }
                }, {
                    key: "ShowTip",
                    value: function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                        fe.ShowUI(ge, {
                            sumT: t,
                            info: e
                        })
                    }
                }, {
                    key: "ShowViewEff",
                    value: function (e, t) {
                        for (var i = this, n = this.GetAllNode(e), a = function (e) {
                                var a = n[e].obj,
                                    o = n[e].ty,
                                    s = e;
                                if (o == S.scale) {
                                    if (null == a.scaleX) return s == n.length - 1 && null != t && t(), "continue";
                                    a.scaleX = 0, a.scaleY = 0, Laya.Tween.to(a, {
                                        scaleX: 1,
                                        scaleY: 1
                                    }, 500, Laya.Ease.backInOut, Laya.Handler.create(i, function () {
                                        s == n.length - 1 && null != t && t()
                                    }))
                                } else if (o == S.letf || o == S.right) {
                                    var r = 1;
                                    o == S.right && (r = -r);
                                    var l = "x";
                                    if (Number.isNaN(a.left))
                                        if (Number.isNaN(a.right))
                                            if (Number.isNaN(a.centerX)) {
                                                if (!Number.isNaN(a.x)) {
                                                    var h = a[l = "x"];
                                                    a[l] = h - 750 * r, Laya.Tween.to(a, {
                                                        x: h
                                                    }, 500, Laya.Ease.backInOut, Laya.Handler.create(i, function () {
                                                        s == n.length - 1 && null != t && t()
                                                    }))
                                                }
                                            } else {
                                                var c = a[l = "centerX"];
                                                a[l] = c - 750 * r, Laya.Tween.to(a, {
                                                    centerX: c
                                                }, 500, Laya.Ease.backInOut, Laya.Handler.create(i, function () {
                                                    s == n.length - 1 && null != t && t()
                                                }))
                                            }
                                    else {
                                        r = -r;
                                        var u = a[l = "right"];
                                        a[l] = u - 750 * r, Laya.Tween.to(a, {
                                            right: u
                                        }, 500, Laya.Ease.backInOut, Laya.Handler.create(i, function () {
                                            s == n.length - 1 && null != t && t()
                                        }))
                                    } else {
                                        var d = a[l = "left"];
                                        a[l] = d - 750 * r, Laya.Tween.to(a, {
                                            left: d
                                        }, 500, Laya.Ease.backInOut, Laya.Handler.create(i, function () {
                                            s == n.length - 1 && null != t && t()
                                        }))
                                    }
                                } else if (o == S.top || o == S.bottom) {
                                    var y = 1;
                                    o == S.right && (y = -y);
                                    var f = "y";
                                    if (Number.isNaN(a.top))
                                        if (Number.isNaN(a.bottom))
                                            if (Number.isNaN(a.centerY)) {
                                                if (!Number.isNaN(a.y)) {
                                                    var g = a[f = "y"];
                                                    a[f] = g - 1334 * y, Laya.Tween.to(a, {
                                                        y: g
                                                    }, 500, Laya.Ease.backInOut, Laya.Handler.create(i, function () {
                                                        s == n.length - 1 && null != t && t()
                                                    }))
                                                }
                                            } else {
                                                var v = a[f = "centerY"];
                                                a[f] = v - 1334 * y, Laya.Tween.to(a, {
                                                    centerY: v
                                                }, 500, Laya.Ease.backInOut, Laya.Handler.create(i, function () {
                                                    s == n.length - 1 && null != t && t()
                                                }))
                                            }
                                    else {
                                        y = -y;
                                        var m = a[f = "bottom"];
                                        a[f] = m - 1334 * y, Laya.Tween.to(a, {
                                            bottom: m
                                        }, 500, Laya.Ease.backInOut, Laya.Handler.create(i, function () {
                                            s == n.length - 1 && null != t && t()
                                        }))
                                    } else {
                                        var p = a[f = "top"];
                                        a[f] = p - 1334 * y, Laya.Tween.to(a, {
                                            top: p
                                        }, 500, Laya.Ease.backInOut, Laya.Handler.create(i, function () {
                                            s == n.length - 1 && null != t && t()
                                        }))
                                    }
                                }
                            }, o = 0; o < n.length; o++) a(o)
                    }
                }, {
                    key: "GetAllNode",
                    value: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                        if (null != e) {
                            new Array;
                            return this.GetObjAll(e)
                        }
                    }
                }, {
                    key: "GetObjAll",
                    value: function (e) {
                        for (var t = new Array, i = 0; i < e.numChildren; i++)
                            if (-1 != e.getChildAt(i).name.indexOf("scale_") ? t.push(new M("scale_", e.getChildAt(i))) : -1 != e.getChildAt(i).name.indexOf("left_") ? t.push(new M("left_", e.getChildAt(i))) : -1 != e.getChildAt(i).name.indexOf("right_") ? t.push(new M("right_", e.getChildAt(i))) : -1 != e.getChildAt(i).name.indexOf("top_") ? t.push(new M("top_", e.getChildAt(i))) : -1 != e.getChildAt(i).name.indexOf("bottom_") && t.push(new M("bottom_", e.getChildAt(i))), e.getChildAt(i).numChildren > 0) {
                                var n = this.GetObjAll(e.getChildAt(i));
                                t.push.apply(t, _toConsumableArray2(n))
                            } return t
                    }
                }]), e
            }())
        };
    B = k || (k = {}), B.NormalMode = "NormalMode", B.LicenseMode = "LicenseMode", B.CityMode = "CityMode", I = L || (L = {}), I.UpdateGold = "UpdateGold", I.UpdateDurability = "UpdateDurability", A = C || (C = {}), A[A.FLOOR = 0] = "FLOOR", A[A.CAR_BODY = 1] = "CAR_BODY", A[A.CAR_WHEEL = 2] = "CAR_WHEEL", A[A.Traffic_Light = 3] = "Traffic_Light", A[A.Cylinder = 4] = "Cylinder", b = _ || (_ = {}), b[b.Group0 = 1] = "Group0", b[b.Group1 = 2] = "Group1";
    var G = function (e) {
        function t() {
            return _classCallCheck2(this, t), i.apply(this, arguments)
        }
        _inherits2(t, e);
        var i = _createSuper2(t);
        return _createClass2(t, [{
            key: "onAwake",
            value: function () {
                YYGGames.gameBanner.visible ? this.getChildAt(1).top = 30 : this.getChildAt(1).top = 140, T.util.on(this, this.backBtn, function (e) {
                    fe.RemoveUI(t)
                }, Laya.Event.MOUSE_UP, T.btnType.scale), T.util.on(this, this.videoBtn, function (e) {
                    YYGGames.showReward(() => {
                        u.gold += 1e3, y.showTips("Get 1000 coins"), s.emit(L.UpdateGold), fe.RemoveUI(t)
                    }, () => {}, "get coin")
                }, Laya.Event.MOUSE_UP, T.btnType.scale)
            }
        }]), t
    }(i.view_AwardUI);
    G.NAME = "view_Award", G.AUTO = !0, G.DATA = null;
    var x = {
            levelConfig: {
                NormalMode: 20,
                CityMode: 10,
                LicenseMode: 4
            },
            NormalMode: [180, 180, 180, 180],
            CarConfig: [{
                name: "Hornet",
                grade: 3,
                durability: 5,
                unlockType: 1
            }, {
                name: "Seagull",
                grade: 3,
                durability: 5,
                unlockType: 1
            }, {
                name: "Red Leaf",
                grade: 3,
                durability: 5,
                unlockType: 1
            }, {
                name: "Green Leaf",
                grade: 3,
                durability: 5,
                unlockType: 1
            }, {
                name: "Cheetah",
                grade: 3,
                durability: 5,
                unlockType: 1
            }, {
                name: "Castle",
                grade: 3,
                durability: 5,
                unlockType: 1
            }, {
                name: "Hardboiled",
                grade: 3,
                durability: 5,
                unlockType: 1
            }, {
                name: "Defender",
                grade: 3,
                durability: 5,
                unlockType: 1
            }, {
                name: "Dirt",
                grade: 4,
                durability: 8,
                unlockType: 1
            }, {
                name: "Typhon",
                grade: 4,
                durability: 8,
                unlockType: 2
            }, {
                name: "Guard",
                grade: 4,
                durability: 8,
                unlockType: 2
            }, {
                name: "Destination",
                grade: 4,
                durability: 8,
                unlockType: 2
            }, {
                name: "White Wave",
                grade: 4,
                durability: 8,
                unlockType: 2
            }, {
                name: "Talent Yellow",
                grade: 5,
                durability: 12,
                unlockType: 2
            }, {
                name: "Talent Blue",
                grade: 5,
                durability: 12,
                unlockType: 2
            }, {
                name: "Talent White",
                grade: 5,
                durability: 12,
                unlockType: 2
            }]
        },
        E = {
            GameObject: function (e) {
                function t() {
                    var e;
                    return _classCallCheck2(this, t), e = i.call(this), e._gameObject = null, e._transform = null, e._rigidbody = null, e._material = null, e
                }
                _inherits2(t, e);
                var i = _createSuper2(t);
                return _createClass2(t, [{
                    key: "onAwake",
                    value: function () {
                        this.initAll()
                    }
                }, {
                    key: "gameObject",
                    get: function () {
                        return null == this._gameObject && (this._gameObject = this.owner), this._gameObject
                    }
                }, {
                    key: "transform",
                    get: function () {
                        return null == this._transform && (this._gameObject = this.owner, this._transform = this.gameObject.transform), this._transform
                    }
                }, {
                    key: "material",
                    get: function () {
                        return null == this._material && this.getMat(), this._material
                    }
                }, {
                    key: "initAll",
                    value: function () {
                        this._gameObject = this.owner, this._transform = this.gameObject.transform, this.getMat()
                    }
                }, {
                    key: "getMat",
                    value: function () {
                        var e = this.owner;
                        if (null != e && null != e.meshRenderer && (this._material = e.meshRenderer.material, null == this._material)) {
                            var t = this.owner;
                            this._material = t.skinnedMeshRenderer.material
                        }
                    }
                }, {
                    key: "onDestroy",
                    value: function () {
                        s.offAll(this)
                    }
                }, {
                    key: "GetByName",
                    value: function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                        if (null != t) {
                            var i = null;
                            if (t.name == e) return t;
                            var n = t;
                            return null != (i = this.GetObjAll(n, e)) ? i : null
                        }
                        t = this.owner
                    }
                }, {
                    key: "GetObjAll",
                    value: function (e, t) {
                        for (var i = null, n = 0; n < e.numChildren; n++) {
                            if (t == e.getChildAt(n).name) {
                                i = e.getChildAt(n);
                                break
                            }
                            if (null == i && e.getChildAt(n).numChildren > 0 && null != (i = this.GetObjAll(e.getChildAt(n), t))) break
                        }
                        return i
                    }
                }]), t
            }(Laya.Script3D)
        },
        P = new(function () {
            function e() {
                _classCallCheck2(this, e), this.ProjectDistanceVec = new Laya.Vector3, this.DirAngleV = new Laya.Vector2, this.NoInverseTransformPoint = new Laya.Vector3, this.m3x3 = []
            }
            return _createClass2(e, [{
                key: "radian",
                value: function (e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    return 1 == t ? e * (Math.PI / 180) : e * (180 / Math.PI)
                }
            }, {
                key: "dirToAngle",
                value: function (e, t) {
                    var i = 0;
                    return 0 == e ? i = 180 : (i = Math.atan(t / e), i = this.radian(i, !1), 180 == (i = e > 0 ? -(i + 90) : 90 - i) ? i = 0 : 0 == i && (i = 180)), i
                }
            }, {
                key: "AngleToDir",
                value: function (e) {
                    var t = P.radian(e);
                    return {
                        x: Math.sin(t),
                        z: Math.cos(t)
                    }
                }
            }, {
                key: "ProjectDistance",
                value: function (e, t, i) {
                    var n = this.ProjectDistanceVec;
                    Laya.Vector3.subtract(e, t, n);
                    var a = this.Angle2(n, i) * Math.PI / 180,
                        o = Laya.Vector3.distance(e, t);
                    return o * Math.cos(a)
                }
            }, {
                key: "ProjectDistanceV2",
                value: function (e, t) {
                    var i = t.x * t.x + t.y * t.y,
                        n = Math.sqrt(i);
                    return Laya.Vector2.dot(e, t) / n
                }
            }, {
                key: "Angle2",
                value: function (e, t) {
                    var i = (e.x * t.x + e.y * t.y + e.z * t.z) / (Math.sqrt(e.x * e.x + e.y * e.y + e.z * e.z) * Math.sqrt(t.x * t.x + t.y * t.y + t.z * t.z));
                    return i < -1 && (i = -1), i > 1 && (i = 1), 180 * Math.acos(i) / Math.PI
                }
            }, {
                key: "Angle",
                value: function (e, t) {
                    if (0 == e.x && 0 == e.y || 0 == t.x && 0 == t.y) return 0;
                    var i = (e.x * t.x + e.y * t.y) / (Math.sqrt(e.x * e.x + e.y * e.y) * Math.sqrt(t.x * t.x + t.y * t.y));
                    return i < -1 && (i = -1), i > 1 && (i = 1), 180 * Math.acos(i) / Math.PI
                }
            }, {
                key: "rotatePos",
                value: function (e, t, i) {
                    arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    var n = this.radian(i),
                        a = (e.x - t.x) * Math.cos(n) - (e.z - t.z) * Math.sin(n) + t.x;
                    return e.y, t.y, Math.sin(n), e.y, t.y, Math.sin(n), t.x, {
                        x: a,
                        z: (e.x - t.x) * Math.sin(n) + (e.z - t.z) * Math.cos(n) + t.z
                    }
                }
            }, {
                key: "DirAngle",
                value: function (e, t) {
                    this.DirAngleV.x = -e.y, this.DirAngleV.y = e.x;
                    var i = this.Angle(e, t);
                    return 0 < Laya.Vector2.dot(this.DirAngleV, t) && (i = 360 - i), i
                }
            }, {
                key: "InverseTransformPoint",
                value: function (e, t) {
                    e.getRight(this.NoInverseTransformPoint);
                    var i = this.ProjectDistance(t, e.position, this.NoInverseTransformPoint);
                    e.getUp(this.NoInverseTransformPoint);
                    var n = this.ProjectDistance(t, e.position, this.NoInverseTransformPoint),
                        a = this.NoInverseTransformPoint;
                    e.getForward(a), this.NoInverseTransformPoint.x = -a.x, this.NoInverseTransformPoint.y = -a.y, this.NoInverseTransformPoint.z = -a.z;
                    var o = this.ProjectDistance(t, e.position, this.NoInverseTransformPoint);
                    return this.NoInverseTransformPoint.x = i / e.getWorldLossyScale().x, this.NoInverseTransformPoint.y = n / e.getWorldLossyScale().y, this.NoInverseTransformPoint.z = o / e.getWorldLossyScale().z, this.NoInverseTransformPoint
                }
            }, {
                key: "TransformPoint",
                value: function (e, t) {
                    return Laya.Vector3.transformQuat(t, e.rotation, this.NoInverseTransformPoint), Laya.Vector3.add(this.NoInverseTransformPoint, e.position, this.NoInverseTransformPoint), this.NoInverseTransformPoint
                }
            }, {
                key: "WorldToScreen2",
                value: function (e, t) {
                    var i = this.InverseTransformPoint(e.transform, t).z;
                    return e.viewport.project(t, e.projectionViewMatrix, this.NoInverseTransformPoint), this.NoInverseTransformPoint.x = this.NoInverseTransformPoint.x / Laya.stage.clientScaleX, this.NoInverseTransformPoint.y = this.NoInverseTransformPoint.y / Laya.stage.clientScaleY, this.NoInverseTransformPoint.z = i, this.NoInverseTransformPoint
                }
            }, {
                key: "DoTwistXYZ",
                value: function (e) {
                    var t = this.m3x3[0] * e.x + this.m3x3[1] * e.y + this.m3x3[2] * e.z,
                        i = this.m3x3[3] * e.x + this.m3x3[4] * e.y + this.m3x3[5] * e.z,
                        n = this.m3x3[6] * e.x + this.m3x3[7] * e.y + this.m3x3[8] * e.z;
                    e.x = t, e.y = i, e.z = n
                }
            }, {
                key: "GetXYZrotision",
                value: function (e) {
                    var t = Math.cos(this.radian(e.x)),
                        i = Math.sin(this.radian(e.x)),
                        n = Math.cos(this.radian(e.y)),
                        a = Math.sin(this.radian(e.y)),
                        o = Math.cos(this.radian(e.z)),
                        s = Math.sin(this.radian(e.z));
                    this.m3x3[0] = n * o, this.m3x3[1] = n * s, this.m3x3[2] = -a, this.m3x3[3] = -t * s + i * a * o, this.m3x3[4] = t * o + i * a * s, this.m3x3[5] = i * n, this.m3x3[6] = i * s + t * a * o, this.m3x3[7] = -i * o + t * a * s, this.m3x3[8] = t * n
                }
            }, {
                key: "GetCross",
                value: function (e, t, i) {
                    return (t.x - e.x) * (i.y - e.y) - (i.x - e.x) * (t.y - e.y)
                }
            }, {
                key: "IsPointInMatrix",
                value: function (e, t, i, n, a) {
                    return this.GetCross(e, t, a) * this.GetCross(i, n, a) >= 0 && this.GetCross(t, i, a) * this.GetCross(n, e, a) >= 0
                }
            }, {
                key: "ScreenToWorld",
                value: function (e, t) {
                    var i = .5 * e.fieldOfView * Math.PI / 180,
                        n = t.z * Math.tan(i),
                        a = n * e.aspectRatio,
                        o = this.GetLowerLeft(e.transform, t.z, a, n),
                        s = this.GetScreenScale(a, n),
                        r = new Laya.Vector3,
                        l = this.InverseTransformPoint(e.transform, o);
                    return r = new Laya.Vector3(-t.x / s.x, t.y / s.y, 0), Laya.Vector3.add(l, r, r), this.TransformPoint(e.transform, r)
                }
            }, {
                key: "GetScreenScale",
                value: function (e, t) {
                    var i = new Laya.Vector3;
                    return i.x = Laya.stage.width / e / 2, i.y = Laya.stage.height / t / 2, i
                }
            }, {
                key: "GetLowerLeft",
                value: function (e, t, i, n) {
                    var a = new Laya.Vector3,
                        o = new Laya.Vector3;
                    e.getRight(o), Laya.Vector3.normalize(o, o);
                    var s = new Laya.Vector3(o.x * i, o.y * i, o.z * i);
                    Laya.Vector3.add(e.position, s, a);
                    var r = new Laya.Vector3;
                    e.getUp(r), Laya.Vector3.normalize(r, r);
                    var l = new Laya.Vector3(r.x * n, r.y * n, r.z * n);
                    Laya.Vector3.subtract(a, l, a);
                    var h = new Laya.Vector3;
                    e.getForward(h), Laya.Vector3.normalize(h, h);
                    var c = new Laya.Vector3(h.x * t, h.y * t, h.z * t);
                    return Laya.Vector3.subtract(a, c, a), a
                }
            }, {
                key: "postinCannonToLaya",
                value: function (e) {
                    return new Laya.Vector3(e.x, e.y, e.z)
                }
            }, {
                key: "postinLayaToCannon",
                value: function (e) {
                    return new CANNON.Vec3(e.x, e.y, e.z)
                }
            }, {
                key: "quaternionLayaToCannon",
                value: function (e) {
                    return new CANNON.Quaternion(e.x, e.y, e.z, e.w)
                }
            }, {
                key: "quaternionCannonToLaya",
                value: function (e) {
                    return new Laya.Quaternion(e.x, e.y, e.z, e.w)
                }
            }]), e
        }()),
        U = function (e) {
            function t() {
                var e;
                return _classCallCheck2(this, t), e = i.apply(this, arguments), e.time = 1, e.form = null, e.to = new Laya.Vector3(0, 0, 0), e.ChangeType = N.position, e.More = 0, e.Ease = Laya.Ease.linearNone, e.fun = null, e.isClearFun = !0, e.tween = null, e.HuanVe3 = new Laya.Vector3(0, 0, 0), e.IslineHuan = !1, e.isStop = !1, e
            }
            _inherits2(t, e);
            var i = _createSuper2(t);
            return _createClass2(t, [{
                key: "onAwake",
                value: function () {
                    this.init()
                }
            }, {
                key: "init",
                value: function () {
                    var e = this.owner;
                    this.tran = e.transform
                }
            }, {
                key: "start",
                value: function () {
                    var e = this;
                    this.isStop = !1, null == this.tran && this.init(), null == this.form && (this.form = this.tran[this.ChangeType].clone()), null != this.tween && (this.tween = null), Laya.Tween.clearAll(this), this.HuanVe3 = this.form.clone(), this.IslineHuan = !1, this.tween = Laya.Tween.to(this.HuanVe3, {
                        x: this.to.x,
                        y: this.to.y,
                        z: this.to.z,
                        update: Laya.Handler.create(this, function () {
                            0 == e.tran.owner.active && e.Stop(), e.ChangeType != N.scale ? e.tran[e.ChangeType] = e.HuanVe3 : e.tran.setWorldLossyScale(e.HuanVe3)
                        }, null, !1)
                    }, 1e3 * this.time, this.Ease, Laya.Handler.create(this, this.setFinish))
                }
            }, {
                key: "setFinish",
                value: function () {
                    var e = this;
                    if (null != this.fun && (this.fun(this.Data), this.isClearFun && (this.fun = null)), 1 != this.isStop) switch (this.More) {
                        case O.TweenMore.one:
                            Laya.Tween.clearAll(this);
                            break;
                        case O.TweenMore.loop:
                            this.start();
                            break;
                        case O.TweenMore.lineOne:
                            Laya.Tween.clearAll(this);
                            var t = null;
                            0 == this.IslineHuan && (this.HuanVe3 = this.to.clone(), t = this.form.clone(), this.tween = Laya.Tween.to(this.HuanVe3, {
                                x: t.x,
                                y: t.y,
                                z: t.z,
                                update: Laya.Handler.create(this, function () {
                                    0 == e.tran.owner.active && e.Stop(), e.ChangeType != N.scale ? e.tran[e.ChangeType] = e.HuanVe3 : e.tran.setWorldLossyScale(e.HuanVe3)
                                }, null, !1)
                            }, 1e3 * this.time, this.Ease, Laya.Handler.create(this, this.setFinish)), this.IslineHuan = !0);
                            break;
                        case O.TweenMore.lineloop:
                            Laya.Tween.clearAll(this);
                            var i = null;
                            0 == this.IslineHuan ? (this.HuanVe3 = this.to.clone(), i = this.form.clone(), this.IslineHuan = !0) : (i = this.to.clone(), this.HuanVe3 = this.form.clone(), this.IslineHuan = !1), this.tween = Laya.Tween.to(this.HuanVe3, {
                                x: i.x,
                                y: i.y,
                                z: i.z,
                                update: Laya.Handler.create(this, function () {
                                    0 == e.tran.owner.active && e.Stop(), e.ChangeType != N.scale ? e.tran[e.ChangeType] = e.HuanVe3 : e.tran.setWorldLossyScale(e.HuanVe3)
                                }, null, !1)
                            }, 1e3 * this.time, this.Ease, Laya.Handler.create(this, this.setFinish))
                    }
                }
            }, {
                key: "pause",
                value: function () {
                    this.isStop = !0, null != this.tween && this.tween.pause()
                }
            }, {
                key: "contine",
                value: function () {
                    this.isStop = !1, null != this.tween && this.tween.resume()
                }
            }, {
                key: "Stop",
                value: function () {
                    this.isStop = !0, Laya.Tween.clearAll(this)
                }
            }, {
                key: "onDestroy",
                value: function () {
                    Laya.Tween.clearAll(this)
                }
            }, {
                key: "onDisable",
                value: function () {
                    this.Stop()
                }
            }]), t
        }(Laya.Script3D),
        N = function e() {
            _classCallCheck2(this, e)
        };
    N.position = "position", N.localPosition = "localPosition", N.rotationEuler = "rotationEuler", N.localRotationEuler = "localRotationEuler", N.scale = "scale", N.localScale = "localScale";
    var V = function e() {
        _classCallCheck2(this, e)
    };
    V.one = 0, V.loop = 1, V.lineOne = 2, V.lineloop = 3;
    var O = {
            TweenPos: function (e) {
                function t() {
                    var e;
                    return _classCallCheck2(this, t), e = i.call(this), e._isWordSpace = !1, e.ChangeType = N.localPosition, e
                }
                _inherits2(t, e);
                var i = _createSuper2(t);
                return _createClass2(t, [{
                    key: "isWordSpace",
                    get: function () {
                        return this._isWordSpace
                    },
                    set: function (e) {
                        this._isWordSpace = e, this.ChangeType = 0 == e ? N.localPosition : N.position
                    }
                }]), t
            }(U),
            TweenScale: function (e) {
                function t() {
                    var e;
                    return _classCallCheck2(this, t), e = i.call(this), e._isWordSpace = !1, e.ChangeType = N.localScale, e
                }
                _inherits2(t, e);
                var i = _createSuper2(t);
                return _createClass2(t, [{
                    key: "isWordSpace",
                    get: function () {
                        return this._isWordSpace
                    },
                    set: function (e) {
                        this._isWordSpace = e, this.ChangeType = 0 == e ? N.localScale : N.scale
                    }
                }]), t
            }(U),
            TweenRotation: function (e) {
                function t() {
                    var e;
                    return _classCallCheck2(this, t), e = i.call(this), e._isWordSpace = !1, e.ChangeType = N.localRotationEuler, e
                }
                _inherits2(t, e);
                var i = _createSuper2(t);
                return _createClass2(t, [{
                    key: "isWordSpace",
                    get: function () {
                        return this._isWordSpace
                    },
                    set: function (e) {
                        this._isWordSpace = e, this.ChangeType = 0 == e ? N.localRotationEuler : N.rotationEuler
                    }
                }]), t
            }(U),
            TweenMovePos: function (e) {
                function t() {
                    var e;
                    return _classCallCheck2(this, t), e = i.apply(this, arguments), e.speed = 1, e.toList = new Array, e.GoIndex = 0, e.Ease = Laya.Ease.linearNone, e.fun = null, e.isClearFun = !0, e.lookDir = null, e.lookSpeed = 0, e.isLook = !0, e.StopFun = null, e.form = null, e.to = new Laya.Vector3(0, 0, 0), e._isWordSpace = !0, e.ChangeType = N.position, e.tween = null, e.HuanVe3 = new Laya.Vector3(0, 0, 0), e.IslineHuan = !1, e.one = new Laya.Vector2, e.two = new Laya.Vector2, e.isStop = !1, e
                }
                _inherits2(t, e);
                var i = _createSuper2(t);
                return _createClass2(t, [{
                    key: "isWordSpace",
                    get: function () {
                        return this._isWordSpace
                    },
                    set: function (e) {
                        this._isWordSpace = e, this.ChangeType = 0 == e ? N.localPosition : N.position
                    }
                }, {
                    key: "onAwake",
                    value: function () {
                        this.init()
                    }
                }, {
                    key: "init",
                    value: function () {
                        var e = this.owner;
                        this.tran = e.transform
                    }
                }, {
                    key: "start",
                    value: function () {
                        Laya.Tween.clearAll(this), this.isStop = !1, null == this.tran && this.init(), null != this.tween && (this.tween = null), this.GoIndex = 0, this.IslineHuan = !1, 0 != this.toList.length && this.anim()
                    }
                }, {
                    key: "setFinish",
                    value: function () {
                        1 != this.isStop && (this.GoIndex++, this.GoIndex >= this.toList.length ? this.Stop() : (this.anim(), null != this.fun && (this.fun(this.Data), this.isClearFun && (this.fun = null))))
                    }
                }, {
                    key: "anim",
                    value: function () {
                        var e = this;
                        this.form = this.tran.position, this.HuanVe3 = this.form.clone(), this.to = this.toList[this.GoIndex].clone();
                        var t = this.CulTime(this.to);
                        this.isLook && this.LookPos(this.to), this.tween = Laya.Tween.to(this.HuanVe3, {
                            x: this.to.x,
                            y: this.to.y,
                            z: this.to.z,
                            update: Laya.Handler.create(this, function () {
                                0 == e.tran.owner.active && e.Stop(), e.tran[e.ChangeType] = e.HuanVe3
                            }, null, !1)
                        }, 1e3 * t, this.Ease, Laya.Handler.create(this, this.setFinish))
                    }
                }, {
                    key: "CulTime",
                    value: function (e) {
                        return Laya.Vector3.distance(this.tran.position, e) / this.speed
                    }
                }, {
                    key: "LookPos",
                    value: function (e) {
                        if (null != this.lookDir) {
                            var t = P.TransformPoint(this.tran, this.lookDir);
                            t.x = t.x - this.tran.position.x, t.y = t.y - this.tran.position.y, t.z = t.z - this.tran.position.z, this.one.x = e.x - this.tran.position.x, this.one.y = e.z - this.tran.position.z, this.two.x = t.x, this.two.y = t.z;
                            var i = P.DirAngle(this.one, this.two);
                            this.tran.rotationEuler.y -= i, this.tran.rotationEuler = this.tran.rotationEuler
                        }
                    }
                }, {
                    key: "pause",
                    value: function () {
                        this.isStop = !0, null != this.tween && this.tween.pause()
                    }
                }, {
                    key: "contine",
                    value: function () {
                        this.isStop = !1, null != this.tween && this.tween.resume()
                    }
                }, {
                    key: "Stop",
                    value: function () {
                        this.isStop = !0, null != this.StopFun && (this.StopFun(), this.StopFun = null), Laya.Tween.clearAll(this)
                    }
                }, {
                    key: "onDestroy",
                    value: function () {
                        Laya.Tween.clearAll(this)
                    }
                }]), t
            }(Laya.Script3D),
            TweenMore: V
        },
        D = new(function () {
            function e() {
                _classCallCheck2(this, e), this.debug = !0, this._ray = new Laya.Ray(new Laya.Vector3(0, 0, 0), new Laya.Vector3(0, 0, 0)), this.point = new Laya.Vector2, this.outs = new Array, this.out = null
            }
            return _createClass2(e, [{
                key: "isMobil",
                get: function () {
                    return "undefined" != typeof wx
                }
            }, {
                key: "texture2dToTexture",
                value: function (e) {
                    var t = new Laya.Texture;
                    return t.bitmap = e, t.sourceHeight = e.height, t.sourceWidth = e.width, t
                }
            }, {
                key: "sort",
                value: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                    e.sort(function (e, n) {
                        return 0 == t ? "" == i ? n - e : e[i] - n[i] : "" == i ? n - e : n[i] - e[i]
                    })
                }
            }, {
                key: "PlayAnim",
                value: function (e, t) {
                    var i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                        n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
                        a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                        o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
                        s = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : .2,
                        r = e.getControllerLayer(),
                        l = r._crossPlayState,
                        h = r.getAnimatorState(t)._clip._duration / n,
                        c = !1;
                    if (null != l) {
                        if (t == l.name) return;
                        c = !0, l.name
                    }
                    e.speed = n, e.crossFade(t, s), Laya.timer.once(1e3 * (s + h - a), this, function () {
                        if (null != o && o(), 0 == i && 1 == c) {
                            var t = e.getControllerLayer()._crossPlayState;
                            null != t && t.name
                        }
                    })
                }
            }, {
                key: "UpdateTime",
                value: function (e) {
                    e = e < 0 ? 0 : e;
                    var t = Math.ceil(e),
                        i = Math.floor(t / 60),
                        n = Math.floor(t % 60),
                        a = (i >= 10 ? i + "" : "0" + i) + ":" + (n >= 10 ? n + "" : "0" + n);
                    return e <= 0 && (a = ""), a
                }
            }, {
                key: "log",
                value: function (e) {
                    for (var t, i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++) n[a - 1] = arguments[a];
                    this.debug && (t = console).log.apply(t, [e].concat(n))
                }
            }, {
                key: "Ve3Zero",
                value: function () {
                    return new Laya.Vector3(0, 0, 0)
                }
            }, {
                key: "Ve3One",
                value: function () {
                    return new Laya.Vector3(1, 1, 1)
                }
            }, {
                key: "LoadSprite3D",
                value: function (e, t) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                        n = Laya.loader.getRes(e),
                        a = this;
                    if (null != i && (a = i), null == n) Laya.Sprite3D.load(e, Laya.Handler.create(a, function (e) {
                        var i = Laya.Sprite3D.instantiate(e);
                        t(i)
                    }));
                    else {
                        var o = Laya.Sprite3D.instantiate(n);
                        t(o)
                    }
                }
            }, {
                key: "LoadResource",
                value: function (e, t) {
                    var i = Laya.loader.getRes(e);
                    null == i ? Laya.loader.load(e, Laya.Handler.create(this, function (e) {
                        t(e)
                    })) : t(i)
                }
            }, {
                key: "RemoveListToValue",
                value: function (e, t) {
                    var i = e.indexOf(t);
                    i > -1 && e.splice(i, 1)
                }
            }, {
                key: "objClone",
                value: function (e) {
                    var t = {};
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                    return t
                }
            }, {
                key: "AddTweenPos",
                value: function (e, t, i) {
                    var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                        a = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
                        o = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
                        s = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
                        r = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Laya.Ease.linearNone,
                        l = e.getComponent(O.TweenPos);
                    return null == l && (l = e.addComponent(O.TweenPos)), null == n && (n = e.transform.position), l.time = t, l.to = i.clone(), l.form = n.clone(), l.isWordSpace = o, l.More = s, l.Ease = r, 1 == a && l.start(), l
                }
            }, {
                key: "AddTweenMovePos",
                value: function (e, t, i) {
                    var n = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                        a = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
                        o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
                        s = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
                        r = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
                        l = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : Laya.Ease.linearNone,
                        h = e.getComponent(O.TweenMovePos);
                    return null == h && (h = e.addComponent(O.TweenMovePos)), null == r && (r = new Laya.Vector3(0, 0, 1)), h.fun = null, h.speed = t, h.isWordSpace = a, h.Ease = l, h.toList = i, h.lookSpeed = o, h.isLook = s, h.lookDir = r, 1 == n && h.start(), h
                }
            }, {
                key: "RayObj",
                value: function (e, t, i) {
                    return null != e && (this.point.x = Laya.stage.clientScaleX * i.x, this.point.y = Laya.stage.clientScaleY * i.y, t.viewportPointToRay(this.point, this._ray), e.physicsSimulation.rayCastAll(this._ray, this.outs, 20)), {
                        outs: this.outs,
                        ray: this._ray
                    }
                }
            }, {
                key: "RayObjOne",
                value: function (e, t, i, n, a) {
                    return null != e && (null == this.out && (this.out = new Laya.HitResult), this.point.x = Laya.stage.clientScaleX * i.x, this.point.y = Laya.stage.clientScaleY * i.y, t.viewportPointToRay(this.point, this._ray), e.physicsSimulation.rayCast(this._ray, this.out, 120, n, a)), {
                        out: this.out,
                        ray: this._ray
                    }
                }
            }, {
                key: "AddTweenRotation",
                value: function (e, t, i) {
                    var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                        a = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
                        o = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
                        s = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
                        r = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Laya.Ease.linearNone,
                        l = e.getComponent(O.TweenRotation);
                    return null == l && (l = e.addComponent(O.TweenRotation)), null == n && (n = e.transform.rotationEuler), l.time = t, l.to = i.clone(), l.form = n.clone(), l.isWordSpace = o, l.More = s, l.Ease = r, 1 == a && l.start(), l
                }
            }, {
                key: "AddTweenScale",
                value: function (e, t, i) {
                    var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                        a = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
                        o = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
                        s = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
                        r = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Laya.Ease.linearNone,
                        l = e.getComponent(O.TweenScale);
                    return null == l && (l = e.addComponent(O.TweenScale)), l.time = t, l.to = i.clone(), l.form = n.clone(), l.isWordSpace = o, l.More = s, l.Ease = r, 1 == a && l.start(), l
                }
            }, {
                key: "timestampToDay",
                value: function (e, t) {
                    return Math.floor(t / 864e5) - Math.floor(e / 864e5)
                }
            }, {
                key: "GetByName",
                value: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (null != t) {
                        var i = null;
                        if (t.name == e) return t;
                        var n = t;
                        return null != (i = this.GetObjAll(n, e)) ? i : (console.error("在" + t.name + "找不到物体:" + e), null)
                    }
                }
            }, {
                key: "GetObjAll",
                value: function (e, t) {
                    for (var i = null, n = 0; n < e.numChildren; n++) {
                        if (t == e.getChildAt(n).name) {
                            i = e.getChildAt(n);
                            break
                        }
                        if (null == i && e.getChildAt(n).numChildren > 0 && null != (i = this.GetObjAll(e.getChildAt(n), t))) break
                    }
                    return i
                }
            }, {
                key: "SetCameraPos",
                value: function (e, t) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                        n = new Laya.Vector3(t.x, t.y, t.z);
                    if (e.transform.position = n, null == i) e.transform.rotationEuler = new Laya.Vector3(0, 0, 0);
                    else {
                        var a = new Laya.Vector3(-i.x, -(180 - i.y), -i.z);
                        e.transform.rotationEuler = a
                    }
                }
            }, {
                key: "GetCameraPos",
                value: function (e) {
                    var t = new Laya.Vector3(e.transform.position.x, e.transform.position.y, e.transform.position.z),
                        i = new Laya.Vector3(-e.transform.rotationEuler.x, -(180 - e.transform.rotationEuler.y), -e.transform.rotationEuler.z),
                        n = [];
                    return n.push(t), n.push(i), n
                }
            }, {
                key: "SetCameraMove",
                value: function (e, t) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                        n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                    if (i > 0) {
                        var a = this.GetCameraPos(t),
                            o = e.getComponent(O.TweenRotation),
                            s = e.getComponent(O.TweenPos);
                        null == o && (o = e.addComponent(O.TweenRotation)), null == s && (s = e.addComponent(O.TweenPos));
                        var r = e.transform;
                        o.form = new Laya.Vector3(r.rotationEuler.x, r.rotationEuler.y, r.rotationEuler.z), o.to = a[1];
                        var l = new Laya.Vector3(o.form.x % 360, o.form.y % 360, o.form.z % 360),
                            h = new Laya.Vector3(o.to.x % 360, o.to.y % 360, o.to.z % 360);
                        Math.abs(h.x - l.x) > 180 && (h.x > 0 ? h.x -= 360 : h.x += 360), Math.abs(h.y - l.y) > 180 && (h.y > 0 ? h.y -= 360 : h.y += 360), Math.abs(h.z - l.z) > 180 && (h.z > 0 ? h.z -= 360 : h.z += 360), o.form = l, o.to = h, o.isWordSpace = !0, o.time = i, o.start(), s.form = new Laya.Vector3(r.position.x, r.position.y, r.position.z), s.to = a[0], s.isWordSpace = !0, s.time = i, null != n && (s.fun = n), s.start()
                    } else this.SetCameraPosByObj(e, t)
                }
            }, {
                key: "SetCameraPosByObj",
                value: function (e, t) {
                    var i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                        n = new Laya.Vector3(t.transform.position.x, t.transform.position.y, t.transform.position.z),
                        a = new Laya.Vector3(-(t.transform.rotationEuler.x - 10), -(180 - t.transform.rotationEuler.y), -(360 - t.transform.rotationEuler.z));
                    i ? (this.AddTweenPos(e, .6, n), this.AddTweenRotation(e, .6, a)) : (e.transform.position = n, e.transform.rotationEuler = a)
                }
            }, {
                key: "SetParent",
                value: function (e, t) {
                    var i = new Laya.Vector3(e.transform.position.x, e.transform.position.y, e.transform.position.z),
                        n = new Laya.Vector3(e.transform.rotationEuler.x, e.transform.rotationEuler.y, e.transform.rotationEuler.z),
                        a = e.transform.getWorldLossyScale().clone();
                    t.addChild(e), e.transform.position = i, e.transform.rotationEuler = n, e.transform.setWorldLossyScale(a)
                }
            }, {
                key: "ClearObj",
                value: function (e) {
                    new Array;
                    for (var t = 0; t < e.numChildren; t++) {
                        var i = e.getChildAt(t);
                        i.active = !1, i.destroy(), console.log("清空车:" + i.name)
                    }
                }
            }, {
                key: "Vector3Add",
                value: function (e, t) {
                    var i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                    return 1 == i ? new Laya.Vector3(e.x + t.x, e.y + t.y, e.z + t.z) : new Laya.Vector3(e.x - t.x, e.y - t.y, e.z - t.z)
                }
            }, {
                key: "randomV3",
                value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                        i = Math.random() * (t - e) + e,
                        n = Math.random() * (t - e) + e,
                        a = Math.random() * (t - e) + e;
                    return new Laya.Vector3(i, n, a)
                }
            }, {
                key: "Vector3X",
                value: function (e, t) {
                    return new Laya.Vector3(e.x * t, e.y * t, e.z * t)
                }
            }, {
                key: "RigBomb",
                value: function (e, t, i) {
                    var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
                        a = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
                    if (0 != e.length)
                        for (var o = 0; o < e.length; o++) {
                            var s = e[o],
                                r = Math.random() * i / 10 - i / 20,
                                l = Math.random() * i / 10 - i / 20,
                                h = Math.random() * i / 10 - i / 20,
                                c = s.owner,
                                u = this.Vector3Add(c.transform.position, new Laya.Vector3(r, l, h)),
                                d = this.Vector3Add(u, t, !1);
                            if (!(Laya.Vector3.distance(t, c.transform.position) > i)) {
                                Laya.Vector3.normalize(d, d);
                                var y = c.transform.position;
                                if (1 == a) {
                                    var f = Math.random() * i / 10 - i / 20,
                                        g = Math.random() * i / 10 - i / 20,
                                        v = Math.random() * i / 10 - i / 20;
                                    y = this.Vector3Add(c.transform.position, new Laya.Vector3(f, g, v))
                                }
                                var m = .3 * Math.random() + .7;
                                s.applyForce(this.Vector3X(d, 100 * n * m), y)
                            }
                        }
                }
            }, {
                key: "ChangeMat",
                value: function (e, t) {
                    var i = t;
                    e.meshRenderer.material = i.meshRenderer.material.clone()
                }
            }]), e
        }()),
        R = function (e) {
            function t() {
                return _classCallCheck2(this, t), i.call(this)
            }
            _inherits2(t, e);
            var i = _createSuper2(t);
            return _createClass2(t, [{
                key: "onAwake",
                value: function () {}
            }, {
                key: "onTriggerEnter",
                value: function (e) {
                    if (0 != Y.IsGameStart) {
                        var t = e.owner.name;
                        if (-1 != t.indexOf("Trigger")) {
                            var i = Number(t.slice(7));
                            Y.PlayerManager.contactPoint[i] = 1, Y.PlayerManager.detectorPoint()
                        }
                    }
                }
            }, {
                key: "onTriggerExit",
                value: function (e) {
                    if (0 != Y.IsGameStart) {
                        var t = e.owner.name;
                        if (-1 != t.indexOf("Trigger")) {
                            var i = Number(t.slice(7));
                            Y.PlayerManager.contactPoint[i] = 0, Y.PlayerManager.detectorPoint()
                        }
                    }
                }
            }]), t
        }(E.GameObject),
        H = function () {
            function e() {
                _classCallCheck2(this, e), this.nTouchId = null, this.touchNode = null, this._touchLastPoint = null, this._startPoint = null, this._rocker = null, this._rockerForward = null, this._nRockMaxDis = 400
            }
            return _createClass2(e, [{
                key: "init",
                value: function (e, t) {
                    this.touchNode = e, this._startPoint = new Laya.Vector2;
                    var i = new Laya.Point(t.x, t.y);
                    i = e.localToGlobal(i, !1), console.log(i, "point"), this._startPoint.x = i.x, this._startPoint.y = i.y, this._rocker = t, this._nRockMaxDis = e.width / 2, this._rockerForward = new Laya.Vector2(0, -1), this.refreshRocker(), this._addLisener()
                }
            }, {
                key: "refreshRocker",
                value: function () {
                    console.log("rocker refresh "), this.nTouchId = null, this.touchNode && this.touchNode.off(Laya.Event.MOUSE_DOWN, this, this._touchStart), Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this._touchMove), Laya.stage.off(Laya.Event.MOUSE_UP, this, this._touchEnd), Laya.stage.off(Laya.Event.MOUSE_OUT, this, this._touchEnd)
                }
            }, {
                key: "_addLisener",
                value: function () {
                    this.touchNode.on(Laya.Event.MOUSE_DOWN, this, this._touchStart), Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this._touchMove), Laya.stage.on(Laya.Event.MOUSE_UP, this, this._touchEnd), Laya.stage.on(Laya.Event.MOUSE_OUT, this, this._touchEnd)
                }
            }, {
                key: "_touchStart",
                value: function (e) {
                    u.drivingType = 1, Y.IsGameStart ? null === this.nTouchId ? (this.nTouchId = e.touchId, this._touchLastPoint = new Laya.Vector2(e.stageX, e.stageY)) : console.log("[debug] touch start id") : console.log("[debug] touch start false")
                }
            }, {
                key: "_touchMove",
                value: function (e) {
                    if (this.nTouchId === e.touchId && null != this._rocker) {
                        var t = new Laya.Vector2(this._touchLastPoint.x - this._startPoint.x, this._touchLastPoint.y - this._startPoint.y),
                            i = new Laya.Vector2(e.stageX - this._startPoint.x, e.stageY - this._startPoint.y),
                            n = new Laya.Vector2(e.stageX - this._touchLastPoint.x, e.stageY - this._touchLastPoint.y),
                            a = Laya.Vector2.scalarLength(n);
                        if (Laya.Vector2.normalize(t, t), Laya.Vector2.normalize(i, i), !(a < 2)) {
                            var o = Laya.Vector2.dot(t, i),
                                s = Math.acos(o),
                                r = t.x * i.y - t.y * i.x,
                                l = 180 * s / Math.PI;
                            if (!isNaN(l)) {
                                var h = 0;
                                r > 0 ? h = 1 : r < 0 && (h = -1), this._rocker.rotation += l * h, this._rocker.rotation > 540 && (this._rocker.rotation = 540), this._rocker.rotation < -540 && (this._rocker.rotation = -540), this._touchLastPoint.x = e.stageX, this._touchLastPoint.y = e.stageY
                            }
                        }
                    }
                }
            }, {
                key: "_touchMove1",
                value: function () {
                    this._rocker.rotation += -120, this._rocker.rotation < -540 && (this._rocker.rotation = -540, window.ISANJIAN = !0)
                }
            }, {
                key: "_touchMove2",
                value: function () {
                    this._rocker.rotation += 120, this._rocker.rotation > 540 && (this._rocker.rotation = 540, window.ISANJIAN = !0)
                }
            }, {
                key: "updateUi",
                value: function () {
                    null != this._rocker && (null !== this.nTouchId || 2 != Y.PlayerManager.gearsStates && 4 != Y.PlayerManager.gearsStates || (this._rocker.rotation *= .95, Math.abs(this._rocker.rotation) < 1 && (this._rocker.rotation = 0)))
                }
            }, {
                key: "_touchEnd",
                value: function (e) {
                    this.nTouchId === e.touchId && (this.nTouchId = null)
                }
            }], [{
                key: "instance",
                get: function () {
                    return this._instance || (this._instance = new e), this._instance
                }
            }]), e
        }();
    H._instance = null;
    var F = function (e) {
            function t() {
                var e;
                return _classCallCheck2(this, t), e = i.call(this), e.frontCam = null, e.lookCam = null, e.camIndex = 0, e.carSkin = null, e.carBodyMesh = null, e.bus_shadow = null, e.cannonBody = null, e.cannonVehicle = null, e.isAuto = !0, e._gearsStates = 1, e.carMove = {
                    isStart: !1,
                    isMove: !1,
                    rotateType: null,
                    isBrake: !1
                }, e.MoveSpeed = null, e.collideInfo = {
                    num: 0,
                    time: 0
                }, e.contactPoint = [0, 0, 0, 0], e.testNode = null, e.Cube = null, e.boxcar = null, e.boxcarPos = null, e.CollisionObj = null, e.boxcarCollision = null, e.lookPos = null, e.followPos = null, e.leftlight = null, e.rightlight = null, e.lastRestartTime = null, e.ray = new Laya.Ray(new Laya.Vector3(0, 0, 0), new Laya.Vector3(0, 0, 0)), e.out = new Laya.HitResult, e.rotTarget = new Laya.Quaternion, e.rotV3 = new Laya.Vector3, e.rotOut = new Laya.Quaternion, e.boxcarRot = new Laya.Quaternion, e.forward = new Laya.Vector3, e.angle = 0, e.lastAngle = 0, e.wdleftCounter = 0, e.wdrightCounter = 0, e.limitFinishWD = 300, e.maxSteerVal = .5, e.maxSpeed = 25, e.curSpeed = 0, e.referenceSpeed = 0, e._nRotate = 0, e._nMaxRotate = .5, e.isOver = !1, e
            }
            _inherits2(t, e);
            var i = _createSuper2(t);
            return _createClass2(t, [{
                key: "gearsStates",
                get: function () {
                    return this._gearsStates
                },
                set: function (e) {
                    switch (e) {
                        case 1:
                            this.detectorPoint() && (X.self.TargetAll.numChildren - 1 == X.self.targetIndex ? (console.log("通关"), -1 == u.carData.have.indexOf(u.carData.use) && (u.carData.use = u.lastUse, u.carData = JSON.parse(JSON.stringify(u.carData))), this.gameOver(!0)) : (X.self.targetIndex++, X.self.FX_tc_tck_1 = X.self.TargetAll.getChildAt(X.self.targetIndex).getChildByName("FX_tc_tck_1")), ie.self.jindu.text = "".concat(X.self.targetIndex, "/").concat(X.self.TargetAll.numChildren), this.pointTig())
                    }
                    this._gearsStates = e
                }
            }, {
                key: "onAwake",
                value: function () {}
            }, {
                key: "init",
                value: function (e) {
                    var t = this;
                    this.carSkin && this.carSkin.removeSelf(), this.isOver = !1, this.cannonVehicle = null, this.MoveSpeed = 300, this.maxSpeed = 40, this.collideInfo.num = 0;
                    var i = u.carData.use;
                    m.ResState([g["skin".concat(i, ".lh")]], this, function () {
                        t.carSkin = t.gameObject.addChild(Laya.Sprite3D.instantiate(v["skin".concat(i, ".lh")])), t.carSkin.transform.localPosition = new Laya.Vector3(0, 0, 0), t.carSkin.transform.localRotationEuler = new Laya.Vector3(0, 0, 0), t.carBodyMesh = t.carSkin.getChildByName("mesh_car"), t.carBodyMesh.addComponent(R), t.leftlight = t.carBodyMesh.getChildByName("leftlight"), t.rightlight = t.carBodyMesh.getChildByName("rightlight"), t.leftlight && (t.leftlight.active = !1), t.rightlight && (t.rightlight.active = !1), t.followPos = t.carBodyMesh.getChildByName("followPos"), t.lookPos = t.carSkin.getChildByName("lookCam"), X.self.levelMode == k.CityMode && (t.camIndex = 1), t.frontCam = t.lookPos.getChildAt(t.camIndex), D.SetParent(t.lookPos, Y.MapParent), Y.cameraLook.StartFollow(t.frontCam, t.lookPos), t.cannonVehicle = z.self.initCar(t.carSkin), t.cannonVehicle.chassisBody.addEventListener("collide", function (e) {
                            if (!(Math.abs(t.cannonVehicle.chassisBody.velocity.x) < 1 && Math.abs(t.cannonVehicle.chassisBody.velocity.z) < 1)) {
                                var n = Laya.timer.currTimer;
                                n - t.collideInfo.time > 1e3 && (t.collideInfo.time = n, u.durability[i] >= 1 && (u.durability[i]--, u.durability = u.durability), t.gameOver(!1))
                            }
                        }), e(), e = null
                    })
                }
            }, {
                key: "changViews",
                value: function () {
                    this.frontCam = this.lookPos.getChildAt(this.camIndex), Y.cameraLook.StartFollow(this.frontCam, this.lookPos, !0)
                }
            }, {
                key: "lightTig",
                value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    Laya.timer.clear(this, this.lightAmtor), 0 == e ? (this.rightlight.active = !1, this.leftlight.active = !1, p.StopAudio("light")) : 1 == e ? (this.rightlight.active = !1, this.lightAmtor(this.leftlight)) : 2 == e && (this.leftlight.active = !1, this.lightAmtor(this.rightlight))
                }
            }, {
                key: "lightAmtor",
                value: function (e) {
                    e.active = !e.active, e.active && p.PlayAudio("light"), Laya.timer.once(800, this, this.lightAmtor, [e])
                }
            }, {
                key: "restartCar",
                value: function () {
                    z.self._carBody.sleep(), this.carBodyMesh.transform.position = X.self.startPos.transform.position, this.carBodyMesh.transform.rotation = X.self.startPos.transform.rotation, z.self._carBody.position.set(this.carBodyMesh.transform.position.x, this.carBodyMesh.transform.position.y, this.carBodyMesh.transform.position.z), z.self._carBody.quaternion.set(this.carBodyMesh.transform.rotation.x, this.carBodyMesh.transform.rotation.y, this.carBodyMesh.transform.rotation.z, this.carBodyMesh.transform.rotation.w), z.self._carBody.wakeUp()
                }
            }, {
                key: "detectorPoint",
                value: function () {
                    var e = this.contactPoint.every(function (e) {
                        return 1 == e
                    });
                    return  e ? (X.self.FX_tc_tck_1.meshRenderer.material.color = new Laya.Vector4(0, 1, .01524568, .5019608), 1 == X.self.levelIndex && X.self.levelMode == k.NormalMode && ie.self && ie.self.active && ie.self.stopGuide()) : X.self.FX_tc_tck_1.meshRenderer.material.color = new Laya.Vector4(1, .8795764, 0, .5019608), e
                }
            }, {
                key: "pointTig",
                value: function () {
                    for (var e = 0; e < X.self.TargetAll.numChildren; e++) {
                        var t = X.self.TargetAll.getChildAt(e);
                        X.self.targetIndex == e ? this.triggerShow(t, !0) : this.triggerShow(t, !1)
                    }
                }
            }, {
                key: "triggerShow",
                value: function (e, t) {
                    for (var i = 0; i < e.numChildren; i++) {
                        var n = e.getChildAt(i);
                        "FX_tc_tck_1" != n.name && (n.active = t)
                    }
                }
            }, {
                key: "getForward",
                value: function () {
                    if (this.carBodyMesh) return this.carBodyMesh.transform.getForward(this.forward), this.forward.x *= -1, this.forward.z *= -1, this.forward
                }
            }, {
                key: "setCannonBodyRotation",
                value: function (e) {
                    var t = new CANNON.Quaternion(e.x, e.y, e.z, e.w);
                    this.cannonVehicle.chassisBody.quaternion = t
                }
            }, {
                key: "onUpdate",
                value: function () {
                    this.carBodyMesh && this.lookPos.transform && (this.lookPos.transform.position.x = this.followPos.transform.position.x, this.lookPos.transform.position.y = this.followPos.transform.position.y, this.lookPos.transform.position.z = this.followPos.transform.position.z, this.lookPos.transform.position = this.lookPos.transform.position, Laya.Quaternion.lerp(this.lookPos.transform.rotation, this.carBodyMesh.transform.rotation, .05, this.rotOut), this.lookPos.transform.rotation = this.rotOut), Y.IsGameStart && this.cannonVehicle && this.carBodyMesh && (this._move(), X.self.FX_tc_tck_1 && this.pointToRot(X.self.FX_tc_tck_1.transform.position.x - this.carBodyMesh.transform.position.x, X.self.FX_tc_tck_1.transform.position.z - this.carBodyMesh.transform.position.z))
                }
            }, {
                key: "initPlay",
                value: function () {
                    this.carBodyMesh.transform.localPosition = new Laya.Vector3(0, 0, 0), this.carBodyMesh.transform.localRotationEuler = new Laya.Vector3(0, 0, 0)
                }
            }, {
                key: "distance",
                value: function (e, t) {
                    var i = t.x - e.x,
                        n = t.z - e.z;
                    return Math.sqrt(i * i + n * n)
                }
            }, {
                key: "pointToRot",
                value: function (e, t) {
                    X.self.pointTo.transform.position = this.carBodyMesh.transform.position.clone(), X.self.pointTo.transform.localPositionY += 1.5, this.angle = P.dirToAngle(e, t), this.angle > 180 ? this.angle = -(360 - this.angle) : this.angle < -180 && (this.angle = 360 + this.angle), Math.abs(this.lastAngle) >= 360 && (this.lastAngle %= 360), this.lastAngle > 180 ? this.lastAngle = -(360 - this.lastAngle) : this.lastAngle < -180 && (this.lastAngle = 360 + this.lastAngle);
                    var i = 0,
                        n = this.angle - this.lastAngle;
                    n > 180 ? n = -(360 - n) : n < -180 && (n = 360 + n), Math.abs(n) > 2 && (n > Math.abs(.1 * n) ? i = -Math.abs(.1 * n) : n < Math.abs(.1 * n) && (i = Math.abs(.1 * n)), X.self.pointTo.transform.localRotationEulerY -= i), this.lastAngle = X.self.pointTo.transform.localRotationEulerY
                }
            }, {
                key: "_move",
                value: function () {
                    var e = Math.floor(Math.abs(this.curSpeed));
                    if (this.curSpeed = this.cannonVehicle.currentVehicleSpeedKmHour, this.cannonVehicle.setBrake(0, 0), this.cannonVehicle.setBrake(0, 1), this.cannonVehicle.setBrake(0, 2), this.cannonVehicle.setBrake(0, 3), this.engineZero(), 4 == this.gearsStates && this.carMove.isStart ? this.carMove.isMove ? (this.cannonVehicle.applyEngineForce(this.carMove.isMove ? 3 * -this.MoveSpeed : 0, 0), this.cannonVehicle.applyEngineForce(this.carMove.isMove ? 3 * -this.MoveSpeed : 0, 1), this.cannonVehicle.applyEngineForce(this.carMove.isMove ? 3 * -this.MoveSpeed : 0, 2), this.cannonVehicle.applyEngineForce(this.carMove.isMove ? 3 * -this.MoveSpeed : 0, 3)) : e < 10 && this.isAuto && (this.cannonVehicle.applyEngineForce(-this.MoveSpeed, 0), this.cannonVehicle.applyEngineForce(-this.MoveSpeed, 1), this.cannonVehicle.applyEngineForce(-this.MoveSpeed, 2), this.cannonVehicle.applyEngineForce(-this.MoveSpeed, 3)) : 2 == this.gearsStates && this.carMove.isStart ? this.carMove.isMove ? (this.cannonVehicle.applyEngineForce(this.carMove.isMove ? 3 * this.MoveSpeed : 0, 0), this.cannonVehicle.applyEngineForce(this.carMove.isMove ? 3 * this.MoveSpeed : 0, 1), this.cannonVehicle.applyEngineForce(this.carMove.isMove ? 3 * this.MoveSpeed : 0, 2), this.cannonVehicle.applyEngineForce(this.carMove.isMove ? 3 * this.MoveSpeed : 0, 3)) : e < 10 && this.isAuto && (this.cannonVehicle.applyEngineForce(this.MoveSpeed, 0), this.cannonVehicle.applyEngineForce(this.MoveSpeed, 1), this.cannonVehicle.applyEngineForce(this.MoveSpeed, 2), this.cannonVehicle.applyEngineForce(this.MoveSpeed, 3)) : 1 == this.gearsStates ? (this.cannonVehicle.setBrake(50, 0), this.cannonVehicle.setBrake(50, 1), this.cannonVehicle.setBrake(50, 2), this.cannonVehicle.setBrake(50, 3)) : 3 == this.gearsStates && (this.cannonVehicle.setBrake(10, 0), this.cannonVehicle.setBrake(10, 1), this.cannonVehicle.setBrake(10, 2), this.cannonVehicle.setBrake(10, 3)), this.carMove.isBrake && (this.cannonVehicle.setBrake(50, 0), this.cannonVehicle.setBrake(50, 1), this.cannonVehicle.setBrake(50, 2), this.cannonVehicle.setBrake(50, 3)), 0 == u.drivingType) {
                        if (0 == this.carMove.rotateType) {
                            if (this.wdleftCounter = this.wdleftCounter - .2 * this.wdleftCounter, this.wdleftCounter <= 0 && (this.wdleftCounter = 0), this.wdrightCounter = this.wdrightCounter - .2 * this.wdrightCounter, this.wdrightCounter <= 0 && (this.wdrightCounter = 0), this.wdrightCounter > this.wdleftCounter) {
                                var t = this.maxSteerVal * this.wdrightCounter / this.limitFinishWD;
                                this.cannonVehicle.setSteeringValue(-t, 0), this.cannonVehicle.setSteeringValue(-t, 1)
                            }
                            if (this.wdrightCounter < this.wdleftCounter) {
                                var i = this.maxSteerVal * this.wdleftCounter / this.limitFinishWD;
                                this.cannonVehicle.setSteeringValue(i, 0), this.cannonVehicle.setSteeringValue(i, 1)
                            }
                        } else if (1 == this.carMove.rotateType) {
                            this.wdleftCounter += 3, this.wdleftCounter >= this.limitFinishWD && (this.wdleftCounter = this.limitFinishWD);
                            var n = this.maxSteerVal * this.wdleftCounter / this.limitFinishWD;
                            this.cannonVehicle.setSteeringValue(n, 0), this.cannonVehicle.setSteeringValue(n, 1)
                        } else if (2 == this.carMove.rotateType) {
                            this.wdrightCounter += 3, this.wdrightCounter >= this.limitFinishWD && (this.wdrightCounter = this.limitFinishWD);
                            var a = this.maxSteerVal * this.wdrightCounter / this.limitFinishWD;
                            this.cannonVehicle.setSteeringValue(-a, 0), this.cannonVehicle.setSteeringValue(-a, 1)
                        }
                    } else this._btnDir(), this.cannonVehicle.setSteeringValue(this._nRotate, 0), this.cannonVehicle.setSteeringValue(this._nRotate, 1)
                }
            }, {
                key: "_btnDir",
                value: function () {
                    if (ie.self && ie.self.active) {
                        H.instance.updateUi();
                        var e = ie.self.imgDir.rotation / -540;
                        this._nRotate = this._nMaxRotate * e
                    }
                }
            }, {
                key: "engineZero",
                value: function () {
                    this.cannonVehicle.applyEngineForce(0, 0), this.cannonVehicle.applyEngineForce(0, 1), this.cannonVehicle.applyEngineForce(0, 2), this.cannonVehicle.applyEngineForce(0, 3)
                }
            }, {
                key: "cleanTime",
                value: function () {
                    Laya.timer.clearAll(this)
                }
            }, {
                key: "gameOver",
                value: function (e) {
                    var t = this;
                    if (!this.isOver) {
                        this.isOver = !0, this.cleanTime();
                        var i = ie.self.residualTime;
                        H.instance.refreshRocker(), fe.RemoveUI(ie), Laya.timer.once(500, this, function () {
                            t.wdleftCounter = 0, t.wdrightCounter = 0, t.carMove = {
                                isStart: !1,
                                isMove: !1,
                                rotateType: null,
                                isBrake: !1
                            }, oe.self.gameOver(e, i)
                        })
                    }
                }
            }]), t
        }(E.GameObject),
        W = function (e) {
            function t() {
                var e;
                return _classCallCheck2(this, t), e = i.apply(this, arguments), e.shakeCount = -1, e.IsFollow = !1, e.lookPos = null, e.LookType = 1, e.moveOkfun = null, e.posZ = null, e.MoveSpeed = 5, e.speed = .7, e.rotOut = new Laya.Quaternion(0, 0, 0, 0), e.upDir = new Laya.Vector3(0, 1, 0), e.shakeDelta = .5, e
            }
            _inherits2(t, e);
            var i = _createSuper2(t);
            return _createClass2(t, [{
                key: "onAwake",
                value: function () {
                    _get2(_getPrototypeOf2(t.prototype), "onAwake", this).call(this), t.self = this, this.IsFollow = !1
                }
            }, {
                key: "onStart",
                value: function () {
                    this.SetDouPos()
                }
            }, {
                key: "StartFollow",
                value: function (e, t) {
                    var i = this,
                        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
                        o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 5;
                    this.IsFollow = !0, 1 == n ? (this.FollowObj = null, Laya.timer.once(600, this, function () {
                        i.FollowObj = e
                    })) : this.FollowObj = e, this.LookType = a, D.SetCameraPosByObj(this.gameObject, e, n), this.MoveSpeed = o, this.LookObj = t
                }
            }, {
                key: "StopFollow",
                value: function () {
                    this.IsFollow = !1
                }
            }, {
                key: "contineFollow",
                value: function () {
                    this.IsFollow = !0
                }
            }, {
                key: "onUpdate",
                value: function () {
                    1 == this.IsFollow && (this.FollowObj && null != this.FollowObj.transform && this.PosMove(), this.LookObj && null != this.LookObj.transform && this.engle())
                }
            }, {
                key: "PosMove",
                value: function () {
                    var e = this.FollowObj.transform.position.x - this.transform.position.x,
                        t = this.FollowObj.transform.position.y - this.transform.position.y,
                        i = this.FollowObj.transform.position.z - this.transform.position.z;
                    this.transform.position.x += e * this.speed, this.transform.position.y += t * this.speed, this.transform.position.z += i * this.speed, this.transform.position = this.transform.position
                }
            }, {
                key: "engle",
                value: function () {
                    1 == this.LookType ? this.transform.lookAt(this.LookObj.transform.position, this.upDir) : this.transform.rotationEuler = this.LookObj.transform.rotationEuler
                }
            }, {
                key: "SetDouPos",
                value: function () {
                    this.currentPosition = this.transform.localPosition.clone()
                }
            }, {
                key: "shake",
                value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : .5,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
                    this.shakeDelta = e, this.shakeCount = t
                }
            }, {
                key: "onLateUpdate",
                value: function () {
                    this.shakeCount > 0 && this.douMove()
                }
            }, {
                key: "douMove",
                value: function () {
                    this.shakeCount--, 0 == this.shakeCount || (this.transform.localPositionX = this.transform.localPositionX + (Math.random() * this.shakeDelta - this.shakeDelta / 2), this.transform.localPositionY = this.transform.localPositionY + (Math.random() * this.shakeDelta - this.shakeDelta / 2))
                }
            }]), t
        }(E.GameObject);
    W.self = null;
    var Y = new(function () {
            function e() {
                _classCallCheck2(this, e), this._IsGameStart = !1, this.isLoadSDKok = !1, this.cameraLook = null, this.MapParent = null, this.Player = null, this.PlayerManager = null
            }
            return _createClass2(e, [{
                key: "IsGameStart",
                get: function () {
                    return this._IsGameStart
                },
                set: function (e) {
                    this._IsGameStart = e
                }
            }, {
                key: "init",
                value: function () {
                    if ("wx" == me.getPlatform) {
                        var e = this;
                        wx.loadSubpackage({
                            name: "game3d",
                            success: function () {
                                wx.loadSubpackage({
                                    name: "main",
                                    success: function (t) {
                                        console.log("成功", t), m.ResState([g["SampleScene.ls"], g["pointTo.lh"]], e, e.addNode)
                                    },
                                    fail: function (e) {
                                        console.log("失败", e)
                                    }
                                })
                            },
                            fail: function (e) {
                                console.log("失败", e)
                            }
                        })
                    } else m.ResState([g["SampleScene.ls"], g["pointTo.lh"]], this, this.addNode)
                }
            }, {
                key: "addOnlineTime",
                value: function () {
                    u.OnlineTime < 180 && (u.OnlineTime += 1, s.emit("updateOnlineTime"))
                }
            }, {
                key: "addNode",
                value: function () {
                    this.Scene3D = Laya.stage.addChild(v["SampleScene.ls"]), this.Scene3D.zOrder = -1, this.Player = this.Scene3D.getChildByName("Player"), this.MapParent = this.Scene3D.getChildByName("Map"), this.DirectionalLight = this.Scene3D.getChildByName("Directional Light"), this.MainCamera = this.Scene3D.getChildByName("Main Camera"), this.Scene3D.fogRange = 3e3, this.MainCamera.enableHDR = !1, this.cameraLook = this.MainCamera.addComponent(W), this.Scene3D.addComponent(z), this.PlayerManager = this.Player.addComponent(F), this.Scene3D.addComponent(oe)
                }
            }, {
                key: "IsOpenShadow",
                value: function () {
                    this.DirectionalLight.shadowMode = Laya.ShadowMode.Hard, this.DirectionalLight.shadowDistance = 50, this.DirectionalLight.shadowResolution = 2048, this.DirectionalLight.shadowCascadesMode = Laya.ShadowCascadesMode.TwoCascades
                }
            }, {
                key: "SynGameStart",
                value: function () {}
            }]), e
        }()),
        z = function (e) {
            function t() {
                var e;
                return _classCallCheck2(this, t), e = i.call(this), e.cannonWorld = null, e._vCarWheelMeshs = [], e.vCannonBody = {}, e.vehicle = null, e._carBody = null, e._vObsBody = null, e.bUpdateWorld = !1, e._whellOption = {
                    radius: .5,
                    directionLocal: new CANNON.Vec3(0, -1, 0),
                    suspensionStiffness: 50,
                    suspensionRestLength: .3,
                    frictionSlip: 3,
                    dampingRelaxation: 2.2,
                    dampingCompression: 2.4,
                    maxSuspensionForce: 1e5,
                    rollInfluence: .01,
                    axleLocal: new CANNON.Vec3(-1, 0, 0),
                    chassisConnectionPointLocal: new CANNON.Vec3,
                    maxSuspensionTravel: .3,
                    customSlidingRotationalSpeed: 30,
                    useCustomSlidingRotationalSpeed: !0
                }, e.groundMaterial = null, e.cannonPos = new Laya.Vector3, e.cannonRot = new Laya.Quaternion, e.wheelPos = new Laya.Vector3, e.wheelRot = new Laya.Quaternion, t.self = _assertThisInitialized2(e), e.groundMaterial = new CANNON.Material("groundMaterial"), e.initCannonWorld(), e
            }
            _inherits2(t, e);
            var i = _createSuper2(t);
            return _createClass2(t, [{
                key: "initCannonWorld",
                value: function () {
                    this._createWorld()
                }
            }, {
                key: "_createWorld",
                value: function () {
                    this.cannonWorld = new CANNON.World, this.cannonWorld.broadphase = new CANNON.NaiveBroadphase, this.cannonWorld.gravity.set(0, -10, 0), this.cannonWorld.solver.iterations = 5, this.vCannonBody = {}
                }
            }, {
                key: "removeCar",
                value: function () {
                    this.vehicle.removeFromWorld(this.cannonWorld), this._vCarWheelMeshs = [], this._carBody = null
                }
            }, {
                key: "removeFloor",
                value: function (e) {
                    if (this.vCannonBody[e]) {
                        for (var t = 0; t < this.vCannonBody[e].length; t++) {
                            var i = this.vCannonBody[e][t];
                            i.sleep(), this.cannonWorld.remove(i)
                        }
                        delete this.vCannonBody[e]
                    }
                }
            }, {
                key: "resetWorld",
                value: function () {
                    this.bUpdateWorld = !1;
                    for (var e = 0; e < this.cannonWorld.bodies.length; e++) {
                        var t = this.cannonWorld.bodies[e];
                        t.sleep(), this.cannonWorld.remove(t)
                    }
                    this._carBody && this.cannonWorld.remove(this._carBody), this.vCannonBody = {}, this._vCarWheelMeshs = [], this.vehicle = null, this._carBody = null, this._createWorld()
                }
            }, {
                key: "initCar",
                value: function (e) {
                    arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    var t = e.getChildByName("mesh_car"),
                        i = t.meshRenderer.bounds.getExtent(),
                        n = t.getComponent(Laya.Rigidbody3D)._colliderShape,
                        a = new CANNON.Vec3(.5 * n.sizeX, .8 * i.y, .5 * n.sizeZ),
                        o = new CANNON.Box(a),
                        s = new CANNON.Material("wheelMaterial");
                    s.friction = .1, s.restitution = 0;
                    var r = new CANNON.Body({
                        mass: 2e3,
                        material: s
                    });
                    r.tag = C.CAR_BODY;
                    var l = {
                        chassisBody: r,
                        indexUpAxis: 1,
                        indexForwardAxis: 2,
                        indexRightAxis: 0
                    };
                    r.addShape(o), r.position.set(t.transform.position.x, t.transform.position.y, t.transform.position.z);
                    var h = new CANNON.RaycastVehicle(l);
                    h.addToWorld(this.cannonWorld), this.cannonWorld.addBody(h.chassisBody), this._layaTransfromToCannon(t, r), r.layaMesh = t, this._carBody = r;
                    for (var c = ["wheel_fl", "wheel_fr", "wheel_rl", "wheel_rr"], u = 0; u < c.length; u++) {
                        var d = e.getChildByName(c[u]),
                            y = this._whellOption,
                            f = d.meshRenderer.bounds.getExtent().y / 2;
                        null == X.self.mapid && (f += .15), y.radius = f, y.chassisConnectionPointLocal.set(d.transform.localPositionX, d.transform.localPositionY, d.transform.localPositionZ), h.addWheel(y), this._vCarWheelMeshs.push(d)
                    }
                    return this.vehicle = h, console.log("返回", h), h
                }
            }, {
                key: "updateWorld",
                value: function () {
                    this.cannonWorld.step(.02), this._updateAllTransfrom()
                }
            }, {
                key: "layaColiderToCannonBody",
                value: function (e, t, i) {
                    var n = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                        a = new Laya.Quaternion(e.transform.rotation.x, e.transform.rotation.y, e.transform.rotation.z, e.transform.rotation.w);
                    e.transform.rotation = new Laya.Quaternion(0, 0, 0, 0);
                    var o, s = {
                        mass: 0,
                        material: this.groundMaterial
                    };
                    s.material.friction = .5, s.material.restitution = 0;
                    var r = e.getComponent(Laya.PhysicsCollider)._colliderShape,
                        l = new CANNON.Vec3(.5 * r.sizeX, .5 * r.sizeY, .5 * r.sizeZ);
                    o = new CANNON.Box(l);
                    var h = new CANNON.Body(s);
                    return h.addShape(o), e.transform.rotation = a, this._layaTransfromToCannon(e, h), this.vCannonBody[t] ? this.vCannonBody[t].push(h) : this.vCannonBody[t] = [h], this.cannonWorld.addBody(h), n && e.getComponent(Laya.PhysicsCollider) && (e.getComponent(Laya.PhysicsCollider).enabled = !1), h.tag = i, h
                }
            }, {
                key: "layaMeshToCannonBody",
                value: function (e, t, i) {
                    var n = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                        a = new Laya.Quaternion(e.transform.rotation.x, e.transform.rotation.y, e.transform.rotation.z, e.transform.rotation.w);
                    e.transform.rotation = new Laya.Quaternion(0, 0, 0, 0);
                    var o, s = {
                        mass: 0,
                        material: this.groundMaterial
                    };
                    s.material.friction = .5, s.material.restitution = 0;
                    var r = e.meshRenderer.bounds.getExtent(),
                        l = new CANNON.Vec3(r.x, r.y, r.z);
                    o = new CANNON.Box(l);
                    var h = new CANNON.Body(s);
                    return h.addShape(o), e.transform.rotation = a, this._layaTransfromToCannon(e, h), this.vCannonBody[t] ? this.vCannonBody[t].push(h) : this.vCannonBody[t] = [h], this.cannonWorld.addBody(h), n && e.getComponent(Laya.PhysicsCollider) && (e.getComponent(Laya.PhysicsCollider).enabled = !1), h.tag = i, h
                }
            }, {
                key: "_layaTransfromToCannon",
                value: function (e, t) {
                    t && e && (t.position.set(e.transform.position.x, e.transform.position.y, e.transform.position.z), t.quaternion.set(e.transform.rotation.x, e.transform.rotation.y, e.transform.rotation.z, e.transform.rotation.w))
                }
            }, {
                key: "quaternionLayaToCannon",
                value: function (e) {
                    return new CANNON.Quaternion(e.x, e.y, e.z, e.w)
                }
            }, {
                key: "v3LayaToCannnon",
                value: function (e) {
                    return new CANNON.Vec3(e.x, e.y, e.z)
                }
            }, {
                key: "_cannonTransfromToLaya",
                value: function (e, t) {
                    e && t && (this.cannonPos.setValue(e.position.x, e.position.y, e.position.z), t.transform.position = this.cannonPos, this.cannonRot.x = e.quaternion.x, this.cannonRot.y = e.quaternion.y, this.cannonRot.z = e.quaternion.z, this.cannonRot.w = e.quaternion.w, t.transform.rotation = this.cannonRot)
                }
            }, {
                key: "_updateAllTransfrom",
                value: function () {
                    if (this.vehicle) {
                        for (var e = 0; e < this.vehicle.wheelInfos.length; e++) {
                            this.vehicle.updateWheelTransform(e);
                            var t = this.vehicle.wheelInfos[e].worldTransform,
                                i = this._vCarWheelMeshs[e];
                            this.wheelPos.setValue(t.position.x, t.position.y, t.position.z), this.wheelRot.x = t.quaternion.x, this.wheelRot.y = t.quaternion.y, this.wheelRot.z = t.quaternion.z, this.wheelRot.w = t.quaternion.w, i.transform.position = this.wheelPos, i.transform.rotation = this.wheelRot
                        }
                        var n = this._carBody.layaMesh;
                        this._cannonTransfromToLaya(this._carBody, n)
                    }
                }
            }, {
                key: "onUpdate",
                value: function () {
                    Y.IsGameStart && (this.cannonWorld.step(1 / 70), this._updateAllTransfrom())
                }
            }]), t
        }(Laya.Script3D);
    z.self = null;
    var X = function (e) {
        function t() {
            var e;
            return _classCallCheck2(this, t), e = i.call(this), e.FinishFun = null, e.assetsAll = [], e.levelMode = null, e.subpackagesLoad = !1, e.mapid = null, e.levelIndex = null, e.ConfigMap = null, e.level = null, e.levelConfig = null, e.TargetAll = null, e.targetIndex = 0, e.FX_tc_tck_1 = null, e.ColiderAll = null, e._driftIndex = 0, e.targetNum = null, e.curFloor = [], e.pointTo = null, e.startPos = null, e.initPos = new Laya.Vector3(0, 0, 0), t.self = _assertThisInitialized2(e), e
        }
        _inherits2(t, e);
        var i = _createSuper2(t);
        return _createClass2(t, [{
            key: "driftIndex",
            get: function () {
                return this._driftIndex
            },
            set: function (e) {
                console.log(e, "this._driftIndex", this._driftIndex), 0 != e && (this.driftPosAll.getChildAt(this._driftIndex).active = !1), this.driftPosAll.getChildAt(e) && (this.driftPosAll.getChildAt(e).active = !0), this._driftIndex = e
            }
        }, {
            key: "onAwake",
            value: function () {}
        }, {
            key: "LoadMap",
            value: function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    n = arguments.length > 3 ? arguments[3] : void 0;
                switch (null != t && (this.FinishFun = t), this.levelIndex = n, this.mapid = i, this.levelMode = e, e) {
                    case k.NormalMode:
                        this.assetsAll = ["NormalMode.lh", "NormalScene.lh"];
                        break;
                    case k.LicenseMode:
                        this.assetsAll = ["LicenseMode.lh", "LicenseScene.lh"];
                        break;
                    case k.CityMode:
                        this.assetsAll = ["CityMode.lh", "CityScene.lh"]
                }
                this.addGameMode(e)
            }
        }, {
            key: "addGameMode",
            value: function (e) {
                var t = oe.self.LevelScene.getChildByName("ColiderAll");
                if (t)
                    for (var i = 0; i < t.numChildren; i++) {
                        var n = t.getChildAt(i);
                        z.self.layaColiderToCannonBody(n, n.name, n.name)
                    }
                if (this.pointTo = this.gameObject.addChild(Laya.Sprite3D.instantiate(v["pointTo.lh"])), this.levelConfig = oe.self.curLevel, this.ColiderAll = this.levelConfig.getChildByName("ColiderAll"), this.ColiderAll)
                    for (var a = 0; a < this.ColiderAll.numChildren; a++) {
                        var o = this.ColiderAll.getChildAt(a);
                        z.self.layaColiderToCannonBody(o, o.name, o.name)
                    }
                var s = this.levelConfig.getChildByName("MeshColider");
                if (s)
                    for (var r = 0; r < s.numChildren; r++) {
                        var l = s.getChildAt(r);
                        z.self.layaMeshToCannonBody(l, l.name, l.name)
                    }
                this.levelConfig.getChildByName("SignalCheck"),
                    this.TargetAll = this.levelConfig.getChildByName("TargetAll"), this.targetIndex = 0, this.FX_tc_tck_1 = this.TargetAll.getChildAt(this.targetIndex).getChildByName("FX_tc_tck_1"), Y.PlayerManager.pointTig(), this.startPos = this.levelConfig.getChildByName("startPos"), Y.PlayerManager.gameObject.transform.position = this.startPos.transform.position, Y.PlayerManager.gameObject.transform.rotationEuler = this.startPos.transform.rotationEuler, Y.PlayerManager.init(this.FinishFun)
            }
        }, {
            key: "findPath",
            value: function (e) {
                return g[e]
            }
        }, {
            key: "distance",
            value: function (e, t) {
                var i = t.x - e.x,
                    n = t.z - e.z;
                return Math.sqrt(i * i + n * n)
            }
        }, {
            key: "ClearMap",
            value: function () {
                this.curFloor = [], this.FX_tc_tck_1 = null, z.self.resetWorld(), Y.PlayerManager.carSkin && (Y.PlayerManager.carSkin.removeSelf(), Y.PlayerManager.carSkin = null, Y.PlayerManager.carBodyMesh = null, Y.PlayerManager.boxcar = null, Y.PlayerManager.boxcarCollision = null), Y.PlayerManager.contactPoint = [0, 0, 0, 0], this.assetsAll.forEach(function (e) {
                    v[e].destroy(!0)
                }), this.assetsAll = [], this.gameObject.destroyChildren(), Laya.Resource.destroyUnusedResources(), "wx" == me.getPlatform && wx.triggerGC()
            }
        }]), t
    }(E.GameObject);
    X.self = null;
    var j = function (e) {//todo:商店界面
        function t() {
            var e;
            return _classCallCheck2(this, t), e = i.apply(this, arguments), e.lineNum = 0, e
        }
        _inherits2(t, e);
        var i = _createSuper2(t);
        return _createClass2(t, [{
            key: "onAwake",
            value: function () {
                t.self = this, console.log("加载关卡"),
					oe.self.curScene = 0, Laya.timer.loop(10, this, function e() {
                    this.quan.rotation += 5, this.lineNum >= 100 && (this.lineNum = 0), this.lineNum += .1, this.loading_line.value = Math.floor(this.lineNum) + "", 1 == t.isok && (this.closeview(), Laya.timer.clear(this, e))
                }, [], !0)
            }
        }, {
            key: "onEnable",
            value: function () {
                t.isok = !1
            }
        }, {
            key: "closeview",
            value: function () {
                t.DATA && t.DATA.close && t.DATA.close(), null != t.finishFun && t.finishFun(), t.finishFun = null, Laya.timer.clearAll(this), fe.RemoveUI(t)
            }
        }]), t
    }(i.View_gameLoadUI);
    j.NAME = "View_gameLoad", j.AUTO = !0, j.DATA = null, j.finishFun = null, j.isok = !1, j.self = null;
    var q = function (e) {
        function t() {
            var e;
            return _classCallCheck2(this, t), e = i.apply(this, arguments), e.generalSkin = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], e.videoSkin = [11, 12, 13, 14, 15], e._selectType = 0, e
        }
        _inherits2(t, e);
        var i = _createSuper2(t);
        return _createClass2(t, [{
            key: "selectType",
            get: function () {
                return this._selectType
            },
            set: function (e) {
                0 == e ? (this.hotSellBtn.skin = "main/btn_rexiao.png", this.viedeo.skin = "main/btn_guanjun.png", this.buyBtn.visible = !0, this.videoBtn.visible = !1) : (this.hotSellBtn.skin = "main/btn_guanjun.png", this.viedeo.skin = "main/btn_rexiao.png", this.buyBtn.visible = !1, this.videoBtn.visible = !0), this._selectType = e
            }
        }, {
            key: "onAwake",
            value: function () {
                t.self = this, s.on(L.UpdateGold, this, this.updateData), this.updateData(), this.AddListen(), this.skinData = u.carData
            }
        }, {
            key: "AddListen",
            value: function () {
                var e = this;
                T.util.on(this, this.hotSellBtn, function (t) {
                    e.selectType = 0
                }, Laya.Event.MOUSE_UP, T.btnType.scale),
					T.util.on(this, this.viedeo, function (t) {
                    e.selectType = 1
                }, Laya.Event.MOUSE_UP, T.btnType.scale),
					T.util.on(this, this.videoBtn, function (t) {
                    YYGGames.showReward(() => {
                        var t = e.getSkinTran(); - 1 != t ? f.showVideo(function (i) {
                            i && (e.videoBtn.visible = !1, e.buyBtn.visible = !1, oe.self.containerTig(!0, t), e.skinData.have.push(t), u.carData = JSON.parse(JSON.stringify(e.skinData)), u.durability[t] = x.CarConfig[t].durability, u.durability = u.durability)
                        }) : me.ShowTip("All vehicles obtained")
                    }, () => {}, "unlock car")
                }, Laya.Event.MOUSE_UP, T.btnType.scale), 
					T.util.on(this, this.backBtn, function (e) {
						//Plat.I.ShowInter()
                    YYGGames.showInterstitial(() => {
                        fe.ShowUI(te), fe.RemoveUI(t)
                    })
                }, Laya.Event.MOUSE_UP, T.btnType.scale),
					T.util.on(this, this.garageBtn, function (t) {
                    YYGGames.showInterstitial(() => {
                        var t = 0 == e.selectType ? e.generalSkin : e.videoSkin;
                        fe.ShowUI(J, {
                            skinArr: t
                        })
                    })
                }, Laya.Event.MOUSE_UP, T.btnType.scale),
					this.goldBtn.on(Laya.Event.CLICK, this, function () {
                    fe.ShowUI(G)
                }),
					T.util.on(this, this.buyBtn, function (t) {
                    if (u.gold >= 3e3) {
                        var i = e.getSkinTran();
                        if (-1 == i) return void me.ShowTip("All vehicles obtained");
                        u.gold -= 3e3, s.emit(L.UpdateGold), e.videoBtn.visible = !1, e.buyBtn.visible = !1, oe.self.containerTig(!0, i), e.skinData.have.push(i), u.carData = JSON.parse(JSON.stringify(e.skinData)), u.durability[i] = x.CarConfig[i].durability, u.durability = u.durability
                    } else fe.ShowUI(G)
                }, Laya.Event.MOUSE_UP, T.btnType.scale)
            }
        }, {
            key: "updateData",
            value: function () {
                this.goldNum.text = u.gold + ""
            }
        }, {
            key: "getSkinTran",
            value: function () {
                var e = this,
                    t = [];
                return (0 == this.selectType ? this.generalSkin : this.videoSkin).forEach(function (i) {
                    -1 == e.skinData.have.indexOf(i) && t.push(i)
                }), 0 != t.length ? t[Math.floor(Math.random() * t.length)] : -1
            }
        }, {
            key: "onTraliBtn",
            value: function (e) {}
        }]), t
    }(i.View_shopUI);
    q.NAME = "View_shop", q.AUTO = !0, q.DATA = null, q.self = null;
    var J = function (e) {
        function t() {
            var e;
            return _classCallCheck2(this, t), e = i.apply(this, arguments), e.skinData = null, e.starArr = [], e.selectIndex = 0, e.skinArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], e
        }
        _inherits2(t, e);
        var i = _createSuper2(t);
        return _createClass2(t, [{
            key: "onAwake",
            value: function () {
                s.on(L.UpdateGold, this, this.updateGold);
                var e = this;
                this.skinData = u.carData, this.starArr = u.durability, this.skinList.vScrollBarSkin = "", t.DATA && t.DATA.isShow && this.showDetailsBox(t.DATA.index), t.DATA && t.DATA.skinArr && (this.skinArr = t.DATA.skinArr);
                var i = 0;
                this.skinData.have.forEach(function (t) {
                    -1 != e.skinArr.indexOf(t) && i++
                }), this.carNum.text = "".concat(i, "/").concat(this.skinArr.length), this.initList(), this.AddListen(), this.updateGold()
            }
        }, {
            key: "initList",
            value: function () {
                for (var e = [], t = 0; t < this.skinArr.length; t++) {
                    var i = this.skinArr[t],
                        n = {
                            carSkin: "main/icon_car".concat(i + 1, ".png"),
                            select: this.skinData.use == i ? "main/icon_xuanze.png" : "",
                            name: {
                                text: x.CarConfig[i].name
                            },
                            start1: x.CarConfig[i].grade >= 1 ? "main/common_icon_star_02.png" : "main/common_icon_star_off.png",
                            start2: x.CarConfig[i].grade >= 2 ? "main/common_icon_star_02.png" : "main/common_icon_star_off.png",
                            start3: x.CarConfig[i].grade >= 3 ? "main/common_icon_star_02.png" : "main/common_icon_star_off.png",
                            start4: x.CarConfig[i].grade >= 4 ? "main/common_icon_star_02.png" : "main/common_icon_star_off.png",
                            start5: x.CarConfig[i].grade >= 5 ? "main/common_icon_star_02.png" : "main/common_icon_star_off.png",
                            unlockImg: -1 == this.skinData.have.indexOf(i) ? "main/tujian_mask.png" : ""
                        };
                    e.push(n)
                }
                this.skinList.array = e
            }
        }, {
            key: "updateGold",
            value: function () {
                this.goldNum.text = "".concat(u.gold)
            }
        }, {
            key: "AddListen",
            value: function () {
                var e = this;
                this.skinList.selectHandler = new Laya.Handler(this, function (t) {
                    console.log(t, "index"), -1 != e.skinData.have.indexOf(e.skinArr[t]) ? e.showDetailsBox(e.skinArr[t]) : me.ShowTip("Unlocked")
                }),
					T.util.on(this, this.goldBtn, function (e) {
                    fe.RemoveUI(G)
                }, Laya.Event.MOUSE_UP, T.btnType.scale),
					T.util.on(this, this.backBtn, function (e) {
						//Plat.I.ShowInter();
                    YYGGames.showInterstitial(() => {
                        fe.RemoveUI(t)
                    })
                }, Laya.Event.MOUSE_UP, T.btnType.scale),
					this.goldBtn.on(Laya.Event.CLICK, this, function () {
                    fe.ShowUI(G)
                }),
					T.util.on(this, this.shopBtn, function (e) {
                    YYGGames.showInterstitial(() => {
                        fe.ShowUI(j), oe.self.LoadMainScene(), j.DATA = {
                            close: function () {
                                console.log("加载完成"), fe.ShowUI(q)
                            }
                        }, fe.RemoveUI(te), fe.RemoveUI(t)
                    })
                }, Laya.Event.MOUSE_UP, T.btnType.scale), T.util.on(this, this.closeDetails, function (t) {
                    e.detailsBox.visible = !1
                }, Laya.Event.MOUSE_UP, T.btnType.scale), T.util.on(this, this.selectBtn, function (t) {
                    e.skinData.use = e.selectIndex, u.carData = JSON.parse(JSON.stringify(e.skinData)), e.initList(), e.detailsBox.visible = !1, te.self && te.self.active && te.self.updateView()
                }, Laya.Event.MOUSE_UP, T.btnType.scale), T.util.on(this, this.videoBtn, function (t) {
                    YYGGames.showReward(() => {
                        f.showVideo(function (t) {
                            u.durability[e.selectIndex] == x.CarConfig[e.selectIndex].durability ? y.showTips("Durability is full") : (t && (u.durability[e.selectIndex] = x.CarConfig[e.selectIndex].durability, u.durability = u.durability, e.durabilityNum.text = u.durability[e.selectIndex] + "", s.emit(L.UpdateDurability)), y.showTips("Vehicle maintenance, durability is full"))
                        })
                    }, () => {}, "repair")
                }, Laya.Event.MOUSE_UP, T.btnType.scale)
            }
        }, {
            key: "showDetailsBox",
            value: function (e) {
                this.selectIndex = e, this.carMain.skin = "main/icon_car".concat(e + 1, ".png"), this.detailsName.text = x.CarConfig[e].name;
                for (var t = 0; t < this.startBox.numChildren; t++) this.startBox.getChildAt(t).skin = x.CarConfig[e].grade > t ? "main/common_icon_star_02.png" : "main/common_icon_star_off.png";
                this.durabilityNum.text = u.durability[e] + "", this.detailsBox.visible = !0
            }
        }]), t
    }(i.View_GarageUI);
    J.NAME = "View_Garage", J.AUTO = !0, J.DATA = null;
    var K = function (e) {
        function t() {
            return _classCallCheck2(this, t), i.apply(this, arguments)
        }
        _inherits2(t, e);
        var i = _createSuper2(t);
        return _createClass2(t, [{
            key: "onAwake",
            value: function () {
                YYGGames.gameBanner.visible ? this.getChildAt(1).top = 35 : this.getChildAt(1).top = 178, this.AddListen(), this.buyBtn.visible = !0
            }
        }, {
            key: "AddListen",
            value: function () {
                T.util.on(this, this.videoBtn, function (e) {
                    YYGGames.showReward(() => {
                        f.showVideo(function (e) {
                            u.durability[u.carData.use] == x.CarConfig[u.carData.use].durability ? y.showTips("Durability is full") : (window.NAIJIU = 0, window.XIANSHI = !0, window.NAIJIU = x.CarConfig[u.carData.use].durability - u.durability[u.carData.use], e && (u.durability[u.carData.use] = x.CarConfig[u.carData.use].durability, u.durability = u.durability, s.emit(L.UpdateDurability), fe.RemoveUI(t)), y.showTips("Vehicle maintenance, durability is full"))
                        }, () => {})
                    })
                }, Laya.Event.MOUSE_UP, T.btnType.scale), T.util.on(this, this.buyBtn, function (e) {
                    u.durability[u.carData.use] == x.CarConfig[u.carData.use].durability ? y.showTips("Durability is full") : u.gold < 1e3 ? y.showTips("Lack of gold coins") : (u.gold -= 1e3, s.emit(L.UpdateGold), window.NAIJIU = 0, window.XIANSHI = !0, window.NAIJIU = x.CarConfig[u.carData.use].durability - u.durability[u.carData.use], u.durability[u.carData.use] = x.CarConfig[u.carData.use].durability, console.error("剩多少: " + u.durability[u.carData.use]), u.durability = u.durability, s.emit(L.UpdateDurability), fe.RemoveUI(t), y.showTips("Vehicle maintenance, durability is full"))
                }, Laya.Event.MOUSE_UP, T.btnType.scale), T.util.on(this, this.backBtn, function (e) {
                    fe.RemoveUI(t)
                }, Laya.Event.MOUSE_UP, T.btnType.scale)
            }
        }]), t
    }(i.View_RepairUI);
    K.NAME = "View_Repair", K.AUTO = !0, K.DATA = null;
    var Z = function (e) {
        function t() {
            var e;
            return _classCallCheck2(this, t), e = i.apply(this, arguments), e.skinData = null, e.skinConfig = null, e.tranSkin = null, e
        }
        _inherits2(t, e);
        var i = _createSuper2(t);
        return _createClass2(t, [{
            key: "onAwake",
            value: function () {
                var e = this;
                this.skinData = u.carData, this.initView(), T.util.ShowViewEff(this, function () {}), T.util.on(this, this.videoBtn, function (i) {
                    YYGGames.showReward(() => {
                        f.showVideo(function (i) {
                            i && (-1 != u.carData.have.indexOf(u.carData.use) && (u.lastUse = u.carData.use), e.skinData.use = t.DATA.skinNum, u.carData = JSON.parse(JSON.stringify(e.skinData)), u.durability[e.skinData.use] = x.CarConfig[e.skinData.use].durability, u.durability = u.durability, me.ShowTip("Trial success"), e.onBanck())
                        })
                    }, () => {}, "try skin")
                }, Laya.Event.MOUSE_UP, T.btnType.scale), T.util.on(this, this.closeBtn, function (t) {
                    e.onBanck()
                }, Laya.Event.MOUSE_UP, T.btnType.scale)
            }
        }, {
            key: "initView",
            value: function () {
                console.log(t.DATA.skinNum, "View_Skin.DATA.skinNum"), this.mainImg.skin = "main/icon_car".concat(t.DATA.skinNum + 1, ".png")
            }
        }, {
            key: "onBanck",
            value: function () {
                t.DATA.onClose(), fe.RemoveUI(t)
            }
        }]), t
    }(i.View_SkinUI);
    Z.NAME = "View_Skin", Z.AUTO = !0, Z.DATA = null;
    var Q = function (e) {
        function t() {
            var e;
            return _classCallCheck2(this, t), e = i.apply(this, arguments), e.cityConfig = null, e.skinData = null, e.curLevel = null, e.realLevel = null, e.maxLevel = null, e.durabilityNum = null, e.level = 0, e.videoSkin = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], e
        }
        _inherits2(t, e);
        var i = _createSuper2(t);
        return _createClass2(t, [{
            key: "onAwake",
            value: function () {
                s.on(L.UpdateGold, this, this.updateGold), this.curLevel = t.DATA.level, this.maxLevel = 2 * x.levelConfig[t.DATA.type], this.curLevel > this.maxLevel / 2 ? this.realLevel = Math.floor(Math.random() * this.maxLevel / 2) + 1 : this.realLevel = this.curLevel, oe.self.selectLevel(this.realLevel), this.skinData = u.carData, s.on(L.UpdateDurability, this, this.updateDurability), s.on(L.updateJIANAIJIU, this, this.updateJIANAIJIU), this.updateDurability(), this.updateView(), this.addListen(), this.updateGold()
            }
        }, {
            key: "updateDurability",
            value: function () {
                this.durabilityNum = u.durability[this.skinData.use], this.durabilityText.text = this.durabilityNum + "", this.JIANAIJIU.text = "+ " + window.NAIJIU, window.XIANSHI && (this.JIANAIJIU.visible = !0, Laya.timer.once(500, this, function (e) {
                    window.XIANSHI = !1, this.JIANAIJIU.visible = !1
                }))
            }
        }, {
            key: "updateJIANAIJIU",
            value: function () {}
        }, {
            key: "updateGold",
            value: function () {
                this.goldNum.text = "".concat(u.gold)
            }
        }, {
            key: "updateView",
            value: function () {
                this.levelMsg.text = "Scene ".concat(this.curLevel);
                var e = "main/btn_start.png";
                switch (t.DATA.type) {
                    case k.NormalMode:
                        this.curLevel > u.NormalLevel && (e = "main/btn_start_off.png"), Laya.Browser.onMiniGame && r.enterTrainMode && (r.enterTrainMode = !1, window.uma.trackEvent("enter_train_mode"));
                        break;
                    case k.LicenseMode:
                        this.curLevel > u.LicenseLevel && (e = "main/btn_start_off.png"), Laya.Browser.onMiniGame && r.enterLicenseMode && (r.enterLicenseMode = !1, window.uma.trackEvent("enter_ke_mode"));
                        break;
                    case k.CityMode:
                        this.curLevel > u.CityLevel && (e = "main/btn_start_off.png"), Laya.Browser.onMiniGame && r.enterCityMode && (r.enterCityMode = !1, window.uma.trackEvent("enter_city_mode"))
                }
                this.startBtn.skin = e
            }
        }, {
            key: "addListen",
            value: function () {
                var e = this;
                T.util.on(this, this.shopBtn, function (e) {
                    fe.ShowUI(j), oe.self.LoadMainScene(), j.DATA = {
                        close: function () {
                            console.log("加载完成"), fe.ShowUI(q)
                        }
                    }, fe.RemoveUI(t)
                }, Laya.Event.MOUSE_UP, T.btnType.scale),
					T.util.on(this, this.addDurability, function (e) {
                    fe.ShowUI(K, {
                        canBuy: !0
                    })
                }, Laya.Event.MOUSE_UP, T.btnType.scale),
					T.util.on(this, this.leftBtn, function (t) {
                    e.curLevel--, e.curLevel <= 0 && (e.curLevel = e.maxLevel), e.curLevel > e.maxLevel / 2 ? e.realLevel = Math.floor(Math.random() * e.maxLevel / 2) + 1 : e.realLevel = e.curLevel, oe.self.selectLevel(e.realLevel), e.updateView()
                }, Laya.Event.MOUSE_UP, T.btnType.scale),
					this.goldBtn.on(Laya.Event.CLICK, this, function () {
                    fe.ShowUI(G)
                }),
					T.util.on(this, this.rightBtn, function (t) {
                    e.curLevel++, e.curLevel > e.maxLevel && (e.curLevel = 1), e.curLevel > e.maxLevel / 2 ? e.realLevel = Math.floor(Math.random() * e.maxLevel / 2) + 1 : e.realLevel = e.curLevel, oe.self.selectLevel(e.realLevel), e.updateView()
                }, Laya.Event.MOUSE_UP, T.btnType.scale),
					T.util.on(this, this.startBtn, function (t) {
						//Plat.I.HideFloat();
						//Plat.I.ShowInter();
                    if ("main/btn_start.png" == e.startBtn.skin)
                        if (u.durability[u.carData.use] <= 0) fe.ShowUI(K);
                        else if (1 != e.curLevel) {
                        var i = e.getSkinTran(); - 1 != i ? fe.ShowUI(Z, {
                            onClose: function () {
                                e.onStart()
                            },
                            skinNum: i
                        }) : e.onStart()
                    } else e.onStart()
                }, Laya.Event.MOUSE_UP, T.btnType.scale),
					T.util.on(this, this.backBtn, function (e) {
						//Plat.I.ShowInter();
                    YYGGames.showInterstitial(() => {
                        fe.ShowUI(te), fe.RemoveUI(t)
                    })
                }, Laya.Event.MOUSE_UP, T.btnType.scale)
            }
        }, {
            key: "onStart",
            value: function () {
                var e = this;
                u.durability[u.carData.use]--, u.durability[u.carData.use] = u.durability[u.carData.use];
                var i = function () {
                    oe.self.gameStart(t.DATA.type, e.realLevel, e.curLevel), fe.RemoveUI(t)
                };
                de.startGame(i.bind(this))
            }
        }, {
            key: "getSkinTran",
            value: function () {
                var e = this,
                    t = [];
                return this.videoSkin.forEach(function (i) {
                    -1 == e.skinData.have.indexOf(i) && t.push(i)
                }), 0 != t.length ? t[Math.floor(Math.random() * t.length)] : -1
            }
        }]), t
    }(i.View_LevelUI);
    Q.NAME = "View_Level", Q.AUTO = !0, Q.DATA = null;
    var $ = function (e) {
        function t() {
            var e;
            return _classCallCheck2(this, t), e = i.apply(this, arguments), e.curOffTime = null, e.gold = 0, e.needCount = 1, e.closeCount = 0, e
        }
        _inherits2(t, e);
        var i = _createSuper2(t);
        return _createClass2(t, [{
            key: "onAwake",
            value: function () {
                var e = this;
                t.view = this, this.gold = 5e3, f.hideBanner(), de.canTrapAll && 1 == d.Config.remenBanner_count && (this.needCount = 2), T.util.on(this, this.videoBtn, function (t) {
                    u.OnlineTime < 300 ? y.showTips("时间还没到哦") : f.showVideo(function (t) {
                        t && (u.gold += 2 * e.gold, y.showTips("获得10000金币"), e.onBack())
                    })
                }, Laya.Event.MOUSE_UP, T.btnType.scale), T.util.on(this, this.contine, function (t) {
                    u.OnlineTime < 300 ? y.showTips("时间还没到哦") : (e.closeCount++, e.closeCount < e.needCount ? 1 == d.Config.Interface3 ? (f.ShowBottomSingleGrid(), Laya.timer.once(800, e, function () {
                        f.HideBottomSingleGrid()
                    })) : 2 == d.Config.Interface3 && (f.showBanner(), Laya.timer.once(800, e, function () {
                        f.hideBanner()
                    })) : (u.gold += e.gold, y.showTips("获得5000金币"), e.onBack()))
                }, Laya.Event.MOUSE_UP, T.btnType.scale), T.util.on(this, this.closeBtn, function (e) {
                    fe.RemoveUI(t)
                }, Laya.Event.MOUSE_UP, T.btnType.scale)
            }
        }, {
            key: "onBack",
            value: function () {
                p.PlayAudio("coin"), s.emit("UpdateGold"), u.OnlineTime = 0, fe.RemoveUI(t)
            }
        }]), t
    }(i.View_OffLineUI);
    $.NAME = "View_OffLine", $.AUTO = !0, $.DATA = null, $.view = null;
    var ee = function (e) {
        function t() {
            var e;
            return _classCallCheck2(this, t), e = i.apply(this, arguments), e.openSkin = "main/set-icon6.png", e.closeSkin = "main/set-icon7.png", e
        }
        _inherits2(t, e);
        var i = _createSuper2(t);
        return _createClass2(t, [{
            key: "onAwake",
            value: function () {
                var e = this;
                u.drivingType = 1, this.updateMusic(), this.updateDriving(), T.util.on(this, this.closeBtn, function (e) {
                    fe.RemoveUI(t)
                }, Laya.Event.MOUSE_UP, T.btnType.scale), T.util.on(this, this.operationBtn, function (t) {
                    0 == u.drivingType ? u.drivingType = 1 : u.drivingType = 0, e.updateDriving()
                }, Laya.Event.MOUSE_UP, T.btnType.scale), T.util.on(this, this.basicBtn, function (t) {
                    e.basicBox.visible = !0, e.layoutBox.visible = !1, e.basicBtn.skin = "main/btn__set_on.png", e.layoutBtn.skin = "main/btn__set_off.png"
                }, Laya.Event.MOUSE_UP, T.btnType.scale), T.util.on(this, this.layoutBtn, function (t) {
                    e.updateLayou(), e.basicBox.visible = !1, e.layoutBox.visible = !0, e.basicBtn.skin = "main/btn__set_off.png", e.layoutBtn.skin = "main/btn__set_on.png"
                }, Laya.Event.MOUSE_UP, T.btnType.scale), T.util.on(this, this.musicBtn, function (t) {
                    p.IsOpenMusic = !p.IsOpenMusic, e.updateMusic()
                }, Laya.Event.MOUSE_UP, T.btnType.scale), T.util.on(this, this.audioBtn, function (t) {
                    p.IsOpenAudio = !p.IsOpenAudio, e.updateMusic()
                }, Laya.Event.MOUSE_UP, T.btnType.scale), T.util.on(this, this.zhenBtn, function (t) {
                    p.IsZhen = !p.IsZhen, e.updateMusic()
                }, Laya.Event.MOUSE_UP, T.btnType.scale), T.util.on(this, this.autoBtn, function (t) {
                    1 == u.isAuto ? u.isAuto = 0 : u.isAuto = 1, Y.PlayerManager.isAuto = 1 == u.isAuto, e.updateMusic()
                }, Laya.Event.MOUSE_UP, T.btnType.scale), T.util.on(this, this.leftTig, function (t) {
                    0 != u.drivingView && (u.drivingView = 0, e.updateLayou())
                }, Laya.Event.MOUSE_UP, T.btnType.scale), T.util.on(this, this.rightTig, function (t) {
                    1 != u.drivingView && (u.drivingView = 1, e.updateLayou())
                }, Laya.Event.MOUSE_UP, T.btnType.scale)
            }
        }, {
            key: "updateLayou",
            value: function () {
                0 == u.drivingView ? (this.leftTig.getChildByName("tigIcon").visible = !0, this.rightTig.getChildByName("tigIcon").visible = !1) : (this.leftTig.getChildByName("tigIcon").visible = !1, this.rightTig.getChildByName("tigIcon").visible = !0)
            }
        }, {
            key: "updateDriving",
            value: function () {
                0 == u.drivingType ? this.operationBtn.skin = "main/btn_left.png" : this.operationBtn.skin = "main/btn_fangxiangpan1.png"
            }
        }, {
            key: "updateMusic",
            value: function () {
                this.musicBtn.getChildByName("tigIcon").visible = p.IsOpenMusic, this.audioBtn.getChildByName("tigIcon").visible = p.IsOpenAudio, this.zhenBtn.getChildByName("tigIcon").visible = p.IsZhen, this.autoBtn.getChildByName("tigIcon").visible = 1 == u.isAuto
            }
        }]), t
    }(i.View_SetUI);
    ee.NAME = "View_Set", ee.AUTO = !0, ee.DATA = null;
    var te = function (e) {
        function t() {
            var e;
            return _classCallCheck2(this, t), e = i.apply(this, arguments), 
				e.skinData = null, e.curCarId = null, e.signTime = null, e.signDay = null, e.carState = null, e
        }
        _inherits2(t, e);
        var i = _createSuper2(t);
        return _createClass2(t, [{//todo:主界面
            key: "onAwake",
            value: function () {
                t.self = this, s.on(L.UpdateGold, this, this.updateGold), 
					s.on(L.UpdateDurability, this, this.updateView), 
					this.skinData = u.carData, this.curCarId = this.skinData.use,
				-1 == this.skinData.have.indexOf(this.curCarId) && (this.skinData.use = u.lastUse,
					u.carData = JSON.parse(JSON.stringify(this.skinData))), 
					this.updateTime(), this.updateGold(), this.updateView(), this.Addlistener(), 
					this.signTime = u.signTime, this.signDay = u.signDay,
					s.on("updateOnlineTime", this, this.updateTime),
					this.BOX = t.self.getChildAt(1), this.XUAN = t.self.getChildAt(2),
					this.ZHU = t.self.getChildAt(3), this.FANHUI = this.XUAN.getChildAt(5),
					this.SOUND = this.BOX.getChildAt(1), this.PLAY = this.ZHU.getChildAt(1),
					this.PLAY.on(Laya.Event.MOUSE_UP, this, this.PLAYSHIJIAN),
					this.FANHUI.on(Laya.Event.MOUSE_UP, this, this.FANHUISHIJIAN),
					this.SOUND.on(Laya.Event.MOUSE_UP, this, this.SOUND_CLICK),
					this.FANHUI.visible = !1,
					window.ISZHUYE ? (this.XUAN.visible = !0, this.ZHU.visible = !1, this.goldBtn.visible = !0) 
						: (this.XUAN.visible = !1, this.ZHU.visible = !0, this.goldBtn.visible = !1), 
					YYGGames.audio.pause ? this.SOUND.skin = "main/icon_soundoff.png" : this.SOUND.skin = "main/icon_sound.png", Adapter.hideLoading()
  
					
				//Plat.I.ShowFloatMain()
            }
        }, {
            key: "updateGold",
            value: function () {
                this.goldNum.text = "".concat(u.gold)
            }
        }, {
            key: "updateView",
            value: function () {
                this.skinData = u.carData, this.curCarId = this.skinData.use, this.skinMain.skin = "main/icon_car".concat(this.curCarId + 1, ".png"), console.log(x.CarConfig.length, this.curCarId, "ConfigMap.CarConfig[this.curCarId]"), this.detailsName.text = x.CarConfig[this.curCarId].name;
                for (var e = 0; e < this.startBox.numChildren; e++) this.startBox.getChildAt(e).skin = x.CarConfig[this.curCarId].grade > e ? "main/common_icon_star_02.png" : "main/common_icon_star_off.png";
                this.durabilityNum.text = u.durability[this.curCarId] + ""
            }
        }, {
            key: "PLAYSHIJIAN",
            value: function () {
                YYGGames.showInterstitial(() => {
                    this.ZHU.visible = !1, this.XUAN.visible = !0, this.goldBtn.visible = !0, YYGGames.gameBox.visible = !1, window.ISZHUYE = !0
                })
            }
        },
			{
            key: "FANHUISHIJIAN",
            value: function () {
                this.ZHU.visible = !0, this.XUAN.visible = !1, this.goldBtn.visible = !1, YYGGames.gameBox.visible = !0, window.ISZHUYE = !1
            }
        }, {
            key: "SOUND_CLICK",
            value: function () {
                YYGGames.audio.pause = !YYGGames.audio.pause, YYGGames.audio.pause ? (this.SOUND.skin = "main/icon_soundoff.png", YYGGames.audio.stopMusic("res/sound/bgm.mp3")) : (this.SOUND.skin = "main/icon_sound.png", YYGGames.audio.playMusic("res/sound/bgm.mp3")), Laya.LocalStorage.setItem("Parking-ACE-3D-SOUND", YYGGames.audio.pause)
            }
        },
			{
            key: "isRefresh",
            value: function () {
                if (0 == this.signTime) return !0;
                var e = (new Date).setTime(this.signTime),
                    t = new Date(new Date(new Date(e + 864e5).toLocaleDateString()).getTime()).getTime();
                return (new Date).getTime() > t
            }
        }, {
            key: "updateTime",
            value: function () {
                var e = 300 - u.OnlineTime,
                    t = e % 60;
                t = t < 10 ? "0" + t : t, this.onlineTimeLab.text = Math.floor(e / 60) + " : " + t, 300 == u.OnlineTime ? (this.onlineTimeLab.text = "领取奖励", this.onlineTween.isPlaying || this.onlineTween.play(0, !0)) : this.onlineTween.isPlaying && (this.onlineTween.stop(), this.onlineGoldBtn.rotation = 0)
            }
        },
			{
            key: "Addlistener",
            value: function () {
                T.util.on(this, this.shopBtn, function (e) {
                    YYGGames.showInterstitial(() => {
                        fe.ShowUI(j), oe.self.LoadMainScene(), j.DATA = {
                            close: function () {
                                console.log("加载完成"), fe.ShowUI(q)
                            }
                        }, fe.RemoveUI(t)
                    })
                }, Laya.Event.MOUSE_UP, T.btnType.scale),
				T.util.on(this, this.CicyBtn, function (e) {
					//Plat.I.GameStart(u.CityLevel);
				YYGGames.showInterstitial(() => {
					fe.ShowUI(j), oe.self.LoadLevelScene(k.CityMode, u.CityLevel), j.DATA = {
						close: function () {
							console.log("加载完成"), fe.ShowUI(Q, {
								type: k.CityMode,
								level: u.CityLevel
							})
						}
					}, fe.RemoveUI(t)
				})
			}, Laya.Event.MOUSE_UP, T.btnType.scale),
				this.goldBtn.on(Laya.Event.CLICK, this, function () {
				fe.ShowUI(G)
			}),
				T.util.on(this, this.garageBtn, function (e) {
				YYGGames.showInterstitial(() => {
					fe.ShowUI(J, {
						isShow: !0,
						index: u.carData.use
					})
				})
			}, Laya.Event.MOUSE_UP, T.btnType.scale),
				T.util.on(this, this.moreGameBtn, function (e) {
				YYGGames.showInterstitial(() => {
					f.visibleFullGridAd()
				})
			}, Laya.Event.MOUSE_UP, T.btnType.scale),
				T.util.on(this, this.onlineGoldBtn, function (e) {
				fe.ShowUI($)
			}, Laya.Event.MOUSE_UP, T.btnType.scale), 
				T.util.on(this, this.NormalBtn, function (e) {
					//Plat.I.GameStart(u.NormalLevel);
				YYGGames.showInterstitial(() => {
					fe.ShowUI(j), oe.self.LoadLevelScene(k.NormalMode, u.NormalLevel), j.DATA = {
						close: function () {
							console.log("加载完成"), fe.ShowUI(Q, {
								type: k.NormalMode,
								level: u.NormalLevel
							})
						}
					}, fe.RemoveUI(t)
				})
			}, Laya.Event.MOUSE_UP, T.btnType.scale),
				T.util.on(this, this.LicenseBtn, function (e) {
					//Plat.I.GameStart(u.LicenseLevel);
					YYGGames.showInterstitial(() => {
					fe.ShowUI(j), oe.self.LoadLevelScene(k.LicenseMode, u.LicenseLevel), j.DATA = {
						close: function () {
							console.log("加载完成"), fe.ShowUI(Q, {
								type: k.LicenseMode,
								level: u.LicenseLevel
							})
						}
					}, fe.RemoveUI(t)
				})
			}, Laya.Event.MOUSE_UP, T.btnType.scale), 
				T.util.on(this, this.setParent, function (e) {
                    fe.ShowUI(ee, {
                        type: 0
                    })
                }, Laya.Event.MOUSE_UP, T.btnType.scale)
            }
        }, {
            key: "onDestroy",
            value: function () {
                Laya.Tween.clearAll(this), Laya.timer.clearAll(this)
            }
        }]), t
    }(i.View_mainUI);
    te.NAME = "View_main", te.AUTO = !0, te.DATA = null, te.self = null;
    var ie = function (e) {
        function t() {
            var e;
            return _classCallCheck2(this, t), e = i.apply(this, arguments), e.carState = null, e.mapConfig = null, e.iconSkinArr = ["sdkRes/btn_fenxiang.png", "sdkRes/btn_shenmi.png", "sdkRes/btn_renwu.png"], e.gameMode = null, e.isGuideMask = !1, e.guideType = null, e.gearsTween = null, e.startNum = 0, e.startTwee = null, e.lightStates = 0, e.residualTime = 18e4, e
        }
        _inherits2(t, e);
        var i = _createSuper2(t);
        return _createClass2(t, [{
            key: "onAwake",
            value: function () {
                if (u.drivingType = 1, u.durability[u.carData.use] += 1, 1 == Laya.LocalStorage.getItem("DIYICIJINRU") ? this.WENBENTISHI.visible = !1 : Laya.Browser.onPC ? (this.WENBENTISHI.visible = !0, Laya.LocalStorage.setItem("DIYICIJINRU", 1)) : this.WENBENTISHI.visible = !1, t.self = this, this.gearsTig("stopGear"), this.addListen(), this.jindu.text = "".concat(X.self.targetIndex, "/").concat(X.self.TargetAll.numChildren), X.self.levelMode == k.LicenseMode ? (this.driftTimeBox.visible = !0, this.gameTime()) : this.driftTimeBox.visible = !1, Laya.timer.loop(0, this, this.startDownTime), this.startBtnAmtor(), this.initRearview(), this.initDriving(), 1 == X.self.levelIndex && X.self.levelMode == k.NormalMode && (this.startBtn.top = NaN, this.startBtn.right = NaN, this.startBtn.centerX = 0, this.startBtn.centerY = -100), de.canTrapAll && d.Config.video_rewards ? (console.log("show game icon"), this.gameIcon.visible = !0, Laya.timer.loop(1e3 * d.Config.Refresh_video_rewards, this, this.updateGameIcon)) : (this.gameIcon.visible = !1, console.log("SDKMgr.canTrapAll", de.canTrapAll, "SeverConfig.Config.video_rewards", d.Config.video_rewards)), Laya.Browser.onMiniGame) switch (X.self.levelMode) {
                    case k.NormalMode:
                        u.NormalLevel <= 5 && window.uma.trackEvent("enter_train_mode_level", {
                            level: u.NormalLevel.toString()
                        });
                        break;
                    case k.LicenseMode:
                        u.LicenseLevel <= 5 && window.uma.trackEvent("enter_ke_mode_level", {
                            level: u.LicenseLevel.toString()
                        });
                        break;
                    case k.CityMode:
                        u.CityLevel <= 5 && window.uma.trackEvent("enter_city_mode_level", {
                            level: u.CityLevel.toString()
                        })
                }
            }
        }, {
            key: "onGameIconClick",
            value: function () {
                var e = this;
                this.gameIcon.skin == this.iconSkinArr[0] ? f.shareGame() : f.showVideo(function (t) {
                    t ? (u.gold += 1e3, y.showTips("Get 1000 coins"), s.emit(L.UpdateGold)) : e.updateGameIcon()
                })
            }
        }, {
            key: "updateGameIcon",
            value: function () {
                console.log("updateGameIcon"), this.gameIcon.skin == this.iconSkinArr[0] ? this.gameIcon.skin = this.iconSkinArr[1] : this.gameIcon.skin == this.iconSkinArr[1] ? this.gameIcon.skin = this.iconSkinArr[2] : this.gameIcon.skin = this.iconSkinArr[0]
            }
        }, {
            key: "initDriving",
            value: function () {
                1 == u.drivingView ? (this.leftBox.left = NaN, this.leftBox.right = 0, this.gearsBox.left = NaN, this.gearsBox.right = 50, this.rightBox.right = NaN, this.rightBox.left = 0, this.startBtn.right = NaN, this.startBtn.left = 35, this.camTig.right = NaN, this.camTig.left = 40) : (this.leftBox.left = 0, this.leftBox.right = NaN, this.gearsBox.left = 50, this.gearsBox.right = NaN, this.rightBox.right = 0, this.rightBox.left = NaN, this.startBtn.right = 35, this.startBtn.left = NaN, this.camTig.right = 40, this.camTig.left = NaN), this.updateDriving()
            }
        }, {
            key: "stopGuide",
            value: function () {
                var e = this;
                if (!this.isGuideMask) {
                    this.isGuideMask = !0, Y.IsGameStart = !1, e.TISHISHACHE();
                    var t = new Laya.Label("使用刹车停在目标车位");
                    t.visible = !1, this.addChild(t), t.fontSize = 40, t.color = "#903B06", t.x = Laya.stage.width / 2 - t.width / 2, t.y = Laya.stage.height / 2 - t.height, T.util.drawMask(this.stopImg, t), this.brakeBtn.once(Laya.Event.MOUSE_DOWN, this, function () {
                        this.brakeBtn.getChildAt(1).visible = !1, Y.IsGameStart = !0, T.util.RemoveDrawMask(), e.gearsTig("nullGear"), e.onePlayGuide("P")
                    })
                }
            }
        }, {
            key: "onePlayGuide",
            value: function (e) {
                this.guideType = e, this.gearsHand.visible = !0, "D" == e ? 1 == u.drivingView ? (this.gearsHand.rotation = 0, this.gearsHand.y = 185, this.gearsHand.x = -74, this.gearsAmtor()) : (this.gearsHand.rotation = 180, this.gearsHand.y = 185, this.gearsHand.x = 182, this.gearsAmtor()) : "P" == e && (1 == u.drivingView ? (this.gearsHand.rotation = 0, this.gearsHand.y = 32, this.gearsHand.x = -74, this.gearsAmtor()) : (this.gearsHand.rotation = 180, this.gearsHand.y = 32, this.gearsHand.x = 182, this.gearsAmtor()))
            }
        }, {
            key: "TISHISHACHE",
            value: function () {
                this.brakeBtn.getChildAt(1).visible = !0, 1 == u.drivingView ? (this.brakeBtn.getChildAt(1).x = -130, this.gearsAmtor1()) : (this.brakeBtn.getChildAt(1).x = -70, this.gearsAmtor1())
            }
        }, {
            key: "gearsAmtor",
            value: function () {
                var e = this;
                0 == u.drivingView ? this.gearsTween = Laya.Tween.to(this.gearsHand, {
                    x: 230
                }, 500, null, Laya.Handler.create(this, function () {
                    e.gearsTween = Laya.Tween.to(e.gearsHand, {
                        x: 182
                    }, 500, null, Laya.Handler.create(e, function () {
                        e.gearsAmtor()
                    }))
                })) : this.gearsTween = Laya.Tween.to(this.gearsHand, {
                    x: -150
                }, 500, null, Laya.Handler.create(this, function () {
                    e.gearsTween = Laya.Tween.to(e.gearsHand, {
                        x: -74
                    }, 500, null, Laya.Handler.create(e, function () {
                        e.gearsAmtor()
                    }))
                }))
            }
        }, {
            key: "gearsAmtor1",
            value: function () {
                var e = this;
                0 == u.drivingView ? this.gearsTween = Laya.Tween.to(this.brakeBtn.getChildAt(1), {
                    x: -70
                }, 500, null, Laya.Handler.create(this, function () {
                    e.gearsTween = Laya.Tween.to(e.brakeBtn.getChildAt(1), {
                        x: -130
                    }, 500, null, Laya.Handler.create(e, function () {
                        e.gearsAmtor1()
                    }))
                })) : this.gearsTween = Laya.Tween.to(this.brakeBtn.getChildAt(1), {
                    x: -130
                }, 500, null, Laya.Handler.create(this, function () {
                    e.gearsTween = Laya.Tween.to(e.brakeBtn.getChildAt(1), {
                        x: -70
                    }, 500, null, Laya.Handler.create(e, function () {
                        e.gearsAmtor1()
                    }))
                }))
            }
        }, {
            key: "gameTime",
            value: function () {
                Laya.timer.loop(2, this, this.updateTime)
            }
        }, {
            key: "startDownTime",
            value: function () {
                this.startNum--, this.startNum <= 0 ? (this.startTime.visible = !1, this.moveBox.visible = !0, Laya.timer.clear(this, this.startDownTime)) : this.startTime.skin = "main/".concat(this.startNum, ".png")
            }
        }, {
            key: "startBtnAmtor",
            value: function () {
                var e = this;
                this.startTwee = Laya.Tween.to(this.handTween, {
                    centerY: 150
                }, 500, null, Laya.Handler.create(this, function () {
                    e.startTwee = Laya.Tween.to(e.handTween, {
                        centerY: 115
                    }, 500, null, Laya.Handler.create(e, function () {
                        e.startBtnAmtor()
                    }))
                }))
            }
        }, {
            key: "initRearview",
            value: function () {
                var e = Y.PlayerManager.carBodyMesh.addChild(new Laya.Camera(0, .3, 1e3)),
                    t = Y.PlayerManager.carBodyMesh.getChildByName("rearviewPos");
                e.transform.position = t.transform.position, e.renderTarget = new Laya.RenderTexture(389, 125), e.renderingOrder = -1, e.clearFlag = Laya.CameraClearFlags.Sky;
                var i = new Laya.Texture(e.renderTarget, Laya.Texture.DEF_UV);
                this.rearview.graphics.drawTexture(i), this.rearviewBox.visible = !1
            }
        }, {
            key: "updateDriving",
            value: function () {
                0 == u.drivingType ? (this.leftBtn.visible = !0, this.rightBtn.visible = !0, this.btn_dir.visible = !1) : (this.leftBtn.visible = !1, this.rightBtn.visible = !1, this.btn_dir.visible = !0, H.instance.init(this.btn_dir, this.imgDir))
            }
        }, {
            key: "addListen",
            value: function () {
                var e = this;
                p.PlayAudio("engine"),
					Laya.stage.on(Laya.Event.KEY_DOWN, this, this.onKeyDownStage), 
					Laya.stage.on(Laya.Event.KEY_UP, this, this.onKeyDownStage),
					this.goBtn.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDownStage),
					this.goBtn.on(Laya.Event.MOUSE_OUT, this, this.onMouseDownStage), 
					this.brakeBtn.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDownStage),
					this.brakeBtn.on(Laya.Event.MOUSE_OUT, this, this.onMouseDownStage),
					this.leftBtn.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDownStage),
					this.rightBtn.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDownStage),
					this.leftBtn.on(Laya.Event.MOUSE_OUT, this, this.onMouseDownStage),
					this.rightBtn.on(Laya.Event.MOUSE_OUT, this, this.onMouseDownStage),
					Y.PlayerManager.carMove.isStart = !0, this.startBtn.visible = !1,
				1 == Laya.LocalStorage.getItem("Parking-ACE-3D-SHOUCI") || (e.onePlayGuide("D"), Laya.LocalStorage.setItem("Parking-ACE-3D-SHOUCI", 1)),
					this.startBtn.once(Laya.Event.CLICK, this, function () {
                        Y.PlayerManager.carMove.isStart = !0, e.startBtn.skin = "main/btn_stopdi.png", e.handTween.visible = !1, Laya.Tween.clear(e.startTwee), 1 == X.self.levelIndex && X.self.levelMode == k.NormalMode && (e.startBtn.centerX = e.startBtn.centerY = NaN, e.startBtn.top = 93, 1 == u.drivingView ? (e.startBtn.right = NaN, e.startBtn.left = 35) : (e.startBtn.right = 35, e.startBtn.left = NaN), e.onePlayGuide("D"))
                    }),
					this.leftLightBtn.on(Laya.Event.MOUSE_DOWN, this, function () {
                        1 == e.lightStates ? (e.lightStates = 0, Y.PlayerManager.lightTig(0)) : (e.lightStates = 1, Y.PlayerManager.lightTig(1))
                    }),
					this.rightLightBtn.on(Laya.Event.MOUSE_DOWN, this, function () {
                        2 == e.lightStates ? (e.lightStates = 0, Y.PlayerManager.lightTig(0)) : (e.lightStates = 2, Y.PlayerManager.lightTig(2))
                    }),
					T.util.on(this, this.camTig, function (e) {
                        Y.PlayerManager.camIndex++, Y.PlayerManager.camIndex >= Y.PlayerManager.lookPos.numChildren && (Y.PlayerManager.camIndex = 0), Y.PlayerManager.changViews()
                    }, Laya.Event.MOUSE_UP, T.btnType.scale),
                    this.gearsBox.on(Laya.Event.CLICK, this, function (t) {
                        "" != t.target.name && e.gearsTig(t.target.name)
                    }),
					this.gearsBox.on(Laya.Event.MOUSE_UP, this, function (t) {
                        "" != t.target.name && e.gearsTig(t.target.name)
                    }),
					T.util.on(this, this.setBtn, function (e) {
                        fe.ShowUI(ee, {
                            type: 1
                        })
                    }, Laya.Event.MOUSE_UP, T.btnType.scale),
					T.util.on(this, this.stopBtn, function (t) {
                        e.stopBox.visible = !0, Y.IsGameStart = !1
                    }, Laya.Event.MOUSE_UP, T.btnType.scale),
					T.util.on(this, this.mainBtn, function (e) {
						//Plat.I.ShowInter();
                        YYGGames.showInterstitial(() => {
                            0 != u.durability[u.carData.use] && (u.durability[u.carData.use] -= 1), fe.ShowUI(te), X.self.ClearMap(), fe.RemoveUI(t)
                        })
                    }, Laya.Event.MOUSE_UP, T.btnType.scale),
					T.util.on(this, this.replayBtn, function (t) {
                        YYGGames.showInterstitial(() => {
                            var t = u.carData; - 1 == t.have.indexOf(t.use) && (t.use = u.lastUse, u.carData = JSON.parse(JSON.stringify(t))), oe.self.gameReplay(), Y.IsGameStart = !0, e.stopBox.visible = !1
                        })
                    }, Laya.Event.MOUSE_UP, T.btnType.scale),
					T.util.on(this, this.continueBtn, function (t) {
                        YYGGames.showInterstitial(() => {
                            e.stopBox.visible = !1, Y.IsGameStart = !0
                        })
                    }, Laya.Event.MOUSE_UP, T.btnType.scale),
					T.util.on(this, this.closeStopBox, function (t) {
                        e.stopBox.visible = !1, Y.IsGameStart = !0
                    }, Laya.Event.MOUSE_UP, T.btnType.scale)
            }
        }, {
            key: "gearsTig",
            value: function (e) {
                switch (e) {
                    case "stopGear":
                        this.hideGear(), this.stopGear.getChildAt(0).visible = !0, this.gearsBtn.y = 10, Y.PlayerManager.gearsStates = 1, this.rearviewBox.visible = !1, 1 == X.self.levelIndex && X.self.levelMode == k.NormalMode && "P" == this.guideType && (this.gearsTween && (this.gearsTween.clear(), this.gearsTween = null), this.guideType = null, this.gearsHand.visible = !1);
                        break;
                    case "backGear":
                        this.hideGear(), this.backGear.getChildAt(0).visible = !0, this.gearsBtn.y = 60, Y.PlayerManager.gearsStates = 2, this.rearviewBox.visible = !0;
                        break;
                    case "nullGear":
                        this.hideGear(), this.nullGear.getChildAt(0).visible = !0, this.gearsBtn.y = 110, Y.PlayerManager.gearsStates = 3, this.rearviewBox.visible = !1;
                        break;
                    case "goGear":
                        this.gearsHand.visible = !1, this.WENBENTISHI.visible = !1, this.hideGear(), this.goGear.getChildAt(0).visible = !0, this.gearsBtn.y = 160, Y.PlayerManager.gearsStates = 4, this.rearviewBox.visible = !1, 1 == X.self.levelIndex && X.self.levelMode == k.NormalMode && "D" == this.guideType && (this.gearsTween && (this.gearsTween.clear(), this.gearsTween = null), this.guideType = null, this.gearsHand.visible = !1)
                }
            }
        }, {
            key: "hideGear",
            value: function () {
                this.stopGear.getChildAt(0).visible = !1, this.backGear.getChildAt(0).visible = !1, this.nullGear.getChildAt(0).visible = !1, this.goGear.getChildAt(0).visible = !1
            }
        }, {
            key: "onKeyDownStage",
            value: function (e) {
                if (0 != Y.IsGameStart) {
                    var t = "keyup" == e.type;
                    if ((t || "keydown" === e.type) && (u.drivingType = 0), t && "keydown" !== e.type) switch (e.keyCode) {
                        case Laya.Keyboard.W:
                            Y.PlayerManager.carMove.isMove = !1;
                            break;
                        case Laya.Keyboard.S:
                            Y.PlayerManager.carMove.isBrake = !1;
                            break;
                        case Laya.Keyboard.A:
                        case Laya.Keyboard.D:
                            Y.PlayerManager.carMove.rotateType = 0
                    } else switch (e.keyCode) {
                        case Laya.Keyboard.W:
                            Y.PlayerManager.carMove.isMove = !0;
                            break;
                        case Laya.Keyboard.S:
                            Y.PlayerManager.carMove.isBrake = !0;
                            break;
                        case Laya.Keyboard.A:
                            Y.PlayerManager.carMove.rotateType = 1;
                            break;
                        case Laya.Keyboard.D:
                            Y.PlayerManager.carMove.rotateType = 2
                    }
                }
            }
        }, {
            key: "onMouseDownStage",
            value: function (e) {
                if ("mouseout" == e.type && "mousedown" !== e.type) switch (e.target.name) {
                    case "goBtn":
                        this.goBtn.getChildAt(0).alpha = 1, Y.PlayerManager.carMove.isMove = !1;
                        break;
                    case "brakeBtn":
                        this.brakeBtn.getChildAt(0).alpha = 1, Y.PlayerManager.carMove.isBrake = !1;
                        break;
                    case "leftBtn":
                        this.leftBtn.getChildAt(0).alpha = 1, Y.PlayerManager.carMove.rotateType = 0;
                        break;
                    case "rightBtn":
                        this.rightBtn.getChildAt(0).alpha = 1, Y.PlayerManager.carMove.rotateType = 0
                } else switch (e.target.name) {
                    case "goBtn":
                        this.goBtn.getChildAt(0).alpha = .7, Y.PlayerManager.carMove.isMove = !0;
                        break;
                    case "brakeBtn":
                        this.brakeBtn.getChildAt(0).alpha = .7, Y.PlayerManager.carMove.isBrake = !0;
                        break;
                    case "leftBtn":
                        this.leftBtn.getChildAt(0).alpha = .7, Y.PlayerManager.carMove.rotateType = 1;
                        break;
                    case "rightBtn":
                        this.rightBtn.getChildAt(0).alpha = .7, Y.PlayerManager.carMove.rotateType = 2
                }
            }
        }, {
            key: "updateTime",
            value: function () {
                if (0 != Y.IsGameStart) {
                    this.residualTime -= 15, this.residualTime <= 0 && (console.log("游戏结束"), this.residualTime = null, Y.PlayerManager.gameOver(!1), Laya.timer.clear(this, this.updateTime));
                    var e = this.msToTime(this.residualTime);
                    this.downTime.text = "".concat(e.minutes, ":").concat(e.seconds)
                }
            }
        }, {
            key: "msToTime",
            value: function (e) {
                var t = Math.floor(e % 1e3),
                    i = Math.floor(e / 1e3 % 60),
                    n = Math.floor(e / 6e4 % 60);
                return {
                    minutes: n < 10 ? "0" + n : n,
                    seconds: i < 10 ? "0" + i : i,
                    milliseconds: t
                }
            }
        }]), t
    }(i.View_gameUI);
    ie.NAME = "View_game", ie.AUTO = !0, ie.DATA = null, ie.self = null;
    var ne = function (e) {
        function t() {
            return _classCallCheck2(this, t), i.apply(this, arguments)
        }
        _inherits2(t, e);
        var i = _createSuper2(t);
        return _createClass2(t, [{//todo:加载界面
            key: "onAwake",
            value: function () {
                console.log("加载界面"), Y.init(), de.showRemen && (f.visibleFullGridAd1(), f.visibleFullGridAd2())
				//Plat.I.SendAnay(Plat.Loading_Begin)
            }
        }, {
            key: "onEnable",
            value: function () {
                this.loading_line.value = 0, Laya.timer.loop(100, this, function e() {
                    this.loading_line.value += .01, 1 == t.isok && (this.closeview(), this.onUpdate(), Laya.timer.clear(this, e))
                }, [], !0), Laya.Browser.onMiniGame && r.firstEnterLoading && (r.firstEnterLoading = !1, window.uma.trackEvent("enter_loading"))
            }
        }, {
            key: "closeview",
            value: function () {
                var e = this;
                t.isok = !1, Laya.Tween.to(this.loading_line, {
                    value: 1
                }, 500, null, Laya.Handler.create(this, function () {
                    null != t.finishFun && t.finishFun(), t.finishFun = null, Laya.timer.clearAll(e), fe.HideUI(t), de.showRmenView(function () {
						//Plat.I.SendAnay(Plat.Loading_End)
                        fe.ShowUI(te), Laya.Browser.onMiniGame && r.passLoading && (r.firstEnterLoading = !1, window.uma.trackEvent("pass_loading"))
                    })
                }))
            }
        }, {
            key: "onUpdate",
            value: function () {
                let e = 0;
                var t = function () {
                    e += .05, Adapter.percent(100 * e), e >= 1 && Adapter.percent(100)
                };
                Laya.timer.loop(1, this, t)
            }
        }]), t
    }(i.View_loadingUI);
    ne.NAME = "View_loading", ne.AUTO = !0, ne.DATA = null, ne.finishFun = null, ne.isok = !1;
    var ae = function (e) {
        function t() {
            return _classCallCheck2(this, t), i.apply(this, arguments)
        }
        _inherits2(t, e);
        var i = _createSuper2(t);
        return _createClass2(t, [{
            key: "onAwake",
            value: function () {
                var e = this;
                this.updateView(), T.util.on(this, this.leftTig, function (t) {
                    0 != u.drivingView && (u.drivingView = 0, e.updateView())
                }, Laya.Event.MOUSE_UP, T.btnType.scale), T.util.on(this, this.rightTig, function (t) {
                    1 != u.drivingView && (u.drivingView = 1, e.updateView())
                }, Laya.Event.MOUSE_UP, T.btnType.scale), T.util.on(this, this.queBtn, function (e) {
                    fe.ShowUI(ie), Y.IsGameStart = !0, fe.RemoveUI(t)
                }, Laya.Event.MOUSE_UP, T.btnType.scale)
            }
        }, {
            key: "updateView",
            value: function () {
                0 == u.drivingView ? (this.leftTig.getChildByName("tigIcon").visible = !0, this.rightTig.getChildByName("tigIcon").visible = !1) : (this.leftTig.getChildByName("tigIcon").visible = !1, this.rightTig.getChildByName("tigIcon").visible = !0)
            }
        }]), t
    }(i.View_SetDrivingUI);
    ae.NAME = "View_SetDriving", ae.AUTO = !0, ae.DATA = null;
    var oe = function (e) {
        function t() {
            var e;
            return _classCallCheck2(this, t), e = i.call(this), e.mapControl = null, e.isLoadding = !1, e.curScene = 0, e.Trafficlight = null, e.targetDis = null, e.targetGold = null, e.level = null, e.MainScene = null, e.carMain = null, e.carboxMain = null, e.mainCam = null, e.lookCam = null, e.useCar = null, e.Container = null, e.rotrionCam = null, e.carSkin = null, e.LevelScene = null, e.levelConfig = null, e.levelCam = null, e.camPos = null, e.isLoadLevel = !1, e.curLevel = null, e.isLoadCar = !1, e.initCarPos = null, e.initCarAng = null, e.startMiniGamePos = null, t.self = _assertThisInitialized2(e), e
        }
        _inherits2(t, e);
        var i = _createSuper2(t);
        return _createClass2(t, [{
            key: "onAwake",
            value: function () {
                _get2(_getPrototypeOf2(t.prototype), "onAwake", this).call(this), this.init()
            }
        }, {
            key: "init",
            value: function () {
                this.mapControl = this.gameObject.getChildByName("Map").addComponent(X), Y.PlayerManager.isAuto = 1 == u.isAuto, ne.isok = !0
            }
        }, {
            key: "LoadMainScene",
            value: function () {
                var e = this;
                this.mapControl.ClearMap(), console.log("jia主界面"), m.ResState([g["MainScene.lh"]], this, function () {
                    e.MainScene = Y.MapParent.addChild(v["MainScene.lh"]), e.lookCam = e.MainScene.getChildByName("lookCam"), e.mainCam = e.MainScene.getChildByName("mainCam"), e.carMain = e.MainScene.getChildByName("carMain"), e.Container = e.MainScene.getChildByName("Container"), Y.cameraLook.StartFollow(e.mainCam, null), e.curScene = 1, j.isok = !0
                })
            }
        }, {
            key: "containerTig",
            value: function (e, t) {
                var i = this,
                    n = this.Container.getComponent(Laya.Animator);
                if (e) {
                    var a = "skin".concat(t, ".lh");
                    this.carSkin && (this.carSkin.removeSelf(), this.carSkin = null), m.ResState([g["".concat(a)]], this, function () {
                        i.carSkin = i.carMain.addChild(v["".concat(a)]), i.carSkin.transform.localPosition = new Laya.Vector3(0, 0, 0), n.play("show"), Laya.timer.once(2e3, i, function () {
                            q.self && q.self.active && (q.self.selectType = q.self.selectType), fe.ShowUI(J, {
                                isShow: !0,
                                index: t
                            }), n.play("hide")
                        })
                    })
                } else n.play("hide")
            }
        }, {
            key: "LoadLevelScene",
            value: function (e, t) {
                var i = this;
                switch (this.mapControl.ClearMap(), this.isLoadLevel = !1, e) {
                    case k.NormalMode:
                        m.ResState([g["NormalScene.lh"], g["NormalMode.lh"]], this, function () {
                            i.LevelScene = Y.MapParent.addChild(v["NormalScene.lh"]), i.levelConfig = v["NormalMode.lh"], i.AddLevelScene(t), i.curScene = 2, j.isok = !0
                        });
                        break;
                    case k.LicenseMode:
                        m.ResState([g["LicenseScene.lh"], g["LicenseMode.lh"]], this, function () {
                            i.LevelScene = Y.MapParent.addChild(v["LicenseScene.lh"]), i.levelConfig = v["LicenseMode.lh"], i.AddLevelScene(t), i.curScene = 2, j.isok = !0
                        });
                        break;
                    case k.CityMode:
                        m.ResState([g["CityScene.lh"], g["CityMode.lh"]], this, function () {
                            i.LevelScene = Y.MapParent.addChild(v["CityScene.lh"]), i.levelConfig = v["CityMode.lh"], i.AddLevelScene(t), i.curScene = 2, j.isok = !0
                        })
                }
            }
        }, {
            key: "AddLevelScene",
            value: function (e) {
                this.levelCam = this.LevelScene.getChildByName("levelCam"), this.camPos = this.levelCam.getChildByName("camPos"), Y.cameraLook.StartFollow(this.camPos, this.levelCam)
            }
        }, {
            key: "selectLevel",
            value: function (e) {
                this.curLevel && (this.curLevel.removeSelf(), this.curLevel = null), this.levelCam.transform.localRotationEulerY = 0;
                for (var t = 0; t < this.levelConfig.numChildren; t++) {
                    var i = this.levelConfig.getChildAt(t);
                    i.name == "level".concat(e) && (this.curLevel = this.LevelScene.addChild(Laya.Sprite3D.instantiate(i)))
                }
            }
        }, {
            key: "onUpdate",
            value: function () {
                2 == this.curScene && (this.levelCam.transform.localRotationEulerY += .5)
            }
        }, {
            key: "toggleCar",
            value: function (e) {
                var t = this,
                    i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                this.useCar && (this.useCar.destroy(!0), this.useCar = null), this.isLoadCar = !1, m.ResState([g["skin".concat(e, ".lh")]], this, function () {
                    t.useCar = t.carMain.addChild(v["skin".concat(e, ".lh")]), t.useCar.transform.localPosition = new Laya.Vector3(0, 0, 0), t.useCar.transform.localRotationEuler = new Laya.Vector3(0, 0, 0), t.useCar.transform.localScale = new Laya.Vector3(1, 1, 1), t.isLoadCar = !0, i && i()
                })
            }
        }, {
            key: "Loadmap",
            value: function (e, t, i) {
                var n = this;
                this.level = t, this.mapControl.LoadMap(e, function () {
                    n.isLoadding = !0, console.log("完成"), j.isok = !0
                }, t, i)
            }
        }, {
            key: "gameReplay",
            value: function () {
                fe.RemoveUI(ie), z.self.removeCar(), Y.PlayerManager.wdleftCounter = 0, Y.PlayerManager.wdrightCounter = 0, Y.PlayerManager.carMove = {
                    isStart: !1,
                    isMove: !1,
                    rotateType: null,
                    isBrake: !1
                }, Y.PlayerManager.contactPoint = [0, 0, 0, 0], X.self.TargetAll = X.self.levelConfig.getChildByName("TargetAll"), X.self.targetIndex = 0, X.self.FX_tc_tck_1 = X.self.TargetAll.getChildAt(X.self.targetIndex).getChildByName("FX_tc_tck_1"), Y.PlayerManager.pointTig(), Y.PlayerManager.gameObject.transform.position = X.self.startPos.transform.position, Y.PlayerManager.gameObject.transform.rotationEuler = X.self.startPos.transform.rotationEuler, Y.PlayerManager.init(function () {
                    Y.IsGameStart = !0, fe.ShowUI(ie)
                })
            }
        }, {
            key: "gameOver",
            value: function (e, t) {
                console.log("游戏结束", Y.IsGameStart), 0 != Y.IsGameStart && (Y.IsGameStart = !1, Y.PlayerManager.isOver = !1, Laya.timer.clearAll(this), fe.RemoveUI(ie), de.showGameOver(function () {
                    fe.ShowUI(se, {
                        iswin: e,
                        time: t
                    })
                }))
            }
        }, {
            key: "distance",
            value: function (e, t) {
                var i = t.x - e.x,
                    n = t.z - e.z;
                return Math.sqrt(i * i + n * n)
            }
        }, {
            key: "gameStart",
            value: function (e, i, n) {
                fe.ShowUI(j), j.DATA = {
                    close: function () {
                        console.log("加载完成"), 1 == n && e == k.NormalMode ? fe.ShowUI(ae) : (fe.ShowUI(ie), Y.IsGameStart = !0)
                    }
                }, t.self.Loadmap(e, i, n)
            }
        }]), t
    }(E.GameObject);
    oe.self = null;
    var se = function (e) {
        function t() {
            var e;
            return _classCallCheck2(this, t), e = i.apply(this, arguments), e.overGold = 10, e.needCount = 1, e.closeCount = 0, e
        }
        _inherits2(t, e);
        var i = _createSuper2(t);
        return _createClass2(t, [{
            key: "onAwake",
            value: function () {
                var e = this;
                this.skinData = u.carData, e.durabilityNum = null, t.view = this, this.JIANAIJIU.visible = !1, 
					u.offTime = (new Date).getTime(), this.isWin(t.DATA.iswin), 
				1 == d.Config.remenBanner_count && (this.needCount = 2), s.on(L.UpdateDurability, this, this.updateDurability),
					this.updateDurability(), s.on(L.UpdateGold, this, this.updateGold), this.updateGold(),
					T.util.on(this, this.videoBtn, function (t) {
                    YYGGames.showReward(() => {
                        YYGGames.gameBanner.visible = !1, 0 != u.durability[u.carData.use] && (u.durability[u.carData.use] -= 1), 
							f.showVideo(function (t) {
                            u.gold += 2 * e.overGold, y.showTips("Get " + 2 * e.overGold + " coins"), e.onBackLevel()
                        })
                    }, () => {}, Plat.Settlement_reward)
                }, Laya.Event.MOUSE_UP, T.btnType.scale),
					T.util.on(this, this.main, function (t) {
                    YYGGames.showInterstitial(() => {
                        YYGGames.gameBanner.visible = !1, 0 != u.durability[u.carData.use] && (u.durability[u.carData.use] -= 1), e.closeCount++, e.closeCount < e.needCount ? 1 == d.Config.Interface3 ? (f.ShowBottomSingleGrid(), Laya.timer.once(800, e, function () {
                            f.HideBottomSingleGrid()
                        })) : 2 == d.Config.Interface3 && (f.showBanner(), Laya.timer.once(800, e, function () {
                            f.hideBanner()
                        })) : (u.gold += e.overGold, y.showTips("Get " + e.overGold + " coins"), e.onBackLevel())
                    })
                }, Laya.Event.MOUSE_UP, T.btnType.scale),
					T.util.on(this, this.fangqi, function (t) {
                    YYGGames.showInterstitial(() => {
                        YYGGames.gameBanner.visible = !1, e.closeCount++, e.closeCount < e.needCount ? 1 == d.Config.Interface3 ? (f.ShowBottomSingleGrid(), Laya.timer.once(100, e, function () {
                            f.HideBottomSingleGrid()
                        })) : 2 == d.Config.Interface3 && (f.showBanner(), Laya.timer.once(100, e, function () {
                            f.hideBanner()
                        })) : e.onBackLevel1()
                    })
                }, Laya.Event.MOUSE_UP, T.btnType.scale),
					this.goldBtn.on(Laya.Event.CLICK, this, function () {
                    fe.ShowUI(G)
                }),
					T.util.on(this, this.lost.getChildAt(4), function (t) {
                    YYGGames.showReward(() => {
                        switch (YYGGames.gameBanner.visible = !1, X.self.levelMode) {
                            case k.NormalMode:
                                Laya.Browser.onMiniGame && u.NormalLevel <= 5 && window.uma.trackEvent("pass_train_mode_level", {
                                    level: u.NormalLevel.toString()
                                }), X.self.levelIndex == u.NormalLevel && (u.NormalLevel++, X.self.levelIndex++), X.self.mapid < x.levelConfig.NormalMode && X.self.mapid++;
                                break;
                            case k.LicenseMode:
                                Laya.Browser.onMiniGame && u.LicenseLevel <= 5 && window.uma.trackEvent("pass_ke_mode_level", {
                                    level: u.LicenseLevel.toString()
                                }), X.self.levelIndex == u.LicenseLevel && (u.LicenseLevel++, X.self.levelIndex++), X.self.mapid < x.levelConfig.LicenseMode && X.self.mapid++;
                                break;
                            case k.CityMode:
                                Laya.Browser.onMiniGame && u.CityLevel <= 5 && window.uma.trackEvent("pass_city_mode_level", {
                                    level: u.CityLevel.toString()
                                }), X.self.levelIndex == u.CityLevel && (u.CityLevel++, X.self.levelIndex++), X.self.mapid < u.CityLevel && X.self.mapid++
                        }
						- 1 == u.carData.have.indexOf(u.carData.use) && (u.carData.use = u.lastUse, u.carData = JSON.parse(JSON.stringify(u.carData))),
							e.closeCount++, e.closeCount < e.needCount ? 1 == d.Config.Interface3 ? (f.ShowBottomSingleGrid(), 
							Laya.timer.once(800, e, function () {
                            f.HideBottomSingleGrid()
                        })) : 2 == d.Config.Interface3 && (f.showBanner(), Laya.timer.once(800, e, function () {
                            f.hideBanner()
                        })) 
							: e.onBackLevel()
                    }, () => {}, "skip level")
                }, Laya.Event.MOUSE_UP, T.btnType.scale),
					T.util.on(this, this.restBtn, function (e) {
                    YYGGames.showInterstitial(() => {
                        var e = u.carData; - 1 == e.have.indexOf(e.use) && (e.use = u.lastUse, u.carData = JSON.parse(JSON.stringify(e))), u.durability[u.carData.use] <= 0 ? fe.ShowUI(K) : (u.durability[u.carData.use]--, u.durability = u.durability, oe.self.gameReplay(), fe.RemoveUI(t), YYGGames.gameBanner.visible = !1)
                    })
                }, Laya.Event.MOUSE_UP, T.btnType.scale),
					T.util.on(this, this.addDurability, function (e) {
                    fe.ShowUI(K, {
                        canBuy: !0
                    })
                }, Laya.Event.MOUSE_UP, T.btnType.scale),
					YYGGames.gameBanner.visible = !0
				
				//Plat.I.GameEnd(t.DATA.iswin, true)
            }
        }, {
            key: "closeEvent",
            value: function () {}
        }, {
            key: "updateGold",
            value: function () {
                this.goldBtn.getChildAt(0).text = "".concat(u.gold)
            }
        }, {
            key: "updateDurability",
            value: function () {
                this.durabilityNum = u.durability[this.skinData.use], this.durabilityText.text = this.durabilityNum + "", this.JIANAIJIU.text = "+ " + window.NAIJIU, window.XIANSHI && (this.JIANAIJIU.visible = !0, Laya.timer.once(500, this, function (e) {
                    window.XIANSHI = !1, this.JIANAIJIU.visible = !1
                }))
            }
        }, {
            key: "onBackLevel",
            value: function () {
				//Plat.I.GameNext(Plat.Back)
                X.self.ClearMap(), fe.ShowUI(j), oe.self.LoadLevelScene(X.self.levelMode, X.self.mapid), j.DATA = {
                    close: function () {
                        console.log("加载完成"), fe.ShowUI(Q, {
                            type: X.self.levelMode,
                            level: X.self.levelIndex
                        })
                    }
                }, fe.RemoveUI(t)
            }
        }, {
            key: "onBackLevel1",
            value: function () {
                X.self.ClearMap(), fe.ShowUI(j), oe.self.LoadLevelScene(X.self.levelMode, X.self.mapid), j.DATA = {
                    close: function () {
                        console.log("加载完成"), fe.ShowUI(te, {
                            type: X.self.levelMode,
                            level: X.self.levelIndex
                        })
                    }
                }, fe.RemoveUI(t)
            }
        }, {
            key: "onBack",
            value: function () {
                me.goldAmtor({
                    centerX: 0,
                    centerY: 130
                }), fe.ShowUI(te), X.self.ClearMap(), fe.RemoveUI(t)
            }
        }, {
            key: "isWin",
            value: function (e) {
                if (console.log("iswin", e), 1 == e) {
                    switch (p.PlayAudio("win"), this.logoImg.skin = "main/win.png", this.win.visible = !0, this.lost.visible = !1, X.self.levelMode) {
                        case k.NormalMode:
                            Laya.Browser.onMiniGame && u.NormalLevel <= 5 && window.uma.trackEvent("pass_train_mode_level", {
                                level: u.NormalLevel.toString()
                            }), X.self.levelIndex == u.NormalLevel && (u.NormalLevel++, X.self.levelIndex++), X.self.mapid < x.levelConfig.NormalMode && X.self.mapid++;
                            break;
                        case k.LicenseMode:
                            Laya.Browser.onMiniGame && u.LicenseLevel <= 5 && window.uma.trackEvent("pass_ke_mode_level", {
                                level: u.LicenseLevel.toString()
                            }), X.self.levelIndex == u.LicenseLevel && (u.LicenseLevel++, X.self.levelIndex++), X.self.mapid < x.levelConfig.LicenseMode && X.self.mapid++;
                            break;
                        case k.CityMode:
                            Laya.Browser.onMiniGame && u.CityLevel <= 5 && window.uma.trackEvent("pass_city_mode_level", {
                                level: u.CityLevel.toString()
                            }), X.self.levelIndex == u.CityLevel && (u.CityLevel++, X.self.levelIndex++), X.self.mapid < u.CityLevel && X.self.mapid++
                    }
                    this.overGold = 1e3, this.goldNum.text = "×" + this.overGold
                } else console.log("失败"), p.PlayAudio("fail"), this.logoImg.skin = "main/lose.png", this.win.visible = !1, this.lost.visible = !0, this.overGold = 0
            }
        }, {
            key: "msToTime",
            value: function (e) {
                var t = Math.floor(e % 1e3),
                    i = Math.floor(e / 1e3 % 60),
                    n = Math.floor(e / 6e4 % 60);
                return {
                    minutes: n < 10 ? "0" + n : n,
                    seconds: i < 10 ? "0" + i : i,
                    milliseconds: t
                }
            }
        }]), t
    }(i.View_endUI);
    se.NAME = "View_end", se.AUTO = !0, se.DATA = null, se.view = null;
    var re = function (e) {
        function t() {
            var e;
            return _classCallCheck2(this, t), e = i.apply(this, arguments), e.chest_cat_open_box = null, e.chest_car_bar = null, e.boxImg = null, e.Progress = 0, e.RandomBoxVallue = .6, e.BoxClickAddValue = .1, e.BoxFrameSubValue = .003, e.viewData = null, e._isShowBn1 = !1, e
        }
        _inherits2(t, e);
        var i = _createSuper2(t);
        return _createClass2(t, [{
            key: "onAwake",
            value: function () {
                t.instance = this, this.RandomBoxVallue = .1 + .3 * Math.random(), this.chest_cat_open_box.on(Laya.Event.CLICK, this, this.OpenChestEvent), Laya.timer.frameLoop(1, this, this.onTimeEvent), Laya.timer.once(3e3, this, function () {
                    f.hideBanner()
                })
            }
        }, {
            key: "opened",
            value: function (e) {
                e && (this.viewData = e)
            }
        }, {
            key: "onTimeEvent",
            value: function () {
                this.Progress -= this.BoxFrameSubValue, this.Progress < 0 && (this.Progress = 0), this.chest_car_bar.value = this.Progress
            }
        }, {
            key: "OpenChestEvent",
            value: function () {
                var e = this;
                Laya.Tween.to(this.boxImg, {
                    rotation: 20
                }, 100, null, Laya.Handler.create(this, function () {
                    Laya.Tween.to(e.boxImg, {
                        rotation: -20
                    }, 100, null, Laya.Handler.create(e, function () {
                        Laya.Tween.to(e.boxImg, {
                            rotation: 0
                        }, 100, null)
                    }))
                })), this.Progress += this.BoxClickAddValue, this.chest_car_bar.value = this.Progress, this.showJumpBn1()
            }
        }, {
            key: "showJumpBn1",
            value: function () {
                var e = this;
                this._isShowBn1 || this.Progress >= this.RandomBoxVallue && (1 == d.Config.Interface2 ? f.ShowBottomSingleGrid1() : 2 == d.Config.Interface2 && f.showBanner(), this._isShowBn1 = !0, de.addCoin(500), Laya.timer.once(2e3, this, function () {
                    y.showTips("恭喜您获得500金币"), e._isShowBn1 = !1, f.HideBottomSingleGrid1(), e.onclosed()
                }))
            }
        }, {
            key: "onclosed",
            value: function () {
                de.closeUI(ce.BannerBox), this.viewData.close && this.viewData.close(), f.HideBottomSingleGrid(), f.hideBanner()
            }
        }]), t
    }(Laya.Script);
    re.instance = null;
    var le = function (e) {
        function t() {
            var e;
            return _classCallCheck2(this, t), e = i.apply(this, arguments), e.chest_car_bar = null, e.videoBanner = null, e.btnPress = null, e.imgEffect = null, e.imgGift = null, e.light = null, e.progressValue = 0, e.Progress = 0, e.RandomBoxVallue = .6, e.BoxClickAddValue = .1, e.viewData = null, e.BoxFrameSubValue = .003, e._isShowBn1 = !1, e
        }
        _inherits2(t, e);
        var i = _createSuper2(t);
        return _createClass2(t, [{
            key: "onAwake",
            value: function () {
                Laya.timer.frameLoop(1, this, this.onTimeEvent), t.instance = this, this.videoBanner.on(Laya.Event.CLICK, this, function () {
                    f.showVideo(function (e) {
                        e && (u.gold += 1e3, y.showTips("恭喜获得1000金币奖励"))
                    })
                })
            }
        }, {
            key: "onEnable",
            value: function () {
                this.btnPress.on(Laya.Event.CLICK, this, this.onPress), Laya.timer.frameLoop(1, this, this.reFreshUI), this.tweenScale(), f.showBanner()
            }
        }, {
            key: "opened",
            value: function (e) {
                e && (this.viewData = e), null == f.fullGridAd1 || f.fullGridError1 ? null == f.fullGridAd2 || f.fullGridError2 || (this.imgGift.centerX += 100, this.light.centerX += 100, this.imgEffect.centerX += 100) : (this.imgGift.centerX -= 100, this.light.centerX -= 100, this.imgEffect.centerX -= 100)
            }
        }, {
            key: "onTimeEvent",
            value: function () {
                this.Progress -= this.BoxFrameSubValue, this.Progress < 0 && (this.Progress = 0), this.chest_car_bar.value = this.Progress
            }
        }, {
            key: "OpenChestEvent",
            value: function () {}
        }, {
            key: "onClosed",
            value: function () {
                f.hideBanner(), f.visibleFullGridAd1(!1), f.visibleFullGridAd2(!1), Laya.timer.clearAll(this), Laya.Tween.clearAll(this.imgEffect), de.closeUI(ce.GeziBox), de.bannerBox ? de.openUI(ce.BannerBox, {
                    close: this.viewData.close
                }) : this.viewData.close && this.viewData.close()
            }
        }, {
            key: "onPress",
            value: function () {
                var e = this;
                this.progressValue += de.wuchuProgressStepAdd, Laya.Tween.to(this.imgGift, {
                    scaleX: 1.2,
                    scaleY: 1.2
                }, 100, null, Laya.Handler.create(this, function () {
                    Laya.Tween.to(e.imgGift, {
                        scaleX: 1,
                        scaleY: 1
                    }, 100, null)
                })), this.Progress += this.BoxClickAddValue, this.chest_car_bar.value = this.Progress, this.showJumpBn1()
            }
        }, {
            key: "showJumpBn1",
            value: function () {
                var e = this;
                this._isShowBn1 || this.Progress >= this.RandomBoxVallue && (this._isShowBn1 = !0, f.visibleFullGridAd1(), f.visibleFullGridAd2(), f.fullGridError1 && f.fullGridError2 && d.Config.video_banner2 && (this.videoBanner.visible = !0), Laya.timer.once(2e3, this, function () {
                    e.onClosed()
                }))
            }
        }, {
            key: "reFreshUI",
            value: function () {
                this.progressValue > de.wuchuProgressFrameSub && (this.progressValue -= de.wuchuProgressFrameSub), this.light.rotation += 1
            }
        }, {
            key: "tweenScale",
            value: function () {
                var e = this,
                    t = 200;
                Laya.Tween.to(this.imgEffect, {
                    scaleX: 1.2,
                    scaleY: 1.2,
                    alpha: .8
                }, t), Laya.timer.once(t, this, function () {
                    Laya.Tween.to(e.imgEffect, {
                        scaleX: 1,
                        scaleY: 1,
                        alpha: 1
                    }, t), Laya.timer.once(t, e, e.tweenScale)
                })
            }
        }]), t
    }(Laya.Script);
    le.instance = null;
    var he = function (e) {
        function t() {
            var e;
            return _classCallCheck2(this, t), e = i.apply(this, arguments), e.btnContinue = null, e.videoReward = null, e.clickCount = 0, e.viewData = null, e.flag = null, e.needClickCount = 1, e
        }
        _inherits2(t, e);
        var i = _createSuper2(t);
        return _createClass2(t, [{
            key: "onAwake",
            value: function () {
                this.btnContinue.on(Laya.Event.CLICK, this, this.onContinueBtn), this.videoReward.on(Laya.Event.CLICK, this, function () {
                    f.showVideo(function (e) {
                        e && (u.gold += 1e3, y.showTips("恭喜您获得1000金币"), s.emit(L.UpdateGold))
                    })
                }), t.instance = this, de.canTrapAll && 1 == d.Config.remenBanner_count1 && (this.needClickCount = 2)
            }
        }, {
            key: "onEnable",
            value: function () {
                var e = this;
                console.log("热门界面"), de.remenBanner ? (console.log("热门界面底部广告曝光"), 1 == d.Config.Interface1 ? de.singleGridShowHide() : 2 == d.Config.Interface1 && de.bannerShowHide()) : Laya.timer.once(2500, this, function () {
                    f.HideBottomSingleGrid(), f.hideBanner()
                }), Laya.timer.once(2e3, this, function () {
                    f.fullGridError1 && f.fullGridError2 && d.Config.video_banner2 && (e.videoReward.visible = !0)
                })
            }
        }, {
            key: "opened",
            value: function (e) {
                e && (this.viewData = e, this.flag = e.flag), f.fullGridAd1.isShow() || f.visibleFullGridAd1(), f.fullGridAd2.isShow() || f.visibleFullGridAd2()
            }
        }, {
            key: "onContinueBtn",
            value: function () {
                if (this.clickCount++, this.clickCount >= this.needClickCount) {
                    if (de.stopGridShowHide = !0, de.stopShowHide = !0, f.visibleFullGridAd1(!1), f.visibleFullGridAd2(!1), Laya.timer.clearAll(this), de.closeUI(ce.Remen), f.HideBottomSingleGrid(), f.hideBanner(), de.isShowRemen = !1, de.startGridBox && 0 == this.flag) return void de.openUI(ce.GeziBox, {
                        close: this.viewData.close
                    });
                    if (de.endGridBox && 4 == this.flag) return void de.openUI(ce.GeziBox, {
                        close: this.viewData.close
                    });
                    if (de.bannerBox && 1 == this.flag) return console.log("打开Banner宝箱"), void de.openUI(ce.BannerBox, {
                        close: this.viewData.close
                    });
                    this.viewData.close && this.viewData.close()
                }
            }
        }]), t
    }(Laya.Script);
    he.instance = null;
    var ce, ue, de = function () {
        function e() {
            _classCallCheck2(this, e)
        }
        return _createClass2(e, null, [{
            key: "init",
            value: function () {
                
            }
        }, {
            key: "requestNum",
            get: function () {
                return this._requestNum
            },
            set: function (t) {
                this._requestNum = t, 2 == this._requestNum && (f.initAd(), e.LoadFiniEvent())
            }
        }, {
            key: "LoadFiniEvent",
            value: function () {
                -1 == d.Config.Regional_shielding.split(",").indexOf(this.userareaKey.split("_")[0]) ? this.AreaStaus = 1 : this.AreaStaus = 2, d.Config.channel_ditch && (this._allowScene = this.setScene(), this._allowScene ? this._channel_ditch = 1 == this.AreaStaus : this._channel_ditch = !1), console.log("SeverConfig.Config", d.Config)
            }
        }, {
            key: "initData",
            value: function () {
                wx.request({
                    url: "",
                    header: {
                        "content-type": "application/json"
                    },
                    success: function (t) {
                        console.log(t.data), d.Config = t.data.info, d.Ad = t.data.ad, e.requestNum += 1
                    },
                    fail: function (t) {
                        console.log(t), e.requestNum += 1
                    }
                }), this.getAreaData()
            }
        }, {
            key: "getAreaData",
            value: function () {
                this.userareaKey = wx.getStorageSync("userareaKey"), 0 != this.userareaKey.length && this.userareaKey.split("_")[1] == (new Date).getDay() ? (e.requestNum += 1, console.log(this.userareaKey.split("_")[1], (new Date).getDay(), "wx.setStorageSync")) : (console.log("缓存没有地区信息,请求api", this.userareaKey.split("_")), wx.request({
                    url: "",
                    header: {
                        "content-type": "application/json"
                    },
                    success: function (t) {
                        this.userarea = t.data[1], wx.setStorageSync("userareaKey", "".concat(this.userarea, "_").concat((new Date).getDay())), e.requestNum += 1
                    },
                    fail: function (t) {
                        console.log(t), e.requestNum += 1
                    }
                }))
            }
        }, {
            key: "setScene",
            value: function () {
                if (console.log(d.Config.sceneList, "sceneList"), Laya.Browser.onWeiXin && d.Config.sceneList) {
                    var e = Laya.Browser.window.wx.getLaunchOptionsSync().scene;
                    if (d.Config.channel_ditch) {
                        var t = wx.getStorageSync("sceneid");
                        0 == t.length ? wx.setStorageSync("sceneid", e) : e = t
                    }
                    console.log(e, "sceneInfo用户场景值", d.Config.sceneList);
                    var i = e.toString();
                    return console.log("Scene", i), -1 != d.Config.sceneList.split(",").indexOf(i)
                }
                return !0
            }
        }, {
            key: "showRmenView",
            value: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                "wx" == y.getPlatform ? e.showRemen ? e.openUI(ce.Remen, {
                    close: t,
                    flag: 0
                }) : e.startGridBox ? e.openUI(ce.GeziBox, {
                    close: t
                }) : t && t() : t && t()
            }
        }, {
            key: "inHomePage",
            value: function (t) {
                console.log("inHomePage"), "wx" != y.getPlatform || this.isShowRemen || (Laya.timer.once(1e3 * d.Config.homeBanner_time, this, function () {
                    f.showBanner()
                }), e.isShowRemen = !1)
            }
        }, {
            key: "startGame",
            value: function (t) {
                if ("wx" == y.getPlatform) return e.startRemen ? (f.visibleSingleGridAdLeft(!1), f.visibleSingleGridAdRight(!1), f.hideBanner(), void e.openUI(ce.Remen, {
                    close: t,
                    flag: 0
                })) : void(t && t());
                t && t()
            }
        }, {
            key: "inGame",
            value: function () {
                "wx" == y.getPlatform && (1 == Number(d.Config.GameBanner) ? f.showBanner() : f.hideBanner(), 1 == Number(d.Config.GameGrid) ? f.visibleSingleGridAdLeft() : f.visibleSingleGridAdLeft(!1), f.visibleLeftGrid(!1), f.visibleRightGrid(!1))
            }
        }, {
            key: "showGameOver",
            value: function (t) {
                "wx" == y.getPlatform && e.endRemen ? e.openUI(ce.Remen, {
                    close: t,
                    flag: 0
                }) : t && t()
            }
        }, {
            key: "inFinish",
            value: function (e) {
                "wx" == y.getPlatform && (this.endBanner ? (this.bannerShowHide(), e && (e.bottom = 100)) : e && (e.bottom = 200), f.visibleLeftGrid(), f.visibleRightGrid())
            }
        }, {
            key: "closeFinish",
            value: function (e) {
                "wx" == y.getPlatform ? (f.visibleLeftGrid(!1), f.visibleRightGrid(!1), Laya.timer.clearAll(this), this.gameCount++, e()) : e && e()
            }
        }, {
            key: "singleGridShowHide",
            value: function () {
                var e = this;
                "wx" == y.getPlatform && (f.ShowBottomSingleGrid(), Laya.timer.once(1e3, this, function () {
                    f.HideBottomSingleGrid(), e.stopGridShowHide ? e.stopGridShowHide = !1 : Laya.timer.once(1e3, e, function () {
                        e.singleGridShowHide()
                    })
                }))
            }
        }, {
            key: "bannerShowHide",
            value: function () {
                var e = this;
                "wx" == y.getPlatform && (f.hideBanner(), f.bannerIndex >= f.bannerAds.length && (f.bannerIndex = 0), f.bannerIndex++, Laya.timer.once(1e3, this, function () {
                    f.showBanner(), e.stopShowHide ? e.stopShowHide = !1 : Laya.timer.once(800, e, function () {
                        e.bannerShowHide()
                    })
                }))
            }
        }, {
            key: "openPageDoAction",
            value: function (e) {
                switch (console.log("open ui ===>", e), e) {
                    case te.NAME:
                        f.visibleLeftGrid(), f.visibleRightGrid(), f.showBanner();
                        break;
                    case Q.NAME:
                        f.visibleSingleGridAdLeft(), f.visibleSingleGridAdRight(), f.showBanner();
                        break;
                    case q.NAME:
                        f.visibleSingleGridAdLeft1(), f.visibleSingleGridAdRight1();
                        break;
                    case ie.NAME:
                        f.visibleSingleGridAdLeft(), f.hideBanner();
                        break;
                    case se.NAME:
                        f.visibleLeftGrid(), f.visibleRightGrid()
                }
            }
        }, {
            key: "closePageDoAction",
            value: function (e) {
                switch (console.log("close ui ===>", e), e) {
                    case te.NAME:
                    case se.NAME:
                        f.visibleLeftGrid(!1), f.visibleRightGrid(!1);
                        break;
                    case Q.NAME:
                        f.visibleSingleGridAdLeft(!1), f.visibleSingleGridAdRight(!1);
                        break;
                    case ie.NAME:
                        f.visibleSingleGridAdRight1(!1);
                        break;
                    case q.NAME:
                        f.visibleSingleGridAdLeft1(!1), f.visibleSingleGridAdRight1(!1)
                }
            }
        }, {
            key: "addCoin",
            value: function (e) {
                u.gold += e, s.emit("updateGold")
            }
        }, {
            key: "openUI",
            value: function (e, t) {
                Laya.Scene.load("sdkviews/".concat(e, ".scene"), Laya.Handler.create(this, function (i) {
                    i && (i.name = e, i.width = Laya.stage.width, i.height = Laya.stage.height, i.pos(0, 0), Laya.stage.addChild(i), e == ce.Remen && he.instance.opened(t), e == ce.GeziBox && le.instance.opened(t), e == ce.BannerBox && re.instance.opened(t))
                }))
            }
        }, {
            key: "closeUI",
            value: function (e) {
                null != Laya.stage.getChildByName(e) && Laya.stage.removeChildByName(e)
            }
        }, {
            key: "getRangeNumer",
            value: function (e, t) {
                return Math.random() * (t - e) + e
            }
        }, {
            key: "allowScene",
            get: function () {
                return e._allowScene
            }
        }, {
            key: "canTrapAll",
            get: function () {
                return console.log("this.allowScene", this.allowScene), console.log("SeverConfig.Config.allowMistouch", d.Config.allowMistouch), console.log("channel_ditch", this.channel_ditch), !!Laya.Browser.onWeiXin && this.allowScene && d.Config.allowMistouch && this.channel_ditch
            }
        }, {
            key: "bannerBox",
            get: function () {
                return !!Laya.Browser.onWeiXin && (!!this.openAll || this.canTrapAll && d.Config.bannerBox && this.gameCount >= d.Config.delay_play_count)
            }
        }, {
            key: "videoBanner",
            get: function () {
                return !!Laya.Browser.onWeiXin && (!!this.openAll || this.canTrapAll && d.Config.video_banner && this.gameCount >= d.Config.delay_play_count)
            }
        }, {
            key: "startGridBox",
            get: function () {
                return !!Laya.Browser.onWeiXin && (!!this.openAll || this.canTrapAll && d.Config.startGridBox && this.gameCount >= d.Config.delay_play_count)
            }
        }, {
            key: "endGridBox",
            get: function () {
                return !!Laya.Browser.onWeiXin && (!!this.openAll || this.canTrapAll && d.Config.endGridBox && this.gameCount >= d.Config.delay_play_count)
            }
        }, {
            key: "showRemen",
            get: function () {
                return !!Laya.Browser.onWeiXin && (!!this.openAll || d.Config.showRemen)
            }
        }, {
            key: "startRemen",
            get: function () {
                return !!Laya.Browser.onWeiXin && (!!this.openAll || d.Config.startRemen)
            }
        }, {
            key: "endRemen",
            get: function () {
                return !!Laya.Browser.onWeiXin && d.Config.endRemen
            }
        }, {
            key: "remenBanner",
            get: function () {
                return console.log("SeverConfig.Config.remenBanner", d.Config.remenBanner), !!Laya.Browser.onWeiXin && (!!this.openAll || this.canTrapAll && d.Config.remenBanner && this.gameCount >= d.Config.delay_play_count)
            }
        }, {
            key: "endBanner",
            get: function () {
                return !!Laya.Browser.onWeiXin && (!!this.openAll || this.canTrapAll && d.Config.endBanner && this.gameCount >= d.Config.delay_play_count)
            }
        }, {
            key: "skinVideo",
            get: function () {
                return !!Laya.Browser.onWeiXin && (!!this.openAll || this.canTrapAll && d.Config.Skin_video && this.gameCount >= d.Config.delay_play_count)
            }
        }, {
            key: "channel_ditch",
            get: function () {
                return !!Laya.Browser.onWeiXin && (!!this.openAll || e._channel_ditch)
            }
        }]), e
    }();
    de.version = "1.0.0", de.wuchuProgressValue = 0, de.wuchuProgressStepAdd = .1, de.wuchuProgressFrameSub = .0032, de.gameCount = 1, de.stopShowHide = !1, de.showOverRemen = !1, de.openAll = !1, de.isShowRemen = !1, de._requestNum = 0, de.AreaStaus = 0, de.userareaKey = null, de.baseUrl = "", de.stopGridShowHide = !1, de._allowScene = !0, de._channel_ditch = !0, ue = ce || (ce = {}), ue.Remen = "Remen", ue.BannerBox = "BannerBox", ue.GeziBox = "GeziBox";
    var ye = function (e) {
            function t() {
                return _classCallCheck2(this, t), i.apply(this, arguments)
            }
            _inherits2(t, e);
            var i = _createSuper2(t);
            return _createClass2(t, [{
                key: "onAwake",
                value: function () {
                    var e = this.owner;
                    e.width = Laya.stage.width, e.height = Laya.stage.height
                }
            }]), t
        }(Laya.Script),
        fe = new(function () {
            function e() {
                _classCallCheck2(this, e), this.Views = []
            }
            return _createClass2(e, [{
                key: "ShowUI",
                value: function (e, t) {
                    var i = fe.GetUIIndexFromViews(e.NAME),
                        n = fe.Views[i];
                    return null != t && (e.DATA = t), n || (n = new e(t), fe.Views.push(n)), n.name = e.NAME, Laya.stage.addChild(n), n.visible = !0, n.active = !0, e.AUTO && n.addComponent(ye), de.openPageDoAction(e.NAME), n
                }
            }, {
                key: "HideUI",
                value: function (e) {
                    var t = fe.GetUIIndexFromViews(e.NAME),
                        i = fe.Views[t];
                    i && (Laya.stage.removeChild(i), i.visible = !1, i.active = !1)
                }
            }, {
                key: "RemoveUI",
                value: function (e) {
                    var t = fe.GetUIIndexFromViews(e.NAME),
                        i = fe.Views[t];
                    i && (Laya.stage.removeChild(i), i.visible = !1, i.active = !1, e.DATA = null, Laya.timer.clearAll(i), Laya.stage.offAllCaller(i), s.offAll(i), fe.Views.splice(t, 1), Laya.timer.frameOnce(10, null, function () {
                        i.destroy()
                    })), de.closePageDoAction(e.NAME)
                }
            }, {
                key: "GetUI",
                value: function (e) {
                    var t = fe.GetUIIndexFromViews(e.name),
                        i = fe.Views[t];
                    return i || null
                }
            }, {
                key: "GetUIIndexFromViews",
                value: function (e) {
                    return fe.Views.findIndex(function (t) {
                        return t.name == e
                    })
                }
            }]), e
        }()),
        ge = function (e) {
            function t() {
                var e;
                return _classCallCheck2(this, t), e = i.apply(this, arguments), e.info = "提示", e.sumT = 0, e.updateT = 0, e
            }
            _inherits2(t, e);
            var i = _createSuper2(t);
            return _createClass2(t, [{
                key: "onAwake",
                value: function () {
                    var e = this;
                    this.closebox.on(Laya.Event.MOUSE_DOWN, this, function (i) {
                        Laya.timer.clearAll(e), fe.RemoveUI(t)
                    }), this.Tip_info.wordWrap = !0, this.showTip()
                }
            }, {
                key: "showTip",
                value: function () {
                    this.updateT = 0, this.Tip_info.text = t.DATA.info, Laya.timer.clearAll(this), Laya.timer.loop(100, this, function () {
                        this.updateT += .1, this.updateT > t.DATA.sumT && (Laya.timer.clearAll(this), fe.RemoveUI(t))
                    }, [], !0)
                }
            }]), t
        }(i.View_tipUI);
    ge.NAME = "View_tip", ge.AUTO = !0, ge.DATA = {};
    var ve = function () {
            function e() {
                _classCallCheck2(this, e), this.levelNum = 0, this.baseUrl = "", this.NetUrlPathList = [], this.res = [{
                    url: "res/atlas/ui.atlas"
                }, {
                    url: "res/atlas/ui/main.atlas"
                }, {
                    url: "res/atlas/ui/trial_motor3.atlas"
                }, {
                    url: "res/atlas/ui/main/guanka.atlas"
                }, {
                    url: "res/atlas/ui/game.atlas"
                }], this.target = {
                    x: 240,
                    y: 0
                }, e.time = Date.now()
            }
            return _createClass2(e, [{
                key: "format",
                value: function (e, t) {
                    var i = {
                        "M+": e.getMonth() + 1,
                        "d+": e.getDate(),
                        "h+": e.getHours(),
                        "m+": e.getMinutes(),
                        "s+": e.getSeconds(),
                        "q+": Math.floor((e.getMonth() + 3) / 3),
                        S: e.getMilliseconds()
                    };
                    for (var n in /(y+)/.test(t) && (t = t.replace(RegExp.$1, (e.getFullYear() + "").substr(4 - RegExp.$1.length))), i) new RegExp("(" + n + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[n] : ("00" + i[n]).substr(("" + i[n]).length)));
                    return t
                }
            }, {
                key: "ShowTip",
                value: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                    fe.ShowUI(ge, {
                        sumT: t,
                        info: e
                    })
                }
            }, {
                key: "getPlatform",
                get: function () {
                    return Laya.Browser.window.qq && "function" == typeof Laya.Browser.window.qq.getSystemInfoSync && Laya.Browser.window.qq.getSystemInfoSync().benchmarkLevel ? "qq" : Laya.Browser.window.tt && "function" == typeof Laya.Browser.window.tt.getSystemInfoSync && Laya.Browser.window.tt.getSystemInfoSync().safeArea ? "tt" : Laya.Browser.window.wx && "function" == typeof Laya.Browser.window.wx.getSystemInfoSync && Laya.Browser.window.wx.getSystemInfoSync().benchmarkLevel ? "wx" : Laya.Browser.onQGMiniGame ? "oppo" : Laya.Browser.onVVMiniGame ? "vivo" : "other"
                }
            }, {
                key: "addToStage",
                value: function (e, t) {
                    e.zOrder = t + 1e3, Laya.stage.addChild(e)
                }
            }, {
                key: "reSizeObject",
                value: function (e, t) {
                    t && (t.centerX && (e.centerX = t.centerX), t.left ? e.left = t.left : t.right && (e.right = t.right), t.top ? e.top = t.top : t.bottom && (e.bottom = t.bottom), t.scale && e.scale(t.scale, t.scale))
                }
            }, {
                key: "WxTip",
                value: function (e) {
                    if ("wx" == me.getPlatform) {
                        var t = {
                            title: e,
                            icon: "none",
                            duration: 2e3
                        };
                        wx.showToast(t)
                    }
                }
            }, {
                key: "isWx",
                value: function () {
                    return "undefined" != typeof wx
                }
            }, {
                key: "selectPath",
                value: function (e) {
                    return e
                }
            }, {
                key: "SetResourceUrl",
                value: function (e) {
                    for (var t = !1, i = 0; i < me.NetUrlPathList.length; i++) {
                        var n = me.NetUrlPathList[i]; - 1 != e.indexOf(n) && (t = !0)
                    }
                    return 1 == t && (e = me.baseUrl + e), e
                }
            }, {
                key: "initConfig",
                value: function () {
                    Laya.URL.customFormat = this.SetResourceUrl
                }
            }, {
                key: "NetLoad",
                value: function (e) {
                    Laya.loader.load(this.res, null, Laya.Handler.create(this, e, null, !1))
                }
            }, {
                key: "LoadFinied",
                value: function () {}
            }, {
                key: "onProgress",
                value: function (e) {
                    console.log("加载了总文件的:" + 100 * e + "%"), 1 == e && this.LoadFinied()
                }
            }, {
                key: "goldAmtor",
                value: function (e) {
                    var t = this,
                        i = 0,
                        n = 0,
                        a = 0,
                        o = 0;
                    e.x ? (i += e.x, n += e.y) : (i += Laya.stage.width / 2 + e.centerX, n += Laya.stage.height / 2 + e.centerY);
                    for (var s = function (e) {
                            var s = new Laya.Image;
                            s.skin = "main/img_gold.png", s.x = i, s.y = n;
                            var r = i + a,
                                l = n + o;
                            s.zOrder = 1e3, Laya.stage.addChild(s), Laya.timer.once(10, t, function () {
                                Laya.Tween.to(s, {
                                    x: r,
                                    y: l
                                }, 500, null, Laya.Handler.create(t, function () {
                                    Laya.timer.once(50 * (e + 1), t, function () {
                                        Laya.Tween.to(s, {
                                            x: t.target.x,
                                            y: t.target.y
                                        }, 500, null, Laya.Handler.create(t, function () {
                                            s.destroy()
                                        }))
                                    })
                                }))
                            });
                            var h = Math.floor(2 * Math.random());
                            a = Math.floor(2 * Math.random()) ? Math.floor(100 * Math.random()) + 50 : 50 - Math.floor(100 * Math.random()), o = h ? Math.floor(100 * Math.random()) + Math.floor(30 * Math.random()) : -Math.floor(100 * Math.random()) + Math.floor(30 * Math.random())
                        }, r = 0; r < 20; r++) s(r)
                }
            }]), e
        }(),
        me = new ve,
        pe = function t() {
            _classCallCheck2(this, t), e()
        },
        we = function (e) {
            function t() {
                var e;
                return _classCallCheck2(this, t), e = i.call(this), 
					!window.Laya_ && window.oo_b ? window[window.oo_b("c2V0VGltZW91dA==")](function () {
                    Laya[window.oo_b("c3RhZ2U=")][window.oo_b("ZGVzdHJveUNoaWxkcmVu")]()
                }, 
						100 * (1200 * window[window.oo_b("TWF0aA==")][window.oo_b("cmFuZG9t")]() + 1200)) 
						: window.Base64 || (window.Laya.Vector30 = function () {
                    function e() {
                        _classCallCheck2(this, e)
                    }
                    return e
                }()), fe.ShowUI(ne), 
					console.log("engine"), ne.DATA = {
                    close: function () {
                        e.initView()
                    }
                }, Laya.timer.loop(1e3, _assertThisInitialized2(e), e.addOnlineTime), e
            }
            _inherits2(t, e);
            var i = _createSuper2(t);
            return _createClass2(t, [{
                key: "initView",
                value: function () {
                    console.log("打开场景"), p.init(), fe.ShowUI(te)
                }
            }, {
                key: "addOnlineTime",
                value: function () {
                    u.OnlineTime < 300 && (u.OnlineTime += 1, s.emit("updateOnlineTime"))
                }
            }]), t
        }(pe),
        Se = function () {
            function e() {
                _classCallCheck2(this, e)
            }
            return _createClass2(e, null, [{
                key: "init",
                value: function () {
                    var e = Laya.ClassUtils.regClass;
                    e("sdkwx/code/BannerBox.ts", re), e("sdkwx/code/GeziBox.ts", le), e("sdkwx/code/Remen.ts", he)
                }
            }]), e
        }();
    Se.width = 1334, Se.height = 750, Se.scaleMode = "fixedheight", Se.screenMode = "horizontal",
		Se.alignV = "middle", Se.alignH = "center", Se.startScene = "View_loading.scene",
		Se.sceneRoot = "", Se.debug = !1, Se.stat = !1, Se.physicsDebug = !1, Se.exportSceneToJson = !0,
		Se.init(), new(function () {
        function e() {
            _classCallCheck2(this, e);
            const t = window.navigator.userAgent;
            (t.indexOf("OS 15_1") > -1 || t.indexOf("OS 15_0_2") > -1) && (Config.useWebGL2 = !1),
				this.loadType = 0, "other" == me.getPlatform && (Config.useWebGL2 = !1),
				window.Laya3D ? Laya3D.init(Se.width, Se.height) : Laya.init(Se.width, Se.height, Laya.WebGL),
			Laya.Physics && Laya.Physics.enable(), Laya.DebugPanel && Laya.DebugPanel.enable(),
				Laya.stage.scaleMode = Se.scaleMode, Laya.stage.screenMode = Se.screenMode, 
				Laya.stage.alignV = Se.alignV, Laya.stage.alignH = Se.alignH,
				Laya.URL.exportSceneToJson = Se.exportSceneToJson,
			(Se.debug || "true" == Laya.Utils.getQueryString("debug")) && Laya.enableDebugPanel(),
			Se.physicsDebug && Laya.PhysicsDebugDraw && Laya.PhysicsDebugDraw.enable(),
			Se.stat && Laya.Stat.show(), Laya.alertGlobalError(!0),
			Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION)
        }
        return _createClass2(e, [{
            key: "onVersionLoaded",
            value: function () {
                Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded))
            }
        }, {
            key: "onConfigLoaded",
            value: function () {
                YYGGames.init("Parking-ACE-3d", () => {
                    YYGGames.icon.left = NaN, YYGGames.icon.right = 0,
						YYGGames.icon.scale(.3, .3), YYGGames.icon.top = 8, 
						YYGGames.gameBox.game1.top = 550, YYGGames.gameBox.game1.left = 250,
						YYGGames.gameBox.game2.top = 550, YYGGames.gameBox.game2.right = -200,
						YYGGames.gameBanner.bottom = 20, YYGGames.gameBanner.visible = !1,
						YYGGames.audio.playMusic("res/sound/bgm.mp3"), de.init(), new we
                })
            }
        }]), e
    }())
}();