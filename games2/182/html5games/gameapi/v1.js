(function(d, params, env, apiHost, hosts) {
	// set params
	(function(regex, qs, tokens) {
		regex = /[?&]?([^=]+)=([^&]*)/g;
		qs = d.location && d.location.search ? d.location.search.split('+').join(' ') : '';

		while ((tokens = regex.exec(qs))) {
			params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
		}
	})();

	// if (typeof fg_api == "function" && typeof famobi != "undefined" && famobi instanceof fg_api) {
	// 	// famobi api already loaded
	// 	return false;G:\OkGames\famobi\alien-attack\v010\gameapi\script\76cf5b34-fba0-456f-bab2-cd5b2ac50af9\48fd668a-7711-4ef7-9b1d-723b3af47503.html
	// }gameapi\script\552a182d-4fa6-4d1b-bbd0-28d5b4a07743
 
		env = params.fg_env || 'prod';
		apiHost = hosts[env];
		// load script
		(function (d, url, fgJS, firstJS) {
			fgJS = d.createElement('script');
			firstJS = d.getElementsByTagName('script')[0];
			fgJS.src = url+"?_location="+encodeURIComponent(d.location.href.split('#')[0]);
			firstJS.parentNode.insertBefore(fgJS, firstJS);
		})(d, './gameapi/script/76cf5b34-fba0-456f-bab2-cd5b2ac50af9/48fd668a-7711-4ef7-9b1d-723b3af47503.js')
	
})(document, {}, '', '', {
	'dev': 'api.dev', 
	'staging': 'api.staging.gc',
	'staging.aws': 'api.staging.aws',
	'staging.gc': 'api.staging.gc',
	'prod': 'api'
});