// SilenGames HTML5 Extension
// Author: Vitaliy Sidorov
// Copyright: SilenGames 2014

sg_guid = "";
function sg_init(guid) {
	try {
		sg_guid = guid;
	} catch(e) {};
}

function sg_spil_logo_show(name,xpos,ypos,siz) {
	if (spilapi) {
		var curobj = null;
		switch (name) {
			case "logo": curobj = sponlogoobj; break;
			case "more": curobj = moreobj; break;
			case "cross": curobj = crossobj; break;
		}
		if (curobj != null) {
			curobj.setAttribute('style','display: block; position: absolute; left: '+xpos+'px; top: '+ypos+'px; width:'+siz+'px; z-index: 1');
		}
	}
}

function sg_spil_logo_hide(name) {
	if (spilapi) {
		var curobj = null;
		switch (name) {
			case "logo": curobj = sponlogoobj; break;
			case "more": curobj = moreobj; break;
		}
		if (curobj != null) {
			curobj.style.display = "none";
		}
	}
}

function sg_spil_ads() {
	if (spilapi) {
		GameAPI.GameBreak.request(gml_Script_gmcallback_spiladon, gml_Script_gmcallback_spiladoff);
	}
}

function sg_spil_splash_show() {
	if (spilapi) {
		spilapiobj.Branding.displaySplashScreen(gml_Script_gmcallback_gamestart);
	} else {
		gml_Script_gmcallback_gamestart();
	}
	if (loadingtextobj) {
		document.body.removeChild(loadingtextobj);
	}
	if (loadingobj) {
		document.body.removeChild(loadingobj);
	}
	if (loadbarbackobj) {
		document.body.removeChild(loadbarbackobj);
	}
	if (loadintervalid) {
		clearInterval(loadintervalid);
	}
	/*
	if (splashobj != null) {
		splashobj.style.display = "block";
	}
	*/
}

sg_visible_status = "";
sg_visible_event = "";
try {
	if (typeof document.hidden !== "undefined") {
		sg_visible_status = "hidden";
		sg_visible_event = "visibilitychange";
	} else if (typeof document.webkitHidden !== "undefined") {
		sg_visible_status = "webkitHidden";
		sg_visible_event = "webkitvisibilitychange";
	} else if (typeof document.msHidden !== "undefined") {
		sg_visible_status = "msHidden";
		sg_visible_event = "msvisibilitychange";
	} else if (typeof document.mozHidden !== "undefined") {
		sg_visible_status = "mozHidden";
		sg_visible_event = "mozvisibilitychange";
	}
} catch(e) {};

if (sg_visible_status != "") {
	document.addEventListener(sg_visible_event, sg_get_visibility, false);
}

function sg_get_visibility() {
	try {
		if (document[sg_visible_status]) {
			gml_Script_gmcallback_focusoff();
		} else {
			gml_Script_gmcallback_focuson();
		}
	} catch(e) {};
}


function sg_get_language() {
	try {
		var lang = window.navigator.userLanguage || window.navigator.language;
		return lang.substring(0,2).toLowerCase();
	} catch(e) {
		return "en";
	};
}

sg_unlock_audio = null;
sg_play_audio = null;
sg_is_winphone = false;

function sg_unlock_music(num, win) {
	sg_unlock_audio = document.getElementsByTagName('audio')[num];
	if (win) {
		sg_is_winphone = true;
	}
}

function sg_play_music() {
	try {
		if (sg_play_audio != null) {
			sg_stop_music();
		}
		sg_play_audio = sg_unlock_audio;
		sg_play_audio.loop = true;
		sg_play_audio.addEventListener("ended", sg_play_music, false);
		if (sg_is_winphone) {
			sg_play_audio.play();
		} else {
			window.addEventListener("touchend", sg_unlock_music_event, false);
		}
	} catch(e) {};
}

function sg_unlock_music_event() {
	try {
		sg_play_audio.play();
		window.removeEventListener("touchend", sg_unlock_music_event, false);
	} catch(e) {};
}

function sg_stop_music() {
	try {
		sg_play_audio.pause();
		sg_play_audio.removeEventListener("ended", sg_play_music, false);
	} catch(e) {};
}

function sg_unlock_webaudio() {
	try {
		window.addEventListener("touchstart", sg_unlock_webaudio_event, false);
	} catch(e) {};
}

function sg_unlock_webaudio_event(event) {
	try {
		var buffer = g_WebAudioContext.createBuffer(1, 1, 22050);
		var source = g_WebAudioContext.createBufferSource();
		source.buffer = buffer;
		source.connect(g_WebAudioContext.destination);
		source.noteOn(0);
		window.removeEventListener("touchstart", sg_unlock_webaudio_event, false);
	} catch(e) {};
}

maindivobj = document.getElementById('gm4html5_div_id');
function sg_no_bar() {
	if (!window.location.hash) {
		maindivobj.style.height = (window.outerHeight + 200) + 'px';
		setTimeout(function() {window.scrollTo(0,1);}, 50);
	}
}

function test_browser_storage() {
	try {
		return 'localStorage' in window && window['localStorage'] !== null;
	} catch (e) {
		return false;
	}
}

sg_save_ok = test_browser_storage();
function sg_save(name, numb) {
	try {
		var key = sg_guid + name;
		if (sg_save_ok) {
			window.localStorage.setItem(key, numb);
		} else {
			var date = new Date;
			date.setDate(date.getDate() + 999);
			document.cookie = key +"="+ numb +"; path=/; expires="+ date.toUTCString();
		}
	} catch(e) {};
}

function sg_load(name, def) {
	try {
		var key = sg_guid + name;
		if (sg_save_ok) {
			var done = window.localStorage.getItem(key);
		} else {
			var matches = document.cookie.match(new RegExp(
			  "(?:^|; )" + key.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
			))
			var done = matches ? decodeURIComponent(matches[1]) : undefined;
		}
		if (done!=null && done!="") {
			return parseInt(done);
		} else {
			return def;
		}
	} catch(e) {
		return def;
	};
}

function sg_orient(ok) {
	try {
		if (ok) {
			orientobj.setAttribute('style','display: block');
		} else {
			orientobj.setAttribute('style','display: none');
		}
	} catch(e) {};
}

function sg_test_orient() {
	try {
		if (!viewporter || !viewporter.ACTIVE) {
		alert(0)
			return false;
		} else {
		alert(1)
			return true;
		}
	} catch(e) {
	alert("not try")
		return true;
	};
}

sg_load_perc = 0;
function sg_loadingbar(_graphics, _width, _height, _total, _current, _loadingscreen) {
	var room_width  = splash_w;
	var room_height = splash_h;
	var ratio = (room_height/room_width);
	if (typeof(window.innerWidth)=='number') {
		browser_width = window.innerWidth;
		browser_height = window.innerHeight;
	} else if (document.documentElement&&document.documentElement.clientWidth) {
		browser_width = document.documentElement.clientWidth;
		browser_height = document.documentElement.clientHeight;
	} else if (document.body&&document.body.clientWidth) {
		browser_width = document.body.clientWidth;
		browser_height = document.body.clientHeight;
	}
	var multi = (browser_height / room_height);
	var new_width = (room_width * multi);
	var new_height = browser_height;
	if (new_width > browser_width) {
		multi = (browser_width / room_width);
		new_width = (room_width * multi);
		new_height = (room_height * multi);
	}
	var load_perc = _current/_total*100;
	if (load_perc < 100) {
		if (sg_load_perc < load_perc) {
			sg_load_perc+=1;
		}
	} else {
		sg_load_perc = 100;
	}
	var perc = bar_img_w/100*sg_load_perc;
	var bar_x = browser_width/2-new_width/2+bar_img_x*multi;
	var bar_y = browser_height/2-new_height/2+bar_img_y*multi;
	var bar_w = bar_img_w*multi;
	var bar_w2 = perc*multi;
	var bar_h = bar_img_h*multi;
	if (loadbarbackobj) {
		loadbarbackobj.setAttribute('style','left: '+bar_x+'px; top: '+bar_y+'px; width:'+bar_w+'px; height:'+bar_h+'px; background-size: '+(bar_img_w*multi)+'px');
	}
	if (loadbarobj) {
		loadbarobj.setAttribute('style','left: '+bar_x+'px; top: '+bar_y+'px; width:'+bar_w2+'px; height:'+bar_h+'px; background-size: '+(bar_img_w*multi)+'px');
	}
}