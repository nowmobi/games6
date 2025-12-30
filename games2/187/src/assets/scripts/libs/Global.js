window.random = function(e, a) {
    return Math.random() * (a - e) + e
}, window.randomInt = function(e, a) {
    return e = Math.ceil(e), a = Math.floor(a), Math.floor(Math.random() * (a - e + 1)) + e
}, window.hpBit = function(e, a) {
    a = a || 1;
    var r = [
        [1e27, "ee"],
        [1e24, "dd"],
        [1e21, "cc"],
        [1e18, "bb"],
        [1e15, "aa"],
        [1e12, "T"],
        [1e9, "B"],
        [1e6, "M"],
        [1e3, "K"]
    ];
    for (n = 0; n < r.length; n++) {
        var l = e / r[n][0];
        if (l > 1) return "" + l.toFixed(a) + r[n][1]
    }
    return e
}, window.goldCrarryBit = function(e) {
    for (var a = [
            [1e27, "ee"],
            [1e24, "dd"],
            [1e21, "cc"],
            [1e18, "bb"],
            [1e15, "aa"],
            [1e12, "T"],
            [1e9, "B"],
            [1e6, "M"],
            [1e3, "K"]
        ], r = 0; r < a.length; r++) {
        var l = e / a[r][0];
        if (l > 1) return "" + l.toFixed(1) + a[r][1]
    }
    return e.toFixed(1)
}, window.GameState = null, window.ExplodeManager = null, window.SoundManager = null, window.ThemeStatus = cc.Enum({
    LOCKED: 0,
    UNLOCKED: 1,
    SELECTED: 2,
    TRIAL: 3
}), window.GAME_STATUS = cc.Enum({
    IDLE: 0,
    PLAYING: 1,
    PAUSED: 2,
    GAMEOVER: 3,
    LEVEL_COMPLETED: 4,
    BOSS: 5
}), window.VirusScale = [{
    pro: 1,
    scale: .8
}, {
    pro: 2,
    scale: .9
}, {
    pro: 5,
    scale: 1
}, {
    pro: 10,
    scale: 1.1
}, {
    pro: 20,
    scale: 1.2
}, {
    pro: 40,
    scale: 1.3
}, {
    pro: 100,
    scale: 1.4
}], window.VirusSpeed = [cc.v2(50, 60), cc.v2(60, 70), cc.v2(70, 80), cc.v2(80, 90), cc.v2(90, 100), cc.v2(100, 110), cc.v2(110, 120)], window.VirusData = {
    size: {
        small: {
            id: 1,
            hp: 1,
            body: "1",
            minScale: .7,
            maxScale: .9
        },
        medium: {
            id: 2,
            hp: 1.5,
            body: "2",
            body_split: {
                2: "1"
            },
            minScale: .9,
            maxScale: 1.1
        },
        large: {
            id: 3,
            hp: 2,
            body: "3",
            body_split: {
                2: "2",
                4: "1"
            },
            minScale: 1.2,
            maxScale: 1.3
        },
        huge: {
            id: 4,
            hp: 3,
            body: "4",
            body_split: {
                2: "3",
                4: "2",
                8: "1"
            },
            minScale: 1.5,
            maxScale: 1.8
        },
        boss: {
            id: 5,
            hp: 5,
            body: "5",
            body_split: {
                2: "4",
                4: "3",
                8: "2",
                16: "1"
            },
            minScale: 2,
            maxScale: 2.2
        }
    },
    speed: [cc.v2(50, 60), cc.v2(60, 70), cc.v2(70, 80), cc.v2(80, 90), cc.v2(90, 100), cc.v2(100, 110), cc.v2(110, 120)]
}, window.AirplaneData = [{
    name: "default",
    armature: "default",
    base_dame: 1,
    base_fire_speed: .2,
    base_price: 250,
    unlock_level: 1,
    bullets: [{
        id: 1,
        type: 1,
        delta_position: cc.v2(0, 100)
    }]
}, {
    name: "airplane_1",
    armature: "armature_1",
    base_dame: 2,
    base_fire_speed: .2,
    base_price: 375,
    unlock_level: 5,
    bullets: [{
        id: 5,
        type: 1,
        delta_position: cc.v2(0, 100)
    }]
}, {
    name: "airplane_2",
    armature: "armature_2",
    base_dame: 3,
    base_fire_speed: .2,
    base_price: 563,
    unlock_level: 10,
    bullets: [{
        id: 16,
        type: 1,
        delta_position: cc.v2(0, 100)
    }]
}, {
    name: "airplane_3",
    armature: "armature_3",
    base_dame: 6,
    base_fire_speed: .18,
    base_price: 845,
    unlock_level: 20,
    bullets: [{
        id: 10,
        type: 1,
        delta_position: cc.v2(0, 100)
    }]
}, {
    name: "airplane_4",
    armature: "armature_4",
    base_dame: 14,
    base_fire_speed: .17,
    base_price: 1268,
    unlock_level: 35,
    bullets: [{
        id: 23,
        type: 1,
        delta_position: cc.v2(0, 100)
    }]
}, {
    name: "airplane_5",
    armature: "armature_5",
    base_dame: 35,
    base_fire_speed: .16,
    base_price: 1902,
    unlock_level: 55,
    bullets: [{
        id: 6,
        type: 1,
        delta_position: cc.v2(0, 100)
    }]
}, {
    name: "airplane_6",
    armature: "armature_6",
    base_dame: 95,
    base_fire_speed: .15,
    base_price: 2853,
    unlock_level: 80,
    bullets: [{
        id: 14,
        type: 1,
        delta_position: cc.v2(0, 100)
    }]
}, {
    name: "airplane_7",
    armature: "armature_7",
    base_dame: 273,
    base_fire_speed: .14,
    base_price: 4280,
    unlock_level: 110,
    bullets: [{
        id: 27,
        type: 1,
        delta_position: cc.v2(0, 100)
    }]
}, {
    name: "airplane_8",
    armature: "armature_8",
    base_dame: 822,
    base_fire_speed: .13,
    base_price: 6420,
    unlock_level: 145,
    bullets: [{
        id: 21,
        type: 1,
        delta_position: cc.v2(0, 100)
    }]
}, {
    name: "airplane_9",
    armature: "armature_9",
    base_dame: 2579,
    base_fire_speed: .12,
    base_price: 9630,
    unlock_level: 185,
    bullets: [{
        id: 20,
        type: 1,
        delta_position: cc.v2(0, 100)
    }]
}, {
    name: "airplane_10",
    armature: "armature_10",
    base_dame: 8394,
    base_fire_speed: .11,
    base_price: 14445,
    unlock_level: 230,
    bullets: [{
        id: 24,
        type: 1,
        delta_position: cc.v2(0, 100)
    }]
}, {
    name: "airplane_11",
    armature: "armature_11",
    base_dame: 28226,
    base_fire_speed: .1,
    base_price: 21668,
    unlock_level: 280,
    bullets: [{
        id: 12,
        type: 1,
        delta_position: cc.v2(0, 100)
    }]
}, {
    name: "airplane_12",
    armature: "armature_12",
    base_dame: 97760,
    base_fire_speed: .1,
    base_price: 32502,
    unlock_level: 335,
    bullets: [{
        id: 13,
        type: 1,
        delta_position: cc.v2(0, 120)
    }]
}, {
    name: "airplane_13",
    armature: "armature_13",
    base_dame: 347847,
    base_fire_speed: .1,
    base_price: 48753,
    unlock_level: 395,
    bullets: [{
        id: 29,
        type: 1,
        delta_position: cc.v2(0, 100)
    }]
}, {
    name: "airplane_14",
    armature: "armature_14",
    base_dame: 1268795,
    base_fire_speed: .1,
    base_price: 73130,
    unlock_level: 460,
    bullets: [{
        id: 10,
        type: 1,
        delta_position: cc.v2(0, 100)
    }]
}, {
    name: "airplane_15",
    armature: "armature_15",
    base_dame: 4735566,
    base_fire_speed: .1,
    base_price: 109695,
    unlock_level: 530,
    bullets: [{
        id: 19,
        type: 1,
        delta_position: cc.v2(0, 100)
    }]
}, {
    name: "airplane_16",
    armature: "armature_16",
    base_dame: 18056804,
    base_fire_speed: .1,
    base_price: 164543,
    unlock_level: 605,
    bullets: [{
        id: 26,
        type: 1,
        delta_position: cc.v2(0, 100)
    }]
}, {
    name: "airplane_17",
    armature: "armature_17",
    base_dame: 70242309,
    base_fire_speed: .1,
    base_price: 246815,
    unlock_level: 685,
    bullets: [{
        id: 9,
        type: 1,
        delta_position: cc.v2(0, 100)
    }]
}, {
    name: "airplane_18",
    armature: "armature_18",
    base_dame: 278431679,
    base_fire_speed: .1,
    base_price: 370223,
    unlock_level: 770,
    bullets: [{
        id: 17,
        type: 1,
        delta_position: cc.v2(0, 100)
    }]
}, {
    name: "airplane_19",
    armature: "armature_19",
    base_dame: 1123398460,
    base_fire_speed: .1,
    base_price: 555335,
    unlock_level: 860,
    bullets: [{
        id: 15,
        type: 1,
        delta_position: cc.v2(0, 100)
    }]
}, {
    name: "airplane_20",
    armature: "armature_20",
    base_dame: 4609227473,
    base_fire_speed: .1,
    base_price: 833003,
    unlock_level: 955,
    bullets: [{
        id: 32,
        type: 1,
        delta_position: cc.v2(0, 100)
    }]
}], window.ItemSupportType = {
    FIREPOWER: "firepower",
    FIRESPEED: "firespeed",
    COINBONUS: "coinbonus",
    CALLSUPPORT: "callsupport"
}, window.ItemSupportTime = 9, window.FREE_GOLD_REWARD = 50;