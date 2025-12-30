window.baseOrign = 0,
window.gameOrign = 2,
window.gameTurned = !1;
var rotateDeviceOverlay = document.getElementById("rotate-device")
  , gameFrame = document.getElementById("game_iframe")
  , resizeGameScreen = function() {
    var e = document.documentElement.clientWidth
      , t = document.documentElement.clientHeight;
    gameFrame.style.left = "0px",
    gameFrame.style.top = "0px",
    gameFrame.style.width = e + "px",
    gameFrame.style.height = t - 50 + "px"
}
  , rotateGameScreen = function(e) {
    var t = document.documentElement.clientWidth
      , n = document.documentElement.clientHeight
      , i = "";
    90 == e ? (i += "width:" + n + "px;",
    i += "height:" + t + "px;",
    i += "-webkit-transform: rotate(90deg); transform: rotate(90deg);",
    i += "-webkit-transform-origin: " + t / 2 + "px " + t / 2 + "px;",
    i += "transform-origin: " + t / 2 + "px " + t / 2 + "px;") : (i += "width:" + t + "px;",
    i += "height:" + n + "px;",
    i += "-webkit-transform: rotate(0); transform: rotate(0);",
    i += "-webkit-transform-origin: 0 0;",
    i += "transform-origin: 0 0;"),
    document.body.style.cssText = i
}
  , onResize = function() {
    document.documentElement.clientWidth,
    document.documentElement.clientHeight,
    window.innerWidth,
    window.innerHeight;
    resizeGameScreen()
};
window.addEventListener("resize", onResize);
