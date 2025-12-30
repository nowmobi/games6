function postMessageToIframe(e) {
    game_iframe.contentWindow.postMessage(JSON.stringify(e), "*")
}
function GASend(e, a) {
    window.gtag(e, appName, a)
}
function ShowRewardAD(e) {
    var timeout = setTimeout(() => {
        postMessageToIframe({
            func: "reward_AdBreakDoneCallback",
            param: "timeout"
        })
    }, 5000);
    window.h5sdk.athenaSend("showReward", "", ""),
        window.h5sdk.adBreak({
            type: "reward",
            name: appName + "+" + e,
            beforeAd: () => {
                clearTimeout(timeout);
                console.info("reward_beforeAd"),
                    postMessageToIframe({
                        func: "reward_BeforeAdCallback"
                    })
            }
            ,
            afterAd: () => {
                clearTimeout(timeout);
                console.info("reward_afterAd"),
                    postMessageToIframe({
                        func: "reward_AfterAdCallback"
                    })
            }
            ,
            beforeReward: e => {
                console.info("reward_beforeReward"),
                    postMessageToIframe({
                        func: "reward_BeforeRewardCallback"
                    }),
                    e()
            }
            ,
            adDismissed: () => {
                clearTimeout(timeout);
                console.info("reward_adDismissed"),
                    postMessageToIframe({
                        func: "reward_AdDismissedCallback"
                    })
            }
            ,
            adViewed: () => {
                clearTimeout(timeout);
                console.info("reward_adViewed"),
                    postMessageToIframe({
                        func: "reward_AdViewedCallback"
                    })
            }
            ,
            adBreakDone: e => {
                clearTimeout(timeout);
                console.info("reward_adbreakdone", e.breakStatus),
                    postMessageToIframe({
                        func: "reward_AdBreakDoneCallback",
                        param: e.breakStatus
                    })
            }
        })
}

var showInterTimes = 0;
function ShowInterstitialAD(e, a) {
    if (showInterTimes++ < 2) {
        postMessageToIframe({
            func: "AdBreakDoneCallback",
            param: "cancel"
        })
        return;
    }
    var timeout = setTimeout(() => {
        postMessageToIframe({
            func: "AdBreakDoneCallback",
            param: "timeout"
        })
    }, 5000);
    window.h5sdk.athenaSend("showInterstitial", "", ""),
        window.h5sdk.adBreak({
            type: e,
            name: appName + "+" + a,
            beforeAd: () => {
                clearTimeout(timeout);
                console.info("beforeAd"),
                    postMessageToIframe({
                        func: "BeforeAdCallback"
                    })
            }
            ,
            afterAd: () => {
                clearTimeout(timeout);
                console.info("afterAd"),
                    postMessageToIframe({
                        func: "AfterAdCallback"
                    })
            }
            ,
            adBreakDone: e => {
                clearTimeout(timeout);
                console.info("adbreakdone", e.breakStatus),
                    postMessageToIframe({
                        func: "AdBreakDoneCallback",
                        param: e.breakStatus
                    })
            }
        })
}
var isfirst = true;
function onGameReadyForPlay() {
    if (!isfirst) return;
    isfirst = false;
    console.log("onGameReadyForPlay");

}
function doFullScreen() {
    var e = document.documentElement;
    e.requestFullscreen ? e.requestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullScreen ? e.webkitRequestFullScreen() : elem.msRequestFullscreen && elem.msRequestFullscreen()
}
window.addEventListener("message", e => {
    try {
        var a = JSON.parse(e.data);
        switch (a.code) {
            case 0:
                GASend(a.data.event, a.data.event_param);
                break;
            case 1:
                ShowInterstitialAD(a.data.type, a.data.name);
                break;
            case 2:
                ShowRewardAD(a.data.name);
                break;
            case 3:
                onGameReadyForPlay();
                break;
            case 4:
                doFullScreen()
        }
    } catch (e) {
        console.info(e)
    }
}
);
