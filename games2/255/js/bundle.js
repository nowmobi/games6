! function () {
    "use strict";
    var t, e, i, s, n, a, l, o, r, h, d, u, c, p, f, g, m, y, I, b, S, T, _, v, L, x, C, B, w, G, O, A, k, D, E, P, N, M, F, V;
    ! function (t) {
        t[t.Debug = -1] = "Debug", t[t._ExpOnline = 32] = "_ExpOnline", t[t.ItemDouble = 34] = "ItemDouble", t[t._Lucky = 38] = "_Lucky", t[t.Sign = 39] = "Sign", t[t._Beyond = 40] = "_Beyond", t[t.Shop = 42] = "Shop", t[t._PassAward = 43] = "_PassAward", t[t.PatchRefresh = 44] = "PatchRefresh", t[t.TeamUnlock = 45] = "TeamUnlock", t[t._TalentClear = 46] = "_TalentClear", t[t.PassDrop = 47] = "PassDrop", t[t.ReLive = 48] = "ReLive", t[t._EndDrop = 49] = "_EndDrop", t[t.Help = 50] = "Help", t[t.FlashAdd = 51] = "FlashAdd", t[t.DaimondAdd = 52] = "DaimondAdd", t[t.BeyondUpLv = 53] = "BeyondUpLv", t[t.QuickTalent = 54] = "QuickTalent", t[t.BufferInitMoney = 61] = "BufferInitMoney", t[t.BufferDropMoney = 62] = "BufferDropMoney", t[t._BufferAutoPick = 63] = "_BufferAutoPick", t[t.FillKillNum = 71] = "FillKillNum"
    }(t || (t = {})),
    function (t) {
        t[t.GUIDE_ENEMY_BRON = 1] = "GUIDE_ENEMY_BRON", t[t.GUIDE_ENEMY_DIE = 2] = "GUIDE_ENEMY_DIE", t[t.AGREE_YES = 3] = "AGREE_YES", t[t.AGREE_NO = 4] = "AGREE_NO", t[t.FLASH_VAL_REFRESH = 5] = "FLASH_VAL_REFRESH", t[t.KILL_AD_FILL = 6] = "KILL_AD_FILL", t[t.GOTO_ADV_SHOP = 7] = "GOTO_ADV_SHOP", t[t.LOAD_PER = 11] = "LOAD_PER", t[t.DAY_CHANGE = 12] = "DAY_CHANGE", t[t.HOUR_CHANGE = 13] = "HOUR_CHANGE", t[t.AVATAR_ZERO = 15] = "AVATAR_ZERO", t[t.PASS_CHANGE = 16] = "PASS_CHANGE", t[t.ONLINE_CHANGE = 17] = "ONLINE_CHANGE", t[t.ONLINE_SEC = 18] = "ONLINE_SEC", t[t.HERO_ON_CHANGE = 19] = "HERO_ON_CHANGE", t[t.HERO_UPLEVEL = 20] = "HERO_UPLEVEL", t[t.TAP_SOLIDER_CHANGE = 21] = "TAP_SOLIDER_CHANGE", t[t.TAP_CHAPTER_CHANGE = 22] = "TAP_CHAPTER_CHANGE", t[t.PATCH_NUM_CHANGE = 23] = "PATCH_NUM_CHANGE", t[t.TAP_TALENT_ITEM = 24] = "TAP_TALENT_ITEM", t[t.SHOW_GIFT_TIPS = 25] = "SHOW_GIFT_TIPS", t[t.GIFT_ITEM_REFRESH = 26] = "GIFT_ITEM_REFRESH", t[t.TEAM_UNLOCK_REFRESH = 27] = "TEAM_UNLOCK_REFRESH", t[t.ENEMY_NUM_CHANGE = 28] = "ENEMY_NUM_CHANGE", t[t.LOOK_NEW_SOLIDER = 29] = "LOOK_NEW_SOLIDER", t[t.HERO_UPSKILL = 31] = "HERO_UPSKILL", t[t.HERO_BEYOND = 32] = "HERO_BEYOND", t[t.EGG_BEGIN = 33] = "EGG_BEGIN", t[t.PASS_AWARD_GAIN = 34] = "PASS_AWARD_GAIN", t[t.SOLIDER_UPLEVEL = 35] = "SOLIDER_UPLEVEL", t[t.TAP_BAGPUT_CHANGE = 37] = "TAP_BAGPUT_CHANGE", t[t.WEAPON_UP_SUCC = 38] = "WEAPON_UP_SUCC", t[t.TD_HERO_CHANGE = 39] = "TD_HERO_CHANGE", t[t.HERO_LIST_CHANGE = 40] = "HERO_LIST_CHANGE", t[t.VIDEO_LOAD = 41] = "VIDEO_LOAD", t[t.VIDEO_LOOK = 41] = "VIDEO_LOOK", t[t.VIDEO_FINISH = 42] = "VIDEO_FINISH", t[t.VIDEO_HALF = 43] = "VIDEO_HALF", t[t.VIDEO_ERROR = 44] = "VIDEO_ERROR", t[t.SHARE_SUCC = 51] = "SHARE_SUCC", t[t.SHARE_FAIL = 52] = "SHARE_FAIL", t[t.TT_RECROD_EVT = 53] = "TT_RECROD_EVT", t[t.TT_RECORD_SUCC = 54] = "TT_RECORD_SUCC", t[t.COLOR_SIGN_SUCC = 55] = "COLOR_SIGN_SUCC", t[t.BOOK_MSG_SUCC = 56] = "BOOK_MSG_SUCC", t[t.ST_CHANGE = 61] = "ST_CHANGE", t[t.TD_HURT = 62] = "TD_HURT", t[t.LOT_CHANGE = 63] = "LOT_CHANGE", t[t.REFRESH_PAUSE_BTN = 64] = "REFRESH_PAUSE_BTN", t[t.ITEMNUM_CHANGE = 91] = "ITEMNUM_CHANGE", t[t.BUFFDICT_CHANGE = 92] = "BUFFDICT_CHANGE", t[t.BUFFITEM_FLASH = 93] = "BUFFITEM_FLASH"
    }(e || (e = {})),
    function (t) {
        t[t.Load = 1] = "Load", t[t.Look = 2] = "Look", t[t.Finish = 3] = "Finish", t[t.Fail = 4] = "Fail", t[t.Half = 5] = "Half", t[t.Click = 6] = "Click"
    }(i || (i = {})),
    function (t) {
        t[t.Free = 0] = "Free", t[t.Fight = 1] = "Fight"
    }(s || (s = {})),
    function (t) {
        t[t.Left = 1] = "Left", t[t.Center = 2] = "Center", t[t.Right = 3] = "Right"
    }(n || (n = {})),
    function (t) {
        t.Dev = "Dev1", t.Link = "Lin1", t.Apk1 = "Apk1", t.Apk2 = "Apk2", t.Ios = "Ios1", t.Wx = "Wx_1", t.Tx = "Tx_1", t.Tt = "Tt_1", t.Oppo = "Opp1", t.Vivo = "Viv1", t.XMin = "XMin", t.Right = "Oppo", t.Four = "Four"
    }(a || (a = {})),
    function (t) {
        t[t.dev = 0] = "dev", t[t.daySoul = 1] = "daySoul", t[t.Pass = 2] = "Pass", t[t.Award = 11] = "Award", t[t.Beyond = 12] = "Beyond", t[t.Double = 13] = "Double", t[t.ExpOn = 14] = "ExpOn", t[t.ExpOff = 15] = "ExpOff"
    }(l || (l = {})),
    function (t) {
        t[t.Exp = 1] = "Exp", t[t.Gold = 2] = "Gold", t[t.Init = 3] = "Init", t[t.Drop = 4] = "Drop", t[t.Pick = 5] = "Pick"
    }(o || (o = {})),
    function (t) {
        t[t.moreExp = 51] = "moreExp", t[t.moreGold = 52] = "moreGold"
    }(r || (r = {})),
    function (t) {
        t[t.money = 1] = "money", t[t.card = 2] = "card", t[t.box = 3] = "box"
    }(h || (h = {})),
    function (t) {
        t[t.exp = 3] = "exp", t[t.soul = 5] = "soul", t[t._exp = -3] = "_exp", t[t.diamond = 1] = "diamond", t[t.gold = 2] = "gold", t[t.patch = 4] = "patch", t[t.patchSolider = -9] = "patchSolider", t[t.awardSolider = -8] = "awardSolider", t[t._patchExist = -4] = "_patchExist", t[t.money = 6] = "money", t[t._money = 16] = "_money", t[t.talent = 7] = "talent", t[t.flash = 5] = "flash", t[t._flash = -5] = "_flash", t[t._diamond = -1] = "_diamond", t[t._gold = -2] = "_gold", t[t._patch1 = -41] = "_patch1", t[t._patch2 = -42] = "_patch2", t[t._patch3 = -43] = "_patch3", t[t._patch4 = -44] = "_patch4", t[t._patch5 = -45] = "_patch5", t[t.heroPatch = 51] = "heroPatch", t[t.buffer = 52] = "buffer", t[t.cardExp = 101] = "cardExp", t[t.cardGold = 102] = "cardGold", t[t.box1 = 501] = "box1", t[t.box2 = 502] = "box2"
    }(d || (d = {})),
    function (t) {
        t[t.One = 1] = "One", t[t.Two = 2] = "Two", t[t.Three = 3] = "Three", t[t.Four = 4] = "Four", t[t.Five = 5] = "Five"
    }(u || (u = {})),
    function (t) {
        t[t.welcome = 1] = "welcome", t[t.clear = 2] = "clear",
			t[t.down = 3] = "down", t[t.unzip = 4] = "unzip",
			t[t.loader = 5] = "loader", t[t.login = 6] = "login"
    }(c || (c = {})),
    function (t) {
        t[t.Rest = 1] = "Rest", t[t.Fight = 2] = "Fight", t[t.Select = 3] = "Select"
    }(p || (p = {})),
    function (t) {
        t[t.Frame = 1] = "Frame", t[t.Spine = 2] = "Spine"
    }(f || (f = {})),
    function (t) {
        t.Move = "move", t.Wait = "wait", t.Attack = "attack", t.Happy = "happy"
    }(g || (g = {})),
    function (t) {
        t[t.field = 3] = "field", t[t.grass = 4] = "grass", t[t.other = 5] = "other", t[t.stand = 7] = "stand", t[t.begin = 1] = "begin", t[t.end = 2] = "end", t[t.stone = 8] = "stone", t[t.point = 6] = "point", t[t.fly = 9] = "fly"
    }(m || (m = {})),
    function (t) {
        t[t.hero = 1] = "hero", t[t.solider = 2] = "solider", t[t.enemy = 3] = "enemy", t[t.boss = 4] = "boss"
    }(y || (y = {})),
    function (t) {
        t[t.fighter = 1] = "fighter", t[t.tank = 2] = "tank", t[t.kill = 3] = "kill", t[t.master = 4] = "master", t[t.shooter = 5] = "shooter", t[t.help = 6] = "help"
    }(I || (I = {})),
    function (t) {
        t[t._drag = 1] = "_drag", t[t.Bottom = 2] = "Bottom", t[t.Main = 3] = "Main", t[t.Hero = 4] = "Hero", t[t.Talent = 6] = "Talent", t[t.Shop = 7] = "Shop", t[t.SoliderSite = 8] = "SoliderSite", t[t.Pic = 9] = "Pic"
    }(b || (b = {})),
    function (t) {
        t[t.Exit = 0] = "Exit", t[t.Load = 1] = "Load",
			t[t.Stop = 2] = "Stop", t[t.Video = 3] = "Video",
			t[t.Login = 5] = "Login", t[t.Info = 7] = "Info",
			t[t.Reg = 8] = "Reg", t[t.GameEndWin = 10] = "GameEndWin",
			t[t.GameEndFail = 11] = "GameEndFail", t[t.Pick = 12] = "Pick",
			t[t.Award = 13] = "Award", t[t.Online = 14] = "Online",
			t[t.Kill = 16] = "Kill", t[t.Box = 17] = "Box", t[t.Group = 18] = "Group",
			t[t._Kill = 19] = "_Kill", t[t._Hero = 20] = "_Hero",
			t[t.Build = 21] = "Build", t[t.SoliderList = 22] = "SoliderList",
			t[t.EnemyList = 23] = "EnemyList", t[t.Hero = 24] = "Hero",
			t[t.Egg = 25] = "Egg", t[t.Exp = 26] = "Exp", t[t.OffLine = 27] = "OffLine",
			t[t.Site = 28] = "Site", t[t.SoliderInfo = 29] = "SoliderInfo", 
			t[t.WeaponBag = 30] = "WeaponBag", t[t.WeaponInfo = 31] = "WeaponInfo",
			t[t.WeaponPut = 32] = "WeaponPut", t[t.WeaponAuto = 33] = "WeaponAuto",
			t[t.Order = 34] = "Order", t[t.SoliderNew = 35] = "SoliderNew",
			t[t.SoliderDesc = 36] = "SoliderDesc", t[t.GameEndFb = 37] = "GameEndFb",
			t[t.Unlock = 38] = "Unlock", t[t.Agree = 39] = "Agree", t[t.Help = 40] = "Help",
			t[t.Sign = 41] = "Sign", t[t.Lucky = 42] = "Lucky", t[t.Chapter = 43] = "Chapter",
			t[t.ChapterMap = 44] = "ChapterMap", t[t.CountDown = 45] = "CountDown",
			t[t.Pause = 46] = "Pause", t[t.StarDesc = 47] = "StarDesc",
			t[t.Guide = 48] = "Guide", t[t.Fast = 49] = "Fast", t[t.Exchange = 50] = "Exchange",
			t[t.Flash = 51] = "Flash", t[t.FbGold = 305] = "FbGold", t[t.FbDaimond = 306] = "FbDaimond",
			t[t.FbPatch = 307] = "FbPatch", t[t.FbTalent = 308] = "FbTalent", t[t._DevUI = 404] = "_DevUI",
			t[t.__Box1 = 61] = "__Box1", t[t.__Box2 = 62] = "__Box2", t[t.__Gold3 = 63] = "__Gold3",
			t[t.__Exp3 = 64] = "__Exp3", t[t.__Award = 65] = "__Award", t[t.__Chapter = 66] = "__Chapter"
    }(S || (S = {})),
    function (t) {
        t[t.Line = 1] = "Line", t[t.Lock = 2] = "Lock", t[t.MinBlood = 3] = "MinBlood", t[t.SelfHurt = 4] = "SelfHurt", t[t.Friends = 5] = "Friends", t[t.RoundEnemy = 6] = "RoundEnemy", t[t.RoundFriend = 7] = "RoundFriend", t[t.AimRound = 8] = "AimRound", t[t.Enemys = 9] = "Enemys", t[t.EnemyHit = 10] = "EnemyHit", t[t.SelfHit = 11] = "SelfHit", t[t.Box = 21] = "Box", t[t.Round = 22] = "Round"
    }(T || (T = {})),
    function (t) {
        t[t.atkHurt = 1] = "atkHurt", t[t.bloodMax = 2] = "bloodMax", t[t.atkHeal = 4] = "atkHeal", t[t.getBlood = 5] = "getBlood", t[t.minHurt = 6] = "minHurt", t[t.backHurt = 7] = "backHurt", t[t.mustHurt = 8] = "mustHurt", t[t.bloodHeal = 17] = "bloodHeal"
    }(_ || (_ = {})),
    function (t) {
        t[t.back = 1] = "back", t[t.still = 2] = "still", t[t.one = 3] = "one"
    }(v || (v = {})),
    function (t) {
        t.tap = "tap", t.no = "no", t.up = "up", t.gold = "gold", t.win = "win", t.lose = "lose", t.heroGain = "heroGain", t.boss = "boss", t.backFight = "backFight", t.backMain = "backMain", t.toFight1 = "toFight1", t.toFight2 = "toFight2", t.sun = "sun", t.hurt = "hurt"
    }(L || (L = {})),
    function (t) {
        t[t.Hit = 1] = "Hit", t[t.Hurt = 2] = "Hurt", t[t.Join = 6] = "Join", t[t.Die = 7] = "Die", t[t.atkerBlood = 11] = "atkerBlood", t[t.hiterBlood = 12] = "hiterBlood", t[t.hurterBlood = 13] = "hurterBlood", t[t.Hand = 21] = "Hand"
    }(x || (x = {})),
    function (t) {
        t[t.skillA = 0] = "skillA", t[t.skillB = 1] = "skillB", t[t.skillC = 2] = "skillC"
    }(C || (C = {})),
    function (t) {
        t[t.init = 1] = "init", t[t.local = 2] = "local", t[t.loadInit = 3] = "loadInit", t[t.sysInit = 4] = "sysInit", t[t.login = 5] = "login", t[t.loginDone = 6] = "loginDone", t[t.more = 7] = "more", t[t.enter = 8] = "enter", t[t.frame = 9] = "frame"
    }(B || (B = {})),
    function (t) {
        t.Enter = "enter", t.Queue = "queue", t.List = "list", t.Leave = "leave", t.Result = "result", t.Hit = "hit", t.Skill = "skill"
    }(w || (w = {})),
    function (t) {
        t[t.Self = 1] = "Self", t[t.Aim = 2] = "Aim", t[t.Aims = 3] = "Aims", t[t.Line = 11] = "Line", t[t.Screen = 21] = "Screen"
    }(G || (G = {})),
    function (t) {
        t[t.Dizzy = 1] = "Dizzy", t[t.Must = 2] = "Must", t[t.Hurt = 3] = "Hurt", t[t.BloodVal = 11] = "BloodVal", t[t.MoveVal = 12] = "MoveVal", t[t.AtkVal = 13] = "AtkVal", t[t.SpeedVal = 14] = "SpeedVal", t[t.DoubleAtk = 15] = "DoubleAtk", t[t.DoubleVal = 16] = "DoubleVal", t[t.AwayVal = 17] = "AwayVal"
    }(O || (O = {})),
    function (t) {
        t[t.One = 1] = "One", t[t.Two = 2] = "Two", t[t.Three = 3] = "Three"
    }(A || (A = {})),
    function (t) {
        t[t.Sign = 1] = "Sign", t[t.Off = 2] = "Off"
    }(k || (k = {})),
    function (t) {
        t[t.Pass = 1] = "Pass", t[t.Gold = 5] = "Gold", t[t.Daimond = 6] = "Daimond", t[t.Patch = 7] = "Patch", t[t.Talent = 8] = "Talent"
    }(D || (D = {})),
    function (t) {
        t[t.Free = 1] = "Free", t[t.Td = 2] = "Td", t[t.Try = 3] = "Try"
    }(E || (E = {})),
    function (t) {
        t[t.Base = 0] = "Base", t[t.Line = 1] = "Line", t[t.Loop = 2] = "Loop", t[t.Boss = 3] = "Boss", t[t.Bron = 4] = "Bron"
    }(P || (P = {})),
    function (t) {
        t[t.Pass = 0] = "Pass", t[t.Blood = 1] = "Blood", t[t.Stand = 2] = "Stand", t[t.Time = 3] = "Time"
    }(N || (N = {})),
    function (t) {
        t[t.Stand = 0] = "Stand", t[t.One = 1] = "One", t[t.Two = 2] = "Two", t[t.Three = 3] = "Three", t[t.Four = 4] = "Four", t[t.Five = 5] = "Five", t[t.Six = 6] = "Six", t[t.Seven = 7] = "Seven", t[t.Boss = 9] = "Boss", t[t.Gold = 11] = "Gold", t[t.Daimond = 12] = "Daimond"
    }(M || (M = {})),
    function (t) {
        t[t.Base = 0] = "Base", t[t.Clear = 1] = "Clear", t[t.Out = 2] = "Out"
    }(F || (F = {})),
    function (t) {
        t[t.None = 0] = "None", t[t.Free = 1] = "Free", t[t.Daimond = 2] = "Daimond", t[t.DaimondAd = 3] = "DaimondAd", t[t.Video = 4] = "Video", t[t.Gold = 5] = "Gold", t[t.GoldAd = 6] = "GoldAd"
    }(V || (V = {}));
    class R {
        constructor(t) {
            t && (this.id = t.id)
        }
        static GetJson(t, e) {
            let i = t.jsName,
                s = R._cacheData[i];
            void 0 === s && (s = new Object, R._cacheData[i] = s);
            let n = s[e];
            if (null != n) return n;
            let a = zi.GetJson(i);
            if (a) {
                let i = a[e];
                try {
                    i = new t(i)
                } catch (t) {}
                return s[e] = i, i
            }
        }
    }
    R._cacheData = {};
    class U extends R {
        constructor(t) {
            super(t), this.atk1 = 0, this.atk5 = 0, this.atk10 = 0, this.magic1 = 0, this.magic5 = 0, this.magic10 = 0, this.atkSpeed1 = 0, this.atkSpeed5 = 0, this.atkSpeed10 = 0, this.range1 = 0, this.range5 = 0, this.range10 = 0, this.heroMove1 = 0, this.heroMove5 = 0, this.heroMove10 = 0, this.job = t.job, this.quality = t.quality, this.hurtType = t.hurtType, this.skin = t.skin, this.name = t.name, this.skillName = t.skillName, this.skillDesc = t.skillDesc, this.specialDesc = t.specialDesc, this.hitRange = t.hitRange, this.blood = t.blood, this.atk = t.atk, this.magic = t.magic, this.bulletInterval = t.bulletInterval, this.move = t.move, this.skill = t.skill, t.add1 && 5 == t.add1.length && ([this.atk1, this.magic1, this.atkSpeed1, this.range1, this.heroMove1] = t.add1), t.add5 && 5 == t.add5.length && ([this.atk5, this.magic5, this.atkSpeed5, this.range5, this.heroMove5] = t.add5), t.add10 && 5 == t.add10.length && ([this.atk10, this.magic10, this.atkSpeed10, this.range10, this.heroMove10] = t.add10)
        }
        getSkillId(t) {
            return this.skill[t]
        }
        static Init() {
            if (!U._saves) {
                U._saves = {};
                let t = zi.GetJson(U.jsName);
                for (let e in t) {
                    let t = R.GetJson(U, parseInt(e));
                    U._saves[t.id] = t
                }
            }
        }
        static GetCfg(t) {
            return U.Init(), U._saves[t]
        }
        static GetDict() {
            return U.Init(), U._saves
        }
        static GetDictForOpen(t = null, e = null) {
            U.Init();
            let i = [];
            for (let t in U._saves) {
                let s = U._saves[t];
                null !== e && e != s.quality || i.push(s)
            }
            return i
        }
        static rangeVal(t, e) {
            let i = U.GetCfg(t),
                s = i.hitRange;
            return s += i.range1 * e, s += i.range5 * Math.floor(e / 5), s += i.range10 * Math.floor(e / 10)
        }
        static atkVal(t, e) {
            let i = U.GetCfg(t),
                s = i.atk;
            return s += i.atk1 * e, s += i.atk5 * Math.floor(e / 5), s += i.atk10 * Math.floor(e / 10)
        }
        static magicVal(t, e) {
            let i = U.GetCfg(t),
                s = i.magic;
            return s += i.magic1 * e, s += i.magic5 * Math.floor(e / 5), s += i.magic10 * Math.floor(e / 10)
        }
        static atkSpeedVal(t, e) {
            let i = U.GetCfg(t),
                s = i.bulletInterval;
            return s += i.atkSpeed1 * e, s += i.atkSpeed5 * Math.floor(e / 5), s += i.atkSpeed10 * Math.floor(e / 10)
        }
        static moveVal(t, e) {
            let i = U.GetCfg(t),
                s = i.hitRange;
            return s += i.heroMove1 * e, s += i.heroMove5 * Math.floor(e / 5), s += i.heroMove10 * Math.floor(e / 10)
        }
    }
    U.jsName = "heros";
    class H extends R {
        constructor(t) {
            super(t), this.skin = t.skin, this.quality = t.quality, this.move = t.move, this.def = t.def, this.slow = t.slow, this.drop = t.drop, this.name = t.name, [this.desc, this.remark] = t.desc, [this.waitMin, this.waitMax, this.step] = t.other, this.bloodPow = t.blood
        }
        static Init() {
            if (!H._saves) {
                H._saves = {};
                let t = zi.GetJson(H.jsName);
                for (let e in t) {
                    let t = R.GetJson(H, parseInt(e));
                    H._saves[t.id] = t
                }
            }
        }
        static GetCfg(t) {
            return H.Init(), H._saves[t]
        }
        static GetDict() {
            return H.Init(), H._saves
        }
    }
    H.standBody = {
        0: [0, 0],
        1: [0, 0],
        2: [0, 1],
        3: [1, 0],
        4: [1, 1]
    }, H.jsName = "enemy";
    class $ extends R {
        constructor(t) {
            super(t), this.num = t.num, this.enemyIds = t.enemyIds
        }
        static Init() {
            if (!$._saves) {
                $._saves = {};
                let t = zi.GetJson($.jsName);
                for (let e in t) {
                    let t = R.GetJson($, parseInt(e));
                    $._saves[t.id] = t
                }
            }
        }
        static GetCfg(t) {
            return $.Init(), $._saves[t]
        }
        static GetDict() {
            return $.Init(), $._saves
        }
    }
    $.jsName = "lot";
    class j {
        constructor(t, e, i, s, n, a, l, o) {
            let r = H.GetCfg(t);
            this.monsterId = t, this.quality = r.quality, this.num = e, this.blood = i, this.waitMin = s, this.waitMax = n, this.step = a, this.line = l, this.atkDef = r.def, this.info = o
        }
    }
    class q extends R {
        constructor(t) {
            super(t), this.bossId = null, this.monsterList1 = [], this.monsterList2 = [], this.monsterList3 = [], this.monsterList4 = [], this.monsterList5 = [], this.monsterList6 = [], this.monsterList7 = [], this.monsterList8 = [], this.monsterList9 = [], this.monsterList10 = [], this.monsterList11 = [], this.monsterList12 = [], this.monsterList13 = [], this.monsterList14 = [], this.monsterList15 = [], this.monsterList16 = [], this.monsterList17 = [], this.monsterList18 = [], this.monsterList19 = [], this.monsterList20 = [], this.passType = t.passType, this.playType = t.playType < 0 ? P.Loop : t.playType, this.playTime = this.playType == P.Loop ? Math.abs(t.playType) : null, this.starType = t.starType < 0 ? N.Time : t.starType, this.starTime = this.starType == N.Time ? Math.abs(t.starType) : 0, this.starJob = t.starJob, this.starNum = t.starNum, this.lvChapter = t.lvChapter, this.lvPass = t.lvPass, this.mapNo = t.mapNo, this.speed = t.speed, this.help = Math.floor(t.help / 100), this.helper = t.help % 100, this.blood = t.blood, this.bronBlood = t.bron, this.initGold = t.initGold, this.standBlood = t.standBlood, this.standGold = t.standGold, this.bloodSet = t.bloodSet, this.bossSet = t.bossSet;
            for (let e = 1; e <= 20; e++)
                if (t[`enemy${e}`] && t[`enemy${e}`].length > 0) {
                    let [i, s] = t[`enemy${e}`], n = $.GetCfg(i), a = 0, l = 0;
                    for (let t in n.enemyIds) {
                        let [e, i] = n.enemyIds[t];
                        l += H.GetCfg(e).bloodPow * i
                    }
                    for (let t in n.enemyIds) {
                        let [e, i] = n.enemyIds[t], o = H.GetCfg(e);
                        if (o.quality == M.Gold) {
                            a += Math.floor(o.bloodPow / l * s) * i
                        }
                    }
                    for (let t in n.enemyIds) {
                        let [i, o] = n.enemyIds[t], r = H.GetCfg(i), h = Math.floor(r.bloodPow / l * s), d = null, u = e - 1;
                        if (this.bossSet && this.bossSet[u]) switch (this.passType) {
                            case D.Gold:
                                if (r.quality == M.Gold) {
                                    let [t] = this.bossSet[u];
                                    d = [t, a]
                                }
                                break;
                            case D.Daimond:
                                if (r.quality == M.Daimond) {
                                    let [t] = this.bossSet[u];
                                    d = [t]
                                }
                        }
                        this[`monsterList${e}`].push(new j(i, o, h, r.waitMin, r.waitMax, r.step, null, d))
                    }
                    if (this.passType == D.Pass && this.playType == P.Boss) {
                        if (1 == e) {
                            let t = [];
                            for (let e in this.bossSet) {
                                let [i, s] = this.bossSet[e];
                                t.unshift([i, s])
                            }
                            for (; t.length > 0;) {
                                let [i, s] = t.pop(), n = H.GetCfg(i);
                                n && (this.bossId = i, this[`monsterList${e}`].unshift(new j(i, 1, s, n.waitMin, n.waitMax, n.step, null, null)))
                            }
                        }
                    } else if (e % 5 == 0) {
                        let t = Math.ceil(e / 5) - 1;
                        if (this.bossSet && this.bossSet[t]) {
                            let [i, s] = this.bossSet[t];
                            if (i && s) {
                                let t = H.GetCfg(i);
                                t && (this.bossId = i, this[`monsterList${e}`].push(new j(i, 1, s, t.waitMin, t.waitMax, t.step, null, null)))
                            }
                        }
                    }
                } if (Qi.IsDev() && 0 == t.id) {
                this.blood = 5e3, this.monsterList1 = [];
                let t = H.GetDict(),
                    e = [800, 1e3, 1200, 1200, 1500, 1900];
                for (let i in t) {
                    let s = t[i];
                    if (-1 == [11, 12].indexOf(s.quality) && 0 != s.quality) {
                        let t = s.waitMin,
                            i = s.waitMax,
                            n = e[Math.floor(Math.random() * e.length)];
                        t = n, i = n, this.monsterList1.push(new j(s.id, 5, 372800, t, i, s.step, null, null))
                    }
                }
            }
        }
        static Init() {
            if (!q._saves) {
                q._saves = {}, q._list = {};
                let t = zi.GetJson(q.jsName);
                for (let e in t) {
                    let t = R.GetJson(q, parseInt(e)),
                        i = t.passType,
                        s = t.lvChapter,
                        n = t.lvPass;
                    q._saves[i] || (q._saves[i] = {}), q._saves[i][s] || (q._saves[i][s] = {}), q._saves[i][s][n] = t, q._list[t.id] = t
                }
            }
        }
        static GetMaxChapter(t) {
            q.Init();
            let e = null,
                i = q._saves[t];
            for (let t in i) {
                let i = parseInt(t);
                (null === e || i > e) && (e = i)
            }
            return e
        }
        static GetChapterList(t) {
            q.Init();
            let e = [],
                i = q._saves[t];
            for (let t in i) {
                let i = parseInt(t);
                e.push(i)
            }
            return e
        }
        static RndOneFb(t) {
            q.Init();
            let e = [],
                i = q._saves[t];
            for (let t in i) {
                let s = i[t];
                for (let t in s) {
                    let i = s[t];
                    e.push(i.id)
                }
            }
            return e[Math.floor(Math.random() * e.length)]
        }
        static GetPassList(t, e) {
            q.Init();
            let i = [],
                s = q._saves[t][e];
            for (let t in s) {
                let e = s[t];
                i.push(e)
            }
            return i
        }
        static GetPassNum(t, e) {
            return q.GetPassList(t, e).length
        }
        static GetPassCfg(t, e, i) {
            if (q.Init(), !t) return;
            if (!e) return;
            if (!i) return;
            return q._saves[t][e][i]
        }
        static GetCfg(t) {
            return q.Init(), q._list[t]
        }
    }
    q.jsName = "passLv";
    class W {
        constructor(t) {
            this.type = t.type, this.chapt = t.chapter, this.bg = t.bg, this.path = t.path, this.data = t.mapData, this.waitType = t.waitType, this.waitTime = t.waitTime, this.lineSet = t.lineSet
        }
        static Init() {
            if (!W._saves) {
                W._saves = {};
                let t = zi.GetJson(W.jsName);
                for (let e in t) {
                    let i = t[e];
                    for (let t in i) {
                        let s = i[t],
                            n = new W(s);
                        W._saves[e] || (W._saves[e] = {}), W._saves[e][t] || (W._saves[e][t] = {}), W._saves[e][t] = n
                    }
                }
            }
        }
        static MapInfo(t, e) {
            return W.Init(), W._saves[t][e]
        }
        static MapStoneNum(t, e) {
            let i = 0,
                s = W.MapInfo(t, e).data;
            for (let t in s) {
                s[t][0] == m.stand && i++
            }
            return i
        }
    }
    W.jsName = "map";
    class Y {
        static Init() {
            let t = a.Four;
            t && (Y.Plat = t), Y.saveNum = 18, Y.SaveDelay = 9e4, Y.WsHost = Y.Set[Y.Plat].wsHost,
				Y.ApiUrl = Y.Set[Y.Plat].apiHost + "Api/",
				Y.Html = Y.Set[Y.Plat].apiHost + "Html/",
				Y.Cash = Y.Set[Y.Plat].apiHost + "Cash/",
				Y.VideoOpen = Y.Set[Y.Plat].adOpen,
				Y.VerStr = Y.Set[Y.Plat].verDir,
				Y.VerUrl = Y.Set[Y.Plat].resHost + Y.VerStr + "/",
				Y.WxAppId = Y.Set[Y.Plat].wxAppId ? Y.Set[Y.Plat].wxAppId : "",
				Y.ResUrl = Y.Set[Y.Plat].resHost + Y.Set[Y.Plat].resDir + "/",
				Y.TrustLocal = Y.Set[Y.Plat].trustLocal,
			Qi.IsFour() && (Y.ResUrl = "")
        }
        static InitDo(t) {
            if (Qi.IsFour()) return Y.VideoOpen = !0, Y.AutoAgree = !0,
				Y.Teach = "Go to the alchemist as soon as possible to maximize the benefits of gold farming|Upgrade soldiers in the battle, the battle force will be improved|After passing chapter 2, you can receive diamond benefits at the exchange interface|Pay attention to the characteristics of soldiers, reasonable lineup collocation|Slow down mages, which help area attack minions increase damage output|Keep an eye out for range changes as soldiers upgrade".split("|"),
				Y.Notice = [], void(Y.Solider = "Archer: the range of attack is the longest among first rank soldiers|Darts: The attack speed is the fastest|Female knife: A high damage attack with a chance of critical strike|Musketeer: Small group damage|Warlock: Attacks with a slow down effect|Spirit beast: Build gold with probability when attacking|Pay attention to lineup collocation and construction position, organize maximum firepower output|On multiple levels, the musketeer can hit more monsters at the same time|Pick up a fallen sun and get a gold bonus for building it|Tip: if you upgrade a soldier in battle, his combat ability will be improved|Tip: When fighting, select the soldier can view the attack range".split("|"));
            Y.WxBanner = t.data.WxBanner, Y.WxVideo = t.data.WxVideo, Y.WxInsert = t.data.WxInsert, Y.WxBlock = t.data.WxBlock, Y.WxBookSign = t.data.WxBookSign, Y.WxBookOff = t.data.WxBookOff, Y.TxBanner = t.data.TxBanner, Y.TxVideo = t.data.TxVideo, Y.TxInsert = t.data.TxInsert, Y.TxBox = t.data.TxBox, Y.TxBlock = t.data.TxBlock, Y.TxBookSign = t.data.TxBookSign, Y.TxBookOff = t.data.TxBookOff, Y.TtBanner = t.data.TtBanner, Y.TtVideo = t.data.TtVideo, Y.TtInsert = t.data.TtInsert, Y.TtBookSign = t.data.TtBookSign, Y.TtBookOff = t.data.TtBookOff, Y.OppoBanner = t.data.OppoBanner, Y.OppoVideo = t.data.OppoVideo, Y.OppoOpen = t.data.OppoOpen, Y.OppoBox = t.data.OppoBox, Y.VivoBanner = t.data.VivoBanner, Y.VivoVideo = t.data.VivoVideo, Y.XminBanner = t.data.XminBanner, Y.XminVideo = t.data.XminVideo, Y.ApkVideo = t.data.ApkVideo, Y.ApkBanner = t.data.ApkBanner, Y.ApkFull = t.data.ApkFull, Y.ApkInsert = t.data.ApkInsert, Y.ApkNative = t.data.ApkNative, Y.ApkOpenMedia = t.data.ApkOpenMedia, Y.ApkOpenAppId = t.data.ApkOpenAppId, Y.ApkOpenCode = t.data.ApkOpenCode, Y.ApkOpenSource = t.data.ApkOpenSource, Y.ApkTaUserId = t.data.ApkTaUserId, Y.ApkTaAdId = t.data.ApkTaAdId, Y.IosVideo = t.data.IosVideo, Y.IosBanner = t.data.IosBanner, Y.IosFull = t.data.IosFull, Y.IosInsert = t.data.IosInsert, Y.IosNative = t.data.IosNative, Y.IosOpenMedia = t.data.IosOpenMedia, Y.IosOpenAppId = t.data.IosOpenAppId, Y.IosOpenCode = t.data.IosOpenCode, Y.IosOpenSource = t.data.IosOpenSource, Y.IosTaUserId = t.data.IosTaUserId, Y.IosTaAdId = t.data.IosTaAdId, Y.AppIdList = t.other.dev,
				Y.Teach = t.data.Teach.split("|"), Y.Notice = t.data.Notice.split("|"), Y.Solider = t.data.Solider.split("|"), Y.Flash = t.data.Flash;
            let e = "",
                [i, s, n, l, o, r, h, d, u, c, p] = ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"];
            if (t.data.QqOpen) {
                let a = t.data.QqOpen;
                [i, s, n, l, o, r, h, d, u, c, p] = a.split("|"), e = t.data.QqNo
            }
            let [f, g, m, y, I, b, S, T, _, v, L] = ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"];
            if (t.data.Agree) {
                let e = t.data.Agree;
                [f, g, m, y, I, b, S, T, _, v, L] = e.split("|")
            }
            switch (Y.isApkReg = "1" === t.data.Reg, Y.Plat) {
                case a.Dev:
                    Y.QqNo = e && "1" === i ? e : "", Y.AutoAgree = "1" === f;
                    break;
                case a.Right:
                    Y.QqNo = e && "1" === p ? e : "", Y.AutoAgree = "1" === L, Y.VideoOpen = !0;
                    break;
                case a.Apk1:
                    Y.QqNo = e && "1" === n ? e : "", Y.AutoAgree = "1" === m, Y.VideoOpen = !!Y.ApkVideo;
                    break;
                case a.Ios:
                    Y.QqNo = e && "1" === l ? e : "", Y.AutoAgree = "1" === y, Y.VideoOpen = !!Y.IosVideo;
                    break;
                case a.Wx:
                    Y.QqNo = e && "1" === o ? e : "", Y.AutoAgree = "1" === I, Y.VideoOpen = !!Y.WxVideo, Y.AppIdList = t.other.wx;
                    break;
                case a.Tx:
                    Y.QqNo = e && "1" === r ? e : "", Y.AutoAgree = "1" === b, Y.VideoOpen = !!Y.TxVideo, Y.AppIdList = t.other.tx;
                    break;
                case a.Tt:
                    Y.QqNo = e && "1" === h ? e : "", Y.AutoAgree = "1" === S, Y.VideoOpen = !!Y.TtVideo, Y.AppIdList = t.other.tt;
                    break;
                case a.Oppo:
                    Y.QqNo = e && "1" === d ? e : "", Y.AutoAgree = "1" === T, Y.VideoOpen = !!Y.OppoVideo
            }
        }
    }
    Y.AppIdList = null, Y.Game = "010", Y.verDir = "011", Y.resDir = "011", Y.Plat = a.Dev, Y.__webSocket = "ws://127.0.0.1:11000/",
		Y.__api_Dev = "http://192.168.31.179/Ten/", Y.__res_Dev = "http://192.168.31.179/Game/Ten/", Y.api_Url = "https://api.h5happy.com/Ten/",
		Y.cdx_Url = "https://cdx.h5happy.com/Ten/",
		Y.Set = {
        Dev1: {
            trustLocal: !1,
            wsHost: Y.__webSocket,
            apiHost: Y.__api_Dev,
            resHost: Y.__res_Dev,
            verDir: "assets",
            resDir: "assets",
            adOpen: !0
        },
        Oppo: {
            trustLocal: !1,
            wsHost: Y.__webSocket,
            apiHost: Y.api_Url,
            resHost: Y.cdx_Url,
            verDir: Y.verDir,
            resDir: Y.resDir,
            adOpen: !0
        },
        Four: {
            trustLocal: !0,
            wsHost: Y.__webSocket,
            apiHost: Y.api_Url,
            resHost: Y.cdx_Url,
            verDir: Y.verDir,
            resDir: Y.resDir,
            adOpen: !0
        },
        Lin1: {
            trustLocal: !1,
            wsHost: Y.__webSocket,
            apiHost: Y.api_Url,
            resHost: Y.cdx_Url,
            verDir: Y.verDir,
            resDir: Y.resDir,
            adOpen: !1
        },
        Apk1: {
            trustLocal: !1,
            wsHost: Y.__webSocket,
            apiHost: Y.api_Url,
            resHost: Y.cdx_Url,
            verDir: Y.verDir,
            resDir: Y.resDir,
            adOpen: !0
        },
        Apk2: {
            trustLocal: !1,
            wsHost: Y.__webSocket,
            apiHost: Y.api_Url,
            resHost: Y.cdx_Url,
            verDir: Y.verDir,
            resDir: Y.resDir,
            adOpen: !1
        },
        Ios1: {
            trustLocal: !1,
            wsHost: Y.__webSocket,
            apiHost: Y.api_Url,
            resHost: Y.cdx_Url,
            verDir: Y.verDir,
            resDir: Y.resDir,
            adOpen: !1
        },
        Wx_1: {
            trustLocal: !1,
            wsHost: Y.__webSocket,
            apiHost: Y.api_Url,
            resHost: Y.cdx_Url,
            verDir: Y.verDir,
            resDir: Y.resDir,
            adOpen: !0
        },
        Tx_1: {
            trustLocal: !1,
            wsHost: Y.__webSocket,
            apiHost: Y.api_Url,
            resHost: Y.cdx_Url,
            verDir: Y.verDir,
            resDir: Y.resDir,
            adOpen: !0
        },
        Tt_1: {
            trustLocal: !1,
            wsHost: Y.__webSocket,
            apiHost: Y.api_Url,
            resHost: Y.cdx_Url,
            verDir: Y.verDir,
            resDir: Y.resDir,
            adOpen: !0
        },
        Opp1: {
            trustLocal: !1,
            wsHost: Y.__webSocket,
            apiHost: Y.api_Url,
            resHost: Y.cdx_Url,
            verDir: Y.verDir,
            resDir: Y.resDir,
            adOpen: !0
        },
        XMin: {
            trustLocal: !1,
            wsHost: Y.__webSocket,
            apiHost: Y.__api_Dev,
            resHost: Y.__res_Dev,
            verDir: "assets",
            resDir: "assets",
            adOpen: !0
        },
        Viv1: {
            trustLocal: !1,
            wsHost: Y.__webSocket,
            apiHost: Y.__api_Dev,
            resHost: Y.__res_Dev,
            verDir: "assets",
            resDir: "assets",
            adOpen: !0
        }
    };
    class K extends Laya.EventDispatcher {
        constructor() {
            super()
        }
        static Evt(t, e) {
            K._one.event(t, e)
        }
        static Init() {
            K._one = new K
        }
        static Off(t, e, i) {
            K._one.off(t, e, i)
        }
        static On(t, e, i, s) {
            K._one.on(t, e, i, s)
        }
    }
    class X {
        constructor(t) {
            this.wid = t.wid, this.centX = t.x, this.centY = t.y
        }
        static Init() {
            if (!X._saves) {
                X._saves = {};
                let t = zi.GetJson(X.jsName);
                for (let e in t) {
                    let i = t[e];
                    for (let t in i) {
                        let s = i[t],
                            n = new X(s);
                        X._saves[e] || (X._saves[e] = {}), X._saves[e][t] = n
                    }
                }
            }
        }
        static CenterInfo(t, e) {
            if (X.Init(), X._saves[t] && X._saves[t][e]) return X._saves[t][e]
        }
        static InitPivot(t, e, i) {
            let s = X.CenterInfo(e, i);
            return s && s.centX && s.centY ? (t.pivotX = s.centX, t.pivotY = s.centY) : t.pivot(t.width / 2, t.height / 2), s
        }
        static RepairsoliderC16(t, e, i, s, n) {
            "images/man/soliderC16_1.png" == t.skin ? t.pos(e + s, i + n) : t.pos(e, i)
        }
    }
    X.jsName = "imgCenter";
    class J extends R {
        constructor(t) {
            super(t), this.type = t.type, this.name = t.name, this.title = t.title, this.iconSkin = t.iconSkin, this.getItem = t.getItem, this.getNum = t.getNum, this.coldWait = t.coldWait, this.needDiamond = t.needDiamond, this.needVideo = t.needVideo, this.other = t.other
        }
        static Init() {
            if (!J._saves) {
                J._saves = {};
                let t = zi.GetJson(J.jsName);
                for (let e in t) {
                    let t = R.GetJson(J, parseInt(e));
                    J._saves[t.id] = t
                }
            }
        }
        static GetCfg(t) {
            return J.Init(), J._saves[t]
        }
        static GetDict() {
            return J.Init(), J._saves
        }
    }
    J.jsName = "shop";
    class Q extends R {
        constructor(t) {
            super(t), this.globalKey = t.globalKey, this.val = t.val
        }
        static Init() {
            if (!Q._saves) {
                Q._saves = {};
                let t = zi.GetJson(Q.jsName);
                for (let e in t) {
                    let t = R.GetJson(Q, parseInt(e));
                    Q._saves[t.globalKey] = t.val
                }
            }
        }
        static GetVal(t, e = null) {
            Q.Init();
            let i = null;
            return Q._saves && Q._saves[t] ? (i = Q._saves[t], "string" == typeof e ? i += "" : "number" == typeof e && (i = parseInt(i + "")), i) : null !== e ? e : void 0
        }
    }
    Q.jsName = "global";
    class z extends R {
        constructor(t) {
            super(t), this.type = t.type, this.act = t.act, this.isLocal = 1 === t.inPkg;
            let e = "";
            e = this.isLocal ? "music/" + t.soundFile : Y.ResUrl ? Y.ResUrl + "music/" + t.soundFile : "music/" + t.soundFile, this.fName = e, this.vol = t.val
        }
        static Init() {
            if (!z._saves) {
                z._saves = {};
                let t = zi.GetJson(z.jsName);
                for (let e in t) {
                    let t = R.GetJson(z, parseInt(e));
                    z._saves[t.act] || (z._saves[t.act] = []), z._saves[t.act].push(t)
                }
            }
        }
        static GetSound(t, e = null) {
            z.Init();
            let i = z._saves[t];
            if (i) {
                if (null !== e)
                    for (let t in i) {
                        let s = i[t];
                        if (s.fName == e) return s
                    }
                return i[Math.floor(i.length * Math.random())]
            }
        }
        static GetDict() {
            return z.Init(), z._saves
        }
    }
    z.jsName = "sound";
    class Z {
        static Init() {
            Z.resDict = {}, Z.backLoop = null, Z.frontLoop = {}, Z.frontOnce = {}, console.log("MusicMgr.Init")
        }
        static PlayHitLoop() {}
        static ClearTry() {
            Z.tryDict = {}
        }
        static TryHitSound(t, e) {
            if (!t) return;
            if (!Xi.GetSetVal(Xi.setSound)) return;
            let i = Laya.timer.currTimer;
            if (Qi.DictLen(Z.tryDict) >= 5) {
                for (let t in Z.tryDict) {
                    let e = parseInt(t);
                    i - e > 3e3 && delete Z.tryDict[e]
                }
                return
            }
            Z.tryDict[i] = 1;
            let s = Laya.SoundManager.playSound(`hit/${t}.mp3`, 1, Laya.Handler.create(Z, () => {
                delete Z.tryDict[i]
            }, null, !1));
            s && s.volume && (s.volume = e)
        }
        static Play(t, e = 1, i = null, s = null) {
            if (!Xi.GetSetVal(Xi.setSound)) return;
            let n = z.GetSound(t, i);
            n && n.fName && (n.isLocal ? Z.playSound(n, e, s) : Z.resDict[n.fName] ? 2 == Z.resDict[n.fName] && Z.playSound(n, 1, s) : (Z.resDict[n.fName] = 1, Laya.loader.load(n.fName, Laya.Handler.create(this, function () {
                Z.resDict[n.fName] = 2, Z.playSound(n, 1, s)
            }, null, !1), null, Laya.Loader.SOUND)))
        }
        static Stop(t, e = 0) {
            let i, s = z.GetSound(t);
            s.type != v.back && s.type != v.still || (s.type == v.back ? (Z.bgFile = null, i = Z.backLoop) : s.type == v.still && (i = Z.frontLoop[s.act]), i && !i.isStopped && (e ? Laya.Tween.to(i, {
                volume: .2
            }, e, null, Laya.Handler.create(this, function () {
                i.stop()
            }, null, !1)) : i.stop()))
        }
        static FreeBgMusic() {
            Xi.GetSetVal(Xi.setSound) && (Z.Stop(L.backFight), setTimeout(function () {
                Z.Play(L.backMain)
            }, 600))
        }
        static FightBgMusic() {
            Xi.GetSetVal(Xi.setSound) && (Z.Stop(L.backMain), Z.Stop(L.backFight))
        }
        static playSound(t, e = 1, i = null) {
            if (t.fName && Xi.GetSetVal(Xi.setSound)) switch (null === i && (i = t.vol), t.type) {
                case v.back:
                    if (Z.bgFile != t.fName) {
                        if (Li.IsOpen(S.Load)) return;
                        let e = Laya.SoundManager.playSound(t.fName, 0);
                        Z.bgFile = t.fName, Z.backLoop = e, e && e.volume && (e.volume = i)
                    }
                    break;
                case v.still:
                    let s = Laya.SoundManager.playSound(t.fName, 0);
                    Z.frontLoop[t.act] = s, s && s.volume && (s.volume = i);
                    break;
                case v.one:
                    if (t.isLocal) {
                        let s = Laya.SoundManager.playSound(t.fName, e);
                        s && s.volume && (s.volume = i)
                    } else if (!Z.frontOnce[t.fName]) {
                        Z.frontOnce[t.fName] = !0;
                        let e = Laya.SoundManager.playSound(t.fName, 1, Laya.Handler.create(Z, () => {
                            Z.frontOnce[t.fName] = !1
                        }, null, !1));
                        e && e.volume && (e.volume = i)
                    }
            }
        }
    }
    Z.tryDict = {};
    var et, it, st, nt, at, lt, ot, rt, ht, dt, ut, ct, pt = Laya.View,
        ft = Laya.ClassUtils.regClass;
    ! function (t) {
        class e extends pt {
            constructor() {
                super()
            }
            createChildren() {
                super.createChildren(), this.loadScene("agreeView")
            }
        }
        t.agreeViewUI = e, ft("ui.agreeViewUI", e);
        class i extends pt {
            constructor() {
                super()
            }
            createChildren() {
                super.createChildren(), this.loadScene("awardView")
            }
        }
        t.awardViewUI = i, ft("ui.awardViewUI", i);
        class s extends pt {
            constructor() {
                super()
            }
            createChildren() {
                super.createChildren(), this.loadScene("bottomBanner")
            }
        }
        t.bottomBannerUI = s, ft("ui.bottomBannerUI", s);
        class n extends pt {
            constructor() {
                super()
            }
            createChildren() {
                super.createChildren(), this.loadScene("buildView")
            }
        }
        t.buildViewUI = n, ft("ui.buildViewUI", n);
        class a extends pt {
            constructor() {
                super()
            }
            createChildren() {
                super.createChildren(), this.loadScene("chapterBox")
            }
        }
        t.chapterBoxUI = a, ft("ui.chapterBoxUI", a);
        class l extends pt {
            constructor() {
                super()
            }
            createChildren() {
                super.createChildren(), this.loadScene("chapterDot")
            }
        }
        t.chapterDotUI = l, ft("ui.chapterDotUI", l);
        class o extends pt {
            constructor() {
                super()
            }
            createChildren() {
                super.createChildren(), this.loadScene("chapterDrag")
            }
        }
        t.chapterDragUI = o, ft("ui.chapterDragUI", o);
        class r extends pt {
            constructor() {
                super()
            }
            createChildren() {
                super.createChildren(), this.loadScene("chapterMap")
            }
        }
        t.chapterMapUI = r, ft("ui.chapterMapUI", r);
        class h extends pt {
            constructor() {
                super()
            }
            createChildren() {
                super.createChildren(), this.loadScene("countDownView")
            }
        }
        t.countDownViewUI = h, ft("ui.countDownViewUI", h);
        class d extends pt {
            constructor() {
                super()
            }
            createChildren() {
                super.createChildren(), this.loadScene("endView")
            }
        }
        t.endViewUI = d, ft("ui.endViewUI", d);
        class u extends pt {
            constructor() {
                super()
            }
            createChildren() {
                super.createChildren(), this.loadScene("enemyItem")
            }
        }
        t.enemyItemUI = u, ft("ui.enemyItemUI", u);
        class c extends pt {
            constructor() {
                super()
            }
            createChildren() {
                super.createChildren(), this.loadScene("exchangeView")
            }
        }
        t.exchangeViewUI = c, ft("ui.exchangeViewUI", c);
        class p extends pt {
            constructor() {
                super()
            }
            createChildren() {
                super.createChildren(), this.loadScene("exitView")
            }
        }
        t.exitViewUI = p, ft("ui.exitViewUI", p);
        class f extends pt {
            constructor() {
                super()
            }
            createChildren() {
                super.createChildren(), this.loadScene("failView")
            }
        }
        t.failViewUI = f, ft("ui.failViewUI", f);
        class g extends pt {
            constructor() {
                super()
            }
            createChildren() {
                super.createChildren(), this.loadScene("flashView")
            }
        }
        t.flashViewUI = g, ft("ui.flashViewUI", g);
        class m extends pt {
            constructor() {
                super()
            }
            createChildren() {
                super.createChildren(), this.loadScene("guideView")
            }
        }
        t.guideViewUI = m, ft("ui.guideViewUI", m);
        class y extends pt {
            constructor() {
                super()
            }
            createChildren() {
                super.createChildren(), this.loadScene("helpView")
            }
        }
        t.helpViewUI = y, ft("ui.helpViewUI", y);
        class I extends pt {
            constructor() {
                super()
            }
            createChildren() {
                super.createChildren(), this.loadScene("heroBanner")
            }
        }
        t.heroBannerUI = I, ft("ui.heroBannerUI", I);
        class b extends pt {
            constructor() {
                super()
            }
            createChildren() {
                super.createChildren(), this.loadScene("infoView")
            }
        }
        t.infoViewUI = b, ft("ui.infoViewUI", b);
        class S extends pt {
            constructor() {
                super()
            }
            createChildren() {
                super.createChildren(), this.loadScene("item")
            }
        }
        t.itemUI = S, ft("ui.itemUI", S);
        class T extends pt {
            constructor() {
                super()
            }
            createChildren() {
                super.createChildren(), this.loadScene("killI")
            }
        }
        t.killIUI = T, ft("ui.killIUI", T);
        class _ extends pt {
            constructor() {
                super()
            }
            createChildren() {
                super.createChildren(), this.loadScene("killUp")
            }
        }
        t.killUpUI = _, ft("ui.killUpUI", _);
        class v extends pt {
            constructor() {
                super()
            }
            createChildren() {
                super.createChildren(), this.loadScene("killView")
            }
        }
        t.killViewUI = v, ft("ui.killViewUI", v);
        class L extends pt {
            constructor() {
                super()
            }
            createChildren() {
                super.createChildren(), this.loadScene("loadView")
            }
        }
        t.loadViewUI = L, ft("ui.loadViewUI", L);
        class x extends pt {
            constructor() {
                super()
            }
            createChildren() {
                super.createChildren(), this.loadScene("luckyView")
            }
        }
        t.luckyViewUI = x, ft("ui.luckyViewUI", x);
        class C extends pt {
            constructor() {
                super()
            }
            createChildren() {
                super.createChildren(), this.loadScene("mainBanner")
            }
        }
        t.mainBannerUI = C, ft("ui.mainBannerUI", C);
        class B extends pt {
            constructor() {
                super()
            }
            createChildren() {
                super.createChildren(), this.loadScene("onlineView")
            }
        }
        t.onlineViewUI = B, ft("ui.onlineViewUI", B);
        class w extends pt {
            constructor() {
                super()
            }
            createChildren() {
                super.createChildren(), this.loadScene("orderView")
            }
        }
        t.orderViewUI = w, ft("ui.orderViewUI", w);
        class G extends pt {
            constructor() {
                super()
            }
            createChildren() {
                super.createChildren(), this.loadScene("pauseView")
            }
        }
        t.pauseViewUI = G, ft("ui.pauseViewUI", G);
        class O extends pt {
            constructor() {
                super()
            }
            createChildren() {
                super.createChildren(), this.loadScene("picBanner")
            }
        }
        t.picBannerUI = O, ft("ui.picBannerUI", O);
        class A extends pt {
            constructor() {
                super()
            }
            createChildren() {
                super.createChildren(), this.loadScene("picEnemy")
            }
        }
        t.picEnemyUI = A, ft("ui.picEnemyUI", A);
        class k extends pt {
            constructor() {
                super()
            }
            createChildren() {
                super.createChildren(), this.loadScene("picSolider")
            }
        }
        t.picSoliderUI = k, ft("ui.picSoliderUI", k);
        class D extends pt {
            constructor() {
                super()
            }
            createChildren() {
                super.createChildren(), this.loadScene("regMenu")
            }
        }
        t.regMenuUI = D, ft("ui.regMenuUI", D);
        class E extends pt {
            constructor() {
                super()
            }
            createChildren() {
                super.createChildren(), this.loadScene("shopBanner")
            }
        }
        t.shopBannerUI = E, ft("ui.shopBannerUI", E);
        class P extends pt {
            constructor() {
                super()
            }
            createChildren() {
                super.createChildren(), this.loadScene("shopItem1")
            }
        }
        t.shopItem1UI = P, ft("ui.shopItem1UI", P);
        class N extends pt {
            constructor() {
                super()
            }
            createChildren() {
                super.createChildren(), this.loadScene("shopItem2")
            }
        }
        t.shopItem2UI = N, ft("ui.shopItem2UI", N);
        class M extends pt {
            constructor() {
                super()
            }
            createChildren() {
                super.createChildren(), this.loadScene("shopItem3")
            }
        }
        t.shopItem3UI = M, ft("ui.shopItem3UI", M);
        class F extends pt {
            constructor() {
                super()
            }
            createChildren() {
                super.createChildren(), this.loadScene("shopItem4")
            }
        }
        t.shopItem4UI = F, ft("ui.shopItem4UI", F);
        class V extends pt {
            constructor() {
                super()
            }
            createChildren() {
                super.createChildren(), this.loadScene("sign")
            }
        }
        t.signUI = V, ft("ui.signUI", V);
        class R extends pt {
            constructor() {
                super()
            }
            createChildren() {
                super.createChildren(), this.loadScene("signView")
            }
        }
        t.signViewUI = R, ft("ui.signViewUI", R);
        class U extends pt {
            constructor() {
                super()
            }
            createChildren() {
                super.createChildren(), this.loadScene("soliderDescView")
            }
        }
        t.soliderDescViewUI = U, ft("ui.soliderDescViewUI", U);
        class H extends pt {
            constructor() {
                super()
            }
            createChildren() {
                super.createChildren(), this.loadScene("soliderInfoView")
            }
        }
        t.soliderInfoViewUI = H, ft("ui.soliderInfoViewUI", H);
        class $ extends pt {
            constructor() {
                super()
            }
            createChildren() {
                super.createChildren(), this.loadScene("soliderNewView")
            }
        }
        t.soliderNewViewUI = $, ft("ui.soliderNewViewUI", $);
        class j extends pt {
            constructor() {
                super()
            }
            createChildren() {
                super.createChildren(), this.loadScene("soliderOper")
            }
        }
        t.soliderOperUI = j, ft("ui.soliderOperUI", j);
        class q extends pt {
            constructor() {
                super()
            }
            createChildren() {
                super.createChildren(), this.loadScene("soliderSiteBanner")
            }
        }
        t.soliderSiteBannerUI = q, ft("ui.soliderSiteBannerUI", q);
        class W extends pt {
            constructor() {
                super()
            }
            createChildren() {
                super.createChildren(), this.loadScene("soliderTeamItem")
            }
        }
        t.soliderTeamItemUI = W, ft("ui.soliderTeamItemUI", W);
        class Y extends pt {
            constructor() {
                super()
            }
            createChildren() {
                super.createChildren(), this.loadScene("soliderUpItem")
            }
        }
        t.soliderUpItemUI = Y, ft("ui.soliderUpItemUI", Y);
        class K extends pt {
            constructor() {
                super()
            }
            createChildren() {
                super.createChildren(), this.loadScene("starDescView")
            }
        }
        t.starDescViewUI = K, ft("ui.starDescViewUI", K);
        class X extends pt {
            constructor() {
                super()
            }
            createChildren() {
                super.createChildren(), this.loadScene("stopView")
            }
        }
        t.stopViewUI = X, ft("ui.stopViewUI", X);
        class J extends pt {
            constructor() {
                super()
            }
            createChildren() {
                super.createChildren(), this.loadScene("talentBanner")
            }
        }
        t.talentBannerUI = J, ft("ui.talentBannerUI", J);
        class Q extends pt {
            constructor() {
                super()
            }
            createChildren() {
                super.createChildren(), this.loadScene("talentItem")
            }
        }
        t.talentItemUI = Q, ft("ui.talentItemUI", Q);
        class z extends pt {
            constructor() {
                super()
            }
            createChildren() {
                super.createChildren(), this.loadScene("unlockView")
            }
        }
        t.unlockViewUI = z, ft("ui.unlockViewUI", z);
        class Z extends pt {
            constructor() {
                super()
            }
            createChildren() {
                super.createChildren(), this.loadScene("videoView")
            }
        }
        t.videoViewUI = Z, ft("ui.videoViewUI", Z);
        class tt extends pt {
            constructor() {
                super()
            }
            createChildren() {
                super.createChildren(), this.loadScene("weaponAutoItem")
            }
        }
        t.weaponAutoItemUI = tt, ft("ui.weaponAutoItemUI", tt);
        class et extends pt {
            constructor() {
                super()
            }
            createChildren() {
                super.createChildren(), this.loadScene("weaponAutoView")
            }
        }
        t.weaponAutoViewUI = et, ft("ui.weaponAutoViewUI", et);
        class it extends pt {
            constructor() {
                super()
            }
            createChildren() {
                super.createChildren(), this.loadScene("weaponBagItem")
            }
        }
        t.weaponBagItemUI = it, ft("ui.weaponBagItemUI", it);
        class st extends pt {
            constructor() {
                super()
            }
            createChildren() {
                super.createChildren(), this.loadScene("weaponBagView")
            }
        }
        t.weaponBagViewUI = st, ft("ui.weaponBagViewUI", st);
        class nt extends pt {
            constructor() {
                super()
            }
            createChildren() {
                super.createChildren(), this.loadScene("weaponDevItem")
            }
        }
        t.weaponDevItemUI = nt, ft("ui.weaponDevItemUI", nt);
        class at extends pt {
            constructor() {
                super()
            }
            createChildren() {
                super.createChildren(), this.loadScene("weaponInfoView")
            }
        }
        t.weaponInfoViewUI = at, ft("ui.weaponInfoViewUI", at);
        class lt extends pt {
            constructor() {
                super()
            }
            createChildren() {
                super.createChildren(), this.loadScene("weaponPutItem")
            }
        }
        t.weaponPutItemUI = lt, ft("ui.weaponPutItemUI", lt);
        class ot extends pt {
            constructor() {
                super()
            }
            createChildren() {
                super.createChildren(), this.loadScene("weaponPutView")
            }
        }
        t.weaponPutViewUI = ot, ft("ui.weaponPutViewUI", ot);
        class rt extends pt {
            constructor() {
                super()
            }
            createChildren() {
                super.createChildren(), this.loadScene("winView")
            }
        }
        t.winViewUI = rt, ft("ui.winViewUI", rt)
    }(et || (et = {}));
    class gt extends et.videoViewUI {
        constructor() {
            super(), this.isInit = !1
        }
        createChildren() {
            super.createChildren(), this.on("onViewCreated", this, this.onComplete)
        }
        onComplete() {
            this.initMenu()
        }
        initData(t) {
            this.adSite = t[0], this.adParam = t[1], this.initMenu()
        }
        Open() {
			Plat.I.ShowInter()
            this.initMenu(), K.On(e.VIDEO_FINISH, this, this.onClose), K.On(e.VIDEO_HALF, this, this.onClose), K.On(e.VIDEO_ERROR, this, this.onClose)
        }
        Close() {
            K.Off(e.VIDEO_FINISH, this, this.onClose), K.Off(e.VIDEO_HALF, this, this.onClose), K.Off(e.VIDEO_ERROR, this, this.onClose), this.adSite = null, this.adParam = null
        }
        onClose() {
            Li.Close(S.Video)
        }
        initMenu() {
            this.pngBg && this.adSite && (this.isInit || (this.isInit = !0, Li.ScreenFull(this), Qi.IsDev() ? (K.Evt(e.VIDEO_LOAD, [this.adSite]), setTimeout(function () {
                K.Evt(e.VIDEO_LOOK, [this.adSite])
            }.bind(this), 400),
				Li.BtnTap(this, this.btnAdFinish, this.onBtnAdFinish),
				Li.BtnTap(this, this.btnAdHalf, this.onBtnAdHalf),
				Li.BtnTap(this, this.btnAdError, this.onBtnAdError),
				Li.BtnTap(this, this.pngBg, this.onBtnClose))
				: (this.pngBg.alpha = .2, this.btnBox.visible = !1, Vi.VideoAdPlay(null, this.adSite, this.adParam))))
        }
        onBtnAdFinish() {
            K.Evt(e.VIDEO_FINISH, [this.adSite, this.adParam]), this.onClose()
        }
        onBtnAdHalf() {
            Pi.FlyTxt("No reward"), K.Evt(e.VIDEO_HALF, [this.adSite]), this.onClose()
        }
        onBtnAdError() {
            Pi.FlyTxt("Video pull failed"), K.Evt(e.VIDEO_ERROR, [this.adSite]), this.onClose()
        }
        onBtnClose() {
            Li.Close(S.Video)
        }
    }
    class mt {
        static get topX() {
            return .5 * (Laya.stage.width - mt.mapWidth)
        }
        static get topY() {
            return .6 * (Laya.stage.height - mt.mapHeight)
        }
        static Init() {
            mt.MapLayer = new Laya.Box, mt.MapLayer.size(Laya.stage.width, Laya.stage.height), mt.FloorLayer = new Laya.Image, mt.FloorLayer.anchorX = .5, mt.FloorLayer.anchorY = .5, mt.FloorLayer.pos(.5 * mt.MapLayer.width, .5 * mt.MapLayer.height), mt.MapLayer.addChild(mt.FloorLayer), mt.BoxLayer = new Laya.Box, mt.BoxLayer.size(mt.mapWidth, mt.mapHeight), mt.BoxLayer.pos(mt.topX, mt.topY), mt.MapLayer.addChild(mt.BoxLayer)
        }
        static GetLayer() {
            return mt.MapLayer
        }
        static GetBoxPos(t) {
            let e = t % mt.Cels,
                i = Math.floor(t / mt.Cels),
                s = e * mt.boxW + .5 * mt.boxW,
                n = i * mt.boxW + .5 * mt.boxW;
            return new Laya.Point(s, n)
        }
        static PosToBoxNo(t, e) {
            let i = Math.floor(t % 700 / mt.boxW);
            return 7 * Math.floor(e / 100) + i
        }
        static ClearMap() {
            mt.ClearMapStone(), mt.BoxLayer.removeChildren(), qi.GetLayer(ut.Fly).removeChildren()
        }
        static ClearMapStone() {
            mt.mapStoneNo = []
        }
        static defaultMapStone() {
            for (let t = 0; t <= 6; t++) mt.mapStoneNo.push(t);
            for (let t = 77; t <= 84; t++) mt.mapStoneNo.push(t)
        }
        static AddMapStone(t, e) {
            let i = mt.PosToBoxNo(t, e);
            mt.mapStoneNo.push(i)
        }
        static TryTapStone(t, e) {
            if (!mt.mapStoneNo) return !1;
            let i = mt.PosToBoxNo(t, e);
            return -1 != mt.mapStoneNo.indexOf(i)
        }
        static GetMapStone() {
            return mt.mapStoneNo
        }
        static InitBg(t = E.Td, e, i, s) {
            let n = q.GetPassCfg(e, i, s),
                a = W.MapInfo(t, n.mapNo);
            mt.mapBg = a.bg, mt.FloorLayer.skin = `images/obj/mapBg_${mt.mapBg}.png`;
            let l = mt.FloorLayer.width,
                o = mt.FloorLayer.height;
            l / o > Laya.stage.width / Laya.stage.height ? (mt.FloorLayer.height = Laya.stage.height, mt.FloorLayer.width = l * Laya.stage.height / o) : (mt.FloorLayer.width = Laya.stage.width, mt.FloorLayer.height = o * Laya.stage.width / l);
            let r = Y.ResUrl + `images/mapBg/mapBg_${mt.mapBg}.png`;
            Laya.loader.load(r, Laya.Handler.create(this, function (t = null) {
                mt.FloorLayer.skin = r;
                let e = t.width,
                    i = t.height;
                e / i > Laya.stage.width / Laya.stage.height ? (mt.FloorLayer.height = Laya.stage.height, mt.FloorLayer.width = e * Laya.stage.height / i) : (mt.FloorLayer.width = Laya.stage.width, mt.FloorLayer.height = i * Laya.stage.width / e), null !== mt._oldBg && mt._oldBg != r && Laya.Loader.clearRes(mt._oldBg), mt._oldBg = r
            }))
        }
        static GetCurrMapCfg() {
            let t = mt.mapLv,
                e = qi.lvChapter;
            return q.GetPassCfg(qi.passType, e, t)
        }
        static BloodOnHurt() {
            let t = mt.BoxLayer.getChildByName("itemEnd");
            if (!t) return;
            let e = t.getChildByName("bloodItem");
            if (!e) return;
            Hi.SmallBigLoop(e, 160, .94, 1.08, 1), Hi.FlashEffect(t, 100, 100);
            let i = qi.GetLayer(ut.Fly).getChildByName("itemFly");
            i && Hi.FlashEffect(i, 100, 100)
        }
        static IsJumpBox(t, e, i) {
            if (!mt.jumpBoxList[t]) return null;
            let s = mt.PosToBoxNo(e, i),
                n = mt.jumpBoxList[t].indexOf(s);
            return -1 == n ? null : n % 2 == 0 || null
        }
        static InitMap(t, e, i, s) {
            mt.ClearMap(), mt.jumpBoxList = {}, mt.mapLv = s, mt.InitBg(t, e, i, s);
            let n = q.GetPassCfg(e, i, s),
                a = W.MapInfo(t, n.mapNo).data,
                l = 0;
            for (let t in a) {
                if (a[t][0] == m.stand) {
                    let e = a[t][1];
                    l += H.GetCfg(e).drop
                }
            }
            let o = [],
                r = [];
            for (let t in m) {
                let e = m[t];
                for (let t in a) {
                    let i = a[t][0];
                    if (i !== e) continue;
                    let s, h = m[i],
                        d = a[t][1],
                        u = a[t][2],
                        c = a[t][3];
                    if (m.field == parseInt(e) && (h += mt.mapBg), -1 == [m.stand, m.point, m.stone].indexOf(parseInt(e))) {
                        let t = 1,
                            i = 1;
                        if (m.field == parseInt(e)) {
                            if (-1 != [31, 32, 33, 34, 41, 42, 43, 44].indexOf(d)) {
                                let t = mt.PosToBoxNo(u, c);
                                r.push(t)
                            }
                            let e = {
                                33: 34,
                                51: 52,
                                53: 54,
                                55: 56,
                                41: 42,
                                43: 44
                            };
                            t = e[d] ? -1 : 1;
                            let s = {
                                31: 32
                            };
                            i = s[d = e[d] ? e[d] : d] ? -1 : 1, d = s[d] ? s[d] : d
                        }
                        s = new Laya.Image("images/mapItem/" + h + "_" + d + ".png"), X.InitPivot(s, "mapItem", h + "_" + d), s.pos(u, c), s.scale(t, i)
                    }
                    switch (parseInt(e)) {
                        case m.stand:
                            let t = u % 100 >= 50 ? 1 : -1,
                                i = c % 100 >= 50 ? 1 : -1,
                                a = Math.floor(c / 100),
                                r = Math.floor(u / 100),
                                p = Math.floor(d % 1e3 / 100),
                                [f, g] = H.standBody[p];
                            u = (100 * r + 100 * (r + f * t)) / 2 + 50, c = (100 * a + 100 * (a + g * i)) / 2 + 50;
                            let y = d,
                                I = H.GetCfg(y),
                                b = Math.floor(n.standBlood * I.bloodPow / 100),
                                S = Math.round(n.standGold / l * I.drop);
                            1001 == y && (b = n.bronBlood, Ui.RefreshStand(y, 1)), qi.AddEnemy(y, b, 0, u, c, null, null, 0, 0, 0, null, null, S);
                            break;
                        case m.field:
                            "B" == mt.mapBg ? (s.height = 102, 31 == d || 32 == d && (s.y += 1)) : s.height = 100, mt.AddMapStone(u, c), o.push(new Laya.Point(u, c)), mt.BoxLayer.addChild(s);
                            break;
                        case m.point:
                            break;
                        case m.begin:
                            mt.AddMapStone(u, c), s.name = "itemBegin", mt.BoxLayer.addChild(s);
                            break;
                        case m.end:
                            mt.AddMapStone(u, c), s.name = "itemEnd", mt.BoxLayer.addChild(s);
                            let T = X.CenterInfo("mapItem", h + "_" + d),
                                _ = new Laya.Image("images/mapItem/bloodBg.png");
                            _.name = "bloodItem", X.InitPivot(_, "mapItem", "bloodBg"), s.addChild(_), _.pos(T.centX, T.centY);
                            let v = new Laya.Label("");
                            v.bold = !0, v.fontSize = 24, v.color = "#ffffff", v.strokeColor = "#000000", v.stroke = 1, v.size(52, 42), v.align = "center", v.valign = "middle", _.addChild(v), mt.bloodLab = v;
                            break;
                        case m.fly:
                            s.name = "itemFly", qi.GetLayer(ut.Fly).addChild(s);
                            break;
                        case m.stone:
                            if (mt.AddMapStone(u, c), 0 == d) break;
                        case m.grass:
                        case m.other:
                        default:
                            mt.BoxLayer.addChild(s)
                    }
                }
            }
            mt.defaultMapStone();
            for (let t in qi.monsterPath) {
                let e = parseInt(t);
                for (let t in qi.monsterPath[e]) {
                    let i = qi.monsterPath[e][t]; - 1 != r.indexOf(i) && (mt.jumpBoxList[e] || (mt.jumpBoxList[e] = []), mt.jumpBoxList[e].push(i))
                }
            }
            return [o]
        }
        static Update(t) {
            mt.bloodLab && (mt.bloodLab.text = qi.blood + "");
            let e = mt.BoxLayer.getChildByName("itemBegin"),
                i = mt.BoxLayer.getChildByName("itemEnd"),
                s = qi.GetLayer(ut.Fly).getChildByName("itemFly");
            e && i && s && (null === mt.upT && (mt.upT = 3200, Hi.SmallBigLoop(e, 3e3, 1, 1.09, 1, null), Hi.SmallBigLoop(s, 3e3, 1.02, .97, 1, null), Hi.UpDownLoop(s, 5, 1600, 5, 1400)), mt.upT -= t, mt.upT <= 0 && (mt.upT = null))
        }
        static MapSquart() {
            if (mt.squartIng) return !1;
            mt.squartIng = !0;
            let t = [
                [-6, -4, .0045, .0031],
                [4, -5, .004, .0028],
                [5, 7, .0034, .003],
                [-6, 5, .0037, .0025]
            ];
            t.sort(function () {
                return .5 - Math.random()
            });
            return mt.MapLayer.scale(1.02, 1.02), mt.MapLayer.pos(-4, -4), Laya.Tween.to(mt.MapLayer, {
                x: -4 + t[0][0],
                y: -4 + t[0][1],
                scaleX: 1.02 + t[0][2],
                scaleY: 1.02 + t[0][3]
            }, 42, null, Laya.Handler.create(this, () => {
                Laya.Tween.to(mt.MapLayer, {
                    x: -4 + t[1][0],
                    y: -4 + t[1][1],
                    scaleX: 1.02 + t[1][2],
                    scaleY: 1.02 + t[1][3]
                }, 42, null, Laya.Handler.create(this, () => {
                    Laya.Tween.to(mt.MapLayer, {
                        x: -4 + t[2][0],
                        y: -4 + t[2][1],
                        scaleX: 1.02 + t[2][2],
                        scaleY: 1.02 + t[2][3]
                    }, 42, null, Laya.Handler.create(this, () => {
                        Laya.Tween.to(mt.MapLayer, {
                            x: -4 + t[3][0],
                            y: -4 + t[3][1],
                            scaleX: 1.02 + t[3][2],
                            scaleY: 1.02 + t[3][3]
                        }, 42, null, Laya.Handler.create(this, () => {
                            mt.MapLayer.scale(1, 1), mt.MapLayer.pos(0, 0), mt.squartIng = !1
                        }))
                    }))
                }))
            })), !0
        }
    }
    mt.boxW = 100, mt.Cels = 7, mt.mapWidth = 700, mt.mapHeight = 1200, mt._oldBg = null, mt.mapBg = null, mt.upT = null, mt.bloodLab = null, mt.squartIng = !1;
    class yt extends R {
        constructor(t) {
            super(t), this.itemNo = t.itemNo, this.type = t.type, this.imgId = t.imgId ? t.imgId : t.itemNo, this.title = t.title, this.quality = t.quality, this.upTo = t.upTo, this.max = t.max, this.closeVideo = !!t.close, this.drop = t.drop, this.rndOut = t.rndOut, this.autoOpen = !!t.auto, this.stillTime = t.still, this.heroOut = t.heroOut
        }
        static Init() {
            if (!yt._saves) {
                yt._saves = {};
                let t = zi.GetJson(yt.jsName);
                for (let e in t) {
                    let t = R.GetJson(yt, parseInt(e));
                    yt._saves[t.itemNo] = t
                }
            }
        }
        static GetDict() {
            return yt.Init(), yt._saves
        }
        static GetCfg(t) {
            return yt.Init(), yt._saves[t]
        }
    }
    yt.jsName = "goods";
    class It {}
    It.MaxHeroNum = 5, It.BossQtVal = 9, It.BuffId50 = 50, It.Card100 = 100, It.Box500 = 500, It.Weapon600 = 600, It.Stone800 = 800, It.SignRound = 7, It.helpDaimond = 50,
		It.QColor = {
        1: "#ffffff",
        2: "#9aff63",
        3: "#3baaff",
        4: "#f33bff",
        5: "#fffd3b",
        9: "#fffd3b"
    }, It.QTxt = {
        1: "general",
        2: "rare",
        3: "elite",
        4: "epic",
        5: "legend",
        9: "legend"
    }, It.HeroMaxLv = {
        1: 10,
        2: 25,
        3: 50,
        4: 100,
        5: 150
    }, It.HeroActPatch = {
        1: 5,
        2: 10,
        3: 15,
        4: 20,
        5: 30
    }, It.HeroQtPatch = {
        1: 5,
        2: 10,
        3: 25,
        4: 50,
        5: null
    }, It.HeroQtGoldBase = {
        1: 100,
        2: 200,
        3: 300,
        4: 400,
        5: 500
    }, It.HeroQtGoldAdd = {
        1: 20,
        2: 30,
        3: 50,
        4: 75,
        5: 100
    }, It.JobTxt = {
        0: "全部",
        1: "射手",
        2: "火枪",
        3: "战士",
        4: "刺客",
        5: "法师",
        6: "图腾",
        7: "炼金"
    }, It.TypeTxt = {
        1: "物理",
        2: "魔法"
    }, It.WeaponType = {
        4: "防具",
        5: "武器",
        6: "帽子",
        7: "符石"
    }, It.HurtTxt = {
        0: "单体",
        1: "直线",
        2: "溅射",
        3: "范围",
        4: "灼烧",
        5: "击晕"
    }, It.SpineStTO = {
        move: "move",
        wait: "idle",
        attack: "attack",
        happy: "celebrate"
    };
    class bt extends R {
        constructor(t) {
            super(t), this.maxLv = t.maxLv, this.actPatch = t.actPatch, this.upPatch = t.upPatch, this.baseGold = t.baseGold, this.upGold = t.upGold, this.diamond5 = t.diamond5, this.patchNum = t.patchNum, this.patchPrice = t.patchPrice, this.patchOpen = t.patchOpen, this.soliderOpen = t.soliderOpen, this.patchRnd = t.patchRnd, this.soliderRnd = t.soliderRnd, this.beyond5 = t.beyond5, this.beyond10 = t.beyond10, this.beyondMin = t.beyondMin
        }
        static Init() {
            if (!bt._saves) {
                bt._saves = {};
                let t = zi.GetJson(bt.jsName);
                for (let e in t) {
                    let t = R.GetJson(bt, parseInt(e));
                    bt._saves[t.id] = t
                }
            }
        }
        static GetCfg(t) {
            return bt.Init(), bt._saves[t]
        }
        static GetDict() {
            return bt.Init(), bt._saves
        }
        static patchOpenQtList(t) {
            let e = [],
                i = bt.GetDict();
            for (let s in i) {
                let n = i[s];
                n.patchOpen <= t && e.push(n.id)
            }
            return e
        }
        static soliderOpenQtList(t) {
            let e = [],
                i = bt.GetDict();
            for (let s in i) {
                let n = i[s];
                n.soliderOpen <= t && e.push(n.id)
            }
            return e
        }
    }
    bt.jsName = "soliderUp";
    class St extends R {
        constructor(t) {
            super(t), this.must = 1 == t.must, this.ord = t.ord, this.delay = t.delay, this.handX = t.pos[0], this.handY = t.pos[1], this.talkX = t.pos[2], this.talkY = t.pos[3], this.girlX = t.pos[4], this.talk = t.talk, this.fly = t.fly;
            let [e, i, s] = t.type.split(".");
            switch (this.shape = t.shape, this.uiType = e, this.btnName = s, this.uiNameNo = 0, e) {
                case "Banner":
                    this.uiNameNo = parseInt(b[i]);
                    break;
                case "Menu":
                    this.uiNameNo = parseInt(S[i]);
                    break;
                case "Hero":
                    this.uiName = i;
                    break;
                case "Map":
                case "Build":
                case "Upstar":
                case "Stone":
                case "Break":
                case "Finish":
                    break;
                default:
                    return void Pi.FlyTxt("GuideCfg.error:" + this.id)
            }
        }
        static Init() {
            if (!St._saves) {
                St._saves = {}, St._sum = 0, St._sort = [];
                let t = zi.GetJson(St.jsName),
                    e = [];
                for (let i in t) {
                    let s = t[i].id,
                        n = t[i].ord;
                    e.push({
                        id: s,
                        ord: n
                    })
                }
                e = Qi.ArrSort(e, "ord", !0);
                for (let t in e) {
                    let i = e[t].id;
                    St._sort.push(i);
                    let s = R.GetJson(St, parseInt(i));
                    St._saves[s.id] = s, St._sum++
                }
            }
        }
        static GetTalk(t) {
            return St.Init(), St._saves[t]
        }
        static GetSortTalk() {
            return St.Init(), St._sort
        }
        static GetDict() {
            return St.Init(), St._saves
        }
        static GetSum() {
            return St.Init(), St._sum
        }
    }
    St.jsName = "Talk";
    class Tt extends R {
        constructor(t) {
            super(t), [this.itemId, this.num] = t.gift[0];
            let e = t.giftType;
            Qi.IsWx() || Qi.IsTx() || e === A.Two && (e = A.Three), this.name = t.name, this.type = e, this.chapter = t.chapter, this.icon = Math.abs(t.icon), this.isRemote = t.icon < 0, this.starNum = t.starNum, this.giftSet = [];
            for (let e in t.giftSet) {
                let [i, s] = t.giftSet[e];
                this.giftSet.push({
                    itemId: i,
                    itemNum: s
                })
            }
            this.passStar = t.passStar
        }
        static Init() {
            if (!Tt._saves) {
                Tt._saves = {};
                let t = zi.GetJson(Tt.jsName);
                for (let e in t) {
                    let t = R.GetJson(Tt, parseInt(e));
                    Tt._saves[t.id] = t
                }
            }
        }
        static GetCfg(t) {
            return Tt.Init(), Tt._saves[t]
        }
        static GetDict() {
            return Tt.Init(), Tt._saves
        }
    }
    Tt.jsName = "chapterAward";
    class _t extends et.chapterDragUI {
        constructor() {
            super(), this.pivot(242, 205)
        }
        createChildren() {
            super.createChildren(), this.on("onViewCreated", this, this.onComplete)
        }
        onComplete() {
            this.refreshItem()
        }
        setItem(t, e) {
            this.chapterId = t, this.chapterPos = e, this.refreshItem()
        }
        refreshItem() {
            if (!this.imgChapter) return;
            if (this.visible = !1, !this.chapterId) return;
            this.visible = !0, Li.BtnTap(this, this.imgChapter, this.onTapChapter);
            let t = this.chapterId,
                e = Tt.GetCfg(t);
            if (this.imgChapter.skin = `images/chapterMap/icon_zj_${e.icon}.png`, e.isRemote) {
                let t = Y.ResUrl + `images/mapIcon/icon_zj_${e.icon}.png`;
                Laya.loader.load(t, Laya.Handler.create(this, function (e = null) {
                    this.imgChapter.skin = t
                }))
            }
            this.labChapter.text = e.name;
            let i = qi.ChapterStar(D.Pass, this.chapterId),
                s = q.GetPassNum(D.Pass, this.chapterId);
            this.labPass.text = `${i}/${3*s}`, this.bannerChapter.visible = 1 == this.chapterPos, this.bannerChapter.alpha = 1;
            let n = qi.CurrentChapter(D.Pass);
            this.imgChapter.gray = this.chapterId >= n + 1
        }
        onTapChapter() {
            if (1 == this.scaleX || .56 == this.scaleX) 
				switch (this.chapterPos) {
                case 0:
                    K.Evt(e.TAP_CHAPTER_CHANGE, -1);
                    break;
                case 1:
					Plat.I.HideFloat();
                    Li.Open(S.ChapterMap, this.chapterId);
                    break;
                case 2:
                    let t = 0,
                        i = this.chapterId - 1,
                        s = q.GetPassList(D.Pass, i);
                    for (let e in s) {
                        let n = s[e],
                            a = qi.GetStar(D.Pass, i, n.lvPass);
                        if (t += a, !a) return void Pi.FlyTxt("Clear all levels in this chapter before moving on to the next")
                    }
                    let n = Tt.GetCfg(i);
                    if (t < n.passStar) return void Pi.FlyTxt(`${n.passStar} star is required for progression to the next chapter`);
                    K.Evt(e.TAP_CHAPTER_CHANGE, 1)
            }
        }
        moveIn() {
            null !== this.chapterId && (this.bannerChapter.visible = !0, this.bannerChapter.alpha = 0, Laya.Tween.to(this.bannerChapter, {
                alpha: 1
            }, 400))
        }
        moveOut() {
            null !== this.chapterId && (this.bannerChapter.alpha = 1, Laya.Tween.to(this.bannerChapter, {
                alpha: 0
            }, 400, null, Laya.Handler.create(this, function () {
                this.bannerChapter.visible = !1
            }.bind(this))))
        }
    }
    class vt extends R {
        constructor(t) {
            super(t), this.openLevel = t.openLv, this.guideLevel = t.guideLv, this.openHour = t.openHour
        }
        static Init() {
            if (!vt._saves) {
                vt._saves = {};
                let t = zi.GetJson(vt.jsName);
                for (let e in t) {
                    let t = R.GetJson(vt, parseInt(e));
                    vt._saves[t.id] = t
                }
            }
        }
        static GetCfg(t) {
            return vt.Init(), vt._saves[t]
        }
    }
    vt.jsName = "OpenUp";
    class Lt {
        static Init() {}
        static CanOpen(t) {
            let e = vt.GetCfg(t);
            return !!e && !(Yi.Avatar.passLv < e.openLevel)
        }
        static CanGuide(t) {
            let e = vt.GetCfg(t);
            return !!e && (!!e.guideLevel && !(Yi.Avatar.passLv < e.guideLevel))
        }
    }
    class xt {
        static flashCost(t) {
            return 5
        }
        static Init() {
            if (xt.initFlash(xi.offSec), K.On(e.ONLINE_SEC, xt, xt.onSec), K.On(e.VIDEO_FINISH, xt, xt.flashVideoDone), Y.Flash) {
                let [t, e, i, s, n] = Y.Flash.split(",");
                xt.flashMax = parseInt(t), xt.flashSec = parseInt(e), xt.flashMore = parseInt(i), xt.flashDaimondCost = parseInt(s), xt.flashVideoAdd = parseInt(n)
            }
        }
        static initFlash(t) {
            let e = Yi.Avatar;
            if (!(e.flashV >= xt.flashMax))
                if (null === e.flashT && (e.flashT = xt.flashSec), e.flashT > t) e.flashT -= t;
                else {
                    for (t -= e.flashT, e.flashT = 0, e.flashV++; t >= xt.flashSec;) {
                        if (e.flashV >= xt.flashMax) return e.flashV = xt.flashMax, void(e.flashT = null);
                        t -= xt.flashSec, e.flashV++
                    }
                    e.flashT = xt.flashSec - t
                }
        }
        static onSec() {
            let t = Yi.Avatar;
            if (t.flashV >= xt.flashMax) return t.flashV = xt.flashMax, void(t.flashT = null);
            null !== t.flashT ? --t.flashT < 0 && (t.flashT = xt.flashSec, t.flashV++) : t.flashT = xt.flashSec
        }
        static CostFlash(i, s, n) {
            let a = qi.GetStar(i, s, n),
                l = xt.flashCost(s);
            a >= 3 && (l += xt.flashMore);
            let o = Yi.Avatar;
            return o.flashV < l ? (Qi.IsRight() && o.passLv >= 6 && o.video >= 2 ? Vi.VideoAdPlay(null, t.FlashAdd, null) : (Li.Open(S.Flash), Pi.FlyTxt("Lack of energy", !1, "#FF4E4A")), !1) : (o.flashV -= l, K.Evt(e.FLASH_VAL_REFRESH), !0)
        }
        static CostBack(t) {
            let e = Yi.Avatar;
            e.flashV += 3 == t ? xt.threeBack : xt.flashBack, e.flashV > xt.flashMax && (e.flashV = xt.flashMax)
        }
        static BuyFlash() {
            Le.CostMoneyByVal(d.diamond, xt.flashDaimondCost);
            let t = Yi.Avatar;
            t.flashV += xt.flashDaimondAdd, t.flashV > xt.flashMax && (t.flashV = xt.flashMax), Pi.FlyDrop([
                [d.flash, 8]
            ], null, null, null, null, null, 8), K.Evt(e.FLASH_VAL_REFRESH)
        }
        static flashVideoDone(i) {
            if (i != t.FlashAdd) return;
            let s = Yi.Avatar;
            s.flashV += xt.flashVideoAdd, s.flashV > xt.flashMax && (s.flashV = xt.flashMax), Li.IsOpen(S.Order) || Li.IsOpen(S.Exit) || Li.IsOpen(S.GameEndFail) || Pi.FlyDrop([
                [d.flash, 8]
            ], null, null, null, null, null, 8), K.Evt(e.FLASH_VAL_REFRESH)
        }
        static DayRefresh() {
            let t = Yi.Avatar;
            t.flashV = xt.flashMax, t.flashT = null, K.Evt(e.FLASH_VAL_REFRESH)
        }
    }
    xt.flashMax = 50, xt.flashSec = 180, xt.flashMore = 3, xt.flashBack = 0, xt.threeBack = 0, xt.flashDaimondCost = 400, xt.flashDaimondAdd = 50, xt.flashVideoAdd = 20;
    class Ct {
        constructor(t, e = null) {
            if (t) {
                let e = t;
                this.realName = e.realName ? e.realName : "", this.idCard = e.idCard ? e.idCard : "", this.agree = e.agree ? e.agree : 0, this.fights = e.fights ? e.fights : 0, this.exp = e.exp ? e.exp : 0, this.soul = e.soul ? e.soul : 0, this._soul = e._soul ? e._soul : 0, this.beyondNum = e.beyondNum ? e.beyondNum : 0, this.expOnT = e.expOnT ? e.expOnT : 0, this.userName = e.userName ? e.userName : "", this.lastDay = e.lastDay ? e.lastDay : "", this.lastTime = e.lastTime ? e.lastTime : 0, this.saveS = e.saveS ? e.saveS : 0, this.sumMin = e.sumMin ? e.sumMin : 0, this.sumDay = e.sumDay ? e.sumDay : 0, this.daySec = e.daySec ? e.daySec : 0, this.onSec = e.onSec ? e.onSec : 0, this.onStep = e.onStep ? e.onStep : 0, this.video = e.video ? e.video : 0, this.diamond = e.diamond ? e.diamond : 0, this.gold = e.gold ? e.gold : 0, this.patch = e.patch ? e.patch : 0, this.money = e.money ? e.money : 0, this.talent = e.talent ? e.talent : 0, this.itemDict = Ct.repairDict(e.itemDict), this.buffDict = Ct.repairDict(e.buffDict), this.buffNum = Ct.repairDict(e.buffNum), this.killDict = Ct.repairDict(e.killDict), this.weaponList = e.weaponList, this.weaponDict = Ct.repairDict(e.weaponDict), this.teamNum = e.teamNum, this.teamOn = e.teamOn ? e.teamOn : 0, this.soliderList = [], this.soliderGroup = Ct.repairDict(e.soliderGroup), this.soliderDict = Ct.repairDict(e.soliderDict), this.soliderNew = Ct.repairDict(e.soliderNew), this.soliderPatch = Ct.repairDict(e.soliderPatch), this.soliderBeyond = Ct.repairDict(e.soliderBeyond), this.heroDict = Ct.repairDict(e.heroDict), this.heroPatch = Ct.repairDict(e.heroPatch), this.heroLucky = e.heroLucky ? e.heroLucky : 0, this.heroDay = e.heroDay ? e.heroDay : 0, this.talentDict = Ct.repairDict(e.talentDict), this.passLv = e.passLv ? e.passLv : 1, this.luckyHour = e.luckyHour ? e.luckyHour : "", this.luckyNum = e.luckyNum ? e.luckyNum : 0, this.luckySum = e.luckySum ? e.luckySum : 0, this.luckyLoop = e.luckyLoop ? e.luckyLoop : 0, this.signDay = e.signDay ? e.signDay : "", this.signSum = e.signSum ? e.signSum : 0, this.recDay = e.recDay ? e.recDay : "", this.relive = e.relive ? e.relive : 0, this.guideD = Ct.repairDict(e.guideD), this.passStar = Ct.repairDict(e.passStar), this.passAward = Ct.repairDict(e.passAward), this.passGift = Ct.repairDict(e.passGift), this.initLog = e.initLog ? e.initLog : "", this.quickDict = Ct.repairDict(e.quickDict), this.shopDict = Ct.repairDict(e.shopDict), this.shopPatch = null === e.shopPatch ? null : Ct.repairDict(e.shopPatch), this.fbLast = e.fbLast, this.flashV = e.flashV ? e.flashV : 0, this.flashT = e.flashT ? e.flashT : xt.flashSec, this.exchange = e.exchange ? e.exchange : [];
                for (let t in this.soliderDict) {
                    let e = parseInt(t);
                    Wi.GetCfg(e) || delete this.soliderDict[t]
                }
                for (let t in this.soliderGroup)
                    for (let e in this.soliderGroup[t]) {
                        let i = this.soliderGroup[t][e];
                        if (!Wi.GetCfg(i)) {
                            let i = parseInt(e);
                            this.soliderGroup[t].splice(i, 1)
                        }
                    }
            } else e && (ke.isCreateAvatar = !0, this.realName = "", this.idCard = "", this.agree = 0, this.fights = 0, this.exp = Q.GetVal("initExpVal", 0), this.soul = Q.GetVal("initSoulVal", 800), this._soul = Q.GetVal("initSoulGet", 200), this.beyondNum = 0, this.expOnT = 6e4 * Q.GetVal("initExpGetMinVal", 10), this.userName = e, this.lastDay = "", this.lastTime = 0, this.saveS = 0, this.sumMin = 0, this.sumDay = 0, this.daySec = 0, this.onSec = 0, this.onStep = 0, this.video = 0, this.diamond = Q.GetVal("initDiamondVal", 0), this.gold = Q.GetVal("initGoldVal", 0), this.patch = 0, this.money = 0, this.talent = 5, this.itemDict = {}, this.buffDict = {}, this.buffNum = {}, this.killDict = {}, this.weaponList = [], this.weaponDict = {}, this.teamNum = 1, this.teamOn = 0, this.soliderList = [], this.soliderGroup = {
                0: [1, 22, 14]
            }, this.soliderPatch = {
                6: 15,
                22: 7
            }, this.soliderBeyond = {}, this.soliderNew = {}, this.soliderDict = {
                1: 1,
                22: 1,
                14: 1
            }, this.heroDict = {
                1: 1
            }, this.heroPatch = {}, this.heroLucky = 0, this.heroDay = 0, this.talentDict = {}, this.passLv = 1, this.luckyHour = "", this.luckyNum = 0, this.luckySum = 0, this.luckyLoop = 0, this.signDay = "", this.signSum = 0, this.recDay = "", this.relive = 0, this.guideD = {}, this.passStar = {}, this.passAward = {}, this.passGift = {}, this.quickDict = {}, this.shopDict = {}, this.shopPatch = null, this.fbLast = [null, null, null, null], this.flashV = xt.flashMax, this.flashT = xt.flashSec, this.exchange = [], this.initLog = "")
        }
        get dayMin() {
            return this.daySec ? Math.floor(this.daySec / 60) : 0
        }
        static repairDict(t) {
            if (t) {
                if (t instanceof Array) {
                    let e = {};
                    for (let i in t) null !== t[i] && (e[i] = t[i]);
                    return e
                }
                return t
            }
            return {}
        }
    }
    class Bt {
        static WebLogin() {
            if (Xi.LoadLocalAvatar()) {
                let t = Yi.Avatar.userName;
                Y.TrustLocal ? Xi.SaveApi(!0, Pt.cbFunSucc, "") : Xi.LoadForUser(t, function (t) {
                    Yi.Avatar = new Ct(t.data), Ft.AvatarDay(), Pt.cbFunSucc && Pt.cbFunSucc()
                }, null)
            } else Xi.WebCreatePlayer(t => {
                let e = t.data;
                Yi.Avatar = new Ct(null, e), Ft.AvatarDay(), Xi.SaveApi(!0, Pt.cbFunSucc, "")
            })
        }
    }
    class wt {
        static Init() {
            Qi.Log("OppoApp.Init.0"), Qi.IsOppo() && (Qi.Log("OppoApp.Init.1"), qg && qg.setKeepScreenOn && (Qi.Log("OppoApp.Init.2"), qg.setKeepScreenOn({
                keepScreenOn: !0,
                success: function (t) {},
                fail: function () {},
                complete: function () {}
            })))
        }
        static OppoLogin() {
            Qi.IsOppo() && qg && qg.login && qg.login({
                success: function (t) {
                    if (Qi.Log("OppoLogin.success", t), t.data && t.data.token) {
                        let e = t.data.token;
                        Xi.LoginOppo(e, Pt.LoginSuccCb)
                    } else;
                },
                fail: function (t) {},
                complete: function () {}
            })
        }
        static ShowBann() {
            if (Qi.IsOppo() && Y.OppoBanner && qg && qg.createBannerAd)
                if (wt.bann) wt.bann.show();
                else {
                    let t = 120,
                        e = qg.getSystemInfoSync();
                    wt.bann = qg.createBannerAd({
                        adUnitId: Y.OppoBanner,
                        style: {
                            left: 0,
                            top: e.windowHeight - t,
                            width: e.windowWidth,
                            height: t
                        }
                    }), wt.bann.onError((t, e) => {}), wt.bann.onLoad(() => {}), wt.bann.onResize(function (t) {
                        if (t && 0 == t.code) {
                            let e = {
                                    left: 0,
                                    top: 0,
                                    width: 700,
                                    height: t.height
                                },
                                i = qg.getSystemInfoSync();
                            e.top = i.windowHeight - t.height, e.width = i.windowWidth, wt.bann.style = e
                        }
                    })
                }
        }
        static HideBann() {
            Qi.IsOppo() && Y.OppoBanner && qg && qg.createBannerAd && wt.bann && wt.bann.hide()
        }
        static videoInit(t, i = !0) {
            Qi.IsOppo() && qg && qg.createRewardedVideoAd && (wt.vLoading = 0, wt.vObj && (wt.vObj.offError(null), wt.vObj.offClose(null), wt.vObj.offLoad(null)), wt.vObj = qg.createRewardedVideoAd({
                adUnitId: t
            }), wt.vObj.onClose(t => {
                wt.vLoading = 0, void 0 === t || t && t.isEnded ? K.Evt(e.VIDEO_FINISH, [wt.videoSite, wt.adParam]) : (K.Evt(e.VIDEO_HALF, [wt.videoSite]),
					Pi.FlyTxt("No reward [Unfinished video]"))
            }), wt.vObj.onError(t => {
                wt.vLoading = 0
            }), wt.vObj.onLoad(() => {}))
        }
        static VideoPlay(t, i, s = null) {
            Qi.IsOppo() && (wt.vLoading + 24e3 > Laya.timer.currTimer || (wt.videoSite = i, wt.adParam = s, wt.videoInit(t, !1), wt.vLoading = Laya.timer.currTimer, K.Evt(e.VIDEO_LOAD, [i]), wt.vObj.load().then(() => {
                K.Evt(e.VIDEO_LOOK, [i]), wt.vObj.show().then(() => {}).catch(t => {
                    wt.vLoading = 0, K.Evt(e.VIDEO_ERROR, [i])
                })
            }).catch(t => {
                wt.vLoading = 0, Pi.FlyTxt("Video pull failed"), Qi.Log("视频拉取失败", t), K.Evt(e.VIDEO_ERROR, [i])
            })))
        }
        static AddIcon() {
            Qi.IsOppo() && qg && qg.hasShortcutInstalled && qg && qg.installShortcut && qg.hasShortcutInstalled({
                success: function (t) {
                    if (0 == t) {
                        if (wt.tryIcon++ % 7 != 3) return;
                        qg.installShortcut({
                            success: function () {},
                            fail: function (t) {},
                            complete: function () {}
                        })
                    }
                },
                fail: function (t) {},
                complete: function () {}
            })
        }
        static ShowBlock() {
            Qi.IsOppo() && Y.OppoBox && qg && qg.createGameBannerAd && (wt.blockObj || (wt.blockObj = qg.createGameBannerAd({
                adUnitId: Y.OppoBox + ""
            }), wt.blockObj.style = {
                top: 1140,
                left: 30
            }), wt.blockObj.show())
        }
        static HideBlock() {
            Qi.IsOppo() && Y.OppoBox && qg && qg.createGameBannerAd && wt.blockObj && wt.blockObj.hide()
        }
    }
    wt.vLoading = 0, wt.tryIcon = 0;
    class Gt {
        static Init() {
            Qi.IsVivo() && qg && qg.setKeepScreenOn && qg.setKeepScreenOn({
                keepScreenOn: !0,
                success: function () {},
                fail: function () {},
                complete: function () {}
            })
        }
        static VivoLogin() {
            Qi.Log("VivoLogin.begin"), Qi.IsVivo() && qg && qg.login && (Qi.Log("VivoLogin.call"), qg.login({
                success: function (t) {
                    if (Qi.Log("VivoLogin.success", t), t.data && t.data.token) {
                        let e = t.data.token;
                        Xi.LoginVivo(e, Pt.LoginSuccCb)
                    } else;
                },
                fail: function (t) {
                    Qi.Log("VivoLogin.fail", t)
                },
                complete: function () {
                    Qi.Log("VivoLogin.complete")
                }
            }))
        }
        static ShowBann() {
            if (Qi.IsVivo() && Y.VivoBanner && qg && qg.createBannerAd) {
                if (!Gt.bannerObj) {
                    let t = 120,
                        e = qg.getSystemInfoSync();
                    Gt.bannerObj = qg.createBannerAd({
                        adUnitId: Y.VivoBanner,
                        style: {
                            left: 0,
                            top: e.windowHeight - t,
                            width: e.windowWidth,
                            height: t
                        }
                    })
                }
                Gt.bannerObj.onResize(function (t) {
                    if (t && 0 == t.code) {
                        let e = {
                                left: 0,
                                top: 0,
                                width: 700,
                                height: t.height
                            },
                            i = qg.getSystemInfoSync();
                        e.top = i.windowHeight - t.height, e.width = i.windowWidth, Gt.bannerObj.style = e
                    }
                }), setTimeout(() => {
                    Gt.bannerObj && Gt.bannerObj.show()
                }, 880)
            }
        }
        static HideBann() {
            Qi.IsVivo() && Y.VivoBanner && qg && qg.createBannerAd && Gt.bannerObj && (Gt.bannerObj.hide(), Gt.bannerObj.destroy(), Gt.bannerObj = null)
        }
        static VideoAdInit(t, i = !0) {
            Qi.IsVivo() && qg && qg.createRewardedVideoAd && (Gt.loading = 0, Gt.videoObj && (Gt.videoObj.offError(null), Gt.videoObj.offClose(null), Gt.videoObj.offLoad(null)), Gt.videoObj = qg.createRewardedVideoAd({
                adUnitId: t
            }), Gt.videoObj.onClose(t => {
                Gt.loading = 0, void 0 === t || t && t.isEnded ? K.Evt(e.VIDEO_FINISH, [Gt.videoSite, Gt.videoParam]) : (K.Evt(e.VIDEO_HALF, [Gt.videoSite]), 
					Pi.FlyTxt("I didn't finish the video"))
            }), Gt.videoObj.onError(t => {
                Gt.loading = 0
            }), Gt.videoObj.onLoad(() => {}))
        }
        static VideoPlay(t, i, s = null) {
            Qi.IsVivo() && (Gt.loading + 20500 > Laya.timer.currTimer ? Pi.FlyTxt("Pulling the video") : (Gt.videoSite = i, Gt.videoParam = s, Gt.VideoAdInit(t, !1), Gt.loading = Laya.timer.currTimer, K.Evt(e.VIDEO_LOAD, [i]), Gt.videoObj.load().then(() => {
                K.Evt(e.VIDEO_LOOK, [i]), Gt.videoObj.show().then(() => {}).catch(t => {
                    Gt.loading = 0, K.Evt(e.VIDEO_ERROR, [i])
                })
            }).catch(t => {
                Gt.loading = 0, Pi.FlyTxt("Video pull failed"), K.Evt(e.VIDEO_ERROR, [i])
            })))
        }
    }
    Gt.loading = 0;
    class Ot {
        static LookLoad() {
            let t = Qi.GetUrlVal("data", "");
            t && (Yi.Avatar = new Ct(JSON.parse(decodeURIComponent(t))), Ft.AvatarDay(), Pt.cbFunSucc && Pt.cbFunSucc())
        }
    }
    class At {
        static Init() {
            Qi.IsXMin() && qg && qg.setKeepScreenOn && qg.setKeepScreenOn({
                keepScreenOn: !0,
                success: function () {},
                fail: function () {},
                complete: function () {}
            })
        }
        static XminLogin() {
            Qi.IsXMin() && qg && qg.login && (Qi.Log("XminLogin.call"), qg.login({
                success: function (t) {
                    if (Qi.Log("XminLogin.succ", t), t.appAccountId, t.session, t.data && t.data.token) {
                        t.data.token;
                        let e = t.appAccountId,
                            i = t.session;
                        Xi.LoginXmin(e, i, Pt.LoginSuccCb)
                    } else;
                },
                fail: function (t) {
                    Qi.Log("XminLogin.fail", t)
                },
                complete: function (t) {
                    Qi.Log("XminLogin.complete", t)
                }
            }))
        }
        static ShowBann() {
            if (Qi.IsXMin() && Y.XminBanner && qg && qg.createBannerAd) {
                if (!At.bannerObj) {
                    let t = 120,
                        e = qg.getSystemInfoSync();
                    At.bannerObj = qg.createBannerAd({
                        adUnitId: Y.XminBanner,
                        style: {
                            left: 0,
                            top: e.windowHeight - t,
                            width: e.windowWidth,
                            height: t
                        }
                    })
                }
                At.bannerObj.onResize(function (t) {
                    if (t && 0 == t.code) {
                        let e = {
                                left: 0,
                                top: 0,
                                width: 700,
                                height: t.height
                            },
                            i = qg.getSystemInfoSync();
                        e.top = i.windowHeight - t.height, e.width = i.windowWidth, At.bannerObj.style = e
                    }
                }), setTimeout(() => {
                    At.bannerObj && At.bannerObj.show()
                }, 880)
            }
        }
        static HideBann() {
            Qi.IsXMin() && Y.XminBanner && qg && qg.createBannerAd && At.bannerObj && (At.bannerObj.hide(), At.bannerObj.destroy(), At.bannerObj = null)
        }
        static VideoAdInit(t, i = !0) {
            Qi.IsXMin() && qg && qg.createRewardedVideoAd && (At.loading = 0, At.videoObj && (At.videoObj.offError(null), At.videoObj.offClose(null), At.videoObj.offLoad(null)), At.videoObj = qg.createRewardedVideoAd({
                adUnitId: t
            }), At.videoObj.onClose(t => {
                At.loading = 0, void 0 === t || t && t.isEnded ? K.Evt(e.VIDEO_FINISH, [At.videoSite, At.vParam]) : (K.Evt(e.VIDEO_HALF, [At.videoSite]),
					Pi.FlyTxt("No reward"))
            }), At.videoObj.onError(t => {
                At.loading = 0
            }), At.videoObj.onLoad(() => {}))
        }
        static VideoPlay(t, i, s = null) {
            Qi.IsXMin() && (At.loading + 20500 > Laya.timer.currTimer ? Pi.FlyTxt("The video is pulling") : (At.videoSite = i, At.vParam = s, At.VideoAdInit(t, !1), At.loading = Laya.timer.currTimer, K.Evt(e.VIDEO_LOAD, [i]), At.videoObj.load().then(() => {
                K.Evt(e.VIDEO_LOOK, [i]), At.videoObj.show().then(() => {}).catch(t => {
                    At.loading = 0, K.Evt(e.VIDEO_ERROR, [i])
                })
            }).catch(t => {
                At.loading = 0, Pi.FlyTxt("Video pull failed"), K.Evt(e.VIDEO_ERROR, [i])
            })))
        }
    }
    At.loading = 0;
    class kt {
        constructor(t, e, i, s, n = !0, a = !0) {
            this.errorFun = null, this.errorFun = s, this.succFun = i;
            let l = "";
            for (let t in e) l = l + t + "=" + encodeURIComponent(e[t]) + "&";
            a && (l = l + "_nocache=" + Math.random() + "&"), "&" == l.substr(l.length - 1, 1) && (l = l.substr(0, l.length - 1)), n ? this.type = "post" : (this.type = "get", "?" != t.substr(t.length - 1, 1) && (t += "?"), t += l, l = null), this.send(t, l)
        }
        send(t, e) {
            Qi.IsFour() || (this.request = new Laya.HttpRequest, this.request.once(Laya.Event.COMPLETE, this, this.onSuccCall), this.request.once(Laya.Event.ERROR, this, this.onErrorCall), this.request.send(t, e, this.type, "json"))
        }
        onSuccCall(t) {
            this.request.data && this.succFun && this.succFun(this.request.data)
        }
        onErrorCall(t) {
            this.errorFun && this.errorFun()
        }
    }
    class Dt {
        static InitWaitLogin() {
            Qi.IsRight() && Laya.timer.loop(200, Dt, Dt.RightLogin)
        }
        static RightLogin() {
            if (!Qi.IsRight()) return;
            let t = Laya.Browser.window.rightUid,
                e = Laya.Browser.window.rightTs,
                i = Laya.Browser.window.rightSign,
                s = Laya.Browser.window.rightDebug;
            if (!t) return;
            Laya.timer.clear(Dt, Dt.RightLogin);
            let n = {
                    game: Y.Game,
                    plat: Y.Plat,
                    uid: t,
                    ts: e,
                    sign: i,
                    _deb: s ? 1 : 0
                },
                a = Y.ApiUrl + "rightLogin/";
            new kt(a, n, t => {
                t && "ok" == t.result && (Ft.ApiCbFun(t), Pt.LoginSuccCb(t))
            }, t => {}, !1, !0)
        }
        static VideoPlay(t, e = null) {
            Qi.IsRight() && Laya.Browser.window.callRightAd && (Dt.adSite = t, Dt.adParam = e, Laya.Browser.window.callRightAd(Dt.VideoCb))
        }
        static VideoCb(t, i) {
            switch (t) {
                case 1:
                    K.Evt(e.VIDEO_FINISH, [Dt.adSite, Dt.adParam]);
                    break;
                case 2:
                    K.Evt(e.VIDEO_HALF, [Dt.adSite]);
                    break;
                case 0:
                    i && Pi.FlyTxt(i, !1, "#FF4E4A")
            }
        }
    }
    class Et {
        static FourLogin() {
            Qi.IsFour() && (Ft.ApiCbFun(null, "4399_Player"), Pt.cbFunSucc && Pt.cbFunSucc())
        }
        static IsLogin() {
            if (Qi.IsFour() && window.h5api && window.h5api.isLogin) return window.h5api.isLogin()
        }
        static ShareApiCall() {
            Qi.IsFour() && window.h5api && window.h5api.share && window.h5api.share()
        }
        static VideoPlay(t, i = null, desc=null) {
            K.Evt(e.VIDEO_LOOK, [t]), Et.adSite = t, Et.adParam = i,
                Plat.I.ShowVideo(()=>{
                K.Evt(e.VIDEO_FINISH, [Et.adSite, Et.adParam])
            },()=>{
                K.Evt(e.VIDEO_HALF, [Et.adSite])
            }, desc);
        }
    }
    class Pt {
        static LoginGame(t) {
            Pt.cbFunSucc = t, Qi.IsLook() ? Ot.LookLoad() : Qi.IsRight() ? Dt.InitWaitLogin() : Qi.IsFour() ? Et.FourLogin() : Qi.IsIos() ? Bt.WebLogin() : Qi.IsApk1() ? Bt.WebLogin() : Qi.IsApk2() ? Bt.WebLogin() : Qi.IsLink() ? Bt.WebLogin() : Qi.IsWx() ? Ji.WxLogin() : Qi.IsTx() ? Ni.TxLogin() : Qi.IsTt() ? Nt.TtLogin() : Qi.IsOppo() ? wt.OppoLogin() : Qi.IsVivo() ? Gt.VivoLogin() : Qi.IsXMin() ? At.XminLogin() : Qi.IsDev() ? Bt.WebLogin() : console.error("LOGIN ERR")
        }
        static LoginSuccCb(t) {
            let e = t.data.openId;
            if (e) {
                Qi.IsWx() ? (Ji.InitListen(e), Yi.iosOs = Ji.isIos()) : Qi.IsTx() ? (Ni.InitListen(e), Yi.iosOs = Ni.isIos()) : Qi.IsTt() ? (Nt.InitListen(e), Yi.iosOs = Nt.isIos()) : Qi.IsOppo() || Qi.IsVivo() || Qi.IsXMin() || Qi.IsRight() || Qi.IsFour() || console.error("LoginSuccCb ERR");
                let t = Xi.LoadLocalAvatar();
                Y.TrustLocal && t ? Xi.SaveApi(!0, Pt.cbFunSucc, "") : Xi.LoadForUser(e, t => {
                    Yi.Avatar = new Ct(t.data), Ft.AvatarDay(), Pt.cbFunSucc && Pt.cbFunSucc()
                }, () => {
                    Yi.Avatar = new Ct(null, e), Ft.AvatarDay(), Xi.SaveApi(!0, Pt.cbFunSucc, "")
                })
            }
        }
    }
    class Nt {
        static Init() {
            Qi.IsTt() && ((Y.TtBookSign || Y.TtBookOff) && (Nt.bookSave = [], Y.TtBookSign && Nt.bookSave.push(Y.TtBookSign), Y.TtBookOff && Nt.bookSave.push(Y.TtBookOff)), tt && tt.setKeepScreenOn && tt.setKeepScreenOn({
                keepScreenOn: !0,
                success(t) {},
                fail(t) {}
            }))
        }
        static AppGoto(t) {
            Qi.IsTt() && tt && tt.navigateToMiniProgram && tt.navigateToMiniProgram({
                appId: t,
                success(t) {},
                fail(t) {}
            })
        }
        static BookMsg() {
            Qi.IsTt() && tt && tt.requestSubscribeMessage && (!Nt.bookSave || Nt.bookSave.length <= 0 || tt.requestSubscribeMessage({
                tmplIds: Nt.bookSave,
                success(t) {
                    let e = "",
                        i = "";
                    for (let s in t) {
                        if ("errMsg" == s) continue;
                        "accept" == t[s] && (s == Y.TtBookSign ? (e += k.Sign + ",", i += s + ",") : s == Y.TtBookOff && (e += k.Off + ",", i += s + ","))
                    }
                    e && (e = e.substr(0, e.length - 1), i = i.substr(0, i.length - 1), Xi.BookDone(e, i))
                },
                fail(t) {}
            }))
        }
        static TtLogin() {
            tt.login({
                force: !1,
                success: function (t) {
                    if (t.code || t.anonymousCode) {
                        let e = t.code ? t.code : "",
                            i = t.anonymousCode ? t.anonymousCode : "";
                        e ? Xi.LoginTt(e, i, Nt._loginDone) : i && Xi.LoginTt(e, i, Nt._anonyLoginDone)
                    }
                },
                fail: function () {},
                complete: function () {}
            })
        }
        static _loginDone(t) {
            Pt.LoginSuccCb(t)
        }
        static _anonyLoginDone(t) {
            Nt._loginDone(t)
        }
        static isIos() {
            return !1
        }
        static InitListen(t) {
            if (!Qi.IsTt()) return !1;
            tt.onShow(function (t) {
                Mt.ShareDone()
            }), tt.showShareMenu({
                withShareTicket: !0,
                success: null,
                fail: null,
                complete: null
            }), tt.onShareAppMessage(function () {
                return {
                    title: "快来一起来玩吧",
                    query: "what=good&money=666",
                    imageUrl: Mt.ShareUrl(),
                    success() {
                        K.Evt(e.SHARE_SUCC)
                    },
                    fail() {
                        Pi.FlyTxt("未成功分享"), K.Evt(e.SHARE_FAIL)
                    },
                    complete: null
                }
            }), Nt.RecordInit()
        }
        static ShareApiCall(t) {
            if (!Qi.IsTt()) return;
            let i = "way=" + t + "&user=" + Yi.Avatar.userName;
            tt.shareAppMessage({
                title: "快来一起来玩吧",
                query: i,
                imageUrl: Mt.ShareUrl(),
                success() {
                    K.Evt(e.SHARE_SUCC)
                },
                fail() {
                    Pi.FlyTxt("未成功分享"), K.Evt(e.SHARE_FAIL)
                },
                complete: null
            })
        }
        static MinQuake() {
            Qi.IsTt() && tt.vibrateShort({
                success: null,
                fail: null,
                complete: null
            })
        }
        static ShowBann(t = null) {
            if (!Qi.IsTt()) return;
            if (!Y.TtBanner) return;
            if (!tt || !tt.createBannerAd) return;
            let e = tt.getSystemInfoSync(),
                i = {
                    width: 320,
                    height: 110,
                    left: 0,
                    top: 0
                };
            i.left = .5 * (e.windowWidth - i.width), i.top = e.windowHeight - i.height - 6, Nt.bannObj && (Nt.bannObj.destroy(), Nt.bannObj = null), Nt.bannObj = tt.createBannerAd({
                adUnitId: Y.TtBanner,
                adIntervals: t || null,
                style: {
                    width: i.width,
                    height: i.height,
                    left: i.left,
                    top: i.top
                }
            }), Nt.bannObj.onError((t, e) => {}), Nt.bannObj.onLoad(() => {}), setTimeout(() => {
                Nt.bannObj && Nt.bannObj.show()
            }, 880)
        }
        static HideBann() {
            Qi.IsTt() && Y.TtBanner && tt && tt.createBannerAd && Nt.bannObj && (Nt.bannObj.hide(), Nt.bannObj.destroy(), Nt.bannObj = null)
        }
        static VideoAdInit(t, i = !0) {
            Qi.IsTt() && tt && tt.createRewardedVideoAd && (Nt.loading = 0, Nt.videoObj || (Nt.videoObj = tt.createRewardedVideoAd({
                adUnitId: t
            }), Nt.videoObj.onClose(t => {
                Nt.loading = 0, void 0 === t || t && t.isEnded ? K.Evt(e.VIDEO_FINISH, [Nt.adSite, Nt.adParam]) : (K.Evt(e.VIDEO_HALF, [Nt.adSite]),
					Pi.FlyTxt("视频未完整观看"))
            }), Nt.videoObj.onError(t => {
                Nt.loading = 0
            }), Nt.videoObj.onLoad(() => {})))
        }
        static VideoPlay(t, i, s = null) {
            Qi.IsTt() && (Nt.loading + 2e4 > Laya.timer.currTimer ? Pi.FlyTxt("The video is loading") : (Nt.adSite = i, Nt.adParam = s, Nt.VideoAdInit(t, !1), Nt.loading = Laya.timer.currTimer, K.Evt(e.VIDEO_LOAD, [i]), Nt.videoObj.load().then(() => {
                K.Evt(e.VIDEO_LOOK, [i]), Nt.videoObj.show().then(() => {}).catch(t => {
                    Nt.loading = 0, K.Evt(e.VIDEO_ERROR, [i])
                })
            }).catch(t => {
                Nt.loading = 0, Pi.FlyTxt("Video pull failed"), K.Evt(e.VIDEO_ERROR, [i])
            })))
        }
        static RecordInit() {
            Qi.IsTt() && tt && tt.getGameRecorderManager && (Nt.recordObj = tt.getGameRecorderManager(), Nt.recordObj.onStart(t => {
                Nt.recordState = 1, Nt.recStartT = Laya.timer.currTimer, Nt.savePath = "", Pi.FlyTxt("开始录屏，每天发布可得奖励", !1, "#ffffff", 2050, 350), K.Evt(e.TT_RECROD_EVT)
            }), Nt.recordObj.onStop(t => {
                Laya.timer.currTimer - Nt.recStartT < 8e3 ? (Nt.recordState = 0, Nt.recStartT = 0, Nt.savePath = "", 
					Pi.FlyTxt("录屏需大于8秒，请重试", !1, "#ffffff", 2e3, 340), K.Evt(e.TT_RECROD_EVT)) : (Nt.recordState = 2, Nt.recStartT = 0, 
					Nt.savePath = t.videoPath, Pi.FlyTxt("再次点击“分享录屏”，领取奖励", !1, "#ffffff", 2e3, 340), K.Evt(e.TT_RECROD_EVT))
            }))
        }
        static GetRecSec() {
            return Math.floor(.001 * (Laya.timer.currTimer - Nt.recStartT))
        }
        static RecBtnTap() {
            if (Qi.IsTt() && tt && tt.getGameRecorderManager) switch (Nt.recordState) {
                case 0:
                    Nt.recordBegin();
                    break;
                case 1:
                    if (Laya.timer.currTimer - Nt.recStartT < 8e3) return void Pi.FlyTxt("录制需大于8秒", !1, "#ffffff", 2050, 350);
                    Nt.recordEnd();
                    break;
                case 2:
                    Nt.VideoShare()
            }
        }
        static recordBegin() {
            Qi.IsTt() && tt && tt.getGameRecorderManager && Nt.recordObj.start({
                duration: 15
            })
        }
        static recordEnd() {
            Qi.IsTt() && tt && tt.getGameRecorderManager && Nt.recordObj.stop()
        }
        static VideoShare() {
            Qi.IsTt() && tt && tt.getGameRecorderManager && tt.shareAppMessage({
                channel: "video",
                imageUrl: Mt.ShareUrl(),
                query: "",
                extra: {
                    videoPath: Nt.savePath,
                    videoTopics: ["推荐一款好玩的游戏"]
                },
                success() {
                    Nt.savePath = "", Nt.recordState = 0, Nt.recStartT = 0, K.Evt(e.TT_RECORD_SUCC), K.Evt(e.TT_RECROD_EVT)
                },
                fail(t) {
                    Nt.savePath = "", Nt.recordState = 0, Nt.recStartT = 0, K.Evt(e.TT_RECROD_EVT)
                }
            })
        }
    }
    Nt.bookSave = null, Nt.loading = 0, Nt.recStartT = 0, Nt.recordState = 0;
    class Mt {
        static Init() {
            K.On(e.SHARE_SUCC, Mt, Mt.shareFinish), K.On(e.COLOR_SIGN_SUCC, Mt, Mt.shareFinish), K.On(e.BOOK_MSG_SUCC, Mt, Mt.shareFinish)
        }
        static shareFinish(t) {
            if (t == l.daySoul) {
                if (!Qi.IsWx() && !Qi.IsTx()) return;
                let t = Yi.Avatar;
                if (Ft.today == t.recDay) return;
                let i = Q.GetVal("ttDaySoul", 1e3);
                Li.Open(S.Award, [
                    [
                        [d.soul, i]
                    ], !1, !1
                ]), t.recDay = Ft.today, Xi.SaveApi(!1), K.Evt(e.DAY_CHANGE)
            }
            if (t == l.Pass) {
                if (!Qi.IsWx() && !Qi.IsTx()) return;
                Ft.PassAward()
            }
        }
        static IsShare() {
            if (!Qi.IsWx() && !Qi.IsTx()) return;
            let t = Yi.Avatar;
            return Ft.today == t.recDay
        }
        static ShareUrl() {
            let t = Yi.Avatar,
                e = 222222 + Math.floor(666666654 * Math.random());
            return Mt.shareVal = e, Y.ApiUrl + "shareImg/?userName=" + t.userName + "&sign=" + e
        }
        static ShareStart() {
            Qi.IsTt() || (Mt.isShare = !0)
        }
        static ShareOver() {
            Mt.isShare = !1
        }
        static ShareDo(t) {
            Mt.wayVal = t, Qi.IsWx() ? (Mt.ShareStart(), Ji.ShareApiCall(t)) : Qi.IsTx() ? (Mt.ShareStart(), Ni.ShareApiCall(t)) : Qi.IsTt() && Nt.ShareApiCall(t)
        }
        static ShareDone() {
            Qi.IsTt() || Mt.isShare && Mt.verifyChkShare(() => {
                K.Evt(e.SHARE_SUCC, [Mt.wayVal])
            }, () => {
                Pi.FlyTxt("分享后可领奖励"), K.Evt(e.SHARE_FAIL)
            })
        }
        static verifyChkShare(t, e) {
            if (Mt.ShareOver(), !Mt.shareVal) return void(e && e());
            let i = Mt.shareVal;
            Mt.shareVal = null;
            let s = Y.ApiUrl + "shareVerify/",
                n = Yi.Avatar.userName;
            new kt(s, {
                userName: n,
                sign: i
            }, i => {
                if (i && "ok" == i.result) {
                    if (!Yi.iosOs) return void(t && t());
                    if (i.data && !0 === i.data) return void(t && t())
                }
                e && e()
            }, t => {}, !0, !0)
        }
    }
    Mt.isShare = !1, Mt.shareVal = null;
    class Ft {
        static doColorSign() {
            Ft.signColor = !0
        }
        static doBookMsg(t) {
            if (Ft.booked) return;
            return Yi.Avatar.passLv <= t ? void 0 : (Ft.booked = !0, Vi.BookMsg(), !0)
        }
        static Init() {
            K.On(e.VIDEO_FINISH, xi, Ft.passAwardVideoAdDone)
        }
        static ApiCbFun(t, e = null) {
            if (Qi.IsFour()) {
                let t = Qi.getYmd();
                return Ft.dayRefresh(t), void Ft.FourCbFun(e)
            }
            t && (t.day && Ft.dayRefresh(t.day), t.d && Ft.daysRefresh(t.d), t.day && t.hour && Ft.hourRefresh(t.day, t.hour), t.other && Ft.otherRefresh(t.other), t.uid && (Ft.uid = t.uid))
        }
        static FourCbFun(t = null) {
            let e = Xi.LoadLocalAvatar();
            if (console.log("FourCbFun.isLoad", e), !e) {
                let e = Y.Game + Y.Plat + t;
                Yi.Avatar = new Ct(null, e), console.log("FourCbFun.new PlayerM", Yi.Avatar), Ft.AvatarDay()
            }
            let i = null;
            if (t) {
                let t = Yi.Avatar;
                i = Math.floor((Laya.timer.currTimer - t.lastTime) / 1e3)
            }
            let s = {
                    offSec: i,
                    login: 1
                },
                n = Qi.getYmd(),
                a = Qi.getH();
            Ft.hourRefresh(n, a), Ft.dayRefresh(n), Ft.otherRefresh(s), Ft.daysRefresh(null), Ft.uid = null
        }
        static hourRefresh(t, i) {
            let s = Yi.Avatar;
            s && (Ft.today && Ft.today == t && Ft.hour && Ft.hour == i || (Ft.hour = i, s.lastHour = i, qi.FbHour(), Xi.SaveApi(!0), K.Evt(e.HOUR_CHANGE)))
        }
        static dayRefresh(t) {
            8 == t.length && (t = t.substring(2)), Ft.today && Ft.today == t || (Ft.today = t, Ft.AvatarDay())
        }
        static daysRefresh(t) {
            Ft.days && Ft.days == t || (Ft.days = t)
        }
        static otherRefresh(t) {
            null === xi.offSec && (xi.offSec = 0), t && (null !== t.offSec && (xi.offSec = t.offSec), null !== t.login && (Qi.IsLook() || (null === Ft.lastLogin ? (Ft.lastLogin = t.login, Qi.IsFour() && (Ft.lastLogin = Laya.timer.currTimer)) : Ft.lastLogin != t.login && Li.Open(S.Info, ["　　登录已过期，或账号在别处登录，可重新进入游戏继续玩耍。", !0]))))
        }
        static AvatarDay() {
            let t = Yi.Avatar;
            t && (t.lastDay && t.lastDay == Ft.today || (t.lastDay = Ft.today, t.sumDay++, t.heroDay = 0, t.beyondNum = 0, t.relive = 0, Vt.DayRefresh(), Ci.DayRefresh(), xe.DayRefresh(), xt.DayRefresh(), Xi.SaveApi(!0), K.Evt(e.DAY_CHANGE)))
        }
        static MinRefresh() {}
        static Reset() {
            let t = Yi.Avatar.userName;
            Yi.Avatar = new Ct(null, t), Xi.SaveApi(!0, () => {
                K.Evt(e.AVATAR_ZERO)
            })
        }
        static PassAwardRedNum() {
            return 0
        }
        static GetBaseAwardSt(t, e) {
            let i = Yi.Avatar;
            i.passAward || (i.passAward = {});
            let s = i.passLv;
            if (e < s) {
                let t = qi.lvChapter,
                    s = q.GetPassCfg(D.Pass, t, e).mapNo;
                return i.passAward[s] ? 4 : 3
            }
            return t <= s ? 2 : 1
        }
        static GainBaseAward(e, i) {
            let s = Yi.Avatar;
            if (s.passAward || (s.passAward = {}), 3 != Ft.GetBaseAwardSt(e, i)) return void Pi.FlyTxt("Claim error 1");
            let n = qi.lvChapter,
                a = q.GetPassCfg(D.Pass, n, i).mapNo;
            if (s.passAward[a]) Pi.FlyTxt("Claim error 2");
            else switch (Ft.awardChapter = a, Tt.GetCfg(a).type) {
                case A.One:
                    Ft.PassAward();
                    break;
                case A.Two:
                    Mt.ShareDo(l.Pass);
                    break;
                case A.Three:
                    Qi.IsVideo() ? Vi.VideoAdPlay(null, t._PassAward, null) : Mt.ShareDo(l.Pass)
            }
        }
        static passAwardVideoAdDone(e) {
            e == t._PassAward && Ft.PassAward()
        }
        static PassAward() {
            let t = Yi.Avatar;
            t.passAward || (t.passAward = {});
            let i = Ft.awardChapter;
            if (!i) return;
            if (t.passAward[i]) return;
            t.passAward[i] = 1;
            let s = Tt.GetCfg(i),
                n = s.itemId,
                a = s.num;
            Le.AddAward(n, a, !1, S.Chapter), K.Evt(e.PASS_AWARD_GAIN), Ft.awardChapter = null
        }
        static CheckSess() {
            if (!Qi.IsTx()) return !0
        }
        static GetBaseGiftSt(t, e) {
            let i = Yi.Avatar;
            if (i.passGift[t] || (i.passGift[t] = {}), i.passGift[t][e]) return 1;
            let s = Tt.GetCfg(t).starNum[e],
                n = qi.ChapterStar(D.Pass, t);
            return n >= s ? 0 : n - s
        }
        static GainPassGift(t, i) {
            let s = Ft.GetBaseGiftSt(t, i);
            if (s < 0) K.Evt(e.SHOW_GIFT_TIPS, [t, i]);
            else if (1 == s) Pi.FlyTxt("The award has been collected"), K.Evt(e.SHOW_GIFT_TIPS, [t, i]);
            else {
                let s = Tt.GetCfg(t),
                    n = s.giftSet[i].itemId,
                    a = s.giftSet[i].itemNum;
                if (n < 0) {
                    let t = Math.abs(n);
                    ve.AwardSolider(t)
                } else Le.AddAward(n, a, !1, null);
                let l = Yi.Avatar;
                l.passGift[t] || (l.passGift[t] = {}), l.passGift[t][i] = 1, Xi.SaveApi(!0), K.Evt(e.GIFT_ITEM_REFRESH)
            }
        }
    }
    Ft.days = null, Ft.today = "", Ft.hour = "", Ft.signColor = !1, Ft.booked = !1, Ft.tuiA = !1, Ft.lastLogin = null;
    class Vt {
        static Init() {
            Vt.ReInit()
        }
        static ReInit() {
            Vt.onlineT = 0, Vt.onlineSec = 0;
            let t = Q.GetVal("onlineAwardBoxGift", "1,102;2,102;5,102;10,102;30,102").split(";");
            Vt.onlineStep = [];
            for (let e in t) {
                let i = t[e].split(","),
                    s = parseInt(i[0]),
                    n = parseInt(i[1]);
                Vt.onlineStep.push([s, n])
            }
        }
        static DayRefresh() {
            let t = Yi.Avatar;
            t.onSec = 0, t.onStep = 0, t.daySec = 0, t.quickDict = {}, Vt.ReInit()
        }
        static GetQuickNum(t) {
            let e = Yi.Avatar;
            e.quickDict[t] || (e.quickDict[t] = 0);
            return 3 - e.quickDict[t]
        }
        static PickQuickSave(t) {
            let e = Yi.Avatar;
            e.quickDict[t] || (e.quickDict[t] = 0), e.quickDict[t]++
        }
        static HasAward() {
            let t = Yi.Avatar,
                e = t.onSec,
                i = Math.floor(e / 60);
            for (let e = 0; e < t.onStep; e++) Vt.onlineStep && Vt.onlineStep[e] && (i -= Vt.onlineStep[e][0]);
            if (Vt.onlineStep[t.onStep] && i >= Vt.onlineStep[t.onStep][0]) return Vt.onlineStep[t.onStep][1]
        }
        static IsAwardReady(t) {
            let e = Yi.Avatar;
            if (e.onStep > t) return !0;
            let i = e.onSec,
                s = Math.floor(i / 60);
            for (let e = 0; e < t; e++) Vt.onlineStep && Vt.onlineStep[e] && (s -= Vt.onlineStep[e][0]);
            return !!(Vt.onlineStep[t] && s >= Vt.onlineStep[t][0]) && Vt.onlineStep[t][1]
        }
        static PickGift(t) {
            let i = Vt.IsAwardReady(t);
            if (!0 === i || !1 === i) return;
            let s = Yi.Avatar;
            if (t == s.onStep) {
                if (s.onStep++, K.Evt(e.ONLINE_CHANGE), 525 == i) {
                    let t = yt.GetCfg(i).drop[0][1];
                    Ci.RndPatch(null, t, !0)
                } else Le.AddAward(i, 1, !1, null);
                Ft.doBookMsg(0), Xi.SaveApi(!0)
            } else Pi.FlyTxt("Please pick it up in order")
        }
        static _PickAward() {
            let t = Vt.HasAward();
            if (t) {
                if (Yi.Avatar.onStep++, K.Evt(e.ONLINE_CHANGE), 525 == t) {
                    let e = yt.GetCfg(t).drop[0][1];
                    Ci.RndPatch(null, e, !0)
                } else Le.AddAward(t, 1, !1, null);
                Xi.SaveApi(!0)
            }
        }
        static Update(t) {
            Vt.onlineT += t;
            let i = Math.floor(.001 * Vt.onlineT);
            if (i == Vt.onlineSec) return;
            Vt.onlineSec = i, K.Evt(e.ONLINE_SEC);
            let s = Yi.Avatar;
            if (s.daySec++, s.lastTime = Laya.timer.currTimer, s.onStep < Vt.onlineStep.length) {
                let t = s.onSec,
                    n = Math.floor(t / 60),
                    a = 0;
                for (let t = 0; t <= s.onStep; t++) a += Vt.onlineStep[t][0];
                s.dayMin;
                Lt.CanOpen(S.__Award) && s.onSec++, s.dayMin, a && n < a ? K.Evt(e.ONLINE_CHANGE) : i % 5 == 0 && K.Evt(e.ONLINE_CHANGE)
            }
            i % 60 == 0 && (s.sumMin++, 0 != Vt.onlineSec && Xi.SaveApi(!0))
        }
        static get Min() {
            let t = Yi.Avatar,
                e = t.onSec,
                i = Math.floor(e / 60);
            for (let e = 0; e < t.onStep; e++) i -= Vt.onlineStep[e][0];
            return (i = Vt.onlineStep[t.onStep][0] - 1 - i) < 10 ? "0" + i : i + ""
        }
        static get Sec() {
            let t = 60 - Yi.Avatar.onSec % 60 - 1;
            return t < 10 ? "0" + t : t + ""
        }
    }
    class Rt extends R {
        constructor(t) {
            super(t), this.isFirst = t.first, this.group = t.group, this.day = t.day, this.nice = t.ok, this.award = t.award, this.title = t.title
        }
        static Init() {
            if (!Rt._saves) {
                let t;
                Rt._saves = {}, Rt._loops = [];
                let e = zi.GetJson(Rt.jsName);
                for (let i in e) {
                    let e = R.GetJson(Rt, parseInt(i));
                    Rt._saves[e.group] || (Rt._saves[e.group] = {}), Rt._saves[e.group][e.day] = e, t != e.group && (t = e.group, e.isFirst ? Rt._firstLoop = t : Rt._loops.push(t))
                }
            }
        }
        static GetWeekList(t = 1) {
            Rt.Init();
            let e = null;
            if (null !== Rt._firstLoop)
                if (1 == t) e = Rt._firstLoop;
                else {
                    let i = (t = t - 1 - 1) % Rt._loops.length;
                    e = Rt._loops[i]
                }
            else {
                let i = (t -= 1) % Rt._loops.length;
                e = Rt._loops[i]
            }
            return Rt._saves[e]
        }
        static GetDayAward(t = 1, e = 1) {
            return Rt.Init(), Rt.GetWeekList(t)[e]
        }
    }
    Rt.jsName = "signIn", Rt._firstLoop = null;
    class Ut {
        static Init() {
            let t = Q.GetVal("signVideoNumNeed", 0);
            Qi.IsVideo() && t && K.On(e.VIDEO_FINISH, Ut, Ut.signVideoAdDone)
        }
        static modDay(t) {
            let e = t;
            return t %= It.SignRound, e && 0 == t && (t = It.SignRound), t
        }
        static IsWaitSign() {
            let t = Ut.signDay;
            return !Ut.IsSignDay(t)
        }
        static IsSignDay(t = 1) {
            let e = Yi.Avatar,
                i = e.signSum,
                s = Ut.modDay(i),
                n = s;
            return s == It.SignRound && e.lastDay && e.signDay != e.lastDay && (s = 0), (!e.signDay || e.lastDay && e.signDay != e.lastDay) && (n += 1), n = Ut.modDay(n), t <= s
        }
        static SignDo() {
            if (!Ut.IsWaitSign()) return void Pi.FlyTxt("You signed in today. You can sign in tomorrow。");
            let e = Q.GetVal("signVideoNumNeed", 0);
            Qi.IsVideo() && e ? Vi.VideoAdPlay(null, t.Sign, null) : Ut.signVideoAdDone(t.Sign, !1)
        }
        static signVideoAdDone(e, i = !0) {
            if (e != t.Sign) return;
            let s = Ut.signWeek,
                n = Ut.signDay,
                a = Rt.GetDayAward(s, n),
                l = a.award[0][0],
                o = a.award[0][1];
            if (l == d.patch) {
                let t = !i;
                Ci.RndPatch(null, o, t)
            } else {
                let e = Q.GetVal("signVideoNumNeed", 0);
                Qi.IsVideo() && e ? Le.AddAward(l, o, !1, S.Sign, null) : Le.AddAward(l, o, !1, S.Sign, t.Sign)
            }
            let r = Yi.Avatar;
            r.signDay = r.lastDay, r.signSum++, Xi.SaveApi(!0)
        }
        static get signWeek() {
            let t = Yi.Avatar,
                e = t.signSum;
            return t.signDay != t.lastDay && (e += 1), Math.ceil(e / It.SignRound)
        }
        static get signDay() {
            let t = Yi.Avatar,
                e = t.signSum % It.SignRound;
            return t.signDay != t.lastDay && (e += 1), e
        }
    }
    class Ht extends R {
        constructor(t) {
            super(t), this.group = t.group, this.gift = t.gift, this.power = t.power, this.videoPower = t.videoPower, this.nice = t.good
        }
        static Init() {
            if (!Ht._saves) {
                Ht._saves = {}, Ht._loops = [];
                let t = zi.GetJson(Ht.jsName);
                for (let e in t) {
                    let t = R.GetJson(Ht, parseInt(e));
                    Ht._saves[t.group] || (Ht._saves[t.group] = {}), Ht._saves[t.group][t.id] = t, Ht._loops.push(t.group)
                }
            }
        }
        static RndOne4Loop() {
            Ht.Init();
            let t = Math.floor(Math.random() * Ht._loops.length);
            return Ht._loops[t]
        }
        static LuckyLoop(t) {
            return Ht.Init(), Ht._saves[t]
        }
    }
    Ht.jsName = "turntable";
    class $t {
        static Init() {
            $t.luckyBoy = 8, K.On(e.VIDEO_FINISH, $t, $t.luckyVideoAdDone), $t.freeMax = Q.GetVal("luckyBaseNum", 1), $t.adMax = Q.GetVal("luckyVideoMax", 2), $t.goodLuck = Q.GetVal("luckyGoodNum", 30);
            let t = Q.GetVal("luckyOnceClock", "").split(",");
            $t.luckyReset = [];
            for (let e in t) {
                let i = parseInt(t[e]);
                $t.luckyReset.push(i)
            }
        }
        static get freeNum() {
            let t = Yi.Avatar,
                e = $t.freeMax - t.luckyNum;
            return e > 0 ? e : 0
        }
        static get lukcyNum() {
            let t = Yi.Avatar,
                e = $t.freeMax;
            return Qi.IsVideo() && (e += $t.adMax), (e -= t.luckyNum) > 0 ? e : 0
        }
        static Update(t) {
            if (null !== $t._t && ($t._t += t, $t._t <= 1e3)) return;
            $t._t = 0;
            let i = Yi.Avatar,
                s = $t.stepHour();
            s > i.luckyHour && (i.luckyHour = s, i.luckyNum = 0, i.luckyLoop = Ht.RndOne4Loop(), K.Evt(e.HOUR_CHANGE), Xi.SaveApi(!0))
        }
        static stepHour() {
            let t = Qi.getYmd(),
                e = t + Qi.getH(),
                i = "";
            for (let s in $t.luckyReset) {
                let n = t + Qi.leftZero($t.luckyReset[s], 2);
                e >= n && (i = n)
            }
            return i
        }
        static get reMin() {
            let t = Laya.timer.currTimer;
            t = Math.floor(.001 * t);
            let e = Q.GetVal("luckyColdTime", 3600),
                i = e - t % e;
            return Qi.GetTimeStr(i)
        }
        static GetLuckyList() {
            let t = Yi.Avatar;
            return Ht.LuckyLoop(t.luckyLoop)
        }
        static CallTheLucky(i = null) {
            let s = Laya.timer.currTimer,
                n = new Date(s),
                a = n.getFullYear(),
                l = n.getMonth() + 1,
                o = n.getDate(),
                r = Qi.leftZero(l, 2),
                h = Qi.leftZero(o, 2),
                d = parseInt(a % 100 + r + h + ""),
                u = parseInt(Ft.today);
            if (Math.abs(d - u) > 3) return Pi.FlyTxt("Wheel of fortune system time error, please check"), Li.Close(S.Lucky), null;
            if ($t.lukcyNum <= 0) return Pi.FlyTxt("Please wait for the turntable to open again"), null;
            if (null !== i) {
                if (!Qi.IsInDebug()) return;
                let t = Yi.Avatar;
                return t.luckyNum++, t.luckySum++, void K.Evt(e.EGG_BEGIN, i)
            }
            if (!($t.freeNum <= 0)) return $t.TiggerLucky();
            Vi.VideoAdPlay(null, t._Lucky, null)
        }
        static luckyVideoAdDone(e) {
            e == t._Lucky && $t.TiggerLucky()
        }
        static TiggerLucky() {
            let t = $t.rndLuckyNum();
            if (null !== t) {
                let i = Yi.Avatar;
                if (i.luckyNum++, i.luckySum++, 0 != $t.goodLuck && i.luckySum % $t.goodLuck == 0) {
                    let e = $t.GetLuckyList(),
                        i = 0;
                    for (let s in e) {
                        let n = e[s];
                        for (let e in n.gift) {
                            let [s, a] = n.gift[e];
                            523 === s && (t = i)
                        }
                        i++
                    }
                }
                return K.Evt(e.EGG_BEGIN, t), Xi.SaveApi(!1), !0
            }
        }
        static rndLuckyNum() {
            let t = $t.freeNum <= 0,
                e = {},
                i = 0,
                s = $t.GetLuckyList(),
                n = 0,
                a = null;
            for (let a in s) {
                let l = s[a],
                    o = t ? l.videoPower : l.power;
                o ? e[i += o] = n++ : e[-(i += o)] = n++
            }
            if (i <= 0) return a;
            let l = Math.floor(Math.random() * i);
            for (let t in e) {
                if (l <= parseInt(t)) {
                    a = e[t];
                    break
                }
            }
            return a
        }
        static GetLuckyAward(t) {
            let e = null,
                i = 0,
                s = $t.GetLuckyList(),
                n = 0;
            for (let a in s)
                if (n++ == t) {
                    let t = s[a];
                    e = t.gift[0][0], i = t.gift[0][1];
                    break
                } return [e, i]
        }
    }
    $t._t = null;
    class jt extends R {
        constructor(t) {
            super(t), this.title = t.title, this.icon = t.icon, this.effect = t.effect, this.sound = t.sound, this.wait = t.wait, this.diamond = t.diamond, this.max = t.max, this.openLv = t.openLv
        }
        static Init() {
            if (!jt._saves) {
                jt._saves = {};
                let t = zi.GetJson(jt.jsName);
                for (let e in t) {
                    let t = R.GetJson(jt, parseInt(e));
                    jt._saves[t.id] = t
                }
            }
        }
        static GetCfg(t) {
            return jt.Init(), jt._saves[t]
        }
        static GetDict() {
            return jt.Init(), jt._saves
        }
    }
    jt.jsName = "kill";
    class qt {
        constructor(t) {
            this.wid = t.wid, this.centX = t.x, this.centY = t.y, this.space = t.speed, this.interval = t.interval, this.pngs = t.pngs, 1 == this.pngs && 0 == this.interval && (this.interval = 90)
        }
        static Init() {
            if (!qt._saves) {
                qt._saves = {};
                let t = zi.GetJson(qt.jsName);
                for (let e in t) {
                    let i = t[e];
                    for (let t in i) {
                        let s = i[t],
                            n = new qt(s);
                        qt._saves[e] || (qt._saves[e] = {}), qt._saves[e][t] = n
                    }
                }
            }
        }
        static CenterInfo(t, e) {
            if (qt.Init(), qt._saves[t] && qt._saves[t][e]) return qt._saves[t][e]
        }
        static InitPivot(t, e, i) {
            let s = qt.CenterInfo(e, i);
            return s || Qi.Log("InitPivot", e, i), t.pivot(s.centX, s.centY), s
        }
    }
    qt.jsName = "pngCenter";
    class Wt extends R {
        constructor(t) {
            super(t), this.name = t.name, this.prev = t.prev, this.desc = t.desc, this.txt = t.txt, this.page = t.page, this.sign = t.sign, this.addVal = t.addVal, this.type = t.type, this.max = t.max, this.baseCost = t.baseCost, this.addCost = t.addCost
        }
        static Init() {
            if (!Wt._saves) {
                Wt._saves = {};
                let t = zi.GetJson(Wt.jsName);
                for (let e in t) {
                    let t = R.GetJson(Wt, parseInt(e));
                    Wt._saves[t.id] = t
                }
            }
        }
        static GetCfg(t) {
            return Wt.Init(), Wt._saves[t]
        }
        static GetDict() {
            return Wt.Init(), Wt._saves
        }
        static GetList(t) {
            let e = [],
                i = Wt.GetDict();
            for (let s in i) {
                let n = i[s];
                Math.ceil(n.id / 9) == t && e.push(n)
            }
            return e
        }
    }
    Wt.jsName = "talent",
        function (t) {
            t[t.FAST_TURN_9 = 9] = "FAST_TURN_9", t[t.SUPER_HURT_7 = 7] = "SUPER_HURT_7", t[t.ATK_CUT_8 = 8] = "ATK_CUT_8", t[t.SLOW_CUT_21 = 21] = "SLOW_CUT_21", t[t.BLOOD_ADD_71 = 71] = "BLOOD_ADD_71", t[t.SHOP_WAIT_72 = 72] = "SHOP_WAIT_72", t[t.DAIMOND_ADD_73 = 73] = "DAIMOND_ADD_73", t[t.MONEY_INIT_51 = 51] = "MONEY_INIT_51", t[t.MONEY_DROP_53 = 53] = "MONEY_DROP_53", t[t.SHOOT_RANGE_1 = 1] = "SHOOT_RANGE_1", t[t.SHOOT_FAST_2 = 2] = "SHOOT_FAST_2", t[t.SHOOT_SPEED_3 = 3] = "SHOOT_SPEED_3", t[t.ATK_ADD_4 = 4] = "ATK_ADD_4", t[t.ATK_MORE_5 = 5] = "ATK_MORE_5", t[t.SUPER_MORE_6 = 6] = "SUPER_MORE_6", t[t.HURT_RANGE_10 = 10] = "HURT_RANGE_10", t[t.JUMP_HURT_11 = 11] = "JUMP_HURT_11", t[t.STOP_ADD_12 = 12] = "STOP_ADD_12", t[t.STOP_LONG_13 = 13] = "STOP_LONG_13", t[t.CLOSE_ADD_14 = 14] = "CLOSE_ADD_14", t[t.CLOSE_LONG_15 = 15] = "CLOSE_LONG_15", t[t.SLOW_SPEED_16 = 16] = "SLOW_SPEED_16", t[t.SLOW_LONG_17 = 17] = "SLOW_LONG_17", t[t.DRUG_MORE_18 = 18] = "DRUG_MORE_18", t[t.FIRE_MORE_19 = 19] = "FIRE_MORE_19", t[t.BLOOD_MORE_20 = 20] = "BLOOD_MORE_20", t[t.MONEY_SALE_52 = 52] = "MONEY_SALE_52", t[t.MONEY_MORE_54 = 54] = "MONEY_MORE_54"
        }(it || (it = {}));
    class Yt {
        static Init() {}
        static GetDesc(t) {
            let e = Yt.GetLevel(t),
                i = Wt.GetCfg(t);
            if (e <= 0) {
                return i.txt
            } {
                let t = i.addVal * e;
                return Qi.getStrTxt(i.desc, t)
            }
        }
        static GetAddVal(t) {
            let e = Wt.GetCfg(t);
            if (!e || 0 != e.type) return 0;
            let i = Yt.GetLevel(t);
            return e.sign * e.addVal * i
        }
        static GetRndVal(t) {
            let e = Wt.GetCfg(t);
            if (!e) return 0;
            let i = Yt.GetLevel(t);
            return e.sign * e.addVal * i * .01
        }
        static GetLevel(t) {
            if (Yi.St == s.Fight && qi.passType != D.Pass) return 0;
            let e = Yi.Avatar.talentDict[t];
            return e || (e = 0), e
        }
        static NeedCost(t) {
            let e = Yt.GetLevel(t),
                i = 0,
                s = Wt.GetCfg(t);
            return e < s.max && (i = s.baseCost + e * s.addCost), i
        }
        static CanUpRed(t) {
            let e = Yi.Avatar,
                i = Yt.NeedCost(t);
            return !!(i && e.talent >= i)
        }
        static IsRed() {
            if (!Lt.CanOpen(b.Talent)) return !1;
            let t = Yi.Avatar,
                e = Wt.GetDict();
            for (let i in e) {
                let s = e[i];
                if (!(Yt.GetLevel(s.id) >= s.max) && !(t.talent < Yt.NeedCost(s.id))) return !0
            }
            return !1
        }
        static UpLevel(t) {
            let e = Wt.GetCfg(t);
            if (e.prev) {
                let t = Wt.GetCfg(e.prev);
                if (!t) return Pi.FlyTxt("The pre-talent logic is wrong", !0, "#FF4E4A"), !1;
                if (Yt.GetLevel(t.id) < t.max) return Pi.FlyTxt(`This talent is ununlocked，${t.name} is not max level`, !0, "#FF4E4A"), !1
            }
            let i = Yt.NeedCost(t);
            if (!i) return Pi.FlyTxt("This talent is max level", !0, "#FF4E4A"), !1;
            if (!Le.HasMoneyByVal(d.talent, i)) {
                Pi.FlyTxt("Lack of talent", !0, "#FF4E4A");
                let t = [17, 18];
                for (let e in t) {
                    let i = t[e],
                        s = Ci.GetShopInfo(i),
                        [n, a, l] = s;
                    if (a < l) break
                }
                return !1
            }
            Le.CostMoneyByVal(d.talent, i);
            let s = Yi.Avatar;
            s.talentDict[t] || (s.talentDict[t] = 0), s.talentDict[t]++, Pi.FlyTxt("update successfully"), _e.GuideDo(ot.ENTER_TALENT_BTN_22, !1), _e.GuideDo(ot.TALENT_ICON_TAP_23, !1), _e.GuideDo(ot.TALENT_UPLV_BTN_24, !1), Xi.SaveApi(!1)
        }
        static TalentClear() {
            let t = Yi.Avatar;
            t.talentDict || (t.talentDict = {});
            let e = Wt.GetDict();
            for (let i in e) {
                let s = e[i],
                    n = Yt.GetLevel(s.id);
                n > 0 && (t.talentDict[s.id] = 0, Le.AddMoneyByVal(d.talent, n))
            }
            Xi.SaveApi(!0)
        }
    }! function (t) {
        t[t.Line = 1] = "Line", t[t.Link = 2] = "Link", t[t.Self = 3] = "Self", t[t.Round = 4] = "Round", t[t.Sides = 5] = "Sides", t[t.Rocket = 6] = "Rocket"
    }(st || (st = {})),
    function (t) {
        t[t.Single = 1] = "Single", t[t.Area = 2] = "Area", t[t.Jump = 3] = "Jump", t[t.Pass = 4] = "Pass", t[t.Shoot = 5] = "Shoot"
    }(nt || (nt = {})),
    function (t) {
        t[t._Zero = 0] = "_Zero", t[t.Stop = 1] = "Stop", t[t.Slow = 2] = "Slow", t[t.Drug = 3] = "Drug", t[t.Fire = 4] = "Fire", t[t.Heavy = 5] = "Heavy", t[t.__Close = 6] = "__Close", t[t.Blood = 7] = "Blood", t[t.Money2 = 9] = "Money2", t[t.Money3 = 10] = "Money3"
    }(at || (at = {}));
    class Kt extends Laya.Box {
        constructor() {
            super(), this.no = null, this.flyIng = !1, this.jumpNum = null, this.pngWidth = null, this.roundFly = null, this.aimWid = null, this.interval = 30, this.t = 0, this._t = 0, this.rocketSpeed = null, this.roundAngle = 0, this.hurtT = null, this.lastHitNo = null
        }
        Init(t, e, i, s, n, a, l, o, r, h, d, u) {
            let c = qi.GetSolider(e);
            if (!c) return !1;
            this.hitSound = d, this.vol = u;
            let p = Wi.atkVal(i, c.lv, c.star) + Yt.GetAddVal(it.ATK_ADD_4),
                f = Yt.GetRndVal(it.ATK_MORE_5);
            f && (p += Math.floor(p * f)), this.atk = p;
            let g = Wi.superdRnd(i, c.lv, c.star);
            if (g) {
                let t = Yt.GetRndVal(it.SUPER_MORE_6);
                t && (g += Math.floor(g * t))
            }
            this.super = g, this.bulletInterval = Wi.bulletInterval(i, c.lv, c.star), this.cut = 0;
            let m = Wi.cutdVal(i, c.lv, c.star);
            m && (this.cut = m);
            let y = Wi.shootVal(i, c.lv, c.star),
                I = Yt.GetAddVal(it.SHOOT_RANGE_1);
            this.shootRange = y + I;
            let b = Wi.rangeVal(i, c.lv, c.star),
                S = Yt.GetAddVal(it.HURT_RANGE_10);
            return this.hurtRange = b ? b + S : 0, this.soliderCfg = Wi.GetCfg(i), this.no = t, this.flyType = this.soliderCfg.flyType, this.resDir = "effectBullet", this.camp = s, this.hitNo = e, this.magic = 0, this.fromX = n, this.fromY = a, this.aimNo = l, this.toX = o, this.toY = r, null !== n && null !== a && this.pos(n, a), this._t = 0, this.t = 0, this.flyIng = !1, this.jumpNum = null, this.hurtT = null, this.aimWid = null, this.lastHitNo = [], this.alpha = 1, this.rotation = 0, this.roundAngle = 0, this.roundFly = 0, this.rocketSpeed = 1, this.scale(1, 1), this.initView(h), this.updateMove(0), Laya.timer.frameLoop(1, this, this.update), !0
        }
        initView(t) {
            this.bulletImg || (this.bulletImg = new Laya.Image, this.addChild(this.bulletImg)), this.name = "", this.width = null, this.height = null, this.bulletImg.scaleX = 1, this.bulletImg.scaleY = 1;
            let e = qt.CenterInfo(this.resDir, this.soliderCfg.bulletSkin),
                i = Laya.loader.getRes(`images/${this.resDir}/${this.soliderCfg.bulletSkin}_1.png`);
            this.pngWidth = i.sourceWidth, this.linkScale = i.sourceWidth / (2 * e.wid), this.pngT = 0, this.pngI = 1, this.pngNum = e.pngs, this.pngInterval = e.interval, this.bulletImg.skin = `images/${this.resDir}/${this.soliderCfg.bulletSkin}_1.png`, qt.InitPivot(this.bulletImg, this.resDir, this.soliderCfg.bulletSkin), this.soliderCfg.flyType == st.Link ? (this.name = `bullet_${this.hitNo}_${this.aimNo}`, this.updateLinkFly(this.pngInterval)) : this.soliderCfg.flyType == st.Round ? (this.name = `bullet_${this.hitNo}_${t}`, this.bulletNum = t) : this.soliderCfg.flyType == st.Rocket && (this.rotation = 270), this._isClear = !1
        }
        setRoundAim(t, e, i, s) {
            if (s) this.clear(100);
            else if (this.aimNo = t, null !== e && null !== i) {
                let t = 360 / i;
                this.roundAngle = e * t
            }
        }
        get goto() {
            if (this._isClear) return null;
            if (this.aimNo) {
                let t = qi.GetEnemy(this.aimNo);
                if (!t) return this.soliderCfg.hurtType == nt.Area ? new Laya.Point(this.toX, this.toY) : (this.clear(120), null);
                if (null === this.aimWid) {
                    let e = H.GetCfg(t.cfgId);
                    switch (t.quality) {
                        case M.Stand:
                            let i = X.CenterInfo("stand", e.skin + "_1");
                            this.aimWid = i.wid, this.toX = t.x, this.toY = t.y;
                            break;
                        case M.Boss:
                        case M.Gold:
                        case M.Daimond:
                            let s = X.CenterInfo("boss", e.skin + "_1");
                            this.aimWid = s.wid, this.toX = t.x, this.toY = t.y - this.aimWid;
                            break;
                        default:
                            let n = X.CenterInfo("fight", e.skin + "_1");
                            this.aimWid = n.wid, this.toX = t.x, this.toY = t.y - this.aimWid
                    }
                }
                return new Laya.Point(t.x, t.y)
            }
            return this.x == this.toX && this.y == this.toY ? (this.clear(250), null) : null !== this.toX && null !== this.toY ? new Laya.Point(this.toX, this.toY) : null
        }
        update() {
            let t = (Laya.timer.currTimer - this._t) * qi.baseSpeed * qi.tdSpeed;
            t > 30 && (t = 30), this.t += t, this.t < this.interval || (this.updateView(t), this.updateMove(this.t), this.t = 0)
        }
        updateView(t) {
            this.pngNum <= 1 || (this.pngT += t, this.pngT < this.pngInterval || (this.bulletImg.skin = `images/${this.resDir}/${this.soliderCfg.bulletSkin}_${this.pngI}.png`, ++this.pngI > this.pngNum && (this.pngI = 1), this.pngT %= this.pngInterval))
        }
        updateMove(t) {
            switch (this.soliderCfg.flyType) {
                case st.Line:
                    this.updateLineFly(t);
                    break;
                case st.Link:
                    this.updateLinkFly(t);
                    break;
                case st.Self:
                    this.updateSelfFly(t);
                    break;
                case st.Round:
                    this.updateRoundFly(t);
                    break;
                case st.Sides:
                    this.updateSidesFly(t);
                    break;
                case st.Rocket:
                    this.updateRocketFly(t)
            }
        }
        updateRocketFly(t) {
            if (Li.IsOpen(S.Exit)) return;
            if (Li.IsOpen(S.Pause)) return;
            if (Li.IsOpen(S.StarDesc)) return;
            t = t * qi.baseSpeed * qi.tdSpeed;
            let e = .001 * this.soliderCfg.bulletSpeed * t * this.rocketSpeed;
            if (null !== this.aimNo) {
                if (this.rocketSpeed *= 1 + t / 620, this.y -= e, this.y <= -400) {
                    let t = qi.GetEnemy(this.aimNo);
                    t && (this.toX = t.x, this.toY = t.y), this.x = this.toX, this.aimNo = null, this.rotation = 90
                }
            } else this.rocketSpeed += t / 500, this.y += e, this.y >= this.toY && (this.y = this.toY, this.makeHurt(t))
        }
        updateSidesFly(t) {
            if (!this.goto) return void this.clear(0);
            if (Li.IsOpen(S.Exit)) return;
            if (Li.IsOpen(S.Pause)) return;
            if (Li.IsOpen(S.StarDesc)) return;
            let e = .001 * this.soliderCfg.bulletSpeed * t;
            if (e >= Qi.dist(this.x, this.y, this.goto.x, this.goto.y)) return void this.clear(0);
            let i = Qi.angle(this.x, this.y, this.goto.x, this.goto.y);
            this.x += Qi.moveToX(i, e), this.y += Qi.moveToY(i, e), this.soliderCfg.hurtType == nt.Shoot ? (this.rotation = i, this.makeHurt(t)) : this.rotation = i
        }
        updateLineFly(t) {
            if (!this.goto) return;
            if (Li.IsOpen(S.Exit)) return;
            if (Li.IsOpen(S.Pause)) return;
            if (Li.IsOpen(S.StarDesc)) return;
            let e = .001 * this.soliderCfg.bulletSpeed * t;
            if (e >= Qi.dist(this.x, this.y, this.goto.x, this.goto.y)) return this.pos(this.goto.x, this.goto.y), void this.makeHurt(null);
            let i = Qi.angle(this.x, this.y, this.goto.x, this.goto.y);
            if (this.soliderCfg.hurtType == nt.Jump) {
                let t = 6;
                null !== this.jumpNum ? (e -= (this.soliderCfg.jumpNum - this.jumpNum) / this.soliderCfg.jumpNum * .425 * e, this.rotation += t + (this.soliderCfg.jumpNum - this.jumpNum) * t) : this.rotation += t
            } else this.soliderCfg.hurtType == nt.Pass ? (-1 != ["bulletE7", "bulletE4"].indexOf(this.soliderCfg.bulletSkin) ? this.rotation = i : this.rotation += 14, this.makeHurt(t)) : this.soliderCfg.hurtType == nt.Shoot ? (-1 != ["bulletC14"].indexOf(this.soliderCfg.bulletSkin) ? this.rotation += 9 : this.rotation = i, this.makeHurt(t)) : -1 != ["bulletE1"].indexOf(this.soliderCfg.bulletSkin) ? this.rotation += 16 : this.rotation = i;
            this.x += Qi.moveToX(i, e), this.y += Qi.moveToY(i, e)
        }
        updateLinkFly(t) {
            let e = qi.GetSolider(this.hitNo);
            if (!e) return void this.clear(0);
            if (-1 == e.links.indexOf(this.aimNo)) return void this.clear(0);
            let i = qi.GetEnemy(this.aimNo);
            if (!i) return void qi.LinkDele(e, this.aimNo);
            if (this.scaleY = 1 + .12 * (e.star - 1), null === this.aimWid) {
                let t = H.GetCfg(i.cfgId);
                switch (i.quality) {
                    case M.Stand:
                        let e = X.CenterInfo("stand", t.skin + "_1");
                        this.aimWid = e.wid;
                        break;
                    case M.Boss:
                    case M.Gold:
                    case M.Daimond:
                        let s = X.CenterInfo("boss", t.skin + "_1");
                        this.aimWid = s.wid;
                        break;
                    default:
                        let n = X.CenterInfo("fight", t.skin + "_1");
                        this.aimWid = n.wid
                }
            }
            let s = i.x,
                n = i.y - this.aimWid;
            i.quality == M.Stand && (n = i.y);
            let a = (e.x + s) / 2,
                l = (e.y + n) / 2;
            this.pos(a, l);
            let o = Qi.dist(e.x, e.y, s, n);
            this.bulletImg.scaleX = o / this.pngWidth * this.linkScale;
            let r = Qi.angle(e.x, e.y, s, n);
            this.rotation = r, this.makeHurt(t)
        }
        updateSelfFly(t) {
            if (this.flyIng) return;
            this.flyIng = !0;
            let e = qt.CenterInfo(this.resDir, this.soliderCfg.bulletSkin),
                i = this.hurtRange / e.wid;
            Hi.SmallBigLoop(this, this.soliderCfg.bulletSpeed, .2, i, i, null, function () {
                this.makeHurt(null)
            }.bind(this))
        }
        updateRoundFly(t) {
            let e = qi.GetSolider(this.hitNo);
            if (!e) return void this.clear(0);
            if (this.rotation += this.soliderCfg.bulletSpeed > 0 ? 8 : -8, Li.IsOpen(S.Exit)) return;
            if (Li.IsOpen(S.Pause)) return;
            if (Li.IsOpen(S.StarDesc)) return;
            let i = qi.GetEnemy(this.aimNo);
            i || (this.aimNo = null);
            let s = null,
                n = this.toX,
                a = this.toY,
                l = Qi.dist(n, a, this.x, this.y);
            if (null === this.aimNo) {
                if (!(l > 5)) return void this.clear(0);
                this.roundFly -= .48
            } else {
                s = Qi.angle(n, a, i.x, i.y);
                let t = Qi.dist(n, a, i.x, i.y) - l,
                    e = [.78, 1.2, 1.48, 1.82],
                    o = e[0];
                t > 64 ? o = e[3] : t > 36 ? o = e[2] : t > 18 && (o = e[1]), t >= -5 && t <= 5 || (t > 5 ? this.roundFly += o : t < -5 && (this.roundFly -= o))
            }
            this.roundFly < 0 && (this.roundFly = 0);
            let o = this.toX,
                r = this.toY,
                h = this.soliderCfg.bulletSpeed * [0, 1, .88, .76][e.star] * t / 1e3,
                d = this.roundFly / this.shootRange * 1.2;
            d > 1 && (d = 1), this.roundAngle += h * d;
            let u = this.roundFly;
            this.x = o + Qi.moveToX(this.roundAngle, u), this.y = r + Qi.moveToY(this.roundAngle, u);
            let c = this.roundFly / this.shootRange * 2.5;
            c > 1 && (c = 1), this.scale(c, c), this.makeHurt(t), Math.abs(this.roundAngle) > 360 && (this.lastHitNo = [], this.roundAngle %= 360)
        }
        makeHurt(t) {
            if (!this._isClear) {
                if (this.soliderCfg.flyType == st.Line) - 1 != [nt.Single, nt.Area].indexOf(this.soliderCfg.hurtType) ? this.clear(0) : [nt.Jump, nt.Pass, nt.Shoot].indexOf(this.soliderCfg.hurtType);
                else if (this.soliderCfg.flyType == st.Self) this.clear(0);
                else if (this.soliderCfg.flyType == st.Link) {
                    if (Li.IsOpen(S.Exit)) return;
                    if (Li.IsOpen(S.Pause)) return;
                    if (Li.IsOpen(S.StarDesc)) return;
                    if (null === this.hurtT && (this.hurtT = this.bulletInterval), this.hurtT -= t, this.hurtT > 0) return;
                    this.hurtT = this.bulletInterval, Z.TryHitSound(this.hitSound, this.vol)
                } else this.soliderCfg.flyType == st.Round || this.soliderCfg.flyType == st.Rocket && (Z.TryHitSound(this.hitSound, this.vol), this.clear(0));
                if (-1 != [nt.Single, nt.Area, nt.Pass, nt.Shoot].indexOf(this.soliderCfg.hurtType)) {
                    if (this.soliderCfg.hurtType == nt.Area && this.soliderCfg.flyType == st.Round) {
                        let t = this.hurtRange,
                            e = qi.GetEnemyList(null);
                        for (let i in e) {
                            let s = e[i];
                            s._isClear || (s.blood <= 0 || Qi.dist(this.x, this.y, s.x, s.y) > t + s.bodyWid || -1 == this.lastHitNo.indexOf(s.no) && (this.lastHitNo.push(s.no), this.soliderCfg.flyType == st.Round && Z.TryHitSound(this.hitSound, this.vol), s.onHurt(this.hitNo, this.no, this.atk, this.magic, this.cut, this.super, 270, 80, this.soliderCfg.hurtDelay, this.hurtRange, null, null, this.soliderCfg.flyType, null)))
                        }
                        return
                    }
                    let t = null;
                    if (this.aimNo) {
                        let e = qi.GetEnemy(this.aimNo);
                        e && (t = e.quality, this.soliderCfg.hurtType == nt.Area ? e.onHurt(this.hitNo, this.no, this.atk, this.magic, this.cut, this.super, this.rotation, 160, this.soliderCfg.hurtDelay, this.hurtRange, null, null, this.soliderCfg.flyType, null) : e.onHurt(this.hitNo, this.no, this.atk, this.magic, this.cut, this.super, this.rotation, 160, this.soliderCfg.hurtDelay, this.hurtRange, this.x, this.y, this.soliderCfg.flyType, null))
                    }
                    if (this.soliderCfg.hurtType == nt.Single);
                    else if (this.soliderCfg.hurtType == nt.Area) {
                        let e = null;
                        this.soliderCfg.flyType == st.Line && (e = t != M.Stand);
                        let i = this.hurtRange,
                            s = qi.GetEnemyList(e);
                        for (let t in s) {
                            let e = s[t];
                            if (!e._isClear && !(e.blood <= 0 || this.aimNo == e.no || Qi.dist(this.x, this.y, e.x, e.y) > i + e.bodyWid)) {
                                if (this.soliderCfg.flyType == st.Round) {
                                    if (-1 != this.lastHitNo.indexOf(e.no)) continue;
                                    this.lastHitNo.push(e.no)
                                }
                                nt.Area, this.soliderCfg.flyType == st.Line && (this.atk = Math.round(1 * this.atk), this.magic = Math.round(1 * this.magic)), e.onHurt(this.hitNo, this.no, this.atk, this.magic, this.cut, this.super, 270, 80, this.soliderCfg.hurtDelay, this.hurtRange, null, null, this.soliderCfg.flyType, null)
                            }
                        }
                    } else if (this.soliderCfg.hurtType == nt.Pass) {
                        let t = this.hurtRange,
                            e = qi.GetEnemyList(null);
                        for (let i in e) {
                            let s = e[i];
                            if (s._isClear) continue;
                            if (s.blood <= 0) continue;
                            if (this.aimNo == s.no) continue;
                            if (Qi.dist(this.x, this.y, s.x, s.y) > t) continue;
                            if (-1 != this.lastHitNo.indexOf(s.no)) continue;
                            this.lastHitNo.push(s.no), null === this.jumpNum && (this.jumpNum = 0, Math.floor(100 * Math.random()) < this.super && (this.super = 100));
                            let n = this.atk;
                            if (this.jumpNum > 0 && (n = this.atk * Math.pow(.88, this.jumpNum)), n <= 0) break;
                            if (s.onHurt(this.hitNo, this.no, n, this.magic, this.cut, this.super, 270, 80, this.soliderCfg.hurtDelay, this.hurtRange, this.x, this.y, this.soliderCfg.flyType, null), this.jumpNum++, ++this.jumpNum >= 5) break
                        }
                    } else if (this.soliderCfg.hurtType == nt.Shoot) {
                        let t = this.hurtRange,
                            e = null,
                            i = null,
                            s = qi.GetEnemyList(null);
                        for (let n in s) {
                            let a = s[n];
                            if (a._isClear) continue;
                            if (a.blood <= 0) continue;
                            if (this.aimNo == a.no) continue;
                            let l = Qi.dist(this.x, this.y, a.x, a.y);
                            if (a.quality == M.Stand) {
                                if (l > t + .5 * a.bodyWid) continue
                            } else if (l > t + .2 * a.bodyWid) continue;
                            null !== i && l > i || (i = l, e = a.no)
                        }
                        if (null !== e) {
                            qi.GetEnemy(e).onHurt(this.hitNo, this.no, this.atk, this.magic, this.cut, this.super, 270, 80, this.soliderCfg.hurtDelay, this.hurtRange, this.x, this.y, this.soliderCfg.flyType, null), this.clear(0)
                        }
                    }
                } else if (this.soliderCfg.hurtType == nt.Jump) {
                    if (null === this.jumpNum) {
                        this.jumpNum = this.soliderCfg.jumpNum, 3 == qi.GetSoliderStar(this.hitNo) && (this.jumpNum += 1), Math.floor(100 * Math.random()) < this.super ? this.super = 100 : this.super = 0
                    }
                    if (this.aimNo) {
                        let t = qi.GetEnemy(this.aimNo);
                        if (!t) return void this.clear(0);
                        let e = this.atk;
                        if (null !== this.jumpNum) {
                            if (3 == this.jumpNum);
                            else if (2 == this.jumpNum) {
                                e = Math.floor(.3 * e);
                                let t = Yt.GetRndVal(it.JUMP_HURT_11);
                                e = Math.floor(e * (1 + t))
                            } else if (1 == this.jumpNum) {
                                e = Math.floor(.18 * e);
                                let t = Yt.GetRndVal(it.JUMP_HURT_11);
                                e = Math.floor(e * (1 + t))
                            }
                            this.magic = this.magic - .4 * this.magic * (this.soliderCfg.jumpNum - this.jumpNum) / this.soliderCfg.jumpNum, this.magic = Math.floor(this.magic)
                        }
                        if (t.onHurt(this.hitNo, this.no, e, this.magic, this.cut, this.super, this.rotation, 160, this.soliderCfg.hurtDelay, this.hurtRange, this.x, this.y, this.soliderCfg.flyType, null), t.quality == M.Stand) return void this.clear(0);
                        if (--this.jumpNum <= 0) return void this.clear(0);
                        this.lastHitNo.push(t.no), this.aimNo = null;
                        let i = null,
                            s = qi.GetEnemyList(!0);
                        for (let t in s) {
                            let e = s[t];
                            if (e._isClear) continue;
                            if (e.blood <= 0) continue;
                            if (-1 != this.lastHitNo.indexOf(e.no)) continue;
                            let n = Qi.dist(this.x, this.y, e.x, e.y);
                            n > this.shootRange || (null !== i && n > i || (i = n, this.aimNo = e.no))
                        }
                    }
                    if (null === this.aimNo) return void this.clear(0)
                }
                this.hitNo && this.soliderCfg.flyType != st.Self && this.soliderCfg.flyType != st.Link && this.soliderCfg.hurtType != nt.Pass && this.soliderCfg.hurtType != nt.Shoot && this.soliderCfg.bombSkin && qi.AddExplode(ut.Bullet, this.soliderCfg.bombSkin, this.x, this.y, this.hurtRange)
            }
        }
        clear(t = 0) {
            this.name = "", this._isClear = !0, t <= 0 ? (Laya.timer.clear(this, this.update), qi.clearOneBullet(this.no), this.removeSelf(), Laya.Pool.recover("Bullet", this)) : Laya.Tween.to(this, {
                alpha: 0
            }, t, null, Laya.Handler.create(this, function () {
                this.clear(0)
            }.bind(this)))
        }
        clearLock(t) {
            if (this.aimNo != t) return;
            this.aimNo = null;
            let e = null;
            switch (this.soliderCfg.flyType) {
                case st.Line:
                case st.Sides:
                    e = 120;
                    break;
                case st.Rocket:
                case st.Link:
                case st.Self:
                case st.Round:
            }
            switch (this.soliderCfg.hurtType) {
                case nt.Single:
                case nt.Jump:
                    e = 120;
                    break;
                case nt.Area:
                    e = 0;
                    break;
                case nt.Pass:
                case nt.Shoot:
            }
            e > 0 && this.clear(e)
        }
    }
    class Xt {
        constructor() {}
        Init(t, e, i, s, n, a, l, o, r, h) {
            this.hurtNo = t, this.atk = e, this.magic = i, this.effectName = s, this.type = n, this.hitNo = h, this.count = l || 1, this.hurtRange = o, this.hurtVal = r, this.timer = [], this.timer.push(0), this.stepT = Math.floor(a / this.count);
            for (let t = 1; t <= this.count; t++) this.timer.push(this.stepT)
        }
        clear() {
            this.effObj && (this.effObj.clear(), this.effObj = null), Laya.Pool.recover("DelayM", this)
        }
        tryClear() {
            if (this.timer.length <= 0) return this.clear(), !0
        }
        update(t) {
            let e = qi.GetEnemy(this.hurtNo);
            if (e && (this.effObj && "delaySlow" !== this.effectName && this.effObj.pos(e.x, e.y), !(this.timer.length <= 0 || (this.timer[0] -= t, this.timer[0] > 0)))) {
                if (this.timer.shift(), !this.effObj)
                    if ("delaySlow" == this.effectName) {
                        let t = qi.GetEnemy(this.hurtNo);
                        if (!t) return;
                        t.quality == M.Boss ? this.effObj = Pi.AddEffect(t, "boss", this.effectName, null, 99999999, 0, 0) : this.effObj = Pi.AddEffect(t, "fight", this.effectName, null, 99999999, 0, 0)
                    } else this.effObj = Pi.AddEffect(qi.GetLayer(ut.Delay), "effectDelay", this.effectName, null, 99999999, e.x, e.y);
                if (e = qi.GetEnemy(this.hurtNo)) {
                    switch (this.type) {
                        case at._Zero:
                            break;
                        case at.Stop:
                            let t = this.stepT;
                            e.SetDelay(this.type, t, null);
                            break;
                        case at.__Close:
                            let i = this.stepT;
                            e.SetDelay(this.type, i, null);
                            break;
                        case at.Slow:
                            let s = this.stepT,
                                n = .01 * this.hurtVal;
                            e.SetDelay(this.type, s, n);
                            break;
                        case at.Heavy:
                            e.SetDelay(this.type, this.stepT, null);
                            break;
                        case at.Drug:
                            if (this.count - this.timer.length < 0) return;
                            let a = .01 * this.hurtVal;
                            a += Yt.GetRndVal(it.DRUG_MORE_18);
                            let l = Math.floor(this.atk * a),
                                o = Math.floor(this.magic * a);
                            e.onHurt(null, null, l, o, 0, 0, null, 100, null, null, null, null, null, this.hitNo);
                            break;
                        case at.Blood:
                            if (this.count - this.timer.length < 0) return;
                            let r = .01 * this.hurtVal;
                            r += Yt.GetRndVal(it.BLOOD_MORE_20);
                            let h = Math.floor(this.atk * r),
                                u = Math.floor(this.magic * r);
                            e.onHurt(null, null, h, u, 0, 0, null, 100, null, null, null, null, null, this.hitNo);
                            break;
                        case at.Fire:
                            if (this.count - this.timer.length < 0) return;
                            let c = .01 * this.hurtVal;
                            c += Yt.GetRndVal(it.FIRE_MORE_19);
                            let p = Math.floor(this.atk * c),
                                f = Math.floor(this.magic * c);
                            e.onHurt(null, null, p, f, 0, 0, null, 100, null, null, null, null, null, this.hitNo);
                            break;
                        case at.Money2:
                        case at.Money3:
                            if (0 != this.count - this.timer.length) return;
                            let g = 2;
                            Jt.dropGold += g, Jt.delayMoneySum[this.hitNo] || (Jt.delayMoneySum[this.hitNo] = 0), Jt.delayMoneySum[this.hitNo] += g, Le.AddMoneyByVal(d.money, g);
                            let m = mt.topX + e.x,
                                y = mt.topY + e.y;
                            Pi.FlyDrop([
                                [d._money, g]
                            ], m, y, null, null, null, 1), Pi.FlyMoneyPng(g, e.x, e.y)
                    }
                    this.timer.length
                }
            }
        }
    }
    class Jt {
        static Init() {}
        static InitDelay() {
            Jt.rndCache = {}
        }
        static getRndVal(t, e, i, s) {
            if (!1 === Jt.rndCache[t] || !0 === Jt.rndCache[t]) return Jt.rndCache[t];
            if (e == at.Stop) {
                s += Yt.GetAddVal(it.STOP_ADD_12)
            } else if (e == at.__Close) {
                s += Yt.GetAddVal(it.CLOSE_ADD_14)
            } else if (e == at.Money2) {
                s += Yt.GetAddVal(it.MONEY_MORE_54)
            } else if (e == at.Money3) {
                s += Yt.GetAddVal(it.MONEY_MORE_54)
            }
            let n = Qi.RandomInt(0, 100) <= s;
            return i != st.Round && e != at.Money2 && e != at.Money3 && (Jt.rndCache[t] = n), n
        }
        static AddDelay(t, e, i, s, n, a, l, o, r) {
            if (null === a) return;
            let h, d, u, c, p, f, g, m = qi.GetEnemy(e);
            if (!m) return;
            let y = null;
            if ([h, d, u, f, g, c, p] = a, m.quality == M.Stand && d != at.Fire) return;
            let I = u;
            if (c && p && (2 == i ? I = c : 3 == i && (I = p)), Jt.delayDict[e] || (Jt.delayDict[e] = []), d === at._Zero) Pi.FlyTxt("bulletDelay._Zero");
            else {
                let i = Qi.RandomInt(0, 100);
                switch (d) {
                    case at.Stop:
                    case at.__Close:
                    case at.Money2:
                    case at.Money3:
                        if (!1 === Jt.getRndVal(t, d, o, I)) return;
                        break;
                    case at.Drug:
                    case at.Blood:
                    case at.Fire:
                    case at.Slow:
                        y = I;
                        break;
                    case at.Heavy:
                    default:
                        if (i > I) return
                }
                for (let t in Jt.delayDict[e]) {
                    if (Jt.delayDict[e][t].type == d) return
                }
            }
            if (m.quality !== M.Stand) switch (d) {
                case at.Stop:
                    let t = Yt.GetRndVal(it.STOP_LONG_13);
                    f = Math.round(f * (1 + t)), f = Math.round(f * (100 - m.slow) / 100);
                    break;
                case at.__Close:
                    let e = Yt.GetRndVal(it.CLOSE_LONG_15);
                    f = Math.round(f * (1 + e)), f = Math.round(f * (100 - m.slow) / 100);
                    break;
                case at.Slow:
                    let i = Yt.GetRndVal(it.SLOW_LONG_17);
                    f = Math.round(f * (1 + i)), y = (y *= 1 + Yt.GetRndVal(it.SLOW_SPEED_16)) * (100 - m.slow) / 100
            }
            let b = Laya.Pool.getItemByClass("DelayM", Xt);
            b.Init(e, s, n, h, d, f, g, l, y, r), Jt.delayDict[e].push(b)
        }
        static DeleDelay(t) {
            if (Jt.delayDict[t]) {
                for (let e in Jt.delayDict[t]) {
                    Jt.delayDict[t][e].clear(), delete Jt.delayDict[t][e]
                }
                delete Jt.delayDict[t]
            }
        }
        static SetSlowDelay(t, e, i) {
            let s = qi.GetEnemy(t);
            if (!s) return;
            s.SetDelay(at.Slow, e, i);
            let n = Laya.Pool.getItemByClass("DelayM", Xt);
            n.Init(t, 0, 0, "delaySlow", at.Slow, e, 1, 0, i, null), Jt.delayDict[t] || (Jt.delayDict[t] = []), Jt.delayDict[t].push(n)
        }
        static Update(t) {
            t *= qi.baseSpeed * qi.tdSpeed * qi.lvSpeed;
            for (let e in Jt.delayDict)
                if (Jt.delayDict[e]) {
                    for (let i in Jt.delayDict[e]) {
                        let s = Jt.delayDict[e][i];
                        s && s.update(t), s && s.tryClear() && Jt.delayDict[e].splice(i, 1)
                    }
                    0 == Jt.delayDict[e].length && delete Jt.delayDict[e]
                }
        }
    }
    Jt.delayDict = {}, Jt.dropGold = 0, Jt.rndCache = null,
        function (t) {
            t[t.One = 1] = "One", t[t.Five = 5] = "Five", t[t.Two = 2] = "Two", t[t.Three = 3] = "Three", t[t.Four = 4] = "Four", t[t.Six = 6] = "Six"
        }(lt || (lt = {}));
    class Qt {
        static Init() {
            Qt.InitFight(), K.On(e.VIDEO_FINISH, Qt, Qt.onVideoAdDone)
        }
        static onVideoAdDone(e, i) {
            e == t.FillKillNum && (Li.Close(S.Pause), Qt.FillKillNum(i))
        }
        static InitFight() {
            Qt.coldT = 0, Qt.killWait = {}, Qt.throwEd = {};
            let t = jt.GetDict();
            for (let e in t) {
                let i = t[e];
                Qt.killWait[i.id] = 1e3 * i.wait, Qt.throwEd[i.id] = 0
            }
        }
        static GetKillCold() {
            if (null === Qt.coldT) return 1;
            let t = Q.GetVal("kill_skill_cold_sec", 5);
            return Qt.coldT / (1e3 * t)
        }
        static GetKillWait(t) {
            let e = Qt.killWait[t];
            return e < 0 ? 0 : e
        }
        static GetKillThrow(t) {
            let e = Qt.throwEd[t];
            return e || 0
        }
        static GetKillNum(t) {
            let e = Yi.Avatar;
            e.killDict || (e.killDict = {});
            let i = jt.GetCfg(t);
            return e.killDict[t] || 0 === e.killDict[t] || (e.killDict[t] = i.max), e.killDict[t] && 2 == e.killDict[t].length && (e.killDict[t] = i.max), e.killDict[t] < 0 && (e.killDict[t] = 0), e.killDict[t]
        }
        static FillKillNum(t) {
            Qt.GetKillNum(t);
            let i = Yi.Avatar,
                s = jt.GetCfg(t);
            i.killDict[t] += s.max, Pi.FlyTxt(`Successfully replenished ${s.title} for ${s.max} times`), K.Evt(e.KILL_AD_FILL, [t]), Xi.SaveApi(!0)
        }
        static KillThrow(t) {
            if (Qt.GetKillThrow(t) > 0) return void Pi.FlyTxt("Use a special skill once per limit");
            if (Qt.GetKillCold() > 0) return void Pi.FlyTxt("All special abilities are cooling down");
            let i = jt.GetCfg(t);
            if (Qt.GetKillWait(t) > 0) return void Pi.FlyTxt(`${i.title} in preparation`);
            if (Qt.GetKillNum(t) <= 0) {
                if (!Le.HasMoneyByVal(d.diamond, i.diamond)) return void Pi.FlyTxt("Lack of skills and diamonds");
                if (!Le.CostMoneyByVal(d.diamond, i.diamond)) return void Pi.FlyTxt("Lack of diamonds")
            }
            switch (t) {
                case lt.Five:
                    if (!Qt.throwKill5(!1)) return void Pi.FlyTxt("No target");
                    break;
                case lt.One:
                    if (!Qt.throwKill1()) return void Pi.FlyTxt("No target")
            }
            qi.tdSpeed = 1, K.Evt(e.ST_CHANGE);
            let s = Yi.Avatar;
            s.killDict[t]--, s.killDict[t] < 0 ? Xi.AppendOperation(ct.Skill, t, i.diamond) : Xi.AppendOperation(ct.Skill, t, 0), Qt.throwEd[t]++, Qt.coldT = null
        }
        static enemyCenterPos() {
            let t = qi.GetEnemyList(!0, !0);
            if (t.length <= 0) return null;
            let e = 0,
                i = 0;
            for (let s in t) {
                let n = t[s];
                e += n.x, i += n.y
            }
            let s = e / t.length,
                n = i / t.length + 35;
            return n < 180 && (n = 180), [mt.topX + s, mt.topY + n]
        }
        static throwKill5(t = !1) {
            let e = qi.GetEnemyList(!0, !0);
            if (!e || e.length < 1) return !1;
            Qt.kill5Ing = !0;
            let i = jt.GetCfg(lt.Five),
                [s, n, a] = i.effect,
                l = [];
            for (let t in e) {
                let i = e[t],
                    s = i.endDist();
                l.push({
                    No: i.no,
                    dist: s,
                    x: i.x,
                    y: i.y
                })
            }
            let o = Qi.ArrSort(l, "dist", !1),
                r = null,
                h = 0;
            for (; h < 3;) {
                o && o.length && (r = o.pop());
                let t = r.No,
                    e = r.x,
                    l = r.y,
                    d = qi.GetEnemy(t),
                    u = Math.floor(.62 * d.fullBlood),
                    c = Math.floor(.5 * u);
                setTimeout(function () {
                    let o = Pi.KillEffect(pe.GetLayer(), s, n);
                    o.pos(mt.topX + e, -480), o.alpha = .5, Laya.Tween.to(o, {
                        y: mt.topY + l
                    }, 180, null, Laya.Handler.create(Qt, function () {
                        Laya.Tween.to(o, {
                            scaleX: 1.8,
                            scaleY: 1.8,
                            alpha: 1
                        }, 80), mt.MapSquart(), Z.Play(i.sound), Hi.FlashEffect(mt.GetLayer(), 38, 30);
                        let n = qi.GetEnemy(t);
                        n && (n.onHurt(null, null, u, 0, 0, 0, null, 100, null, null, null, null, null, null), Pi.AddEffect(n, s, a));
                        let r = qi.GetEnemyList(!0, !0);
                        for (let i in r) {
                            let n = r[i],
                                o = Qi.dist(e, l, n.x, n.y);
                            n.no != t && o <= 130 && (n.onHurt(null, null, c, 0, 0, 0, null, 100, null, null, null, null, null, null), Pi.AddEffect(n, s, a))
                        }
                    }))
                }, 180 + 500 * h), h++
            }
            return setTimeout(function () {
                Qt.kill5Ing = !1
            }, 1e3 + 500 * h), !0
        }
        static throwKill1() {
            let t = qi.GetEnemyList(!0, !0);
            if (!t || t.length < 1) return !1;
            Qt.kill1Ing = !0;
            let e, i, s = jt.GetCfg(lt.One),
                [n, a, l] = s.effect,
                o = .5 * Laya.stage.width,
                r = .5 * Laya.stage.height,
                h = Qt.enemyCenterPos();
            h && ([o, r] = h);
            let d = [];
            e = Qi.moveToX(42, 75), i = Qi.moveToY(42, 75), d.push([e, i]), e = Qi.moveToX(160, 142), i = Qi.moveToY(160, 142), d.push([e, i]), e = Qi.moveToX(300, 165), i = Qi.moveToY(300, 165), d.push([e, i]), e = Qi.moveToX(16, 220), i = Qi.moveToY(16, 220), d.push([e, i]), e = Qi.moveToX(225, 160), i = Qi.moveToY(225, 160), d.push([e, i]), e = Qi.moveToX(42, 20), i = Qi.moveToY(42, 20), d.push([e, i]);
            for (let t in d) d[t][0] += o, d[t][1] += r;
            let u = [],
                c = 0;
            for (; c < d.length;) {
                let t = d[c][0],
                    e = d[c][1],
                    i = t - 190,
                    o = e - 260;
                setTimeout(function () {
                    let l = Pi.KillEffect(pe.GetLayer(), n, a, null, 1, i, o);
                    l.scale(2, 2), l.alpha = .8, Laya.Tween.to(l, {
                        x: t,
                        y: e
                    }, 160, null, Laya.Handler.create(Qt, function () {
                        Hi.FlashEffect(mt.GetLayer(), 38, 30), mt.MapSquart(), Z.Play(s.sound)
                    }))
                }, 150 + 500 * c * 1.1), c % 2 == 0 && setTimeout(function () {
                    let t = qi.GetEnemyList(!0, !0);
                    for (let e in t) {
                        let i = t[e],
                            s = Math.floor(.05 * i.blood),
                            a = Math.floor(.02 * i.fullBlood);
                        s < a && (s = a), i.onHurt(null, null, s, 0, 0, 0, null, 100, null, null, null, null, null, null), Pi.AddEffect(i, n, l), -1 === u.indexOf(i.no) && (u.push(i.no), Jt.SetSlowDelay(i.no, 11e3, .66))
                    }
                }, 150 + 500 * c * 1.1), c++
            }
            return setTimeout(function () {
                Qt.kill1Ing = !1
            }, 1500 + 500 * c * 1.1), !0
        }
        static Update(t) {
            if (null === Qt.coldT) {
                let t = Q.GetVal("kill_skill_cold_sec", 5);
                Qt.coldT = 1e3 * t
            }
            t = Math.floor(t * qi.tdSpeed * qi.lvSpeed), Qt.coldT -= t;
            for (let e in Qt.killWait) Qt.killWait[e] && (Qt.killWait[e] -= t)
        }
        static __getColdSec(t, e, i) {
            return t + (i - 1) * e
        }
        static __KillGuide() {
            _e.GuideDo(19, !1), Qt.throwKill5(!0)
        }
        static __GetKillVal(t) {
            let e = Qt.__GetKillLv(t),
                i = jt.GetCfg(t);
            return i.__valBase + i.__valAdd * (e - 1)
        }
        static __GetKillLv(t) {
            let [e, i] = this.GetKillNum(t);
            return e
        }
        static __UpNeedGold(t, e) {
            let i = jt.GetCfg(t);
            return i.__goldBase + (e - 1) * i.__goldAdd
        }
        static __IsKillActive() {
            let t = jt.GetDict();
            for (let e in t) {
                let i = t[e];
                if (Qt.__GetKillLv(i.id)) return !0
            }
            return !1
        }
        static __IsKillUpRed() {
            let t = jt.GetDict();
            for (let e in t) {
                let i = t[e];
                if (Qt.__CanUpKill(i.id, !1)) return !0;
                if (Qt.__CanActiveKill(i.id, !1)) return !0
            }
            return !1
        }
        static __CanActiveKill(t, e = !0) {
            if (Qt.__GetKillLv(t) > 0) return !1;
            let i = Yi.Avatar,
                s = jt.GetCfg(t);
            if (i.passLv < s.openLv) return e && (Z.Play(L.no), Pi.FlyTxt(`It can be activated after reaching level ${s.openLv}`)), !1;
            if (0 < s.__openHero) {
                if (e) {
                    Z.Play(L.no);
                    let e = It.JobTxt[t];
                    Pi.FlyTxt(`Get epic ${e}hero, which can be activated`)
                }
                return !1
            }
            return !!Le.HasMoneyByVal(d.gold, s.__openGold) || (e && (Z.Play(L.no), Pi.FlyTxt("Not enough gold to activate")), !1)
        }
        static __CanUpKill(t, e = !0) {
            let i = Qt.__GetKillLv(t);
            if (i <= 0) return !1;
            let s = jt.GetCfg(t);
            if (i >= s.__maxLv) return e && (Z.Play(L.no), Pi.FlyTxt(`${s.title} max level`)), !1;
            let n = Qt.__UpNeedGold(t, i);
            return !!Le.HasMoneyByVal(d.gold, n) || (e && (Z.Play(L.no), Pi.FlyTxt("Not enough gold to upgrade")), !1)
        }
        static __KillUpLv(t) {
            if (Qt.__GetKillLv(t) <= 0) {
                if (!Qt.__CanActiveKill(t, !0)) return;
                let e = jt.GetCfg(t);
                if (!Le.CostMoneyByVal(d.gold, e.__openGold)) return void Pi.FlyTxt("Not enough gold to activate");
                Pi.FlyTxt("Activate the success")
            } else {
                if (!Qt.__CanUpKill(t, !0)) return;
                Pi.FlyTxt("Update successfully")
            }
            Z.Play(L.up);
            Yi.Avatar;
            Xi.SaveApi(!1)
        }
        static throwKill2() {
            let t = Qt.enemyCenterPos();
            t || (t = [.5 * Laya.stage.width, .5 * Laya.stage.height]);
            let [e, i] = t, s = e, n = (i += 25) - 580, a = 1;
            e < .5 * Laya.stage.width ? (s += 400, a = -1) : s -= 400, Qt.kill2Ing = !0;
            let l = jt.GetCfg(lt.Two),
                [o, r, h, d] = l.effect,
                u = 0,
                c = Qt.__GetKillVal(lt.Two),
                p = qi.GetEnemyList(null),
                f = p.length;
            for (let t = 0; t <= 6; t++) {
                let g = p[t % f];
                setTimeout(() => {
                    let u = g.x + -a * (430 + 70 * Math.random()),
                        f = g.y - 600 - 100 * Math.random();
                    u = u - 100 + 200 * Math.random(), f = f - 100 + 200 * Math.random();
                    let m = Pi.KillEffect(pe.GetLayer(), o, d, null, 1, u, f);
                    m.scale(.2 * a, .2), m.alpha = .3, Laya.Tween.to(m, {
                        x: g.x,
                        y: g.y,
                        scaleX: 1 * a,
                        scaleY: 1,
                        alpha: 1
                    }, 300, null, Laya.Handler.create(Qt, function () {
                        mt.MapSquart()
                    })), -1 != [1, 3, 5].indexOf(t) && setTimeout(() => {
                        let t = Pi.KillEffect(pe.GetLayer(), o, r, null, 1, s, n);
                        t.scale(1 * a, 1);
                        let d = Math.random() < .5 ? -1 : 1,
                            u = 45 + 75 * Math.random(),
                            f = Math.random() < .5 ? -1 : 1,
                            g = 70 + 80 * Math.random(),
                            m = e + d * u,
                            y = i + f * g;
                        Laya.Tween.to(t, {
                            x: m,
                            y: y,
                            scaleX: 1.8 * a,
                            scaleY: 1.8
                        }, 240, null, Laya.Handler.create(Qt, function () {
                            setTimeout(() => {
                                Z.Play(l.sound)
                            }, 130), mt.MapSquart(), Hi.FlashEffect(mt.GetLayer(), 38, 30);
                            let t = p.length,
                                e = 0;
                            for (let i in p) setTimeout(() => {
                                let e = p[i],
                                    s = Math.floor(.1 * e.fullBlood + (e.fullBlood - e.blood) * c * .01);
                                e.onHurt(null, null, s, null, 0, 0, 270, 120, null, null, null, null, null, null), Pi.AddEffect(e, o, h), --t <= 0 && setTimeout(() => {
                                    Qt.kill2Ing = !1
                                }, 800)
                            }, e), e += 160 + Math.floor(10 * Math.random())
                        }))
                    }, 360)
                }, u), u += 260
            }
            return !0
        }
        static throwKill3() {
            let t = Qt.enemyCenterPos();
            if (!t) return void Pi.FlyTxt("No target");
            Qt.kill3Ing = !0;
            let e, i = jt.GetCfg(lt.Three),
                [s, n, a] = i.effect,
                l = 0,
                o = Qt.__GetKillVal(lt.Three),
                r = qi.GetEnemyList(null),
                h = r.length;
            Z.Play(i.sound);
            for (let t in r) setTimeout(() => {
                mt.MapSquart() && Hi.FlashEffect(mt.GetLayer(), 40, 65);
                let l = r[t];
                e || (pe.BannerMask(1860, () => {
                    Qt.kill3Ing = !1
                }), (e = Pi.KillEffect(pe.GetLayer(), s, n)).scale(2.8, 2.8));
                let [d, u] = [l.x, l.y];
                e.pos(d, u), 0 == --h && e.SetInterval(140);
                let c = Math.floor(l.fullBlood * i.__valBase * .01) + Math.floor((l.fullBlood - l.blood) * (o - i.__valBase) * .01);
                l.onHurt(null, null, c, null, 0, 0, 270, 120, null, null, null, null, null, null), Pi.AddEffect(l, s, a)
            }, l), l += 260;
            return !0
        }
        static throwKill4() {
            let t = Qt.enemyCenterPos();
            t || (t = [.5 * Laya.stage.width, .5 * Laya.stage.height]);
            let [e, i] = t;
            e = .5 * (e + .5 * Laya.stage.width), i -= 45, Qt.kill4Ing = !0;
            let s = jt.GetCfg(lt.Four),
                [n, a, l] = s.effect;
            Z.Play(s.sound), Hi.FlashEffect(mt.GetLayer(), 22, 30), Pi.KillEffect(pe.GetLayer(), n, a, null, 1, e, i).scale(2, 2);
            let o = 260,
                r = Qt.__GetKillVal(lt.Four),
                h = qi.GetEnemyList(null);
            for (let t in h) o += Math.floor(150 * Math.random()), setTimeout(() => {
                let e = h[t];
                e.no % 3 == 0 && Hi.FlashEffect(mt.GetLayer(), 38, 30);
                let i = Math.floor(e.fullBlood * r * .01);
                e.onHurt(null, null, i, null, 0, 0, 270, 120, null, null, null, null, null, null), Pi.AddEffect(e, n, l)
            }, o);
            return setTimeout(() => {
                Qt.kill4Ing = !1
            }, 2e3), !0
        }
        static throwKill6() {
            let t = qi.GetEnemyList(null),
                e = jt.GetCfg(lt.Six),
                [i, s, n] = e.effect,
                a = .5 * Laya.stage.width,
                l = .55 * Laya.stage.height;
            Pi.KillEffect(pe.GetLayer(), i, s, null, 1, a, l).scale(2.2, 2.2), Z.Play(e.sound);
            let o = Qt.__GetKillVal(lt.Six);
            return setTimeout(() => {
                for (let e in t) {
                    let s = t[e];
                    Pi.AddEffect(s, i, n);
                    let a = Math.floor((s.fullBlood - s.blood) * o * .01);
                    a > 0 && s.onBlood(a, 270, 150)
                }
            }, 1100), !0
        }
        static __throwKill1() {
            let t = jt.GetCfg(lt.Five),
                e = t.effect[0],
                i = t.effect[1],
                s = !1;
            Z.Play(t.sound);
            let n = qi.GetEnemyList(null);
            for (let t in n) {
                s = !0;
                let a = n[t];
                Pi.KillEffect(pe.GetLayer(), e, i, null, 1, a.x, a.y)
            }
            return s
        }
        static _throwKill2() {
            if (!Qt.enemyCenterPos()) return;
            Qt.kill2Ing = !0;
            let t = jt.GetCfg(lt.Two),
                e = 260,
                i = qi.GetEnemyList(null),
                s = i.length,
                n = Qt.__GetKillVal(lt.Two);
            for (let a in i) {
                e += Math.floor(150 * Math.random());
                let l = i[a],
                    o = l.x,
                    r = l.y,
                    h = Math.random() < .5 ? -1 : 1,
                    d = o + -h * (400 + 60 * Math.random()),
                    u = r - 800 - 250 * Math.random();
                setTimeout(() => {
                    let e = Pi.KillEffect(pe.GetLayer(), "kill2", "kill", null, 1, d, u);
                    e.scale(.2 * h, .2);
                    let l = 360 + Math.floor(100 * Math.random());
                    Laya.Tween.to(e, {
                        x: o,
                        y: r,
                        scaleX: .4 * h,
                        scaleY: .4
                    }, l, null, Laya.Handler.create(Qt, function () {
                        Laya.Tween.to(e, {
                            scaleX: 1 * h,
                            scaleY: 1
                        }, 90), mt.MapSquart() && Z.Play(t.sound);
                        let l = Pi.KillEffect(mt.GetLayer(), "kill2", "hurt", null, 1, o, r);
                        Hi.FlashEffect(l, 80, 160);
                        let d = i[a],
                            u = Math.floor(.1 * d.fullBlood + (d.fullBlood - d.blood) * n * .01);
                        d.onHurt(null, null, u, null, 0, 0, 270, 120, null, null, null, null, null, null), --s <= 0 && setTimeout(() => {
                            Qt.kill2Ing = !1
                        }, 800)
                    }))
                }, e)
            }
            return !0
        }
        static __throwKill2() {
            let t = jt.GetCfg(lt.Two);
            Qt.kill2Still = 1e3 * t.__still;
            let e = t.effect[0],
                i = t.effect[1],
                s = !1;
            Z.Play(t.sound);
            let n = qi.GetEnemyList(null);
            for (let t in n) {
                s = !0;
                let a = n[t];
                Pi.KillEffect(pe.GetLayer(), e, i, null, 1, a.x, a.y)
            }
            return s
        }
        static __throwKill3() {
            let t = jt.GetCfg(lt.Three);
            Qt.kill3Still = 1e3 * t.__still;
            let e = t.effect[0],
                i = t.effect[1],
                s = !1;
            Z.Play(t.sound);
            let n = qi.GetEnemyList(null);
            for (let t in n) {
                s = !0;
                let a = n[t];
                Pi.KillEffect(pe.GetLayer(), e, i, null, 1, a.x, a.y)
            }
            return s
        }
        static __throwKill4() {
            let t = qi.GetEnemyList(null);
            if (t.length <= 0) return !1;
            Qt.kill4Ing = !0;
            let e = 0,
                i = 0;
            for (let s in t) {
                let n = t[s];
                e += n.x, i += n.y
            }
            let s = e / t.length,
                n = i / t.length + 10,
                a = jt.GetCfg(lt.Four),
                l = a.effect[0],
                o = a.effect[1],
                r = a.effect[2],
                h = a.effect[3];
            return Z.Play(a.sound), Pi.KillEffect(pe.GetLayer(), l, o, null, 1, s, n - 300), setTimeout(() => {
                Hi.FlashEffect(mt.GetLayer(), 22, 30), Pi.KillEffect(pe.GetLayer(), r, h, null, 1, s, n), setTimeout(() => {
                    Hi.FlashEffect(mt.GetLayer(), 38, 30)
                }, 1100), setTimeout(() => {
                    Hi.FlashEffect(mt.GetLayer(), 38, 30);
                    let e = Qt.__GetKillVal(lt.Four);
                    for (let i in t) {
                        let s = t[i],
                            n = Math.floor(s.fullBlood * e * .01);
                        s.onHurt(null, null, n, 0, 0, null, 270, 120, null, null, null, null, null, null)
                    }
                    setTimeout(() => {
                        Qt.kill4Ing = !1
                    }, 400)
                }, 1250)
            }, 900), !0
        }
        static __throwKill5() {
            let t = qi.GetEnemyList(null);
            if (t.length <= 0) return !1;
            Qt.kill1Ing = !0;
            let e = jt.GetCfg(lt.One),
                i = e.effect[0],
                s = e.effect[1],
                n = e.effect[2],
                a = e.effect[3],
                l = 260,
                o = t.length,
                r = Qt.__GetKillVal(lt.One);
            for (let h in t) {
                l += 240 + Math.floor(150 * Math.random());
                let d = t[h],
                    u = d.x,
                    c = d.y,
                    p = Math.random() < .5 ? -1 : 1,
                    f = u + -p * (350 + 300 * Math.random()),
                    g = c - 350 - 450 * Math.random();
                setTimeout(() => {
                    let t = Pi.KillEffect(pe.GetLayer(), i, s, null, 1, f, g);
                    t.scale(.2 * p, .2), t.alpha = .3;
                    let e = 180 * Math.random() - 90,
                        n = 180 * Math.random() - 90;
                    Laya.Tween.to(t, {
                        x: u + e,
                        y: c + n,
                        scaleX: p,
                        scaleY: 1,
                        alpha: 1
                    }, Math.floor(216))
                }, Math.floor(.5 * l)), setTimeout(() => {
                    let l = Pi.KillEffect(pe.GetLayer(), i, s, null, 1, f, g);
                    l.scale(.2 * p, .2), l.alpha = .3, Laya.Tween.to(l, {
                        x: u,
                        y: c,
                        scaleX: p,
                        scaleY: 1,
                        alpha: 1
                    }, 432, null, Laya.Handler.create(Qt, function () {
                        mt.MapSquart() && Z.Play(e.sound);
                        let i = Pi.KillEffect(mt.GetLayer(), n, a, null, 1, u, c);
                        Hi.FlashEffect(i, 80, 160);
                        let s = t[h],
                            l = Math.floor(.1 * s.fullBlood + (s.fullBlood - s.blood) * r * .01);
                        s.onHurt(null, null, l, null, 0, 0, 270, 120, null, null, null, null, null, null), --o <= 0 && setTimeout(() => {
                            Qt.kill1Ing = !1
                        }, 800)
                    }))
                }, l)
            }
            return !0
        }
    }
    Qt.coldT = null, Qt.kill5Ing = !1, Qt.kill1Ing = !1, Qt.kill2Still = null, Qt.kill2Ing = !1, Qt.kill3Still = null, Qt.kill3Ing = !1, Qt.kill4Ing = !1;
    class zt extends et.mainBannerUI {//todo:主界面
        constructor() {
            super(), this.isInit = !1, this.dragObj = null, this.sacleVal = .56, this.dragT = 500, this.dragIng = !1
        }
        createChildren() {
            super.createChildren(), this.on("onViewCreated", this, this.onComplete)
        }
        onComplete() {
            this.initMenu(), this.refreshUI()
        }
        initMenu() {
            this.pngBg && (this.isInit || (this.isInit = !0, Z.FreeBgMusic(),
				pe.ScreenFull(this), Qi.IsAdvScreen() && (this.boxTop.y = 80, this.chapter1Guide.y = 600, this.chapter2Guide.y = 620,
				this.boxChapter.y = 530), this.boxVideo.y = Laya.stage.height - 230 - 200,
				Li.BtnTap(this, this.btnSign, this.onBtnSign),
				Li.BtnTap(this, this.boxOnline, this.onBtnOnline),
				Li.BtnTap(this, this.btnLucky, this.onBtnLucky),
				Li.BtnTap(this, this.btnExchange, this.onBtnExchange),
				this.btnExchange.visible = !Qi.IsFour(),
				Li.BtnTap(this, this.btnGame5, this.onBtnGame5),
				Li.BtnTap(this, this.btnGame6, this.onBtnGame6),
				Li.BtnTap(this, this.btnGame7, this.onBtnGame7),
				Li.BtnTap(this, this.btnGame8, this.onBtnGame8),
				Li.BtnTap(this, this.btnVideoInit, this.onBtnVideoInit),
				Li.BtnTap(this, this.btnVideoDrop, this.onBtnVideoDrop),
				Li.BtnTap(this, this.btnVideoPick, this.onBtnVideoPick),
				Li.BtnTap(this, this.chapter1Guide, this.onBtnChapter1Guide),
				Li.BtnTap(this, this.chapter2Guide, this.onBtnChapter2Guide),
				Li.BtnTap(this, this.btnKill1, this.onBtnKill1),
				Li.BtnTap(this, this.btnKill5, this.onBtnKill5),
				Ui.BannerOpenSucc(), Li.WxAppIconInit(this, this.appIcon, Laya.stage.height - 230 - 200 - 105, 3e3)))
        }
        onBtnKill1() {
            let e = Qt.GetKillNum(lt.One),
                i = jt.GetCfg(lt.One);
            e > i.max ? Pi.FlyTxt(`When the number of ${i.title} is less than ${i.max}, the supplement will be made`) : Vi.VideoAdPlay(null, t.FillKillNum, lt.One)
        }
        onBtnKill5() {
            let e = Qt.GetKillNum(lt.Five),
                i = jt.GetCfg(lt.Five);
            e > i.max ? Pi.FlyTxt(`When the number of ${i.title} is less than ${i.max}, the supplement will be made`) : Vi.VideoAdPlay(null, t.FillKillNum, lt.Five)
        }
        onBtnChapter1Guide() {
			Plat.I.HideFloat();
            Li.Open(S.ChapterMap, 1)
        }
        onBtnChapter2Guide() {
            K.Evt(e.TAP_CHAPTER_CHANGE, 1), Li.Open(S.ChapterMap, 2)
        }
        onBtnGame5() {
            if (!Lt.CanOpen(S.FbGold)) return void Pi.FlyTxt("This copy is not open", !0);
            if (!qi.IsFbReady(S.FbGold)) return void Pi.FlyTxt("The copy has not been refreshed", !0);
            let t = q.RndOneFb(D.Gold),
                e = q.GetCfg(t);
            Li.Open(S.Order, [e.passType, e.lvChapter, e.lvPass])
        }
        onBtnGame6() {
            if (!Lt.CanOpen(S.FbDaimond)) return void Pi.FlyTxt("This copy is not open", !0);
            if (!qi.IsFbReady(S.FbDaimond)) return void Pi.FlyTxt("The copy has not been refreshed", !0);
            let t = q.RndOneFb(D.Daimond);
            t = 6001;
            let e = q.GetCfg(6001);
            q.GetCfg(5001), q.GetPassCfg(5, 1, 1), q.GetPassCfg(6, 1, 1);
            Li.Open(S.Order, [e.passType, e.lvChapter, e.lvPass])
        }
        onBtnGame7() {
            if (!Lt.CanOpen(S.FbPatch)) return void Pi.FlyTxt("This copy is not open", !0);
            if (!qi.IsFbReady(S.FbPatch)) return void Pi.FlyTxt("The copy has not been refreshed", !0);
            let t = q.RndOneFb(D.Patch);
            t = 7001;
            let e = q.GetCfg(7001);
            Li.Open(S.Order, [e.passType, e.lvChapter, e.lvPass])
        }
        onBtnGame8() {
            if (!Lt.CanOpen(S.FbTalent)) return void Pi.FlyTxt("This copy is not open", !0);
            if (!qi.IsFbReady(S.FbTalent)) return void Pi.FlyTxt("The copy has not been refreshed", !0);
            let t = q.RndOneFb(D.Talent);
            t = 8001;
            let e = q.GetCfg(8001);
            Li.Open(S.Order, [e.passType, e.lvChapter, e.lvPass])
        }
        onBtnVideoInit() {
            xe.BufferSec(o.Init) || (xe.BufferNum(o.Init) >= xe.BufferLimit ? Pi.FlyTxt("Today's times have been used, please come again tomorrow") : Vi.VideoAdPlay(null, t.BufferInitMoney, null))
        }
        onBtnVideoDrop() {
            xe.BufferSec(o.Drop) || (xe.BufferNum(o.Drop) >= xe.BufferLimit ? Pi.FlyTxt("Today's times have been used, please come again tomorrow") : Vi.VideoAdPlay(null, t.BufferDropMoney, null))
        }
        onBtnVideoPick() {
            xe.BufferSec(o.Pick) || Vi.VideoAdPlay(null, t._BufferAutoPick, null)
        }
        refreshOnline() {
            if (!this.pngBg) return;
            if (!Lt.CanOpen(S.__Award)) return;
            this.imgOnline.visible = !1;
            let t = Yi.Avatar;
            t.onStep >= Vt.onlineStep.length || Vt.HasAward() || (this.imgOnline.visible = !0, Li.fillNum(this.boxOnlineSec, "main", "icon_word", Vt.Min + ":" + Vt.Sec, n.Center), (t.onSec + 1) % 10 == 0 && (Hi.SmallBigLoop(this.btnOnline, 300, .9, 1.08), Hi.FlashEffect(this.boxOnlineSec, 200, 130, function () {}.bind(this))))
        }
        onBtnOnline() {
            Li.Open(S.Online)
        }
        refreshChapter() {
            this.refreshChapterDrag()
        }
        refreshChapterDrag() {
            if (null === this.dragObj) {
                this.dragObj = [];
                for (let t = 0; t <= 3; t++) this.dragObj[t] || (this.dragObj[t] = new _t, t > 1 ? this.boxChapter.addChildAt(this.dragObj[t], 1) : this.boxChapter.addChild(this.dragObj[t]), this.dragObj[t].pos(375 * t, 140));
                this.setChapterDrag(1)
            }
        }
        setChapterDrag(t) {
            let e = qi.lvChapter - 1,
                i = qi.lvChapter,
                s = qi.lvChapter + 1,
                n = qi.lvChapter + 2 * t,
                a = q.GetMaxChapter(D.Pass),
                l = qi.CurrentChapter(D.Pass);
            e < 1 && (e = null), s > l + 1 && (s = null), s > a && (s = null), n < 1 && (n = null), n > l && (n = null), this.dragObj[0].setItem(e, 0), this.dragObj[1].setItem(i, 1), this.dragObj[2].setItem(s, 2), this.dragObj[3].setItem(n, 3);
            for (let t = 0; t <= 3; t++) this.dragObj[t].pos(375 * t, 140);
            this.dragObj[0].scale(this.sacleVal, this.sacleVal), this.dragObj[1].scale(1, 1), this.dragObj[2].scale(this.sacleVal, this.sacleVal), this.dragObj[3].scale(this.sacleVal, this.sacleVal)
        }
        turnChapterDrag(t) {
            if (!this.dragIng)
                if (this.dragIng = !0, -1 == t) {
                    if (qi.lvChapter <= 1) return;
                    this.dragObj[0].moveIn(), this.dragObj[1].moveOut(), Laya.Tween.to(this.dragObj[0], {
                        x: 375,
                        scaleX: 1,
                        scaleY: 1
                    }, this.dragT), Laya.Tween.to(this.dragObj[1], {
                        x: 750,
                        scaleX: this.sacleVal,
                        scaleY: this.sacleVal
                    }, this.dragT), Laya.Tween.to(this.dragObj[2], {
                        x: 1205
                    }, this.dragT), this.dragObj[3].x = -375;
                    let t = q.GetMaxChapter(D.Pass),
                        e = qi.lvChapter + -2;
                    e > t && (e = null), this.dragObj[3].setItem(e, 3), Laya.Tween.to(this.dragObj[3], {
                        x: 0
                    }, this.dragT, null, Laya.Handler.create(this, function () {
                        qi.lvChapter--, this.setChapterDrag(-1), this.dragIng = !1
                    }.bind(this)))
                } else if (1 == t) {
                let t = q.GetMaxChapter(D.Pass);
                if (qi.lvChapter > t) return;
                this.dragObj[1].moveOut(), this.dragObj[2].moveIn(), Laya.Tween.to(this.dragObj[0], {
                    x: -375
                }, this.dragT), Laya.Tween.to(this.dragObj[1], {
                    x: 0,
                    scaleX: this.sacleVal,
                    scaleY: this.sacleVal
                }, this.dragT), Laya.Tween.to(this.dragObj[2], {
                    x: 375,
                    scaleX: 1,
                    scaleY: 1
                }, this.dragT), this.dragObj[3].x = 1125, Laya.Tween.to(this.dragObj[3], {
                    x: 750
                }, this.dragT, null, Laya.Handler.create(this, function () {
                    qi.lvChapter++, this.setChapterDrag(1), this.dragIng = !1
                }.bind(this)))
            }
        }
        Open() {
            K.On(e.TAP_CHAPTER_CHANGE, this, this.turnChapterDrag), K.On(e.ONLINE_CHANGE, this, this.refreshOnline), K.On(e.ONLINE_SEC, this, this.refreshOnline), K.On(e.ONLINE_SEC, this, this.refreshOpen), K.On(e.HOUR_CHANGE, this, this.refreshGameBtn), K.On(e.ONLINE_SEC, this, this.refreshBuffer), K.On(e.KILL_AD_FILL, this, this.onKillFillDone), this.initMenu(), this.refreshUI(), Ji.WxClubShow()
        }
        Close() {
            K.Off(e.TAP_CHAPTER_CHANGE, this, this.turnChapterDrag), K.Off(e.ONLINE_CHANGE, this, this.refreshOnline), K.Off(e.ONLINE_SEC, this, this.refreshOnline), K.Off(e.ONLINE_SEC, this, this.refreshOpen), K.Off(e.HOUR_CHANGE, this, this.refreshGameBtn), K.Off(e.ONLINE_SEC, this, this.refreshBuffer), K.Off(e.KILL_AD_FILL, this, this.onKillFillDone), Ji.WxClubHide()
        }
        onKillFillDone(t) {
            this.pngBg && (Hi.FlashEffect(this[`btnKill${t}`], 120, 120, function () {
                setTimeout(function () {
                    Hi.SmallBigLoop(this[`btnKill${t}`], 200, 1.06, .97, 1, null), Hi.FlashEffect(this[`btnKill${t}`], 120, 120)
                }.bind(this), 400)
            }.bind(this)), this.refreshKill())
        }
        refreshKill() {
            if (!this.pngBg) return;
            let t = Yi.Avatar,
                e = jt.GetCfg(lt.One),
                i = jt.GetCfg(lt.Five),
                s = Qt.GetKillNum(lt.One),
                a = Qt.GetKillNum(lt.Five);
            this.labKill1.text = e.title, this.labKill5.text = i.title, this.btnKill1.disabled = t.passLv < e.openLv, this.btnKill5.visible = t.passLv >= i.openLv, this.btnKill1.y = this.btnKill5.visible ? 50 : 100, Li.fillNum(this.boxKill1, "main", "icon_word", `${s}/${2*e.max}`, n.Right), Li.fillNum(this.boxKill5, "main", "icon_word", `${a}/${2*i.max}`, n.Right)
        }
        refreshUI() {
            if (!this.pngBg) return;
            this.refreshChapter(), this.refreshOnline(), this.refreshOpen(), this.refreshGameBtn(), this.refreshBuffer(), this.refreshKill();
            let t = Yi.Avatar;
            this.boxVideo.visible = t.passLv >= 6
        }
        refreshGameBtn() {
            this.pngBg && (this.btnGame5.visible = Lt.CanOpen(S.FbGold), this.btnGame6.visible = Lt.CanOpen(S.FbDaimond), this.btnGame7.visible = Lt.CanOpen(S.FbPatch), this.btnGame8.visible = Lt.CanOpen(S.FbTalent), this.btnGame5.gray = !qi.IsFbReady(S.FbGold), this.btnGame6.gray = !qi.IsFbReady(S.FbDaimond), this.btnGame7.gray = !qi.IsFbReady(S.FbPatch), this.btnGame8.gray = !qi.IsFbReady(S.FbTalent))
        }
        refreshBuffer() {
            if (!this.pngBg) return;
            let t = xe.BufferSec(o.Init),
                e = Qi.GetTimeStr(t);
            Li.fillNum(this.boxInitMoney, "main", "time", e), this.btnVideoInit.visible = t <= 0;
            let i = xe.BufferSec(o.Drop),
                s = Qi.GetTimeStr(i);
            Li.fillNum(this.boxMoreMoney, "main", "time", s), this.btnVideoDrop.visible = i <= 0
        }
        refreshOpen() {
            if (!this.pngBg) return;
            this.btnSign.gray = !Lt.CanOpen(S.Sign), this.btnLucky.visible = Lt.CanOpen(S.Lucky), this.boxOnline.visible = Lt.CanOpen(S.__Award);
            let t = Lt.CanOpen(S.Sign) && Ut.IsWaitSign();
            Li.FillRedView("main", "red", this.btnSign, t, 0, 0);
            let e = Lt.CanOpen(S.Lucky) && $t.lukcyNum && !0;
            Li.FillRedView("main", "red", this.btnLucky, e, 0, 0);
            let i = Lt.CanOpen(S.__Award) && Vt.HasAward() >= 1;
            Li.FillRedView("main", "red", this.btnOnline, i, 0, 0)
        }
        onBtnSign() {
            Lt.CanOpen(S.Sign) ? (Li.Open(S.Sign),Plat.I.HideFloat()) : Pi.FlyTxt("Check-in is not enabled")
        }
        onBtnLucky() {
            Lt.CanOpen(S.Lucky) ? Li.Open(S.Lucky) : Pi.FlyTxt("The super turntable is not currently open")
        }
        onBtnExchange() {
            Li.Open(S.Exchange)
        }
        onBtnBag() {
            Li.Open(S.WeaponBag)
        }
        onBtnSolider() {
            Li.Open(S.SoliderList)
        }
        onBtnEnemy() {
            Li.Open(S.EnemyList)
        }
    }
    class Zt extends et.talentBannerUI {//todo:天赋界面
        constructor() {
            super(), this.isInit = !1
        }
        createChildren() {
            super.createChildren(), this.on("onViewCreated", this, this.onComplete)
        }
        onComplete() {
            this.initMenu(), this.refreshUI()
        }
        initMenu() {
            this.pngBg && (this.isInit || (this.isInit = !0, pe.ScreenFull(this), Qi.IsAdvScreen() && (this.centerBox.y += 100), Li.BtnTap(this, this.btnUp, this.onBtnUp), Li.BtnTap(this, this.labReset, this.onTapClear), Li.BtnTap(this, this.iconTalent, this.onBtnTalent), Ui.BannerOpenSucc()))
        }
        onBtnTalent() {
            Vi.VideoAdPlay(null, t.QuickTalent, null)
        }
        Open() {
            this.initMenu(), this.refreshUI(), K.On(e.TAP_TALENT_ITEM, this, this.onTapItem), K.On(e.VIDEO_FINISH, this, this.onClearVideoDone), K.On(e.VIDEO_FINISH, this, this.onTalentVideoDone), Laya.timer.loop(1200, this, this.flashShopTalent)
        }
        Close() {
            K.Off(e.TAP_TALENT_ITEM, this, this.onTapItem), K.Off(e.VIDEO_FINISH, this, this.onClearVideoDone), K.Off(e.VIDEO_FINISH, this, this.onTalentVideoDone), Laya.timer.clear(this, this.flashShopTalent)
        }
        flashShopTalent() {
            this.pngBg && this.isInit && Hi.FlashEffect(this.labWarring, 140, 140)
        }
        onTapClear() {}
        onClearVideoDone(e) {
            e && e == t._TalentClear && (Yt.TalentClear(), this.refreshUI())
        }
        onTalentVideoDone(e) {
            e && e == t.QuickTalent && (Pi.FlyTxt("Get 3 talents"), Le.AddMoneyByVal(d.talent, 3), this.refreshUI())
        }
        onTapItem(t) {
            Zt.talentId = t, this.refreshUI()
        }
        refreshUI() {
            if (!this.pngBg) return;
            if (!this.isInit) return;
            let t = Zt.talentId,
                e = Wt.GetCfg(t),
                i = Yt.GetLevel(t);
            this.imgTalent.skin = `images/talent/talent_${t}.png`, this.labName.text = e.name, this.labLv.text = `Lv.${i}`, this.labDesc.text = Yt.GetDesc(t);
            let s = Wt.GetDict();
            for (let t in s) {
                let e = s[t].id;
                pe.AddTalentItem(this[`boxItem${e}`], e)
            }
            let n = Yi.Avatar;
            if (this.labTalent.text = n.talent + "", this.labNeed.visible = !1, this.btnUp.visible = !1, this.imgMax.visible = !1, this.costBg.visible = !1, null === t) this.labName.text = "天赋系统", this.labDesc.text = "选中你要查看的天赋，再点击升级按钮，进行升级。";
            else {
                let e = Yt.NeedCost(t);
                if (e) {
                    this.labNeed.text = `${e}`, this.btnUp.visible = !0, this.labNeed.visible = !0, this.costBg.visible = !0;
                    let i = Yt.CanUpRed(t);
                    Li.FillRedView("talent", "canUp", this.iconUp, i, -23, -30), i && (Hi.FlashEffect(this.iconUp.getChildAt(0), 100, 150), Hi.SmallBigLoop(this.iconUp.getChildAt(0), 150, 1.2, 1.2, 1, null))
                } else this.imgMax.visible = !0
            }
        }
        onBtnUp() {
            Yt.UpLevel(Zt.talentId), this.refreshUI()
        }
    }
    Zt.talentId = 51;
    class te extends et.shopItem1UI {
        constructor() {
            super(), this.size(231, 402)
        }
        createChildren() {
            super.createChildren(), this.on("onViewCreated", this, this.onComplete)
        }
        onComplete() {
            this.refreshItem()
        }
        onEnable() {
            this.refreshItem(), K.On(e.ONLINE_SEC, this, this.refreshItem)
        }
        onDisable() {
            K.Off(e.ONLINE_SEC, this, this.refreshItem)
        }
        setItem(t) {
            this.shopId = t, this.refreshItem()
        }
        refreshItem() {
            if (!this.bgImg) return;
            if (!this.shopId) return;
            Li.BtnTap(this, this.btnGet, this.onTapBtnGet);
            let t = J.GetCfg(this.shopId),
                e = Ci.GetShopInfo(this.shopId);
            this.imgTitle.skin = `images/shop/${t.title}.png`, this.imgIcon.skin = `images/shop/${t.iconSkin}.png`;
            let [i, s, a] = e, l = !!t.needVideo[s], o = t.getNum[s] ? t.getNum[s] : t.getNum[a - 1];
            "freeGold" == t.getItem && (o = Le.getPassGold(o), this.labRemain.visible = !1);
            let r = "";
            r = o < 99999 ? o + "" : Qi.num2Str(o, !1), Li.fillNum(this.boxNum, "shop", "icon_word", `x${r}`, n.Center), this.imgWait.visible = !1, this.btnGet.visible = !1, this.imgNone.visible = !1;
            let h = a - s;
            this.labRemainVal.text = `${h}`, h <= 0 ? this.imgNone.visible = !0 : i > 0 ? (this.imgWait.visible = !0, i = Math.floor(i / 1e3), this.labWait.text = Qi.GetMinSecStr(i)) : (this.btnGet.visible = !0, this.iconFree.visible = !l, this.iconAd.visible = l)
        }
        onTapBtnGet() {
            Ci.TryBuy(this.shopId) && (6 == this.shopId && (_e.GuideDo(ot.ENTER_SHOP_BTN_25, !1), _e.GuideDo(ot.SHOP_GET_GOLD_26, !1)), this.refreshItem())
        }
    }
    class ee extends et.shopItem2UI {
        constructor() {
            super(), this.size(725, 210)
        }
        createChildren() {
            super.createChildren(), this.on("onViewCreated", this, this.onComplete)
        }
        onComplete() {
            this.refreshItem()
        }
        onEnable() {
            this.refreshItem(), K.On(e.ONLINE_SEC, this, this.refreshItem)
        }
        onDisable() {
            K.Off(e.ONLINE_SEC, this, this.refreshItem)
        }
        setItem(t) {
            this.shopId = t, this.refreshItem()
        }
        refreshItem() {
            if (!this.bgImg) return;
            if (!this.shopId) return;
            Li.BtnTap(this, this.btnGet, this.onTapBtnGet);
            let t = J.GetCfg(this.shopId),
                e = Ci.GetShopInfo(this.shopId);
            this.bgImg.skin = `images/shop/${t.iconSkin}.png`;
            let [i, s, n] = e, a = !!t.needVideo[s];
            if (this.labWait.visible = !1, this.btnGet.visible = !1, this.imgNone.visible = !1, this.btnGet.visible = !0, this.iconFree.visible = !1, this.iconAd.visible = !1, this.iconDaimond.visible = !1, i > 0) {
                this.labWait.visible = !0;
                let e = Qi.GetTimeStr(Math.floor(i / 1e3));
                this.labWait.text = `Free to open after ${e}`, this.btnGet.skin = "images/shop/button_blue.png", this.iconDaimond.visible = !0;
                let n = t.needDiamond[s];
                this.labDaimond.text = `${n}`
            } else a ? this.iconAd.visible = !0 : this.iconFree.visible = !0, this.btnGet.skin = "images/shop/button_yellow.png"
        }
        onTapBtnGet() {
            Ci.TryBuy(this.shopId) && this.refreshItem()
        }
    }
    class ie extends et.shopItem3UI {
        constructor() {
            super(), this.size(171, 231)
        }
        createChildren() {
            super.createChildren(), this.on("onViewCreated", this, this.onComplete)
        }
        onComplete() {
            this.refreshItem()
        }
        onEnable() {
            this.refreshItem(), K.On(e.ONLINE_SEC, this, this.refreshItem)
        }
        onDisable() {
            K.Off(e.ONLINE_SEC, this, this.refreshItem)
        }
        setItem(t) {
            this.shopId = t, this.refreshItem()
        }
        refreshItem() {
            if (!this.bgImg) return;
            if (!this.shopId) return;
            this.lightRotation(), Li.BtnTap(this, this.btnGet, this.onTapBtnGet);
            let t = J.GetCfg(this.shopId),
                e = Ci.GetShopInfo(this.shopId),
                [i, s, a] = e;
            this.imgNone.visible = !1, this.btnGet.visible = !1, this.iconAd.visible = !1, this.iconDaimond.visible = !1, this.imgLight.visible = !1;
            let l = a - s,
                o = Ci.GetPatchId(this.shopId),
                r = Math.abs(o),
                h = Wi.GetCfg(r);
            this.iconStar1.visible = !1, this.iconStar2.visible = !1, this.iconStar3.visible = !1, this.iconStar4.visible = !1, this.iconStar5.visible = !1;
            for (let t = 1; t <= h.quality; t++) this[`iconStar${t}`].visible = !0;
            let d = bt.GetCfg(h.quality);
            if (this.bgImg.skin = "images/shop/icon_jp_bg1.png", this.labColor.color = It.QColor[h.quality], o < 0) {
                this.iconSolider.visible = !0, this.iconSolider.skin = `images/man/${h.skin}.png`, X.RepairsoliderC16(this.iconSolider, 85, 88, 6, -6), this.iconPatch.visible = !1, this.labTitle.text = h.name, this.labColor.text = h.name, this.labTitle.fontSize = 26, this.labColor.fontSize = 26;
                let t = Math.floor(d.actPatch * d.patchPrice * 1.6);
                this.labDaimond.text = `${t}`, Li.fillNum(this.boxNum, "shop", "icon_word", "x1", n.Left)
            } else {
                this.iconSolider.visible = !1, this.iconPatch.visible = !0, this.iconPatch.skin = `images/obj/sp_${h.id}.png`,
					this.labTitle.text = Qi.getStrTxt("{0}\nfragment", h.name),
					this.labColor.text = Qi.getStrTxt("{0}\nfragment", h.name), this.labTitle.fontSize = 20, this.labColor.fontSize = 20;
                let t = d.patchNum;
                6 == this.shopId && (t += 10), Li.fillNum(this.boxNum, "shop", "word_szG", `x${t}`, n.Left)
            }
            if (l <= 0) this.imgNone.visible = !0;
            else if (this.btnGet.visible = !0, o < 0) this.imgLight.visible = !0, this.bgImg.skin = "images/shop/icon_jp_bg2.png", this.iconDaimond.visible = !0;
            else {
                if (!!t.needVideo[s]) this.iconAd.visible = !0;
                else {
                    this.iconDaimond.visible = !0;
                    let t = d.patchNum;
                    this.shopId;
                    let e = d.patchPrice * t;
                    this.labDaimond.text = `${e}`
                }
            }
        }
        onTapBtnGet() {
            Ci.TryBuy(this.shopId) && this.refreshItem()
        }
        lightRotation() {
            if (!this.imgLight) return;
            if (!this.imgLight.visible) return;
            if (0 != this.imgLight.rotation && 360 != this.imgLight.rotation) return;
            this.imgLight.rotation = 0, Laya.Tween.to(this.imgLight, {
                rotation: 360
            }, 3600, null, Laya.Handler.create(this, function () {
                Hi.SmallBigLoop(this.imgLight, 200, .92, 1.08), this.lightRotation()
            }.bind(this)))
        }
    }
    class se extends et.shopItem4UI {
        constructor() {
            super(), this.size(171, 231)
        }
        createChildren() {
            super.createChildren(), this.on("onViewCreated", this, this.onComplete)
        }
        onComplete() {
            this.refreshItem()
        }
        onEnable() {
            this.refreshItem(), K.On(e.ONLINE_SEC, this, this.refreshItem)
        }
        onDisable() {
            K.Off(e.ONLINE_SEC, this, this.refreshItem)
        }
        setItem(t) {
            this.shopId = t, this.refreshItem()
        }
        refreshItem() {
            if (!this.bgImg) return;
            if (!this.shopId) return;
            Li.BtnTap(this, this.btnGet, this.onTapBtnGet);
            let t = J.GetCfg(this.shopId),
                e = Ci.GetShopInfo(this.shopId);
            this.imgIcon.skin = `images/shop/${t.iconSkin}.png`;
            let [i, s, a] = e;
            this.btnGet.visible = !0, this.iconAd.visible = !1, this.iconDaimond.visible = !1, this.imgNone.visible = !1, this.bgRemain.visible = !1, this.labReamin.visible = !1;
            let l = t.getNum[s] ? t.getNum[s] : t.getNum[a - 1],
                o = t.needDiamond[s];
            if (this.labDaimond.text = `${o}`, "diamondTalent" == t.getItem) {
                this.labTitle.text = "Talent ", this.labReamin.visible = !0, this.bgRemain.visible = !0;
                let e = a - s;
                if (e <= 0) this.btnGet.visible = !1, this.imgNone.visible = !0, this.labReamin.text = "Refresh every day at 5pm";
                else {
                    !!t.needVideo[s] ? (this.iconAd.visible = !0, this.labReamin.text = `Number :${e}/${a}`) 
						: (this.iconDaimond.visible = !0, this.labReamin.text = `Limited :${e}/${a}`)
                }
            } else "diamondGold" == t.getItem && (this.iconDaimond.visible = !0, this.labTitle.text = "Gold ", l = Le.getPassGold(l));
            let r = "";
            r = l < 99999 ? l + "" : Qi.num2Str(l, !1), Li.fillNum(this.boxNum, "shop", "word_szG", `x${r}`, n.Left), this.labTitle.x = .5 * (this.bgImg.width - (this.labTitle.width + 10 + 18 * r.length)), this.boxNum.x = this.labTitle.x + this.labTitle.width + 10
        }
        onTapBtnGet() {
            Ci.TryBuy(this.shopId) && this.refreshItem()
        }
    }
    class ne extends et.shopBannerUI {//todo:商店界面
        constructor() {
            super(), this.isAdv = !1, this.isInit = !1
        }
        initData(t = !1) {
            this.isAdv = t, this.initMenu(), this.refreshUI()
        }
        createChildren() {
            super.createChildren(), this.on("onViewCreated", this, this.onComplete)
        }
        onComplete() {
            this.initMenu(), this.refreshUI()
        }
        updateItem1(t, e) {
            t.setItem(t.dataSource)
        }
        updateItem2(t, e) {
            t.setItem(t.dataSource)
        }
        updateItem3(t, e) {
            t.setItem(t.dataSource)
        }
        updateItem4(t, e) {
            t.setItem(t.dataSource)
        }
        initMenu() {
            this.pngBg && (this.isInit || (this.isInit = !0, pe.ScreenFull(this), Qi.IsAdvScreen() && (this.centerBox.y += 120), Li.BtnTap(this, this.btnDay, this.onTapBtnDay), Li.BtnTap(this, this.btnGood, this.onTapBtnGood), Li.BtnTap(this, this.btnPatchRefresh, this.onTapBtnPatch), Li.BtnTap(this, this.boxGuide, this.onBoxGuideDo), this.shopList1.repeatX = 3, this.shopList1.repeatY = 1, this.shopList1.spaceX = 16, this.shopList1.hScrollBarSkin = "", this.shopList1.itemRender = te, this.shopList1.renderHandler = new Laya.Handler(this, this.updateItem1), this.shopList2.repeatX = 1, this.shopList2.repeatY = 2, this.shopList2.spaceY = 16, this.shopList2.hScrollBarSkin = "", this.shopList2.itemRender = ee, this.shopList2.renderHandler = new Laya.Handler(this, this.updateItem2), this.shopList3.repeatX = 4, this.shopList3.repeatY = 2, this.shopList3.spaceX = 14, this.shopList3.spaceY = 14, this.shopList3.vScrollBarSkin = "", this.shopList3.itemRender = ie, this.shopList3.renderHandler = new Laya.Handler(this, this.updateItem3), this.shopList4.repeatX = 4, this.shopList4.repeatY = 1, this.shopList4.spaceX = 13, this.shopList4.hScrollBarSkin = "", this.shopList4.itemRender = se, this.shopList4.renderHandler = new Laya.Handler(this, this.updateItem4), Ui.BannerOpenSucc(), Y.QqNo && (this.labQQ.visible = !0, this.labQQ.text = Y.QqNo)))
        }
        onBoxGuideDo() {
            Ci.TryBuy(1) && (_e.GuideDo(ot.ENTER_SHOP_BTN_25, !1), _e.GuideDo(ot.SHOP_GET_GOLD_26, !1))
        }
        onTapBtnDay() {
            this.dayBox.visible = !0, this.goodBox.visible = !1, this.btnDay.skin = "images/shop/button_bq1.png", this.btnGood.skin = "images/shop/button_bq2.png", this.imgDay.skin = "images/shop/button_word_rcbx1.png", this.imgGood.skin = "images/shop/button_word_jpsd2.png"
        }
        onTapBtnGood() {
            this.redGood.visible = !1, this.dayBox.visible = !1, this.goodBox.visible = !0, this.btnDay.skin = "images/shop/button_bq2.png", this.btnGood.skin = "images/shop/button_bq1.png", this.imgDay.skin = "images/shop/button_word_rcbx2.png", this.imgGood.skin = "images/shop/button_word_jpsd1.png"
        }
        onTapBtnPatch() {
            let e = Ci.GetShopInfo(14);
            Math.floor(e[0] / 1e3) <= 0 ? (Pi.FlyTxt("不应该出现此逻辑"), Ci.ResetPatch()) : Vi.VideoAdPlay(null, t.PatchRefresh, null)
        }
        Open() {
            this.initMenu(), this.refreshUI(), K.On(e.ONLINE_SEC, this, this.refreshPatchTime), Laya.timer.loop(1600, this, this.flashAdvShopRed)
        }
        Close() {
            K.Off(e.ONLINE_SEC, this, this.refreshPatchTime), Laya.timer.clear(this, this.flashAdvShopRed)
        }
        flashAdvShopRed() {
            this.pngBg && this.isInit && this.redGood.visible && (Hi.FlashEffect(this.imgGood, 190, 130), Hi.SmallBigLoop(this.redGood, 280, 1.22, .92, 1))
        }
        refreshPatchTime() {
            if (!this.boxPatchTime) return;
            this.iconPatchFree.visible = !1, this.iconPatchTimer.visible = !1, this.iconPatchAd.visible = !1;
            let t = Ci.GetShopInfo(14),
                e = Math.floor(t[0] / 1e3);
            e <= 0 ? this.iconPatchFree.visible = !0 : (this.iconPatchTimer.visible = !0, this.iconPatchAd.visible = !0, Li.fillNum(this.boxPatchTime, "shop", "word_szG", Qi.GetMinSecStr(e), n.Left))
        }
        refreshUI() {
            if (!this.pngBg) return;
            if (!this.isInit) return;
            this.isAdv && (this.isAdv = !1, this.onTapBtnGood()), this.redGood.visible = Ci.IsShopGood();
            Yi.Avatar;
            let t = [],
                e = [],
                i = [],
                s = [],
                n = J.GetDict();
            for (let a in n) {
                let l = n[a];
                switch (l.type) {
                    case 1:
                        t.push(l.id);
                        break;
                    case 2:
                        e.push(l.id);
                        break;
                    case 3:
                        i.push(l.id);
                        break;
                    case 4:
                        s.push(l.id)
                }
            }
            this.shopList1.dataSource = t, this.shopList2.dataSource = e, this.shopList3.dataSource = i, this.shopList4.dataSource = s
        }
    }
    class ae extends et.soliderSiteBannerUI {//todo:角色上阵界面
        constructor() {
            super(), this.isInit = !1, this.tapScale = 1.12, this.tapPos = null, this.tapT = null, this.tapBottom = null, this.entityDict = {}, this.page = 0, this.jobType = 0
        }
        createChildren() {
            super.createChildren(), this.on("onViewCreated", this, this.onComplete)
        }
        onComplete() {
            this.initMenu(), this.refreshUI()
        }
        initMenu() {
            this.pngBg && (this.isInit || (this.isInit = !0, Li.ScreenFull(this, !0), Qi.IsAdvScreen() && (this.centerBox.y += 100), Li.BtnTap(this, this.iconTeam0, this.onTapTeam0), Li.BtnTap(this, this.iconTeam1, this.onTapTeam1), Li.BtnTap(this, this.iconTeam2, this.onTapTeam2), Li.BtnTap(this, this.iconTeam3, this.onTapTeam3), Li.BtnTap(this, this.iconTeam4, this.onTapTeam4), Li.BtnTap(this, this.btnHeroLeft, this.onBtnLeft), Li.BtnTap(this, this.btnHeroRight, this.onBtnRight), this.heroTapBox.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown), this.heroTapBox.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMove), this.heroTapBox.on(Laya.Event.MOUSE_UP, this, this.onMouseUp), Ui.BannerOpenSucc()))
        }
        onTapTeam0() {
            this.refreshTeam(0)
        }
        onTapTeam1() {
            this.refreshTeam(1)
        }
        onTapTeam2() {
            this.refreshTeam(2)
        }
        onTapTeam3() {
            this.refreshTeam(3)
        }
        onTapTeam4() {
            this.refreshTeam(4)
        }
        onVideoDone(e) {
            e && e == t.TeamUnlock && (ve.AddTeamNum(), this.refreshUI())
        }
        refreshTeam(e = null) {
            if (!this.pngBg) return;
            let i = ve.TeamNum();
            if (null !== e) {
                if (e > i - 1) {
                    if (!ve.CanUnlockTeam(e, !1)) return;
                    return void Vi.VideoAdPlay(null, t.TeamUnlock, null)
                }
                qi.tdTeamNo = e
            }
            let s = !1;
            for (let t = 0; t <= 4; t++) {
                let e;
                if (this[`iconTeam${t}`].skin = "images/solider/button_bd_bq2.png", this[`iconLock${t}`].visible = t > i - 1, this[`iconNum${t}`].visible = t <= i - 1, this[`boxOn${t}`].visible = !1, this[`imgSiteBox${t}`].visible = !0, t < i) {
                    e = 0 == ve.TeamInfo(t).length, Li.FillRedView("solider", "red", this[`iconNum${t}`], e, -28, -32)
                } else s || (e = ve.CanUnlockTeam(t, !0), Li.FillRedView("solider", "red", this[`iconLock${t}`], e, -28, -32), s = !0)
            }
            this[`iconTeam${qi.tdTeamNo}`].skin = "images/solider/button_bd_bq1.png";
            let n = ve.TeamInfo(qi.tdTeamNo);
            for (let t in n) {
                let e = parseInt(t),
                    i = n[e],
                    s = pe.AddTeamSolider(this[`boxOn${e}`], i);
                this.entityDict[i] = s, this[`boxOn${e}`].visible = !0, this[`imgSiteBox${e}`].visible = !1
            }
        }
        onMouseDown(t) {
            let e = Qi.GlobalPoint(this.heroTapBox, 0, 0),
                i = t.stageX - e.x,
                s = t.stageY - e.y;
            if (this.tapBottom = null, s > this.siteLine.y + this.siteLine.height) this.tapBottom = !0;
            else {
                if (!(s < this.siteLine.y)) return;
                this.tapBottom = !1
            }
            this.tapPos = new Laya.Point(i, s), this.tapT = Laya.timer.currTimer;
            let [n, a] = this.tapNearSoliderId(i, s, !1);
            if (_e.currentGuideId == ot.JOIN_TEAM_DRAG_11) {
                if (6 != n) return
            } else if (_e.currentGuideId == ot.JOIN_TEAM_DRAG_21 && 31 != n) return;
            this.tapSoliderId = n, this.tapEntity = a
        }
        onMouseMove(t) {
            if (null === this.tapBottom) return;
            if (!this.tapEntity) return;
            if (_e.currentGuideId == ot.UPLV_SOLIDER_LOOK_16) return;
            let e = Qi.GlobalPoint(this.heroTapBox, 0, 0),
                i = t.stageX - e.x,
                s = t.stageY - e.y,
                n = Laya.timer.currTimer - this.tapT;
            Qi.dist(i, s, this.tapPos.x, this.tapPos.y) < 40 && n < 300 || !0 === this.tapBottom || this.tapBottom;
            let a = (i - this.tapPos.x) / this.tapScale,
                l = (s - this.tapPos.y) / this.tapScale;
            this.tapEntity.pos(a, l)
        }
        onMouseUp(t) {
            if (null === this.tapBottom) return;
            let e = Qi.GlobalPoint(this.heroTapBox, 0, 0),
                i = t.stageX - e.x,
                s = t.stageY - e.y,
                n = Laya.timer.currTimer - this.tapT,
                a = Qi.dist(i, s, this.tapPos.x, this.tapPos.y);
            if (n < 400 && a < 30) {
                if (null !== this.tapSoliderId && -1 == [ot.JOIN_TEAM_DRAG_11, ot.JOIN_TEAM_DRAG_21].indexOf(_e.currentGuideId)) {
                    if (_e.currentGuideId == ot.UPLV_SOLIDER_LOOK_16 && 1 != this.tapSoliderId) return void Pi.FlyTxt("Please click on archer to upgrade。");
                    Li.Close(S.Guide), Z.Play(L.tap), Li.Open(S.SoliderInfo, [this.tapSoliderId, !this.tapBottom])
                }
            } else if (!0 === this.tapBottom) {
                if (s < this.siteLine.y)
                    if (ve.SoliderInTeam(qi.tdTeamNo, this.tapSoliderId)) Pi.FlyTxt("The soldiers are already in formation", null, "#00FF00");
                    else {
                        let [t, e] = this.tapNearSoliderId(i, s, !0), n = t;
                        if (n) {
                            if (-1 != [ot.JOIN_TEAM_DRAG_11, ot.JOIN_TEAM_DRAG_21].indexOf(_e.currentGuideId)) return Pi.FlyTxt("Drag to a blank position"), void(this.tapEntity && (this.tapEntity.scale(1, 1), this.tapEntity.pos(0, 0)));
                            if (!ve.TeamJoin(qi.tdTeamNo, this.tapSoliderId, n)) return void(this.tapEntity && (this.tapEntity.scale(1, 1), this.tapEntity.pos(0, 0)))
                        } else {
                            if (!ve.TeamJoin(qi.tdTeamNo, this.tapSoliderId, null)) return void(this.tapEntity && (this.tapEntity.scale(1, 1), this.tapEntity.pos(0, 0)))
                        } - 1 != [ot.JOIN_TEAM_DRAG_11, ot.JOIN_TEAM_DRAG_21].indexOf(_e.currentGuideId) && _e.GuideDo(_e.currentGuideId, !0), Li.Close(S.Guide)
                    }
            } else !1 === this.tapBottom && s > this.siteLine.y + this.siteLine.height && ve.TeamJoin(qi.tdTeamNo, this.tapSoliderId, null);
            this.tapBox && this.tapBox.scale(1, 1), this.tapEntity && this.tapEntity.pos(0, 0), this.refreshUI(), this.tapBox = null, this.tapPos = null, this.tapSoliderId = null, this.tapSoliderId = null, this.tapEntity = null, this.tapBottom = null
        }
        tapNearSoliderId(t, e, i = !1) {
            let s = null,
                n = null,
                a = null;
            for (let i = 0; i <= 4; i++) {
                if (!this[`boxOn${i}`].visible) continue;
                let l = this[`boxOn${i}`].getChildAt(0);
                if (!l) continue;
                let o = Qi.dist(t, e, this[`boxOn${i}`].x, this[`boxOn${i}`].y);
                o < 80 && (null === s || o < s) && (s = o, a = l, n = l.soliderId, this.heroTapBox.setChildIndex(this[`boxOn${i}`], this.heroTapBox.numChildren - 3), this.tapBox = this[`boxOn${i}`])
            }
            if (!i)
                for (let i = 0; i <= 11; i++) {
                    if (!this[`boxOff${i}`].visible) continue;
                    let l = this[`boxOff${i}`].getChildAt(0);
                    if (!l) continue;
                    let o = Qi.dist(t, e, this[`boxOff${i}`].x, this[`boxOff${i}`].y);
                    o < 80 && (null === s || o < s) && (s = o, a = l, n = l.soliderId, this.heroTapBox.setChildIndex(this[`boxOff${i}`], this.heroTapBox.numChildren - 3), this.tapBox = this[`boxOff${i}`])
                }
            return this.tapBox && this.tapBox.scale(this.tapScale, this.tapScale), [n, a]
        }
        Open() {
            this.initMenu(), this.refreshUI(), K.On(e.TEAM_UNLOCK_REFRESH, this, this.refreshUI), K.On(e.SOLIDER_UPLEVEL, this, this.refreshListSolider), K.On(e.VIDEO_FINISH, this, this.onVideoDone), Laya.timer.loop(1200, this, this.flashShopSolider)
        }
        Close() {
            this.jobType = 0, K.Off(e.TEAM_UNLOCK_REFRESH, this, this.refreshUI), K.Off(e.SOLIDER_UPLEVEL, this, this.refreshListSolider), K.Off(e.VIDEO_FINISH, this, this.onVideoDone), Laya.timer.clear(this, this.flashShopSolider)
        }
        flashShopSolider() {
            this.pngBg && this.isInit && Hi.FlashEffect(this.labWarring, 140, 140)
        }
        refreshUI() {
            this.pngBg && this.isInit && (this.refreshSoliderJob(), this.refreshPageBtn(), this.refreshListSolider())
        }
        refreshSoliderJob() {}
        onBtnLeft() {
            this.page > 0 && this.page--, this.refreshPageBtn(), this.refreshListSolider()
        }
        onBtnRight() {
            this.page++, this.refreshPageBtn(), this.refreshListSolider()
        }
        refreshPageBtn() {
            if (!this.pngBg) return;
            this.page <= 0 ? this.btnHeroLeft.visible = !1 : this.btnHeroLeft.visible = !0;
            let t = ve.GetSoliderNum(this.jobType),
                e = Math.ceil(t / 12);
            e--, this.page >= e ? this.btnHeroRight.visible = !1 : this.btnHeroRight.visible = !0
        }
        refreshListSolider() {
            if (this.refreshTeam(null), !this.pngBg) return;
            let t = 0,
                e = 12 * this.page,
                i = ve.GetSoliderIdList(this.jobType);
            for (let s in i) {
                let n = parseInt(s);
                if (n >= e && n < e + 12) {
                    t++;
                    let e = n % 12,
                        a = i[s],
                        l = pe.AddSiteSolider(this[`boxOff${e}`], a);
                    this.entityDict[a] = l, this[`boxOff${e}`].visible = !0
                }
            }
            for (let e = t; e < 12; e++) {
                this[`boxOff${e%12}`].visible = !1
            }
            let s = Math.ceil(i.length / 12),
                n = (1 + s) / 2;
            this.pageBox.removeChildren();
            for (let t = 1; t <= s; t++) {
                let e = new Laya.Image;
                this.pageBox.addChild(e), e.skin = t == this.page + 1 ? "images/solider/icon_ym2.png" : "images/solider/icon_ym1.png", e.x = this.pageBox.width / 2 - 60 * (n - t)
            }
            ae.guideDragTo = null;
            let a = new Laya.Point(this.centerBox.x + this.upGuideBox.x, this.centerBox.y + this.upGuideBox.y);
            if (_e.isGuide(ot.JOIN_TEAM_BTN_10) && !_e.isGuide(ot.JOIN_TEAM_DRAG_11)) {
                let t = i.indexOf(6);
                if (-1 != t && this[`boxOff${t}`]) {
                    let e = this.centerBox.x + this.heroTapBox.x + this[`boxOff${t}`].x,
                        i = this.centerBox.y + this.heroTapBox.y + this[`boxOff${t}`].y - 192 + 94;
                    Qi.IsAdvScreen() && (i -= 100), this.downGuideBox.pos(e, i), ae.guideDragTo = [a.x, a.y, this.upGuideBox.width, this.upGuideBox.height, 150]
                }
            } else if (_e.isGuide(ot.JOIN_TEAM_BTN_20) && !_e.isGuide(ot.JOIN_TEAM_DRAG_21)) {
                let t = i.indexOf(31);
                if (-1 != t && this[`boxOff${t}`]) {
                    let e = this.centerBox.x + this.heroTapBox.x + this[`boxOff${t}`].x,
                        i = this.centerBox.y + this.heroTapBox.y + this[`boxOff${t}`].y - 192 + 94;
                    Qi.IsAdvScreen() && (i -= 100), this.downGuideBox.pos(e, i), ae.guideDragTo = [a.x, a.y, this.upGuideBox.width, this.upGuideBox.height, 290]
                }
            } else if (!_e.isGuide(ot.UPLV_SOLIDER_LOOK_16)) {
                let t = i.indexOf(1);
                if (-1 != t && this[`boxOff${t}`]) {
                    let e = this.centerBox.x + this.heroTapBox.x + this[`boxOff${t}`].x,
                        i = this.centerBox.y + this.heroTapBox.y + this[`boxOff${t}`].y - 192 + 94;
                    Qi.IsAdvScreen() && (i -= 100), this.downGuideBox.pos(e, i), ae.guideDragTo = [a.x, a.y, this.upGuideBox.width, this.upGuideBox.height, 0]
                }
            }
        }
        onTypeToggle() {
            this.jobType = 0
        }
        onBtnType0() {
            this.onBtnTapType(0)
        }
        onBtnType1() {
            this.onBtnTapType(I.fighter)
        }
        onBtnType2() {
            this.onBtnTapType(I.tank)
        }
        onBtnType3() {
            this.onBtnTapType(I.kill)
        }
        onBtnType4() {
            this.onBtnTapType(I.master)
        }
        onBtnType5() {
            this.onBtnTapType(I.shooter)
        }
        onBtnTapType(t) {
            this.page = 0, this.jobType = t, this.refreshUI()
        }
    }
    ae.guideDragTo = null;
    class le extends et.soliderInfoViewUI {
        constructor() {
            super(), this.needCloseSave = !1, this.isInit = !1
        }
        static set soliderId(t) {
            le._soliderId = t, K.Evt(e.TAP_SOLIDER_CHANGE)
        }
        static get soliderId() {
            return le._soliderId
        }
        initData(t) {
            le.soliderId = t[0], this.tapInTeam = t[1], this.initMenu(), this.refreshUI()
        }
        createChildren() {
            super.createChildren(), this.on("onViewCreated", this, this.onComplete)
        }
        onComplete() {
            this.initMenu(), this.refreshUI()
        }
        onEnable() {
            Laya.timer.loop(1e3, this, this.refreshUI)
        }
        onDisable() {
            Laya.timer.clear(this, this.refreshUI)
        }
        initMenu() {
            this.pngBg && le.soliderId && (this.isInit || (this.isInit = !0, this.needCloseSave = !1, le.arrSoliderId = ve.GetSoliderIdList(0), Li.ScreenFull(this, !0), Qi.IsAdvScreen() && (this.centerBox.y += 100), Li.BtnTap(this, this.btnClose, this.onBtnClose), Li.BtnTap(this, this.btnUp, this.onBtnUpLevel), Li.BtnTap(this, this.btnLeft, this.onBtnLeft), Li.BtnTap(this, this.btnRight, this.onBtnRight), Li.BtnTap(this, this.btnBeyondCost, this.onBtnBeyondCost), Li.BtnTap(this, this.btnBeyondAd, this.onBtnBeyondAd), Qi.IsDev() && Li.BtnTap(this, this.iconPatch, this.onDevAddPatch), this.initTxt()))
        }
        onBtnBeyondCost() {
            ve.BeyondDo(le.soliderId, !1), this.refreshUI()
        }
        onBtnBeyondAd() {
            Vi.VideoAdPlay(null, t.BeyondUpLv, null)
        }
        initTxt() {
            this.labAtk.text = "", this.labRange.text = "", this.labSuper.text = "", this.labAtkSpeek.text = "", this.labCut.text = ""
        }
        onDevAddPatch() {
            if (!Qi.IsDev()) return;
            let t = Qi.RandomInt(30, 60);
            ve.AddPatch(le.soliderId, t)
        }
        Open() {
			Plat.I.ShowInter()
            this.initMenu(), this.refreshUI(), K.On(e.PATCH_NUM_CHANGE, this, this.refreshUI), K.On(e.VIDEO_FINISH, this, this.onVideoDone)
        }
        Close() {
            K.Off(e.PATCH_NUM_CHANGE, this, this.refreshUI), K.Off(e.VIDEO_FINISH, this, this.onVideoDone), this.needCloseSave && (this.needCloseSave = !1, Xi.SaveApi(!0))
        }
        getLeftRightId(t, e) {
            let i, s = (i = this.tapInTeam ? ve.TeamInfo(qi.tdTeamNo) : le.arrSoliderId).indexOf(t);
            return i[s + e]
        }
        onBtnLeft() {
            let t = this.getLeftRightId(le.soliderId, -1);
            t && (le.soliderId = t, this.initTxt(), this.refreshUI())
        }
        onBtnRight() {
            let t = this.getLeftRightId(le.soliderId, 1);
            t && (le.soliderId = t, this.initTxt(), this.refreshUI())
        }
        onVideoDone(e) {
            e && e == t.BeyondUpLv && (ve.BeyondDo(le.soliderId, !0), this.refreshUI())
        }
        refreshBeyond() {
            if (!this.pngBg) return;
            if (!le.soliderId) return;
            if (!this.isInit) return;
            if (this.imgLvMax.visible) return void(this.boxBeyond.visible = !1);
            let t = ve.getBeyondT(le.soliderId);
            if (this.boxBeyond.visible = t > 0, this.boxCost.visible = !t, this.boxBeyond.visible) {
                let e = ve.getBeyondNeed(le.soliderId);
                if (!e) return;
                let [i, s] = e;
                i == d.diamond ? (this.iconBeyond.skin = "images/solider/icon_zy_zs.png", Li.fillNum(this.boxBeyondCost, "main", "icon_word", "x" + s, n.Center)) : i == d.gold && (this.iconBeyond.skin = "images/solider/icon_zy_jb.png", Li.fillNum(this.boxBeyondCost, "main", "icon_word", Qi.num2Str(s, !0), n.Left));
                let a = ve.getBeyondMaxT(le.soliderId),
                    l = Math.floor(t / 1e3),
                    o = 1 - t / a;
                Li.AddProceMask(this.imgBeyondVal, this.imgBeyondBg.width - 0, this.imgBeyondBg.height - 0, o), this.labBeyondTimer.text = "突破进度：" + Qi.GetMinSecStr(l)
            }
        }
        refreshUI() {
            if (!this.pngBg) return;
            if (!le.soliderId) return;
            if (!this.isInit) return;
            ve.LookNewSolider(le.soliderId), this.debugPow();
            let t = Wi.GetCfg(le.soliderId);
            Li.fillNum(this.boxAdvIcon, "solider", "icon_td", t.iconStr, n.Right), this.iconJobImg.skin = `images/solider/icon_job_${t.job}.png`, this.iconJobTxt.skin = `images/solider/txt_job_${t.job}.png`, this.iconStar1.visible = !1, this.iconStar2.visible = !1, this.iconStar3.visible = !1, this.iconStar4.visible = !1, this.iconStar5.visible = !1;
            for (let e = 1; e <= t.quality; e++) this[`iconStar${e}`].visible = !0;
            this.boxStar.x = 150 + 25 * (5 - t.quality), this.labName.text = t.name || "未命名", this.soliderIcon.skin = `images/man/${t.skin}.png`, X.RepairsoliderC16(this.soliderIcon, 275, 243, 13, -16);
            let e = t.quality;
            this.imgTopBanner.skin = `images/solider/icon_tc_pzbg_${e}.png`, this.imgIconQuality.skin = `images/solider/icon_tc_pzword_${e}.png`;
            let i = ve.GetSoliderLv(le.soliderId),
                s = ve.GetSoliderMaxLv(le.soliderId);
            this.imgLvMax.visible = !1, this.boxCost.visible = !1, this.boxBeyond.visible = !1, this.iconPatch.visible = !1, this.iconCostGold.visible = !1, this.labPatch.visible = !0, this.imgPatchBg.visible = !0;
            let a = ve.UpNeedGold(le.soliderId);
            a ? (this.boxCost.visible = !0, this.iconPatch.visible = !0, this.iconPatch.skin = `images/obj/sp_${le.soliderId}.png`, this.iconCostGold.visible = !0, this.labCostGold.text = a + "", this.labLv.text = `Lv.${i}/${s}`, this.labLvBg.text = `Lv.${i}/${s}`) : (this.imgLvMax.visible = !0, this.labPatch.visible = !1, this.imgPatchBg.visible = !1, this.labLv.text = `Lv.${i}[已满级]`, this.labLvBg.text = `Lv.${i}[已满级]`);
            let l = ve.PatchNum(le.soliderId),
                o = ve.UpNeedPatch(le.soliderId);
            this.labPatch.text = l + "/" + o;
            let r = l / o;
            Li.AddProceMask(this.imgPatchVal, this.imgPatchBg.width - 0, this.imgPatchBg.height - 0, r);
            let h = ve.IsUpRed(t.id);
            Li.FillRedView("solider", "upRed", this.iconPatch, h, 4, -160), Li.FillRedView("solider", "red", this.iconBtnUp, h, -14, -57);
            let d = this.getLeftRightId(le.soliderId, -1),
                u = this.getLeftRightId(le.soliderId, 1);
            this.btnLeft.visible = d && !0, this.btnRight.visible = u && !0;
            let c = null !== d && ve.IsUpRed(d),
                p = null !== u && ve.IsUpRed(u);
            Li.FillRedView("solider", "red", this.btnLeft, c, 2, 6), Li.FillRedView("solider", "red", this.btnRight, p, 35, 5), this.labDesc.text = t.remark;
            let f = Wi.atkVal(le.soliderId, i, 1);
            "" != this.labAtk.text && this.labAtk.text != `${f}` && (Hi.FlashColor(this.labAtk, 120, 100, 1, 0, 0), Hi.SmallBigLoop(this.labAtk, 90, .88, 1.08, 1, null, null)), this.labAtk.text = f + "";
            let g = Math.floor(1e3 / Wi.bulletInterval(le.soliderId, i, 1) * 100) / 100 + "/s";
            "" != this.labAtkSpeek.text && this.labAtkSpeek.text != g && (Hi.FlashColor(this.labAtkSpeek, 120, 100, 1, 0, 0), Hi.SmallBigLoop(this.labAtkSpeek, 90, .88, 1.08, 1, null, null)), this.labAtkSpeek.text = g;
            let m = Wi.shootVal(le.soliderId, i, 1);
            t.shootRange[0];
            "" != this.labRange.text && this.labRange.text != m + "" && (Hi.FlashColor(this.labRange, 120, 100, 1, 0, 0), Hi.SmallBigLoop(this.labRange, 90, .88, 1.08, 1, null, null)), this.labRange.text = m + "";
            let y = Wi.superdRnd(le.soliderId, i, 1);
            t.super[0];
            this.boxSuper.visible = y > 0;
            let I = Wi.cutdVal(le.soliderId, i, 1);
            t.cut[0];
            this.boxCut.visible = I > 0;
            let b = 0,
                S = [
                    [388, 237],
                    [88, 324],
                    [388, 324]
                ];
            if (this.boxSuper.visible && ("" != this.labSuper.text && this.labSuper.text != y + "%" && (Hi.FlashColor(this.labSuper, 120, 100, 1, 0, 0), Hi.SmallBigLoop(this.labSuper, 90, .88, 1.08, 1, null, null)), this.labSuper.text = y + "%", this.boxSuper.pos(S[b][0], S[b][1]), b++), this.boxCut.visible && ("" != this.labCut.text && this.labCut.text != I + "%" && (Hi.FlashColor(this.labCut, 120, 100, 1, 0, 0), Hi.SmallBigLoop(this.labCut, 90, .88, 1.08, 1, null, null)), this.labCut.text = I + "%", this.boxCut.pos(S[b][0], S[b][1]), b++), this.boxBuildGold.pos(S[b][0], S[b][1]), this.labBuildGold.text = qi.SoliderGoldNeed(le.soliderId, 0) + "", Qi.IsDev()) {
                this.labUpdesc.text = "", this.labUpdesc.visible = !0;
                let t = Wi.atkVal(le.soliderId, 1, 1),
                    e = Wi.atkVal(le.soliderId, s, 1) - t,
                    i = Wi.bulletInterval(le.soliderId, 1, 1),
                    n = Wi.bulletInterval(le.soliderId, s, 1) - i,
                    a = n / 1e3,
                    l = Wi.shootVal(le.soliderId, 1, 1),
                    o = Wi.shootVal(le.soliderId, s, 1) - l,
                    r = Wi.superdRnd(le.soliderId, 1, 1),
                    h = Wi.superdRnd(le.soliderId, s, 1) - r,
                    d = Wi.cutdVal(le.soliderId, 1, 1),
                    u = Wi.cutdVal(le.soliderId, s, 1) - d,
                    c = Wi.rangeVal(le.soliderId, 1, 1),
                    p = Wi.rangeVal(le.soliderId, s, 1) - c;
                e > 0 && (this.labUpdesc.text += `攻击+${e}`), n > 0 && (this.labUpdesc.text += `攻速+${n}(${a}/s)`), o > 0 && (this.labUpdesc.text += `射程+${o}`), h > 0 && (this.labUpdesc.text += `暴击+${h}%`), u > 0 && (this.labUpdesc.text += `破甲+${u}%`), p > 0 && (this.labUpdesc.text += `范围+${p}`)
            }
            this.refreshBeyond()
        }
        onBtnClose() {
            Li.Close(S.SoliderInfo)
        }
        onBtnUpLevel() {
            if (!le.soliderId) return;
            ve.UpLevel(le.soliderId) && (this.needCloseSave = !0), this.refreshUI(), K.Evt(e.SOLIDER_UPLEVEL)
        }
        debugPow() {
            if (!le.soliderId) return;
            let t = qi.SoliderGoldNeed(le.soliderId, 0),
                e = qi.SoliderGoldNeed(le.soliderId, 1),
                i = t,
                s = t + e,
                n = t + e + qi.SoliderGoldNeed(le.soliderId, 2),
                a = ve.GetSoliderLv(le.soliderId),
                l = Wi.atkVal(le.soliderId, a, 1),
                o = Wi.atkVal(le.soliderId, a, 2),
                r = Wi.atkVal(le.soliderId, a, 3),
                h = Wi.shootVal(le.soliderId, a, 1),
                d = Wi.shootVal(le.soliderId, a, 2),
                u = Wi.shootVal(le.soliderId, a, 3),
                c = 1e3 * l / Wi.bulletInterval(le.soliderId, a, 1),
                p = 1e3 * o / Wi.bulletInterval(le.soliderId, a, 2),
                f = 1e3 * r / Wi.bulletInterval(le.soliderId, a, 3),
                g = c * h * 2 / 65,
                m = p * d * 2 / 65,
                y = f * u * 2 / 65,
                I = g / i,
                b = (g + m) / s,
                S = (g + m + y) / n;
            Qi.Log("----------"), Qi.Log(`1=> 秒伤:${c},战力:${g},战/金:${I}`), Qi.Log(`2=> 秒伤:${p},战力:${m},战/金:${b}`), Qi.Log(`3=> 秒伤:${f},战力:${y},战/金:${S}`)
        }
    }
    le._soliderId = null, le.arrSoliderId = null;
    class oe extends et.soliderUpItemUI {
        constructor() {
            super(), this.size(150, 193)
        }
        createChildren() {
            super.createChildren(), this.on("onViewCreated", this, this.onComplete)
        }
        onComplete() {
            this.refreshItem()
        }
        onEnable() {
            this.refreshItem(), K.On(e.TAP_SOLIDER_CHANGE, this, this.refreshItem), K.On(e.PATCH_NUM_CHANGE, this, this.refreshItem), K.On(e.LOOK_NEW_SOLIDER, this, this.refreshItem)
        }
        onDisable() {
            K.Off(e.TAP_SOLIDER_CHANGE, this, this.refreshItem), K.Off(e.PATCH_NUM_CHANGE, this, this.refreshItem), K.Off(e.LOOK_NEW_SOLIDER, this, this.refreshItem)
        }
        setItem(t, e) {
            this.soliderId = t, this.inWhere = e, this.refreshItem()
        }
        onTapSolider() {
            if (this.soliderId) switch (this.inWhere) {
                case "site":
                    break;
                case "list":
                    ve.ActSolider(this.soliderId)
            }
        }
        refreshItem() {
            if (!this.btnImg) return;
            if (!this.soliderId) return;
            _e.currentGuideId == ot.JOIN_TEAM_DRAG_11 || _e.currentGuideId == ot.JOIN_TEAM_DRAG_21 || Li.BtnTap(this, this.btnImg, this.onTapSolider, null);
            let t = this.soliderId,
                e = Wi.GetCfg(t);
            if (this.imgBgOn.visible = t == le.soliderId, this.btnImg.skin = `images/solider/icon_lb_bg${e.quality}.png`, this.iconJob.skin = `images/solider/icon_job_${e.job}.png`, ve.SoliderInTeam(qi.tdTeamNo, t)) Li.FillRedView("man", "icon_ysz", this.iconImg, !0, -8, 56);
            else {
                let e = ve.IsNewSolider(t);
                Li.FillRedView("man", "icon_new", this.iconImg, e, -20, 75)
            }
            let i = ve.IsUpRed(t);
            Li.FillRedView("man", "upRed", this.iconPatch, i, -1, -88);
            let s = ve.GetSoliderLv(t);
            this.iconPatch.skin = `images/obj/sp_${e.id}.png`, this.iconImg.skin = `images/man/${e.skin}.png`, X.RepairsoliderC16(this.iconImg, 75, 65, 6, -6);
            let n = ve.PatchNum(t),
                a = null;
            switch (this.iconLvMax.visible = !1, this.imgPatchBg.visible = !1, this.inWhere) {
                case "site":
                    this.labLv.text = `Lv.${s}`;
                    let e = ve.UpNeedPatch(t);
                    e ? (a = n / e, this.labPatch.text = `${n}/${e}`) : this.iconLvMax.visible = !0;
                    break;
                case "list":
                    if (s) {
                        this.labLv.text = `Lv${s}`;
                        let e = ve.UpNeedPatch(t);
                        a = n / e, this.labPatch.text = `${n}/${e}`
                    } else {
                        let e = ve.ActNeedPatch(t);
                        a = n / e, n >= e ? (this.labLv.text = "待激活", this.labPatch.text = `${n}/${e}`) : n > 0 ? (this.labLv.text = "收集中", this.labPatch.text = `${n}/${e}`) : (a = null, this.labLv.text = "待收集")
                    }
            }
            null !== a && (this.imgPatchBg.visible = !0, a >= 1 ? (a = 1, this.imgPatchVal.skin = "images/solider/icon_jdt_2.png", this.labPatch.color = "#383838") : (this.imgPatchVal.skin = "images/solider/icon_jdt_1.png", this.labPatch.color = "#ffffff"), Li.AddProceMask(this.imgPatchVal, this.imgPatchBg.width - 0, this.imgPatchBg.height - 0, a))
        }
    }
    class re extends et.soliderTeamItemUI {
        constructor() {
            super(), this.size(170, 190)
        }
        createChildren() {
            super.createChildren(), this.on("onViewCreated", this, this.onComplete)
        }
        onComplete() {
            this.refreshItem()
        }
        onEnable() {
            this.refreshItem(), setTimeout(function () {
                this.flashCanUp()
            }.bind(this), 300), K.On(e.TAP_SOLIDER_CHANGE, this, this.refreshItem), K.On(e.SOLIDER_UPLEVEL, this, this.refreshItem), Laya.timer.loop(1600, this, this.flashCanUp)
        }
        onDisable() {
            K.Off(e.TAP_SOLIDER_CHANGE, this, this.refreshItem), K.Off(e.SOLIDER_UPLEVEL, this, this.refreshItem), Laya.timer.clear(this, this.flashCanUp)
        }
        setItem(t) {
            this.soliderId = t, this.refreshItem()
        }
        onTapSolider() {
            this.soliderId && Li.IsOpen(S.Order) && Li.Open(S.SoliderInfo, [this.soliderId, !0])
        }
        refreshItem() {
            if (!this.iconImg) return;
            if (!this.soliderId) return;
            let t = this.soliderId,
                e = Wi.GetCfg(t);
            this.iconJob.skin = `images/solider/icon_job_${e.job}.png`, this.iconImg.skin = `images/man/${e.skin}.png`, X.RepairsoliderC16(this.iconImg, 85, 67, 6, -7);
            let i = ve.GetSoliderLv(t);
            this.labLv.text = `Lv.${i}`;
            let s = ve.IsUpRed(t);
            Li.FillRedView("man", "canUp", this.boxCanUp, s, 0, 0)
        }
        flashCanUp() {
            if (!this.iconImg) return;
            if (!this.soliderId) return;
            if (!Li.IsOpen(S.Order)) return;
            Li.BtnTap(this, this.iconImg, this.onTapSolider);
            let t = this.soliderId;
            ve.IsUpRed(t) && (Hi.FlashEffect(this.boxCanUp, 100, 100), Hi.SmallBigLoop(this.boxCanUp, 160, 1.04, .98))
        }
    }
    class he extends et.talentItemUI {
        constructor() {
            super(), this.size(88, 88)
        }
        createChildren() {
            super.createChildren(), this.on("onViewCreated", this, this.onComplete)
        }
        onComplete() {
            this.refreshItem()
        }
        setItem(t) {
            this.talentId = t, this.refreshItem()
        }
        onTapItem() {
            this.talentId && (K.Evt(e.TAP_TALENT_ITEM, this.talentId), this.refreshItem())
        }
        refreshItem() {
            if (!this.imgIcon) return;
            if (!this.talentId) return;
            Li.BtnTap(this, this.imgIcon, this.onTapItem);
            let t = this.talentId,
                e = Wt.GetCfg(t),
                i = Yt.GetLevel(e.id);
            this.iconTap.visible = t == Zt.talentId, this.imgIcon.skin = `images/talent/talent_${e.id}.png`,
				i >= e.max ? this.labLv.text = "Max lev" : this.labLv.text = `Lv.${i}`;
            let s = t != Zt.talentId && Yt.CanUpRed(t);
            Li.FillRedView("talent", "red", this.boxLv, s, -10, -10)
        }
    }
    class de extends et.picEnemyUI {
        constructor() {
            super(), this.size(140, 192)
        }
        createChildren() {
            super.createChildren(), this.on("onViewCreated", this, this.onComplete)
        }
        onComplete() {
            this.refreshItem()
        }
        onEnable() {
            this.refreshItem()
        }
        onDisable() {}
        setItem(t) {
            this.enemyId = t, this.refreshItem()
        }
        refreshItem() {
            if (!this.labName) return;
            if (!this.enemyId) return;
            Li.BtnTap(this, this.bgImg, this.onTapView);
            let t = this.enemyId,
                e = H.GetCfg(t);
            this.labName.text = e.name || "未命名", this.labName.color = It.QColor[e.quality], 9 == e.quality ? (this.iconBoss.visible = !0, this.bgImg.skin = "images/solider/icon_lb_bg_gw2.png") : (this.iconBoss.visible = !1, this.bgImg.skin = "images/solider/icon_lb_bg_gw1.png"), this.iconEnemy.skin = `images/fight/${e.skin}_1.png`, X.InitPivot(this.iconEnemy, "fight", `${e.skin}`)
        }
        onTapView() {
            this.enemyId && Li.Open(S.SoliderDesc, ["enemy", this.enemyId])
        }
    }
    class ue extends et.picSoliderUI {
        constructor() {
            super(), this.size(140, 192)
        }
        createChildren() {
            super.createChildren(), this.on("onViewCreated", this, this.onComplete)
        }
        onComplete() {
            this.refreshItem()
        }
        onEnable() {
            this.refreshItem(), K.On(e.TAP_SOLIDER_CHANGE, this, this.refreshItem), K.On(e.PATCH_NUM_CHANGE, this, this.refreshItem)
        }
        onDisable() {
            K.Off(e.TAP_SOLIDER_CHANGE, this, this.refreshItem), K.Off(e.PATCH_NUM_CHANGE, this, this.refreshItem)
        }
        setItem(t, e) {
            this.soliderId = t, this.inWhere = e, this.refreshItem()
        }
        onTapAct() {
            if (this.soliderId) switch (this.inWhere) {
                case "site":
                    break;
                case "list":
                    ve.ActSolider(this.soliderId), this.refreshItem()
            }
        }
        onTapView() {
            if (this.soliderId) switch (this.inWhere) {
                case "site":
                    break;
                case "list":
                    Li.Open(S.SoliderDesc, ["solider", this.soliderId])
            }
        }
        refreshItem() {
            if (!this.btnAct) return;
            if (!this.soliderId) return;
            Li.BtnTap(this, this.bgImg, this.onTapView), Li.BtnTap(this, this.btnAct, this.onTapAct);
            let t = this.soliderId,
                e = Wi.GetCfg(t);
            this.imgMask.visible = !1, this.btnAct.visible = !1, this.imgPatchBg.visible = !1, this.bgImg.skin = `images/solider/icon_pic_bg${e.quality}.png`, this.iconJob.skin = `images/solider/icon_job_${e.job}.png`, this.iconSolider.skin = `images/man/${e.skin}.png`, this.iconPatch.skin = `images/obj/sp_${e.id}.png`, X.InitPivot(this.iconSolider, "man", e.skin), this.labName.text = e.name ? e.name : "未命名", this.labName.color = It.QColor[e.quality];
            let i = ve.IsActRed(t);
            Li.FillRedView("man", "red", this.actIconTxt, i, -18, -30);
            let s = ve.GetSoliderLv(t),
                n = ve.PatchNum(t);
            if (s) this.iconSolider.scale(.78, .78);
            else {
                this.iconSolider.scale(.7, .7), this.imgMask.visible = !0, this.btnAct.visible = !0, this.imgPatchBg.visible = !0, this.btnAct.visible = !1, this.iconUnlock.visible = !1;
                let e = ve.ActNeedPatch(t),
                    i = n / e;
                n >= e ? (this.btnAct.visible = !0, this.labPatch.text = `${n}/${e}`) : (this.iconUnlock.visible = !0, this.labPatch.text = `${n}/${e}`), i >= 1 ? (i = 1, this.imgPatchVal.skin = "images/solider/icon_jdt_2.png", this.labPatch.color = "#000000") : (this.imgPatchVal.skin = "images/solider/icon_jdt_1.png", this.labPatch.color = "#ffffff"), Li.AddProceMask(this.imgPatchVal, this.imgPatchBg.width - 0, this.imgPatchBg.height - 0, i)
            }
        }
    }
    class ce extends et.picBannerUI {//todo:角色界面
        constructor() {
            super(), this.isInit = !1
        }
        createChildren() {
            super.createChildren(), this.on("onViewCreated", this, this.onComplete)
        }
        onComplete() {
            this.initMenu(), this.refreshUI()
        }
        updateSoliderItem(t, e) {
            t.setItem(t.dataSource, "list");
            let i = Wi.GetDict(),
                s = Qi.DictLen(i),
                n = Math.ceil(s / 4),
                a = this.soliderList.scrollBar.max - 25 * (n - 1) + 12;
            this.imgDown.visible = this.soliderList.scrollBar.value < a
        }
        updateEnemyItem(t, e) {
            t.setItem(t.dataSource);
            let i = H.GetDict(),
                s = Qi.DictLen(i),
                n = Math.ceil(s / 4),
                a = this.enemyList.scrollBar.max - 25 * (n - 1) + 12;
            this.imgDown.visible = this.enemyList.scrollBar.value < a
        }
        initMenu() {
            this.pngBg && (this.isInit || (this.isInit = !0, pe.ScreenFull(this), Qi.IsAdvScreen() && (this.centerBox.y += 100), ce.picType = "solider", Li.BtnTap(this, this.btnSolider, this.onBtnSolider), Li.BtnTap(this, this.btnEnemy, this.onBtnEnemy), Li.BtnTap(this, this.boxGuide, this.onBtnGuide), this.soliderList.repeatX = 4, this.soliderList.repeatY = 4, this.soliderList.spaceX = 34, this.soliderList.spaceY = 28, this.soliderList.vScrollBarSkin = "", this.soliderList.itemRender = ue, this.soliderList.renderHandler = new Laya.Handler(this, this.updateSoliderItem), this.enemyList.repeatX = 4, this.enemyList.repeatY = 4, this.enemyList.spaceX = 33, this.enemyList.spaceY = 29, this.enemyList.vScrollBarSkin = "", this.enemyList.itemRender = de, this.enemyList.renderHandler = new Laya.Handler(this, this.updateEnemyItem), Ui.BannerOpenSucc()))
        }
        onBtnGuide() {
            ve.ActSolider(6), this.refreshUI()
        }
        onBtnSolider() {
            ce.picType = "solider", this.btnSolider.y = -7, this.btnSolider.height = 75, this.btnSolider.sizeGrid = "",
				this.btnSolider.skin = "images/solider/button_bq1.png", 
				this.iconSolider.skin = "images/solider/button_word_xb2.png", this.btnEnemy.y = -14, this.btnEnemy.height = 62,
				this.btnEnemy.sizeGrid = "0,14,0,14", this.btnEnemy.skin = "images/solider/button_bq2.png",
				this.iconEnemy.skin = "images/solider/button_word_gw1.png", this.enemyList.visible = !1, this.soliderList.visible = !0, this.soliderList.scrollTo(0), this.refreshUI()
        }
        onBtnEnemy() {
            ce.picType = "enemy", this.btnSolider.y = -14, this.btnSolider.height = 62, this.btnSolider.sizeGrid = "0,14,0,14", this.btnSolider.skin = "images/solider/button_bq2.png",
				this.iconSolider.skin = "images/solider/button_word_xb1.png", this.btnEnemy.y = -7, this.btnEnemy.height = 75, 
				this.btnEnemy.sizeGrid = "", this.btnEnemy.skin = "images/solider/button_bq1.png",
				this.iconEnemy.skin = "images/solider/button_word_gw2.png", this.soliderList.visible = !1, this.enemyList.visible = !0, this.enemyList.scrollTo(0), this.refreshUI()
        }
        Open() {
            ce.picType = null, this.initMenu(), this.refreshUI(), Laya.timer.loop(1200, this, this.flashShopPatch)
        }
        Close() {
            ce.picType = null, Laya.timer.clear(this, this.flashShopPatch)
        }
        flashShopPatch() {
            this.pngBg && this.isInit && Hi.FlashEffect(this.labWarring, 140, 140)
        }
        refreshUI() {
            if (this.pngBg && this.isInit && null !== ce.picType)
                if ("solider" == ce.picType) {
                    let t = ve.GetSoliderPicList();
                    this.soliderList.dataSource = t;
                    let e = t.indexOf(6);
                    if (-1 != e) {
                        let t = Math.floor(e / 4),
                            i = e % 4,
                            s = this.centerBox.x + this.soliderList.x + 140 * i + 34 * i + 70,
                            n = this.centerBox.y + this.soliderList.y + 192 * t + 28 * t + 96;
                        this.boxGuide.pos(s, n)
                    }
                } else if ("enemy" == ce.picType) {
                let t = [],
                    e = H.GetDict();
                for (let i in e) {
                    let s = e[i]; - 1 != [1, 2, 3, 4, 5, 6, 7].indexOf(s.quality) && t.push(s.id)
                }
                this.enemyList.dataSource = t
            }
        }
    }
    ce.picType = null;
    class pe {
        static StopTap() {
            pe.Layer.mouseEnabled = !1;
            let t = Laya.stage.getChildIndex(qi.GetLayer(ut.Zero)),
                e = Laya.stage.getChildIndex(pe.GetLayer());
            t < e && (Laya.stage.setChildIndex(qi.GetLayer(ut.Zero), e), Laya.stage.setChildIndex(pe.GetLayer(), t))
        }
        static ReTap() {
            pe.Layer.mouseEnabled = !0;
            let t = Laya.stage.getChildIndex(qi.GetLayer(ut.Zero)),
                e = Laya.stage.getChildIndex(pe.GetLayer());
            t > e && (Laya.stage.setChildIndex(qi.GetLayer(ut.Zero), e), Laya.stage.setChildIndex(pe.GetLayer(), t))
        }
        static Init() {
            pe.Layer = new Laya.Box, pe.Layer.width = Laya.stage.width, pe.Layer.height = Laya.stage.height, pe.Layer.mouseThrough = !0, pe.bannerCache = {}, pe.uiDict = {}, pe.bannerOpen = {}, pe.uiDict[b.Bottom] = Ui, pe.uiDict[b.Pic] = ce, pe.uiDict[b.SoliderSite] = ae, pe.uiDict[b.Main] = zt, pe.uiDict[b.Talent] = Zt, pe.uiDict[b.Shop] = ne
        }
        static GetLayer() {
            return pe.Layer
        }
        static Open(t, e = null) {
            let i = pe.bannerCache[t];
            if (!i) {
                i = new(0, pe.uiDict[t]), pe.bannerCache[t] = i
            }
            if (!pe.bannerOpen[t]) {
                let e = pe.Layer.numChildren;
                e > 0 && e--, pe.Layer.addChildAt(i, e), pe.bannerOpen[t] = 1
            }
            i.Open(), null !== e && i.initData && i.initData(e)
        }
        static ScreenFull(t) {
            t.x = -1, t.y = -1, t.width = Laya.stage.width + 2, t.height = Laya.stage.height + 2
        }
        static Close(t) {
            let e = pe.bannerCache[t];
            e && (e.Close(), e.removeSelf(), delete pe.bannerOpen[t], e.destroy(), delete pe.bannerCache[t])
        }
        static IsOpen(t) {
            return pe.bannerOpen && 1 === pe.bannerOpen[t]
        }
        static get HadOpen() {
            return Qi.DictLen(pe.bannerOpen) > 0
        }
        static BtnTalkInfo(t, e) {
            let i = pe.bannerCache[t];
            if (!i) return null;
            let s = i[e];
            if (!s && !(s = i.getChildByName(e))) return null;
            let n = Qi.GlobalPoint(i[e], null, null);
            return [Math.round(n.x), Math.round(n.y), Math.round(i[e].width), Math.round(i[e].height), null]
        }
        static BtnTalkTap(t, e) {
            let i = pe.bannerCache[t];
            return i && i[e] ? (i[e].event(Laya.Event.MOUSE_DOWN), void i[e].event(Laya.Event.MOUSE_UP)) : null
        }
        static BannerMask(t, e = null) {
            let i = new Laya.Image("images/grid/maskGray.png");
            return i.sizeGrid = "3,3,3,3", i.left = -2, i.top = -2, i.right = -2, i.bottom = -2, pe.GetLayer().addChild(i), setTimeout(() => {
                e && e(), i && !i.destroyed && (i.removeSelf(), i.destroy())
            }, t), i
        }
        static AddSiteSolider(t, e) {
            let i = t.getChildAt(0);
            return i || ((i = new oe).pivot(75, 96), t.addChild(i)), i.setItem(e, "site"), i
        }
        static AddTeamSolider(t, e) {
            let i = t.getChildAt(0);
            return i || ((i = new re).pivot(85, 95), t.addChild(i)), i.setItem(e), i
        }
        static AddTalentItem(t, e) {
            let i = t.getChildAt(0);
            return i || (i = new he, t.addChild(i)), i.setItem(e), i
        }
    }
    class fe extends et.soliderOperUI {
        constructor() {
            super(), this.helpId = null, this.size(96, 105)
        }
        onEnable() {
            Laya.timer.frameLoop(2, this, this.refreshItem)
        }
        onDisable() {
            Laya.timer.clear(this, this.refreshItem)
        }
        createChildren() {
            super.createChildren(), this.on("onViewCreated", this, this.onComplete)
        }
        onComplete() {
            this.refreshItem()
        }
        setItem(t, e = null) {
            this.soliderId = t, this.helpId = e, this.refreshItem()
        }
        onTapBuild() {
            let t = Wi.GetCfg(this.soliderId),
                e = ve.GetSoliderLv(this.soliderId),
                i = t.quality,
                s = Math.floor(qi.standBoxNo / 7),
                n = 50 + 100 * (qi.standBoxNo % 7),
                a = 50 + 100 * s;
            if (qi.AddSolider(this.soliderId, e, i, n, a, this.helpId)) {
                let t = mt.PosToBoxNo(n, a);
                Xi.AppendOperation(ct.Build, t, this.soliderId, e), Li.Close(S.Build)
            }
        }
        refreshItem() {
            if (!this.btnSolider) return;
            if (!this.soliderId) return;
            Li.BtnTap(this, this.btnSolider, this.onTapBuild);
            let t = this.soliderId,
                e = Wi.GetCfg(t),
                i = e.quality;
            if (this.iconJob.skin = `images/man/icon_job_${e.job}.png`, this.imgIcon.skin = `images/man/${e.skin}.png`, X.RepairsoliderC16(this.imgIcon, 42, 39, 5, -6),
				this.btnSolider.skin = `images/man/icon_head_bg${i}.png`, this.labCost.visible = !0, this.helpId) this.iconHelp.visible = !0, 
				this.labCost.text = "Free", this.labCost.bold = !1;
            else {
                this.iconHelp.visible = !1, ve.IsNotBuild(t) && (this.iconHelp.visible = !0, this.iconHelp.pos(-12, -77), this.iconHelp.skin = "images/man/new.png");
                let e = qi.SoliderGoldNeed(t, 0);
                this.labCost.text = e + "", this.labCost.bold = !0
            }
            this.imgCold.mask || (this.maskSp = new Laya.Sprite, this.imgCold.mask = this.maskSp), this.maskSp.graphics.clear(), this.imgPause.visible = !1, this.boxCold.visible = !1, this.imgColdBg.visible = !1, this.imgCostBg.visible = !1;
            let [s, a] = qi.GetBuildCold(this.soliderId), l = 360 * (1 - s / a);
            if (s <= 0 || a <= 0 || l >= 360) this.imgCostBg.visible = !0;
            else if (this.imgColdBg.visible = !0, this.maskSp.graphics.drawPie(.5 * this.imgCold.width, .5 * this.imgCold.height, 200, 270 + l, 270, "#ffffff"), Li.IsOpen(S.Pause)) this.imgPause.visible = !0;
            else {
                let t;
                this.boxCold.visible = !0, t = Li.IsOpen(S.Pause) ? Math.floor(s / 100) / 10 + "" : Math.ceil(s / 1e3) + "", Li.fillNum(this.boxCold, "man", "icon_word", t, n.Center)
            }
        }
    }
    class ge extends et.buildViewUI {
        constructor() {
            super(), this.standNo = null, this.standX = null, this.standY = null, this.isInit = !1, this.initDev = !1
        }
        static GetSoliderItemPos(t) {
            return ge.soliderPos && ge.soliderPos[t] ? ge.soliderPos[t] : null
        }
        initData(t) {
            [this.standNo] = t, this.standX, this.standY;
            let e = Math.floor(this.standNo / 7),
                i = this.standNo % 7;
            this.standX = 50 + 100 * i, this.standY = 50 + 100 * e, this.initMenu(), this.refreshUI()
        }
        createChildren() {
            super.createChildren(), this.on("onViewCreated", this, this.onComplete)
        }
        onComplete() {
            this.initMenu(), this.refreshUI()
        }
        Open() {
            this.initMenu(), this.refreshUI(), K.On(e.ONLINE_SEC, this, this.refreshSoliderUpSale)
        }
        Close() {
            _e.guideEnemyNo = null, ge.upstarPos = null, K.Off(e.ONLINE_SEC, this, this.refreshSoliderUpSale)
        }
        initMenu() {
            this.pngBg && (this.isInit || (this.isInit = !0, ge.soliderPos = {}, ge.upstarPos = null, Li.ScreenFull(this), this.pngBg.on(Laya.Event.MOUSE_DOWN, this, this.onBtnClose), Qi.IsDev() && (Li.BtnTap(this, this.btnSolider0, this.onBtnSolider0), Li.BtnTap(this, this.btnSolider1, this.onBtnSolider1), Li.BtnTap(this, this.btnSolider2, this.onBtnSolider2), Li.BtnTap(this, this.btnSolider3, this.onBtnSolider3), Li.BtnTap(this, this.btnWin, this.onBtnDevWin), Li.BtnTap(this, this.btnBuildOpen1, this.onBtnDevBuild1), Li.BtnTap(this, this.btnBuildOpen2, this.onBtnDevBuild2), Li.BtnTap(this, this.btnBuildOpen3, this.onBtnDevBuild3), Li.BtnTap(this, this.btnBuildOpen4, this.onBtnDevBuild4), Li.BtnTap(this, this.btnBuildOpen5, this.onBtnDevBuild5), Li.BtnTap(this, this.btnRangeOpen, this.onBtnDevRange)), Li.BtnTap(this, this.btnUp, this.onBtnUp), Li.BtnTap(this, this.btnSale, this.onBtnSale)))
        }
        onBtnClose() {
            Li.Close(S.Build)
        }
        onBtnSolider0() {
            qi.DeleAllSolider(100)
        }
        onBtnSolider1() {
            Le.AddMoneyByVal(d.money, 99999999);
            let t = Math.floor(qi.standBoxNo / 7),
                e = 50 + 100 * (qi.standBoxNo % 7),
                i = 50 + 100 * t,
                s = Wi.GetDict();
            for (let t in s) {
                let n = s[t];
                0 != n.job && n.quality == ge.devSolider && qi.AddSolider(n.id, 1, n.quality, e, i, null)
            }
            Li.Close(S.Build)
        }
        onBtnSolider2() {
            let t = qi.GetSoliderList();
            for (let e in t) {
                t[e].upStar(2)
            }
            Li.Close(S.Build)
        }
        onBtnSolider3() {
            let t = qi.GetSoliderList();
            for (let e in t) {
                t[e].upStar(3)
            }
            Li.Close(S.Build)
        }
        onBtnDevWin() {
            qi.DevWin()
        }
        onBtnDevBuild(t) {
            ge.devSolider = ge.devSolider != t ? t : null, this.refreshDev()
        }
        onBtnDevBuild1() {
            this.onBtnDevBuild(1)
        }
        onBtnDevBuild2() {
            this.onBtnDevBuild(2)
        }
        onBtnDevBuild3() {
            this.onBtnDevBuild(3)
        }
        onBtnDevBuild4() {
            this.onBtnDevBuild(4)
        }
        onBtnDevBuild5() {
            this.onBtnDevBuild(5)
        }
        onBtnDevRange() {}
        onBtnUp() {
            qi.UpSoliderStar(qi.tapSoliderNo), Li.Close(S.Build)
        }
        onBtnSale() {
            qi.SaleSolider(qi.tapSoliderNo), Li.Close(S.Build)
        }
        refreshUI() {
            this.pngBg && this.isInit && (this.refreshHeroBox(), this.refreshSoliderBox(), this.refreshSoliderUpSale(), this.refreshDev())
        }
        updateSoliderItem(t, e) {
            t.setItem(t.dataSource)
        }
        refreshDev() {}
        initGuideBg() {
            if (!this.pngBg) return;
            if (!this.isInit) return;
            if (null === this.standNo) return;
            this.maskSp = new Laya.Sprite, this.maskSp.blendMode = "destination-out", this.pngBg.addChild(this.maskSp);
            this.maskSp.graphics.clear(), this.maskSp.graphics.drawRect(mt.topX + this.standX - 49, mt.topY + this.standY - 49, 98, 98, "#ffffff")
        }
        refreshHeroBox() {}
        refreshSoliderBox() {
            if (!this.buildBox) return;
            if (!this.isInit) return;
            if (this.buildBox.visible = !1, null !== qi.tapSoliderNo) {
                if (this.standNo % 7 == 6 ? this.bgGain.pos(-41, -86) : this.bgGain.pos(24, -80), qi.GetSolider(qi.tapSoliderNo)) return
            }
            this.pngBg.alpha = 0, this.buildBox.visible = !0, this.buildBox.pos(mt.topX + this.standX, mt.topY + this.standY);
            let t = 0,
                e = null,
                i = null,
                s = ve.TeamInfo(qi.tdTeamNo);
            s = Qi.ArrListClone(s), qi.helpId && s.push(qi.helpId);
            let n = Qi.DictLen(s);
            for (let a in s) {
                let l = s[a],
                    o = Wi.GetCfg(l),
                    r = this.soliderBox.getChildByName(`soliderItem2_${o.id}`);
                r || ((r = new fe).name = `soliderItem2_${o.id}`, this.soliderBox.addChild(r));
                let h = -.5 * n * 96 + 96 * t;
                r.x = h;
                let d = l === qi.helpId ? l : 0;
                r.setItem(o.id, d), (null === e || e > this.buildBox.x + h) && (e = this.buildBox.x + h), (null === i || i < this.buildBox.x + h) && (i = this.buildBox.x + h), t++
            }
            this.soliderBox.x = 50, e < 96 ? this.soliderBox.x -= 96 * Math.floor(e / 96) : i > Laya.stage.width - 96 && (this.soliderBox.x -= 96 * (Math.ceil((i - Laya.stage.width) / 96) + 1)), this.buildBox.y < 300 ? this.soliderBox.y = 210 : this.soliderBox.y = -21;
            let a = this.soliderBox._children;
            for (let t in a) {
                let e = a[t],
                    i = e.name.replace("soliderItem2_", ""),
                    n = parseInt(i); - 1 != s.indexOf(n) ? ge.soliderPos[n] = Qi.GlobalPoint(e, 0, -95) : (delete ge.soliderPos[n], e.removeSelf(), e.destroy())
            }
        }
        refreshSoliderUpSale() {
            if (!this.pngBg) return;
            if (!this.starBox) return;
            if (null === this.standX) return;
            if (null === this.standY) return;
            if (this.starBox.visible = !1, null === qi.tapSoliderNo) return;
            this.pngBg.alpha = .15;
            let t = qi.GetSolider(qi.tapSoliderNo);
            if (!t) return;
            let e = Wi.GetCfg(t.cfgId);
            this.starBox.visible = !0, this.starBox.pos(mt.topX + this.standX, mt.topY + this.standY);
            let i = ve.GetSoliderLv(qi.tapSoliderNo),
                s = qi.GetSoliderStar(qi.tapSoliderNo);
            this.imgRange.height = this.imgRange.width = 2 * Wi.shootVal(t.cfgId, i, s);
            let n = qi.SoliderGoldSale(t.cfgId, s) + "";
            if (this.labSale.text = n + "", 2 == s && 0 == e.buyGold[s] && (s = 3), this.btnUp.skin = `images/main/icon_sb_sj${s}.png`, this.bgCost.skin = "images/main/icon_sb_zjjgbg.png", this.labCost.color = "#ad5510", this.bgCost.visible = !0, s <= 2) {
                let e = qi.SoliderGoldNeed(t.cfgId, s);
                this.labCost.text = e + "", Le.HasMoneyByVal(d.money, e) || (this.btnUp.skin = `images/main/icon_sb_sj_${s}.png`)
            } else 3 == s && (this.bgCost.visible = !1);
            if (this.bgGain.visible = !1, 7 == e.job) {
                let t = Jt.delayMoneySum[qi.tapSoliderNo] ? Jt.delayMoneySum[qi.tapSoliderNo] : 0;
                t > 0 && (this.bgGain.visible = !0, this.labGain.text = `${t}`)
            }
            null === ge.upstarPos && (ge.upstarPos = Qi.GlobalPoint(this.starBox, 0, -135))
        }
    }
    ge.soliderPos = null, ge.upstarPos = null, ge.devSolider = null, ge.devRange = 0;
    class me extends Laya.Image {
        constructor() {
            super(), this.no = null, this.upY = 0
        }
        static InitFight() {
            me.maxHits = 0, me.missHits = 0, me.sunHits = 0
        }
        static ApplyNo() {
            return me.sunNo++
        }
        static TryTap(t, e) {
            for (let i in me.sunDict) {
                let s = me.sunDict[i];
                if (Qi.dist(t, e, s.x, s.y) < 50) return me.sunHits++, me.hits++, me.hits > me.maxHits && (me.maxHits = me.hits), Xi.AppendOperation(ct.Sun, me.sunHits, me.maxHits, me.missHits), Pi.FlyHitsPng(me.hits, s.x, s.y, "icon_word"), s.pickMoney()
            }
        }
        static ClearAll() {
            for (let t in me.sunDict) {
                let e = me.sunDict[t];
                !e || e.destroyed || e._isClear || e.clear(0)
            }
        }
        Init(t, e, i, s, n) {
            this.no = t, this._skinStr = n, me.sunDict[this.no] = this, this._isClear = !1, this.upY = 0, this.money = s, this.pos(e, i), this.initView()
        }
        initView() {
            this.destroyed || this._isClear || ("sun" == this._skinStr ? Z.Play(L.sun) : this._skinStr, this.skin = `images/obj/${this._skinStr}.png`, X.InitPivot(this, "obj", this._skinStr), this.alpha = .6, Laya.Tween.to(this, {
                alpha: 1
            }, 450), _e.InFightGuide(2) ? (Laya.Tween.to(this, {
                y: this.y - 80
            }, 4400, Laya.Ease.backOut), Hi.SmallBigLoop(this, 4400, .92, 1.08, 1, 360, function () {
                Hi.SmallBigLoop(this, 44e4, 1, 1, 1, 36e3)
            }.bind(this))) : xe.BufferSec(o.Init) && xe.BufferSec(o.Drop) ? (Hi.SmallBigLoop(this, 700, .92, 1.08, 1, 200), Laya.Tween.to(this, {
                y: this.y - 54
            }, 800, Laya.Ease.backOut, Laya.Handler.create(this, function () {
                this.pickMoney()
            }.bind(this)))) : (Laya.Tween.to(this, {
                y: this.y - 80
            }, 4400, Laya.Ease.backOut), Hi.SmallBigLoop(this, 4400, .92, 1.08, 1, 360, function () {
                this.clear(400)
            }.bind(this))))
        }
        pickMoney() {
            if (this._isClear) return !1;
            let t, e = this.x + mt.topX,
                i = this.y + mt.topY;
            return Le.AddMoneyByVal(d.money, this.money), "sun" == this._skinStr ? t = 4 : "moon" == this._skinStr && (t = 3), Pi.FlyDrop([
                [d._money, this.money]
            ], e, i, null, null, null, t), Pi.AddEffect(qi.GetLayer(ut.Delay), "effectDelay", "delayMoney", null, null, this.x, this.y), Z.Play(L.gold), this.clear(0), !0
        }
        clear(t = 400) {
            this._isClear && (me.hits = 0, me.missHits++, Xi.AppendOperation(ct.Sun, me.sunHits, me.maxHits, me.missHits)), this._isClear = !0, !t || t <= 0 ? (this.removeSelf(), this.alpha = 1, this.scale(1, 1), delete me.sunDict[this.no], Laya.Tween.clearTween(this), Laya.Pool.recover("Sun", this)) : Laya.Tween.to(this, {
                alpha: .4
            }, t, null, Laya.Handler.create(this, function () {
                this.clear(0)
            }.bind(this)))
        }
    }
    me.sunNo = 0, me.sunDict = {}, me.hits = 0;
    class ye {
        static GetPassDrop(t) {
            if (ye._save || (ye._save = {}), !ye._save[t]) {
                ye._save[t] = {};
                let e = Ie.GetDict();
                for (let i in e) {
                    let s = e[i],
                        n = s.dropData[t];
                    if (n) {
                        let e = s.id;
                        switch (e) {
                            case 1004:
                                break;
                            case 1001:
                                ye._save[t][d.diamond] = n;
                                break;
                            case 1002:
                                ye._save[t][d.gold] = n;
                                break;
                            case 1003:
                                ye._save[t][d.talent] = n;
                                break;
                            case 520:
                            case 521:
                            case 522:
                            case 523:
                                ye._save[t][e] = n;
                                break;
                            default:
                                ye._save[t][-e] = n
                        }
                    }
                }
            }
            return ye._save[t]
        }
        static IsPassDropSolider(t) {
            if (!ye._passDropSolider) {
                ye._passDropSolider = {};
                let t = Ie.GetDict();
                for (let e in t) {
                    let i = t[e];
                    for (let t in i.dropData) {
                        let e = parseInt(t),
                            s = i.dropData[e];
                        if (s) {
                            if (1004 == i.id) {
                                let t = s;
                                ye._passDropSolider[e] = t
                            }
                        }
                    }
                }
            }
            let e = ye._passDropSolider[t];
            if (e) {
                if (ve.GetSoliderLv(e)) e = 0;
                else {
                    Yi.Avatar.soliderDict[e] && (e = 0)
                }
            }
            return e
        }
    }
    class Ie extends R {
        constructor(t) {
            super(t), this.dropData = {};
            for (let e = 1; e <= 275; e++) t[`l${e}`] && (this.dropData[e] = t[`l${e}`])
        }
        static Init() {
            if (!Ie._saves) {
                Ie._saves = {};
                let t = zi.GetJson(Ie.jsName);
                for (let e in t) {
                    let t = R.GetJson(Ie, parseInt(e));
                    Ie._saves[t.id] = t
                }
            }
        }
        static GetDict() {
            return Ie.Init(), Ie._saves
        }
        static GetCfg(t) {
            return Ie.Init(), Ie._saves[t]
        }
    }
    Ie.jsName = "passDrop";
    class be extends et.chapterBoxUI {
        constructor() {
            super(), this.size(77, 116)
        }
        createChildren() {
            super.createChildren(), this.on("onViewCreated", this, this.onComplete)
        }
        onDestroy() {
            Laya.timer.clear(this, this.run)
        }
        onDisable() {
            Laya.timer.clear(this, this.run)
        }
        onComplete() {
            this.refreshItem()
        }
        setItemData(t) {
            this.data = t, this.refreshItem()
        }
        onTapBox() {
            Ft.GainPassGift(this.data.chapterId, this.data.giftNo)
        }
        run() {
            if (!this.iconBox) return;
            0 === Ft.GetBaseGiftSt(this.data.chapterId, this.data.giftNo) && Hi.BtnShake(this.iconBox)
        }
        refreshItem() {
            if (!this.iconBox) return;
            if (!this.data) return;
            Laya.timer.clear(this, this.run), Laya.timer.loop(1800 + 470 * this.data.giftNo, this, this.run), Li.BtnTap(this, this.tapBox, this.onTapBox);
            let t = Tt.GetCfg(this.data.chapterId),
                e = t.giftSet[this.data.giftNo].itemId,
                i = (t.giftSet[this.data.giftNo].itemNum, t.starNum[this.data.giftNo]);
            if (Qi.IsDev()) {
                let t = Qi.GetUrlVal("starStep", "");
                if (t) {
                    let e = t.split(",");
                    i = parseInt(e[this.data.giftNo])
                }
            }
            let s = i + "",
                a = Ft.GetBaseGiftSt(this.data.chapterId, this.data.giftNo);
            if (this.iconOpen.visible = 1 == a, this.iconSolider.visible = !1, this.iconRed.visible = !1, e < 0) {
                let t = Math.abs(e),
                    i = Wi.GetCfg(t);
                this.iconSolider.visible = !0, this.iconSolider.skin = `images/man/${i.skin}.png`, this.iconBox.y = 35, 0 == a ? (this.iconRed.visible = !0, this.iconBox.skin = "images/chapterMap/icon_jl_bx2_2.png") : this.iconBox.skin = "images/chapterMap/icon_jl_bx2_1.png"
            } else this.iconBox.y = 39, 0 == a ? (this.iconRed.visible = !0, this.iconBox.skin = "images/chapterMap/icon_jl_bx1_2.png") : this.iconBox.skin = "images/chapterMap/icon_jl_bx1_1.png";
            Li.fillNum(this.boxNum, "chapterMap", "icon_word", s, n.Left)
        }
    }
    class Se extends et.chapterDotUI {
        constructor() {
            super(), this.isLock = !0
        }
        createChildren() {
            super.createChildren(), this.on("onViewCreated", this, this.onComplete)
        }
        onDestroy() {
            Laya.timer.clear(this, this.run)
        }
        onDisable() {
            Laya.timer.clear(this, this.run)
        }
        onComplete() {
            this.refreshItem()
        }
        setItem(t) {
            this.passId = t, this.refreshItem()
        }
        refreshItem() {
            if (!this.boxLv) return;
            if (!this.passId) return;
            this.lightKnife.visible = !1, Laya.timer.clear(this, this.run), Laya.timer.loop(1200, this, this.run), Li.BtnTap(this, this.iconTap, this.onTap), this.boxStar1.visible = !1, this.boxStar2.visible = !1, this.boxStar3.visible = !1, this.boxKnife.visible = !1, this.iconTap.gray = !1, this.isLock = !1, this.boxLv.y = 30;
            let t = q.GetCfg(this.passId),
                e = qi.GetStar(t.passType, t.lvChapter, t.lvPass);
            Li.fillNum(this.boxLv, "chapterMap", "icon_word", t.id + "", n.Center), e && (this.boxLv.y = 18, this[`boxStar${e}`].visible = !0);
            let i = qi.CurrentChapter(D.Pass);
            if (i < t.lvChapter) e && (this[`boxStar${e}`].visible = !0), this.iconTap.skin = "images/chapterMap/icon_gq_bg1.png";
            else if (i == t.lvChapter) {
                let e = qi.CurrentPass(D.Pass);
                e > t.lvPass ? this.iconTap.skin = "images/chapterMap/icon_gq_bg1.png" : e == t.lvPass ? (this.boxKnife.visible = !0, this.iconTap.skin = "images/chapterMap/icon_gq_bg3.png") : (this.iconTap.gray = !0, this.isLock = !0, this.iconTap.skin = "images/chapterMap/icon_gq_bg1.png")
            }!!t.bossId && (this.iconTap.skin = "images/chapterMap/icon_gq_bg2.png")
        }
        onTap() {
            if (this.isLock) {
                if (Pi.FlyTxt("Please take risks in order"), Qi.IsDev()) {
                    Yi.Avatar.passLv = this.passId
                }
                return
            }
            let t = q.GetCfg(this.passId);
            Li.Open(S.Order, [t.passType, t.lvChapter, t.lvPass])
        }
        run() {
            this.boxKnife.visible && (this.lightKnife.visible = !1, Hi.BtnShake(this.leftKinfe), Hi.BtnShake(this.rightKnife, function () {
                this.destroyed || (this.lightKnife.visible = !0, Hi.SmallBigLoop(this.lightKnife, 260, .25, 1.1, 1, null, function () {
                    this.destroyed || Hi.FlashEffect(this.lightKnife, 100, 80, function () {
                        this.destroyed || (this.lightKnife.visible = !1)
                    }.bind(this))
                }.bind(this)))
            }.bind(this)))
        }
    }
    class Te extends et.chapterMapUI {//todo:关卡选择界面
        constructor() {
            super(), this.chapterId = null, this.isInit = !1
        }
        initData(t) {
            this.chapterId = t, Te.chapterId = this.chapterId, this.initMenu(), this.refreshUI()
        }
        createChildren() {
            super.createChildren(), this.on("onViewCreated", this, this.onComplete)
        }
        onComplete() {
            this.initMenu(), this.refreshUI()
        }
        initMenu() {
            this.pngBg && (this.isInit || (this.isInit = !0, Li.ScreenFull(this), Qi.IsAdvScreen() && (this.centerBox.y += 100), Li.BtnTap(this, this.btnClose, this.onBtnClose), this.pngBg.on(Laya.Event.MOUSE_DOWN, this, this.onHideTips)))
        }
        onGuidePass1() {
            let t = q.GetCfg(1);
            Li.Open(S.Order, [t.passType, t.lvChapter, t.lvPass])
        }
        onGuidePass2() {
            let t = q.GetCfg(2);
            Li.Open(S.Order, [t.passType, t.lvChapter, t.lvPass])
        }
        onGuidePass3() {
            let t = q.GetCfg(3);
            Li.Open(S.Order, [t.passType, t.lvChapter, t.lvPass])
        }
        Open() {
			Plat.I.ShowInter();
            K.On(e.SHOW_GIFT_TIPS, this, this.onShowTips), K.On(e.GIFT_ITEM_REFRESH, this, this.refreshUI), this.initMenu(), this.refreshUI()
        }
        Close() {
            K.Off(e.SHOW_GIFT_TIPS, this, this.onShowTips), K.Off(e.GIFT_ITEM_REFRESH, this, this.refreshUI)
        }
        onShowTips(t, e) {
            if (!this.boxTips.visible) {
                let i = Tt.GetCfg(t),
                    s = i.giftSet[e].itemId,
                    n = i.giftSet[e].itemNum;
                if (this.iconMoney.visible = !1, this.iconSolider.visible = !1, this.labSoliderNum.visible = !1, this.labMoneyNum.visible = !1, s < 0) {
                    let t = Math.abs(s),
                        e = Wi.GetCfg(t);
                    this.iconSolider.skin = `images/man/${e.skin}.png`, this.iconSolider.visible = !0, this.labSoliderNum.visible = !0, this.labMoneyNum.text = `x${n}`
                } else if (s == d.gold) {
                    this.iconMoney.skin = "images/chapterMap/icon_zy_jb.png", this.iconMoney.visible = !0, this.labMoneyNum.visible = !0;
                    let e = q.GetPassCfg(D.Pass, t, 1),
                        i = ye.GetPassDrop(e.id);
                    n *= .01, n *= i[d.gold], n = Math.floor(n), this.labMoneyNum.text = `x${n}`
                } else s == d.diamond ? (this.iconMoney.skin = "images/chapterMap/icon_zy_zs.png", this.iconMoney.visible = !0, this.labMoneyNum.visible = !0, this.labMoneyNum.text = `x${n}`) : s == d.talent && (this.iconMoney.skin = "images/chapterMap/icon_zy_xx.png", this.iconMoney.visible = !0, this.labMoneyNum.visible = !0, this.labMoneyNum.text = `x${n}`);
                this.boxTips.visible = !0, this.boxTips.x = this[`itemBox${e+1}`].x - 56
            }
        }
        onHideTips() {
            this.boxTips.visible = !1
        }
        onBtnClose() {
			platform.getInstance().hideBanner()
			Li.Close(S.ChapterMap)
        }
        refreshUI() {
            if (!this.pngBg) return;
            if (!this.chapterId) return;
            1 == this.chapterId && Li.BtnTap(this, this.passBg3, this.onGuidePass3);
            let t = Tt.GetCfg(this.chapterId);
            this.labChapterTitle.text = `Chapter ${t.chapter}${t.name}`, this.imgIcon.skin = `images/chapterMap/icon_gqtb${t.icon}.png`, this.mapBox.visible = !1;
            for (let t = 1; t <= 19; t++) this[`line${t}`].visible = !1;
            for (let t = 1; t <= 20; t++) this[`box${t}`].visible = !1;
            let e = q.GetPassList(D.Pass, this.chapterId),
                i = qi.ChapterStar(D.Pass, this.chapterId),
                s = 3 * e.length;
            for (let t in e) {
                let i = parseInt(t);
                this[`line${i}`] && (this[`line${i}`].visible = !0);
                let s = e[t];
                Te.AddChapterDot(this[`box${i+1}`], s.id), this[`box${i+1}`].visible = !0
            }
            this.itemBox1.visible = !1, this.itemBox2.visible = !1, this.itemBox3.visible = !1;
            let a = Qi.ArrListClone(t.starNum);
            if (Qi.IsDev()) {
                let t = Qi.GetUrlVal("starSum", "");
                t && (i = parseInt(t));
                let e = Qi.GetUrlVal("starStep", "");
                if (e) {
                    let t = e.split(",");
                    for (let e in t) a[e] && (a[e] = parseInt(t[e]))
                }
            }
            Li.fillNum(this.boxVal, "chapterMap", "icon_word", "0", n.Left);
            for (let t in a) {
                let e = parseInt(t);
                this[`itemBox${e+1}`].visible = !0;
                let i = new be;
                i.anchorX = .5, i.anchorY = .5, i.setItemData({
                    chapterId: this.chapterId,
                    giftNo: e
                }), this[`itemBox${e+1}`].removeChildren(), this[`itemBox${e+1}`].addChild(i)
            }
            if (this.itemBox3.visible) {
                let t = [.61, .795, .966];
                if (this.itemBox1.x = Math.floor(this.imgStarBg.width * t[0]), this.itemBox2.x = Math.floor(this.imgStarBg.width * t[1]), a[2] < s ? this.itemBox3.x = Math.floor(this.imgStarBg.width * t[2]) : this.itemBox3.x = this.imgStarBg.width, i <= a[0]) this.imgStarVal.width = this.imgStarBg.width * t[0] * i / a[0];
                else if (i <= a[1]) {
                    let e = this.imgStarBg.width * t[0],
                        s = this.imgStarBg.width * (i - a[0]) / (a[1] - a[0]) * (t[1] - t[0]);
                    this.imgStarVal.width = e + s
                } else if (a[2] < s)
                    if (i <= a[2]) {
                        let e = this.imgStarBg.width * t[1],
                            s = this.imgStarBg.width * (i - a[1]) / (a[2] - a[1]) * (t[2] - t[1]);
                        this.imgStarVal.width = e + s
                    } else {
                        let e = this.imgStarBg.width * t[2],
                            n = this.imgStarBg.width * (i - a[2]) / (s - a[2]) * (1 - t[2]);
                        this.imgStarVal.width = e + n
                    }
                else if (a[2] == s) {
                    let e = this.imgStarBg.width * t[1],
                        n = this.imgStarBg.width * (i - a[1]) / (s - a[1]) * (1 - t[1]);
                    this.imgStarVal.width = e + n
                }
            } else if (this.itemBox2.visible) {
                let t = [.7, .93];
                if (this.itemBox1.x = Math.floor(this.imgStarBg.width * t[0]), a[1] < s ? this.itemBox2.x = Math.floor(this.imgStarBg.width * t[1]) : this.itemBox2.x = this.imgStarBg.width, i <= a[0]) this.imgStarVal.width = this.imgStarBg.width * t[0] * i / a[0];
                else if (a[1] < s)
                    if (i <= a[1]) {
                        let e = this.imgStarBg.width * t[0],
                            s = this.imgStarBg.width * (i - a[0]) / (a[1] - a[0]) * (t[1] - t[0]);
                        this.imgStarVal.width = e + s
                    } else {
                        let e = this.imgStarBg.width * t[1],
                            n = this.imgStarBg.width * (i - a[1]) / (s - a[1]) * (1 - t[1]);
                        this.imgStarVal.width = e + n
                    }
                else if (a[1] == s) {
                    let e = this.imgStarBg.width * t[0],
                        n = this.imgStarBg.width * (i - a[0]) / (s - a[0]) * (1 - t[0]);
                    this.imgStarVal.width = e + n
                }
            } else this.itemBox1.x = this.imgStarBg.width * a[0] / s, this.imgStarVal.width = this.imgStarBg.width * i / s;
            this.guideBox.pos(this.itemBox1.x - 36 + 40, this.itemBox1.y - 65 + 40)
        }
        static AddChapterDot(t, e) {
            let i = t.getChildAt(0);
            return i || ((i = new Se).pivot(54, 48), t.addChild(i)), i.setItem(e), i
        }
    }
    Te.chapterId = null,
        function (t) {
            t[t.TAP_MAP_TO_BUILD__1 = -1] = "TAP_MAP_TO_BUILD__1", t[t.TAP_MAP_TO_UPSTAR__2 = -2] = "TAP_MAP_TO_UPSTAR__2", t[t.TAP_BUILD_TO_BUILD__3 = -3] = "TAP_BUILD_TO_BUILD__3", t[t.TAP_BUILD_TO_UPSTAR__4 = -4] = "TAP_BUILD_TO_UPSTAR__4", t[t.PAUSE_BUTTON__5 = -5] = "PAUSE_BUTTON__5", t[t.HIT_THE_STONE__6 = -6] = "HIT_THE_STONE__6", t[t.PICK_THE_SUN__7 = -7] = "PICK_THE_SUN__7", t[t.FIGHT_GUIDE_FINISH__8 = -8] = "FIGHT_GUIDE_FINISH__8", t[t.KILL_ONE_THROW__9 = -9] = "KILL_ONE_THROW__9", t[t.SIGN_OPEN_1 = 1] = "SIGN_OPEN_1", t[t.SIGN_BUTTON_2 = 2] = "SIGN_BUTTON_2", t[t.ENTER_CHAPTER_3 = 3] = "ENTER_CHAPTER_3", t[t.ENTER_PASS1_4 = 4] = "ENTER_PASS1_4", t[t.FIGHT_PASS1_5 = 5] = "FIGHT_PASS1_5", t[t.ENTER_PASS2_6 = 6] = "ENTER_PASS2_6", t[t.ACTIVE_GUIDE_CLOSE_7 = 7] = "ACTIVE_GUIDE_CLOSE_7", t[t.ACTIVE_GUIDE_PIC_8 = 8] = "ACTIVE_GUIDE_PIC_8", t[t.ACTIVE_GUIDE_SOLIDER_9 = 9] = "ACTIVE_GUIDE_SOLIDER_9", t[t.JOIN_TEAM_BTN_10 = 10] = "JOIN_TEAM_BTN_10", t[t.JOIN_TEAM_DRAG_11 = 11] = "JOIN_TEAM_DRAG_11", t[t.JOIN_TEAM_FIGHT_12 = 12] = "JOIN_TEAM_FIGHT_12", t[t.JOIN_TEAM_CHAPTER_13 = 13] = "JOIN_TEAM_CHAPTER_13", t[t.UPLV_SOLIDER_CLOSE_14 = 14] = "UPLV_SOLIDER_CLOSE_14", t[t.UPLV_SOLIDER_BTN_15 = 15] = "UPLV_SOLIDER_BTN_15", t[t.UPLV_SOLIDER_LOOK_16 = 16] = "UPLV_SOLIDER_LOOK_16", t[t.UPLV_SOLIDER_DO_17 = 17] = "UPLV_SOLIDER_DO_17", t[t.CHAPTER_SOLIDER_GIFT_18 = 18] = "CHAPTER_SOLIDER_GIFT_18", t[t.JOIN_TEAM_CLOSE_19 = 19] = "JOIN_TEAM_CLOSE_19", t[t.JOIN_TEAM_BTN_20 = 20] = "JOIN_TEAM_BTN_20", t[t.JOIN_TEAM_DRAG_21 = 21] = "JOIN_TEAM_DRAG_21", t[t.ENTER_TALENT_BTN_22 = 22] = "ENTER_TALENT_BTN_22", t[t.TALENT_ICON_TAP_23 = 23] = "TALENT_ICON_TAP_23", t[t.TALENT_UPLV_BTN_24 = 24] = "TALENT_UPLV_BTN_24", t[t.ENTER_SHOP_BTN_25 = 25] = "ENTER_SHOP_BTN_25", t[t.SHOP_GET_GOLD_26 = 26] = "SHOP_GET_GOLD_26", t[t.ENTER_CHAPTER_27 = 27] = "ENTER_CHAPTER_27"
        }(ot || (ot = {}));
    class _e {
        static get currentGuideId() {
            return _e.isGuide(_e._currentGuideId) ? null : _e._currentGuideId
        }
        static set currentGuideId(t) {
            _e._currentGuideId = t
        }
        static Init() {
            _e.reGuide(), K.On(e.GUIDE_ENEMY_BRON, _e, _e.OnEnemyBron), K.On(e.GUIDE_ENEMY_DIE, _e, _e.OnEnemyDie)
        }
        static reGuide() {
            let t = {
                    "-5": [-4, -3],
                    "-4": [-3],
                    2: [1],
                    6: [5, 4, 3],
                    5: [4, 3],
                    4: [3],
                    9: [8, 7],
                    8: [7],
                    13: [12, 11, 10],
                    12: [11, 10],
                    11: [10],
                    17: [16, 15, 14],
                    16: [15, 14],
                    15: [14],
                    21: [20, 19, 18],
                    20: [19, 18],
                    19: [18]
                },
                e = Yi.Avatar;
            for (let i in t) {
                let s = parseInt(i);
                if (!_e.isGuide(s))
                    for (let s in t[i]) {
                        let n = t[i][s];
                        delete e.guideD[n]
                    }
            }
        }
        static guideOpen(t, e) {
            if (t < 0 && !_e.InFightGuide()) return;
            let i, s, n = null,
                a = null,
                l = null,
                o = null;
            switch (_e.gameGuideBook[qi.lvPass] && _e.gameGuideBook[qi.lvPass][_e.guideEnemyNo] && ([i, s, n, a, l, o] = _e.gameGuideBook[qi.lvPass][_e.guideEnemyNo]), t) {
                case ot.TAP_MAP_TO_BUILD__1:
                case ot.TAP_MAP_TO_UPSTAR__2:
                    e.push(n), e.push(a);
                    break;
                case ot.TAP_BUILD_TO_BUILD__3:
                case ot.TAP_BUILD_TO_UPSTAR__4:
                    e.push(l), e.push(o);
                    break;
                case ot.KILL_ONE_THROW__9:
                    Li.Close(S.Build);
                default:
                    e && (e.push(null), e.push(null))
            }
            _e.currentGuideId = t, Li.Open(S.Guide, [t, e])
        }
        static InFightGuide(t = null) {
            if (null !== t) {
                if (t != qi.lvPass) return !1
            } else t = qi.lvPass;
            if (qi.passType == D.Pass) {
                if (1 == qi.lvChapter && 1 == t) return !_e.fightGuided[ot.FIGHT_GUIDE_FINISH__8];
                if (1 == qi.lvChapter && 2 == t) return !_e.fightGuided[ot.FIGHT_GUIDE_FINISH__8];
                if (1 == qi.lvChapter && 3 == t) {
                    return !(Qt.GetKillWait(lt.One) > 0) && !(Qt.GetKillNum(lt.One) < 1)
                }
            }
            return !1
        }
        static InitFightGuide() {
            _e.fightGuided = {}, _e.guideT = 0, _e.bronNo = 0, _e.dieNo = 0,
				_e.guideEnemyNo = null, _e.guideMapBox = null, _e.guideSoliderId = null
        }
        static OnEnemyBron(t, e = null) {
            if (null === e && (e = ++_e.bronNo), !_e.gameGuideBook[t]) return;
            if (!_e.gameGuideBook[t][e]) return;
            let [i, s] = _e.gameGuideBook[t][e];
            if (i < 0) return;
            if (s == ot.KILL_ONE_THROW__9) {
                if (Qt.GetKillWait(lt.One) > 0) return;
                if (Qt.GetKillNum(lt.One) < 1) return;
                if (Qt.GetKillThrow(lt.One) > 0) return;
                _e.guideEnemyNo = e;
                let t = St.GetTalk(ot.KILL_ONE_THROW__9),
                    i = (t.uiType, t.uiName, t.uiNameNo),
                    s = t.btnName,
                    n = pe.BtnTalkInfo(i, s);
                return void _e.guideOpen(ot.KILL_ONE_THROW__9, n)
            }
            if (!ve.SoliderInTeam(qi.tdTeamNo, s)) return;
            _e.guideEnemyNo = e, _e.guideMapBox = i, _e.guideSoliderId = s, qi.tapSoliderNo = null;
            let n = qi.GetSoliderList();
            for (let t in n) {
                let e = n[parseInt(t)];
                if (i == mt.PosToBoxNo(e.x, e.y)) {
                    qi.tapSoliderNo = e.no;
                    break
                }
            }
            let a = mt.GetBoxPos(i);
            qi.tapSoliderNo ? _e.guideOpen(ot.TAP_MAP_TO_UPSTAR__2, [mt.topX + a.x, mt.topY + a.y, 100, 100, null]) : 0 != e && (Li.Open(S.Pause), _e.guideOpen(ot.TAP_MAP_TO_BUILD__1, [mt.topX + a.x, mt.topY + a.y, 100, 100, null]))
        }
        static OnEnemyDie(t) {
            let e = ++_e.dieNo;
            if (!_e.gameGuideBook[t]) return;
            if (!_e.gameGuideBook[t][e]) return;
            let [i, s] = _e.gameGuideBook[t][e];
            if (i >= 0) return;
            if (s == ot.FIGHT_GUIDE_FINISH__8) return void _e.guideOpen(ot.FIGHT_GUIDE_FINISH__8, null);
            i = Math.abs(i), _e.guideEnemyNo = e, _e.guideMapBox = i, _e.guideSoliderId = s;
            let n = mt.GetBoxPos(i);
            if (0 == s) console.error("OnEnemyBron.error");
            else {
                if (s == ot.HIT_THE_STONE__6) return void _e.guideOpen(ot.HIT_THE_STONE__6, [mt.topX + n.x, mt.topY + n.y, 100, 100, null]);
                if (s == ot.PICK_THE_SUN__7) return void _e.guideOpen(ot.PICK_THE_SUN__7, [mt.topX + n.x, mt.topY + n.y + 15, 100, 100, null]);
                if (s > 0 && !ve.SoliderInTeam(qi.tdTeamNo, s)) return
            }
            qi.tapSoliderNo = null;
            let a = qi.GetSoliderList();
            for (let t in a) {
                let e = a[parseInt(t)];
                if (i == mt.PosToBoxNo(e.x, e.y)) {
                    qi.tapSoliderNo = e.no;
                    break
                }
            }
            qi.tapSoliderNo ? _e.guideOpen(ot.TAP_MAP_TO_UPSTAR__2, [mt.topX + n.x, mt.topY + n.y, 100, 100, null]) : (Li.Open(S.Pause), _e.guideOpen(ot.TAP_MAP_TO_BUILD__1, [mt.topX + n.x, mt.topY + n.y, 100, 100, null]))
        }
        static Update(t) {
            _e._t += t, Li.HadOpen ? (Li.IsOpen(S.Sign) || Li.IsOpen(S.Lucky) || Li.IsOpen(S.Build) || Li.IsOpen(S.ChapterMap) || Li.IsOpen(S.Order) || Li.IsOpen(S.SoliderInfo)) && _e.guideT < 1e3 && (_e.guideT += t) : _e.guideT += t, _e._t < 350 || (_e._t = 0, _e.GuideCall())
        }
        static isGuide(t) {
            return !!Yi.Avatar.guideD[t]
        }
        static CanGuide(t) {
            switch (t) {
                case ot.TAP_BUILD_TO_BUILD__3:
                    if (qi.passType != D.Pass) return !1;
                    if (1 != qi.lvChapter) return !1;
                    if (_e.isGuide(ot.PAUSE_BUTTON__5)) return _e.GuideDo(ot.TAP_BUILD_TO_UPSTAR__4, !1), _e.GuideDo(ot.TAP_BUILD_TO_BUILD__3, !1), !1;
                    if (_e.isGuide(ot.TAP_BUILD_TO_UPSTAR__4)) return _e.GuideDo(ot.TAP_BUILD_TO_BUILD__3, !1), !1;
                    break;
                case ot.TAP_BUILD_TO_UPSTAR__4:
                    if (qi.passType != D.Pass) return !1;
                    if (1 != qi.lvChapter) return !1;
                    if (!Li.IsOpen(S.Build)) return !1;
                    if (_e.isGuide(ot.PAUSE_BUTTON__5)) return _e.GuideDo(ot.TAP_BUILD_TO_UPSTAR__4, !1), !1;
                    break;
                case ot.PAUSE_BUTTON__5:
                    if (Li.HadOpen) return !1;
                    if (Yi.St != s.Fight) return !1;
                    if (qi.passType !== D.Pass) return !1;
                    if (1 !== qi.lvChapter) return !1;
                    if (3 != qi.lvPass) return !1;
                    if (_e.fightGuided[t]) return !1;
                    break;
                case ot.SIGN_OPEN_1:
                    if (Li.HadOpen) return !1;
                    if (_e.isGuide(t)) return !1;
                    if (!Li.IsOpen(S.Sign)) return !1;
                    if (!Lt.CanGuide(S.Sign)) return !1;
                    if (!Ut.IsWaitSign()) return !1;
                    if (!pe.IsOpen(b.Main)) return !1;
                    if (_e.isGuide(ot.SIGN_BUTTON_2)) return _e.GuideDo(ot.SIGN_OPEN_1, !1), !1;
                    break;
                case ot.SIGN_BUTTON_2:
                    if (_e.isGuide(t)) return !1;
                    if (!Li.IsOpen(S.Sign)) return !1;
                    if (!Lt.CanGuide(S.Sign)) return !1;
                    if (!Ut.IsWaitSign()) return !1;
                    break;
                case ot.ENTER_CHAPTER_3:
                    if (Li.HadOpen) return !1;
                    if (_e.isGuide(t)) return !1;
                    if (!qi.GetStar(D.Pass, 1, 2)) return !1;
                    if (qi.GetStar(D.Pass, 1, 3)) return !1;
                    if (!ve.SoliderInTeam(0, 6)) return !1;
                    break;
                case ot.ENTER_PASS1_4:
                    if (_e.isGuide(t)) return !1;
                    if (!Li.IsOpen(S.ChapterMap)) return !1;
                    if (!qi.GetStar(D.Pass, 1, 2)) return !1;
                    if (qi.GetStar(D.Pass, 1, 3)) return !1;
                    break;
                case ot.FIGHT_PASS1_5:
                    if (_e.isGuide(t)) return !1;
                    if (!Li.IsOpen(S.Order)) return !1;
                    if (qi.GetStar(D.Pass, 1, 3)) return !1;
                    if (_e.isGuide(ot.ENTER_PASS2_6)) return _e.GuideDo(ot.FIGHT_PASS1_5, !1), !1;
                    break;
                case ot.ENTER_PASS2_6:
                    if (_e.isGuide(t)) return !1;
                    if (!Li.IsOpen(S.ChapterMap)) return !1;
                    if (!qi.GetStar(D.Pass, 1, 1)) return !1;
                    if (qi.GetStar(D.Pass, 1, 2)) return !1;
                    break;
                case ot.ACTIVE_GUIDE_CLOSE_7:
                    if (_e.isGuide(t)) return !1;
                    if (!Li.IsOpen(S.ChapterMap)) return !1;
                    if (!qi.GetStar(D.Pass, 1, 2)) return !1;
                    if (qi.GetStar(D.Pass, 1, 3)) return !1;
                    if (!ve.ActSoliderRed()) return !1;
                    if (_e.isGuide(ot.ACTIVE_GUIDE_SOLIDER_9)) return _e.GuideDo(ot.ACTIVE_GUIDE_PIC_8, !1), _e.GuideDo(ot.ACTIVE_GUIDE_CLOSE_7, !1), !1;
                    if (_e.isGuide(ot.ACTIVE_GUIDE_PIC_8)) return _e.GuideDo(ot.ACTIVE_GUIDE_CLOSE_7, !1), !1;
                    break;
                case ot.ACTIVE_GUIDE_PIC_8:
                    if (_e.isGuide(t)) return !1;
                    if (Li.HadOpen) return !1;
                    if (Yi.St == s.Fight) return !1;
                    if (ve.GetSoliderNum() > 3) return !1;
                    if (!ve.ActSoliderRed()) return !1;
                    if (_e.isGuide(ot.ACTIVE_GUIDE_SOLIDER_9)) return _e.GuideDo(ot.ACTIVE_GUIDE_PIC_8, !1), !1;
                    break;
                case ot.ACTIVE_GUIDE_SOLIDER_9:
                    if (_e.isGuide(t)) return !1;
                    if (Li.HadOpen) return !1;
                    if (ve.GetSoliderNum() > 3) return !1;
                    if (!ve.ActSoliderRed()) return !1;
                    break;
                case ot.JOIN_TEAM_BTN_10:
                    if (_e.isGuide(t)) return !1;
                    if (Li.HadOpen) return !1;
                    if (!pe.IsOpen(b.Pic)) return !1;
                    if (!ve.RedNewSolider()) return !1;
                    if (!ve.GetSoliderLv(6)) return !1;
                    let e = ve.TeamInfo(0);
                    if (ve.SoliderInTeam(0, 6) || e.length >= 4) return _e.GuideDo(ot.JOIN_TEAM_BTN_10, !1), _e.GuideDo(ot.JOIN_TEAM_DRAG_11, !1), !1;
                    if (_e.isGuide(ot.JOIN_TEAM_CHAPTER_13)) return _e.GuideDo(ot.JOIN_TEAM_FIGHT_12, !1), _e.GuideDo(ot.JOIN_TEAM_DRAG_11, !1), _e.GuideDo(ot.JOIN_TEAM_BTN_10, !1), !1;
                    if (_e.isGuide(ot.JOIN_TEAM_FIGHT_12)) return _e.GuideDo(ot.JOIN_TEAM_DRAG_11, !1), _e.GuideDo(ot.JOIN_TEAM_BTN_10, !1), !1;
                    if (_e.isGuide(ot.JOIN_TEAM_DRAG_11)) return _e.GuideDo(ot.JOIN_TEAM_BTN_10, !1), !1;
                    break;
                case ot.JOIN_TEAM_DRAG_11:
                    if (_e.isGuide(t)) return !1;
                    if (Li.HadOpen) return !1;
                    if (!pe.IsOpen(b.SoliderSite)) return !1;
                    if (!ve.RedNewSolider()) return !1;
                    if (!ve.GetSoliderLv(6)) return !1;
                    if (null === ae.guideDragTo) return !1;
                    let i = ve.TeamInfo(0);
                    if (ve.SoliderInTeam(0, 6) || i.length >= 4) return _e.GuideDo(ot.JOIN_TEAM_BTN_10, !1), _e.GuideDo(ot.JOIN_TEAM_DRAG_11, !1), !1;
                    let n = ve.TeamInfo(1);
                    if (!n) return !1;
                    if (n.length > 2) return !1;
                    if (_e.isGuide(ot.JOIN_TEAM_CHAPTER_13)) return _e.GuideDo(ot.JOIN_TEAM_FIGHT_12, !1), _e.GuideDo(ot.JOIN_TEAM_DRAG_11, !1), !1;
                    if (_e.isGuide(ot.JOIN_TEAM_FIGHT_12)) return _e.GuideDo(ot.JOIN_TEAM_DRAG_11, !1), !1;
                    break;
                case ot.JOIN_TEAM_FIGHT_12:
                    if (_e.currentGuideId == ot.UPLV_SOLIDER_BTN_15 && 1 == ve.GetSoliderLv(1)) return !1;
                    if (_e.isGuide(t)) return !1;
                    if (Li.HadOpen) return !1;
                    if (!pe.IsOpen(b.SoliderSite)) return !1;
                    if (!ve.SoliderInTeam(0, 6)) return !1;
                    if (_e.isGuide(ot.JOIN_TEAM_CHAPTER_13)) return _e.GuideDo(ot.JOIN_TEAM_FIGHT_12, !1), !1;
                    if (null !== qi.GetStar(D.Pass, 1, 4)) return _e.GuideDo(ot.JOIN_TEAM_FIGHT_12, !1), !1;
                    break;
                case ot.JOIN_TEAM_CHAPTER_13:
                    if (Li.HadOpen) return !1;
                    if (_e.isGuide(t)) return !1;
                    if (!pe.IsOpen(b.Main)) return !1;
                    if (!ve.SoliderInTeam(0, 6)) return !1;
                    break;
                case ot.UPLV_SOLIDER_CLOSE_14:
                    if (_e.isGuide(t)) return !1;
                    if (!Li.IsOpen(S.ChapterMap)) return !1;
                    if (!qi.GetStar(D.Pass, 1, 3)) return !1;
                    if (qi.GetStar(D.Pass, 1, 4)) return !1;
                    if (!ve.IsUpRed(1)) return !1;
                    if (_e.isGuide(ot.UPLV_SOLIDER_DO_17)) return _e.GuideDo(ot.UPLV_SOLIDER_LOOK_16, !1), _e.GuideDo(ot.UPLV_SOLIDER_BTN_15, !1), _e.GuideDo(ot.UPLV_SOLIDER_CLOSE_14, !1), !1;
                    if (_e.isGuide(ot.UPLV_SOLIDER_LOOK_16)) return _e.GuideDo(ot.UPLV_SOLIDER_BTN_15, !1), _e.GuideDo(ot.UPLV_SOLIDER_CLOSE_14, !1), !1;
                    if (_e.isGuide(ot.UPLV_SOLIDER_BTN_15)) return _e.GuideDo(ot.UPLV_SOLIDER_CLOSE_14, !1), !1;
                    break;
                case ot.UPLV_SOLIDER_BTN_15:
                    if (_e.isGuide(t)) return !1;
                    if (Li.HadOpen) return !1;
                    if (!pe.IsOpen(b.Main)) return !1;
                    if (!qi.GetStar(D.Pass, 1, 3)) return !1;
                    if (qi.GetStar(D.Pass, 1, 4)) return !1;
                    if (!ve.IsUpRed(1)) return !1;
                    if (_e.isGuide(ot.UPLV_SOLIDER_DO_17)) return _e.GuideDo(ot.UPLV_SOLIDER_LOOK_16, !1), _e.GuideDo(ot.UPLV_SOLIDER_BTN_15, !1), !1;
                    if (_e.isGuide(ot.UPLV_SOLIDER_LOOK_16)) return _e.GuideDo(ot.UPLV_SOLIDER_BTN_15, !1), !1;
                    break;
                case ot.UPLV_SOLIDER_LOOK_16:
                    if (_e.isGuide(t)) return !1;
                    if (Li.HadOpen) return !1;
                    if (!pe.IsOpen(b.SoliderSite)) return !1;
                    if (!ve.SoliderInTeam(0, 31)) return !1;
                    if (!ve.IsUpRed(1)) return !1;
                    if (_e.isGuide(ot.UPLV_SOLIDER_DO_17)) return _e.GuideDo(ot.UPLV_SOLIDER_LOOK_16, !1), !1;
                    break;
                case ot.UPLV_SOLIDER_DO_17:
                    if (_e.isGuide(t)) return !1;
                    if (!Li.IsOpen(S.SoliderInfo)) return !1;
                    if (!qi.GetStar(D.Pass, 1, 5)) return !1;
                    if (qi.GetStar(D.Pass, 1, 6)) return !1;
                    if (1 != le.soliderId) return !1;
                    if (!ve.IsUpRed(1)) return !1;
                    if (!ve.IsUpRed(le.soliderId)) return !1;
                    break;
                case ot.CHAPTER_SOLIDER_GIFT_18:
                    if (_e.isGuide(t)) return !1;
                    if (!Li.IsOpen(S.ChapterMap)) return !1;
                    if (1 != qi.lvChapter) return !1;
                    if (0 != Ft.GetBaseGiftSt(1, 0)) return !1;
                    if (1 !== Te.chapterId) return !1;
                    if (_e.isGuide(ot.JOIN_TEAM_DRAG_21)) return _e.GuideDo(ot.JOIN_TEAM_BTN_20, !1), _e.GuideDo(ot.JOIN_TEAM_CLOSE_19, !1), _e.GuideDo(ot.CHAPTER_SOLIDER_GIFT_18, !1), !1;
                    if (_e.isGuide(ot.JOIN_TEAM_BTN_20)) return _e.GuideDo(ot.JOIN_TEAM_CLOSE_19, !1), _e.GuideDo(ot.CHAPTER_SOLIDER_GIFT_18, !1), !1;
                    if (_e.isGuide(ot.JOIN_TEAM_CLOSE_19)) return _e.GuideDo(ot.CHAPTER_SOLIDER_GIFT_18, !1), !1;
                    break;
                case ot.JOIN_TEAM_CLOSE_19:
                    if (_e.isGuide(t)) return !1;
                    if (!Li.IsOpen(S.ChapterMap)) return !1;
                    if (Li.IsOpen(S.SoliderNew)) return !1;
                    if (!qi.GetStar(D.Pass, 1, 5)) return !1;
                    if (qi.GetStar(D.Pass, 1, 6)) return !1;
                    if (!ve.RedNewSolider()) return !1;
                    if (ve.TeamInfo(0).length >= 5) return _e.GuideDo(ot.JOIN_TEAM_BTN_20, !1), _e.GuideDo(ot.JOIN_TEAM_DRAG_21, !1), !1;
                    if (_e.isGuide(ot.JOIN_TEAM_DRAG_21)) return _e.GuideDo(ot.JOIN_TEAM_BTN_20, !1), _e.GuideDo(ot.JOIN_TEAM_CLOSE_19, !1), !1;
                    if (_e.isGuide(ot.JOIN_TEAM_BTN_20)) return _e.GuideDo(ot.JOIN_TEAM_CLOSE_19, !1), !1;
                    break;
                case ot.JOIN_TEAM_BTN_20:
                    if (_e.isGuide(t)) return !1;
                    if (Li.HadOpen) return !1;
                    if (!pe.IsOpen(b.Main)) return !1;
                    if (!ve.RedNewSolider()) return !1;
                    if (!ve.GetSoliderLv(31)) return !1;
                    let a = ve.TeamInfo(0);
                    if (ve.SoliderInTeam(0, 31) || a.length >= 5) return _e.GuideDo(ot.JOIN_TEAM_BTN_20, !1), _e.GuideDo(ot.JOIN_TEAM_DRAG_21, !1), !1;
                    let l = ve.TeamInfo(1);
                    if (!l) return !1;
                    if (l.length > 4) return !1;
                    if (_e.isGuide(ot.JOIN_TEAM_DRAG_21)) return _e.GuideDo(ot.JOIN_TEAM_BTN_20, !1), !1;
                    break;
                case ot.JOIN_TEAM_DRAG_21:
                    if (_e.isGuide(t)) return !1;
                    if (Li.HadOpen) return !1;
                    if (!pe.IsOpen(b.SoliderSite)) return !1;
                    if (!ve.RedNewSolider()) return !1;
                    if (!ve.GetSoliderLv(31)) return !1;
                    if (null === ae.guideDragTo) return !1;
                    let o = ve.TeamInfo(0);
                    if (ve.SoliderInTeam(0, 31) || o.length >= 5) return _e.GuideDo(ot.JOIN_TEAM_BTN_20, !1), _e.GuideDo(ot.JOIN_TEAM_DRAG_21, !1), !1;
                    let r = ve.TeamInfo(1);
                    if (!r) return !1;
                    if (r.length > 3) return !1;
                    break;
                case ot.ENTER_TALENT_BTN_22:
                    if (!Lt.CanGuide(b.Talent)) return !1;
                    if (Li.HadOpen) return !1;
                    if (_e.isGuide(t)) return !1;
                    if (!pe.IsOpen(b.Main)) return !1;
                    break;
                case ot.TALENT_ICON_TAP_23:
                    if (!Lt.CanGuide(b.Talent)) return !1;
                    if (!_e.isGuide(ot.ENTER_TALENT_BTN_22)) return !1;
                    if (Li.HadOpen) return !1;
                    if (_e.isGuide(t)) return !1;
                    if (!pe.IsOpen(b.Talent)) return !1;
                    break;
                case ot.TALENT_UPLV_BTN_24:
                    if (!Lt.CanGuide(b.Talent)) return !1;
                    if (!_e.isGuide(ot.TALENT_ICON_TAP_23)) return !1;
                    if (Li.HadOpen) return !1;
                    if (_e.isGuide(t)) return !1;
                    if (!pe.IsOpen(b.Talent)) return !1;
                    break;
                case ot.ENTER_SHOP_BTN_25:
                    if (!Lt.CanGuide(b.Shop)) return !1;
                    if (Li.HadOpen) return !1;
                    if (_e.isGuide(t)) return !1;
                    if (!pe.IsOpen(b.Main)) return !1;
                    break;
                case ot.SHOP_GET_GOLD_26:
                    if (!Lt.CanGuide(b.Shop)) return !1;
                    if (!_e.isGuide(ot.ENTER_SHOP_BTN_25)) return !1;
                    if (Li.HadOpen) return !1;
                    if (_e.isGuide(t)) return !1;
                    if (!pe.IsOpen(b.Shop)) return !1;
                    break;
                case ot.ENTER_CHAPTER_27:
                    if (!_e.isGuide(ot.CHAPTER_SOLIDER_GIFT_18)) return !1;
                    if (Li.HadOpen) return !1;
                    if (_e.isGuide(t)) return !1;
                    if (!pe.IsOpen(b.Main)) return !1;
                    if (1 != qi.lvChapter) return !1;
                    if (-1 == [1, 2, 3].indexOf(qi.GetStar(D.Pass, 1, 5))) return !1;
                    if (null !== qi.GetStar(D.Pass, 2, 1)) return _e.GuideDo(ot.ENTER_CHAPTER_27, !1), !1;
                    break;
                default:
                    return !1
            }
            return !0
        }
        static GuideDo(t, e = !1) {
            let i = Yi.Avatar;
            if (t > 0) {
                let e = !1;
                i.guideD[t] || (e = !0), i.guideD[t] = 1, e && Xi.SaveApi(!0)
            }
            if (e) {
                if (t < 0 && (_e.fightGuided[t] = 1), t == ot.TAP_MAP_TO_BUILD__1) Z.Play(L.tap), qi.tapSoliderNo = null, Li.Close(S.Pause), Li.Open(S.Build, [_e.guideMapBox]);
                else if (t == ot.TAP_MAP_TO_UPSTAR__2) Z.Play(L.tap), Li.Close(S.Pause), Li.Open(S.Build, [_e.guideMapBox]);
                else if (t == ot.TAP_BUILD_TO_BUILD__3) {
                    Z.Play(L.tap), Li.Close(S.Build);
                    let t = _e.guideSoliderId,
                        e = Wi.GetCfg(t),
                        i = ve.GetSoliderLv(t),
                        s = mt.GetBoxPos(_e.guideMapBox);
                    qi.AddSolider(_e.guideSoliderId, i, e.quality, s.x, s.y, 0)
                } else if (t == ot.TAP_BUILD_TO_UPSTAR__4) Z.Play(L.tap), Li.Close(S.Build), qi.UpSoliderStar(qi.tapSoliderNo);
                else if (t == ot.HIT_THE_STONE__6) Z.Play(L.tap), qi.LockTheAim(1);
                else if (t == ot.PICK_THE_SUN__7) {
                    let t = mt.GetBoxPos(_e.guideMapBox);
                    me.TryTap(t.x, t.y)
                } else if (t == ot.UPLV_SOLIDER_LOOK_16) Z.Play(L.tap), Li.Open(S.SoliderInfo, [1, !1]);
                else if (t == ot.CHAPTER_SOLIDER_GIFT_18) {
                    0 === Ft.GetBaseGiftSt(1, 0) && Ft.GainPassGift(1, 0)
                } else {
                    let e = St.GetTalk(t),
                        i = e.uiType,
                        s = e.uiNameNo,
                        n = e.btnName;
                    if ("Banner" === i) {
                        if (!pe.IsOpen(s)) return;
                        pe.BtnTalkTap(s, n)
                    } else if ("Menu" === i) {
                        if (!Li.IsOpen(s)) return;
                        Li.BtnGuideTap(s, n)
                    }
                    t == ot.PAUSE_BUTTON__5 && _e.OnEnemyBron(qi.lvPass, 0)
                }
                _e.guideT = 0
            }
        }
        static guideRun(t) {
            let e = St.GetTalk(t),
                i = e.uiType,
                s = (e.uiName, e.uiNameNo),
                n = e.btnName;
            if (e.delay && _e.guideT < e.delay) return !0;
            if (t === ot.TAP_BUILD_TO_BUILD__3) {
                if (null === _e.guideEnemyNo) return !1;
                if (!Li.IsOpen(S.Build)) return !1;
                if (ge.upstarPos) return !1;
                let t = ge.GetSoliderItemPos(_e.guideSoliderId);
                if (null === t) return;
                return _e.guideOpen(ot.TAP_BUILD_TO_BUILD__3, [t.x, t.y, 108, 108, null]), !0
            }
            if (t === ot.TAP_BUILD_TO_UPSTAR__4) {
                if (null === _e.guideEnemyNo) return !1;
                if (!Li.IsOpen(S.Build)) return !1;
                let t = ge.upstarPos;
                return !!t && (_e.guideOpen(ot.TAP_BUILD_TO_UPSTAR__4, [t.x, t.y, 108, 108, null]), !0)
            }
            if ("Banner" === i) {
                if (!pe.IsOpen(s)) return !1;
                if (t == ot.KILL_ONE_THROW__9) return !1;
                let e = pe.BtnTalkInfo(s, n);
                return !!e && (_e.guideOpen(t, e), !0)
            }
            if ("Menu" === i) {
                if (!Li.IsOpen(s)) return !1;
                let e = Li.BtnGuideInfo(s, n);
                return !!e && (_e.guideOpen(t, e), !0)
            }
            return !1
        }
        static GuideCall() {
            if (Li.IsOpen(S.Guide)) return;
            _e.guideSum = 0;
            let t = St.GetSortTalk();
            for (let e in t) {
                let i = t[e],
                    s = _e.isGuide(i);
                if ((!s || (_e.guideSum++, 5 == i)) && (_e.CanGuide(i) && (s = _e.guideRun(i)))) break
            }
        }
    }
    _e._currentGuideId = null, _e.gameGuideBook = {
        1: {
            2: [46, 1, "Click open space", "Click open space，Build a soldier", "Click Build a soldier", "Click Build a soldier"],
            3: [-37, 22, "Click open space", "Click open space，Build a soldier", "Click Build a soldier", "Click Build a soldier"],
            10: [-37, 22, "Click soldier", "Click to see pawns", "Click the upgrade button", "Click upgrade soldier"],
            16: [-45, ot.FIGHT_GUIDE_FINISH__8]
        },
        3: {
            67: [0, ot.KILL_ONE_THROW__9]
        }
    }, _e.guideEnemyNo = null, _e.guideMapBox = null, _e.guideSoliderId = null, _e.guideT = 0, _e._t = 0, _e.guideSum = 0;
    class ve {
        static Init() {
            ve.initBeyond(xi.offSec)
        }
        static GetSoliderIdList(t = 0) {
            let e = Yi.Avatar,
                i = [];
            for (let s in e.soliderDict) {
                let e = parseInt(s);
                if (t) {
                    if (Wi.GetCfg(e).job !== t) continue
                }
                i.push(e)
            }
            let s = [];
            for (let t in i) {
                let e = i[t],
                    n = Wi.GetCfg(e),
                    a = ve.GetSoliderLv(n.id),
                    l = ve.PatchNum(n.id),
                    o = ve.ActNeedPatch(n.id),
                    r = a < 1 && o >= l,
                    h = {
                        id: n.id,
                        qt: n.quality,
                        lv: a,
                        act: a > 0 ? 1 : 0,
                        num: l,
                        pick: l > 0 ? 1 : 0,
                        wait: r ? 1 : 0
                    };
                s.push(h)
            }
            s.sort(function (t, e) {
                return t.qt == e.qt ? t.lv == e.lv ? t.job > e.job ? 1 : -1 : t.lv > e.lv ? -1 : 1 : t.qt < e.qt ? 1 : -1
            });
            let n = [];
            for (let t in s) n.push(s[t].id);
            return n
        }
        static GetSoliderNum(t = 0) {
            return ve.GetSoliderIdList(t).length
        }
        static AwardSolider(t, e = !1) {
            let i = Wi.GetCfg(t),
                s = bt.GetCfg(i.quality),
                n = null;
            ve.GetSoliderLv(t) ? e || (n = s.actPatch, ve.AddPatch(t, n), setTimeout(() => {
                Pi.FlySoliderPatch(i.id, 5, -n)
            }, 1e3), Li.Open(S.SoliderNew, [t, n]), Xi.SaveApi(!0)) : (ve.AddSolider(t), Pi.FlyAwardSolider(t), Li.Open(S.SoliderNew, [t, n]), Xi.SaveApi(!0))
        }
        static AddSolider(t) {
            let e = Yi.Avatar;
            e.soliderDict[t] || (e.soliderDict[t] = 1), e.soliderNew || (e.soliderNew = {}), e.soliderNew[t] || (e.soliderNew[t] = 1), Z.Play(L.heroGain)
        }
        static IsNewSolider(t) {
            let e = Yi.Avatar;
            return e.soliderNew || (e.soliderNew = {}), 1 === e.soliderNew[t]
        }
        static RedNewSolider() {
            let t = Yi.Avatar;
            t.soliderNew || (t.soliderNew = {});
            for (let e in t.soliderNew)
                if (1 === t.soliderNew[e]) return !0;
            return !1
        }
        static LookNewSolider(t) {
            let i = Yi.Avatar;
            i.soliderNew || (i.soliderNew = {}), i.soliderNew[t] && (i.soliderNew[t] = -1, K.Evt(e.LOOK_NEW_SOLIDER))
        }
        static BuildNewSolider(t) {
            let e = Yi.Avatar;
            e.soliderNew || (e.soliderNew = {}), e.soliderNew[t] && delete e.soliderNew[t]
        }
        static IsNotBuild(t) {
            let e = Yi.Avatar;
            return e.soliderNew || (e.soliderNew = {}), e.soliderNew[t] && !0
        }
        static UpLevelRed() {
            if (!Lt.CanOpen(b.SoliderSite)) return !1;
            let t = Wi.GetDict();
            for (let e in t) {
                let i = t[e];
                if (ve.IsUpRed(i.id)) return !0
            }
            return !1
        }
        static IsUpRed(t) {
            let e = ve.GetSoliderLv(t);
            if (e <= 0) return !1;
            if (e >= ve.GetSoliderMaxLv(t)) return !1;
            let i = ve.PatchNum(t);
            if (i <= 0) return !1;
            if (i < ve.UpNeedPatch(t)) return !1;
            let s = ve.UpNeedGold(t);
            return !!Le.HasMoneyByVal(d.gold, s)
        }
        static initBeyond(t) {
            ve.updateBeyond(1e3 * t)
        }
        static Update(t) {
            ve.updateBeyond(t)
        }
        static updateBeyond(t) {
            let e = Yi.Avatar;
            for (let i in e.soliderBeyond) e.soliderBeyond[i] && (e.soliderBeyond[i] -= t, e.soliderBeyond[i] <= 0 && delete e.soliderBeyond[i])
        }
        static BeyondDo(t, e) {
            if (!ve.getBeyondT(t)) return void Pi.FlyTxt("Break logic error");
            let i = ve.getBeyondNeed(t);
            if (i) {
                if (!e) {
                    let [t, e] = i;
                    if (!Le.HasMoneyByVal(t, e)) return void(t == d.gold ? Pi.FlyTxt("Not enough gold to break") : t == d.diamond ? Pi.FlyTxt("Not enough diamonds to break")
						: Pi.FlyTxt("Not enough resources to break"));
                    Le.CostMoneyByVal(t, e)
                }
                delete Yi.Avatar.soliderBeyond[t], Pi.FlyTxt("Complete the break"), Xi.SaveApi(!0)
            } else Pi.FlyTxt("Break logic error")
        }
        static getBeyondT(t) {
            let e = Yi.Avatar.soliderBeyond[t];
            return e || 0
        }
        static getBeyondNeed(t) {
            if (!ve.getBeyondT(t)) return null;
            let e = Wi.GetCfg(t),
                i = bt.GetCfg(e.quality),
                s = ve.GetSoliderLv(t);
            if (s % 10 == 0) {
                let t = i.beyond10;
                return [d.diamond, t]
            }
            if (s % 5 == 0) {
                let e = ve.UpNeedGold(t);
                return [d.gold, e * i.beyond5]
            }
            return null
        }
        static getBeyondMaxT(t) {
            let e = Wi.GetCfg(t);
            return 60 * bt.GetCfg(e.quality).beyondMin * 1e3
        }
        static tryInBeyond(t) {
            let e = Yi.Avatar,
                i = ve.GetSoliderMaxLv(t),
                s = e.soliderDict[t];
            s < i && s % 5 == 0 && (e.soliderBeyond[t] = ve.getBeyondMaxT(t), Xi.SaveApi(!0))
        }
        static UpLevel(t) {
            let e = ve.GetSoliderLv(t);
            if (!e) return;
            if (!Wi.GetCfg(t)) return;
            if (e >= ve.GetSoliderMaxLv(t)) return void Pi.FlyTxt("The max level", null, "#00FF00", null, null, -200);
            let i = ve.PatchNum(t),
                s = ve.UpNeedPatch(t);
            if (i < s) return void Pi.FlyTxt("Insufficient fragmentation [boutique available for purchase]", !0, "#FF4E4A", null, null, -200);
            let n = ve.UpNeedGold(t);
            if (!Le.HasMoneyByVal(d.gold, n)) return void Pi.FlyTxt("Not enough gold [boutiques available for purchase]", !0, "#FF4E4A", null, null, -200);
            let a = ve.UpNeedDiamond(t);
            if (!(a > 0) || Le.HasMoneyByVal(d.diamond, a)) return ve.CostPatch(t, s), Yi.Avatar.soliderDict[t]++, Le.CostMoneyByVal(d.gold, n), a > 0 && Le.CostMoneyByVal(d.diamond, a), ve.tryInBeyond(t), _e.GuideDo(ot.UPLV_SOLIDER_CLOSE_14, !1), _e.GuideDo(ot.UPLV_SOLIDER_BTN_15, !1), 
				_e.GuideDo(ot.UPLV_SOLIDER_LOOK_16, !1),
				_e.GuideDo(ot.UPLV_SOLIDER_DO_17, !1),
				Xi.SaveApi(!1), Pi.FlyTxt("Update successfully", !0, "#00FF00", null, null, -200), !0;
            Pi.FlyTxt("Not enough diamonds", !0, "#FF4E4A", null, null, -200)
        }
        static GetSoliderLv(t) {
            let e = Yi.Avatar.soliderDict[t];
            return e || null
        }
        static GetSoliderMaxLv(t) {
            let e = Wi.GetCfg(t);
            return e ? e.maxLv ? e.maxLv : bt.GetCfg(e.quality).maxLv : 0
        }
        static UpNeedPatch(t) {
            let e = Wi.GetCfg(t);
            if (!e) return 0;
            let i = ve.GetSoliderLv(t);
            return i ? i >= ve.GetSoliderMaxLv(t) ? 0 : bt.GetCfg(e.quality).upPatch + e.patchMore : 0
        }
        static UpNeedGold(t) {
            let e = Wi.GetCfg(t);
            if (!e) return 0;
            let i = ve.GetSoliderLv(t);
            if (!i) return 0;
            if (i >= ve.GetSoliderMaxLv(t)) return 0;
            let s = bt.GetCfg(e.quality),
                n = s.baseGold,
                a = s.upGold;
            return n + (a += e.goldMore) * (i - 1)
        }
        static UpNeedDiamond(t) {
            let e = Wi.GetCfg(t);
            if (!e) return 0;
            let i = ve.GetSoliderLv(t);
            if (!i) return 0;
            if (i >= ve.GetSoliderMaxLv(t)) return 0;
            let s = bt.GetCfg(e.quality);
            return i % 10 == 0 ? 0 : i % 5 == 0 ? s.diamond5 : 0
        }
        static DevRndSolider(t) {
            let e = [],
                i = 0,
                s = Wi.GetDict();
            for (let n in s) {
                if (++i < t || i >= t + 5) continue;
                let a = s[n];
                e.push(a.id), ve.GetSoliderLv(a.id) || ve.AddSolider(a.id)
            }
            return e
        }
        static RndPatch(t) {
            if (null === t) {
                let e = [],
                    i = Wi.GetDict();
                for (let t in i) {
                    let s = i[t];
                    e.push(s.id)
                }
                t = e[Math.floor(Math.random() * e.length)]
            }
            let e = Qi.RandomInt(1, 3);
            ve.AddPatch(t, e)
        }
        static ActNeedPatch(t) {
            let e = Wi.GetCfg(t);
            return bt.GetCfg(e.quality).actPatch
        }
        static ActSoliderRed() {
            if (!Lt.CanOpen(b.Pic)) return !1;
            let t = Wi.GetDict();
            for (let e in t) {
                let i = t[e];
                if (ve.IsActRed(i.id)) return !0
            }
            return !1
        }
        static IsActRed(t) {
            if (ve.GetSoliderLv(t) > 0) return !1;
            let e = ve.PatchNum(t);
            return !(e <= 0) && !(e < ve.ActNeedPatch(t))
        }
        static ActSolider(t) {
            if (!Wi.GetCfg(t)) return void Pi.FlyTxt("Activate the error", null, "#FF4E4A");
            if (ve.GetSoliderLv(t)) return;
            let i = ve.PatchNum(t),
                s = ve.ActNeedPatch(t);
            if (!(i < s)) return Pi.FlyAwardSolider(t), ve.CostPatch(t, s), ve.AddSolider(t), K.Evt(e.SOLIDER_UPLEVEL), Li.Open(S.SoliderNew, [t, 0]), Xi.SaveApi(!1), !0;
            Pi.FlyTxt("Lack of fragment", null, "#FF4E4A")
        }
        static _AutoActSolider() {
            let t = Yi.Avatar;
            for (let e in t.soliderPatch) {
                let t = parseInt(e);
                if (6 != t && (!ve.GetSoliderLv(t) && ve.PatchNum(t) >= ve.ActNeedPatch(t))) return void setTimeout(function () {
                    ve.ActSolider(t)
                }, 340)
            }
        }
        static AddPatch(t = null, i) {
            if (null === t) {
                let t = Wi.GetDict();
                for (let e in t) {
                    t[e].id
                }
                return
            }
            let s = Yi.Avatar;
            s.soliderPatch[t] || (s.soliderPatch[t] = 0), s.soliderPatch[t] += i, K.Evt(e.PATCH_NUM_CHANGE), Xi.SaveApi(!1)
        }
        static PatchNum(t) {
            return Yi.Avatar.soliderPatch[t] || 0
        }
        static PatchEnough(t, e) {
            return ve.PatchNum(t) >= e
        }
        static CostPatch(t, i) {
            if (!ve.PatchEnough(t, i)) return !1;
            Yi.Avatar.soliderPatch[t] -= i, K.Evt(e.PATCH_NUM_CHANGE), Xi.SaveApi(!1)
        }
        static GetUnlockCost() {
            let t = ve.TeamNum(),
                [e, i, s] = ve.unlockTeamCost[t];
            return [i, s]
        }
        static CanUnlockTeam(t, e = !1) {
            if (!e && t != ve.TeamNum()) return Pi.FlyTxt("Please unlock the formation in order"), !1;
            let i = Yi.Avatar,
                [s, n, a] = ve.unlockTeamCost[t];
            return !(i.passLv < s) || (e || Pi.FlyTxt(`You can unlock it only after you pass level ${s}`), !1)
        }
        static TeamEmptyRed() {
            let t = ve.TeamNum();
            for (let e = 0; e < t; e++) {
                if (0 == ve.TeamInfo(e).length) return !0
            }
            return !1
        }
        static SoliderInTeam(t, e) {
            let i = Yi.Avatar;
            return i.soliderGroup[t] || (i.soliderGroup[t] = []), -1 !== i.soliderGroup[t].indexOf(e)
        }
        static TeamJoin(t, e, i) {
            if (!e) return !1;
            let s = Yi.Avatar;
            s.soliderGroup[t] || (s.soliderGroup[t] = []);
            let n = s.soliderGroup[t].indexOf(e);
            if (-1 === n) {
                let n = {};
                for (let e in s.soliderGroup[t]) {
                    let a = s.soliderGroup[t][e];
                    if (a !== i) {
                        n[Wi.GetCfg(a).job] = a
                    }
                }
                let a = !1,
                    l = Wi.GetCfg(e);
                if (n[l.job] && (i = n[l.job], a = !0), null !== i) {
                    let n = s.soliderGroup[t].indexOf(i);
                    s.soliderGroup[t][n] = e, a ? Pi.FlyTxt("Successful replacement with professional soldiers", null, "#00FF00") : Pi.FlyTxt("Replace the success", null, "#00FF00")
                } else {
                    if (s.soliderGroup[t].length >= 5) return Pi.FlyTxt("Formation is full", null, "#FF4E4A"), !1;
                    s.soliderGroup[t].push(e)
                }
                ve.LookNewSolider(e)
            } else s.soliderGroup[t].splice(n, 1);
            return Xi.SaveApi(!1), !0
        }
        static TeamInfo(t) {
            let e = Yi.Avatar;
            e.soliderGroup[t] || (e.soliderGroup[t] = []);
            let i = [],
                s = e.soliderGroup[t];
            for (let t in s) {
                let e = s[t],
                    n = Wi.GetCfg(e),
                    a = {
                        id: e,
                        job: n.job,
                        qt: n.quality,
                        lv: ve.GetSoliderLv(e)
                    };
                i.push(a)
            }
            i.sort(function (t, e) {
                return t.qt == e.qt ? t.lv == e.lv ? t.job > e.job ? 1 : -1 : t.lv > e.lv ? -1 : 1 : t.qt < e.qt ? 1 : -1
            });
            let n = [];
            for (let t in i) {
                let e = i[t].id;
                n.push(e)
            }
            return n
        }
        static TeamNum() {
            return Yi.Avatar.teamNum
        }
        static AddTeamNum() {
            let t = Yi.Avatar;
            t.teamNum >= 5 || (t.teamNum++, K.Evt(e.TEAM_UNLOCK_REFRESH), Xi.SaveApi(!0))
        }
        static GetSoliderPicList() {
            let t = [],
                e = Wi.GetDict();
            for (let i in e) {
                let s = e[i],
                    n = ve.GetSoliderLv(s.id),
                    a = ve.PatchNum(s.id),
                    l = ve.ActNeedPatch(s.id),
                    o = n < 1 && a >= l,
                    r = {
                        id: s.id,
                        qt: s.quality,
                        lv: n,
                        act: n > 0 ? 1 : 0,
                        num: a,
                        pick: a > 0 ? 1 : 0,
                        wait: o ? 1 : 0
                    };
                t.push(r)
            }
            t.sort(function (t, e) {
                return t.act == e.act ? t.pick == e.pick ? t.wait == e.wait ? t.qt == e.qt ? t.lv == e.lv ? t.num > e.num ? -1 : 1 : t.lv > e.lv ? -1 : 1 : t.qt > e.qt ? -1 : 1 : t.wait > e.wait ? -1 : 1 : t.pick > e.pick ? -1 : 1 : t.act < e.act ? -1 : 1
            });
            let i = [];
            for (let e in t) i.push(t[e].id);
            return i
        }
    }
    ve.unlockTeamCost = {
        1: [10, d.diamond, 68],
        2: [20, d.diamond, 188],
        3: [30, d.diamond, 288],
        4: [40, d.diamond, 388]
    };
    class Le {
        static Init() {}
        static AddAward(t, e, i = !1, s = null, n = null) {
            let a = yt.GetCfg(t);
            if (!a) return;
            let l, o, r = !1,
                h = !1;
            if (t == d.gold && (e = Le.getPassGold(e)), t != d.patch && Le.AddMoneyByVal(t, e), t == d.patch) Pi.FlyTxt("Uncertain fragmentation logic"), l = [
                [t, e]
            ], r = !1, h = !0;
            else if (t < It.BuffId50) l = [
                [t, e]
            ], r = !1, h = !0;
            else if (a.autoOpen) {
                let e = -1 != [520, 521, 522, 523].indexOf(t);
                [l, o] = Le.getItemDrop(t, e), h = !0, r = a.closeVideo
            } else l = [
                [t, e]
            ], h = !0, r = a.closeVideo;
            o || i ? Xi.SaveApi(!0) : Li.Open(S.Award, [l, r, h, s, n])
        }
        static SaveMoney(t, e) {
            let i = Yi.Avatar;
            switch (t) {
                case d.soul:
                    i._soul += e
            }
        }
        static GetSaveNum(t) {
            let e = 0,
                i = Yi.Avatar;
            switch (t) {
                case d.soul:
                    e = i._soul
            }
            return e
        }
        static GainSave(t = 1) {
            let e = Yi.Avatar,
                i = e._soul * t;
            return e.soul += i, e._soul = 0, i
        }
        static SetMoneyVal(t) {
            Yi.Avatar.money = t, K.Evt(e.ITEMNUM_CHANGE)
        }
        static AddMoneyByVal(t, e) {
            let i = [];
            return i.push([t, e]), Le.AddMoney(i)
        }
        static CostMoneyByVal(t, e) {
            let i = [];
            return i.push([t, e]), Le.CostMoney(i)
        }
        static HasMoneyByVal(t, e) {
            let i = [];
            return i.push([t, e]), Le.HasMoney(i)
        }
        static AddMoney(t) {
            let i = {},
                s = Yi.Avatar;
            for (let n in t) {
                let a = t[n],
                    l = a[0],
                    o = a[1];
                if (l > It.Weapon600 || l > It.Stone800);
                else if (l > It.Card100 || l > It.Box500) {
                    Le.AddItem(l, o, !0) && (i[e.ITEMNUM_CHANGE] = e.ITEMNUM_CHANGE)
                } else switch (l) {
                    case d.money:
                        s.money += o;
                        break;
                    case d.diamond:
                        s.diamond += o;
                        break;
                    case d.gold:
                        s.gold += o;
                        break;
                    case d.exp:
                        s.exp += o;
                        break;
                    case d.patch:
                        s.patch += o;
                        break;
                    case d.soul:
                        s.soul += o;
                        break;
                    case d.talent:
                        s.talent += o
                }
            }
            for (let t in i) K.Evt(i[t]);
            Xi.SaveApi(!1)
        }
        static CostMoney(t) {
            if (!Le.HasMoney(t)) return !1;
            let i = {},
                s = Yi.Avatar;
            for (let n in t) {
                let a = t[n],
                    l = a[0],
                    o = a[1];
                if (l > It.Weapon600 || l > It.Stone800);
                else if (l > It.Card100 || l > It.Box500) {
                    Le.CostItem(l, o, !0) && (i[e.ITEMNUM_CHANGE] = e.ITEMNUM_CHANGE)
                } else switch (l) {
                    case d.money:
                        s.money -= o;
                        break;
                    case d.diamond:
                        s.diamond -= o;
                        break;
                    case d.gold:
                        s.gold -= o;
                        break;
                    case d.exp:
                        s.exp -= o;
                        break;
                    case d.patch:
                        s.patch -= o;
                        break;
                    case d.soul:
                        s.soul -= o;
                        break;
                    case d.talent:
                        s.talent -= o
                }
            }
            for (let t in i) K.Evt(i[t]);
            return Xi.SaveApi(!1), !0
        }
        static HasMoney(t) {
            let e = Yi.Avatar;
            for (let i in t) {
                let s = 0,
                    n = t[i],
                    a = n[0],
                    l = n[1];
                if (a > It.Weapon600 || a > It.Stone800);
                else if (a > It.Card100 || a > It.Box500) s = Le.GetItemNum(a);
                else switch (a) {
                    case d.money:
                        s = e.money;
                        break;
                    case d.diamond:
                        s = e.diamond;
                        break;
                    case d.gold:
                        s = e.gold;
                        break;
                    case d.exp:
                        s = e.exp;
                        break;
                    case d.patch:
                        s = e.patch;
                        break;
                    case d.soul:
                        s = e.soul;
                        break;
                    case d.talent:
                        s = e.talent
                }
                if (s < l) return !1
            }
            return !0
        }
        static HasItemNum(t, e = 1) {
            return Le.GetItemNum(t) >= e
        }
        static GetItemNum(t) {
            if (t < It.Card100) return 0;
            if (t > It.Weapon600) return 0;
            let e = Yi.Avatar;
            return e.itemDict || (e.itemDict = {}), e.itemDict[t] ? e.itemDict[t] : 0
        }
        static AddItem(t, i = 1, s = !1) {
            if (i < 1) return;
            let n = yt.GetCfg(t);
            if (!n) return;
            let a = Le.GetItemNum(t);
            if (n.max && a >= n.max) return;
            a += i, n.max && a > n.max && (a = n.max);
            let l = Yi.Avatar;
            return l.itemDict || (l.itemDict = {}), l.itemDict[t] = a, n.autoOpen && Le.CostItem(t, i), s || K.Evt(e.ITEMNUM_CHANGE), !0
        }
        static getItemDrop(t, e = !1) {
            let i = yt.GetCfg(t);
            if (!i) return [null, null];
            if (-1 !== [520, 521, 522, 523].indexOf(t)) {
                if (e) {
                    return [null, Le._dropSave[t]]
                } {
                    let e = null,
                        s = Qi.RndDrop2List(i.rndOut);
                    for (let t in s) {
                        e = s[t][0]
                    }
                    let n = Wi.rndForSolider([e], !1);
                    return Le._dropSave[t] = n, [null, n]
                }
            }
            let s = [];
            if (i.drop)
                for (let t in i.drop) {
                    let e = i.drop[t][0],
                        n = i.drop[t][1];
                    if (e == d.gold && (n = Le.getPassGold(n)), s.push([e, n]), e == d.buffer) {
                        let e = i.drop[t][1],
                            s = i.stillTime;
                        xe.AddBuffer(e, s)
                    }
                }
            let n, a = Qi.RndDrop2List(i.rndOut);
            for (let t in a) {
                let e = a[t],
                    i = e[0],
                    n = e[1];
                s.push([i, n])
            }
            let l = Qi.RndDrop2List(i.heroOut);
            return l && l.length && (n = l[0][0]), Le._dropSave[t] = [s, n], Le._dropSave[t]
        }
        static CostItem(t, i = 1, s = !1) {
            if (i < 1) return;
            if (t < It.Card100) return;
            if (t > It.Weapon600) return;
            if (!yt.GetCfg(t)) return;
            let n = Yi.Avatar;
            if (i > Le.GetItemNum(t)) return;
            n.itemDict[t] -= i;
            let [a, l] = Le.getItemDrop(t, !1);
            if (Le.AddMoney(a), !l) return s || K.Evt(e.ITEMNUM_CHANGE), [a, l];
            ve.AwardSolider(l)
        }
        static IsItemMax(t) {
            let e = Le.GetItemNum(t),
                i = yt.GetCfg(t);
            return i.max && e >= i.max
        }
        static getPassGold(t) {
            let e = Yi.Avatar,
                i = ye.GetPassDrop(e.passLv);
            return Math.floor(i[d.gold] * t / 100)
        }
    }
    Le._dropSave = {};
    class xe {
        static _Init() {
            xe.expDouble = Q.GetVal("bufferExpDouble", 3), xe.goldMore = Q.GetVal("bufferGoldDouble", 3)
        }
        static Init() {
            xe.initBuff(xi.offSec), K.On(e.VIDEO_FINISH, xe, xe.bufferVideoDone)
        }
        static initBuff(t) {
            let e = Yi.Avatar;
            for (let i in e.buffDict) e.buffDict[i] -= t, e.buffDict[i] <= 0 && delete e.buffDict[i]
        }
        static DayRefresh() {
            Yi.Avatar.buffNum = {}
        }
        static bufferVideoDone(e) {
            if (-1 != [t.BufferInitMoney, t.BufferDropMoney, t._BufferAutoPick].indexOf(e)) switch (e) {
                case t.BufferInitMoney:
                    xe.AddBuffer(o.Init, xe.BufferStill);
                    break;
                case t.BufferDropMoney:
                    xe.AddBuffer(o.Drop, xe.BufferStill);
                    break;
                case t._BufferAutoPick:
                    xe.AddBuffer(o.Pick, xe.BufferStill)
            }
        }
        static AddBuffer(t, i) {
            let s = Yi.Avatar;
            s.buffDict || (s.buffDict = {}), s.buffDict[t] || (s.buffDict[t] = 0), s.buffDict[t] < 0 && (s.buffDict[t] = 0);
            let n = s.buffDict[t] + i;
            s.buffDict[t] = n, s.buffNum || (s.buffNum = {}), s.buffNum[t] || (s.buffNum[t] = 0), s.buffNum[t]++, K.Evt(e.BUFFDICT_CHANGE), Xi.SaveApi(!0)
        }
        static BufferSec(t) {
            let e = Yi.Avatar;
            return e.buffDict && e.buffDict[t] ? e.buffDict[t] <= 0 ? 0 : e.buffDict[t] : 0
        }
        static BufferNum(t) {
            let e = Yi.Avatar;
            return e.buffNum && e.buffNum[t] ? e.buffNum[t] <= 0 ? 0 : e.buffNum[t] : 0
        }
        static Update(t) {
            xe.bufferT += t;
            let i = Math.floor(.001 * xe.bufferT);
            if (i == xe.bufferSec) return;
            xe.bufferSec = i;
            let s = !1,
                n = Yi.Avatar;
            for (let t in n.buffDict) {
                s = !0;
                let e = n.buffDict[t];
                e ? e <= 0 ? delete n.buffDict[t] : n.buffDict[t]-- : delete n.buffDict[t]
            }
            s && K.Evt(e.BUFFDICT_CHANGE), i % 8 == 0 && K.Evt(e.BUFFITEM_FLASH)
        }
        static ExpDouble(t) {
            return xe.BufferSec(o.Exp) ? t * xe.expDouble : t
        }
        static GoldDouble(t) {
            return xe.BufferSec(o.Gold) ? t * xe.goldMore : t
        }
        static AddMoreGold(t) {
            if (xe.BufferSec(o.Gold))
                for (let e in t) {
                    let i = t[e],
                        s = i[0],
                        n = i[1];
                    s == d.gold && Le.AddMoneyByVal(s, n * (xe.goldMore - 1))
                }
        }
    }
    xe.BufferStill = 1800, xe.BufferLimit = 3, xe.bufferT = 0;
    class Ce extends R {
        constructor(t) {
            if (super(t), t.effect) {
                let e = t.effect.split(",");
                e && 3 == e.length && (this.where = parseInt(e[0]), this.dir = e[1], this.eff = e[2])
            } [this.eff1, this.val1, this.add1] = t.effect1, this.name = t.name, this.qt = t.qt, this.img = t.img, this.txt = t.txt, this.trigger = t.trigger, this.dist = t.range, this.chance = t.chance, this.target = t.target, this.maxLv = t.max, this.baseCost = t.baseCost, this.addCost = t.addCost, this.cd = t.cd, this.fast = t.fast
        }
        static Init() {
            if (!Ce._saves) {
                Ce._saves = {};
                let t = zi.GetJson(Ce.jsName);
                for (let e in t) {
                    let t = R.GetJson(Ce, parseInt(e));
                    Ce._saves[t.id] = t
                }
            }
        }
        static GetJson(t) {
            return Ce.Init(), Ce._saves[t]
        }
    }
    Ce.jsName = "art";
    class Be {
        constructor() {
            this.cd = null
        }
        static debugLog(...t) {
            Qi.IsInDebug(4) && Qi.Log(t)
        }
        setData(t, e, i, s) {
            this.no = t, this.heroId = e, this.skillId = i, this.skillLv = s;
            let n = Ce.GetJson(i);
            this.trigger = n.trigger, this.chance = n.chance, this.target = n.target, this.range = n.dist, this.where = n.where, this.dir = n.dir, this.effect = n.eff, this.effect1 = n.eff1, this.val1 = n.val1, this.add1 = n.add1, this.cdFast = n.fast, this.cdMax = n.cd, null === this.cd && (this.cd = n.cd)
        }
        isReady() {
            return this.cd >= this.cdMax - this.cdFast * (this.skillLv - 1)
        }
        inRndChance() {
            return Math.ceil(100 * Math.random()) <= this.chance
        }
        inBloodChange(t) {
            return !1
        }
        effVal() {
            return .001 * (this.val1 + (this.skillLv - 1) * this.add1)
        }
        cdTimer(t) {
            this.cd += t
        }
        HitAction(t, e) {
            if (this.trigger != x.Hit) return;
            if (!this.isReady()) return;
            if (!this.inRndChance()) return;
            let i = this.autoLock(t, e);
            return !i || i.length <= 0 ? void 0 : this.skillThrow(t, e, i)
        }
        HurtAction(t, e) {
            if (this.trigger != x.Hurt) return;
            if (!this.isReady()) return;
            if (!this.inRndChance()) return;
            let i = this.autoLock(t, e);
            return this.skillThrow(t, e, i)
        }
        JoinAction(t, e) {
            if (this.trigger != x.Join) return;
            if (!this.isReady()) return;
            let i = this.autoLock(t, e);
            return this.skillThrow(t, e, i)
        }
        DieAction(t, e) {
            if (this.trigger != x.Die) return;
            if (!this.isReady()) return;
            if (!this.inRndChance()) return;
            let i = this.autoLock(t, e);
            return this.skillThrow(t, e, i)
        }
        BloodAtkerAction(t, e) {
            if (this.trigger != x.atkerBlood) return;
            if (!this.isReady()) return;
            if (!this.inBloodChange(t)) return;
            let i = this.autoLock(t, e);
            return !i || i.length <= 0 ? void 0 : this.skillThrow(t, e, i)
        }
        BloodHiterAction(t, e) {
            if (this.trigger != x.hiterBlood) return;
            if (!this.isReady()) return;
            if (!this.inBloodChange(e)) return;
            let i = this.autoLock(t, e);
            return this.skillThrow(t, e, i)
        }
        BloodHurterAction(t, e) {
            if (this.trigger != x.hurterBlood) return;
            if (!this.isReady()) return;
            if (!this.inBloodChange(e)) return;
            let i = this.autoLock(t, e);
            return !i || i.length <= 0 ? void 0 : this.skillThrow(t, e, i)
        }
        HandAction() {
            if (this.trigger != x.Hand) return;
            if (!this.isReady()) return;
            let t = this.HandLock();
            return this.skillThrow(null, null, t)
        }
        autoLock(t, e) {
            let i = qi._GetEntity(t),
                s = qi._GetEntity(e),
                n = [];
            switch (this.target) {
                case T.Line:
                    if (!i || !s) return;
                    if (!this.range || 3 != this.range.length) return;
                    let [t, e, a] = this.range;
                    i.x > s.x && (e = -e), n = qi.lockLineEnemy(i.x, i.y, t, e);
                    break;
                case T.Lock:
                    if (!s) return;
                    if (this.range.length > 0 && 2 != this.range.length) return;
                    n = qi.lockSignEntity(s.no);
                    break;
                case T.EnemyHit:
                    if (!i) return;
                    n = qi.lockSignEntity(i.no);
                    break;
                case T.MinBlood:
                    if (!i) return;
                    break;
                case T.SelfHurt:
                case T.SelfHit:
                    if (!i) return;
                    n = qi.lockSignEntity(i.no);
                    break;
                case T.Friends:
                    if (!i) return;
                    break;
                case T.RoundEnemy:
                    if (!i || !s) return;
                    if (!this.range || 1 != this.range.length && 3 != this.range.length) return;
                    this.range[0];
                    break;
                case T.RoundFriend:
                    if (!i) return;
                    if (!this.range || 1 != this.range.length && 3 != this.range.length) return;
                    this.range[0];
                    break;
                case T.AimRound:
                    if (!s) return;
                    if (!this.range || 1 != this.range.length && 3 != this.range.length) return;
                    this.range[0];
                    break;
                case T.Enemys:
                    if (!s) return
            }
            return n
        }
        HandLock() {
            switch (this.target) {
                case T.Box:
                case T.Round:
            }
        }
        skillThrow(t, e, i) {
            if (!i || i.length <= 0) return;
            let s = null,
                n = null;
            t && (s = qi._GetEntity(t)), e && (n = qi._GetEntity(e));
            let a = 0,
                l = 0;
            this.range && this.range.length >= 2 && (a = this.range[this.range.length - 2], l = this.range[this.range.length - 1]);
            Ce.GetJson(this.skillId);
            if (this.dir && this.effect) switch (this.where) {
                case G.Self:
                    if (this.trigger == x.Hurt) {
                        if (!n) return;
                        Pi.SkillUpDown(Pi.EffectLayer, this.dir, this.effect, n.x, n.y, a, l)
                    } else {
                        if (!s) return;
                        Pi.SkillUpDown(Pi.EffectLayer, this.dir, this.effect, s.x, s.y, a, l)
                    }
                    break;
                case G.Aim:
                    if (!i || 1 != i.length) return;
                    let t = qi._GetEntity(i[0]);
                    t && Pi.SkillUpDown(Pi.EffectLayer, this.dir, this.effect, t.x, t.y, a, l);
                    break;
                case G.Aims:
                    for (let t in i) {
                        let e = i[t],
                            s = qi._GetEntity(e);
                        s && Pi.SkillUpDown(Pi.EffectLayer, this.dir, this.effect, s.x, s.y, a, l)
                    }
                    break;
                case G.Line:
                    this.range[0];
                    let e = this.range[1],
                        o = this.range[2],
                        r = s.x,
                        h = s.y,
                        d = n.x < s.x ? s.x - e : s.x + e,
                        u = s.y;
                    Pi.SkillLineFly(this.dir, this.effect, o, r, h, d, u);
                    break;
                case G.Screen:
            }
            switch (this.effect1) {
                case _.atkHurt:
                    if (!s || !n) return;
                    for (let t in i) {
                        let e = i[t];
                        qi._GetEntity(e)
                    }
                    break;
                case _.bloodMax:
                    for (let t in i) {
                        let e = i[t];
                        qi._GetEntity(e)
                    }
                    break;
                case _.atkHeal:
                    if (!s) return;
                    for (let t in i) {
                        let e = i[t];
                        qi._GetEntity(e)
                    }
                    break;
                case _.bloodHeal:
                    for (let t in i) {
                        let e = i[t];
                        qi._GetEntity(e)
                    }
                    break;
                case _.getBlood:
                    if (!s) return;
                    for (let t in i) {
                        let e = i[t];
                        qi._GetEntity(e)
                    }
                    break;
                case _.minHurt:
                    for (let t in i) {
                        let e = i[t];
                        qi._GetEntity(e);
                        return this.effVal()
                    }
                    break;
                case _.backHurt:
                    for (let t in i) {
                        let e = i[t];
                        qi._GetEntity(e)
                    }
                    break;
                case _.mustHurt:
                    break;
                default:
                    return
            }
            return this.cd = 0, !0
        }
    }
    class we {
        static Init() {
            we.InitSkill()
        }
        static InitSkill() {
            we.skillDict = {}
        }
        static Update(t) {
            if (we._t += t, !(we._t < 120)) {
                for (let t in we.skillDict) {
                    let e = parseInt(t),
                        i = we.skillDict[e];
                    for (let t in i) {
                        i[parseInt(t)].cdTimer(we._t)
                    }
                }
                we._t = 0
            }
        }
        static AppendSkill(t, e, i, s) {
            if (!Ce.GetJson(i)) return;
            we.skillDict || (we.skillDict = {}), we.skillDict[e] || (we.skillDict[e] = {});
            let n = we.skillDict[e][i];
            n || (n = new Be, we.skillDict[e][i] = n), n.setData(t, e, i, s)
        }
        static HitCallSkill(t, e, i) {
            if (!we.skillDict) return;
            if (!we.skillDict[t]) return;
            let s = we.skillDict[t];
            for (let t in s) {
                let n = s[parseInt(t)],
                    a = !1;
                if (a || (a = n.HitAction(e, i)), a || (a = n.BloodAtkerAction(e, i)), a || (a = n.BloodHiterAction(e, i)), a) break
            }
        }
        static BloodHurterAction(t, e, i) {
            if (!we.skillDict) return;
            if (!we.skillDict[t]) return;
            let s = we.skillDict[t];
            for (let t in s) {
                let n = s[parseInt(t)];
                if (n.trigger == x.hurterBlood) return n.BloodHurterAction(e, i)
            }
        }
        static HurtCallAction(t, e, i) {
            if (!we.skillDict) return;
            if (!we.skillDict[t]) return;
            let s = we.skillDict[t];
            for (let t in s) {
                let n = s[parseInt(t)];
                if (n.trigger == x.Hurt) return n.HurtAction(e, i)
            }
        }
        static DieCallSkill(t, e, i) {
            if (!we.skillDict) return;
            if (!we.skillDict[t]) return;
            let s = we.skillDict[t];
            for (let t in s) {
                if (s[parseInt(t)].DieAction(e, i)) break
            }
        }
    }
    we._t = 0;
    class Ge {
        static Init() {
            Ge.InitBuff()
        }
        static InitBuff() {
            Ge.selfBuffer = {}, Ge.enemyBuffer = {}
        }
        static Update(t) {
            if (Ge._t += t, !(Ge._t < 90)) {
                for (let t in Ge.selfBuffer) {
                    let e = parseInt(t);
                    for (let t in Ge.selfBuffer[e]) {
                        Ge.selfBuffer[e][t].timer(Ge._t) && delete Ge.selfBuffer[e][t]
                    }
                }
                for (let t in Ge.enemyBuffer) {
                    let e = parseInt(t);
                    for (let t in Ge.enemyBuffer[e]) {
                        Ge.enemyBuffer[e][t].timer(Ge._t) && delete Ge.enemyBuffer[e][t]
                    }
                }
                Ge._t = 0
            }
        }
        static AppendBuff(t, e, i, s, n = null) {}
        static ClearBuffer(t) {}
    }
    Ge._t = 0;
    class Oe extends R {
        constructor(t) {
            super(t), this.ex1 = t.e1, this.ex2 = t.e2, this.ex3 = t.e3, this.ex4 = t.e4, this.ex5 = t.e5
        }
        static Init() {
            if (!Oe._saves) {
                Oe._saves = {};
                let t = zi.GetJson(Oe.jsName);
                for (let e in t) {
                    let t = R.GetJson(Oe, parseInt(e));
                    Oe._saves[t.id] = t
                }
            }
        }
        static GetJson(t) {
            return Oe.Init(), Oe._saves[t]
        }
        static GetUpExp(t, e) {
            let i = Oe.GetJson(t);
            return i && e && i["ex" + e] ? i["ex" + e] : 0
        }
    }
    Oe.jsName = "heroLv";
    class Ae {
        static Init() {
            K.On(e.VIDEO_FINISH, Ae, Ae.beyondVideoAdDone), K.On(e.SHARE_SUCC, Ae, Ae.shareSuccDone)
        }
        static beyondVideoAdDone(e, i) {
            t._Beyond
        }
        static shareSuccDone(e) {
            e == l.Beyond && Ae.hId && Ae.beyondVideoAdDone(t._Beyond, Ae.hId)
        }
        static AddHero(t) {
            let e = 0;
            Ae.newHeroDict[t] = Laya.timer.currTimer + 6e4, xi.RefreshSet(), Z.Play(L.heroGain), Li.Open(S.Egg, [t, e]), Xi.SaveApi(!0)
        }
        static GetHeroList() {
            let t = Yi.Avatar,
                e = [];
            for (let i in t.heroDict) {
                let t = parseInt(i);
                e.push(t)
            }
            return e
        }
        static UpNeedGold(t) {
            let e = Ae.GetHeroLv(t);
            if (!e) return null;
            let i = Ae.GetHeroQt(t);
            return It.HeroQtGoldBase[i] + It.HeroQtGoldAdd[i] * (e - 1)
        }
        static GetHeroLv(t) {
            let e = Yi.Avatar.heroDict[t];
            return e || 0
        }
        static GetHeroQt(t) {
            let e = U.GetCfg(t);
            if (!e) return;
            let i = Ae.GetHeroLv(t),
                s = e.quality;
            for (let t in It.HeroMaxLv) {
                let e = parseInt(t);
                if (i <= It.HeroMaxLv[t]) {
                    e >= s && (s = e);
                    break
                }
            }
            return s
        }
        static UpLevel(t) {
            let e = Ae.GetHeroLv(t);
            if (!e) return;
            if (!U.GetCfg(t)) return;
            let i = Ae.GetHeroQt(t),
                s = It.HeroMaxLv[i];
            if (i >= 5 && e >= s) return void Pi.FlyTxt("At the highest level");
            let n = Ae.UpNeedGold(t);
            if (Le.HasMoneyByVal(d.gold, n)) {
                if (e >= s) {
                    let e = Ae.PatchNum(t),
                        s = It.HeroQtPatch[i];
                    if (e < s) return void Pi.FlyTxt("Not enough fragment", !0, "#FF4E4A");
                    Ae.CostPatch(t, s)
                }
                Yi.Avatar.heroDict[t]++, Le.CostMoneyByVal(d.gold, n), Xi.SaveApi(!1), Pi.FlyTxt("Update successfully", !0)
            } else Pi.FlyTxt("Not enough gold", !0, "#FF4E4A")
        }
        static HeroIsMaxLv(t) {
            return !1
        }
        static HeroUpCost(t, e = 1) {
            let i = 0,
                s = Ae.GetHeroLv(t),
                n = U.GetCfg(t);
            n || Qi.Log("HeroUpCost", n);
            let a = n.quality;
            for (; e-- > 0;) {
                let t = Oe.GetUpExp(s++, a);
                if (!t) return 0;
                i += t
            }
            return i
        }
        static GetBeyondPrice() {
            let t = Yi.Avatar,
                e = Q.GetVal("heroLvBeyondGold", "300,80,1000").split(","),
                i = parseInt(e[0]),
                s = parseInt(e[1]),
                n = parseInt(e[2]),
                a = i + t.beyondNum * s;
            return a > n && (a = n), a
        }
        static HeroGoldBeyond(t) {
            if (!Ae.HeroUpCost(t, 1)) return void Pi.FlyTxt("At the highest level。");
            let e = Ae.GetBeyondPrice();
            Le.HasMoneyByVal(d.gold, e) && Le.CostMoneyByVal(d.gold, e) || Pi.FlyTxt("Not enough gold")
        }
        static HeroBeyond(t) {
            Ae.HeroUpCost(t, 1) || Pi.FlyTxt("At the highest level")
        }
        static CanUpLv(t, e, i = !1) {
            let s = Ae.HeroUpCost(t, e);
            return s ? !!Le.HasMoney([
                [d.exp, s]
            ]) || (i || (Qi.IsVideo() ? Li.Open(S.Pick, [d.exp, null, null]) : Pi.FlyTxt("Lack of experience")), !1) : (i || Pi.FlyTxt("At the highest level"), !1)
        }
        static HeroUplv(t, e = 1) {
            Ae.CanUpLv(t, e, !1)
        }
        static TryBeyondLock(t, e) {
            let i = Q.GetVal("heroBeyondLv", "10");
            if (e % parseInt(i) != 0) return 0;
            let s = U.GetCfg(t).quality;
            if (Ae.beyondSet || (Ae.beyondSet = {}), !Ae.beyondSet[s]) {
                Ae.beyondSet[s] = [];
                let t = Q.GetVal(`heroLvBeyondLock_${s}`, "").split(";");
                for (let e in t) {
                    let i = t[e].split(","),
                        n = parseInt(i[0]),
                        a = parseInt(i[1]);
                    Ae.beyondSet[s].push([n, a])
                }
            }
            for (let t in Ae.beyondSet[s]) {
                let [i, n] = Ae.beyondSet[s][t];
                if (e <= i) return n
            }
            return 0
        }
        static RndPatch() {
            let t = [],
                i = U.GetDict();
            for (let e in i) {
                let s = i[e];
                t.push(s.id)
            }
            let s = t[Math.floor(Math.random() * t.length)],
                n = Qi.RandomInt(1, 3);
            Ae.AddPatch(s, n), K.Evt(e.HERO_LIST_CHANGE)
        }
        static ActNeedPatch(t) {
            return It.HeroActPatch[t]
        }
        static ActHero(t) {
            let i = U.GetCfg(t);
            if (!i) return void Pi.FlyTxt("Activation logic error");
            if (Ae.GetHeroLv(t)) return void Pi.FlyTxt("This hero is active");
            let s = Ae.PatchNum(t),
                n = Ae.ActNeedPatch(i.quality);
            s < n ? Pi.FlyTxt("Insufficient fragments for activation") : (Pi.FlyTxt("Success in getting heroes"), Ae.CostPatch(t, n), Yi.Avatar.heroDict[t] = 1, Ae.AddHero(t), K.Evt(e.HERO_LIST_CHANGE), Xi.SaveApi(!1))
        }
        static AddPatch(t = null, e) {
            if (null === t) return;
            let i = Yi.Avatar;
            i.heroPatch[t] || (i.heroPatch[t] = 0), i.heroPatch[t] += e, Xi.SaveApi(!1)
        }
        static PatchNum(t) {
            return Yi.Avatar.heroPatch[t] || 0
        }
        static PatchEnough(t, e) {
            return Ae.PatchNum(t) >= e
        }
        static CostPatch(t, e) {
            if (!Ae.PatchEnough(t, e)) return !1;
            Yi.Avatar.heroPatch[t] -= e, Xi.SaveApi(!1)
        }
        static PatchList() {
            let t = [],
                e = Ae.GetHeroList(),
                i = Yi.Avatar;
            for (let s in i.heroPatch) {
                let n = parseInt(s); - 1 == e.indexOf(n) && (i.heroPatch[s] <= 0 || t.push(n))
            }
            return t
        }
        static HeroLuckyPrice() {
            let t = Q.GetVal("luckyEggCost", "");
            if (t) {
                let e = Yi.Avatar.heroLucky,
                    i = t.split(",");
                if (3 == i.length) {
                    let t = parseInt(i[0]),
                        s = parseInt(i[1]),
                        n = parseInt(i[2]),
                        a = t + e * s;
                    return a > n && (a = n), a
                }
            }
        }
        static HeroLuckyChance() {
            let t = Q.GetVal("luckyEggCost", ""),
                e = Yi.Avatar,
                i = t.split(","),
                s = (parseInt(i[0]), parseInt(i[1])),
                n = parseInt(i[2]),
                a = e.gold,
                l = Ae.HeroLuckyPrice(),
                o = 0;
            for (; a >= l && o <= 99;) a -= l, o++, l < n && (l += s);
            return o
        }
        static ApplyHeroLucky() {
            let t = Ae.HeroLuckyPrice();
            if (!Le.HasMoneyByVal(d.gold, t)) return void(Qi.IsVideo() ? Li.Open(S.Pick, [d.gold, null, null]) : Pi.FlyTxt("Lack of gold"));
            let e = Q.GetVal("luckyEggRnd", "");
            if (!e) return;
            let i = 0,
                s = {},
                n = e.split(";");
            for (let t in n) {
                let e = n[t].split(","),
                    a = parseInt(e[0]);
                s[i += parseInt(e[1])] = a
            }
            let a = Math.floor(Math.random() * i),
                l = null;
            for (let t in s) {
                if (a <= parseInt(t)) {
                    l = s[t];
                    break
                }
            }
            if (null === l) return void Pi.FlyTxt("Logic error 1");
            let o, r = Yi.Avatar;
            if (0 == r.heroLucky) {
                let t = Q.GetVal("luckyOperEggFirst", ""),
                    e = Qi.RndGroupStrToList(t);
                o = Qi.RndGroupRnd(e)
            } else {
                let t = U.GetDictForOpen(r.passLv, l);
                o = t[Math.floor(Math.random() * t.length)].id
            }
            if (Ae.luckyId = o, Le.CostMoneyByVal(d.gold, t)) return r.heroLucky++, r.heroDay++, _e.GuideDo(9, !1), Ae.AddHero(o), !0;
            Pi.FlyTxt("Logic error 2")
        }
        static Update(t) {
            Ae._t += t, Ae._t < 1e3 || (Ae._t = 0)
        }
        static SkillUnlockLv(t) {
            let e = null;
            switch (t) {
                case C.skillA:
                    e = Q.GetVal("skillLv1Open", 1);
                    break;
                case C.skillB:
                    e = Q.GetVal("skillLv2Open", 10);
                    break;
                case C.skillC:
                    e = Q.GetVal("skillLv3Open", 30)
            }
            return e
        }
        static IsSkillLock(t, e) {
            return !0
        }
        static IsSkillOnBeyond(t, e) {
            return !0
        }
        static IsSkillMax(t, e) {
            let i = Ae.GetSkillLv(t, e),
                s = Ae.GetSkillId(t, e);
            return i >= Ce.GetJson(s).maxLv
        }
        static CanSkillUp(t, e) {
            let i = Ae.GetHeroLv(t),
                s = Ae.GetSkillLv(t, e),
                n = Ae.IsSkillMax(t, e);
            if (Ae.IsSkillOnBeyond(t, e)) return !1;
            switch (i % 10 == 0 && i++, e) {
                case C.skillA:
                    let t = Q.GetVal("skillLv1Limit", 10);
                    return s < Math.ceil(i / t) && !n;
                case C.skillB:
                    let a = Q.GetVal("skillLv2Open", 10),
                        l = Q.GetVal("skillLv2Limit", 20);
                    return s < Math.ceil((i - a) / l) && !n;
                case C.skillC:
                    let o = Q.GetVal("skillLv3Open", 30),
                        r = Q.GetVal("skillLv3Limit", 30);
                    return s < Math.ceil((i - o) / r) && !n;
                default:
                    return !1
            }
        }
        static GetSkillId(t, e) {
            return U.GetCfg(t).getSkillId(e)
        }
        static GetSkillLv(t, e) {
            return Ae.IsSkillLock(t, e), 0
        }
        static GetSkillSum(t) {
            let e = Ae.GetSkillLv(t, C.skillA) + Ae.GetSkillLv(t, C.skillB) + Ae.GetSkillLv(t, C.skillC);
            return e || 0
        }
        static SkillGlobalCost(t, e, i) {
            if (Ae.globalCost || (Ae.globalCost = {}), !Ae.globalCost[t]) {
                let e = Q.GetVal(`skillUpLvCost_${t}`, "").split(","),
                    i = parseInt(e[0]),
                    s = parseInt(e[1]),
                    n = parseInt(e[2]),
                    a = parseInt(e[3]),
                    l = parseInt(e[4]),
                    o = parseInt(e[5]);
                Ae.globalCost[t] = {}, Ae.globalCost[t][1] = [i, s], Ae.globalCost[t][2] = [n, a], Ae.globalCost[t][3] = [l, o]
            }
            return Ae.globalCost[t][e][0] + (i - 1) * Ae.globalCost[t][e][1]
        }
        static GetSkillUpCost(t, e) {
            return null
        }
        static CanUpSkill(t, e, i = !1) {
            if (Ae.IsSkillLock(t, e)) return i || Pi.FlyTxt("Skills not unlocked"), !1;
            if (!Ae.CanSkillUp(t, e)) return i || Pi.FlyTxt("Insufficient hero level。"), !1;
            let s = Ae.GetSkillUpCost(t, e);
            if (s <= 0) return i || Pi.FlyTxt("Skill upgrade error"), !1;
            let n = Ae.GetSkillId(t, e);
            return !!Le.HasMoney([
                [d.soul, s]
            ]) || (i || (Qi.IsVideo() ? Li.Open(S.Pick, [d.soul, n, e]) : Pi.FlyTxt("Lack of soul stone")), !1)
        }
        static HeroSkillUp(t, e) {
            if (!Ae.CanUpSkill(t, e, !1)) return !1;
            let i = Ae.GetSkillUpCost(t, e),
                s = Ae.GetSkillId(t, e);
            Le.CostMoneyByVal(d.soul, i) || (Qi.IsVideo() ? Li.Open(S.Pick, [d.soul, s, e]) : Pi.FlyTxt("Lack of soul stone"))
        }
    }
    Ae.newHeroDict = {}, Ae._t = 0;
    class ke extends Laya.Box {
        static onFrame() {
            let t = Laya.timer.currTimer,
                e = t - ke._t;
            e > 30 && (e = 30), ke.Update(e), ke._t = t
        }
        static Init() {
            if (ke._t = Laya.timer.currTimer, Laya.timer.frameLoop(1, ke, ke.onFrame), Ut.IsWaitSign()) {
                Yi.Avatar.passLv >= 5 && setTimeout(function () {
                    // Li.Open(S.Sign)
                }, 200)
            }
        }
        static EnterGame() {
            pe.Open(b.Bottom), ke.Init()
        }
        static Update(t) {
            Vt.Update(t), Ci.Update(t), ve.Update(t), xe.Update(t), qi.coldUpdate(.12 * t), Li.IsOpen(S.Exit) || Li.IsOpen(S.Pause) || (qi.coldUpdate(.88 * t), _e.Update(t), Li.IsOpen(S.Guide) || Li.IsOpen(S.StarDesc) || (mt.Update(t), Li.IsOpen(S.CountDown) || Li.IsOpen(S.Help) || (qi.Update(t), xi.Update(t), $t.Update(t), we.Update(t), Ge.Update(t), Ae.Update(t), Qt.Update(t), Jt.Update(t))))
        }
    }
    ke.isCreateAvatar = !1, ke._t = 0,
        function (t) {
            t[t.Agree = 1] = "Agree", t[t.Privacy = 2] = "Privacy"
        }(rt || (rt = {}));
    class De extends et.agreeViewUI {
        constructor() {
            super(), this.isInit = !1
        }
        initData(t) {
            this.type = t, this.initMenu(), this.refreshUI()
        }
        createChildren() {
            super.createChildren(), this.on("onViewCreated", this, this.onComplete)
        }
        onComplete() {
            this.initMenu(), this.refreshUI()
        }
        initMenu() {
            this.pngBg && (this.isInit || (this.isInit = !0, Li.ScreenFull(this, !0), Li.BtnTap(this, this.pngBg, this.onBtnClose), Li.BtnTap(this, this.btnClose, this.onBtnRefuse), Li.BtnTap(this, this.btnAgree, this.onBtnAgree), this.labTxt.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown), this.labTxt.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMove), this.labTxt.on(Laya.Event.MOUSE_UP, this, this.onMouseUp), this.labTxt.on(Laya.Event.MOUSE_OUT, this, this.onMouseUp)))
        }
        onMouseDown(t) {
            this.prevY = this.labTxt.mouseY
        }
        onMouseMove(t) {
            if (null === this.prevY) return;
            let e = this.labTxt.mouseY;
            this.labTxt.scrollY += this.prevY - e, this.prevY = e
        }
        onMouseUp(t) {
            this.prevY = null
        }
        Open() {
			Plat.I.ShowInter()
            this.type = null, this.prevY = null, this.initMenu(), this.refreshUI()
        }
        Close() {}
        onBtnRefuse() {
            K.Evt(e.AGREE_NO), Li.Close(S.Agree)
        }
        onBtnClose() {
            Li.Close(S.Agree)
        }
        onBtnAgree() {
            K.Evt(e.AGREE_YES), Li.Close(S.Agree)
        }
        refreshUI() {
            this.pngBg && (this.labTitle.text = "", this.labTxt.text = "", this.isInit && this.type && (this.type == rt.Agree ? (this.labTitle.text = "用户服务协议", this.labTxt.text = "欢迎您选择我们公司提供的游戏服务！请您仔细阅读以下全部内容。\n如您不同意本协议及或我们对其的修订版本，请勿注册或使用我们游戏服务。如您通过进入注册程序及或使用我们游戏服务并勾选“我已同意并阅读我们游戏服务协议”，即表示您与我们已达成协议，自愿接受本服务条款的所有内容。此后，您不得以未阅读本服务条款内容作任何形式的抗辩。\n一、【定义】\n1、本协议：指本协议正文、《我们游戏用户服务协议》、游戏规则及期修订版本。上述内容一经正式发布，即为本协议不可分割的组成部分。\n2、您：又称“玩家”或“用户”，指被授权使用我们提供游戏及期服务的自然人。\n3、游戏：指我们提供的游戏软件（包括任何可在移动智能设备及/或电脑终端上，以客户端/微端或网页等形式进行操作的适配版本），以及与该款游戏软件的更新、升级、补丁、资料片等。并可能包括相关的网络服务器、网站（包括但不限于该游戏之官方网站或官方论坛）、电子媒体、印刷材料或电子文档等。\n4、游戏规则：指我们服务担供方不时发布并修订的关于我们游戏的用户守则、玩家条例、游戏公告及通知等内容。\n5、游戏数据：指您在使用我们游戏过程中产生的被服务器记录的各种数据，包括游戏日志、安全日志等数据。\n二、【账号服务】\n1、用户承诺以其真实身份注册我们游戏账号或我们认可的其他合作方账号，并以该等账号（下亦称“用户账号”）接受我们的游戏服务。不得以他人身份资料进行虚假注册。否则，我们有权终止为您提供我们的游戏服务，并有权对您的游戏账号采取包括但不限于警告、限制或禁止使用游戏账号全部或部分功能、删除游戏账号及游戏数据、删除相关信息、游戏账号封禁直至注销的处理打措施，因此造成的一切后果由您自行承担。\n2、账号的使用与保管\n　（1）我们有权审查您注册时所提供的身份证信息是否真实、有效，并应积极地彩取技术与管理等合理措施保障用户帐号的安全、有效；您有义务妥善保管用户帐号及密码，并正确、安全地使用其用户帐号及密码。任何一方未尽上述义务导致用户账号密码遗失、用户帐号被盗等情形而给您或他人的民事权利造成损害的，应当承担由此产生的法律责任。\n　（2）您对所持用户帐号产生的行为依法享有权利和承担责任。\n　（3）一旦发现用户帐号或密码被他人非法使用或有使用异常的情况的，您应及时根据帐号服务提供方公布的处理方式进行处理，并有权及时通知我们采取措施暂停该用户帐号的登录和使用。\n　（4）我们根据用户的通知采取措施暂停用户帐号的登录和使用的，我们应当要求用户提供并核实与其注册身份信息相一致的个人有效身份信息或证明。\n　（5）我们核实用户所提供的个人有效身份信息或证明与所注册的身份信息相一致的，应当及时采取措施暂停用户账号的登录和使用。\n　（6）我们的违反前项（5）的约定，未及时采取措施暂停用户帐号的登录和使用，因此而给用户造成损失的，应当承担相应的法律责任。\n　（7）用户没有提供其个人有效身份信息或证明，或者用户提供的个人有效身份证信息或证明与所注册的身份信息不一致的，我们有权拒绝用户上述请求。\n　（8）用户为了维护其合法权益，向我们提供与所注册的身份信息相一致的个人有效身份信息或证明时，我们应当依法为用户提供账号注册人证明、原始注册信息等必要的协助和支持，并根据需要向有关行政关和司法机关提供相关证据信息资料。\n3、您充分理解并同意，在注册或使用我们游戏服务时，应当具备中华人民共和国法律规定的与其行为相适应的民事行为能力，确保有能力对所使用我们游戏服务的一切行为独立承担责任。我们按照国家相关要求核实您的实名注册信息并判断您是否年满18周岁，从而决定是否对您的游戏账号予以防沉迷限制。\n4、您充分理解并同意，若我们依照相关业务规则限制、冻结或终止您的游戏账号的使用，可能会导致您的游戏账号下游戏数据及相关信息被删除，以及相关权益的丧失，该损失由您自行承担，对此我们不承担任何责任。\n5、您充分理解并同意，非经我们或我们授权开发并正式发布的其它任何由本软件衍生的软件均属非法，下载、安装、使用此类软件，将可能导致不可预知的风险，由此产生的一切法律责任与纠纷一概与我们无关。\n6、您充分理解并同意，我们不支持赠予、借用、租用、转让或售卖我们游戏帐号。如因非我们原因致使用户的我们游戏帐号和/或密码泄漏，进而导致帐号数据被修改，甚至被封禁等行为，或因用户保管、使用、维护不当造成任何损失的，我们无湎承担与此有关的任何责任，并且不提供任何与此相关的协助。\n三、【我们游戏服务】\n1、在您遵守本协议及相关法律法规的前提下，我们给予您一项个人的、不可转让及非排他性的许可，以使用我们游戏服务。您仅可为非商业目的使用我们游戏服务、包括：\n（1）接收、下载、安装、启动、升级、登录、显示、运行和/或截屏我们游戏‘\n（2）创建游戏角色，设置网名，查阅游戏规则、用户个人资料、游戏对局结果，开设游戏房间、设置游戏参数，在游戏中购买、使用游戏道具、游戏装备、游戏币等，使用聊天功能、社交分享功能；\n（3）使用我们游戏支持并允许的其他某一项或几项功能。\n2、您充分理解并同意：游戏装备、游戏币及其他游戏道具等是我们游戏的一部分，我们游戏在此许可您依本协议而获得期使用权。您购买、使用游戏装备、游戏币及其他游戏道具等应遵循本协议、游戏具体规则的要求：同时，游戏装备、游戏币及其他游戏道具等可能受到一定的有效期的限制，即使您在规定的有效期内未使用，除不可抗力或可归责于我们游戏的原因外、一旦有效期届满，将会自动失效。游戏角色、游戏装备、游戏币等数据一旦被分解或删除，则无法恢复。\n3、您充值理解并同意：为更好地向用户提供我们游戏服务，我们有权对游戏中的任何内容或构成元素等作出调整、更新或优化（包括但不限于您购买或正在使用的角色、游戏装备及其他游戏道具的美术设计、性能及相关数值设置等作出调整、更新或优化等）。且如果我们游戏做出相应调整、更新或优化的，您同意不会因此追究我们游戏的任何法律责任。\n4、我们将按照相关法律法规和本协议的规定，采取切实有效的措施保护未成年人在使用我们游戏服务过程中的合法权益，包括可能采取技术措施、禁止未成年人接触不适宜的游戏或者游戏功能、限制未成年人的游戏时间、预防未成年人沉迷网络。作为游戏规则的一部分，我们还将在适当位置发布我们游戏用户指引和警示说明，包括游戏内容介绍、正确使用游戏的方法以及防止危害发生的方法。所有未成年人用户都应在法定监护人的指导下仔细阅读并遵照执行指引和说明；其他玩家在使用我们游戏服务的过程中应避免发布、产生任何有损未成年人身心健康的内容，共同营造健康游戏环境。\n5、您充分理解并同意，由于某些第三方软件（包括但不限于机器人程序软件、挂机程序软件、黑客程序软件、恶意程序软件、游戏增强程序软件等作弊软件或其它任何未经授权的第三方软件）或硬件具有隐蔽或用完后即消失等特点，我们有权根据您的游戏数据和表现异常判断您有无使用未经许可的第三方软件或硬件行为。\n6、您充分理解并同意，由于一个游戏角色的违规行为致使整个游戏账号遭受封禁的行为，我们不承认任何责任也无需赔偿您因此所遭受的任何损失。\n四、【用户行为规范】\n1、用户在使用我们游戏服务过程中，必须遵循与互联网信息发布相关的法律、法规及通常适用的互联网一般道德和礼仪的规范，用户应当自行承担其发布的信息内容所涉及的责任，不得利用我们游戏软件、游戏服务发布、复制发布、传播下列内容：\n　（1）反对中华人民共和国宪法所确定的基本原则的；\n　（2）危害国家安全，泄漏国家秘密，颠覆国家政权，破坏国家统一的；\n　（3）损害国家荣誉和利益的；\n　（4）煽动民族仇恨、民族歧视，破坏民族团结的；\n　（5）破坏国家宗教政策，宣扬邪教和封建迷信的；\n　（6）散布谣言，扰乱社会秩序，破坏社会稳定的；\n　（7）散布、教唆、参与、实施淫秽、色情、赌博、暴力、凶杀、恐怖的；\n　（8）侮辱或者诽谤他人，侵害他人合法权益的；\n　（9）发布任何经我们合理判断为不妥当或者我们未认的软件、文件等在内的主页地址或者链接的；\n　（10）我们游戏帐号名称及游戏中的角色、帮派、俱乐部等名称应当遵守合法、健康的原则，使用包括但不限于涉及种族、宗教、政治、国家领导人、淫秽、低俗、诽谤、恐吓、欺诈性的、攻击性的、侮辱性的、可能引起误会的、违禁药品等内容的名称；\n　（11）通过任何方式、行为散布或发布使用私服、木马、外挂、病毒、代练信息、非官方交易平台信息、赌博（如六合彩）、钓鱼网站、假冒网站、违禁品类信息等内容；\n　（12）散布任何贬损、诋毁、恶意攻击我们的游戏软件、我们的游戏服务、我们及其关联公司、合作方及其联公司，合作方及其员工的内容；\n　（13）有中华人民共和国法律、行政法规禁止的其他内容的。\n2、用户不得通过不正当的手段或其他不公平的手段使用我们的游戏服务：\n　（1）用户不得干扰我们正常地提供软件和服务，恶意破坏服务设施、扰乱正常服务秩序，包括但不限于：攻击、侵入我们的网站服务器或使网站服务器过载；破解、修改我们游戏软件客户端程序；攻击、入侵我们的游戏服务器或游戏服务端程序或使用游戏服务器过载；利用我们游戏软件或者线上游戏系统可能存在的技术缺陷、漏洞或不合理设置而以各种形式为自己及他人牟利（包括但不限于复制游戏虚拟物品等）或者从事其他不正当行为；修改我们游戏软件所使用的任何通讯协议、对动态随机存取的内存（RAM）中资料进行修改或锁定。\n　（2）用户不得利用程序的漏洞和错误（Bug）破坏游戏的正常进行、传播该漏洞或错误（Bug）、不正当获利或达到其他个人目的；\n　（3）用户不得通过异常或者非法的方式登录、我们的游戏、获取非法服务；\n　（4）制作、宣扬、教唆使用、使用妨碍游戏公平性的辅助工具或程序（如外挂）、私服以及木马的相关内容的；\n　（5）盗取他人游戏账号、游戏物品，或虽未主动对与盗取、但获得的账号、物品是他人通过盗取所得；\n　（6）通过虚假承诺、虚构事实、隐瞒真相、故意误导、冒充他人、故意混淆等方式，扰乱游戏秩序，或从他人或游戏系统处骗取的游戏虚拟物品、其他财物、利益、游戏优势、或虽未主动参与欺诈、但获得的财物是他人通过欺诈所得；\n　（7）宣传或进行线下交易：用户只可在游戏内或者通过我们认可的交易平台进行游戏虚拟物品交易。用户不得在任何非我们游戏事先认可的充值平台或交易平台进行充值或进行交易；\n　（8）宣扬、教唆其他玩家退款、发布退款广告，实施代为退款行为的；\n　（9）向游戏管理员索取任何游戏虚拟物品；频繁呼叫游戏管理员或者发送无实质内容的请求，反复向游戏管理员发送已解答或已解决问题的帮助请求，在论坛中刷屏，辱骂或攻击游戏管理员；\n　（10）通过各种方式、行为冒充官方系统（含冒充游戏管理员）向其他用户散布或传播信息的；\n　（11）其他在行业内被广泛认可的不当行为。\n3、用户不得利用我们游戏软件和服务赚取现实世界的金钱或牟取经济利益。不得实施不正常交易行为，包括但不限于：\n　（1）在非我们提供或事先明确认可的交易平台上交易游戏虚拟物品；\n　（2）用户充当游戏虚拟物品交易中介收取中介费等；\n　（3）用户进行游戏虚拟物品的线下交易的；\n　（4）用户在一个服务器上或在多个服务器利用一个以上用户账号和/或游戏角色ID，以营利为目的进行虚拟物品交易的游戏行为（即便是通过我们提供或明确认可的交易平台）；\n　（5）用户在游戏内实施单一或系列产出游戏虚拟物品的玩法，将获得的虚拟物品出售获利的（无论是否在我们提供或明确认可的交易平台）；\n　（6）用户利用不同服务器的虚拟物品价值差异，在不同服务器买卖虚拟物品获利；\n　（7）用户流窜于二个或二个以上游戏新服，以追求以远高或远低于官方指导价的价格出售游戏虚拟物品获利；\n　（8）用户利用我们提供的游戏内交易系统（如有），或在我们提供（如有）的交易平台，或我们允许用户在事先明确认可的交易平台（如有）进行交易时，以远高或远低于官方指导价的价格进行交易，直接或间接破坏游戏的交易秩序的。\n　（9）在未经我们授权或认可的第三方平台进行折扣游戏充值、折扣游戏道具交易或委托未获我们授权或认可的第三方代为充值，或者使用未经我们授权或认可的第三方软件充值、参与非官方认可的充值返利行为。\n用户违反以上条款约定，我们有权采取包括但不限于以下措施：\n　（1）警告；及/或\n　（2）禁言，包括但不限于游戏全区禁言、单区禁言以及公共频道禁言；及/或\n　（3）内容重置，包括但不限于重置或强制修改您提供或上传的非法昵称、图片等非法信息或内容等；及/或\n　（4）减少或限制您的游戏收益，该游戏收益包括但不限于游戏中与游戏角色成长升级相关的所有数据（如经验值、荣誉值、声望值、称号等）的提升以及游戏中的道具、装备、虚拟货币等虚拟物品的获取；及/或\n　（5）删除或注销游戏账号、游戏数据或其他游戏相关信息；及/或\n　（6）限制或禁止您进入游戏中特定场景或使用游戏特定功能；及/或\n　（7）强制退出游戏（即“踢出游戏”），包括但不限于强制退出整个游戏，或游戏中的单局对战，或您正在进行中的其他游戏行为；及/或\n　（8）暂时或永久性地禁止您游戏账号登录我们游戏（以下称“封号”）；及/或\n　（9）暂时或永久性地禁止您违法违规行为涉及的特定终端（包括但不限于PC终端、移动终端等）登录我们游戏；及/或\n　（10）暂停或终止您使用我们及相关服务，或单方通知您终止本协议；及/或\n　（11）就您的违法违规行为提起相应民事诉讼，追究您的侵权、违约或其他民事责任，并要求您赔偿我们因您违法违规行为所受到的损失（包括但不限于我们所受到的全部经济损失、名誉或商誉损失以及我们对外支付的赔偿金、和解费用、律师费用、诉讼费用），或移交有关行政管理机关给予行政处罚，或者移交司法机关追究您的刑事现任；及/或\n　（12）我们通过游戏规则（包括但不限于用户守则、玩家条例、游戏公告、提示及通知）公布的其他处理措施。\n五、【用户信息收集与保护】\n　1、我们要求用户提供与其个人身份有关的信息资料时，应当事先以明确而易见的方式向用户公开其隐私权保护政策和个人信息利用政策，并采取必要措施保护用户的个人信息资料安全。\n　2、在不透露单个用户隐私资料的前提下，我们有权对整个用户数据库进行技术分析并对已进行分析、整理后的用户数据库进行商业上的利用。尽管我们对用户的隐私保护做了极大的努力，但是仍然不能保证现有的安全技术措施使用户的技术信息等不受任何形式的损失。\n　3、您（用户）理解并同意，为了向您提供更好的产品/服务和体验，我们可能会将您的实名认证信息，包括姓名、身份证号，提供给我们委托的第三方服务机构，用于验证您所提供的认证信息的真实性。您理解并同意，我们合作的第三方服务机构可能会将您的信息用于外部合法数据库的比对，以获得验证结果。为了确保您的信息安全，我们会要求第三方合作机构具备足够的安全能力，并提供足够的安全保护水平。未经您的同意，我们不会将您提供的信息用于于经您明确授权的其他用途。\n　4、未经用户许可我们不得向任何第三方公开或共享用户注册资料中的姓名、个人有效身份证件号码、联系方式、家庭住址等个人身份信息，但下列情况除外：\n　（1）用户或用户监护人授权我们批露的；\n　（2）有关法令要求我们批露的；\n　（3）司法机关或行政机关基于法定程序要求我们提供的；\n　（4）我们为了维护自己合法权益而向用户提起诉讼或者仲裁时；\n　（5）应用户监护人的合法要求而提供用户个人身份信息时；\n　（6）维护社会公众的利益。\n六、【免责声明】\n　我们对不可抗力导致的损失不承担责任。本服务条款所指不可抗力包括：天灾、法律法规或政府指令的变更，因网络服务特性而特有的原因，例如境内外基础电信运营商的故障、计算机或互联网相关技术缺陷、互联网覆盖范围限制、计算机病毒、黑客攻击等因素，及其他合法范围内的不能预见、不能避免并不能克服的客观情况。\n七、【服务变更、中断或终止】\n　1、如因系统维护或升级的需要而需暂停网络服务，我们将尽可能事先进行通告。\n　2、用户有发布违法信息、严重违背社会公德、以及其他违反法令禁止性规定的行为时，我们有权立即终止对用户提供服务。\n　3、用户在接受我们服务时实施本协议中有明确约定或属于我们事先明确告知的应被终止服务的禁止性行为的，我们有权终止对用户提供服务。\n　4、用户提供虚假注册身份信息，或实施违反本协议的行为，我们采取中止措施应当通知用户并告知中止期间，中止期间应该是合理的，中止期间届满我们应当及时回复对用户的服务。\n　5、我们根据本条约定中止或终止对用户提供部分或全部服务的，我们应负举证责任。\n　6、除前款所述情形外，我们同时保留在不事先通知用户的情况下随时患上或终止部分或全部网络服务的权利，对于所有服务的中断或终止而造成的任何损失，我们无需对用户或任何第三方承担任何责任。\n八、【帐号注销】\n　1、请您确保，在申请注销前两个星期内，没有进行密码修改、变更绑定信息、游戏充值等行为，方可进入游戏账号注销申请流程，否则游戏账号注销将会失败。\n　2、进入注销游戏账号流程，您需要上传该注销游戏账号绑定的个人身份证件。我们工作人员在10个工作日内进行审核，审核通过后将发送注销成功的短信，至此您的我们游戏账号注销成功。\n　3、您充分理解并同意，注销我们游戏账号，您游戏账号下的一切数据、资源将会被清空（包括但不限于绑定该账号的角色，元宝、钻石、金币、铜钱、卡牌、装备、宝石、宠物等），您因此遭受的损失，我们不承担任何责任。\n　4、您可用同一手机号再次注册我们的游戏账号，但请您注意，新注册的游戏账号不保留注销前游戏账号里的数据，资源等信息。\n　5、您充分理解并同意，为高效利用服务器资源，如果您长期未使用游戏账号登录我们游戏，我们有权视需要，在提前通知的情况下，对该账号及其账号下的游戏数据及相关信息采取删除等处置措施，上述处置可能导致您对该游戏账号下相关权益的丧失，对此我们不承担任何责任。\n九、【管辖与法律适用】\n　1、本协议签订地为中华人民共和国广州市天河区。\n　2、本协议的成立、生效、履行、解释及纠纷解决，适用中华人民共和国大陆地区法律（不包括冲突法）。\n　3、若您和我们之间因本协议发生任何纠纷或争议，首先应协商解决；协商不成的，您同意将纠纷或争议提交至本协议签订地有管辖权的人民法院管辖。\n　4、本协议所有条款的标题仅为阅读方便，本身并无实际涵义，不能作为本协议涵义解释的依据。\n　5、本协议条款不管因何种原因而部分无效，其余条款仍有效，对各方具有约束力。\n十、【通知送达】\n　本协议项下所有的通知均可通过重要页面公告、电子邮件或常规的信息传送等方式进行。该等信息一经我们采服前述任何一种方式公布或发送，即视为送达，对用户产生约束力。若您不接受的，请您书面通知我们，否则视为您已经接受、同意。同时，用户在此同意我们可以向其电子邮箱、电话、等发送商业信息。\n十一、【协议变更】\n　我们有权在必要的时候修改本协议条款，敬请用户定期查询有关内容。用户如继续使用本协议涉及的服务，则视为对修改内容的同意；用户在不同意修改内容的情况下，应当卸载我们游戏、终止本协议并停止使用我们游戏服务。\n十二、【其他规定】\n　根据国家新闻出版总署关于健康游戏的忠告，我们提醒您：抵制不良游戏，拒绝盗版游戏；注意自我保护，谨防受骗上当；适度游戏益脑，沉迷游戏伤身。\n特别声明\n　鉴于我们已经依法明确了上述条款、履行了格式条款制订方的义务，用户点击同意或下一步，将被视为且应当被视为用户已经完全注意并同意了本协议所有条款尤其是提醒用户注意的") : this.type == rt.Privacy && (this.labTitle.text = "隐私保护政策", this.labTxt.text = "欢迎您使用由我们提供的游戏产品及服务！为了向您提供服务、升级产品和提高服务质量，我们可能会收集、使用、存储和共享个人信息。因此在您使用我们的产品和服务前，请您仔细阅读并全面了解本《隐私政策》（下称“本政策”），您可以根据本政策所述管理您的个人信息以及相关授权。如果您是未成年人，您的监护人需要仔细阅读本政策并同意您依照本政策使用我们的产品及服务。\n一、 个人信息\n如信息无法单独或结合其他信息识别到您的个人身份，其不属于法律意义上您的个人信息;当您的信息可以单独或结合其他信息识别到您的个人身份时，或我们将无法与任何特定个人信息建立联系的数据与其他您的个人信息结合使用时，这些信息在结合使用期间，将作为您的个人信息按照本政策处理与保护。\n二、 信息的收集和使用\n在您本游戏及服务的过程中，我们将根据合法、正当、必要的原则，我们会按照如下方式收集您在使用服务时主动提供的或因为使用服务而产生的信息，用以保障产品的正常运行和功能、改善产品和服务以及保障用户使用安全。\n（一） 注册、登录、认证\n　1. 如果您使用第三方账号登录并使用本游戏，您将授权我们获取您在第三方平台注册的公开信息(头像、昵称以及您授权的其他信息)，用以和本游戏绑定并保存您的登录信息，使您可以登录并使用本游戏和相关服务。\n　2. 根据具体使用情况，您可能需要提供您的真实身份信息(真实姓名、身份证号码、电话号码)以完成实名验证。这些信息属于个人敏感信息，您可以拒绝提供，但您将可能无法获得相关服务，但不影响其他功能与服务的正常使用。\n　3. 如果您使用第三方账号登录并使用本游戏，您将授权我们使用您的好友关系、您在游戏中的相关操作信息、游戏信息等信息（具体包括但不限于您的登录状态、对战信息/状态、成就信息等）以及您授权的其他信息，用于向您本人或其他用户或好友展示。我们可能会视游戏产品具体情况为您提供相关权限，以便您可以对是否展示前述相关信息进行相应设置。\n（二） 正常和安全运行\n　1. 为了保障软件与服务的安全、正常运行，我们会收集您的硬件型号、操作系统版本号、国际移动设备识别码、唯一设备标识符、网络设备硬件地址、IP地址、WLAN接入点、MAC地址、应用ID、蓝牙、基站、软件版本号、网络接入方式、类型、状态、网络质量数据、操作、使用、服务日志等信息。如您使用小米、魅族、华为等品牌手机，游戏接入的上述手机厂商PushSDK需要收集手机唯一标识信息（例如IMEI），并可能会收集您的设备屏幕尺寸等参数。\n　2. 为了使您能够在客户端查看您的游戏历史记录，同时用于判断账户安全、进行身份验证、检测及防范安全事件、游戏运营统计分析、客服投诉处理及其他游戏安全分析，并为提升您的游戏体验，我们会收集您的账户信息、设备信息、服务日志信息以及我们关联公司、合作方在获得您授权或依法可以共享的信息、您使用应用程序和服务的信息，例如登录日志、物品日志、游戏对局信息、交友记录、应用程序和服务产生的连接和服务相关的数据信息、网络测试、服务质量、日期、时间和地理位置等。我们可能会集中处理该等信息，或将该等信息同步至游戏后续版本或您正在使用的我们提供的其他产品中。\n　3. 为了预防恶意程序及安全、稳定运营，我们可能会收集安装的应用信息或正在运行的进程信息、应用程序的总体运行、使用情况与频率、应用崩溃情况、总体安装使用情况、性能数据、应用来源。\n　4. 当您使用的游戏产品具有消费功能，我们会收集您的充值记录、消费记录等信息，以便您查询您的交易记录并保护您的虚拟物品安全。\n　5. 我们可能会收集并保存您在游戏中通过文字、图片、语音、视频及其他方式与其他玩家进行的互动，用于过滤色情、暴力、恶意广告等不当内容。\n　6. 根据游戏和服务内容，在您授权同意后，游戏会访问您的麦克风、摄像头，为您提供语音聊天、直播互动等功能。\n　7. 您使用与位置有关的服务时，我们可能会记录您设备所在的位置信息，以便为您提供与附近的游戏玩家互动、个性化定制相关服务。地理位置信息属于敏感信息，拒绝提供该信息只会导致您无法实现与附近的游戏玩家互动、享受个性化定制相关服务，但不影响您正常使用本游戏的其他功能，您也可以随时取消您的地理位置信息授权。\n　8. 当您需要通过话费方式支付购买本游戏服务时，需要发送及接收短信验证码，以实现支付目的。我们特别提醒您应妥善保管您的手机号和验证码，切勿透露给其他人。因您保管不善可能导致账号密码失窃及相关经济损失，责任由您自行承担。\n　9. 在符合相关法律法规的前提下，我们可能会将通过我们的某一项服务所收集的您的个人信息以汇集信息或者个性化的方式，进行分析以了解您的偏好，并可能将您的偏好等相关必要的信息分享给我们内部的其他产品或服务，以便于我们更好地在我们内部的其他产品或服务中向您展示可能感兴趣的内容。\n（三） 根据相关法律法规及国家标准，我们可能会收集、使用您的相关个人信息且无需征求您的授权同意：\n　1. 与国家安全、国防安全等国家利益直接相关的；与公共安全、公共卫生、公共知情等重大公共利益直接相关的；\n　2. 与犯罪侦查、起诉、审判和判决执行等直接相关的；\n　3. 出于维护您或其他个人的生命、财产、声誉等重大合法权益但又很难得到本人同意的；\n　4. 所收集的个人信息是您自行向社会公众公开的；\n　5. 从合法公开披露的信息中收集个人信息的，如合法的新闻报道、政府信息公开等渠道；\n　6. 根据您要求签订和履行合同所必需的；\n　7. 用于维护所提供的产品或服务的安全稳定运行所必需的，例如发现、处置产品或服务的故障；\n　8. 为开展合法的新闻报道所必需的；\n　9.出于公共利益开展统计或学术研究所必要，且其对外提供学术研究或描述的结果时，对结果中所包含的个人信息进行去标识化处理的；\n　10. 法律法规规定的其他情形。\n（四） 当本游戏新功能或服务与我们当前提供的功能或服务与原处理目的无直接或合理关联的时，我们收集、使用您的个人信息时，会再次进行告知，并征得您的同意。如果某一功能或服务未在前述说明中且收集了您的信息，我们会通过页面提示、交互流程、网站公告等方式另行向您说明信息收集的内容、范围和目的，以征得您的同意。\n（五） 如我们停止运营，我们将及时停止收集您个人信息的活动，将停止运营的通知以逐一送达或公告的形式通知您，并对所持有的您的个人信息进行删除或匿名化处理。\n三、 对外提供 \n（一） 基本内容\n　1. 除本政策规定的情形外，我们不会主动共享、提供或转让您的个人信息至第三方，如存在其他共享、提供或转让您的个人信息或您需要我们将您的个人信息共享、提供或转让至第三方情形的，我们会直接或确认该第三方征得您对上述行为的明示同意。\n　2. 除本政策另有规定，或遵循国家法律法规规定或者获得您的同意外，我们不会对外公开披露所收集的个人信息。如必须公开披露时，我们会采用符合行业内标准的安全保护措施，并我们会向您告知此次公开披露的目的、披露信息的类型及可能涉及的敏感信息，并征得您的明示同意。\n　3. 我们不会转让您的个人信息给任何其他第三方，除非征得您的明确同意。\n（二） 共享\n　1. 如向我们的关联方、第三方共享您的个人信息，需经过您的授权同意，除非共享的个人信息是去标识化处理后的信息，且共享第三方无法重新识别此类信息的自然人主体。如果关联方、第三方使用信息的目的超越原授权同意范围，他们需要重新征得您的同意。\n　2. 向关联方、第三方共享的数据必须具有合法正当目的，且共享的数据以达成目的必要为限。\n　3. 我们将审慎评估关联方、第三方数据使用共享信息的目的，对这些合作方的安全保障能力进行综合评估，并要求其遵循合作法律协议。我们会对合作方获取信息的软件工具开发包(SDK)、应用程序接口(API)进行严格的安全监测，以保护数据安全。请您注意：第三方SDK会在您使用本游戏的情况下收集您的部分信息，拒绝提供可能会导致您无法登录本游戏或在使用本游戏过程中受到相应限制。通过本游戏为您提供服务的第三方SDK，会根据其自身隐私政策所述标准存储、使用、处理和保护您的个人信息，本隐私政策不能代替上述第三方的隐私政策。我们会审慎选择接入的第三方SDK并尽力要求第三方SDK为您的个人信息安全提供足够的保护，同时强烈建议您在使用上述第三方SDK服务前先行阅读其相关隐私政策（具体接入第三方SDK目录表详见 https://pro.77pin.net/sdk/android.html），请您审慎了解、确认其隐私保护情况，做出您认为适当的选择，并且您明确知晓，对于您的自由选择出现的任何后果由您本人自行承担，我们不对此承担任何责任。\n　4. 当您在使用本游戏中由我们的关联方、第三方提供的功能，或者当软件服务提供商、智能设备提供商、系统服务提供商与我们联合为您提供服务时，我们会将去标识化后的个人信息与这些关联方、第三方共享，进行综合统计并通过算法做特征与偏好分析趣的信息。\n　5. 我们可能会与委托我们进行推广和广告投放的合作伙伴共享信息，但我们不会共享用于识别您个人身份的信息(姓名、身份证号)，仅会向这些合作伙伴提供不能识别您个人身份的间接画像标签及去标识化或匿名化后的信息，以在不识别您个人身份的前提下，帮助我们分析、衡量广告和相关服务的有效性并提升广告有效触达率。\n　6. 为保障使用安全和分析使用情况，我们和关联公司或服务提供商可能会共享必要的设备、账号及日志信息、产品使用情况(崩溃、闪退)的统计性数据，这些数据难以与其他信息结合识别您的个人身份。\n（三） 根据相关法律法规及国家标准，以下情形中，我们可能会共享、转让、公开披露个人信息且无需事先征得您的授权同意：\n　1. 与国家安全、国防安全直接相关的；\n　2. 与公共安全、公共卫生、重大公共利益直接相关的；\n　3. 与犯罪侦查、起诉、审判和判决执行等直接相关的；\n　4. 出于维护个人信息主体或其他个人的生命、财产等重大合法权益但又很难得到本人同意的；\n　5. 个人信息主体自行向社会公众公开个人信息的；\n　6. 从合法公开披露的信息中收集个人信息的，如合法的新闻报道、政府信息公开等渠道。\n四、 第三方SDK条款\n（一） 我们的产品中可能会包含第三方SDK或其他类似的应用程序，如您在我们平台上使用这类由第三方提供的服务时，您同意将由其直接收集和处理您的信息（如嵌入代码、插件等形式）。\n（二） 这些被嵌入的第三方服务可能会收集您终端用户的个人信息，且该等第三方服务均由相对应的第三方负责运营。前述服务商收集和处理信息等行为遵守其自身的隐私条款，而不是适用于本政策。为保障您的合法权益，如您发现这等SDK或其他类似的应用程序存在风险时，建议您立即终止相关操作并及时与我们取得联系。\n五、 Cookies技术条款\n为提高您的使用体验，我们会使用Cookies或类似技术（例如：webbeacons,logfiles,scripts,eTags）(以下统称“Cookies”技术)。Cookies技术将在您的设备中生成小文件，以便我们提供特定功能。当您选择关闭Cookies技术后，您可能无法体验我们游戏服务的部分功能。\n六、 信息的储存\n（一） 我们依照法律法规的规定，将在境内运营过程中收集和产生的您的个人信息存储于中华人民共和国境内。如果我们向境外传输，我们将会遵循相关国家规定或者征求您的同意。\n（二） 我们会通过安全的方式存储您的信息，包括本地存储（例如利用APP进行数据缓存）、数据库和服务器日志。一般情况下，我们只会在为实现服务目的所必需的时间内或法律法规规定的条件下存储您的个人信息。\n七、 信息的安全\n（一） 我们努力为用户的信息安全提供保障，以防止信息的泄露、丢失、不当使用、未经授权访问和披露等。我们使用多方位的安全保护措施，以确保用户的个人信息保护处于合理的安全水平，包括身份鉴别、数据加密、访问控制、恶意代码防范、安全审计、技术保护手段、管理制度控制、安全体系保障等诸多方面。\n（二） 尽管我们采取上述合理有效措施，并遵守相关法律规定要求的标准，但请您理解，由于技术的限制、可能存在的各种恶意手段、我们可控范围外的系统和通讯网络等方面的问题，我们难以始终保证信息百分之百的安全，但我们将尽力确保您提供给我们的个人信息的安全性，我们也建议您在使用产品和服务时充分注意对个人信息的保护，建议您采取积极措施保护个人信息的安全，包括但不限于使用复杂密码、定期修改密码、不将自己的账号密码及相关个人信息透露给他人。\n（三） 若发生个人信息泄露等安全事件，我们会启动应急预案，阻止安全事件扩大。安全事件发生后，我们会以公告、推送通知或邮件等形式告知您安全事件的基本情况、我们即将或已经采取的处置措施和补救措施，以及我们对您的应对建议。如果难以实现逐一告知，我们将通过公告等方式发布警示\n（四） 若您一旦离开本游戏及相关服务，浏览或使用其他网站、服务及内容资源，无论您登录、浏览或使用上述软件、网站是否基于本游戏的链接或引导，我们将没有能力和义务保护您对该等软件、网站提交的任何个人信息。\n八、 您的权利\n在您使用本游戏和服务期间，我们可能会视游戏产品具体情况为您提供相应的操作设置，以便您可以查询、删除、更正或撤回您的相关个人信息、注销您的账户及撤回您已同意的授权，您可参考本游戏的具体指引进行操作。此外，我们还设置了投诉、请求及举报渠道，您的意见将会得到及时的处理。\n九、 获取权限的说明\n（一） 我们将会使用网络以执行某些功能，包括病毒库更新、垃圾缓存数据库、接受版本更新信息等。\n（二） 我们将使用读取、修改存储设备的内容权限来查看存储在设备上文件并对文件执行操作，从而完成向用户显示有关信息，下载并安装APP以及下载查看相关文件的目的。\n（三） 我们将获取您的手机状态，以让我们识别您的手机设备，从而将用户游戏中的重要数据和设备绑定，防止数据丢失。\n（四） 我们将获取追踪用户安装来源的权限，用于判断用户从何渠道安装了本游戏。\n（五） 我们还可能需要获取其他权限以满足特定需求和功能，如有发生，我们将通过适当的方式通知您并获得您的同意和授权。\n十、 第三方广告伙伴收集的信息\n我们可能会与第三方广告合作伙伴合作，为您提供广告服务。我们的合作伙伴包含但不限于腾讯等。我们的合作伙伴可能会收集硬件和软件信息，例如IP地址、设备ID和类型，广告ID、设备语言、操作系统、时区以及与Cookie或其他可能唯一标识您设备的技术相关联的标识符。前述合作伙伴收集和处理信息等行为遵守其自身的隐私条款，且不适用于本政策。为保障您的合法权益，如您发现存在风险时，建议您立即终止相关操作并及时与我们取得联系。\n十一、 未成年人条款\n（一） 若您是未满18周岁的未成年人，在使用本游戏及相关服务前，应在您的父母或其他监护人监护、指导下共同阅读并同意本政策。\n（二） 我们根据国家相关法律法规的规定保护未成年人的个人信息，只会在法律允许、父母或其他监护人明确同意或保护未成年人所必要的情况下收集、使用、储存、共享、转让或披露未成年人的个人信息;如果我们发现在未事先获得可证实的父母同意的情况下收集了未成年人的个人信息，会设法尽快删除相关信息。\n（三） 若您是未成年人的法定监护人，请您关注您所监护的未成年人是否是在取得您的授权同意之后使用本游戏的服务或提供其个人信息。如果您对您所监护的未成年人的个人信息有疑问，请通过本政策中的联系方式与我们联系。\n（四） 对于可能涉及的不满14周岁的儿童个人信息，我们除遵守本政策关于用户个人信息的约定外，还会严格遵循《儿童个人信息网络保护规定》等法律法规的要求进行存储、使用、披露。\n十二、 政策的变更和通知\n（一） 我们会适时对本政策进行修订、补充或变更，这些修订、补充或变更构成本政策的一部分并具有等同于本政策的效力。未经您明确同意，我们不会削减您依据当前生效的本政策所应享受的权利。\n（二） 本政策更新前，我们会通过游戏页面显著位置提示或向您发送电子邮件等适当方式通知您，以便您及时了解本政策的最新版本。您继续使用本游戏及服务，即表示您同意接受修订后的政策并受之约束，我们将按照更新后的隐私政策收集、处理或使用您的个人信息。\n十三、 联系我们\n如果您对个人信息保护问题有投诉、建议、疑问，您可以将问题发送至【邮箱号：待定】，我们将尽快审核所涉问题，并在验证您的用户身份后的十五个工作日内予以回复。\n\n更新日期：2022年【2】月【8】日\n生效日期：2022年【2】月【8】日")))
        }
    }
    class Ee {
        static Init() {
            Qi.IsTt() && K.On(e.TT_RECORD_SUCC, Ee, Ee.recordSucc)
        }
        static recordSucc() {
            if (!Qi.IsTt()) return;
            let t = Yi.Avatar;
            if (Ft.today == t.recDay) return;
            let e = Q.GetVal("ttDaySoul", 1e3);
            Li.Open(S.Award, [
                [
                    [d.soul, e]
                ], !1, !1
            ]), t.recDay = Ft.today, Xi.SaveApi(!1)
        }
        static IsTodayRecord() {
            if (!Qi.IsTt()) return !1;
            let t = Yi.Avatar;
            return Ft.today == t.recDay
        }
    }
    class Pe extends et.weaponDevItemUI {
        constructor() {
            super(), this.size(80, 80)
        }
        createChildren() {
            super.createChildren(), this.on("onViewCreated", this, this.onComplete)
        }
        onComplete() {
            this.refreshItem()
        }
        setItem(t) {
            this.weaponId = t, this.refreshItem()
        }
        onTapWeapon() {
            this.weaponId && (Fe.AddWeapon(this.weaponId), K.Evt(e.ITEMNUM_CHANGE))
        }
        refreshItem() {
            if (!this.iconWeapon) return;
            if (!this.weaponId) return;
            Li.BtnTap(this, this.iconWeapon, this.onTapWeapon);
            let t = yt.GetCfg(this.weaponId);
            this.iconWeapon.skin = `images/obj/obj${t.itemNo}.png`, this.labLv.text = "Lv1"
        }
    }
    class Ne extends et.weaponBagItemUI {
        constructor() {
            super(), this.size(80, 80)
        }
        createChildren() {
            super.createChildren(), this.on("onViewCreated", this, this.onComplete)
        }
        onComplete() {
            this.refreshItem()
        }
        setItem(t) {
            this.bagIdx = t, this.refreshItem()
        }
        refreshItem() {
            if (!this.iconWeapon) return;
            if (null === this.bagIdx) return;
            if (void 0 === this.bagIdx) return;
            Li.BtnTap(this, this.iconWeapon, this.onTapWeapon);
            let t = Yi.Avatar.weaponList[this.bagIdx],
                e = yt.GetCfg(t);
            this.iconWeapon.skin = `images/obj/obj${e.itemNo}.png`, this.labLv.text = "Lv1"
        }
        onTapWeapon() {
            let t = Yi.Avatar.weaponList[this.bagIdx];
            Li.Open(S.WeaponInfo, [this.bagIdx, t])
        }
    }
    class Me extends et.weaponBagViewUI {
        constructor() {
            super(), this.weaponType = 0, this.weaponQt = 0, this.isInit = !1
        }
        createChildren() {
            super.createChildren(), this.on("onViewCreated", this, this.onComplete)
        }
        onComplete() {
            this.initMenu(), this.refreshUI()
        }
        updateDevItem(t, e) {
            t.setItem(t.dataSource)
        }
        updateWeaponItem(t, e) {
            t.setItem(t.dataSource)
        }
        initMenu() {
            this.pngBg && (this.isInit || (this.isInit = !0, Li.ScreenFull(this, !0), Li.BtnTap(this, this.btnClose, this.onBtnClose), Li.BtnTap(this, this.btnAuto, this.onBtnAuto), Li.BtnTap(this, this.btnQt1, this.onBtnQt1), Li.BtnTap(this, this.btnQt2, this.onBtnQt2), Li.BtnTap(this, this.btnQt3, this.onBtnQt3), Li.BtnTap(this, this.btnQt4, this.onBtnQt4), Li.BtnTap(this, this.btnQt5, this.onBtnQt5), Li.BtnTap(this, this.btnType4, this.onBtnType4), Li.BtnTap(this, this.btnType5, this.onBtnType5), Li.BtnTap(this, this.btnType6, this.onBtnType6), Li.BtnTap(this, this.btnType7, this.onBtnType7), this.weaponList.repeatX = 7, this.weaponList.repeatY = 5, this.weaponList.spaceX = 10, this.weaponList.spaceY = 10, this.weaponList.vScrollBarSkin = "", this.weaponList.itemRender = Ne, this.weaponList.renderHandler = new Laya.Handler(this, this.updateWeaponItem), Qi.IsDev() && (this.debugList.repeatX = 7, this.debugList.repeatY = 3, this.debugList.spaceX = 10, this.debugList.spaceY = 10, this.debugList.vScrollBarSkin = "", this.debugList.itemRender = Pe, this.debugList.renderHandler = new Laya.Handler(this, this.updateDevItem))))
        }
        onBtnQt1() {
            this.weaponQt = 1 == this.weaponQt ? 0 : 1, this.refreshUI()
        }
        onBtnQt2() {
            this.weaponQt = 2 == this.weaponQt ? 0 : 2, this.refreshUI()
        }
        onBtnQt3() {
            this.weaponQt = 3 == this.weaponQt ? 0 : 3, this.refreshUI()
        }
        onBtnQt4() {
            this.weaponQt = 4 == this.weaponQt ? 0 : 4, this.refreshUI()
        }
        onBtnQt5() {
            this.weaponQt = 5 == this.weaponQt ? 0 : 5, this.refreshUI()
        }
        onBtnType4() {
            this.weaponType = 4 == this.weaponType ? 0 : 4, this.refreshUI()
        }
        onBtnType5() {
            this.weaponType = 5 == this.weaponType ? 0 : 5, this.refreshUI()
        }
        onBtnType6() {
            this.weaponType = 6 == this.weaponType ? 0 : 6, this.refreshUI()
        }
        onBtnType7() {
            this.weaponType = 7 == this.weaponType ? 0 : 7, this.refreshUI()
        }
        Open() {
			Plat.I.ShowInter()
            Me.tapBagIdx = null, this.weaponType = 0, this.weaponQt = 0, this.initMenu(), this.refreshUI(), K.On(e.ITEMNUM_CHANGE, this, this.refreshUI)
        }
        Close() {
            this.weaponType = 0, this.weaponQt = 0, K.Off(e.ITEMNUM_CHANGE, this, this.refreshUI)
        }
        refreshUI() {
            if (!this.pngBg) return;
            if (!this.isInit) return;
            this.btnQt1.skin = "images/dev/img_btn_blue.png", this.btnQt2.skin = "images/dev/img_btn_blue.png", this.btnQt3.skin = "images/dev/img_btn_blue.png", this.btnQt4.skin = "images/dev/img_btn_blue.png", this.btnQt5.skin = "images/dev/img_btn_blue.png", this.weaponQt && (this[`btnQt${this.weaponQt}`].skin = "images/dev/img_btn_yellow.png"), this.btnType4.skin = "images/dev/img_btn_blue.png", this.btnType5.skin = "images/dev/img_btn_blue.png", this.btnType6.skin = "images/dev/img_btn_blue.png", this.btnType7.skin = "images/dev/img_btn_blue.png", this.weaponType && (this[`btnType${this.weaponType}`].skin = "images/dev/img_btn_yellow.png");
            let t = Yi.Avatar.weaponList,
                e = [];
            for (let i in t) {
                let s = t[i],
                    n = yt.GetCfg(s);
                if (-1 == [4, 5, 6, 7].indexOf(n.type)) continue;
                if (this.weaponQt && n.quality !== this.weaponQt) continue;
                if (this.weaponType && n.type !== this.weaponType) continue;
                let a = parseInt(i);
                e.push(a)
            }
            this.weaponList.dataSource = e;
            let i = [],
                s = yt.GetDict();
            for (let t in s) {
                let e = s[t]; - 1 != [4, 5, 6, 7].indexOf(e.type) && (this.weaponQt && e.quality !== this.weaponQt || this.weaponType && e.type !== this.weaponType || i.push(e.itemNo))
            }
            this.debugList.dataSource = i
        }
        onBtnAuto() {
            Li.Open(S.WeaponAuto)
        }
        onBtnClose() {
            Li.Close(S.WeaponBag)
        }
    }
    Me.tapBagIdx = null;
    class Fe {
        static Init() {}
        static DeleWeapon(t) {
            Yi.Avatar.weaponList.splice(t, 1), K.Evt(e.ITEMNUM_CHANGE)
        }
        static AddWeapon(t) {
            Yi.Avatar.weaponList.push(t), Xi.SaveApi(!1)
        }
        static WeaponNum(t) {
            let e = Yi.Avatar.weaponList,
                i = 0;
            for (let s in e) {
                e[s] == t && i++
            }
            return i
        }
        static WeaponPut(t, i, s) {
            let n = Yi.Avatar;
            n.weaponDict[t] || (n.weaponDict[t] = {});
            let a = 0;
            null !== s && (a = n.weaponList[s]);
            let l = n.weaponDict[t][i];
            if (l) n.weaponList.push(l), null === s ? (delete n.weaponDict[t][i], Pi.FlyTxt("Success to unload", !1)) : (n.weaponList.splice(s, 1),
				Pi.FlyTxt("Replace completed", !1));
            else {
                if (!a) return void Pi.FlyTxt("Invalid operation");
                n.weaponList.splice(s, 1), Pi.FlyTxt("Finished dressing", !1)
            }
            return a && (n.weaponDict[t][i] = a), Me.tapBagIdx = null, K.Evt(e.ITEMNUM_CHANGE), Xi.SaveApi(!0), !0
        }
        static WeaponId(t, e) {
            let i = Yi.Avatar;
            if (!i.weaponDict[t]) return null;
            let s = 0;
            return s = i.weaponDict[t][e] || 0
        }
        static WeaponUp(t) {
            let i = yt.GetCfg(t);
            if (!i) return void Pi.FlyTxt("Composition logic error");
            if (!i.upTo) return void Pi.FlyTxt("This item cannot be composited");
            let s = Yi.Avatar,
                n = s.weaponList,
                a = [];
            for (let e in n) {
                let i = parseInt(e);
                if (n[e] == t && (a.push(i), a.length >= 2)) break
            }
            if (a.length < 2) return void Pi.FlyTxt("Insufficient amount of equipment to synthesize");
            let [l, o] = a, r = i.upTo;
            return s.weaponList.splice(l, 1), s.weaponList.splice(o, 1), s.weaponList.push(r), Pi.FlyTxt("Successful synthesis", !0),
				Xi.SaveApi(!0), K.Evt(e.ITEMNUM_CHANGE), r
        }
    }
    class Ve {
        static Init() {
            Ve.self || (Ve.self = new Ve, K.On(e.VIDEO_FINISH, Ve, Ve.onAdFinish), K.On(e.VIDEO_HALF, Ve, Ve.onAdHalf))
        }
        static onAdFinish(e, i) {
            Yi.Avatar.video++, e != t.Shop && Xi.VideoReport(e, !0); {
                let t = Yt.GetAddVal(it.DAIMOND_ADD_73);
                t && (Le.AddMoneyByVal(d.diamond, t), Pi.FlyDrop([
                    [d.diamond, t]
                ], null, null, null, null, null, null))
            }
        }
        static onAdHalf(t) {
            Xi.VideoReport(t, !1)
        }
    }
    class Re {
        static Init() {
            (Qi.IsApk1() || Qi.IsDev()) && (Re.sysEnable = Y.isApkReg)
        }
        static IsAdult() {
            if (!Re.sysEnable) return !0;
            let t = Yi.Avatar.idCard;
            if (!t) return !0;
            let e = t.substring(6, 10),
                i = (t.substring(10, 12), t.substring(12, 14), "20" + Ft.today.substring(0, 2));
            return !(parseInt(i) - parseInt(e) <= 16)
        }
        static IsNeedReg() {
            if (!Re.sysEnable) return !1;
            let t = Yi.Avatar;
            return !t.realName || !t.idCard
        }
        static RegDone(t, e) {
            let i = Yi.Avatar;
            if (i.realName = t, i.idCard = e, Xi.SaveApi(!0), !Re.IsAdult()) return Pi.FlyTxt("The current time for minors to prevent addiction"), void Li.Open(S.Reg);
            Li.Close(S.Reg), ke.EnterGame()
        }
    }
    Re.sysEnable = !1;
    class Ue extends et.loadViewUI {//todo:加载界面
        constructor() {
            super(), this.showType = 0, this.proVal = 0, this.agreeEnter = !1, this.tryEd = !1
        }
        createChildren() {
            super.createChildren(), this.on("onViewCreated", this, this.onComplete)
        }
        onComplete() {
            this.resReady = !0, Li.ScreenFull(this);
            let t = this.pngBg.width / this.pngBg.height,
                e = Laya.stage.width / Laya.stage.height;
            t == e ? (this.pngBg.height = Laya.stage.height + 1, 
				this.pngBg.width = Laya.stage.width + 1, this.pngBg.pos(0, 0))
				: t > e ? (this.pngBg.width = Math.floor(375 * Laya.stage.height / 667) + 2,
					this.pngBg.height = Laya.stage.height + 2, 
					this.pngBg.pos(-.5 * Math.floor(this.pngBg.width - Laya.stage.width), 0))
					: (this.pngBg.height = Math.ceil(667 * Laya.stage.width / 375) + 2, 
						this.pngBg.width = Laya.stage.width + 2, 
						this.pngBg.pos(0, -.5 * Math.floor(this.pngBg.height - Laya.stage.height))),
				Li.BtnTap(this, this.btnEnter, this.onBtnEnter),
				Li.BtnTap(this, this.boxAgree, this.onBtnAgree),
				Li.BtnTap(this, this.labAgree, this.onTapAgree),
				Li.BtnTap(this, this.labPrivacy, this.onTapPrivacy),
				this.process.width = 1, this.imgIcon.y = 236 * Laya.stage.height / 1334,
				this.processBg.y = 750 * Laya.stage.height / 1334, this.boxEnter.y = 890 * Laya.stage.height / 1334, 
				this.refreshUI()
            this.boxEnter.visible = false
        }
        onBtnEnter() {
            if (this.processBg.visible = !0, !this.iconAgree.visible) return Qi.IsOppo() && !Y.AutoAgree || (this.agreeEnter = !0), void Li.Open(S.Agree, rt.Agree);
            if (Qi.IsOppo() && !Y.AutoAgree) {
                Yi.Avatar.agree = 1
            }
            this.tryBeginGame()
        }
        tryBeginGame() {
            if (this.proVal < 1) return;
            if (!this.iconAgree.visible) return;
            if (this.tryEd) return;
			
			Plat.I.SendAnay(Plat.Loading_End)
			
            this.tryEd = !0;
            let t = Yi.Avatar;
            if (t) {
                if (Qi.IsOppo() && !Y.AutoAgree && 1 != t.agree) return;
                t.agree = 1, Xi.SaveApi(!0)
            }
            qi.InitBaseLv(), Ee.Init(), Mt.Init(), xi.Init(), Yt.Init(), Le.Init(), Ae.Init(), 
				ve.Init(), we.Init(), Ge.Init(), xe.Init(), Fe.Init(), $t.Init(), Ut.Init(), Vt.Init(),
				Ci.Init(), xt.Init(), Qt.Init(), Lt.Init(), _e.Init(), Ve.Init(), Re.Init(), 
				Re.IsAdult() ? Re.IsNeedReg() ? Li.Open(S.Reg) : ke.EnterGame() : Li.Open(S.Reg)
        }
        onBtnAgree() {
            if (Qi.IsOppo() && !Y.AutoAgree) return this.agreeEnter = !1, void Li.Open(S.Agree, rt.Agree);
            this.agreeEnter = !1, this.iconAgree.visible = !this.iconAgree.visible
        }
        onTapAgree() {
            this.agreeEnter = !1, Li.Open(S.Agree, rt.Agree)
        }
        onTapPrivacy() {
            Li.Open(S.Agree, rt.Privacy)
        }
        initData(t) {
            this.showType = t, this.proVal = 0, this.refreshUI()
        }
        onAgreeYes() {
            this.iconAgree.visible = !0, this.agreeEnter && this.onBtnEnter()
        }
        onAgreeNo() {
            this.iconAgree.visible = !1
        }
        Open() {
            K.On(e.LOAD_PER, this, this.onLoading),
				K.On(e.AGREE_YES, this, this.onAgreeYes), 
				K.On(e.AGREE_NO, this, this.onAgreeNo), this.refreshUI()
        }
        Close() {
            K.Off(e.LOAD_PER, this, this.onLoading), K.Off(e.AGREE_YES, this, this.onAgreeYes), K.Off(e.AGREE_NO, this, this.onAgreeNo), Laya.Loader.clearRes("atlas/load.atlas")
        }
        onLoading(t) {
            if (this.proVal = Math.floor(100 * t) / 100, this.resReady) switch (this.showType) {
                case c.down:
                    this.proVal > 0 ? (this.loading.text = "资源加载中：" + Math.ceil(100 * this.proVal) + "%", this.refreshProcess()) : this.loading.text = "开始加载";
                    break;
                case c.loader:
                    this.proVal > 0 ? (this.loading.text = "资源加载中：" + Math.ceil(100 * this.proVal) + "%", this.refreshProcess()) : this.loading.text = "开始游戏";
                    break;
                case c.clear:
                    this.loading.text = "清理资源..";
                    break;
                case c.unzip:
                    this.loading.text = "解压中..";
                    break;
                case c.login:
                    break;
                case c.welcome:
            }
        }
        refreshProcess() {
            let t = Math.ceil((this.processBg.width - 8) * this.proVal);
            this.process.width = t, Qi.IsOppo() && !Y.AutoAgree || this.proVal >= 1 && setTimeout(function () {
                this.tryBeginGame()
            }.bind(this), 1500)
        }
        refreshUI() {
            if (!this.resReady) return;
            let t = Yi.Avatar;
            switch (t && t.agree ? this.iconAgree.visible = !0 : Y.AutoAgree && (this.iconAgree.visible = !0), this.showType) {
                case c.down:
                    this.proVal > 0 ? (this.loading.text = "资源加载中：" + Math.ceil(100 * this.proVal) + "%", this.refreshProcess()) : this.loading.text = "开始加载";
                    break;
                case c.loader:
                    this.proVal > 0 ? (this.loading.text = "资源加载中：" + Math.ceil(100 * this.proVal) + "%", this.refreshProcess()) : this.loading.text = "开始游戏";
                    break;
                case c.clear:
                    this.loading.text = "清理资源..";
                    break;
                case c.unzip:
                    this.loading.text = "解压中..";
                    break;
                case c.login:
                    break;
                case c.welcome:
            }
        }
    }
    class He extends et.stopViewUI {
        constructor() {
            super()
        }
        createChildren() {
            super.createChildren(), this.on("onViewCreated", this, this.onComplete)
        }
        onComplete() {
            Li.ScreenFull(this), this.btnContinue.y = .58 * Laya.stage.height, this.pngBg.on(Laya.Event.MOUSE_UP, this, this.onContinue), this.btnContinue.on(Laya.Event.MOUSE_UP, this, this.onClearContinue)
        }
        Open() {
			Plat.I.ShowInter()
		}
        Close() {}
        onClearContinue() {
            Ft.Reset(), Li.Close(S.Stop)
        }
        onContinue() {
            Li.Close(S.Stop)
        }
    }
    class $e extends et.winViewUI {//todo:胜利界面
        constructor() {
            super(), this.beyondStar = null, this.passStar = null, this.isInit = !1, this.hasGift = !1
        }
        initData(t) {
            this.beyondStar = t[0], this.passStar = t[1], this.initMenu(), this.refreshUI()
        }
        createChildren() {
            super.createChildren(), this.on("onViewCreated", this, this.onComplete)
        }
        onComplete() {
            this.initMenu(), this.refreshUI()
        }
        autoClose() {}
        winPlayer() {
            setTimeout(function () {
                Hi.SmallBigLoop(this.imgWin, 500, 1.4, 1, 1)
            }.bind(this), 350), this.loopLight()
        }
        Open() {
			Plat.I.GameEnd(true, 1, 0.06);
            K.On(e.VIDEO_FINISH, this, this.onVideoAdDone), this.initMenu(), this.refreshUI()
        }
        loopLight() {
            this.imgRound.rotation = 0;
            Laya.Tween.to(this.imgRound, {
                rotation: 360
            }, 3600, null, Laya.Handler.create(this, function () {
                this.imgRound && !this.imgRound.destroyed && this.loopLight()
            }.bind(this)))
        }
        Close() {
            K.Off(e.VIDEO_FINISH, this, this.onVideoAdDone), this.timerHandle && (clearTimeout(this.timerHandle), this.timerHandle = null), this.beyondStar = null, Vi.Hide_Banner(), Vi.Hide_Block()
        }
        initLabGet() {
            if (!this.pngBg) return;
            this.btnOk.visible = !1, this.labGet.visible = !0;
            let t = 1800,
                e = 1500;
            1 == qi.lvChapter && -1 != [3, 4, 5].indexOf(qi.lvPass) && (t = 800, e = 800), this.labGet.alpha = 0, setTimeout(function () {
                Laya.Tween.to(this.labGet, {
                    alpha: 1
                }, e, null, Laya.Handler.create(this, function () {
                    Li.BtnTap(this, this.labGet, this.onTapClose)
                }))
            }.bind(this), t)
        }
        initMenu() {
            this.pngBg && null !== this.beyondStar && (this.isInit || (this.isInit = !0, Li.ScreenFull(this),
				Li.BtnTap(this, this.btnOk, this.onTapClose),
				Li.BtnTap(this, this.btnVideo, this.onTapVideo),
				this.autoClose(), this.winPlayer(), this.allHeight = 0, this.refreshTop(),
				this.refreshStar(), this.refreshMoney(), this.refreshPatch(), this.refreshBtn(), this.refreshAll(), this.pickSingleAward(1), 1 == qi.lvChapter && -1 != [1, 2].indexOf(qi.lvPass) ? (this.btnVideo.visible = !1, this.btnOk.y = (this.btnVideo.y + this.btnOk.y) / 2) : (this.btnVideo.visible = !0, this.initLabGet()), Vi.Show_Banner(null), Vi.Show_Block(), Li.WxAppIconInit(this, this.appIcon, null, 2e3)))
        }
        refreshUI() {
            this.pngBg
        }
        refreshAll() {
            this.centerBox.height = this.allHeight,
				this.centerBox.y = 250;
        }
        refreshTop() {
            this.boxTop.y = this.allHeight, this.allHeight += this.boxTop.height, this.iconStar1.visible = !1, this.iconStar2.visible = !1, this.iconStar3.visible = !1;
            for (let t = 1; t <= this.passStar; t++) this[`iconStar${t}`].visible = !0
        }
        refreshStar() {
            this.boxStar.visible = !1;
            let t = mt.GetCurrMapCfg();
            if (t.passType != D.Pass) return;
            t.passType == D.Pass && t.lvChapter,
				this.boxStar.visible = !0,
				this.boxStar.y = this.allHeight,
				this.allHeight += this.boxStar.height;
            let e = qi.GetStarInfo(t.passType, t.lvChapter, t.lvPass, !0);
            this.leftStar1.visible = !1,
				this.leftStar2.visible = !1,
				this.leftStar3.visible = !1,
				this.labStar1.visible = !1,
				this.labStar2.visible = !1,
				this.labStar3.visible = !1;
            for (let t in e) {
                let i = parseInt(t);
                this[`leftStar${i}`].visible = !0,
					this[`labStar${i}`].visible = !0,
					this[`labStar${i}`].text = e[t].title + ":" + e[t].desc,
					this[`rightYes${i}`].skin = e[t].succ ? "images/result/yes.png" : "images/result/no.png"
            }
            this.labFlash.text = "+" + xt.flashBack, this.iconFlash.visible = xt.flashBack > 0, 3 == this.passStar && (this.labFlash.text = "+" + xt.threeBack, this.iconFlash.visible = xt.threeBack > 0), 1 == Qi.DictLen(e) && (this.leftStar1.y = this.leftStar1.y + 18, this.labStar1.y = this.labStar1.y + 18)
        }
        refreshMoney() {
            this.boxMoney.y = this.allHeight, this.allHeight += this.boxMoney.height;
            let t = mt.GetCurrMapCfg(),
                e = ye.GetPassDrop(t.id),
                i = e[d.gold] + "";
            Li.fillNum(this.boxGold, "main", "icon_word", i, n.Left), this.imgDiamond.visible = !1;
            let s = e[d.diamond];
            if (s)
                if (3 != this.passStar);
                else if (this.beyondStar) {
                if (s > 0) {
                    this.imgDiamond.visible = !0;
                    let t = s + "";
                    return void Li.fillNum(this.boxDiamond, "main", "icon_word", t, n.Left)
                }
            } else;
            this.imgGold.x = this.imgDiamond.x - 125
        }
        refreshPatch() {
            this.boxPatch.y = this.allHeight, this.allHeight += this.boxPatch.height, this.iconPatch1.visible = !1, this.iconPatch2.visible = !1, this.iconPatch3.visible = !1, this.iconPatch4.visible = !1, this.iconPatch5.visible = !1;
            let t = mt.GetCurrMapCfg(),
                e = ye.GetPassDrop(t.id),
                i = 0;
            for (let t in e) {
                let s = parseInt(t),
                    a = e[t];
                if (s == d.gold);
                else if (s == d.diamond);
                else if (s < 0) {
                    let t = Math.abs(s),
                        e = Wi.GetCfg(t);
                    if (!e || !e.skin) continue;
                    if (this[`iconPatch${i+=1}`].visible = !0, this[`iconPatch${i}`].gray = !0, this[`iconPatch${i}`].skin = `images/obj/sp_${e.id}.png`, Li.fillNum(this[`iconNum${i}`], "main", "icon_word", `x${a}`, n.Left), this.labPatch.text = "3stars  pass will give you a bonus~", 3 != this.passStar) continue;
                    this[`iconPatch${i}`].gray = !1, this.labPatch.text = "Congratulations on getting the 3-star shard~"
                }
            }
            switch (i) {
                case 4:
                    this.iconPatch1.x = 425, this.iconPatch2.x = 325, this.iconPatch3.x = 525, this.iconPatch4.x = 225;
                    break;
                case 3:
                    this.iconPatch2.x = 275, this.iconPatch3.x = 475;
                    break;
                case 2:
                    this.iconPatch1.x = 310, this.iconPatch2.x = 440
            }
        }
        refreshBtn() {
            this.boxBtn.y = this.allHeight, this.allHeight += this.boxBtn.height
        }
        pickSingleAward(t) {
            let e = mt.GetCurrMapCfg(); {
                let t = ye.IsPassDropSolider(e.id);
                if (t) {
                    let e = Wi.GetCfg(t);
                    e && e.skin && ve.AwardSolider(t, !0)
                }
            }
            let i = ye.GetPassDrop(e.id);
            for (let e in i) {
                let s = parseInt(e),
                    n = i[e] * t;
                if (s == d.gold) Le.AddMoneyByVal(s, n);
                else if (s == d.diamond) {
                    if (3 != this.passStar) continue;
                    if (!this.beyondStar) continue;
                    Le.AddMoneyByVal(s, n)
                } else if (s < 0) {
                    let t = Math.abs(s),
                        e = Wi.GetCfg(t);
                    if (!e || !e.skin) continue;
                    if (3 != this.passStar) continue;
                    ve.AddPatch(t, n)
                } else Qi.Log("逻辑错误，没有发放的物品")
            }
            Xi.SaveApi(!0)
        }
        onTapVideo() {
            Vi.VideoAdPlay(Plat.Settlement_reward, t.PassDrop, null)
        }
        onVideoAdDone(e) {
            if (e != t.PassDrop) return;
            if (this.hasGift) return;
            let i = Q.GetVal("moreAwardDouble", 3);
            this.pickSingleAward(i - 1), this.hasGift = !0, this.onTapClose(null, i)
        }
        onTapClose(t, e = 1) {
			Plat.I.GameNext(Plat.Back);
            let i = mt.GetCurrMapCfg();
            if (i) {
                let t = ye.GetPassDrop(i.id);
                for (let i in t) {
                    let s = parseInt(i),
                        n = t[i];
                    if (n *= e, s == d.gold) Pi.FlyDrop([
                        [d.gold, n]
                    ], null, null, null, null, null, null);
                    else if (s == d.diamond) {
                        if (3 != this.passStar) continue;
                        if (!this.beyondStar) continue;
                        Pi.FlyDrop([
                            [d.diamond, n]
                        ], null, null, null, null, null, null)
                    } else if (s < 0) {
                        let t = Math.abs(s),
                            e = Wi.GetCfg(t);
                        if (!e || !e.skin) continue;
                        if (3 != this.passStar) continue;
                        Pi.FlySoliderPatch(e.id, n, n)
                    }
                }
            }
            Li.Close(S.GameEndWin), qi.QuitFight();
            let s = Yi.Avatar;
            1 == qi.lvChapter && 1 == qi.lvPass && 2 == s.passLv 
				? (Plat.I.HideFloat(),qi.isAgain = !1, qi.InitFight(D.Pass, 1, 2), Ui.EnterFight())
				: 1 == qi.lvChapter && 2 == qi.lvPass && 3 == s.passLv 
					? (Plat.I.HideFloat(), Ui.QuitFight(),platform.getInstance().hideBanner())
					: (Ui.QuitFight(), Li.Open(S.Chapter))
        }
    }
    class je extends et.failViewUI {//todo:失败界面
        constructor() {	
            super(), this.isInit = !1, this.entering = !1
        }
        createChildren() {
            super.createChildren(), this.on("onViewCreated", this, this.onComplete)
        }
        onComplete() {
            this.initMenu(), this.reshowMenu()
        }
        onEnable() {
            Laya.timer.loop(4e3, this, this.refreshTeach)
        }
        onDisable() {
            Laya.timer.clear(this, this.refreshTeach)
        }
        initMenu() {
            this.pngBg && (this.isInit || (this.isInit = !0, this.entering = !1, Li.ScreenFull(this), Li.BtnTap(this, this.btnAgain, this.onTapAgain), Li.BtnTap(this, this.btnClose, this.onTapClose), Li.BtnTap(this, this.btnRelive, this.onTapRelive), this.autoClose(), this.losePlayer(), this.refreshTeach(), Vi.Show_Banner(null), Vi.Show_Block(), Li.WxAppIconInit(this, this.appIcon, null, 2e3)))
        }
        refreshTeach() {
            if (this.pngBg && Y.Teach && Y.Teach.length > 0) {
                let t = Math.floor(Math.random() * Y.Teach.length),
                    e = Y.Teach[t];
                this.labTeach.text = e, this.labTeach.visible = !0, Hi.FlashEffect(this.labTeach, 100, 100)
            }
        }
        losePlayer() {}
        Open() {
			Plat.I.GameEnd(false, 1, 0.06);
            this.initMenu(), this.reshowMenu(), K.On(e.VIDEO_FINISH, this, this.autoEnterFight)
        }
        Close() {
            K.Off(e.VIDEO_FINISH, this, this.autoEnterFight), this.timerHandle && (clearTimeout(this.timerHandle), this.timerHandle = null), Vi.Hide_Banner(), Vi.Hide_Block()
        }
        autoEnterFight() {
            setTimeout(function () {
                this.onTapAgain()
            }.bind(this), 200)
        }
        autoClose() {}
        onTapClose() {
			Plat.I.GameNext(Plat.Back)
            Li.Close(S.GameEndFail), qi.QuitFight(), Ui.QuitFight(), Li.Open(S.Chapter)
        }
        onTapAgain() {
            if (!xt.CostFlash(qi.passType, qi.lvChapter, qi.lvPass)) return;
            if (this.entering) return;
            this.entering = !0;
            let t = qi.GetStar(qi.passType, qi.lvChapter, qi.lvPass),
                e = xt.flashCost(qi.lvChapter);
            t >= 3 && (e += xt.flashMore);
            let i = Qi.GlobalPoint(this.btnAgain, null, null);
            Pi.FlashCostFly(6, i.x, i.y, 90), setTimeout(function () {
				Plat.I.SendAnay(Plat.Level_Next, Plat.Replay);
				Plat.I.HideFloat();
				Plat.I.ShowInter(()=>{
					Li.Close(S.GameEndFail), qi.QuitFight(), Ui.EnterFight(),
						qi.isAgain = !0, qi.InitFight(qi.passType, qi.lvChapter, qi.lvPass)
				})
            }.bind(this), 550)
        }
        onTapRelive() {
            qi.ReliveCall()
        }
        reshowMenu() {
            if (!this.pngBg) return;
            let t = qi.ReliveNeed();
            this.reliveBan.visible = qi.passType == D.Pass && qi.playType == P.Base, this.iconAd.visible = !1, this.iconDaimond.visible = !1, null === t ? this.reliveBan.visible = !1 : 0 === t ? this.iconAd.visible = !0 : (this.iconDaimond.visible = !0, this.labDaimond.text = t < 1e3 ? `x${t}` : `${t}`)
        }
    }
    class qe extends Laya.Box {
        constructor(t, e, i, s, n = 1) {
            super(), this.t = 0, this._t = 0, this.skin = e, this.attackDelay = s, this.alpha = n; {
                this.spineLoad = !1;
                let t = `${Y.ResUrl}heros/${this.skin}.sk`;
                this.resUrl = t, this.spineView = new Laya.Skeleton, this.spineView.load(t, Laya.Handler.create(this, this.onSpineLoad, [i])), this.spineView.on(Laya.Event.STOPPED, this, this.onSpinePlay)
            }
            t.addChild(this)
        }
        attackPlay() {
            null !== this.attackDelay && setTimeout(function () {
                this.setAction(g.Attack)
            }.bind(this), this.attackDelay)
        }
        onFrameLoad(t) {
            this.frameView = new Laya.Image, this.addChild(this.frameView), this.setAction(t), Laya.timer.frameLoop(1, this, this.update), this.attackPlay()
        }
        onSpineLoad(t, e) {
            this.spineLoad = !0, this.addChild(this.spineView), this.setAction(t), Laya.timer.frameLoop(1, this, this.update), this.attackPlay()
        }
        onSpinePlay() {
            this.state != g.Wait && this.setAction(g.Wait)
        }
        setAction(t) {
            if (!this._isClear && this.spineLoad && this.state != t && (this.state = t, It.SpineStTO && It.SpineStTO[t])) switch (t) {
                case g.Wait:
                case g.Happy:
                    this.spineView.play(It.SpineStTO[t], !0);
                    break;
                default:
                    this.spineView.play(It.SpineStTO[t], !1, !0)
            }
        }
        update() {
            if (!Qi.IsShow(this)) return void this.clear();
            let t = Laya.timer.currTimer,
                e = t - this._t;
            e > 30 && (e = 30), this.t = t
        }
        clear() {
            this._isClear = !0, this.removeSelf(), this.destroy(!0)
        }
        onDestroy() {
            this.spineView.off(Laya.Event.STOPPED, this, this.onSpinePlay), Laya.timer.clear(this, this.update)
        }
    }! function (t) {
        t[t.base = 0] = "base", t[t.luckyBase = 1] = "luckyBase", t[t.luckyGood = 2] = "luckyGood", t[t.signBase = 3] = "signBase", t[t.signGood = 4] = "signGood", t[t.passWait = 5] = "passWait", t[t.passAward = 6] = "passAward", t[t.itemAward = 7] = "itemAward", t[t.rndPatch = 8] = "rndPatch"
    }(ht || (ht = {}));
    class We extends et.itemUI {
        constructor() {
            super(), this.where = 0, this.other = null, this.inited = !1, this.size(220, 228)
        }
        createChildren() {
            super.createChildren(), this.on("onViewCreated", this, this.onComplete)
        }
        onComplete() {
            this.refreshItem()
        }
        setItemData(t, e = ht.base, i = null) {
            this.where = e, this.data = t, this.other = i, this.refreshItem()
        }
        refreshItem() {
            if (!this.iconImg) return;
            if (!this.data) return;
            if (this.inited) return;
            this.inited = !0;
            let t = `obj${this.data.iconId}`; - 1 != [ht.signBase, ht.signGood].indexOf(this.where) ? (this.iconImg.skin = `images/obj/${t}.png`, X.InitPivot(this.iconImg, "obj", t)) : -1 != [ht.luckyBase, ht.luckyGood].indexOf(this.where) ? (this.iconImg.skin = `images/round/${t}.png`, X.InitPivot(this.iconImg, "round", t)) : ht.rndPatch == this.where ? (this.iconImg.skin = `images/obj/sp_${this.data.itemId}.png`, X.InitPivot(this.iconImg, "obj", t)) : (this.iconImg.skin = `images/obj/${t}.png`, X.InitPivot(this.iconImg, "obj", t)), this.lightBg.visible = !1, this.labDesc.visible = !1, this.luckyDesc.visible = !1, this.passAwardDesc.visible = !1;
            let e = "",
                i = this.data.itemNum + "";
            switch (this.data.itemId == d.gold && this.where != ht.itemAward && (i = Qi.num2Str(this.data.itemNum, !1)), this.where) {
                case ht.rndPatch:
                    this.iconImg.scale(1.4, 1.4), this.lightBg.visible = !0, this.labDesc.visible = !0;
                    let t = Wi.GetCfg(this.data.itemId);
                    this.lightBg.skin = `images/egg/bgLight_${t.quality}.png`, this.lightBg.scale(.62, .62), this.lightBg.alpha = .6, this.labDesc.text = t.name + "x" + i, this.labDesc.color = "#ffffff", this.labDesc.y = 152, this.loopRun();
                    break;
                case ht.base:
                    this.lightBg.visible = !0, this.labDesc.visible = !0, this.labDesc.text = yt.GetCfg(this.data.itemId).title + "x" + i, this.loopRun();
                    break;
                case ht.itemAward:
                    this.lightBg.visible = !0, this.labDesc.visible = !0, this.labDesc.fontSize = 30, this.labDesc.color = "#ffffff", this.labDesc.y = 240, this.labDesc.strokeColor = "#000000", this.labDesc.stroke = 1, this.labDesc.text = yt.GetCfg(this.data.itemId).title + "x" + i, this.loopRun();
                    break;
                case ht.luckyBase:
                    this.luckyDesc.visible = !0, e = i + (e = yt.GetCfg(this.data.itemId).title), this.luckyDesc.text = e, this.luckyDesc.y += 17, this.luckyDesc.color = "#ffffff", this.luckyDesc.strokeColor = "#402110", this.luckyDesc.stroke = 2, this.luckyDesc.fontSize = 26;
                    break;
                case ht.luckyGood:
                    this.lightBg.visible = !0, this.luckyDesc.visible = !0, e = yt.GetCfg(this.data.itemId).title, this.data.itemNum > 1 && (e = i + e), this.luckyDesc.text = e, this.luckyDesc.y += 17, this.luckyDesc.color = "#ffffff", this.luckyDesc.strokeColor = "#402110", this.luckyDesc.stroke = 2, this.luckyDesc.fontSize = 26, this.loopRun();
                    break;
                case ht.signBase:
                    this.iconImg.scale(1.1, 1.1);
                    break;
                case ht.signGood:
                    this.iconImg.scale(1.1, 1.1), this.lightBg.visible = !0, this.lightBg.scale(.6, .6), this.loopRun();
                    break;
                case ht.passWait:
                    this.lightBg.scale(.72, .6), this.lightBg.visible = !0, this.loopRun(), this.passAwardDesc.visible = !0, e = yt.GetCfg(this.data.itemId).title, this.data.itemNum > 1 && (e = "x" + i), this.passAwardDesc.text = e;
                    break;
                case ht.passAward:
                    this.passAwardDesc.visible = !0, e = yt.GetCfg(this.data.itemId).title, this.data.itemNum > 1 && (e = "x" + i), this.passAwardDesc.text = e
            }
            null !== this.other && (this.labDesc.text = `(${this.other})${this.labDesc.text}`, this.luckyDesc.text = `(${this.other})${this.luckyDesc.text}`)
        }
        loopRun() {
            this.lightBg.rotation = 0;
            Laya.Tween.to(this.lightBg, {
                rotation: 360
            }, 3600, null, Laya.Handler.create(this, function () {
                this.where != ht.rndPatch && (Hi.FlashEffect(this.iconImg, 160, 100), Hi.SmallBigLoop(this.iconImg, 200, .92, 1.08, 1)), this.loopRun()
            }.bind(this)))
        }
    }
    class Ye extends et.awardViewUI {
        constructor() {
            super(), this.closeAd = !1, this.isUsed = !1, this.openFrom = null, this.addItems = null, this.adSite = null, this.isInit = !1
        }
        initData(t) {
            this.addItems = t[0], this.closeAd = t[1], this.isUsed = t[2], this.openFrom = t[3], this.adSite = t[4], this.initMenu(), this.refreshUI()
        }
        createChildren() {
            super.createChildren(), this.on("onViewCreated", this, this.onComplete)
        }
        onComplete() {
            this.initMenu(), this.refreshUI()
        }
        initLabGet() {
            this.pngBg && (this.btnGet.visible = !1, this.labGet.visible = !0, this.labGet.alpha = 0, setTimeout(function () {
                Laya.Tween.to(this.labGet, {
                    alpha: 1
                }, 1500, null, Laya.Handler.create(this, function () {
                    Li.BtnTap(this, this.labGet, this.onBtnGet)
                }))
            }.bind(this), 1800))
        }
        initMenu() {
            if (this.pngBg && (null !== this.addItems || null !== Ci.rndPatchSave) && !this.isInit) {
                if (this.isInit = !0, this.btnDouble.visible = !1, this.openFrom == S.Lucky ? (this.btnDouble.visible = !0, null !== this.addItems && this.initLabGet()) : this.openFrom == S.Exchange || (this.btnDouble.visible = !0, null !== this.addItems && this.initLabGet()), Li.ScreenFull(this, !0), Li.BtnTap(this, this.btnDouble, this.onBtnDouble), Li.BtnTap(this, this.btnGet, this.onBtnGet), this.patchBox.visible = !1, this.item1.visible = !1, this.item2.visible = !1, null === this.addItems) {
                    this.btnDouble.visible = !1, this.patchBox.visible = !0, this.patchBox.removeChildren();
                    let t = 0,
                        e = Ci.RndPatch(null, null, !1),
                        i = 4,
                        s = Math.ceil(e.length / i);
                    s >= 4 ? this.patchBox.y -= 20 : 3 == s ? (this.patchBox.y += 32, this.btnGet.y -= 35) : 2 == s ? (this.patchBox.y += 40, this.btnGet.y -= 40) : 1 == s && (this.patchBox.y += 60, this.btnGet.y -= 40), this.topIcon.y -= 60;
                    let n = 130;
                    for (let s in e) {
                        let [a, l] = e[s], o = new We;
                        o.anchorX = .5, o.anchorY = .5, o.setItemData({
                            itemId: a,
                            iconId: a,
                            itemNum: l
                        }, ht.rndPatch), this.patchBox.addChild(o);
                        let r = .5 * (this.patchBox.width - n * (i - 1)) + t % i * n,
                            h = 128 * Math.floor(t / i);
                        o.pos(r, h), t++
                    }
                } else {
                    for (let t in this.addItems) {
                        let e = parseInt(t) + 1,
                            i = this.addItems[t],
                            s = i[0],
                            n = i[1],
                            a = yt.GetCfg(s);
                        a && a.closeVideo && (this.closeAd = !0);
                        let l = new We;
                        l.anchorX = .5, l.anchorY = .5, l.setItemData({
                            itemId: s,
                            iconId: a.imgId,
                            itemNum: n
                        }, ht.itemAward), this[`item${e}`].visible = !0, this[`item${e}`].addChild(l)
                    }
                    1 == this.addItems.length && (this.item1.x = .5 * this.centerBox.width)
                }
                this.imgAd.visible = Qi.IsVideo(), this.imgShare.visible = !Qi.IsVideo(), Vi.Show_Banner(null), Vi.Show_Block()
            }
        }
        Open() {
			Plat.I.ShowInter()
            this.initMenu(), this.refreshUI(), K.On(e.VIDEO_FINISH, this, this.videoAdDone), K.On(e.SHARE_SUCC, this, this.shareSucc)
        }
        Close() {
            Li.Close(S.Lucky), K.Off(e.VIDEO_FINISH, this, this.videoAdDone), K.Off(e.SHARE_SUCC, this, this.shareSucc), null === this.addItems ? Ci.PickPatch(null, null, !1) : this.addItems && this.addItems.length > 0 && this.addItems && this.addItems.length && Pi.FlyDrop(this.addItems), this.addItems = null, this.closeAd = !1, this.openFrom = null, Ci.RndPatchClear(), Vi.Hide_Banner(), Vi.Hide_Block()
        }
        refreshUI() {
            if (!this.pngBg) return;
            Yi.Avatar
        }
        onBtnGet() {
            let t = !1;
            this.openFrom == S.Sign && (t = !0, Li.Close(S.Sign)), this.isUsed || (t = !0, Le.AddMoney(this.addItems)), t && Xi.SaveApi(!0), Li.Close(S.Award), Vi.AddOppoIcon()
        }
        onBtnDouble() {
            let e = this.adSite ? this.adSite : t.ItemDouble;
            Qi.IsVideo() ? Vi.VideoAdPlay("Item Double", e, null) : Mt.ShareDo(l.Double)
        }
        shareSucc(e) {
            e == l.Double && this.videoAdDone(t.ItemDouble)
        }
        videoAdDone(e) {
            if (e && (e == t.ItemDouble || e == this.adSite))
                if (null === this.addItems) Pi.FlyTxt("Logic that should not appear"), Ci.PickPatch(null, null, !1), setTimeout(function () {
                    Xi.SaveApi(!0), Li.Close(S.Award)
                }, 1e3);
                else if (this.addItems && this.addItems.length > 0) {
                Pi.FlyDrop(this.addItems);
                let t = Q.GetVal("moreAwardDouble", 3);
                for (this.openFrom == S.Sign && Li.Close(S.Sign), this.isUsed || Le.AddMoney(this.addItems); --t >= 1;) Le.AddMoney(this.addItems);
                Xi.SaveApi(!0), Li.Close(S.Award)
            }
        }
    }
    class Ke extends et.luckyViewUI {//todo:转盘抽奖界面
        constructor() {
            super(), this.luckNum = null, this.isInit = !1, this.deubgVal = 0
        }
        initData(t) {
            this.initMenu(), this.refreshUI()
        }
        createChildren() {
            super.createChildren(), this.on("onViewCreated", this, this.onComplete)
        }
        onComplete() {
            this.initMenu(), this.refreshUI()
        }
        initMenu() {
            if (!this.pngBg) return;
            if (this.isInit) return;
            this.isInit = !0, Li.ScreenFull(this, !0), Qi.IsAdvScreen() && (this.centerBox.y += 100), Li.BtnTap(this, this.pngBg, this.onBtnClose), Li.BtnTap(this, this.boxLucky, this.onBtnLucky, null), this.imgPoint.on(Laya.Event.MOUSE_DOWN, this, this.onBtnLucky), Qi.IsInDebug() && (Li.BtnTap(this, this.box0, this.onBtnLuckyDebug), Li.BtnTap(this, this.box1, this.onBtnLuckyDebug), Li.BtnTap(this, this.box2, this.onBtnLuckyDebug), Li.BtnTap(this, this.box3, this.onBtnLuckyDebug), Li.BtnTap(this, this.box4, this.onBtnLuckyDebug), Li.BtnTap(this, this.box5, this.onBtnLuckyDebug), Li.BtnTap(this, this.box6, this.onBtnLuckyDebug), Li.BtnTap(this, this.box7, this.onBtnLuckyDebug)), Laya.timer.loop(1e3, this, this.refreshSec), Laya.timer.loop(400, this, this.refreshBtn);
            let t = $t.GetLuckyList(),
                e = 0;
            for (let i in t) {
                let s = t[i],
                    n = s.gift[0][0],
                    a = s.gift[0][1];
                n == d.gold && (a = Le.getPassGold(a));
                let l = s.nice ? ht.luckyGood : ht.luckyBase,
                    o = yt.GetCfg(n),
                    r = new We;
                r.anchorX = .5, r.anchorY = .5, r.setItemData({
                    itemId: n,
                    iconId: o.imgId,
                    itemNum: a
                }, l, null), this[`box${e}`].addChild(r), e++
            }
            this.refreshUI(), Vi.Show_Banner(null)
        }
        Open() {
            this.initMenu(), this.refreshUI(), K.On(e.EGG_BEGIN, this, this.onStartLucky)
        }
        Close() {
            K.Off(e.EGG_BEGIN, this, this.onStartLucky), Laya.timer.clearAll(this), Vi.Hide_Banner()
        }
        onBtnClose() {
            null === this.luckNum ? (Li.Close(S.Lucky),Plat.I.ShowInter()) : Pi.FlyTxt("The wheel is drawing。")
        }
        refreshUI() {
            this.pngBg && (this.labRemain.text = "", 0 != $t.goodLuck || (this.labTips.visible = !1, this.refreshSec()))
        }
        refreshSec() {
            this.labRemain.text = "", $t.lukcyNum > 0 || ($t.reMin ? (this.labRemain.text = "Turn it on again " + $t.reMin + " minutes later", this.labRemain.fontSize = 22, Hi.FlashEffect(this.labRemain, 180, 120)) : Laya.timer.clear(this, this.refreshSec))
        }
        refreshBtn() {
            $t.lukcyNum <= 0 || this.luckNum || Li.IsOpen(S.Award) || 1 == this.btnLucky.scaleX && Hi.SmallBigLoop(this.btnLucky, 750, .9, 1.05, 1)
        }
        onBtnLucky() {
            if (null !== this.luckNum) return;
            if (Ft.doBookMsg(0), $t.CallTheLucky()) {
                Qi.GlobalPoint(this.btnLucky, null, null)
            }
        }
        onBtnLuckyDebug(t) {
            Qi.IsInDebug() && null === this.luckNum && (this.deubgVal = parseInt(t.target.name.substr(-1)), $t.CallTheLucky(this.deubgVal))
        }
        onStartLucky(t) {
            null !== t && (this.luckNum = null, this.StartPlay(t), this.refreshUI())
        }
        StartPlay(t) {
            this.luckNum ? (this.luckNum = null, Laya.timer.clear(this, this.LuckyRoundPlay)) : (this.luckNum = t, this.maxSpeed = 32, this.slowSpeed = 1.2, this.currentSpeed = 1, this.step = 1, Laya.timer.frameLoop(1, this, this.LuckyRoundPlay))
        }
        LuckyRoundPlay() {
            this.boxRound.rotation += this.currentSpeed;
            let t = 270,
                e = 1.58;
            if (Qi.IsInDebug() && (t = 140, e = 2), 1 == this.step) this.currentSpeed < this.maxSpeed ? this.currentSpeed *= e : 1 == this.step && (this.step = 999, setTimeout(function () {
                this.step = 2
            }.bind(this), t));
            else if (2 == this.step)
                if (this.currentSpeed > this.slowSpeed) this.currentSpeed *= .894;
                else {
                    let t = 360 * (($t.luckyBoy - this.luckNum) / $t.luckyBoy);
                    if (this.boxRound.rotation = Qi.realAngle(this.boxRound.rotation), Math.abs(this.boxRound.rotation - t) <= 4) {
                        Laya.timer.clear(this, this.LuckyRoundPlay);
                        let t = this.luckNum;
                        this.luckNum = null;
                        let [e, i] = $t.GetLuckyAward(t);
                        e == d.patch ? Ci.RndPatch(null, i, !0) : Le.AddAward(e, i, !1, S.Lucky), Xi.SaveApi(!0)
                    }
                }
        }
    }
    class Xe extends et.signUI {
        constructor() {
            super(), this.size(208, 229)
        }
        createChildren() {
            super.createChildren(), this.on("onViewCreated", this, this.onComplete)
        }
        onComplete() {
            this.refreshItem()
        }
        setItem(t) {
            this.data = t, this.refreshItem()
        }
        refreshItem() {
            if (!this.labDesc) return;
            if (!this.data) return;
            let t = this.data.award[0],
                e = t[0],
                i = t[1];
            e == d.gold && (i = Le.getPassGold(i));
            let s = yt.GetCfg(e);
            this.labDesc.text = Qi.getStrTxt(this.data.title, i), this.imgDay.skin = "images/sign7/sign_" + this.data.day + ".png";
            let n = Ut.signDay == this.data.day ? ht.signGood : ht.signBase,
                a = new We;
            a.anchorX = .5, a.anchorY = .5, a.setItemData({
                itemId: e,
                iconId: s.imgId,
                itemNum: i
            }, n, null), this.itemBox.removeChildren(), this.itemBox.addChild(a), this.imgSign.visible = Ut.IsSignDay(this.data.day)
        }
    }
    class Je extends et.signViewUI {//todo:签到界面
        constructor() {
            super(), this.isInit = !1
        }
        createChildren() {
            super.createChildren(), this.on("onViewCreated", this, this.onComplete)
        }
        onComplete() {
            this.initMenu(), this.refreshUI()
        }
        updateItem(t, e) {
            t.setItem(t.dataSource)
        }
        initMenu() {
            this.pngBg && (this.isInit || (this.isInit = !0, Li.ScreenFull(this, !0), Qi.IsAdvScreen() && (this.centerBox.y += 100), Li.BtnTap(this, this.pngBg, this.onBtnClose), Li.BtnTap(this, this.btnClose, this.onBtnClose), Li.BtnTap(this, this.btnSign, this.onBtnSign), this.signList.repeatX = 3, this.signList.repeatY = 2, this.signList.spaceX = 20, this.signList.spaceY = 16, this.signList.vScrollBarSkin = "", this.signList.itemRender = Xe, this.signList.renderHandler = new Laya.Handler(this, this.updateItem), Vi.Show_Banner(null)))
        }
        Open() {
            this.initMenu(), this.refreshUI(), K.On(e.VIDEO_FINISH, this, this.refreshUI), K.On(e.DAY_CHANGE, this, this.refreshUI)
		}
        Close() {
            K.Off(e.VIDEO_FINISH, this, this.refreshUI), K.Off(e.DAY_CHANGE, this, this.refreshUI), Vi.Hide_Banner()
        }
        onBtnClose() {
			Plat.I.ShowFloat(0.06)
			Plat.I.ShowInter();
            Li.Close(S.Sign)
        }
        refreshUI() {
            if (!this.pngBg) return;
            if (!this.isInit) return;
            let t = Ut.signWeek,
                e = Rt.GetWeekList(t),
                i = [];
            for (let t in e) {
                let s = e[t];
                s.day < It.SignRound && i.push(s)
            }
            this.signList.dataSource = i, this.imgSign7.visible = Ut.IsSignDay(It.SignRound)
        }
        onBtnSign() {
            Ft.doBookMsg(0), Ut.SignDo(), this.refreshUI()
        }
    }
    class Qe extends et.guideViewUI {
        constructor() {
            super(), this.isInit = !1, this.dragHero = !1, this.handDraging = !1
        }
        initData(t) {
            if (this.guideId = t[0], this.flyTxt = null, this.talkTxt = null, this.guideId == ot.FIGHT_GUIDE_FINISH__8) {
                let t = Qi.GlobalPoint(this.btnFight, 0, 0);
                this.xPos = t.x, this.yPos = t.y, this.w = this.btnFight.width, this.h = this.btnFight.height, this.heroId = null
            } else [this.xPos, this.yPos, this.w, this.h, this.heroId, this.talkTxt, this.flyTxt] = t[1];
            this.initMenu()
        }
        createChildren() {
            super.createChildren(), this.on("onViewCreated", this, this.onComplete)
        }
        onComplete() {
            this.initMenu()
        }
        Open() {
            this.initMenu()
        }
        Close() {
            _e.GuideDo(this.guideId, !1), this.isInit = !1, Laya.timer.clear(this, this.handBigSmall)
        }
        handBigSmall() {
            this.handDraging || Hi.SmallBigLoop(this.imgHand, 850, .9, 1.1, 1, null, function () {
                this.imgAim.visible = !0, Hi.GuideTapAim(this.imgAim, 360)
            }.bind(this))
        }
        onBtnClose() {
            let t = St.GetTalk(this.guideId);
            if (t.must) {
                let e = null !== this.flyTxt ? this.flyTxt : t.fly;
                return e || (e = "Follow the guide"), void Pi.FlyTxt(e)
            }
            _e.GuideDo(this.guideId, !1), Li.Close(S.Guide)
        }
        onHandTap() {
            this.guideId == ot.PAUSE_BUTTON__5 && Li.Close(S.Guide), _e.GuideDo(this.guideId, !0), this.guideId != ot.PAUSE_BUTTON__5 && Li.Close(S.Guide)
        }
        initMenu() {
            if (!this.pngBg) return;
            if (!this.guideId) return;
            if (this.isInit) return;
            this.isInit = !0, Li.ScreenFull(this), this.pngBg.size(this.width, this.height), this.pngBg.alpha = .58, this.pngBg.graphics.drawRect(-2, -2, Laya.stage.width + 4, Laya.stage.height + 4, "#000000"), this.pngBg.cacheAs = "bitmap";
            this.h < 60 && (this.yPos -= Math.ceil(.15 * (60 - this.h)), this.h = 60);
            let t = Math.floor(this.xPos - .5 * this.w),
                e = Math.floor(this.yPos - .5 * this.h),
                i = St.GetTalk(this.guideId);
            this.leftMsg.text = null !== this.talkTxt ? this.talkTxt : i.talk, this.imgAim.pos(this.xPos + i.handX, this.yPos + i.handY), this.imgHand.pos(this.xPos + i.handX, this.yPos + i.handY), this.imgAim.x < .5 * Laya.stage.width ? this.imgGirl.x = 210 : this.imgGirl.x = 0, this.guideId != ot.FIGHT_GUIDE_FINISH__8 && this.imgMsg.pos(i.talkX, this.yPos + i.talkY), Laya.timer.loop(880, this, this.handBigSmall), this.btnFight.visible = !1, this.guideId == ot.FIGHT_GUIDE_FINISH__8 ? (this.btnFight.visible = !0, Li.BtnTap(this, this.btnFight, this.onHandTap), this.pngBg.on(Laya.Event.MOUSE_DOWN, this, this.onBgTap)) : -1 != [ot.JOIN_TEAM_DRAG_11, ot.JOIN_TEAM_DRAG_21].indexOf(this.guideId) || this.pngBg.on(Laya.Event.MOUSE_DOWN, this, this.onBgTap), this.handBigSmall(), this.initGuideBg(t, e), Qi.IsDev() && Yi.St == s.Fight && (this.btnWin.visible = !0, Li.BtnTap(this, this.btnWin, this.onBtnDevWin))
        }
        onBtnDevWin() {
            qi.DevWin()
        }
        initGuideBg(t, e) {
            this.maskSp = new Laya.Sprite, this.maskSp.blendMode = "destination-out", this.pngBg.addChild(this.maskSp);
            let i = t + .5 * this.w,
                s = e + .5 * this.h;
            this.maskSp.graphics.clear();
            let n = St.GetTalk(this.guideId);
            if (2 == n.shape.length) {
                let t = .5 * this.w,
                    e = .5 * this.h;
                n.shape[0] && (t = n.shape[0]), n.shape[1] && (e = n.shape[1]), this.maskSp.graphics.drawRect(this.xPos - t, this.yPos - e, 2 * t, 2 * e, "#000000")
            } else {
                let t = .25 * (this.w + this.h);
                n.shape[0] && (t = n.shape[0]), this.maskSp.graphics.drawCircle(i, s, t, "#ffffff")
            }
            if (-1 != [ot.JOIN_TEAM_DRAG_11, ot.JOIN_TEAM_DRAG_21].indexOf(this.guideId)) {
                let [t, e, i, s, n] = ae.guideDragTo;
                this.maskSp.graphics.drawRect(t, e, i, s, "#000000"), Laya.timer.loop(2400, this, this.handSoliderJoinTeam), this.handSoliderJoinTeam()
            }
        }
        onHeroOutDown(t) {
            let e = t.stageX,
                i = t.stageY;
            this.dragHero = !1;
            let s = Math.floor(this.xPos - .5 * this.w),
                n = Math.floor(this.yPos - .5 * this.h);
            e >= s && i >= n && e <= s + this.w && i <= n + this.h && (this.dragHero = !0, this.imgMsg.visible = !1)
        }
        onHeroDragInDown(t) {
            let e = t.stageX,
                i = t.stageY;
            this.dragHero = !1;
            let s = Math.floor(this.xPos - .5 * this.w),
                n = Math.floor(this.yPos - .5 * this.h);
            e >= s && i >= n && e <= s + this.w && i <= n + this.h && (this.dragHero = !0, this.imgMsg.visible = !1)
        }
        onHeroDragInMove(t) {
            if (!this.dragHero) return;
            let e = this.getStandHero();
            if (!e) return;
            let i = t.stageX,
                s = t.stageY;
            e.pos(i, s)
        }
        onHeroDragInUp(t) {
            if (!this.dragHero) return;
            this.imgMsg.visible = !0;
            let e = this.getStandHero();
            if (!e) return;
            let i = t.stageX,
                s = t.stageY,
                n = .5 * Laya.stage.width - 260,
                a = .32 * Laya.stage.height - 260;
            if (i < n || i > n + 520 || s < a || s > a + 520) {
                let t = Math.floor(this.xPos - .5 * this.w),
                    i = Math.floor(this.yPos - .5 * this.h),
                    s = t + .5 * this.w,
                    n = i + this.h;
                e.pos(s, n)
            } else {
                e.heroId;
                this.onHandTap()
            }
        }
        getStandHero() {
            return null
        }
        handSoliderJoinTeam() {
            let t = Math.floor(this.xPos - .5 * this.w),
                e = Math.floor(this.yPos - .5 * this.h),
                i = t + .5 * this.w,
                s = e + .5 * this.h,
                [n, a, l, o, r] = ae.guideDragTo;
            n = n + .5 * l + r, a += .5 * o;
            let h = St.GetTalk(this.guideId);
            this.imgAim.pos(this.xPos + h.handX, this.yPos + h.handY), this.imgHand.pos(i, s), this.imgHand.scale(1, 1), this.handDraging = !0, Laya.Tween.to(this.imgHand, {
                scaleX: .75,
                scaleY: .75
            }, 320, null, Laya.Handler.create(this, function () {
                Laya.Tween.to(this.imgHand, {
                    x: n,
                    y: a
                }, 1250, null, Laya.Handler.create(this, function () {
                    this.imgAim.pos(n, a), this.handDraging = !1
                }.bind(this)))
            }.bind(this)))
        }
        handHeroDragDown() {
            let t = Math.floor(this.xPos - .5 * this.w),
                e = Math.floor(this.yPos - .5 * this.h),
                i = t + .5 * this.w,
                s = e + .5 * this.h,
                n = .5 * Laya.stage.width,
                a = Laya.stage.height - .5 * Ui.floorH,
                l = St.GetTalk(this.guideId);
            this.imgAim.pos(this.xPos + l.handX, this.yPos + l.handY), this.imgHand.pos(i, s), this.imgHand.scale(1, 1), Laya.Tween.to(this.imgHand, {
                scaleX: .75,
                scaleY: .75
            }, 320, null, Laya.Handler.create(this, function () {
                Laya.Tween.to(this.imgHand, {
                    x: n,
                    y: a
                }, 1250, null, Laya.Handler.create(this, function () {
                    this.imgAim.pos(n, a)
                }.bind(this)))
            }.bind(this)))
        }
        onBgTap(t) {
            let e = t.stageX,
                i = t.stageY,
                s = Math.floor(this.xPos - .5 * this.w),
                n = Math.floor(this.yPos - .5 * this.h);
            e >= s && i >= n && e <= s + this.w && i <= n + this.h ? -1 != [ot.JOIN_TEAM_DRAG_11, ot.JOIN_TEAM_DRAG_21].indexOf(this.guideId) ? Pi.FlyTxt("Drag soldiers to join the battle formation") : this.onHandTap() : this.onBtnClose()
        }
    }
    class ze extends et.infoViewUI {
        constructor() {
            super(...arguments), this.isInit = !1, this.msg = null, this.disClose = !1
        }
        createChildren() {
            super.createChildren(), this.on("onViewCreated", this, this.onComplete)
        }
        onComplete() {
            this.initMenu(), this.reshowMenu()
        }
        initMenu() {
            this.pngBg && this.msg && (this.isInit || (this.isInit = !0, Li.ScreenFull(this), Li.BtnTap(this, this.btnClose, this.onBtnClose), Vi.Show_Banner(null), Xi.VideoReport(0, !1)))
        }
        initData(t) {
            this.msg = t[0], this.disClose = t[1], this.initMenu(), this.reshowMenu()
        }
        Open() {
			Plat.I.ShowInter()
            this.initMenu(), this.reshowMenu()
        }
        Close() {
            this.msg = null, this.disClose = !1, Vi.Hide_Banner()
        }
        reshowMenu() {
            this.pngBg && (this.labMsg.text = this.msg)
        }
        onBtnClose() {
            this.disClose ? Vi.Exit() : Li.Close(S.Info)
        }
    }
    class Ze extends et.killUpUI {
        constructor() {
            super(), this.size(626, 126)
        }
        createChildren() {
            super.createChildren(), this.on("onViewCreated", this, this.onComplete)
        }
        onComplete() {
            this.resReady = !0, this.refreshItem(), Li.BtnTap(this, this.boxUp, this.onBtnUp, null)
        }
        onBtnUp() {
            Qt.__KillUpLv(this.data.id), this.refreshItem()
        }
        setItem(t) {
            this.data = t, this.refreshItem()
        }
        refreshItem() {
            if (!this.resReady || !this.data) return;
            let t = this.data.id,
                e = Qt.__GetKillLv(t),
                i = this.data;
            this.killImg.skin = `images/kill/kill${t}.png`, this.killName.skin = `images/kill/name${t}.png`, this.iconMan.skin = `images/kill/type${t}.png`;
            let s = Qt.__GetKillVal(t),
                a = i.__desc;
            e > 1 && (a += i.__addTxt), a += i.__upTxt;
            let l = Qi.getStrTxt(a, i.__valBase, i.__valAdd, s - i.__valBase, s);
            if (l = Qi.getStrTxt(l, s), this.labDesc.text = l, e > 0 ? (this.boxLv.visible = !0, Li.fillNum(this.boxLv, "font", "icon_word", `L${e}`, n.Left)) : this.boxLv.visible = !1, e >= i.__maxLv) this.imgUp.skin = "images/kill/icon_word_max.png", this.boxUp.y = 68, this.goldBg.visible = !1, this.labUp.y = 24, this.labUp.fontSize = 27, this.labUp.text = "已满级";
            else {
                let s;
                0 == e ? (this.imgUp.skin = "images/kill/button_word_jh.png", this.btnUp.skin = "images/kill/button_green.png", s = i.__openGold) : (this.imgUp.skin = "images/kill/button_word_sj.png", this.btnUp.skin = "images/kill/button_yellow.png", s = Qt.__UpNeedGold(t, e)), this.boxUp.y = 80, this.goldIcon.visible = !0, Li.fillNum(this.boxGold, "font", "icon_word", Qi.num2Str(s), n.Center), Le.HasMoneyByVal(d.gold, s) ? (this.labUp.y = 14, this.labUp.fontSize = 25, this.labUp.text = "升级") : (this.labUp.y = 16, this.labUp.fontSize = 20,
					this.labUp.text = "Lack of gold")
            }
            let o = Qt.__CanUpKill(t, !1),
                r = Qt.__CanActiveKill(t, !1),
                h = o || r;
            Li.FillRedView("main", "red", this.boxRed, h, 0, 0)
        }
    }
    class ti extends et.killViewUI {
        constructor() {
            super(), this.isInit = !1
        }
        createChildren() {
            super.createChildren(), this.on("onViewCreated", this, this.onComplete)
        }
        onComplete() {
            this.initMenu(), this.reshowMenu()
        }
        initMenu() {
            this.pngBg && (this.isInit || (this.isInit = !0, this.killList.repeatX = 1, this.killList.repeatY = 6, this.killList.spaceX = 0, this.killList.spaceY = 7, this.killList.itemRender = Ze, this.killList.renderHandler = new Laya.Handler(this, this.updateKillItem), Li.ScreenFull(this), Li.BtnTap(this, this.btnClose, this.onBtnClose), Li.BtnTap(this, this.pngBg, this.onBtnClose), Li.BtnTap(this, this.guideBox, this.guideKillUp, null)))
        }
        updateKillItem(t, e) {
            t.setItem(t.dataSource)
        }
        Open() {
			Plat.I.ShowInter()
            this.initMenu(), this.reshowMenu()
        }
        Close() {}
        onBtnClose() {
            Li.Close(S.Kill), Xi.SaveApi(!0)
        }
        reshowMenu() {
            if (!this.pngBg) return;
            let t = [],
                e = jt.GetDict();
            for (let i in e) {
                let s = e[i];
                t.push(s)
            }
            this.killList.dataSource = t, this.killList.refresh()
        }
        guideKillUp() {
            Qt.__KillUpLv(1), this.killList.refresh()
        }
    }
    class ei extends Laya.Image {
        constructor() {
            super()
        }
        static ApplyNumItem(t, e, i, s) {
            let n = Laya.Pool.getItemByClass("NumDot", ei);
            return n.Init(t, e, i, s), n
        }
        Init(t, e, i, s) {
            "." == i ? i = "di" : ":" == i ? i = "mh" : "L" == i ? i = "lv" : "M" == i ? i = "max" : "S" == i ? i = "sec" : "/" == i ? i = "xg" : "D" == i ? i = "th" : "G" == i && (i = "guan"), this.skin = "images/" + t + "/" + e + "_" + i + ".png", this.x = s
        }
    }
    ei.count = 0;
    class ii extends Laya.Image {
        constructor() {
            super()
        }
        static ApplyImgItem(t, e) {
            let i = Laya.Pool.getItemByClass("ImgDot", ii);
            return i.Init(t, e), i
        }
        Init(t, e) {
            this.skin = "images/" + t + "/" + e + ".png"
        }
    }
    ii.count = 0;
    class si extends et.weaponInfoViewUI {
        constructor() {
            super(), this.isInit = !1
        }
        initData(t) {
            this.bagIdx = t[0], this.weaponId = t[1], this.initMenu(), this.refreshUI()
        }
        createChildren() {
            super.createChildren(), this.on("onViewCreated", this, this.onComplete)
        }
        onComplete() {
            this.initMenu(), this.refreshUI()
        }
        initMenu() {
            this.pngBg && (this.isInit || (this.isInit = !0, Li.ScreenFull(this, !0), Li.BtnTap(this, this.btnClose, this.onBtnClose), Li.BtnTap(this, this.btnUp, this.onBtnUp), Li.BtnTap(this, this.btnDele, this.onBtnDele)))
        }
        onBtnUp() {
            Fe.WeaponUp(this.weaponId)
        }
        onBtnDele() {
            Fe.DeleWeapon(this.bagIdx), Pi.FlyTxt("Decomposition of success"), Li.Close(S.WeaponInfo)
        }
        Open() {
			Plat.I.ShowInter()
            this.initMenu(), this.refreshUI(), K.On(e.ITEMNUM_CHANGE, this, this.refreshUI)
        }
        Close() {
            K.Off(e.ITEMNUM_CHANGE, this, this.refreshUI)
        }
        onBtnClose() {
            Li.Close(S.WeaponInfo)
        }
        refreshUI() {
            if (!this.pngBg) return;
            if (!this.isInit) return;
            if (!this.weaponId) return;
            let t = yt.GetCfg(this.weaponId);
            if (!t) return void Pi.FlyTxt("The logical error");
            this.boxUp.visible = !1, this.labName.text = t.title, this.iconWeapon.skin = `images/obj/obj${this.weaponId}.png`;
            let e = Fe.WeaponNum(this.weaponId);
            this.labNum.text = `Nums：${e}`, e < 2 || t.upTo && (this.boxUp.visible = !0,
				this.weaponIcon0.skin = `images/obj/obj${this.weaponId}.png`,
				this.weaponIcon1.skin = `images/obj/obj${this.weaponId}.png`,
				this.weaponIcon2.skin = "images/dev/img_btn_blue.png", this.upToIcon.skin = `images/obj/obj${t.upTo}.png`)
        }
    }
    class ni extends et.heroBannerUI {
        constructor() {
            super(), this.isInit = !1
        }
        createChildren() {
            super.createChildren(), this.on("onViewCreated", this, this.onComplete)
        }
        onComplete() {
            this.initMenu(), this.refreshUI()
        }
        initMenu() {
            if (this.pngBg && !this.isInit) {
                if (this.isInit = !0, null === ni.heroId) {
                    let t = Ae.GetHeroList();
                    ni.heroId = t[0]
                }
                pe.ScreenFull(this), Li.BtnTap(this, this.btnUp, this.onBtnUpLevel), Li.BtnTap(this, this.btnBox4, this.onBtnWeaponType4), Li.BtnTap(this, this.btnBox5, this.onBtnWeaponType5), Li.BtnTap(this, this.btnBox6, this.onBtnWeaponType6), Li.BtnTap(this, this.btnBox7, this.onBtnWeaponType7), Qi.IsDev() && Li.BtnTap(this, this.iconPatch, this.onDevAddPatch), this.heroList.repeatX = 5, this.heroList.repeatY = 1, this.heroList.spaceX = 10, this.heroList.hScrollBarSkin = ""
            }
        }
        onBtnWeaponType4() {
            Li.Open(S.WeaponPut, 4)
        }
        onBtnWeaponType5() {
            Li.Open(S.WeaponPut, 5)
        }
        onBtnWeaponType6() {
            Li.Open(S.WeaponPut, 6)
        }
        onBtnWeaponType7() {
            Li.Open(S.WeaponPut, 7)
        }
        onDevAddPatch() {
            let t = Qi.RandomInt(5, 25);
            Ae.AddPatch(ni.heroId, t), this.refreshUI()
        }
        onBtnUpLevel() {
            if (null === ni.heroId) return;
            Ae.GetHeroLv(ni.heroId) ? Ae.UpLevel(ni.heroId) : Ae.ActHero(ni.heroId), this.refreshUI()
        }
        Open() {
			Plat.I.ShowInter()
            K.On(e.ITEMNUM_CHANGE, this, this.refreshUI), K.On(e.HERO_LIST_CHANGE, this, this.refreshUI), this.initMenu(), this.refreshUI()
        }
        Close() {
            K.Off(e.ITEMNUM_CHANGE, this, this.refreshUI), K.Off(e.HERO_LIST_CHANGE, this, this.refreshUI)
        }
        refreshUI() {
            if (!this.pngBg) return;
            if (!this.isInit) return;
            if (!ni.heroId) return;
            let t = U.GetCfg(ni.heroId);
            this.labName.text = t.name, this.iconHero.skin = `images/spineHead/${t.skin}.png`;
            let e = Ae.GetHeroLv(ni.heroId);
            if (e) {
                this.btnBox4.visible = !0, this.btnBox5.visible = !0, this.btnBox6.visible = !0, this.btnBox7.visible = !0;
                let t = Ae.GetHeroQt(ni.heroId),
                    i = It.HeroMaxLv[t];
                this.iconCostGold.visible = !0, this.labLv.text = `Lv${e}/${i}`, this.labLv.color = "#00FF00", this.labQuality.text = It.QTxt[t], e >= i ? t >= 5 ? (this.labUpTxt.text = "已满级", this.iconCostGold.visible = !1) : this.labUpTxt.text = "升阶" : this.labUpTxt.text = "升级", this.labCostGold.text = Ae.UpNeedGold(ni.heroId) + "";
                let s = It.HeroQtPatch[t];
                this.iconCostPatch.visible = e >= i && s, s && (this.labCostPatch.text = s)
            } else {
                this.btnBox4.visible = !1, this.btnBox5.visible = !1, this.btnBox6.visible = !1, this.btnBox7.visible = !1;
                let t = 1;
                this.labUpTxt.text = "激活", this.labLv.text = "未拥有", this.labLv.color = "#ff0000", this.labQuality.text = It.QTxt[t], this.iconCostGold.visible = !1, this.labCostGold.text = Ae.UpNeedGold(ni.heroId) + "", this.iconCostPatch.visible = !0;
                let e = Ae.PatchNum(ni.heroId),
                    i = Ae.ActNeedPatch(t);
                this.labCostPatch.text = `${e}/${i}`
            }
            this.labSkillName.text = t.skillName, this.labSkilDesc.text = t.skillDesc, this.labSpecial.text = t.specialDesc, this.labPatch.text = Ae.PatchNum(ni.heroId) + "", this.labRange.text = "攻击范围:" + U.rangeVal(ni.heroId, e), this.labAtk.text = "物理伤害:" + U.atkVal(ni.heroId, e), this.labMagic.text = "魔法伤害:" + U.magicVal(ni.heroId, e), this.labAtkSpeed.text = "攻击速度:" + U.atkSpeedVal(ni.heroId, e), this.labHeroMove.text = "移动速度:" + U.moveVal(ni.heroId, e), this.btnBox4.skin = "images/dev/img_btn_yellow.png", this.btnBox5.skin = "images/dev/img_btn_yellow.png", this.btnBox6.skin = "images/dev/img_btn_yellow.png", this.btnBox7.skin = "images/dev/img_btn_blue.png";
            let i = Fe.WeaponId(ni.heroId, 4),
                s = Fe.WeaponId(ni.heroId, 5),
                n = Fe.WeaponId(ni.heroId, 6),
                a = Fe.WeaponId(ni.heroId, 7);
            i && (this.btnBox4.skin = `images/obj/obj${i}.png`), s && (this.btnBox5.skin = `images/obj/obj${s}.png`), n && (this.btnBox6.skin = `images/obj/obj${n}.png`), a && (this.btnBox7.skin = `images/obj/obj${a}.png`);
            let l = Ae.GetHeroList(),
                o = Ae.PatchList();
            for (let t in o) {
                let e = o[t]; - 1 == l.indexOf(e) && l.push(e)
            }
            this.heroList.dataSource = l
        }
    }
    ni.heroId = null, ni.tapNo = null;
    class ai extends et.weaponPutItemUI {
        constructor() {
            super(), this.size(114, 117)
        }
        createChildren() {
            super.createChildren(), this.on("onViewCreated", this, this.onComplete)
        }
        onComplete() {
            this.refreshItem()
        }
        setItem(t) {
            this.bagIdx = t, this.refreshItem()
        }
        onTapWeapon() {
            li.bagIdx = li.bagIdx == this.bagIdx ? null : this.bagIdx, K.Evt(e.TAP_BAGPUT_CHANGE)
        }
        refreshItem() {
            if (!this.iconWeapon) return;
            if (null === this.bagIdx) return;
            if (void 0 === this.bagIdx) return;
            Li.BtnTap(this, this.iconWeapon, this.onTapWeapon);
            let t = Yi.Avatar.weaponList[this.bagIdx],
                e = yt.GetCfg(t);
            this.iconBg.skin = `images/heroBanner/icon_wpl_${e.quality}.png`, this.iconWeapon.skin = `images/obj/obj${e.itemNo}.png`, this.iconOn.visible = !1, this.labLv.text = "Lv1"
        }
    }
    class li extends et.weaponPutViewUI {
        constructor() {
            super(), this.weaponQt = 0, this.isInit = !1
        }
        initData(t) {
            this.weaponType = t, this.initMenu(), this.refreshUI()
        }
        createChildren() {
            super.createChildren(), this.on("onViewCreated", this, this.onComplete)
        }
        onComplete() {
            this.initMenu(), this.refreshUI()
        }
        updateWeaponItem(t, e) {
            t.setItem(t.dataSource)
        }
        initMenu() {
            this.pngBg && (this.isInit || (this.isInit = !0, Li.ScreenFull(this, !0), Li.BtnTap(this, this.btnClose, this.onBtnClose), Li.BtnTap(this, this.btnQt1, this.onBtnQt1), Li.BtnTap(this, this.btnQt2, this.onBtnQt2), Li.BtnTap(this, this.btnQt3, this.onBtnQt3), Li.BtnTap(this, this.btnQt4, this.onBtnQt4), Li.BtnTap(this, this.btnQt5, this.onBtnQt5), Li.BtnTap(this, this.btnPut, this.onBtnPut), this.weaponList.repeatX = 5, this.weaponList.repeatY = 3, this.weaponList.spaceX = 14, this.weaponList.spaceY = 14, this.weaponList.vScrollBarSkin = "", this.weaponList.itemRender = ai, this.weaponList.renderHandler = new Laya.Handler(this, this.updateWeaponItem)))
        }
        onBtnQt1() {
            this.weaponQt = 1 == this.weaponQt ? 0 : 1, this.refreshUI()
        }
        onBtnQt2() {
            this.weaponQt = 2 == this.weaponQt ? 0 : 2, this.refreshUI()
        }
        onBtnQt3() {
            this.weaponQt = 3 == this.weaponQt ? 0 : 3, this.refreshUI()
        }
        onBtnQt4() {
            this.weaponQt = 4 == this.weaponQt ? 0 : 4, this.refreshUI()
        }
        onBtnQt5() {
            this.weaponQt = 5 == this.weaponQt ? 0 : 5, this.refreshUI()
        }
        onBtnPut() {
            Fe.WeaponPut(ni.heroId, this.weaponType, li.bagIdx) && (li.bagIdx = null), this.refreshUI()
        }
        Open() {
			Plat.I.ShowInter()
            this.weaponQt = 0, li.bagIdx = null, K.On(e.TAP_BAGPUT_CHANGE, this, this.refreshUI), this.initMenu(), this.refreshUI()
        }
        Close() {
            this.weaponQt = 0, li.bagIdx = null, K.Off(e.TAP_BAGPUT_CHANGE, this, this.refreshUI)
        }
        onBtnClose() {
            Li.Close(S.WeaponPut)
        }
        refreshUI() {
            if (!this.pngBg) return;
            if (!this.isInit) return;
            if (!this.weaponType) return;
            let t = Fe.WeaponId(ni.heroId, this.weaponType),
                e = Yi.Avatar.weaponList,
                i = e[li.bagIdx] ? e[li.bagIdx] : 0;
            if (this.iconOn.visible = !1, this.btnPut.visible = !0, t) {
                let e = yt.GetCfg(t);
                if (!e) return void Pi.FlyTxt("The logical error");
                if (this.iconOn.visible = !0, this.imgTopBanner.skin = `images/heroBanner/icon_tc_pzbg_${e.quality}.png`, this.imgIconQuality.skin = `images/heroBanner/icon_tc_pzword_${e.quality}.png`, i) {
                    let t = yt.GetCfg(i);
                    this.labNum.text = t.title, this.iconWeapon.skin = `images/obj/obj${i}.png`, this.imgPut.skin = "images/heroBanner/button_word_zb.png", this.labDesc.text = "此处为装备描述文字"
                } else this.labName.text = e.title, this.iconWeapon.skin = `images/obj/obj${t}.png`, this.imgPut.skin = "images/heroBanner/button_word_xx.png", this.labDesc.text = "此处为装备描述文字"
            } else if (i) {
                let t = yt.GetCfg(i);
                this.labName.text = t.title, this.iconWeapon.skin = `images/obj/obj${i}.png`, this.imgPut.skin = "images/heroBanner/button_word_zb.png", this.labDesc.text = "点击装备穿戴此装备"
            } else this.btnPut.visible = !1, this.labName.text = It.WeaponType[this.weaponType], this.iconWeapon.skin = "images/dev/img_btn_yellow.png", this.imgPut.skin = "images/heroBanner/button_word_zb.png", this.labDesc.text = "选择下方装备后，再点击穿戴按钮";
            let s = [];
            for (let t in e) {
                let i = e[t],
                    n = yt.GetCfg(i);
                if (-1 == [4, 5, 6, 7].indexOf(n.type)) continue;
                if (this.weaponQt && n.quality !== this.weaponQt) continue;
                if (this.weaponType && n.type !== this.weaponType) continue;
                let a = parseInt(t);
                s.push(a)
            }
            this.weaponList.dataSource = s
        }
    }
    class oi extends et.weaponAutoItemUI {
        constructor() {
            super(), this.size(650, 120)
        }
        createChildren() {
            super.createChildren(), this.on("onViewCreated", this, this.onComplete)
        }
        onComplete() {
            this.refreshItem()
        }
        setItem(t) {
            this.data = t, this.refreshItem()
        }
        onBtnUp() {
            let t = Fe.WeaponUp(this.data.weaponId);
            t && K.Evt(e.WEAPON_UP_SUCC, [this.data.weaponId, t])
        }
        refreshItem() {
            if (!this.weaponIcon0) return;
            if (!this.data) return;
            Li.BtnTap(this, this.btnUp, this.onBtnUp);
            let t = this.data.weaponId,
                e = Fe.WeaponNum(this.data.weaponId);
            this.weaponIcon0.skin = `images/obj/obj${t}.png`, this.weaponIcon1.skin = `images/obj/obj${t}.png`;
            let i = yt.GetCfg(t);
            this.upToIcon.skin = `images/obj/obj${i.upTo}.png`;
            let s = Math.floor(e / 2);
            s >= 1 ? (this.btnUp.gray = !1, this.labUp.text = `合成(${s})`) : (this.btnUp.gray = !0, this.labUp.text = "合成")
        }
    }
    class ri extends et.weaponAutoViewUI {
        constructor() {
            super(), this.autoWaitList = null, this.isInit = !1
        }
        createChildren() {
            super.createChildren(), this.on("onViewCreated", this, this.onComplete)
        }
        onComplete() {
            this.initMenu(), this.refreshUI()
        }
        updateWeaponItem(t, e) {
            t.setItem(t.dataSource)
        }
        initMenu() {
            this.pngBg && (this.isInit || (this.isInit = !0, Li.ScreenFull(this, !0), Li.BtnTap(this, this.btnClose, this.onBtnClose), this.autoList.repeatX = 1, this.autoList.repeatY = 7, this.autoList.spaceY = 10, this.autoList.vScrollBarSkin = "", this.autoList.itemRender = oi, this.autoList.renderHandler = new Laya.Handler(this, this.updateWeaponItem)))
        }
        Open() {
			Plat.I.ShowInter()
            this.initMenu(), this.refreshUI(), K.On(e.WEAPON_UP_SUCC, this, this.onAutoSucc)
        }
        Close() {
            K.Off(e.WEAPON_UP_SUCC, this, this.onAutoSucc)
        }
        onBtnClose() {
            Li.Close(S.WeaponAuto)
        }
        onAutoSucc(t, e) {
            for (let e in this.autoWaitList) {
                if (this.autoWaitList[e].weaponId == t) {
                    this.autoWaitList[e].num -= 2;
                    break
                }
            }
            if (yt.GetCfg(e).upTo) {
                let t = !0;
                for (let i in this.autoWaitList) {
                    if (this.autoWaitList[i].weaponId == e) {
                        this.autoWaitList[i].num += 1, t = !1;
                        break
                    }
                }
                t && Fe.WeaponNum(e) >= 2 && this.autoWaitList.push({
                    weaponId: e,
                    num: 1
                })
            }
            this.refreshUI()
        }
        refreshUI() {
            if (!this.pngBg) return;
            if (!this.isInit) return;
            if (null === this.autoWaitList) {
                let t = Yi.Avatar.weaponList,
                    e = {};
                for (let i in t) {
                    let s = t[i];
                    yt.GetCfg(s).upTo && (e[s] || (e[s] = 0), e[s]++)
                }
                this.autoWaitList = [];
                for (let t in e) {
                    let i = parseInt(t),
                        s = e[t];
                    s < 2 || this.autoWaitList.push({
                        weaponId: i,
                        num: s
                    })
                }
            }
            let t = [];
            for (let e in this.autoWaitList) {
                let i = this.autoWaitList[e];
                t.push({
                    weaponId: i.weaponId,
                    num: i.num
                })
            }
            this.autoList.dataSource = t
        }
    }
    class hi extends et.orderViewUI {
        constructor() {
            super(), this.isInit = !1, this.entering = !1, this.entityDict = {}
        }
        initData(t) {
            this.passType = t[0], this.lvChapter = t[1], this.lvPass = t[2], this.initMenu(), this.refreshUI()
        }
        createChildren() {
            super.createChildren(), this.on("onViewCreated", this, this.onComplete)
        }
        onComplete() {
            this.initMenu(), this.refreshUI()
        }
        initMenu() {
            if (!this.pngBg) return;
            if (!this.lvPass) return;
            if (this.isInit) return;
            this.isInit = !0, this.entering = !1, Li.ScreenFull(this, !0), Qi.IsAdvScreen() && (this.centerBox.y += 120);
            let t = qi.GetStar(this.passType, this.lvChapter, this.lvPass),
                e = xt.flashCost(this.lvChapter);
            t >= 3 && (e += xt.flashMore);
            let i = Yi.Avatar;
            this.labFlash.text = `-${e}/${i.flashV}`, Li.BtnTap(this, this.btnClose, this.onBtnClose), Li.BtnTap(this, this.btnFight, this.onBtnFight), Li.BtnTap(this, this.iconTeam0, this.onTapTeam0), Li.BtnTap(this, this.iconTeam1, this.onTapTeam1), Li.BtnTap(this, this.iconTeam2, this.onTapTeam2), Li.BtnTap(this, this.iconTeam3, this.onTapTeam3), Li.BtnTap(this, this.iconTeam4, this.onTapTeam4)
        }
        onTapTeam0() {
            this.refreshTeam(0)
        }
        onTapTeam1() {
            this.refreshTeam(1)
        }
        onTapTeam2() {
            this.refreshTeam(2)
        }
        onTapTeam3() {
            this.refreshTeam(3)
        }
        onTapTeam4() {
            this.refreshTeam(4)
        }
        refreshTeam(t = null) {
            if (t > ve.TeamNum() - 1) return void Pi.FlyTxt("Formation not unlocked");
            let e = ve.TeamInfo(t);
            !e || e.length <= 0 ? Pi.FlyTxt("This formation is empty") : (qi.tdTeamNo = t, this.refreshSolider())
        }
        Open() {
            K.On(e.SOLIDER_UPLEVEL, this, this.refreshSolider), K.On(e.VIDEO_FINISH, this, this.autoEnterFight), this.initMenu(), this.refreshUI()
        }
        Close() {
            K.Off(e.SOLIDER_UPLEVEL, this, this.refreshSolider), K.Off(e.VIDEO_FINISH, this, this.autoEnterFight)
        }
        autoEnterFight() {
            setTimeout(function () {
                this.onBtnFight()
            }.bind(this), 200)
        }
        onBtnClose() {
            Li.Close(S.Order)
        }
        onBtnFight() {
            if (!this.lvPass) return;
            if (_e.GuideDo(ot.FIGHT_PASS1_5, !1), 1 == this.lvChapter && 1 == this.lvPass) {
                if (!ve.SoliderInTeam(qi.tdTeamNo, 1)) return void Pi.FlyTxt("Novice guide level, need to battle soldier: archer");
                if (!ve.SoliderInTeam(qi.tdTeamNo, 22)) return void Pi.FlyTxt("Novice guide level, need to fight soldier: darts soldier")
            }
            if (this.entering) return;
            if (!xt.CostFlash(this.passType, this.lvChapter, this.lvPass)) return;
            this.entering = !0;
            let t = qi.GetStar(this.passType, this.lvChapter, this.lvPass),
                e = xt.flashCost(this.lvChapter);
            t >= 3 && (e += xt.flashMore);
            let i = Qi.GlobalPoint(this.iconFlash, null, null);
            Pi.FlashCostFly(6, i.x, i.y, 90), setTimeout(function () {
				Plat.I.SendAnay(Plat.Level_Begin, Yi.Avatar.passLv)
                qi.isAgain = !1, qi.InitFight(this.passType, this.lvChapter, this.lvPass), 
					Ui.EnterFight(), Li.Close(S.Order), Li.Close(S.ChapterMap)
            }.bind(this), 550)
        }
        refreshUI() {
            this.pngBg && this.lvPass && this.isInit && (this.refreshLv(), this.refreshSolider(), this.refreshStar(), this.refreshPatch(), this.hideStar())
        }
        hideStar() {
            this.starBox.visible && (this.passType == D.Pass && this.lvChapter > 1 || (this.starBox.visible = !1, this.heroTapBox.y -= this.starBox.height, this.imgBg.height -= this.starBox.height, this.centerBox.y += .43 * this.starBox.height))
        }
        refreshLv() {
            let t = q.GetPassCfg(this.passType, this.lvChapter, this.lvPass);
            this.labPass.bold = !1, t.passType == D.Pass ? (this.labPass.text = `Level ${t.id}`, 
				this.labPass.bold = !0) : t.passType == D.Daimond ? this.labPass.text = "Diamond dungeon"
				: t.passType == D.Gold ? this.labPass.text = "Gold dungeon"
					: t.passType == D.Patch ? this.labPass.text = "Fragments dungeon"
						: t.passType == D.Talent && (this.labPass.text = "Talent dungeon");
            let e = null;
            if (this.iconBoss.visible = !1, this.labBoss.visible = !1, t.bossId && (e = t.bossId), null !== e) {
                this.iconBoss.visible = !0, this.labBoss.visible = !0;
                let t = H.GetCfg(e);
                this.iconBoss.skin = `images/boss/${t.skin}_1.png`, X.InitPivot(this.iconBoss, "boss", t.skin + "_1")
            } else t.bronBlood && (e = 1001, this.iconBoss.visible = !0, this.iconBoss.skin = "images/stand/stand1001_1.png", X.InitPivot(this.iconBoss, "stand", "stand1001_1"), this.iconBoss.scale(1.26, 1.26));
            let i = 0,
                s = [];
            for (let n = 1; n <= 20; n++)
                if (t[`monsterList${n}`] && t[`monsterList${n}`].length > 0) {
                    for (let i in t[`monsterList${n}`]) {
                        let a = t[`monsterList${n}`][i];
                        if (-1 === s.indexOf(a.monsterId)) {
                            let t = H.GetCfg(a.monsterId);
                            if (9 === t.quality) continue;
                            if (t.id == e) continue;
                            s.push(a.monsterId)
                        }
                    }
                    i++
                } let n = this.imgTopBanner.width - 100;
            for (let t = 0; t <= 13; t++)
                if (this[`iconSolider${t}`].visible = !1, s && s[t]) {
                    let i = H.GetCfg(s[t]);
                    this[`iconSolider${t}`].visible = !0, -1 != [M.Boss, M.Gold, M.Daimond].indexOf(i.quality) ? (this[`iconSolider${t}`].skin = `images/boss/${i.skin}_1.png`, X.InitPivot(this[`iconSolider${t}`], "boss", i.skin + "_1")) : (this[`iconSolider${t}`].skin = `images/fight/${i.skin}_1.png`, X.InitPivot(this[`iconSolider${t}`], "fight", i.skin + "_1")), t <= 6 && (this[`iconSolider${t}`].y = s.length <= 7 ? 290 : 215);
                    let a = t % 7;
                    if (null === e) {
                        let e = 100;
                        this[`iconSolider${t}`].x = e + a * n / 7
                    }
                } switch (this.labLot.text = `${i}`, t.playType) {
                case P.Base:
                    this.labType.text = "Normal levels";
                    break;
                case P.Boss:
                    this.labType.text = "Boss levels";
                    break;
                case P.Loop:
                    this.labType.text = "Cycle time";
                    break;
                case P.Bron:
                    this.labType.text = "Monster lair";
                    break;
                case P.Line:
                    this.labType.text = "Several routes"
            }
            this.labDifficulty.text = "general", this.labDifferent.text = "Gallop, meat shield"
        }
        refreshSolider() {
            let t = ve.TeamNum();
            for (let e = 0; e <= 4; e++) this[`iconTeam${e}`].skin = "images/solider/button_bd_bq2.png", this[`iconLock${e}`].visible = e > t - 1, this[`iconNum${e}`].visible = e <= t - 1, this[`boxOn${e}`].visible = !1;
            this[`iconTeam${qi.tdTeamNo}`].skin = "images/solider/button_bd_bq1.png";
            let e = ve.TeamInfo(qi.tdTeamNo);
            for (let t in e) {
                let i = parseInt(t),
                    s = e[i],
                    n = pe.AddTeamSolider(this[`boxOn${i}`], s);
                this.entityDict[s] = n, this[`boxOn${i}`].visible = !0
            }
        }
        refreshStar() {
            this.iconStar1.visible = !1, this.iconStar2.visible = !1, this.iconStar3.visible = !1, this.labStar1.visible = !1, this.labStar2.visible = !1, this.labStar3.visible = !1;
            let t = qi.GetStarInfo(this.passType, this.lvChapter, this.lvPass, !1);
            for (let e in t) {
                let i = parseInt(e);
                this[`iconStar${i}`].visible = !0, this[`labStar${i}`].visible = !0, this[`labStar${i}`].text = t[e].title + ":" + t[e].desc
            }
        }
        refreshPatch() {
            this.iconPatch1.visible = !1, this.iconPatch2.visible = !1, this.iconPatch3.visible = !1, this.iconPatch4.visible = !1, this.iconPatch5.visible = !1;
            let t = q.GetPassCfg(this.passType, this.lvChapter, this.lvPass),
                e = ye.GetPassDrop(t.id),
                i = 0;
            for (let t in e) {
                let s = parseInt(t),
                    a = e[t];
                if (s < 0) {
                    let t = Math.abs(s),
                        e = Wi.GetCfg(t);
                    if (!e || !e.skin) continue;
                    this[`iconPatch${i+=1}`].visible = !0, this[`iconPatch${i}`].skin = `images/obj/sp_${e.id}.png`, Li.fillNum(this[`boxPatchNum${i}`], "main", "icon_word", `x${a}`, n.Left)
                }
            }
            switch (i) {
                case 4:
                    this.patchBg.width = 320, this.iconPatch1.x = 330, this.iconPatch2.x = 260, this.iconPatch3.x = 400, this.iconPatch4.x = 190;
                    break;
                case 3:
                    this.patchBg.width = 270, this.iconPatch2.x = 225, this.iconPatch3.x = 365;
                    break;
                case 2:
                    this.patchBg.width = 240, this.iconPatch1.x = 250, this.iconPatch2.x = 340
            }
        }
    }
    class di extends et.exitViewUI {//todo:暂停界面
        constructor() {
            super(), this.isInit = !1, this.entering = !1
        }
        createChildren() {
            super.createChildren(), this.on("onViewCreated", this, this.onComplete)
        }
        onComplete() {
            this.initMenu(), this.refreshUI()
        }
        onEnable() {
            Laya.timer.loop(4e3, this, this.refreshTeach)
        }
        onDisable() {
            Laya.timer.clear(this, this.refreshTeach)
        }
        Open() {
            this.initMenu(), this.refreshUI(), K.On(e.KILL_AD_FILL, this, this.onKillFillDone),
				K.On(e.VIDEO_FINISH, this, this.autoEnterFight)
        }
        Close() {
            K.Off(e.KILL_AD_FILL, this, this.onKillFillDone), K.Off(e.VIDEO_FINISH, this, this.autoEnterFight), Vi.Hide_Banner()
        }
        autoEnterFight(e) {
            e == t.FlashAdd && setTimeout(function () {
                this.onBtnAgain()
            }.bind(this), 200)
        }
        initMenu() {
            if (!this.pngBg) return;
            if (this.isInit) return;
            this.isInit = !0, this.entering = !1, Li.ScreenFull(this), 
				Li.BtnTap(this, this.btnClose, this.onBtnClose),
				Li.BtnTap(this, this.btnAgain, this.onBtnAgain),
				Li.BtnTap(this, this.btnQuit, this.onBtnQuit), Li.BtnTap(this, this.btnKill1, this.onBtnKill1), Li.BtnTap(this, this.btnKill5, this.onBtnKill5);
            let t = Yi.Avatar;
            if (this.passLv = t.passLv, Qi.IsDev()) {
                let t = q.GetPassCfg(qi.passType, qi.lvChapter, qi.lvPass);
                this.passLv = t.id
            }
            this.refreshUI(), Vi.Show_Banner(null), Li.WxAppIconInit(this, this.appIcon, null, 2e3)
        }
        onBtnKill1() {
            let e = Qt.GetKillNum(lt.One),
                i = jt.GetCfg(lt.One);
            e > i.max ? Pi.FlyTxt(`When the number of ${i.title} is less than ${i.max}, it will be replenished`) : Vi.VideoAdPlay(null, t.FillKillNum, lt.One)
        }
        onBtnKill5() {
            let e = Qt.GetKillNum(lt.Five),
                i = jt.GetCfg(lt.Five);
            e > i.max ? Pi.FlyTxt(`When the number of ${i.title} is less than ${i.max}, it will be replenished`) : Vi.VideoAdPlay(null, t.FillKillNum, lt.Five)
        }
        onKillFillDone(t) {
            this.pngBg && (Hi.FlashEffect(this[`btnKill${t}`], 120, 120, function () {
                setTimeout(function () {
                    Hi.SmallBigLoop(this[`btnKill${t}`], 200, 1.06, .97, 1, null), Hi.FlashEffect(this[`btnKill${t}`], 120, 120)
                }.bind(this), 400)
            }.bind(this)), this.refreshKill())
        }
        refreshTeach() {
            if (!this.pngBg) return;
            let t = jt.GetCfg(lt.One);
            if (!(this.passLv >= t.openLv) && (this.killBox.visible = !1, this.boxBtn.y = 320, Y.Teach && Y.Teach.length > 0)) {
                let t = Math.floor(Math.random() * Y.Teach.length),
                    e = Y.Teach[t];
                this.labTeach.text = e, this.labTeach.visible = !0, Hi.FlashEffect(this.labTeach, 100, 100)
            }
        }
        refreshKill() {
            if (!this.pngBg) return;
            let t = jt.GetCfg(lt.One);
            if (this.passLv < t.openLv) return;
            this.killBox.visible = !0, this.labTeach.text = "Free replenishment and free props to improve the ability to enter the level", this.boxBtn.y = 280;
            let e = jt.GetCfg(lt.One),
                i = jt.GetCfg(lt.Five),
                s = Qt.GetKillNum(lt.One),
                a = Qt.GetKillNum(lt.Five);
            Li.fillNum(this.boxKill1, "main", "icon_word", `${s}/${2*e.max}`, n.Right), Li.fillNum(this.boxKill5, "main", "icon_word", `${a}/${2*i.max}`, n.Right)
        }
        onBtnAgain() {
            if (!xt.CostFlash(qi.passType, qi.lvChapter, qi.lvPass)) return;
            if (this.entering) return;
            this.entering = !0;
            let t = qi.GetStar(qi.passType, qi.lvChapter, qi.lvPass),
                e = xt.flashCost(qi.lvChapter);
            t >= 3 && (e += xt.flashMore);
            let i = Qi.GlobalPoint(this.btnAgain, null, null);
            Pi.FlashCostFly(6, i.x, i.y, 90), setTimeout(function () {
                Li.Close(S.Exit), Li.Close(S.Pause), qi.QuitFight(), Ui.EnterFight(), qi.isAgain = !0, qi.InitFight(qi.passType, qi.lvChapter, qi.lvPass)
            }.bind(this), 550)
        }
        refreshUI() {
            if (!this.pngBg) return;
            if (!this.isInit) return;
            this.refreshTeach(), this.refreshKill(), this.boxPass.visible = !1, this.labTitle.visible = !1;
            let t = q.GetPassCfg(qi.passType, qi.lvChapter, qi.lvPass);
            t.passType == D.Pass ? (this.boxPass.visible = !0, Li.fillNum(this.boxLv, "result", "icon_zt_word", t.id + "", n.Center)) 
				: t.passType == D.Daimond ? (this.labTitle.visible = !0, this.labTitle.text = "Diamond dungeon") 
					: t.passType == D.Gold ? (this.labTitle.visible = !0, this.labTitle.text = "Gold dungeon") 
						: t.passType == D.Patch ? (this.labTitle.visible = !0, this.labTitle.text = "Fragments dungeon")
							: t.passType == D.Talent && (this.labTitle.visible = !0, this.labTitle.text = "Talent dungeon")
        }
        onBtnQuit() {
            qi.passType == D.Pass ? (Xi.AppendOperation(ct.Exit),
				Li.Open(S.Chapter), Li.Close(S.Exit),
				Li.Close(S.Pause), Li.Close(S.Guide), qi.QuitFight(), 
				Ui.QuitFight()) : qi.GameEndFb()
        }
        onBtnClose() {
            Li.Close(S.Exit), Ui.onExitUIClose(), Li.Close(S.Pause), Li.Close(S.Guide)
        }
    }
    class ui extends et.soliderNewViewUI {
        constructor() {
            super(), this.isInit = !1
        }
        initData(t) {
            this.soliderId = t[0], this.toNum = t[1], this.initMenu(), this.reshowMenu()
        }
        createChildren() {
            super.createChildren(), this.on("onViewCreated", this, this.onComplete)
        }
        onComplete() {
            this.initMenu(), this.reshowMenu()
        }
        initMenu() {
            if (!this.pngBg) return;
            if (!this.soliderId) return;
            if (this.isInit) return;
            this.isInit = !0, Li.ScreenFull(this, !0), Li.BtnTap(this, this.btnGet, this.onBtnGet);
            let t = Wi.GetCfg(this.soliderId);
            this.boxStar.visible = !1, Li.fillNum(this.boxStar, "egg", "star", "s".repeat(t.quality), n.Center), this.labRemark.text = "Fighting description：" + t.remark, this.luckyStep1(), Vi.Show_Banner(null)
        }
        luckyStep1() {
            this.topBox.visible = !1, this.groupBtn.visible = !1, this.standBox.scale(.3, .3), Laya.Tween.to(this.standBox, {
                scaleX: 1,
                scaleY: 1
            }, 180), setTimeout(function () {
                Pi.AddEffect(this.wingBox, "egg", "wing")
            }.bind(this), 230), setTimeout(function () {
                let t = Wi.GetCfg(this.soliderId);
                this.soliderIcon.skin = `images/man/${t.skin}.png`, this.soliderIcon.visible = !0, X.InitPivot(this.soliderIcon, "solider", t.skin), this.luckyStep1_2(), this.luckyStep2()
            }.bind(this), 650)
        }
        luckyStep1_2() {
            this.imgLight.visible = !0;
            let t = Wi.GetCfg(this.soliderId);
            this.imgLight.skin = `images/egg/bgLight_${t.quality}.png`, this.lightLoop()
        }
        lightLoop() {
            this.imgLight.rotation = 0, Laya.Tween.to(this.imgLight, {
                rotation: 360
            }, 3600, null, Laya.Handler.create(this, function () {
                this.lightLoop()
            }.bind(this)))
        }
        luckyStep2() {
            this.topBox.visible = !0;
            let t = Wi.GetCfg(this.soliderId);
            this.labName.visible = !0, this.labName.text = t.name, this.labName.color = It.QColor[t.quality], setTimeout(function () {
                this.luckyStep3()
            }.bind(this), 200)
        }
        luckyStep3() {
            this.groupBtn.visible = !0, this.toNum ? (this.iconNew.visible = !1, this.imgTo.visible = !0, this.iconPatch.skin = `images/obj/sp_${this.soliderId}.png`, Li.fillNum(this.boxTo, "font", "icon_word", "x" + this.toNum, n.Left)) : this.iconNew.visible = !0, this.groupBtn.alpha = .3, Laya.Tween.to(this.groupBtn, {
                alpha: 1
            }, 200), this.boxStar.visible = !0, this.boxStar.alpha = .3, Laya.Tween.to(this.boxStar, {
                alpha: 1
            }, 200)
        }
        Open() {
			this.initMenu(), this.reshowMenu()
        }
        Close() {
            this.soliderId = null, this.toNum = null, Vi.Hide_Banner()
        }
        reshowMenu() {
            this.pngBg
        }
        onBtnGet() {
            Li.Close(S.SoliderNew), Li.Close(S.Sign)
        }
    }
    class ci extends et.soliderDescViewUI {
        constructor() {
            super(...arguments), this.isInit = !1
        }
        initData(t) {
            this.viewType = t[0], this.viewId = t[1], this.initMenu(), this.refreshUI()
        }
        createChildren() {
            super.createChildren(), this.on("onViewCreated", this, this.onComplete)
        }
        onComplete() {
            this.initMenu(), this.refreshUI()
        }
        initMenu() {
            this.pngBg && this.viewType && (this.isInit || (this.isInit = !0, Li.ScreenFull(this), Qi.IsAdvScreen() && (this.centerBox.y += 100), Li.BtnTap(this, this.pngBg, this.onBtnClose), Li.BtnTap(this, this.btnClose, this.onBtnClose), Li.BtnTap(this, this.btnLeft, this.onBtnLeft), Li.BtnTap(this, this.btnRight, this.onBtnRight), Qi.IsDev() && (Li.BtnTap(this, this.labDesc, this.onTapDesc), Li.BtnTap(this, this.labRemark, this.onTapRemark)), Vi.Show_Banner(null)))
        }
        onTapDesc() {
            Qi.IsDev() && "solider" == this.viewType && Li.Open(S.SoliderNew, [this.viewId, 0])
        }
        onTapRemark() {
            Qi.IsDev() && "solider" == this.viewType && Li.Open(S.Help, this.viewId)
        }
        onBtnClose() {
            Li.Close(S.SoliderDesc)
        }
        Open() {
			Plat.I.ShowInter()
			this.initMenu(), this.refreshUI()
        }
        Close() {
            Vi.Hide_Banner()
        }
        onBtnLeft() {
            if ("solider" == this.viewType) {
                let t = ve.GetSoliderPicList(),
                    e = t.indexOf(this.viewId),
                    i = t[e - 1];
                if (!i) return;
                this.viewId = i
            } else if ("enemy" == this.viewType) {
                let t = [],
                    e = H.GetDict();
                for (let i in e) {
                    let e = parseInt(i);
                    t.push(e)
                }
                let i = t.indexOf(this.viewId),
                    s = t[i - 1];
                if (!s) return;
                this.viewId = s
            }
            this.refreshUI()
        }
        onBtnRight() {
            if ("solider" == this.viewType) {
                let t = ve.GetSoliderPicList(),
                    e = t.indexOf(this.viewId),
                    i = t[e + 1];
                if (!i) return;
                this.viewId = i
            } else if ("enemy" == this.viewType) {
                let t = [],
                    e = H.GetDict();
                for (let i in e) {
                    let s = e[i]; - 1 != [1, 2, 3, 4, 5, 6, 7].indexOf(s.quality) && t.push(s.id)
                }
                let i = t.indexOf(this.viewId),
                    s = t[i + 1];
                if (!s) return;
                this.viewId = s
            }
            this.refreshUI()
        }
        refreshUI() {
            if (this.pngBg && this.viewType && this.isInit)
                if (this.iconStar1.visible = !1, this.iconStar2.visible = !1, this.iconStar3.visible = !1, this.iconStar4.visible = !1, this.iconStar5.visible = !1, this.iconDef.visible = !1, this.iconStep.visible = !1, this.iconSlow.visible = !1, this.iconFast.visible = !1, "solider" == this.viewType) {
                    let t = ve.GetSoliderPicList();
                    this.btnLeft.visible = 0 != t.indexOf(this.viewId), this.btnRight.visible = t.indexOf(this.viewId) != t.length - 1;
                    let e = Wi.GetCfg(this.viewId);
                    this.soliderIcon.skin = `images/man/${e.skin}.png`, X.RepairsoliderC16(this.soliderIcon, 275, 248, 14, -14), this.soliderIcon.rotation = 90, this.soliderIcon.scale(1.35, 1.35), this.imgTopBanner.skin = `images/solider/icon_tc_pzbg_${e.quality}.png`, this.imgIconQuality.skin = `images/solider/icon_tc_pzword_${e.quality}.png`, this.labName.text = e.name || "士兵名称", this.labDesc.text = e.desc, this.labRemark.text = e.remark;
                    for (let t = 1; t <= e.quality; t++) this[`iconStar${t}`].visible = !0
                } else if ("enemy" == this.viewType) {
                this.bannerRemark.visible = !1;
                let t = [],
                    e = H.GetDict();
                for (let i in e) {
                    let s = e[i]; - 1 != [1, 2, 3, 4, 5, 6, 7].indexOf(s.quality) && t.push(s.id)
                }
                this.btnLeft.visible = 0 != t.indexOf(this.viewId), this.btnRight.visible = t.indexOf(this.viewId) != t.length - 1;
                let i = H.GetCfg(this.viewId);
                this.soliderIcon.skin = `images/fight/${i.skin}_1.png`, this.soliderIcon.rotation = 0, this.soliderIcon.scale(1, 1), 9 == i.quality ? (this.imgTopBanner.skin = "images/solider/icon_tc_pzbg_7.png", this.imgIconQuality.skin = "images/solider/icon_tc_pzword_boss.png") : (this.imgTopBanner.skin = "images/solider/icon_tc_pzbg_6.png", this.imgIconQuality.skin = "images/solider/icon_tc_pzword_gw.png"), this.labName.text = i.name || "怪物名", this.labDesc.text = i.desc, this.labRemark.text = i.remark;
                let s = 0,
                    n = [566, 514, 462, 410];
                i.def && (this.iconDef.visible = !0, this.iconDef.x = n[s++]), i.step && (this.iconStep.visible = !0, this.iconStep.x = n[s++]), i.slow && (this.iconSlow.visible = !0, this.iconSlow.x = n[s++]), i.move > 90 && (this.iconFast.visible = !0, this.iconFast.x = n[s++])
            }
        }
    }
    class pi extends et.endViewUI {
        constructor() {
            super(), this.isInit = !1, this.hasGift = !1
        }
        createChildren() {
            super.createChildren(), this.on("onViewCreated", this, this.onComplete)
        }
        onComplete() {
            this.initMenu(), this.refreshUI()
        }
        initMenu() {
            this.pngBg && (this.isInit || (this.isInit = !0, Li.ScreenFull(this), Li.BtnTap(this, this.btnOk, this.onTapClose), Li.BtnTap(this, this.btnVideo, this.onTapVideo), this.winPlayer(), this.showGiftAndPick()))
        }
        showGiftAndPick() {
            if (this.imgTalent.visible = !1, this.imgDiamond.visible = !1, this.imgGold.visible = !1, this.boxPatch.visible = !1, qi.passType == D.Talent) {
                this.imgTalent.visible = !0;
                let t = "0";
                qi.blood > 0 && qi.IsDestoryStandBronBuild() && (t = "3"), Li.fillNum(this.boxTalent, "main", "icon_word", t, n.Left)
            } else if (qi.passType == D.Daimond) {
                this.imgDiamond.visible = !0;
                let t = qi.diamondSave + "";
                Li.fillNum(this.boxDiamond, "main", "icon_word", t, n.Left)
            } else if (qi.passType == D.Gold) {
                this.imgGold.visible = !0;
                let t = qi.goldSave + "";
                Li.fillNum(this.boxGold, "main", "icon_word", t, n.Left)
            }
            if (qi.passType == D.Patch) {
                let t = qi.getSavePatchInfo();
                if (t && t.length > 0) {
                    this.boxPatch.visible = !0, this.iconPatch1.visible = !1, this.iconPatch2.visible = !1, this.iconPatch3.visible = !1, this.iconPatch4.visible = !1, this.iconPatch5.visible = !1;
                    let e = 1;
                    for (let i in t) {
                        let [s, a] = t[i], l = Wi.GetCfg(s);
                        this[`iconPatch${e}`].visible = !0, this[`iconPatch${e}`].skin = `images/obj/sp_${l.id}.png`, Li.fillNum(this[`iconNum${e}`], "main", "icon_word", "x" + a, n.Left), e++
                    }
                }
                switch (t.length) {
                    case 1:
                        this.iconPatch1.x = 375;
                        break;
                    case 2:
                        this.iconPatch1.x = 315, this.iconPatch2.x = 435;
                        break;
                    case 3:
                        this.iconPatch1.x = 255, this.iconPatch2.x = 375, this.iconPatch3.x = 500;
                        break;
                    case 4:
                        this.iconPatch1.x = 255, this.iconPatch2.x = 315, this.iconPatch3.x = 435, this.iconPatch4.x = 495
                }
            }
            let t = this.imgTalent.y;
            this.imgTalent.visible && (this.imgTalent.y = t, t += 40), this.imgDiamond.visible && (this.imgDiamond.y = t, t += 40), this.imgGold.visible && (this.imgGold.y = t), this.boxMoney.visible = this.imgTalent.visible || this.imgDiamond.visible || this.imgGold.visible
        }
        winPlayer() {
            this.imgRound.visible = !1, setTimeout(function () {
                Hi.SmallBigLoop(this.imgWin, 500, 1.4, 1, 1)
            }.bind(this), 350)
        }
        Open() {
			Plat.I.ShowInter()
			K.On(e.VIDEO_FINISH, this, this.onVideoAdDone), this.initMenu(), this.refreshUI()
        }
        Close() {
            K.Off(e.VIDEO_FINISH, this, this.onVideoAdDone)
        }
        refreshUI() {
            this.pngBg
        }
        onTapVideo() {
            Vi.VideoAdPlay(null, t._EndDrop, null)
        }
        onVideoAdDone(e) {
            e == t._EndDrop && (this.hasGift || (this.showGiftAndPick(), this.hasGift = !0, this.onTapClose(null, 2)))
        }
        onTapClose(t, e = 1) {
            if (qi.passType == D.Talent) {
                if (qi.blood > 0 && qi.IsDestoryStandBronBuild()) {
                    let t = 3 * e;
                    Le.AddMoneyByVal(d.talent, t), Pi.FlyDrop([
                        [d.talent, t]
                    ], null, null, null, null, null, t)
                }
            } else if (qi.passType == D.Daimond && qi.diamondSave) {
                let t = qi.diamondSave * e;
                Le.AddMoneyByVal(d.diamond, t), Pi.FlyDrop([
                    [d.diamond, t]
                ], null, null, null, null, null, null)
            } else if (qi.passType == D.Gold && qi.goldSave) {
                let t = qi.goldSave * e;
                Le.AddMoneyByVal(d.gold, t), Pi.FlyDrop([
                    [d.gold, t]
                ], null, null, null, null, null, null)
            } else if (qi.passType == D.Patch) {
                let t = qi.getSavePatchInfo();
                if (t && t.length > 0)
                    for (let i in t) {
                        let [s, n] = t[i];
                        n *= e;
                        let a = Wi.GetCfg(s);
                        ve.AddPatch(s, n), Pi.FlySoliderPatch(a.id, n, n)
                    }
            }
            Li.Close(S.GameEndFb), qi.QuitFight(), Ui.QuitFight(), Xi.SaveApi(!0)
        }
    }
    class fi extends et.unlockViewUI {
        constructor() {
            super(), this.isInit = !1
        }
        createChildren() {
            super.createChildren(), this.on("onViewCreated", this, this.onComplete)
        }
        onComplete() {
            this.initMenu(), this.refreshUI()
        }
        initMenu() {
            this.pngBg && (this.isInit || (this.isInit = !0, Li.ScreenFull(this), Li.BtnTap(this, this.btnUnlock, this.onTapUnlock), Li.BtnTap(this, this.btnOpen, this.onTapOpen), this.pngBg.on(Laya.Event.MOUSE_DOWN, this, this.onTapClose), Vi.Show_Banner(null)))
        }
        Open() {
			Plat.I.ShowInter()
			K.On(e.VIDEO_FINISH, this, this.onVideoDone), this.initMenu(), this.refreshUI()
        }
        Close() {
            K.Off(e.VIDEO_FINISH, this, this.onVideoDone), Vi.Hide_Banner()
        }
        onTapClose() {
            Li.Close(S.Unlock)
        }
        onTapUnlock() {
            Vi.VideoAdPlay(null, t.TeamUnlock, null)
        }
        onTapOpen() {
            let [t, e] = ve.GetUnlockCost();
            Le.HasMoneyByVal(t, e) ? (Le.CostMoneyByVal(t, e), Li.Close(S.Unlock), ve.AddTeamNum()) : Pi.FlyTxt("Not enough resources, click the video to unlock")
        }
        onVideoDone(e) {
            e && e == t.TeamUnlock && (Li.Close(S.Unlock), ve.AddTeamNum())
        }
        refreshUI() {
            if (!this.pngBg) return;
            this.iconGold.visible = !1, this.iconDaimond.visible = !1;
            let [t, e] = ve.GetUnlockCost();
            switch (t) {
                case d.gold:
                    this.iconGold.visible = !0, this.labGold.text = "" + e;
                    break;
                case d.diamond:
                    this.iconDaimond.visible = !0, this.labDaimond.text = "" + e
            }
        }
    }
    class gi extends et.countDownViewUI {
        constructor() {
            super(), this.isInit = !1
        }
        createChildren() {
            super.createChildren(), this.on("onViewCreated", this, this.onComplete)
        }
        onComplete() {
            this.initMenu(), this.refreshUI()
        }
        Open() {
			this.initMenu(), this.refreshUI()
        }
        Close() {}
        initMenu() {
            this.pngBg && (this.isInit || (this.isInit = !0, Li.ScreenFull(this), this.refreshUI()))
        }
        refreshUI() {
            this.pngBg
        }
    }
    class mi extends et.pauseViewUI {
        constructor() {
            super(), this.isInit = !1
        }
        createChildren() {
            super.createChildren(), this.on("onViewCreated", this, this.onComplete)
        }
        onComplete() {
            this.initMenu(), this.refreshUI()
        }
        Open() {
			this.initMenu(), this.refreshUI(), Laya.timer.loop(120, this, this.refreshBox), setTimeout(function () {
                K.Evt(e.REFRESH_PAUSE_BTN)
            }, 300)
        }
        Close() {
            Laya.timer.clear(this, this.refreshBox), setTimeout(function () {
                K.Evt(e.REFRESH_PAUSE_BTN)
            }, 300)
        }
        initMenu() {
            this.pngBg && (this.isInit || (this.isInit = !0, Li.ScreenFull(this)))
        }
        refreshUI() {
            this.pngBg && this.refreshBox()
        }
        refreshBox() {
            if (!this.pngBg) return;
            let t = {};
            for (let e = 0; e < 84; e++) {
                t[e] = 0;
                let i = `box_${e}`;
                if (!this.pngBg.getChildByName(i)) {
                    let t = new Laya.Image("images/main/icon_box.png");
                    "D" == mt.mapBg && (t.skin = "images/main/icon_box_black.png"), t.anchorX = .5, t.anchorY = .5, t.name = i, this.pngBg.addChild(t);
                    let s = mt.GetBoxPos(e);
                    t.pos(s.x + mt.topX, s.y + mt.topY)
                }
            }
            null !== qi.standBoxNo && Li.IsOpen(S.Build) && (t[qi.standBoxNo] = 1);
            let e = mt.GetMapStone();
            for (let i in e) {
                t[e[i]] = 1
            }
            let i = qi.GetEnemyList(!1);
            for (let e in i) {
                let s = i[e];
                t[mt.PosToBoxNo(s.x, s.y)] = 1
            }
            let s = qi.GetSoliderList();
            for (let e in s) {
                let i = s[e];
                t[mt.PosToBoxNo(i.x, i.y)] = 1
            }
            for (let e in t) {
                let i = `box_${e}`,
                    s = this.pngBg.getChildByName(i);
                s && (Li.IsOpen(S.Build) && qi.standBoxNo === parseInt(e) ? s.visible = !1 : s.visible = 0 == t[e])
            }
        }
    }
    class yi extends et.helpViewUI {
        constructor() {
            super(), this.debugHelpId = null, this.isInit = !1, this.help = null, this.helperId = null
        }
        initData(t) {
            this.debugHelpId = t, this.initMenu(), this.refreshUI()
        }
        createChildren() {
            super.createChildren(), this.on("onViewCreated", this, this.onComplete)
        }
        onComplete() {
            this.initMenu(), this.refreshUI()
        }
        initMenu() {
            if (!this.pngBg) return;
            if (this.isInit) return;
            if (Li.ScreenFull(this), Li.BtnTap(this, this.btnClose, this.onTapClose), Li.BtnTap(this, this.btnVideo, this.onBtnVideo), Li.BtnTap(this, this.btnFree, this.onBtnFree), Li.BtnTap(this, this.btnDaimond, this.onBtnDaimond), Li.BtnTap(this, this.btnGold, this.onBtnGold), this.lightLoop(), this.autoClose(), Qi.IsDev() && this.debugHelpId) this.help = V.DaimondAd, this.helperId = this.debugHelpId;
            else {
                if (Li.IsOpen(S.SoliderDesc)) return;
                let t = q.GetPassCfg(qi.passType, qi.lvChapter, qi.lvPass);
                if (!t || !t.help || !t.helper) return void Li.Close(S.Help);
                this.help = t.help, this.helperId = t.helper
            }
            this.isInit = !0;
            let t = Wi.GetCfg(this.helperId);
            Li.fillNum(this.boxStar, "result", "icon", "s".repeat(t.quality), n.Center);
            let e = qi.helpNeedDaimond(t.quality);
            this.labDaimond.text = `${e} diamond invitation`, Le.HasMoneyByVal(d.diamond, e) || (this.btnDaimond.gray = !0);
            let i = qi.helpNeedGold(t.quality);
            this.labGold.text = `${i} gold invitation`, Le.HasMoneyByVal(d.gold, i) || (this.btnGold.gray = !0), this.iconSolider.skin = `images/man/${t.skin}.png`, this.imgLight.skin = `images/egg/bgLight_${t.quality}.png`, this.labName.text = t.name, 
				this.labName.color = It.QColor[t.quality];
            let s = It.QTxt[t.quality],
                a = [`Meet the ${s} soldier：${t.name}`, `Find the ${s} soldier:${t.name}`, `Meet the ${s} soldier：${t.name}`],
                l = Math.floor(Math.random() * a.length);
            switch (this.labTitle.text = a[l], this.labRemark.text = "Fighting description：" + t.remark, this.iconMore.visible = !1, this.btnVideo.visible = !1, this.btnFree.visible = !1, this.btnDaimond.visible = !1, this.btnGold.visible = !1, this.help) {
                case V.Free:
                    this.btnFree.visible = !0;
                    break;
                case V.Daimond:
                    this.btnDaimond.visible = !0, this.btnDaimond.y = this.btnFree.y;
                    break;
                case V.DaimondAd:
                    this.btnVideo.visible = !0, this.btnDaimond.visible = !0;
                    break;
                case V.Gold:
                    this.btnDaimond.visible = !0, this.btnGold.y = this.btnFree.y;
                    break;
                case V.GoldAd:
                    this.btnVideo.visible = !0, this.btnGold.visible = !0;
                    break;
                case V.Video:
                    this.btnVideo.visible = !0, this.btnDaimond.y = this.btnFree.y;
                    break;
                case V.None:
            }
        }
        onBtnVideo() {
            Vi.VideoAdPlay(null, t.Help, null)
        }
        videoAdDone(e) {
            e && e == t.Help && (Li.Close(S.Help), qi.helpCallDo(V.Video, this.helperId))
        }
        onBtnFree() {
            this.help == V.Free ? (Li.Close(S.Help), qi.helpCallDo(V.Free, this.helperId)) : Pi.FlyTxt("illegal request")
        }
        onBtnDaimond() {
            let t = Wi.GetCfg(this.helperId),
                e = qi.helpNeedDaimond(t.quality);
            Le.HasMoneyByVal(d.diamond, e) ? (Le.CostMoneyByVal(d.diamond, e), Li.Close(S.Help), qi.helpCallDo(V.Daimond, this.helperId)) : Pi.FlyTxt("Lack of diamond")
        }
        onBtnGold() {
            let t = Wi.GetCfg(this.helperId),
                e = qi.helpNeedGold(t.quality);
            Le.HasMoneyByVal(d.gold, e) ? (Le.CostMoneyByVal(d.gold, e), Li.Close(S.Help), qi.helpCallDo(V.Daimond, this.helperId)) : Pi.FlyTxt("Lack of gold ")
        }
        lightLoop() {
            this.imgLight.rotation = 0, Laya.Tween.to(this.imgLight, {
                rotation: 360
            }, 3600, null, Laya.Handler.create(this, function () {
                this.imgLight && this.lightLoop()
            }.bind(this)))
        }
        Open() {
			Plat.I.ShowInter()
			this.help = null, this.helperId = null, this.initMenu(), this.refreshUI(), K.On(e.VIDEO_FINISH, this, this.videoAdDone)
        }
        Close() {
            K.Off(e.VIDEO_FINISH, this, this.videoAdDone), this.debugHelpId = null
        }
        autoClose() {}
        onTapClose() {
            Li.Close(S.Help)
        }
        refreshUI() {
            this.pngBg
        }
    }
    class Ii extends et.starDescViewUI {
        constructor() {
            super(...arguments), this.isInit = !1
        }
        createChildren() {
            super.createChildren(), this.on("onViewCreated", this, this.onComplete)
        }
        onComplete() {
            this.initMenu(), this.refreshUI()
        }
        initMenu() {
            this.pngBg && (this.isInit || (this.isInit = !0, Li.ScreenFull(this), Qi.IsAdvScreen() && (this.centerBox.y += 80), Li.BtnTap(this, this.btnClose, this.onBtnClose), this.pngBg.on(Laya.Event.MOUSE_DOWN, this, this.onBtnClose), this.refreshStar(), this.refreshPatch(), Vi.Show_Banner(null)))
        }
        refreshStar() {
            this.starBg2.visible = !1, this.labTitle2.visible = !1, this.starBg3.visible = !1, this.labTitle3.visible = !1;
            let t = qi.GetStarInfo(qi.passType, qi.lvChapter, qi.lvPass, !1);
            for (let e in t) {
                let i = parseInt(e);
                this[`starBg${i}`].visible = !0, this[`labTitle${i}`].visible = !0, this[`labTitle${i}`].text = t[e].title, this[`labDesc${i}`].text = t[e].desc, this[`labEnd${i}`].visible = !1, this[`iconSucc${i}`].visible = !1, !0 === t[e].succ ? (this[`iconSucc${i}`].visible = !0, this[`iconSucc${i}`].skin = "images/solider/icon_sxtj_wc.png") : !1 === t[e].succ ? (this[`iconSucc${i}`].visible = !0, this[`iconSucc${i}`].skin = "images/solider/icon_sxtj_wwc.png") : null === t[e].succ && (this[`labEnd${i}`].visible = !0, this[`labEnd${i}`].text = t[e].end)
            }
            this.starBg3.visible || (this.starBg2.visible ? (this.labTitle1.x += 100, this.labTitle2.x += 140, this.starBg1.x += 100, this.starBg2.x += 140) : (this.labTitle1.x += this.starBg2.x - this.starBg1.x, this.starBg1.x = this.starBg2.x))
        }
        refreshPatch() {
            let t = q.GetPassCfg(qi.passType, qi.lvChapter, qi.lvPass),
                e = ye.GetPassDrop(t.id);
            this.iconPatch1.visible = !1, this.iconPatch2.visible = !1, this.iconPatch3.visible = !1, this.iconPatch4.visible = !1, this.iconPatch5.visible = !1;
            let i = 0;
            for (let t in e) {
                let s = parseInt(t),
                    a = e[t];
                if (s == d.gold);
                else if (s == d.diamond);
                else if (s < 0) {
                    let t = Math.abs(s),
                        e = Wi.GetCfg(t);
                    if (!e || !e.skin) continue;
                    this[`iconPatch${i+=1}`].visible = !0, this[`iconPatch${i}`].skin = `images/obj/sp_${e.id}.png`, Li.fillNum(this[`iconNum${i}`], "main", "icon_word", `x${a}`, n.Left)
                }
            }
            switch (i) {
                case 4:
                    this.iconPatch1.x = 425, this.iconPatch2.x = 325, this.iconPatch3.x = 525, this.iconPatch4.x = 225;
                    break;
                case 3:
                    this.iconPatch2.x = 275, this.iconPatch3.x = 475;
                    break;
                case 2:
                    this.iconPatch1.x = 310, this.iconPatch2.x = 440
            }
        }
        onBtnClose() {
            Li.Close(S.StarDesc)
        }
        Open() {
			Plat.I.ShowInter()
			this.initMenu(), this.refreshUI()
        }
        Close() {
            Vi.Hide_Banner()
        }
        refreshUI() {
            this.pngBg && this.isInit
        }
    }
    class bi {
        static ExchangeChk(t) {
            return -1 == Yi.Avatar.exchange.indexOf(t)
        }
        static ExchangeDo(t, e, i) {
            if (!bi.ExchangeChk(t)) return;
            Yi.Avatar.exchange.push(t), Le.AddAward(e, i, !1, S.Exchange), Li.Close(S.Exchange), Pi.FlyTxt("For successful")
        }
    }
    class Si extends et.exchangeViewUI {
        constructor() {
            super(), this.isInit = !1
        }
        createChildren() {
            super.createChildren(), this.on("onViewCreated", this, this.onComplete)
        }
        onComplete() {
            this.initMenu(), this.reshowUI()
        }
        initMenu() {
            if (!this.pngBg) return;
            if (this.isInit) return;
            this.isInit = !0;
            bi.ExchangeChk("vip001") ? (this.inputIn.text = "vip001", this.inputIn.color = "#EEEEEE") : (this.inputIn.text = "请输入兑换码", this.inputIn.color = "#aaaaaa"), Li.ScreenFull(this, !0), Li.BtnTap(this, this.btnClose, this.onBtnClose), Li.BtnTap(this, this.pngBg, this.onBtnClose), Li.BtnTap(this, this.btnExchange, this.onBtnExchange), this.inputIn.on(Laya.Event.FOCUS, this, this.onInputTap), Y.QqNo && (this.labQQ.visible = !0, this.labQQ.text = Y.QqNo), Vi.Show_Banner(null)
        }
        onInputTap() {
            this.inputIn.color = "#EEEEEE", "请输入兑换码" == this.inputIn.text && (this.inputIn.text = "")
        }
        Open() {
			Plat.I.ShowInter()
			this.initMenu(), this.reshowUI()
        }
        Close() {
            Vi.Hide_Banner()
        }
        reshowUI() {
            this.pngBg
        }
        onBtnExchange() {
            let t = this.inputIn.text;
            if (!bi.ExchangeChk(t)) return Pi.FlyTxt("Exchange codes cannot be picked up more than once"), void Li.Close(S.Exchange);
            Xi.ExchangeApi(t)
        }
        onBtnClose() {
            Li.Close(S.Exchange)
        }
    }
    class Ti extends et.onlineViewUI {//todo:在线奖励
        constructor() {
            super(), this.isInit = !1
        }
        createChildren() {
            super.createChildren(), this.on("onViewCreated", this, this.onComplete)
        }
        onComplete() {
            this.initMenu(), this.refreshUI()
        }
        initMenu() {
            this.pngBg && (this.isInit || (this.isInit = !0, Li.ScreenFull(this), Qi.IsAdvScreen() && (this.centerBox.y += 140), Li.BtnTap(this, this.btnClose, this.onBtnClose), Li.BtnTap(this, this.giftBox1, this.onBtnPick1), Li.BtnTap(this, this.giftBox2, this.onBtnPick2), Li.BtnTap(this, this.giftBox3, this.onBtnPick3), this.pngBg.on(Laya.Event.MOUSE_DOWN, this, this.onBtnClose), Y.QqNo && (this.labQQ.visible = !0, this.labQQ.text = Y.QqNo), Vi.Show_Banner(null)))
        }
        onBtnPick1() {
            switch (Vt.IsAwardReady(0)) {
                case !0:
                    Pi.FlyTxt("This award has been collected");
                    break;
                case !1:
                    Pi.FlyTxt("The conditions are not met");
                    break;
                default:
                    Vt.PickGift(0)
            }
        }
        onBtnPick2() {
            switch (Vt.IsAwardReady(1)) {
                case !0:
                    Pi.FlyTxt("This award has been collected");
                    break;
                case !1:
                    Pi.FlyTxt("The conditions are not met");
                    break;
                default:
                    Vt.PickGift(1)
            }
        }
        onBtnPick3() {
            switch (Vt.IsAwardReady(2)) {
                case !0:
                    Pi.FlyTxt("This award has been collected");
                    break;
                case !1:
                    Pi.FlyTxt("The conditions are not met");
                    break;
                default:
                    Vt.PickGift(2)
            }
        }
        Open() {
            K.On(e.ONLINE_CHANGE, this, this.refreshUI), K.On(e.ONLINE_SEC, this, this.refreshUI), this.initMenu(), this.refreshUI()
        }
        Close() {
            K.Off(e.ONLINE_CHANGE, this, this.refreshUI), K.Off(e.ONLINE_SEC, this, this.refreshUI), Vi.Hide_Banner()
        }
        onBtnClose() {
			Plat.I.ShowInter()
            Li.Close(S.Online)
        }
        refreshUI() {
            if (!this.pngBg) return;
            let [t, e] = Vt.onlineStep[0], [i, s] = Vt.onlineStep[1], [n, a] = Vt.onlineStep[2], l = yt.GetCfg(e), o = l.drop[0][0], r = l.drop[0][1], h = yt.GetCfg(o);
            this.labTitle1.text = `${h.title}x${r}`, this.labTimer1.text = `00:${t}:00`, this.iconYes1.visible = !1, this.iconReady1.visible = !1;
            let d = Vt.IsAwardReady(0);
            !0 === d ? this.iconYes1.visible = !0 : d && (this.iconReady1.visible = !0);
            let u = yt.GetCfg(s);
            u.drop[0][0], u.drop[0][1];
            this.labTimer2.text = `00:${t+i}:00`, this.iconYes2.visible = !1, this.iconReady2.visible = !1;
            let c = Vt.IsAwardReady(1);
            !0 === c ? this.iconYes2.visible = !0 : c && (this.iconReady2.visible = !0);
            let p = yt.GetCfg(a),
                f = p.drop[0][0],
                g = p.drop[0][1],
                m = yt.GetCfg(f);
            this.labTitle3.text = `${m.title}x${g}`, this.labTimer3.text = `00:${t+i+n}:00`, this.iconYes3.visible = !1, this.iconReady3.visible = !1;
            let y = Vt.IsAwardReady(2);
            !0 === y ? this.iconYes3.visible = !0 : y && (this.iconReady3.visible = !0);
            let I = Yi.Avatar.onSec,
                b = Math.floor(I / 60);
            this.timeImgVal.width = b <= t ? (this.giftBox1.x - this.timeImgBg.x) * b / t : b <= t + i ? this.giftBox1.x - this.timeImgBg.x + (this.giftBox2.x - this.giftBox1.x) * (b - t) / i : b <= t + i + n ? this.giftBox2.x - this.timeImgBg.x + (this.giftBox3.x - this.giftBox2.x) * (b - t - i) / n : this.timeImgBg.width
        }
    }
    class _i extends et.flashViewUI {//todo:补充体力界面
        constructor() {
            super(), this.isInit = !1
        }
        createChildren() {
            super.createChildren(), this.on("onViewCreated", this, this.onComplete)
        }
        onComplete() {
            this.initMenu(), this.refreshUI()
        }
        initMenu() {
            this.pngBg && (this.isInit || (this.isInit = !0, Li.ScreenFull(this), Li.BtnTap(this, this.btnVideo, this.onTapVideo), Li.BtnTap(this, this.btnFlash, this.onTapFlash), Li.BtnTap(this, this.btnClose, this.onTapClose), Y.QqNo && (this.labQQ.visible = !0, this.labQQ.text = Y.QqNo), Vi.Show_Banner(null), Li.WxAppIconInit(this, this.appIcon, null, 2e3)))
        }
        Open() {
			Plat.I.ShowInter()
            K.On(e.VIDEO_FINISH, this, this.onVideoDone), this.initMenu(), this.refreshUI()
        }
        Close() {
            K.Off(e.VIDEO_FINISH, this, this.onVideoDone), Vi.Hide_Banner()
        }
        onTapClose() {
            Li.Close(S.Flash)
        }
        onTapVideo() {
            Vi.VideoAdPlay("Get energy", t.FlashAdd, null)
        }
        onTapFlash() {
            Le.HasMoneyByVal(d.diamond, xt.flashDaimondCost) ? (xt.BuyFlash(), Li.Close(S.Flash)) : Pi.FlyTxt("Lack of diamond，watch AD to unlock")
        }
        onVideoDone(e) {
            e && e == t.FlashAdd && Li.Close(S.Flash)
        }
        refreshUI() {
            this.pngBg && (this.labDaimond.text = `${xt.flashDaimondCost}`)
        }
    }
    class vi extends et.regMenuUI {
        constructor() {
            super(), this.isInit = !1
        }
        createChildren() {
            super.createChildren(), this.on("onViewCreated", this, this.onComplete)
        }
        onComplete() {
            this.initMenu(), this.refreshUI()
        }
        initMenu() {
            this.pngBg && (this.isInit || (this.isInit = !0, Li.ScreenFull(this, !0), Li.BtnTap(this, this.btnReg, this.onBtnReg), Li.BtnTap(this, this.btnExit, this.onBtnExit), this.inputReal.on(Laya.Event.MOUSE_DOWN, this, this.onTapReal), this.inputCard.on(Laya.Event.MOUSE_DOWN, this, this.onTapCard)))
        }
        onTapReal() {
            "请输入姓名" == this.inputReal.text && (this.inputReal.text = "", this.inputReal.color = "#ffffff")
        }
        onTapCard() {
            "请输入身份证号" == this.inputCard.text && (this.inputCard.text = "", this.inputCard.color = "#ffffff")
        }
        Open() {
			Plat.I.ShowInter()
            this.initMenu(), this.refreshUI()
        }
        Close() {}
        onBtnReg() {
            let t = this.inputReal.text,
                e = this.inputCard.text;
            Xi.RealRegApi(t, e)
        }
        onBtnExit() {
            Vi.Exit()
        }
        refreshUI() {
            if (!this.pngBg) return;
            let t = Re.IsAdult();
            this.labDisGame.visible = !t, this.realBox.visible = t
        }
    }
    class Li {
        static Init() {
            Li.Layer = new Laya.Sprite,
				Li.Layer.width = Laya.stage.width, Li.Layer.height = Laya.stage.height,
				Li.Layer.mouseThrough = !0, Li.menuDict = {}, Li.menuCache = {}, Li.menuOpen = {},
				Li.menuDict[S.Exit] = di,//todo:UI注册处
				Li.menuDict[S.Load] = Ue,
				Li.menuDict[S.Agree] = De,
				Li.menuDict[S.Stop] = He,
				Li.menuDict[S.Video] = gt,
				Li.menuDict[S.Info] = ze,
				Li.menuDict[S.Guide] = Qe, 
				Li.menuDict[S.GameEndWin] = $e,
				Li.menuDict[S.GameEndFb] = pi,
				Li.menuDict[S.Unlock] = fi,
				Li.menuDict[S.GameEndFail] = je,
				Li.menuDict[S.Award] = Ye,
				Li.menuDict[S.Sign] = Je,
				Li.menuDict[S.Lucky] = Ke,
				Li.menuDict[S.ChapterMap] = Te,
				Li.menuDict[S.Kill] = ti,
				Li.menuDict[S.Build] = ge,
				Li.menuDict[S.SoliderInfo] = le,
				Li.menuDict[S.WeaponBag] = Me,
				Li.menuDict[S.WeaponInfo] = si,
				Li.menuDict[S.WeaponPut] = li,
				Li.menuDict[S.WeaponAuto] = ri,
				Li.menuDict[S.Order] = hi,
				Li.menuDict[S.SoliderNew] = ui, 
				Li.menuDict[S.SoliderDesc] = ci,
				Li.menuDict[S.CountDown] = gi,
				Li.menuDict[S.Pause] = mi,
				Li.menuDict[S.Help] = yi,
				Li.menuDict[S.StarDesc] = Ii,
				Li.menuDict[S.Exchange] = Si,
				Li.menuDict[S.Online] = Ti,
				Li.menuDict[S.Flash] = _i,
				Li.menuDict[S.Reg] = vi
        }
        static GetLayer() {
            return Li.Layer
        }
        static IsOpen(t) {
            return Li.menuOpen && 1 === Li.menuOpen[t]
        }
        static get HadOpen() {
            return Qi.DictLen(Li.menuOpen) > 0
        }
        static ScreenFull(t, e = !1) {
            t.x = -1, t.y = -1, t.width = Laya.stage.width + 2, t.height = Laya.stage.height + 2
        }
        static BtnGuideInfo(t, e) {
            let i = Li.menuCache[t];
            if (!i) return null;
            if (!i[e]) return null;
            let s = Qi.GlobalPoint(i[e], null, null);
            return [Math.round(s.x), Math.round(s.y), Math.round(i[e].width), Math.round(i[e].height)]
        }
        static BtnGuideTap(t, e) {
            let i = Li.menuCache[t];
            return i && i[e] ? (i[e].event(Laya.Event.MOUSE_DOWN), void i[e].event(Laya.Event.MOUSE_UP)) : null
        }
        static Open(t, e = null, i = !1) {
            let s = Li.menuCache[t];
            if (!s) {
                let e = Li.menuDict[t];
                if (null == e)
				{
					if(t == S.Chapter)
					{
						Plat.I.ShowFloatMain(0.06)
					}
					return void console.error("MENU not exist:" + t);
				}
                (s = new e).x = 0, s.y = 0, Li.menuCache[t] = s
            }
            t == S.GameEndWin || t == S.GameEndFail || t == S.Pause ? Li.Layer.addChildAt(s, 0) : Li.Layer.addChild(s), i || (s.alpha = .4, Laya.Tween.to(s, {
                alpha: 1
            }, 280)), s.Open(), 
			null !== e && s.initData && s.initData(e), Li.menuOpen[t] = 1, Ji.WxClubHide()
        }
        static Close(t) {
            let e = Li.menuCache[t];
            if (e) switch (e.Close(), e.removeSelf(), delete Li.menuOpen[t], t) {
                case S.Build:
                    _e.InFightGuide() && (e.destroy(), delete Li.menuCache[t]);
                case S.Pause:
                    break;
                default:
                    e.destroy(), delete Li.menuCache[t]
            }
            pe.IsOpen(b.Bottom) && (Li.HadOpen || Yi.St != s.Fight && Ji.WxClubShow())
        }
        static BtnTap(t, e, i, s = "", n = 190) {
            Li.btnOnClick(t, e, i, s, n)
        }
        static btnOnClick(t, e, i, s = "", n) {
            var a, l = e.scaleX,
                o = e.scaleY;
            let r, h;
            e.on(Laya.Event.MOUSE_DOWN, e, () => {
                if (e.getChildByName("_onClick")) return;
                if (null !== s && (s ? Z.Play(s) : Z.Play(L.tap)), e.width > 0 && e.height > 0) {
                    let t = Math.max(e.width, e.height),
                        i = t * (1.2 - 1);
                    a = i > 10 ? (t + (i = 10)) / t : 1.2, .5 == e.anchorX && .5 == e.anchorY || Pi.FlyTxt("anchorYX!=0.5"), r = l * a, h = o * a
                }
                a && (Laya.Tween.clearTween(e), e.scaleX = r, e.scaleY = h);
                let t = new Laya.Box;
                t.name = "_onClick", t.visible = !1, e.addChild(t)
            }),
				e.on(Laya.Event.MOUSE_UP, e, s => {
                a && (a = null, Laya.Tween.clearTween(e), e.getChildByName("_onClick") && i && i.call(t, s), Laya.Tween.to(e, {
                    scaleX: l,
                    scaleY: o
                }, 120), setTimeout(() => {
                    e.removeChildByName("_onClick")
                }, n))
            }), e.on(Laya.Event.MOUSE_OUT, e, () => {
                a && (a = null, Laya.Tween.clearTween(e), Laya.Tween.to(e, {
                    scaleX: l,
                    scaleY: o
                }, 90), setTimeout(() => {
                    e.removeChildByName("_onClick")
                }, n))
            })
        }
        static AddHeroLook(t, e, i, s = null, n = 1) {
            if (!t) return;
            let a = t.getChildAt(0);
            return a && a.clear(), new qe(t, e, i, s, n)
        }
        static fillNum(t, e, i, s, a = n.Left) {
            if (!t) return;
            let l = t.$_GID + "_" + s;
            if (t.name == l) return;
            t.name = l;
            let o = s.length,
                r = 0;
            for (let n = 0; n < o; n++) {
                let a = s[n],
                    l = t.getChildAt(n);
                l ? (l.Init(e, i, a, 0), l.visible = !0) : (l = ei.ApplyNumItem(e, i, a, 0), t.addChild(l)), r += l.width
            }
            for (let e = o; e < t.numChildren; e++) {
                t.getChildAt(e).visible = !1
            }
            if (a == n.Right) {
                let e = t.width;
                for (let i = o - 1; i >= 0; i--) {
                    let s = t.getChildAt(i);
                    s.visible = !0, s.x = e - s.width, e -= s.width
                }
            } else {
                let e = 0;
                a == n.Left ? e = 0 : a == n.Center && (e = .5 * (t.width - r));
                for (let i = 0; i < o; i++) {
                    let s = t.getChildAt(i);
                    s.visible = !0, s.x = .5 * -o + e, e += s.width
                }
            }
        }
        static FillUiNum(t = "main", e = "numBg", i, s, n = !0, a = 5, l = 5) {
            let o = i.getChildAt(0);
            if (o ? o.Init(t, e) : (o = ii.ApplyImgItem(t, e), i.addChild(o)), o.top = a, o.right = l, o.visible = !0, n && s < 1) return void(o.visible = !1);
            let r = s + "",
                h = r.length,
                d = 0;
            for (let e = 0; e < h; e++) {
                let i = o.getChildAt(e);
                i ? (i.Init(t, "icon_word", r[e], 0), i.visible = !0) : ((i = ei.ApplyNumItem(t, "icon_word", r[e], 0)).y = .5 * (o.height - i.height), o.addChild(i)), d += i.width
            }
            for (let t = h; t < o.numChildren; t++) {
                o.getChildAt(t).visible = !1
            }
            let u = .5 * (o.width - d);
            for (let t = 0; t < h; t++) {
                let e = o.getChildAt(t);
                e.visible = !0, e.x = .5 * -h + u, u += e.width
            }
        }
        static FillRedView(t = "main", e = "numBg", i, s, n = 5, a = 5) {
            let l = i.getChildAt(0);
            l ? l.Init && l.Init(t, e) : ((l = ii.ApplyImgItem(t, e)).anchorX = .5, l.anchorY = .5, i.addChild(l)), l.top = n, l.right = a, l.visible = s
        }
        static AddProceMask(t, e, i, s) {
            if (!t) return;
            t.size(e, i);
            let n = t.mask;
            n || (n = new Laya.Sprite, t.mask = n), s > 1 && (s = 1), s <= 0 && (s = .01), n.graphics.clear(), n.graphics.drawRect(0, 0, e * s, t.height, "#ffffff")
        }
        static ClearProceMask(t) {
            t && (t.mask = null)
        }
        static ShowAdIcon(t = "main", e = "iconAd", i, s = !1, n = 5, a = 5) {
            let l = i.getChildAt(0);
            l ? l.Init(t, e) : ((l = ii.ApplyImgItem(t, e)).anchorX = .5, l.anchorY = .5, i.addChild(l)), l.top = n, l.right = a;
            for (let t = 0; t < l.numChildren; t++) {
                l.getChildAt(t).visible = !1
            }
            l.visible = s && Qi.IsVideo()
        }
        static AddUIHero(t, e, i, s) {
            let n = U.GetCfg(e),
                a = n.skin,
                l = n.job,
                o = n.name,
                r = t.getChildAt(0);
            return r || (r = Laya.Pool.getItemByClass("Entity", $i), t.addChild(r)), r.Init(e, null, a, 0, 0, g.Wait, y.hero, i, s, l, o, n, null), r
        }
        static WxAppIconInit(t, e, i, s = 7e3) {
            Qi.IsWx() && t && e && "_iconInited" != e.name && (e.name = "_iconInited", null !== i && (e.y = i), Li.BtnTap(t, e, function () {
                e.visible && null !== Li.wxAppId && Vi.AppGoto(Li.wxAppId)
            }.bind(t)), Laya.timer.loop(s, t, function () {
                e.visible = !1;
                let i = Math.floor(Math.random() * Y.AppIdList.length),
                    s = Y.AppIdList[i],
                    n = Y.VerUrl + "Icon/" + s + ".png";
                Laya.loader.load(n, Laya.Handler.create(t, function () {
                    Li.wxAppId = s, e.skin = n, e.visible = !0, Hi.BtnShake(e)
                }.bind(t)))
            }.bind(t)))
        }
    }
    Li.menuOpen = {}, Li.wxAppId = null;
    class xi {
        static Init() {
            xi.RefreshSet(), K.On(e.VIDEO_FINISH, xi, xi.expVideoAdDone), K.On(e.SHARE_SUCC, xi, xi.shareSucc);
            let t = Yi.Avatar;
            xi.onlineExp = Math.floor(.001 * t.expOnT * xi.onlineOut)
        }
        static IsHasOffExp() {
            let t = 60 * Q.GetVal("moreExpOffLess", 10);
            return xi.offSec && xi.offSec >= t
        }
        static TryOffExp() {
            return !!xi.IsHasOffExp() && (Li.Open(S.OffLine), !0)
        }
        static set offSec(t) {
            Qi.Log("set.offSec", t), xi._offSec = t
        }
        static get offSec() {
            return xi._offSec
        }
        static get offTime() {
            return Qi.GetTimeStr(xi.offSec)
        }
        static get offOut() {
            return xi.onlineOut * parseFloat(Q.GetVal("moreExpOnToOff", "0.5"))
        }
        static get offExp() {
            return xi.offSec * xi.offOut
        }
        static AddOffExp(t, e, i) {
            let s = xi.offExp * t;
            Le.AddMoneyByVal(d.exp, s), Pi.FlyDrop([
                [d.exp, s]
            ], e, i), xi.offSec = 0, Xi.SaveApi(!0)
        }
        static RefreshSet() {
            xi.onlineOut = 0
        }
        static shareSucc(e) {
            e == l.ExpOn && this.expVideoAdDone(t._ExpOnline)
        }
        static expVideoAdDone(e) {
            if (e != t._ExpOnline) return;
            let i = Q.GetVal("moreExpDouble", 3);
            xi.AddOnlineExp(i)
        }
        static GetOnlineExp(t = !1) {
            if (xi.onlineExp <= 0) return;
            if (xi.expProcess < 1) return;
            let e = Yi.Avatar,
                i = Q.GetVal("moreExpOnMin", 10);
            t || e.expOnT < 60 * i * 1e3 ? xi.AddOnlineExp(1) : Li.Open(S.Exp)
        }
        static AddOnlineExp(t) {
            let e = Yi.Avatar,
                i = xi.onlineExp * t;
            xi.onlineExp = 0, e.expOnT = 0;
            let s = .5 * Laya.stage.width,
                n = .5 * Laya.stage.height;
            Pi.FlyDrop([
                [d.exp, i]
            ], s, n), Le.GainSave(t) && Pi.FlyDrop([
                [d.soul, 1]
            ], s, n), Xi.SaveApi(!0)
        }
        static Update(t) {
            if (!xi.onlineOut) return;
            if (xi.IsOnlineMax()) return;
            if (xi._t += t, Yi.Avatar.expOnT += t, xi._t < 1e3) return;
            xi._t = 0;
            let e = xe.ExpDouble(xi.onlineOut);
            xi.onlineExp += e
        }
        static IsOnlineMax() {
            if (Yi.Avatar.expOnT >= xi.onLineMaxT) return !0
        }
        static get expProcess() {
            let t = Yi.Avatar.expOnT / xi.stepSec;
            return t > 1 && (t = 1), t
        }
        static get expTime() {
            let t = Yi.Avatar,
                e = Math.floor(t.expOnT / 1e3);
            return Qi.GetTimeStr(e)
        }
    }
    xi._offSec = null, xi.onlineOut = 0, xi.onlineExp = 0, xi.onLineMaxT = 0, xi.stepSec = 1e4, xi._t = 0;
    class Ci {
        static Init() {
            Ci.initShop(xi.offSec), K.On(e.VIDEO_FINISH, Ci, Ci.shopVideoDone), K.On(e.VIDEO_FINISH, Ci, Ci.patchRefreshVideoDone)
        }
        static setShop(t, e, i, s) {
            let n = Yi.Avatar;
            if (n.shopDict || (n.shopDict = {}), e > 0) {
                let t = Yt.GetRndVal(it.SHOP_WAIT_72);
                e = Math.floor(e * (1 - t))
            }
            n.shopDict[t] = [e, i, s]
        }
        static initShop(t) {
            let e = Yi.Avatar,
                i = J.GetDict();
            for (let s in i) {
                let n = i[s];
                if (e.shopDict[n.id]) e.shopDict[n.id][0] > 0 && (Ci.dayRefDict[n.id] ? delete Ci.dayRefDict[n.id] : (e.shopDict[n.id][0] -= 1e3 * t, e.shopDict[n.id][0] <= 0 && (e.shopDict[n.id][0] = 1)));
                else {
                    let t = n.coldWait[0] > 0 ? 1e3 * n.coldWait[0] : n.coldWait[0],
                        e = 0,
                        i = n.coldWait.length;
                    Ci.setShop(n.id, t, e, i)
                }
            }
        }
        static DayRefresh() {
            let t = J.GetDict();
            for (let e in t) {
                let i = t[e];
                switch (i.type) {
                    case 1:
                    case 4:
                        Ci.dayRefDict[i.id] = 1;
                        let t = i.coldWait[0] > 0 ? 1e3 * i.coldWait[0] : i.coldWait[0],
                            e = 0,
                            s = i.coldWait.length;
                        Ci.setShop(i.id, t, e, s)
                }
            }
            Ci.initShop(0)
        }
        static Update(t) {
            let e = Yi.Avatar;
            for (let i in e.shopDict) e.shopDict[i][0] > 0 && (e.shopDict[i][0] -= t, e.shopDict[i][0] <= 0 && (e.shopDict[i][0] = 0, "14" == i && Ci.ResetPatch()))
        }
        static GetShopInfo(t) {
            return Yi.Avatar.shopDict[t]
        }
        static patchRefreshVideoDone(e) {
            e == t.PatchRefresh && Ci.ResetPatch()
        }
        static shopVideoDone(e, i) {
            e == t.Shop && (Ci.buyDo(i), Xi.VideoReport(400 + i, !0))
        }
        static RndPatchClear() {
            Ci.rndPatchSave = null
        }
        static RndPatch(t, e, i) {
            if (null === Ci.rndPatchSave || i ? Ci.rndPatchSave = [] : e && Qi.DictLen(Ci.rndPatchSave) != e && (Ci.rndPatchSave = []), Ci.rndPatchSave.length > 0) return Ci.rndPatchSave;
            if (null === t) {
                let e = Yi.Avatar;
                t = e.passLv > 150 ? "30,1;180,2;220,3;160,4;130,4" : e.passLv > 100 ? "80,1;200,2;200,3;80,4" : e.passLv > 60 ? "200,1;240,2;100,3" : e.passLv > 30 ? "300,1;200,2;80,3" : "300,1;120,2;50,3"
            }
            let s = {},
                n = {};
            for (let i = 0; i < e; i++) {
                let e = Qi.RndGroupRnd(Qi.RndGroupStrToList(t));
                n[e] || (n[e] = []);
                let i = null;
                if (n[e].length >= 3) {
                    let t = Math.floor(Math.random() * n[e].length);
                    i = n[e][t]
                } else i = Wi.rndForPatch([e], !1), -1 === n[e].indexOf(i) && n[e].push(i);
                s[i] || (s[i] = 0), s[i]++
            }
            for (let t = 5; t >= 1; t--)
                for (let e in s) {
                    let i = parseInt(e);
                    n[t] && -1 != n[t].indexOf(i) && Ci.rndPatchSave.push([i, s[i]])
                }
            Li.Open(S.Award, [null, !1, !0, null, null])
        }
        static PickPatch(t, e, i) {
            let s = Ci.RndPatch(t, e, i);
            for (let t in s) {
                let [e, i] = s[t];
                ve.AddPatch(e, i);
                let n = Wi.GetCfg(e);
                Pi.FlySoliderPatch(n.id, i, i)
            }
        }
        static buyDo(t) {
            let e = J.GetCfg(t),
                i = Ci.GetShopInfo(t),
                [s, n, a] = i,
                l = e.getNum[n];
            if ("freeGold" == e.getItem) 0 == n && Ft.doBookMsg(0);
            else if (l <= 0) return void Pi.FlyTxt("The fragrance is sold today");
            switch (e.getItem) {
                case "freeGold":
                    l = Le.getPassGold(l), Le.AddMoneyByVal(d.gold, l), Pi.FlyDrop([
                        [d.gold, l]
                    ], null, null, null, null, null, null);
                    break;
                case "diamond":
                    Le.AddMoneyByVal(d.diamond, l), Pi.FlyDrop([
                        [d.diamond, l]
                    ], null, null, null, null, null, null);
                    break;
                case "rndPatch1":
                case "rndPatch2":
                case "rndPatch3":
                    let i = e.other.split("|")[n % 3];
                    Ci.RndPatch(i, l, !0);
                    break;
                case "patch":
                    let s = Ci.GetPatchId(t);
                    if (s < 0) {
                        let t = Math.abs(s);
                        ve.AwardSolider(t)
                    } else {
                        let e = Wi.GetCfg(s),
                            i = bt.GetCfg(e.quality).patchNum;
                        6 == t && (i += 10), ve.AddPatch(s, i), Pi.FlySoliderPatch(e.id, Math.floor(.4 * i), i)
                    }
                    break;
                case "diamondGold":
                    l = Le.getPassGold(l), Le.AddMoneyByVal(d.gold, l), Pi.FlyDrop([
                        [d.gold, l]
                    ], null, null, null, null, null, null), n--;
                    break;
                case "diamondTalent":
                    Le.AddMoneyByVal(d.talent, l), Pi.FlyDrop([
                        [d.talent, l]
                    ], null, null, null, null, null, null)
            }
            if (2 == e.type) {
                let t = e.coldWait[0] > 0 ? 1e3 * e.coldWait[0] : e.coldWait[0],
                    i = 0,
                    s = e.coldWait.length;
                Ci.setShop(e.id, t, i, s)
            } else "freeGold" == e.getItem ? (n < e.coldWait.length - 1 && n++, s = 1e3 * e.coldWait[n]) : (n++, s = 1e3 * e.coldWait[n]), Ci.setShop(t, s, n, a);
            return Xi.SaveApi(!1), !0
        }
        static isRed(t, e) {
            if (!Lt.CanOpen(b.Shop)) return !1;
            for (let i in e) {
                let s = e[i],
                    n = J.GetCfg(s),
                    a = Ci.GetShopInfo(s),
                    [l, o, r] = a,
                    h = n.getNum[o];
                if ("" == n.getItem) continue;
                if (!h || h <= 0) continue;
                let d = n.needDiamond[o],
                    u = !!n.needVideo[o];
                if (!(d > 0)) {
                    if (t) {
                        if (l > 0) continue
                    } else if (u) continue;
                    return !0
                }
            }
            return !1
        }
        static IsShopFree() {
            return Ci.isRed(!1, [1, 4, 5])
        }
        static IsShopRed() {
            return Ci.isRed(!0, [1, 2, 3])
        }
        static IsShopGood() {
            return Ci.isRed(!0, [6])
        }
        static TryBuy(e) {
            let i = J.GetCfg(e),
                s = Ci.GetShopInfo(e),
                [n, a, l] = s,
                o = i.getNum[a];
            if ("" == i.getItem);
            else if (o <= 0) return void Pi.FlyTxt("The fragrance is sold today");
            let r = 0,
                h = i.needDiamond[a],
                u = !!i.needVideo[a];
            if (h <= 0) {
                if (u) return void Vi.VideoAdPlay("Get chest", t.Shop, e);
                if ("patch" == i.getItem) {
                    let t = Ci.GetPatchId(e),
                        i = Math.abs(t),
                        s = Wi.GetCfg(i),
                        n = bt.GetCfg(s.quality);
                    r = t < 0 ? Math.floor(n.actPatch * n.patchPrice * 1.6) : n.patchPrice * n.patchNum
                } else "rndPatch2" != i.getItem && "rndPatch3" != i.getItem || Ft.doBookMsg(0)
            } else if (h > 0)
                if (-1 == n);
                else if (u) {
                if (!(n > 0)) return void Vi.VideoAdPlay(null, t.Shop, e);
                r = h
            } else {
                i.coldWait[a] > 0 ? n > 0 && (r = h) : r = h
            }
            if (r > 0) {
                if (!Le.HasMoneyByVal(d.diamond, r)) return void Pi.FlyTxt("Lack of diamond", !0);
                if (!Le.CostMoneyByVal(d.diamond, r)) return void Pi.FlyTxt("Diamond logic error", !0)
            }
            return Ci.buyDo(e)
        }
        static ResetPatch() {
            Yi.Avatar.shopPatch = null;
            let t = J.GetDict();
            for (let e in t) {
                let i = t[e];
                if (3 == i.type || -3 == i.type) {
                    let t = i.coldWait[0] > 0 ? 1e3 * i.coldWait[0] : i.coldWait[0],
                        e = 0,
                        s = i.coldWait.length;
                    Ci.setShop(i.id, t, e, s)
                }
            }
        }
        static GetPatchId(t) {
            let e = Yi.Avatar;
            if (null === e.shopPatch) {
                e.shopPatch = {};
                let t = 0,
                    i = J.GetDict();
                for (let s in i) {
                    let n = i[s];
                    if (3 == n.type) {
                        if (0 == n.needVideo[0] && Math.random() < .34 && t <= 1) {
                            let i = Wi.rndForSolider(null, !0);
                            i = -i, t++, e.shopPatch[n.id] = i;
                            continue
                        }
                        let i = Wi.rndForPatch(null, !0);
                        e.shopPatch[n.id] = i
                    }
                }
            }
            return e.shopPatch[t]
        }
    }
    Ci.dayRefDict = {}, Ci.rndPatchSave = null;
    class Bi extends Laya.Image {
        constructor() {
            super(), this.t = 0
        }
        InitDrop(t, e, i, s = 1, n = 0, a = null, l = null, o = null) {
            switch (this.itemId = i, -1 == [d.patchSolider, d.awardSolider, d._patch1, d._patch2, d._patch3, d._patch4].indexOf(i) && (i = Math.abs(i)), i) {
                case d.heroPatch:
                    this._resUrl = `${Y.ResUrl}images/spineHead/${a}.png`, Laya.loader.load(this._resUrl, Laya.Handler.create(this, this.onSkinLoad, [t, e, i, s, n, l, o]));
                    break;
                case d.patchSolider:
                    let r = Math.random() < .5 ? -1 : 1,
                        h = Math.random() < .5 ? -1 : 1;
                    t += Qi.RandomInt(32, 58) * r, e += Qi.RandomInt(32, 58) * h;
                case d.awardSolider:
                    this.skin = `images/man/${a}.png`, X.InitPivot(this, "man", a), this.rotation = 90, this.flyDrop(t, e, s, n, null, l, o), Laya.timer.loop(520, this, this.patchSoliderFlash);
                    break;
                case d.patch:
                case d._patch1:
                case d._patch2:
                case d._patch3:
                case d._patch4:
                case d._patch5:
                    this.skin = `images/obj/${a}.png`, X.InitPivot(this, "obj", a), this.flyDrop(t, e, s, n, null, l, o);
                    break;
                case d._money:
                    this.skin = "images/obj/fly6_.png", X.InitPivot(this, "obj", "fly6_"), this.flyDrop(t, e, s, n, null, l, o);
                    break;
                default:
                    let u = "fly" + yt.GetCfg(i).imgId;
                    this.skin = "images/obj/" + u + ".png", X.InitPivot(this, "obj", u), this.flyDrop(t, e, s, n, null, l, o)
            }
        }
        patchSoliderFlash() {
            Hi.FlashEffect(this, 120, 100)
        }
        onSkinLoad(t, e, i, s, n, a = null, l = null) {
            this.skin = this._resUrl, X.InitPivot(this, "", ""), this.flyDrop(t, e, s, n, null, a, l)
        }
        flyDrop(t, e, i = 1, s = 0, n = null, a = null, l = null) {
            if (this.x = t, this.y = e, this.pickOpen = !1, this.scale(1, 1), this.alpha = 1, this.itemId > It.Weapon600 || this.itemId > It.Stone800);
            else if (this.itemId > It.Card100 || this.itemId > It.Box500) switch (this.itemId) {
                case d.cardExp:
                case d.cardGold:
                    Hi.BigTo(this, this.itemId, this.dropClear.bind(this), a, l);
                    break;
                case d.box1:
                case d.box2:
                case d.cardExp:
                case d.cardGold:
                    Hi.LineTo(this, this.itemId, 1, 1, this.dropClear.bind(this), a, l);
                    break;
                default:
                    this.dropClear()
            } else switch (this.itemId) {
                case d.awardSolider:
                case d.patchSolider:
                    Hi.FlyTo(this, this.itemId, i, s, this.dropClear.bind(this), a, l, 4.36);
                    break;
                case d.patch:
                case d._patchExist:
                case d._patch1:
                case d._patch2:
                case d._patch3:
                case d._patch4:
                case d._patch5:
                    Hi.FlyTo(this, this.itemId, i, s, this.dropClear.bind(this), a, l, 1.65);
                    break;
                case d.money:
                case d._money:
                case d.diamond:
                case d._diamond:
                case d.flash:
                case d.heroPatch:
                case d.talent:
                    Hi.FlyTo(this, this.itemId, i, s, this.dropClear.bind(this), a, l);
                    break;
                case d._flash:
                    Hi.FlyTo(this, this.itemId, i, s, this.dropClear.bind(this), a, l, 6, .6);
                    break;
                case d.exp:
                case d._exp:
                case d.soul:
                case d.gold:
                case d._gold:
                    Hi.CenterTo(this, this.itemId, i, s, this.dropClear.bind(this), a, l);
                    break;
                default:
                    this.dropClear()
            }
        }
        dropClear() {
            switch (this.itemId) {
                case d.gold:
                case d.soul:
                case d.diamond:
            }
            Ui.FlyDone(this.itemId), this.clear()
        }
        clear() {
            Laya.timer.clear(this, this.patchSoliderFlash), this.rotation = 0, this.scale(1, 1), this.removeSelf(), Laya.Pool.recover("DropItem", this)
        }
    }
    class wi extends Laya.Box {
        constructor() {
            super(), this.size(200, 60)
        }
        Init(t, e, i, s = null, n) {
            this.pos(e, i), this.baseFly(s);
            let a = `-${t}`,
                l = a.length,
                o = 0;
            for (let t = 0; t < l; t++) {
                let e = this.getChildAt(t);
                e ? e.Init("font", n, a[t], 0) : (e = ei.ApplyNumItem("font", n, a[t], 0), this.addChild(e)), o += e.width
            }
            for (let t = l; t < this.numChildren; t++) {
                this.getChildAt(t).visible = !1
            }
            let r = 0;
            for (let t = 0; t < l; t++) {
                let e = this.getChildAt(t);
                e.visible = !0, e.x = .5 * -o + r, r += e.width
            }
        }
        ViolentFly() {
            this.scaleX = .55, this.scaleY = .55, this.alpha = .65, Laya.Tween.to(this, {
                alpha: 1,
                scaleX: 1,
                scaleY: 1
            }, 65, null, Laya.Handler.create(this, function () {
                Laya.Tween.to(this, {
                    alpha: .3,
                    scaleX: .45,
                    scaleY: .45
                }, 320, null, Laya.Handler.create(this, function () {
                    Pi.FlyBloodPngDone(this)
                }))
            }), 58)
        }
        baseFly(t = null) {
            null == t && (t = 360 * Math.random()), this.scaleX = .75, this.scaleY = .75, this.alpha = .9;
            let e = 360,
                i = 270,
                s = -74,
                n = Qi.moveToX(t, 125);
            n < 0 ? n = n > -10 ? -10 : n : n > 0 && (n = n < 10 ? 10 : n), this.x + n < .5 * this.width ? (n = .5 * this.width - this.x, i += 60, s -= 12) : this.x + this.width + n > Laya.stage.width - 10 && (n = Laya.stage.width - this.x - .5 * this.width, i += 60, s -= 12);
            let a = Qi.moveToY(t, 145);
            a > -5 && (a = -5), e = Math.floor(1 * e / qi.tdSpeed), i = Math.floor(1 * i / qi.tdSpeed), Laya.Tween.to(this, {
                x: this.x + n,
                y: this.y + a,
                alpha: 1,
                scaleX: 1,
                scaleY: 1
            }, e, null, Laya.Handler.create(this, function () {
                Laya.Tween.to(this, {
                    y: this.y + s,
                    alpha: .7,
                    scaleX: 1.2,
                    scaleY: 1.2
                }, i, null, Laya.Handler.create(this, function () {
                    Pi.FlyBloodPngDone(this)
                }), 96)
            }), 30)
        }
    }
    class Gi extends Laya.Label {
        constructor() {
            super()
        }
        Init(t, e, i, s, n, a = null, l = null) {
            this.pos(s, n), this.anchorX = .5, this.anchorY = .5, t ? (this.color = "#FFFFFF", this.strokeColor = "#f65031", this.stroke = 7, this.fontSize = 42, this.text = "暴击" + i, this.ViolentFly()) : (this.color = e == y.hero ? "#ffffff" : "#aa0000", this.strokeColor = "#FFFFFF", this.stroke = 3, this.fontSize = 30, this.text = i + "", this.baseFly(a)), null !== l && (this.color = l)
        }
        ViolentFly() {
            this.scaleX = .55, this.scaleY = .55, this.alpha = .65, Laya.Tween.to(this, {
                alpha: 1,
                scaleX: 1,
                scaleY: 1
            }, 48, null, Laya.Handler.create(this, function () {
                Laya.Tween.to(this, {
                    alpha: .3,
                    scaleX: .45,
                    scaleY: .45
                }, 225, null, Laya.Handler.create(this, function () {
                    Pi.FlyBloodTxtDone(this)
                }))
            }), 58)
        }
        baseFly(t = null) {
            null == t && (t = 360 * Math.random()), this.scaleX = .75, this.scaleY = .75, this.alpha = .9;
            let e = 140,
                i = -56,
                s = Qi.moveToX(t, 125);
            s < 0 ? s = s > -10 ? -10 : s : s > 0 && (s = s < 10 ? 10 : s), this.x + s < .5 * this.width ? (s = .5 * this.width - this.x, e += 60, i -= 12) : this.x + this.width + s > Laya.stage.width - 10 && (s = Laya.stage.width - this.x - .5 * this.width, e += 60, i -= 12);
            let n = Qi.moveToY(t, 145);
            n > -5 && (n = -5), Laya.Tween.to(this, {
                x: this.x + s,
                y: this.y + n,
                alpha: 1,
                scaleX: 1,
                scaleY: 1
            }, 240, null, Laya.Handler.create(this, function () {
                Laya.Tween.to(this, {
                    y: this.y + i,
                    alpha: .7,
                    scaleX: 1.2,
                    scaleY: 1.2
                }, e, null, Laya.Handler.create(this, function () {
                    Pi.FlyBloodTxtDone(this)
                }), 96)
            }), 30)
        }
    }
    class Oi extends Laya.Box {
        constructor() {
            super(), this.size(240, 60)
        }
        Init(t, e, i, s) {
            this.pos(e, i), this.baseFly();
            let n = `${t}hits`,
                a = n.length,
                l = 0;
            for (let t = 0; t < a; t++) {
                let e = this.getChildAt(t);
                e ? e.Init("font", s, n[t], 0) : (e = ei.ApplyNumItem("font", s, n[t], 0), this.addChild(e)), l += e.width
            }
            for (let t = a; t < this.numChildren; t++) {
                this.getChildAt(t).visible = !1
            }
            let o = 0;
            for (let t = 0; t < a; t++) {
                let e = this.getChildAt(t);
                e.visible = !0, e.x = .5 * -l + o, o += e.width
            }
        }
        baseFly() {
            this.scaleX = .75, this.scaleY = .75, this.alpha = .8;
            let t = 270,
                e = 360;
            t = Math.floor(1 * t / qi.tdSpeed), e = Math.floor(1 * e / qi.tdSpeed), Laya.Tween.to(this, {
                x: this.x,
                y: this.y + -34,
                alpha: 1,
                scaleX: 1,
                scaleY: 1
            }, t, null, Laya.Handler.create(this, function () {
                Laya.Tween.to(this, {
                    y: this.y + -44,
                    alpha: .7,
                    scaleX: 1.126,
                    scaleY: 1.3
                }, e, null, Laya.Handler.create(this, function () {
                    Pi.FlyHitsPngDone(this)
                }), 96)
            }), 30)
        }
    }
    class Ai extends Laya.Box {
        constructor() {
            super(), this.size(200, 60)
        }
        Init(t, e, i, s) {
            this.pos(e, i), this.baseFly();
            let n = t >= 0 ? `+${t}` : `${t}`,
                a = n.length,
                l = 0;
            for (let t = 0; t < a; t++) {
                let e = this.getChildAt(t);
                e ? e.Init("font", s, n[t], 0) : (e = ei.ApplyNumItem("font", s, n[t], 0), this.addChild(e)), l += e.width
            }
            for (let t = a; t < this.numChildren; t++) {
                this.getChildAt(t).visible = !1
            }
            let o = 0;
            for (let t = 0; t < a; t++) {
                let e = this.getChildAt(t);
                e.visible = !0, e.x = .5 * -l + o, o += e.width
            }
        }
        baseFly() {
            this.scaleX = .75, this.scaleY = .75, this.alpha = .8;
            let t = 180,
                e = 150;
            t = Math.floor(1 * t / qi.tdSpeed), e = Math.floor(1 * e / qi.tdSpeed), Laya.Tween.to(this, {
                x: this.x,
                y: this.y + -26,
                alpha: 1,
                scaleX: 1,
                scaleY: 1
            }, t, null, Laya.Handler.create(this, function () {
                Laya.Tween.to(this, {
                    y: this.y + -42,
                    alpha: .7,
                    scaleX: 1.2,
                    scaleY: 1.2
                }, e, null, Laya.Handler.create(this, function () {
                    Pi.FlyMoneyPngDone(this)
                }), 96)
            }), 30)
        }
    }! function (t) {
        t[t.Kill = 1] = "Kill", t[t.Hit = 2] = "Hit"
    }(dt || (dt = {}));
    class ki extends Laya.Image {
        constructor() {
            super(), this.anchorX = .5, this.anchorY = .5
        }
        Init(t, e, i) {
            this.pos(t, e), i == dt.Hit ? this.skin = "images/font/yelloww_^.png" : i == dt.Kill && (this.skin = "images/font/yelloww_!.png"), this.baseFly()
        }
        baseFly() {
            this.scaleX = .75, this.scaleY = .75, this.alpha = .9;
            let t = 360,
                e = 270;
            t = Math.floor(1 * t / qi.tdSpeed), e = Math.floor(1 * e / qi.tdSpeed), Laya.Tween.to(this, {
                y: this.y + -60,
                alpha: 1,
                scaleX: 1,
                scaleY: 1
            }, t, null, Laya.Handler.create(this, function () {
                Laya.Tween.to(this, {
                    y: this.y + -24,
                    alpha: .7,
                    scaleX: 1.2,
                    scaleY: 1.2
                }, e, null, Laya.Handler.create(this, function () {
                    Pi.FlySuperPngDone(this)
                }), 96)
            }), 30)
        }
    }
    class Di extends Laya.Box {
        constructor() {
            super(), this.size(750, 48), this.centerX = .5, this.bg = new Laya.Image("images/obj/floatBg.png"), this.bg.sizeGrid = "0,17,0,17", this.bg.width = 620, this.bg.height = 48, this.bg.centerX = .5, this.bg.centerY = .5, this.addChild(this.bg), this.txt = new Laya.Label, this.txt.bold = !0, this.txt.centerX = .5, this.txt.centerY = .5, this.txt.fontSize = 24, this.txt.color = "#ffffff", this.addChild(this.txt), this.x = .5 * (Laya.stage.width - this.width), this.y = .5 * (Laya.stage.height - this.height)
        }
        Init(t, e = "#ffffff", i = null, s = null, n = 0) {
            this.name = "fly_" + Qi.HashCode(t), this.x = .5 * (Laya.stage.width - this.width), this.y = .5 * (Laya.stage.height - this.height) + n, null === i && (i = 1400), null === s && (s = 280), this.txt.text = t, this.txt.color = e, Laya.Tween.to(this, {
                y: this.y - 200
            }, i, null, Laya.Handler.create(this, function () {
                this.removeSelf(), Laya.Pool.recover("flyTxtItem", this)
            }, null, !1), s)
        }
    }
    class Ei extends Laya.Image {
        constructor() {
            super(), this.t = 0, this.loop = 1, this._t = 0
        }
        InitEff(t, e, i, s, n = null, a = 1) {
            let l = qt.CenterInfo(t, e);
            this.effectDir = t, this.effectName = e, this.pngNum = l.pngs, this.interval = l.interval, this.pngI = 1, this._t = Laya.timer.currTimer, this.t = 0, this.skin = `images/${t}/${this.effectName}_${this.pngI}.png`, this.pivot(l.centX, l.centY), null !== n && (this.rotation = n), this.x = i, this.y = s, this.loop = a, Laya.timer.frameLoop(1, this, this.run)
        }
        run() {
            let t = Laya.timer.currTimer,
                e = t - this._t;
            if (this._t = t, this.parent == qi.GetLayer(ut.Delay) && (e *= qi.tdSpeed), e > 30 && (e = 30), this.t += e, !(this.t < this.interval)) {
                if (++this.pngI > this.pngNum) {
                    if (!(--this.loop > 0)) return this.clear(), !0;
                    this.pngI = 1
                }
                this.skin = `images/${this.effectDir}/${this.effectName}_${this.pngI}.png`, this.t %= this.interval
            }
        }
        clear() {
            Laya.timer.clear(this, this.run), this.removeSelf(), this.scaleX = 1, this.scaleY = 1, this.alpha = 1, Laya.Pool.recover("EffItem", this)
        }
        SetInterval(t) {
            this.interval = t
        }
    }
    class Pi {
        static Init() {
            Pi.flyDef = {}, Pi.flyCache = {}, Pi.Layer = new Laya.Sprite, Pi.Layer.mouseThrough = !0;
            let t = Laya.stage.width,
                e = Laya.stage.height;
            Pi.BloodLayer = new Laya.Image, Pi.BloodLayer.width = t, Pi.BloodLayer.height = e, Pi.BloodLayer.x = 0, Pi.BloodLayer.y = 0, Pi.Layer.addChild(Pi.BloodLayer), Pi.EffectLayer = new Laya.Image, Pi.EffectLayer.width = t, Pi.EffectLayer.height = e, Pi.EffectLayer.anchorX = .5, Pi.EffectLayer.x = .5 * t, Pi.EffectLayer.y = 0, Pi.Layer.addChild(Pi.EffectLayer), Pi.DropLayer = new Laya.Image, Pi.DropLayer.width = t, Pi.DropLayer.height = e, Pi.DropLayer.anchorX = .5, Pi.DropLayer.x = .5 * t, Pi.DropLayer.y = 0, Pi.Layer.addChild(Pi.DropLayer), Pi.TxtLayer = new Laya.Image, Pi.TxtLayer.width = t, Pi.TxtLayer.height = e, Pi.TxtLayer.anchorX = .5, Pi.TxtLayer.x = .5 * t, Pi.TxtLayer.y = 0, Pi.Layer.addChild(Pi.TxtLayer)
        }
        static UpdateFly(t) {
            let e = Laya.stage.height - 100,
                i = e - (e - 150) * t;
            i = i < 150 ? 150 : i, Pi.flyPlane.y = i
        }
        static initLine() {
            let t = Laya.stage.height - 100,
                e = "#ffffff";
            Pi.LineLayer.graphics.drawLine(7, 280, 7, t, e, 2);
            for (let i = 0; i <= 10; i++) {
                let s = 280 + Math.floor((t - 280) / 10 * i);
                0 == i ? (Pi.LineLayer.graphics.drawLine(7, s, 27, s, e, 2), Pi.labTop = new Laya.Label("Top"), Pi.labTop.fontSize = 22, Pi.labTop.color = e, Pi.labTop.pos(7, s - 32), Pi.LineLayer.addChild(Pi.labTop)) : 10 == i ? (Pi.LineLayer.graphics.drawLine(7, s, 27, s, e, 2), Pi.labBottom = new Laya.Label("Bottom"), Pi.labBottom.fontSize = 22, Pi.labBottom.color = e, Pi.labBottom.pos(7, s + 5), Pi.LineLayer.addChild(Pi.labBottom)) : i % 2 == 1 ? Pi.LineLayer.graphics.drawLine(7, s, 17, s, e, 2) : Pi.LineLayer.graphics.drawLine(7, s, 22, s, e, 2)
            }
            Pi.flyPlane = new Laya.Image("images/open/hongbao_ty.png"), Pi.LineLayer.addChild(Pi.flyPlane), Pi.flyPlane.anchorY = .5, Pi.flyPlane.pos(7, t), Pi.LineLayer.alpha = 0, Pi.flyPlane.alpha = 0
        }
        static OnFight() {
            Laya.Tween.to(Pi.LineLayer, {
                alpha: .74
            }, 1500), Laya.Tween.to(Pi.flyPlane, {
                alpha: 1
            }, 1500)
        }
        static StopFight() {
            Laya.Tween.to(Pi.LineLayer, {
                alpha: 0
            }, 1500), Laya.Tween.to(Pi.flyPlane, {
                alpha: 0
            }, 1500)
        }
        static GetLayer() {
            return Pi.Layer
        }
        static FlyTxt(t, e = !1, i = "#ffffff", s = 1650, n = 295, a = 0) {
            if (!e) {
                let e = "fly_" + Qi.HashCode(t);
                if (Pi.TxtLayer.getChildByName(e)) return
            }
            let l = Laya.Pool.getItemByClass("flyTxtItem", Di);
            Pi.TxtLayer.addChild(l), l.Init(t, i, s, n, a)
        }
        static _FlyBloodTxt(t, e, i, s, n, a = null, l = null, o = null) {
            if (Li.HadOpen) return;
            let r = Laya.Pool.getItemByClass("flyBloodTxt", Gi);
            r.Init(t, e, i, s, n, a, l), null === o || o <= 0 ? Pi.BloodLayer.addChild(r) : setTimeout(() => {
                Pi.BloodLayer.addChild(r)
            }, o)
        }
        static FlyBloodPngDone(t) {
            Laya.Pool.recover("flyBloodPng", t), t.removeSelf()
        }
        static FlySuperPngDone(t) {
            Laya.Pool.recover("flySuperPng", t), t.removeSelf()
        }
        static FlyBloodPng(t, e, i, s = null, n, a = null) {
            if (Li.HadOpen) return;
            e += mt.topX, i += mt.topY;
            let l = Laya.Pool.getItemByClass("flyBloodPng", wi);
            l.Init(t, e, i, s, n), null === a || a <= 0 ? Pi.BloodLayer.addChild(l) : setTimeout(() => {
                Pi.BloodLayer.addChild(l)
            }, a)
        }
        static FlyMoneyPng(t, e, i, s = "yelloww") {
            e += mt.topX, i += mt.topY;
            let n = Laya.Pool.getItemByClass("flyMoneyPng", Ai);
            n.Init(t, e, i, s), Pi.BloodLayer.addChild(n)
        }
        static FlyMoneyPngDone(t) {
            Laya.Pool.recover("flyMoneyPng", t), t.removeSelf()
        }
        static FlyHitsPng(t, e, i, s = "icon_word") {
            e += mt.topX, i += mt.topY - 75;
            let n = Laya.Pool.getItemByClass("flyHitsPng", Oi);
            n.Init(t, e, i, s), Pi.BloodLayer.addChild(n)
        }
        static FlyHitsPngDone(t) {
            Laya.Pool.recover("flyHitsPng", t), t.removeSelf()
        }
        static FlySpuerPng(t, e, i) {
            if (Li.HadOpen) return;
            t += mt.topX, e += mt.topY;
            let s = Laya.Pool.getItemByClass("flySuperPng", ki);
            s.Init(t, e, i), Pi.BloodLayer.addChild(s)
        }
        static FlyBloodTxtDone(t) {
            Laya.Pool.recover("flyBloodTxt", t), t.removeSelf()
        }
        static AddEffect(t, e, i, s = null, n = 1, a = 0, l = 0) {
            let o = Laya.Pool.getItemByClass("EffItem", Ei);
            return t.addChild(o), o.InitEff(e, i, a, l, s, n), o
        }
        static FlySec() {
            let t = "icon_djs_" + qi.beginSec,
                e = `images/obj/${t}.png`,
                i = new Laya.Image(e);
            X.InitPivot(i, "obj", t);
            let s = .5 * Laya.stage.width,
                n = .45 * Laya.stage.height;
            i.pos(s, n), Pi.DropLayer.addChild(i), Z.Play(L.no), Hi.UpBigTo(i, 50, 520, 1.24, 1.34, () => {
                i.destroy(), --qi.beginSec >= 0 ? setTimeout(function () {
                    Pi.FlySec()
                }, 600) : qi.CountDownFinish()
            })
        }
        static CanTap(t, e) {
            let i = new Laya.Image("images/obj/icon_jz.png");
            X.InitPivot(i, "obj", "icon_jz"), i.pos(t, e), Pi.DropLayer.addChild(i), setTimeout(function () {
                i.destroy()
            }, 300)
        }
        static FlyBuffer(t) {
            let e = "buff" + t,
                i = "images/fight/" + e + ".png",
                s = new Laya.Image(i);
            X.InitPivot(s, "fight", e);
            let n = .5 * Laya.stage.width,
                a = .75 * Laya.stage.height;
            s.pos(n, a), Pi.DropLayer.addChild(s), t == o.Exp ? Hi.UpBigTo(s, 240, 1400, 1.8, 4.6, () => {
                s.destroy()
            }) : t == o.Gold && Hi.UpFlyTo(s, 220, 1500, 2.4, 1.8, () => {
                s.destroy()
            })
        }
        static ShowBossing() {
            let t = new Laya.Image("images/grid/maskLight.png");
            t.sizeGrid = "2,3,4,3", t.width = Laya.stage.width, t.height = Laya.stage.height, t.pos(0, 0), Pi.DropLayer.addChild(t);
            let e = new Laya.Image("images/obj/coming.png");
            X.InitPivot(e, "obj", "coming");
            let i = .5 * Laya.stage.width,
                s = .45 * Laya.stage.height;
            e.pos(i, s), t.addChild(e), setTimeout(() => {
                Laya.Tween.to(t, {
                    alpha: 0
                }, 400)
            }, 1070), Hi.BossComing(e, 1350, .86, 1.1, () => {
                t.destroy()
            })
        }
        static ShowHeroBack() {
            let t = new Laya.Image("images/obj/back.png");
            t.anchorX = .5, t.anchorY = .5;
            let e = .5 * Laya.stage.width,
                i = .31 * Laya.stage.height;
            t.pos(e, i), Pi.DropLayer.addChild(t), Hi.BossComing(t, 1500, .98, 1.06, () => {
                t.destroy()
            })
        }
        static FlySoliderPatch(t, e, i) {
            if (i > 0) {
                if (!ve.GetSoliderLv(t)) {
                    let e = ve.PatchNum(t),
                        s = e - i,
                        n = ve.ActNeedPatch(t);
                    if (s < n && e >= n) return void setTimeout(function () {
                        let e = Wi.GetCfg(t);
                        Pi.FlyDrop([
                            [d.patchSolider, 1]
                        ], null, null, e.skin, null, null, 1)
                    }, 460)
                }
            }
            Pi.FlyDrop([
                [d.patch, 1]
            ], null, null, "sp_" + t, null, null, e)
        }
        static FlyAwardSolider(t) {
            setTimeout(function () {
                let e = Wi.GetCfg(t);
                Pi.FlyDrop([
                    [d.awardSolider, 1]
                ], null, null, e.skin, null, null, 1)
            }, 1200)
        }
        static FlyDrop(t, e = null, i = null, s = null, n = null, a = null, l = null) {
            null === e && (e = .5 * Laya.stage.width), null === i && (i = .5 * Laya.stage.height);
            for (let o in t) {
                let r = t[o],
                    h = r[0],
                    u = r[1],
                    c = 0;
                if (h > It.Weapon600 || h > It.Stone800);
                else if (h > It.Card100 || h > It.Box500) switch (h) {
                    case d.heroPatch:
                        c = u;
                        break;
                    default:
                        c = 1
                } else switch (h) {
                    case d._money:
                        c = 1;
                        break;
                    case d.money:
                        c = 3;
                        break;
                    case d.flash:
                    case d.diamond:
                    case d._diamond:
                        c = 6;
                        break;
                    case d._flash:
                        c = 1;
                        break;
                    case d.gold:
                    case d._gold:
                        c = 6;
                        break;
                    case d.exp:
                        c = 12;
                        break;
                    case d._exp:
                        c = 5;
                        break;
                    case d.patchSolider:
                    case d.awardSolider:
                        c = 1;
                        break;
                    case d.patch:
                        if (!s) return void Ci.RndPatch(null, u, !1); {
                            let t = parseInt(s.substr(3));
                            ve.GetSoliderLv(t) && (h = d._patchExist), c = 1
                        }
                        break;
                    case d._patch1:
                    case d._patch2:
                    case d._patch3:
                    case d._patch4:
                    case d._patch5:
                        c = 1;
                        break;
                    case d.soul:
                        c = 12;
                        break;
                    case d.talent:
                        c = u;
                        break;
                    default:
                        c = 1
                }
                null !== l && (c = l);
                for (let t = 0; t < c; t++) {
                    let l = Laya.Pool.getItemByClass("DropItem", Bi);
                    Pi.DropLayer.addChild(l), l.InitDrop(e, i, h, c, t, s, n, a)
                }
            }
        }
        static FlashCostFly(t, e, i, s) {
            let n = 360 * Math.random();
            for (let a = 1; a <= t; a++) {
                let a = Laya.Pool.getItemByClass("DropItem", Bi);
                Pi.DropLayer.addChild(a);
                let l = 4 + 8 * Math.random();
                e += Qi.moveToX(n, l), i += Qi.moveToY(n, l), s = s - 8 + 16 * Math.random();
                let o = e + Qi.moveToX(n, s),
                    r = i + Qi.moveToY(n, s);
                a.InitDrop(e, i, d._flash, 1, 1, null, o, r), n += 360 / t - 3 + 6 * Math.random()
            }
        }
        static FLoatOpen(t) {
            let e = Pi.flyCache[t];
            if (!e) {
                let i = Pi.flyDef[t];
                if (null == i) return void console.error("Fly not exist:" + t);
                e = new i, Pi.flyCache[t] = e
            }
            e.Open(), Pi.Layer.addChild(e)
        }
        static FloatClose(t) {
            let e = Pi.flyCache[t];
            e && (e.Close(), e.removeSelf())
        }
        static SkillLineFly(t, e, i, s, n, a, l) {
            if (!Qi.IsResLoad(t)) return;
            if (Li.HadOpen) return;
            let o = Laya.Pool.getItemByClass("EffItem", Ei);
            a < s && (o.scaleX = -1), Pi.EffectLayer.addChild(o), o.InitEff(t, e, s, n, null, 9999), Laya.Tween.to(o, {
                x: a,
                y: l
            }, i, null, Laya.Handler.create(Pi, () => {
                o.clear()
            }))
        }
        static SkillUpDown(t, e, i, s, n, a = 0, l = 0) {
            if (!Qi.IsResLoad(e)) return;
            if (Li.HadOpen) return;
            let o = Laya.Pool.getItemByClass("EffItem", Ei);
            t.addChild(o), o.InitEff(e, i, s, n, null, 1), a && l && (o.x -= a, Laya.Tween.to(o, {
                y: n
            }, l))
        }
        static KillEffect(t, e, i, s = null, n = 1, a = 0, l = 0) {
            let o = Laya.Pool.getItemByClass("EffItem", Ei);
            return t.addChild(o), o.InitEff(e, i, a, l, s, n), o
        }
    }
    class Ni {
        static Init() {
            Qi.IsTx() && ((Y.TxBookSign || Y.TxBookOff) && (Ni.bookSave = [], Y.TxBookSign && Ni.bookSave.push(Y.TxBookSign), Y.TxBookOff && Ni.bookSave.push(Y.TxBookOff)), qq && qq.setKeepScreenOn && qq.setKeepScreenOn({
                keepScreenOn: !0
            }))
        }
        static AppGoto(t) {
            Qi.IsTx() && qq && qq.navigateToMiniProgram && qq.navigateToMiniProgram({
                appId: t,
                path: "",
                extraData: null,
                envVersion: "release",
                success(t) {},
                fail(t) {}
            })
        }
        static BookMsg() {
            Qi.IsTx() && qq && qq.subscribeAppMsg && (!Ni.bookSave || Ni.bookSave.length <= 0 || qq.subscribeAppMsg({
                tmplIds: Ni.bookSave,
                subscribe: !0,
                success(t) {
                    let e = "",
                        i = "";
                    for (let s in t) {
                        "accept" == t[s] && (s == Y.TxBookSign ? (e += k.Sign + ",", i += s + ",") : s == Y.TxBookOff && (e += k.Off + ",", i += s + ","))
                    }
                    e && (e = e.substr(0, e.length - 1), i = i.substr(0, i.length - 1), Xi.BookDone(e, i))
                },
                fail(t) {}
            }))
        }
        static Exit() {
            Qi.IsTx() && qq && qq.exitMiniProgram && qq.exitMiniProgram(null)
        }
        static AddColor() {
            Qi.IsTx() && qq && qq.getSetting && qq && qq.openSetting && qq && qq.authorize && qq.getSetting({
                success(t) {
                    t && (!0 === t.authSetting["scope.recentColorSign"] ? Ni._addColor() : !1 === t.authSetting["scope.recentColorSign"] ? Ni.authColor++ % 2 == 0 ? qq.openSetting(null) : (Ni.authColor,
						Pi.FlyTxt("You need to set the \"color swabs\" permission item", !1, "#ffffff", 2400)) : (Pi.FlyTxt("Add color swabs to claim rewards"), 
					qq.authorize && qq.authorize({
                        scope: "scope.recentColorSign",
                        success() {
                            Ni._addColor()
                        },
                        fail() {
                            ++Ni.addColor
                        }
                    })))
                }
            })
        }
        static HasColor() {
            if (Qi.IsTx() && qq && qq.isColorSignExistSync) return qq.isColorSignExistSync()
        }
        static _addColor() {
            Qi.IsTx() && qq && qq.isColorSignExistSync && qq && qq.addColorSign && (qq.isColorSignExistSync() ? (Pi.FlyTxt("成功领取彩签奖励"), K.Evt(e.COLOR_SIGN_SUCC, [l.daySoul])) : qq.addColorSign && qq.addColorSign({
                success(t) {
                    Pi.FlyTxt("成功领取奖励"), K.Evt(e.COLOR_SIGN_SUCC, [l.daySoul])
                },
                fail(t) {
                    ++Ni.addColor, Pi.FlyTxt("添加彩签领取奖励")
                },
                complete(t) {}
            }))
        }
        static GetScene() {
            if (!Qi.IsTx()) return;
            if (!qq || !qq.getLaunchOptionsSync) return;
            let t = qq.getLaunchOptionsSync();
            return t && t.scene ? t.scene : void 0
        }
        static TxLogin() {
            qq.login({
                success(t) {
                    t.code && Xi.LoginTx(t.code, Pt.LoginSuccCb)
                }
            })
        }
        static isIos() {
            let t = qq.getSystemInfoSync();
            if (t && t.system) {
                return "ios" === t.system.substr(0, 3).toLowerCase()
            }
            return !1
        }
        static InitListen(t) {
            if (!Qi.IsTx()) return !1;
            qq.onShow(function (t) {
                Mt.ShareDone()
            }), qq.showShareMenu({
                withShareTicket: !0,
                success: null,
                fail: null,
                complete: null
            }), qq.onShareAppMessage(function () {
                return Mt.ShareStart(), {
                    title: "快来一起来玩吧",
                    query: "what=good&money=666",
                    imageUrl: Mt.ShareUrl(),
                    success: null,
                    fail: null,
                    complete: null
                }
            })
        }
        static ShareApiCall(t) {
            if (!Qi.IsTx()) return;
            let e = "way=" + t + "&user=" + Yi.Avatar.userName;
            qq.shareAppMessage({
                title: "一起来玩吧",
                query: e,
                imageUrl: Mt.ShareUrl(),
                success: null,
                fail: null,
                complete: null
            })
        }
        static MinQuake() {
            Qi.IsTx() && qq.vibrateShort({
                success: null,
                fail: null,
                complete: null
            })
        }
        static ShowBlock() {
            Qi.IsTx() && Y.TxBlock && qq && qq.createBlockAd && (Ni.blockObj || (Ni.blockObj = qq.createBlockAd({
                adUnitId: Y.TxBlock,
                size: 5,
                orientation: "landscape",
                style: {
                    left: 30,
                    top: 30
                }
            })), Ni.blockObj.show())
        }
        static HideBlock() {
            Qi.IsTx() && Y.TxBlock && qq && qq.createBlockAd && Ni.blockObj && (Ni.blockObj.hide(), Math.random() < 0 && (Ni.blockObj.destroy(), Ni.blockObj = null))
        }
        static ShowBox() {
            if (Qi.IsTx() && Y.TxBox && qq && qq.createAppBox) {
                if (null === Ni.lastBoxT) Ni.lastBoxT = Laya.timer.currTimer + Ni.boxSpace;
                else if (Laya.timer.currTimer < Ni.lastBoxT) return;
                Ni.lastBoxT = Laya.timer.currTimer + Ni.boxSpace, Ni.boxObj ? Ni.boxObj.show() : (Ni.boxObj = qq.createAppBox({
                    adUnitId: Y.TxBox
                }), Ni.boxObj.load().then(() => {
                    Ni.boxObj.show()
                }))
            }
        }
        static ShowBann() {
            if (!Qi.IsTx()) return;
            if (!Y.TxBanner) return;
            if (!qq || !qq.createBannerAd) return;
            let t = qq.getSystemInfoSync(),
                e = {
                    width: 316,
                    height: 88,
                    left: 0,
                    top: 0
                };
            e.left = .5 * (t.windowWidth - e.width), e.top = t.windowHeight - e.height - 10, Ni.bannerObj ? Ni.bannerObj.show() : (Ni.bannerObj = qq.createBannerAd({
                adUnitId: Y.TxBanner,
                style: {
                    width: e.width,
                    height: e.height,
                    left: e.left,
                    top: e.top
                }
            }), Ni.bannerObj.onError((t, e) => {}), Ni.bannerObj.onLoad(() => {}))
        }
        static HideBann() {
            Qi.IsTx() && Y.TxBanner && qq && qq.createBannerAd && Ni.bannerObj && Ni.bannerObj.hide()
        }
        static VideoAdInit(t, i = !0) {
            Qi.IsTx() && qq && qq.createRewardedVideoAd && (Ni.videoLoading = 0, Ni.videoObj && (Ni.videoObj.offError(null), Ni.videoObj.offClose(null), Ni.videoObj.offLoad(null)), Ni.videoObj = qq.createRewardedVideoAd({
                adUnitId: t
            }), Ni.videoObj.onClose(t => {
                Ni.videoLoading = 0, void 0 === t || t && t.isEnded ? K.Evt(e.VIDEO_FINISH, [Ni.videoSite, Ni.videoParam]) : (K.Evt(e.VIDEO_HALF, [Ni.videoSite]),
					Pi.FlyTxt("Not finish the video"))
            }), Ni.videoObj.onError(t => {
                Ni.videoLoading = 0
            }), Ni.videoObj.onLoad(() => {}))
        }
        static VideoPlay(t, i, s = null) {
            Qi.IsTx() && (Ni.videoLoading + 2e4 > Laya.timer.currTimer ? Pi.FlyTxt("Video loading") : (Ni.videoSite = i, Ni.videoParam = s, Ni.VideoAdInit(t, !1), Ni.videoLoading = Laya.timer.currTimer, K.Evt(e.VIDEO_LOAD, [i]), Ni.videoObj.load().then(() => {
                K.Evt(e.VIDEO_LOOK, [i]), Ni.videoObj.show().then(() => {}).catch(t => {
                    Ni.videoLoading = 0, K.Evt(e.VIDEO_ERROR, [i])
                })
            }).catch(t => {
                Ni.videoLoading = 0, Pi.FlyTxt("Video failed to load, please try again"), K.Evt(e.VIDEO_ERROR, [i])
            })))
        }
    }
    Ni.bookSave = null, Ni.authColor = 0, Ni.addColor = 0, Ni.boxSpace = 45e3, Ni.lastBoxT = null, Ni.videoLoading = 0;
    class Mi {
        static Reload() {
            let t = Laya.Browser.window.location;
            Laya.Browser.window.location = t
        }
        static Exit() {
            window && window.quick && window.quick.quitGame ? window.quick.quitGame() : Mi.Reload()
        }
        static InitMobileInfo() {
            window && window.quick && window.quick.getMobileInfo && null === Mi.MEI && null === Mi.OAD && window.quick.getMobileInfo()
        }
        static InitVideo(t, i = null, s = !1) {
            window && window.quick && window.quick.loadRewardVideo && Y.ApkVideo && (Mi.videoOk || (Mi.adSite = t, Mi.adParam = i, Mi.autoPlay = null, s && (Mi.autoPlay = Y.ApkVideo), K.Evt(e.VIDEO_LOAD, [t]), window.quick.loadRewardVideo(Y.ApkVideo, "", "")))
        }
        static VideoPlay(t, i = null) {
            window && window.quick && window.quick.loadRewardVideo && window.quick.showRewardVideo && Y.ApkVideo && (Mi.adSite = t, Mi.adParam = i, Mi.videoOk ? (Mi.videoOk = !1, Mi.autoPlay = null, K.Evt(e.VIDEO_LOOK, [t]), window.quick.showRewardVideo(Y.ApkVideo, "", "")) : Mi.InitVideo(t, i, !0))
        }
        static InitBann(t = !1, e = 150) {
            window && window.quick && window.quick.loadBanner && Y.ApkBanner && (Mi.bannerReady || (Mi.autoBann = null, t && (Mi.autoBann = Y.ApkBanner), window.quick.loadBanner(Y.ApkBanner, e)))
        }
        static ShowBann() {
            window && window.quick && window.quick.showBanner && Y.ApkBanner && (Mi.bannerReady ? (Mi.autoBann = null, window.quick.showBanner(Y.ApkBanner)) : Mi.InitBann(!0))
        }
        static HideBann() {
            window && window.quick && window.quick.hideBanner && (window.quick.hideBanner(), Mi.bannerReady = null, Mi.autoBann = null)
        }
        static InitApkAd() {
            window.onAppShow = function () {}, window.onAppHide = function () {}, window.onBannerLoaded = function () {
                Mi.bannerReady = !0, Mi.autoBann && Mi.ShowBann()
            }, window.onBannerClose = function () {}, window.onRewardedVideoAdFailed = function () {}, window.onRewardedVideoAdLoaded = function () {
                Mi.videoOk = !0, Mi.autoPlay && Mi.VideoPlay(Mi.adSite, null)
            }, window.onRewardedVideoAdClosed = function (t) {
                Mi.adSite && ("1" === t ? K.Evt(e.VIDEO_FINISH, [Mi.adSite, Mi.adParam]) : K.Evt(e.VIDEO_HALF, [Mi.adSite]), Mi.InitVideo(null, null, !1))
            }, window.onMobileCb = function (t, e) {
                Mi.MEI = t, Mi.OAD = e
            }, Mi.InitMobileInfo(), Mi.InitBann(!1), Mi.InitVideo(null, null, !1)
        }
    }
    Mi.MEI = null, Mi.OAD = null, Mi.videoOk = !1, Mi.autoPlay = null, Mi.bannerReady = !1, Mi.autoBann = null;
    class Fi {
        static InitIosAd(t = null) {
            window.wtIosApi || (window.wtIosApi = {}, window && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.loadRewardVideo && (window.wtIosApi.loadRewardVideo = function (t) {
                window.webkit.messageHandlers.loadRewardVideo.postMessage(t)
            }), window && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.showRewardVideo && (window.wtIosApi.showRewardVideo = function (t) {
                window.webkit.messageHandlers.showRewardVideo.postMessage(t)
            })), window.onRewardedVideoAdFailed = function () {}, window.onRewardedVideoAdLoaded = function () {
                Fi.videoOk = !0, Fi.autoV && Fi.VideoPlay(Fi.adSite, null)
            }, window.onRewardedVideoAdClosed = function (t) {
                Fi.adSite && ("1" === t ? K.Evt(e.VIDEO_FINISH, [Fi.adSite, Fi.adParam]) : K.Evt(e.VIDEO_HALF, [Fi.adSite]), Fi.InitVideo(null, null, !1))
            }, Fi.InitVideo(null, null, !1)
        }
        static InitVideo(t, i = null, s = !1) {
            window && window.wtIosApi && window.wtIosApi.loadRewardVideo && Y.IosVideo && (Fi.videoOk || (Fi.adSite = t, Fi.adParam = i, Fi.autoV = null, s && (Fi.autoV = Y.IosVideo), K.Evt(e.VIDEO_LOAD, [t]), window.wtIosApi.loadRewardVideo(Y.IosVideo)))
        }
        static VideoPlay(t, i = null) {
            window && window.wtIosApi && window.wtIosApi.loadRewardVideo && window.wtIosApi.showRewardVideo && Y.IosVideo && (Fi.adSite = t, Fi.adParam = i, Fi.videoOk ? (Fi.videoOk = !1, Fi.autoV = null, K.Evt(e.VIDEO_LOOK, [t]), window.wtIosApi.showRewardVideo(Y.IosVideo)) : Fi.InitVideo(t, i, !0))
        }
    }
    Fi.videoOk = !1, Fi.autoV = null;
    class Vi {
        static Init() {
            Qi.IsLook() || (Qi.IsApk1() ? Mi.InitApkAd() : Qi.IsIos() ? Fi.InitIosAd() : Qi.IsTt() ? Nt.Init() : Qi.IsTx() ? Ni.Init() : Qi.IsWx() ? Ji.Init() : Qi.IsOppo() ? wt.Init() : Qi.IsVivo() ? Gt.Init() : Qi.IsXMin() && At.Init())
        }
        static Reload() {
            Mi.Reload()
        }
        static Exit() {
            Qi.IsLook() || (Qi.IsTx() ? Ni.Exit() : Qi.IsWx() ? Ji.Exit() : Mi.Exit())
        }
        static VideoAdPlay(t, e, i = null) {
            Qi.IsLook() || (Et.VideoPlay(e, i, t))
        }
        static AppGoto(t) {
            Qi.IsWx() ? Ji.AppGoto(t) : Qi.IsTx() ? Ni.AppGoto(t) : Qi.IsTt() && Nt.AppGoto(t)
        }
        static BookMsg() {
            Qi.IsTx() ? Ni.BookMsg() : Qi.IsWx() ? Ji.BookMsg() : Qi.IsTt() && Nt.BookMsg()
        }
        static HasColor() {
            if (!Qi.IsLook()) return !!Qi.IsTx() && Ni.HasColor()
        }
        static AddColor() {
            Qi.IsLook() || Qi.IsTx() && Ni.AddColor()
        }
        static GetScene() {
            if (!Qi.IsLook()) return Qi.IsTx() ? Ni.GetScene() : void 0
        }
        static AddOppoIcon() {
            Qi.IsOppo() && wt.AddIcon()
        }
        static ShowInsert(t = 100) {
            Qi.IsLook() || Qi.IsVideo() && (100 * Math.random() > t || Qi.IsTx() || (Qi.IsWx() ? Ji.ShowInsert() : Qi.IsTt()))
        }
        static Show_Block() {
            Qi.IsLook() || Qi.IsVideo() && Qi.IsOppo() && wt.ShowBlock()
        }
        static Hide_Block() {
            Qi.IsLook() || Qi.IsVideo() && Qi.IsOppo() && wt.HideBlock()
        }
        static Show_Banner(t) {
            Qi.IsLook() || Qi.IsVideo() && (Qi.IsWx() ? Ji.ShowBann(t) : Qi.IsTx() ? Ni.ShowBann() : Qi.IsTt() ? Nt.ShowBann(t) : Qi.IsOppo() ? wt.ShowBann() : Qi.IsApk1() && Mi.ShowBann())
        }
        static Hide_Banner() {
            Qi.IsLook() || Qi.IsVideo() && (Qi.IsWx() ? Ji.HideBann() : Qi.IsTt() ? Nt.HideBann() : Qi.IsTx() ? Ni.HideBann() : Qi.IsOppo() ? wt.HideBann() : Qi.IsApk1() && Mi.HideBann())
        }
        static _ShowLBann(t) {
            Qi.IsLook() || Qi.IsVideo() && (Qi.IsVivo() ? Gt.ShowBann() : Qi.IsXMin() && At.ShowBann())
        }
        static _HideLBann() {
            Qi.IsLook() || Qi.IsVideo() && (Qi.IsVivo() ? Gt.HideBann() : Qi.IsXMin() && At.HideBann())
        }
        static MinQuake() {
            Qi.IsLook() || Qi.IsVideo() && (Qi.IsWx() ? Ji.MinQuake() : Qi.IsTx() ? Ni.MinQuake() : Qi.IsTt() && Nt.MinQuake())
        }
    }
    class Ri extends et.killIUI {
        constructor() {
            super(), this.effT = null, this.size(84, 88)
        }
        createChildren() {
            super.createChildren(), this.on("onViewCreated", this, this.onComplete)
        }
        onComplete() {
            this.refreshItem(), Li.BtnTap(this, this.btnBox, this.onKillTap), Laya.timer.frameLoop(5, this, this.refreshItem)
        }
        setItem(t) {
            this.data = t, this.refreshItem()
        }
        refreshItem() {
            if (!this.imgIcon) return;
            if (!this.data) return;
            if (!this.visible) return;
            let t = this.data,
                e = jt.GetCfg(t);
            if (!e) return;
            this.iconDaimond.visible = !1, this.imgMask.visible = !1, this.imgIcon.skin = `images/main/${e.icon}.png`, this.boxNum.scale(.82, .82), this.maskSp || (this.maskSp = new Laya.Sprite, this.imgMask.mask = this.maskSp), this.maskSp.graphics.clear();
            let i = Qt.GetKillWait(t);
            if (i > 0) {
                this.y = 0, this.imgMask.visible = !0;
                let t = i / 1e3;
                t < 0 && (t = 0), t > e.wait && (t = e.wait);
                let s = t / e.wait * 79;
                this.maskSp.graphics.drawRect(0, 79 - s, 76, s, "#ffffff");
                let a = Math.ceil(t) + "s";
                this.boxNum.pos(7, 63), Li.fillNum(this.boxNum, "main", "icon_word", a, n.Right)
            } else {
                this.y = -8;
                let i = Qt.GetKillNum(t),
                    s = Qt.GetKillThrow(t);
                if (i > 0 || s > 0 ? (this.boxNum.pos(7, 63), Li.fillNum(this.boxNum, "main", "icon_word", "x" + i, n.Right)) : (this.iconDaimond.visible = !0, this.boxNum.scale(.88, .88), this.boxNum.pos(36, 61), Li.fillNum(this.boxNum, "main", "icon_word", "" + e.diamond, n.Left)), s > 0) this.imgMask.visible = !0, this.maskSp.graphics.drawRect(0, 0, 76, 79, "#ffffff");
                else {
                    if (null === this.effT && (this.effT = Laya.timer.currTimer + 1e3 * Qi.RandomInt(5, 9)), this.effT > Laya.timer.currTimer) return;
                    this.effT = null, Pi.AddEffect(this.effBox, "main", "killEff")
                }
            }
        }
        onKillTap() {
            if (this.data == lt.One && qi.passType == D.Pass && 1 == qi.lvChapter && 3 == qi.lvPass) {
                if (Qt.GetKillWait(lt.One) > 0) {
                    let t = jt.GetCfg(lt.One);
                    return void Pi.FlyTxt(`${t.title} in preparation`)
                }
                if (Qt.GetKillNum(lt.One) < 1) return void Pi.FlyTxt("Number of times not available");
                if (Qt.GetKillThrow(lt.One) > 0) return void Pi.FlyTxt("Use once per limit")
            }
            Qt.KillThrow(this.data)
        }
    }
    class Ui extends et.bottomBannerUI {//todo:主界面底部
        constructor() {
            super(), this.noticeI = 1, this.flyT = null, this.isInit = !1, this.lastBanner = b.Main, Ui.self = this, Ui.flyTo = {}, Ui.flyObj = {}
        }
        static EnterFight() {
            Ui.look = !1, Ui.self.lastMsgT = Laya.timer.currTimer + 1e3 * Qi.RandomInt(9, 18), Ui.self.boxBottom.visible = !1, Ui.self.boxTop.visible = !1, Ui.self.boxFight.visible = !0, Ui.self.toolsBox.visible = !0, Ui.self.iconStop.skin = "images/main/button_zt.png", Ui.self.boxFloatTxt.visible = !1, Ui.self.bannerLot.visible = !1, Ui.self.boxStar.visible = !1, Ui.self.bannGold.visible = !1, Ui.self.bannDiamond.visible = !1, Ui.self.bannSec.visible = !1, Ui.self.boxPatch.visible = !1, Ui.self.bloodBg.visible = !1, Ui.self.btnVoice.visible = !1, qi.passType == D.Gold ? (Ui.self.bannerLot.visible = !0, Ui.self.bannGold.visible = !0) : qi.passType == D.Daimond ? (Ui.self.bannerLot.visible = !0, Ui.self.bannDiamond.visible = !0) : qi.passType == D.Patch ? (Ui.self.bannSec.visible = !0, Ui.self.boxPatch.visible = !0) : qi.passType == D.Talent ? Ui.self.bloodBg.visible = !0 : qi.passType == D.Pass && (1 == qi.lvChapter && qi.lvPass, qi.playType == P.Loop ? (Ui.self.bannSec.visible = !0, Ui.self.bannerLot.visible = !0, Ui.self.boxStar.visible = !0) : qi.playType == P.Bron ? (Ui.self.bloodBg.visible = !0, Ui.self.boxStar.visible = !0) : (Ui.self.bannerLot.visible = !0, qi.lvChapter > 1 && (Ui.self.boxStar.visible = !0))), Ui.self.iconPause.gray = !1, q.GetPassCfg(qi.passType, qi.lvChapter, qi.lvPass).standGold < 0 && (Ui.self.iconPause.gray = !0), Ui.self.refreshUI(), Li.Close(S.Build), Li.Close(S.Chapter), pe.Close(b.Main)
        }
        static QuitFight() {
            Ui.self.boxBottom.visible = !0, Ui.self.btnVoice.visible = !0, Ui.self.boxTop.visible = !0, Ui.self.bloodBg.visible = !1, Ui.self.boxFight.visible = !1, Ui.self.toolsBox.visible = !1, Ui.self.deleFloatObj(), Ui.self.iconStop.skin = "images/main/button_zt.png", Ui.look = !1, pe.Open(b.Main), K.Evt(e.ST_CHANGE)
        }
        updateFloatTxt() {
            if (!this.pngBg) return;
            if (this.devBox.visible = Qi.IsDev(), Yi.St != s.Fight) return;
            if (this.bloodBg.visible) return;
            if (this.boxFloatTxt.visible) return;
            if (this.boxFloatTxt.getChildByName("flyTxt")) return;
            if (Ui.self.lastMsgT > Laya.timer.currTimer) return;
            let t, e = q.GetPassCfg(qi.passType, qi.lvChapter, qi.lvPass);
            if (e.id <= 8) {
                let e = Math.floor(Math.random() * Y.Solider.length);
                t = Y.Solider[e]
            } else {
                let e = Math.floor(Math.random() * Y.Notice.length);
                t = Y.Notice[e]
            }
            e.bossId || "" == t ? Ui.self.lastMsgT = Laya.timer.currTimer + Qi.RandomInt(60, 98) * this.noticeI++ * 1e3 : (this.boxFloatTxt.visible = !0, this.boxFloatTxt.alpha = .2, Laya.Tween.to(this.boxFloatTxt, {
                alpha: 1
            }, 500, null, Laya.Handler.create(this, function () {
                let e = new Laya.Label;
                e.name = "flyTxt", e.fontSize = 26, e.color = "#FFFFFF", e.stroke = 1, e.strokeColor = "#000000", e.text = t, e.pos(780, 7), this.boxFloatTxt.addChild(e), this.flyT = Laya.timer.currTimer
            }.bind(this))))
        }
        updateFloatFly() {
            if (null === this.flyT) return;
            if (!this.boxFloatTxt.visible) return;
            if (this.bloodBg.visible) return;
            let t = this.boxFloatTxt.getChildByName("flyTxt");
            if (!t) return;
            let e = Laya.timer.currTimer - this.flyT;
            this.flyT = Laya.timer.currTimer, t.x -= .1 * e * qi.tdSpeed, t.x < -t.width && this.deleFloatObj()
        }
        deleFloatObj() {
            let t = this.boxFloatTxt.getChildByName("flyTxt");
            if (!t) return;
            t.removeSelf();
            let e = q.GetPassCfg(qi.passType, qi.lvChapter, qi.lvPass);
            Laya.Tween.to(this.boxFloatTxt, {
                alpha: 0
            }, 500, null, Laya.Handler.create(this, function () {
                e.id <= 8 ? Ui.self.lastMsgT = Laya.timer.currTimer + 1e3 * Qi.RandomInt(22, 32) : Ui.self.lastMsgT = Laya.timer.currTimer + Qi.RandomInt(60, 98) * this.noticeI++ * 1e3, this.flyT = null, this.boxFloatTxt.visible = !1
            }.bind(this)))
        }
        static GetFlyTo(t) {
            if (b.Bottom == b.Bottom) return Ui.flyTo[t]
        }
        static FlyDone(t) {
            if (b.Bottom != b.Bottom) return;
            if (Li.HadOpen) return;
            let e = Ui.flyObj[t];
            Hi.ScaleEffect(e, 1.3, 120, 65)
        }
        createChildren() {
            super.createChildren(), this.on("onViewCreated", this, this.onComplete)
        }
        onComplete() {
            this.initMenu(), this.refreshUI()
        }
        onBtnRcored() {
            Qi.IsTt() && Nt.RecBtnTap()
        }
        onBtnShare() {
            Qi.IsTx() && !Vi.HasColor() ? Vi.AddColor() : Mt.ShareDo(l.daySoul)
        }
        onBtnFlash() {
            Li.Open(S.Flash)
        }
        initMenu() {
            if (!this.pngBg) return;
            if (this.isInit) return;
            this.isInit = !0, pe.ScreenFull(this), this.boxBottom.y = Laya.stage.height - this.boxBottom.height + 2,
				this.toolsBox.y = Laya.stage.height - this.toolsBox.height - 150,
				this.devBox.y = Laya.stage.height - this.devBox.height - this.boxBottom.height - 8,
			Qi.IsAdvScreen() && (this.topBox.y = 65),
				this.devBox.visible = Qi.IsDev(),
				Ui.flyObj[d.exp] = this.iconGold,
				Ui.flyTo[d.exp] = Qi.GlobalPoint(this.iconGold, 0, 0),
				Ui.flyObj[d.gold] = this.iconGold,
				Ui.flyTo[d.gold] = Qi.GlobalPoint(this.iconGold, -82, -28),
				Ui.flyObj[d.money] = this.iconMoney,
				Ui.flyTo[d.money] = Qi.GlobalPoint(this.iconMoney, 0, 0),
				Ui.flyObj[d._money] = this.iconMoney,
				Ui.flyTo[d._money] = Qi.GlobalPoint(this.iconMoney, 0, 0),
				Ui.flyObj[d.diamond] = this.iconDiamond,
				Ui.flyTo[d.diamond] = Qi.GlobalPoint(this.iconDiamond, -82, -28),
				Ui.flyObj[d.flash] = this.iconFlash,
				Ui.flyTo[d.flash] = Qi.GlobalPoint(this.iconFlash, -55, -12),
				Ui.flyObj[d.patch] = this.btnPicTap,
				Ui.flyTo[d.patch] = Qi.GlobalPoint(this.btnPicTap, 0, 0),
				Ui.flyObj[d.patchSolider] = this.btnPicTap,
				Ui.flyTo[d.patchSolider] = Qi.GlobalPoint(this.btnPicTap, 0, 0),
				Ui.flyObj[d._patchExist] = this.btnSoliderTap,
				Ui.flyTo[d._patchExist] = Qi.GlobalPoint(this.btnSoliderTap, 0, 0),
				Ui.flyObj[d.awardSolider] = this.btnSoliderTap,
				Ui.flyTo[d.awardSolider] = Qi.GlobalPoint(this.btnSoliderTap, 0, 0),
				Ui.flyObj[d.talent] = this.btnTalentTap,
				Ui.flyTo[d.talent] = Qi.GlobalPoint(this.btnTalentTap, 0, 0),
				Ui.flyObj[d._gold] = this.iconGoldSave,
				Ui.flyTo[d._gold] = Qi.GlobalPoint(this.iconGoldSave, 0, 0),
				Ui.flyObj[d._diamond] = this.iconDiamondSave,
				Ui.flyTo[d._diamond] = Qi.GlobalPoint(this.iconDiamondSave, 0, 0),
				Ui.flyObj[d._patch1] = this.iconPatch1,
				Ui.flyTo[d._patch1] = Qi.GlobalPoint(this.iconPatch1, 0, 0),
				Ui.flyObj[d._patch2] = this.iconPatch2,
				Ui.flyTo[d._patch2] = Qi.GlobalPoint(this.iconPatch2, 0, 0),
				Ui.flyObj[d._patch3] = this.iconPatch3,
				Ui.flyTo[d._patch3] = Qi.GlobalPoint(this.iconPatch3, 0, 0),
				Ui.flyObj[d._patch4] = this.iconPatch4,
				Ui.flyTo[d._patch4] = Qi.GlobalPoint(this.iconPatch4, 0, 0),
				Ui.flyObj[d._patch5] = this.iconPatch5,
				Ui.flyTo[d._patch5] = Qi.GlobalPoint(this.iconPatch5, 0, 0),
				Li.Close(S.Load), Laya.timer.loop(2e3, this, this.updateFloatTxt),
				Laya.timer.frameLoop(1, this, this.updateFloatFly),
				this.refreshRecord(),
			Qi.IsTt() && Laya.timer.frameLoop(15, this, this.refreshRecord),
				Li.BtnTap(this, this.boxTapFlash, this.onBtnFlash),
				Li.BtnTap(this, this.btnShare, this.onBtnShare),
				Li.BtnTap(this, this.btnRecord, this.onBtnRcored),
				Li.BtnTap(this, this.btnPicTap, this.onTapPic),
				Li.BtnTap(this, this.btnSoliderTap, this.onTapSolider),
				Li.BtnTap(this, this.btnFightTap, this.onTapFight),
				Li.BtnTap(this, this.btnTalentTap, this.onTapTalent),
				Li.BtnTap(this, this.btnShopTap, this.onTapShop),
				Li.BtnTap(this, this.boxTapGold, this.onTapAdvShop),
				Li.BtnTap(this, this.boxTapDaimond, this.onTapDaimondBtn),
				Li.BtnTap(this, this.btnVoice, this.onBtnVoice, null),
				Li.BtnTap(this, this.iconSpeed, this.onBtnSpeed),
				Li.BtnTap(this, this.iconPause, this.onBtnPause),
				Li.BtnTap(this, this.iconExit, this.onBtnExit),
				Li.BtnTap(this, this.boxStar, this.onBtnStar),
				Li.BtnTap(this, this.killGuideBox, this.onKillGuideThrow),
			Qi.IsDev() && (Li.BtnTap(this, this.iconDiamond, this.onBtnDevDiamond),
				Li.BtnTap(this, this.iconGold, this.onBtnDevGold),
				Li.BtnTap(this, this.iconMoney, this.onBtnDevMoney),
				Li.BtnTap(this, this.btnDevMove, this.onBtnDevMove),
				Li.BtnTap(this, this.btnDevClear, this.onBtnDevClear),
				Li.BtnTap(this, this.btnDevEcho, this.onBtnDevEcho),
				Li.BtnTap(this, this.btnDevFire, this.onBtnDevFire),
				Li.BtnTap(this, this.btnDevSun, this.onBtnDevSun),
				Li.BtnTap(this, this.btnWin, this.onBtnDevWin),
				Li.BtnTap(this, this.btnRnd, this.onBtnDevRnd)),
				this.iconLook.on(Laya.Event.MOUSE_MOVE, this, this.onLookTapOn),
				this.iconLook.on(Laya.Event.MOUSE_OVER, this, this.onLookTapOn),
				this.iconLook.on(Laya.Event.MOUSE_DOWN, this, this.onLookTapOn),
				this.iconLook.on(Laya.Event.MOUSE_DOWN, this, this.onLookTapDown),
				this.iconLook.on(Laya.Event.MOUSE_UP, this, this.onLookTapOff),
				this.iconLook.on(Laya.Event.MOUSE_OUT, this, this.onLookTapOff),
				this.iconLook.on(Laya.Event.MOUSE_UP, this, this.onLookTapUp),
				pe.Open(b.Main),
			1 == Yi.Avatar.passLv && (qi.isAgain = !1, qi.InitFight(D.Pass, 1, 1), Ui.EnterFight()),
			Qi.IsFour() && (this.iconDiamondAdd.visible = !1, this.iconDiamondVideo && (this.iconDiamondVideo.visible = !0))
        }
        refreshKill() {
            let t = q.GetPassCfg(qi.passType, qi.lvChapter, qi.lvPass),
                e = 0,
                i = jt.GetDict();
            for (let s in i) {
                let n = i[s],
                    a = n.id,
                    l = this.killBox.getChildByName(`killItem_${a}`);
                l || ((l = new Ri).name = `killItem_${a}`, l.setItem(a), this.killBox.addChild(l)), l.visible = !1, t && t.id >= n.openLv && (t.bossId ? a != lt.Five && (l.visible = !0, e++) : (l.visible = !0, e++)), 0
            }
            let s = this.killBox.getChildByName("killItem_1"),
                n = this.killBox.getChildByName("killItem_5");
            switch (e) {
                case 1:
                    s.x = 96, this.killGuideBox.x = this.killBox.x + 40 + 96;
                    break;
                case 2:
                    s.x = 35, n.x = 152, this.killGuideBox.x = this.killBox.x + 40 + 35
            }
        }
        onLookTapDown() {
            Qi.IsDev() && (Math.abs(ge.devRange) < 3 ? ge.devRange = Math.abs(ge.devRange) + 1 : ge.devRange = 1)
        }
        onLookTapUp() {
            Qi.IsDev() && (ge.devRange = -Math.abs(ge.devRange))
        }
        onLookTapOn() {
            Ui.look = !0
        }
        onLookTapOff() {
            Ui.look = !1
        }
        onTapPic() {
            Lt.CanOpen(b.Pic) ? (this.openBanner(b.Pic),Plat.I.HideFloat()) : Pi.FlyTxt("The handbook is lock")
        }
        onTapSolider() {
            Lt.CanOpen(b.SoliderSite) ? (this.openBanner(b.SoliderSite),Plat.I.HideFloat()) : Pi.FlyTxt("Team is lock")
        }
        onTapFight() {
				Lt.CanOpen(b.Main) ? (this.openBanner(b.Main),Plat.I.ShowInter(),Plat.I.ShowFloat(0.06)) : Pi.FlyTxt("Adventure is lock")
        }
        onTapTalent() {
            Lt.CanOpen(b.Talent) ? (Plat.I.HideFloat(),this.openBanner(b.Talent)) : Pi.FlyTxt("Talent is lock")
        }
        onTapDaimondBtn() {
            !Qi.IsOppo() || Lt.CanOpen(b.Shop) ? Vi.VideoAdPlay("Daimond Add", t.DaimondAdd, null) : Pi.FlyTxt("The shop is lock")
        }
        onTapAdvShop() {
            this.pngBg && (Lt.CanOpen(b.Shop) ? this.openBanner(b.Shop, !0) : Pi.FlyTxt("The shop is lock"))
        }
        onTapShop() {
            Lt.CanOpen(b.Shop) ? (Plat.I.HideFloat(),this.openBanner(b.Shop)) : Pi.FlyTxt("The shop is lock")
        }
        openBanner(t, e = !1) {
            if (Li.IsOpen(S.Guide)) {
                if (-1 != [ot.JOIN_TEAM_DRAG_11, ot.JOIN_TEAM_DRAG_21].indexOf(_e.currentGuideId)) return void Pi.FlyTxt("Drag soldiers into formation");
                if (ot.UPLV_SOLIDER_LOOK_16 == _e.currentGuideId) return void Pi.FlyTxt("Click soldier to upgrade")
            }
            if (this.lastBanner == t && !e) return;
            if (this.lastBanner < 0) return;
            this.lastBanner = -t;
            let i = {};
            i[b.Pic] = [this.btnPicTap.x, "icon_xt_tj", "icon_xt_word_tj"], i[b.SoliderSite] = [this.btnSoliderTap.x, "icon_xt_zd", "icon_xt_word_zd"], i[b.Main] = [this.btnFightTap.x, "icon_xt_mx", "icon_xt_word_mx"], i[b.Talent] = [this.btnTalentTap.x, "icon_xt_tf", "icon_xt_word_tf"], i[b.Shop] = [this.btnShopTap.x, "icon_xt_sd", "icon_xt_word_sd"];
            let [s, n, a] = i[t], l = Math.abs(this.iconTapBox.x - s), o = Math.floor(l / 300 * 150);
            Laya.Tween.to(this.iconTapBox, {
                scaleX: 1.15,
                scaleY: 1.15
            }, Math.floor(.8 * o), null, Laya.Handler.create(this, () => {
                Laya.Tween.to(this.iconTapBox, {
                    scaleX: 1,
                    scaleY: 1
                }, Math.floor(.2 * o))
            })), t && (this.lastBanner = t, setTimeout(() => {
                t == b.Shop && e ? pe.Open(t, !0) : pe.Open(t)
            }, Math.floor(.4 * o))), Laya.Tween.to(this.iconTapBox, {
                x: s
            }, o, Laya.Ease.backOut, Laya.Handler.create(this, () => {
                this.iconTapImg.skin = `images/main/${n}.png`, this.iconTapTxt.skin = `images/main/${a}.png`
            }))
        }
        static BannerOpenSucc() {
            b.Pic != Ui.self.lastBanner && pe.Close(b.Pic), b.SoliderSite != Ui.self.lastBanner && pe.Close(b.SoliderSite), b.Main != Ui.self.lastBanner && pe.Close(b.Main), b.Talent != Ui.self.lastBanner && pe.Close(b.Talent), b.Shop != Ui.self.lastBanner && pe.Close(b.Shop)
        }
        onBtnDevDiamond() {
            if (!Qi.IsDev()) return;
            let t = [
                [d.diamond, 1e3]
            ];
            Le.AddMoney(t), Pi.FlyDrop(t, null, null)
        }
        onBtnDevGold() {
            Qi.IsDev() && Le.AddAward(d.gold, 8e5, !0, null)
        }
        onBtnDevTalent() {
            Qi.IsDev() && Le.AddMoneyByVal(d.talent, 10)
        }
        onBtnDevMoney() {
            Qi.IsDev() && Le.AddAward(d.money, 1e6, !1, null)
        }
        onBtnDevMove() {
            Yi.devMove = !Yi.devMove, Yi.devMove && (Yi.devFire = !0), this.refreshDev()
        }
        onBtnDevClear() {
            qi.DeleAllEnemy(100, !1), Yi.devHitClear()
        }
        onBtnDevEcho() {
            Yi.devHitEcho()
        }
        onBtnDevFire() {
            Yi.devFire = !Yi.devFire, this.refreshDev()
        }
        onBtnDevSun() {
            let t = 500 * Math.random(),
                e = 500 * Math.random();
            qi.AddSun(t, e, 100, "sun")
        }
        refreshDev() {
            this.labDevMove.text = Yi.devMove ? "开始移动" : "停止移动", this.labDevFire.text = Yi.devFire ? "开始射击" : "停止射击", this.labDevMove.color = Yi.devMove ? "#ff0000" : "#ffffff", this.labDevFire.color = Yi.devFire ? "#ff0000" : "#ffffff"
        }
        onBtnDevWin() {
            qi.DevWin([3])
        }
        onBtnDevRnd() {
            qi.DevWin([1, 2])
        }
        Open() {
			Yi.Avatar.passLv >= 2 && Plat.I.ShowFloatMain(0.06);
            this.initMenu(), this.refreshUI(), 
				K.On(e.LOT_CHANGE, this, this.refreshLot),
				K.On(e.ST_CHANGE, this, this.refreshLot),
				K.On(e.ST_CHANGE, this, this.refreshSpeed),
				K.On(e.ITEMNUM_CHANGE, this, this.refreshMoney),
				K.On(e.HERO_UPSKILL, this, this.refreshMoney),
				K.On(e.VIDEO_FINISH, this, this.refreshMoney),
				K.On(e.EGG_BEGIN, this, this.refreshMoney),
				K.On(e.ONLINE_SEC, this, this.refreshMoney),
				K.On(e.TT_RECROD_EVT, this, this.refreshRecord),
				K.On(e.PASS_CHANGE, this, this.refreshShare),
				K.On(e.DAY_CHANGE, this, this.refreshShare),
				K.On(e.SHARE_SUCC, this, this.refreshShare),
				K.On(e.COLOR_SIGN_SUCC, this, this.refreshShare),
				K.On(e.BOOK_MSG_SUCC, this, this.refreshShare),
				K.On(e.ENEMY_NUM_CHANGE, this, this.refreshPatch),
				K.On(e.ONLINE_SEC, this, this.refreshOpen),
				K.On(e.GOTO_ADV_SHOP, this, this.onTapAdvShop), 
				K.On(e.VIDEO_FINISH, this, this.onVideoAddDaimond),
				K.On(e.REFRESH_PAUSE_BTN, this, this.refreshPauseBtn)
        }
        Close() {
            K.Off(e.LOT_CHANGE, this, this.refreshLot), K.Off(e.ST_CHANGE, this, this.refreshLot), K.Off(e.ST_CHANGE, this, this.refreshSpeed), K.Off(e.ITEMNUM_CHANGE, this, this.refreshMoney), K.Off(e.HERO_UPSKILL, this, this.refreshMoney), K.Off(e.VIDEO_FINISH, this, this.refreshMoney), K.Off(e.EGG_BEGIN, this, this.refreshMoney), K.Off(e.ONLINE_SEC, this, this.refreshMoney), K.Off(e.TT_RECROD_EVT, this, this.refreshRecord), K.Off(e.PASS_CHANGE, this, this.refreshShare), K.Off(e.DAY_CHANGE, this, this.refreshShare), K.Off(e.SHARE_SUCC, this, this.refreshShare), K.Off(e.COLOR_SIGN_SUCC, this, this.refreshShare), K.Off(e.BOOK_MSG_SUCC, this, this.refreshShare), K.Off(e.ENEMY_NUM_CHANGE, this, this.refreshPatch), K.Off(e.ONLINE_SEC, this, this.refreshOpen), K.Off(e.GOTO_ADV_SHOP, this, this.onTapAdvShop), K.Off(e.VIDEO_FINISH, this, this.onVideoAddDaimond), K.Off(e.REFRESH_PAUSE_BTN, this, this.refreshPauseBtn), Laya.timer.clear(this, this.updateFloatTxt), Laya.timer.clear(this, this.updateFloatFly), Qi.IsTt() && Laya.timer.clear(this, this.refreshRecord)
        }
        onVideoAddDaimond(e) {
            this.isInit && this.pngBg && e == t.DaimondAdd && (Le.AddMoneyByVal(d.diamond, 200), Pi.FlyDrop([
                [d.diamond, 200]
            ], null, null, null, null, null, null))
        }
        onBtnVoice() {
            Xi.Toggle(Xi.setSound), this.refreshVoice(), Z.Stop(L.backFight), Z.Stop(L.backMain), Xi.GetSetVal(Xi.setSound) && Qi.devSwitch++
        }
        onBtnSpeed() {
            _e.InFightGuide(1) ? Pi.FlyTxt("The combat guide is now complete") : (1 == qi.tdSpeed ? (Xi.AppendOperation(ct.Fast), qi.tdSpeed = 1.58) : (Xi.AppendOperation(ct.Base), qi.tdSpeed = 1), this.refreshSpeed())
        }
        refreshSpeed() {
            this.iconSpeed.visible = Lt.CanOpen(S.Fast), 1 == qi.tdSpeed ? this.iconSpeed.skin = "images/main/button_bs1.png" : this.iconSpeed.skin = "images/main/button_bs2.png"
        }
        static onExitUIClose() {
            Ui.self.iconStop.skin = "images/main/button_zt.png"
        }
        onBtnPause() {
            if (_e.InFightGuide(1)) Pi.FlyTxt("The combat guide is now complete");
            else {
                if (Li.IsOpen(S.Pause)) Xi.AppendOperation(ct.Go), Li.Close(S.Pause);
                else {
                    if (Xi.AppendOperation(ct.Pause), q.GetPassCfg(qi.passType, qi.lvChapter, qi.lvPass).standGold < 0) return void Pi.FlyTxt("So much gold, don't click pause~");
                    Li.Open(S.Pause)
                }
                this.refreshPauseBtn()
            }
        }
        refreshPauseBtn() {
            this.pngBg && (Li.IsOpen(S.Pause) ? this.iconStop.skin = "images/main/button_ks.png" : this.iconStop.skin = "images/main/button_zt.png")
        }
        onBtnExit() {
            _e.InFightGuide(1) ? Pi.FlyTxt("The combat guide is now complete") : Li.Open(S.Exit)
        }
        onKillGuideThrow() {
            Qt.KillThrow(lt.One)
        }
        onBtnStar() {
            qi.passType == D.Pass && Li.Open(S.StarDesc)
        }
        refreshVoice() {
            this.btnVoice.visible = !0;
            let t = Xi.GetSetVal(Xi.setSound);
            this.btnVoice.skin = t ? "images/main/soundOn.png" : "images/main/soundOff.png"
        }
        refreshUI() {
            this.pngBg && (this.refreshLot(), this.refreshSpeed(), this.refreshMoney(), this.refreshRecord(), this.refreshShare(), this.refreshVoice(), this.refreshPatch(), this.refreshDev(), this.refreshOpen(), this.refreshStar(), this.refreshKill())
        }
        refreshRecord() {
            if (!Qi.IsTt()) return;
            switch (this.btnRecord.visible = !0, this.iconRecordSoul.visible = !1, this.imgRecord.visible = !1, this.boxRecordSec.visible = !1, Nt.recordState) {
                case 0:
                    this.imgRecord.visible = !0, this.imgRecord.skin = "images/main/icon_word_lpjl.png";
                    break;
                case 1:
                    this.boxRecordSec.visible = !0;
                    let t = Nt.GetRecSec() + "/S";
                    Li.fillNum(this.boxRecordSec, "main", "icon_word", t);
                    break;
                case 2:
                    this.imgRecord.visible = !0, this.imgRecord.skin = "images/main/icon_word_fxlq.png"
            }
            if (Ee.IsTodayRecord()) return;
            this.iconRecordSoul.visible = !0;
            let t = Q.GetVal("ttDaySoul", 1e3);
            Li.fillNum(this.boxRecordNum, "main", "icon_word", `x${t}`, n.Left)
        }
        refreshOpen() {
            if (!this.pngBg) return;
            this.btnPicTap.gray = !Lt.CanOpen(b.Pic), this.btnSoliderTap.gray = !Lt.CanOpen(b.SoliderSite), this.btnFightTap.gray = !Lt.CanOpen(b.Main), this.btnTalentTap.gray = !Lt.CanOpen(b.Talent), this.btnShopTap.gray = !Lt.CanOpen(b.Shop);
            let t = ve.ActSoliderRed(),
                e = ve.UpLevelRed() || ve.RedNewSolider() || ve.TeamEmptyRed(),
                i = Yt.IsRed();
            Li.FillRedView("main", "icon_hd1", this.iconBtnPic, t, -10, -10), 
				ve.RedNewSolider() ? Li.FillRedView("main", "icon_hd1", this.iconBtnSolider, e, -10, -10)
					: ve.UpLevelRed() ? Li.FillRedView("main", "icon_hd2", this.iconBtnSolider, e, -10, -10)
						: ve.TeamEmptyRed() ? Li.FillRedView("main", "red", this.iconBtnSolider, e, 0, 0)
							: Li.FillRedView("main", "red", this.iconBtnSolider, !1, 0, 0),
				Li.FillRedView("main", "icon_hd3", this.iconBtnTalent, i, -10, -10), 
				Ci.IsShopFree() ? Li.FillRedView("main", "icon_hd4", this.iconBtnShop, !0, -10, -10) 
					: Ci.IsShopRed() ? Li.FillRedView("main", "red", this.iconBtnShop, !0, 0, 0) 
						: Ci.IsShopGood() ? Li.FillRedView("main", "red", this.iconBtnShop, !0, 0, 0) 
							: Li.FillRedView("main", "red", this.iconBtnShop, !1, 0, 0)
        }
        refreshMoney() {
            if (!this.pngBg) return;
            this.refreshStar();
            let t = Yi.Avatar,
                e = Qi.num2Str(t.gold, !0);
            Li.fillNum(this.iconDiamondNum, "main", "icon_word", t.diamond + "", n.Left), Li.fillNum(this.boxGoldNum, "main", "icon_word", e, n.Left), Li.fillNum(this.boxMoneyNum, "main", "icon_word", t.money + "", n.Left), Li.fillNum(this.boxFlash, "main", "icon_word", t.flashV + "", n.Center);
            let i = qi.goldSave ? qi.goldSave : "",
                s = qi.diamondSave ? qi.diamondSave : "";
            if (Li.fillNum(this.boxGoldSave, "main", "icon_word", i + "", n.Left), Li.fillNum(this.boxDiamondSave, "main", "icon_word", s + "", n.Left), qi.passType == D.Pass && qi.playType == P.Loop) {
                let t = Math.floor(qi.playTime / 1e3);
                t < 10 ? (Hi.FlashEffect(this.boxSec, 100, 120), Hi.FlashEffect(this.iconSec, 100, 100), Hi.SmallBigLoop(this.iconSec, 140, 1.06, .98)) : t % 10 == 0 ? (Hi.FlashEffect(this.boxSec, 100, 120), Hi.FlashEffect(this.iconSec, 100, 120), Hi.SmallBigLoop(this.iconSec, 140, 1.06, .98)) : t % 5 == 0 && Hi.FlashEffect(this.boxSec, 100, 100), t < 0 && (t = 0), Li.fillNum(this.boxSec, "main", "icon_word", t + "S", n.Right)
            }
            if (qi.passType == D.Patch) {
                let t = qi.getSavePatchInfo();
                this.bgPatch1.visible = !1, this.bgPatch2.visible = !1, this.bgPatch3.visible = !1, this.bgPatch4.visible = !1, this.bgPatch5.visible = !1;
                let e = 1;
                for (let i in t) {
                    let [s, a] = t[i];
                    this[`bgPatch${e}`].visible = !0, this[`iconPatch${e}`].skin = `images/obj/sp_${s}.png`, Li.fillNum(this[`boxPatch${e}`], "obj", "whitee", "" + a, n.Center), e++
                }
            }
            t.flashV >= xt.flashMax ? (this.labFlash.visible = !1, this.imgFlash.width = this.bgFlash.width) : (this.labFlash.visible = !0, this.imgFlash.width = 30 + (this.bgFlash.width - 30) * t.flashV / xt.flashMax, this.labFlash.text = Qi.GetMinSecStr(t.flashT) + " +1")
        }
        refreshStar() {
            if (!this.pngBg) return;
            if (!this.boxStar.visible) return;
            let t = qi.GetStarInfo(qi.passType, qi.lvChapter, qi.lvPass, !1);
            if (!t) return;
            let e = Qi.DictLen(t);
            this.btnStar.width = [88, 108, 130][e - 1];
            for (let i = 1; i <= 3; i++)
                if (this[`imgStar${i}`].visible = !1, t[i]) switch (this[`imgStar${i}`].visible = i <= e, this[`iconStar${i}`].visible = !0, t[i].succ) {
                    case !0:
                        this[`iconStar${i}`].skin = "images/main/button_sxrw_wc.png";
                        break;
                    case !1:
                        this[`iconStar${i}`].skin = "images/main/button_sxrw_wwc.png";
                        break;
                    case null:
                        this[`iconStar${i}`].visible = !1
                }
            this.labJobNum.visible = Qi.IsDev();
            let i = qi.GetJobBuildInfo();
            if (!i) return;
            let [s, n, a] = i;
            if (s)
                if (a >= 20) this.labJobNum.text = It.JobTxt[s] + "杀怪:" + qi.jobKill + ">=" + a;
                else if (a <= 0) this.labJobNum.text = It.JobTxt[s] + "建造:" + n + "<=" + Math.abs(a);
            else {
                let t = 0,
                    e = qi.GetSoliderList();
                for (let i in e) {
                    3 == e[i].star && t++
                }
                this.labJobNum.text = It.JobTxt[s] + "3Star:" + t + ">=" + a
            }
        }
        refreshLot() {
            this.pngBg && this.bannerLot.visible && Li.fillNum(this.boxLot, "main", "bc_word", qi.getLotStr(), n.Center)
        }
        static RefreshStand(t, e) {
            1001 == t && Ui.self && Ui.self.refreshStandBlood(e)
        }
        refreshStandBlood(t) {
            qi.playType == P.Bron && this.bloodImg && (this.bloodImg.width = t * (this.bloodBg.width - 10), Li.fillNum(this.bloodBox, "main", "icon_word", qi.getLotStr(), n.Center), t < 1 && Hi.FlashEffect(this.bloodImg, 35, 60))
        }
        refreshPatch() {
            if (qi.passType != D.Talent) return;
            if (!this.bloodImg) return;
            let t = qi.GetEnemyList(!0).length,
                e = t / 50;
            this.bloodImg.width = e * this.bloodBg.width, Li.fillNum(this.bloodBox, "main", "icon_word", t + "/50", n.Center)
        }
        refreshShare() {
            if (this.btnShare.visible = !1, !Qi.IsWx() && !Qi.IsTx()) return;
            this.btnShare.visible = !Mt.IsShare();
            let t = Q.GetVal("ttDaySoul", 1e3);
            if (Li.fillNum(this.boxShareNum, "main", "icon_word", `x${t}`, n.Left), Qi.IsTx()) {
                Yi.Avatar.passLv <= 20 ? this.btnShare.visible = !1 : Vi.HasColor() ? this.imgShare.skin = "images/main/icon_word_mrfx.png" : this.imgShare.skin = "images/main/icon_word_tjcq.png"
            }
        }
    }
    Ui.look = !1, Ui.floorH = 309;
    class Hi {
        static Init() {}
        static getFlyToX(t) {
            return Ui.GetFlyTo(t).x
        }
        static getFlyToY(t) {
            return Ui.GetFlyTo(t).y
        }
        static BigTo(t, e, i = null, s = null, n = null) {
            if (!t || t.destroyed) return;
            null === s && (s = Hi.getFlyToX(e)), null === n && (n = Hi.getFlyToY(e));
            let a = .5 * Laya.stage.width,
                l = .5 * Laya.stage.height;
            t.x = a, t.y = l, t.scale(0, 0);
            let o = 2.2 * Qi.dist(a, l, s, n);
            t && !t.destroyed && Laya.Tween.to(t, {
                scaleX: 2.6,
                scaleY: 2.6
            }, 400, null, Laya.Handler.create(this, function () {
                t && !t.destroyed && (Hi.FlashEffect(t, 180, 120), Laya.Tween.to(t, {
                    scaleX: 1.5,
                    scaleY: 1.5
                }, 250, null, Laya.Handler.create(this, function () {
                    t && !t.destroyed && Laya.Tween.to(t, {
                        x: s,
                        y: n,
                        scaleX: 1,
                        scaleY: 1
                    }, o, null, Laya.Handler.create(this, function () {
                        t && !t.destroyed && i && i()
                    }, null, !1))
                })))
            }, null, !1))
        }
        static LineTo(t, e, i, s, n = null, a = null, l = null) {
            if (!t || t.destroyed) return;
            null === a && (a = Hi.getFlyToX(e)), null === l && (l = Hi.getFlyToY(e));
            let o = 360 / i * s,
                r = 8 + 10 * Math.random();
            t.x += Qi.moveToX(o, r), t.y += Qi.moveToY(o, r);
            let h = (t.x + a) / 2,
                d = (t.y + l) / 2,
                u = 360 * Math.random(),
                c = .12 * Qi.dist(t.x, t.y, a, l);
            h += Qi.moveToX(u, c), d += Qi.moveToY(u, c);
            let p = 3.8 * c,
                f = 3.4 * Qi.dist(h, d, a, l);
            Laya.Tween.to(t, {
                x: h,
                y: d,
                scaleX: 1.5,
                scaleY: 1.5
            }, p, null, Laya.Handler.create(this, function () {
                t && !t.destroyed && Laya.Tween.to(t, {
                    x: a,
                    y: l,
                    scaleX: .4,
                    scaleY: .4
                }, f, null, Laya.Handler.create(this, function () {
                    t && !t.destroyed && n && n()
                }, null, !1))
            }, null, !1))
        }
        static FlyTo(t, e, i, s, n = null, a = null, l = null, o = 1.3, r = null) {
            if (!t || t.destroyed) return;
            null === a && (a = Hi.getFlyToX(e)), null === l && (l = Hi.getFlyToY(e));
            let h = 360 / i * s,
                d = 46 + 58 * Math.random();
            if (1 == i) {
                let e = Qi.dist(t.x, t.y, a, l) * o,
                    i = {
                        x: a,
                        y: l
                    };
                null !== r && (i.alpha = r), Laya.Tween.to(t, i, e, null, Laya.Handler.create(this, function () {
                    t && !t.destroyed && n && n()
                }, null, !1))
            } else {
                let e = t.x + Qi.moveToX(h, d),
                    i = t.y + Qi.moveToY(h, d),
                    s = 1.8 * d,
                    r = Qi.dist(e, i, a, l) * o;
                Laya.Tween.to(t, {
                    x: e,
                    y: i
                }, s, null, Laya.Handler.create(this, function () {
                    t && !t.destroyed && Laya.Tween.to(t, {
                        x: a,
                        y: l
                    }, r, null, Laya.Handler.create(this, function () {
                        t && !t.destroyed && n && n()
                    }, null, !1))
                }, null, !1))
            }
        }
        static CenterTo(t, e, i, s, n = null, a = null, l = null) {
            if (!t || t.destroyed) return;
            null === a && (a = Hi.getFlyToX(e)), null === l && (l = Hi.getFlyToY(e));
            let o = 360 / i * s,
                r = 110 + 180 * Math.random(),
                h = t.x + Qi.moveToX(o, r),
                d = t.y + Qi.moveToY(o, r),
                u = 1.6 * r,
                c = 1.25 * Qi.dist(h, d, a, l);
            Laya.Tween.to(t, {
                x: h,
                y: d
            }, u, null, Laya.Handler.create(this, function () {
                t && !t.destroyed && Laya.Tween.to(t, {
                    x: a,
                    y: l
                }, c, null, Laya.Handler.create(this, function () {
                    t && !t.destroyed && n && n()
                }, null, !1))
            }, null, !1))
        }
        static ScaleEffect(t, e, i = 240, s = 110) {
            t && !t.destroyed && 1 == t.scaleX && 1 == t.scaleY && (t.filters = Qi.BaseFilter(1, 100), Laya.Tween.to(t, {
                scaleX: e,
                scaleY: e
            }, i, null, Laya.Handler.create(this, () => {
                t && !t.destroyed && (t.filters && (t.filters = null), Laya.Tween.to(t, {
                    scaleX: 1,
                    scaleY: 1
                }, s))
            }, null, !1)))
        }
        static FlashColor(t, e = 100, i = 100, s, n, a, l = null) {
            t && !t.destroyed && (t.filters || (t.filters = Qi.ColorFilter(e, s, n, a), Laya.timer.once(i, Hi, () => {
                t && !t.destroyed && (t.filters && (t.filters = null), l && l())
            })))
        }
        static FlashEffect(t, e = 100, i = 100, s = null) {
            t && !t.destroyed && (t.filters || (t.filters = Qi.BaseFilter(1, e), Laya.timer.once(i, Hi, () => {
                t && !t.destroyed && (t.filters && (t.filters = null), s && s())
            })))
        }
        static BtnShake(t, e = null) {
            t && !t.destroyed && Laya.Tween.to(t, {
                rotation: 9
            }, 80, null, Laya.Handler.create(this, function () {
                t && !t.destroyed && Laya.Tween.to(t, {
                    rotation: -18
                }, 150, null, Laya.Handler.create(this, function () {
                    t && !t.destroyed && Laya.Tween.to(t, {
                        rotation: 7
                    }, 64, null, Laya.Handler.create(this, function () {
                        t && !t.destroyed && Laya.Tween.to(t, {
                            rotation: -14
                        }, 122, null, Laya.Handler.create(this, function () {
                            t && !t.destroyed && (Laya.Tween.to(t, {
                                rotation: 0
                            }, 50), e && e())
                        }))
                    }))
                }))
            }))
        }
        static SmallBigLoop(t, e = 600, i = .9, s = 1.1, n = 1, a = null, l = null) {
            if (t && !t.destroyed)
                if (a) {
                    let o = t.rotation;
                    Laya.Tween.to(t, {
                        rotation: o + .25 * a,
                        scaleX: i,
                        scaleY: i
                    }, .25 * e, null, Laya.Handler.create(this, function () {
                        t && !t.destroyed && Laya.Tween.to(t, {
                            rotation: o + .75 * a,
                            scaleX: s,
                            scaleY: s
                        }, .5 * e, null, Laya.Handler.create(this, function () {
                            t && !t.destroyed && Laya.Tween.to(t, {
                                rotation: o + 1 * a,
                                scaleX: n,
                                scaleY: n
                            }, .25 * e, null, Laya.Handler.create(this, function () {
                                t && !t.destroyed && (t.rotation = Qi.realAngle(t.rotation), l && l())
                            }))
                        }))
                    }))
                } else Laya.Tween.to(t, {
                    scaleX: i,
                    scaleY: i
                }, .25 * e, null, Laya.Handler.create(this, function () {
                    t && !t.destroyed && Laya.Tween.to(t, {
                        scaleX: s,
                        scaleY: s
                    }, .5 * e, null, Laya.Handler.create(this, function () {
                        t && !t.destroyed && Laya.Tween.to(t, {
                            scaleX: n,
                            scaleY: n
                        }, .25 * e, null, Laya.Handler.create(this, function () {
                            t && !t.destroyed && l && l()
                        }))
                    }))
                }))
        }
        static UpDownLoop(t, e, i, s, n) {
            t && !t.destroyed && Laya.Tween.to(t, {
                y: t.y + e
            }, i, null, Laya.Handler.create(this, function () {
                t && !t.destroyed && Laya.Tween.to(t, {
                    y: t.y - s
                }, n, null)
            }))
        }
        static GuideTapAim(t, e) {
            if (!t || t.destroyed) return;
            t.scale(1.3, 1.3), t.alpha = 1, Laya.Tween.to(t, {
                scaleX: .3,
                scaleY: .3,
                alpha: .7
            }, e)
        }
        static ScaleToBig(t, e = 1e3, i = 1.5, s = null) {
            if (!t || t.destroyed) return;
            let n = t.y + 150;
            Laya.Tween.to(t, {
                scaleX: i,
                scaleY: i,
                y: n,
                alpha: .1
            }, e, null, Laya.Handler.create(this, function () {
                t && !t.destroyed && s && s()
            }))
        }
        static UpFlyTo(t, e = 220, i = 1e3, s = 1.5, n = 1, a = null) {
            if (!t || t.destroyed) return;
            let l = t.y - e;
            t.alpha = .1, Laya.Tween.to(t, {
                scaleX: s,
                scaleY: s,
                y: l,
                alpha: 1
            }, .62 * i, null, Laya.Handler.create(this, function () {
                t && !t.destroyed && (Hi.FlashEffect(t, 180, 100), Laya.Tween.to(t, {
                    scaleX: n,
                    scaleY: n,
                    y: -300,
                    alpha: .4
                }, .38 * i, null, Laya.Handler.create(this, function () {
                    t && !t.destroyed && a && a()
                })))
            }))
        }
        static UpBigTo(t, e = 220, i = 1e3, s = 1.5, n = 5, a = null) {
            if (!t || t.destroyed) return;
            let l = t.y - e,
                o = t.y - e - .5 * e;
            Laya.Tween.to(t, {
                scaleX: s,
                scaleY: s,
                y: l
            }, .6 * i, null, Laya.Handler.create(this, function () {
                t && !t.destroyed && (Hi.FlashEffect(t, 180, 100), Laya.Tween.to(t, {
                    scaleX: n,
                    scaleY: n,
                    alpha: .1,
                    y: o
                }, .4 * i, null, Laya.Handler.create(this, function () {
                    t && !t.destroyed && a && a()
                })))
            }))
        }
        static BossComing(t, e = 1200, i = .86, s = 1.1, n = null) {
            t && !t.destroyed && Laya.Tween.to(t, {
                scaleX: i,
                scaleY: i,
                alpha: .5
            }, .25 * e, null, Laya.Handler.create(this, function () {
                t && !t.destroyed && Laya.Tween.to(t, {
                    scaleX: s,
                    scaleY: s,
                    alpha: 1
                }, .25 * e, null, Laya.Handler.create(this, function () {
                    t && !t.destroyed && Laya.Tween.to(t, {
                        scaleX: i,
                        scaleY: i,
                        alpha: .8
                    }, .25 * e, null, Laya.Handler.create(this, function () {
                        t && !t.destroyed && Laya.Tween.to(t, {
                            scaleX: s,
                            scaleY: s,
                            alpha: 1
                        }, .25 * e, null, Laya.Handler.create(this, function () {
                            t && !t.destroyed && (Hi.FlashEffect(t, 180, 100), setTimeout(() => {
                                n && n()
                            }, 120))
                        }))
                    }))
                }))
            }))
        }
    }
    class $i extends Laya.Box {
        constructor() {
            super(), this.no = null, this.starT = null, this.starN = null, this.scaleVal = .8, this.lock = null, this.links = null, this.wasteT = null, this.attackCold = null, this.roundBsT = null, this._t = 0, this.mouseThrough = !0, this.mouseEnabled = !1
        }
        refreshAtkSpeed() {
            let t = Wi.bulletInterval(this.cfgId, this.lv, this.star) + Yt.GetAddVal(it.SHOOT_FAST_2),
                e = Yt.GetRndVal(it.SHOOT_SPEED_3);
            e && (t += Math.floor(t * e)), this.atkSpeed = t * qi.baseSpeed
        }
        refreshShootRange() {
            let t = Wi.shootVal(this.cfgId, this.lv, this.star),
                e = Yt.GetAddVal(it.SHOOT_RANGE_1);
            this.shootRange = t + e
        }
        Init(t, e, i, s, n, a) {
            this._isClear = !1, this.speed = 0, this.no = e, this.cfgId = t, this.quality = a, this.lv = n, this.star = 1, this.starT = null, this.starN = 0, this.roundBsT = 0, this.wasteT = 0;
            let l = Wi.GetCfg(this.cfgId);
            if (this.skin = l.skin, this.job = l.job, this.turnSpeed = l.turnSpeed, this.flyType = l.flyType, this.bombSkin = l.bombSkin, this.hurtType = l.hurtType, this.atkSound = l.atkSound, this.hitSound = l.hitSound, this.vol = l.vol, this.maxStar = 3, 0 == l.buyGold[2] && (this.maxStar = 2), this.refreshAtkSpeed(), this.refreshShootRange(), this.attackCold = null, this.pos(i, s), this.boxX = null, this.boxY = null, this.flyType == st.Self) {
                let t = mt.PosToBoxNo(i, s),
                    e = mt.GetBoxPos(t);
                this.boxX = e.x, this.boxY = e.y
            }
            this.initView(), this.alpha = .05, Laya.Tween.to(this, {
                alpha: 1
            }, 550), Laya.timer.frameLoop(1, this, this.update)
        }
        upStar(t = null) {
            null === t ? this.star++ : this.star = t, this.setRoundLockAim(null, !0), this.refreshStar(0), this.refreshAtkSpeed(), this.refreshShootRange()
        }
        initView() {
            this.destroyed || this._isClear || (this.initRangeView(), this.initBodyView(), this.initBloodView(), this.initTopView(), this.turnUpdate(0), this.refreshStar(0))
        }
        refreshStar(t) {
            if (this.starIcon || (this.starIcon = new Laya.Image, this.starIcon.pos(0, -52), this.addChild(this.starIcon)), null === this.starT ? this.starT = 0 : 0 === t && (this.starT = 0), this.starT -= t, !(this.starT > 0)) {
                if (this.starT = 150, this.starIcon.visible = !1, Ui.look) {
                    let t = this.star;
                    return this.star == this.maxStar && 2 == this.star && (t = 4), this.starIcon.visible = !0, this.starIcon.skin = `images/man/icon_l${t}.png`, void X.InitPivot(this.starIcon, "fight", `icon_l${t}`)
                }
                if (!Li.IsOpen(S.Build) && this.star < this.maxStar) {
                    let t = qi.SoliderGoldNeed(this.cfgId, this.star);
                    if (!Le.HasMoneyByVal(d.money, t)) return;
                    if (this.starIcon.visible = !0, this.starIcon.skin = `images/man/star${this.star}.png`, X.InitPivot(this.starIcon, "fight", `star${this.star}`), this.starN-- >= 0) return;
                    this.starN = Qi.RandomInt(5, 12), this.starIcon && !this.starIcon.filters && Hi.FlashEffect(this.starIcon, 70, 80)
                }
            }
        }
        initRangeView() {
            this.rangeImg1 || (this.rangeImg3 = new Laya.Image("images/man/hitRange.png"), this.rangeImg3.anchorX = .5, this.rangeImg3.anchorY = .5, this.rangeImg3.alpha = .72, this.rangeImg2 = new Laya.Image("images/man/hitRange.png"), this.rangeImg2.anchorX = .5, this.rangeImg2.anchorY = .5, this.rangeImg2.alpha = .72, this.rangeImg1 = new Laya.Image("images/man/hitRange.png"), this.rangeImg1.anchorX = .5, this.rangeImg1.anchorY = .5, this.rangeImg1.alpha = .72, this.roundImg3 = new Laya.Image("images/man/hitRange.png"), this.roundImg3.anchorX = .5, this.roundImg3.anchorY = .5, this.roundImg3.alpha = 1, this.roundImg2 = new Laya.Image("images/man/hitRange.png"), this.roundImg2.anchorX = .5, this.roundImg2.anchorY = .5, this.roundImg2.alpha = 1, this.roundImg1 = new Laya.Image("images/man/hitRange.png"), this.roundImg1.anchorX = .5, this.roundImg1.anchorY = .5, this.roundImg1.alpha = 1, this.addChild(this.rangeImg3), this.addChild(this.rangeImg2), this.addChild(this.rangeImg1), this.addChild(this.roundImg3), this.addChild(this.roundImg2), this.addChild(this.roundImg1));
            let t = Wi.shootVal(this.cfgId, this.lv, 1),
                e = Wi.shootVal(this.cfgId, this.lv, 2),
                i = Wi.shootVal(this.cfgId, this.lv, 3);
            this.rangeImg1.size(2 * t, 2 * t), this.rangeImg2.size(2 * e, 2 * e), this.rangeImg3.size(2 * i, 2 * i);
            let s = Wi.rangeVal(this.cfgId, this.lv, 1);
            if (s > 0) {
                let t = Wi.rangeVal(this.cfgId, this.lv, 2),
                    e = Wi.rangeVal(this.cfgId, this.lv, 3);
                this.roundImg1.size(2 * s, 2 * s), this.roundImg2.size(2 * t, 2 * t), this.roundImg3.size(2 * e, 2 * e)
            }
        }
        initBodyView() {
            this.bodyImg || (this.bodyImg = new Laya.Image, this.addChild(this.bodyImg)), this.bodyImg.scale(this.scaleVal, this.scaleVal), this.bodyImg.rotation = 90, this.bodyImg.skin = `images/man/${this.skin}.png`, X.InitPivot(this.bodyImg, "man", this.skin)
        }
        initTopView() {}
        topRefresh(t) {
            if (!this.manIcon) return;
            Li.fillNum(this.lvBox, "fight", "icon_word", `L${this.lv}` + "", n.Left), this.qualityBox.visible = !1;
            let e = qi.GetSoliderStar(this.no);
            Li.fillNum(this.qualityBox, "fight", "icon_word", e + "", n.Center), this.qualityBox.visible = !0;
            this.redIcon || (this.redIcon = new Laya.Image("images/man/red.png"), this.manIcon.addChild(this.redIcon), this.redIcon.pos(-76, 30), X.InitPivot(this.redIcon, "fight", "red"))
        }
        turnUpdate(t) {
            if (0 == this.turnSpeed) return;
            if (null === this.lock) return;
            let e = qi.GetEnemy(this.lock);
            if (!e) return;
            let i = this.turnSpeed;
            i *= 1 + .1078 * Yt.GetRndVal(it.FAST_TURN_9), i *= qi.tdSpeed;
            let s = Qi.angle(this.x, this.y, e.x, e.y);
            Math.abs(this.bodyImg.rotation - s) < i ? this.bodyImg.rotation = s : this.bodyImg.rotation = Qi.angleRevise(this.bodyImg.rotation, i, s)
        }
        shootAngle() {
            return this.bodyImg.rotation
        }
        setRoundLockAim(t, e) {
            if (this.flyType == st.Round)
                for (let i = 0; i < 4; i++) {
                    let s = qi.BulletExist(this.no, i);
                    s && s.setRoundAim(t, null, null, e)
                }
        }
        attackUpdate(t) {
            let e = Wi.GetCfg(this.cfgId);
            if (this.flyType == st.Link) {
                if (qi.LinkDo(this, e.bulletNum), null === this.links || 0 == this.links.length) return
            } else if (this.flyType == st.Round) {
                if (qi.LockDo(this, !1), this.setRoundLockAim(this.lock, !1), null === this.lock) return;
                this.roundBsT -= t, this.roundBsT <= 0 && (null !== this.lock && Hi.SmallBigLoop(this.bodyImg, 92, .54, this.scaleVal, this.scaleVal), this.roundBsT = Qi.RandomInt(2160, 2800))
            } else if (this.flyType == st.Sides) {
                if (qi.LockDo(this, !0), null === this.lock) return
            } else if (this.flyType == st.Self || this.flyType == st.Line) {
                if (this.hurtType == nt.Jump && (this.lock = null), qi.LockDo(this, !1), null === this.lock) return
            } else if (this.flyType == st.Rocket && (qi.LockDo(this, !1), null === this.lock)) return;
            if (null !== this.speed && (this.speed -= t, !(this.speed > 0)))
                if (this.flyType == st.Link)
                    for (let t in this.links) {
                        let e = this.links[t];
                        qi.BulletExist(this.no, e) || (Hi.SmallBigLoop(this.bodyImg, 88, .54, this.scaleVal, this.scaleVal), qi.AddBullet(this.no, this.cfgId, null, this.x, this.y, this.links[t], null, null, null, this.hitSound, this.vol))
                    } else if (this.flyType == st.Round) {
                        if (null !== this.attackCold && (this.attackCold -= t, this.attackCold > 0)) return;
                        let i = e.bulletNum;
                        2 == i && (2 == this.star ? i = 3 : 3 == this.star && (i = 4));
                        for (let t = 0; t < i; t++)
                            if (qi.BulletExist(this.no, t)) return void((this.attackCold = null) && (this.attackCold = 380));
                        this.attackCold = null;
                        for (let t = 0; t < i; t++) {
                            let e = qi.AddBullet(this.no, this.cfgId, null, this.x, this.y, this.lock, this.x, this.y - 7, t, this.hitSound, this.vol);
                            e && e.setRoundAim(this.lock, t, i, !1)
                        }
                    } else if (this.flyType == st.Sides) {
                this.speed = null, Hi.SmallBigLoop(this.bodyImg, 88, .48, this.scaleVal, this.scaleVal);
                let t = 4 * this.star,
                    e = 360 / t,
                    i = Laya.stage.height;
                for (let s = 0; s < t; s++) {
                    let t = e * s,
                        n = this.x + Qi.moveToX(t, i),
                        a = this.y + Qi.moveToY(t, i);
                    qi.AddBullet(this.no, this.cfgId, null, this.x, this.y, null, n, a, null, null, this.vol)
                }
                Z.TryHitSound(this.atkSound, this.vol), this.speed = this.atkSpeed
            } else if (this.flyType == st.Line || this.flyType == st.Self) {
                let t = qi.GetEnemy(this.lock);
                if (this.turnSpeed) {
                    let e = Qi.angle(this.x, this.y, t.x, t.y);
                    if (Math.abs(e - this.bodyImg.rotation) > 2 * this.turnSpeed) return
                }
                this.speed = null, Hi.SmallBigLoop(this.bodyImg, 88, .48, this.scaleVal, this.scaleVal);
                let i = this.lock,
                    s = e.bulletNum;
                this.flyType == st.Line && 7 != e.job && 3 == s && e.bulletAngle > 0 && 3 == this.star && (s = 4);
                let n = Math.floor(s / 2);
                for (let a = 0; a < s; a++) {
                    n != a && (i = null), s % 2 == 0 && e.bulletAngle > 0 && (i = null);
                    let l = 0;
                    this.flyType == st.Line && (this.hurtType == nt.Pass ? (i = null, l = e.jumpNum * (this.star + (this.star - 1) / 3)) : this.hurtType == nt.Shoot && (l = e.jumpNum * this.star));
                    let o = t.x,
                        r = t.y;
                    if (null === i) {
                        let t = Qi.angle(this.x, this.y, o, r);
                        s % 2 == 0 && e.bulletAngle > 0 ? t += (a - n + .5) * e.bulletAngle : a != n && (t += (a - n) * e.bulletAngle), o = this.x + Qi.moveToX(t, this.shootRange + l), r = this.y + Qi.moveToY(t, this.shootRange + l)
                    }
                    let h = this.x,
                        d = this.y;
                    this.flyType == st.Self && null !== this.boxX && null !== this.boxY && (h = this.boxX, d = this.boxY), qi.AddBullet(this.no, this.cfgId, null, h, d, i, o, r, null, null, null)
                }
                Z.TryHitSound(this.atkSound, this.vol), this.speed = this.atkSpeed
            } else if (this.flyType == st.Rocket) {
                this.speed = null;
                let t = qi.GetEnemy(this.lock);
                if (!t) return;
                Hi.SmallBigLoop(this.bodyImg, 88, .48, this.scaleVal, this.scaleVal), Hi.FlashEffect(this.bodyImg, 70, 88), Z.TryHitSound(this.atkSound, this.vol), qi.AddBullet(this.no, this.cfgId, null, this.x, this.y, this.lock, t.x, t.y, null, this.hitSound, this.vol), this.speed = this.atkSpeed
            }
        }
        update() {
            if (this._isClear) return;
            let t = Laya.timer.currTimer,
                e = (t - this._t) * qi.baseSpeed * qi.tdSpeed;
            if (this._t = t, e > 30 && (e = 30), this.rangeImg1.visible = !1, this.rangeImg2.visible = !1, this.rangeImg3.visible = !1, this.roundImg1.visible = !1, this.roundImg2.visible = !1, this.roundImg3.visible = !1, _e.InFightGuide(1)) this[`rangeImg${this.star}`].visible = 1 == this.quality;
            else if ((null === qi.tapSoliderNo || this.no == qi.tapSoliderNo) && (this.rangeImg1 && (this.rangeImg1.visible = ge.devRange > 0 && 1 == this.star), this.rangeImg2 && (this.rangeImg2.visible = ge.devRange > 0 && 2 == this.star), this.rangeImg3 && (this.rangeImg3.visible = ge.devRange > 0 && 3 == this.star), ge.devRange > 0 && this.flyType != st.Self)) {
                if (Wi.rangeVal(this.cfgId, this.lv, 1) > 0) {
                    this.roundImg1.visible = !0, this.roundImg2.visible = !0, this.roundImg3.visible = !0;
                    let t = this.bodyImg.rotation,
                        e = Wi.shootVal(this.cfgId, this.lv, 1),
                        i = Wi.shootVal(this.cfgId, this.lv, 2),
                        s = Wi.shootVal(this.cfgId, this.lv, 3);
                    this.roundImg1.x = Qi.moveToX(t, e), this.roundImg1.y = Qi.moveToY(t, e), this.roundImg2.x = Qi.moveToX(t, i), this.roundImg2.y = Qi.moveToY(t, i), this.roundImg3.x = Qi.moveToX(t, s), this.roundImg3.y = Qi.moveToY(t, s)
                }
            }
            Yi.St == s.Fight && (Li.IsOpen(S.Exit) || (this.refreshStar(e), Li.IsOpen(S.Pause) || Li.IsOpen(S.StarDesc) || Li.IsOpen(S.Guide) || (this.bloodRefresh(), this.topRefresh(e), this.attackUpdate(e), this.turnUpdate(e))))
        }
        clearLock(t) {
            this.lock == t && (this.lock = null), this.flyType == st.Link && qi.LinkDele(this, t)
        }
        clear(t = 400) {
            this._isClear = !0, this.lock = null, this.links = null, !t || t <= 0 ? (Jt.DeleDelay(this.no), this.removeSelf(), this.alpha = 1, this.scale(1, 1), this.manIcon && (this.manIcon.visible = !1), Laya.Pool.recover("Solider", this)) : Laya.Tween.to(this, {
                alpha: .4
            }, t, null, Laya.Handler.create(this, function () {
                this.clear(0)
            }.bind(this)))
        }
        setPos(t, e) {
            this.pos(t, e)
        }
        onKill(t) {}
        onBlood(t, e, i = 0) {}
        onHurt(t, e, i, s, n, a, l = null) {}
        bloodRefresh() {}
        initBloodView() {}
    }
    class ji extends Laya.Box {
        constructor() {
            super(), this.no = null, this.jumping = !1, this.diving = !1, this.bodyWid = 0, this.scaleVal = 1, this.breathing = !1, this.lastFullBlood = null, this._t = 0, this.delayInfo = null, this.mouseThrough = !0, this.mouseEnabled = !1
        }
        Init(t, e, i, s, n, a, l, o, r, h, d, u, c, p) {
            this._isClear = !1, this.lastFullBlood = null, this.jumping = !1, this.diving = !1, this.no = e, this.cfgId = t, this.hits = 0;
            let f = H.GetCfg(this.cfgId);
            if (this.skin = f.skin, this.info = u, this.lotNo = c, this.quality = f.quality, this.move = f.move, qi.passType == D.Daimond ? this.quality != M.Daimond && (this.move = Math.round(1.32 * this.move)) : qi.passType == D.Pass && qi.playType == P.Boss && this.quality == M.Boss && (this.move = Math.round(.25 * this.move)), this.blood = i, this._fullBlood = i, this.atkDef = s, this.slow = f.slow, this.delayInfo = null, this.dropT = Laya.timer.currTimer, this.drop = p, this.bodyWid = 0, this.quality == M.Stand) {
                this.atkDef = 0, this.skin = f.skin;
                let t = X.CenterInfo("stand", f.skin + "_1");
                this.bodyWid = .5 * t.wid
            } else if (-1 != [M.Boss, M.Gold, M.Daimond].indexOf(this.quality)) {
                let t = X.CenterInfo("boss", f.skin + "_1");
                this.bodyWid = .5 * t.wid
            } else {
                let t = X.CenterInfo("fight", f.skin + "_1");
                this.bodyWid = .5 * t.wid;
                let e = Yt.GetRndVal(it.SLOW_CUT_21);
                this.slow = this.slow * (1 - e)
            }
            this.path = l, this.waitMin = r, this.waitMax = h, this.step = d, this.line = o, this.pos(n, a), this.initView(), f.step || (this.alpha = .05, Laya.Tween.to(this, {
                alpha: 1
            }, 550)), Laya.timer.frameLoop(1, this, this.update), 1001 == this.cfgId && Laya.timer.loop(2400, this, this.bronPointWave)
        }
        bronPointWave() {
            Ui.RefreshStand(this.cfgId, this.blood / this.fullBlood), Hi.SmallBigLoop(this.bodyImg, 400, 1.025, .99, 1)
        }
        initView() {
            this.destroyed || this._isClear || (this.initBodyView(), this.initBloodView(), this.initTopView())
        }
        initShadowView() {}
        initBodyView() {
            let t;
            switch (this.bodyBox || (this.bodyBox = new Laya.Box, this.addChild(this.bodyBox)), this.bodyImg || (this.bodyImg = new Laya.Image, this.bodyBox.addChild(this.bodyImg)), this.bodyImg.rotation = 0, this.bodyBox.scale(this.scaleVal, this.scaleVal), this.quality) {
                case M.Stand:
                    this.pngI = 1, this.pngT = 0, t = qt.InitPivot(this.bodyImg, "stand", this.skin), this.pngInt = t.interval, this.pngNum = t.pngs, this.bodyImg.skin = `images/stand/${this.skin}_${this.pngI}.png`;
                    break;
                case M.Boss:
                case M.Gold:
                case M.Daimond:
                    this.pngI = 1, this.pngT = 0, t = qt.InitPivot(this.bodyImg, "boss", this.skin), this.pngInt = t.interval, this.pngNum = t.pngs, this.bodyImg.skin = `images/boss/${this.skin}_${this.pngI}.png`;
                    break;
                default:
                    this.pngI = 1, this.pngT = 0, t = qt.InitPivot(this.bodyImg, "fight", this.skin), this.pngInt = t.interval, this.pngNum = t.pngs, this.bodyImg.skin = `images/fight/${this.skin}_${this.pngI}.png`
            }
        }
        initBloodView() {
            if (this.bloodBg || (this.bloodBg = new Laya.Image, this.addChild(this.bloodBg), this.bloodBg.sizeGrid = "5,6,6,5", this.bloodBg.anchorX = .5, this.bloodBg.anchorY = .5), this.bloodBg.visible = !1, this.quality == M.Stand) {
                this.bloodBg.skin = "images/stand/bloodBlack.png";
                let t = qt.InitPivot(this.bodyImg, "stand", this.skin);
                this.bloodBg.y = 16 - t.wid, 1001 == this.cfgId && (this.bloodBg.visible = !0)
            } else if (-1 != [M.Boss, M.Gold, M.Daimond].indexOf(this.quality)) {
                this.bloodBg.skin = "images/boss/bloodBlack.png";
                let t = qt.InitPivot(this.bodyImg, "boss", this.skin);
                this.bloodBg.y = -t.wid
            } else {
                this.bloodBg.skin = "images/fight/bloodBlack.png";
                let t = qt.InitPivot(this.bodyImg, "fight", this.skin);
                this.bloodBg.y = -t.wid
            }
            this.bloodImg || (this.bloodImg = new Laya.Image, this.bloodImg.sizeGrid = "1,1,1,1", this.bloodImg.pos(3, 3), this.bloodBg.addChild(this.bloodImg));
            let t = 88;
            if (this.quality == M.Stand) {
                t = {
                    0: 86,
                    1: 62,
                    2: 68,
                    3: 80,
                    4: 96
                } [Math.floor(this.cfgId % 1e3 / 100)]
            } else {
                t = {
                    1: 60,
                    2: 68,
                    3: 76,
                    4: 84,
                    5: 90,
                    6: 96,
                    7: 96,
                    9: 106,
                    11: 62,
                    12: 68
                } [this.quality]
            }
            this.bloodBg.width = t, this.quality == M.Stand ? (this.bloodImg.skin = "images/stand/bloodO.png", 1001 == this.cfgId && (this.bloodImg.skin = "images/stand/bloodR.png")) : -1 != [M.Boss, M.Gold, M.Daimond].indexOf(this.quality) ? this.bloodImg.skin = "images/boss/bloodR.png" : this.bloodImg.skin = "images/fight/bloodG.png", this.bloodBg.visible = !0, this.bloodRefresh()
        }
        initTopView() {
            if (this.lockImg || (this.lockImg = new Laya.Image, this.addChild(this.lockImg)), this.lockImg.visible = !1, this.quality == M.Stand) {
                this.lockImg.skin = "images/stand/lock.png", X.InitPivot(this.lockImg, "stand", "lock");
                let t = H.GetCfg(this.cfgId),
                    e = X.CenterInfo("stand", t.skin + "_1"),
                    i = qt.CenterInfo("stand", t.skin);
                this.lockImg.y = -(i.centY - e.centY), this.lockImg.y = this.bloodBg.y - 15
            } else if (-1 != [M.Boss, M.Gold, M.Daimond].indexOf(this.quality)) {
                this.lockImg.skin = "images/boss/lock.png", X.InitPivot(this.lockImg, "fight", "lock");
                let t = H.GetCfg(this.cfgId),
                    e = X.CenterInfo("boss", t.skin + "_1"),
                    i = qt.CenterInfo("boss", t.skin);
                this.lockImg.y = -(i.centY - e.centY), this.lockImg.y = this.bloodBg.y - 44
            } else {
                this.lockImg.skin = "images/fight/lock.png", X.InitPivot(this.lockImg, "fight", "lock");
                let t = H.GetCfg(this.cfgId),
                    e = X.CenterInfo("fight", t.skin + "_1"),
                    i = qt.CenterInfo("fight", t.skin);
                this.lockImg.y = -(i.centY - e.centY), this.lockImg.y = this.bloodBg.y - 23
            }
        }
        bloodRefresh() {
            this.bloodImg && (this.bloodBg.visible = !1, 1001 == this.cfgId ? (this.bloodImg.width = (this.bloodBg.width - 6) * this.blood / this.fullBlood, this.bloodBg.visible = !0) : this.blood < this.fullBlood ? (this.bloodImg.width = (this.bloodBg.width - 6) * this.blood / this.fullBlood, this.bloodBg.visible = !0) : this.lockImg && this.no === qi.lockEnemyNo && (this.bloodImg.width = (this.bloodBg.width - 6) * this.blood / this.fullBlood, this.bloodBg.visible = !0))
        }
        topRefresh(t) {
            this.lockImg.visible = this.no === qi.lockEnemyNo
        }
        get fullBlood() {
            if (this.quality == M.Stand) return this._fullBlood;
            let t = qi.bloodMax - qi.blood;
            if (0 === t) return this._fullBlood;
            if (null !== this.lastFullBlood) return this.lastFullBlood;
            if (this.blood != this._fullBlood) return this._fullBlood;
            let e = {
                    1: .995,
                    2: .99,
                    3: .985,
                    4: .98,
                    5: .975,
                    6: .97,
                    7: .965,
                    8: .96,
                    9: .955
                },
                i = e[t] ? e[t] : .95,
                s = Math.ceil(this._fullBlood * i);
            return this.lastFullBlood = s, this.blood = s, this.lastFullBlood
        }
        moveUpdate(t) {
            if (this.quality == M.Stand) return;
            if (this.delayInfo && this.delayInfo[at.Stop] && this.delayInfo[at.Stop][0] && this.delayInfo[at.Stop][0] > 0) return;
            if (this.delayInfo && this.delayInfo[at.__Close] && this.delayInfo[at.__Close][0] && this.delayInfo[at.__Close][0] > 0) return;
            if (!this.goto) {
                if (!this.path || 0 == this.path.length) {
                    if (this._isClear) return;
                    if (this._isClear = !0, this.quality == M.Daimond) {
                        let [t] = this.info;
                        Pi.FlyDrop([
                            [d._diamond, t]
                        ], this.x, this.y, null, null, null, null), qi.AddSaveDiamond(t);
                        let e = this.x + mt.topX,
                            i = this.y + mt.topY,
                            s = 128;
                        Le.AddMoneyByVal(d.money, s), Pi.FlyDrop([
                            [d.money, s]
                        ], e, i, null, null, null, null)
                    } else qi.TdHurt(this.quality, this.blood);
                    return void qi.DeleEnemy(this.no, 200, !0)
                }
                let t = this.path.shift();
                if (qi.passType == D.Pass && qi.playType == P.Loop && 0 == this.path.length || qi.passType == D.Patch && 0 == this.path.length) {
                    let e = qi.GetLoopPath(),
                        i = e.indexOf(t);
                    this.path = e.slice(i)
                }
                let e = mt.GetBoxPos(t);
                if (this.goto = new Laya.Point(e.x, e.y), this.x == e.x)
                    for (let t in this.path) {
                        let e = this.path[t],
                            i = mt.GetBoxPos(e);
                        if (i.x != this.x) {
                            this.bodyBox.scaleX = this.x > i.x ? -this.scaleVal : this.scaleVal;
                            break
                        }
                    } else this.bodyBox.scaleX = this.x > e.x ? -this.scaleVal : this.scaleVal
            }
            let e = new Laya.Point(this.goto.x, this.goto.y),
                i = this.move * t * .001;
            if (this.delayInfo && this.delayInfo[at.Slow] && this.delayInfo[at.Slow][0] && this.delayInfo[at.Slow][0] > 0) {
                i *= 1 - this.delayInfo[at.Slow][1]
            }
            let s = qi.bloodMax - qi.blood,
                n = {
                    1: .995,
                    2: .99,
                    3: .985,
                    4: .98,
                    5: .975,
                    6: .97,
                    7: .965,
                    8: .96,
                    9: .955
                },
                a = n[s] ? n[s] : 1;
            if (1 != a && (i *= a), i >= Qi.dist(this.x, this.y, e.x, e.y)) {
                if (this.pos(e.x, e.y), this.goto && e.x == this.goto.x && e.y == this.goto.y) {
                    if (mt.IsJumpBox(this.line, e.x, e.y)) {
                        let t = 1 == qi.tdSpeed ? 1 : .6;
                        t *= qi.baseSpeed, this.jumping = !0;
                        let e = this.y - 28,
                            i = this.y + 15;
                        Laya.Tween.to(this, {
                            scaleX: 1.12,
                            scaleY: 1.32,
                            y: e
                        }, 180 * t, null, Laya.Handler.create(this, function () {
                            Laya.Tween.to(this, {
                                scaleX: .6,
                                scaleY: .6,
                                y: i,
                                alpha: 0
                            }, 130 * t, null, Laya.Handler.create(this, function () {
                                let e = this.path.shift(),
                                    i = mt.GetBoxPos(e);
                                this.pos(i.x, i.y), this.diving = !0, qi.ClearBulletAim(this.no), qi.ClearEnemyLock(this.no);
                                let s = this.y,
                                    n = this.y - 16,
                                    a = this.y + 8;
                                Laya.Tween.to(this, {
                                    scaleX: 1.08,
                                    scaleY: 1.08,
                                    y: n,
                                    alpha: 1
                                }, 160 * t, null, Laya.Handler.create(this, function () {
                                    Laya.Tween.to(this, {
                                        scaleX: 1,
                                        scaleY: 1,
                                        y: a
                                    }, 120 * t, null, Laya.Handler.create(this, function () {
                                        this.jumping = !1, this.diving = !1, this.y = s
                                    }.bind(this)))
                                }.bind(this)), 480 * t)
                            }.bind(this)))
                        }.bind(this)))
                    }
                    this.goto = null
                }
            } else {
                let t = Qi.angle(this.x, this.y, e.x, e.y);
                Yi.devMove || (this.x = this.x + Qi.moveToX(t, i), this.y = this.y + Qi.moveToY(t, i))
            }
        }
        updateEat(t) {
            if (qi.passType != D.Daimond) return;
            if (this.quality != M.Daimond) return;
            let e = qi.GetEnemyList(!0);
            for (let t in e) {
                let i = e[t];
                if (i.quality == M.Daimond) continue;
                if (Qi.dist(this.x, this.y, i.x, i.y) > 50) continue;
                qi.DeleEnemy(i.no, 400, !0), qi.DeleEnemy(this.no, 400, !0);
                let s = this.x + mt.topX,
                    n = this.y + mt.topY,
                    a = 128;
                Le.AddMoneyByVal(d.money, a), Pi.FlyDrop([
                    [d.money, a]
                ], s, n, null, null, null, null);
                let [l] = this.info, o = Math.round(.5 * l);
                return Pi.FlyDrop([
                    [d._diamond, o]
                ], s, n, null, null, null, null), void qi.AddSaveDiamond(o)
            }
        }
        update() {
            if (this._isClear) return;
            let t = Laya.timer.currTimer,
                e = Math.floor((t - this._t) * qi.baseSpeed * qi.tdSpeed * qi.lvSpeed),
                i = 30 * qi.baseSpeed * qi.tdSpeed * qi.lvSpeed;
            e > i && (e = i), this._t = t, this.pngUpdate(e), this.jumping || (this.topRefresh(e), Yi.St == s.Fight && (Li.IsOpen(S.Exit) || Li.IsOpen(S.Pause) || Li.IsOpen(S.StarDesc) || Li.IsOpen(S.Guide) || (this.bloodRefresh(), this.moveUpdate(e), this.delayUpdate(e), this.updateEat(e))))
        }
        pngUpdate(t) {
            if (this.quality != M.Stand) {
                if (this.delayInfo && this.delayInfo[at.Slow] && this.delayInfo[at.Slow][0] && this.delayInfo[at.Slow][0] > 0) {
                    t *= 1 - this.delayInfo[at.Slow][1]
                }
                this.pngT += t, this.pngT >= this.pngInt && (++this.pngI > this.pngNum && (this.pngI = 1), -1 != [M.Boss, M.Gold, M.Daimond].indexOf(this.quality) ? this.bodyImg.skin = `images/boss/${this.skin}_${this.pngI}.png` : this.bodyImg.skin = `images/fight/${this.skin}_${this.pngI}.png`, this.pngT %= this.pngInt)
            }
        }
        delayUpdate(t) {
            if (null !== this.delayInfo)
                for (let e in this.delayInfo) {
                    let i = parseInt(e);
                    this.delayInfo[i][0] -= t, this.delayInfo[i][0] <= 0 && delete this.delayInfo[i]
                }
        }
        onKill(t) {
            this.onHurt(t, null, this.blood, null, 0, 0, 270, 120, null, null, null, null, null, null)
        }
        onBlood(t, e, i = 0) {
            t = Math.floor(t);
            let s = this.fullBlood - this.blood;
            t = t > s ? s : t, this.blood += t, null === i || Pi.FlyBloodPng(t, this.x, this.y, e, "gree")
        }
        onHurt(t, e, i, s, n, a, l, r, h, c = null, p = null, f = null, g, m) {
            let y;
            this.no === qi.lockEnemyNo && this.quality !== M.Stand && this.quality !== M.Boss && (i = Math.ceil(1.026 * i)), t && (y = qi.GetSolider(t)) && y.quality >= u.Two && this.quality == M.Stand && (y.hurtType == nt.Area ? i = Math.ceil(.82 * i) : y.hurtType == nt.Pass && (i = Math.ceil(.85 * i))), this.hits++;
            let I = this.atkDef;
            if (I && -1 != [M.One, M.Two, M.Three, M.Four, M.Five].indexOf(this.quality)) {
                I *= 1 - Yt.GetRndVal(it.ATK_CUT_8)
            }
            n && n > 0 && (I = Math.floor(I * (1 - n / 100))), I /= 100 + I, i = Math.floor(i * (1 / (1 + I)));
            let b = !1;
            if (this.quality !== M.Stand && a && a > 0 && Math.floor(100 * Math.random()) < a) {
                b = !0;
                let t = Yt.GetRndVal(it.SUPER_HURT_7);
                i = Math.floor(i * (2 + t))
            }
            let T = !1;
            null !== t && this.delayInfo && this.delayInfo[at.Heavy] && this.delayInfo[at.Heavy][0] && this.delayInfo[at.Heavy][0] > 0 && (T = !0, i = Math.floor(1.25 * i), s = Math.floor(1.25 * s)), this.blood -= i, this.blood -= s, Yi.devHitApply(t || m, i);
            let _ = null !== p ? p : this.x,
                v = null !== f ? f : this.y;
            this.bloodRefresh();
            let L = this.x + mt.topX,
                x = this.y + mt.topY;
            if (this.quality == M.Gold) {
                let t = this.blood + i,
                    e = 5,
                    s = Math.floor(t / this.fullBlood * 100),
                    n = Math.floor(s / e),
                    a = Math.floor(this.blood / this.fullBlood * 100);
                a < 0 && (a = 0);
                let l = n - Math.floor(a / e);
                if (l > 0) {
                    let [t, i] = this.info, s = Le.getPassGold(t) * this.fullBlood / i, n = Math.round(s / (100 / e) * l);
                    this.blood <= 0 ? Pi.FlyDrop([
                        [d._gold, n]
                    ], L, x, null, null, null, 5) : this.dropT <= Laya.timer.currTimer && (Pi.FlyDrop([
                        [d._gold, n]
                    ], L, x, null, null, null, 3), this.dropT = Laya.timer.currTimer + Qi.RandomInt(880, 2400)), qi.AddSaveGold(n)
                }
            }
            if (this.blood <= 0) {
                if (qi.passType == D.Patch && this.quality == M.Boss) {
                    let t = {
                            1: [12, 18],
                            2: [10, 16],
                            3: [10, 14],
                            4: [8, 12],
                            5: [8, 10]
                        },
                        [e, i] = t[this.lotNo],
                        s = Qi.RandomInt(e, i),
                        n = Wi.rndForPatch([this.lotNo], !1);
                    qi.savePatch(n, s), Pi.FlyDrop([
                        [d[`_patch${this.lotNo}`], 1]
                    ], null, null, `sp_${n}`, null, null, s)
                }
                let t = this.drop;
                if (this.quality == M.Stand) {
                    let t = mt.PosToBoxNo(this.x, this.y);
                    Xi.AppendOperation(ct.Stand, t);
                    let e = H.GetCfg(this.cfgId);
                    if (qi.passType == D.Pass && 1 == qi.lvChapter) {
                        let t = e.slow;
                        qi.AddSun(this.x, this.y, t, "sun")
                    } else if (100 * Math.random() <= e.move) {
                        let t = e.slow;
                        qi.AddSun(this.x, this.y, t, "sun")
                    }
                } else {
                    if (t += Yt.GetAddVal(it.MONEY_DROP_53), qi.passType == D.Pass && Lt.CanOpen(S.Fast) && -1 != [M.One, M.Two, M.Three, M.Four, M.Five].indexOf(this.quality)) {
                        let t = .08,
                            e = 10,
                            i = qi.GetEnemyList(!1);
                        (!i || i.length < 1) && (t = .12, e = 12), y && 7 == y.job && (t = .18, e = 12), qi.passType == D.Pass && 1 == qi.lvChapter && qi.lvPass <= 2 || Math.random() <= t && qi.AddSun(this.x, this.y, e, "moon")
                    }
                }
                if (xe.BufferSec(o.Drop)) {
                    let e = Math.random() < .5 ? 2 : 1;
                    t += e, Pi.FlyDrop([
                        [d._money, e]
                    ], L, x, null, null, null, e)
                }
                return Le.AddMoneyByVal(d.money, t), qi.DeleEnemy(this.no, 180, !0), Pi.AddEffect(qi.GetLayer(ut.Delay), "effectDelay", "die", null, null, this.x, this.y), Pi.FlyDrop([
                    [d.money, t]
                ], L, x, null, null, null, null), Pi.FlyMoneyPng(t, _, v), qi.lockEnemyNo == this.no && (qi.lockEnemyNo = null), 1 == this.hits && this.quality != M.Stand ? Pi.FlySpuerPng(this.x, this.y - this.bodyWid, dt.Kill) : b && Pi.FlySpuerPng(this.x, this.y - this.bodyWid, dt.Hit), y && qi.ApplyJobKill(y.job), 1001 == this.cfgId && Ui.RefreshStand(this.cfgId, 0), !0
            }
            if (Ui.RefreshStand(this.cfgId, this.blood / this.fullBlood), y && y.hurtType != nt.Area && y.bombSkin && qi.AddExplode(ut.Bullet, y.bombSkin, this.x, this.y, null), this.quality == M.Stand ? 1001 == this.cfgId ? Hi.FlashEffect(this, 42, 140) : Hi.FlashEffect(this.bloodImg, 35, 100) : Hi.FlashEffect(this.bloodImg, 120, 200), null !== t) {
                let n = qi.GetSoliderStar(t);
                Jt.AddDelay(e, this.no, n, i, s, h, c, g, t)
            }
            b && Pi.FlySpuerPng(this.x, this.y - this.bodyWid, dt.Hit)
        }
        FullBlood() {
            this.blood = this.fullBlood
        }
        SetBlood(t) {
            this.blood = t
        }
        SetDelay(t, e, i = null) {
            this.delayInfo || (this.delayInfo = {}), this.delayInfo[t] && this.delayInfo[t][0] && this.delayInfo[t][0] > 0 || (this.delayInfo[t] = [e, i])
        }
        DelayHurt(t, e) {}
        clear(t = 400) {
            this._isClear = !0, this.goto = null, !t || t <= 0 ? (this.no == qi.lockEnemyNo && (qi.lockEnemyNo = null), Laya.timer.clear(this, this.update), Laya.Tween.clearTween(this), Laya.Tween.clearTween(this.bodyImg), Jt.DeleDelay(this.no), this.removeSelf(), this.alpha = 1, this.scale(1, 1), this.bloodBg && (this.bloodBg.visible = !1), this.manIcon && (this.manIcon.visible = !1), this.breathing = !1, Laya.Pool.recover("Enemy", this)) : Laya.Tween.to(this, {
                alpha: .4
            }, t, null, Laya.Handler.create(this, function () {
                this.clear(0)
            }.bind(this)))
        }
        setPos(t, e) {
            this.pos(t, e)
        }
        endDist() {
            let t, e, i = null;
            for (let s in this.path) {
                let n = parseInt(s);
                0 == n && (t = this.x, e = this.y);
                let a = mt.GetBoxPos(this.path[n]);
                i += Qi.dist(t, e, a.x, a.y), t = a.x, e = a.y
            }
            return null === i && null !== this.goto && void 0 !== this.goto && (i = Qi.dist(this.x, this.y, this.goto.x, this.goto.y)), i
        }
    }! function (t) {
        t[t.Zero = 0] = "Zero", t[t.Bomb = 1] = "Bomb", t[t.Stand = 2] = "Stand", t[t.Solider = 3] = "Solider", t[t.Boss = 4] = "Boss", t[t.Enemy = 5] = "Enemy", t[t.Delay = 6] = "Delay", t[t.Bullet = 7] = "Bullet", t[t.Sun = 8] = "Sun", t[t.Fly = 9] = "Fly"
    }(ut || (ut = {}));
    class qi {
        static get baseSpeed() {
            let t = 1.33;
            return Qt.kill5Ing ? t = .4 : Qt.kill1Ing && (t = 1.1), t
        }
        static get tdTeamNo() {
            return Yi.Avatar.teamOn
        }
        static set tdTeamNo(t) {
            Yi.Avatar.teamOn = t
        }
        static InitBaseLv() {
            let t = qi.CurrentChapter(D.Pass);
            null === t && (t = 1), qi.lvChapter = t
        }
        static Init() {
            qi.boxLayer = new Laya.Box, qi.boxLayer.size(mt.mapWidth, mt.mapHeight), qi.boxLayer.pos(mt.topX, mt.topY), qi.boxLayer.mouseEnabled = !0, qi.bombLayer = new Laya.Sprite, qi.standLayer = new Laya.Sprite, qi.soliderLayer = new Laya.Sprite, qi.bossLayer = new Laya.Sprite, qi.enemyLayer = new Laya.Sprite, qi.delayLayer = new Laya.Sprite, qi.bulletLayer = new Laya.Sprite, qi.sunLayer = new Laya.Sprite, qi.flyLayer = new Laya.Sprite, qi.boxLayer.addChild(qi.bombLayer), qi.boxLayer.addChild(qi.standLayer), qi.boxLayer.addChild(qi.soliderLayer), qi.boxLayer.addChild(qi.bossLayer), qi.boxLayer.addChild(qi.enemyLayer), qi.boxLayer.addChild(qi.delayLayer), qi.boxLayer.addChild(qi.bulletLayer), qi.boxLayer.addChild(qi.sunLayer), qi.boxLayer.addChild(qi.flyLayer), qi.bombLayer.pos(0, 0), qi.standLayer.pos(0, 0), qi.bossLayer.pos(0, 0), qi.enemyLayer.pos(0, 0), qi.soliderLayer.pos(0, 0), qi.delayLayer.pos(0, 0), qi.bulletLayer.pos(0, 0), qi.sunLayer.pos(0, 0), qi.flyLayer.pos(0, 0), qi.boxLayer.on(Laya.Event.MOUSE_DOWN, qi, qi.onMouseDown), qi.boxLayer.on(Laya.Event.MOUSE_UP, qi, qi.onMouseUp), qi.boxLayer.on(Laya.Event.MOUSE_OUT, qi, qi.onMouseUp), K.On(e.VIDEO_FINISH, qi, qi.reLiveVideoAdDone)
        }
        static GetLayer(t) {
            switch (t) {
                case ut.Zero:
                    return qi.boxLayer;
                case ut.Bomb:
                    return qi.bombLayer;
                case ut.Stand:
                    return qi.standLayer;
                case ut.Boss:
                    return qi.bossLayer;
                case ut.Enemy:
                    return qi.enemyLayer;
                case ut.Solider:
                    return qi.soliderLayer;
                case ut.Delay:
                    return qi.delayLayer;
                case ut.Sun:
                    return qi.sunLayer;
                case ut.Bullet:
                    return qi.bulletLayer;
                case ut.Fly:
                    return qi.flyLayer
            }
        }
        static applyBulletNo() {
            let t = qi.bulletNo;
            if (qi.bulletDict)
                for (; qi.bulletDict[t];) t++;
            return qi.bulletNo = t, t
        }
        static BulletExist(t, e) {
            if (null !== e) return qi.GetLayer(ut.Bullet).getChildByName(`bullet_${t}_${e}`)
        }
        static AddBullet(t, e, i, s, n, a, l, o, r, h, d) {
            if (Yi.devFire) return;
            let u = null,
                c = null;
            if (qi.shootAngle[e])[u, c] = qi.shootAngle[e];
            else {
                let t = Wi.GetCfg(e),
                    i = X.CenterInfo("man", t.skin),
                    s = qt.CenterInfo("man", t.skin.substr(0, t.skin.length - 2));
                u = Qi.angle(i.centX, i.centY, s.centX, s.centY), c = Qi.dist(i.centX, i.centY, s.centX, s.centY), qi.shootAngle[e] = [u, c]
            }
            let p = qi.GetSolider(t);
            if (!p) return;
            let f = p.shootAngle();
            s += Qi.moveToX(f + u, c), n += Qi.moveToY(f + u, c);
            let g = qi.applyBulletNo(),
                m = Laya.Pool.getItemByClass("Bullet", Kt);
            return m.Init(g, t, e, i, s, n, a, l, o, r, h, d) && (qi.bulletDict[g] = m, m.flyType == st.Self ? qi.GetLayer(ut.Bomb).addChild(m) : qi.GetLayer(ut.Bullet).addChild(m)), m
        }
        static DeleAllBullet() {
            for (let t in qi.bulletDict) {
                qi.bulletDict[t].clear()
            }
        }
        static clearOneBullet(t) {
            delete qi.bulletDict[t]
        }
        static ClearBulletAim(t) {
            for (let e in qi.bulletDict) {
                qi.bulletDict[e].clearLock(t)
            }
        }
        static ClearEnemyLock(t) {
            let e = qi.GetSoliderList();
            for (let i in e) {
                let s = e[i];
                s.lock === t && (s.lock = null), qi.LinkDele(s, t)
            }
        }
        static AddExplode(t, e, i, s, n) {
            let a = Laya.Pool.getItemByClass("EffItem", Ei);
            qi.GetLayer(t).addChild(a), a.InitEff("effectBullet", e, i, s, null, 1);
            let l = qt.CenterInfo("effectBullet", e),
                o = 1;
            n && (o = n / l.wid), a.scale(o, o)
        }
        static applyNo() {
            let t = qi.entityNo;
            if (qi.entityDict)
                for (; qi.entityDict[t];) t++;
            return qi.entityNo = t, t
        }
        static addEntity(t, e, i, s, n, a, l, o) {
            let r, h, d = null;
            t == y.hero || t == y.boss ? (r = U.GetCfg(e), t == y.hero && r.move) : t != y.enemy && t != y.solider || (r = Wi.GetCfg(e)), h = r.skin, d = r.job
        }
        static _AddHero(t, e, i, s, n) {
            qi.addEntity(y.hero, t, e, i, s, n, null, null)
        }
        static GetSoliderStar(t) {
            if (null === t) return 0;
            let e = qi.GetSolider(t);
            return e ? e.star : 0
        }
        static UpSoliderStar(t) {
            if (null === t) return void Pi.FlyTxt("Upgrade logic error 1");
            let e = qi.GetSolider(t);
            if (!e) return void Pi.FlyTxt("Upgrade logic error 2");
            if (e.star >= 3) return void Pi.FlyTxt("The max level");
            let i = qi.SoliderGoldNeed(e.cfgId, e.star);
            if (0 == i) return void Pi.FlyTxt("The max level");
            if (!Le.HasMoneyByVal(d.money, i)) return void Pi.FlyTxt("Lack of money");
            Le.CostMoneyByVal(d.money, i), e.upStar();
            let s = mt.PosToBoxNo(e.x, e.y);
            Xi.AppendOperation(ct.Star, s, e.cfgId, e.star)
        }
        static SaleSolider(t) {
            if (null === t) return void Pi.FlyTxt("Sell logic error 1");
            let e = qi.GetSolider(t);
            if (!e) return void Pi.FlyTxt("Sell logic error 2");
            let i = qi.SoliderGoldSale(e.cfgId, e.star);
            if (!i) return void Pi.FlyTxt("Sell logic error 3");
            let s = mt.PosToBoxNo(e.x, e.y);
            Xi.AppendOperation(ct.Sale, s, e.cfgId, e.star);
            let n = Yt.GetRndVal(it.MONEY_SALE_52);
            i = Math.floor(i * (1 + n)), Le.AddMoneyByVal(d.money, i), Pi.FlyMoneyPng(i, e.x, e.y), Pi.FlyDrop([
                [d.money, i]
            ], e.x + mt.topX, e.y + mt.topY + 100, null, null, null, null), qi.DeleSolider(t, 60)
        }
        static SoliderGoldNeed(t, e) {
            return null === e && (e = 0), Wi.GetCfg(t).buyGold[e]
        }
        static SoliderGoldSale(t, e) {
            return Wi.GetCfg(t).saleGold[e - 1]
        }
        static AddSolider(t, e, i, s, n, a) {
            let [l, o] = qi.GetBuildCold(t);
            if (0 !== l) return void Pi.FlyTxt("Construction unit cooling down");
            if (null === a);
            else if (0 === a) {
                let e = qi.SoliderGoldNeed(t, 0);
                if (!Le.HasMoneyByVal(d.money, e)) return void Pi.FlyTxt("The money needed to build it is insufficient");
                ve.BuildNewSolider(t), Le.CostMoneyByVal(d.money, e)
            } else {
                if (!(a > 0)) return void Pi.FlyTxt("Build logic error", !1, "#ff0000");
                if (!qi.helpId) return void Pi.FlyTxt("Aid logic wrong", !1, "#ff0000");
                qi.helpId = null
            }
            let r = qi.applyNo(),
                h = Laya.Pool.getItemByClass("Solider", $i);
            h.Init(t, r, s, n, e, i), qi.entityDict[r] = h, qi.GetLayer(ut.Solider).addChild(h);
            let u = Wi.GetCfg(t);
            return u.cold && qi.AddBuildCold(t, u.quality, u.cold), qi.jobBuild[u.job] || (qi.jobBuild[u.job] = 0), qi.jobBuild[u.job]++, h
        }
        static GetSolider(t) {
            if (!qi.entityDict || !qi.entityDict[t]) return;
            let e = qi.entityDict[t];
            return !e || e.destroyed || e._isClear ? void 0 : e
        }
        static DeleSolider(t, e = 400) {
            if (!qi.entityDict || !qi.entityDict[t]) return;
            qi.entityDict[t].clear(e), qi.entityDict[t] = null, delete qi.entityDict[t]
        }
        static GetSoliderList() {
            let t = [];
            for (let e in qi.entityDict) {
                let i = parseInt(e);
                if (!qi.entityDict || !qi.entityDict[i]) continue;
                let s = qi.entityDict[i];
                s instanceof $i && (!s || s.destroyed || s._isClear || t.push(s))
            }
            return t
        }
        static DeleAllSolider(t = 400) {
            for (let e in qi.entityDict) {
                let i = parseInt(e),
                    s = qi.GetSolider(i);
                s && s instanceof $i && qi.DeleSolider(i, t)
            }
        }
        static QuitFight() {
            qi.bronNum = null, qi.lotNo = 0, qi.oneMonsterList = null, qi.lotMonsterList = [],
				qi.allMonsterList = [], qi.reliveBlood = [],
				Z.Stop(L.backFight), qi.DeleAllBullet(), qi.DeleAllSolider(0), qi.DeleAllEnemy(0, !1), me.ClearAll(), _e.InitFightGuide()
        }
        static AddSun(t, e, i, s) {
            let n = Laya.Pool.getItemByClass("Sun", me),
                a = me.ApplyNo();
            n.Init(a, t, e, i, s), qi.GetLayer(ut.Sun).addChild(n)
        }
        static AddEnemy(t, i, s, n, a, l, o, r, h, d, u, c, p) {
            let f = qi.applyNo(),
                g = Laya.Pool.getItemByClass("Enemy", ji);
            if (g.Init(t, f, i, s, n, a, l, o, r, h, d, u, c, p), qi.entityDict[f] = g, g.quality == M.Stand ? qi.GetLayer(ut.Stand).addChildAt(g, 0) : ([M.Boss, M.Gold, M.Daimond].indexOf(g.quality), qi.GetLayer(ut.Enemy).addChildAt(g, 0)), qi.passType == D.Patch && K.Evt(e.ENEMY_NUM_CHANGE), qi.passType == D.Patch) {
                qi.GetEnemyList(!0).length >= 50 && qi.GameEndFb()
            }
            return qi.passType == D.Pass && 1 == qi.lvChapter && g.quality != M.Stand && K.Evt(e.GUIDE_ENEMY_BRON, [qi.lvPass]), g
        }
        static GetEnemy(t) {
            if (!qi.entityDict || !qi.entityDict[t]) return;
            let e = qi.entityDict[t];
            return !e || e.destroyed || e.blood <= 0 ? void 0 : e
        }
        static DeleEnemy(t, i = 400, s = !0) {
            if (!qi.entityDict || !qi.entityDict[t]) return;
            let n = qi.entityDict[t];
            n.clear(i), qi.entityDict[t] = null, delete qi.entityDict[t], qi.passType == D.Patch && K.Evt(e.ENEMY_NUM_CHANGE), qi.passType == D.Pass && 1 == qi.lvChapter && n.quality != M.Stand && K.Evt(e.GUIDE_ENEMY_DIE, [qi.lvPass]), s && (qi.ChkGameEndBase(), qi.ChkGameEndFb())
        }
        static GetEnemyList(t, e = !1) {
            let i = [];
            for (let s in qi.entityDict) {
                let n = parseInt(s);
                if (!qi.entityDict || !qi.entityDict[n]) continue;
                let a = qi.entityDict[n];
                a instanceof ji && (!a || a.destroyed || a._isClear || a.blood <= 0 || e && a.diving || !0 === t && a.quality == M.Stand || !1 === t && a.quality != M.Stand || i.push(a))
            }
            return i
        }
        static DeleAllEnemy(t = 400, e = !0) {
            for (let i in qi.entityDict) {
                let s = parseInt(i),
                    n = qi.GetSolider(s);
                n && n instanceof ji && qi.DeleEnemy(s, t, e)
            }
        }
        static _GetEntity(t) {
            if (!qi.entityDict || !qi.entityDict[t]) return;
            let e = qi.entityDict[t];
            return !e || e.destroyed || e._isClear ? void 0 : e
        }
        static LinkDele(t, e) {
            if (!t) return;
            if (!t.links) return;
            let i = t.links.indexOf(e);
            if (-1 !== i) {
                t.links.splice(i, 1);
                let s = qi.BulletExist(t.no, e);
                if (s) {
                    s.clear()
                }
            }
        }
        static LinkDo(t, e) {
            let i = t.shootRange;
            if (null === t.links && (t.links = []), qi.lockEnemyNo) {
                let e = qi.GetEnemy(qi.lockEnemyNo);
                if (e) {
                    if (Qi.dist(t.x, t.y, e.x, e.y) <= i) {
                        if (e.quality == M.Stand) return void(t.links = [e.no]); - 1 === t.links.indexOf(e.no) && (t.links.length >= 3 && t.links.pop(), t.links.push(e.no))
                    }
                }
            }
            for (let e in t.links) {
                let s = t.links[e],
                    n = qi.GetEnemy(s);
                if (n) {
                    if (Qi.dist(t.x, t.y, n.x, n.y) > i) {
                        let i = t.links.indexOf(t.links[e]);
                        t.links.splice(i, 1);
                        continue
                    }
                } else {
                    let i = t.links.indexOf(t.links[e]);
                    t.links.splice(i, 1)
                }
            }
            let s = 0;
            if (t.links && (s = t.links.length), s >= e) return;
            let n = qi.GetEnemyList(!0);
            for (let s in n) {
                let a = n[s];
                if (-1 == t.links.indexOf(a.no) && (!(Qi.dist(t.x, t.y, a.x, a.y) > i) && (t.links.push(a.no), t.links.length >= e))) break
            }
        }
        static LockDo(t, e = !1) {
            let i = t.shootRange;
            if (null !== t.lock) {
                let e = qi.GetEnemy(t.lock);
                if (!e || e._isClear) t.lock = null;
                else {
                    Qi.dist(t.x, t.y, e.x, e.y) > i && (t.lock = null)
                }
            }
            let s = null,
                n = null,
                a = qi.GetEnemyList(null, !0);
            for (let l in a) {
                let o = a[l];
                if (o.quality == M.Daimond) continue;
                if (1 != o.alpha) continue;
                if (o.quality == M.Stand) {
                    let e = Math.floor(o.cfgId % 1e3 / 100);
                    if (0 == e || 1 == e) {
                        if (Qi.dist(t.x, t.y, o.x, o.y) > i + 20) continue
                    } else if (3 == e) {
                        let e = Qi.dist(t.x, t.y, o.x - 50, o.y),
                            s = Qi.dist(t.x, t.y, o.x + 50, o.y);
                        if (e > i && s > i) continue
                    } else if (2 == e) {
                        let e = Qi.dist(t.x, t.y, o.x, o.y - 50),
                            s = Qi.dist(t.x, t.y, o.x, o.y + 50);
                        if (e > i && s > i) continue
                    } else if (4 == e) {
                        let e = Qi.dist(t.x, t.y, o.x - 50, o.y - 50),
                            s = Qi.dist(t.x, t.y, o.x + 50, o.y - 50),
                            n = Qi.dist(t.x, t.y, o.x - 50, o.y + 50),
                            a = Qi.dist(t.x, t.y, o.x + 50, o.y + 50);
                        if (e > i && s > i && n > i && a > i) continue
                    } else 0
                } else {
                    if (Qi.dist(t.x, t.y, o.x, o.y) > i) continue
                }
                if (o.no == qi.lockEnemyNo) return void(t.lock = o.no);
                if (e && o.quality != M.Stand) return void(t.lock = o.no);
                let r = o.endDist();
                null !== r && (null === s ? (s = r, n = o.no) : r < s && (s = r, n = o.no))
            }
            if (null === t.lock && null !== n && (t.lock = n), t.flyType == st.Rocket && null === t.lock) {
                let e = qi.GetEnemyList(!0, !0);
                for (let i in e) {
                    let s = e[i];
                    t.lock = s.no;
                    break
                }
            }
        }
        static UpdateChildIdx() {
            let t = [],
                e = [];
            for (let i in qi.entityDict) {
                let s = parseInt(i),
                    n = qi.entityDict[s];
                n && n instanceof $i ? t.push({
                    No: s,
                    y: n.y
                }) : n && n instanceof ji && (-1 != [M.Boss, M.Daimond, M.Gold].indexOf(n.quality) ? e.push({
                    No: s,
                    y: n.y
                }) : n.quality != M.Stand && e.push({
                    No: s,
                    y: n.y
                }))
            }
            let i = 0,
                s = Qi.ArrSort(t, "y", !0);
            for (let t in s) {
                let e = s[t].No,
                    n = qi.entityDict[e];
                n && qi.GetLayer(ut.Solider).setChildIndex(n, i++)
            }
            let n = 0,
                a = Qi.ArrSort(e, "y", !0);
            for (let t in a) {
                let e = a[t].No,
                    i = qi.entityDict[e];
                i && qi.GetLayer(ut.Enemy).setChildIndex(i, n++)
            }
        }
        static coldUpdate(t) {
            if (Yi.St == s.Fight && qi.buildCold)
                for (let e in qi.buildCold) qi.buildCold[e] && qi.buildCold[e][0] && qi.buildCold[e][0] > 0 && (qi.buildCold[e][0] -= t)
        }
        static showWxInsert() {
            Yi.Avatar.passLv <= 6 || Vi.ShowInsert(100)
        }
        static Update(t) {
            if (Yi.St == s.Fight) {
                if (qi.passType == D.Pass && qi.playType == P.Loop && (qi.playTime -= t * qi.tdSpeed, qi.playTime <= 0)) return Yi.St = s.Free, void setTimeout(function () {
                    Li.Close(S.Build), Li.Close(S.Pause), Li.Close(S.Guide), Yi.devHitEcho(), qi.showWxInsert(), Li.Open(S.GameEndFail), Z.Play(L.lose)
                }, 1200);
                qi.starTime += t * qi.tdSpeed, qi.EnemyBron(t), null !== qi.dragT && (qi.dragT += t), qi.idxT -= t, qi.idxT < 0 && (qi.UpdateChildIdx(), qi.idxT = 200)
            }
        }
        static IsDestoryStandBronBuild() {
            if (qi.blood <= 0) return !1;
            if (qi.passType == D.Pass) {
                if (qi.playType != P.Bron) return !1
            } else if (qi.passType != D.Talent) return !1;
            let t = qi.GetEnemyList(null);
            for (let e in t) {
                let i = t[e];
                if (i.quality == M.Stand && 10 == Math.floor(i.cfgId / 100)) return !1
            }
            return !0
        }
        static ChkGameEndFb() {
            if (Yi.St === s.Fight && qi.passType != D.Pass)
                if (qi.blood <= 0) qi.GameEndFb();
                else {
                    if (qi.passType == D.Talent) {
                        if (!qi.IsDestoryStandBronBuild()) return !1
                    } else {
                        let t = qi.GetEnemyList(!0);
                        if (t && t.length > 0) return;
                        if (qi.HasNeedBron()) return
                    }
                    qi.GameEndFb()
                }
        }
        static GameEndFb() {
            if (Yi.St = s.Free, qi.passType == D.Talent && qi.blood > 0) {
                let t = Yi.Avatar,
                    e = t.lastDay + Ft.hour,
                    [i, s, n, a] = t.fbLast;
                t.fbLast = [i, s, n, e], Xi.SaveApi(!0)
            }
            Li.Close(S.Build), Li.Close(S.Pause), Li.Close(S.Guide), Li.Close(S.Exit), setTimeout(function () {
                Li.Open(S.GameEndFb), Z.Play(L.win)
            }, 500)
        }
        static ChkGameEndBase() {
            if (Yi.St === s.Fight && qi.passType == D.Pass)
                if (qi.blood <= 0) Xi.AppendOperation(ct.Fail), Yi.St = s.Free, setTimeout(function () {
                    Li.Close(S.Build), Li.Close(S.Pause), Li.Close(S.Guide), Yi.devHitEcho(), qi.showWxInsert(), Li.Open(S.GameEndFail), Z.Play(L.lose)
                }, 1200);
                else {
                    if (qi.playType == P.Bron) {
                        if (!qi.IsDestoryStandBronBuild()) return !1
                    } else {
                        let t = qi.GetEnemyList(!0);
                        if (t && t.length > 0) return;
                        if (qi.HasNeedBron()) return
                    }
                    if (Yi.St = s.Free, qi.IsFirstPass(qi.passType, qi.lvChapter, qi.lvPass)) {
                        let t = Yi.Avatar,
                            e = t.passLv + 1;
                        q.GetCfg(e) && t.passLv++
                    }
                    let [t, e] = qi.MarkBaseStar();
                    xt.CostBack(e), Xi.SaveApi(!0), setTimeout(function () {
                        Li.Close(S.Build), Li.Close(S.Pause), Li.Close(S.Guide), Li.Close(S.Exit), qi.showWxInsert(), Li.Open(S.GameEndWin, [t, e]), Z.Play(L.win)
                    }, 1200)
                }
        }
        static DevWin(t = [1, 2, 3]) {
            if (Yi.St != s.Fight) return;
            Yi.St = s.Free;
            let e = q.GetPassCfg(qi.passType, qi.lvChapter, qi.lvPass),
                i = Yi.Avatar;
            e && e.id > i.passLv && (i.passLv = e.id);
            let n = t[Math.floor(Math.random() * t.length)];
            1 == e.lvChapter && (n = 3);
            let a = qi.GetStar(qi.passType, qi.lvChapter, qi.lvPass);
            a && a < 3 && (n = 3);
            let [l, o] = qi.MarkBaseStar(n);
            xt.CostBack(o), setTimeout(function () {
                Li.Close(S.Build), Li.Close(S.Pause), Li.Close(S.Guide), Li.Close(S.Exit), qi.showWxInsert(), Li.Open(S.GameEndWin, [l, o]), Z.Play(L.win)
            }, 1200)
        }
        static CurrentChapter(t) {
            let e = null,
                i = q.GetChapterList(t);
            for (let s in i) {
                let n = i[s];
                e = n;
                let a = q.GetPassList(t, n),
                    l = 0;
                for (let e in a) {
                    let i = a[e],
                        s = qi.GetStar(t, n, i.lvPass);
                    if (l += s, null === s || 0 === s) return i.lvChapter
                }
                if (l < Tt.GetCfg(n).passStar) return n
            }
            return e
        }
        static CurrentPass(t) {
            let e = null,
                i = qi.CurrentChapter(t),
                s = q.GetPassList(t, i);
            for (let n in s) {
                let a = s[n];
                e = a.lvPass;
                let l = qi.GetStar(t, i, a.lvPass);
                if (null === l || 0 === l) return a.lvPass
            }
            return e
        }
        static ChapterStar(t, e) {
            let i = 0,
                s = q.GetPassList(t, e);
            for (let n in s) {
                let a = s[n],
                    l = qi.GetStar(t, e, a.lvPass);
                null !== l && (i += l)
            }
            return i
        }
        static GetStar(t, e, i) {
            let s = Yi.Avatar;
            if (!s.passStar) return null;
            if (!s.passStar[t]) return null;
            if (!s.passStar[t][e]) return null;
            let n = s.passStar[t][e][i];
            return -1 === [0, 1, 2, 3].indexOf(n) && (n = null), n
        }
        static IsFirstPass(t, e, i) {
            return null === qi.GetStar(t, e, i)
        }
        static MarkBaseStar(t = null) {
            let e = 3,
                i = qi.GetStarInfo(qi.passType, qi.lvChapter, qi.lvPass, !0);
            for (let t in i) i[t].succ || e--;
            e < 1 && (e = 1), Xi.AppendOperation(ct.Win, e), null !== t && (e = t);
            let s = Yi.Avatar;
            return s.passStar || (s.passStar = {}), s.passStar[D.Pass] || (s.passStar[D.Pass] = {}), s.passStar[D.Pass][qi.lvChapter] || (s.passStar[D.Pass][qi.lvChapter] = {}), s.passStar[D.Pass][qi.lvChapter][qi.lvPass] && e <= s.passStar[D.Pass][qi.lvChapter][qi.lvPass] ? [!1, e] : (s.passStar[D.Pass][qi.lvChapter][qi.lvPass] = e, [!0, e])
        }
        static ReliveNeed() {
            return qi.GetEnemyList(!0).length <= 0 && !qi.HasNeedBron() ? null : 0 == qi.relive ? 0 : (qi.relive, null)
        }
        static ReliveCall() {
            let e = qi.ReliveNeed();
            if (0 == qi.relive && 0 === e) Vi.VideoAdPlay("Revive", t.ReLive, null);
            else if (1 == qi.relive && e > 0) {
                if (!Le.HasMoneyByVal(d.diamond, e)) return void Pi.FlyTxt("Not enough diamonds for resurrection");
                Le.CostMoneyByVal(d.diamond, e), qi.ReliveDo()
            } else Pi.FlyTxt("illegal request")
        }
        static reLiveVideoAdDone(e) {
            e == t.ReLive && qi.ReliveDo()
        }
        static ReliveDo() {
            qi.reliveBlood = [];
            let t = [],
                e = qi.GetEnemyList(!0);
            for (let i in e) {
                let s = e[i];
                t.push([s.endDist(), s.cfgId, s.blood, s.fullBlood, s.atkDef, s.waitMin, s.waitMax, s.step, s.line, s.info]), qi.DeleEnemy(s.no, 120, !1)
            }
            for (t.sort(function (t, e) {
                    return t[0] > e[0] ? 1 : -1
                }), null === qi.lotMonsterList && (qi.lotMonsterList = []); t.length > 0;) {
                let [e, i, s, n, a, l, o, r, h, d] = t.pop();
                qi.reliveBlood.unshift(s), qi.lotMonsterList.unshift(new j(i, 1, n, l, o, r, h, d))
            }
            if (0 === qi.bronNum && (qi.bronNum = null), qi._bronSpace = -2e3, qi.blood = [3, 1][qi.relive], ++qi.relive >= 2) {
                Yi.Avatar.relive++
            }
            Li.Close(S.GameEndFail), Xi.AppendOperation(ct.Relive), Xi.SaveApi(!0), Yi.St = s.Fight
        }
        static AddSaveGold(t) {
            qi.goldSave += t
        }
        static AddSaveDiamond(t) {
            qi.diamondSave += t
        }
        static savePatch(t, e) {
            qi.patchSave.push([t, e])
        }
        static getSavePatchInfo() {
            return qi.patchSave
        }
        static InitFight(t, i, n) {
            Xi.ApplyTd(i, n), qi.isAgain = !1;
            let a = Yi.Avatar;
            qi.passType = t, qi.lvChapter = i, qi.lvPass = n, qi.goldSave = 0, 
				qi.diamondSave = 0, qi.bulletNo = 1, qi.starTime = 0, qi.helpId = null,
				Jt.delayMoneySum = {}, me.hits = 0, me.InitFight(), Jt.InitDelay(),
				Qt.InitFight(), qi.DeleAllSolider(0), qi.DeleAllEnemy(0, !1),
				_e.InitFightGuide(), Z.FightBgMusic(), Z.ClearTry();
            let l = 0,
                r = 0,
                h = a.lastDay + Ft.hour,
                [u, c, p, f] = a.fbLast;
            switch (t) {
                case D.Pass:
                    l = Yt.GetAddVal(it.BLOOD_ADD_71), r = Yt.GetAddVal(it.MONEY_INIT_51);
                    break;
                case D.Gold:
                    l = 0, a.fbLast = [h, c, p, f];
                    break;
                case D.Daimond:
                    l = 0, a.fbLast = [u, h, p, f];
                    break;
                case D.Patch:
                    l = 0, a.fbLast = [u, c, h, f]
            }
            Jt.dropGold = 0, qi.relive = 0, qi.tdSpeed = 1, qi.patchSave = [], qi.buildCold = {}, qi.entityNo = 1, qi.lockEnemyNo = null, qi.loopPath = null, qi.stepDoor = !1;
            let g = q.GetPassCfg(t, i, n);
            qi.jobBuild = {}, qi.jobKill = 0, qi.jobLimit = [g.starJob, g.starNum], qi.lvSpeed = g.speed, qi.playType = g.playType, qi.playTime = null !== g.playTime ? 1e3 * g.playTime : null,
			qi.playType == P.Loop && (qi.playTime || Pi.FlyTxt(`Circular map level ${g.id} has no clearance limit set`));
            let m = g.blood;
            qi.blood = m + l, qi.bloodMax = m + l, Le.SetMoneyVal(g.initGold + r), qi.InitMonster(t, i, n);
            let [y] = mt.InitMap(E.Td, t, i, n);
            if (qi.wayPos = y, qi.passType == D.Pass && 1 == qi.lvChapter)
                if (2 == qi.lvPass) {
                    let t = 50,
                        e = Wi.GetCfg(t),
                        i = ve.GetSoliderLv(t);
                    i = i || 1;
                    let s = mt.GetBoxPos(59),
                        n = qi.AddSolider(t, i, e.quality, s.x, s.y, null);
                    n && n.upStar(3)
                } else if (3 == qi.lvPass) {
                let t = 39,
                    e = Wi.GetCfg(t),
                    i = ve.GetSoliderLv(t);
                i = i || 1;
                let s = mt.GetBoxPos(41),
                    n = qi.AddSolider(t, i, e.quality, s.x, s.y, null);
                n && n.upStar(3)
            } else qi.lvPass;
            a.fights++, Yi.St = s.Fight, K.Evt(e.ST_CHANGE), Xi.SaveApi(!0), xe.BufferSec(o.Init) && setTimeout(function () {
                Le.AddMoneyByVal(d.money, 300), Pi.FlyDrop([
                    [d.money, 300]
                ], null, null, null, null, null, 8)
            }, 400)
        }
        static CountDownFinish() {
            if (Li.Close(S.CountDown), Z.Play(L.backFight), qi.passType != D.Pass) return;
            let t = q.GetPassCfg(qi.passType, qi.lvChapter, qi.lvPass);
            t && t.help && t.helper && (ve.SoliderInTeam(qi.tdTeamNo, t.helper) || Li.Open(S.Help, null))
        }
        static helpNeedDaimond(t) {
            return {
                1: 12,
                2: 16,
                3: 28,
                4: 46,
                5: 68
            } [t]
        }
        static helpNeedGold(t) {
            let e = {
                    1: .25,
                    2: .46,
                    3: .8,
                    4: 3.8,
                    5: 5.6
                },
                i = e[t] ? e[t] : 1,
                s = mt.GetCurrMapCfg();
            if (!s) return 0;
            let n = ye.GetPassDrop(s.id);
            return Math.floor(n[d.gold] * i)
        }
        static helpCallDo(t, e) {
            qi.helpId = e, Xi.SaveApi(!0)
        }
        static GetJobBuildInfo() {
            if (!qi.jobLimit) return null;
            let [t, e] = qi.jobLimit;
            return e >= 20 ? [t, qi.jobKill, e] : [t, qi.jobBuild[t] ? qi.jobBuild[t] : 0, e]
        }
        static GetStarInfo(t, e, i, s) {
            let n = q.GetPassCfg(t, e, i);
            if (!n) return null;
            let a = {};
            if (n.starType == N.Pass ? a[1] = {
                    title: "",
                    desc: "Protects the crystal from being destroyed by monsters",
                    end: `Crystal：${qi.blood}/${qi.bloodMax}`,
                    succ: s ? qi.blood > 0 : null
                } : a[1] = {
                    title: "",
                    desc: "Protect the crystal from harm",
                    end: `Crystal：${qi.blood}/${qi.bloodMax}`,
                    succ: s ? qi.blood >= qi.bloodMax : qi.blood >= qi.bloodMax && null
                }, n.starType == N.Stand) {
                let t = qi.GetEnemyList(!1),
                    e = W.MapStoneNum(E.Td, n.mapNo),
                    i = e - t.length >= e;
                s || !0 !== i && (i = null), a[2] = {
                    title: "",
                    desc: "Clear all items from the arena",
                    end: `Items：${e-t.length}/${e}`,
                    succ: i
                }
            } else if (n.starType == N.Time) {
                let t = Math.floor(qi.playTime / 1e3) - (n.playTime - n.starTime),
                    e = t > 0;
                s || !1 !== e && (e = null), a[2] = {
                    title: "",
                    desc: `The clearance time is ${n.starTime} second`,
                    end: `The remaining ：${t} seconds`,
                    succ: e
                }
            }
            if (n.starJob) {
                let t = Qi.DictLen(a) + 1;
                if (n.starNum >= 20) {
                    let e = qi.jobKill >= n.starNum;
                    s || !1 === e && (e = null), a[t] = {
                        title: `Use ${It.JobTxt[n.starJob]}`,
                        desc: `Kill ${n.starNum} monster`,
                        end: `Monster：${qi.jobKill}/${n.starNum}`,
                        succ: e
                    }
                } else if (n.starNum >= 1) {
                    let e = 0,
                        i = qi.GetSoliderList();
                    for (let t in i) {
                        let s = i[t];
                        n.starJob == s.job && 3 == s.star && e++
                    }
                    let l = e >= n.starNum;
                    s || l || (l = null), a[t] = {
                        title: "Build",
                        desc: `${n.starNum} max level ${It.JobTxt[n.starJob]}`,
                        end: `${It.JobTxt[n.starJob]}：${e}/${n.starNum}`,
                        succ: l
                    }
                } else if (n.starNum <= 0) {
                    let e = 0,
                        i = 0,
                        l = 0,
                        o = qi.GetJobBuildInfo();
                    o && ([i, e, l] = o);
                    let r = Math.abs(n.starNum),
                        h = e <= r;
                    s || h && (h = null), a[t] = {
                        title: "",
                        desc: `Build no more than ${r} ${It.JobTxt[n.starJob]}`,
                        end: `${It.JobTxt[n.starJob]}：${e}/${r}`,
                        succ: h
                    }
                }
            }
            return a
        }
        static ApplyJobKill(t) {
            if (!qi.jobLimit) return;
            let [e, i] = qi.jobLimit;
            e == t && (i < 20 || qi.jobKill++)
        }
        static AddBuildCold(t, e, i) {
            let s = 0;
            qi.buildCold[t] && (s = qi.buildCold[t][2], s++);
            let n = i += {
                1: 300,
                2: 450,
                3: 780,
                4: 960,
                5: 1080
            } [e] * s;
            qi.buildCold[t] = [i, n, s]
        }
        static GetBuildCold(t) {
            return qi.buildCold[t] && qi.buildCold[t][0] && qi.buildCold[t][0] > 0 ? qi.buildCold[t] : [0, 0]
        }
        static TdHurt(t, i) {
            if (Yi.St === s.Fight && (mt.BloodOnHurt(), qi.blood == qi.bloodMax && qi.IsFirstPass(qi.passType, qi.lvChapter, qi.lvPass) && Z.Play(L.hurt), qi.blood > 0 && (t == M.Boss ? qi.blood -= 3 : qi.blood--), Xi.AppendOperation(ct.Hurt), K.Evt(e.TD_HURT), Qi.IsDev())) {
                let t = 0,
                    e = i,
                    s = qi.GetEnemyList(!0, !1);
                for (let i in s) {
                    e += s[i].blood, t++
                }
                Qi.Log(`水晶受击----血量：${qi.blood}；波次：${qi.lotNo}；触发怪血：${i}；存活怪物:${t}；存活总血量：${e}`)
            }
        }
        static getLotStr() {
            return null === qi.lotNo ? "" : qi.lotNo + "/" + qi.lotMax
        }
        static InitMonster(t, e, i) {
            qi.bronNum = null, qi.lotNo = 0, qi._lotSpace = 0;
            let s = q.GetPassCfg(t, e, i),
                n = W.MapInfo(E.Td, s.mapNo);
            s.id <= 2 ? qi._bronSpace = -500 : s.id <= 5 ? qi._bronSpace = -1500 : qi._bronSpace = -2600, Qi.IsDev(), qi.beginSec = 3, Qi.IsDev() && (qi.beginSec = 0), Li.Open(S.CountDown, null, !0), setTimeout(function () {
                Pi.FlySec()
            }, 310), qi.bronSpace = null, qi.lotWaitType = n.waitType, qi.lotWaitTime = n.waitTime, qi.lineSet = n.lineSet, n.lineSet, Qi.IsDev(), qi.isBoss = !!s.bossId, qi.monsterPath = n.path, qi.loopPath = Qi.ArrListClone(n.path[0]), qi.lotMonsterList = [], qi.allMonsterList = [];
            for (let t = 1; t <= 20; t++) s[`monsterList${t}`] && s[`monsterList${t}`].length > 0 && qi.allMonsterList.push(Qi.ArrListClone(s[`monsterList${t}`]));
            qi.lotMax = qi.allMonsterList.length
        }
        static HasNeedBron() {
            return !!(qi.bronNum && qi.bronNum > 0) || (!!(qi.lotMonsterList && qi.lotMonsterList.length > 0) || !!(qi.allMonsterList && qi.allMonsterList.length > 0))
        }
        static LotBronSec() {
            if (null === qi._lotSpace) return null;
            if (qi._lotSpace == qi.lotSpace__[qi.lotNo]) return null;
            let t = qi._lotSpace,
                e = Math.floor(t / 100) / 10 + "";
            return 1 == e.length && (e += ".0"), e
        }
        static QuickBron() {
            qi._lotSpace = 0
        }
        static GetLoopPath() {
            return Qi.ArrListClone(qi.loopPath)
        }
        static EnemyBron(t) {
            if (Yi.devMove) return;
            if (Yi.St !== s.Fight) return;
            let i = qi.GetEnemyList(!0);
            if (t = t * qi.tdSpeed * qi.baseSpeed * qi.lvSpeed, null !== qi.bronNum);
            else if (qi.lotMonsterList && qi.lotMonsterList.length > 0);
            else {
                if (!qi.allMonsterList || qi.allMonsterList.length <= 0) return;
                if (i && i.length > 0 && F.Out != qi.lotWaitType) return void[F.Base, F.Clear].indexOf(qi.lotWaitType)
            }
            if (null === qi.bronNum && (!qi.lotMonsterList || qi.lotMonsterList.length <= 0) && qi.allMonsterList && qi.allMonsterList.length > 0) {
                if (!qi.bossComing && qi.isBoss && (qi.playType == P.Boss || qi.playType == P.Base && 1 == qi.allMonsterList.length) && (qi.bossComing = !0, Pi.ShowBossing(), Z.Play(L.boss)), qi._lotSpace += t, qi._lotSpace < qi.lotWaitTime) return;
                qi._lotSpace = 0, qi.lotNo++, qi.lotMonsterList = qi.allMonsterList.shift(), K.Evt(e.LOT_CHANGE)
            } else {
                if (!qi.oneMonsterList) {
                    let t = qi.lotMonsterList.shift();
                    qi.oneMonsterList = Qi.DictObjClone(t), qi.bronNum = qi.oneMonsterList.num, qi.bronSpace = Qi.RandomInt(qi.oneMonsterList.waitMin, qi.oneMonsterList.waitMax)
                }
                if (qi._bronSpace += t, qi._bronSpace < qi.bronSpace) {
                    if (!qi.stepDoor && qi.oneMonsterList && qi.bronSpace - qi._bronSpace <= 520 && null !== qi.bronNum && qi.bronNum >= 1) {
                        let t = qi.oneMonsterList,
                            e = t.monsterId,
                            i = H.GetCfg(e);
                        if (!i.step) return;
                        let s, n = qi.monsterPath;
                        for (let e in n) {
                            if (s = parseInt(e), null !== t.line) {
                                if (s != t.line) continue
                            } else if (1 == n.length) s = 0;
                            else if (!qi.lineSet[qi.lotNo - 1][s]) continue;
                            let a = n[s][0],
                                l = mt.GetBoxPos(a),
                                o = l.x,
                                r = l.y,
                                h = Qi.ArrListClone(n[s]),
                                [d, u] = qi.getGhostPath(h, o, r, i.step);
                            Pi.AddEffect(qi.GetLayer(ut.Delay), "effectDelay", "step", null, null, d, u), qi.stepDoor = !0
                        }
                    }
                    return
                }
                if (qi._bronSpace = 0, qi.stepDoor = !1, qi.oneMonsterList) {
                    let t = qi.oneMonsterList;
                    if (null !== qi.bronNum && --qi.bronNum >= 0) {
                        qi.bronSpace = Qi.RandomInt(qi.oneMonsterList.waitMin, qi.oneMonsterList.waitMax);
                        let e, i = t.monsterId,
                            s = t.blood,
                            n = t.atkDef,
                            a = t.info,
                            l = qi.monsterPath,
                            o = H.GetCfg(i);
                        for (let r in l) {
                            if (e = parseInt(r), null !== t.line) {
                                if (e != t.line) continue
                            } else if (1 == l.length) e = 0;
                            else if (!qi.lineSet[qi.lotNo - 1][e]) continue;
                            let h = l[e][0],
                                d = mt.GetBoxPos(h),
                                u = d.x,
                                c = d.y,
                                p = Qi.ArrListClone(l[e]);
                            o.step > 0 && ([u, c] = qi.getGhostPath(p, u, c, o.step)), p.shift(), setTimeout(function () {
                                let t = qi.AddEnemy(i, s, n, u, c, p, e, o.waitMin, o.waitMax, o.step, a, qi.lotNo, o.drop),
                                    l = qi.reliveBlood.shift();
                                l && t.SetBlood(l)
                            }, e * Qi.RandomInt(320, 480))
                        }
                        qi.bronNum <= 0 && (qi.bronNum = null, qi.oneMonsterList = null)
                    }
                }
            }
        }
        static getGhostPath(t, e, i, s) {
            let n = null,
                a = null;
            for (; s > 0 && !(t.length <= 0);) {
                if (null === n) {
                    let e = t.shift();
                    n = mt.GetBoxPos(e)
                } else if (null === a) {
                    let e = t.shift();
                    a = mt.GetBoxPos(e)
                }
                if (n && a) {
                    let t = Qi.angle(n.x, n.y, a.x, a.y);
                    270 == t ? n.y -= 100 : 0 == t ? n.x += 100 : 90 == t ? n.y += 100 : 180 == t && (n.x -= 100), s--, 0 == Qi.dist(n.x, n.y, a.x, a.y) && (a = null)
                }
            }
            return a && t.unshift(mt.PosToBoxNo(a.x, a.y)), n && (t.unshift(mt.PosToBoxNo(n.x, n.y)), e = n.x, i = n.y), [e, i]
        }
        static tryTapStandBoxNo(t, e) {
            let i = null;
            for (let i in qi.wayPos)
                if (t >= qi.wayPos[i].x - 49 && t <= qi.wayPos[i].x + 49 && e >= qi.wayPos[i].y - 49 && e <= qi.wayPos[i].y + 49) return null;
            return i = 7 * Math.floor(e / 100) + Math.floor(t / 100)
        }
        static tryTapScreen(t, e, i = null) {
            let s, n = null,
                a = null,
                l = null;
            s = mt.TryTapStone(t, e);
            let o = qi.GetSoliderList();
            for (let s in o) {
                let a = o[parseInt(s)];
                null !== i && a.no == i || t >= a.x - 50 && t <= a.x + 50 && e >= a.y - 50 && e <= a.y + 50 && (n = a.no)
            }
            let r = null,
                h = qi.GetEnemyList(null);
            for (let i in h) {
                let s = h[parseInt(i)];
                if (s.quality != M.Stand) {
                    let i = Qi.dist(t, e, s.x, s.y);
                    i <= 60 && (null === r || i < r) && (a = s.no, r = i)
                }
            }
            for (let i in h) {
                let s = h[parseInt(i)];
                if (s.quality == M.Stand) {
                    if (1001 != s.cfgId && null !== a) continue;
                    let i, n, l, o;
                    switch (Math.floor(s.cfgId % 1e3 / 100)) {
                        case 0:
                        case 1:
                            i = 100 * Math.floor(s.x / 100), n = 100 * Math.floor(s.y / 100), l = i + 100, o = n + 100;
                            break;
                        case 3:
                            i = s.x - 100, n = s.y - 50, l = s.x + 100, o = s.y + 50;
                            break;
                        case 2:
                            i = s.x - 50, n = s.y - 100, l = s.x + 50, o = s.y + 100;
                            break;
                        case 4:
                            i = s.x - 100, n = s.y - 100, l = s.x + 100, o = s.y + 100;
                            break;
                        case 10:
                            let r = s.bodyWid;
                            Math.abs(s.x - t) < r && Math.abs(s.y - e) < 2 * r && (a = s.no)
                    }
                    t >= i && e >= n && t <= l && e <= o && (a = s.no)
                }
            }
            let d = qi.tryTapStandBoxNo(t, e),
                u = qi.GetSolider(n);
            return u ? l = new Laya.Point(t - u.x, e - u.y) : n = null, qi.GetEnemy(a) || (a = null), [s, n, a, d, l]
        }
        static onMouseDown(t) {
            if (Yi.St != s.Fight) return;
            if (_e.InFightGuide(1)) return Z.Play(L.no), void Pi.FlyTxt("The combat guide is now complete");
            let e, i, n = t.stageX - mt.topX,
                a = t.stageY - mt.topY;
            if (!me.TryTap(n, a))
                if (qi.tapPos = new Laya.Point(n, a), qi.tapShift = null, qi.dragT = 0, [e, qi.tapSoliderNo, i, qi.standBoxNo, qi.tapShift] = qi.tryTapScreen(n, a, null), Qi.Log("TdMgr.tapEnemyNo", e, qi.tapSoliderNo, qi.lockEnemyNo, qi.standBoxNo, qi.tapShift), qi.tapSoliderNo, i ? (Z.Play(L.no), qi.lockEnemyNo && qi.lockClear(qi.lockEnemyNo), qi.lockEnemyNo == i && (i = null, qi.lockEnemyNo = null)) : qi.tapSoliderNo ? e || (Z.Play(L.no), Li.Open(S.Build, [qi.standBoxNo])) : null !== qi.standBoxNo ? e || (Z.Play(L.no), Li.Open(S.Build, [qi.standBoxNo])) : null === qi.standBoxNo && (qi.lockEnemyNo && qi.lockClear(qi.lockEnemyNo), qi.lockEnemyNo = null, Yi.devMove && qi.AddEnemy(1, 1e3, 0, n, a, [100], null, 0, 0, 0, null, null, 0)), null !== i) {
                    if (Yi.devMove) return void qi.DeleEnemy(i);
                    qi.LockTheAim(i)
                } else if (e) {
                Z.Play(L.no);
                let t = mt.PosToBoxNo(n, a),
                    e = mt.GetBoxPos(t);
                Pi.CanTap(mt.topX + e.x, mt.topY + e.y)
            }
        }
        static LockTheAim(t) {
            qi.lockEnemyNo = t
        }
        static onMouseMove(t) {}
        static onMouseUp(t) {}
        static lockClear(t) {
            let e = qi.GetSoliderList();
            for (let i in e) {
                e[parseInt(i)].clearLock(t)
            }
        }
        static IsFbReady(t) {
            let e = [S.FbGold, S.FbDaimond, S.FbPatch, S.FbTalent].indexOf(t);
            return null === Yi.Avatar.fbLast[e]
        }
        static FbHour() {
            let t = Yi.Avatar,
                [e, i, s, n] = t.fbLast,
                a = t.lastDay,
                l = parseInt(Ft.hour);
            if (e) {
                let t = e.substr(0, e.length - 2),
                    i = parseInt(e.substr(e.length - 2, 2)),
                    s = vt.GetCfg(S.FbGold);
                if (a > t && l >= s.openHour[0]) e = null;
                else if (t == a)
                    for (let t in s.openHour)
                        if (l >= s.openHour[t] && s.openHour[t] > i) {
                            e = null;
                            break
                        }
            }
            if (i) {
                let t = i.substr(0, i.length - 2),
                    e = parseInt(i.substr(i.length - 2, 2)),
                    s = vt.GetCfg(S.FbDaimond);
                if (a > t && l >= s.openHour[0]) i = null;
                else if (t == a)
                    for (let t in s.openHour)
                        if (l >= s.openHour[t] && s.openHour[t] > e) {
                            i = null;
                            break
                        }
            }
            if (s) {
                let t = s.substr(0, s.length - 2),
                    e = parseInt(s.substr(s.length - 2, 2)),
                    i = vt.GetCfg(S.FbPatch);
                if (a > t && l >= i.openHour[0]) s = null;
                else if (t == a)
                    for (let t in i.openHour)
                        if (l >= i.openHour[t] && i.openHour[t] > e) {
                            s = null;
                            break
                        }
            }
            if (n) {
                let t = n.substr(0, n.length - 2),
                    e = parseInt(n.substr(n.length - 2, 2)),
                    i = vt.GetCfg(S.FbTalent);
                if (a > t && l >= i.openHour[0]) n = null;
                else if (t == a)
                    for (let t in i.openHour)
                        if (l >= i.openHour[t] && i.openHour[t] > e) {
                            n = null;
                            break
                        }
            }
            t.fbLast = [e, i, s, n]
        }
        static lockLineEnemy(t, e, i, s) {
            return []
        }
        static lockSignEntity(t) {
            let e = [];
            return null !== t && e.push(t), e
        }
        static lockMinBlood(t) {}
        static lockCampEntitys(t) {}
        static lockRoundEntitys(t, e, i, s) {}
        static lockBoxEntitys(t, e, i, s, n) {}
    }
    qi.entityDict = {}, qi.bulletDict = {}, qi.buildCold = {}, qi.jobBuild = {}, qi.jobLimit = null, qi.jobKill = 0, qi.entityNo = 1, qi.bulletNo = 1, qi.tdSpeed = 1, qi.lvSpeed = 1, qi.goldSave = null, qi.diamondSave = null, qi.patchSave = [], qi.shootAngle = {}, qi.idxT = 0, qi.reliveBlood = [], qi.passType = null, qi.starTime = 0, qi.playType = null, qi.playTime = null, qi.isAgain = !1, qi.helpId = null, qi.lotNo = null, qi.lotSpace__ = [3e3, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500], qi.bronSpace = null, qi._lotSpace = null, qi._bronSpace = 0, qi.bronNum = null, qi.oneMonsterList = null, qi.lotMonsterList = [], qi.bossComing = !1, qi.loopPath = null, qi.stepDoor = !1, qi.lvChapter = null, qi.standBoxNo = null, qi.tapSoliderNo = null, qi.lockEnemyNo = null, qi.dragT = null, qi.tapPos = null, qi.tapShift = null, qi.heroStand = null;
    class Wi extends R {
        constructor(t) {
            super(t), this.atk1 = 0, this.atk5 = 0, this.atk10 = 0, this.cut1 = 0, this.cut5 = 0, this.cut10 = 0, this.super1 = 0, this.super5 = 0, this.super10 = 0, this.atkSpeed1 = 0, this.atkSpeed5 = 0, this.atkSpeed10 = 0, this.shoot1 = 0, this.shoot5 = 0, this.shoot10 = 0, this.range1 = 0, this.range5 = 0, this.range10 = 0, this.job = t.job, this.quality = t.quality, this.maxLv = t.level, this.patchMore = t.patchMore, this.goldMore = t.goldMore, this.name = t.name, this.atkSound = t.atkSound, this.hitSound = t.hitSound, this.vol = t.vol, this.cold = t.cold, this.iconStr = t.iconStr, this.desc = t.desc, this.remark = t.remark, this.buyGold = t.buyGold, this.saleGold = t.saleGold, this.skin = t.skin, this.bulletSkin = t.bulletSkin, this.bombSkin = t.bombSkin, this.turnSpeed = t.turnSpeed, this.shootRange = t.shootRange, this.hurtRange = t.hurtRange, this.bulletInterval = t.bulletInterval, this.bulletSpeed = t.bulletSpeed, this.flyType = t.flyType, this.hurtType = t.hurtType, this.bulletNum = t.bulletNum, this.bulletAngle = t.bulletAngle, this.jumpNum = t.jumpNum;
            let e = null;
            for (let i in t.hurtDelay) {
                null === e && (e = []);
                let s = parseInt(i),
                    n = t.hurtDelay[s];
                s > 0 && (n = parseInt(n)), e.push(n)
            }
            this.hurtDelay = e, this.atk = t.atk, this.cut = t.cut, this.super = t.super, t.add1 && 6 == t.add1.length && ([this.atk1, this.atkSpeed1, this.shoot1, this.cut1, this.super1, this.range1] = t.add1), t.add5 && 6 == t.add5.length && ([this.atk5, this.atkSpeed5, this.shoot5, this.cut5, this.super5, this.range5] = t.add5), t.add10 && 6 == t.add10.length && ([this.atk10, this.atkSpeed10, this.shoot10, this.cut10, this.super10, this.range10] = t.add10)
        }
        static Init() {
            if (!Wi._saves) {
                Wi._saves = {};
                let t = zi.GetJson(Wi.jsName);
                for (let e in t) {
                    let t = R.GetJson(Wi, parseInt(e));
                    t.bulletSkin && (Wi._saves[t.id] = t)
                }
            }
        }
        static GetCfg(t) {
            return Wi.Init(), Wi._saves[t]
        }
        static GetDict() {
            return Wi.Init(), Wi._saves
        }
        static shootVal(t, e, i) {
            e && (e -= 1), Yi.St == s.Fight && qi.passType != D.Pass && (e = 0);
            let n = Wi.GetCfg(t),
                a = n.shootRange[i - 1];
            return a += n.shoot1 * e, a += n.shoot5 * Math.floor((e + 1) / 5), a += n.shoot10 * Math.floor((e + 1) / 10), a = Math.floor(a)
        }
        static rangeVal(t, e, i) {
            e && (e -= 1), Yi.St == s.Fight && qi.passType != D.Pass && (e = 0);
            let n = Wi.GetCfg(t);
            if (3 != n.hurtRange.length) return 0;
            let a = n.hurtRange[i - 1];
            return a += n.range1 * e, a += n.range5 * Math.floor((e + 1) / 5), a += n.range10 * Math.floor((e + 1) / 10), a = Math.floor(a)
        }
        static atkVal(t, e, i) {
            e && (e -= 1), Yi.St == s.Fight && qi.passType != D.Pass && (e = 0);
            let n = Wi.GetCfg(t);
            if (!n.atk || 3 != n.atk.length) return 0;
            let a = n.atk[i - 1];
            return a += n.atk1 * e, a += n.atk5 * Math.floor((e + 1) / 5), a += n.atk10 * Math.floor((e + 1) / 10), a = Math.floor(a)
        }
        static bulletInterval(t, e, i) {
            e && (e -= 1), Yi.St == s.Fight && qi.passType != D.Pass && (e = 0);
            let n = Wi.GetCfg(t),
                a = n.bulletInterval[i - 1];
            return a += n.atkSpeed1 * e, a += n.atkSpeed5 * Math.floor((e + 1) / 5), a += n.atkSpeed10 * Math.floor((e + 1) / 10), a = Math.floor(a)
        }
        static cutdVal(t, e, i) {
            e && (e -= 1), Yi.St == s.Fight && qi.passType != D.Pass && (e = 0);
            let n = Wi.GetCfg(t),
                a = 0;
            return n.cut && 3 == n.cut.length && (a = n.cut[i - 1]), a += n.cut1 * e, a += n.cut5 * Math.floor((e + 1) / 5), a += n.cut10 * Math.floor((e + 1) / 10), a = Math.floor(a)
        }
        static superdRnd(t, e, i) {
            e && (e -= 1), Yi.St == s.Fight && qi.passType != D.Pass && (e = 0);
            let n = Wi.GetCfg(t),
                a = 0;
            return n.super && 3 == n.super.length && (a = n.super[i - 1]), a += n.super1 * e, a += n.super5 * Math.floor((e + 1) / 5), a += n.super10 * Math.floor((e + 1) / 10), a = Math.floor(a)
        }
        static rndForPatch(t = null, e) {
            let i = Yi.Avatar.passLv;
            if (null === t && (t = bt.patchOpenQtList(i)), e) {
                let e = 0,
                    i = [];
                for (let s in t) {
                    let n = t[s];
                    e += bt.GetCfg(n).patchRnd, i.push(e)
                }
                let s = null,
                    n = Math.floor(Math.random() * e);
                for (let t in i)
                    if (n <= i[t]) {
                        s = parseInt(t);
                        break
                    } if (null !== s) {
                    t = [t[s]]
                }
            }
            let s = [],
                n = Wi.GetDict();
            for (let e in n) {
                let i = n[e];
                null !== t && -1 === t.indexOf(i.quality) || s.push(i.id)
            }
            return s[Math.floor(Math.random() * s.length)]
        }
        static rndForSolider(t = null, e) {
            let i = Yi.Avatar.passLv;
            if (null === t && (t = bt.soliderOpenQtList(i)), e) {
                let e = 0,
                    i = [];
                for (let s in t) {
                    let n = t[s];
                    e += bt.GetCfg(n).soliderRnd, i.push(e)
                }
                let s = null,
                    n = Math.floor(Math.random() * e);
                for (let t in i)
                    if (n <= i[t]) {
                        s = parseInt(t);
                        break
                    } if (null !== s) {
                    t = [t[s]]
                }
            }
            let s = [],
                n = Wi.GetDict();
            for (let e in n) {
                let i = n[e];
                if (null === t || -1 !== t.indexOf(i.quality)) {
                    if (2 == i.id) continue;
                    s.push(i.id)
                }
            }
            return s[Math.floor(Math.random() * s.length)]
        }
    }
    Wi.jsName = "solider";
    class Yi {
        static devHitClear() {
            Yi.devCount = {}
        }
        static devHitApply(t, e) {
            Yi.devCount[t] || (Yi.devCount[t] = {
                hits: 0,
                hurtSum: 0,
                shootT: Laya.timer.currTimer
            }), Yi.devCount[t].hits++, Yi.devCount[t].hurtSum += e
        }
        static devHitEcho() {
            if (!Qi.IsDev()) return;
            Qi.Log("devHitEcho________________");
            let t = Laya.timer.currTimer,
                e = {};
            for (let i = 1; i <= 5; i++)
                for (let s in Yi.devCount) {
                    let n = parseInt(s),
                        a = qi.GetSolider(n);
                    if (!a || !a.cfgId) continue;
                    let l = Wi.GetCfg(a.cfgId);
                    if (!l || !l.quality || l.quality != i) continue;
                    let o = 0;
                    for (let t = 1; t <= a.star; t++) o += l.buyGold[t - 1];
                    let r = Yi.devCount[n].hits,
                        h = Yi.devCount[n].hurtSum,
                        d = Yi.devCount[n].shootT,
                        u = (t - d) / 1e3,
                        c = Math.round(h / o * 100 / u * 100) / 100;
                    Qi.Log("devHitEcho:", a.cfgId + "-" + l.name, "金:" + o, "次:" + r, "害:" + h, "秒伤/100金:" + c), e[a.cfgId] || (e[a.cfgId] = {}), e[a.cfgId][a.no] = [o, r, h, d]
                }
            Qi.Log("devHitEcho.Avg________________");
            for (let i in e) {
                let s = 0,
                    n = 0,
                    a = Wi.GetCfg(parseInt(i));
                for (let i in e[a.id]) {
                    let [l, o, r, h] = e[a.id][i], d = (t - h) / 1e3;
                    n += Math.round(r / l * 100 / d * 100) / 100, s++
                }
                Qi.Log("devHitEcho.Avg", a.id + ":" + a.name, "平均秒伤/100金:" + Math.round(n / s * 100) / 100)
            }
        }
    }
    Yi.iosOs = !1, Yi.devOld = !1, Yi.devMove = !1, Yi.devFire = !1, Yi.devCount = {};
    class Ki {
        constructor() {
            this.hexcase = 0, this.b64pad = ""
        }
        static getVal(t) {
            return Ki._self || (Ki._self = new Ki), Ki._self.hex_md5(t)
        }
        hex_md5(t) {
            return this.rstr2hex(this.rstr_md5(this.str2rstr_utf8(t)))
        }
        b64_md5(t) {
            return this.rstr2b64(this.rstr_md5(this.str2rstr_utf8(t)))
        }
        any_md5(t, e) {
            return this.rstr2any(this.rstr_md5(this.str2rstr_utf8(t)), e)
        }
        hex_hmac_md5(t, e) {
            return this.rstr2hex(this.rstr_hmac_md5(this.str2rstr_utf8(t), this.str2rstr_utf8(e)))
        }
        b64_hmac_md5(t, e) {
            return this.rstr2b64(this.rstr_hmac_md5(this.str2rstr_utf8(t), this.str2rstr_utf8(e)))
        }
        any_hmac_md5(t, e, i) {
            return this.rstr2any(this.rstr_hmac_md5(this.str2rstr_utf8(t), this.str2rstr_utf8(e)), i)
        }
        md5_vm_test() {
            return "900150983cd24fb0d6963f7d28e17f72" == this.hex_md5("abc").toLowerCase()
        }
        rstr_md5(t) {
            return this.binl2rstr(this.binl_md5(this.rstr2binl(t), 8 * t.length))
        }
        rstr_hmac_md5(t, e) {
            var i = this.rstr2binl(t);
            i.length > 16 && (i = this.binl_md5(i, 8 * t.length));
            for (var s = Array(16), n = Array(16), a = 0; a < 16; a++) s[a] = 909522486 ^ i[a], n[a] = 1549556828 ^ i[a];
            var l = this.binl_md5(s.concat(this.rstr2binl(e)), 512 + 8 * e.length);
            return this.binl2rstr(this.binl_md5(n.concat(l), 640))
        }
        rstr2hex(t) {
            try {
                this.hexcase
            } catch (t) {
                this.hexcase = 0
            }
            for (var e, i = this.hexcase ? "0123456789ABCDEF" : "0123456789abcdef", s = "", n = 0; n < t.length; n++) e = t.charCodeAt(n), s += i.charAt(e >>> 4 & 15) + i.charAt(15 & e);
            return s
        }
        rstr2b64(t) {
            try {
                this.b64pad
            } catch (t) {
                this.b64pad = ""
            }
            for (var e = "", i = t.length, s = 0; s < i; s += 3)
                for (var n = t.charCodeAt(s) << 16 | (s + 1 < i ? t.charCodeAt(s + 1) << 8 : 0) | (s + 2 < i ? t.charCodeAt(s + 2) : 0), a = 0; a < 4; a++) 8 * s + 6 * a > 8 * t.length ? e += this.b64pad : e += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(n >>> 6 * (3 - a) & 63);
            return e
        }
        rstr2any(t, e) {
            var i, s, n, a, l, o = e.length,
                r = Array(Math.ceil(t.length / 2));
            for (i = 0; i < r.length; i++) r[i] = t.charCodeAt(2 * i) << 8 | t.charCodeAt(2 * i + 1);
            var h = Math.ceil(8 * t.length / (Math.log(e.length) / Math.log(2))),
                d = Array(h);
            for (s = 0; s < h; s++) {
                for (l = Array(), a = 0, i = 0; i < r.length; i++) a = (a << 16) + r[i], a -= (n = Math.floor(a / o)) * o, (l.length > 0 || n > 0) && (l[l.length] = n);
                d[s] = a, r = l
            }
            var u = "";
            for (i = d.length - 1; i >= 0; i--) u += e.charAt(d[i]);
            return u
        }
        str2rstr_utf8(t) {
            for (var e, i, s = "", n = -1; ++n < t.length;) e = t.charCodeAt(n), i = n + 1 < t.length ? t.charCodeAt(n + 1) : 0, 55296 <= e && e <= 56319 && 56320 <= i && i <= 57343 && (e = 65536 + ((1023 & e) << 10) + (1023 & i), n++), e <= 127 ? s += String.fromCharCode(e) : e <= 2047 ? s += String.fromCharCode(192 | e >>> 6 & 31, 128 | 63 & e) : e <= 65535 ? s += String.fromCharCode(224 | e >>> 12 & 15, 128 | e >>> 6 & 63, 128 | 63 & e) : e <= 2097151 && (s += String.fromCharCode(240 | e >>> 18 & 7, 128 | e >>> 12 & 63, 128 | e >>> 6 & 63, 128 | 63 & e));
            return s
        }
        str2rstr_utf16le(t) {
            for (var e = "", i = 0; i < t.length; i++) e += String.fromCharCode(255 & t.charCodeAt(i), t.charCodeAt(i) >>> 8 & 255);
            return e
        }
        str2rstr_utf16be(t) {
            for (var e = "", i = 0; i < t.length; i++) e += String.fromCharCode(t.charCodeAt(i) >>> 8 & 255, 255 & t.charCodeAt(i));
            return e
        }
        rstr2binl(t) {
            for (var e = Array(t.length >> 2), i = 0; i < e.length; i++) e[i] = 0;
            for (i = 0; i < 8 * t.length; i += 8) e[i >> 5] |= (255 & t.charCodeAt(i / 8)) << i % 32;
            return e
        }
        binl2rstr(t) {
            for (var e = "", i = 0; i < 32 * t.length; i += 8) e += String.fromCharCode(t[i >> 5] >>> i % 32 & 255);
            return e
        }
        binl_md5(t, e) {
            t[e >> 5] |= 128 << e % 32, t[14 + (e + 64 >>> 9 << 4)] = e;
            for (var i = 1732584193, s = -271733879, n = -1732584194, a = 271733878, l = 0; l < t.length; l += 16) {
                var o = i,
                    r = s,
                    h = n,
                    d = a;
                i = this.md5_ff(i, s, n, a, t[l + 0], 7, -680876936), a = this.md5_ff(a, i, s, n, t[l + 1], 12, -389564586), n = this.md5_ff(n, a, i, s, t[l + 2], 17, 606105819), s = this.md5_ff(s, n, a, i, t[l + 3], 22, -1044525330), i = this.md5_ff(i, s, n, a, t[l + 4], 7, -176418897), a = this.md5_ff(a, i, s, n, t[l + 5], 12, 1200080426), n = this.md5_ff(n, a, i, s, t[l + 6], 17, -1473231341), s = this.md5_ff(s, n, a, i, t[l + 7], 22, -45705983), i = this.md5_ff(i, s, n, a, t[l + 8], 7, 1770035416), a = this.md5_ff(a, i, s, n, t[l + 9], 12, -1958414417), n = this.md5_ff(n, a, i, s, t[l + 10], 17, -42063), s = this.md5_ff(s, n, a, i, t[l + 11], 22, -1990404162), i = this.md5_ff(i, s, n, a, t[l + 12], 7, 1804603682), a = this.md5_ff(a, i, s, n, t[l + 13], 12, -40341101), n = this.md5_ff(n, a, i, s, t[l + 14], 17, -1502002290), s = this.md5_ff(s, n, a, i, t[l + 15], 22, 1236535329), i = this.md5_gg(i, s, n, a, t[l + 1], 5, -165796510), a = this.md5_gg(a, i, s, n, t[l + 6], 9, -1069501632), n = this.md5_gg(n, a, i, s, t[l + 11], 14, 643717713), s = this.md5_gg(s, n, a, i, t[l + 0], 20, -373897302), i = this.md5_gg(i, s, n, a, t[l + 5], 5, -701558691), a = this.md5_gg(a, i, s, n, t[l + 10], 9, 38016083), n = this.md5_gg(n, a, i, s, t[l + 15], 14, -660478335), s = this.md5_gg(s, n, a, i, t[l + 4], 20, -405537848), i = this.md5_gg(i, s, n, a, t[l + 9], 5, 568446438), a = this.md5_gg(a, i, s, n, t[l + 14], 9, -1019803690), n = this.md5_gg(n, a, i, s, t[l + 3], 14, -187363961), s = this.md5_gg(s, n, a, i, t[l + 8], 20, 1163531501), i = this.md5_gg(i, s, n, a, t[l + 13], 5, -1444681467), a = this.md5_gg(a, i, s, n, t[l + 2], 9, -51403784), n = this.md5_gg(n, a, i, s, t[l + 7], 14, 1735328473), s = this.md5_gg(s, n, a, i, t[l + 12], 20, -1926607734), i = this.md5_hh(i, s, n, a, t[l + 5], 4, -378558), a = this.md5_hh(a, i, s, n, t[l + 8], 11, -2022574463), n = this.md5_hh(n, a, i, s, t[l + 11], 16, 1839030562), s = this.md5_hh(s, n, a, i, t[l + 14], 23, -35309556), i = this.md5_hh(i, s, n, a, t[l + 1], 4, -1530992060), a = this.md5_hh(a, i, s, n, t[l + 4], 11, 1272893353), n = this.md5_hh(n, a, i, s, t[l + 7], 16, -155497632), s = this.md5_hh(s, n, a, i, t[l + 10], 23, -1094730640), i = this.md5_hh(i, s, n, a, t[l + 13], 4, 681279174), a = this.md5_hh(a, i, s, n, t[l + 0], 11, -358537222), n = this.md5_hh(n, a, i, s, t[l + 3], 16, -722521979), s = this.md5_hh(s, n, a, i, t[l + 6], 23, 76029189), i = this.md5_hh(i, s, n, a, t[l + 9], 4, -640364487), a = this.md5_hh(a, i, s, n, t[l + 12], 11, -421815835), n = this.md5_hh(n, a, i, s, t[l + 15], 16, 530742520), s = this.md5_hh(s, n, a, i, t[l + 2], 23, -995338651), i = this.md5_ii(i, s, n, a, t[l + 0], 6, -198630844), a = this.md5_ii(a, i, s, n, t[l + 7], 10, 1126891415), n = this.md5_ii(n, a, i, s, t[l + 14], 15, -1416354905), s = this.md5_ii(s, n, a, i, t[l + 5], 21, -57434055), i = this.md5_ii(i, s, n, a, t[l + 12], 6, 1700485571), a = this.md5_ii(a, i, s, n, t[l + 3], 10, -1894986606), n = this.md5_ii(n, a, i, s, t[l + 10], 15, -1051523), s = this.md5_ii(s, n, a, i, t[l + 1], 21, -2054922799), i = this.md5_ii(i, s, n, a, t[l + 8], 6, 1873313359), a = this.md5_ii(a, i, s, n, t[l + 15], 10, -30611744), n = this.md5_ii(n, a, i, s, t[l + 6], 15, -1560198380), s = this.md5_ii(s, n, a, i, t[l + 13], 21, 1309151649), i = this.md5_ii(i, s, n, a, t[l + 4], 6, -145523070), a = this.md5_ii(a, i, s, n, t[l + 11], 10, -1120210379), n = this.md5_ii(n, a, i, s, t[l + 2], 15, 718787259), s = this.md5_ii(s, n, a, i, t[l + 9], 21, -343485551), i = this.safe_add(i, o), s = this.safe_add(s, r), n = this.safe_add(n, h), a = this.safe_add(a, d)
            }
            return [i, s, n, a]
        }
        md5_cmn(t, e, i, s, n, a) {
            return this.safe_add(this.bit_rol(this.safe_add(this.safe_add(e, t), this.safe_add(s, a)), n), i)
        }
        md5_ff(t, e, i, s, n, a, l) {
            return this.md5_cmn(e & i | ~e & s, t, e, n, a, l)
        }
        md5_gg(t, e, i, s, n, a, l) {
            return this.md5_cmn(e & s | i & ~s, t, e, n, a, l)
        }
        md5_hh(t, e, i, s, n, a, l) {
            return this.md5_cmn(e ^ i ^ s, t, e, n, a, l)
        }
        md5_ii(t, e, i, s, n, a, l) {
            return this.md5_cmn(i ^ (e | ~s), t, e, n, a, l)
        }
        safe_add(t, e) {
            var i = (65535 & t) + (65535 & e);
            return (t >> 16) + (e >> 16) + (i >> 16) << 16 | 65535 & i
        }
        bit_rol(t, e) {
            return t << e | t >>> 32 - e
        }
    }! function (t) {
        t[t.Stand = 1] = "Stand", t[t.Build = 2] = "Build", t[t.Star = 3] = "Star", t[t.Sale = 4] = "Sale", t[t.Hurt = 5] = "Hurt", t[t.Fast = 6] = "Fast", t[t.Base = 7] = "Base", t[t.Pause = 8] = "Pause", t[t.Go = 9] = "Go", t[t.Relive = 10] = "Relive", t[t.Win = 11] = "Win", t[t.Fail = 12] = "Fail", t[t.Exit = 13] = "Exit", t[t.Sun = 21] = "Sun", t[t.Skill = 22] = "Skill"
    }(ct || (ct = {}));
    class Xi {
        static IsVSame() {
            return Y.VerStr && localStorage.getItem(Xi.keyVer) == Y.VerStr
        }
        static RefreshVer() {
            localStorage.setItem(Xi.keyVer, Y.VerStr)
        }
        static SaveVal(t, e) {
            localStorage.setItem(t, e)
        }
        static GetVal(t, e = null) {
            let i = localStorage.getItem(t);
            return i = null !== i ? i : e
        }
        static GetSetVal(t) {
            let e = null;
            switch (t) {
                case Xi.setSound:
                    if (!1 === Xi.cacheVal[t] || !0 === Xi.cacheVal[t]) return Xi.cacheVal[t];
                    e = !localStorage.getItem(t), Xi.cacheVal[t] = e
            }
            return e
        }
        static Toggle(t) {
            let e = null;
            switch (t) {
                case Xi.setSound:
                    e = !(e = Xi.GetSetVal(t)), Xi.cacheVal[t] = e, localStorage.setItem(t, e ? "" : "1")
            }
            return e
        }
        static RemoveSave() {
            localStorage.removeItem(Xi.keyVer), localStorage.removeItem(Xi.keyData), localStorage.removeItem(Xi.setSound)
        }
        static RemoveVer() {
            localStorage.setItem(Xi.keyVer, "")
        }
        static LocalSaveAvatar(t) {
            localStorage.setItem(Xi.keyData, t)
        }
        static LoadLocalAvatar() {
            let t = localStorage.getItem(Xi.keyData);
            if (t) {
                let e = JSON.parse(t);
                return Yi.Avatar = new Ct(e), !0
            }
            return !1
        }
        static getAvatarJson() {
            return JSON.stringify(Yi.Avatar)
        }
        static LoginOppo(t, e) {
            let i = {};
            i.game = Y.Game, i.plat = Y.Plat, i.token = t;
            let s = Y.ApiUrl + "oppoLogin/";
            new kt(s, i, t => {
                t && "ok" == t.result && (Ft.ApiCbFun(t), e && e(t))
            }, t => {}, !0, !0)
        }
        static LoginVivo(t, e) {
            let i = {};
            i.game = Y.Game, i.plat = Y.Plat, i.token = t;
            let s = Y.ApiUrl + "vivoLogin/";
            new kt(s, i, t => {
                t && "ok" == t.result && (Ft.ApiCbFun(t), e && e(t))
            }, t => {}, !1, !0)
        }
        static LoginXmin(t, e, i) {
            let s = {
                    game: Y.Game,
                    plat: Y.Plat,
                    accId: t,
                    session: e
                },
                n = Y.ApiUrl + "xminLogin/";
            new kt(n, s, t => {
                t && "ok" == t.result && (Ft.ApiCbFun(t), i && i(t))
            }, t => {}, !1, !0)
        }
        static LoginWx(t, e) {
            let i = {};
            i.game = Y.Game, i.plat = Y.Plat, i.code = t;
            let s = Y.ApiUrl + "wxLogin/";
            new kt(s, i, t => {
                t && "ok" == t.result && (Ft.ApiCbFun(t), e && e(t))
            }, t => {}, !0, !0)
        }
        static LoginTx(t, e) {
            let i = {};
            i.game = Y.Game, i.plat = Y.Plat, i.code = t;
            let s = Y.ApiUrl + "txLogin/";
            new kt(s, i, t => {
                t && "ok" == t.result && (Ft.ApiCbFun(t), e && e(t))
            }, t => {}, !0, !0)
        }
        static LoginTt(t, e, i) {
            let s = {};
            s.game = Y.Game, s.plat = Y.Plat, s.code = t, s.anonymous = e;
            let n = Y.ApiUrl + "ttLogin/";
            new kt(n, s, t => {
                t && "ok" == t.result && (Ft.ApiCbFun(t), i && i(t))
            }, t => {}, !1, !0)
        }
        static LoadConf(t) {
            if (Qi.IsFour()) return void(t && t(null));
            let e = Y.ApiUrl + "Init/";
            new kt(e, null, e => {
                e && "ok" == e.result && t && t(e)
            }, t => {}, !0, !0)
        }
        static WebCreatePlayer(t) {
            let e = {};
            e.game = Y.Game, e.plat = Y.Plat, e.imei = Mi.MEI ? Mi.MEI : "", e.oaid = Mi.OAD ? Mi.OAD : "";
            let i = Y.ApiUrl + "Create/";
            new kt(i, e, e => {
                e && "ok" == e.result && (Ft.ApiCbFun(e), t && t(e))
            }, t => {}, !0, !0)
        }
        static LoadForUser(t, e, i) {
            let s = {};
            s.userName = t;
            let n = Y.ApiUrl + "Load/";
            new kt(n, s, t => {
                t && "ok" == t.result ? (Ft.ApiCbFun(t), e && e(t)) : t && "fail" == t.result && i && i()
            }, t => {}, !0, !0)
        }
        static ApplyTd(t, e) {
            Xi.tdLogId = null, Xi.tdLogStr = "", Xi.operStep = 0;
            let i = "0," + (qi.isAgain ? "1" : "0"),
                s = ve.TeamInfo(qi.tdTeamNo);
            for (let t in s) {
                let e = s[t],
                    n = ve.GetSoliderLv(e);
                i += `,${e},${n}`
            }
            let n = Yi.Avatar,
                a = Y.ApiUrl + "ApplyTd/",
                l = {
                    game: Y.Game,
                    plat: Y.Plat,
                    userName: n.userName,
                    chapterId: t,
                    passLv: e,
                    more: i,
                    video: n.video
                };
            new kt(a, l, t => {
                t && "ok" == t.result && (Xi.tdLogId = t.data, Xi.tdLogStr = i)
            }, t => {}, !0, !0)
        }
        static AppendOperation(t, ...e) {
            if (!Xi.tdLogId) return;
            Xi.operStep++;
            let i = Yi.Avatar.money,
                s = Math.floor(qi.starTime / 1e3),
                n = null,
                a = null,
                l = null,
                o = null,
                r = null,
                h = "";
            switch (t) {
                case ct.Stand:
                    [n] = e, h = `${t},${s},${i},${n},${qi.lotNo}`;
                    break;
                case ct.Build:
                    [n, a, l] = e, h = `${t},${s},${i},${n},${a},${l},${qi.lotNo}`;
                    break;
                case ct.Star:
                case ct.Sale:
                    [n, a, o] = e, h = `${t},${s},${i},${n},${a},${o},${qi.lotNo}`;
                    break;
                case ct.Hurt:
                case ct.Relive:
                    h = `${t},${s},${i},${qi.lotNo}`;
                    break;
                case ct.Win:
                    [r] = e, h = `${t},${s},${i},${r},${qi.lotNo}`;
                    break;
                case ct.Fast:
                case ct.Base:
                case ct.Pause:
                case ct.Go:
                case ct.Fail:
                case ct.Exit:
                    h = `${t},${s},${i},${qi.lotNo}`;
                    break;
                case ct.Sun:
                    let [d, u, c] = e;
                    h = `${t},${s},${i},${d},${u},${c},${qi.lotNo}`;
                    break;
                case ct.Skill:
                    let [p, f] = e;
                    h = `${t},${s},${i},${p},${f},${qi.lotNo}`;
                    break;
                default:
                    return void Qi.Log("AppendOperation.default.error")
            }
            "" != Xi.tdLogStr && (Xi.tdLogStr += "|"), Xi.tdLogStr += h
        }
        static SaveApi(t, e = null, i = "", s = !1) {
            if (Qi.IsLook()) return;
            let n = Xi.getAvatarJson();
            if (Xi.LocalSaveAvatar(n), Qi.IsFour()) return void(e && e());
            t || Xi.saveNum++;
            let a = Laya.timer.currTimer;
            0 == Xi.saveT && (Xi.saveT = a);
            let l = a - Xi.saveT,
                o = Yi.Avatar,
                r = Y.saveNum;
            if (o.saveS < 3 ? r = 3 : o.saveS < 6 ? r = 6 : o.saveS < 9 && (r = 9), t || Xi.saveNum >= r || l > Y.SaveDelay) {
                if (Xi.saveNum = 0, Xi.saveT = a, Xi.saveF == Laya.timer.currFrame) return void(e && e());
                Xi.saveF = Laya.timer.currFrame, o.saveS++, n = Xi.getAvatarJson();
                let t = Y.ApiUrl + "Save/",
                    l = {
                        userName: o.userName,
                        playerData: n,
                        other: i,
                        game: Y.Game,
                        plat: Y.Plat,
                        create: s ? 1 : 0,
                        imei: Mi.MEI ? Mi.MEI : "",
                        oaid: Mi.OAD ? Mi.OAD : "",
                        tid: 0,
                        report: ""
                    };
                Xi.tdLogId && Xi.operStep != Xi.reportStep && (Xi.reportStep = Xi.operStep, l.tid = Xi.tdLogId, l.report = Xi.tdLogStr), l.s = Xi.signData(l), new kt(t, l, t => {
                    t && "ok" == t.result && (Ft.ApiCbFun(t), e && e())
                }, t => {}, !0, !0)
            }
        }
        static signData(t) {
            let e = "",
                i = Object.keys(t);
            i.sort();
            for (let s = 0; s < i.length; s += 1) 0 !== t[i[s]] && t[i[s]] && -1 != ["userName", "playerData", "game", "plat", "_nocache"].indexOf(i[s]) && t[i[s]] && (e = `${e}&${i[s]}=${t[i[s]]}`);
            return Ki.getVal(e)
        }
        static BookDone(t, e) {
            if (!t || !e) return;
            let i = Yi.Avatar,
                s = Y.ApiUrl + "Book/",
                n = {
                    game: Y.Game,
                    plat: Y.Plat,
                    userName: i.userName,
                    types: t,
                    bookIdStr: e
                };
            new kt(s, n, t => {
                t && "ok" == t.result && Pi.FlyTxt("订阅成功")
            }, t => {
                Pi.FlyTxt("未订阅成功")
            }, !0, !0)
        }
        static ExchangeApi(t) {
            if (6 != t.length && 10 != t.length) return Pi.FlyTxt("无效兑换码"), void Li.Close(S.Exchange);
            let e = Yi.Avatar;
            if (6 == t.length && e.passLv < 15) return void Pi.FlyTxt("Please pass pass 15 before receiving redemption benefits");
            let i = Y.ApiUrl + "Exchange/",
                s = {
                    game: Y.Game,
                    plat: Y.Plat,
                    userName: e.userName,
                    code: t
                };
            new kt(i, s, e => {
                if (e)
                    if ("ok" == e.result) {
                        let i = e.award[0],
                            s = e.award[1];
                        bi.ExchangeDo(t, i, s)
                    } else Li.Close(S.Exchange), Pi.FlyTxt(e.msg)
            }, t => {
                Pi.FlyTxt("兑换失败")
            }, !0, !0)
        }
        static RealRegApi(t, e) {
            let i = new RegExp("^[一-龥]+$");
            if (t.length < 2 || !i.test(t)) return void Pi.FlyTxt("您输入的姓名有误！");
            if (!Qi.ChkIDCard(e)) return void Pi.FlyTxt("您输入身份证号码有误！");
            let s = Yi.Avatar,
                n = Y.ApiUrl + "../../Tools/Api/RealIdCard",
                a = {
                    userName: s.userName,
                    realName: t,
                    idCard: e
                };
            new kt(n, a, i => {
                i && ("ok" == i.result ? Re.RegDone(t, e) : Pi.FlyTxt("实名制注册未成功"))
            }, t => {
                Pi.FlyTxt("实名制注册未成功")
            }, !0, !0)
        }
        static VideoReport(t, e) {
            if (Qi.IsLook()) return;
            if (!Qi.IsVideo()) return;
            if (Qi.IsDev() && Qi.IsRight()) return;
            let i = Yi.Avatar;
            if (!i || !i.userName) return;
            let s = Y.ApiUrl + "video",
                n = {
                    game: Y.Game,
                    plat: Y.Plat,
                    u: i.userName,
                    ad: t,
                    do: e ? 1 : 0
                };
            new kt(s, n, null, null, !1, !1)
        }
    }
    Xi.saveNum = 0, Xi.saveT = 0, Xi.keyVer = Laya.Browser.window.onFourGame ? "qmtfdzH5__4399_" + Y.Game + "_ver" : Y.Game + "_ver", Xi.keyData = Laya.Browser.window.onFourGame ? "qmtfdzH5__4399_" + Y.Game + "_local" : Y.Game + "_local", Xi.setSound = Laya.Browser.window.onFourGame ? "qmtfdzH5__4399_" + Y.Game + "_voice" : Y.Game + "_voice", Xi.cacheVal = {}, Xi.tdLogId = null, Xi.tdLogStr = "", Xi.operStep = null, Xi.reportStep = null;
    class Ji {
        static Init() {
            Qi.IsWx() && ((Y.WxBookSign || Y.WxBookOff) && (Ji.bookSave = [], Y.WxBookSign && Ji.bookSave.push(Y.WxBookSign), Y.WxBookOff && Ji.bookSave.push(Y.WxBookOff)), wx && wx.setKeepScreenOn && wx.setKeepScreenOn({
                keepScreenOn: !0
            }))
        }
        static WxClub() {
            if (!Qi.IsWx()) return;
            if (!wx.getSystemInfoSync) return;
            let t = wx.getSystemInfoSync().SDKVersion;
            if (!(Qi.compareVersion(t, "2.0.3") < 0) && wx && wx.createGameClubButton && !Ji.clubBtn) {
                let t = 370;
                Laya.Browser.clientHeight / Laya.Browser.clientWidth >= 2 && (t = 520), Ji.clubBtn = wx.createGameClubButton({
                    icon: "green",
                    style: {
                        left: 7,
                        top: t,
                        width: 34,
                        height: 34
                    }
                }), Ji.clubBtn.hide()
            }
        }
        static WxClubShow() {
            Qi.IsWx() && wx && wx.createGameClubButton && Ji.clubBtn && Ji.clubBtn.show()
        }
        static WxClubHide() {
            Qi.IsWx() && wx && wx.createGameClubButton && Ji.clubBtn && Ji.clubBtn.hide()
        }
        static InWxDev() {
            if (null !== Ji._inDev) return Ji._inDev;
            if (Ji._inDev = !1, !Qi.IsWx()) return;
            if (!wx || !wx.getAccountInfoSync || !wx.getAccountInfoSync().miniProgram) return;
            let t = wx.getAccountInfoSync().miniProgram;
            return t && t.envVersion && ("trial" == t.envVersion || "develop" == t.envVersion) && (Ji._inDev = !0), Ji._inDev
        }
        static AppGoto(t) {
            Qi.IsWx() && wx && wx.navigateToMiniProgram && wx.navigateToMiniProgram({
                appId: t,
                path: "",
                extraData: null,
                envVersion: "release",
                success(t) {},
                fail(t) {}
            })
        }
        static BookMsg() {
            Qi.IsWx() && wx && wx.requestSubscribeMessage && (!Ji.bookSave || Ji.bookSave.length <= 0 || wx.requestSubscribeMessage({
                tmplIds: Ji.bookSave,
                success(t) {
                    let e = "",
                        i = "";
                    for (let s in t) {
                        if ("errMsg" == s) continue;
                        "accept" == t[s] && (s == Y.WxBookSign ? (e += k.Sign + ",", i += s + ",") : s == Y.WxBookOff && (e += k.Off + ",", i += s + ","))
                    }
                    e && (e = e.substr(0, e.length - 1), i = i.substr(0, i.length - 1), Xi.BookDone(e, i))
                },
                fail(t) {}
            }))
        }
        static Exit() {
            Qi.IsWx() && wx && wx.exitMiniProgram && wx.exitMiniProgram(null)
        }
        static WxLogin() {
            wx.login({
                success: function (t) {
                    t.code && Xi.LoginWx(t.code, Pt.LoginSuccCb)
                },
                fail: function () {},
                complete: function () {}
            })
        }
        static CheckUpdate() {
            if (!Qi.IsWx()) return;
            let t = wx.getUpdateManager();
            t.onCheckForUpdate(function (t) {}), t.onUpdateReady(function () {
                wx.showModal({
                    showCancel: !0,
                    cancelText: "下次再说",
                    cancelColor: "#000000",
                    title: "游戏更新",
                    confirmText: "",
                    confirmColor: "",
                    content: "新版本已就绪，是否更新？",
                    success(e) {
                        e.confirm && t.applyUpdate()
                    },
                    fail() {},
                    complete() {}
                })
            }), t.onUpdateFailed(function () {})
        }
        static MinQuake() {
            if (!Qi.IsWx()) return !1;
            wx.vibrateShort({
                success: null,
                fail: null,
                complete: null
            })
        }
        static isIos() {
            let t = wx.getSystemInfoSync();
            if (t && t.system) {
                return "ios" == t.system.substr(0, 3).toLowerCase()
            }
            return !1
        }
        static InitListen(t) {
            if (!Qi.IsWx()) return !1;
            wx.onHide(function () {}), wx.onShow(function (t) {
                Mt.ShareDone()
            }), wx.showShareMenu({
                withShareTicket: !0,
                success: null,
                fail: null,
                complete: null
            }), wx.onShareAppMessage(function () {
                return Mt.ShareStart(), {
                    title: "快来一起来玩吧",
                    query: "what=good&money=666",
                    imageUrl: Mt.ShareUrl(),
                    success: null,
                    fail: null,
                    complete: null
                }
            })
        }
        static ShareApiCall(t) {
            if (!Qi.IsWx()) return;
            let e = "way=" + t + "&user=" + Yi.Avatar.userName;
            wx.shareAppMessage({
                title: "快来一起来玩吧",
                query: e,
                imageUrl: Mt.ShareUrl(),
                success: null,
                fail: null,
                complete: null
            })
        }
        static ShowInsert() {
            Qi.IsWx() && Y.WxInsert && wx && wx.createInterstitialAd && (Ji.insertObj ? (Ji.lastInsertT = Laya.timer.currTimer + 2 * Ji.insertSpace, Ji.insertObj.show().catch(t => {})) : (Ji.insertObj = wx.createInterstitialAd({
                adUnitId: Y.WxInsert
            }), Ji.insertObj.onClose(() => {
                console.log("insert.onClose")
            }), Ji.insertObj.onLoad(() => {
                console.log("insert.onLoad")
            }), Ji.insertObj.onError(t => {
                console.log("insert.onError", t), Ji.insertObj.destroy(), Ji.insertObj = null
            })))
        }
        static ShowBann(t = null) {
            if (!Qi.IsWx()) return;
            if (!Y.WxBanner) return;
            if (!wx || !wx.createBannerAd) return;
            let e = wx.getSystemInfoSync(),
                i = {
                    width: 300,
                    height: 120,
                    left: 0,
                    top: 0
                };
            i.left = .5 * (e.windowWidth - i.width), i.top = e.windowHeight - i.height - 6, Ji.bannerObj && (Ji.bannerObj.destroy(), Ji.bannerObj = null), Ji.bannerObj = wx.createBannerAd({
                adUnitId: Y.WxBanner,
                adIntervals: t || null,
                style: {
                    width: i.width,
                    height: i.height,
                    left: i.left,
                    top: i.top
                }
            }), Ji.bannerObj.onError((t, e) => {}), Ji.bannerObj.onLoad(() => {}), Ji.bannerObj && setTimeout(() => {
                Ji.bannerObj.show()
            }, 800)
        }
        static HideBann() {
            Qi.IsWx() && Y.WxBanner && wx && wx.createBannerAd && Ji.bannerObj && (Ji.bannerObj.hide(), Ji.bannerObj.destroy(), Ji.bannerObj = null)
        }
        static VideoAdInit(t, i = !0) {
            Qi.IsWx() && wx && wx.createRewardedVideoAd && (Ji.loading = 0, Ji.videoObj && (Ji.videoObj.offError(null), Ji.videoObj.offClose(null), Ji.videoObj.offLoad(null)), Ji.videoObj = wx.createRewardedVideoAd({
                adUnitId: t
            }), Ji.videoObj.onClose(t => {
                Ji.loading = 0, void 0 === t || t && t.isEnded ? K.Evt(e.VIDEO_FINISH, [Ji.videoSite, Ji.videoParam]) : (K.Evt(e.VIDEO_HALF, [Ji.videoSite]),
					Pi.FlyTxt("No video awards"))
            }), Ji.videoObj.onError(t => {
                Ji.loading = 0
            }), Ji.videoObj.onLoad(() => {}))
        }
        static VideoPlay(t, i, s = null) {
            Qi.IsWx() && t && (Ji.loading + 20500 > Laya.timer.currTimer ? Pi.FlyTxt("The video is pulling") : (Ji.videoSite = i, Ji.videoParam = s, Ji.VideoAdInit(t, !1), Ji.loading = Laya.timer.currTimer, K.Evt(e.VIDEO_LOAD, [i]), Ji.videoObj.load().then(() => {
                K.Evt(e.VIDEO_LOOK, [i]), Ji.videoObj.show().then(() => {}).catch(t => {
                    Ji.loading = 0, K.Evt(e.VIDEO_ERROR, [i])
                })
            }).catch(t => {
                Ji.loading = 0, Pi.FlyTxt("Video pull failed"), K.Evt(e.VIDEO_ERROR, [i])
            })))
        }
    }
    Ji.bookSave = null, Ji.clubBtn = null, Ji._inDev = null, Ji.insertSpace = 3e4, Ji.lastInsertT = null, Ji.loading = 0;
    class Qi {
        static compareVersion(t, e) {
            let i = t.split("."),
                s = e.split("."),
                n = Math.max(i.length, s.length);
            for (; i.length < n;) i.push("0");
            for (; s.length < n;) s.push("0");
            for (let t = 0; t < n; t++) {
                let e = parseInt(i[t]),
                    n = parseInt(s[t]);
                if (e > n) return 1;
                if (e < n) return -1
            }
            return 0
        }
        static Log(...t) {
            if (Qi.IsWx()) {
                if (!Ji.InWxDev()) return
            } else if (!Qi.IsDev()) return;
            Qi.IsRight() || console.log(t)
        }
        static getHour(t = null) {
            return null === t && (t = Laya.timer.currTimer), new Date(t).getHours()
        }
        static getMin(t = null) {
            return null === t && (t = Laya.timer.currTimer), new Date(t).getMinutes()
        }
        static getH(t = null) {
            let e = Qi.getHour(t);
            return Qi.leftZero(e, 2)
        }
        static getM(t = null) {
            let e = Qi.getMin(t);
            return Qi.leftZero(e, 2)
        }
        static getSec(t = null) {
            return null === t && (t = Laya.timer.currTimer), new Date(t).getSeconds()
        }
        static getYmd(t = null) {
            null === t && (t = Laya.timer.currTimer);
            let e = new Date(t),
                i = e.getFullYear() + "",
                s = e.getMonth() + 1,
                n = e.getDate();
            return i + Qi.leftZero(s, 2) + Qi.leftZero(n, 2)
        }
        static getS(t = null) {
            let e = Qi.getSec(t);
            return Qi.leftZero(e, 2)
        }
        static num2Str(t, e = !1) {
            let i = 0,
                s = ["", "k", "m", "b", "t", "p", "e", "z", "y", "s", "l", "d", "h", "v", "c", "n", "i", "r", "w"];
            for (; t > 1e3 && i < s.length;) t /= 1e3, i++;
            if (e) {
                return (t = Math.floor(t)) + s[i]
            }
            return (t = Math.floor(10 * t) / 10) + s[i]
        }
        static getStrTxt(t, ...e) {
            for (let i = 0; i < e.length; i++) t = t.replace("{" + i + "}", e[i]);
            return t
        }
        static leftZero(t, e = 2) {
            let i = t + "",
                s = e - i.length;
            if (s > 0) {
                i = "0".repeat(s) + i
            }
            return i
        }
        static angle(t, e, i, s, n = !0) {
            let a = s - e,
                l = i - t,
                o = 57.29577951308232 * Math.atan2(a, l);
            return n && (o = Qi.realAngle(o)), o
        }
        static angleRevise(t, e, i) {
            return t = Qi.realAngle(t), i = Qi.realAngle(i), Qi.realAngle(t - i) < 180 ? t -= e : (t -= 360, t += e), t
        }
        static dist(t, e, i, s) {
            let n = Math.abs(t - i),
                a = Math.abs(e - s);
            return Math.sqrt(n * n + a * a)
        }
        static inSideAngle(t, e, i, s, n) {
            let a = Qi.angle(t, e, i, s);
            return a > 360 - n && a < 0 + n || (a > 90 - n && a < 90 + n || (a > 180 - n && a < 180 + n || a > 270 - n && a < 270 + n))
        }
        static moveToX(t, e) {
            return e * Math.cos(t / 57.2957795130823)
        }
        static moveToY(t, e) {
            return e * Math.sin(t / 57.2957795130823)
        }
        static diffAngle(t, e) {
            return t = Qi.realAngle(t), (e = Qi.realAngle(e)) - t
        }
        static angleAdd(t, e, i) {
            return t > i ? t - i < 180 ? t -= e : (t -= 360, t += e) : t < i && (t += e), t
        }
        static realAngle(t) {
            return (t %= 360) < 0 && (t = 360 + t), t
        }
        static ArrSort(t, e, i) {
            return t.sort(function (t, s) {
                return t[e] > s[e] ? i ? 1 : -1 : t[e] < s[e] ? i ? -1 : 1 : 0
            })
        }
        static ArrReSort(t) {
            t.sort(function () {
                return .5 - Math.random()
            })
        }
        static BaseFilter(t, e) {
            let i = [t, 0, 0, 0, e, 0, t, 0, 0, e, 0, 0, t, 0, e, 0, 0, 0, 1, 0];
            return [new Laya.ColorFilter(i)]
        }
        static ColorFilter(t, e = 0, i = 0, s = 0) {
            let n = [e, 0, 0, 0, t, 0, i, 0, 0, t, 0, 0, s, 0, t, 0, 0, 0, 1, 0];
            return [new Laya.ColorFilter(n)]
        }
        static DictObjClone(t) {
            let e = {};
            for (let i in t) e[i] = t[i];
            return e
        }
        static DictLen(t) {
            let e = 0;
            for (let i in t) e++;
            return e
        }
        static ArrListClone(t) {
            let e = [];
            for (let i in t) e.push(t[i]);
            return e
        }
        static RandomInt(t, e) {
            if (t == e) return t;
            if (t > e) {
                let i = t;
                t = e, e = i
            }
            return Math.floor(Math.random() * (e - t + 1)) + t
        }
        static GetUrlVal(t, e) {
            if (!Laya) return e;
            if (!Laya.Browser) return e;
            if (!Laya.Browser.window) return e;
            if (!Laya.Browser.window.location) return e;
            if (!Laya.Browser.window.location.search) return e;
            let i = new RegExp("(^|&)" + t + "=([^&]*)(&|$)"),
                s = Laya.Browser.window.location.search.substr(1).match(i);
            if (null !== s) {
                let t = s[2];
                return "number" == typeof e ? t = parseInt(t + "") : "string" == typeof e && (t += ""), t
            }
            return e
        }
        static GetTimeStr(t) {
            let e = Math.floor(t / 3600),
                i = Math.floor(t % 3600 / 60),
                s = t % 60;
            return (e >= 10 ? e : "0" + e) + ":" + (i >= 10 ? i : "0" + i) + ":" + (s >= 10 ? s : "0" + s)
        }
        static GetMinSecStr(t) {
            let e = Math.floor(t / 60),
                i = t % 60;
            return (e >= 10 ? e : "0" + e) + ":" + (i >= 10 ? i : "0" + i)
        }
        static GlobalPoint(t, e = null, i = null) {
            return null === e && (e = .5 * t.width), null === i && (i = .5 * t.height), t.localToGlobal(new Laya.Point(e, i))
        }
        static RndGroupRnd(t, e = null) {
            if (!t || t.length <= 0) return null;
            let i = {},
                s = 0;
            for (let e in t) {
                let n = t[e],
                    a = n[0],
                    l = n[1],
                    o = n[2] ? n[2] : null;
                i[s += a] = [l, o]
            }
            if (s <= 0) return null;
            let n = null,
                a = null,
                l = Math.floor(Math.random() * s);
            for (let t in i) {
                if (l <= parseInt(t)) {
                    n = i[t][0], a = i[t][1];
                    break
                }
            }
            if (null === n) return null;
            let o = null;
            return o = null === a ? n : Qi.RandomInt(n, a)
        }
        static RndDrop2List(t) {
            if (!t || t.length <= 0) return;
            let e = {},
                i = 0;
            for (let s in t) {
                let n = t[s];
                i += n[0];
                let a = [];
                for (let t = 0; t < Math.floor(n.length / 2); t++) {
                    let e = n[2 * t + 1],
                        i = n[2 * t + 2] ? n[2 * t + 2] : 1;
                    a.push([e, i])
                }
                e[i] = a
            }
            if (i <= 0) return;
            let s = [],
                n = Math.floor(Math.random() * i);
            for (let t in e) {
                if (n <= parseInt(t)) {
                    s = e[t];
                    break
                }
            }
            return s.length <= 0 ? void 0 : s
        }
        static RndGroupStrToList(t) {
            let e = [],
                i = t.split(";");
            for (let t in i) {
                let s = i[t].split(","),
                    n = parseInt(s[0]),
                    a = parseInt(s[1]);
                e.push([n, a])
            }
            return e
        }
        static IsInDebug(t = null) {
            if (!Qi.IsDev()) return;
            let e = Qi.GetUrlVal("debug", ""),
                i = "";
            return null !== t && (i = t + ""), e && (!i || i === e)
        }
        static IsAdvScreen() {
            return Laya.Browser.clientHeight / Laya.Browser.clientWidth >= 2
        }
        static IsVideo() {
            return true
        }
        static IsLook() {
            return Qi.GetUrlVal("data", "")
        }
        static IsDev() {
            if (Qi.devSwitch % 2 == 0) {
                if (Yi && Yi.Avatar) {
                    let t = Yi.Avatar;
                    if (t && "010Oppo_NSLfuk+vAB10ffky1rVeqg==" == t.userName) return !0;
                    if (t && "010Opp1_1198743915" == t.userName) return !0
                }
                return a.Dev == Y.Plat
            }
            return !1
        }
        static IsFour() {
            return a.Four == Y.Plat
        }
        static IsRight() {
            return Laya.Browser.window.onRightGame || a.Right == Y.Plat
        }
        static IsLink() {
            return a.Link == Y.Plat
        }
        static IsOppo() {
            return a.Oppo == Y.Plat
        }
        static IsApk1() {
            return a.Apk1 == Y.Plat
        }
        static IsApk2() {
            return a.Apk2 == Y.Plat
        }
        static IsIos() {
            return a.Ios == Y.Plat
        }
        static IsVivo() {
            return a.Vivo == Y.Plat
        }
        static IsXMin() {
            return a.XMin == Y.Plat
        }
        static IsWx() {
            return a.Wx == Y.Plat
        }
        static IsTx() {
            return a.Tx == Y.Plat
        }
        static IsTt() {
            return a.Tt == Y.Plat
        }
        static IsShow(t) {
            return !!t.visible && (!!t && (t == Laya.stage || !!t.parent && Qi.IsShow(t.parent)))
        }
        static IsResLoad(t) {
            let e = Y.ResUrl + "atlas/" + t + ".atlas";
            if (Laya.loader.getRes(e)) return !0;
            Qi.resLoad || (Qi.resLoad = {});
            let i = Laya.timer.currTimer;
            return (!Qi.resLoad[e] || Qi.resLoad[e] + 4e4 < i) && (Qi.resLoad[e] = i, Laya.loader.load(e)), !1
        }
        static HashCode(t) {
            let e = 0;
            for (let i = 0; i < t.length; i++) {
                e = (e << 5) - e + t.charCodeAt(i), e &= e
            }
            return e
        }
        static ChkIDCard(t) {
            let e = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2],
                i = t = t.replace("x", "X"),
                s = t[17],
                n = i.substring(0, 17).split(""),
                a = n.length,
                l = 0;
            for (let t = 0; t < a; t++) l += parseInt(n[t]) * e[t];
            let o = ["1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"][l % 11],
                r = /^[1-9][0-9]{5}([1][9][0-9]{2}|[2][0][0|1][0-9])([0][1-9]|[1][0|1|2])([0][1-9]|[1|2][0-9]|[3][0|1])[0-9]{3}([0-9]|[X])$/.test(t);
            return !(s !== o || !r)
        }
    }
    Qi.devSwitch = 0;
    class zi {
        constructor() {
            this.jsonCache = new Object
        }
        addJsonToMgr(t) {
            let e = this.getJson("config/" + t + ".json");
            this.jsonCache[t] = e
        }
        getJson(t) {
            let e = Laya.loader.getRes(t);
            if (!e) return null;
            return e
        }
        static Init() {
            null == zi._my && (zi._my = new zi)
        }
        static GetJson(t) {
            return null == zi._my.jsonCache[t] && zi._my.addJsonToMgr(t), zi._my.jsonCache[t]
        }
    }
    new class {
        constructor() {
            this.localMustRes = [], this.netMustRes = [], Laya.isWXPosMsg = !1, Laya.isWXOpenDataContext = !1, 
				Laya.init(750, 1334, Laya.WebGL), Laya.SoundManager.autoStopMusic = !0, Laya.MouseManager.multiTouchEnabled = !1,
				Laya.stage.frameRate = Laya.Stage.FRAME_FAST, Laya.stage.scaleMode = "fixedwidth", Laya.stage.screenMode = "none", Laya.stage.alignH = "center", 
				Laya.stage.bgColor = "#eeeeee", Laya.Text.defaultFont = "黑体", 
				Y.Init(), this.localResLoad()
			platform.getInstance().yadstartup("",null);
        }
        localResLoad() {
			Plat.I.SendAnay(Plat.Loading_Begin)
            let t = Laya.Loader.ATLAS;
            Qi.IsFour() ? this.localMustRes = [ {
                url: "atlas/load.atlas",
                type: t
            }, {
                url: "atlas/grid.atlas",
                type: t
            }] 
				: this.localMustRes = [ {
                url: "atlas/load.atlas",
                type: t
            }, {
                url: "atlas/grid.atlas",
                type: t
            }],
				this.netMustRes = [{
                url: "atlas/chapterMap.atlas",
                type: t,
                Must: !0
            }, {
                url: "atlas/solider.atlas",
                type: t,
                Must: !0
            }, {
                url: "atlas/mapItem.atlas",
                type: t,
                Must: !0
            }, {
                url: "atlas/main.atlas",
                type: t,
                Must: !0
            }, {
                url: "atlas/man.atlas",
                type: t,
                Must: !0
            }, {
                url: "atlas/stand.atlas",
                type: t,
                Must: !0
            }, {
                url: "atlas/fight.atlas",
                type: t,
                Must: !0
            }, {
                url: "atlas/boss.atlas",
                type: t,
                Must: !0
            }, {
                url: "atlas/result.atlas",
                type: t,
                Must: !0
            }, {
                url: "atlas/obj.atlas",
                type: t,
                Must: !0
            }, {
                url: "atlas/font.atlas",
                type: t,
                Must: !0
            }, {
                url: "atlas/sign7.atlas",
                type: t,
                Must: !0
            }, {
                url: "atlas/award.atlas",
                type: t,
                Must: !0
            }, {
                url: "atlas/effectBullet.atlas",
                type: t,
                Must: !0
            }, {
                url: "atlas/kill1.atlas",
                type: t,
                Must: !0
            }, {
                url: "atlas/kill5.atlas",
                type: t,
                Must: !0
            }, {
                url: "atlas/effectDelay.atlas",
                type: t,
                Must: !1
            }, {
                url: "atlas/round.atlas",
                type: t,
                Must: !1
            }, {
                url: "atlas/egg.atlas",
                type: t,
                Must: !1
            }, {
                url: "atlas/shop.atlas",
                type: t,
                Must: !1
            }, {
                url: "atlas/talent.atlas",
                type: t,
                Must: !1
            }];
            let tempArr = ['chapterAward', 'enemy', 'gift', 'global', 'goods', 'imgCenter', 'kill', 'lot', 'map', 'OpenUp', 'passDrop', 'passLv', 'pngCenter', 'shop', 'signIn', 'solider', 'soliderUp', 'sound', 'talent', 'Talk', 'turntable']
            for (const configName of tempArr) {
                this.localMustRes.push({url: `config/${configName}.json`,type:Laya.Loader.JSON})
            }
            Laya.loader.load(this.localMustRes, Laya.Handler.create(this, this.loadApiInit), null, null, 0, !0)
        }
        loadApiInit() {
            this.clearCache(), K.Init(), Xi.LoadConf(this.initLoadDone.bind(this))
        }
        clearCache() {
            let t = Xi.IsVSame(),
                e = [];
            if (Qi.IsWx() ? (Laya.MiniAdpter.init(), Ji.CheckUpdate(), t || (e = Laya.MiniAdpter.getFileList(), Laya.MiniAdpter.removeAll())) : Qi.IsTx() ? (Laya.QQMiniAdapter.init(), Laya.QQMiniAdapter.AutoCacheDownFile = !0, t || (e = Laya.QQMiniAdapter.getFileList(), Laya.QQMiniAdapter.removeAll())) : Qi.IsTt() ? (Laya.TTMiniAdapter.init(), t || (e = Laya.TTMiniAdapter.getFileList(), Laya.TTMiniAdapter.removeAll())) : Qi.IsOppo() ? (Laya.QGMiniAdapter.init(), t || (e = Laya.QGMiniAdapter.getFileList(), Laya.QGMiniAdapter.removeAll())) : Qi.IsXMin() ? (Laya.KGMiniAdapter.init(), t || (e = Laya.KGMiniAdapter.getFileList(), Laya.KGMiniAdapter.removeAll())) : Qi.IsVivo() && (e = Laya.VVMiniAdapter.getFileList(), t || (e = Laya.VVMiniAdapter.getFileList(), Laya.VVMiniAdapter.removeAll())), e && e.length > 0)
                for (let t in e) "http" == t.substr(0, 4) && Laya.loader.clearRes(t)
        }
        initLoadDone(t) {
            Y.InitDo(t), Vi.Init(), zi.Init(), Ft.Init(), Z.Init(), mt.Init(),
				qi.Init(), Jt.Init(), pe.Init(), Li.Init(), Pi.Init(),
				Laya.stage.addChildAt(mt.GetLayer(), 0),
				Laya.stage.addChildAt(qi.GetLayer(ut.Zero), 1),
				Laya.stage.addChildAt(pe.GetLayer(), 2),
				Laya.stage.addChildAt(Li.GetLayer(), 3),
				Laya.stage.addChildAt(Pi.GetLayer(), 4),
				Li.Open(S.Load, c.login, !0),
				Pt.LoginGame(this.loginGameSucc.bind(this)), Ji.WxClub()
        }
        loginGameSucc() {
            Qi.IsInDebug() && Laya.Stat.show(0, 0);
            let t = Qi.GetUrlVal("lv", "");
            t && (Yi.Avatar.passLv = parseInt(t)),
				Xi.IsVSame() ? Li.Open(S.Load, c.loader, !0) 
					: Li.Open(S.Load, c.down, !0), this.mustResLoad()
        }
        mustResLoad() {
            if (this.netMustRes && 0 != this.netMustRes.length) {
                let t = [];
                for (let e in this.netMustRes) Qi.IsFour() || (this.netMustRes[e].url = Y.VerUrl + this.netMustRes[e].url), t.push(this.netMustRes[e]);
                t && t.length > 0 ? Laya.loader.load(t, Laya.Handler.create(this, function (t = null) {
                    t && (K.Evt(e.LOAD_PER, 1), Xi.RefreshVer(), this._mustResLoadSucc())
                }), Laya.Handler.create(this, function (t) {
                    K.Evt(e.LOAD_PER, t)
                }, null, !1), Laya.Loader.ATLAS, 0, !0) : (K.Evt(e.LOAD_PER, 1), Xi.RefreshVer(), this._mustResLoadSucc())
            } else K.Evt(e.LOAD_PER, 1), this._mustResLoadSucc()
        }
        _mustResLoadSucc() {
            let t = [];
            for (let e in this.netMustRes) this.netMustRes[e].Must || t.push(this.netMustRes[e]);
            Laya.loader.load(t, Laya.Handler.create(this, function (t = null) {
                this.enterGame()
            }), null, Laya.Loader.ATLAS, 2, !0)
        }
        enterGame() {}
    }
}();