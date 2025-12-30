var YYGGames = {
    init : function (name,callback)
    {
        platform.getInstance().yadstartup(name,callback);
    },
    showReward: function (succ, fail, desc=null)
    {
        Plat.I.ShowVideo(succ,fail,desc)
    },
    showInterstitial: function (succ)
    {
     succ && succ();
    },
    audio:{
        get pause(){
            return  Laya.SoundManager.muted;
        },
        set pause(val) {
            console.log(6666,'audio _pause', val);
            Laya.SoundManager.muted = val;
        },
        playMusic: function (url)
        {
            Laya.SoundManager.playMusic(url)
        }
    },
    gameBanner:{
        _visible: false,
        get visible(){
            return  YYGGames.gameBanner._visible;
        },
        set visible(val) {
            console.log(6666,'gameBanner visible', val);
            YYGGames.gameBanner._visible = val;
        },
        set left(val) {

        },
        set right(val) {

        },
        set top(val) {

        },
        set bottom(val) {

        },
        set centerX(val) {

        },
        set centerY(val) {

        }
    },
    showTip : function (tips) {
      platform.getInstance().prompt(tips);
    },
    gameBox : {
        _visible: false,
        get visible(){
            return  YYGGames.gameBox._visible;
        },
        set visible(val) {
            console.log(6666,'gameBox visible', val);
            YYGGames.gameBox._visible = val;
        },
        set left(val) {

        },
        set right(val) {

        },
        set top(val) {

        },
        set bottom(val) {

        },
        set centerX(val) {

        },
        set centerY(val) {

        },
        game1:{
            _visible: false,
            get visible(){
                return  YYGGames.gameBox.game1._visible;
            },
            set visible(val) {
                console.log(6666,'YYGGames.gameBox.game1 visible', val);
                YYGGames.gameBox.game1._visible = val;
            },
            set left(val) {

            },
            set right(val) {

            },
            set top(val) {

            },
            set bottom(val) {

            },
            set centerX(val) {

            },
            set centerY(val) {

            },
        },
        game2:{
            _visible: false,
            get visible(){
                return  YYGGames.gameBox.game2._visible;
            },
            set visible(val) {
                console.log(6666,'YYGGames.gameBox.game2 visible', val);
                YYGGames.gameBox.game2._visible = val;
            },
            set left(val) {

            },
            set right(val) {

            },
            set top(val) {

            },
            set bottom(val) {

            },
            set centerX(val) {

            },
            set centerY(val) {

            },
        },
    },
    icon:{
        scale:function (scaleX,scaleY)
        {

        },
        _visible: false,
        get visible(){
            return  YYGGames.icon._visible;
        },
        set visible(val) {
            console.log(6666,'icon visible', val);
            YYGGames.icon._visible = val;
        },
        set left(val) {

        },
        set right(val) {

        },
        set top(val) {

        },
        set bottom(val) {

        },
        set centerX(val) {

        },
        set centerY(val) {

        }
    },
}