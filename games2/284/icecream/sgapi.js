//SpilGames Init API

var spilapi = false;
var sponlogo = "";
var sponlink = "";
var morelink = "";
var sponlogoobj = null;
var splashobj = null;
var moreobj = null;
var crossobj = null;
var spilapiobj = null;

var SpilData = {
	id: '576742227280292364'
};

try {
	GameAPI.loadAPI(function(apiInstance) {
		spilapi = true;
		spilapiobj = apiInstance;
		//Spil Splash
		/*
		var splashData = apiInstance.Branding.getSplashScreen();
		if (splashData.show && splashData.action) {
			splashshow = true;
			splashobj = document.getElementById('spilgames-splash-screen');
			splashobj.addEventListener('click', splashData.action);
			splashobj.addEventListener('touchend', splashData.action);
		}
		*/
		//Spil Logo
		var logoData = apiInstance.Branding.getLogo();
		if (logoData.image) {
			sponlogo = logoData.image;
			sponlink = logoData.action;
			sponlogoobj = document.createElement('img');
			sponlogoobj.src = logoData.image;
			sponlogoobj.addEventListener('click', logoData.action);
			sponlogoobj.addEventListener('touchend', logoData.action);
			sponlogoobj.setAttribute('style','display: block; position: absolute; left: 0px; top: 10px; width: 30%; z-index: 10');
			document.body.appendChild(sponlogoobj);
		}
		//Spil Moregames
		var moreData = apiInstance.Branding.getLink('more_games');
		morelink = moreData.action;
			moreobj = document.createElement('img');
			moreobj.src = "icecream/but_more.png";
			moreobj.addEventListener('click', moreData.action);
			moreobj.addEventListener('touchend', moreData.action);
			moreobj.setAttribute('style','display: none; position: absolute; left: 0px; top: 0px; z-index: 10');
			document.body.appendChild(moreobj);
		//Spil Pause/Resume
		GameAPI.Game.on('pause', function() {
			gml_Script_gmcallback_pauseon();
		});
		GameAPI.Game.on('resume', function() {
			gml_Script_gmcallback_pauseoff();
		});
	}, SpilData);
} catch(e) {};