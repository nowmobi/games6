
function ShowAdsInter() {
    console.log("ShowAdsInter-------------------");



    ShowInterstitialAD({
        onClose: function (wasShown) {
            console.log('-------ShowAdsInter :was shown---------');
            MainGame.api_GameContinue(true);
        },
        onError: function (error) {
            console.log('--------ShowAdsInter :on Error----------');
            MainGame.api_GameContinue(true);
        }
    })

}

function ShowAdsInterStart() {
    console.log("ShowAdsInterStart-------------------");
    ShowInterstitialAD({
        onClose: function (wasShown) {
            console.log('-------ShowAdsInter :was shown---------');
            MainGame.api_GameContinue(true);
        },
        onError: function (error) {
            console.log('--------ShowAdsInter :on Error----------');
            MainGame.api_GameContinue(true);
        }
    })



}

//*-------- Show Rewarded --------*//


function ShowAdsReward() {

    console.log("ShowAdsReward-------------------");

    let reward = false;
    ShowRewardAD({
        onOpen: () => {
            console.log('Video ad open.');
        },
        onRewarded: () => {
            reward = true;
        },
        onClose: () => {
            console.log('Video ad closed.');
            MainGame.api_GameContinue(false, true);
            if (reward) {
                MainGame.getReward(true);
                console.log('Rewarded!');
            } else {
                MainGame.getReward(false);
                console.log('no rewarded');
            }
        },
        onError: (e) => {
            console.log('Error while open video ad:', e);
            MainGame.api_GameContinue(false, true);
            MainGame.getReward(false);

        }
    })
}

/*

function ShowRewarded(success, failure) {
          console.log("ShowRewarded-------------------");
    if (ysdk.environment.payload) {
        PromptDialog("Ads not available now, please try again later!");
        return;
    }
    var _muted = Laya.SoundManager.muted;
    Laya.SoundManager.muted = true;
    ysdk.adv.showRewardedVideo({
        callbacks: {
            onOpen: () => {
                window.rewardDone = false;
            },
            onRewarded: () => {
                window.rewardDone = true;
            },
            onClose: () => {
                if (window.rewardDone)
                    success();
                Laya.SoundManager.muted = _muted;
            },
            onError: (e) => {
                if (failure) failure();
                Laya.SoundManager.muted = _muted;
                PromptDialog("Ads not available now, please try again later!");
            }
        }
    })
}
*/


//*-------- Show Banner --------*//

/* function ShowAdsBanner()
 {

          ysdk.adv.getBannerAdvStatus().then(({ stickyAdvIsShowing , reason }) => {
           if (stickyAdvIsShowing) {
                  console.log('--------ShowAdsBanner : Banner Shown');
               // ad is shown             } else if(reason) {
               // ad isn't shown                 console.log(reason)
           } else {
               ysdk.adv.showBannerAdv()
           }
                                       })


   }*/

/* function ShowAdsBanner()
 {

          ysdk.adv.getBannerAdvStatus().then(({ stickyAdvIsShowing , reason }) => {
           if (stickyAdvIsShowing) {
                  console.log('BANNER');
               // ad is shown             } else if(reason) {
               // ad isn't shown                 console.log(reason)
           } else {
               ysdk.adv.showBannerAdv()
           }
                                       })


   }

*/


// call banner and Inter start
// setTimeout(function () {

//     ShowAdsInterStart();
// }, 5000);

/*
function PromptDialog(msg, duration = 3e3) {
    if (!this.prompt_) {
        this.prompt_ = document.createElement('div');
        this.prompt_.style.cssText = "font-family:siyuan;max-width:80%;min-width:320px;padding:10px 10px 10px 10px;min-height:40px;color: rgb(255, 255, 255);line-height: 20px;text-align:center;border-radius: 4px;position: fixed;top: 40%;left: 50%;transform: translate(-50%, -50%);z-index: 999999;background: rgba(0, 0, 0,.7);font-size: 16px;";
        document.body.appendChild(this.prompt_);
    }
    this.prompt_.innerHTML = msg;
    duration = isNaN(duration) ? 3e3 : duration;
    this.prompt_.style.display = "inline";
    this.prompt_.style.opacity = '1';
    setTimeout(function() {
        var d = 0.5;
        this.prompt_.style.webkitTransition = '-webkit-transform ' + d + 's ease-in, opacity ' + d + 's ease-in';
        this.prompt_.style.opacity = '0';
        this.prompt_.style.display = "none";
    }.bind(this), duration);
}

*/