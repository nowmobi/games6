tywx = {}, tywx.StateInfo = {
    networkConnected: !0,
    networkType: "none",
    isOnForeground: !0
}, tywx.SystemInfo = {
    clientId: "H5_2.0_weixin.weixin.0-hall20358.weixin.shenxlzc",
    intClientId: 26126,
    cloudId: 28,
    version: 2.25,
    webSocketUrl: "",
    loginUrl: "https://open.andla.cn/",
    shareManagerUrl: "https://market.touch4.me/",
    deviceId: "wechatGame",
    wxAppId: "wxc3dcadbe1f96e539",
    appId: 9999,
    gameId: 20358,
    hall_version: "hall37",
    cdnPath: "https://richqn.nalrer.cn/dizhu/",
    remotePackPath: "remote_res/res.zip",
    biLogServer: "https://cbi.touch4.me/api/bilog5/text",
    biJsonLogServer: "https://cbi.touch4.me/api/bilog5/report",
    errorLogServer: "https://clienterr.touch4.me/api/bilog5/clientlog",
    tywxVersion: 1.1,
    areaUrl: "https://iploc.ywdier.com/"
}, tywx.UserInfo = {
    userId: 0,
    userName: "TuWechatGame",
    userPic: "",
    authorCode: "",
    systemType: 0,
    wechatType: "6.6.1",
    model: "未知设备",
    system: "iOS 10.0.1",
    loc: "",
    scene_id: "",
    scene_param: "",
    invite_id: 0,
    wxgame_session_key: "",
    wxgame_openid: "",
    userArea: "",
    sdkVersion: ""
}, tywx.LOGD = function(r, t) {
    var e = (r = r || "tywx") + " : " + t;
    console.log(e);
}, tywx.LOGE = function(r, t) {
    var e = (r = r || "tywx") + " : " + t;
    // console.error(e);
}, tywx.IsWechatPlatform = function() {
    try {
        return wx, wx.showShareMenu(), !0;
    } catch (r) {
        return !1;
    }
}, function() {
    function r(r, t) {
        r[t >> 5] |= 128 << t % 32, r[14 + (t + 64 >>> 9 << 4)] = t;
        for (var a = 1732584193, u = -271733879, h = -1732584194, l = 271733878, s = 0; s < r.length; s += 16) {
            var f = a, d = u, w = h, m = l;
            u = c(u = c(u = c(u = c(u = o(u = o(u = o(u = o(u = n(u = n(u = n(u = n(u = e(u = e(u = e(u = e(u, h = e(h, l = e(l, a = e(a, u, h, l, r[s + 0], 7, -680876936), u, h, r[s + 1], 12, -389564586), a, u, r[s + 2], 17, 606105819), l, a, r[s + 3], 22, -1044525330), h = e(h, l = e(l, a = e(a, u, h, l, r[s + 4], 7, -176418897), u, h, r[s + 5], 12, 1200080426), a, u, r[s + 6], 17, -1473231341), l, a, r[s + 7], 22, -45705983), h = e(h, l = e(l, a = e(a, u, h, l, r[s + 8], 7, 1770035416), u, h, r[s + 9], 12, -1958414417), a, u, r[s + 10], 17, -42063), l, a, r[s + 11], 22, -1990404162), h = e(h, l = e(l, a = e(a, u, h, l, r[s + 12], 7, 1804603682), u, h, r[s + 13], 12, -40341101), a, u, r[s + 14], 17, -1502002290), l, a, r[s + 15], 22, 1236535329), h = n(h, l = n(l, a = n(a, u, h, l, r[s + 1], 5, -165796510), u, h, r[s + 6], 9, -1069501632), a, u, r[s + 11], 14, 643717713), l, a, r[s + 0], 20, -373897302), h = n(h, l = n(l, a = n(a, u, h, l, r[s + 5], 5, -701558691), u, h, r[s + 10], 9, 38016083), a, u, r[s + 15], 14, -660478335), l, a, r[s + 4], 20, -405537848), h = n(h, l = n(l, a = n(a, u, h, l, r[s + 9], 5, 568446438), u, h, r[s + 14], 9, -1019803690), a, u, r[s + 3], 14, -187363961), l, a, r[s + 8], 20, 1163531501), h = n(h, l = n(l, a = n(a, u, h, l, r[s + 13], 5, -1444681467), u, h, r[s + 2], 9, -51403784), a, u, r[s + 7], 14, 1735328473), l, a, r[s + 12], 20, -1926607734), h = o(h, l = o(l, a = o(a, u, h, l, r[s + 5], 4, -378558), u, h, r[s + 8], 11, -2022574463), a, u, r[s + 11], 16, 1839030562), l, a, r[s + 14], 23, -35309556), h = o(h, l = o(l, a = o(a, u, h, l, r[s + 1], 4, -1530992060), u, h, r[s + 4], 11, 1272893353), a, u, r[s + 7], 16, -155497632), l, a, r[s + 10], 23, -1094730640), h = o(h, l = o(l, a = o(a, u, h, l, r[s + 13], 4, 681279174), u, h, r[s + 0], 11, -358537222), a, u, r[s + 3], 16, -722521979), l, a, r[s + 6], 23, 76029189), h = o(h, l = o(l, a = o(a, u, h, l, r[s + 9], 4, -640364487), u, h, r[s + 12], 11, -421815835), a, u, r[s + 15], 16, 530742520), l, a, r[s + 2], 23, -995338651), h = c(h, l = c(l, a = c(a, u, h, l, r[s + 0], 6, -198630844), u, h, r[s + 7], 10, 1126891415), a, u, r[s + 14], 15, -1416354905), l, a, r[s + 5], 21, -57434055), h = c(h, l = c(l, a = c(a, u, h, l, r[s + 12], 6, 1700485571), u, h, r[s + 3], 10, -1894986606), a, u, r[s + 10], 15, -1051523), l, a, r[s + 1], 21, -2054922799), h = c(h, l = c(l, a = c(a, u, h, l, r[s + 8], 6, 1873313359), u, h, r[s + 15], 10, -30611744), a, u, r[s + 6], 15, -1560198380), l, a, r[s + 13], 21, 1309151649), h = c(h, l = c(l, a = c(a, u, h, l, r[s + 4], 6, -145523070), u, h, r[s + 11], 10, -1120210379), a, u, r[s + 2], 15, 718787259), l, a, r[s + 9], 21, -343485551), 
            a = i(a, f), u = i(u, d), h = i(h, w), l = i(l, m);
        }
        return Array(a, u, h, l);
    }
    function t(r, t, e, n, o, c) {
        return i(function(r, t) {
            return r << t | r >>> 32 - t;
        }(i(i(t, r), i(n, c)), o), e);
    }
    function e(r, e, n, o, c, a, i) {
        return t(e & n | ~e & o, r, e, c, a, i);
    }
    function n(r, e, n, o, c, a, i) {
        return t(e & o | n & ~o, r, e, c, a, i);
    }
    function o(r, e, n, o, c, a, i) {
        return t(e ^ n ^ o, r, e, c, a, i);
    }
    function c(r, e, n, o, c, a, i) {
        return t(n ^ (e | ~o), r, e, c, a, i);
    }
    function a(t, e) {
        var n = u(t);
        n.length > 16 && (n = r(n, t.length * w));
        for (var o = Array(16), c = Array(16), a = 0; a < 16; a++) o[a] = 909522486 ^ n[a], 
        c[a] = 1549556828 ^ n[a];
        var i = r(o.concat(u(e)), 512 + e.length * w);
        return r(c.concat(i), 640);
    }
    function i(r, t) {
        var e = (65535 & r) + (65535 & t);
        return (r >> 16) + (t >> 16) + (e >> 16) << 16 | 65535 & e;
    }
    function u(r) {
        for (var t = Array(), e = (1 << w) - 1, n = 0; n < r.length * w; n += w) t[n >> 5] |= (r.charCodeAt(n / w) & e) << n % 32;
        return t;
    }
    function h(r) {
        for (var t = "", e = (1 << w) - 1, n = 0; n < 32 * r.length; n += w) t += String.fromCharCode(r[n >> 5] >>> n % 32 & e);
        return t;
    }
    function l(r) {
        for (var t = f ? "0123456789ABCDEF" : "0123456789abcdef", e = "", n = 0; n < 4 * r.length; n++) e += t.charAt(r[n >> 2] >> n % 4 * 8 + 4 & 15) + t.charAt(r[n >> 2] >> n % 4 * 8 & 15);
        return e;
    }
    function s(r) {
        for (var t = "", e = 0; e < 4 * r.length; e += 3) for (var n = (r[e >> 2] >> e % 4 * 8 & 255) << 16 | (r[e + 1 >> 2] >> (e + 1) % 4 * 8 & 255) << 8 | r[e + 2 >> 2] >> (e + 2) % 4 * 8 & 255, o = 0; o < 4; o++) 8 * e + 6 * o > 32 * r.length ? t += d : t += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(n >> 6 * (3 - o) & 63);
        return t;
    }
    var f = 0, d = "", w = 8;
    tywx.hex_md5 = function(t) {
        return l(r(u(t), t.length * w));
    }, tywx.b64_md5 = function(t) {
        return s(r(u(t), t.length * w));
    }, tywx.str_md5 = function(t) {
        return h(r(u(t), t.length * w));
    }, tywx.hex_hmac_md5 = function(r, t) {
        return l(a(r, t));
    }, tywx.b64_hmac_md5 = function(r, t) {
        return s(a(r, t));
    }, tywx.str_hmac_md5 = function(r, t) {
        return h(a(r, t));
    };
}();