window.__require = function t(e, o, n) {
    function i(a, s) {
        if (!o[a]) {
            if (!e[a]) {
                var r = a.split("/");
                if (r = r[r.length - 1], !e[r]) {
                    var l = "function" == typeof __require && __require;
                    if (!s && l) return l(r, !0);
                    if (c) return c(r, !0);
                    throw new Error("Cannot find module '" + a + "'")
                }
                a = r
            }
            var u = o[a] = {
                exports: {}
            };
            e[a][0].call(u.exports, function (t) {
                return i(e[a][1][t] || t)
            }, u, u.exports, t, e, o, n)
        }
        return o[a].exports
    }
    for (var c = "function" == typeof __require && __require, a = 0; a < n.length; a++) i(n[a]);
    return i
}({
    AdsBoomgames: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "e46d4hnvqdBoa5kVYaa7glU", "AdsBoomgames");
        var n = this && this.__extends || function () {
                var t = function (e, o) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function (t, e) {
                            t.__proto__ = e
                        } || function (t, e) {
                            for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                        })(e, o)
                };
                return function (e, o) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, o), e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
                }
            }(),
            i = this && this.__decorate || function (t, e, o, n) {
                var i, c = arguments.length,
                    a = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
                else
                    for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (c < 3 ? i(a) : c > 3 ? i(e, o, a) : i(e, o)) || a);
                return c > 3 && a && Object.defineProperty(e, o, a), a
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var c = t("../ads/IScAds"),
            a = t("../ads/ScAdsManager"),
            s = cc._decorator.ccclass,
            r = function (t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                var o;
                return n(e, t), o = e, e.prototype.onComponentLoad = function () {
                    a.default.instance.setAdsHelper(new o)
                }, e.prototype.init = function (t, e) {
                    t()
                }, e.prototype.showReward = function (t, e, o) {
                    bp.rewardedVideoAd.offClose(), bp.rewardedVideoAd.onClose(function (e) {
                        e && e.isEnded ? (console.log("\u6b63\u5e38\u64ad\u653e\u7ed3\u675f\uff0c\u4e0b\u53d1\u6e38\u620f\u5956\u52b1"), t()) : (console.log("\u64ad\u653e\u4e2d\u9014\u9000\u51fa\uff0c\u4e0d\u4e0b\u53d1\u6e38\u620f\u5956\u52b1"), o())
                    }), bp.rewardedVideoAd.show().then(function (t) {
                        console.log("\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u5c55\u793a\u6210\u529f", JSON.stringify(t))
                    }).catch(function (t) {
                        console.log("\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u5c55\u793a\u5931\u8d25", JSON.stringify(t)), e()
                    })
                }, e.prototype.showInter = function (t, e) {
                    bp.interstitialAd.offClose(), bp.interstitialAd.onClose(function () {
                        console.log("\u63d2\u5c4f\u5e7f\u544a\u5173\u95ed")
                    }), bp.interstitialAd.show().then(function (e) {
                        console.log("\u63d2\u5c4f\u5e7f\u544a\u5c55\u793a\u6210\u529f", JSON.stringify(e)), t()
                    }).catch(function (t) {
                        console.log("\u63d2\u5c4f\u5e7f\u544a\u5c55\u793a\u5931\u8d25", JSON.stringify(t)), e()
                    })
                }, e.prototype.showBanner = function (t, e) {
                    t()
                }, e.prototype.hideBanner = function (t, e) {
                    t()
                }, e = o = i([s], e)
            }(c.default);
        o.default = r, cc._RF.pop()
    }, {
        "../ads/IScAds": "IScAds",
        "../ads/ScAdsManager": "ScAdsManager"
    }],
    AdsWeiyou: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "3db7eMQfMhJ+YDwjz0w9naN", "AdsWeiyou");
        var n = this && this.__extends || function () {
                var t = function (e, o) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function (t, e) {
                            t.__proto__ = e
                        } || function (t, e) {
                            for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                        })(e, o)
                };
                return function (e, o) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, o), e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
                }
            }(),
            i = this && this.__decorate || function (t, e, o, n) {
                var i, c = arguments.length,
                    a = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
                else
                    for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (c < 3 ? i(a) : c > 3 ? i(e, o, a) : i(e, o)) || a);
                return c > 3 && a && Object.defineProperty(e, o, a), a
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var c = t("../ads/IScAds"),
            a = t("../ads/ScAdsManager"),
            s = cc._decorator.ccclass,
            r = function (t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                var o;
                return n(e, t), o = e, e.prototype.onComponentLoad = function () {
                    console.log("\u6302\u8f7dweiyou\u5e7f\u544a"), a.default.instance.setAdsHelper(new o)
                }, e.prototype.init = function (t, e) {
                    console.log("\u521d\u59cb\u5316weiyou\u5e7f\u544a"), t()
                }, e.prototype.showReward = function (t, e, o) {
                    // ad
                    console.log('showReward...');
                    // t()
                    // e()
                }, e.prototype.showInter = function (t, e) {
                    // ad
                    console.log('showInter...')
                }, e.prototype.showBanner = function (t, e) {
                    console.info("\u65b0\u63a5\u53e3\u64ad\u653e\u6a2a\u5e45\u5e7f\u544a: \u6210\u529f"), t()
                }, e.prototype.hideBanner = function (t, e) {
                    console.info("\u65b0\u63a5\u53e3\u9690\u85cfBanner\u5e7f\u544a: \u6210\u529f"), t()
                }, e = o = i([s], e)
            }(c.default);
        o.default = r, cc._RF.pop()
    }, {
        "../ads/IScAds": "IScAds",
        "../ads/ScAdsManager": "ScAdsManager"
    }],
    AttendancePrefab: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "05e5fgLqQ1OI6jKzOOdQYAL", "AttendancePrefab"), cc.Class({
            extends: cc.Component,
            properties: {
                spriteFrame: {
                    default: [],
                    type: cc.SpriteFrame
                },
                bgImage: cc.Sprite,
                dayImage: cc.Sprite,
                label: cc.Label,
                goldLabel: cc.Label,
                goldImage: cc.Node,
                lostImage: cc.Node
            },
            init: function (t) {
                this.id = t.id, this.gold = 0, console.log("\u7b7e\u5230\uff1a\u7b2c " + t.id + " \u5929"), 7 == t.id ? (this.goldImage.active = !1, this.goldLabel.string = "70\u661f\u661f", this.gold = 70, this.bgImage.spriteFrame = this.spriteFrame[0], console.log("?")) : t.id >= 1 && t.id <= 6 && (this.dayImage.spriteFrame = this.spriteFrame[t.id], this.goldLabel.string = 10 * t.id + "\u661f\u661f", this.gold = 10 * t.id)
            },
            now: function () {},
            lost: function () {
                this.dayImage.spriteFrame = this.spriteFrame[7], this.lostImage.active = !0
            }
        }), cc._RF.pop()
    }, {}],
    Attendance: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "e0f33JoGE9NVIYTJT6mhgR0", "Attendance");
        var n = t("G");
        cc.Class({
            extends: cc.Component,
            properties: {
                attendancePrefab: cc.Prefab,
                attendancePrefabScript: "",
                content: cc.Node,
                btn1: cc.Button,
                btn2: cc.Button,
                again: cc.Node,
                againGold: cc.Label,
                at: cc.Node,
                shareLayer: cc.Node,
                shareGold: cc.Label
            },
            onLoad: function () {
                this.init()
            },
            onEnable: function () {
                this.at.active = !0
            },
            start: function () {
                var t = cc.winSize;
                t.height / t.width >= 1.7 ? (console.log("\u5927\u4e8e 1.7"), n.Interface.showBannerAD()) : n.Interface.hideBannerAD();
                var e = new Date,
                    o = n.LocalStorage.getData();
                e.toDateString() == o && (this.node.active = !1)
            },
            init: function () {
                var t = n.LocalStorage.getData(),
                    e = n.LocalStorage.get("dataTime"),
                    o = new Date;
                console.log(t, o.toDateString(), e), t == o.toDateString() ? (this.btn1.interactable = !1, this.btn2.interactable = !1, 0 == (e %= 7) && (e = 7)) : e = e % 7 + 1;
                for (var i = 1; i <= 7; i++) {
                    var c = cc.instantiate(this.attendancePrefab);
                    c.getComponent(this.attendancePrefabScript).init({
                        id: i
                    }), e > i && c.getComponent(this.attendancePrefabScript).lost(), t == o.toDateString() ? e == i && c.getComponent(this.attendancePrefabScript).lost() : e == i && (this.dataNode = c, c.getComponent(this.attendancePrefabScript).now()), c.parent = this.content
                }
            },
            get: function () {
                this.getGold(1)
            },
            get2: function () {
                n.Interface.showRewardedAD(function () {
                    this.getGold(2)
                }.bind(this))
            },
            getGold: function (t) {
                if (cc.director.emit("clickSound"), console.log("11111"), this.dataNode) {
                    this.dataNode.getComponent(this.attendancePrefabScript).lost();
                    var e = n.LocalStorage.get("gold");
                    n.LocalStorage.set("gold", e + this.dataNode.getComponent(this.attendancePrefabScript).gold * t), this.initShare(this.dataNode.getComponent(this.attendancePrefabScript).gold * t), cc.director.emit("gold")
                }
                var o = new Date;
                n.LocalStorage.setData(o.toDateString());
                var i = n.LocalStorage.get("dataTime");
                i++, n.LocalStorage.set("dataTime", i), this.btn1.interactable = !1, this.btn2.interactable = !1
            },
            clear: function () {
                n.LocalStorage.setData(0)
            },
            close: function () {
                this.node.active = !1
            },
            uptime: function () {
                n.LocalStorage.setData(0)
            },
            initShare: function (t) {
                this.shareLayer.active = !0, this.at.active = !1, this.shareGold.string = "x" + t
            },
            share: function () {
                n.Interface.share(), this.scheduleOnce(function () {
                    this.shareLayer.active = !1, this.initAgain(this.dataNode.getComponent(this.attendancePrefabScript).gold)
                }, .3)
            },
            closeShare: function () {
                this.shareLayer.active = !1, this.initAgain(this.dataNode.getComponent(this.attendancePrefabScript).gold)
            },
            initAgain: function (t) {
                this.again.active = !0, this.againGold.string = "x" + t, this.aGold = t
            },
            againBtn: function () {
                n.Interface.showRewardedAD(function () {
                    var t = n.LocalStorage.get("gold");
                    n.LocalStorage.set("gold", t + this.aGold), cc.director.emit("gold"), this.closeAgainBtn()
                }.bind(this))
            },
            closeAgainBtn: function () {
                this.again.active = !1, this.node.active = !1
            }
        }), cc._RF.pop()
    }, {
        G: "G"
    }],
    Audio: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "5baebm8+f5H3oKzJdpycIwn", "Audio");
        var n = t("G");
        cc.Class({
            extends: cc.Component,
            properties: {
                audio: {
                    default: [],
                    type: cc.AudioClip
                }
            },
            onLoad: function () {
                this.clickSound(), this.winSound(), this.failSound(), this.popSound(), this.tool1Sound(), this.tool2Sound(), this.tool3Sound()
            },
            init: function () {
                this.audioArray = [];
                for (var t = 0; t < this.audio.length; t++) {
                    var e = wx.createInnerAudioContext();
                    e.src = this.audio[t].nativeUrl, e.onPlay(function () {
                        console.log("\u5f00\u59cb\u64ad\u653e")
                    }), e.onError(function (t) {
                        console.log(t.errMsg), console.log(t.errCode)
                    }), this.audioArray.push(e)
                }
            },
            clickSound: function () {
                var t = n.LocalStorage.get("sound");
                console.log(t), 0 != t && cc.director.on("clickSound", function (t) {
                    this.audio && this.play(this.audio[0])
                }.bind(this))
            },
            winSound: function () {
                0 != n.LocalStorage.get("sound") && cc.director.on("winSound", function (t) {
                    this.audio && this.play(this.audio[1])
                }.bind(this))
            },
            failSound: function () {
                0 != n.LocalStorage.get("sound") && cc.director.on("failSound", function (t) {
                    this.audio && this.play(this.audio[2])
                }.bind(this))
            },
            popSound: function () {
                0 != n.LocalStorage.get("sound") && cc.director.on("popSound", function (t) {
                    this.audio && this.play(this.audio[3])
                }.bind(this))
            },
            tool1Sound: function () {
                if (0 != n.LocalStorage.get("sound")) {
                    var t = this;
                    cc.director.on("tool1Sound", function (e) {
                        t.audio && t.play(t.audio[4])
                    })
                }
            },
            tool2Sound: function () {
                if (0 != n.LocalStorage.get("sound")) {
                    var t = this;
                    cc.director.on("tool2Sound", function (e) {
                        t.audio && t.play(t.audio[5])
                    })
                }
            },
            tool3Sound: function () {
                if (0 != n.LocalStorage.get("sound")) {
                    var t = this;
                    cc.director.on("tool3Sound", function (e) {
                        t.audio && t.play(t.audio[6])
                    })
                }
            },
            play: function (t) {
                if (0 != n.LocalStorage.get("sound")) {
                    var e = cc.audioEngine.play(t, !1, 1);
                    cc.audioEngine.setVolume(e, .5)
                }
            }
        }), cc._RF.pop()
    }, {
        G: "G"
    }],
    ContinueLayer: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "48e50dMBiBKKZBCsS/4HFok", "ContinueLayer"), cc.Class({
            extends: cc.Component,
            properties: {},
            continue: function (t) {
                this.node.active = !0, this.successCallback = t.success, this.failCallBack = t.fail
            },
            yes: function () {
                this.node.active = !1, cc.director.emit("clickSound"), this.successCallback()
            },
            no: function () {
                this.node.active = !1, cc.director.emit("clickSound"), this.failCallBack()
            }
        }), cc._RF.pop()
    }, {}],
    Fail: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "e79d9jOzOlCxr4NiTT+MBJM", "Fail");
        var n = t("G");
        cc.Class({
            extends: cc.Component,
            properties: {
                overLayer: cc.Node,
                game: cc.Node,
                videoBtn: cc.Button,
                shareBtn: cc.Button
            },
            fail: function (t) {
                this.score = t, this.node.active = !0, n.config ? (console.log("\u6d4b\u8bd5"), this.shareBtn.active = !1) : (console.log("\u6b63\u5f0f"), this.gameCount = n.LocalStorage.get("gamecount"), console.log("\u5f53\u524d\u4e3a\u4e0b\u8f7d\u6e38\u620f\u540e\u7684\u7b2c ", this.gameCount + 1, " \u5c40"), this.shareBtn.node.active = !1, this.videoBtn.node.active = !0)
            },
            reviveByVideo: function () {
                cc.director.emit("clickSound"), n.Interface.isOkVideo() ? n.Interface.showRewardedAD(function () {
                    this.revive()
                }.bind(this)) : n.Interface.hitBox("\u6682\u65e0\u5e7f\u544a\u64ad\u653e\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5")
            },
            reviveByShare: function () {
                cc.director.emit("clickSound");
                var t = parseInt(n.serverTime);
                n.Interface.share({
                    utc: t,
                    type: 2
                }), n.t1 = Date.parse(new Date)
            },
            revive: function () {
                var t = n.LocalStorage.get("reviveTime");
                n.LocalStorage.set("reviveTime", --t), this.node.active = !1, console.log("\u590d\u6d3b"), this.game.getComponent("Game").play()
            },
            skip: function () {
                cc.director.emit("clickSound"), n.score = this.score, n.LocalStorage.set("level", 1), n.LocalStorage.set("score", 0), n.LocalStorage.set("gamecount", ++this.gameCount), this.node.active = !1, this.overLayer.active = !0
            }
        }), cc._RF.pop()
    }, {
        G: "G"
    }],
    GameHome: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "e09cdJM/O1DQ5yvNYUiaqvm", "GameHome");
        var n = t("gameData"),
            i = t("G");
        cc.Class({
            extends: cc.Component,
            properties: {
                goldNum: cc.Label,
                maxScoreLabel: cc.Label,
                rankingList: cc.Node,
                inviteList: cc.Node,
                coverLayer: cc.Node,
                continueLayer: cc.Node,
                guess: cc.Node,
                layout: cc.Node,
                attendanceLayer: cc.Node,
                soundOnBtn: cc.Node,
                soundOffBtn: cc.Node
            },
            onLoad: function () {
                i.LocalStorage.init(), this.maxScoreLabel.string = i.LocalStorage.get("maxscore") || "0", this.goldNum.string = i.LocalStorage.get("gold") || "0";
                var t = cc.winSize;
                this.ratio = t.height / t.width, this.ratio > 2.06 && (console.log("\u5927\u4e8e 2.06"), this.layout.scale = 1.2), this.ratio < 1.4 && (console.log("\u5c0f\u4e8e 1.4"), this.guess.active = !1, this.layout.getComponent("cc.Widget").bottom = .2), i.Interface.showBannerAD(), 0 == i.LocalStorage.get("sound") ? (this.soundOnBtn.active = 0, this.soundOffBtn.active = 1) : (this.soundOnBtn.active = 1, this.soundOffBtn.active = 0)
            },
            onSoundOnClick: function () {
                i.LocalStorage.set("sound", 0), this.soundOnBtn.active = 0, this.soundOffBtn.active = 1
            },
            onSoundOffClick: function () {
                i.LocalStorage.set("sound", 1), this.soundOnBtn.active = 1, this.soundOffBtn.active = 0, cc.director.emit("clickSound")
            },
            onStartGame: function () {
                i.Interface.showInterAD();
                var t = i.LocalStorage.get("level"),
                    e = i.score;
                1 == t && 0 == e ? (n.ifContinue = !1, cc.director.loadScene("game")) : this.continueLayer.getComponent("ContinueLayer").continue({
                    level: t,
                    success: function () {
                        n.ifContinue = !0, cc.director.loadScene("game")
                    }.bind(this),
                    fail: function () {
                        n.ifContinue = !1, i.LocalStorage.set("level", 1), i.LocalStorage.set("score", 0), cc.director.loadScene("game")
                    }.bind(this)
                }), cc.director.emit("clickSound")
            },
            showRankingList: function () {
                this.coverLayer.active = !0, this.rankingList.active = !0, cc.director.emit("clickSound"), i.Interface.friendRank(), i.Interface.hideBannerAD()
            },
            closeRankingList: function () {
                this.coverLayer.active = !1, this.rankingList.active = !1, cc.director.emit("clickSound"), this.ratio >= 1.7 && (console.log("\u5927\u4e8e 1.7"), i.Interface.showBannerAD())
            },
            showInviteList: function () {
                this.coverLayer.active = !0, this.inviteList.active = !0, cc.director.emit("clickSound")
            },
            closeInviteList: function () {
                this.coverLayer.active = !1, this.inviteList.active = !1, cc.director.emit("clickSound")
            },
            share: function () {
                cc.director.emit("clickSound"), i.Interface.share({
                    type: 0
                })
            },
            invite: function () {
                cc.director.emit("click"), i.Interface.share({
                    type: 0
                })
            }
        }), cc._RF.pop()
    }, {
        G: "G",
        gameData: "gameData"
    }],
    Game: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "fbfd1b6vNhMEpv6Fqus17/w", "Game");
        var n = t("gameData"),
            i = t("G");
        cc.Class({
            extends: cc.Component,
            properties: {
                starRoot: cc.Node,
                uiRoot: cc.Node,
                coverLayer: cc.Node,
                waitingLayer: cc.Node,
                guideLayer: cc.Node,
                goIn: cc.Node,
                win: cc.Node,
                fail: cc.Node,
                tool_destroy: cc.Node,
                tool_change: cc.Node,
                tool_reset: cc.Node,
                tool1num: cc.Label,
                tool2num: cc.Label,
                tool3num: cc.Label,
                tool1add: cc.Node,
                tool2add: cc.Node,
                tool3add: cc.Node,
                toolTips: cc.Label,
                progressBar: cc.ProgressBar,
                levelLabel: cc.Label,
                targetScoreLabel: cc.Label,
                scoreLabel: cc.Label,
                goldNode: cc.Node
            },
            onLoad: function () {
                this.starRoot.getComponent("MatrixCtrl").init(), i.LocalStorage.init();
                var t = cc.winSize;
                this.ratio = t.height / t.width, this.ratio > 2.06 && (this.uiRoot.getComponent("cc.Widget").top = 100, this.starRoot.getComponent("cc.Widget").bottom = .22), this.ratio < 1.4 && (this.uiRoot.scale = 5 / 7, this.starRoot.scale = 10 / 14), this.ratio < 1.7 && this.ratio >= 1.4 && (this.starRoot.getComponent("cc.Widget").bottom = .06)
            },
            start: function () {
                i.Interface.showBannerAD(), n.ifContinue ? this.play() : (this.starRoot.getComponent("MatrixCtrl").clearStarSprite(), i.LocalStorage.set("tool1num", 1), i.LocalStorage.set("tool2num", 1), i.LocalStorage.set("tool3num", 1), i.LocalStorage.set("reviveTime", 2), this.play())
            },
            goInAnimation: function (t, e, o) {
                this.goIn.getComponent("GoIn").playAnim({
                    level: t,
                    targetScore: e,
                    callback: function () {
                        this.starRoot.getComponent("MatrixCtrl").gameStart(o, e), this.waitingLayer.active = !1
                    }.bind(this)
                })
            },
            initTitle: function (t, e, o) {
                this.progressBar.progress = cc.misc.clamp01(o / e), this.initTool(), this.levelLabel.string = "Level" + t, this.targetScoreLabel.string = e, this.scoreLabel.string = o
            },
            initTool: function () {
                this._tool1num = i.LocalStorage.get("tool1num"), this._tool1num > 0 ? (this.tool1add.active = !1, this.tool1num.string = i.LocalStorage.get("tool1num")) : this.tool1add.active = !0, this._tool2num = i.LocalStorage.get("tool2num"), this._tool2num > 0 ? (this.tool2add.active = !1, this.tool2num.string = i.LocalStorage.get("tool2num")) : this.tool2add.active = !0, this._tool3num = i.LocalStorage.get("tool3num"), this._tool3num > 0 ? (this.tool3add.active = !1, this.tool3num.string = i.LocalStorage.get("tool3num")) : this.tool3add.active = !0
            },
            next: function (t) {
                i.Interface.showInterAD(), console.log("\u8fc7\u5173\uff01"), this.waitingLayer.active = !0;
                var e = i.LocalStorage.get("level");
                i.LocalStorage.set("level", ++e), i.LocalStorage.set("score", t);
                var o = this.win.getComponent("Win");
                o.reward.string = "Reward " + n.getRewardScore(n.remainingStarCount), o.remain.string = n.remainingStarCount, this.coverLayer.active = !0, this.win.active = !0, o.playWinAnimation(function () {
                    this.coverLayer.active = !1, this.play(), this.win.active = !1
                }.bind(this))
            },
            over: function (t) {
                i.Interface.showInterAD(), i.Interface.submitScore(t), t > i.LocalStorage.get("maxscore") && i.LocalStorage.set("maxscore", t), console.log("\u672c\u5c40\u5269\u4f59\u590d\u6d3b\u6b21\u6570", i.LocalStorage.get("reviveTime")), i.LocalStorage.get("reviveTime") > 0 ? (console.log("\u5206\u6570\u4e0d\u591f\uff0c\u5931\u8d25\uff01\u5373\u5c06\u8fdb\u5165\u590d\u6d3b\u754c\u9762"), this.fail.getComponent("Fail").fail(t)) : (console.log("\u672c\u5c40\u5df2\u65e0\u590d\u6d3b\u6b21\u6570"), this.fail.getComponent("Fail").fail(t), this.fail.getComponent("Fail").skip())
            },
            onGoHome: function () {
                i.Interface.showInterAD(), i.score = parseInt(this.scoreLabel.string), cc.director.emit("clickSound"), cc.director.loadScene("gameHome")
            },
            play: function () {
                console.log("first=" + i.LocalStorage.get("first"));
                var t = cc.winSize;
                t.height / t.width >= 1.7 && (console.log("\u64ad\u653e\u5e7f\u544a"), i.Interface.showBannerAD());
                var e = i.LocalStorage.get("level"),
                    o = i.getTargetScore(e),
                    c = i.LocalStorage.get("score");
                1 == i.LocalStorage.get("first") == 1 ? (console.log("First Game"), this.initTitle(1, 1e3, 0), this.guideLayer.getComponent("GuideLayer").open(), this.guideLayer.getComponent("GuideLayer").no(), this.starRoot.getComponent("MatrixCtrl").firstGame(), this.starRoot.getComponent("MatrixCtrl").starShowAnimation()) : (this.waitingLayer.active = !0, 0 != n.starSprite.length ? (this.initTitle(e, o, i.score), this.goInAnimation(e, o, i.score)) : (this.initTitle(e, o, c), this.goInAnimation(e, o, c)))
            },
            first: function () {
                1 == i.LocalStorage.get("first") && (i.LocalStorage.set("gamecount", 0), i.LocalStorage.set("gold", 50), i.LocalStorage.set("tool1num", 1), i.LocalStorage.set("tool2num", 1), i.LocalStorage.set("tool3num", 1), this.initTool(), this.initTitle(1, 1e3, 0), this.scheduleOnce(function () {
                    this.step1()
                }, 1))
            },
            step1: function () {
                console.log("step 1");
                var t = n.starSprite[34];
                t.scaleX = 10;
                var e = t.getBoundingBoxToWorld();
                t.scaleX = 1;
                var o = this.starRoot.convertToWorldSpaceAR(cc.v2(this.starRoot.width / 2, t.position.y));
                this.guideLayer.getComponent("GuideLayer").set({
                    canvas: this.starRoot,
                    pos: o,
                    rect: e,
                    string: "Click on two or more stars of the same color to eliminate",
                    callback: function () {
                        this.guideLayer.getComponent("GuideLayer").no(), this.starRoot.getComponent("MatrixCtrl").gameModel(t.position), this.scheduleOnce(function () {
                            this.step2()
                        }, 1)
                    }.bind(this)
                })
            },
            step2: function () {
                console.log("step 2");
                var t = this.tool_destroy.convertToWorldSpaceAR(cc.v2(0, 0));
                this.guideLayer.getComponent("GuideLayer").set({
                    canvas: this.tool_destroy,
                    pos: t,
                    rect: this.tool_destroy.getBoundingBoxToWorld(),
                    string: "Click Use Hammer",
                    callback: function () {
                        this.tool1(), this.step3()
                    }.bind(this)
                })
            },
            step3: function () {
                console.log("step 3");
                var t = n.starSprite[34],
                    e = t.getBoundingBoxToWorld(),
                    o = t.convertToWorldSpaceAR(cc.v2(0, 0));
                this.guideLayer.getComponent("GuideLayer").set({
                    canvas: this.starRoot,
                    pos: o,
                    rect: e,
                    string: "Hammer out the star",
                    callback: function () {
                        this.guideLayer.getComponent("GuideLayer").no(), this.starRoot.getComponent("MatrixCtrl").gameModel(t.position), this.scheduleOnce(function () {
                            this.step4()
                        }, 1)
                    }.bind(this)
                })
            },
            step4: function () {
                console.log("step 4");
                var t = this.tool_change.convertToWorldSpaceAR(cc.v2(0, 0));
                this.guideLayer.getComponent("GuideLayer").set({
                    canvas: this.tool_change,
                    pos: t,
                    rect: this.tool_change.getBoundingBoxToWorld(),
                    string: "Click Use Brush",
                    callback: function () {
                        this.tool2(), this.step5()
                    }.bind(this)
                })
            },
            step5: function () {
                console.log("step 5");
                var t = n.starSprite[34],
                    e = t.getBoundingBoxToWorld(),
                    o = t.convertToWorldSpaceAR(cc.v2(0, 0));
                this.guideLayer.getComponent("GuideLayer").set({
                    canvas: this.starRoot,
                    pos: o,
                    rect: e,
                    string: "Click on the star that you want to change color",
                    callback: function () {
                        this.starRoot.getComponent("MatrixCtrl").gameModel(t.position), this.step6()
                    }.bind(this)
                })
            },
            step6: function () {
                console.log("step 6");
                var t = this.starRoot.getComponent("MatrixCtrl").selectColorLayer.getComponent("SelectColorLayer").layout,
                    e = t.convertToWorldSpaceAR(cc.v2(0, 0)),
                    o = t.getBoundingBoxToWorld();
                o.width *= .8, this.guideLayer.getComponent("GuideLayer").set({
                    canvas: this.starRoot.getComponent("MatrixCtrl").selectColorLayer,
                    pos: e,
                    rect: o,
                    string: "Click the color you want to change",
                    touchTrue: !0,
                    callback: function () {
                        this.step7()
                    }.bind(this)
                })
            },
            step7: function () {
                console.log("step 7");
                var t = this.tool_reset.convertToWorldSpaceAR(cc.v2(0, 0));
                this.guideLayer.getComponent("GuideLayer").set({
                    canvas: this.tool_reset,
                    pos: t,
                    rect: this.tool_reset.getBoundingBoxToWorld(),
                    string: "Click Reset to refresh the positions and colors of all the stars",
                    callback: function () {
                        this.guideLayer.getComponent("GuideLayer").no(), this.tool3(), this.scheduleOnce(function () {
                            this.guideLayer.getComponent("GuideLayer").close(), i.LocalStorage.set("first", 0), console.log("\u65b0\u624b\u6559\u7a0b\u7ed3\u675f\uff0c\u6b63\u5f0f\u5f00\u59cb\u6e38\u620f"), n.ifContinue = !1, this.start()
                        }, 2)
                    }.bind(this)
                })
            },
            buyTool1: function () {
                var t = this;
                this.updateGold(10, function () {
                    this.toolTips.string = "Purchases cost 10 stars", this.tool1add.active = !1, i.LocalStorage.set("tool1num", ++this._tool1num), this.tool1num.string = this._tool1num
                }.bind(this)), setTimeout(function () {
                    t.toolTips.string = ""
                }, 1500)
            },
            buyTool2: function () {
                var t = this;
                this.updateGold(10, function () {
                    this.toolTips.string = "Purchases cost 10 stars", this.tool2add.active = !1, i.LocalStorage.set("tool2num", ++this._tool2num), this.tool2num.string = this._tool2num
                }.bind(this)), setTimeout(function () {
                    t.toolTips.string = ""
                }, 1500)
            },
            buyTool3: function () {
                var t = this;
                this.updateGold(10, function () {
                    this.toolTips.string = "Purchases cost 10 stars", this.tool3add.active = !1, i.LocalStorage.set("tool3num", ++this._tool3num), this.tool3num.string = this._tool3num
                }.bind(this)), setTimeout(function () {
                    t.toolTips.string = ""
                }, 1500)
            },
            tool1: function () {
                this._tool1num > 0 ? (this.updateTool(1, this.tool_destroy), i.LocalStorage.set("tool1num", --this._tool1num), this.tool1num.string = this._tool1num) : (console.log("\u8d2d\u4e70\u9053\u5177-\u9524\u5b50"), this.buyTool1()), cc.director.emit("clickSound")
            },
            tool2: function () {
                this._tool2num > 0 ? (this.updateTool(2, this.tool_change), i.LocalStorage.set("tool2num", --this._tool2num), this.tool2num.string = this._tool2num) : (console.log("\u8d2d\u4e70\u9053\u5177-\u5237\u5b50"), this.buyTool2()), cc.director.emit("clickSound")
            },
            tool3: function () {
                this._tool3num > 0 ? (this.updateTool(3, this.tool_reset), i.LocalStorage.set("tool3num", --this._tool3num), this.tool3num.string = this._tool3num, 0 == this._tool3num && (this.tool3add.active = !0)) : (console.log("\u8d2d\u4e70\u9053\u5177-\u91cd\u7f6e"), this.buyTool3()), cc.director.emit("clickSound")
            },
            updateTool: function (t, e) {
                if (this.tool_destroy.getComponent("cc.Button").interactable = !1, this.tool_change.getComponent("cc.Button").interactable = !1, this.tool_reset.getComponent("cc.Button").interactable = !1, 3 != t) {
                    var o = cc.sequence(cc.scaleTo(1, 1.1), cc.scaleTo(1, .9));
                    e.runAction(cc.repeatForever(o))
                }
                this.starRoot.getComponent("MatrixCtrl").setToolType({
                    key: t,
                    callback: function () {
                        console.log("\u9053\u5177\u4f7f\u7528\u5b8c\u6bd5"), e.stopAllActions(), e.scale = 1, this.initTool(), this.tool_destroy.getComponent("cc.Button").interactable = !0, this.tool_change.getComponent("cc.Button").interactable = !0, this.tool_reset.getComponent("cc.Button").interactable = !0
                    }.bind(this)
                })
            },
            updateGold: function (t, e) {
                var o = i.LocalStorage.get("gold");
                return o - t >= 0 ? (i.LocalStorage.set("gold", o - t), cc.director.emit("gold"), e(), !0) : (console.log("\u91d1\u5e01\u4e0d\u8db3"), i.Interface.hitBox("\u91d1\u5e01\u4e0d\u8db3"), !1)
            }
        }), cc._RF.pop()
    }, {
        G: "G",
        gameData: "gameData"
    }],
    GoIn: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "3df79mY8ztH9ZwLqutlRDu1", "GoIn"), cc.Class({
            extends: cc.Component,
            properties: {
                game: cc.Node,
                levelLabel: cc.Label,
                targetScore: cc.Label
            },
            playAnim: function (t) {
                this.levelLabel.string = "Level " + t.level, this.targetScore.string = "Target: " + t.targetScore, this.callback = t.callback, this.getComponent(cc.Animation).play()
            },
            getGame: function () {
                this.callback()
            }
        }), cc._RF.pop()
    }, {}],
    GoldAnimationLayer: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "4be15e8ZyxLbb7fegS85v3X", "GoldAnimationLayer"), cc.Class({
            extends: cc.Component,
            properties: {
                goldPrefab: cc.Prefab
            },
            onLoad: function () {
                this.goldList = [];
                for (var t = 0; t < 10; t++) {
                    var e = cc.instantiate(this.goldPrefab);
                    e.parent = this.node, e.active = !1, this.goldList.push(e)
                }
                this.node.active = !1
            },
            moveAnimation: function (t, e) {
                this.node.active = !0;
                var o = this,
                    n = 0,
                    i = cc.callFunc(function () {
                        o.goldList[n].getComponent("GoldAnim").showAnimation({
                            fromP: cc.v2(0, 0),
                            toP: cc.v2(150 * (Math.random() - .5), 2 * (Math.random() - .5) * 150 / 2),
                            duration: .2,
                            callback: function () {}.bind(this)
                        }), n++
                    }, this),
                    c = cc.sequence(i, cc.delayTime(.1)),
                    a = cc.repeat(c, 10),
                    s = 0,
                    r = cc.callFunc(function () {
                        o.goldList[s].getComponent("GoldAnim").moveAnimation({
                            toP: t,
                            duration: .2,
                            callback: function () {
                                e()
                            }.bind(this)
                        }), s++
                    }, this),
                    l = cc.sequence(r, cc.delayTime(.1)),
                    u = cc.repeat(l, 10),
                    d = cc.callFunc(function () {
                        this.node.active = !1
                    }, this);
                l = cc.sequence(a, cc.delayTime(.3), u, cc.delayTime(.2), d), this.node.runAction(l)
            }
        }), cc._RF.pop()
    }, {}],
    GoldAnim: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "5e715KBGHBGU6op/mhsug3l", "GoldAnim"), cc.Class({
            extends: cc.Component,
            properties: {},
            moveAnimation: function (t) {
                this.node.active = !0;
                var e = cc.moveTo(t.duration, t.toP),
                    o = cc.callFunc(function () {
                        this.node.active = !1, t.callback()
                    }, this);
                this.node.runAction(cc.sequence(e, o))
            },
            showAnimation: function (t) {
                this.node.active = !0, this.node.position = t.fromP;
                var e = cc.moveTo(t.duration, t.toP),
                    o = cc.callFunc(function () {
                        t.callback()
                    }, this);
                this.node.runAction(cc.sequence(e, o))
            }
        }), cc._RF.pop()
    }, {}],
    Gold: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "e7415fCm1hMhZBt+XxQJqxy", "Gold");
        var n = t("G");
        cc.Class({
            extends: cc.Component,
            properties: {
                goldLabel: cc.Label,
                goldAnimationLayer: cc.Node
            },
            onLoad: function () {
                var t = this;
                t.goldLabel.string = n.LocalStorage.get("gold"), cc.director.on("gold", function (e) {
                    t.goldLabel && (t.goldLabel.string = n.LocalStorage.get("gold"))
                })
            },
            moveAnimation: function () {
                this.goldAnimationLayer.active = !0;
                var t = this.goldAnimationLayer.convertToNodeSpaceAR(this.node.convertToWorldSpaceAR(cc.v2(0, 0)));
                this.goldAnimationLayer.getComponent("GoldAnimationLayer").moveAnimation(t, function () {
                    var t = n.LocalStorage.get("gold");
                    n.LocalStorage.set("gold", t + 1), cc.director.emit("gold")
                })
            },
            videoReward: function () {
                n.Interface.showRewardedAD(function () {
                    this.moveAnimation()
                }.bind(this))
            },
            shareReward: function () {
                console.log("global.serverTime", n.serverTime);
                var t = parseInt(n.serverTime);
                n.Interface.share({
                    utc: t,
                    type: 1
                }), n.t1 = Date.parse(new Date)
            },
            add: function () {
                this.videoReward()
            }
        }), cc._RF.pop()
    }, {
        G: "G"
    }],
    GuessYouLike: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "a7aceVLf3hIZLsGc+KfVpes", "GuessYouLike"), cc.Class({
            extends: cc.Component,
            properties: {
                iconImageArray: {
                    default: [],
                    type: cc.SpriteFrame
                },
                currentMiniGameList: [],
                nextIndex: 0,
                moreGameList: [],
                settimeout: null,
                childIndex: -1
            },
            start: function () {
                this.initData(), this.initYouLike()
            },
            initData: function () {
                this.miniGameList = ["\u5c0f\u6e38\u620fAPPID", "\u5c0f\u6e38\u620fAPPID", "\u5c0f\u6e38\u620fAPPID", "\u5c0f\u6e38\u620fAPPID", "\u5c0f\u6e38\u620fAPPID", "\u5c0f\u6e38\u620fAPPID", "\u5c0f\u6e38\u620fAPPID", "\u5c0f\u6e38\u620fAPPID", "\u5c0f\u6e38\u620fAPPID"];
                var t = cc.sys.localStorage.getItem("localMiniGameList_test15");
                if (t) {
                    var e = JSON.parse(t);
                    this.currentMiniGameList = e
                } else this.currentMiniGameList = [0, 1, 2, 3];
                var o = cc.sys.localStorage.getItem("localNextIndex_test15");
                this.nextIndex = o ? parseInt(o) : 4
            },
            initYouLike: function () {
                for (var t = this, e = 0; e < this.node.childrenCount; e++) {
                    var o = this.node.children[e];
                    o.getComponent(cc.Sprite).spriteFrame = this.iconImageArray[this.currentMiniGameList[e]], o.hasEventListener("touchstart") || o.on("touchstart", function () {
                        t.childIndex = this.getSiblingIndex(), t.settimeout && clearTimeout(t.settimeout), t.settimeout = setTimeout(t.setTimeoutFun.bind(t), 2e3), wx.navigateToMiniProgram && wx.navigateToMiniProgram({
                            appId: t.miniGameList[t.currentMiniGameList[t.childIndex]],
                            path: ""
                        })
                    }, o)
                }
            },
            setTimeoutFun: function () {
                this.currentIndex = this.nextIndex % this.miniGameList.length;
                for (var t = 0; t < this.currentMiniGameList.length; t++) this.currentMiniGameList.indexOf(this.currentIndex) >= 0 && (this.nextIndex++, this.currentIndex = this.nextIndex % this.miniGameList.length);
                this.currentMiniGameList[this.childIndex] = this.currentIndex, this.initYouLike(), cc.sys.localStorage.setItem("localMiniGameList_test15", JSON.stringify(this.currentMiniGameList)), cc.sys.localStorage.setItem("localNextIndex_test15", this.nextIndex.toString())
            }
        }), cc._RF.pop()
    }, {}],
    GuideLayer: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "c5e08wSGiFOjbvsUk49Z7sl", "GuideLayer"), cc.Class({
            extends: cc.Component,
            properties: {
                mask: cc.Node,
                title: cc.Label,
                image: cc.Node
            },
            onLoad: function () {
                var t = this;
                this.node.on(cc.Node.EventType.TOUCH_START, function (e) {
                    var o = e.getTouches()[0].getLocation();
                    t.rect && t.rect.contains(o) && (console.log("star2"), console.log(t.touchTrue), t.rect = null, t.touchTrue && t.canvas.emit(cc.Node.EventType.TOUCH_START, e), t.callback())
                }, this)
            },
            open: function () {
                this.node.active = !0
            },
            close: function () {
                this.node.active = !1
            },
            no: function () {
                this.mask.width = 0, this.mask.height = 0, this.image.active = !1, this.title.string = ""
            },
            set: function (t) {
                this.image.active = !0, this.title.string = t.string, this.callback = t.callback, this.canvas = t.canvas;
                var e = this.getPos(t.pos);
                this.mask.position = e, this.touchTrue = t.touchTrue, this.mask.width = t.rect.width, this.mask.height = t.rect.height, this.rect = t.rect, this.rect.xMin -= 20, this.rect.yMin -= 20, this.rect.xMax += 20, this.rect.yMax += 20, this.image.position = cc.v2(this.mask.position.x + this.image.width, this.mask.position.y - this.image.height)
            },
            getPos: function (t) {
                return this.node.convertToNodeSpaceAR(t)
            }
        }), cc._RF.pop()
    }, {}],
    G: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "a0f98X4tjhNy7TA6hahDcgq", "G"), e.exports = {
            score: 0,
            Interface: t("Interface"),
            LocalStorage: t("LocalStorage"),
            Server: t("Server"),
            config: !1,
            serverTime: -1,
            getTargetScore: function (t) {
                return t >= 1 && t <= 3 ? 1e3 + 2e3 * (t - 1) : t >= 4 && t <= 5 ? 5e3 + 2500 * (t - 3) : t >= 6 && t <= 10 ? 1e4 + 3e3 * (t - 5) : t >= 11 && t <= 20 ? 25e3 + 3500 * (t - 10) : t >= 21 && t <= 30 ? 6e4 + 4e3 * (t - 20) : t >= 31 && t <= 40 ? 1e5 + 4500 * (t - 30) : 145e3 + 5e3 * (t - 40)
            }
        }, cc._RF.pop()
    }, {
        Interface: "Interface",
        LocalStorage: "LocalStorage",
        Server: "Server"
    }],
    IScAds: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "5b44dUq22FGW5Y98NE9yYsS", "IScAds");
        var n = this && this.__extends || function () {
                var t = function (e, o) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function (t, e) {
                            t.__proto__ = e
                        } || function (t, e) {
                            for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                        })(e, o)
                };
                return function (e, o) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, o), e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
                }
            }(),
            i = this && this.__decorate || function (t, e, o, n) {
                var i, c = arguments.length,
                    a = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
                else
                    for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (c < 3 ? i(a) : c > 3 ? i(e, o, a) : i(e, o)) || a);
                return c > 3 && a && Object.defineProperty(e, o, a), a
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var c = cc._decorator.ccclass,
            a = function (t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return n(e, t), e.prototype.onLoad = function () {
                    this.onComponentLoad()
                }, e = i([c], e)
            }(cc.Component);
        o.default = a, cc._RF.pop()
    }, {}],
    Interface: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "36082CEeYxPCKAwV0gDOXCT", "Interface");
        var n = t("WeChat"),
            i = {
                k: 0,
                length: 0,
                titleArray: [],
                imageUrlArray: []
            };
        e.exports = {
            gameName: "Star",
            gameAppid: "",
            secret: "",
            init: function () {
                console.log("\u521d\u59cb\u5316\u63a5\u53e3"), n.init({
                    gameName: this.gameName,
                    gameAppid: this.gameAppid,
                    secret: this.secret
                })
            },
            hitBox: function (t) {
                n.hitBox(t)
            },
            login: function (t) {
                n.login(t)
            },
            initShareProperties: function (t, e) {
                i.k = 0, i.length = t.length, i.titleArray = t, i.imageUrlArray = e
            },
            getSharePropertie: function () {
                var t = {
                    title: i.titleArray[i.k],
                    imageUrl: i.imageUrlArray[i.k]
                };
                return i.k++, i.k = i.k % i.length, t
            },
            openShare: function () {
                n.openShare(i.titleArray, i.imageUrlArray)
            },
            share: function (t) {
                var e = this.getSharePropertie();
                t = Object.assign({
                    utc: -1,
                    type: -1
                }, t), console.log("2. share res:", t), n.share({
                    title: e.title,
                    imageUrl: e.imageUrl,
                    utc: t.utc || -1,
                    type: t.type || -1
                })
            },
            onShow: function (t) {
                n.onShow(t)
            },
            shareOnClose: function () {},
            preloadBannerAD: function () {
                n.preloadBannerAD("adunit-86fa32d8dbf178ee")
            },
            updateBannerAD: function () {
                n.updateBannerAD("adunit-86fa32d8dbf178ee")
            },
            setBannerADminWidth: function () {
                n.setBannerADminWidth()
            },
            setBannerADSameMaxHeight: function () {
                n.setBannerADSameMaxHeight()
            },
            setBannerADNormalWidth: function () {
                n.setBannerADNormalWidth()
            },
            showBannerAD: function () {
                console.log("\u663e\u793a banner"), this.isShowBannerAD = !0, n.showBannerAD()
            },
            hideBannerAD: function () {
                console.log("\u9690\u85cf banner"), this.isShowBannerAD = !1, n.hideBannerAD()
            },
            preloadRewardedAD: function () {
                n.preloadRewardedAD("adunit-b6591fbd280bd5d9")
            },
            showRewardedAD: function (t) {
                n.showRewardedAD(t)
            },
            showInterAD: function () {
                n.showInterAD()
            },
            closeRewardedAD: function () {
                n.closeRewardedAD()
            },
            isOkVideo: function () {
                return n.isOkVideo()
            },
            isSupportOpenData: function () {
                return n.isSupportOpenData()
            },
            closeRank: function () {
                n.closeRank()
            },
            friendRank: function () {
                n.friendRank()
            },
            submitScore: function (t) {
                n.submitScore(t)
            },
            gameOverRank: function () {
                n.gameOverRank()
            },
            groupFriendRank: function () {
                var t = this.getSharePropertie();
                n.groupFriendRank(t.title, t.imageUrl)
            },
            initMoreGame: function () {
                n.initMoreGame()
            },
            openMiniGame: function (t) {
                n.openMiniGame(t)
            },
            openMiniProgram: function () {
                n.openMiniProgram("\u5c0f\u6e38\u620fAPPID")
            },
            getPlatform: function (t) {
                n.getPlatform(t)
            }
        }, cc._RF.pop()
    }, {
        WeChat: "WeChat"
    }],
    InviteFriends: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "e1fb2kr1SdFwLfjuTL50w5V", "InviteFriends"), cc.Class({
            extends: cc.Component,
            properties: {},
            start: function () {}
        }), cc._RF.pop()
    }, {}],
    Load: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "86bc2P1Z2ZN56c8Nx/14p94", "Load");
        var n = t("G");
        cc.Class({
            extends: cc.Component,
            properties: {
                shareTitleArray: {
                    default: [],
                    type: cc.String
                },
                shareImageArray: {
                    default: [],
                    type: cc.SpriteFrame
                }
            },
            onLoad: function () {
                var t = this.shareImageArray.map(function (t) {
                    return t._textureFilename
                });
                n.Interface.init(), n.Interface.initShareProperties(this.shareTitleArray, t), n.Interface.openShare()
            },
            start: function () {
                n.Interface.login(function (t) {
                    console.log("\u767b\u5f55\u6210\u529f"), console.log("openid:", t), n.Server.login({
                        openid: t,
                        success: function () {
                            console.log("\u767b\u5f55\u670d\u52a1\u5668"), n.Server.isReleaseorAudit({
                                success: function (t) {
                                    console.log(t), n.config = t.audit_Ver
                                }
                            }), n.Server.getServerTime({
                                success: function (t) {
                                    console.log("utc: " + t), n.serverTime = parseInt(t), console.log(n.serverTime)
                                }
                            })
                        },
                        close: function () {
                            console.log("close")
                        }
                    })
                })
            }
        }), cc._RF.pop()
    }, {
        G: "G"
    }],
    LocalStorage: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "7a3065p9kVJxbgslhRUglWp", "LocalStorage"), e.exports = {
            initItem: function (t) {
                var e = cc.sys.localStorage.getItem(t.str);
                null != e && 0 != e.length || cc.sys.localStorage.setItem(t.str, t.number)
            },
            init: function () {
                console.log("\u521d\u59cb\u5316\u672c\u5730\u6570\u636e"), this.initItem({
                    str: "first",
                    number: 1
                }), this.initItem({
                    str: "data",
                    number: 0
                }), this.initItem({
                    str: "dataTime",
                    number: 0
                }), this.initItem({
                    str: "gamecount",
                    number: 0
                }), this.initItem({
                    str: "score",
                    number: 0
                }), this.initItem({
                    str: "gold",
                    number: 50
                }), this.initItem({
                    str: "maxscore",
                    number: 0
                }), this.initItem({
                    str: "level",
                    number: 1
                }), this.initItem({
                    str: "groupData",
                    number: "{}"
                }), this.initItem({
                    str: "tool1num",
                    number: "0"
                }), this.initItem({
                    str: "tool2num",
                    number: "0"
                }), this.initItem({
                    str: "tool3num",
                    number: "0"
                }), this.initItem({
                    str: "reviveTime",
                    number: "2"
                })
            },
            get: function (t) {
                return parseInt(cc.sys.localStorage.getItem(t))
            },
            set: function (t, e) {
                cc.sys.localStorage.setItem(t, e)
            },
            setData: function (t) {
                cc.sys.localStorage.setItem("data", t)
            },
            getData: function () {
                return cc.sys.localStorage.getItem("data")
            },
            setGroupData: function (t) {
                cc.sys.localStorage.setItem("groupData", t)
            },
            getGroupData: function () {
                return cc.sys.localStorage.getItem("groupData")
            },
            getBoolean: function (t) {
                return cc.sys.localStorage.getItem(t)
            }
        }, cc._RF.pop()
    }, {}],
    MatrixCtrl: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "267e3ATcAZL37Sc3JPGxxE+", "MatrixCtrl");
        var n = t("Utils"),
            i = t("psconfig"),
            c = t("gameData");
        cc.Class({
            extends: cc.Component,
            properties: {
                game: cc.Node,
                starRoot: cc.Node,
                starPrefab: cc.Prefab,
                starParticle: cc.Prefab,
                scorePrefab: cc.Prefab,
                progressBar: cc.ProgressBar,
                currScoreLabel: cc.Label,
                targetScore: cc.Label,
                selectColorLayer: cc.Node,
                waitingLayer: cc.Node,
                _currScore: 0,
                _targetScore: 0,
                _starPool: null,
                scoreList: [],
                particleList: [],
                _toolType: 0,
                _totalCounts: 0,
                _currCount: 0,
                _bombList: [],
                _tamping: !1
            },
            init: function () {
                console.log("\u5730\u56fe\u521d\u59cb\u5316\u914d\u7f6e"), i.cellSize = this.starRoot.width / i.matrixRow - 2, this._starPool = new cc.NodePool;
                for (var t = 0; t < 50; t++) {
                    var e = cc.instantiate(this.starPrefab);
                    this._starPool.put(e)
                }
                this._toolType = 0, this.touch = !0, this.click()
            },
            firstGame: function () {
                this._targetScore = 1e3, i.cellSize = this.starRoot.width / i.matrixRow - 2, c.starMatrix = new Array(i.matrixRow);
                for (var t = 0; t < i.matrixRow; t++) {
                    c.starMatrix[t] = new Array(i.matrixCol);
                    for (var e = 0; e < i.matrixCol; e++) {
                        c.starMatrix[t][e] = t % 5;
                        var o = this.createStar(t % 5, t, e);
                        o.active = !0;
                        var a = n.indexValue(t, e);
                        c.starSprite[a] = o
                    }
                }
                for (t = 0; t < i.matrixCol * i.matrixRow; t++) {
                    var s = cc.instantiate(this.scorePrefab);
                    s.parent = this.node, s.active = !1, this.scoreList.push(s);
                    var r = cc.instantiate(this.starParticle);
                    r.parent = this.node, this.particleList.push(r)
                }
            },
            onDestroy: function () {
                this._starPool.clear(), this.scoreList = [], this.particleList = []
            },
            deleteSprites: function (t) {
                this._tamping || n.indexOfV2(this._bombList, t[0]) || (this._totalCounts += t.length, this._bombList = this._bombList.concat(t), c.cleanStarData(t), t.sort(function (t, e) {
                    return t.y - e.y
                }), this.removeSelectedStars(t, t.length))
            },
            removeSelectedStars: function (t, e) {
                var o = cc.callFunc(function () {
                        if (this.waitingLayer.active = !0, t.length > 0) {
                            var o = t.shift(),
                                i = n.indexValue(o.x, o.y),
                                a = c.starSprite[i];
                            this.bombStar(a, i, e), c.starSprite[i] = null, ++this._currCount
                        } else this.updateMatrix()
                    }, this),
                    i = cc.sequence(o, cc.delayTime(.11)),
                    a = cc.repeat(i, e + 1);
                this.node.runAction(a)
            },
            bombStar: function (t, e, o) {
                if (t) {
                    this._starPool.put(t);
                    var i = t.getComponent("Star")._starType;
                    this.particleList[e].getComponent("StarParticle").play({
                        position: t.getPosition(),
                        type: i
                    }), cc.director.emit("popSound");
                    var c = this.node.convertToNodeSpaceAR(this.currScoreLabel.node.convertToWorldSpaceAR(cc.v2(0, 0)));
                    this.scoreList[e].getComponent("Score").moveAnimation({
                        fromP: t.getPosition(),
                        toP: c,
                        duration: .3,
                        score: 5 * o,
                        callback: function () {
                            this._currScore += 5 * o, this.currScoreLabel.string = this._currScore, this.progressBar.progress = n.getProgress(this._currScore, this._targetScore)
                        }.bind(this)
                    })
                }
            },
            updateMatrix: function () {
                if (this._totalCounts == this._currCount) {
                    this._tamping = !0;
                    var t = n.needCheckCols(this._bombList);
                    this.tampRows(t), this.tampCols(t), this._tamping = !1, c.remainingStarCount -= this._totalCounts, this._totalCounts = 0, this._currCount = 0, this._bombList.splice(0, this._bombList.length)
                }
                this.scheduleOnce(function () {
                    n.gameOver(c.starMatrix) && this.over(), this.waitingLayer.active = !1
                }, .4)
            },
            tampRows: function (t) {
                t.forEach(function (t, e, o) {
                    for (var a = 0, s = 0; s < i.matrixRow; s++)
                        if (c.starMatrix[s][t] >= 0) {
                            if (a != s) {
                                e = n.indexValue(s, t);
                                var r = n.indexValue(a, t),
                                    l = c.starSprite[e];
                                l.getComponent("Star").updateGrid(a, t), c.starSprite[r] = l, c.starSprite[e] = null, c.starMatrix[a][t] = l.getComponent("Star")._starType, c.starMatrix[s][t] = -1;
                                var u = n.grid2Pos(a, t);
                                l.runAction(cc.moveTo(.13, u))
                            }
                            a++
                        }
                }, this)
            },
            tampCols: function (t) {
                t.forEach(function (t, e, o) {
                    if (-1 == c.starMatrix[0][t]) {
                        for (var a = !0, s = 1; s < i.matrixRow; s++)
                            if (c.starMatrix[s][t] >= 0) {
                                a = !1;
                                break
                            }
                        if (a && t < i.matrixCol - 1)
                            for (var r = t + 1; r < i.matrixCol; r++)
                                for (var l = 0; l < i.matrixRow && c.starMatrix[l][r] >= 0; l++) {
                                    e = n.indexValue(l, r);
                                    var u = c.starSprite[e];
                                    u.getComponent("Star").updateGrid(l, r - 1), c.starSprite[e - 1] = u, c.starSprite[e] = null, c.starMatrix[l][r - 1] = u.getComponent("Star")._starType, c.starMatrix[l][r] = -1, u.runAction(cc.moveBy(.17, -(i.cellSize + 2), 0))
                                }
                    }
                }, this)
            },
            deleteRemainAnimation: function () {
                console.log("\u6d88\u9664\u5269\u4f59\u661f\u661f\u52a8\u753b")
            },
            convertGridPositionToWorldSpaceAR: function (t) {
                var e = n.grid2Pos(t.x, t.y);
                return this.node.convertToWorldSpaceAR(e)
            },
            clearStarSprite: function () {
                if (c.starSprite) {
                    c.starMatrix = null, this.scoreList = [], this.particleList = [];
                    for (var t = c.starSprite.length, e = 0; e < t; e++) c.starSprite[e] && (c.starSprite[e].active = !1);
                    c.starSprite.splice(0, t)
                }
            },
            countScore: function (t) {
                return t * t * 5
            },
            createStar: function (t, e, o) {
                var n = null;
                return n = this._starPool.size() > 0 ? this._starPool.get() : cc.instantiate(this.starPrefab), this.node.addChild(n), n.getComponent("Star").initW(i.cellSize + 2), n.getComponent("Star").initStar(t, e, o), n
            },
            initMatrix: function () {
                for (var t = 0; t < 10; t++)
                    for (var e = c.starMatrix[t], o = 0; o < 10; o++) {
                        var a = e[o],
                            s = n.indexValue(t, o);
                        if (a >= 0) {
                            var r = this.createStar(a, t, o);
                            c.starSprite[s] = r
                        } else c.starSprite[s] = null
                    }
                for (var l = 0; l < i.matrixCol * i.matrixRow; l++) {
                    var u = cc.instantiate(this.scorePrefab);
                    u.parent = this.node, u.active = !1, this.scoreList.push(u);
                    var d = cc.instantiate(this.starParticle);
                    d.parent = this.node, this.particleList.push(d)
                }
            },
            gameStart: function (t, e) {
                if (this._currScore = t, this._targetScore = e, 0 != c.starSprite.length) this.initMatrix(), this.starShowAnimation();
                else {
                    var o = i.matrixRow * i.matrixCol;
                    c.remainingStarCount = o, c.starMatrix = n.initMatrixDataPortraitRandom(), this.initMatrix(), n.gameOver(c.starMatrix) ? this.initMatrix() : this.starShowAnimation()
                }
            },
            starShowAnimation: function () {
                var t = cc.callFunc(function () {
                        this.waitingLayer.active = !0;
                        for (var t = 0; t < 10; t++)
                            for (var e = 0; e < 10; e++) {
                                var o = n.indexValue(t, e);
                                c.starSprite[o] && (c.starSprite[o].active = !0, c.starSprite[o].getComponent("Star").goIntoDrop({
                                    pos: cc.v2(37 + 74 * e, 37 + 74 * t + Math.floor(800 * Math.random()) % 800),
                                    delay: .05 + Math.floor(10 * Math.random()) % 5 / 100
                                }))
                            }
                    }, this),
                    e = cc.callFunc(function () {
                        this.waitingLayer.active = !1, this.game.getComponent("Game").first()
                    }, this),
                    o = cc.sequence(t, cc.delayTime(.5), e);
                this.node.runAction(o)
            },
            over: function () {
                var t = cc.callFunc(function () {
                        console.log("over"), this.clearStarSprite(), this.particleList = [], console.log("\u5206\u6570\uff1a" + this._currScore), console.log("\u5956\u52b1\u5206\u6570:" + c.getRewardScore(c.remainingStarCount)), this._currScore += c.getRewardScore(c.remainingStarCount), this.currScoreLabel.string = this._currScore, this.progressBar.progress = n.getProgress(this._currScore, this._targetScore), this.waitingLayer.active = !1, c.currScore = this._currScore, this._currScore >= this._targetScore ? (this.game.getComponent("Game").next(this._currScore), cc.director.emit("winSound")) : (this.game.getComponent("Game").over(this._currScore), cc.director.emit("failSound"))
                    }, this),
                    e = cc.sequence(cc.delayTime(1), t);
                return this.node.runAction(e), e
            },
            blastOne: function (t) {
                console.log("\u4f7f\u7528\u9524\u5b50"), this.deleteSprites([t]), cc.director.emit("tool1Sound"), this.removeTool()
            },
            changeColor: function (t, e, o) {
                console.log("\u9009\u4e2d\u5237\u5b50\u4f7f\u7528\u5bf9\u8c61");
                var n = this;
                this.cancelSelected(), o.getComponent("Star").selected.node.active = !0, this.selectColorLayer.active = !0, this.selectColorLayer.getComponent("SelectColorLayer").init({
                    pos: cc.v2(0, e.y + this.starRoot.position.y + 120),
                    item: o,
                    callback: function (e) {
                        console.log("\u4f7f\u7528\u5237\u5b50"), c.starMatrix[t.x][t.y] = e, o.getComponent("Star").changeStarType(e), o.getComponent("Star").selected.node.active = !1, n.selectColorLayer.active = !1, cc.director.emit("tool2Sound"), n.removeTool()
                    }
                })
            },
            retryColor: function () {
                console.log("\u91cd\u7f6e"), this.waitingLayer.active = !0, cc.director.emit("tool3Sound");
                for (var t = 0; t < i.matrixRow; t++)
                    for (var e = 0; e < i.matrixCol; e++)
                        if (c.starMatrix[t][e] >= 0) {
                            var o = Math.floor(10 * Math.random() % 5);
                            c.starMatrix[t][e] = o
                        }
                if (n.gameOver(c.starMatrix)) this.retryColor();
                else {
                    for (t = 0; t < i.matrixRow; t++)
                        for (e = 0; e < i.matrixCol; e++)
                            if (c.starMatrix[t][e] >= 0) {
                                var a = n.indexValue(t, e);
                                c.starSprite[a].getComponent("Star").fromSmallToBigAction({
                                    type: c.starMatrix[t][e],
                                    delay: .05 + Math.floor(10 * Math.random()) % 5 / 100
                                })
                            }
                    this.scheduleOnce(function () {
                        this.waitingLayer.active = !1
                    }, .7)
                }
            },
            setToolType: function (t) {
                3 == t.key ? (this.retryColor(), t.callback()) : (this._toolType = t.key, this.toolCallback = t.callback)
            },
            removeTool: function () {
                console.log("remove tool"), this.toolCallback(), this._toolType = 0
            },
            cancelSelected: function () {
                c.starSprite && c.starSprite.forEach(function (t) {
                    t && (t.getComponent("Star").selected.node.active = !1)
                })
            },
            click: function () {
                var t = this;
                this.node.on(cc.Node.EventType.TOUCH_START, function (e) {
                    var o = e.getTouches();
                    if (t.touch) {
                        t.touch = !1;
                        var n = o[0].getLocation(),
                            i = t.node.convertToNodeSpaceAR(n);
                        t.gameModel(i)
                    }
                }, this.node), this.node.on(cc.Node.EventType.TOUCH_END, function (e) {
                    t.touch = !0
                }, this.node), this.node.on(cc.Node.EventType.TOUCH_CANCEL, function (e) {
                    t.touch = !0
                }, this.node)
            },
            gameModel: function (t) {
                var e = n.pos2Grid(t.x, t.y);
                if (e.x < i.matrixRow && e.y < i.matrixCol) {
                    var o = n.indexValue(e.x, e.y),
                        a = c.starSprite[o];
                    if (a) switch (this._toolType) {
                        case 0:
                            var s = n.removeStarsList(c.starSprite, c.starMatrix, e);
                            s.length >= 2 && this.deleteSprites(s);
                            break;
                        case 1:
                            this.blastOne(e);
                            break;
                        case 2:
                            this.changeColor(e, t, a)
                    }
                }
            }
        }), cc._RF.pop()
    }, {
        Utils: "Utils",
        gameData: "gameData",
        psconfig: "psconfig"
    }],
    MtilsJS: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "80aefcfMdpBHLVp31xTlZ5n", "MtilsJS"), e.exports = {
            uuid: function (t, e) {
                var o, n, i, c;
                if (o = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), c = [], n = void 0, e = e || o.length, t)
                    for (n = 0; n < t;) c[n] = o[0 | Math.random() * e], n++;
                else
                    for (i = void 0, c[8] = c[13] = c[18] = c[23] = "-", c[14] = "4", n = 0; n < 36;) c[n] || (i = 0 | 16 * Math.random(), c[n] = o[19 === n ? 3 & i | 8 : i]), n++;
                return c.join("")
            },
            random: function (t) {
                var e, o = !0;
                if (t) {
                    for (; o;)
                        if ((e = Math.random()) > .1) return o = !1, Math.floor(e * Math.pow(10, t))
                } else
                    for (; o;)
                        if ((e = Math.random()) > .1) return o = !1, Math.floor(e * Math.pow(10, 5))
            },
            hex_sha256: function (t) {
                var e, o, n, i = function (t, e) {
                        return e >>> t | e << 32 - t
                    },
                    c = function (t, e, o) {
                        return t & e ^ ~t & o
                    },
                    a = function (t, e, o) {
                        return t & e ^ t & o ^ e & o
                    },
                    s = function (t) {
                        return i(2, t) ^ i(13, t) ^ i(22, t)
                    },
                    r = function (t) {
                        return i(6, t) ^ i(11, t) ^ i(25, t)
                    },
                    l = function (t, e) {
                        return t[15 & e] += function (t) {
                            return i(17, t) ^ i(19, t) ^ t >>> 10
                        }(t[e + 14 & 15]) + t[e + 9 & 15] + function (t) {
                            return i(7, t) ^ i(18, t) ^ t >>> 3
                        }(t[e + 1 & 15])
                    },
                    u = new Array(1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298),
                    d = function (t, e) {
                        var o = (65535 & t) + (65535 & e);
                        return (t >> 16) + (e >> 16) + (o >> 16) << 16 | 65535 & o
                    },
                    h = function () {
                        var t, o, i, h, g, p, f, m, S, v, y = new Array(16);
                        t = e[0], o = e[1], i = e[2], h = e[3], g = e[4], p = e[5], f = e[6], m = e[7];
                        for (var _ = 0; _ < 16; _++) y[_] = n[3 + (_ << 2)] | n[2 + (_ << 2)] << 8 | n[1 + (_ << 2)] << 16 | n[_ << 2] << 24;
                        for (var C = 0; C < 64; C++) S = m + r(g) + c(g, p, f) + u[C], S += C < 16 ? y[C] : l(y, C), v = s(t) + a(t, o, i), m = f, f = p, p = g, g = d(h, S), h = i, i = o, o = t, t = d(S, v);
                        e[0] += t, e[1] += o, e[2] += i, e[3] += h, e[4] += g, e[5] += p, e[6] += f, e[7] += m
                    };
                return e = new Array(8), o = new Array(2), n = new Array(64), o[0] = o[1] = 0, e[0] = 1779033703, e[1] = 3144134277, e[2] = 1013904242, e[3] = 2773480762, e[4] = 1359893119, e[5] = 2600822924, e[6] = 528734635, e[7] = 1541459225,
                    function (t, e) {
                        var i, c, a = 0;
                        c = o[0] >> 3 & 63;
                        var s = 63 & e;
                        for ((o[0] += e << 3) < e << 3 && o[1]++, o[1] += e >> 29, i = 0; i + 63 < e; i += 64) {
                            for (var r = c; r < 64; r++) n[r] = t.charCodeAt(a++);
                            h(), c = 0
                        }
                        for (r = 0; r < s; r++) n[r] = t.charCodeAt(a++)
                    }(t, t.length),
                    function () {
                        var t = o[0] >> 3 & 63;
                        if (n[t++] = 128, t <= 56)
                            for (var e = t; e < 56; e++) n[e] = 0;
                        else {
                            for (e = t; e < 64; e++) n[e] = 0;
                            for (h(), e = 0; e < 56; e++) n[e] = 0
                        }
                        n[56] = o[1] >>> 24 & 255, n[57] = o[1] >>> 16 & 255, n[58] = o[1] >>> 8 & 255, n[59] = 255 & o[1], n[60] = o[0] >>> 24 & 255, n[61] = o[0] >>> 16 & 255, n[62] = o[0] >>> 8 & 255, n[63] = 255 & o[0], h()
                    }(),
                    function () {
                        for (var t = new String, o = 0; o < 8; o++)
                            for (var n = 28; n >= 0; n -= 4) t += "0123456789abcdef".charAt(e[o] >>> n & 15);
                        return t
                    }()
            },
            base64_decode: function (t) {
                var e, o, n, i, c, a, s = "",
                    r = 0,
                    l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                for (t = t.replace(/[^A-Za-z0-9\+\/\=]/g, ""); r < t.length;) e = l.indexOf(t.charAt(r++)) << 2 | (i = l.indexOf(t.charAt(r++))) >> 4, o = (15 & i) << 4 | (c = l.indexOf(t.charAt(r++))) >> 2, n = (3 & c) << 6 | (a = l.indexOf(t.charAt(r++))), s += String.fromCharCode(e), 64 != c && (s += String.fromCharCode(o)), 64 != a && (s += String.fromCharCode(n));
                return function (t) {
                    var e, o, n, i = "",
                        c = 0;
                    for (e = o = n = 0; c < t.length;)(e = t.charCodeAt(c)) < 128 ? (i += String.fromCharCode(e), c++) : e > 191 && e < 224 ? (o = t.charCodeAt(c + 1), i += String.fromCharCode((31 & e) << 6 | 63 & o), c += 2) : (o = t.charCodeAt(c + 1), n = t.charCodeAt(c + 2), i += String.fromCharCode((15 & e) << 12 | (63 & o) << 6 | 63 & n), c += 3);
                    return i
                }(s)
            },
            base64_encode: function (t) {
                var e, o, n, i, c, a, s, r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                    l = "",
                    u = 0;
                for (t = function (t) {
                        t = t.replace(/\r\n/g, "\n");
                        for (var e = "", o = 0; o < t.length; o++) {
                            var n = t.charCodeAt(o);
                            n < 128 ? e += String.fromCharCode(n) : n > 127 && n < 2048 ? (e += String.fromCharCode(n >> 6 | 192), e += String.fromCharCode(63 & n | 128)) : (e += String.fromCharCode(n >> 12 | 224), e += String.fromCharCode(n >> 6 & 63 | 128), e += String.fromCharCode(63 & n | 128))
                        }
                        return e
                    }(t); u < t.length;) i = (e = t.charCodeAt(u++)) >> 2, c = (3 & e) << 4 | (o = t.charCodeAt(u++)) >> 4, a = (15 & o) << 2 | (n = t.charCodeAt(u++)) >> 6, s = 63 & n, isNaN(o) ? a = s = 64 : isNaN(n) && (s = 64), l = l + r.charAt(i) + r.charAt(c) + r.charAt(a) + r.charAt(s);
                return l
            },
            hex_sha1: function (t) {
                var e = function (t, e) {
                        return t << e | t >>> 32 - e
                    },
                    o = function (t, e) {
                        var o = (65535 & t) + (65535 & e);
                        return (t >> 16) + (e >> 16) + (o >> 16) << 16 | 65535 & o
                    },
                    n = function (t, e, o, n) {
                        return t < 20 ? e & o | ~e & n : t < 40 ? e ^ o ^ n : t < 60 ? e & o | e & n | o & n : e ^ o ^ n
                    },
                    i = function (t) {
                        return t < 20 ? 1518500249 : t < 40 ? 1859775393 : t < 60 ? -1894007588 : -899497514
                    };
                return function (t) {
                    for (var e = "0123456789abcdef", o = "", n = 0; n < 4 * t.length; n++) o += e.charAt(t[n >> 2] >> 8 * (3 - n % 4) + 4 & 15) + e.charAt(t[n >> 2] >> 8 * (3 - n % 4) & 15);
                    return o
                }(function (t, c) {
                    t[c >> 5] |= 128 << 24 - c % 32, t[15 + (c + 64 >> 9 << 4)] = c;
                    for (var a = Array(80), s = 1732584193, r = -271733879, l = -1732584194, u = 271733878, d = -1009589776, h = 0; h < t.length; h += 16) {
                        for (var g = s, p = r, f = l, m = u, S = d, v = 0; v < 80; v++) {
                            a[v] = v < 16 ? t[h + v] : e(a[v - 3] ^ a[v - 8] ^ a[v - 14] ^ a[v - 16], 1);
                            var y = o(o(e(s, 5), n(v, r, l, u)), o(o(d, a[v]), i(v)));
                            d = u, u = l, l = e(r, 30), r = s, s = y
                        }
                        s = o(s, g), r = o(r, p), l = o(l, f), u = o(u, m), d = o(d, S)
                    }
                    return Array(s, r, l, u, d)
                }(function (t) {
                    for (var e = Array(), o = 0; o < 8 * t.length; o += 8) e[o >> 5] |= (255 & t.charCodeAt(o / 8)) << 24 - o % 32;
                    return e
                }(t), 8 * t.length))
            },
            hex_md5: function (t) {
                var e = function (t, e, o, n, i, c) {
                        return a(s(a(a(e, t), a(n, c)), i), o)
                    },
                    o = function (t, o, n, i, c, a, s) {
                        return e(o & n | ~o & i, t, o, c, a, s)
                    },
                    n = function (t, o, n, i, c, a, s) {
                        return e(o & i | n & ~i, t, o, c, a, s)
                    },
                    i = function (t, o, n, i, c, a, s) {
                        return e(o ^ n ^ i, t, o, c, a, s)
                    },
                    c = function (t, o, n, i, c, a, s) {
                        return e(n ^ (o | ~i), t, o, c, a, s)
                    },
                    a = (e = function (t, e, o, n, i, c) {
                        return a(s(a(a(e, t), a(n, c)), i), o)
                    }, function (t, e) {
                        var o = (65535 & t) + (65535 & e);
                        return (t >> 16) + (e >> 16) + (o >> 16) << 16 | 65535 & o
                    }),
                    s = function (t, e) {
                        return t << e | t >>> 32 - e
                    };
                return function (t) {
                    for (var e = "0123456789abcdef", o = "", n = 0; n < 4 * t.length; n++) o += e.charAt(t[n >> 2] >> n % 4 * 8 + 4 & 15) + e.charAt(t[n >> 2] >> n % 4 * 8 & 15);
                    return o
                }(function (t, e) {
                    t[e >> 5] |= 128 << e % 32, t[14 + (e + 64 >>> 9 << 4)] = e;
                    for (var s = 1732584193, r = -271733879, l = -1732584194, u = 271733878, d = 0; d < t.length; d += 16) {
                        var h = s,
                            g = r,
                            p = l,
                            f = u;
                        s = o(s, r, l, u, t[d + 0], 7, -680876936), u = o(u, s, r, l, t[d + 1], 12, -389564586), l = o(l, u, s, r, t[d + 2], 17, 606105819), r = o(r, l, u, s, t[d + 3], 22, -1044525330), s = o(s, r, l, u, t[d + 4], 7, -176418897), u = o(u, s, r, l, t[d + 5], 12, 1200080426), l = o(l, u, s, r, t[d + 6], 17, -1473231341), r = o(r, l, u, s, t[d + 7], 22, -45705983), s = o(s, r, l, u, t[d + 8], 7, 1770035416), u = o(u, s, r, l, t[d + 9], 12, -1958414417), l = o(l, u, s, r, t[d + 10], 17, -42063), r = o(r, l, u, s, t[d + 11], 22, -1990404162), s = o(s, r, l, u, t[d + 12], 7, 1804603682), u = o(u, s, r, l, t[d + 13], 12, -40341101), l = o(l, u, s, r, t[d + 14], 17, -1502002290), r = o(r, l, u, s, t[d + 15], 22, 1236535329), s = n(s, r, l, u, t[d + 1], 5, -165796510), u = n(u, s, r, l, t[d + 6], 9, -1069501632), l = n(l, u, s, r, t[d + 11], 14, 643717713), r = n(r, l, u, s, t[d + 0], 20, -373897302), s = n(s, r, l, u, t[d + 5], 5, -701558691), u = n(u, s, r, l, t[d + 10], 9, 38016083), l = n(l, u, s, r, t[d + 15], 14, -660478335), r = n(r, l, u, s, t[d + 4], 20, -405537848), s = n(s, r, l, u, t[d + 9], 5, 568446438), u = n(u, s, r, l, t[d + 14], 9, -1019803690), l = n(l, u, s, r, t[d + 3], 14, -187363961), r = n(r, l, u, s, t[d + 8], 20, 1163531501), s = n(s, r, l, u, t[d + 13], 5, -1444681467), u = n(u, s, r, l, t[d + 2], 9, -51403784), l = n(l, u, s, r, t[d + 7], 14, 1735328473), r = n(r, l, u, s, t[d + 12], 20, -1926607734), s = i(s, r, l, u, t[d + 5], 4, -378558), u = i(u, s, r, l, t[d + 8], 11, -2022574463), l = i(l, u, s, r, t[d + 11], 16, 1839030562), r = i(r, l, u, s, t[d + 14], 23, -35309556), s = i(s, r, l, u, t[d + 1], 4, -1530992060), u = i(u, s, r, l, t[d + 4], 11, 1272893353), l = i(l, u, s, r, t[d + 7], 16, -155497632), r = i(r, l, u, s, t[d + 10], 23, -1094730640), s = i(s, r, l, u, t[d + 13], 4, 681279174), u = i(u, s, r, l, t[d + 0], 11, -358537222), l = i(l, u, s, r, t[d + 3], 16, -722521979), r = i(r, l, u, s, t[d + 6], 23, 76029189), s = i(s, r, l, u, t[d + 9], 4, -640364487), u = i(u, s, r, l, t[d + 12], 11, -421815835), l = i(l, u, s, r, t[d + 15], 16, 530742520), r = i(r, l, u, s, t[d + 2], 23, -995338651), s = c(s, r, l, u, t[d + 0], 6, -198630844), u = c(u, s, r, l, t[d + 7], 10, 1126891415), l = c(l, u, s, r, t[d + 14], 15, -1416354905), r = c(r, l, u, s, t[d + 5], 21, -57434055), s = c(s, r, l, u, t[d + 12], 6, 1700485571), u = c(u, s, r, l, t[d + 3], 10, -1894986606), l = c(l, u, s, r, t[d + 10], 15, -1051523), r = c(r, l, u, s, t[d + 1], 21, -2054922799), s = c(s, r, l, u, t[d + 8], 6, 1873313359), u = c(u, s, r, l, t[d + 15], 10, -30611744), l = c(l, u, s, r, t[d + 6], 15, -1560198380), r = c(r, l, u, s, t[d + 13], 21, 1309151649), s = c(s, r, l, u, t[d + 4], 6, -145523070), u = c(u, s, r, l, t[d + 11], 10, -1120210379), l = c(l, u, s, r, t[d + 2], 15, 718787259), r = c(r, l, u, s, t[d + 9], 21, -343485551), s = a(s, h), r = a(r, g), l = a(l, p), u = a(u, f)
                    }
                    return Array(s, r, l, u)
                }(function (t) {
                    for (var e = Array(), o = 0; o < 8 * t.length; o += 8) e[o >> 5] |= (255 & t.charCodeAt(o / 8)) << o % 32;
                    return e
                }(t), 8 * t.length))
            },
            DateStr: function () {
                var t = new Date,
                    e = t.getFullYear(),
                    o = t.getMonth() + 1,
                    n = t.getDate();
                return o < 10 && (o = "0" + o), n < 10 && (n = "0" + n), e + "" + o + n
            }
        }, cc._RF.pop()
    }, {}],
    ObtainLayer: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "4c364COh7ZGJKv4V5Jg2VUI", "ObtainLayer"), cc.Class({
            extends: cc.Component,
            properties: {},
            start: function () {}
        }), cc._RF.pop()
    }, {}],
    OverLayer: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "87fc1rlT69Gsa8EreDJ6EbT", "OverLayer");
        var n = t("G");
        cc.Class({
            extends: cc.Component,
            properties: {
                game: cc.Node,
                score: cc.Label,
                rankList: cc.Node
            },
            onEnable: function () {
                this.score.string = n.score, n.Interface.gameOverRank(), n.Interface.initMoreGame()
            },
            retryBtn: function () {
                this.node.active = !1, cc.director.emit("clickSound"), this.game.getComponent("Game").start()
            },
            showRankList: function () {
                this.rankList.active = !0, cc.director.emit("clickSound"), n.Interface.submitScore(0), n.Interface.friendRank()
            },
            closeRankList: function () {
                this.rankList.active = !1, cc.director.emit("clickSound"), n.Interface.closeRank(), n.Interface.gameOverRank(), 0 == this.node.active && (this.overLayer.active = !0)
            },
            shareBtn: function () {
                n.Interface.share({}), cc.director.emit("clickSound")
            },
            onGoHome: function () {
                n.score = 0, cc.director.emit("clickSound"), cc.director.loadScene("gameHome")
            },
            moreGame: function () {
                n.Interface.openMiniProgram()
            }
        }), cc._RF.pop()
    }, {
        G: "G"
    }],
    RollingImg: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "f8f90mgmStFZIK5l50urKzS", "RollingImg"), cc.Class({
            extends: cc.Component,
            properties: {
                appid: "",
                iconImageArray: {
                    default: [],
                    type: cc.SpriteFrame
                }
            },
            onLoad: function () {
                this.initIconArray()
            },
            initIconArray: function () {
                var t = this;
                this.iconArray = [], ["\u5c0f\u6e38\u620fAPPID", "\u5c0f\u6e38\u620fAPPID", "\u5c0f\u6e38\u620fAPPID", "\u5c0f\u6e38\u620fAPPID", "\u5c0f\u6e38\u620fAPPID", "\u5c0f\u6e38\u620fAPPID", "\u5c0f\u6e38\u620fAPPID", "\u5c0f\u6e38\u620fAPPID", "\u5c0f\u6e38\u620fAPPID"].forEach(function (e, o) {
                    var n = {
                        appid: e,
                        spriteFrame: t.iconImageArray[o]
                    };
                    t.iconArray.push(n)
                })
            },
            start: function () {
                this.startID = 0, this.target = this.node.getComponent("cc.Sprite");
                var t = cc.spawn(cc.scaleTo(1.5, 1.1), cc.rotateTo(1.5, -30)),
                    e = cc.spawn(cc.scaleTo(1.5, .9), cc.rotateTo(1.5, 30)),
                    o = cc.sequence(t, e, cc.callFunc(function () {
                        this.iconArray.length > 0 && (this.startID++, this.startID = this.startID % this.iconArray.length, this.target.spriteFrame = this.iconArray[this.startID].spriteFrame)
                    }, this));
                this.node.runAction(cc.repeatForever(o))
            },
            btn: function () {
                if (console.log("\u7acb\u5373\u8bd5\u73a9"), this.iconArray.length > 0) {
                    var t = this.iconArray[this.startID].appid;
                    wx.navigateToMiniProgram && wx.navigateToMiniProgram({
                        appId: t,
                        path: ""
                    })
                }
            }
        }), cc._RF.pop()
    }, {}],
    ScAdsManager: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "62a3eh9/31LBotZy3xJ8GjR", "ScAdsManager");
        var n = this && this.__decorate || function (t, e, o, n) {
            var i, c = arguments.length,
                a = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
            else
                for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (c < 3 ? i(a) : c > 3 ? i(e, o, a) : i(e, o)) || a);
            return c > 3 && a && Object.defineProperty(e, o, a), a
        };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = t("../common/ToastUtil"),
            c = cc._decorator.ccclass,
            a = function () {
                function t() {}
                var e;
                return e = t, Object.defineProperty(t, "instance", {
                    get: function () {
                        return this._instance || (this._instance = new e), e._instance
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.setAdsHelper = function (t) {
                    e.isCheat || (e.adsHelper = t, this.init())
                }, t.prototype.init = function () {
                    e.isCheat || e.adsHelper && (e.adsHelper.init(function () {
                        console.log("ads init success")
                    }, function () {
                        console.log("ads init fail")
                    }), e.ready = !0)
                }, t.prototype.showReward = function (t, o, n) {
                    if (e.isCheat) return console.log("CC_DEV \u76f4\u63a5\u8fd4\u56de\u6210\u529f"), i.ToastUtil.instance.showText("\u5f00\u53d1\u6a21\u5f0f\uff0c\u6210\u529f\u8fd4\u56de", 2), void(t && t());
                    e.ready ? e.adsHelper.showReward(function () {
                        t && t()
                    }, function () {
                        o && o(), i.ToastUtil.instance.showText("Ads are unavailable now.")
                    }, function () {
                        n && n()
                    }) : (o ? o() : n && n(), i.ToastUtil.instance.showText("Ads are not ready."))
                }, t.prototype.showInter = function (t, o) {
                    e.isCheat || e.ready && e.adsHelper.showInter(function () {
                        t && t()
                    }, function () {
                        o && o()
                    })
                }, t.prototype.showBanner = function (t, o) {
                    e.isCheat || e.ready && e.adsHelper.showBanner(function () {
                        t && t()
                    }, function () {
                        o && o()
                    })
                }, t.prototype.hideBanner = function (t, o) {
                    e.isCheat || e.ready && e.adsHelper.hideBanner(function () {
                        t && t()
                    }, function () {
                        o && o()
                    })
                }, t.isCheat = !1, t = e = n([c], t)
            }();
        o.default = a, cc._RF.pop()
    }, {
        "../common/ToastUtil": "ToastUtil"
    }],
    Score: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "a0190WMF+1HnYIg9VBuE1yv", "Score"), cc.Class({
            extends: cc.Component,
            properties: {
                scoreLabel: cc.Label
            },
            moveAnimation: function (t) {
                this.node.active = !0, this.node.position = t.fromP, this.scoreLabel.string = t.score;
                var e = cc.moveTo(t.duration, t.toP),
                    o = cc.callFunc(function () {
                        this.node.active = !1, t.callback()
                    }, this);
                this.node.runAction(cc.sequence(e, o))
            }
        }), cc._RF.pop()
    }, {}],
    SelectColorLayer: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "bacfdZ6AyRFtoWktrxD6CTg", "SelectColorLayer"), cc.Class({
            extends: cc.Component,
            properties: {
                layout: cc.Node,
                p: {
                    default: [],
                    type: cc.Node
                }
            },
            init: function (t) {
                for (var e = 0; e < this.p.length; e++) this.p[e].active = !0;
                this.layout.position = t.pos;
                var o = t.item.getComponent("Star")._starType;
                this.p[o].active = !1, this.oldType = o, this.callback = t.callback
            },
            click: function () {
                this.node.on(cc.Node.EventType.TOUCH_START, function (t) {
                    for (var e = 0; e < this.p.length; e++)
                        if (this.p[e].active && this.p[e].getBoundingBoxToWorld().contains(t.getLocation())) return cc.log("i:", e), void this.callback(e);
                    this.callback(this.oldType)
                }, this)
            },
            onLoad: function () {
                this.click()
            }
        }), cc._RF.pop()
    }, {}],
    Server: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "37ef0+cYxJIjK5fxqbnQDcw", "Server");
        var n = t("websocketJS");
        e.exports = {
            login: function (t) {
                var e = this;
                e.wsJS = new n, e.wsJS.initWebsocketBindFun({
                    runMode: 0,
                    playerId: t.openid,
                    loginFun: function () {
                        console.log(" login success Fun  end "), t.success(), e.isLogin = !0
                    },
                    onCloseFun: function (e) {
                        console.log(" onClose Fun  end "), t.close()
                    }
                })
            },
            isReleaseorAudit: function (t) {
                this.wsJS.SendGetRequestBindFun({
                    key_word: "ws_get_config",
                    sendGetFun: function (e, o) {
                        console.log(" SendGetRequestBindFun  callback :" + e), t.success(JSON.parse(e))
                    }
                })
            },
            getServerTime: function (t) {
                this.wsJS.SendGetServerUtcBindFun({
                    sendGetFun: function (e, o) {
                        console.log("server:" + e), t.success(e)
                    }
                })
            },
            getRedPacket: function (t) {
                this.wsJS.SendGetGameArchiveBindFun({
                    sendGetFun: function (e, o) {
                        console.log("SendGetGameArchiveBindFun  callback :" + e), console.log(o), t.success(e)
                    }
                })
            },
            setRedPacket: function (t) {
                this.wsJS.SendPostGameArchiveBindFun({
                    valWord: t,
                    sendPostFun: function (t, e) {
                        console.log("SendPostGameArchiveBindFun  callback :", t), console.log(e)
                    }
                })
            }
        }, cc._RF.pop()
    }, {
        websocketJS: "websocketJS"
    }],
    ShareEvent: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "4cfbcGtvtFBpaYI1N7RI9Kq", "ShareEvent");
        var n = t("G");
        cc.Class({
            extends: cc.Component,
            properties: {
                failNode: cc.Node,
                gold: cc.Node
            },
            onLoad: function () {
                var t = this;
                this.shareinfolist = [], n.Interface.onShow(function (e) {
                    switch (parseInt(e.type)) {
                        case 0:
                            console.log("0");
                            break;
                        case 1:
                            console.log("1"), t.isShareOk(t.getGold.bind(t));
                            break;
                        case 2:
                            console.log("2"), t.isShareOk(t.revive.bind(t))
                    }
                }.bind(this))
            },
            isShareOk: function (t) {
                var e = (Date.parse(new Date) - n.t1) / 1e3;
                console.log("last time: ", e), e > 2 ? t() : n.Interface.hitBox("\u5206\u4eab\u5931\u8d25\uff0c\u8bf7\u6362\u4e2a\u7fa4\u91cd\u8bd5\u3002")
            },
            getGold: function () {
                console.log("\u5206\u4eab\u6210\u529f\uff0c\u83b7\u53d6\u91d1\u5e01"), this.gold.getComponent("Gold").moveAnimation(), n.Interface.hitBox("\u83b7\u5f9710\u4e2a\u91d1\u5e01")
            },
            revive: function () {
                this.failNode.active ? (console.log("\u5206\u4eab\u6210\u529f\uff0c\u6267\u884c\u590d\u6d3b"), this.failNode.getComponent("Fail").revive()) : n.Interface.hitBox("\u65e0\u6548\u573a\u666f")
            }
        }), cc._RF.pop()
    }, {
        G: "G"
    }],
    StarParticle: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "5cb2fQjMg5AjKnOzlRA4hn5", "StarParticle"), cc.Class({
            extends: cc.Component,
            properties: {
                particle: cc.ParticleSystem,
                particleSpriteFrame: {
                    default: [],
                    type: cc.SpriteFrame
                }
            },
            play: function (t) {
                this.node.position = t.position, this.particle.spriteFrame = this.particleSpriteFrame[t.type], this.particle.particleCount > 0 ? this.particle.stopSystem() : this.particle.resetSystem()
            }
        }), cc._RF.pop()
    }, {}],
    Star: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "d8d1f+Nv4FKLLuaAoNb8EN5", "Star");
        var n = t("Utils");
        cc.Class({
            extends: cc.Component,
            properties: {
                _starType: 0,
                _gx: 0,
                _gy: 0,
                starSprite: cc.Sprite,
                selected: cc.Sprite,
                starSpriteFrames: {
                    default: [],
                    type: cc.SpriteFrame
                }
            },
            initW: function (t) {
                this.node.width = t - 2, this.node.height = t - 2, this.node.active = !1
            },
            initStar: function (t, e, o) {
                this.selected.node.active = !1, this._starType = t, this.starSprite.spriteFrame = this.starSpriteFrames[this._starType], this.updateGrid(e, o)
            },
            changeStarType: function (t) {
                this._starType = t, this.starSprite.spriteFrame = this.starSpriteFrames[t]
            },
            updateGrid: function (t, e) {
                this._gx = t, this._gy = e
            },
            goIntoDrop: function (t) {
                var e = t.delay;
                this.node.opacity = 0;
                var o = n.grid2Pos(this._gx, this._gy);
                this.node.setPosition(t.pos), this.scheduleOnce(function () {
                    var t = cc.fadeTo(.15, 255),
                        e = cc.moveTo(.25, o),
                        n = cc.spawn(t, e);
                    this.node.runAction(n)
                }, e)
            },
            fromSmallToBigAction: function (t) {
                var e = t.delay;
                this.scheduleOnce(function () {
                    var e = cc.callFunc(function () {
                            this.changeStarType(t.type)
                        }, this),
                        o = cc.sequence(cc.scaleTo(.35, 0), e, cc.scaleTo(.35, 1));
                    this.node.runAction(o)
                }, e)
            }
        }), cc._RF.pop()
    }, {
        Utils: "Utils"
    }],
    ToastUtil: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "a5698TIGZVN8rRvLglhIshW", "ToastUtil"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = function () {
            function t() {
                this.toastNode = null, this.textNode = null, this.textLabel = null, this.canvas = null, this.sch = function () {
                    cc.fadeOut(.2), this.node.destroy()
                }
            }
            return Object.defineProperty(t, "instance", {
                get: function () {
                    return null == this._instance && (this._instance = new t), this._instance
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.createNode = function () {
                console.log("Toast.constructor"), this.toastNode = new cc.Node, this.toastNode.active = !1, this.toastNode.color = cc.Color.BLACK, this.canvas = cc.director.getScene().getComponentInChildren(cc.Canvas), this.canvas.node.addChild(this.toastNode, cc.macro.MAX_ZINDEX), this.toastNode.addComponent(cc.Sprite);
                var t = new Image;
                t.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAAAAAA6fptVAAAACklEQVQYV2P4DwABAQEAWk1v8QAAAABJRU5ErkJggg==";
                var e = new cc.Texture2D;
                e.initWithElement(t), e.handleLoadedTexture(), this.toastNode.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(e);
                var o = this.toastNode.addComponent(cc.Widget);
                o.isAlignTop = !0, o.isAbsoluteTop = !1, o.top = .2, o.isAlignHorizontalCenter = !0, o.horizontalCenter = 0, o.alignMode = cc.Widget.AlignMode.ONCE;
                var n = this.toastNode.addComponent(cc.Layout);
                n.resizeMode = cc.Layout.ResizeMode.CONTAINER, n.paddingLeft = 15, n.paddingRight = 15, n.paddingTop = 10, n.paddingBottom = 10, this.textNode = new cc.Node, this.toastNode.addChild(this.textNode), this.textNode.position = cc.Vec3.ZERO, this.textLabel = this.textNode.addComponent(cc.Label), this.textLabel.horizontalAlign = cc.Label.HorizontalAlign.CENTER, this.textLabel.verticalAlign = cc.Label.VerticalAlign.CENTER, this.textLabel.fontSize = 32, this.textLabel.lineHeight = 40
            }, t.prototype.showText = function (t, e) {
                void 0 === e && (e = 1), this.createNode(), console.log("toast", t), t.length * this.textLabel.fontSize > .8 * this.canvas.node.width && (this.textLabel.overflow = cc.Label.Overflow.RESIZE_HEIGHT, this.textLabel.node.width = .8 * this.canvas.node.width), this.textLabel.string = t, this.toastNode.active = !0, this.toastNode.opacity = 200, this.toastNode.getComponent(cc.Layout).scheduleOnce(this.sch, e)
            }, t._instance = null, t
        }();
        o.ToastUtil = n, cc._RF.pop()
    }, {}],
    Utils: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "04587KCulVPIpioW2b4NXxz", "Utils");
        var n = t("psconfig"),
            i = function (t) {
                return t[Math.floor(Math.random() * t.length)]
            };
        e.exports = {
            grid2Pos: function (t, e) {
                var o = .5 * n.cellSize + (n.cellSize + 2) * e,
                    i = .5 * n.cellSize + (n.cellSize + 2) * t;
                return cc.v2(o, i)
            },
            pos2Grid: function (t, e) {
                var o = (e - .5 * n.cellSize) / (n.cellSize + 2),
                    i = (t - .5 * n.cellSize) / (n.cellSize + 2);
                return cc.v2(Math.round(o), Math.round(i))
            },
            initMatrixDataPortraitRandom: function () {
                for (var t = new Array(n.matrixRow), e = 0; e < n.matrixRow; e++) {
                    t[e] = new Array(n.matrixCol);
                    for (var o = 0; o < n.matrixCol; o++) t[e][o] = i(n.totalColors)
                }
                return t
            },
            indexValue: function (t, e) {
                return t * n.matrixCol + e
            },
            indexOfV2: function (t, e) {
                return t.some(function (t, o, n) {
                    return t.x === e.x && t.y === e.y
                })
            },
            resolveIndex: function (t) {
                var e = t % n.matrixCol,
                    o = (t - e) / n.matrixCol;
                return cc.v2(o, e)
            },
            removeStarsList: function (t, e, o) {
                var i = [],
                    c = [];
                c.push(o);
                var a = e[o.x][o.y];
                do {
                    var s = c.pop();
                    if (s.y - 1 >= 0 && a === e[s.x][s.y - 1]) {
                        var r = cc.v2(s.x, s.y - 1);
                        this.indexOfV2(c, r) || this.indexOfV2(i, r) || c.push(r)
                    }
                    s.y + 1 < n.matrixCol && a === e[s.x][s.y + 1] && (r = cc.v2(s.x, s.y + 1), this.indexOfV2(c, r) || this.indexOfV2(i, r) || c.push(r)), s.x - 1 >= 0 && a === e[s.x - 1][s.y] && (r = cc.v2(s.x - 1, s.y), this.indexOfV2(c, r) || this.indexOfV2(i, r) || c.push(r)), s.x + 1 < n.matrixRow && a === e[s.x + 1][s.y] && (r = cc.v2(s.x + 1, s.y), this.indexOfV2(c, r) || this.indexOfV2(i, r) || c.push(r)), i.push(s), t[this.indexValue(s.x, s.y)].getComponent("Star").selected.node.active = !0
                } while (c.length > 0);
                return i.length <= 1 && (t[this.indexValue(o.x, o.y)].getComponent("Star").selected.node.active = !1), i
            },
            needCheckCols: function (t) {
                var e = [];
                return t.forEach(function (t, o, n) {
                    -1 == e.indexOf(t.y) && e.push(t.y)
                }), e.sort(function (t, e) {
                    return e - t
                }), e
            },
            gameOver: function (t) {
                for (var e = 0; e < n.matrixRow; e++)
                    for (var o = 0; o < n.matrixCol; o++) {
                        var i = t[e][o];
                        if (i >= 0) {
                            var c = cc.v2(e, o);
                            if (c.y - 1 >= 0 && i == t[c.x][c.y - 1]) return !1;
                            if (c.y + 1 < n.matrixCol && i == t[c.x][c.y + 1]) return !1;
                            if (c.x - 1 >= 0 && i == t[c.x - 1][c.y]) return !1;
                            if (c.x + 1 < n.matrixRow && i == t[c.x + 1][c.y]) return !1
                        }
                    }
                return !0
            },
            getProgress: function (t, e) {
                return cc.misc.clamp01(t / e)
            }
        }, cc._RF.pop()
    }, {
        psconfig: "psconfig"
    }],
    WeChatFileSystemManager: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "b6c79S98MJAU6hn1MQuW4II", "WeChatFileSystemManager"), e.exports = {
            init: function (t, e) {
                this.fileSystemManager = wx.getFileSystemManager(), this.rootPath = "" + wx.env.USER_DATA_PATH, this.urlRoot = t, this.gameName = e, console.log(this.gameName)
            },
            getFileName: function (t) {
                for (var e = t.substring(t.indexOf(this.urlRoot), t.length); - 1 != e.indexOf("/");) {
                    var o = e.indexOf("/");
                    e = e.substring(0, o) + "-" + e.substring(o + 1, e.length)
                }
                return e
            },
            getFile: function (t) {
                var e = this.getFileName(t.url),
                    o = this.rootPath + "/" + e,
                    n = this;
                this.fileSystemManager.stat({
                    path: o,
                    success: function (n) {
                        n.stats.isDirectory(), n.stats.isFile() && (console.log("\u8fd9\u662f\u6587\u4ef6\uff1a " + e), t.success(o))
                    },
                    fail: function (i) {
                        console.log(e + "\u6587\u4ef6\u4e0d\u5b58\u5728\uff0c\u4e0b\u8f7d"), console.log(t.url + "?" + n.gameName), wx.downloadFile({
                            url: t.url + "?" + n.gameName,
                            success: function (e) {
                                console.log("\u4e0b\u8f7d\u6210\u529f"), wx.saveFile({
                                    tempFilePath: e.tempFilePath,
                                    filePath: o,
                                    success: function (e) {
                                        console.log("\u4fdd\u5b58\u5230\u672c\u5730"), t.success(o)
                                    },
                                    fail: function (e) {
                                        console.log(e), t.fail()
                                    }
                                })
                            },
                            fail: function (e) {
                                console.log(e), t.fail()
                            }
                        })
                    }
                })
            },
            removeFile: function (t) {
                var e = this.getFileName(t.url),
                    o = this.rootPath + "/" + e,
                    n = this;
                this.fileSystemManager.stat({
                    path: o,
                    success: function (e) {
                        n.fileSystemManager.unlink({
                            filePath: o,
                            success: function () {
                                t.success()
                            },
                            fail: function (t) {
                                console.log(t)
                            }
                        })
                    },
                    fail: function (e) {
                        console.log("\u672c\u5730\u4e0d\u5b58\u5728"), t.success()
                    }
                })
            },
            showFile: function () {
                this.fileSystemManager.readdir({
                    dirPath: "" + wx.env.USER_DATA_PATH,
                    success: function (t) {
                        console.log(t)
                    },
                    fail: function () {}
                })
            }
        }, cc._RF.pop()
    }, {}],
    WeChat: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "1d40aVTLjxPYYe8JQFIOVBo", "WeChat");
        var n = t("ToastUtil").ToastUtil,
            i = t("ScAdsManager").default;
        e.exports = {
            isSupportFunction: function (t, e) {
                return !!t || (console.log("\u4e0d\u80fd\u4f7f\u7528" + e), !1)
            },
            init: function (t) {
                this.gameName = t.gameName, this.gameAppid = t.gameAppid, this.secret = t.secret, console.log(this.gameName)
            },
            hitBox: function (t) {
                n.instance.showText(t, 2)
            },
            onShow: function (t) {},
            getGroupOpenid: function (t) {},
            login: function (t) {},
            getPlayerOpenid: function (t) {},
            openShare: function (t, e) {},
            share: function (t) {},
            preloadBannerAD: function (t) {},
            updateBannerAD: function (t) {},
            setBannerADminWidth: function () {},
            setBannerADSameMaxHeight: function () {},
            setBannerADNormalWidth: function () {},
            showBannerAD: function () {
                i.instance.showBanner()
            },
            showInterAD: function () {
                i.instance.showInter()
            },
            hideBannerAD: function () {},
            preloadRewardedAD: function (t) {},
            isOkVideo: function () {
                return !0
            },
            showRewardedAD: function (t) {
                var e = this;
                this._isShow = !0, i.instance.showReward(function () {
                    e._isShow = !1, t()
                }, function () {
                    e._isShow = !1, hitBox("Ads are unavailable.")
                }, function () {
                    e._isShow = !1
                })
            },
            closeRewardedAD: function () {},
            openData: cc.Enum({
                closeRank: 0,
                friendRank: 1,
                submitScore: 3,
                gameOverRank: 4,
                groupFriendRank: 5
            }),
            isSupportOpenData: function () {},
            closeRank: function () {},
            friendRank: function () {},
            gameOverRank: function () {},
            submitScore: function (t) {},
            groupFriendRank: function (t, e) {},
            initMoreGame: function () {},
            showMoreGameQR: function () {},
            getPlatform: function (t) {},
            toMiniProgram: function (t) {},
            openMiniGame: function (t) {},
            openMiniProgram: function (t) {}
        }, cc._RF.pop()
    }, {
        ScAdsManager: "ScAdsManager",
        ToastUtil: "ToastUtil"
    }],
    Win: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "0ef6e8J5axHz7vLcM+SJvYG", "Win"), cc.Class({
            extends: cc.Component,
            properties: {
                reward: cc.Label,
                remain: cc.Label
            },
            playWinAnimation: function (t) {
                this.node.getComponent("cc.Animation").play(), this.callback = t
            },
            nextEvent: function () {
                this.callback()
            }
        }), cc._RF.pop()
    }, {}],
    addProgram: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "b1e1dchD/JLjKi/R1X7KToy", "addProgram"), cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function () {
                var t = cc.winSize;
                t.height / t.width >= 2.1 && (console.log("x"), this.node.getComponent("cc.Widget").top = .05), t.height / t.width <= 1.4 && (this.node.getComponent("cc.Widget").top = .01, this.node.getComponent("cc.Widget").right = .135);
                var e = cc.sequence(cc.scaleTo(1.3, .9), cc.scaleTo(1.3, 1.1));
                this.node.runAction(cc.repeatForever(e))
            }
        }), cc._RF.pop()
    }, {}],
    "exported-Button": [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "446c5DPpLdLbJ0wUMc4V1MY", "exported-Button"), cc.Class({
            extends: cc.Component,
            properties: {
                image: cc.Node,
                all: cc.Node,
                redPoint: cc.Node
            },
            init: function (t) {
                this.manager = t, this.all.active = !1
            },
            change: function () {
                switch (this.callback = null, this.manager.state) {
                    case "open":
                        this.image.scaleX = -1, this.all.active = !0, this.redPoint.active = !1;
                        break;
                    case "close":
                        this.image.scaleX = 1, this.all.active = !1
                }
            },
            event: function () {
                var t = this;
                switch (this.manager.state) {
                    case "open":
                        this.manager.hide({
                            callback: function () {
                                t.change()
                            }
                        });
                        break;
                    case "close":
                        this.manager.show({
                            callback: function () {
                                t.change()
                            }
                        })
                }
            }
        }), cc._RF.pop()
    }, {}],
    "exported-GameBoxInterface": [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "a5acfW+rHRCb7tV9nSpgqZ9", "exported-GameBoxInterface"), cc.Class({
            extends: cc.Component,
            properties: {
                manage: cc.Node,
                gameName: ""
            },
            onLoad: function () {
                this.manage.getComponent("exported-GameBox").init(this.gameName), cc.director.on("gameBoxShow", function (t) {
                    console.log(t), this.manage.getComponent("exported-GameBox").show({
                        appid: t.appid,
                        callback: function () {
                            console.log("\u6709 appid \u7684\u6253\u5f00")
                        }
                    })
                }.bind(this))
            },
            show: function (t) {
                this.manage.getComponent("exported-GameBox").show({
                    appid: t,
                    callback: function () {
                        console.log("\u6253\u5f00\u5b8c\u6210")
                    }
                })
            },
            hide: function () {
                this.manage.getComponent("exported-GameBox").hide({
                    callback: function () {
                        console.log("\u9690\u85cf\u5b8c\u6bd5")
                    }
                })
            }
        }), cc._RF.pop()
    }, {}],
    "exported-GameBox": [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "2bf219N2uZMd75HGUxO/tqf", "exported-GameBox");
        var n = t("WeChatFileSystemManager"),
            i = "NewGameBox";
        cc.Class({
            extends: cc.Component,
            properties: {
                itemBox: cc.Node,
                gamePrefab: cc.Prefab,
                gamePrefabScript: "",
                canvas: cc.Node,
                layer: cc.Node,
                version: cc.Label,
                btn: cc.Node
            },
            init: function (t) {
                this.miniGameList = {}, this.miniGameList.wxd5a257d6ee2b8f91 = !0, this.miniGameList.wx515f44394eab5985 = !0, this.miniGameList.wxea245f85c9673414 = !0, this.miniGameList.wx08beeb18dc512c2f = !0, this.miniGameList.wxf49b0a26d9405058 = !0, this.miniGameList.wxc4e628aa7caa2c07 = !0, this.miniGameList.wx0af703a36035c60c = !0, this.miniGameList.wxd9589cd7117d0873 = !0, this.miniGameList.wx6616ae605010e605 = !0, this.miniGameList.wx528f5a9cd16be88a = !0;
                var e = cc.sys.localStorage.getItem(i);
                null != e && 0 != e.length || cc.sys.localStorage.setItem(i, JSON.stringify({})), n.init("NewGameBox", t), this.startP = cc.v2(.75 * -this.canvas.width, 0), this.endP = cc.v2(.75 * this.canvas.width, 0), this.state = "close", this.btn = this.btn.getComponent("exported-Button"), this.btn.init(this), this.initItemBox(), this.initJson(t)
            },
            initItemBox: function () {
                var t = cc.winSize;
                t.width / t.height > 2.06 && (console.log("x"), this.itemBox.getComponent("cc.Widget").left = 120)
            },
            initJson: function (t) {
                var e = this,
                    o = "" + t;
                cc.loader.load(o, function (t, o) {
                    t ? console.log(t) : e.addList(o)
                })
            },
            addList: function (t) {
                this.serverString = t, this.loadString = cc.sys.localStorage.getItem(i), this.newlist = {}, this.initList(), this.UpdateLocal()
            },
            UpdateLocal: function () {
                var t = this;
                console.log("\u6574\u4f53\u66f4\u65b0\u672c\u5730");
                var e = JSON.parse(this.serverString),
                    o = JSON.parse(cc.sys.localStorage.getItem(i)),
                    c = Object.keys(o);
                console.log("\u672c\u5730\u4e2a\u6570\uff1a", c.length), console.log("\u670d\u52a1\u5668\u4e2a\u6570\uff1a", e.data.length), c.forEach(function (e) {
                    t.newlist[e] ? (t.newlist[e].logo != o[e].logo && n.removeFile({
                        url: o[e].logo,
                        success: function () {
                            console.log("\u5220\u9664\u6210\u529f")
                        }
                    }), t.newlist[e].qrcode != o[e].qrcode && n.removeFile({
                        url: o[e].qrcode,
                        success: function () {
                            console.log("\u5220\u9664\u6210\u529f")
                        }
                    })) : (console.log("\u4e0d\u5b58\u5728"), console.log("\u5220\u9664\u65e7\u7684" + o[e].title + "\u672c\u5730\u6587\u4ef6"), n.removeFile({
                        url: o[e].logo,
                        success: function () {
                            console.log("\u5220\u9664\u6210\u529f")
                        }
                    }), n.removeFile({
                        url: o[e].qrcode,
                        success: function () {
                            console.log("\u5220\u9664\u6210\u529f")
                        }
                    }))
                }), console.log("\u6574\u4f53\u66f4\u65b0\u5b8c\u6210"), cc.sys.localStorage.setItem(i, JSON.stringify(this.newlist))
            },
            initList: function () {
                var t = this,
                    e = this,
                    o = JSON.parse(this.serverString).data,
                    i = !1;
                wx.getSystemInfo({
                    success: function (t) {
                        var e = t.platform;
                        "ios" == e ? (console.log("ios"), i = !0) : "android" == e ? console.log("android") : "devtools" == e ? (console.log("devtools"), i = !0) : "web" == e && (console.log("web"), i = !0)
                    }
                });
                var c = o.length,
                    a = this.itemBox.parent.width;
                i && (c = 9, a = (a - 50) / 3);
                for (var s = function (c) {
                        var s = o[c];
                        if (i && !t.miniGameList[s.appid]) return "continue";
                        var r = cc.instantiate(e.gamePrefab);
                        r.getComponent(e.gamePrefabScript).init({
                            width: i ? a : null,
                            name: s.title,
                            appid: s.appid,
                            spriteFrame: null,
                            style: s.style,
                            qrcode: s.qrcode,
                            btnCallback: e.btnCallback.bind(e)
                        }), r.parent = e.itemBox, n.getFile({
                            url: s.logo,
                            success: function (t) {
                                cc.loader.load(t, function (t, o) {
                                    var n = new cc.SpriteFrame(o);
                                    r.getComponent(e.gamePrefabScript).setSpriteFrame(n)
                                })
                            },
                            fail: function () {
                                console.log("\u52a0\u8f7d\u56fe\u7247\u5931\u8d25")
                            }
                        }), t.newlist[s.appid] = {
                            desc: s.desc,
                            title: s.title,
                            logo: s.logo,
                            qrcode: s.qrcode
                        }
                    }, r = 0; r < c; r++) s(r)
            },
            btnCallback: function (t) {
                console.log(t);
                var e = t.appid,
                    o = t.qrcode,
                    n = this;
                wx.navigateToMiniProgram ? wx.navigateToMiniProgram({
                    appId: e,
                    path: "",
                    success: function () {
                        console.log("\u6253\u5f00\u6210\u529f")
                    },
                    fail: function (t) {
                        console.log(t), -1 == t.errMsg.indexOf("fail cancel") && n.showQR({
                            qrcode: o
                        })
                    }
                }) : (console.log("navigateToMiniProgram \u4f4e\u7248\u672c\u9002\u914d"), n.showQR({
                    qrcode: o
                }))
            },
            showQR: function (t) {
                n.getFile({
                    url: t.qrcode,
                    success: function (t) {
                        wx.previewImage({
                            urls: [t],
                            success: function () {
                                console.log("wei xin previewImage success...")
                            }
                        })
                    },
                    fail: function () {
                        console.log("\u52a0\u8f7d\u56fe\u7247\u5931\u8d25")
                    }
                })
            },
            show: function (t) {
                var e = this,
                    o = cc.callFunc(function () {
                        e.state = "move"
                    }, this),
                    i = cc.moveBy(.3, e.endP),
                    c = cc.callFunc(function () {
                        e.state = "open", t.callback && t.callback(), t.appid && (e.newlist[t.appid] ? (this.layer.getComponent("exported-Layer").init({
                            appid: t.appid,
                            title: e.newlist[t.appid].title,
                            desc: e.newlist[t.appid].desc,
                            qrcode: e.newlist[t.appid].qrcode,
                            callback: e.btnCallback.bind(e)
                        }), n.getFile({
                            url: e.newlist[t.appid].logo,
                            success: function (t) {
                                cc.loader.load(t, function (t, o) {
                                    var n = new cc.SpriteFrame(o);
                                    e.layer.getComponent("exported-Layer").setGameLogo(n)
                                })
                            },
                            fail: function () {
                                console.log("\u52a0\u8f7d\u56fe\u7247\u5931\u8d25")
                            }
                        }), this.layer.active = !0) : console.log("\u4e0d\u5b58\u5728"))
                    }, this),
                    a = cc.sequence(o, i, c);
                "close" == this.state && this.canvas.runAction(a)
            },
            hide: function (t) {
                var e = cc.callFunc(function () {
                        this.state = "move"
                    }, this),
                    o = cc.moveBy(.3, this.startP),
                    n = cc.callFunc(function () {
                        this.state = "close", t.callback && t.callback()
                    }, this),
                    i = cc.sequence(e, o, n);
                "open" == this.state && this.canvas.runAction(i)
            },
            readBtn: function () {
                n.showFile()
            },
            clearLocsl: function () {
                cc.sys.localStorage.setItem(i, JSON.stringify({}))
            },
            removeAllFile: function () {
                var t = cc.sys.localStorage.getItem(i),
                    e = JSON.parse(t),
                    o = Object.keys(e);
                console.log(o), o.forEach(function (t) {
                    n.removeFile({
                        url: e[t].logo,
                        success: function () {
                            console.log("\u5220\u9664\u6210\u529f")
                        }
                    }), n.removeFile({
                        url: e[t].qrcode,
                        success: function () {
                            console.log("\u5220\u9664\u6210\u529f")
                        }
                    })
                }), cc.sys.localStorage.setItem(i, JSON.stringify({}))
            }
        }), cc._RF.pop()
    }, {
        WeChatFileSystemManager: "WeChatFileSystemManager"
    }],
    "exported-Icon": [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "819fbr06gVKhLHHm4zuCnkw", "exported-Icon"), cc.Class({
            extends: cc.Component,
            properties: {
                gameName: cc.Label,
                gameSprite: cc.Sprite,
                bg: cc.Node
            },
            init: function (t) {
                this.appid = t.appid, t.width && (this.node.scale = t.width / this.node.width, this.node.width = t.width, this.node.height *= this.node.scale), this.gameName.string = t.name, this.gameSprite.spriteFrame = t.spriteFrame, this.qrcode = t.qrcode, this.btnCallback = t.btnCallback
            },
            setSpriteFrame: function (t) {
                this.gameSprite.spriteFrame = t
            },
            btn: function () {
                this.btnCallback && this.btnCallback({
                    name: this.gameName.string,
                    appid: this.appid,
                    qrcode: this.qrcode
                })
            }
        }), cc._RF.pop()
    }, {}],
    gameData: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "f3ca6qdzjJKVaHguMuVwxsh", "gameData"), e.exports = {
            ifContinue: !0,
            level: 1,
            currScore: 0,
            starMatrix: null,
            starSprite: [],
            remainingStarCount: 0,
            cleanStarData: function (t) {
                t.forEach(function (t, e, o) {
                    this.starMatrix[t.x][t.y] = -1
                }, this)
            },
            getRewardScore: function (t) {
                var e = 2e3 - t * t * 20;
                return e < 0 && (e = 0), e
            }
        }, cc._RF.pop()
    }, {}],
    isSupportRank: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "01f69zOrgxJ+I5E47gXQe0H", "isSupportRank");
        var n = t("G");
        cc.Class({
            extends: cc.Component,
            onEnable: function () {
                this.node.active = n.Interface.isSupportOpenData()
            }
        }), cc._RF.pop()
    }, {
        G: "G"
    }],
    psconfig: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "9496eIxnBNCk7Jbp6Uf9B3w", "psconfig"), e.exports = {
            cellSize: 74,
            matrixRow: 10,
            matrixCol: 10,
            totalColors: [0, 1, 2, 3, 4]
        }, cc._RF.pop()
    }, {}],
    websocketJS: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "8a595HR8NhIiLPNQ50x4MSf", "websocketJS");
        var n = t("wsToolsJS"),
            i = t("MtilsJS"),
            c = cc.Class({
                properties: {
                    send_count: 0,
                    recv_count: 0,
                    player_id: "",
                    ws_url: "",
                    wxTool: 0,
                    sendGetCallback: null,
                    sendGetArchiveCallback: null,
                    sendGetUtcCallback: null,
                    sendGetConfigCallback: null,
                    sendGetOnlineGameListCallback: null,
                    sendGetUserInfoCallback: null,
                    sendPostCallback: null,
                    sendPostArchiveCallback: null,
                    sendPostConfigCallback: null,
                    sendPostUserInfoCallback: null,
                    sendAppendCallback: null,
                    sendAppendArchiveCallback: null,
                    sendAppendFriendHelpCallback: null,
                    loginCallback: null,
                    onCloseCallback: null,
                    errorMsgCallback: null
                },
                ctor: function () {
                    this.wxTool = new n("Star", "\u5c0f\u6e38\u620fAPPID")
                },
                initWebsocketBindFun: function (t) {
                    0 == t.runMode ? this.ws_url = "wss://www.7cgames.cn:8700/" : 1 == t.runMode ? this.ws_url = "ws://192.168.0.108:8700/" : this.ws_url = "ws://192.168.0.108:8702/", this.player_id = t.playerId, this.loginCallback = t.loginFun, this.onCloseCallback = t.onCloseFun, this.initWebsocket()
                },
                SetGameID: function (t, e) {
                    this.wxTool = new n(t, e)
                },
                SendGetGameArchiveBindFun: function (t) {
                    this.SendGetRequestBindFun({
                        key_word: "ws_archive",
                        sendGetFun: t.sendGetFun
                    })
                },
                SendPostGameArchiveBindFun: function (t) {
                    this.SendPostRequestBindFun({
                        key_word: "ws_archive",
                        val_word: String(t.valWord),
                        sendPostFun: t.sendPostFun
                    })
                },
                SendAppendGameArchiveBindFun: function (t) {
                    this.SendAppendRequestBindFun({
                        key_word: "ws_archive",
                        val_word: String(t.valWord),
                        sendGetFun: t.sendGetFun
                    })
                },
                SendClearGameArchiveBindFun: function (t) {
                    this.SendPostRequestBindFun({
                        key_word: "ws_archive",
                        val_word: "",
                        sendPostFun: t.sendPostFun
                    })
                },
                SendPostUserInfoBindFun: function (t) {
                    var e = this.wxTool.GetUserInfoJsonStr(t.OpenId, t.NickName, t.AvatarUrl);
                    this.SendPostRequestBindFun({
                        key_word: "ws_post_user_info",
                        val_word: e,
                        sendPostFun: t.sendPostFun
                    })
                },
                SendGetUserInfoByOpenIdBindFun: function (t) {
                    var e = this.wxTool.CalPlayerEncryptId(t.openId);
                    this.SendGetRequestBindFun({
                        key_word: "ws_get_user_info",
                        open_id: e,
                        sendGetFun: t.sendGetFun
                    })
                },
                SendGetFriendHelpBindFun: function (t) {
                    this.SendGetRequestBindFun({
                        key_word: "ws_friend_help",
                        sendGetFun: t.sendGetFun
                    })
                },
                SendPostFriendHelpBindFun: function (t) {
                    this.SendPostRequestBindFun({
                        key_word: "ws_friend_help",
                        val_word: String(t.valWord),
                        sendPostFun: t.sendPostFun
                    })
                },
                SendClearFriendHelpBindFun: function (t) {
                    this.SendPostRequestBindFun({
                        key_word: "ws_friend_help",
                        val_word: "",
                        sendPostFun: t.sendPostFun
                    })
                },
                SendAppenFriendHelpBindFun: function (t) {
                    this.SendAppendShareBindFun({
                        shareUserId: t.shareUserId,
                        key_word: "ws_friend_help",
                        val_word: String(t.valWord),
                        sendAppendFun: t.sendAppendFun
                    })
                },
                SendGetServerUtcBindFun: function (t) {
                    this.SendGetRequestBindFun({
                        key_word: "ws_get_utc_str",
                        sendGetFun: t.sendGetFun
                    })
                },
                SendGetConfigBindFun: function (t) {
                    this.SendGetRequestBindFun({
                        key_word: "ws_get_config",
                        sendGetFun: t.sendGetFun
                    })
                },
                initWebsocket: function () {
                    var t = this;
                    this._wsiSendBinary || (this._wsiSendBinary = new WebSocket(this.ws_url), this._wsiSendBinary.binaryType = "arraybuffer", console.log("pre initWebsocket url=" + this.ws_url + " user=" + this.player_id), this._wsiSendBinary.onopen = function (e) {
                        console.log("  websocket onopen   ");
                        var o = t.wxTool.GetLoginRequestStr(t.player_id);
                        console.log(" send login_request = " + o), t.sendWebSocketBinary(o)
                    }, this._wsiSendBinary.onmessage = function (e) {
                        for (var o = new Uint16Array(e.data), n = "", i = 0; i < o.length; i++)
                            if (0 === o[i]) n += " ";
                            else {
                                var c = "0x" + o[i].toString("16").toUpperCase();
                                n += String.fromCharCode(c)
                            }
                        t.receiveWebSocketMsg(n)
                    }, this._wsiSendBinary.onerror = function (t) {
                        console.log("wsiSendBinary onerror " + t)
                    }, this._wsiSendBinary.onclose = function (e) {
                        console.log("wsiSendBinary onclose callback " + e.reason), t.onCloseCallback(e.reason), t._wsiSendBinary = null
                    })
                },
                sendWebSocketBinary: function (t) {
                    if (this._wsiSendBinary)
                        if (this._wsiSendBinary.readyState === WebSocket.OPEN) {
                            var e = t;
                            if (e.length > this.wxTool.msg_max_len) return void console.log(" error length> " + this.wxTool.msg_max_len);
                            for (var o = new Uint16Array(e.length), n = 0; n < e.length; n++) o[n] = e.charCodeAt(n);
                            this._wsiSendBinary.send(o.buffer), ++this.send_count
                        } else console.log(" wsiSendBinary  error send binary websocket instance wasn't ready..."), this.scheduleOnce(function () {
                            this.sendWebSocketBinary(t)
                        }, 1);
                    else console.log(" this._wsiSendBinary error " + this._wsiSendBinary)
                },
                receiveWebSocketMsg: function (t) {
                    if ("{" == (t = t.trim())[0] && "}" == t[t.length - 1]) {
                        var e = JSON.parse(t);
                        if (e.status >= 0)
                            if (e.msgType == this.wxTool.msg_type_login) {
                                var o = e.msg;
                                console.log("login success, get vrsion:" + e.request), this.wxTool.SetTokenSeed(o), this.loginCallback && this.loginCallback()
                            } else if (e.msgType == this.wxTool.msg_type_get)
                            if ("ws_archive" == e.request) this.sendGetArchiveCallback && this.sendGetArchiveCallback(e.msg, t);
                            else if ("ws_get_utc_str" == e.request) this.sendGetUtcCallback && this.sendGetUtcCallback(e.msg, t);
                        else if ("ws_get_config" == e.request) this.sendGetConfigCallback && this.sendGetConfigCallback(e.msg, t);
                        else if ("ws_get_user_info" == e.request) {
                            if (this.sendGetUserInfoCallback) {
                                var n = JSON.parse(e.msg);
                                n.avatarUrl = i.base64_decode(n.avatarUrl), n.nickName = i.base64_decode(n.nickName), this.sendGetUserInfoCallback(n, t)
                            }
                        } else this.sendGetCallback && this.sendGetCallback(e.msg, t);
                        else e.msgType == this.wxTool.msg_type_post ? "ws_archive" == e.request ? this.sendPostArchiveCallback && this.sendPostArchiveCallback(e.msg, t) : "ws_post_user_info" == e.request ? this.sendPostUserInfoCallback && this.sendPostUserInfoCallback(e.msg, t) : this.sendPostCallback && this.sendPostCallback(e.msg, t) : e.msgType == this.wxTool.msg_type_append ? "ws_archive" == e.request ? this.sendAppendArchiveCallback && this.sendAppendArchiveCallback(e.msg, t) : "ws_friend_help" == e.request ? this.sendAppendFriendHelpCallback && this.sendAppendFriendHelpCallback(e.msg, t) : this.sendAppendCallback && this.sendAppendCallback(e.msg, t) : console.log("recv unkon type : " + e.msgType + " ," + e.msg);
                        else console.log("recv error msg: status=" + e.status + ",msg=" + e.msg)
                    } else console.log("recv Msg not json:" + t);
                    ++this.recv_count
                },
                closeWebSocket: function () {
                    this._wsiSendBinary && this._wsiSendBinary.readyState !== WebSocket.CLOSED && this._wsiSendBinary.readyState === WebSocket.OPEN && (console.log("pre websocket close "), this._wsiSendBinary.close(1e3, "Normal Closure"))
                },
                SendGetRequest: function (t) {
                    var e = String(t);
                    if (e.length > 0) {
                        if (0 == e.indexOf("ws_")) var o = this.wxTool.GetGetValRequestStr(this.player_id, e);
                        this.sendWebSocketBinary(o)
                    }
                },
                SendGetRequestBindFun: function (t) {
                    var e = String(t.key_word);
                    if (e.length > 0) {
                        if ("ws_get_user_info" == e) {
                            var o = this.wxTool.GetGetOpenidValRequestStr(this.player_id, e, t.open_id);
                            console.log("GetGetOpenidValRequestStr :" + o)
                        } else 0 == e.indexOf("ws_") ? o = this.wxTool.GetGetValRequestStr(this.player_id, e) : console.log("msg_key error  " + e);
                        this.sendWebSocketBinary(o), "ws_archive" == e ? this.sendGetArchiveCallback = t.sendGetFun : "ws_get_utc_str" == e ? (this.sendGetUtcCallback = t.sendGetFun, console.log(" UTC pre send  = " + o)) : "ws_get_config" == e ? this.sendGetConfigCallback = t.sendGetFun : "ws_get_user_info" == e ? this.sendGetUserInfoCallback = t.sendGetFun : this.sendGetCallback = t.sendGetFun
                    }
                },
                SendPostRequest: function (t, e) {
                    var o = String(t),
                        n = String(e);
                    if (o.length > 0) {
                        if (0 == o.indexOf("ws_")) var i = this.wxTool.GetPostValRequestStr(this.player_id, o, n);
                        this.sendWebSocketBinary(i)
                    }
                },
                SendPostRequestBindFun: function (t) {
                    var e = String(t.key_word),
                        o = String(t.val_word);
                    if (e.length > 0) {
                        if (0 == e.indexOf("ws_")) var n = this.wxTool.GetPostValRequestStr(this.player_id, e, o);
                        this.sendWebSocketBinary(n), "ws_archive" == e ? this.sendPostArchiveCallback = t.sendPostFun : "ws_post_user_info" == e ? this.sendPostUserInfoCallback = t.sendPostFun : this.sendPostCallback = t.sendPostFun
                    }
                },
                SendAppendRequest: function (t, e) {
                    var o = String(t),
                        n = String(e);
                    if (o.length > 0) {
                        if (console.log(" pre send  lab = " + o), 0 == o.indexOf("ws_")) {
                            var i = this.wxTool.GetPostAppendValRequestStr(this.player_id, o, n);
                            console.log(" pre send  GetValRequest = " + i)
                        }
                        this.sendWebSocketBinary(i)
                    }
                },
                SendAppendRequestBindFun: function (t) {
                    var e = String(t.key_word),
                        o = String(t.val_word);
                    if (e.length > 0) {
                        if (0 == e.indexOf("ws_")) var n = this.wxTool.GetPostAppendValRequestStr(this.player_id, e, o);
                        this.sendWebSocketBinary(n), "ws_archive" == e ? this.sendAppendArchiveCallback = t.sendAppendFun : this.sendAppendCallback = t.sendAppendFun
                    }
                },
                SendShareAppendRequest: function (t, e) {
                    var o = "ws_friend_help",
                        n = String(e);
                    if (o.length > 0) {
                        if (console.log(" pre send  lab = " + o), 0 == o.indexOf("ws_")) {
                            var i = this.wxTool.GetPostShareAppendValRequestStr(this.player_id, t, o, n);
                            console.log(" pre send  GetValRequest = " + i)
                        }
                        this.sendWebSocketBinary(i)
                    }
                },
                SendAppendShareBindFun: function (t) {
                    var e = "ws_friend_help",
                        o = String(t.val_word),
                        n = String(t.shareUserId);
                    if (e.length > 0) {
                        if (console.log(" pre send  lab = " + e), 0 == e.indexOf("ws_")) {
                            var i = this.wxTool.GetPostShareAppendValRequestStr(this.player_id, n, e, o);
                            console.log(" pre send  GetValRequest = " + i)
                        }
                        this.sendWebSocketBinary(i), this.sendAppendFriendHelpCallback = t.sendAppendFun
                    }
                }
            });
        e.exports = c, cc._RF.pop()
    }, {
        MtilsJS: "MtilsJS",
        wsToolsJS: "wsToolsJS"
    }],
    wsToolsJS: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "6c2659Ei/FEpYclFHtsaUWI", "wsToolsJS");
        var n = t("MtilsJS"),
            i = cc.Class({
                properties: {
                    game_name: "",
                    game_id: "",
                    token_seed: "",
                    msg_type_other: 10,
                    msg_type_login: 11,
                    msg_type_get: 12,
                    msg_type_post: 13,
                    msg_type_append: 14,
                    msg_type_logout: 15,
                    msg_type_unknow: 16,
                    msg_max_len: 2048
                },
                ctor: function (t, e) {
                    this.game_name = t, this.game_id = e
                },
                SetTokenSeed: function (t) {
                    this.token_seed = t
                },
                GetTokenSeed: function () {
                    return this.token_seed
                },
                GetUtcStamp: function () {
                    var t = String(Date.parse(new Date));
                    return Number(t.substr(0, t.length - 3))
                },
                GetUtcMillisecondStamp: function () {
                    return (new Date).getTime()
                },
                CalMsgId: function (t) {
                    var e = Math.floor(9e3 * Math.random() + 1e3),
                        o = n.hex_md5(t).substr(0, 4);
                    return this.GetUtcStamp() + this.game_name.substr(0, 4) + o + e
                },
                CalLoginKey: function (t) {
                    var e = String(this.game_id) + String(t) + String(this.game_id),
                        o = n.hex_md5(e);
                    return o.substr(3 * o.length / 4, o.length / 4)
                },
                CalTokenKey: function (t) {
                    return n.hex_md5(this.token_seed + this.game_id + t).substr(4, 8)
                },
                CalPlayerEncryptId: function (t) {
                    return n.hex_md5(t).substr(0, 12)
                },
                CalCheckKey: function (t) {
                    var e;
                    return e = n.hex_sha256(t), e = n.hex_sha1(e), (e = n.hex_md5(e)).substr(8, 8)
                },
                GetLoginRequestStr: function (t) {
                    var e = this.CalMsgId(t),
                        o = {
                            loginKey: this.CalLoginKey(e),
                            gameId: this.game_id,
                            msgId: e,
                            timeStamp: this.GetUtcStamp(),
                            msgType: this.msg_type_login
                        };
                    return JSON.stringify(o)
                },
                GetGetValRequestStr: function (t, e) {
                    if (this.token_seed.length < 4) return "";
                    var o = this.CalMsgId(t),
                        n = this.CalTokenKey(o),
                        i = {
                            userId: this.CalPlayerEncryptId(t),
                            dataKey: String(e)
                        },
                        c = {
                            tokenKey: n,
                            gameId: this.game_id,
                            msgId: o,
                            timeStamp: this.GetUtcStamp(),
                            msgType: this.msg_type_get,
                            content: i
                        };
                    return JSON.stringify(c)
                },
                GetGetOpenidValRequestStr: function (t, e, o) {
                    if (this.token_seed.length < 4) return "";
                    var n = this.CalMsgId(t),
                        i = this.CalTokenKey(n),
                        c = {
                            userId: this.CalPlayerEncryptId(t),
                            openId: o,
                            dataKey: String(e)
                        },
                        a = {
                            tokenKey: i,
                            gameId: this.game_id,
                            msgId: n,
                            timeStamp: this.GetUtcStamp(),
                            msgType: this.msg_type_get,
                            content: c
                        };
                    return JSON.stringify(a)
                },
                GetPostValRequestStr: function (t, e, o) {
                    if (this.token_seed.length < 4) return "";
                    var n = this.CalMsgId(t),
                        i = this.CalTokenKey(n),
                        c = this.CalPlayerEncryptId(t),
                        a = {
                            userId: c,
                            dataKey: String(e),
                            dataVale: String(o)
                        },
                        s = c + String(e) + String(o),
                        r = {
                            tokenKey: i,
                            gameId: this.game_id,
                            msgId: n,
                            timeStamp: this.GetUtcStamp(),
                            msgType: this.msg_type_post,
                            content: a,
                            checkKey: this.CalCheckKey(s)
                        };
                    return JSON.stringify(r)
                },
                GetPostAppendValRequestStr: function (t, e, o) {
                    if (this.token_seed.length < 4) return "";
                    var n = this.CalMsgId(t),
                        i = this.CalTokenKey(n),
                        c = this.CalPlayerEncryptId(t),
                        a = {
                            userId: c,
                            dataKey: String(e),
                            dataVale: String(o)
                        },
                        s = c + String(e) + String(o),
                        r = {
                            tokenKey: i,
                            gameId: this.game_id,
                            msgId: n,
                            timeStamp: this.GetUtcStamp(),
                            msgType: this.msg_type_append,
                            content: a,
                            checkKey: this.CalCheckKey(s)
                        };
                    return JSON.stringify(r)
                },
                GetPostShareAppendValRequestStr: function (t, e, o, n) {
                    if (this.token_seed.length < 4) return "";
                    var i = this.CalMsgId(t),
                        c = this.CalTokenKey(i),
                        a = this.CalPlayerEncryptId(e),
                        s = {
                            userId: a,
                            dataKey: String(o),
                            dataVale: String(n)
                        },
                        r = a + String(o) + String(n),
                        l = {
                            tokenKey: c,
                            gameId: this.game_id,
                            msgId: i,
                            timeStamp: this.GetUtcStamp(),
                            msgType: this.msg_type_append,
                            content: s,
                            checkKey: this.CalCheckKey(r)
                        };
                    return JSON.stringify(l)
                },
                GetUserInfoJsonStr: function (t, e, o) {
                    var i = {
                        openId: this.CalPlayerEncryptId(t),
                        nickName: n.base64_encode(e),
                        avatarUrl: n.base64_encode(o)
                    };
                    return JSON.stringify(i)
                }
            });
        e.exports = i, cc._RF.pop()
    }, {
        MtilsJS: "MtilsJS"
    }],
    wx: [function (t, e, o) {
        "use strict";

        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function i(t, e) {
            for (var o = 0; o < e.length; o++) {
                var n = e[o];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
        }

        function c(t, e, o) {
            return e && i(t.prototype, e), o && i(t, o), t
        }
        cc._RF.push(e, "5de37eegfRCeI1LYMxqE8sb", "wx");
        var a = {
                USER_DATA_PATH: ""
            },
            s = function () {
                function t() {
                    n(this, t)
                }
                return c(t, [{
                    key: "stat",
                    value: function () {
                        return {}
                    }
                }]), t
            }(),
            r = function () {
                function t() {
                    n(this, t), this.env = a
                }
                return c(t, [{
                    key: "getFileSystemManager",
                    value: function () {
                        return this.fs || (this.fs = new s), this.fs
                    }
                }, {
                    key: "login",
                    value: function () {}
                }, {
                    key: "getSystemInfo",
                    value: function () {}
                }, {
                    key: "onShow",
                    value: function () {}
                }]), t
            }();
        window.wx || (window.wx = new r), cc._RF.pop()
    }, {}]
}, {}, ["AdsBoomgames", "AdsWeiyou", "IScAds", "ScAdsManager", "ToastUtil", "Attendance", "AttendancePrefab", "Audio", "ContinueLayer", "Fail", "G", "Game", "GameHome", "GoIn", "Gold", "GoldAnim", "GoldAnimationLayer", "GuessYouLike", "GuideLayer", "Interface", "InviteFriends", "Load", "LocalStorage", "MatrixCtrl", "MtilsJS", "ObtainLayer", "OverLayer", "RollingImg", "Score", "SelectColorLayer", "Server", "ShareEvent", "Star", "StarParticle", "Utils", "WeChat", "WeChatFileSystemManager", "Win", "addProgram", "exported-Button", "exported-GameBox", "exported-GameBoxInterface", "exported-Icon", "gameData", "isSupportRank", "psconfig", "websocketJS", "wsToolsJS", "wx"]);