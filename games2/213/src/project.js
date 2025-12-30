window.__require = function t(e, a, o) {
    function n(i, c) {
        if (!a[i]) {
            if (!e[i]) {
                var r = i.split("/");
                if (r = r[r.length - 1], !e[r]) {
                    var d = "function" == typeof __require && __require;
                    if (!c && d)
                        return d(r, !0);
                    if (s)
                        return s(r, !0);
                    throw new Error("Cannot find module '" + i + "'")
                }
            }
            var l = a[i] = {
                exports: {}
            };
            e[i][0].call(l.exports, function(t) {
                return n(e[i][1][t] || t)
            }, l, l.exports, t, e, a, o)
        }
        return a[i].exports
    }
    for (var s = "function" == typeof __require && __require, i = 0; i < o.length; i++)
        n(o[i]);
    return n
}({
    H5SDK: [function(t, e, a) {
        "use strict";

        function o(t) {
            var e = cc.find("tip");
            e.opacity = 200,
                cc.find("tips", e).getComponent("cc.Label").string = t,
                e.opacity = 0,
                e.runAction(cc.sequence(cc.fadeIn(.2), cc.delayTime(2), cc.fadeOut(.3)))
        }
        cc._RF.push(e, "78c977JcnBOQoyJxwnfUUNl", "H5SDK"),
            Object.defineProperty(a, "__esModule", {
                value: !0
            });
        var n = cc._decorator,
            s = n.ccclass,
            i = (n.property,
                function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.rewardTime = 0,
                            e.nativeTime = 0,
                            e.isClick = 0,
                            e
                    }
                    var a;
                    return __extends(e, t),
                        a = e,
                        e.getInstance = function() {
                            return null == a.instance && (a.instance = new a),
                                a.instance
                        },
                        e.prototype.onLoad = function() {
                            window.H5SDK = this
                        },
                        e.prototype.showRewardVideo = function(t) {
                            t && t();
                        },
                        e.prototype.theCallback = function(t) {
                            a.VideoSucCb && a.VideoSucCb(t),
                                a.VideoSucCb = function() {}
                        },
                        e.prototype.showBanner = function() {
                        },
                        e.prototype.showNativeAd = function() {
                            console.log('==== showNativeAd ====');
                        },
                        e = a = __decorate([s], e)
                }(cc.Component));
        a.default = i,
            cc._RF.pop()
    }, {}],
    ac_GlobalData: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "ac1d6QyRCxPKKPzowy1HS8/", "ac_GlobalData"),
            window.sy = !0,
            window.lxsy = !1,
            window.debug = !0,
            window.dwhs = function(t) {
                var e = null;
                if (t > 1e3 && t < Math.pow(10, 6))
                    e = (e = t / 1e3).toFixed(2) + "K";
                else if (t > Math.pow(10, 6) && t < Math.pow(10, 9))
                    e = (e = t / Math.pow(10, 6)).toFixed(2) + "M";
                else if (t > Math.pow(10, 9) && t < Math.pow(10, 12))
                    e = (e = t / Math.pow(10, 9)).toFixed(2) + "B";
                else if (t > Math.pow(10, 12) && t < Math.pow(10, 15))
                    e = (e = t / Math.pow(10, 12)).toFixed(2) + "T";
                else if (t > Math.pow(10, 15) && t < Math.pow(10, 18))
                    e = (e = t / Math.pow(10, 15)).toFixed(2) + "P";
                else {
                    if (!(t > Math.pow(10, 18)))
                        return e = t,
                            t;
                    e = (e = t / Math.pow(10, 18)).toFixed(2) + "E"
                }
                return e
            },
            cc._RF.pop()
    }, {}],
    ac_bossScript: [function(t, e, a) {
        "use strict";

        function o(t, e, a) {
            return e in t ? Object.defineProperty(t, e, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = a,
                t
        }
        var n;
        cc._RF.push(e, "58c54CRILVKE4vLu0N3UNfo", "ac_bossScript"),
            cc.Class({
                extends: cc.Component,
                properties: {
                    bossPrefab: [cc.Prefab],
                    bossNode: null,
                    bossData: null,
                    xgData: null,
                    ArmatureDisplay: null,
                    dhNameArr: null,
                    time: 0,
                    bossiD: 1,
                    bossdhsz: null,
                    bosstp: null,
                    uinode: cc.Node,
                    uiScript: null,
                    jbdl: null,
                    deletebool: !1
                },
                onLoad: function() {
                    var t, e, a;
                    (n = this).bossdhsz = (o(a = {}, 1, (o(t = {}, 1, 2),
                            o(t, 2, 3),
                            t)),
                        o(a, 5, (o(e = {}, 1, 6),
                            o(e, 2, 7),
                            e)),
                        a)
                },
                jsjb: function(t) {
                    for (var e = 375, a = 1.25, o = 0; o < t; o++)
                        e *= a,
                        o % 5 == 1 && (a = 1.25);
                    var s = .01 * e;
                    s = Math.ceil(s),
                        n.uiScript.bossjb = s,
                        n.bossData = {
                            bossSum: e,
                            bossNowNum: e,
                            ptlevel: t,
                            jb: s
                        },
                        n.xgData = {
                            bossSum: e / 2,
                            bossNowNum: e / 2,
                            ptlevel: t / 2,
                            jb: s / 2
                        }
                },
                create: function(t, e) {
                    var a = null;
                    a = Math.round(10 * Math.random()),
                        a %= 9,
                        n.bosstp = a,
                        n.jsjb(t);
                    var o = cc.instantiate(n.bossPrefab[a]);
                    return n.node.addChild(o),
                        o.setPosition(0, -500),
                        n.boosNode = o,
                        6 == a ? (n.ArmatureDisplay = o.getComponent(dragonBones.ArmatureDisplay),
                            n.ArmatureDisplay.addEventListener("loopComplete", n.ondh6, this),
                            5 == e ? (n.bossiD = 5,
                                n.ArmatureDisplay.playAnimation(n.dhNameArr[5], 1),
                                n.bossData) : (n.bossiD = 1,
                                n.ArmatureDisplay.playAnimation(n.dhNameArr[1], 1),
                                n.xgData)) : (n.ArmatureDisplay = o.getComponent(sp.Skeleton),
                            5 == e ? (n.bossiD = 5,
                                n.ArmatureDisplay.setAnimation(1, n.dhNameArr[5], !1),
                                n.ArmatureDisplay.setCompleteListener(n.ondh),
                                n.bossData) : (n.bossiD = 1,
                                n.ArmatureDisplay.setAnimation(1, n.dhNameArr[1], !1),
                                n.ArmatureDisplay.setCompleteListener(n.ondh),
                                n.xgData))
                },
                removeBoss: function() {
                    6 == n.bosstp ? (5 != n.bossiD ? n.ArmatureDisplay.playAnimation(n.dhNameArr[0], 1) : n.ArmatureDisplay.playAnimation(n.dhNameArr[4], 1),
                        n.ArmatureDisplay.addEventListener("loopComplete", n.Bossdestroy, this)) : (5 != n.bossiD ? n.ArmatureDisplay.setAnimation(1, n.dhNameArr[0], !1) : n.ArmatureDisplay.setAnimation(1, n.dhNameArr[4], !1),
                        n.ArmatureDisplay.setCompleteListener(n.Bossdestroy))
                },
                removeBoss11: function(t) {
                    6 == n.bosstp ? (5 != n.bossiD ? n.ArmatureDisplay.playAnimation(n.dhNameArr[0], 1) : n.ArmatureDisplay.playAnimation(n.dhNameArr[4], 1),
                        n.ArmatureDisplay.addEventListener("loopComplete", t, this)) : (5 != n.bossiD ? n.ArmatureDisplay.setAnimation(1, n.dhNameArr[0], !1) : n.ArmatureDisplay.setAnimation(1, n.dhNameArr[4], !1),
                        n.ArmatureDisplay.setCompleteListener(t))
                },
                Bossdestroy: function() {
                    n.deletebool = !0
                },
                scboss: function() {
                    n.boosNode.destroy()
                },
                deleteBoss: function() {
                    5 == n.bossiD ? n.jbdl = n.bossData.jb : n.jbdl = n.xgData.jb,
                        n.boosNode.destroy(),
                        n.uiScript.bossrmovehd()
                },
                ondh: function() {
                    var t = null;
                    t = (t = Math.round(10 * Math.random())) % 2 + 1,
                        n.ArmatureDisplay.setAnimation(1, n.dhNameArr[n.bossdhsz[n.bossiD][t]], !1)
                },
                ondh6: function() {
                    var t = null;
                    t = (t = Math.round(10 * Math.random())) % 2 + 1,
                        n.ArmatureDisplay.playAnimation(n.dhNameArr[n.bossdhsz[n.bossiD][t]], 1)
                },
                start: function() {
                    var t;
                    n.dhNameArr = (o(t = {}, 0, "death"),
                            o(t, 1, "entrance"),
                            o(t, 2, "hit"),
                            o(t, 3, "idle"),
                            o(t, 4, "king_death"),
                            o(t, 5, "king_entrance"),
                            o(t, 6, "king_hit"),
                            o(t, 7, "king_idle"),
                            t),
                        n.uiScript = n.uinode.getComponent("ac_uiScript")
                },
                update: function(t) {
                    1 == n.deletebool && (n.deletebool = !1,
                        n.deleteBoss())
                }
            }),
            cc._RF.pop()
    }, {}],
    ac_gamemian: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "8db21I2UQpAUYnHxTQDTqbs", "ac_gamemian");
        var o = t("./H5SDK").default,
            n = void 0;
        cc.Class({
                extends: cc.Component,
                properties: {
                    cdPrefab: cc.Prefab,
                    gz_Layout: cc.Node,
                    gzNode: [cc.Node],
                    gzScript: new Array,
                    ptprefab: [cc.Prefab],
                    pt_Layout: [cc.Node],
                    ptDataArray: new Array,
                    rect: cc.Node,
                    ptLayoutNode: cc.Node,
                    startLocation: cc.v2(0, 0),
                    overLocation: cc.v2(0, 0),
                    starttouchPtID: 0,
                    overtouchPtID: 0,
                    ptArray: new Array,
                    time: 0,
                    zzlLabel: cc.Label,
                    xzjjd: cc.ProgressBar,
                    hcpt: cc.Prefab,
                    uiNode: cc.Node,
                    uiScript: null,
                    hz: cc.Prefab,
                    hcdh2: cc.Prefab,
                    hz2: cc.Prefab,
                    zlsz: cc.Prefab,
                    dq_sy: {
                        type: cc.AudioClip,
                        default: []
                    },
                    sfcm: 0,
                    sfcm2: 0,
                    cdid: null,
                    cdNode: cc.Node,
                    hsNode: cc.Node,
                    zgj: cc.Prefab,
                    ptSk: new Array
                },
                onLoad: function() {
                    (n = this).rect.on(cc.Node.EventType.TOUCH_MOVE, n.onMove, n),
                        n.rect.on(cc.Node.EventType.TOUCH_END, n.onAniEnd, n),
                        n.rect.on(cc.Node.EventType.TOUCH_CANCEL, n.onfw, n),
                        n.uiScript = n.uiNode.getComponent("ac_uiScript")
                },
                flushzl: function() {
                    for (var t = 0, e = 0; e < n.ptDataArray.length; e++)
                        t += n.ptDataArray[e].sh;
                    var a = window.dwhs(t);
                    return n.zzlLabel.string = a,
                        a
                },
                onMove: function(t) {
                    if (null == n.cdid && (n.cdid = t.getID()),
                        t.getID() != n.cdid)
                        return !1;
                    n.startLocation != t.getStartLocation() && (n.starttouchPtID = n.countPtID(t.getStartLocation()),
                            n.startLocation = t.getStartLocation()),
                        void 0 != n.ptDataArray[n.starttouchPtID] && (n.overLocation = t.getLocation(), -1 != n.ptDataArray[n.starttouchPtID].ptlevel && 0 != n.ptDataArray[n.starttouchPtID].ptlevel && (n.sxlb(n.starttouchPtID),
                            null != n.ptArray[n.starttouchPtID] && (n.ptArray[n.starttouchPtID].setPosition(n.pt_Layout[n.starttouchPtID].convertToNodeSpaceAR(n.overLocation)),
                                n.pt_Layout[n.starttouchPtID].zIndex = 15)))
                },
                sxlb: function(t) {
                    for (var e = 0; e < n.pt_Layout.length; e++)
                        n.ptDataArray[e].ptlevel != n.ptDataArray[t].ptlevel && -1 != n.ptDataArray[e].ptlevel && 0 != n.ptDataArray[e].ptlevel && (n.gzNode[e].active = !0)
                },
                hideshade: function() {
                    for (var t = 0; t < n.pt_Layout.length; t++)
                        n.gzNode[t].active = !1
                },
                sxdp: function() {
                    var t = 0;
                    switch (n.sjptLevel()) {
                        case 2:
                            t = 31;
                            break;
                        case 3:
                            t = 25;
                            break;
                        case 4:
                            t = 34;
                            break;
                        case 5:
                            t = 28;
                            break;
                        case 6:
                            t = 19;
                            break;
                        case 7:
                            t = 20;
                            break;
                        case 8:
                            t = 21;
                            break;
                        case 9:
                            t = 22;
                            break;
                        case 10:
                            n.rect.height = 730,
                                n.node.runAction(cc.moveTo(.4, cc.v2(0, 130))),
                                t = 13;
                            break;
                        case 11:
                            t = 14;
                            break;
                        case 12:
                            t = 15;
                            break;
                        case 13:
                            t = 16;
                            break;
                        case 14:
                            n.rect.height = 750,
                                n.node.runAction(cc.moveTo(.4, cc.v2(0, 150))),
                                n.gz_Layout.setPosition(cc.v2(-460, -853)),
                                n.gz_Layout.runAction(cc.scaleTo(.4, .834, .834)),
                                n.ptLayoutNode.setPosition(cc.v2(-460, -853)),
                                n.ptLayoutNode.runAction(cc.scaleTo(.4, .834, .834)),
                                t = 7;
                            break;
                        case 15:
                            t = 8;
                            break;
                        case 16:
                            t = 9;
                            break;
                        case 17:
                            t = 10;
                            break;
                        case 18:
                            n.gz_Layout.setPosition(cc.v2(-374, -690)),
                                n.gz_Layout.runAction(cc.scaleTo(.4, .66, .7)),
                                n.ptLayoutNode.setPosition(cc.v2(-374, -690)),
                                n.ptLayoutNode.runAction(cc.scaleTo(.4, .66, .7)),
                                t = 30;
                            break;
                        case 19:
                            t = 24;
                            break;
                        case 20:
                            t = 18;
                            break;
                        case 21:
                            t = 12;
                            break;
                        case 22:
                            t = 6;
                            break;
                        case 23:
                            t = 35;
                            break;
                        case 24:
                            t = 29;
                            break;
                        case 25:
                            t = 23;
                            break;
                        case 26:
                            t = 17;
                            break;
                        case 27:
                            t = 11;
                            break;
                        case 28:
                            n.rect.height = 769,
                                n.node.runAction(cc.moveTo(.4, cc.v2(0, 159))),
                                t = 0;
                            break;
                        case 29:
                            t = 1;
                            break;
                        case 30:
                            t = 2;
                            break;
                        case 31:
                            t = 3;
                            break;
                        case 32:
                            t = 4;
                            break;
                        case 33:
                            t = 5
                    } -
                    1 == n.ptDataArray[t].ptlevel && (n.pt_Layout[t].removeAllChildren(),
                        n.ptDataArray[t].ptlevel = 0,
                        n.uiScript.gamedata.ptDataArray = n.ptDataArray,
                        cc.sys.localStorage.setItem("gamedata", JSON.stringify(n.uiScript.gamedata)))
                },
                onsy: function(t) {
                    1 == window.sy && cc.audioEngine.play(n.dq_sy[t], !1, 1)
                },
                countPtID: function(t) {
                    var e = n.ptLayoutNode.convertToNodeSpaceAR(t),
                        a = e.x / 187;
                    a = Math.ceil(a);
                    var o = e.y / 180;
                    return ((o = Math.ceil(o)) > 1 ? (o = 6 * (o - 1)) + a : a) - 1
                },
                onAniEnd: function(t) {
                    if (t.getID() != n.cdid)
                        return !1;
                    if (null != n.cdid && (n.cdid = null),
                        void 0 != n.ptDataArray[n.starttouchPtID])
                        if (n.overtouchPtID = n.countPtID(n.overLocation),
                            n.overtouchPtID > 36)
                            n.onfw();
                        else if (void 0 != n.pt_Layout[n.overtouchPtID])
                        if (n.pt_Layout[n.overtouchPtID].zIndex = 1, -1 != n.ptDataArray[n.starttouchPtID].ptlevel) {
                            if (0 != n.ptDataArray[n.starttouchPtID].ptlevel && 0 == n.ptDataArray[n.overtouchPtID].ptlevel) {
                                n.ptArray[n.starttouchPtID].parent = n.pt_Layout[n.overtouchPtID];
                                var e = n.ptArray[n.starttouchPtID];
                                n.ptArray[n.starttouchPtID] = n.ptArray[n.overtouchPtID],
                                    n.ptArray[n.overtouchPtID] = e,
                                    n.ptArray[n.overtouchPtID].setPosition(1, -43);
                                var a = n.ptDataArray[n.starttouchPtID];
                                n.ptDataArray[n.starttouchPtID] = n.ptDataArray[n.overtouchPtID],
                                    n.ptDataArray[n.overtouchPtID] = a,
                                    n.ptDataArray[n.starttouchPtID].ptID = n.starttouchPtID,
                                    n.ptDataArray[n.overtouchPtID].ptID = n.overtouchPtID;
                                var s = n.ptSk[n.starttouchPtID];
                                n.ptSk[n.starttouchPtID] = n.ptSk[n.overtouchPtID],
                                    n.ptSk[n.overtouchPtID] = s;
                                n.ptSk[n.overtouchPtID].setCompleteListener(function() {
                                        n.uiScript.jsBOssSh(n.ptDataArray[n.overtouchPtID].sh)
                                    }),
                                    cc.sys.localStorage.setItem("gamedata", JSON.stringify(n.uiScript.gamedata))
                            } else if (n.overtouchPtID == n.starttouchPtID || n.ptDataArray[n.starttouchPtID].ptlevel != n.ptDataArray[n.overtouchPtID].ptlevel || -1 == n.ptDataArray[n.overtouchPtID].ptlevel)
                                null != n.ptArray[n.starttouchPtID] && n.ptArray[n.starttouchPtID].setPosition(1, -43);
                            else {
                                if (0 != n.ptDataArray[n.starttouchPtID].ptlevel && 0 != n.ptDataArray[n.overtouchPtID].ptlevel && n.ptDataArray[n.starttouchPtID].ptlevel == n.ptDataArray[n.overtouchPtID].ptlevel && -1 != n.ptDataArray[n.starttouchPtID].ptlevel && -2 != n.ptDataArray[n.starttouchPtID].ptlevel && -3 != n.ptDataArray[n.starttouchPtID].ptlevel) {
                                    if (n.ptDataArray[n.overtouchPtID].ptlevel >= 36) {
                                        (c = cc.instantiate(n.zgj)).parent = n.node;
                                        var i = cc.fadeOut(1);
                                        return c.runAction(i),
                                            void n.onfw()
                                    }
                                    n.ptDataArray[n.starttouchPtID] = {
                                            ptID: n.starttouchPtID,
                                            ptlevel: 0,
                                            sh: 0
                                        },
                                        n.ptDataArray[n.starttouchPtID].ptlevel = 0,
                                        n.ptDataArray[n.starttouchPtID].sh = 0,
                                        n.ptDataArray[n.overtouchPtID].ptlevel > 0 && (n.ptDataArray[n.overtouchPtID].ptlevel += 1),
                                        n.ptDataArray[n.overtouchPtID].sh = n.jssh(n.ptDataArray[n.overtouchPtID].ptlevel),
                                        n.pt_Layout[n.starttouchPtID].removeAllChildren(),
                                        n.ptSk[n.starttouchPtID] = null,
                                        n.pt_Layout[n.overtouchPtID].removeAllChildren();
                                    var c = cc.instantiate(n.hcdh2);
                                    n.pt_Layout[n.overtouchPtID].addChild(c);
                                    var r = c.getComponent("ac_hcdh");
                                    r.gamemian = n,
                                        r.ptID = n.overtouchPtID,
                                        r.ptLevel = n.ptDataArray[n.overtouchPtID].ptlevel,
                                        n.uiScript.gamedata.ptDataArray = n.ptDataArray,
                                        cc.sys.localStorage.setItem("gamedata", JSON.stringify(n.uiScript.gamedata)),
                                        n.flushzl(),
                                        n.sxdp()
                                }
                                o.getInstance().showNativeAd()
                            }
                            n.hideshade()
                        } else
                            n.onfw();
                    else
                        n.onfw()
                },
                sjptLevel: function() {
                    for (var t = 0, e = 0; e < n.ptDataArray.length; e++)
                        n.ptDataArray[e].ptlevel > t && (t = n.ptDataArray[e].ptlevel);
                    return t
                },
                jsjg: function(t) {
                    var e = 500;
                    if (1 != t)
                        for (var a = 2; a < t; a++)
                            e *= a < 10 ? 4 : a > 10 && a < 20 ? 3 : 2.5;
                    else
                        e /= 2;
                    return e
                },
                pths: function() {
                    if (n.ptDataArray[n.starttouchPtID].ptlevel > 0) {
                        n.pt_Layout[n.starttouchPtID].removeAllChildren(),
                            n.ptSk[n.starttouchPtID] = null;
                        var t = cc.instantiate(n.hcdh2);
                        n.hsNode.addChild(t);
                        var e = n.jsjg(n.ptDataArray[n.starttouchPtID].ptlevel);
                        n.uiScript.gamedata.jbsl += e / 2,
                            n.uiScript.setgold(),
                            n.ptDataArray[n.starttouchPtID] = {
                                ptID: n.starttouchPtID,
                                ptlevel: 0,
                                sh: 0
                            },
                            n.ptDataArray[n.starttouchPtID].ptlevel = 0,
                            n.ptDataArray[n.starttouchPtID].sh = 0,
                            n.uiScript.gamedata.ptDataArray = n.ptDataArray,
                            cc.sys.localStorage.setItem("gamedata", JSON.stringify(n.uiScript.gamedata))
                    }
                    n.flushzl(),
                        n.hideshade()
                },
                onfw: function(t) {
                    if (void 0 != t) {
                        if (t.getID() != n.cdid)
                            return !1;
                        null != n.cdid && (n.cdid = null)
                    }
                    if (void 0 != n.ptDataArray[n.starttouchPtID]) {
                        var e = n.countPtID(n.overLocation),
                            a = n.sjptLevel();
                        if (a >= 10 && a < 14) {
                            if (37 == e)
                                return void n.pths()
                        } else if (a >= 14 && a < 18) {
                            if (36 == e)
                                return void n.pths()
                        } else if (a >= 18 && a < 28) {
                            if (36 == e)
                                return void n.pths()
                        } else if (a >= 28) {
                            if (36 == e)
                                return void n.pths()
                        } else if (37 == e)
                            return void n.pths(); -
                        1 != n.ptDataArray[n.starttouchPtID].ptlevel && 0 != n.ptDataArray[n.starttouchPtID].ptlevel && n.ptArray[n.starttouchPtID].setPosition(1, -43),
                            n.hideshade()
                    }
                },
                sjfzpt: function() {
                    for (var t = 0; t < n.pt_Layout.length; t++)
                        if (0 == n.ptDataArray[t].ptlevel) {
                            var e = cc.instantiate(n.hz);
                            n.pt_Layout[t].addChild(e);
                            var a = e.getComponent("ac_hzScript");
                            return a.ptLevel = 1,
                                a.ptID = t,
                                n.ptDataArray[t].ptID = t,
                                n.ptDataArray[t].ptlevel = -2,
                                n.ptDataArray[t].sh = n.jssh(1),
                                a.gamemian = n,
                                n.onsy(0),
                                n.flushzl(),
                                n.uiScript.gamedata.ptDataArray = n.ptDataArray,
                                cc.sys.localStorage.setItem("gamedata", JSON.stringify(n.uiScript.gamedata)), !0
                        }
                    return !1
                },
                ffzpt: function(t) {
                    var e = cc.instantiate(n.hz);
                    n.pt_Layout[t].addChild(e);
                    var a = e.getComponent("ac_hzScript");
                    return a.ptLevel = 1,
                        a.ptID = t,
                        a.gamemian = n,
                        n.onsy(0),
                        n.flushzl(),
                        e
                },
                jsLevel: function(t) {
                    for (var e = 0; 4 != t;)
                        t /= 3,
                        e++;
                    if (4 == t)
                        return ++e
                },
                fffzpt: function(t, e) {
                    var a = n.jsLevel(t),
                        o = cc.instantiate(n.hz2);
                    n.pt_Layout[e].addChild(o);
                    var s = o.getComponent("ac_hzScript");
                    return s.ptID = e,
                        s.ptLevel = a,
                        s.gamemian = n,
                        n.flushzl(),
                        o
                },
                gmfzpt: function(t) {
                    for (var e = 0; e < n.pt_Layout.length; e++)
                        if (0 == n.ptDataArray[e].ptlevel) {
                            var a = cc.instantiate(n.hz2);
                            n.pt_Layout[e].addChild(a);
                            var o = a.getComponent("ac_hzScript");
                            return o.ptLevel = t,
                                o.ptID = e,
                                o.gamemian = n,
                                n.ptDataArray[e].ptID = e,
                                n.ptDataArray[e].ptlevel = -3,
                                n.ptDataArray[e].sh = n.jssh(t),
                                n.flushzl(), !0
                        }
                    return !1
                },
                create: function(t, e) {
                    var a = null;
                    if (-1 != t && 0 != t && -2 != t) {
                        a = cc.instantiate(n.ptprefab[t - 1]),
                            0 == n.ptDataArray[e].sh && (n.ptDataArray[e].sh = n.jssh(n.ptDataArray[e].ptlevel));
                        n.pt_Layout[e].addChild(a);
                        var o = a.getComponent(sp.Skeleton);
                        o.setCompleteListener(function() {
                                n.uiScript.jsBOssSh(n.ptDataArray[e].sh)
                            }),
                            n.ptSk[e] = o,
                            a.setPosition(1, -43);
                        var s = cc.instantiate(n.zlsz);
                        a.addChild(s),
                            s.getComponent("ac_zlsz").init(n.ptDataArray[e].sh),
                            s.setPosition(cc.v2(0, -30))
                    } else
                        -1 == t && (a = cc.instantiate(n.cdPrefab),
                            n.pt_Layout[e].addChild(a),
                            a.setPosition(0, 0));
                    return a
                },
                jsgj: function(t) {
                    for (var e = 0; e < n.pt_Layout.length; e++)
                        null != n.ptSk[e] && (n.ptSk[e].timeScale = t)
                },
                onClickgz: function(t) {},
                start: function() {},
                init: function(t) {
                    for (var e = 0; e < n.pt_Layout.length; e++)
                        n.ptSk.push(null);
                    if (null == t) {
                        for (e = 0; e < n.pt_Layout.length; e++) {
                            var a = {
                                ptID: null,
                                ptlevel: 0,
                                sh: 0
                            };
                            a.ptID = e,
                                a.ptlevel = -1,
                                a.sh = n.jssh(a.ptlevel),
                                32 != e && 33 != e && 26 != e && 27 != e || (a.ptlevel = -2,
                                    a.sh = n.jssh(a.ptlevel)),
                                n.ptDataArray.push(a)
                        }
                        n.uiScript.gamedata.ptDataArray = n.ptDataArray
                    } else
                        n.ptDataArray = t;
                    for (e = 0; e < n.pt_Layout.length; e++)
                        if (n.ptDataArray[e].ptlevel > 36 && (n.ptDataArray[e].ptlevel = 36), -2 != n.ptDataArray[e].ptlevel && -3 != n.ptDataArray[e].ptlevel) {
                            var o = n.create(n.ptDataArray[e].ptlevel, n.ptDataArray[e].ptID);
                            n.ptArray.push(o)
                        } else
                            -2 == n.ptDataArray[e].ptlevel ? n.ptArray.push(n.ffzpt(n.ptDataArray[e].ptID)) : -3 == n.ptDataArray[e].ptlevel && n.ptArray.push(n.fffzpt(n.ptDataArray[e].sh, n.ptDataArray[e].ptID));
                    n.flushzl();
                    var s = n.sjptLevel();
                    s >= 10 && s < 14 ? (n.rect.height = 730,
                        n.node.runAction(cc.moveTo(.1, cc.v2(0, 130)))) : s >= 14 && s < 18 ? (n.rect.height = 750,
                        n.node.runAction(cc.moveTo(.1, cc.v2(0, 150))),
                        n.gz_Layout.setPosition(cc.v2(-460, -843)),
                        n.gz_Layout.runAction(cc.scaleTo(.1, .834, .834)),
                        n.ptLayoutNode.setPosition(cc.v2(-460, -843)),
                        n.ptLayoutNode.runAction(cc.scaleTo(.1, .834, .834))) : s >= 18 && s < 28 ? (n.rect.height = 769,
                        n.node.runAction(cc.moveTo(.1, cc.v2(0, 150))),
                        n.gz_Layout.setPosition(cc.v2(-374, -690)),
                        n.gz_Layout.runAction(cc.scaleTo(.4, .66, .7)),
                        n.ptLayoutNode.setPosition(cc.v2(-374, -690)),
                        n.ptLayoutNode.runAction(cc.scaleTo(.4, .66, .7))) : s >= 28 && (n.gz_Layout.setPosition(cc.v2(-374, -690)),
                        n.gz_Layout.runAction(cc.scaleTo(.4, .66, .7)),
                        n.ptLayoutNode.setPosition(cc.v2(-374, -690)),
                        n.ptLayoutNode.runAction(cc.scaleTo(.4, .66, .7)),
                        n.rect.height = 769,
                        n.node.runAction(cc.moveTo(.1, cc.v2(0, 159))))
                },
                onjstime: function() {
                    if (n.onsy(1),
                        n.time += .08,
                        n.time > 1 && (n.time = 1),
                        n.xzjjd.progress = n.time,
                        1 == n.time)
                        if (n.sjfzpt())
                            n.time = 0;
                        else {
                            var t = cc.instantiate(n.hcpt);
                            t.parent = n.node;
                            var e = cc.fadeOut(1);
                            t.runAction(e)
                        }
                },
                jssh: function(t) {
                    if (-1 == t)
                        return 0;
                    var e = 4;
                    if (1 == t)
                        return e;
                    for (var a = 1; a < t; a++)
                        e *= 3;
                    return e
                },
                update: function(t) {
                    n.time += .001,
                        n.time > 1 && (n.sjfzpt() && (n.time = 0),
                            n.flushzl()),
                        n.time < 1 && (n.xzjjd.progress = n.time)
                }
            }),
            cc._RF.pop()
    }, {
        "./H5SDK": "H5SDK"
    }],
    ac_gmptScript: [function(t, e, a) {
        "use strict";
        var o;

        function n(t, e, a) {
            return e in t ? Object.defineProperty(t, e, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = a,
                t
        }
        cc._RF.push(e, "8d41c5TFqFLZ4VvaASjTo/3", "ac_gmptScript");
        var s = (n(o = {}, 1, "Canned honey"),
            n(o, 2, "Tenacious Brin"),
            n(o, 3, "Angry Volcano"),
            n(o, 4, "Steel mantis"),
            n(o, 5, "Violent mech"),
            n(o, 6, "Invincible rocket"),
            o);
        cc.Class({
                extends: cc.Component,
                properties: {
                    Content: cc.Node,
                    ptxx1: new Array,
                    ptxx2: new Array,
                    ptArray: [cc.Node],
                    uiScript: null,
                    ptxxPrefab1: cc.Prefab,
                    ptxxPrefab2: cc.Prefab,
                    enemyPool1: null,
                    enemyPool2: null
                },
                create: function(t, e, a) {
                    var o = 4;
                    this.uiScript = e;
                    for (var n = 1; n <= 35; n++)
                        if (n < t) {
                            var i = cc.instantiate(this.ptxxPrefab1);
                            this.ptxx1.push(i),
                                this.enemyPool1.put(i),
                                this.Content.addChild(i);
                            var c = i.getComponent("ac_pt_xx");
                            o *= 3;
                            var r = !1;
                            r = t - 1 == n || t - 2 == n,
                                t > 5 ? n < 5 ? c.init(s[Math.ceil(n / 6)] + (n % 6 + 1), n, o, e, a[n], r) : c.init(s[Math.ceil((n + 1) / 6)] + (n % 6 + 1), n, o, e, a[n], r) : c.init(s[1] + (n + 1), n, o, e, a[n], r)
                        } else {
                            i = cc.instantiate(this.ptxxPrefab2);
                            this.ptxx2.push(i),
                                this.enemyPool2.put(i),
                                this.Content.addChild(i)
                        }
                },
                createEnemy: function(t, e, a) {
                    this.node.active = !0;
                    var o = 4;
                    this.uiScript = e;
                    for (var n = 1; n <= 36; n++)
                        if (n < t) {
                            var i = null;
                            i = this.enemyPool1.size() > 0 ? this.enemyPool1.get() : cc.instantiate(this.ptxxPrefab1),
                                this.Content.addChild(i);
                            var c = i.getComponent("ac_pt_xx");
                            o *= 3;
                            var r = !1;
                            r = t - 1 == n || t - 2 == n,
                                t > 5 ? n < 5 ? c.init(s[Math.ceil(n / 6)] + (n % 6 + 1), n, o, e, a[n], r) : c.init(s[Math.ceil((n + 1) / 6)] + (n % 6 + 1), n, o, e, a[n], r) : c.init(s[1] + (n + 1), n, o, e, a[n], r)
                        } else {
                            var d = null;
                            d = this.enemyPool2.size() > 0 ? this.enemyPool2.get() : cc.instantiate(this.ptxxPrefab2),
                                this.Content.addChild(d)
                        }
                },
                onrovem: function() {
                    for (var t in this.ptxx1)
                        this.enemyPool1.put(this.ptxx1[t]);
                    for (var t in this.ptxx2)
                        this.enemyPool2.put(this.ptxx2[t]);
                    this.uiScript.closeshawo(),
                        this.Content.removeAllChildren(),
                        this.node.active = !1
                },
                onLoad: function() {
                    this.enemyPool1 = new cc.NodePool,
                        this.enemyPool2 = new cc.NodePool
                },
                start: function() {}
            }),
            cc._RF.pop()
    }, {}],
    ac_gzScript: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "11448t+/tVL77JVWoP7nTuZ", "ac_gzScript"),
            cc.Class({
                extends: cc.Component,
                properties: {},
                start: function() {}
            }),
            cc._RF.pop()
    }, {}],
    ac_hcdh: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "8ef76rC0FZGu4rq7ZEZCaLt", "ac_hcdh"),
            cc.Class({
                extends: cc.Component,
                properties: {
                    hzanimation: dragonBones.ArmatureDisplay,
                    gamemian: null,
                    ptID: null,
                    ptLevel: null,
                    hcsy: cc.AudioClip,
                    sfsc: !0
                },
                animationFunction: function() {
                    if (null != this.gamemian) {
                        var t = this.gamemian.create(this.ptLevel, this.ptID);
                        this.gamemian.ptArray[this.ptID] = t,
                            this.node.zIndex = 5,
                            this.node.setPosition(cc.v2(8, 20))
                    }
                },
                js: function() {
                    this.node.destroy()
                },
                onsy: function(t) {
                    1 == window.sy && cc.audioEngine.play(this.hcsy, !1, 1)
                },
                start: function() {
                    this.onsy(),
                        this.hzanimation.addEventListener("start", this.animationFunction, this),
                        this.hzanimation.addEventListener("loopComplete", this.js, this),
                        this.hzanimation.playAnimation("animation")
                }
            }),
            cc._RF.pop()
    }, {}],
    ac_hzScript: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "a2f49i3BsRFUKDHt85zf4EX", "ac_hzScript"),
            cc.Class({
                extends: cc.Component,
                properties: {
                    hzbutton: cc.Button,
                    gamemian: null,
                    ptID: null,
                    ptLevel: null,
                    hcPrefab: cc.Prefab,
                    num: 1
                },
                onbfdh: function() {
                    if (this.num < 2) {
                        var t = cc.instantiate(this.hcPrefab);
                        this.gamemian.pt_Layout[this.ptID].addChild(t);
                        var e = t.getComponent("ac_hcdh");
                        e.gamemian = this.gamemian,
                            e.ptID = this.ptID,
                            e.ptLevel = this.ptLevel,
                            this.gamemian.ptDataArray[this.ptID].ptlevel = this.ptLevel,
                            this.node.destroy(),
                            this.num++
                    }
                },
                start: function() {
                    this.hzbutton.node.on("click", this.onbfdh, this)
                }
            }),
            cc._RF.pop()
    }, {}],
    ac_lanuch: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "aad35jcbU5Ac5VNyTEvmLzt", "ac_lanuch"),
            cc.Class({
                extends: cc.Component,
                properties: {
                    display: cc.Sprite,
                    diSprite: null
                },
                start: function() {
                    this._isShow = !1,
                        this.tex = new cc.Texture2D,
                        this.diSprite = this.display.getComponent(cc.Sprite)
                },
                onCli: function() {
                    wx.postMessage({
                            message: "Show"
                        }),
                        this._isShow = !0
                },
                oncy: function(t) {
                    wx.postMessage({
                            message: "jjcy",
                            fs: t
                        }),
                        this._isShow = !0
                },
                onUPclose: function() {
                    this._isShow = !1
                },
                _updaetSubDomainCanvas: function() {
                    if (this.tex) {
                        var t = wx.getOpenDataContext().canvas;
                        this.tex.initWithElement(t),
                            this.tex.handleLoadedTexture(),
                            window.huabu = this.tex,
                            this.diSprite.spriteFrame = new cc.SpriteFrame(this.tex)
                    }
                },
                update: function() {
                    1 == this._isShow && this._updaetSubDomainCanvas()
                }
            }),
            cc._RF.pop()
    }, {}],
    ac_pt_xx: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "c3b3b4BopVDrJFqDSp38/Yn", "ac_pt_xx");
        var o = t("./H5SDK").default;
        cc.Class({
                extends: cc.Component,
                properties: {
                    ptname: cc.Label,
                    ptLevel: cc.Label,
                    ptzhanli: cc.Label,
                    ptButton: cc.Button,
                    ptButtonLabel1: cc.Label,
                    ptButtonLabel2: cc.Label,
                    uimianScript: null,
                    spbutton: cc.Button,
                    pt_tp: cc.Sprite,
                    pttxArr: {
                        type: cc.SpriteFrame,
                        default: []
                    }
                },
                init: function(t, e, a, o, n, s) {
                    this.ptname.string = t,
                        this.ptLevel.string = e + 1;
                    var i = window.dwhs(a);
                    this.ptzhanli.string = i,
                        this.uimianScript = o,
                        this.pt_tp.spriteFrame = this.pttxArr[e - 1],
                        void 0 == n || null == n ? (o.gamedata.pt_jgArray[e] = this.jsjg(e),
                            this.ptButtonLabel1.string = this.jgjdw(o.gamedata.pt_jgArray[e]),
                            this.ptButtonLabel2.string = this.jgjdw(o.gamedata.pt_jgArray[e])) : (this.ptButtonLabel1.string = this.jgjdw(n),
                            this.ptButtonLabel2.string = this.jgjdw(n)),
                        1 == s && this.spbutton.node.on("click", this.buypt, this),
                        this.spbutton.node.active = s,
                        this.ptButton.node.on("click", this.ongampt, this)
                },
                buypt: function() {
                    var t = this;
                    o.getInstance().showRewardVideo(function() {
                        t.bxgold = parseInt(t.ptButtonLabel1.string),
                            t.uimianScript.gamedata.jbsl += t.bxgold,
                            t.uimianScript.setgold(),
                            ac_sdk.setItem("gamedata", JSON.stringify(t.gamedata))
                    })
                },
                jgjdw: function(t) {
                    return window.dwhs(t)
                },
                jsjg: function(t) {
                    for (var e = 500, a = 1; a < t; a++)
                        e *= a < 10 ? 4 : a > 10 && a < 20 ? 3 : 2.5;
                    return e
                },
                setjg: function(t) {
                    this.ptButtonLabel1.string = this.jgjdw(t),
                        this.ptButtonLabel2.string = this.jgjdw(t)
                },
                ongampt: function(t) {
                    this.uimianScript.ongmpt(parseInt(this.ptLevel.string) - 1, this)
                },
                start: function() {}
            }),
            cc._RF.pop()
    }, {
        "./H5SDK": "H5SDK"
    }],
    ac_sdk_conf: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "b50fbEPGzNJooRF5oWLtSFD", "ac_sdk_conf");
        e.exports = {
                game: "ac",
                version: "1.0.0",
                bannerAdUnitId: "adunit-d6b9bab967f2f8b7",
                videoAdUnitId: "adunit-3fa34dc8aada52e3"
            },
            cc._RF.pop()
    }, {}],
    ac_sdk: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "b055aioUt5KILPDUvDFAcr+", "ac_sdk");
        var o = t("ac_sdk_conf"),
            n = t("md5"),
            s = {
                md5: n,
                ip1: "http://111.230.179.243:7001",
                ip2: "http://111.230.179.243:7002",
                loginBg: "http://www.20160755.com/image/singlecolor.png",
                loginBt: "http://www.20160755.com/image/happyrabbitlogin.png",
                debug: !1,
                login: "/",
                Config: "/GameConfig",
                ConfigData: {
                    config1: {},
                    config2: {}
                },
                Share: "/ShareConfig",
                ShareList: [],
                Logcommon: "/Log/common",
                GameReport: "/GameReport",
                Like: "/Like",
                GetLikeInfo: "/GetLikeInfo",
                GetGameReport: "/GetGameReport",
                BannerAd: null,
                VideoAd: null,
                init: function(t, e) {
                    var a = this;
                    t.debug && (this.debug = t.debug),
                        this.checkUpdate(),
                        cc.sys.platform === cc.sys.WECHAT_GAME ? this.Get(this.ip2 + this.Config, {}, function(o) {
                            o && 1 == o.code ? (a.ConfigData = o.d,
                                a.Get(a.ip2 + a.Share, {}, function(t) {
                                    t && 1 == t.code ? (a.ShareList = t.d,
                                            console.log(a.ShareList, "self.ShareList")) : console.log("\u521d\u59cb\u5316\u5206\u4eab\u4fe1\u606f\u5931\u8d25\uff1a", t),
                                        e(!0)
                                })) : (a.debug && console.log("\u540e\u53f0\u914d\u7f6e\u4fe1\u606f\u521d\u59cb\u5316\u5931\u8d25\uff0c\u518d\u6b21\u521d\u59cb\u5316\uff1a", o),
                                a.init(t, e))
                        }) : e(!1)
                },
                getShareByWeight: function(t) {
                    if (this.ShareList.length > 0) {
                        for (var e = [], a = 0; a < this.ShareList.length; a++)
                            t == this.ShareList[a].type && (this.ShareList[a].weight = parseInt(this.ShareList[a].weight),
                                e.push(this.ShareList[a]));
                        var o = [];
                        for (a = 0; a < e.length; a++)
                            for (var n = 0; n < e[a].weight; n++)
                                o.push(a);
                        var s = e[a = o[parseInt(Math.random() * o.length)]];
                        return -1 != s.title.indexOf("&nickName") && (s.title = s.title.replace(/&nickName/g, this.getUser().nickName)),
                            JSON.parse(JSON.stringify(s))
                    }
                    return null
                },
                onShareAppMessage: function(t) {
                    var e = this;
                    cc.sys.platform === cc.sys.WECHAT_GAME && (wx.showShareMenu({
                            withShareTicket: !0
                        }),
                        wx.onShareAppMessage(function(a) {
                            var o = 0;
                            t.type && (o = t.type);
                            var n = e.getShareByWeight(o);
                            console.log(n, "shareInfo"),
                                console.log(n.query, "shareInfo.query");
                            var s = 0;
                            e.getUser() && (s = e.getUser().uid),
                                t.title && (n.title = t.title),
                                t.imageUrl && (n.imageUrl = t.imageUrl),
                                n.query ? n.query += "&" + t.query + "&share_id=" + n.sysid + "&uid=" + s : t.query ? n.query = "share_id=" + n.sysid + "&uid=" + s + "&" + t.query : n.query = "share_id=" + n.sysid + "&uid=" + s,
                                t.success && (n.success = t.success),
                                t.fail && (n.fail = t.fail);
                            n.sysid;
                            return n
                        }))
                },
                shareAppMessage: function(t) {
                    if (cc.sys.platform === cc.sys.WECHAT_GAME) {
                        var e = 1;
                        t.type && (e = t.type);
                        var a = this.getShareByWeight(e);
                        console.log(a);
                        var o = 0;
                        if (this.getUser() && (o = this.getUser().uid),
                            t.title && (a.title = t.title),
                            t.imageUrl && (a.imageUrl = t.imageUrl),
                            a.query ? a.query += "&" + t.query + "&share_id=" + a.sysid + "&uid=" + o : t.query ? a.query = "share_id=" + a.sysid + "&uid=" + o + "&" + t.query : a.query = "share_id=" + a.sysid + "&uid=" + o,
                            t.success && (a.success = t.success),
                            t.fail && (a.fail = t.fail),
                            cc.sys.platform === cc.sys.WECHAT_GAME) {
                            wx.shareAppMessage(a);
                            a.sysid
                        }
                    }
                },
                Get: function(t, e, a) {
                    var s = this;
                    e.game = o.game,
                        e.version = o.version;
                    var i = (new Date).getTime();
                    for (var c in e.ts = i,
                            e.sign = n(i.toString().substr(9, 4) + o.game.substr(0, 2) + o.version.substr(0, 1) + "$5dfjr$%dsadsfdsii"),
                            t += "?",
                            e)
                        t += c + "=" + e[c] + "&";
                    var r = new XMLHttpRequest;
                    r.onreadystatechange = function() {
                            if (4 == r.readyState)
                                if (r.status >= 200 && r.status < 400) {
                                    var e = r.responseText;
                                    if (e) {
                                        var o = JSON.parse(e);
                                        a(o)
                                    } else
                                        s.debug && console.log("\u8fd4\u56de\u6570\u636e\u4e0d\u5b58\u5728", t),
                                        a(null)
                                } else
                                    s.debug && console.log("\u8bf7\u6c42\u5931\u8d25", t),
                                    a(null)
                        },
                        r.open("GET", t, !0),
                        r.send()
                },
                Post: function(t, e, a) {
                    var s = this;
                    e.game = o.game,
                        e.version = o.version;
                    var i = (new Date).getTime();
                    e.ts = i,
                        e.sign = n(i.toString().substr(9, 4) + o.game.substr(0, 2) + o.version.substr(0, 1) + "$5dfjr$%dsadsfdsii");
                    var c = new XMLHttpRequest;
                    c.onreadystatechange = function() {
                            if (4 == c.readyState)
                                if (c.status >= 200 && c.status < 400) {
                                    var t = c.responseText;
                                    if (t) {
                                        var e = JSON.parse(t);
                                        a(e)
                                    } else
                                        s.debug && console.log("\u8fd4\u56de\u6570\u636e\u4e0d\u5b58\u5728"),
                                        a(null)
                                } else
                                    s.debug && console.log("\u8bf7\u6c42\u5931\u8d25", c),
                                    a(null)
                        },
                        c.open("POST", t, !0),
                        c.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
                        c.send(JSON.stringify(e))
                },
                checkUpdate: function() {
                    var t = this;
                    if (cc.sys.platform === cc.sys.WECHAT_GAME && "function" == typeof wx.getUpdateManager) {
                        var e = wx.getUpdateManager();
                        e.onCheckForUpdate(function(e) {
                                t.debug && console.log("\u8bf7\u6c42\u5b8c\u65b0\u7248\u672c\u4fe1\u606f\u7684\u56de\u8c03", e.hasUpdate)
                            }),
                            e.onUpdateReady(function() {
                                t.debug && console.log("\u65b0\u7684\u7248\u672c\u5df2\u7ecf\u4e0b\u8f7d\u597d\uff0c\u8c03\u7528 applyUpdate \u5e94\u7528\u65b0\u7248\u672c\u5e76\u91cd\u542f"),
                                    e.applyUpdate()
                            }),
                            e.onUpdateFailed(function() {
                                t.debug && console.log("\u65b0\u7684\u7248\u672c\u4e0b\u8f7d\u5931\u8d25")
                            })
                    }
                },
                getConfig1: function() {
                    return this.ConfigData.config1
                },
                getConfig2: function() {
                    return this.ConfigData.config2
                },
                createImage: function(t, e) {
                    if (cc.sys.platform === cc.sys.WECHAT_GAME) {
                        var a = wx.createImage();
                        a.onload = function() {
                                var e = new cc.Texture2D;
                                e.initWithElement(a),
                                    e.handleLoadedTexture(),
                                    t.spriteFrame = new cc.SpriteFrame(e)
                            },
                            a.src = e
                    }
                },
                createSpriteFrame: function(t, e) {
                    var a = wx.createImage();
                    a.onload = function() {
                            var t = new cc.Texture2D;
                            t.initWithElement(a),
                                t.handleLoadedTexture(),
                                e(new cc.SpriteFrame(t))
                        },
                        a.src = t
                },
                getUser: function() {
                    var t = cc.sys.localStorage.getItem("userinfo");
                    return t ? JSON.parse(t) : null
                },
                setUser: function(t) {
                    cc.sys.localStorage.setItem("userinfo", JSON.stringify(t))
                },
                setItem: function(t, e) {
                    t = o.game + "_" + t,
                        cc.sys.localStorage.setItem(t, e)
                },
                getItem: function(t) {
                    return t = o.game + "_" + t,
                        cc.sys.localStorage.getItem(t)
                },
                onMessage: function(t) {
                    cc.sys.platform === cc.sys.WECHAT_GAME && wx.onMessage(function(e) {
                        t(e)
                    })
                },
                postMessage: function(t) {
                    cc.sys.platform === cc.sys.WECHAT_GAME && wx.postMessage({
                        message: t
                    })
                },
                setUserCloudStorage: function(t) {
                    if (cc.sys.platform === cc.sys.WECHAT_GAME) {
                        for (var e = 0; e < t.KVDataList.length; e++) {
                            var a = t.KVDataList[e];
                            a.key = o.game + "_" + a.key
                        }
                        this.debug && console.log(t.KVDataList),
                            wx.setUserCloudStorage({
                                KVDataList: t.KVDataList,
                                success: function(e) {
                                    t.success(e)
                                },
                                fail: function(e) {
                                    t.fail(e)
                                }
                            })
                    }
                },
                getUserCloudStorage: function(t) {
                    if (cc.sys.platform === cc.sys.WECHAT_GAME) {
                        for (var e = [], a = 0; a < t.keyList.length; a++) {
                            var n = t.keyList[a];
                            n = o.game + "_" + n,
                                e.push(n)
                        }
                        t.keyList = e,
                            this.debug && console.log(t),
                            wx.getUserCloudStorage({
                                keyList: t.keyList,
                                success: function(e) {
                                    t.success(e)
                                },
                                fail: function(e) {
                                    t.fail(e)
                                }
                            })
                    }
                },
                getGroupCloudStorage: function(t) {
                    if (cc.sys.platform === cc.sys.WECHAT_GAME) {
                        for (var e = [], a = 0; a < t.keyList.length; a++) {
                            var n = t.keyList[a];
                            n = o.game + "_" + n,
                                e.push(n)
                        }
                        t.keyList = e,
                            this.debug && console.log(t),
                            wx.getGroupCloudStorage({
                                shareTicket: t.shareTicket,
                                keyList: t.keyList,
                                success: function(e) {
                                    t.success(e)
                                },
                                fail: function(e) {
                                    t.fail(e)
                                }
                            })
                    }
                },
                getFriendCloudStorage: function(t) {
                    if (cc.sys.platform === cc.sys.WECHAT_GAME) {
                        for (var e = [], a = 0; a < t.keyList.length; a++) {
                            var n = t.keyList[a];
                            n = o.game + "_" + n,
                                e.push(n)
                        }
                        t.keyList = e,
                            this.debug && console.log(t),
                            wx.getFriendCloudStorage({
                                keyList: t.keyList,
                                success: function(e) {
                                    t.success(e)
                                },
                                fail: function(e) {
                                    t.fail(e)
                                }
                            })
                    }
                },
                sortList: function(t, e, a) {
                    return e = o.game + "_" + e,
                        t.sort(function(t, o) {
                            for (var n = 0, s = t.KVDataList, i = 0; i < s.length; i++)
                                s[i].key == e && (n = s[i].value);
                            var c = 0;
                            s = o.KVDataList;
                            for (i = 0; i < s.length; i++)
                                s[i].key == e && (c = s[i].value);
                            return a ? parseInt(n) - parseInt(c) : parseInt(c) - parseInt(n)
                        }),
                        t
                },
                getMyRank3: function(t, e) {
                    for (var a = [], o = 0; o < t.length; o++)
                        if (t.length <= 3) {
                            t[o].avatarUrl == e.avatarUrl && t[o].nickname == e.nickName && (t[o].isSelf = !0),
                                a = t;
                            for (o = 0; o < a.length; o++)
                                a[o].rank = o
                        } else if (t[o].avatarUrl == e.avatarUrl && t[o].nickname == e.nickName) {
                        t[o].isSelf = !0,
                            o == t.length - 1 ? (t[o].rank = o,
                                t[o - 1].rank = o - 1,
                                t[o - 2].rank = o - 2,
                                a.push(t[o - 2]),
                                a.push(t[o - 1]),
                                a.push(t[o])) : 0 == o ? (t[o].rank = o,
                                t[o + 1].rank = o + 1,
                                t[o + 2].rank = o + 2,
                                a.push(t[o]),
                                a.push(t[o + 1]),
                                a.push(t[o + 2])) : (t[o - 1].rank = o - 1,
                                t[o].rank = o,
                                t[o + 1].rank = o + 1,
                                a.push(t[o - 1]),
                                a.push(t[o]),
                                a.push(t[o + 1]));
                        break
                    }
                    return a
                },
                weChatLogin: function(t) {
                    var e = this;
                    if (cc.sys.platform === cc.sys.WECHAT_GAME) {
                        wx.getLaunchOptionsSync();
                        var a = this.getUser();
                        if (a)
                            t(a);
                        else {
                            var o = new cc.Node("Sprite");
                            o.parent = cc.director.getScene().getChildByName("Canvas"),
                                o.addComponent(cc.BlockInputEvents);
                            var n = o.addComponent(cc.Sprite);
                            o.opacity = 217,
                                o.color = new cc.Color(0, 0, 0, 255),
                                n.sizeMode = cc.Sprite.SizeMode.CUSTOM,
                                e.createImage(n, e.loginBg),
                                o.width = cc.view.getVisibleSize().width,
                                o.height = cc.view.getVisibleSize().height,
                                e.button ? e.button.show() : wx.getSystemInfo({
                                    success: function(a) {
                                        e.button = wx.createUserInfoButton({
                                                type: "image",
                                                image: e.loginBt,
                                                style: {
                                                    width: 291,
                                                    height: 350,
                                                    left: a.screenWidth / 2 - 145.5,
                                                    top: a.screenHeight / 2 - 175
                                                },
                                                lang: "zh_CN"
                                            }),
                                            e.button.onTap(function(a) {
                                                wx.showToast({
                                                        title: "\u767b\u5f55\u4e2d...",
                                                        icon: "loading",
                                                        duration: 8
                                                    }),
                                                    wx.getSetting({
                                                        success: function(n) {
                                                            n.authSetting["scope.userInfo"] ? (console.log("===\u5df2\u7ecf\u6388\u6743==="),
                                                                wx.login({
                                                                    success: function(n) {
                                                                        var s = {
                                                                            code: n.code,
                                                                            rawData: a.rawData,
                                                                            iv: a.iv,
                                                                            encryptedData: a.encryptedData,
                                                                            signature: a.signature
                                                                        };
                                                                        e.Post(e.ip1 + e.login, s, function(a) {
                                                                            console.log("==\u767b\u5f55\u7ed3\u679c==", a),
                                                                                1 == a.code ? (e.setUser(a.d),
                                                                                    wx.hideToast(),
                                                                                    o.destroy(),
                                                                                    e.button.hide(),
                                                                                    e.init({}, function(t) {}),
                                                                                    t(a.d)) : wx.showToast({
                                                                                    title: "\u767b\u5f55\u5931\u8d25\u8bf7\u91cd\u8bd5"
                                                                                })
                                                                        })
                                                                    },
                                                                    fail: function() {
                                                                        wx.showToast({
                                                                                title: "\u767b\u5f55\u5931\u8d25\u8bf7\u91cd\u8bd5"
                                                                            }),
                                                                            t(!1)
                                                                    }
                                                                })) : t(!1)
                                                        }
                                                    })
                                            }),
                                            e.button.show()
                                    }
                                })
                        }
                    }
                },
                createBannerAd: function(t) {
                    var e = this;
                    if (cc.sys.platform === cc.sys.WECHAT_GAME) {
                        if (this.BannerAd)
                            return this.BannerAd;
                        if (!t.style) {
                            t.style = {};
                            var a = wx.getSystemInfoSync();
                            this.w = a.screenWidth / 2,
                                this.h = a.screenHeight,
                                t.style.left = 0,
                                t.style.top = 0,
                                t.style.width = 300
                        }
                        return this.BannerAd = wx.createBannerAd({
                                adUnitId: o.bannerAdUnitId,
                                style: t.style
                            }),
                            this.BannerAd.onResize(function(t) {
                                console.log("BannerAd\u5e7f\u544a\u7f29\u653e\u4e8b\u4ef6\uff1a", t),
                                    e.BannerAd.style.left = e.w - e.BannerAd.style.realWidth / 2 + .1,
                                    e.BannerAd.style.top = e.h - e.BannerAd.style.realHeight + .1
                            }),
                            this.BannerAd.onLoad(function(t) {
                                console.log("BannerAd\u5e7f\u544a\u52a0\u8f7d\u4e8b\u4ef6\uff1a", t)
                            }),
                            this.BannerAd.onError(function(t) {
                                console.log("BannerAd\u5e7f\u544a\u9519\u8bef\u4e8b\u4ef6\uff1a", t)
                            }),
                            this.BannerAd
                    }
                },
                createRewardedVideoAd: function() {
                    if (cc.sys.platform === cc.sys.WECHAT_GAME)
                        return this.VideoAd ? this.VideoAd : (this.VideoAd = wx.createRewardedVideoAd({
                                adUnitId: o.videoAdUnitId
                            }),
                            this.VideoAd.onLoad(function(t) {
                                console.log("VideoAd\u5e7f\u544a\u52a0\u8f7d\u4e8b\u4ef6\uff1a", t)
                            }),
                            this.VideoAd.onError(function(t) {
                                console.log("VideoAd\u5e7f\u544a\u9519\u8bef\u4e8b\u4ef6\uff1a", t)
                            }),
                            this.VideoAd)
                },
                screenshot: function(t) {
                    var e = this;
                    wx.getSetting({
                        success: function(a) {
                            a.authSetting["scope.writePhotosAlbum"] ? e.capture(t) : wx.authorize({
                                scope: "scope.writePhotosAlbum",
                                success: function(a) {
                                    e.screenshot(t)
                                },
                                fail: function(a) {
                                    wx.showModal({
                                        title: "\u63d0\u793a",
                                        content: "\u8bf7\u5f00\u542f\u4fdd\u5b58\u5230\u76f8\u518c\u529f\u80fd",
                                        showCancel: !1,
                                        success: function() {
                                            wx.openSetting({
                                                success: function(a) {
                                                    a.authSetting["scope.writePhotosAlbum"] ? e.screenshot(t) : (wx.showToast({
                                                            title: "\u6388\u6743\u5931\u8d25"
                                                        }),
                                                        t(null))
                                                }
                                            })
                                        }
                                    })
                                }
                            })
                        },
                        fail: function() {
                            t(null)
                        }
                    })
                },
                capture: function(t) {
                    if (cc.ENGINE_VERSION < "2.0.0") {
                        var e = cc.game.canvas,
                            a = cc.winSize.width,
                            o = cc.winSize.height;
                        e.toTempFilePath({
                            x: 0,
                            y: 0,
                            width: a,
                            height: o,
                            destWidth: a,
                            destHeight: o,
                            success: function(e) {
                                wx.saveImageToPhotosAlbum({
                                    filePath: e.tempFilePath,
                                    success: function(e) {
                                        console.log("==\u622a\u56fe\u4fdd\u5b58=success=", e),
                                            t(!0)
                                    },
                                    fail: function(e) {
                                        console.log("==\u622a\u56fe\u4fdd\u5b58=fail=", e),
                                            t(null)
                                    }
                                })
                            }
                        })
                    } else {
                        var n = new cc.Node("camera");
                        n.parent = cc.director.getScene().getChildByName("Canvas");
                        var s = n.addComponent(cc.Camera),
                            i = new cc.RenderTexture,
                            c = cc.game._renderContext;
                        i.initWithSize(cc.visibleRect.width, cc.visibleRect.height, c.STENCIL_INDEX8),
                            s.targetTexture = i,
                            this.texture = i;
                        var r = this.texture.width,
                            d = this.texture.height,
                            l = document.createElement("canvas"),
                            u = l.getContext("2d");
                        l.width = r,
                            l.height = d,
                            s.render();
                        for (var p = this.texture.readPixels(), h = 4 * r, g = 0; g < d; g++) {
                            for (var f = d - 1 - g, m = u.createImageData(r, 1), y = f * r * 4, v = 0; v < h; v++)
                                m.data[v] = p[y + v];
                            u.putImageData(m, 0, g)
                        }
                        l.toDataURL("image/jpeg");
                        var b = l.toTempFilePathSync({
                            x: 0,
                            y: 0,
                            width: r,
                            height: d,
                            destWidth: r,
                            destHeight: d
                        });
                        wx.saveImageToPhotosAlbum({
                            filePath: b,
                            success: function(e) {
                                console.log("==\u622a\u56fe\u4fdd\u5b58=success=", e),
                                    t(!0)
                            },
                            fail: function(e) {
                                console.log("==\u622a\u56fe\u4fdd\u5b58=fail=", e),
                                    t(null)
                            }
                        })
                    }
                },
                favourRecord: function(t, e) {
                    var a = {
                        uid: this.getUser().uid,
                        page: t.page,
                        count: t.count
                    };
                    this.Get(this.ip2 + this.GetLikeInfo, a, e)
                },
                gameRecord: function(t, e) {
                    var a = {
                        uid: this.getUser().uid,
                        page: t.page,
                        count: t.count
                    };
                    this.Get(this.ip2 + this.GetGameReport, a, e)
                },
                backHome: function() {
                    this.ws.send(JSON.stringify({
                            id: "c2s_leave_room"
                        })),
                        cc.director.loadScene("aa_home")
                },
                getGameData: function() {
                    var t = cc.sys.localStorage.getItem("gameData");
                    if (t) {
                        var e = JSON.parse(t);
                        return e.user = this.getUser(),
                            e
                    }
                    return console.log("==getGameData=\u6570\u636e\u4e0d\u5b58\u5728"),
                        null
                },
                uploadResult: function(t, e) {
                    var a = {
                        game_id: o.game,
                        uid: this.getUser().uid,
                        result: t.result,
                        opponent_uid: t.opponent_uid
                    };
                    this.Post(this.ip2 + this.GameReport, a, e)
                },
                favour: function(t, e) {
                    var a = {
                        game_id: o.game,
                        src_uid: this.getUser().uid,
                        tar_uid: t.tar_uid
                    };
                    this.Post(this.ip2 + this.Like, a, e)
                }
            };
        window.ac_sdk = s,
            cc._RF.pop()
    }, {
        ac_sdk_conf: "ac_sdk_conf",
        md5: "md5"
    }],
    ac_shdl: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "c707608Eb9CnI2G7r/6emY+", "ac_shdl"),
            cc.Class({
                extends: cc.Component,
                properties: {
                    Label1: cc.Label
                },
                init: function(t) {
                    var e = window.dwhs(t);
                    this.Label1.string = e;
                    var a = null;
                    Math.round(10 * Math.random()) % 2 == 1 ? (a = cc.jumpBy(.5, cc.v2(Math.round(100 * Math.random()), 50), 0, 1),
                        this.node.runAction(cc.sequence(a, cc.jumpBy(.3, cc.v2(Math.round(100 * Math.random()), -250), 0, 1), cc.callFunc(this.remove, this)))) : (a = cc.jumpBy(.5, cc.v2(-Math.round(100 * Math.random()), 50), 0, 1),
                        this.node.runAction(cc.sequence(a, cc.jumpBy(.3, cc.v2(-Math.round(100 * Math.random()), -250), 0, 1), cc.callFunc(this.remove, this))))
                },
                remove: function() {
                    this.node.destroy()
                },
                start: function() {}
            }),
            cc._RF.pop()
    }, {}],
    ac_starts: [function(t, e, a) {
        "use strict";

        function o(t, e, a) {
            return e in t ? Object.defineProperty(t, e, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = a,
                t
        }
        var n;
        cc._RF.push(e, "567cfVlXI9GULN8SCnzTqHo", "ac_starts"),
            cc.Class({
                extends: cc.Component,
                properties: {
                    phbNode: cc.Node,
                    syNode: cc.Node,
                    closesyNode: cc.Node,
                    bttext: null,
                    buttonsy: [cc.AudioClip],
                    jzzNode: cc.Node,
                    sffx: !1,
                    fxtp: cc.SpriteFrame,
                    lanuchNode: cc.Node,
                    lanuchScript: null
                },
                onStartGame: function() {
                    console.log("1111111111"),
                        cc.audioEngine.stopAll(),
                        cc.director.loadScene("ac_game")
                },
                ongdyx: function() {
                    wx.navigateToMiniProgram({
                        appId: "wxd90f61788ee2f868",
                        path: "pages/index/index?id=123",
                        extraData: {
                            foo: "bar"
                        },
                        envVersion: "develop",
                        success: function(t) {}
                    })
                },
                onpyq: function() {
                    wx.createGameClubButton({
                        icon: "green",
                        style: {
                            left: 10,
                            top: 76,
                            width: 40,
                            height: 40
                        }
                    })
                },
                onOpenphb: function() {
                    this.onsy(0),
                        this.phbNode.active = !0
                },
                closephb: function() {
                    this.onsy(0),
                        this.phbNode.active = !1,
                        this.lanuchScript.onUPclose()
                },
                onOpenfx: function() {
                    this.onsy(0),
                        this.onShare()
                },
                onOpensy: function() {
                    window.sy = !0,
                        this.onsy(0),
                        this.onsy(1),
                        this.closesyNode.active = !1,
                        this.syNode.active = !0
                },
                closesy: function() {
                    this.onsy(0),
                        window.sy = !1,
                        this.closesyNode.active = !0,
                        this.syNode.active = !1,
                        cc.audioEngine.stopAll()
                },
                onShare: function() {
                    console.log("111111"),
                        ac_sdk.shareAppMessage({
                            type: 1,
                            query: "uid=520"
                        })
                },
                onsy: function(t) {
                    1 == window.sy && (1 == t ? cc.audioEngine.play(this.buttonsy[t], !0, 1) : cc.audioEngine.play(this.buttonsy[t], !1, 1))
                },
                onLoad: function() {
                    n = this
                },
                start: function() {
                    var t;
                    ac_sdk.init({
                            debug: !0
                        }, function(t) {
                            ac_sdk.onShareAppMessage({
                                    type: 0,
                                    query: "uid=520"
                                }),
                                console.log("sdk\u521d\u59cb\u5316\u7ed3\u679c\uff1a", t)
                        }),
                        n.jzzNode.active = !1,
                        cc.director.preloadScene("ac_game", function(t, e) {
                            n.jzzNode.active = !1
                        }),
                        n.onsy(1),
                        n.lanuchScript = n.lanuchNode.getComponent("ac_lanuch"),
                        n.bttext = (o(t = {}, 1, "\u6211\u8bf4\u8fc7\u6253\u602a\u8981\u4f4e\u8c03,\u53ef\u4f60\u975e\u8981\u7ed9\u6211\u638c\u58f0\u548c\u5c16\u53eb\uff01"),
                            o(t, 2, "\u5c0f\u732a\u4f69\u5947\u8eab\u4e0a\u7eb9\uff0c\u638c\u58f0\u9001\u7ed9\u6253\u602a\u8fbe\u4eba\uff01"),
                            o(t, 3, "\u5403\u60ca\uff01\u5343\u4e07\u522b\u5728\u5973\u670b\u53cb\u9762\u524d\u73a9\u8fd9\u4e2a\u6e38\u620f!"),
                            o(t, 4, "\u662f\u8c01\uff1f\u4eca\u5929\u5e26\u6211\u53bb\u6253boss\u5462\uff1f"),
                            o(t, 5, "\u534a\u591c\u8d77\u6765\uff0c\u5077\u5077\u4e5f\u8981\u73a9\u7684\u6e38\u620f\uff0c\u4e0d\u5f97\u4e0d\u770b!"),
                            o(t, 6, "\u5475\uff0c\u6708\u6536\u5165\u8fc7\u4e07\uff1f\u5728\u8fd9\u91cc\u5565\u90fd\u80fd\u5b9e\u73b0\uff01"),
                            o(t, 7, "\u5c31\u95ee\u4f60\u7684\u6253\u602a\u6280\u672f\u5982\u4f55\uff1f\u518d\u5f3a\u7684\u4eba\u5728\u8fd9\u91cc\u90fd\u662f\u5f31\u9e21!"),
                            o(t, 8, "\u4e3a\u4e86\u6253\u8d25\u8fd9\u6761boss\uff0c\u5c0f\u4ed9\u5973\u62d2\u7edd\u4e86\u4e09\u4e2a\u5c0f\u54e5\u54e5\uff01"),
                            o(t, 9, "\u6211\u8981\u8ba9\u5168\u4e16\u754c\u77e5\u9053\uff0c\u8fd9\u7247\u91ce\u533a\u88ab\u6211\u627f\u5305\u5566\uff01"),
                            o(t, 10, "\u8981\u7231\u60c5\u8fd8\u662f\u53bb\u6253\u602a?\u8fd9\u662f\u4e00\u4e2a\u503c\u5f97\u601d\u8003\u7684\u95ee\u9898\uff01"),
                            o(t, 11, "\u5168\u56fd\u7684\u7f8e\u5973\u90fd\u6c89\u8ff7\u7684\u8fd9\u6b3e\u6e38\u620f\uff0c\u4f60\u786e\u5b9a\u4e0d\u8fdb\u6765\u770b\u4e00\u770b\uff1f"),
                            o(t, 12, "\u60ca\uff01\u5973\u670b\u53cb\u548c\u6211\u8c08\u604b\u7231\u7adf\u7136\u662f\u4e3a\u4e86\u6211100W\u7684\u9ec4\u91d1\u70ae\u5854\uff01"),
                            o(t, 13, "\u9c7c\u548c\u718a\u638c\u4e0d\u53ef\u517c\u5f97\uff0c\u4f46\u7a77\u548c\u5355\u8eab\u53ef\u4ee5\uff01"),
                            o(t, 14, "\u653e\u4e0b\u90a3\u6761boss\uff0c\u8ba9\u6211\u6765\uff01"),
                            o(t, 15, "\u6253\u602a\u6280\u672f\u54ea\u5bb6\u5f3a\uff0c\u8fd8\u4e0d\u8fdb\u6765\u77a7\u4e00\u77a7\uff1f"),
                            o(t, 16, "\u5728\u8fd9\u91cc!\u6709\u94b1\u5c31\u53ef\u4ee5\u4e3a\u6240\u6b32\u4e3a\uff01"),
                            o(t, 17, "\u5728\u6253\u602a\u8fd9\u65b9\u9762,\u4eba\u4eba\u90fd\u5c0a\u79f0\u6211\u4e3a\u6821\u957f\uff01"),
                            o(t, 18, "\u4f55\u4ee5\u89e3\u5fe7?\u552f\u6709\u6253\u602a!"),
                            t),
                        n.ontime(),
                        1 == window.sy ? (this.closesyNode.active = !1,
                            this.syNode.active = !0) : (this.closesyNode.active = !0,
                            this.syNode.active = !1,
                            cc.audioEngine.stopAll())
                },
                ontime: function() {
                    if (null == data || void 0 == data || "" == data)
                        ac_sdk.setItem("time", event.data);
                    else if (data.slice(0, 4) != event.data.slice(0, 4) || data.slice(5, 7) != event.data.slice(5, 7) || data.slice(8, 10) != event.data.slice(8, 10) || event.data.slice(11, 13) != data.slice(11, 13))
                        if (data.slice(8, 10) == event.data.slice(8, 10) && "00:00:00" == data.slice(11, 19))
                        ;
                        else {
                            window.lxsy = !0;
                            event.data.slice(0, 10)
                        }
                }
            }),
            cc._RF.pop()
    }, {}],
    ac_start: [function(t, e, a) {
        "use strict";

        function o(t, e, a) {
            return e in t ? Object.defineProperty(t, e, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = a,
                t
        }
        var n;
        cc._RF.push(e, "db958wX+qJORInt+2a/Uw2M", "ac_start"),
            cc.Class({
                extends: cc.Component,
                properties: {
                    phbNode: cc.Node,
                    syNode: cc.Node,
                    closesyNode: cc.Node,
                    bttext: null,
                    buttonsy: [cc.AudioClip],
                    jzzNode: cc.Node,
                    sffx: !1,
                    fxtp: cc.SpriteFrame,
                    lanuchNode: cc.Node,
                    lanuchScript: null
                },
                onStartGame: function() {
                    console.log("1111111111"),
                        cc.director.loadScene("ac_game")
                },
                ongdyx: function() {
                    wx.navigateToMiniProgram({
                        appId: "wxd90f61788ee2f868",
                        path: "pages/index/index?id=123",
                        extraData: {
                            foo: "bar"
                        },
                        envVersion: "develop",
                        success: function(t) {}
                    })
                },
                onpyq: function() {
                    wx.createGameClubButton({
                        icon: "green",
                        style: {
                            left: 10,
                            top: 76,
                            width: 40,
                            height: 40
                        }
                    })
                },
                onOpenphb: function() {
                    this.onsy(0),
                        this.phbNode.active = !0
                },
                closephb: function() {
                    this.onsy(0),
                        this.phbNode.active = !1,
                        this.lanuchScript.onUPclose()
                },
                onOpenfx: function() {
                    this.onsy(0),
                        this.onShare()
                },
                onOpensy: function() {
                    window.sy = !0,
                        this.onsy(0),
                        this.onsy(1),
                        this.closesyNode.active = !1,
                        this.syNode.active = !0
                },
                closesy: function() {
                    this.onsy(0),
                        window.sy = !1,
                        this.closesyNode.active = !0,
                        this.syNode.active = !1,
                        cc.audioEngine.stopAll()
                },
                onShare: function() {
                    console.log("111111"),
                        ac_sdk.shareAppMessage({
                            type: 1,
                            query: "uid=520"
                        })
                },
                onsy: function(t) {
                    1 == window.sy && (1 == t ? cc.audioEngine.play(this.buttonsy[t], !0, 1) : cc.audioEngine.play(this.buttonsy[t], !1, 1))
                },
                onLoad: function() {
                    n = this
                },
                start: function() {
                    var t;
                    ac_sdk.init({
                            debug: !0
                        }, function(t) {
                            ac_sdk.onShareAppMessage({
                                    type: 0,
                                    query: "uid=520"
                                }),
                                console.log("sdk\u521d\u59cb\u5316\u7ed3\u679c\uff1a", t)
                        }),
                        n.jzzNode.active = !0,
                        cc.director.preloadScene("ac_game", function(t, e) {
                            n.jzzNode.active = !1
                        }),
                        n.onsy(1),
                        n.bttext = (o(t = {}, 1, "\u6211\u8bf4\u8fc7\u6253\u602a\u8981\u4f4e\u8c03,\u53ef\u4f60\u975e\u8981\u7ed9\u6211\u638c\u58f0\u548c\u5c16\u53eb\uff01"),
                            o(t, 2, "\u5c0f\u732a\u4f69\u5947\u8eab\u4e0a\u7eb9\uff0c\u638c\u58f0\u9001\u7ed9\u6253\u602a\u8fbe\u4eba\uff01"),
                            o(t, 3, "\u5403\u60ca\uff01\u5343\u4e07\u522b\u5728\u5973\u670b\u53cb\u9762\u524d\u73a9\u8fd9\u4e2a\u6e38\u620f!"),
                            o(t, 4, "\u662f\u8c01\uff1f\u4eca\u5929\u5e26\u6211\u53bb\u6253boss\u5462\uff1f"),
                            o(t, 5, "\u534a\u591c\u8d77\u6765\uff0c\u5077\u5077\u4e5f\u8981\u73a9\u7684\u6e38\u620f\uff0c\u4e0d\u5f97\u4e0d\u770b!"),
                            o(t, 6, "\u5475\uff0c\u6708\u6536\u5165\u8fc7\u4e07\uff1f\u5728\u8fd9\u91cc\u5565\u90fd\u80fd\u5b9e\u73b0\uff01"),
                            o(t, 7, "\u5c31\u95ee\u4f60\u7684\u6253\u602a\u6280\u672f\u5982\u4f55\uff1f\u518d\u5f3a\u7684\u4eba\u5728\u8fd9\u91cc\u90fd\u662f\u5f31\u9e21!"),
                            o(t, 8, "\u4e3a\u4e86\u6253\u8d25\u8fd9\u6761boss\uff0c\u5c0f\u4ed9\u5973\u62d2\u7edd\u4e86\u4e09\u4e2a\u5c0f\u54e5\u54e5\uff01"),
                            o(t, 9, "\u6211\u8981\u8ba9\u5168\u4e16\u754c\u77e5\u9053\uff0c\u8fd9\u7247\u91ce\u533a\u88ab\u6211\u627f\u5305\u5566\uff01"),
                            o(t, 10, "\u8981\u7231\u60c5\u8fd8\u662f\u53bb\u6253\u602a?\u8fd9\u662f\u4e00\u4e2a\u503c\u5f97\u601d\u8003\u7684\u95ee\u9898\uff01"),
                            o(t, 11, "\u5168\u56fd\u7684\u7f8e\u5973\u90fd\u6c89\u8ff7\u7684\u8fd9\u6b3e\u6e38\u620f\uff0c\u4f60\u786e\u5b9a\u4e0d\u8fdb\u6765\u770b\u4e00\u770b\uff1f"),
                            o(t, 12, "\u60ca\uff01\u5973\u670b\u53cb\u548c\u6211\u8c08\u604b\u7231\u7adf\u7136\u662f\u4e3a\u4e86\u6211100W\u7684\u9ec4\u91d1\u70ae\u5854\uff01"),
                            o(t, 13, "\u9c7c\u548c\u718a\u638c\u4e0d\u53ef\u517c\u5f97\uff0c\u4f46\u7a77\u548c\u5355\u8eab\u53ef\u4ee5\uff01"),
                            o(t, 14, "\u653e\u4e0b\u90a3\u6761boss\uff0c\u8ba9\u6211\u6765\uff01"),
                            o(t, 15, "\u6253\u602a\u6280\u672f\u54ea\u5bb6\u5f3a\uff0c\u8fd8\u4e0d\u8fdb\u6765\u77a7\u4e00\u77a7\uff1f"),
                            o(t, 16, "\u5728\u8fd9\u91cc!\u6709\u94b1\u5c31\u53ef\u4ee5\u4e3a\u6240\u6b32\u4e3a\uff01"),
                            o(t, 17, "\u5728\u6253\u602a\u8fd9\u65b9\u9762,\u4eba\u4eba\u90fd\u5c0a\u79f0\u6211\u4e3a\u6821\u957f\uff01"),
                            o(t, 18, "\u4f55\u4ee5\u89e3\u5fe7?\u552f\u6709\u6253\u602a!"),
                            t),
                        // n.ontime(),
                        1 == window.sy ? (this.closesyNode.active = !1,
                            this.syNode.active = !0) : (this.closesyNode.active = !0,
                            this.syNode.active = !1,
                            cc.audioEngine.stopAll())
                },
                ontime: function() {
                    var t = new WebSocket("wss://wxgamessl.bingoyx.com:8360");
                    t.onopen = function(e) {
                            console.log("connect success!"),
                                t.send("GETDATE")
                        },
                        t.onerror = function(t) {
                            console.log("socket error!")
                        },
                        t.onmessage = function(e) {
                            console.log("message: " + e.data);
                            var a = wx.getStorageSync("time");
                            if (console.log("time" + a),
                                null == a || void 0 == a || "" == a)
                                ac_sdk.setItem("time", e.data),
                                wx.setStorageSync("time", e.data);
                            else if (a.slice(0, 4) != e.data.slice(0, 4) || a.slice(5, 7) != e.data.slice(5, 7) || a.slice(8, 10) != e.data.slice(8, 10) || e.data.slice(11, 13) != a.slice(11, 13))
                                if (a.slice(8, 10) == e.data.slice(8, 10) && "00:00:00" == a.slice(11, 19))
                                ;
                                else {
                                    window.lxsy = !0;
                                    var o = e.data.slice(0, 10) + " 00:00:00";
                                    wx.setStorageSync("time", o)
                                }
                            t.close()
                        },
                        t.onclose = function(t) {
                            console.log("close: " + t.code)
                        }
                }
            }),
            cc._RF.pop()
    }, {}],
    ac_uiScript: [function(t, e, a) {
        "use strict";

        function o(t, e, a) {
            return e in t ? Object.defineProperty(t, e, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = a,
                t
        }
        cc._RF.push(e, "c34c3NdMYhEQ5JgY/DRgZLP", "ac_uiScript");
        var n, s = t("./H5SDK").default;
        cc.Class({
                extends: cc.Component,
                properties: {
                    gamemianNode: cc.Node,
                    gameScript: null,
                    BossNode: cc.Node,
                    BossScript: null,
                    bzxg: cc.Animation,
                    time: 350,
                    xtProgressBar: cc.ProgressBar,
                    jdt_1: cc.Node,
                    xtnum: 1,
                    bossLabel: cc.Label,
                    ptlevelLabel: cc.Label,
                    bossdata: null,
                    ptIndex: 0,
                    ptTime: 0,
                    sfcj: !0,
                    jbsl: 0,
                    jbsl_1: cc.Label,
                    item_jb: cc.Node,
                    jbdlArr: [cc.Node],
                    jbdlNode: cc.Node,
                    jbIndex: null,
                    gamedata: null,
                    quan: cc.Sprite,
                    ptshopPrefab: cc.Prefab,
                    ptshop: null,
                    ptmaxLevel: null,
                    tierNode: cc.Node,
                    shade: cc.Node,
                    hcpt: cc.Prefab,
                    jbbz: cc.Prefab,
                    dq_sy: [cc.AudioClip],
                    shdl: cc.Prefab,
                    shdlNode: cc.Node,
                    fhdtNode: cc.Node,
                    bosscd: cc.Node,
                    sftzBOSS: !1,
                    wanfa: cc.Node,
                    tzbossdh: sp.Skeleton,
                    ontzBoss: !1,
                    tzbossNode: cc.Node,
                    tzxgNode: cc.Node,
                    sxsyNode: cc.Node,
                    lxsynum: 0,
                    bttext: null,
                    lxsyLabel: cc.Label,
                    bossjb: null,
                    tslj: cc.Node,
                    jsgjIime: 180,
                    jstimeLabel: cc.Label,
                    jsgjNode: cc.Node,
                    bx: cc.Node,
                    bxtsk: cc.Node,
                    bxgold: 100,
                    bxjbLabel: cc.Label,
                    xsjcNode: cc.Node,
                    fxdq: cc.Prefab
                },
                onLoad: function() {
                    var t;
                    (n = this).animaString = (o(t = {}, 1, "bzxg1"),
                            o(t, 2, "bzxg2"),
                            t),
                        n.gameScript = n.gamemianNode.getComponent("ac_gamemian"),
                        n.BossScript = n.BossNode.getComponent("ac_bossScript"),
                        n.bzxg.play(n.animaString[1]),
                        n.xtnum = 1
                },
                onOpenxsjc: function() {
                    n.xsjcNode.active = !0
                },
                onclosexsjc: function() {
                    n.xsjcNode.active = !1
                },
                tzBOSS: function() {
                    1 == n.sftzBOSS && (n.bosscd.active = !0,
                        n.bosscd.width -= .2,
                        n.time -= .2,
                        n.time < 0 && (n.time = 350,
                            n.bosscd.width = 361,
                            n.bosscd.active = !1,
                            n.sftzBOSS = !1,
                            n.ontzxg()))
                },
                oncolosesxsy: function() {
                    n.sxsyNode.active = !1,
                        n.shade.active = !1,
                        n.gamedata.jbsl += n.lxsynum,
                        n.setgold(),
                        0 == window.debug ? wx.setStorageSync("gamedata", JSON.stringify(n.gamedata)) : ac_sdk.setItem("gamedata", JSON.stringify(n.gamedata))
                },
                onOpenyxjb: function() {
                    n.bxtsk.active = !0,
                        n.shade.active = !0
                },
                coloseyxjb: function() {
                    n.bxtsk.active = !1,
                        n.shade.active = !1
                },
                onOpenhs: function() {
                    n.tslj.active = !0,
                        n.shade.active = !0
                },
                closehs: function() {
                    n.tslj.active = !1,
                        n.shade.active = !1
                },
                onOpenwf: function() {
                    n.wanfa.active = !0,
                        n.wanfa.parent = n.tierNode,
                        n.shade.active = !0
                },
                closewf: function() {
                    n.wanfa.parent = n.node,
                        n.wanfa.active = !1,
                        n.shade.active = !1
                },
                onOpenfhdt: function() {
                    n.fhdtNode.active = !0,
                        n.fhdtNode.parent = n.tierNode,
                        n.shade.active = !0
                },
                closefhdt: function() {
                    n.fhdtNode.parent = n.node,
                        n.fhdtNode.active = !1,
                        n.shade.active = !1
                },
                fhdt: function() {
                    cc.audioEngine.stopAll(),
                        cc.director.loadScene("ac_start")
                },
                xtjs: function(t, e) {
                    t == e && (n.jdt_1.width = 361,
                        n.xtnum = 1);
                    var a = t / e;
                    n.xtProgressBar.progress = a,
                        n.xtProgressBar.progress < n.xtnum && n.xtnum > 0 && (n.xtnum -= .01,
                            n.jdt_1.width = 361 * n.xtnum);
                    var o = window.dwhs(t);
                    n.bossLabel.string = o
                },
                setjbsl: function() {
                    1 == n.jbdlArr[n.jbIndex].active && (n.onsy(2),
                        n.jbdlArr[n.jbIndex].active = !1,
                        n.jbIndex += 1);
                    var t;
                    null != (t = n.BossScript.jbdl / 4) && (n.gamedata.jbsl += t);
                    var e = n.gamedata.jbsl,
                        a = window.dwhs(e);
                    n.jbsl_1.string = a;
                    var o = cc.sequence(cc.scaleTo(.1, 1.4), cc.scaleTo(.1, 1));
                    n.item_jb.runAction(o),
                        0 == window.debug ? wx.setStorageSync("gamedata", JSON.stringify(n.gamedata)) : ac_sdk.setItem("gamedata", JSON.stringify(n.gamedata))
                },
                setgold: function() {
                    var t = n.gamedata.jbsl;
                    n.jbsl_1.string = window.dwhs(t);
                    var e = cc.sequence(cc.scaleTo(.1, 1.4), cc.scaleTo(.1, 1));
                    n.item_jb.runAction(e)
                },
                ongmpt: function(t, e) {
                    if (void 0 == n.gamedata.pt_jgArray[t]) {
                        for (var a = 500, o = 1; o < t; o++)
                            a *= 2;
                        n.gamedata.pt_jgArray[t] = a
                    }
                    if (n.gamedata.pt_jgArray[t] <= n.gamedata.jbsl)
                        if (n.gameScript.gmfzpt(t + 1)) {
                            n.gamedata.jbsl -= Math.ceil(n.gamedata.pt_jgArray[t]),
                                n.gamedata.pt_jgArray[t] = Math.ceil(1.5 * n.gamedata.pt_jgArray[t]),
                                e.setjg(n.gamedata.pt_jgArray[t]);
                            var s = n.gamedata.jbsl,
                                i = window.dwhs(s);
                            n.jbsl_1.string = i,
                                n.onsy(0),
                                0 == window.debug ? wx.setStorageSync("gamedata", JSON.stringify(n.gamedata)) : ac_sdk.setItem("gamedata", JSON.stringify(n.gamedata))
                        } else {
                            (r = cc.instantiate(n.hcpt)).parent = n.tierNode;
                            var c = cc.fadeOut(1);
                            r.runAction(c)
                        }
                    else {
                        var r;
                        (r = cc.instantiate(n.jbbz)).parent = n.tierNode;
                        c = cc.fadeOut(1);
                        r.runAction(c)
                    }
                    ac_sdk.setItem("gamedata", JSON.stringify(n.gamedata))
                },
                Opengmpt: function() {
                    if (n.ptmaxLevel = n.gameScript.sjptLevel(),
                        null == n.ptshop) {
                        var t = cc.instantiate(n.ptshopPrefab);
                        n.tierNode.addChild(t),
                            n.ptshop = t.getComponent("ac_gmptScript"),
                            n.ptshop.create(n.ptmaxLevel, n, n.gamedata.pt_jgArray),
                            n.onOpenshade()
                    } else
                        n.ptshop.createEnemy(n.ptmaxLevel, n, n.gamedata.pt_jgArray),
                        n.onOpenshade()
                },
                onOpenshade: function() {
                    n.shade.active = !0
                },
                closeshawo: function() {
                    n.shade.active = !1
                },
                jbdl: function() {
                    n.onsy(1);
                    for (var t = 0; t < 4; t++) {
                        var e = null;
                        n.jbIndex = 0,
                            e = t < 2 ? cc.moveTo(.3, cc.v2(Math.round(100 * Math.random()), -125)) : cc.moveTo(.3, cc.v2(-Math.round(100 * Math.random()), -125)),
                            n.jbdlArr[t].active = !0,
                            3 == t ? n.jbdlArr[t].runAction(cc.sequence(e, cc.callFunc(n.jbdlfh))) : n.jbdlArr[t].runAction(e)
                    }
                },
                jbdlfh: function() {
                    n.schedule(function() {
                        for (var t = 0; t < 4; t++) {
                            var e;
                            e = cc.moveTo(.2 * t + 1, cc.v2(0, 200)),
                                n.jbdlArr[t].runAction(cc.sequence(e, cc.callFunc(n.setjbsl)))
                        }
                    }, 2, 0)
                },
                jsBOssSh: function(t) {
                    if (console.log(t),
                        t > 0) {
                        n.onsy(3);
                        var e = cc.instantiate(n.shdl),
                            a = e.getComponent("ac_shdl"),
                            o = t,
                            s = window.dwhs(o);
                        a.init(s),
                            n.shdlNode.addChild(e);
                        var i = null;
                        i = (i = Math.round(10 * Math.random())) % 2 + 1,
                            n.bzxg.play(n.animaString[i])
                    }
                    5 == n.BossScript.bossiD ? n.BossScript.bossData.bossSum -= t : n.BossScript.xgData.bossSum -= t
                },
                tzboss: function() {
                    this.tzbossdh.node.active = !0,
                        this.tzbossdh.setAnimation(1, "animation", !1)
                },
                ontzboss: function() {
                    n.BossScript.removeBoss11(n.cjboss)
                },
                cjboss: function() {
                    n.tzbossNode.active = !1,
                        n.tzxgNode.active = !0,
                        n.ontzBoss = !1,
                        n.BossScript.scboss(),
                        n.time = 350,
                        n.bosscd.width = 361,
                        n.sftzBOSS = !0,
                        n.sfcj = !1,
                        n.tzboss(),
                        n.gamedata.xgid = 6,
                        n.BossScript.create(n.gamedata.bossLevel, n.gamedata.xgid - 1),
                        n.ptlevelLabel.string = n.gamedata.bossLevel,
                        n.sfcj = !0
                },
                onsy: function(t) {
                    1 == window.sy && (5 == t ? cc.audioEngine.play(this.dq_sy[t], !0, 1) : cc.audioEngine.play(this.dq_sy[t], !1, 1))
                },
                ontzxg: function() {
                    n.BossScript.removeBoss11(n.cjtzxg)
                },
                cjtzxg: function() {
                    n.time = 350,
                        n.bosscd.width = 361,
                        n.bosscd.active = !1,
                        n.sftzBOSS = !1,
                        n.tzbossNode.active = !0,
                        n.tzxgNode.active = !1,
                        n.BossScript.scboss(),
                        n.sfcj = !1,
                        n.gamedata.xgid = 1,
                        n.BossScript.create(n.gamedata.bossLevel, n.gamedata.xgid),
                        n.ptlevelLabel.string = n.gamedata.bossLevel,
                        n.sfcj = !0
                },
                start: function() {
                    var t;
                    if (n.bttext = (o(t = {}, 1, "\u6211\u8bf4\u8fc7\u6253\u602a\u8981\u4f4e\u8c03,\u53ef\u4f60\u975e\u8981\u7ed9\u6211\u638c\u58f0\u548c\u5c16\u53eb\uff01"),
                            o(t, 2, "\u5c0f\u732a\u4f69\u5947\u8eab\u4e0a\u7eb9\uff0c\u638c\u58f0\u9001\u7ed9\u6253\u602a\u8fbe\u4eba\uff01"),
                            o(t, 3, "\u5403\u60ca\uff01\u5343\u4e07\u522b\u5728\u5973\u670b\u53cb\u9762\u524d\u73a9\u8fd9\u4e2a\u6e38\u620f!"),
                            o(t, 4, "\u662f\u8c01\uff1f\u4eca\u5929\u5e26\u6211\u53bb\u6253boss\u5462\uff1f"),
                            o(t, 5, "\u534a\u591c\u8d77\u6765\uff0c\u5077\u5077\u4e5f\u8981\u73a9\u7684\u6e38\u620f\uff0c\u4e0d\u5f97\u4e0d\u770b!"),
                            o(t, 6, "\u5475\uff0c\u6708\u6536\u5165\u8fc7\u4e07\uff1f\u5728\u8fd9\u91cc\u5565\u90fd\u80fd\u5b9e\u73b0\uff01"),
                            o(t, 7, "\u5c31\u95ee\u4f60\u7684\u6253\u602a\u6280\u672f\u5982\u4f55\uff1f\u518d\u5f3a\u7684\u4eba\u5728\u8fd9\u91cc\u90fd\u662f\u5f31\u9e21!"),
                            o(t, 8, "\u4e3a\u4e86\u6253\u8d25\u8fd9\u6761boss\uff0c\u5c0f\u4ed9\u5973\u62d2\u7edd\u4e86\u4e09\u4e2a\u5c0f\u54e5\u54e5\uff01"),
                            o(t, 9, "\u6211\u8981\u8ba9\u5168\u4e16\u754c\u77e5\u9053\uff0c\u8fd9\u7247\u91ce\u533a\u88ab\u6211\u627f\u5305\u5566\uff01"),
                            o(t, 10, "\u8981\u7231\u60c5\u8fd8\u662f\u53bb\u6253\u602a?\u8fd9\u662f\u4e00\u4e2a\u503c\u5f97\u601d\u8003\u7684\u95ee\u9898\uff01"),
                            o(t, 11, "\u5168\u56fd\u7684\u7f8e\u5973\u90fd\u6c89\u8ff7\u7684\u8fd9\u6b3e\u6e38\u620f\uff0c\u4f60\u786e\u5b9a\u4e0d\u8fdb\u6765\u770b\u4e00\u770b\uff1f"),
                            o(t, 12, "\u60ca\uff01\u5973\u670b\u53cb\u548c\u6211\u8c08\u604b\u7231\u7adf\u7136\u662f\u4e3a\u4e86\u6211100W\u7684\u9ec4\u91d1\u70ae\u5854\uff01"),
                            o(t, 13, "\u9c7c\u548c\u718a\u638c\u4e0d\u53ef\u517c\u5f97\uff0c\u4f46\u7a77\u548c\u5355\u8eab\u53ef\u4ee5\uff01"),
                            o(t, 14, "\u653e\u4e0b\u90a3\u6761boss\uff0c\u8ba9\u6211\u6765\uff01"),
                            o(t, 15, "\u6253\u602a\u6280\u672f\u54ea\u5bb6\u5f3a\uff0c\u8fd8\u4e0d\u8fdb\u6765\u77a7\u4e00\u77a7\uff1f"),
                            o(t, 16, "\u5728\u8fd9\u91cc!\u6709\u94b1\u5c31\u53ef\u4ee5\u4e3a\u6240\u6b32\u4e3a\uff01"),
                            o(t, 17, "\u5728\u6253\u602a\u8fd9\u65b9\u9762,\u4eba\u4eba\u90fd\u5c0a\u79f0\u6211\u4e3a\u6821\u957f\uff01"),
                            o(t, 18, "\u4f55\u4ee5\u89e3\u5fe7?\u552f\u6709\u6253\u602a!"),
                            t),
                        0 == window.debug)
                        var e = wx.getStorageSync("gamedata");
                    else
                        e = ac_sdk.getItem("gamedata");
                    null == e || "undefined" == e || "" == e ? (n.onOpenxsjc(),
                        n.gamedata = {
                            bossLevel: 1,
                            xgid: 0,
                            jbsl: 500,
                            ptDataArray: null,
                            pt_jgArray: []
                        },
                        0 == window.debug ? wx.setStorageSync("gamedata", JSON.stringify(n.gamedata)) : ac_sdk.setItem("gamedata", JSON.stringify(n.gamedata)),
                        n.ptmaxLevel = 1,
                        n.gamedata.pt_jgArray[n.ptmaxLevel] = 500) : n.gamedata = JSON.parse(e);
                    var a = n.gamedata.jbsl,
                        s = window.dwhs(a);
                    switch (n.jbsl_1.string = s,
                        n.onsy(5),
                        5 == n.gamedata.xgid ? n.BossScript.create(n.gamedata.bossLevel, 1) : n.BossScript.create(n.gamedata.bossLevel, n.gamedata.xgid),
                        n.gameScript.init(n.gamedata.ptDataArray),
                        n.ptlevelLabel.string = n.gamedata.bossLevel,
                        n.time = 350,
                        n.gamedata.xgid) {
                        case 0:
                            n.quan.fillRange = 0;
                            break;
                        case 1:
                            n.quan.fillRange = .2;
                            break;
                        case 2:
                            n.quan.fillRange = .4;
                            break;
                        case 3:
                            n.quan.fillRange = .6;
                            break;
                        case 4:
                            n.quan.fillRange = .8;
                            break;
                        case 5:
                            n.quan.fillRange = 1
                    }
                    if (5 == n.gamedata.xgid && (n.tzxgNode.active = !0),
                        n.gamedata.xgid > 5 && (n.gamedata.xgid = 1),
                        5 != n.gamedata.xgid && (n.gamedata.xgid += 1),
                        1 == window.lxsy) {
                        n.lxsynum = n.jsjg(Math.ceil(n.gameScript.sjptLevel())),
                            window.lxsy = !1;
                        a = n.lxsynum,
                            s = window.dwhs(a);
                        n.lxsyLabel.string = s,
                            n.sxsyNode.active = !0,
                            n.shade.active = !0
                    }
                },
                jsjg: function(t) {
                    for (var e = 500, a = 0; a < t; a++)
                        e *= 2;
                    return e
                },
                shareAPP: function(t) {
                    s.getInstance().showRewardVideo(function() {
                        1 == t ? (n.sxsyNode.active = !1,
                            n.shade.active = !1,
                            n.lxsynum = 2 * n.lxsynum,
                            n.gamedata.jbsl += n.lxsynum,
                            n.setgold(),
                            ac_sdk.setItem("gamedata", JSON.stringify(n.gamedata))) : 2 == t ? (n.bx.active = !1,
                            n.coloseyxjb(),
                            n.gamedata.jbsl += n.bxgold,
                            n.setgold(),
                            ac_sdk.setItem("gamedata", JSON.stringify(n.gamedata))) : 3 == t && (n.jsgjIime = 180,
                            n.gameScript.jsgj(2),
                            n.jsgjNode.active = !0)
                    })
                },
                onsxlyksp: function() {
                    n.shareAPP(1)
                },
                fxhdjb: function() {
                    n.shareAPP(2)
                },
                Speed: function() {
                    n.shareAPP(3)
                },
                stopSpeed: function() {
                    n.gameScript.jsgj(1),
                        n.jsgjNode.active = !1
                },
                bossrmovehd: function() {
                    switch (n.BossScript.create(n.gamedata.bossLevel, n.gamedata.xgid),
                        5 == n.BossScript.bossiD && (n.tzboss(),
                            n.tzxgNode.active = !0,
                            n.sftzBOSS = !0),
                        n.gamedata.xgid) {
                        case 0:
                            n.quan.fillRange = 0;
                            break;
                        case 1:
                            n.quan.fillRange = .2;
                            break;
                        case 2:
                            n.quan.fillRange = .4;
                            break;
                        case 3:
                            n.quan.fillRange = .6;
                            break;
                        case 4:
                            n.quan.fillRange = .8;
                            break;
                        case 5:
                            n.quan.fillRange = 1
                    }
                    0 == window.debug ? wx.setStorageSync("gamedata", JSON.stringify(n.gamedata)) : ac_sdk.setItem("gamedata", JSON.stringify(n.gamedata)),
                        n.gamedata.xgid += 1,
                        n.ptlevelLabel.string = n.gamedata.bossLevel,
                        n.sfcj = !0
                },
                update: function(t) {
                    if (n.tzBOSS(),
                        1 == n.jsgjNode.active && (n.jsgjIime -= .0175,
                            n.jstimeLabel.string = Math.ceil(n.jsgjIime),
                            n.gameScript.jsgj(2),
                            n.jsgjIime < 0 && n.stopSpeed()),
                        0 == n.bx.active && 1 == Math.round(3e4 * Math.random())) {
                        n.bx.active = !0;
                        var e = cc.sequence(cc.scaleTo(.2, 1.4), cc.scaleTo(.2, 1), cc.scaleTo(.2, 1.4), cc.scaleTo(.2, 1));
                        n.bxgold = n.jsjg(Math.ceil(n.gameScript.sjptLevel())) * ((Math.round(10 * Math.random()) + 2) / 10),
                            n.bxjbLabel.string = window.dwhs(n.bxgold),
                            n.bx.runAction(e)
                    }
                    n.BossScript.bossData.bossSum > 0 && n.BossScript.xgData.bossSum > 0 ? 5 == n.BossScript.bossiD ? n.xtjs(Math.ceil(n.BossScript.bossData.bossSum), Math.ceil(n.BossScript.bossData.bossNowNum)) : n.xtjs(Math.ceil(n.BossScript.xgData.bossSum), Math.ceil(n.BossScript.xgData.bossNowNum)) : 1 == n.sfcj && (n.BossScript.removeBoss(),
                        n.jbdl(),
                        n.sfcj = !1,
                        5 == n.BossScript.bossiD && (n.tzbossNode.active = !1,
                            n.time = 350,
                            n.bosscd.width = 361,
                            n.bosscd.active = !1,
                            n.sftzBOSS = !1,
                            n.gamedata.bossLevel += 1,
                            n.gamedata.xgid = 0,
                            n.tzxgNode.active = !1,
                            0 == window.debug ? wx.setStorageSync("gamedata", JSON.stringify(n.gamedata)) : ac_sdk.setItem("gamedata", JSON.stringify(n.gamedata))))
                }
            }),
            cc._RF.pop()
    }, {
        "./H5SDK": "H5SDK"
    }],
    ac_zlsz: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "4f52dhxV45Hi4/yyX+qL7UQ", "ac_zlsz"),
            cc.Class({
                extends: cc.Component,
                properties: {
                    Label1: cc.Label
                },
                init: function(t) {
                    var e = t,
                        a = window.dwhs(e);
                    this.Label1.string = a
                },
                start: function() {}
            }),
            cc._RF.pop()
    }, {}],
    md5: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "efdf3YxJENIZYaxiOvixngR", "md5");
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } :
            function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            };
        (function(t) {
            function a(t, e) {
                var a = (65535 & t) + (65535 & e);
                return (t >> 16) + (e >> 16) + (a >> 16) << 16 | 65535 & a
            }

            function n(t, e) {
                return t << e | t >>> 32 - e
            }

            function s(t, e, o, s, i, c) {
                return a(n(a(a(e, t), a(s, c)), i), o)
            }

            function i(t, e, a, o, n, i, c) {
                return s(e & a | ~e & o, t, e, n, i, c)
            }

            function c(t, e, a, o, n, i, c) {
                return s(e & o | a & ~o, t, e, n, i, c)
            }

            function r(t, e, a, o, n, i, c) {
                return s(e ^ a ^ o, t, e, n, i, c)
            }

            function d(t, e, a, o, n, i, c) {
                return s(a ^ (e | ~o), t, e, n, i, c)
            }

            function l(t, e) {
                var o, n, s, l, u;
                t[e >> 5] |= 128 << e % 32,
                    t[14 + (e + 64 >>> 9 << 4)] = e;
                var p = 1732584193,
                    h = -271733879,
                    g = -1732584194,
                    f = 271733878;
                for (o = 0; o < t.length; o += 16)
                    n = p,
                    s = h,
                    l = g,
                    u = f,
                    h = d(h = d(h = d(h = d(h = r(h = r(h = r(h = r(h = c(h = c(h = c(h = c(h = i(h = i(h = i(h = i(h, g = i(g, f = i(f, p = i(p, h, g, f, t[o], 7, -680876936), h, g, t[o + 1], 12, -389564586), p, h, t[o + 2], 17, 606105819), f, p, t[o + 3], 22, -1044525330), g = i(g, f = i(f, p = i(p, h, g, f, t[o + 4], 7, -176418897), h, g, t[o + 5], 12, 1200080426), p, h, t[o + 6], 17, -1473231341), f, p, t[o + 7], 22, -45705983), g = i(g, f = i(f, p = i(p, h, g, f, t[o + 8], 7, 1770035416), h, g, t[o + 9], 12, -1958414417), p, h, t[o + 10], 17, -42063), f, p, t[o + 11], 22, -1990404162), g = i(g, f = i(f, p = i(p, h, g, f, t[o + 12], 7, 1804603682), h, g, t[o + 13], 12, -40341101), p, h, t[o + 14], 17, -1502002290), f, p, t[o + 15], 22, 1236535329), g = c(g, f = c(f, p = c(p, h, g, f, t[o + 1], 5, -165796510), h, g, t[o + 6], 9, -1069501632), p, h, t[o + 11], 14, 643717713), f, p, t[o], 20, -373897302), g = c(g, f = c(f, p = c(p, h, g, f, t[o + 5], 5, -701558691), h, g, t[o + 10], 9, 38016083), p, h, t[o + 15], 14, -660478335), f, p, t[o + 4], 20, -405537848), g = c(g, f = c(f, p = c(p, h, g, f, t[o + 9], 5, 568446438), h, g, t[o + 14], 9, -1019803690), p, h, t[o + 3], 14, -187363961), f, p, t[o + 8], 20, 1163531501), g = c(g, f = c(f, p = c(p, h, g, f, t[o + 13], 5, -1444681467), h, g, t[o + 2], 9, -51403784), p, h, t[o + 7], 14, 1735328473), f, p, t[o + 12], 20, -1926607734), g = r(g, f = r(f, p = r(p, h, g, f, t[o + 5], 4, -378558), h, g, t[o + 8], 11, -2022574463), p, h, t[o + 11], 16, 1839030562), f, p, t[o + 14], 23, -35309556), g = r(g, f = r(f, p = r(p, h, g, f, t[o + 1], 4, -1530992060), h, g, t[o + 4], 11, 1272893353), p, h, t[o + 7], 16, -155497632), f, p, t[o + 10], 23, -1094730640), g = r(g, f = r(f, p = r(p, h, g, f, t[o + 13], 4, 681279174), h, g, t[o], 11, -358537222), p, h, t[o + 3], 16, -722521979), f, p, t[o + 6], 23, 76029189), g = r(g, f = r(f, p = r(p, h, g, f, t[o + 9], 4, -640364487), h, g, t[o + 12], 11, -421815835), p, h, t[o + 15], 16, 530742520), f, p, t[o + 2], 23, -995338651), g = d(g, f = d(f, p = d(p, h, g, f, t[o], 6, -198630844), h, g, t[o + 7], 10, 1126891415), p, h, t[o + 14], 15, -1416354905), f, p, t[o + 5], 21, -57434055), g = d(g, f = d(f, p = d(p, h, g, f, t[o + 12], 6, 1700485571), h, g, t[o + 3], 10, -1894986606), p, h, t[o + 10], 15, -1051523), f, p, t[o + 1], 21, -2054922799), g = d(g, f = d(f, p = d(p, h, g, f, t[o + 8], 6, 1873313359), h, g, t[o + 15], 10, -30611744), p, h, t[o + 6], 15, -1560198380), f, p, t[o + 13], 21, 1309151649), g = d(g, f = d(f, p = d(p, h, g, f, t[o + 4], 6, -145523070), h, g, t[o + 11], 10, -1120210379), p, h, t[o + 2], 15, 718787259), f, p, t[o + 9], 21, -343485551),
                    p = a(p, n),
                    h = a(h, s),
                    g = a(g, l),
                    f = a(f, u);
                return [p, h, g, f]
            }

            function u(t) {
                var e, a = "",
                    o = 32 * t.length;
                for (e = 0; e < o; e += 8)
                    a += String.fromCharCode(t[e >> 5] >>> e % 32 & 255);
                return a
            }

            function p(t) {
                var e, a = [];
                for (a[(t.length >> 2) - 1] = void 0,
                    e = 0; e < a.length; e += 1)
                    a[e] = 0;
                var o = 8 * t.length;
                for (e = 0; e < o; e += 8)
                    a[e >> 5] |= (255 & t.charCodeAt(e / 8)) << e % 32;
                return a
            }

            function h(t) {
                return u(l(p(t), 8 * t.length))
            }

            function g(t, e) {
                var a, o, n = p(t),
                    s = [],
                    i = [];
                for (s[15] = i[15] = void 0,
                    n.length > 16 && (n = l(n, 8 * t.length)),
                    a = 0; a < 16; a += 1)
                    s[a] = 909522486 ^ n[a],
                    i[a] = 1549556828 ^ n[a];
                return o = l(s.concat(p(e)), 512 + 8 * e.length),
                    u(l(i.concat(o), 640))
            }

            function f(t) {
                var e, a, o = "";
                for (a = 0; a < t.length; a += 1)
                    e = t.charCodeAt(a),
                    o += "0123456789abcdef".charAt(e >>> 4 & 15) + "0123456789abcdef".charAt(15 & e);
                return o
            }

            function m(t) {
                return unescape(encodeURIComponent(t))
            }

            function y(t) {
                return h(m(t))
            }

            function v(t) {
                return f(y(t))
            }

            function b(t, e) {
                return g(m(t), m(e))
            }

            function A(t, e) {
                return f(b(t, e))
            }

            function S(t, e, a) {
                return e ? a ? b(e, t) : A(e, t) : a ? y(t) : v(t)
            }
            "function" == typeof define && define.amd ? define(function() {
                return S
            }) : "object" === (void 0 === e ? "undefined" : o(e)) && e.exports ? e.exports = S : t.md5 = S
        })(void 0),
        cc._RF.pop()
    }, {}]
}, {}, ["ac_start", "H5SDK", "ac_GlobalData", "ac_bossScript", "ac_gamemian", "ac_gmptScript", "ac_gzScript", "ac_hcdh", "ac_hzScript", "ac_lanuch", "ac_pt_xx", "ac_sdk", "ac_sdk_conf", "ac_shdl", "ac_starts", "ac_uiScript", "ac_zlsz", "md5"]);