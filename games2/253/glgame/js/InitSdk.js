//*-------- Show Interstitial --------*//
var  userLang ;
 YaGames
    .init()
    .then(ysdk => {
        console.log('Yandex SDK initialized');
        window.ysdk = ysdk;
		
		userLang = ysdk.environment.i18n.tld;
        console.log('User language:', userLang);
    });