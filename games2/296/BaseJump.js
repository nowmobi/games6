(function () { "use strict";
var $hxClasses = {},$estr = function() { return js.Boot.__string_rec(this,''); };
function $extend(from, fields) {
	function inherit() {}; inherit.prototype = from; var proto = new inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var ApplicationMain = function() { }
$hxClasses["ApplicationMain"] = ApplicationMain;
ApplicationMain.__name__ = ["ApplicationMain"];
ApplicationMain.main = function() {
	ApplicationMain.completed = 0;
	ApplicationMain.loaders = new haxe.ds.StringMap();
	ApplicationMain.urlLoaders = new haxe.ds.StringMap();
	ApplicationMain.total = 0;
	flash.Lib.get_current().loaderInfo = flash.display.LoaderInfo.create(null);
	try {
		if(Reflect.hasField(js.Browser.window,"winParameters")) flash.Lib.get_current().loaderInfo.parameters = (Reflect.field(js.Browser.window,"winParameters"))();
		flash.Lib.get_current().get_stage().loaderInfo = flash.Lib.get_current().loaderInfo;
	} catch( e ) {
	}
	ApplicationMain.preloader = new Preloader();
	flash.Lib.get_current().addChild(ApplicationMain.preloader);
	ApplicationMain.preloader.onInit();
	var loader = new flash.display.Loader();
	ApplicationMain.loaders.set("img/Background4.jpg",loader);
	ApplicationMain.total++;
	var loader1 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/bronzeCup.png",loader1);
	ApplicationMain.total++;
	var loader2 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/button_credits.png",loader2);
	ApplicationMain.total++;
	var loader3 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/button_help.png",loader3);
	ApplicationMain.total++;
	var loader4 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/button_menu.png",loader4);
	ApplicationMain.total++;
	var loader5 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/button_moregames.png",loader5);
	ApplicationMain.total++;
	var loader6 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/button_play.png",loader6);
	ApplicationMain.total++;
	var loader7 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/button_play1.png",loader7);
	ApplicationMain.total++;
	var loader8 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/button_play1Hard.png",loader8);
	ApplicationMain.total++;
	var loader9 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/button_play2.png",loader9);
	ApplicationMain.total++;
	var loader10 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/button_play2Hard.png",loader10);
	ApplicationMain.total++;
	var loader11 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/button_replay.png",loader11);
	ApplicationMain.total++;
	var loader12 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/button_score1.png",loader12);
	ApplicationMain.total++;
	var loader13 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/button_sound.png",loader13);
	ApplicationMain.total++;
	var loader14 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/button_soundX.png",loader14);
	ApplicationMain.total++;
	var loader15 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/creditsWindow.jpg",loader15);
	ApplicationMain.total++;
	var loader16 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/explosion/explosion1.png",loader16);
	ApplicationMain.total++;
	var loader17 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/explosion/explosion2.png",loader17);
	ApplicationMain.total++;
	var loader18 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/explosion/explosion3.png",loader18);
	ApplicationMain.total++;
	var loader19 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/explosion/explosion4.png",loader19);
	ApplicationMain.total++;
	var loader20 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/explosion/explosion5.png",loader20);
	ApplicationMain.total++;
	var loader21 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/Fon.jpg",loader21);
	ApplicationMain.total++;
	var loader22 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/Go.png",loader22);
	ApplicationMain.total++;
	var loader23 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/goldCup.png",loader23);
	ApplicationMain.total++;
	var loader24 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/help_saddle.jpg",loader24);
	ApplicationMain.total++;
	var loader25 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/horse1.png",loader25);
	ApplicationMain.total++;
	var loader26 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/horse2.png",loader26);
	ApplicationMain.total++;
	var loader27 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/horse3.png",loader27);
	ApplicationMain.total++;
	var loader28 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/horse4.png",loader28);
	ApplicationMain.total++;
	var loader29 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/horse5.png",loader29);
	ApplicationMain.total++;
	var loader30 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/horse6.png",loader30);
	ApplicationMain.total++;
	var loader31 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/horse7.png",loader31);
	ApplicationMain.total++;
	var loader32 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/horse8.png",loader32);
	ApplicationMain.total++;
	var loader33 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/horse9.png",loader33);
	ApplicationMain.total++;
	var loader34 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/icon_persLight.png",loader34);
	ApplicationMain.total++;
	var loader35 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/icon_persSelection.png",loader35);
	ApplicationMain.total++;
	var loader36 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/kickAnim.png",loader36);
	ApplicationMain.total++;
	var loader37 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/lifesContur.png",loader37);
	ApplicationMain.total++;
	var loader38 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/lifesFill.png",loader38);
	ApplicationMain.total++;
	var loader39 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/loadContur.png",loader39);
	ApplicationMain.total++;
	var loader40 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/loadFill.png",loader40);
	ApplicationMain.total++;
	var loader41 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/logo.png",loader41);
	ApplicationMain.total++;
	var loader42 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/MainFontNumeric.png",loader42);
	ApplicationMain.total++;
	var loader43 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/MainFontNumericLittle.png",loader43);
	ApplicationMain.total++;
	var loader44 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/medali.png",loader44);
	ApplicationMain.total++;
	var loader45 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/mrg_logo.png",loader45);
	ApplicationMain.total++;
	var loader46 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/nextRoundBtn.png",loader46);
	ApplicationMain.total++;
	var loader47 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/Num2.png",loader47);
	ApplicationMain.total++;
	var loader48 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/pause.png",loader48);
	ApplicationMain.total++;
	var loader49 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/pedestals_switch_btn.png",loader49);
	ApplicationMain.total++;
	var loader50 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/Pers/p1.png",loader50);
	ApplicationMain.total++;
	var loader51 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/Pers/p2.png",loader51);
	ApplicationMain.total++;
	var loader52 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/Pers/p3.png",loader52);
	ApplicationMain.total++;
	var loader53 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/Pers/p4.png",loader53);
	ApplicationMain.total++;
	var loader54 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/Pers/p5.png",loader54);
	ApplicationMain.total++;
	var loader55 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/Pers/p6.png",loader55);
	ApplicationMain.total++;
	var loader56 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/Pers/p7.png",loader56);
	ApplicationMain.total++;
	var loader57 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/Pers/p8.png",loader57);
	ApplicationMain.total++;
	var loader58 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/Pers/p9.png",loader58);
	ApplicationMain.total++;
	var loader59 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/places_desk.png",loader59);
	ApplicationMain.total++;
	var loader60 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/race1.png",loader60);
	ApplicationMain.total++;
	var loader61 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/race2.png",loader61);
	ApplicationMain.total++;
	var loader62 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/race3.png",loader62);
	ApplicationMain.total++;
	var loader63 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/race4.png",loader63);
	ApplicationMain.total++;
	var loader64 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/race5.png",loader64);
	ApplicationMain.total++;
	var loader65 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/race6.png",loader65);
	ApplicationMain.total++;
	var loader66 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/race7.png",loader66);
	ApplicationMain.total++;
	var loader67 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/race8.png",loader67);
	ApplicationMain.total++;
	var loader68 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/race9.png",loader68);
	ApplicationMain.total++;
	var loader69 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/raceHorse1.png",loader69);
	ApplicationMain.total++;
	var loader70 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/raceHorse2.png",loader70);
	ApplicationMain.total++;
	var loader71 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/raceHorse3.png",loader71);
	ApplicationMain.total++;
	var loader72 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/raceHorse4.png",loader72);
	ApplicationMain.total++;
	var loader73 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/raceHorse5.png",loader73);
	ApplicationMain.total++;
	var loader74 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/raceHorse6.png",loader74);
	ApplicationMain.total++;
	var loader75 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/raceHorse7.png",loader75);
	ApplicationMain.total++;
	var loader76 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/raceHorse8.png",loader76);
	ApplicationMain.total++;
	var loader77 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/raceHorse9.png",loader77);
	ApplicationMain.total++;
	var loader78 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/raceSelectPedestal.png",loader78);
	ApplicationMain.total++;
	var loader79 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/race_select_btn.png",loader79);
	ApplicationMain.total++;
	var loader80 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/Ready.png",loader80);
	ApplicationMain.total++;
	var loader81 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/Rotate_to_play.jpg",loader81);
	ApplicationMain.total++;
	var loader82 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/rulesTxt.png",loader82);
	ApplicationMain.total++;
	var loader83 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/Set.png",loader83);
	ApplicationMain.total++;
	var loader84 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/shaddow.png",loader84);
	ApplicationMain.total++;
	var loader85 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/ShadowOvr.png",loader85);
	ApplicationMain.total++;
	var loader86 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/silverCup.png",loader86);
	ApplicationMain.total++;
	var loader87 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/SunLight.png",loader87);
	ApplicationMain.total++;
	var loader88 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/tapImg1.png",loader88);
	ApplicationMain.total++;
	var loader89 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/tapImg2.png",loader89);
	ApplicationMain.total++;
	var loader90 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/tapToStart.png",loader90);
	ApplicationMain.total++;
	var loader91 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/tournament_places.png",loader91);
	ApplicationMain.total++;
	var loader92 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/YouFailed.png",loader92);
	ApplicationMain.total++;
	var loader93 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/YouWon.png",loader93);
	ApplicationMain.total++;
	var resourcePrefix = "__ASSET__:bitmap_";
	var _g = 0, _g1 = haxe.Resource.listNames();
	while(_g < _g1.length) {
		var resourceName = _g1[_g];
		++_g;
		if(StringTools.startsWith(resourceName,resourcePrefix)) {
			var type = Type.resolveClass(StringTools.replace(resourceName.substring(resourcePrefix.length),"_","."));
			if(type != null) {
				ApplicationMain.total++;
				var instance = Type.createInstance(type,[0,0,true,16777215,ApplicationMain.bitmapClass_onComplete]);
			}
		}
	}
	if(ApplicationMain.total == 0) ApplicationMain.begin(); else {
		var $it0 = ApplicationMain.loaders.keys();
		while( $it0.hasNext() ) {
			var path = $it0.next();
			var loader94 = ApplicationMain.loaders.get(path);
			loader94.contentLoaderInfo.addEventListener("complete",ApplicationMain.loader_onComplete);
			loader94.load(new flash.net.URLRequest(path));
		}
		var $it1 = ApplicationMain.urlLoaders.keys();
		while( $it1.hasNext() ) {
			var path = $it1.next();
			var urlLoader = ApplicationMain.urlLoaders.get(path);
			urlLoader.addEventListener("complete",ApplicationMain.loader_onComplete);
			urlLoader.load(new flash.net.URLRequest(path));
		}
	}
}
ApplicationMain.begin = function() {
	ApplicationMain.preloader.addEventListener(flash.events.Event.COMPLETE,ApplicationMain.preloader_onComplete);
	ApplicationMain.preloader.onLoaded();
}
ApplicationMain.bitmapClass_onComplete = function(instance) {
	ApplicationMain.completed++;
	var classType = Type.getClass(instance);
	classType.preload = instance;
	if(ApplicationMain.completed == ApplicationMain.total) ApplicationMain.begin();
}
ApplicationMain.loader_onComplete = function(event) {
	ApplicationMain.completed++;
	ApplicationMain.preloader.onUpdate(ApplicationMain.completed,ApplicationMain.total);
	if(ApplicationMain.completed == ApplicationMain.total) ApplicationMain.begin();
}
ApplicationMain.preloader_onComplete = function(event) {
	ApplicationMain.preloader.removeEventListener(flash.events.Event.COMPLETE,ApplicationMain.preloader_onComplete);
	flash.Lib.get_current().removeChild(ApplicationMain.preloader);
	ApplicationMain.preloader = null;
	if(Reflect.field(Main,"main") == null) {
		var mainDisplayObj = Type.createInstance(DocumentClass,[]);
		if(js.Boot.__instanceof(mainDisplayObj,flash.display.DisplayObject)) flash.Lib.get_current().addChild(mainDisplayObj);
	} else Reflect.field(Main,"main").apply(Main,[]);
}
var flash = {}
flash.events = {}
flash.events.IEventDispatcher = function() { }
$hxClasses["flash.events.IEventDispatcher"] = flash.events.IEventDispatcher;
flash.events.IEventDispatcher.__name__ = ["flash","events","IEventDispatcher"];
flash.events.IEventDispatcher.prototype = {
	willTrigger: null
	,removeEventListener: null
	,hasEventListener: null
	,dispatchEvent: null
	,addEventListener: null
	,__class__: flash.events.IEventDispatcher
}
flash.events.EventDispatcher = function(target) {
	if(target != null) this.__target = target; else this.__target = this;
	this.__eventMap = [];
};
$hxClasses["flash.events.EventDispatcher"] = flash.events.EventDispatcher;
flash.events.EventDispatcher.__name__ = ["flash","events","EventDispatcher"];
flash.events.EventDispatcher.__interfaces__ = [flash.events.IEventDispatcher];
flash.events.EventDispatcher.compareListeners = function(l1,l2) {
	return l1.mPriority == l2.mPriority?0:l1.mPriority > l2.mPriority?-1:1;
}
flash.events.EventDispatcher.prototype = {
	willTrigger: function(type) {
		return this.hasEventListener(type);
	}
	,toString: function() {
		return "[ " + this.__name__ + " ]";
	}
	,setList: function(type,list) {
		this.__eventMap[type] = list;
	}
	,removeEventListener: function(type,listener,inCapture) {
		if(inCapture == null) inCapture = false;
		if(!this.existList(type)) return;
		var list = this.getList(type);
		var capture = inCapture == null?false:inCapture;
		var _g1 = 0, _g = list.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(list[i].Is(listener,capture)) {
				list.splice(i,1);
				return;
			}
		}
	}
	,hasEventListener: function(type) {
		return this.existList(type);
	}
	,getList: function(type) {
		return this.__eventMap[type];
	}
	,existList: function(type) {
		return this.__eventMap != null && this.__eventMap[type] != undefined;
	}
	,dispatchEvent: function(event) {
		if(event.target == null) event.target = this.__target;
		var capture = event.eventPhase == flash.events.EventPhase.CAPTURING_PHASE;
		if(this.existList(event.type)) {
			var list = this.getList(event.type);
			var idx = 0;
			while(idx < list.length) {
				var listener = list[idx];
				if(listener.mUseCapture == capture) {
					listener.dispatchEvent(event);
					if(event.__getIsCancelledNow()) return true;
				}
				if(idx < list.length && listener != list[idx]) {
				} else idx++;
			}
			return true;
		}
		return false;
	}
	,addEventListener: function(type,inListener,useCapture,inPriority,useWeakReference) {
		if(useWeakReference == null) useWeakReference = false;
		if(inPriority == null) inPriority = 0;
		if(useCapture == null) useCapture = false;
		var capture = useCapture == null?false:useCapture;
		var priority = inPriority == null?0:inPriority;
		var list = this.getList(type);
		if(!this.existList(type)) {
			list = [];
			this.setList(type,list);
		}
		list.push(new flash.events.Listener(inListener,capture,priority));
		list.sort(flash.events.EventDispatcher.compareListeners);
	}
	,__eventMap: null
	,__target: null
	,__class__: flash.events.EventDispatcher
}
flash.display = {}
flash.display.IBitmapDrawable = function() { }
$hxClasses["flash.display.IBitmapDrawable"] = flash.display.IBitmapDrawable;
flash.display.IBitmapDrawable.__name__ = ["flash","display","IBitmapDrawable"];
flash.display.IBitmapDrawable.prototype = {
	drawToSurface: null
	,__class__: flash.display.IBitmapDrawable
}
flash.display.DisplayObject = function() {
	flash.events.EventDispatcher.call(this,null);
	this.___id = flash.utils.Uuid.uuid();
	this.set_parent(null);
	this.set_transform(new flash.geom.Transform(this));
	this.__x = 0.0;
	this.__y = 0.0;
	this.__scaleX = 1.0;
	this.__scaleY = 1.0;
	this.__rotation = 0.0;
	this.__width = 0.0;
	this.__height = 0.0;
	this.set_visible(true);
	this.alpha = 1.0;
	this.__filters = new Array();
	this.__boundsRect = new flash.geom.Rectangle();
	this.__scrollRect = null;
	this.__mask = null;
	this.__maskingObj = null;
	this.set___combinedVisible(this.get_visible());
};
$hxClasses["flash.display.DisplayObject"] = flash.display.DisplayObject;
flash.display.DisplayObject.__name__ = ["flash","display","DisplayObject"];
flash.display.DisplayObject.__interfaces__ = [flash.display.IBitmapDrawable];
flash.display.DisplayObject.__super__ = flash.events.EventDispatcher;
flash.display.DisplayObject.prototype = $extend(flash.events.EventDispatcher.prototype,{
	__srUpdateDivs: function() {
		var gfx = this.__getGraphics();
		if(gfx == null || this.parent == null) return;
		if(this.__scrollRect == null) {
			if(this._srAxes != null && gfx.__surface.parentNode == this._srAxes && this._srWindow.parentNode != null) this._srWindow.parentNode.replaceChild(gfx.__surface,this._srWindow);
			return;
		}
		if(this._srWindow == null) {
			this._srWindow = js.Browser.document.createElement("div");
			this._srAxes = js.Browser.document.createElement("div");
			this._srWindow.style.setProperty("position","absolute","");
			this._srWindow.style.setProperty("left","0px","");
			this._srWindow.style.setProperty("top","0px","");
			this._srWindow.style.setProperty("width","0px","");
			this._srWindow.style.setProperty("height","0px","");
			this._srWindow.style.setProperty("overflow","hidden","");
			this._srAxes.style.setProperty("position","absolute","");
			this._srAxes.style.setProperty("left","0px","");
			this._srAxes.style.setProperty("top","0px","");
			this._srWindow.appendChild(this._srAxes);
		}
		var pnt = this.parent.localToGlobal(new flash.geom.Point(this.get_x(),this.get_y()));
		this._srWindow.style.left = pnt.x + "px";
		this._srWindow.style.top = pnt.y + "px";
		this._srWindow.style.width = this.__scrollRect.width + "px";
		this._srWindow.style.height = this.__scrollRect.height + "px";
		this._srAxes.style.left = -pnt.x - this.__scrollRect.x + "px";
		this._srAxes.style.top = -pnt.y - this.__scrollRect.y + "px";
		if(gfx.__surface.parentNode != this._srAxes && gfx.__surface.parentNode != null) {
			gfx.__surface.parentNode.insertBefore(this._srWindow,gfx.__surface);
			flash.Lib.__removeSurface(gfx.__surface);
			this._srAxes.appendChild(gfx.__surface);
		}
	}
	,__getSrWindow: function() {
		return this._srWindow;
	}
	,set_width: function(inValue) {
		if(this.get__boundsInvalid()) this.validateBounds();
		var w = this.__boundsRect.width;
		if(this.__scaleX * w != inValue) {
			if(w == 0) {
				this.__scaleX = 1;
				this.__invalidateMatrix(true);
				this.___renderFlags |= 64;
				if(this.parent != null) this.parent.___renderFlags |= 64;
				w = this.__boundsRect.width;
			}
			if(w <= 0) return 0;
			this.__scaleX = inValue / w;
			this.__invalidateMatrix(true);
			this.___renderFlags |= 64;
			if(this.parent != null) this.parent.___renderFlags |= 64;
		}
		return inValue;
	}
	,get_width: function() {
		if(this.get__boundsInvalid()) this.validateBounds();
		return this.__width;
	}
	,set_y: function(inValue) {
		if(this.__y != inValue) {
			this.__y = inValue;
			this.__invalidateMatrix(true);
			if(this.parent != null) this.parent.__invalidateBounds();
		}
		return inValue;
	}
	,get_y: function() {
		return this.__y;
	}
	,set_x: function(inValue) {
		if(this.__x != inValue) {
			this.__x = inValue;
			this.__invalidateMatrix(true);
			if(this.parent != null) this.parent.__invalidateBounds();
		}
		return inValue;
	}
	,get_x: function() {
		return this.__x;
	}
	,set_visible: function(inValue) {
		if(this.__visible != inValue) {
			this.__visible = inValue;
			this.setSurfaceVisible(inValue);
		}
		return this.__visible;
	}
	,get_visible: function() {
		return this.__visible;
	}
	,set_transform: function(inValue) {
		this.transform = inValue;
		this.__x = this.transform.get_matrix().tx;
		this.__y = this.transform.get_matrix().ty;
		this.__invalidateMatrix(true);
		return inValue;
	}
	,get__topmostSurface: function() {
		var gfx = this.__getGraphics();
		if(gfx != null) return gfx.__surface;
		return null;
	}
	,get_stage: function() {
		var gfx = this.__getGraphics();
		if(gfx != null) return flash.Lib.__getStage();
		return null;
	}
	,set_scrollRect: function(inValue) {
		this.__scrollRect = inValue;
		this.__srUpdateDivs();
		return inValue;
	}
	,get_scrollRect: function() {
		if(this.__scrollRect == null) return null;
		return this.__scrollRect.clone();
	}
	,set_scaleY: function(inValue) {
		if(this.__scaleY != inValue) {
			this.__scaleY = inValue;
			this.__invalidateMatrix(true);
			this.___renderFlags |= 64;
			if(this.parent != null) this.parent.___renderFlags |= 64;
		}
		return inValue;
	}
	,get_scaleY: function() {
		return this.__scaleY;
	}
	,set_scaleX: function(inValue) {
		if(this.__scaleX != inValue) {
			this.__scaleX = inValue;
			this.__invalidateMatrix(true);
			this.___renderFlags |= 64;
			if(this.parent != null) this.parent.___renderFlags |= 64;
		}
		return inValue;
	}
	,get_scaleX: function() {
		return this.__scaleX;
	}
	,set_rotation: function(inValue) {
		if(this.__rotation != inValue) {
			this.__rotation = inValue;
			this.__invalidateMatrix(true);
			this.___renderFlags |= 64;
			if(this.parent != null) this.parent.___renderFlags |= 64;
		}
		return inValue;
	}
	,get_rotation: function() {
		return this.__rotation;
	}
	,set_parent: function(inValue) {
		if(inValue == this.parent) return inValue;
		this.__invalidateMatrix();
		if(this.parent != null) {
			HxOverrides.remove(this.parent.__children,this);
			this.parent.__invalidateBounds();
		}
		if(inValue != null) {
			inValue.___renderFlags |= 64;
			if(inValue.parent != null) inValue.parent.___renderFlags |= 64;
		}
		if(this.parent == null && inValue != null) {
			this.parent = inValue;
			var evt = new flash.events.Event(flash.events.Event.ADDED,true,false);
			this.dispatchEvent(evt);
		} else if(this.parent != null && inValue == null) {
			this.parent = inValue;
			var evt = new flash.events.Event(flash.events.Event.REMOVED,true,false);
			this.dispatchEvent(evt);
		} else this.parent = inValue;
		return inValue;
	}
	,set___combinedVisible: function(inValue) {
		if(this.__combinedVisible != inValue) {
			this.__combinedVisible = inValue;
			this.setSurfaceVisible(inValue);
		}
		return this.__combinedVisible;
	}
	,get_mouseY: function() {
		return this.globalToLocal(new flash.geom.Point(0,this.get_stage().get_mouseY())).y;
	}
	,get_mouseX: function() {
		return this.globalToLocal(new flash.geom.Point(this.get_stage().get_mouseX(),0)).x;
	}
	,get__matrixInvalid: function() {
		return (this.___renderFlags & 4) != 0;
	}
	,get__matrixChainInvalid: function() {
		return (this.___renderFlags & 8) != 0;
	}
	,set_mask: function(inValue) {
		if(this.__mask != null) this.__mask.__maskingObj = null;
		this.__mask = inValue;
		if(this.__mask != null) this.__mask.__maskingObj = this;
		return this.__mask;
	}
	,get_mask: function() {
		return this.__mask;
	}
	,set_height: function(inValue) {
		if(this.get__boundsInvalid()) this.validateBounds();
		var h = this.__boundsRect.height;
		if(this.__scaleY * h != inValue) {
			if(h == 0) {
				this.__scaleY = 1;
				this.__invalidateMatrix(true);
				this.___renderFlags |= 64;
				if(this.parent != null) this.parent.___renderFlags |= 64;
				h = this.__boundsRect.height;
			}
			if(h <= 0) return 0;
			this.__scaleY = inValue / h;
			this.__invalidateMatrix(true);
			this.___renderFlags |= 64;
			if(this.parent != null) this.parent.___renderFlags |= 64;
		}
		return inValue;
	}
	,get_height: function() {
		if(this.get__boundsInvalid()) this.validateBounds();
		return this.__height;
	}
	,set_filters: function(filters) {
		var oldFilterCount = this.__filters == null?0:this.__filters.length;
		if(filters == null) {
			this.__filters = null;
			if(oldFilterCount > 0) this.invalidateGraphics();
		} else {
			this.__filters = new Array();
			var _g = 0;
			while(_g < filters.length) {
				var filter = filters[_g];
				++_g;
				this.__filters.push(filter.clone());
			}
			this.invalidateGraphics();
		}
		return filters;
	}
	,get__boundsInvalid: function() {
		var gfx = this.__getGraphics();
		if(gfx == null) return (this.___renderFlags & 64) != 0; else return (this.___renderFlags & 64) != 0 || gfx.boundsDirty;
	}
	,get_filters: function() {
		if(this.__filters == null) return [];
		var result = new Array();
		var _g = 0, _g1 = this.__filters;
		while(_g < _g1.length) {
			var filter = _g1[_g];
			++_g;
			result.push(filter.clone());
		}
		return result;
	}
	,get__bottommostSurface: function() {
		var gfx = this.__getGraphics();
		if(gfx != null) return gfx.__surface;
		return null;
	}
	,__validateMatrix: function() {
		var parentMatrixInvalid = (this.___renderFlags & 8) != 0 && this.parent != null;
		if((this.___renderFlags & 4) != 0 || parentMatrixInvalid) {
			if(parentMatrixInvalid) this.parent.__validateMatrix();
			var m = this.transform.get_matrix();
			if((this.___renderFlags & 16) != 0) this.___renderFlags &= -5;
			if((this.___renderFlags & 4) != 0) {
				m.identity();
				m.scale(this.__scaleX,this.__scaleY);
				var rad = this.__rotation * flash.geom.Transform.DEG_TO_RAD;
				if(rad != 0.0) m.rotate(rad);
				m.translate(this.__x,this.__y);
				this.transform._matrix.copy(m);
				m;
			}
			var cm = this.transform.__getFullMatrix(null);
			var fm = this.parent == null?m:this.parent.transform.__getFullMatrix(m);
			this._fullScaleX = fm._sx;
			this._fullScaleY = fm._sy;
			if(cm.a != fm.a || cm.b != fm.b || cm.c != fm.c || cm.d != fm.d || cm.tx != fm.tx || cm.ty != fm.ty) {
				this.transform.__setFullMatrix(fm);
				this.___renderFlags |= 32;
			}
			this.___renderFlags &= -29;
		}
	}
	,__unifyChildrenWithDOM: function(lastMoveObj) {
		var gfx = this.__getGraphics();
		if(gfx != null && lastMoveObj != null && this != lastMoveObj) {
			var ogfx = lastMoveObj.__getGraphics();
			if(ogfx != null) flash.Lib.__setSurfaceZIndexAfter(this.__scrollRect == null?gfx.__surface:this._srWindow,lastMoveObj.__scrollRect == null?ogfx.__surface:lastMoveObj == this.parent?ogfx.__surface:lastMoveObj._srWindow);
		}
		if(gfx == null) return lastMoveObj; else return this;
	}
	,__testFlag: function(mask) {
		return (this.___renderFlags & mask) != 0;
	}
	,__setMatrix: function(inValue) {
		this.transform._matrix.copy(inValue);
		return inValue;
	}
	,__setFullMatrix: function(inValue) {
		return this.transform.__setFullMatrix(inValue);
	}
	,__setFlagToValue: function(mask,value) {
		if(value) this.___renderFlags |= mask; else this.___renderFlags &= ~mask;
	}
	,__setFlag: function(mask) {
		this.___renderFlags |= mask;
	}
	,__setDimensions: function() {
		if(this.scale9Grid != null) {
			this.__boundsRect.width *= this.__scaleX;
			this.__boundsRect.height *= this.__scaleY;
			this.__width = this.__boundsRect.width;
			this.__height = this.__boundsRect.height;
		} else {
			this.__width = this.__boundsRect.width * this.__scaleX;
			this.__height = this.__boundsRect.height * this.__scaleY;
		}
	}
	,__render: function(inMask,clipRect) {
		if(!this.__combinedVisible) return;
		var gfx = this.__getGraphics();
		if(gfx == null) return;
		if((this.___renderFlags & 4) != 0 || (this.___renderFlags & 8) != 0) this.__validateMatrix();
		if(gfx.__render(inMask,this.__filters,1,1)) {
			this.___renderFlags |= 64;
			if(this.parent != null) this.parent.___renderFlags |= 64;
			this.__applyFilters(gfx.__surface);
			this.___renderFlags |= 32;
		}
		var fullAlpha = (this.parent != null?this.parent.__combinedAlpha:1) * this.alpha;
		if(inMask != null) {
			var m = this.getSurfaceTransform(gfx);
			flash.Lib.__drawToSurface(gfx.__surface,inMask,m,fullAlpha,clipRect);
		} else {
			if((this.___renderFlags & 32) != 0) {
				var m = this.getSurfaceTransform(gfx);
				flash.Lib.__setSurfaceTransform(gfx.__surface,m);
				this.___renderFlags &= -33;
				this.__srUpdateDivs();
			}
			flash.Lib.__setSurfaceOpacity(gfx.__surface,fullAlpha);
		}
	}
	,__removeFromStage: function() {
		var gfx = this.__getGraphics();
		if(gfx != null && flash.Lib.__isOnStage(gfx.__surface)) {
			flash.Lib.__removeSurface(gfx.__surface);
			var evt = new flash.events.Event(flash.events.Event.REMOVED_FROM_STAGE,false,false);
			this.dispatchEvent(evt);
		}
	}
	,__matrixOverridden: function() {
		this.__x = this.transform.get_matrix().tx;
		this.__y = this.transform.get_matrix().ty;
		this.___renderFlags |= 16;
		this.___renderFlags |= 4;
		this.___renderFlags |= 64;
		if(this.parent != null) this.parent.___renderFlags |= 64;
	}
	,__isOnStage: function() {
		var gfx = this.__getGraphics();
		if(gfx != null && flash.Lib.__isOnStage(gfx.__surface)) return true;
		return false;
	}
	,__invalidateMatrix: function(local) {
		if(local == null) local = false;
		if(local) this.___renderFlags |= 4; else this.___renderFlags |= 8;
	}
	,__invalidateBounds: function() {
		this.___renderFlags |= 64;
		if(this.parent != null) this.parent.___renderFlags |= 64;
	}
	,__getSurface: function() {
		var gfx = this.__getGraphics();
		var surface = null;
		if(gfx != null) surface = gfx.__surface;
		return surface;
	}
	,__getObjectUnderPoint: function(point) {
		if(!this.get_visible()) return null;
		var gfx = this.__getGraphics();
		if(gfx != null) {
			gfx.__render();
			var extX = gfx.__extent.x;
			var extY = gfx.__extent.y;
			var local = this.globalToLocal(point);
			if(local.x - extX <= 0 || local.y - extY <= 0 || (local.x - extX) * this.get_scaleX() > this.get_width() || (local.y - extY) * this.get_scaleY() > this.get_height()) return null;
			if(gfx.__hitTest(local.x,local.y)) return this;
		}
		return null;
	}
	,__getMatrix: function() {
		return this.transform.get_matrix();
	}
	,__getInteractiveObjectStack: function(outStack) {
		var io = this;
		if(io != null) outStack.push(io);
		if(this.parent != null) this.parent.__getInteractiveObjectStack(outStack);
	}
	,__getGraphics: function() {
		return null;
	}
	,__getFullMatrix: function(localMatrix) {
		return this.transform.__getFullMatrix(localMatrix);
	}
	,__fireEvent: function(event) {
		var stack = [];
		if(this.parent != null) this.parent.__getInteractiveObjectStack(stack);
		var l = stack.length;
		if(l > 0) {
			event.__setPhase(flash.events.EventPhase.CAPTURING_PHASE);
			stack.reverse();
			var _g = 0;
			while(_g < stack.length) {
				var obj = stack[_g];
				++_g;
				event.currentTarget = obj;
				obj.__dispatchEvent(event);
				if(event.__getIsCancelled()) return;
			}
		}
		event.__setPhase(flash.events.EventPhase.AT_TARGET);
		event.currentTarget = this;
		this.__dispatchEvent(event);
		if(event.__getIsCancelled()) return;
		if(event.bubbles) {
			event.__setPhase(flash.events.EventPhase.BUBBLING_PHASE);
			stack.reverse();
			var _g = 0;
			while(_g < stack.length) {
				var obj = stack[_g];
				++_g;
				event.currentTarget = obj;
				obj.__dispatchEvent(event);
				if(event.__getIsCancelled()) return;
			}
		}
	}
	,__dispatchEvent: function(event) {
		if(event.target == null) event.target = this;
		event.currentTarget = this;
		return flash.events.EventDispatcher.prototype.dispatchEvent.call(this,event);
	}
	,__contains: function(child) {
		return false;
	}
	,__clearFlag: function(mask) {
		this.___renderFlags &= ~mask;
	}
	,__broadcast: function(event) {
		this.__dispatchEvent(event);
	}
	,__applyFilters: function(surface) {
		if(this.__filters != null) {
			var _g = 0, _g1 = this.__filters;
			while(_g < _g1.length) {
				var filter = _g1[_g];
				++_g;
				filter.__applyFilter(surface);
			}
		}
	}
	,__addToStage: function(newParent,beforeSibling) {
		var gfx = this.__getGraphics();
		if(gfx == null) return;
		if(newParent.__getGraphics() != null) {
			flash.Lib.__setSurfaceId(gfx.__surface,this.___id);
			if(beforeSibling != null && beforeSibling.__getGraphics() != null) flash.Lib.__appendSurface(gfx.__surface,beforeSibling.get__bottommostSurface()); else {
				var stageChildren = [];
				var _g = 0, _g1 = newParent.__children;
				while(_g < _g1.length) {
					var child = _g1[_g];
					++_g;
					if(child.get_stage() != null) stageChildren.push(child);
				}
				if(stageChildren.length < 1) flash.Lib.__appendSurface(gfx.__surface,null,newParent.get__topmostSurface()); else {
					var nextSibling = stageChildren[stageChildren.length - 1];
					var container;
					while(js.Boot.__instanceof(nextSibling,flash.display.DisplayObjectContainer)) {
						container = js.Boot.__cast(nextSibling , flash.display.DisplayObjectContainer);
						if(container.__children.length > 0) nextSibling = container.__children[container.__children.length - 1]; else break;
					}
					if(nextSibling.__getGraphics() != gfx) flash.Lib.__appendSurface(gfx.__surface,null,nextSibling.get__topmostSurface()); else flash.Lib.__appendSurface(gfx.__surface);
				}
			}
			flash.Lib.__setSurfaceTransform(gfx.__surface,this.getSurfaceTransform(gfx));
		} else if(newParent.name == "Stage") flash.Lib.__appendSurface(gfx.__surface);
		if(this.__isOnStage()) {
			this.__srUpdateDivs();
			var evt = new flash.events.Event(flash.events.Event.ADDED_TO_STAGE,false,false);
			this.dispatchEvent(evt);
		}
	}
	,validateBounds: function() {
		if(this.get__boundsInvalid()) {
			var gfx = this.__getGraphics();
			if(gfx == null) {
				this.__boundsRect.x = this.get_x();
				this.__boundsRect.y = this.get_y();
				this.__boundsRect.width = 0;
				this.__boundsRect.height = 0;
			} else {
				this.__boundsRect = gfx.__extent.clone();
				if(this.scale9Grid != null) {
					this.__boundsRect.width *= this.__scaleX;
					this.__boundsRect.height *= this.__scaleY;
					this.__width = this.__boundsRect.width;
					this.__height = this.__boundsRect.height;
				} else {
					this.__width = this.__boundsRect.width * this.__scaleX;
					this.__height = this.__boundsRect.height * this.__scaleY;
				}
				gfx.boundsDirty = false;
			}
			this.___renderFlags &= -65;
		}
	}
	,toString: function() {
		return "[DisplayObject name=" + this.name + " id=" + this.___id + "]";
	}
	,setSurfaceVisible: function(inValue) {
		var gfx = this.__getGraphics();
		if(gfx != null && gfx.__surface != null) flash.Lib.__setSurfaceVisible(gfx.__surface,inValue);
	}
	,localToGlobal: function(point) {
		if((this.___renderFlags & 4) != 0 || (this.___renderFlags & 8) != 0) this.__validateMatrix();
		return this.transform.__getFullMatrix(null).transformPoint(point);
	}
	,invalidateGraphics: function() {
		var gfx = this.__getGraphics();
		if(gfx != null) {
			gfx.__changed = true;
			gfx.__clearNextCycle = true;
		}
	}
	,hitTestPoint: function(x,y,shapeFlag) {
		if(shapeFlag == null) shapeFlag = false;
		var boundingBox = shapeFlag == null?true:!shapeFlag;
		if(!boundingBox) return this.__getObjectUnderPoint(new flash.geom.Point(x,y)) != null; else {
			var gfx = this.__getGraphics();
			if(gfx != null) {
				var extX = gfx.__extent.x;
				var extY = gfx.__extent.y;
				var local = this.globalToLocal(new flash.geom.Point(x,y));
				if(local.x - extX < 0 || local.y - extY < 0 || (local.x - extX) * this.get_scaleX() > this.get_width() || (local.y - extY) * this.get_scaleY() > this.get_height()) return false; else return true;
			}
			return false;
		}
	}
	,hitTestObject: function(obj) {
		if(obj != null && obj.parent != null && this.parent != null) {
			var currentBounds = this.getBounds(this);
			var targetBounds = obj.getBounds(this);
			return currentBounds.intersects(targetBounds);
		}
		return false;
	}
	,handleGraphicsUpdated: function(gfx) {
		this.___renderFlags |= 64;
		if(this.parent != null) this.parent.___renderFlags |= 64;
		this.__applyFilters(gfx.__surface);
		this.___renderFlags |= 32;
	}
	,globalToLocal: function(inPos) {
		if((this.___renderFlags & 4) != 0 || (this.___renderFlags & 8) != 0) this.__validateMatrix();
		return this.transform.__getFullMatrix(null).invert().transformPoint(inPos);
	}
	,getSurfaceTransform: function(gfx) {
		var extent = gfx.__extentWithFilters;
		var fm = this.transform.__getFullMatrix(null);
		fm.__translateTransformed(extent.get_topLeft());
		return fm;
	}
	,getScreenBounds: function() {
		if(this.get__boundsInvalid()) this.validateBounds();
		return this.__boundsRect.clone();
	}
	,getRect: function(targetCoordinateSpace) {
		return this.getBounds(targetCoordinateSpace);
	}
	,getBounds: function(targetCoordinateSpace) {
		if((this.___renderFlags & 4) != 0 || (this.___renderFlags & 8) != 0) this.__validateMatrix();
		if(this.get__boundsInvalid()) this.validateBounds();
		var m = this.transform.__getFullMatrix(null);
		if(targetCoordinateSpace != null) m.concat(targetCoordinateSpace.transform.__getFullMatrix(null).invert());
		var rect = this.__boundsRect.transform(m);
		return rect;
	}
	,drawToSurface: function(inSurface,matrix,inColorTransform,blendMode,clipRect,smoothing) {
		var oldAlpha = this.alpha;
		this.alpha = 1;
		this.__render(inSurface,clipRect);
		this.alpha = oldAlpha;
	}
	,dispatchEvent: function(event) {
		var result = this.__dispatchEvent(event);
		if(event.__getIsCancelled()) return true;
		if(event.bubbles && this.parent != null) this.parent.dispatchEvent(event);
		return result;
	}
	,_srAxes: null
	,_srWindow: null
	,_topmostSurface: null
	,___renderFlags: null
	,___id: null
	,_fullScaleY: null
	,_fullScaleX: null
	,_bottommostSurface: null
	,__y: null
	,__x: null
	,__width: null
	,__visible: null
	,__scrollRect: null
	,__scaleY: null
	,__scaleX: null
	,__rotation: null
	,__maskingObj: null
	,__mask: null
	,__height: null
	,__filters: null
	,__boundsRect: null
	,__combinedVisible: null
	,transform: null
	,scale9Grid: null
	,parent: null
	,name: null
	,loaderInfo: null
	,cacheAsBitmap: null
	,blendMode: null
	,alpha: null
	,accessibilityProperties: null
	,__class__: flash.display.DisplayObject
	,__properties__: {set_filters:"set_filters",get_filters:"get_filters",set_height:"set_height",get_height:"get_height",set_mask:"set_mask",get_mask:"get_mask",get_mouseX:"get_mouseX",get_mouseY:"get_mouseY",set_parent:"set_parent",set_rotation:"set_rotation",get_rotation:"get_rotation",set_scaleX:"set_scaleX",get_scaleX:"get_scaleX",set_scaleY:"set_scaleY",get_scaleY:"get_scaleY",set_scrollRect:"set_scrollRect",get_scrollRect:"get_scrollRect",get_stage:"get_stage",set_transform:"set_transform",set_visible:"set_visible",get_visible:"get_visible",set_width:"set_width",get_width:"get_width",set_x:"set_x",get_x:"get_x",set_y:"set_y",get_y:"get_y",set___combinedVisible:"set___combinedVisible",get__bottommostSurface:"get__bottommostSurface",get__boundsInvalid:"get__boundsInvalid",get__matrixChainInvalid:"get__matrixChainInvalid",get__matrixInvalid:"get__matrixInvalid",get__topmostSurface:"get__topmostSurface"}
});
flash.display.InteractiveObject = function() {
	flash.display.DisplayObject.call(this);
	this.tabEnabled = false;
	this.mouseEnabled = true;
	this.doubleClickEnabled = true;
	this.set_tabIndex(0);
};
$hxClasses["flash.display.InteractiveObject"] = flash.display.InteractiveObject;
flash.display.InteractiveObject.__name__ = ["flash","display","InteractiveObject"];
flash.display.InteractiveObject.__super__ = flash.display.DisplayObject;
flash.display.InteractiveObject.prototype = $extend(flash.display.DisplayObject.prototype,{
	set_tabIndex: function(inIndex) {
		return this.__tabIndex = inIndex;
	}
	,get_tabIndex: function() {
		return this.__tabIndex;
	}
	,__getObjectUnderPoint: function(point) {
		if(!this.mouseEnabled) return null; else return flash.display.DisplayObject.prototype.__getObjectUnderPoint.call(this,point);
	}
	,toString: function() {
		return "[InteractiveObject name=" + this.name + " id=" + this.___id + "]";
	}
	,__tabIndex: null
	,__doubleClickEnabled: null
	,tabEnabled: null
	,mouseEnabled: null
	,focusRect: null
	,doubleClickEnabled: null
	,__class__: flash.display.InteractiveObject
	,__properties__: $extend(flash.display.DisplayObject.prototype.__properties__,{set_tabIndex:"set_tabIndex",get_tabIndex:"get_tabIndex"})
});
flash.display.DisplayObjectContainer = function() {
	this.__children = new Array();
	this.mouseChildren = true;
	this.tabChildren = true;
	flash.display.InteractiveObject.call(this);
	this.__combinedAlpha = this.alpha;
};
$hxClasses["flash.display.DisplayObjectContainer"] = flash.display.DisplayObjectContainer;
flash.display.DisplayObjectContainer.__name__ = ["flash","display","DisplayObjectContainer"];
flash.display.DisplayObjectContainer.__super__ = flash.display.InteractiveObject;
flash.display.DisplayObjectContainer.prototype = $extend(flash.display.InteractiveObject.prototype,{
	set_scrollRect: function(inValue) {
		inValue = flash.display.InteractiveObject.prototype.set_scrollRect.call(this,inValue);
		this.__unifyChildrenWithDOM();
		return inValue;
	}
	,set_visible: function(inVal) {
		this.set___combinedVisible(this.parent != null?this.parent.__combinedVisible && inVal:inVal);
		return flash.display.InteractiveObject.prototype.set_visible.call(this,inVal);
	}
	,get_numChildren: function() {
		return this.__children.length;
	}
	,set___combinedVisible: function(inVal) {
		if(inVal != this.__combinedVisible) {
			var _g = 0, _g1 = this.__children;
			while(_g < _g1.length) {
				var child = _g1[_g];
				++_g;
				child.set___combinedVisible(child.get_visible() && inVal);
			}
		}
		return flash.display.InteractiveObject.prototype.set___combinedVisible.call(this,inVal);
	}
	,set_filters: function(filters) {
		flash.display.InteractiveObject.prototype.set_filters.call(this,filters);
		var _g = 0, _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.set_filters(filters);
		}
		return filters;
	}
	,__unifyChildrenWithDOM: function(lastMoveObj) {
		var obj = flash.display.InteractiveObject.prototype.__unifyChildrenWithDOM.call(this,lastMoveObj);
		var _g = 0, _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			obj = child.__unifyChildrenWithDOM(obj);
			if(child.get_scrollRect() != null) obj = child;
		}
		return obj;
	}
	,__swapSurface: function(c1,c2) {
		if(this.__children[c1] == null) throw "Null element at index " + c1 + " length " + this.__children.length;
		if(this.__children[c2] == null) throw "Null element at index " + c2 + " length " + this.__children.length;
		var gfx1 = this.__children[c1].__getGraphics();
		var gfx2 = this.__children[c2].__getGraphics();
		if(gfx1 != null && gfx2 != null) {
			var surface1 = this.__children[c1].__scrollRect == null?gfx1.__surface:this.__children[c1].__getSrWindow();
			var surface2 = this.__children[c2].__scrollRect == null?gfx2.__surface:this.__children[c2].__getSrWindow();
			if(surface1 != null && surface2 != null) flash.Lib.__swapSurface(surface1,surface2);
		}
	}
	,__render: function(inMask,clipRect) {
		if(!this.__visible) return;
		if(clipRect == null && this.__scrollRect != null) clipRect = this.__scrollRect;
		flash.display.InteractiveObject.prototype.__render.call(this,inMask,clipRect);
		this.__combinedAlpha = this.parent != null?this.parent.__combinedAlpha * this.alpha:this.alpha;
		var _g = 0, _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(child.__visible) {
				if(clipRect != null) {
					if((child.___renderFlags & 4) != 0 || (child.___renderFlags & 8) != 0) child.__validateMatrix();
				}
				child.__render(inMask,clipRect);
			}
		}
		if(this.__addedChildren) {
			this.__unifyChildrenWithDOM();
			this.__addedChildren = false;
		}
	}
	,__removeFromStage: function() {
		flash.display.InteractiveObject.prototype.__removeFromStage.call(this);
		var _g = 0, _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.__removeFromStage();
		}
	}
	,__removeChild: function(child) {
		HxOverrides.remove(this.__children,child);
		child.__removeFromStage();
		child.set_parent(null);
		return child;
	}
	,__invalidateMatrix: function(local) {
		if(local == null) local = false;
		if(!((this.___renderFlags & 8) != 0) && !((this.___renderFlags & 4) != 0)) {
			var _g = 0, _g1 = this.__children;
			while(_g < _g1.length) {
				var child = _g1[_g];
				++_g;
				child.__invalidateMatrix();
			}
		}
		flash.display.InteractiveObject.prototype.__invalidateMatrix.call(this,local);
	}
	,__getObjectsUnderPoint: function(point,stack) {
		var l = this.__children.length - 1;
		var _g1 = 0, _g = this.__children.length;
		while(_g1 < _g) {
			var i = _g1++;
			var result = this.__children[l - i].__getObjectUnderPoint(point);
			if(result != null) stack.push(result);
		}
	}
	,__getObjectUnderPoint: function(point) {
		if(!this.get_visible()) return null;
		var l = this.__children.length - 1;
		var _g1 = 0, _g = this.__children.length;
		while(_g1 < _g) {
			var i = _g1++;
			var result = null;
			if(this.mouseEnabled) result = this.__children[l - i].__getObjectUnderPoint(point);
			if(result != null) return this.mouseChildren?result:this;
		}
		return flash.display.InteractiveObject.prototype.__getObjectUnderPoint.call(this,point);
	}
	,__contains: function(child) {
		if(child == null) return false;
		if(this == child) return true;
		var _g = 0, _g1 = this.__children;
		while(_g < _g1.length) {
			var c = _g1[_g];
			++_g;
			if(c == child || c.__contains(child)) return true;
		}
		return false;
	}
	,__broadcast: function(event) {
		var _g = 0, _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.__broadcast(event);
		}
		this.dispatchEvent(event);
	}
	,__addToStage: function(newParent,beforeSibling) {
		flash.display.InteractiveObject.prototype.__addToStage.call(this,newParent,beforeSibling);
		var _g = 0, _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(child.__getGraphics() == null || !child.__isOnStage()) child.__addToStage(this);
		}
	}
	,validateBounds: function() {
		if(this.get__boundsInvalid()) {
			flash.display.InteractiveObject.prototype.validateBounds.call(this);
			var _g = 0, _g1 = this.__children;
			while(_g < _g1.length) {
				var obj = _g1[_g];
				++_g;
				if(obj.get_visible()) {
					var r = obj.getBounds(this);
					if(r.width != 0 || r.height != 0) {
						if(this.__boundsRect.width == 0 && this.__boundsRect.height == 0) this.__boundsRect = r.clone(); else this.__boundsRect.extendBounds(r);
					}
				}
			}
			if(this.scale9Grid != null) {
				this.__boundsRect.width *= this.__scaleX;
				this.__boundsRect.height *= this.__scaleY;
				this.__width = this.__boundsRect.width;
				this.__height = this.__boundsRect.height;
			} else {
				this.__width = this.__boundsRect.width * this.__scaleX;
				this.__height = this.__boundsRect.height * this.__scaleY;
			}
		}
	}
	,toString: function() {
		return "[DisplayObjectContainer name=" + this.name + " id=" + this.___id + "]";
	}
	,swapChildrenAt: function(child1,child2) {
		var swap = this.__children[child1];
		this.__children[child1] = this.__children[child2];
		this.__children[child2] = swap;
		swap = null;
	}
	,swapChildren: function(child1,child2) {
		var c1 = -1;
		var c2 = -1;
		var swap;
		var _g1 = 0, _g = this.__children.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(this.__children[i] == child1) c1 = i; else if(this.__children[i] == child2) c2 = i;
		}
		if(c1 != -1 && c2 != -1) {
			swap = this.__children[c1];
			this.__children[c1] = this.__children[c2];
			this.__children[c2] = swap;
			swap = null;
			this.__swapSurface(c1,c2);
			child1.__unifyChildrenWithDOM();
			child2.__unifyChildrenWithDOM();
		}
	}
	,setChildIndex: function(child,index) {
		if(index > this.__children.length) throw "Invalid index position " + index;
		var oldIndex = this.getChildIndex(child);
		if(oldIndex < 0) {
			var msg = "setChildIndex : object " + child.name + " not found.";
			if(child.parent == this) {
				var realindex = -1;
				var _g1 = 0, _g = this.__children.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(this.__children[i] == child) {
						realindex = i;
						break;
					}
				}
				if(realindex != -1) msg += "Internal error: Real child index was " + Std.string(realindex); else msg += "Internal error: Child was not in __children array!";
			}
			throw msg;
		}
		if(index < oldIndex) {
			var i = oldIndex;
			while(i > index) {
				this.swapChildren(this.__children[i],this.__children[i - 1]);
				i--;
			}
		} else if(oldIndex < index) {
			var i = oldIndex;
			while(i < index) {
				this.swapChildren(this.__children[i],this.__children[i + 1]);
				i++;
			}
		}
	}
	,removeChildAt: function(index) {
		if(index >= 0 && index < this.__children.length) return this.__removeChild(this.__children[index]);
		throw "removeChildAt(" + index + ") : none found?";
	}
	,removeChild: function(inChild) {
		var _g = 0, _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(child == inChild) return (function($this) {
				var $r;
				HxOverrides.remove($this.__children,child);
				child.__removeFromStage();
				child.set_parent(null);
				$r = child;
				return $r;
			}(this));
		}
		throw "removeChild : none found?";
	}
	,getObjectsUnderPoint: function(point) {
		var result = new Array();
		this.__getObjectsUnderPoint(point,result);
		return result;
	}
	,getChildIndex: function(inChild) {
		var _g1 = 0, _g = this.__children.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(this.__children[i] == inChild) return i;
		}
		return -1;
	}
	,getChildByName: function(inName) {
		var _g = 0, _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(child.name == inName) return child;
		}
		return null;
	}
	,getChildAt: function(index) {
		if(index >= 0 && index < this.__children.length) return this.__children[index];
		throw "getChildAt : index out of bounds " + index + "/" + this.__children.length;
		return null;
	}
	,contains: function(child) {
		return this.__contains(child);
	}
	,addChildAt: function(object,index) {
		if(index > this.__children.length || index < 0) throw "Invalid index position " + index;
		this.__addedChildren = true;
		if(object.parent == this) {
			this.setChildIndex(object,index);
			return object;
		}
		if(index == this.__children.length) return this.addChild(object); else {
			if(this.__isOnStage()) object.__addToStage(this,this.__children[index]);
			this.__children.splice(index,0,object);
			object.set_parent(this);
		}
		return object;
	}
	,addChild: function(object) {
		if(object == null) throw "DisplayObjectContainer asked to add null child object";
		if(object == this) throw "Adding to self";
		this.__addedChildren = true;
		if(object.parent == this) {
			this.setChildIndex(object,this.__children.length - 1);
			return object;
		}
		object.set_parent(this);
		if(this.__isOnStage()) object.__addToStage(this);
		if(this.__children == null) this.__children = new Array();
		this.__children.push(object);
		return object;
	}
	,__addedChildren: null
	,__combinedAlpha: null
	,__children: null
	,tabChildren: null
	,mouseChildren: null
	,__class__: flash.display.DisplayObjectContainer
	,__properties__: $extend(flash.display.InteractiveObject.prototype.__properties__,{get_numChildren:"get_numChildren"})
});
flash.display.Sprite = function() {
	flash.display.DisplayObjectContainer.call(this);
	this.__graphics = new flash.display.Graphics();
	this.buttonMode = false;
};
$hxClasses["flash.display.Sprite"] = flash.display.Sprite;
flash.display.Sprite.__name__ = ["flash","display","Sprite"];
flash.display.Sprite.__super__ = flash.display.DisplayObjectContainer;
flash.display.Sprite.prototype = $extend(flash.display.DisplayObjectContainer.prototype,{
	set_useHandCursor: function(cursor) {
		if(cursor == this.useHandCursor) return cursor;
		if(this.__cursorCallbackOver != null) this.removeEventListener(flash.events.MouseEvent.ROLL_OVER,this.__cursorCallbackOver);
		if(this.__cursorCallbackOut != null) this.removeEventListener(flash.events.MouseEvent.ROLL_OUT,this.__cursorCallbackOut);
		if(!cursor) flash.Lib.__setCursor(flash._Lib.CursorType.Default); else {
			this.__cursorCallbackOver = function(_) {
				flash.Lib.__setCursor(flash._Lib.CursorType.Pointer);
			};
			this.__cursorCallbackOut = function(_) {
				flash.Lib.__setCursor(flash._Lib.CursorType.Default);
			};
			this.addEventListener(flash.events.MouseEvent.ROLL_OVER,this.__cursorCallbackOver);
			this.addEventListener(flash.events.MouseEvent.ROLL_OUT,this.__cursorCallbackOut);
		}
		this.useHandCursor = cursor;
		return cursor;
	}
	,get_graphics: function() {
		return this.__graphics;
	}
	,get_dropTarget: function() {
		return this.__dropTarget;
	}
	,__getGraphics: function() {
		return this.__graphics;
	}
	,toString: function() {
		return "[Sprite name=" + this.name + " id=" + this.___id + "]";
	}
	,stopDrag: function() {
		if(this.__isOnStage()) {
			this.get_stage().__stopDrag(this);
			var l = this.parent.__children.length - 1;
			var obj = this.get_stage();
			var _g1 = 0, _g = this.parent.__children.length;
			while(_g1 < _g) {
				var i = _g1++;
				var result = this.parent.__children[l - i].__getObjectUnderPoint(new flash.geom.Point(this.get_stage().get_mouseX(),this.get_stage().get_mouseY()));
				if(result != null) obj = result;
			}
			if(obj != this) this.__dropTarget = obj; else this.__dropTarget = this.get_stage();
		}
	}
	,startDrag: function(lockCenter,bounds) {
		if(lockCenter == null) lockCenter = false;
		if(this.__isOnStage()) this.get_stage().__startDrag(this,lockCenter,bounds);
	}
	,__graphics: null
	,__dropTarget: null
	,__cursorCallbackOver: null
	,__cursorCallbackOut: null
	,useHandCursor: null
	,buttonMode: null
	,__class__: flash.display.Sprite
	,__properties__: $extend(flash.display.DisplayObjectContainer.prototype.__properties__,{get_dropTarget:"get_dropTarget",get_graphics:"get_graphics",set_useHandCursor:"set_useHandCursor"})
});
var Main = function() {
	this.state = 0;
	this.showFinishScreenDelay = 800;
	this.tapImgFrame = 0;
	this.wasShownTutorial = false;
	this.isPausedByPortrait = false;
	this.isPaused = false;
	this.gamePlay = 2;
	this.roundsPlayed = 0;
	this.androidCanvasReseted = false;
	this.isHardMode = false;
	this.higliterAlpha = 1;
	this.maxScaleStep = 0.005;
	this.maxScale = 2;
	this.initScale = 1;
	this.mainHeroType = 5;
	this.places = 0;
	this.heroesGap = 20;
	this.startHeroPos = 100;
	flash.display.Sprite.call(this);
	this.addEventListener(flash.events.Event.ADDED_TO_STAGE,$bind(this,this.added));
	Main.current = this;
	this.hp = new flash.geom.Point();
	this.hr1 = new flash.geom.Rectangle();
	this.hp1 = new flash.geom.Point();
	this.sounds = new GameSounds();
	this.tracker = new googleAnalytics.Tracker("UA-49887304-1","cawogames.com");
	this.visitor = new googleAnalytics.Visitor();
	this.visitor.setUserAgent("haXe-ga");
	this.visitor.setScreenResolution("1024x768");
	this.visitor.setLocale("es_AR");
	this.session = new googleAnalytics.Session();
	this.trackPageview();
};
$hxClasses["Main"] = Main;
Main.__name__ = ["Main"];
Main.openMoreGames = function() {
	//js.Browser.window.open("http://www.myrealgames.com/mobile-games/?utm_source=OutOfSaddle&utm_medium=html5_moregames","_blank").focus();
}
Main.main = function() {
	flash.Lib.get_current().get_stage().align = flash.display.StageAlign.TOP_LEFT;
	flash.Lib.get_current().get_stage().scaleMode = flash.display.StageScaleMode.NO_SCALE;
	flash.Lib.get_current().addChild(new Main());
}
Main.__super__ = flash.display.Sprite;
Main.prototype = $extend(flash.display.Sprite.prototype,{
	sortByPlaces: function(d1,d2) {
		if(d1.totalScore < d2.totalScore) return 1; else return -1;
	}
	,update: function(e) {
		var _g = this;
		if(this.isPaused) return;
		if(!this.wasShownTutorial && this.state == 3 && this.tapImg == null) {
			this.tapImg = new flash.display.Bitmap(this.tapImgBmds[Math.floor(this.tapImgFrame)]);
			this.tapImg.set_x(this.sWidth - this.tapImg.get_width() - 50);
			this.tapImg.set_y(this.sHeight - this.tapImg.get_height() - 100);
			this.addChildAt(this.tapImg,this.getChildIndex(this.overlayShaddow));
		}
		if(this.tapImgFrame < this.tapImgBmds.length && this.tapImg != null) {
			this.tapImg.set_bitmapData(this.tapImgBmds[Math.floor(this.tapImgFrame)]);
			this.tapImgFrame += 0.3;
			if(this.tapImgFrame >= this.tapImgBmds.length) this.tapImgFrame = 0;
		}
		this.hr1.x = this.background.get_x() * -1;
		this.canvas.bitmapData.copyPixels(this.background.bgBm.bitmapData,this.hr1,this.hp1,null,null,true);
		if(!this.androidCanvasReseted) {
			eval("document.getElementById('haxe:openfl').style.zIndex= '100'");
			var ctx = this.canvas.bitmapData.___textureBuffer.getContext("2d");
			ctx.getImageData(this.background.get_x() * -1,0,this.hr1.width,this.hr1.height);
			ctx.canvas.width = ctx.canvas.width;
			this.androidCanvasReseted = true;
		}
		var allFinished = true;
		if(this.state == 3) {
			var hero;
			var _g1 = 0, _g2 = this.heroesArray.length;
			while(_g1 < _g2) {
				var i = _g1++;
				hero = this.heroesArray[i];
				hero.update();
				if(!hero.finished && !hero.dead || hero.fallingDeep) allFinished = false;
				if(hero.type == this.mainHeroType && !hero.failedStart) {
					if(hero.x >= 200) {
						var fbgx = 200 - hero.x;
						if(this.background.realWidth() + fbgx < this.sWidth) this.background.offsetX(this.sWidth - this.background.realWidth()); else if(this.background.realWidth() + fbgx > this.sWidth) this.background.offsetX(200 - hero.x);
					}
				}
			}
			if(!this.wasShownTutorial && this.mainHero.x >= 400) {
				this.tapImg.alpha = 1;
				this.wasShownTutorial = true;
				this.tapImgFrame = 0;
			} else if(this.wasShownTutorial && this.tapImg != null && this.mainHero.x >= this.mainHero.deep1StartX) {
				this.tapImg.parent.removeChild(this.tapImg);
				this.tapImg = null;
				this.tapImgFrame = 100;
			}
		}
		if(this.state == 2 && this.mainHero.failedStart) {
			this.getReadyScreen.stop();
			this.mainHero.update();
			if(this.mainHero.finished) {
				this.state = 4;
				this.mainHero.explode();
				haxe.Timer.delay(function() {
					_g.winLoseScreen.enable();
				},Math.round(this.showFinishScreenDelay));
				this.winLoseScreen.setResult(false);
				this.pauseBtn.alpha = 0;
			}
		}
		if(allFinished && this.state == 3) {
			this.state = 1;
			this.pauseBtn.alpha = 0;
			var wasFallDead = false;
			var loser = null;
			var hero;
			var minPlace = 0;
			var _g1 = 0, _g2 = this.heroesArray.length;
			while(_g1 < _g2) {
				var i = _g1++;
				hero = this.heroesArray[i];
				if(hero.falledDeepThisRound) {
					wasFallDead = true;
					break;
				} else if(hero.placeThisRound > minPlace) {
					minPlace = hero.placeThisRound;
					loser = hero;
				}
			}
			this.roundsPlayed++;
			if(!wasFallDead && this.gamePlay != 2) {
				loser.setDead();
				loser.explode();
			}
			if(!this.mainHero.dead && this.roundsPlayed < (this.gamePlay == 1?8:9)) {
				var pricersBmds = new Array();
				pricersBmds[0] = pricersBmds[1] = pricersBmds[2] = null;
				var _g1 = 0, _g2 = this.heroesArray.length;
				while(_g1 < _g2) {
					var i = _g1++;
					if(this.heroesArray[i].placeThisRound <= 3) pricersBmds[this.heroesArray[i].placeThisRound - 1] = this.menuHeroes[this.heroesArray[i].type - 1];
				}
				this.state = 4;
				var _placesArr = new Array();
				var _pointsArr = new Array();
				var _heroPlace = 0;
				if(this.gamePlay == 2) {
					var _finishedArr = new Array();
					var _hr;
					var _d;
					var _g1 = 0, _g2 = this.heroesArray.length;
					while(_g1 < _g2) {
						var i = _g1++;
						_hr = this.heroesArray[i];
						_d = { };
						_d.totalScore = _hr.totalScores;
						_d.medals = _hr.medals;
						_d.name = "Player" + _hr.type;
						_d.isHero = this.mainHero == _hr;
						_d.bmd = this.menuHeroes[_hr.type - 1];
						_finishedArr.push(_d);
					}
					_finishedArr.sort($bind(this,this.sortByPlaces));
					var _g1 = 0, _g2 = _finishedArr.length;
					while(_g1 < _g2) {
						var i = _g1++;
						_placesArr.push(_finishedArr[i].bmd);
						_pointsArr.push(_finishedArr[i].totalScore);
						if(_finishedArr[i].isHero) _heroPlace = i + 1;
					}
				}
				haxe.Timer.delay(function() {
					_g.finishScreen.enable();
				},this.showFinishScreenDelay);
				this.finishScreen.setData(1,this.roundsPlayed,this.mainHero.totalScores | 0,this.mainHero.placeThisRound,this.mainHero.medals[0],this.mainHero.medals[1],this.mainHero.medals[2],pricersBmds,false,false,_placesArr,_heroPlace,_pointsArr);
			} else if(this.mainHero.dead) {
				this.state = 4;
				haxe.Timer.delay(function() {
					_g.winLoseScreen.enable();
				},this.showFinishScreenDelay);
				this.winLoseScreen.setResult(false);
			} else if(this.roundsPlayed >= (this.gamePlay == 1?8:9)) {
				this.state = 4;
				if(this.gamePlay == 1) {
					this.finishScreen.setData(1,this.roundsPlayed,this.mainHero.totalScores | 0,this.mainHero.placeThisRound,this.mainHero.medals[0],this.mainHero.medals[1],this.mainHero.medals[2],null,true,true);
					haxe.Timer.delay(function() {
						_g.finishScreen.enable();
					},this.showFinishScreenDelay);
				} else {
					var finishedArr = new Array();
					var hr;
					var d;
					var _g1 = 0, _g2 = this.heroesArray.length;
					while(_g1 < _g2) {
						var i = _g1++;
						hr = this.heroesArray[i];
						d = { };
						d.totalScore = hr.totalScores;
						d.medals = hr.medals;
						d.name = "Player" + hr.type;
						d.isHero = this.mainHero == hr;
						d.bmd = this.menuHeroes[hr.type - 1];
						finishedArr.push(d);
					}
					finishedArr.sort($bind(this,this.sortByPlaces));
					var heroPlace = 0;
					var placesArr = new Array();
					var pointsArr = new Array();
					var _g1 = 0, _g2 = finishedArr.length;
					while(_g1 < _g2) {
						var i = _g1++;
						placesArr.push(finishedArr[i].bmd);
						pointsArr.push(finishedArr[i].totalScore);
						if(finishedArr[i].isHero) heroPlace = i + 1;
					}
					this.finishScreen.setData(2,this.roundsPlayed,Math.round(this.mainHero.totalScores),this.mainHero.placeThisRound,this.mainHero.medals[0],this.mainHero.medals[1],this.mainHero.medals[2],null,true,true,placesArr,heroPlace,pointsArr);
					if(heroPlace <= 3) {
						haxe.Timer.delay(function() {
							_g.activateCup(heroPlace - 1);
						},this.showFinishScreenDelay);
						this.finishScreen.disable();
					} else haxe.Timer.delay(function() {
						_g.finishScreen.enable();
					},this.showFinishScreenDelay);
				}
			}
		}
		var offsetX = this.background._x;
		this.background.render(this.canvas.bitmapData);
		this.light.set_x(offsetX / 4);
		if(this.mainHero.visible && (!this.mainHero.isInFly || this.mainHero.isOnGround) && !this.mainHero.dead && !this.mainHero.fallingDeep && !this.mainHero.failedStart) {
			this.hp.x = this.mainHero.x - this.heroHighliter.get_width() / 2 + offsetX;
			this.hp.y = this.mainHero.startY - this.heroHighliter.get_height() / 2;
			this.canvas.bitmapData.drawBMDAlpha(this.heroHighliter,this.hp.x,this.hp.y,this.higliterAlpha);
		}
		var _g1 = 0, _g2 = this.heroesArray.length;
		while(_g1 < _g2) {
			var i = _g1++;
			this.heroesArray[i].render(this.canvas.bitmapData,offsetX);
		}
		this.hp.x = this.light.get_x();
		this.hp.y = this.light.get_y();
		this.canvas.bitmapData.copyPixels(this.light.bitmapData,this.light.bitmapData.rect,this.hp,null,null,true);
		this.lifesPanel.render(this.mainHero.lifes,this.canvas.bitmapData);
		var resScale = 1 + (this.mainHero.speed - 8) * 0.01;
		if(resScale > this.maxScale) resScale = this.maxScale; else if(resScale < 1) resScale = 1;
		if(resScale != 1 && Math.abs(resScale - this.mainContainer.get_scaleX()) > this.maxScaleStep) resScale = resScale > this.mainContainer.get_scaleX()?this.mainContainer.get_scaleX() + this.maxScaleStep:this.mainContainer.get_scaleX() - this.maxScaleStep;
		if(this.mainContainer.get_scaleX() != resScale) {
			this.mainContainer.set_scaleX(this.mainContainer.set_scaleY(resScale));
			this.mainContainer.set_x(this.sWidth / 2 - this.sWidth * resScale / 2 + (resScale - 1) * this.sWidth / 5);
			this.mainContainer.set_y(this.sHeight / 2 - this.sHeight * resScale / 2);
		}
	}
	,touch: function(e) {
		if(this.clickType == flash.events.MouseEvent.CLICK) return;
		if(e.target == this.pauseBtn) return;
		if(this.rulesTxt.alpha == 1) {
			this.rulesTxt.alpha = 0;
			this.getReadyScreen.init();
			this.pauseBtn.alpha = 1;
			return;
		}
		if(this.state == 1) {
			var _g1 = 0, _g = this.heroesArray.length;
			while(_g1 < _g) {
				var i = _g1++;
				this.heroesArray[i].reset();
			}
			this.background.setRandTileOffset();
			this.background.offsetX(0);
			this.newGame();
		} else if(this.state == 2 && !this.isPaused) this.mainHero.failStart(); else if(this.state == 3 && !this.isPaused) {
			this.mainHero.mainAction();
			if(this.higliterAlpha == 1) this.higliterAlpha = 0.95;
			if(!this.wasShownTutorial && this.tapImg != null) this.tapImg.alpha = 0; else if(this.tapImg != null && this.wasShownTutorial) {
				this.tapImg.parent.removeChild(this.tapImg);
				this.tapImg = null;
				this.tapImgFrame = 100;
			}
		}
	}
	,click: function(e) {
		if(this.clickType != flash.events.MouseEvent.CLICK) return;
		if(e.target == this.pauseBtn) return;
		if(this.rulesTxt.alpha == 1) {
			this.rulesTxt.alpha = 0;
			this.getReadyScreen.init();
			this.pauseBtn.alpha = 1;
			return;
		}
		if(this.state == 1) {
			var _g1 = 0, _g = this.heroesArray.length;
			while(_g1 < _g) {
				var i = _g1++;
				this.heroesArray[i].reset();
			}
			this.background.setRandTileOffset();
			this.background.offsetX(0);
			this.newGame();
		} else if(this.state == 2 && !this.isPaused) this.mainHero.failStart(); else if(this.state == 3 && !this.isPaused) {
			this.mainHero.mainAction();
			if(this.higliterAlpha == 1) this.higliterAlpha = 0.95;
			if(!this.wasShownTutorial && this.tapImg != null) this.tapImg.alpha = 0; else if(this.tapImg != null && this.wasShownTutorial) {
				this.tapImg.parent.removeChild(this.tapImg);
				this.tapImg = null;
				this.tapImgFrame = 100;
			}
		}
	}
	,isVisibleCups: function() {
		return this.goldCup.get_visible() || this.silverCup.get_visible() || this.bronzeCup.get_visible();
	}
	,newRound: function(isNewGame) {
		if(isNewGame == null) isNewGame = false;
		if(this.state == 1) {
			var _g1 = 0, _g = this.heroesArray.length;
			while(_g1 < _g) {
				var i = _g1++;
				this.heroesArray[i].reset(isNewGame);
			}
			this.background.setRandTileOffset();
			this.background.offsetX(0);
			this.newGame();
			if(isNewGame) this.roundsPlayed = 0;
			this.pauseBtn.alpha = 1;
		}
		this.higliterAlpha = 1;
	}
	,setHeroType: function(index) {
		this.mainHeroType = index;
		var hero;
		var _g1 = 0, _g = this.heroesArray.length;
		while(_g1 < _g) {
			var i = _g1++;
			hero = this.heroesArray[i];
			if(hero.type == index) {
				hero.isPlayer = true;
				var mh = this.mainHero != null?this.mainHero:this.heroesArray[4];
				var stX = hero.startX;
				var stY = hero.startY;
				var cx = hero.x;
				var cy = hero.y;
				hero.setDefaults(mh.startX,mh.startY,mh.x,mh.y);
				mh.setDefaults(stX,stY,cx,cy);
				this.mainHero = hero;
			} else hero.isPlayer = false;
		}
	}
	,getPlace: function() {
		this.places++;
		return this.places;
	}
	,newGame: function(forceStart,gamePlay) {
		if(gamePlay == null) gamePlay = -1;
		if(forceStart == null) forceStart = false;
		if(gamePlay > 0) this.gamePlay = gamePlay;
		this.isPaused = false;
		if(forceStart) {
			this.state = 1;
			var _g1 = 0, _g = this.heroesArray.length;
			while(_g1 < _g) {
				var i = _g1++;
				this.heroesArray[i].reset(true);
			}
			this.background.setRandTileOffset();
			this.background.offsetX(0);
			this.roundsPlayed = 0;
		}
		if(this.state == 1) {
			this.places = 0;
			var hero;
			var _g1 = 0, _g = this.heroesArray.length;
			while(_g1 < _g) {
				var i = _g1++;
				hero = this.heroesArray[i];
				if(!hero.dead) hero.visible = true;
				hero.roundPrepare();
			}
			this.state = 2;
			if(!forceStart) {
				this.getReadyScreen.init();
				this.pauseBtn.alpha = 1;
			} else this.rulesTxt.alpha = 1;
			return;
		}
		this.higliterAlpha = 1;
	}
	,tapToStartClick: function(e) {
		if(this.tapToStartBtn == null) return;
		if(e.type == flash.events.MouseEvent.CLICK) this.clickType = flash.events.MouseEvent.CLICK; else this.clickType = "touchEnd";
		flash.Lib.get_current().get_stage().removeEventListener(flash.events.MouseEvent.CLICK,$bind(this,this.tapToStartClick));
		flash.Lib.get_current().get_stage().removeEventListener("touchEnd",$bind(this,this.tapToStartClick));
		this.tapToStartBtn.parent.removeChild(this.tapToStartBtn);
		this.tapToStartBtn = null;
		this.playMenu.enable();
	}
	,deactivateOverlays: function() {
		this.overlayShaddow.alpha = 0;
		this.overlayFill.alpha = 0;
	}
	,deactivateCups: function(e) {
		this.goldCup.set_visible(this.silverCup.set_visible(this.bronzeCup.set_visible(false)));
		this.finishScreen.enable();
	}
	,activateCup: function(type) {
		if(type == 0) this.goldCup.set_visible(true); else if(type == 1) this.silverCup.set_visible(true); else if(type == 2) this.bronzeCup.set_visible(true);
	}
	,activateOverlay: function(isShaddow) {
		if(isShaddow) {
			this.overlayShaddow.alpha = 1;
			this.overlayFill.alpha = 0;
		} else {
			this.overlayShaddow.alpha = 0;
			this.overlayFill.alpha = 1;
		}
	}
	,unpause: function() {
		this.isPaused = false;
		this.pauseBtn.alpha = 1;
		this.getReadyScreen.unpause();
	}
	,clickPause: function(e) {
		if(this.isPaused || this.pauseBtn.alpha == 0) return;
		this.pauseBtn.alpha = 0;
		this.isPaused = true;
		this.pauseMenu.enable();
		this.getReadyScreen.pause();
	}
	,getNumberBMD: function(num) {
		return this.numbersArr[num - 1];
	}
	,init: function() {
		if(this.inited) return;
		if(flash.Lib.get_current().get_stage().get_stageWidth() < flash.Lib.get_current().get_stage().get_stageHeight()) {
			if(this.rotateScreenWindow == null) {
				this.rotateScreenWindow = new flash.display.Bitmap(openfl.Assets.getBitmapData("img/Rotate_to_play.jpg"));
				this.rotateScreenWindow.set_width(flash.Lib.get_current().get_stage().get_stageWidth());
				this.rotateScreenWindow.set_scaleY(this.rotateScreenWindow.get_scaleX());
				this.rotateScreenWindow.set_y(flash.Lib.get_current().get_stage().get_stageHeight() / 2 - this.rotateScreenWindow.get_height() / 2);
			}
			flash.Lib.get_current().get_stage().addChild(this.rotateScreenWindow);
			return;
		} else {
		}
		this.inited = true;
		this.mainContainer = new flash.display.Sprite();
		this.addChild(this.mainContainer);
		this.sHeight = 480;
		if(flash.Lib.get_current().get_stage().get_stageWidth() / flash.Lib.get_current().get_stage().get_stageHeight() > 850 / 480) {
			this.sWidth = this.sHeight * 850 / 480;
			this.set_x((flash.Lib.get_current().get_stage().get_stageWidth() - this.sWidth * flash.Lib.get_current().get_stage().get_stageHeight() / this.sHeight) / 2);
		} else this.sWidth = this.sHeight * flash.Lib.get_current().get_stage().get_stageWidth() / flash.Lib.get_current().get_stage().get_stageHeight();
		this.hr1.width = this.sWidth;
		this.hr1.height = this.sHeight;
		this.background = new BackGround();
		this.background.setRandTileOffset();
		this.canvas = new flash.display.Bitmap(new flash.display.BitmapData(this.sWidth | 0,this.sHeight | 0,true,0),flash.display.PixelSnapping.AUTO,true);
		this.set_scrollRect(new flash.geom.Rectangle(0,0,this.sWidth * flash.Lib.get_current().get_stage().get_stageHeight() / this.sHeight,this.sHeight * flash.Lib.get_current().get_stage().get_stageHeight() / this.sHeight));
		this.mainContainer.addChild(this.canvas);
		this.set_scaleX(this.set_scaleY(flash.Lib.get_current().get_stage().get_stageHeight() / this.sHeight));
		this.initScale = this.get_scaleX();
		this.light = new flash.display.Bitmap(openfl.Assets.getBitmapData("img/SunLight.png"));
		this.lifesPanel = new LifesPanel();
		this.lifesPanel.set_x(this.sWidth / 2 - 70);
		this.lifesPanel.set_y(this.sHeight - 28);
		this.addChild(this.lifesPanel);
		this.getReadyScreen = new GetReadyScreen();
		this.addChild(this.getReadyScreen);
		this.overlayFill = new flash.display.Sprite();
		this.overlayFill.addChild(new flash.display.Bitmap(openfl.Assets.getBitmapData("img/Fon.jpg")));
		var sponsLogo = new flash.display.Bitmap(openfl.Assets.getBitmapData("img/mrg_logo.png"));
		this.overlayFill.addChild(sponsLogo);
		this.overlayFill.set_height(this.sHeight);
		this.overlayFill.set_scaleX(this.overlayFill.get_scaleY());
		this.overlayFill.set_x(this.sWidth / 2 - this.overlayFill.get_width() / 2);
		sponsLogo.set_x(this.overlayFill.get_width() - this.sWidth + this.overlayFill.get_x() + 10);
		sponsLogo.set_y(10);
		this.overlayShaddow = new flash.display.Bitmap(openfl.Assets.getBitmapData("img/ShadowOvr.png"));
		this.overlayShaddow.set_height(this.sHeight);
		this.overlayShaddow.set_scaleX(this.overlayShaddow.get_scaleY());
		this.overlayShaddow.set_x(this.sWidth / 2 - this.overlayShaddow.get_width() / 2);
		this.addChild(this.overlayShaddow);
		this.addChild(this.overlayFill);
		this.overlayShaddow.alpha = 0;
		this.rulesTxt = new flash.display.Bitmap(openfl.Assets.getBitmapData("img/rulesTxt.png"));
		this.rulesTxt.set_x(this.sWidth / 2 - this.rulesTxt.get_width() / 2);
		this.rulesTxt.set_y(this.sHeight / 2 - this.rulesTxt.get_height() / 2);
		this.addChild(this.rulesTxt);
		this.rulesTxt.alpha = 0;
		this.numericFont = new NumericFont("MainFontNumeric",22);
		this.numericFontLittle = new NumericFont("MainFontNumericLittle",11);
		this.numericFont2 = new NumericFont("Num2",13);
		this.heroHighliter = openfl.Assets.getBitmapData("img/icon_persSelection.png");
		this.heroesArray = new Array();
		this.menuHeroes = new Array();
		var hero;
		var curY = this.sHeight - 36;
		var _g = 0;
		while(_g < 9) {
			var i = _g++;
			hero = new Hero(i + 1,this.startHeroPos,curY);
			this.heroesArray.push(hero);
			curY -= 49;
			this.menuHeroes.push(openfl.Assets.getBitmapData("img/Pers/p" + (i + 1) + ".png"));
		}
		this.winLoseScreen = new WinLoseScreen();
		this.winLoseScreen.set_visible(false);
		this.addChild(this.winLoseScreen);
		this.playMenu = new PlayMenu();
		this.playMenu.disable();
		this.addChild(this.playMenu);
		this.mainMenu = new MainMenu();
		this.mainMenu.disable();
		this.addChild(this.mainMenu);
		this.heroSelectScreen = new HeroSelectScreen();
		this.heroSelectScreen.disable();
		this.addChild(this.heroSelectScreen);
		this.pauseBtn = new flash.display.Bitmap(openfl.Assets.getBitmapData("img/pause.png"));
		this.pauseBtn.set_x(10);
		this.pauseBtn.set_y(this.sHeight - this.pauseBtn.get_height() - 70);
		this.addChild(this.pauseBtn);
		this.pauseMenu = new PauseMenu();
		this.pauseMenu.disable();
		this.addChild(this.pauseMenu);
		this.pauseBtn.alpha = 0;
		this.pauseBtn.addEventListener(flash.events.MouseEvent.CLICK,$bind(this,this.clickPause));
		this.pauseBtn.addEventListener("touchEnd",$bind(this,this.clickPause));
		this.finishScreen = new FinishScreen();
		this.finishScreen.disable();
		this.addChild(this.finishScreen);
		this.goldCup = new flash.display.Sprite();
		this.silverCup = new flash.display.Sprite();
		this.bronzeCup = new flash.display.Sprite();
		this.goldCup.addChild(new flash.display.Bitmap(openfl.Assets.getBitmapData("img/goldCup.png")));
		this.silverCup.addChild(new flash.display.Bitmap(openfl.Assets.getBitmapData("img/silverCup.png")));
		this.bronzeCup.addChild(new flash.display.Bitmap(openfl.Assets.getBitmapData("img/bronzeCup.png")));
		this.goldCup.set_height(this.sHeight);
		this.goldCup.set_scaleX(this.goldCup.get_scaleY());
		this.goldCup.set_x(this.sWidth / 2 - this.goldCup.get_width() / 2);
		this.silverCup.set_height(this.sHeight);
		this.silverCup.set_scaleX(this.silverCup.get_scaleY());
		this.silverCup.set_x(this.sWidth / 2 - this.silverCup.get_width() / 2);
		this.bronzeCup.set_height(this.sHeight);
		this.bronzeCup.set_scaleX(this.bronzeCup.get_scaleY());
		this.bronzeCup.set_x(this.sWidth / 2 - this.bronzeCup.get_width() / 2);
		this.addChild(this.goldCup);
		this.addChild(this.silverCup);
		this.addChild(this.bronzeCup);
		this.goldCup.set_visible(this.silverCup.set_visible(this.bronzeCup.set_visible(false)));
		this.goldCup.addEventListener(flash.events.MouseEvent.CLICK,$bind(this,this.deactivateCups));
		this.goldCup.addEventListener("touchEnd",$bind(this,this.deactivateCups));
		this.silverCup.addEventListener(flash.events.MouseEvent.CLICK,$bind(this,this.deactivateCups));
		this.silverCup.addEventListener("touchEnd",$bind(this,this.deactivateCups));
		this.bronzeCup.addEventListener(flash.events.MouseEvent.CLICK,$bind(this,this.deactivateCups));
		this.bronzeCup.addEventListener("touchEnd",$bind(this,this.deactivateCups));
		this.setHeroType(5);
		this.numbersArr = new Array();
		var txtF = new flash.text.TextField();
		txtF.set_defaultTextFormat(new flash.text.TextFormat("Arial",12,16777215));
		var bmd;
		var _g = 1;
		while(_g < 10) {
			var i = _g++;
			txtF.set_text(Std.string(i));
			bmd = new flash.display.BitmapData(10,txtF.get_textHeight() | 0,true,0);
			bmd.draw(txtF);
			this.numbersArr.push(bmd);
		}
		this.creditsWindow = new flash.display.Bitmap(openfl.Assets.getBitmapData("img/creditsWindow.jpg"));
		this.helpWindow = new flash.display.Bitmap(openfl.Assets.getBitmapData("img/help_saddle.jpg"));
		this.creditsWindow.set_height(this.sHeight);
		this.creditsWindow.set_scaleX(this.creditsWindow.get_scaleY());
		this.creditsWindow.set_x(this.sWidth / 2 - this.creditsWindow.get_width() / 2);
		this.creditsWindow.set_y(this.sHeight / 2 - this.creditsWindow.get_height() / 2);
		this.helpWindow.set_height(this.sHeight);
		this.helpWindow.set_scaleX(this.helpWindow.get_scaleY());
		this.helpWindow.set_x(this.sWidth / 2 - this.helpWindow.get_width() / 2);
		this.helpWindow.set_y(this.sHeight / 2 - this.helpWindow.get_height() / 2);
		this.tapImgBmds = new Array();
		this.tapImgBmds.push(openfl.Assets.getBitmapData("img/tapImg1.png"));
		this.tapImgBmds.push(openfl.Assets.getBitmapData("img/tapImg2.png"));
		this.tapToStartBtn = new flash.display.Bitmap(openfl.Assets.getBitmapData("img/tapToStart.png"));
		this.tapToStartBtn.set_x(this.sWidth / 2 - this.tapToStartBtn.get_width() / 2);
		this.tapToStartBtn.set_y(this.sHeight / 2 - this.tapToStartBtn.get_height() / 2);
		this.addChild(this.tapToStartBtn);
		flash.Lib.get_current().get_stage().addEventListener(flash.events.MouseEvent.CLICK,$bind(this,this.tapToStartClick));
		flash.Lib.get_current().get_stage().addEventListener("touchEnd",$bind(this,this.tapToStartClick));
		flash.Lib.get_current().get_stage().addEventListener(flash.events.Event.ENTER_FRAME,$bind(this,this.update));
		flash.Lib.get_current().addEventListener(flash.events.MouseEvent.MOUSE_DOWN,$bind(this,this.click));
		flash.Lib.get_current().addEventListener("touchBegin",$bind(this,this.touch));
		js.Browser.document.addEventListener("touchstart",function(e) {
			e.preventDefault();
		},false);
		js.Browser.document.addEventListener("touchmove",function(e) {
			e.preventDefault();
		},false);
		this.activateOverlay(false);
	}
	,added: function(e) {
		this.removeEventListener(flash.events.Event.ADDED_TO_STAGE,$bind(this,this.added));
		this.get_stage().addEventListener(flash.events.Event.RESIZE,$bind(this,this.resize));
		this.init();
	}
	,trackPageview: function() {
		this.tracker.trackEvent(new googleAnalytics.Event("OutOfSaddle_HTML5",js.Browser.window.location.href),this.session,this.visitor);
	}
	,resize: function(e) {
		if(!this.inited) this.init();
		if(this.inited) {
			if(flash.Lib.get_current().get_stage().get_stageWidth() < flash.Lib.get_current().get_stage().get_stageHeight()) {
				this.set_visible(false);
				if(!this.isPaused && (this.state == 2 || this.state == 3)) this.clickPause(null);
				this.isPausedByPortrait = true;
				eval("document.getElementById('haxe:openfl').style.overflow = 'hidden'");
				if(this.rotateScreenWindow == null) {
					this.rotateScreenWindow = new flash.display.Bitmap(openfl.Assets.getBitmapData("img/Rotate_to_play.jpg"));
					this.rotateScreenWindow.set_width(flash.Lib.get_current().get_stage().get_stageWidth());
					this.rotateScreenWindow.set_scaleY(this.rotateScreenWindow.get_scaleX());
					this.rotateScreenWindow.set_y(flash.Lib.get_current().get_stage().get_stageHeight() / 2 - this.rotateScreenWindow.get_height() / 2);
				}
				flash.Lib.get_current().get_stage().addChild(this.rotateScreenWindow);
			} else {
				this.set_visible(true);
				eval("document.getElementById('haxe:openfl').style.overflow = 'visible'");
				if(this.rotateScreenWindow != null && this.rotateScreenWindow.parent != null) this.rotateScreenWindow.parent.removeChild(this.rotateScreenWindow);
			}
			return;
		}
		if(!this.inited) this.init();
	}
	,session: null
	,visitor: null
	,tracker: null
	,hp1: null
	,hr1: null
	,hp: null
	,sounds: null
	,inited: null
	,state: null
	,showFinishScreenDelay: null
	,rulesTxt: null
	,tapImg: null
	,tapImgBmds: null
	,tapImgFrame: null
	,wasShownTutorial: null
	,clickType: null
	,numbersArr: null
	,isPausedByPortrait: null
	,isPaused: null
	,gamePlay: null
	,roundsPlayed: null
	,numericFont2: null
	,numericFontLittle: null
	,numericFont: null
	,rotateScreenWindow: null
	,finishScreen: null
	,pauseMenu: null
	,androidCanvasReseted: null
	,pauseBtn: null
	,tapToStartBtn: null
	,helpWindow: null
	,creditsWindow: null
	,menuHeroes: null
	,isHardMode: null
	,higliterAlpha: null
	,heroHighliter: null
	,light: null
	,maxScaleStep: null
	,maxScale: null
	,initScale: null
	,bronzeCup: null
	,silverCup: null
	,goldCup: null
	,overlayShaddow: null
	,overlayFill: null
	,lifesPanel: null
	,heroSelectScreen: null
	,winLoseScreen: null
	,mainMenu: null
	,playMenu: null
	,getReadyScreen: null
	,mainHero: null
	,mainHeroType: null
	,places: null
	,heroesArray: null
	,background: null
	,mainContainer: null
	,canvas: null
	,heroesGap: null
	,startHeroPos: null
	,sHeight: null
	,sWidth: null
	,__class__: Main
});
var DocumentClass = function() {
	Main.call(this);
};
$hxClasses["DocumentClass"] = DocumentClass;
DocumentClass.__name__ = ["DocumentClass"];
DocumentClass.__super__ = Main;
DocumentClass.prototype = $extend(Main.prototype,{
	get_stage: function() {
		return flash.Lib.get_current().get_stage();
	}
	,__class__: DocumentClass
});
var BackGround = function() {
	this.precipiceOffseX = 730;
	this.inited = false;
	this.maxTileOffset = 0;
	this.randTileOffset = 0;
	this._x = 0;
	this._y = 0;
	flash.display.Sprite.call(this);
	this.sWidth = Main.current.sWidth;
	this.sHeight = Main.current.sHeight;
	this.hr = new flash.geom.Rectangle(0,0,this.sWidth,this.sHeight);
	this.hp = new flash.geom.Point();
	this.zeroPoint = new flash.geom.Point();
	this.bmd = openfl.Assets.getBitmapData("img/Background4.jpg");
	this.hr1 = new flash.geom.Rectangle(0,0,this.bmd.get_width() - this.maxTileOffset | 0,this.bmd.get_height());
	this.bgBmd = new flash.display.BitmapData(this.bmd.get_width() - this.maxTileOffset | 0,this.bmd.get_height());
	this.hp.x = this.precipiceOffseX;
	this.bgBm = new flash.display.Bitmap(this.bgBmd);
	this.addChild(this.bgBm);
	this.hp.x = this.hp.y = 0;
};
$hxClasses["BackGround"] = BackGround;
BackGround.__name__ = ["BackGround"];
BackGround.__super__ = flash.display.Sprite;
BackGround.prototype = $extend(flash.display.Sprite.prototype,{
	realWidth: function() {
		return this.bgBmd.get_width();
	}
	,realHeight: function() {
		return this.bgBmd.get_height();
	}
	,setRandTileOffset: function() {
		if(this.inited) return;
		this.randTileOffset = Math.random() * this.maxTileOffset | 0;
		this.hr1.x = this.randTileOffset;
		this.bgBmd.copyPixels(this.bmd,this.hr1,this.hp);
		this.inited = true;
	}
	,render: function(dest) {
	}
	,offsetX: function(value) {
		this._x = value;
		this.set_x(this._x);
	}
	,flora: null
	,precipice: null
	,hr1: null
	,bgBm: null
	,bgBmd: null
	,zeroPoint: null
	,hp: null
	,hr: null
	,sHeight: null
	,sWidth: null
	,precipiceOffseX: null
	,inited: null
	,maxTileOffset: null
	,randTileOffset: null
	,_x: null
	,_y: null
	,bmd: null
	,__class__: BackGround
});
var BitmapDataBlitting = function(bmd) {
	this.visible = true;
	this.y = 0;
	this.x = 0;
	this.bitmapData = bmd;
	this.width = bmd.___textureBuffer != null?bmd.___textureBuffer.width:0;
	this.height = bmd.___textureBuffer != null?bmd.___textureBuffer.height:0;
};
$hxClasses["BitmapDataBlitting"] = BitmapDataBlitting;
BitmapDataBlitting.__name__ = ["BitmapDataBlitting"];
BitmapDataBlitting.prototype = {
	bitmapData: null
	,height: null
	,width: null
	,visible: null
	,y: null
	,x: null
	,__class__: BitmapDataBlitting
}
var openfl = {}
openfl.AssetLibrary = function() {
};
$hxClasses["openfl.AssetLibrary"] = openfl.AssetLibrary;
openfl.AssetLibrary.__name__ = ["openfl","AssetLibrary"];
openfl.AssetLibrary.prototype = {
	loadText: function(id,handler) {
		var callback = function(bytes) {
			if(bytes == null) handler(null); else handler(bytes.readUTFBytes(bytes.length));
		};
		this.loadBytes(id,callback);
	}
	,loadSound: function(id,handler) {
		handler(this.getSound(id));
	}
	,loadMusic: function(id,handler) {
		handler(this.getMusic(id));
	}
	,loadMovieClip: function(id,handler) {
		handler(this.getMovieClip(id));
	}
	,loadFont: function(id,handler) {
		handler(this.getFont(id));
	}
	,loadBytes: function(id,handler) {
		handler(this.getBytes(id));
	}
	,loadBitmapData: function(id,handler) {
		handler(this.getBitmapData(id));
	}
	,load: function(handler) {
		handler(this);
	}
	,isLocal: function(id,type) {
		return true;
	}
	,getText: function(id) {
		var bytes = this.getBytes(id);
		if(bytes == null) return null; else return bytes.readUTFBytes(bytes.length);
	}
	,getSound: function(id) {
		return null;
	}
	,getPath: function(id) {
		return null;
	}
	,getMusic: function(id) {
		return this.getSound(id);
	}
	,getMovieClip: function(id) {
		return null;
	}
	,getFont: function(id) {
		return null;
	}
	,getBytes: function(id) {
		return null;
	}
	,getBitmapData: function(id) {
		return null;
	}
	,exists: function(id,type) {
		return false;
	}
	,__class__: openfl.AssetLibrary
}
var DefaultAssetLibrary = function() {
	openfl.AssetLibrary.call(this);
	DefaultAssetLibrary.path.set("img/Background4.jpg","img/Background4.jpg");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/Background4.jpg",value);
	DefaultAssetLibrary.path.set("img/bronzeCup.png","img/bronzeCup.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/bronzeCup.png",value);
	DefaultAssetLibrary.path.set("img/button_credits.png","img/button_credits.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/button_credits.png",value);
	DefaultAssetLibrary.path.set("img/button_help.png","img/button_help.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/button_help.png",value);
	DefaultAssetLibrary.path.set("img/button_menu.png","img/button_menu.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/button_menu.png",value);
	DefaultAssetLibrary.path.set("img/button_moregames.png","img/button_moregames.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/button_moregames.png",value);
	DefaultAssetLibrary.path.set("img/button_play.png","img/button_play.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/button_play.png",value);
	DefaultAssetLibrary.path.set("img/button_play1.png","img/button_play1.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/button_play1.png",value);
	DefaultAssetLibrary.path.set("img/button_play1Hard.png","img/button_play1Hard.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/button_play1Hard.png",value);
	DefaultAssetLibrary.path.set("img/button_play2.png","img/button_play2.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/button_play2.png",value);
	DefaultAssetLibrary.path.set("img/button_play2Hard.png","img/button_play2Hard.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/button_play2Hard.png",value);
	DefaultAssetLibrary.path.set("img/button_replay.png","img/button_replay.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/button_replay.png",value);
	DefaultAssetLibrary.path.set("img/button_score1.png","img/button_score1.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/button_score1.png",value);
	DefaultAssetLibrary.path.set("img/button_sound.png","img/button_sound.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/button_sound.png",value);
	DefaultAssetLibrary.path.set("img/button_soundX.png","img/button_soundX.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/button_soundX.png",value);
	DefaultAssetLibrary.path.set("img/creditsWindow.jpg","img/creditsWindow.jpg");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/creditsWindow.jpg",value);
	DefaultAssetLibrary.path.set("img/explosion/explosion1.png","img/explosion/explosion1.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/explosion/explosion1.png",value);
	DefaultAssetLibrary.path.set("img/explosion/explosion2.png","img/explosion/explosion2.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/explosion/explosion2.png",value);
	DefaultAssetLibrary.path.set("img/explosion/explosion3.png","img/explosion/explosion3.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/explosion/explosion3.png",value);
	DefaultAssetLibrary.path.set("img/explosion/explosion4.png","img/explosion/explosion4.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/explosion/explosion4.png",value);
	DefaultAssetLibrary.path.set("img/explosion/explosion5.png","img/explosion/explosion5.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/explosion/explosion5.png",value);
	DefaultAssetLibrary.path.set("img/Fon.jpg","img/Fon.jpg");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/Fon.jpg",value);
	DefaultAssetLibrary.path.set("img/Go.png","img/Go.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/Go.png",value);
	DefaultAssetLibrary.path.set("img/goldCup.png","img/goldCup.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/goldCup.png",value);
	DefaultAssetLibrary.path.set("img/help_saddle.jpg","img/help_saddle.jpg");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/help_saddle.jpg",value);
	DefaultAssetLibrary.path.set("img/horse1.png","img/horse1.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/horse1.png",value);
	DefaultAssetLibrary.path.set("img/horse2.png","img/horse2.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/horse2.png",value);
	DefaultAssetLibrary.path.set("img/horse3.png","img/horse3.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/horse3.png",value);
	DefaultAssetLibrary.path.set("img/horse4.png","img/horse4.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/horse4.png",value);
	DefaultAssetLibrary.path.set("img/horse5.png","img/horse5.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/horse5.png",value);
	DefaultAssetLibrary.path.set("img/horse6.png","img/horse6.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/horse6.png",value);
	DefaultAssetLibrary.path.set("img/horse7.png","img/horse7.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/horse7.png",value);
	DefaultAssetLibrary.path.set("img/horse8.png","img/horse8.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/horse8.png",value);
	DefaultAssetLibrary.path.set("img/horse9.png","img/horse9.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/horse9.png",value);
	DefaultAssetLibrary.path.set("img/icon_persLight.png","img/icon_persLight.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/icon_persLight.png",value);
	DefaultAssetLibrary.path.set("img/icon_persSelection.png","img/icon_persSelection.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/icon_persSelection.png",value);
	DefaultAssetLibrary.path.set("img/kickAnim.png","img/kickAnim.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/kickAnim.png",value);
	DefaultAssetLibrary.path.set("img/lifesContur.png","img/lifesContur.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/lifesContur.png",value);
	DefaultAssetLibrary.path.set("img/lifesFill.png","img/lifesFill.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/lifesFill.png",value);
	DefaultAssetLibrary.path.set("img/loadContur.png","img/loadContur.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/loadContur.png",value);
	DefaultAssetLibrary.path.set("img/loadFill.png","img/loadFill.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/loadFill.png",value);
	DefaultAssetLibrary.path.set("img/logo.png","img/logo.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/logo.png",value);
	DefaultAssetLibrary.path.set("img/MainFontNumeric.png","img/MainFontNumeric.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/MainFontNumeric.png",value);
	DefaultAssetLibrary.path.set("img/MainFontNumericLittle.png","img/MainFontNumericLittle.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/MainFontNumericLittle.png",value);
	DefaultAssetLibrary.path.set("img/medali.png","img/medali.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/medali.png",value);
	DefaultAssetLibrary.path.set("img/mrg_logo.png","img/mrg_logo.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/mrg_logo.png",value);
	DefaultAssetLibrary.path.set("img/nextRoundBtn.png","img/nextRoundBtn.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/nextRoundBtn.png",value);
	DefaultAssetLibrary.path.set("img/Num2.png","img/Num2.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/Num2.png",value);
	DefaultAssetLibrary.path.set("img/pause.png","img/pause.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/pause.png",value);
	DefaultAssetLibrary.path.set("img/pedestals_switch_btn.png","img/pedestals_switch_btn.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/pedestals_switch_btn.png",value);
	DefaultAssetLibrary.path.set("img/Pers/p1.png","img/Pers/p1.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/Pers/p1.png",value);
	DefaultAssetLibrary.path.set("img/Pers/p2.png","img/Pers/p2.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/Pers/p2.png",value);
	DefaultAssetLibrary.path.set("img/Pers/p3.png","img/Pers/p3.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/Pers/p3.png",value);
	DefaultAssetLibrary.path.set("img/Pers/p4.png","img/Pers/p4.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/Pers/p4.png",value);
	DefaultAssetLibrary.path.set("img/Pers/p5.png","img/Pers/p5.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/Pers/p5.png",value);
	DefaultAssetLibrary.path.set("img/Pers/p6.png","img/Pers/p6.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/Pers/p6.png",value);
	DefaultAssetLibrary.path.set("img/Pers/p7.png","img/Pers/p7.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/Pers/p7.png",value);
	DefaultAssetLibrary.path.set("img/Pers/p8.png","img/Pers/p8.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/Pers/p8.png",value);
	DefaultAssetLibrary.path.set("img/Pers/p9.png","img/Pers/p9.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/Pers/p9.png",value);
	DefaultAssetLibrary.path.set("img/places_desk.png","img/places_desk.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/places_desk.png",value);
	DefaultAssetLibrary.path.set("img/race1.png","img/race1.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/race1.png",value);
	DefaultAssetLibrary.path.set("img/race2.png","img/race2.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/race2.png",value);
	DefaultAssetLibrary.path.set("img/race3.png","img/race3.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/race3.png",value);
	DefaultAssetLibrary.path.set("img/race4.png","img/race4.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/race4.png",value);
	DefaultAssetLibrary.path.set("img/race5.png","img/race5.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/race5.png",value);
	DefaultAssetLibrary.path.set("img/race6.png","img/race6.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/race6.png",value);
	DefaultAssetLibrary.path.set("img/race7.png","img/race7.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/race7.png",value);
	DefaultAssetLibrary.path.set("img/race8.png","img/race8.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/race8.png",value);
	DefaultAssetLibrary.path.set("img/race9.png","img/race9.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/race9.png",value);
	DefaultAssetLibrary.path.set("img/raceHorse1.png","img/raceHorse1.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/raceHorse1.png",value);
	DefaultAssetLibrary.path.set("img/raceHorse2.png","img/raceHorse2.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/raceHorse2.png",value);
	DefaultAssetLibrary.path.set("img/raceHorse3.png","img/raceHorse3.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/raceHorse3.png",value);
	DefaultAssetLibrary.path.set("img/raceHorse4.png","img/raceHorse4.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/raceHorse4.png",value);
	DefaultAssetLibrary.path.set("img/raceHorse5.png","img/raceHorse5.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/raceHorse5.png",value);
	DefaultAssetLibrary.path.set("img/raceHorse6.png","img/raceHorse6.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/raceHorse6.png",value);
	DefaultAssetLibrary.path.set("img/raceHorse7.png","img/raceHorse7.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/raceHorse7.png",value);
	DefaultAssetLibrary.path.set("img/raceHorse8.png","img/raceHorse8.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/raceHorse8.png",value);
	DefaultAssetLibrary.path.set("img/raceHorse9.png","img/raceHorse9.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/raceHorse9.png",value);
	DefaultAssetLibrary.path.set("img/raceSelectPedestal.png","img/raceSelectPedestal.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/raceSelectPedestal.png",value);
	DefaultAssetLibrary.path.set("img/race_select_btn.png","img/race_select_btn.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/race_select_btn.png",value);
	DefaultAssetLibrary.path.set("img/Ready.png","img/Ready.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/Ready.png",value);
	DefaultAssetLibrary.path.set("img/Rotate_to_play.jpg","img/Rotate_to_play.jpg");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/Rotate_to_play.jpg",value);
	DefaultAssetLibrary.path.set("img/rulesTxt.png","img/rulesTxt.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/rulesTxt.png",value);
	DefaultAssetLibrary.path.set("img/Set.png","img/Set.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/Set.png",value);
	DefaultAssetLibrary.path.set("img/shaddow.png","img/shaddow.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/shaddow.png",value);
	DefaultAssetLibrary.path.set("img/ShadowOvr.png","img/ShadowOvr.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/ShadowOvr.png",value);
	DefaultAssetLibrary.path.set("img/silverCup.png","img/silverCup.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/silverCup.png",value);
	DefaultAssetLibrary.path.set("img/SunLight.png","img/SunLight.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/SunLight.png",value);
	DefaultAssetLibrary.path.set("img/tapImg1.png","img/tapImg1.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/tapImg1.png",value);
	DefaultAssetLibrary.path.set("img/tapImg2.png","img/tapImg2.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/tapImg2.png",value);
	DefaultAssetLibrary.path.set("img/tapToStart.png","img/tapToStart.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/tapToStart.png",value);
	DefaultAssetLibrary.path.set("img/tournament_places.png","img/tournament_places.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/tournament_places.png",value);
	DefaultAssetLibrary.path.set("img/YouFailed.png","img/YouFailed.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/YouFailed.png",value);
	DefaultAssetLibrary.path.set("img/YouWon.png","img/YouWon.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/YouWon.png",value);
	DefaultAssetLibrary.path.set("snd/ambient.mp3","snd/ambient.mp3");
	var value = Reflect.field(openfl.AssetType,"sound".toUpperCase());
	DefaultAssetLibrary.type.set("snd/ambient.mp3",value);
	DefaultAssetLibrary.path.set("snd/ambient.ogg","snd/ambient.ogg");
	var value = Reflect.field(openfl.AssetType,"sound".toUpperCase());
	DefaultAssetLibrary.type.set("snd/ambient.ogg",value);
	DefaultAssetLibrary.path.set("snd/beep1.mp3","snd/beep1.mp3");
	var value = Reflect.field(openfl.AssetType,"sound".toUpperCase());
	DefaultAssetLibrary.type.set("snd/beep1.mp3",value);
	DefaultAssetLibrary.path.set("snd/beep1.ogg","snd/beep1.ogg");
	var value = Reflect.field(openfl.AssetType,"sound".toUpperCase());
	DefaultAssetLibrary.type.set("snd/beep1.ogg",value);
	DefaultAssetLibrary.path.set("snd/beep2.mp3","snd/beep2.mp3");
	var value = Reflect.field(openfl.AssetType,"sound".toUpperCase());
	DefaultAssetLibrary.type.set("snd/beep2.mp3",value);
	DefaultAssetLibrary.path.set("snd/beep2.ogg","snd/beep2.ogg");
	var value = Reflect.field(openfl.AssetType,"sound".toUpperCase());
	DefaultAssetLibrary.type.set("snd/beep2.ogg",value);
	DefaultAssetLibrary.path.set("snd/beep3.mp3","snd/beep3.mp3");
	var value = Reflect.field(openfl.AssetType,"sound".toUpperCase());
	DefaultAssetLibrary.type.set("snd/beep3.mp3",value);
	DefaultAssetLibrary.path.set("snd/beep3.ogg","snd/beep3.ogg");
	var value = Reflect.field(openfl.AssetType,"sound".toUpperCase());
	DefaultAssetLibrary.type.set("snd/beep3.ogg",value);
	DefaultAssetLibrary.path.set("snd/horseRun.mp3","snd/horseRun.mp3");
	var value = Reflect.field(openfl.AssetType,"sound".toUpperCase());
	DefaultAssetLibrary.type.set("snd/horseRun.mp3",value);
	DefaultAssetLibrary.path.set("snd/horseRun.ogg","snd/horseRun.ogg");
	var value = Reflect.field(openfl.AssetType,"sound".toUpperCase());
	DefaultAssetLibrary.type.set("snd/horseRun.ogg",value);
	DefaultAssetLibrary.path.set("snd/jumpCry.mp3","snd/jumpCry.mp3");
	var value = Reflect.field(openfl.AssetType,"sound".toUpperCase());
	DefaultAssetLibrary.type.set("snd/jumpCry.mp3",value);
	DefaultAssetLibrary.path.set("snd/jumpCry.ogg","snd/jumpCry.ogg");
	var value = Reflect.field(openfl.AssetType,"sound".toUpperCase());
	DefaultAssetLibrary.type.set("snd/jumpCry.ogg",value);
	DefaultAssetLibrary.path.set("snd/kickSound1.mp3","snd/kickSound1.mp3");
	var value = Reflect.field(openfl.AssetType,"sound".toUpperCase());
	DefaultAssetLibrary.type.set("snd/kickSound1.mp3",value);
	DefaultAssetLibrary.path.set("snd/kickSound1.ogg","snd/kickSound1.ogg");
	var value = Reflect.field(openfl.AssetType,"sound".toUpperCase());
	DefaultAssetLibrary.type.set("snd/kickSound1.ogg",value);
	DefaultAssetLibrary.path.set("snd/kickSound2.mp3","snd/kickSound2.mp3");
	var value = Reflect.field(openfl.AssetType,"sound".toUpperCase());
	DefaultAssetLibrary.type.set("snd/kickSound2.mp3",value);
	DefaultAssetLibrary.path.set("snd/kickSound2.ogg","snd/kickSound2.ogg");
	var value = Reflect.field(openfl.AssetType,"sound".toUpperCase());
	DefaultAssetLibrary.type.set("snd/kickSound2.ogg",value);
	DefaultAssetLibrary.path.set("snd/kickSound3.mp3","snd/kickSound3.mp3");
	var value = Reflect.field(openfl.AssetType,"sound".toUpperCase());
	DefaultAssetLibrary.type.set("snd/kickSound3.mp3",value);
	DefaultAssetLibrary.path.set("snd/kickSound3.ogg","snd/kickSound3.ogg");
	var value = Reflect.field(openfl.AssetType,"sound".toUpperCase());
	DefaultAssetLibrary.type.set("snd/kickSound3.ogg",value);
	DefaultAssetLibrary.path.set("snd/nature.mp3","snd/nature.mp3");
	var value = Reflect.field(openfl.AssetType,"sound".toUpperCase());
	DefaultAssetLibrary.type.set("snd/nature.mp3",value);
	DefaultAssetLibrary.path.set("snd/nature.ogg","snd/nature.ogg");
	var value = Reflect.field(openfl.AssetType,"sound".toUpperCase());
	DefaultAssetLibrary.type.set("snd/nature.ogg",value);
};
$hxClasses["DefaultAssetLibrary"] = DefaultAssetLibrary;
DefaultAssetLibrary.__name__ = ["DefaultAssetLibrary"];
DefaultAssetLibrary.__super__ = openfl.AssetLibrary;
DefaultAssetLibrary.prototype = $extend(openfl.AssetLibrary.prototype,{
	loadSound: function(id,handler) {
		handler(this.getSound(id));
	}
	,loadMusic: function(id,handler) {
		handler(this.getMusic(id));
	}
	,loadFont: function(id,handler) {
		handler(this.getFont(id));
	}
	,loadBytes: function(id,handler) {
		if(DefaultAssetLibrary.path.exists(id)) {
			var loader = new flash.net.URLLoader();
			loader.addEventListener(flash.events.Event.COMPLETE,function(event) {
				var bytes = new flash.utils.ByteArray();
				bytes.writeUTFBytes(event.currentTarget.data);
				bytes.position = 0;
				handler(bytes);
			});
			loader.load(new flash.net.URLRequest(DefaultAssetLibrary.path.get(id)));
		} else handler(this.getBytes(id));
	}
	,loadBitmapData: function(id,handler) {
		if(DefaultAssetLibrary.path.exists(id)) {
			var loader = new flash.display.Loader();
			loader.contentLoaderInfo.addEventListener(flash.events.Event.COMPLETE,function(event) {
				handler((js.Boot.__cast(event.currentTarget.content , flash.display.Bitmap)).bitmapData);
			});
			loader.load(new flash.net.URLRequest(DefaultAssetLibrary.path.get(id)));
		} else handler(this.getBitmapData(id));
	}
	,isLocal: function(id,type) {
		return true;
	}
	,getSound: function(id) {
		return new flash.media.Sound(new flash.net.URLRequest(DefaultAssetLibrary.path.get(id)));
	}
	,getPath: function(id) {
		return DefaultAssetLibrary.path.get(id);
	}
	,getMusic: function(id) {
		return new flash.media.Sound(new flash.net.URLRequest(DefaultAssetLibrary.path.get(id)));
	}
	,getFont: function(id) {
		return js.Boot.__cast(Type.createInstance(DefaultAssetLibrary.className.get(id),[]) , flash.text.Font);
	}
	,getBytes: function(id) {
		var bytes = null;
		var data = ApplicationMain.urlLoaders.get(DefaultAssetLibrary.path.get(id)).data;
		if(js.Boot.__instanceof(data,String)) {
			bytes = new flash.utils.ByteArray();
			bytes.writeUTFBytes(data);
		} else if(js.Boot.__instanceof(data,flash.utils.ByteArray)) bytes = data; else bytes = null;
		if(bytes != null) {
			bytes.position = 0;
			return bytes;
		} else return null;
	}
	,getBitmapData: function(id) {
		return (js.Boot.__cast(ApplicationMain.loaders.get(DefaultAssetLibrary.path.get(id)).contentLoaderInfo.content , flash.display.Bitmap)).bitmapData;
	}
	,exists: function(id,type) {
		var assetType = DefaultAssetLibrary.type.get(id);
		if(assetType != null) {
			if(assetType == type || (type == openfl.AssetType.SOUND || type == openfl.AssetType.MUSIC) && (assetType == openfl.AssetType.MUSIC || assetType == openfl.AssetType.SOUND)) return true;
			if(type == openfl.AssetType.BINARY || type == null) return true;
		}
		return false;
	}
	,__class__: DefaultAssetLibrary
});
var EReg = function(r,opt) {
	opt = opt.split("u").join("");
	this.r = new RegExp(r,opt);
};
$hxClasses["EReg"] = EReg;
EReg.__name__ = ["EReg"];
EReg.prototype = {
	replace: function(s,by) {
		return s.replace(this.r,by);
	}
	,matchedPos: function() {
		if(this.r.m == null) throw "No string matched";
		return { pos : this.r.m.index, len : this.r.m[0].length};
	}
	,matchedRight: function() {
		if(this.r.m == null) throw "No string matched";
		var sz = this.r.m.index + this.r.m[0].length;
		return this.r.s.substr(sz,this.r.s.length - sz);
	}
	,matched: function(n) {
		return this.r.m != null && n >= 0 && n < this.r.m.length?this.r.m[n]:(function($this) {
			var $r;
			throw "EReg::matched";
			return $r;
		}(this));
	}
	,match: function(s) {
		if(this.r.global) this.r.lastIndex = 0;
		this.r.m = this.r.exec(s);
		this.r.s = s;
		return this.r.m != null;
	}
	,r: null
	,__class__: EReg
}
var FinishScreen = function() {
	flash.display.Sprite.call(this);
	this.main = Main.current;
	this.numericFont = this.main.numericFont;
	this.numericFontLittle = this.main.numericFontLittle;
	this.placesDesk = new flash.display.Bitmap(openfl.Assets.getBitmapData("img/places_desk.png"));
	this.scoreTableBmd1 = openfl.Assets.getBitmapData("img/button_score1.png");
	this.scoreTable = new flash.display.Bitmap(this.scoreTableBmd1);
	this.medalsTable = new flash.display.Bitmap(openfl.Assets.getBitmapData("img/medali.png"));
	this.nextRoundBmd = openfl.Assets.getBitmapData("img/nextRoundBtn.png");
	this.restartBmd = openfl.Assets.getBitmapData("img/button_replay.png");
	this.nextRoundRestartBtn = new flash.display.Bitmap(this.nextRoundBmd);
	this.mainMenuBtn = new flash.display.Bitmap(openfl.Assets.getBitmapData("img/button_menu.png"));
	this.moreGamesBtn = new flash.display.Bitmap(openfl.Assets.getBitmapData("img/button_moregames.png"));
	this.tournamentPlacesDesk = openfl.Assets.getBitmapData("img/tournament_places.png");
	this.pedestalSwitchBtn = new flash.display.Bitmap(openfl.Assets.getBitmapData("img/pedestals_switch_btn.png"));
	this.persLight = openfl.Assets.getBitmapData("img/icon_persLight.png");
	this.placesDesk.set_x(this.mainMenuBtn.get_width() + (this.scoreTable.get_width() - this.placesDesk.get_width()) / 2 - 10);
	this.addChild(this.placesDesk);
	this.scoreTable.set_x(this.mainMenuBtn.get_width() - 10);
	this.scoreTable.set_y(this.placesDesk.get_height() - 15);
	this.addChild(this.scoreTable);
	this.medalsTable.set_y(this.scoreTable.get_y() + this.scoreTable.get_height() - 15);
	this.medalsTable.set_x(this.mainMenuBtn.get_width() + (this.scoreTable.get_width() - this.medalsTable.get_width()) / 2 - 10);
	this.addChild(this.medalsTable);
	this.pedestalSwitchBtn.set_x(this.scoreTable.get_x() + this.scoreTable.get_width() - 50);
	this.pedestalSwitchBtn.set_y(this.scoreTable.get_y() - 10);
	this.pedestalSwitchBtn.alpha = 0;
	this.pedestalField = new flash.display.Bitmap(new flash.display.BitmapData(this.placesDesk.bitmapData.get_width(),this.placesDesk.bitmapData.get_height() + 30,true,0));
	this.pedestalField.set_x(this.scoreTable.get_x());
	this.pedestalField.set_y(-70);
	this.addChild(this.pedestalField);
	this.labelField = new flash.display.Bitmap(new flash.display.BitmapData(this.scoreTable.get_width() | 0,this.scoreTable.get_height() + this.placesDesk.get_height() + this.medalsTable.get_height() - 30 + 70 | 0,true,0));
	this.labelField.set_y(-70);
	this.labelField.set_x(this.scoreTable.get_x());
	this.addChild(this.labelField);
	this.mainMenuBtn.set_x(0);
	this.mainMenuBtn.set_y((this.scoreTable.get_height() + this.placesDesk.get_height() + this.medalsTable.get_height() - 30) / 2 - this.nextRoundRestartBtn.get_height() / 2 - this.mainMenuBtn.get_height() / 2);
	this.addChild(this.mainMenuBtn);
	this.moreGamesBtn.set_x(-10);
	this.moreGamesBtn.set_y(this.mainMenuBtn.get_y() + this.mainMenuBtn.get_height());
	this.addChild(this.moreGamesBtn);
	this.nextRoundRestartBtn.set_x(this.scoreTable.get_x() + this.scoreTable.get_width() - 10);
	this.nextRoundRestartBtn.set_y((this.scoreTable.get_height() + this.placesDesk.get_height() + this.medalsTable.get_height() - 30) / 2 - this.nextRoundRestartBtn.get_height() / 2);
	this.addChild(this.nextRoundRestartBtn);
	this.set_x(this.main.sWidth / 2 - this.get_width() / 2);
	this.set_y(this.main.sHeight / 2 - (this.scoreTable.get_height() + this.placesDesk.bitmapData.get_height()) / 2);
	this.placesBm = new flash.display.Bitmap(new flash.display.BitmapData(this.tournamentPlacesDesk.get_width(),this.tournamentPlacesDesk.get_height(),true,0));
	this.placesBm.set_y(this.scoreTable.get_y() - this.placesBm.bitmapData.get_height() + 10);
	this.placesBm.set_x(this.scoreTable.get_x() + this.scoreTable.get_width() / 2 - this.tournamentPlacesDesk.get_width() / 2);
	this.addChild(this.placesBm);
	this.youFailed = new flash.display.Bitmap(openfl.Assets.getBitmapData("img/YouFailed.png"));
	this.youFailed.set_x(this.scoreTable.get_x() + this.scoreTable.get_width() / 2 - this.youFailed.get_width() / 2);
	this.youFailed.set_y(this.scoreTable.get_y() - this.youFailed.get_height());
	this.addChild(this.youFailed);
	this.youWon = new flash.display.Bitmap(openfl.Assets.getBitmapData("img/YouWon.png"));
	this.youWon.set_x(this.scoreTable.get_x() + this.scoreTable.get_width() / 2 - this.youWon.get_width() / 2);
	this.youWon.set_y(this.scoreTable.get_y() - this.youWon.get_height() + 70);
	this.addChild(this.youWon);
	this.addChild(this.pedestalSwitchBtn);
	this.setChildIndex(this.mainMenuBtn,this.__children.length - 1);
	this.nextRoundRestartBtn.addEventListener(flash.events.MouseEvent.CLICK,$bind(this,this.nextRoundRestartClick));
	this.nextRoundRestartBtn.addEventListener("touchEnd",$bind(this,this.nextRoundTouch));
	this.mainMenuBtn.addEventListener(flash.events.MouseEvent.CLICK,$bind(this,this.clickMainMenu));
	this.mainMenuBtn.addEventListener("touchEnd",$bind(this,this.touchMainMenu));
	this.pedestalSwitchBtn.addEventListener(flash.events.MouseEvent.CLICK,$bind(this,this.switchPedestalClick));
	this.pedestalSwitchBtn.addEventListener("touchEnd",$bind(this,this.switchPedestalClick));
	this.moreGamesBtn.__graphics.__surface.addEventListener("touchend",Main.openMoreGames);
	this.moreGamesBtn.__graphics.__surface.addEventListener("click",Main.openMoreGames);
	this.hp = new flash.geom.Point();
};
$hxClasses["FinishScreen"] = FinishScreen;
FinishScreen.__name__ = ["FinishScreen"];
FinishScreen.__super__ = flash.display.Sprite;
FinishScreen.prototype = $extend(flash.display.Sprite.prototype,{
	touchMainMenu: function(e) {
		if(!this.get_visible()) return;
		this.main.sounds.playAmbient(true);
		this.main.sounds.stopSound("nature");
		this.disable();
		this.main.playMenu.enable();
	}
	,clickMainMenu: function(e) {
		if(!this.get_visible()) return;
		this.main.sounds.playAmbient(true);
		this.main.sounds.stopSound("nature");
		this.disable();
		this.main.playMenu.enable();
	}
	,switchPedestalClick: function(e) {
		if(e.type == flash.events.MouseEvent.CLICK) this.pedestalSwitchBtn.removeEventListener("touchEnd",$bind(this,this.switchPedestalClick)); else this.pedestalSwitchBtn.removeEventListener(flash.events.MouseEvent.CLICK,$bind(this,this.switchPedestalClick));
		if(e.type != null && e.type != this.main.clickType) return;
		if(this.pedestalSwitchBtn.alpha == 0) return;
		if(this.pedestalField.alpha == 1) {
			this.placesBm.alpha = 1;
			this.placesDesk.alpha = 0;
			this.pedestalField.alpha = 0;
		} else {
			this.placesBm.alpha = 0;
			this.placesDesk.alpha = 1;
			this.pedestalField.alpha = 1;
		}
	}
	,nextRoundTouch: function(e) {
		if(!this.get_visible()) return;
		if(e.type != null && e.type != this.main.clickType) return;
		this.disable();
		this.main.state = 1;
		if(this.nextRoundRestartBtn.bitmapData == this.nextRoundBmd) this.main.newRound(); else this.main.newGame(true);
	}
	,nextRoundRestartClick: function(e) {
		if(!this.get_visible()) return;
		if(e.type != null && e.type != this.main.clickType) return;
		this.disable();
		this.main.state = 1;
		if(this.nextRoundRestartBtn.bitmapData == this.nextRoundBmd) this.main.newRound(); else this.main.newGame(true);
	}
	,setData: function(gameplay,round,score,place,gold,silver,bronze,pricersArr,setRes,isWin,places,heroPlace,pointsArr) {
		if(heroPlace == null) heroPlace = 0;
		if(isWin == null) isWin = false;
		if(setRes == null) setRes = false;
		if(bronze == null) bronze = 0;
		if(silver == null) silver = 0;
		if(gold == null) gold = 0;
		if(place == null) place = 0;
		this.labelField.bitmapData.fillRect(this.labelField.bitmapData.rect,0);
		this.placesBm.bitmapData.fillRect(this.placesBm.bitmapData.rect,0);
		this.pedestalField.bitmapData.fillRect(this.pedestalField.bitmapData.rect,0);
		this.numericFont.drawTo(this.labelField.bitmapData,Std.string(round),this.labelField.bitmapData.get_width() / 2,205,true);
		this.numericFont.drawTo(this.labelField.bitmapData,Std.string(score),this.labelField.bitmapData.get_width() / 2,270,true);
		this.numericFont.drawTo(this.labelField.bitmapData,Std.string(place),this.labelField.bitmapData.get_width() / 2,338,true);
		this.numericFont.drawTo(this.labelField.bitmapData,Std.string(gold),58,408);
		this.numericFont.drawTo(this.labelField.bitmapData,Std.string(silver),113,408);
		this.numericFont.drawTo(this.labelField.bitmapData,Std.string(bronze),167,408);
		if(pricersArr != null) {
			this.placesDesk.alpha = 1;
			this.pedestalField.alpha = 1;
			this.placesBm.alpha = 0;
			this.hp.x = 60 - pricersArr[2].get_width() / 2;
			this.hp.y = 121 - pricersArr[2].get_height();
			this.pedestalField.bitmapData.copyPixels(pricersArr[2],pricersArr[2].rect,this.hp,null,null,true);
			this.hp.x = 114 - pricersArr[0].get_width() / 2;
			this.hp.y = 80 - pricersArr[0].get_height();
			this.pedestalField.bitmapData.copyPixels(pricersArr[0],pricersArr[0].rect,this.hp,null,null,true);
			this.hp.x = 160 - pricersArr[1].get_width() / 2;
			this.hp.y = 99 - pricersArr[1].get_height();
			this.pedestalField.bitmapData.copyPixels(pricersArr[1],pricersArr[1].rect,this.hp,null,null,true);
			var pl = this.main.mainHero.placeThisRound;
			if(pl <= 3 && pl > 0) {
				if(pl == 3) {
					this.hp.x = 39;
					this.hp.y = 50;
				} else if(pl == 1) {
					this.hp.x = 91;
					this.hp.y = 15;
				} else if(pl == 2) {
					this.hp.x = 138;
					this.hp.y = 30;
				}
				this.pedestalField.bitmapData.copyPixels(this.persLight,this.persLight.rect,this.hp,null,null,true);
			}
		}
		this.pedestalSwitchBtn.alpha = 0;
		if(places != null) {
			this.hp.x = this.hp.y = 0;
			this.placesBm.bitmapData.copyPixels(this.tournamentPlacesDesk,this.tournamentPlacesDesk.rect,this.hp);
			var _g1 = 0, _g = places.length;
			while(_g1 < _g) {
				var i = _g1++;
				this.hp.y = 65 - places[i].get_height();
				this.hp.x = i * 63.5 - places[i].get_width() / 2 + 74;
				this.placesBm.bitmapData.copyPixels(places[i],places[i].rect,this.hp,null,null,true);
				this.hp.y = 105;
				this.hp.x = i * 63.5 + 74;
				this.numericFontLittle.drawTo(this.placesBm.bitmapData,Std.string(pointsArr[i]),this.hp.x,this.hp.y,true);
				if(i == heroPlace - 1) {
					this.hp.y = 70 - this.persLight.get_height() + 40;
					this.hp.x = i * 63.5 - this.persLight.get_width() / 2 + 73 + 4;
					this.placesBm.bitmapData.copyPixels(this.persLight,this.persLight.rect,this.hp,null,null,true);
				}
			}
			if(setRes) this.placesBm.alpha = 1; else this.placesBm.alpha = 0;
		}
		if(setRes) {
			if(!isWin) {
				this.youFailed.alpha = 1;
				this.youWon.alpha = 0;
				return;
			} else this.youFailed.alpha = 0;
			if(gameplay == 1) this.youWon.alpha = 1; else this.youWon.alpha = 0;
			this.nextRoundRestartBtn.set_bitmapData(this.restartBmd);
			this.placesDesk.alpha = 0;
		} else {
			if(this.main.gamePlay == 2) this.pedestalSwitchBtn.alpha = 1;
			this.youFailed.alpha = 0;
			this.youWon.alpha = 0;
			this.nextRoundRestartBtn.set_bitmapData(this.nextRoundBmd);
			this.placesDesk.alpha = 1;
		}
	}
	,enable: function() {
		this.set_visible(true);
		this.main.activateOverlay(true);
	}
	,disable: function() {
		this.set_visible(false);
		this.main.deactivateOverlays();
	}
	,clickBtn: function(e) {
		if(!this.get_visible()) return;
		this.hp.x = e.stageX;
		this.hp.y = e.stageY;
		if(this.nextRoundRestartBtn.get_visible() && this.nextRoundRestartBtn.hitTestPoint(this.hp.x,this.hp.y)) this.nextRoundRestartClick(e); else if(this.mainMenuBtn.get_visible() && this.mainMenuBtn.hitTestPoint(this.hp.x,this.hp.y)) this.clickMainMenu(e); else if(this.pedestalSwitchBtn.get_visible() && this.pedestalSwitchBtn.hitTestPoint(this.hp.x,this.hp.y)) this.switchPedestalClick(e);
	}
	,hp: null
	,youFailed: null
	,youWon: null
	,placesBm: null
	,persLight: null
	,pedestalSwitchBtn: null
	,moreGamesBtn: null
	,mainMenuBtn: null
	,restartBmd: null
	,nextRoundBmd: null
	,nextRoundRestartBtn: null
	,pedestalField: null
	,labelField: null
	,tournamentPlacesDesk: null
	,placesDesk: null
	,scoreTableBmd2: null
	,scoreTableBmd1: null
	,medalsTable: null
	,scoreTable: null
	,numericFontLittle: null
	,numericFont: null
	,main: null
	,__class__: FinishScreen
});
var GameSounds = function() {
	this.soundsAvailable = true;
	this.muted = false;
	this.ambientAttemps = 0;
	this.playSoundsByAction = false;
	this.soundAssets = new haxe.ds.StringMap();
	this.soundsToPlay = new Array();
	eval("getOS();");
	var os = eval("userOS");
	var osVer = eval("userOSver");
	if(os == "iOS" && Std.parseFloat(osVer.charAt(0)) < 6) {
		this.soundsAvailable = false;
		this.muted = true;
		this.ambientAttemps = 2;
	}
	if(os == "iOS") this.playSoundsByAction = true;
	this.ambientAttemps = 2;
	eval("new Howl({ " + " urls: ['" + "snd/ambient" + ".mp3', '" + "snd/ambient" + ".ogg'], " + " loop : true " + " }); ");
	js.Browser.document.addEventListener("touchstart",$bind(this,this.bodyClick));
	js.Browser.document.addEventListener("touchend",$bind(this,this.bodyClick));
	js.Browser.document.addEventListener("click",$bind(this,this.bodyClick));
};
$hxClasses["GameSounds"] = GameSounds;
GameSounds.__name__ = ["GameSounds"];
GameSounds.prototype = {
	unMute: function(startAmbient) {
		if(startAmbient == null) startAmbient = true;
		if(!this.soundsAvailable) return;
		this.muted = false;
		if(startAmbient) this.playAmbient(true); else this.playSound("nature","nature",true);
	}
	,mute: function() {
		if(!this.soundsAvailable) return;
		this.muted = true;
		this.pauseAmbient();
		this.stopSound("nature");
		var $it0 = ((function(_e) {
			return function() {
				return _e.iterator();
			};
		})(this.soundAssets))();
		while( $it0.hasNext() ) {
			var i = $it0.next();
			if(this.soundAssets.get(i) != null && this.soundAssets.get(i) != this.ambientSound) this.soundAssets.get(i).stop();
		}
	}
	,stopAmbient: function() {
		if(this.ambientSound == null) this.ambientSound = this.soundAssets.get("snd/ambient");
		if(this.ambientSound != null) this.ambientSound.stop();
	}
	,pauseAmbient: function() {
		if(this.ambientSound == null) this.ambientSound = this.soundAssets.get("snd/ambient");
		if(this.ambientSound != null) this.ambientSound.pause();
	}
	,playAmbient: function(startImed) {
		if(startImed == null) startImed = false;
		if(!this.soundsAvailable || this.muted) return;
		if(this.ambientSound == null) {
			this.ambientSound = this.soundAssets.get("snd/ambient");
			if(this.ambientSound != null) {
				this.ambientSound.loop(true);
				this.ambientSound.play("ambient");
			}
		} else {
			this.ambientSound.loop(true);
			if(!this.playSoundsByAction || startImed) this.ambientSound.play("ambient"); else this.soundsToPlay.push({ sound : this.ambientSound, sprite : "ambient"});
		}
	}
	,pauseSound: function(soundName) {
		if(!this.soundsAvailable || this.muted) return;
		var sound = this.soundAssets.get("snd/" + soundName);
		sound.pause();
	}
	,stopSound: function(soundName) {
		if(!this.soundsAvailable) return;
		var sound = this.soundAssets.get("snd/" + soundName);
		if(sound != null) sound.stop();
	}
	,playSound: function(soundName,spriteName,loop,sendToQuaryList,ignoreQuaryList) {
		if(ignoreQuaryList == null) ignoreQuaryList = false;
		if(sendToQuaryList == null) sendToQuaryList = false;
		if(loop == null) loop = false;
		if(spriteName == null) spriteName = "";
		if(!this.soundsAvailable || this.muted) return;
		var sound = this.soundAssets.get("snd/" + soundName);
		if(loop) sound.loop(true);
		if(!this.playSoundsByAction || ignoreQuaryList) sound.play(spriteName); else if(sendToQuaryList) this.soundsToPlay.push({ sound : sound, sprite : spriteName});
	}
	,sMUp: function() {
		var snd;
		var spr;
		var _g1 = 0, _g = this.soundsToPlay.length;
		while(_g1 < _g) {
			var i = _g1++;
			snd = this.soundsToPlay[i].sound;
			spr = this.soundsToPlay[i].sprite;
			if(snd != null) snd.play(spr);
		}
		this.soundsToPlay = new Array();
	}
	,sMMove: function() {
		var snd;
		var spr;
		var _g1 = 0, _g = this.soundsToPlay.length;
		while(_g1 < _g) {
			var i = _g1++;
			snd = this.soundsToPlay[i].sound;
			spr = this.soundsToPlay[i].sprite;
			if(snd != null) snd.play(spr);
		}
		this.soundsToPlay = new Array();
	}
	,getSound: function(stream,buffer,loop,autoplay,sprite) {
		if(autoplay == null) autoplay = false;
		if(loop == null) loop = false;
		if(buffer == null) buffer = false;
		var spriteString = "";
		if(sprite != null) {
			var wasAnElement = false;
			spriteString = ", sprite:{";
			var spr = Reflect.fields(sprite);
			var _g = 0;
			while(_g < spr.length) {
				var i = spr[_g];
				++_g;
				spriteString += (wasAnElement?",":"") + Std.string(i) + ":[" + Reflect.field(sprite,i)[0] + "," + Reflect.field(sprite,i)[1] + "]";
				wasAnElement = true;
			}
			spriteString += "}";
		}
		var snd = eval("new Howl({ " + " urls: ['" + stream + ".ogg', '" + stream + ".mp3'], " + " autoplay : " + (autoplay?"true":"false") + "," + " loop : " + (loop?"true":"false") + spriteString + " }); ");
		return snd;
	}
	,bodyClick: function(event) {
		js.Browser.document.removeEventListener("touchstart",$bind(this,this.bodyClick));
		js.Browser.document.removeEventListener("touchend",$bind(this,this.bodyClick));
		js.Browser.document.removeEventListener("click",$bind(this,this.bodyClick));
		if(!this.soundsAvailable) return;
		if(this.playSoundsByAction) {
			if(event.type == "touchend" || event.type == "touchstart") {
				js.Browser.document.addEventListener("touchstart",$bind(this,this.sMMove));
				js.Browser.document.addEventListener("touchmove",$bind(this,this.sMMove));
				js.Browser.document.addEventListener("touchend",$bind(this,this.sMUp));
			} else {
				js.Browser.document.addEventListener("mousedown",$bind(this,this.sMMove));
				js.Browser.document.addEventListener("mousemove",$bind(this,this.sMMove));
				js.Browser.document.addEventListener("mouseup",$bind(this,this.sMUp));
			}
		}
		var sounds = [{ stream : "snd/ambient", loop : true, buffer : false, autoplay : false, sprite : { ambient : [50,50000]}},{ stream : "snd/nature", loop : true, buffer : false, autoplay : false, sprite : { nature : [50,80000]}},{ stream : "snd/horseRun"},{ stream : "snd/jumpCry"},{ stream : "snd/kickSound1", sprite : { kick : [45,1000]}},{ stream : "snd/kickSound2", sprite : { kick : [45,1000]}},{ stream : "snd/kickSound3", sprite : { kick : [45,1000]}},{ stream : "snd/beep1", sprite : { beep : [58,1000]}},{ stream : "snd/beep2", sprite : { beep : [58,1000]}},{ stream : "snd/beep3", sprite : { beep : [58,1000]}}];
		var s;
		var sn;
		var _g1 = 0, _g = sounds.length;
		while(_g1 < _g) {
			var i = _g1++;
			sn = sounds[i];
			s = this.getSound(sn.stream,sn.buffer,sn.loop,sn.autoplay,sn.sprite);
			var key = sn.stream, value = s;
			this.soundAssets.set(key,value);
		}
		this.playAmbient();
	}
	,soundsAvailable: null
	,muted: null
	,ambientAttemps: null
	,playSoundsByAction: null
	,soundsToPlay: null
	,ambientSound: null
	,soundAssets: null
	,__class__: GameSounds
}
var GetReadyScreen = function() {
	this.timer2IsRuning = false;
	this.timer1IsRuning = false;
	this.breaked = false;
	flash.display.Sprite.call(this);
	this.mouseEnabled = false;
	this.mouseChildren = false;
	this.readyImg = new flash.display.Bitmap(openfl.Assets.getBitmapData("img/Ready.png"));
	this.setImg = new flash.display.Bitmap(openfl.Assets.getBitmapData("img/Set.png"));
	this.goImg = new flash.display.Bitmap(openfl.Assets.getBitmapData("img/Go.png"));
	this.readyImg.set_x(Main.current.sWidth / 2 - this.readyImg.get_width() / 2);
	this.readyImg.set_y(Main.current.sHeight / 2 - this.readyImg.get_height() / 2);
	this.setImg.set_x(Main.current.sWidth / 2 - this.setImg.get_width() / 2);
	this.setImg.set_y(Main.current.sHeight / 2 - this.setImg.get_height() / 2);
	this.goImg.set_x(Main.current.sWidth / 2 - this.goImg.get_width() / 2);
	this.goImg.set_y(Main.current.sHeight / 2 - this.goImg.get_height() / 2);
	this.addChild(this.readyImg);
	this.addChild(this.setImg);
	this.addChild(this.goImg);
	this.readyImg.alpha = this.setImg.alpha = this.goImg.alpha = 0;
};
$hxClasses["GetReadyScreen"] = GetReadyScreen;
GetReadyScreen.__name__ = ["GetReadyScreen"];
GetReadyScreen.__super__ = flash.display.Sprite;
GetReadyScreen.prototype = $extend(flash.display.Sprite.prototype,{
	unpause: function() {
		if(this.timer1IsRuning) this.timer1.start();
		if(this.timer2IsRuning) this.timer2.start();
	}
	,pause: function() {
		if(this.timer1IsRuning) this.timer1.stop();
		if(this.timer2IsRuning) this.timer2.stop();
	}
	,stop: function() {
		this.breaked = true;
		this.set_visible(false);
		this.timer1.stop();
		this.timer2.stop();
	}
	,hide: function() {
		this.readyImg.alpha = this.setImg.alpha = this.goImg.alpha = 0;
		this.set_visible(false);
	}
	,goFun: function(e) {
		this.readyImg.alpha = this.setImg.alpha = 0;
		this.goImg.alpha = 1;
		haxe.Timer.delay($bind(this,this.hide),1000);
		if(this.breaked) return;
		Main.current.state = 3;
		this.timer2IsRuning = false;
		Main.current.sounds.playSound("beep3","beep",false,false);
	}
	,setFun: function(e) {
		if(this.breaked) return;
		this.readyImg.alpha = this.goImg.alpha = 0;
		this.setImg.alpha = 1;
		this.timer1IsRuning = false;
		Main.current.sounds.playSound("beep2","beep",false,false);
	}
	,init: function() {
		this.breaked = false;
		this.set_visible(true);
		this.setImg.alpha = this.goImg.alpha = 0;
		this.readyImg.alpha = 1;
		Main.current.sounds.playSound("beep1","beep",false,false);
		if(this.timer1 == null) {
			this.timer1 = new flash.utils.Timer(2000,1);
			this.timer1.addEventListener("timerComplete",$bind(this,this.setFun));
		} else this.timer1.reset();
		this.timer1.start();
		if(this.timer2 == null) {
			this.timer2 = new flash.utils.Timer(3000 + Math.round(Math.random() * 2500),1);
			this.timer2.addEventListener("timerComplete",$bind(this,this.goFun));
		} else this.timer2.reset();
		this.timer2.start();
		this.timer1IsRuning = true;
		this.timer2IsRuning = true;
	}
	,goImg: null
	,setImg: null
	,readyImg: null
	,timer2IsRuning: null
	,timer1IsRuning: null
	,timer2: null
	,timer1: null
	,breaked: null
	,__class__: GetReadyScreen
});
var Hero = function(type,defaultX,defaultY) {
	if(defaultY == null) defaultY = 0;
	if(defaultX == null) defaultX = 0;
	this.totalScores = 0;
	this.lifes = 100;
	this.raceTime = 0;
	this.startingTime = 0;
	this.losedLifesThisRound = 0;
	this.placeThisRound = 0;
	this._rotation = 0;
	this.visible = true;
	this.rotation = 0;
	this.y = 0;
	this.x = 0;
	this.kickAnimShowFrames = 3;
	this.kickAnimFrame = 0;
	this.startDelay = 0;
	this.isUnderDeep = false;
	this.failedStart = false;
	this.falledDeepThisRound = false;
	this.dead = false;
	this.fallingDeep = false;
	this.isPlayer = false;
	this.finished = false;
	this.isOnGround = false;
	this.isInFly = false;
	this.horseAng = 0;
	this.horseAngSpeed = 0.6;
	this.horseMaxAngle = 15;
	this.bounceAngSpeed = 3.14 / 180 * 100;
	this.bounceAng = 0;
	this.bounceSpeedXDump = 1.2;
	this.bounceMinSpeedX = 4;
	this.bounceYDump = 0.7;
	this.bounceY = 0;
	this.fallRotateAng = 0;
	this.rotationDump = 0.98;
	this.rotationSpeed = 0;
	this.startFlyX = 0;
	this.maxDistStartFly = 775;
	this.minDistStartFly = 600;
	this.deep2EndX = 8300;
	this.deep2StartX = 8000;
	this.deep1EndX = 1265;
	this.deep1StartX = 820;
	this.maxStartDelayHard = 8;
	this.minStartDelayHard = 3;
	this.maxStartDelay = 12;
	this.minStartDelay = 6;
	this.FlyDumpY = 0.1;
	this.FlyDumpX = 0.1;
	this.HorseAceleration = 0.5;
	this.minSpeed = 2;
	this.speedY = 0;
	this.speed = 5;
	this.initSpeed = 5;
	this.endY = 7860;
	this.startY = 0;
	this.startX = 0;
	this.main = Main.current;
	this.type = type;
	this.pi = Math.PI;
	this.placeFont = this.main.numericFont2;
	this.gamePlay2Scores = [20,15,12,10,8,6,4,2,1];
	this.startX = defaultX;
	this.startY = defaultY;
	this.x = this.startX;
	this.y = this.startY;
	this.mainHero = new BitmapDataBlitting(openfl.Assets.getBitmapData("img/raceHorse" + type + ".png"));
	this.mainHero.y = -this.mainHero.bitmapData.get_height();
	this.mainHero.x = -this.mainHero.bitmapData.get_width() / 2;
	this.pers = new BitmapDataBlitting(openfl.Assets.getBitmapData("img/race" + type + ".png"));
	this.pers.x = -this.pers.bitmapData.get_width() / 2;
	this.pers.y = -this.pers.bitmapData.get_height() / 2;
	this.pers.visible = false;
	this.horseBm = new BitmapDataBlitting(openfl.Assets.getBitmapData("img/horse" + type + ".png"));
	this.horseBm.visible = false;
	this.shaddow = new BitmapDataBlitting(openfl.Assets.getBitmapData("img/shaddow.png"));
	this.shaddow.width = this.mainHero.bitmapData.get_width();
	this.shaddow.x = this.x - this.shaddow.width / 2;
	this.shaddow.y = this.y;
	this.kickAnim = new BitmapDataBlitting(openfl.Assets.getBitmapData("img/kickAnim.png"));
	this.kickAnim.visible = false;
	this.explosion = new SimpleMc("img/explosion/explosion",5,0.4);
	this.explosion.x = this.x - this.explosion.get_width() / 2;
	this.explosion.y = this.y - this.explosion.get_height();
	this.explosion.visible = false;
	this.hm = new flash.geom.Matrix();
	this.hp = new flash.geom.Point();
	this.gradToRad = Math.PI / 180;
	this.sWidth = Main.current.sWidth;
	this.sHeight = Main.current.sHeight;
	this.medals = new Array();
	this.medals[0] = 0;
	this.medals[1] = 0;
	this.medals[2] = 0;
};
$hxClasses["Hero"] = Hero;
Hero.__name__ = ["Hero"];
Hero.prototype = {
	reset: function(isNewgame) {
		if(isNewgame == null) isNewgame = false;
		this.speed = this.initSpeed;
		this.startFlyX = 0;
		this.rotationSpeed = 0;
		this.rotation = 0;
		this.horseAng = 0;
		this.fallRotateAng = 0;
		this.x = this.startX;
		this.y = this.startY;
		this.isInFly = false;
		this.isOnGround = false;
		this.finished = false;
		this.fallingDeep = false;
		if(isNewgame) {
			this.dead = false;
			this.lifes = 100;
		}
		if(this.dead) this.visible = false; else this.visible = true;
		this.kickAnimFrame = 0;
		this.kickAnim.visible = false;
		this.startDelay = 0;
		this.mainHero.visible = true;
		this.horseBm.visible = false;
		this.pers.visible = false;
		if(this.dead) this.shaddow.visible = false; else {
			this.shaddow.visible = true;
			this.shaddow.width = this.mainHero.bitmapData.get_width();
			this.shaddow.x = this.x - this.shaddow.width / 2;
			this.shaddow.y = this.y;
		}
		this.isUnderDeep = false;
		this.falledDeepThisRound = false;
		this.placeThisRound = 0;
		this.losedLifesThisRound = 0;
		this.failedStart = false;
		this.raceTime = 0;
		if(isNewgame) {
			this.totalScores = 0;
			this.medals[0] = 0;
			this.medals[1] = 0;
			this.medals[2] = 0;
		}
	}
	,setDead: function() {
		this.dead = true;
	}
	,render: function(dest,offsetX) {
		if(offsetX == null) offsetX = 0;
		if(this.explosion.visible) {
			this.hp.x = this.explosion.x + offsetX;
			this.hp.y = this.explosion.y;
			dest.copyPixels(this.explosion.getBitmapData(),this.explosion.getBitmapData().rect,this.hp,null,null,true);
			if(this.explosion.update()) this.explosion.visible = false;
		}
		if(!this.visible) return;
		if(this.kickAnim.visible) {
			this.kickAnimFrame++;
			if(this.kickAnimFrame >= this.kickAnimShowFrames) {
				this.kickAnimFrame = 0;
				this.kickAnim.visible = false;
			}
		}
		if(this.mainHero.visible) {
			this.hm.identity();
			this.hm.translate(this.mainHero.x,this.mainHero.y);
			this.hm.rotate(this.rotation * this.gradToRad);
			this.hm.translate(this.x + offsetX,this.y);
			dest.drawBMDTransform(this.mainHero.bitmapData,this.hm);
		}
		if(this.horseBm.visible && this.horseBm.x + this.horseBm.bitmapData.get_width() + offsetX > 0 && this.horseBm.x - this.horseBm.bitmapData.get_width() + offsetX < this.sWidth) {
			this.hp.x = this.horseBm.x + offsetX;
			this.hp.y = this.horseBm.y;
			dest.copyPixels(this.horseBm.bitmapData,this.horseBm.bitmapData.rect,this.hp,null,null,true);
		}
		if(this.shaddow.visible && !this.isUnderDeep) {
			this.hm.identity();
			this.hm.scale(this.shaddow.width / this.shaddow.bitmapData.get_width(),1);
			this.hm.translate(this.shaddow.x + offsetX,this.shaddow.y);
			dest.drawBMDTransform(this.shaddow.bitmapData,this.hm);
		}
		if(this.kickAnim.visible) {
			this.hp.x = this.kickAnim.x + offsetX;
			this.hp.y = this.kickAnim.y;
			dest.copyPixels(this.kickAnim.bitmapData,this.kickAnim.bitmapData.rect,this.hp,null,null,true);
		}
		if(this.pers.visible && this.x + this.pers.x + this.pers.bitmapData.get_height() + offsetX > 0 && this.x + this.pers.x - this.pers.bitmapData.get_height() + offsetX < this.sWidth) {
			this.hm.identity();
			this.hm.translate(this.pers.x,this.pers.y);
			this.hm.rotate(this.rotation * this.gradToRad);
			this.hm.translate(this.x + offsetX,this.y);
			dest.drawBMDTransform(this.pers.bitmapData,this.hm);
		}
		if(this.placeThisRound != 0) {
			var bmd = this.placeFont.getNumberBmd(this.placeThisRound);
			this.hp.x = this.x + offsetX - (bmd.___textureBuffer != null?bmd.___textureBuffer.width:0) / 2;
			this.hp.y = this.y - 30;
			dest.copyPixels(bmd,bmd.rect,this.hp,null,null,true);
		}
	}
	,update: function() {
		if(this.dead) return;
		if(this.x >= this.deep1StartX && this.x < this.deep1EndX || this.x >= this.deep2StartX && this.x < this.deep2EndX) {
			this.isUnderDeep = true;
			this.shaddow.visible = false;
		} else {
			this.isUnderDeep = false;
			this.shaddow.visible = true;
		}
		if(this.finished) {
			if(this.fallingDeep) {
				this.y -= this.speedY;
				this.shaddow.y -= this.speedY;
				this.speedY -= this.FlyDumpY;
				this.rotation += this.rotationSpeed;
				this.rotationSpeed *= this.rotationDump;
				if(this.y > this.sHeight + 200) {
					this.fallingDeep = false;
					this.dead = true;
					this.falledDeepThisRound = true;
				}
			}
			return;
		}
		if(this.isOnGround) {
			if(this._rotation + 30 >= this.fallRotateAng) {
				this._rotation = 0;
				this.rotation = 0;
				this.finished = true;
				if(this.isPlayer && (this.x < this.deep1StartX || this.lifes == 0)) {
					this.dead = true;
					if(this.lifes == 0) this.explode();
				}
				this.y = this.groundY;
			} else {
				this.x += this.speed;
				this.shaddow.x += this.speed;
				this._rotation += 30;
				this.rotation += 30;
				this.bounceAng += this.bounceAngSpeed / this.bounceY;
				if(this.bounceAng >= 2 * this.pi) this.bounceAng = 2 * this.pi;
				this.y -= Math.sin(this.bounceAng) * this.bounceY;
				if(this.bounceAng == 2 * this.pi) {
					this.bounceAng = 0;
					this.bounceY *= this.bounceYDump;
					if(this.speed > this.bounceMinSpeedX) this.speed -= this.bounceSpeedXDump;
					if(this.bounceY > 0.5 && this.isPlayer) this.main.sounds.playSound("kickSound" + (1 + Math.round(Math.random() * 2)),"kick");
				}
			}
			if(this.x >= this.deep1StartX && this.x < this.deep1EndX || this.x >= this.deep2StartX && this.x < this.deep2EndX) {
				this.finished = true;
				this.fallingDeep = true;
				if(this.isPlayer) this.main.sounds.stopSound("horseRun");
			}
			return;
		}
		if(this.startDelay > 0) {
			if(!this.isPlayer) this.startDelay--;
			return;
		}
		if(this.isInFly) {
			this.x += this.speed;
			this.shaddow.x += this.speed;
			this.y -= this.speedY;
			this.speed -= this.FlyDumpX;
			this.speedY -= this.FlyDumpY;
			this.rotation += this.rotationSpeed;
			this.rotationSpeed *= this.rotationDump;
			if(this.speed < this.minSpeed) this.speed = this.minSpeed;
		} else {
			this.x += this.speed;
			this.shaddow.x += this.speed;
			this.speed += this.HorseAceleration;
			this.animateHorse();
			if(!this.isPlayer && this.x >= this.startFlyX) {
				this.startFly();
				this.isInFly = true;
			}
			if(this.x >= this.deep1StartX && this.x < this.deep1EndX || this.x >= this.deep2StartX && this.x < this.deep2EndX) {
				this.speedY = -8;
				this.fallingDeep = true;
				this.finished = true;
				if(this.isPlayer) this.main.sounds.stopSound("horseRun");
				return;
			}
		}
		if(this.speedY < 0 && this.y >= this.groundY) {
			this.y = this.groundY;
			this.isOnGround = true;
			if(this.isPlayer) this.main.sounds.playSound("kickSound" + (1 + Math.round(Math.random() * 2)),"kick");
			this.fallRotateAng = Math.round(this.rotation + (360 - this.rotation % 360) + Math.ceil(this.speed <= 13.8?0:this.speed - 13.8) * 360);
			this._rotation = 0;
			if(this.speed > 13.8 && this.isPlayer) {
				this.losedLifesThisRound = Math.round((this.speed - 13.8) * 10);
				this.lifes -= this.losedLifesThisRound;
				if(this.lifes < 0) this.lifes = 0;
			}
			this.bounceY = 2.5 + Math.ceil(this.speed <= 13.8?0:this.speed - 13.8) * 0.5;
			this.bounceAng = 0;
			this.speed /= 1.7;
			this.kickAnim.visible = true;
			this.kickAnim.x = this.x - this.kickAnim.width / 2;
			this.kickAnim.y = this.y - 12;
			this.kickAnimFrame = 0;
			if(this.x > this.deep1EndX) {
				this.raceTime = haxe.Timer.stamp() - this.startingTime;
				this.placeThisRound = this.main.getPlace();
				if(this.main.gamePlay == 1) this.totalScores += 2000 - 200 * (this.placeThisRound - 1) + 1000 - 10 * this.losedLifesThisRound; else this.totalScores += this.gamePlay2Scores[this.placeThisRound - 1];
				if(this.placeThisRound <= 3) this.medals[this.placeThisRound - 1]++;
			} else if(this.x >= this.deep1StartX && this.x < this.deep1EndX || this.x >= this.deep2StartX && this.x < this.deep2EndX) {
				this.finished = true;
				this.fallingDeep = true;
				if(this.isPlayer) this.main.sounds.stopSound("horseRun");
			}
		}
	}
	,failStart: function() {
		if(this.failedStart) return;
		this.failedStart = true;
		this.isInFly = true;
		this.startDelay = 0;
		this.startFly();
		this.speed = 7;
		this.speedY = 5;
		this.FlyDumpY = 0.3;
	}
	,isRiding: function() {
		return !this.isInFly && !this.finished && !this.fallingDeep && !this.dead && this.startDelay == 0;
	}
	,mainAction: function() {
		if(this.isInFly || this.finished || this.fallingDeep || this.dead) return;
		if(this.startDelay > 0) {
			this.startDelay = 0;
			this.startingTime = haxe.Timer.stamp();
			this.main.sounds.playSound("horseRun","",false,false,true);
		} else {
			this.startFly();
			this.isInFly = true;
		}
	}
	,roundPrepare: function() {
		var _minStartDelay = this.main.isHardMode?this.minStartDelayHard:this.minStartDelay;
		var _maxStartDelay = this.main.isHardMode?this.maxStartDelayHard:this.maxStartDelay;
		this.startDelay = _minStartDelay + Math.round(Math.random() * (_maxStartDelay - _minStartDelay));
		this.speed = this.initSpeed;
		this.speedY = 0;
		this.startFlyX = this.minDistStartFly + Math.random() * (this.maxDistStartFly - this.minDistStartFly);
		this.isInFly = false;
		this.isOnGround = false;
		this.finished = false;
		if(!this.dead) {
			this.shaddow.visible = true;
			this.shaddow.width = this.mainHero.bitmapData.get_width();
			this.shaddow.x = this.x - this.shaddow.width / 2;
			this.shaddow.y = this.y;
		}
	}
	,startFly: function() {
		this.horseBm.x = this.x - this.horseBm.bitmapData.get_width() / 2;
		this.horseBm.y = this.y - this.horseBm.bitmapData.get_height();
		this.horseBm.visible = true;
		this.mainHero.visible = false;
		this.rotation = 0;
		this.pers.visible = true;
		if(this.speed > 20) {
			this.speedY = 9;
			var num = this.speed - 20;
			this.FlyDumpY = num * 0.1;
			if(this.FlyDumpY < 0.2) this.FlyDumpY = 0.2;
			this.rotationSpeed = this.speed / 2;
			this.speed = this.speed / 1.35;
		} else {
			this.speed = this.speed / 1.35;
			this.speedY = 7;
			this.FlyDumpY = 0.4;
			this.rotationSpeed = 2.1;
		}
		this.groundY = this.y - this.pers.bitmapData.get_height() / 2;
		this.y -= 30;
		this.x += 15;
		this.shaddow.width = this.pers.bitmapData.get_width();
		this.shaddow.x = this.x - this.shaddow.width / 2;
		if(this.isPlayer) {
			this.main.sounds.stopSound("horseRun");
			this.main.sounds.playSound("jumpCry","",false,false,true);
		}
	}
	,animateHorse: function() {
		this.horseAng += this.horseAngSpeed;
		this.rotation = this.horseMaxAngle * Math.sin(this.horseAng);
	}
	,realHeight: function() {
		return this.mainHero.bitmapData.get_height();
	}
	,realWidth: function() {
		return this.mainHero.bitmapData.get_width();
	}
	,setDefaults: function(stX,stY,__x,__y) {
		this.startX = stX;
		this.startY = stY;
		this.x = __x;
		this.y = __y;
	}
	,explode: function() {
		this.explosion.visible = true;
		this.explosion.x = this.x - this.explosion.getWidth() / 2;
		this.explosion.y = this.startY - this.explosion.getHeight() + 30;
		this.pers.visible = this.shaddow.visible = false;
		this.explosion.currentFrame = 0;
		this.explosion.update();
	}
	,medals: null
	,gamePlay2Scores: null
	,totalScores: null
	,lifes: null
	,raceTime: null
	,startingTime: null
	,losedLifesThisRound: null
	,placeThisRound: null
	,sHeight: null
	,sWidth: null
	,gradToRad: null
	,hp: null
	,hm: null
	,_rotation: null
	,visible: null
	,rotation: null
	,y: null
	,x: null
	,placeFont: null
	,kickAnimShowFrames: null
	,kickAnimFrame: null
	,explosion: null
	,kickAnim: null
	,shaddow: null
	,pers: null
	,horseBm: null
	,mainHero: null
	,main: null
	,type: null
	,startDelay: null
	,isUnderDeep: null
	,failedStart: null
	,falledDeepThisRound: null
	,dead: null
	,fallingDeep: null
	,isPlayer: null
	,finished: null
	,isOnGround: null
	,isInFly: null
	,horseAng: null
	,horseAngSpeed: null
	,horseMaxAngle: null
	,groundY: null
	,bounceAngSpeed: null
	,pi: null
	,bounceAng: null
	,bounceSpeedXDump: null
	,bounceMinSpeedX: null
	,bounceYDump: null
	,bounceY: null
	,fallRotateAng: null
	,rotationDump: null
	,rotationSpeed: null
	,startFlyX: null
	,maxDistStartFly: null
	,minDistStartFly: null
	,deep2EndX: null
	,deep2StartX: null
	,deep1EndX: null
	,deep1StartX: null
	,maxStartDelayHard: null
	,minStartDelayHard: null
	,maxStartDelay: null
	,minStartDelay: null
	,FlyDumpY: null
	,FlyDumpX: null
	,HorseAceleration: null
	,minSpeed: null
	,speedY: null
	,speed: null
	,initSpeed: null
	,endY: null
	,startY: null
	,startX: null
	,__class__: Hero
}
var HeroSelectScreen = function() {
	flash.display.Sprite.call(this);
	this.main = Main.current;
	var spr;
	var bmd;
	var curX = 0;
	var curY = 25;
	var _g = 1;
	while(_g < 10) {
		var i = _g++;
		spr = new flash.display.Sprite();
		bmd = openfl.Assets.getBitmapData("img/race" + i + ".png");
		spr.addChild(new flash.display.Bitmap(bmd));
		spr.name = Std.string(i);
		spr.set_x(curX);
		spr.set_y(curY - (bmd.___textureBuffer != null?bmd.___textureBuffer.height:0));
		curX += 25;
		if(i % 3 == 0) {
			curY += 25;
			curX = 0;
		}
		this.addChild(spr);
		spr.addEventListener(flash.events.MouseEvent.CLICK,$bind(this,this.clickHero));
		spr.addEventListener("touchEnd",$bind(this,this.clickHero));
	}
	this.set_x(this.main.sWidth / 2 - this.get_width() / 2);
	this.set_y(this.main.sHeight / 2 - this.get_height() / 2);
};
$hxClasses["HeroSelectScreen"] = HeroSelectScreen;
HeroSelectScreen.__name__ = ["HeroSelectScreen"];
HeroSelectScreen.__super__ = flash.display.Sprite;
HeroSelectScreen.prototype = $extend(flash.display.Sprite.prototype,{
	disable: function() {
		this.set_visible(false);
	}
	,enable: function() {
		this.set_visible(true);
	}
	,clickHero: function(e) {
		if(e.type != flash.events.MouseEvent.CLICK) e.currentTarget.removeEventListener(flash.events.MouseEvent.CLICK,$bind(this,this.clickHero)); else e.currentTarget.removeEventListener("touchEnd",$bind(this,this.clickHero));
		this.disable();
		this.main.setHeroType(Std.parseInt(e.currentTarget.name));
	}
	,main: null
	,__class__: HeroSelectScreen
});
var HxOverrides = function() { }
$hxClasses["HxOverrides"] = HxOverrides;
HxOverrides.__name__ = ["HxOverrides"];
HxOverrides.strDate = function(s) {
	switch(s.length) {
	case 8:
		var k = s.split(":");
		var d = new Date();
		d.setTime(0);
		d.setUTCHours(k[0]);
		d.setUTCMinutes(k[1]);
		d.setUTCSeconds(k[2]);
		return d;
	case 10:
		var k = s.split("-");
		return new Date(k[0],k[1] - 1,k[2],0,0,0);
	case 19:
		var k = s.split(" ");
		var y = k[0].split("-");
		var t = k[1].split(":");
		return new Date(y[0],y[1] - 1,y[2],t[0],t[1],t[2]);
	default:
		throw "Invalid date format : " + s;
	}
}
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) return undefined;
	return x;
}
HxOverrides.substr = function(s,pos,len) {
	if(pos != null && pos != 0 && len != null && len < 0) return "";
	if(len == null) len = s.length;
	if(pos < 0) {
		pos = s.length + pos;
		if(pos < 0) pos = 0;
	} else if(len < 0) len = s.length + len - pos;
	return s.substr(pos,len);
}
HxOverrides.remove = function(a,obj) {
	var i = 0;
	var l = a.length;
	while(i < l) {
		if(a[i] == obj) {
			a.splice(i,1);
			return true;
		}
		i++;
	}
	return false;
}
HxOverrides.iter = function(a) {
	return { cur : 0, arr : a, hasNext : function() {
		return this.cur < this.arr.length;
	}, next : function() {
		return this.arr[this.cur++];
	}};
}
var LifesPanel = function() {
	flash.display.Sprite.call(this);
	this.lifesContur = new flash.display.Bitmap(openfl.Assets.getBitmapData("img/lifesContur.png"));
	this.lifesFill = new flash.display.Bitmap(openfl.Assets.getBitmapData("img/lifesFill.png"));
	this.lifesFill.set_x(26.5);
	this.lifesFill.set_y(5);
	this.addChild(this.lifesContur);
	this.addChild(this.lifesFill);
};
$hxClasses["LifesPanel"] = LifesPanel;
LifesPanel.__name__ = ["LifesPanel"];
LifesPanel.__super__ = flash.display.Sprite;
LifesPanel.prototype = $extend(flash.display.Sprite.prototype,{
	render: function(lifes,dest) {
		this.lifesFill.set_width(this.lifesFill.bitmapData.get_width() * lifes / 100);
	}
	,lifesFill: null
	,lifesContur: null
	,__class__: LifesPanel
});
var List = function() {
	this.length = 0;
};
$hxClasses["List"] = List;
List.__name__ = ["List"];
List.prototype = {
	iterator: function() {
		return { h : this.h, hasNext : function() {
			return this.h != null;
		}, next : function() {
			if(this.h == null) return null;
			var x = this.h[0];
			this.h = this.h[1];
			return x;
		}};
	}
	,isEmpty: function() {
		return this.h == null;
	}
	,pop: function() {
		if(this.h == null) return null;
		var x = this.h[0];
		this.h = this.h[1];
		if(this.h == null) this.q = null;
		this.length--;
		return x;
	}
	,first: function() {
		return this.h == null?null:this.h[0];
	}
	,push: function(item) {
		var x = [item,this.h];
		this.h = x;
		if(this.q == null) this.q = x;
		this.length++;
	}
	,add: function(item) {
		var x = [item];
		if(this.h == null) this.h = x; else this.q[1] = x;
		this.q = x;
		this.length++;
	}
	,length: null
	,q: null
	,h: null
	,__class__: List
}
var MainMenu = function() {
	flash.display.Sprite.call(this);
	this.main = Main.current;
	this.play1 = new flash.display.Bitmap(openfl.Assets.getBitmapData("img/button_play1.png"));
	this.play2 = new flash.display.Bitmap(openfl.Assets.getBitmapData("img/button_play2.png"));
	this.play1H = new flash.display.Bitmap(openfl.Assets.getBitmapData("img/button_play1Hard.png"));
	this.play2H = new flash.display.Bitmap(openfl.Assets.getBitmapData("img/button_play2Hard.png"));
	this.persLight = new flash.display.Bitmap(openfl.Assets.getBitmapData("img/icon_persLight.png"));
	this.racePedestal = new flash.display.Bitmap(openfl.Assets.getBitmapData("img/raceSelectPedestal.png"));
	this.hp = new flash.geom.Point();
	this.play1.set_x(0);
	this.play1.set_y(0);
	this.addChild(this.play1);
	this.play2.set_y(this.play1.get_y());
	this.play2.set_x(this.play1.get_x() + this.play1.get_width());
	this.addChild(this.play2);
	this.play1H.set_x(0);
	this.play1H.set_y(this.play1.get_height() - 17);
	this.addChild(this.play1H);
	this.play2H.set_y(this.play1H.get_y());
	this.play2H.set_x(this.play1H.get_x() + this.play1H.get_width());
	this.addChild(this.play2H);
	this.set_x(this.main.sWidth / 2 - this.get_width() / 2);
	this.set_y(this.main.sHeight / 2 - this.get_height() / 2 + 17);
	this.racePedestal.set_y(this.play1H.get_y() + this.play1H.get_height() - 10 - 10);
	this.racePedestal.set_x(this.get_width() / 2 - this.racePedestal.get_width() / 2);
	this.addChild(this.racePedestal);
	var places = this.main.menuHeroes;
	this.hp.x = this.hp.y = 0;
	var _g1 = 0, _g = places.length;
	while(_g1 < _g) {
		var i = _g1++;
		this.hp.y = 70 - places[i].get_height();
		this.hp.x = i * 63.5 - places[i].get_width() / 2 + 74;
		this.racePedestal.bitmapData.copyPixels(places[i],places[i].rect,this.hp,null,null,true);
	}
	this.persLight.set_x(this.racePedestal.get_x() + 254. - this.persLight.get_width() / 2 + 74 + 3);
	this.persLight.set_y(this.racePedestal.get_y());
	this.addChild(this.persLight);
	this.play1.addEventListener(flash.events.MouseEvent.CLICK,$bind(this,this.click));
	this.play1.addEventListener("touchEnd",$bind(this,this.click));
	this.play2.addEventListener(flash.events.MouseEvent.CLICK,$bind(this,this.click));
	this.play2.addEventListener("touchEnd",$bind(this,this.click));
	this.play1H.addEventListener(flash.events.MouseEvent.CLICK,$bind(this,this.click));
	this.play1H.addEventListener("touchEnd",$bind(this,this.click));
	this.play2H.addEventListener(flash.events.MouseEvent.CLICK,$bind(this,this.click));
	this.play2H.addEventListener("touchEnd",$bind(this,this.click));
	this.addEventListener(flash.events.MouseEvent.CLICK,$bind(this,this.clickRace));
	this.addEventListener("touchEnd",$bind(this,this.clickRace));
};
$hxClasses["MainMenu"] = MainMenu;
MainMenu.__name__ = ["MainMenu"];
MainMenu.__super__ = flash.display.Sprite;
MainMenu.prototype = $extend(flash.display.Sprite.prototype,{
	destroy: function(gamePlay) {
		if(!this.get_visible()) return;
		this.main.sounds.stopAmbient();
		this.main.sounds.playSound("nature","nature",true,true);
		this.disable();
		this.main.newGame(true,gamePlay);
	}
	,enable: function() {
		this.set_visible(true);
		this.main.activateOverlay(false);
	}
	,disable: function() {
		this.set_visible(false);
		this.main.deactivateOverlays();
	}
	,click: function(e) {
		if(e.type != null && e.type != this.main.clickType) return;
		if(e.currentTarget == this.play1H || e.currentTarget == this.play2H) this.main.isHardMode = true; else this.main.isHardMode = false;
		if(e.currentTarget == this.play1 || e.currentTarget == this.play1H) this.destroy(1); else this.destroy(2);
	}
	,clickRace: function(e) {
		if(e.type == flash.events.MouseEvent.CLICK) this.removeEventListener("touchEnd",$bind(this,this.clickRace)); else this.removeEventListener(flash.events.MouseEvent.CLICK,$bind(this,this.clickRace));
		if(e.type != this.main.clickType) return;
		this.hp.x = e.stageX;
		this.hp.y = e.stageY;
		if(this.racePedestal.hitTestPoint(this.hp.x,this.hp.y)) {
			var rx = (e.stageX - this.main.get_x()) / this.main.get_scaleX() - (this.get_x() + this.racePedestal.get_x()) - 50;
			var hrN = Math.floor(rx / 65) + 1;
			if(hrN >= 0) this.main.setHeroType(hrN);
			this.persLight.set_x(this.racePedestal.get_x() + (this.main.mainHero.type - 1) * 63.5 - this.persLight.get_width() / 2 + 74 + 3);
		}
	}
	,clickBtn: function(e) {
		if(!this.get_visible()) return;
		this.hp.x = e.stageX;
		this.hp.y = e.stageY;
		if(this.play1.hitTestPoint(this.hp.x,this.hp.y)) this.click({ currentTarget : this.play1}); else if(this.play2.hitTestPoint(this.hp.x,this.hp.y)) this.click({ currentTarget : this.play2});
		if(this.play1H.hitTestPoint(this.hp.x,this.hp.y)) this.click({ currentTarget : this.play1H}); else if(this.play2H.hitTestPoint(this.hp.x,this.hp.y)) this.click({ currentTarget : this.play2H});
	}
	,hp: null
	,main: null
	,persLight: null
	,racePedestal: null
	,play2H: null
	,play1H: null
	,play2: null
	,play1: null
	,__class__: MainMenu
});
var IMap = function() { }
$hxClasses["IMap"] = IMap;
IMap.__name__ = ["IMap"];
var NMEPreloader = function() {
	flash.display.Sprite.call(this);
	var backgroundColor = this.getBackgroundColor();
	var r = backgroundColor >> 16 & 255;
	var g = backgroundColor >> 8 & 255;
	var b = backgroundColor & 255;
	var perceivedLuminosity = 0.299 * r + 0.587 * g + 0.114 * b;
	var color = 0;
	if(perceivedLuminosity < 70) color = 16777215;
	var x = 30;
	var height = 9;
	var y = this.getHeight() / 2 - height / 2;
	var width = this.getWidth() - x * 2;
	var padding = 3;
	this.outline = new flash.display.Sprite();
	this.outline.get_graphics().lineStyle(1,color,0.15,true);
	this.outline.get_graphics().drawRoundRect(0,0,width,height,padding * 2,padding * 2);
	this.outline.set_x(x);
	this.outline.set_y(y);
	this.addChild(this.outline);
	this.progress = new flash.display.Sprite();
	this.progress.get_graphics().beginFill(color,0.35);
	this.progress.get_graphics().drawRect(0,0,width - padding * 2,height - padding * 2);
	this.progress.set_x(x + padding);
	this.progress.set_y(y + padding);
	this.progress.set_scaleX(0);
	this.addChild(this.progress);
};
$hxClasses["NMEPreloader"] = NMEPreloader;
NMEPreloader.__name__ = ["NMEPreloader"];
NMEPreloader.__super__ = flash.display.Sprite;
NMEPreloader.prototype = $extend(flash.display.Sprite.prototype,{
	onUpdate: function(bytesLoaded,bytesTotal) {
		var percentLoaded = bytesLoaded / bytesTotal;
		if(percentLoaded > 1) percentLoaded == 1;
		this.progress.set_scaleX(percentLoaded);
	}
	,onLoaded: function() {
		this.dispatchEvent(new flash.events.Event(flash.events.Event.COMPLETE));
	}
	,onInit: function() {
	}
	,getWidth: function() {
		var width = 0;
		if(width > 0) return width; else return flash.Lib.get_current().get_stage().get_stageWidth();
	}
	,getHeight: function() {
		var height = 0;
		if(height > 0) return height; else return flash.Lib.get_current().get_stage().get_stageHeight();
	}
	,getBackgroundColor: function() {
		return 0;
	}
	,progress: null
	,outline: null
	,__class__: NMEPreloader
});
var NumericFont = function(fontImgName,symbolWidth) {
	this.img = openfl.Assets.getBitmapData("img/" + fontImgName + ".png");
	this.symWidth = symbolWidth;
	this.hp = new flash.geom.Point();
	this.hct = new flash.geom.ColorTransform();
	this.hm = new flash.geom.Matrix();
	this.hr = new flash.geom.Rectangle(0,0,this.symWidth,this.img.get_height());
	this.colorArray = new haxe.ds.IntMap();
};
$hxClasses["NumericFont"] = NumericFont;
NumericFont.__name__ = ["NumericFont"];
NumericFont.prototype = {
	getNumberBmd: function(num) {
		var tbmd = new flash.display.BitmapData(this.symWidth | 0,this.img.get_height(),true,0);
		this.hr.x = num * this.symWidth;
		this.hp.x = this.hp.y = 0;
		tbmd.copyPixels(this.img,this.hr,this.hp,null,null,true);
		return tbmd;
	}
	,getBmdColor: function(color) {
		if(this.colorArray.exists(color)) return this.colorArray.get(color);
		var tbmd = new flash.display.BitmapData(this.img.get_width(),this.img.get_height(),true,0);
		tbmd.copyPixels(this.img,this.img.rect,new flash.geom.Point(),null,null,true);
		this.hct.set_color(color);
		tbmd.colorTransform(tbmd.rect,this.hct);
		this.colorArray.set(color,tbmd);
		return tbmd;
	}
	,drawTo: function(dest,text,x,y,centerX,centerY,color) {
		if(color == null) color = 0;
		if(centerY == null) centerY = false;
		if(centerX == null) centerX = false;
		if(y == null) y = 0;
		if(x == null) x = 0;
		var symArr = text.split("");
		var sourceBmd;
		if(centerX) this.hp.x = x - symArr.length * this.symWidth / 2; else this.hp.x = x;
		if(centerY) this.hp.y = y - this.img.get_height() / 2; else this.hp.y = y;
		if(color != 0) sourceBmd = this.getBmdColor(color); else sourceBmd = this.img;
		var drawIndex;
		var _g1 = 0, _g = symArr.length;
		while(_g1 < _g) {
			var i = _g1++;
			drawIndex = Std.parseInt(symArr[i]);
			this.hr.x = drawIndex * this.symWidth;
			dest.copyPixels(sourceBmd,this.hr,this.hp,null,null,true);
			this.hp.x += this.symWidth;
		}
	}
	,hr: null
	,hm: null
	,hct: null
	,hp: null
	,symWidth: null
	,colorArray: null
	,img: null
	,__class__: NumericFont
}
var PauseMenu = function() {
	flash.display.Sprite.call(this);
	this.main = Main.current;
	this.unpauseBtn = new flash.display.Bitmap(openfl.Assets.getBitmapData("img/button_play.png"));
	this.restartBtn = new flash.display.Bitmap(openfl.Assets.getBitmapData("img/button_replay.png"));
	this.mainMenuBtn = new flash.display.Bitmap(openfl.Assets.getBitmapData("img/button_menu.png"));
	this.moreGamesBtn = new flash.display.Bitmap(openfl.Assets.getBitmapData("img/button_moregames.png"));
	this.addChild(this.unpauseBtn);
	this.restartBtn.set_x(this.unpauseBtn.get_width() + 5);
	this.restartBtn.set_y(this.unpauseBtn.get_y());
	this.addChild(this.restartBtn);
	this.mainMenuBtn.set_y(this.restartBtn.get_y() + this.restartBtn.get_height() + 5);
	this.addChild(this.mainMenuBtn);
	this.mutedBmd = openfl.Assets.getBitmapData("img/button_soundX.png");
	this.unmutedBmd = openfl.Assets.getBitmapData("img/button_sound.png");
	this.muteBtn = new flash.display.Bitmap(this.mutedBmd);
	this.muteBtn.set_x(this.mainMenuBtn.get_width() + 5);
	this.muteBtn.set_y(this.mainMenuBtn.get_y());
	this.addChild(this.muteBtn);
	this.refreshMuteBtn();
	this.moreGamesBtn.set_x(this.get_width() / 2 - this.moreGamesBtn.get_width() / 2);
	this.moreGamesBtn.set_y(this.muteBtn.get_y() + this.muteBtn.get_height());
	this.addChild(this.moreGamesBtn);
	this.set_x(this.main.sWidth / 2 - this.get_width() / 2);
	this.set_y(this.main.sHeight / 2 - this.get_height() / 2);
	this.unpauseBtn.addEventListener(flash.events.MouseEvent.CLICK,$bind(this,this.unpauseClick));
	this.unpauseBtn.addEventListener("touchEnd",$bind(this,this.unpauseClick));
	this.restartBtn.addEventListener(flash.events.MouseEvent.CLICK,$bind(this,this.clickRetry));
	this.restartBtn.addEventListener("touchEnd",$bind(this,this.touchRetry));
	this.mainMenuBtn.addEventListener(flash.events.MouseEvent.CLICK,$bind(this,this.clickMainMenu));
	this.mainMenuBtn.addEventListener("touchEnd",$bind(this,this.touchMainMenu));
	this.muteBtn.addEventListener(flash.events.MouseEvent.CLICK,$bind(this,this.muteClick));
	this.muteBtn.addEventListener("touchEnd",$bind(this,this.muteClick));
	this.moreGamesBtn.__graphics.__surface.addEventListener("touchend",Main.openMoreGames);
	this.moreGamesBtn.__graphics.__surface.addEventListener("click",Main.openMoreGames);
};
$hxClasses["PauseMenu"] = PauseMenu;
PauseMenu.__name__ = ["PauseMenu"];
PauseMenu.__super__ = flash.display.Sprite;
PauseMenu.prototype = $extend(flash.display.Sprite.prototype,{
	touchMainMenu: function(e) {
		if(!this.get_visible()) return;
		if(e.type != null && e.type != this.main.clickType) return;
		this.disable();
		this.main.playMenu.enable();
		this.main.getReadyScreen.set_visible(false);
		this.main.sounds.playAmbient(true);
		this.main.sounds.stopSound("nature");
		if(this.main.tapImg != null && this.main.tapImg.parent != null) {
			this.main.wasShownTutorial = true;
			this.main.tapImg.parent.removeChild(this.main.tapImg);
			this.main.tapImg = null;
		}
	}
	,clickMainMenu: function(e) {
		if(!this.get_visible()) return;
		if(e.type != null && e.type != this.main.clickType) return;
		this.disable();
		this.main.playMenu.enable();
		this.main.getReadyScreen.set_visible(false);
		this.main.sounds.playAmbient(true);
		this.main.sounds.stopSound("nature");
		if(this.main.tapImg != null && this.main.tapImg.parent != null) {
			this.main.wasShownTutorial = true;
			this.main.tapImg.parent.removeChild(this.main.tapImg);
			this.main.tapImg = null;
		}
	}
	,touchRetry: function(e) {
		if(!this.get_visible()) return;
		if(e.type != null && e.type != this.main.clickType) return;
		this.disable();
		this.main.newGame(true);
	}
	,clickRetry: function(e) {
		if(!this.get_visible()) return;
		if(e.type != null && e.type != this.main.clickType) return;
		this.disable();
		this.main.newGame(true);
	}
	,unpauseClick: function(e) {
		if(!this.get_visible()) return;
		if(e.type != null && e.type != this.main.clickType) return;
		this.disable();
		this.main.unpause();
	}
	,refreshMuteBtn: function() {
		if(this.main.sounds.muted || !this.main.sounds.soundsAvailable) this.muteBtn.set_bitmapData(this.mutedBmd); else this.muteBtn.set_bitmapData(this.unmutedBmd);
	}
	,muteClick: function(e) {
		if(e.type != flash.events.MouseEvent.CLICK) this.muteBtn.removeEventListener(flash.events.MouseEvent.CLICK,$bind(this,this.muteClick)); else this.muteBtn.removeEventListener("touchEnd",$bind(this,this.muteClick));
		if(e.type != null && e.type != this.main.clickType) return;
		if(this.main.sounds.muted) this.main.sounds.unMute(false); else this.main.sounds.mute();
		this.refreshMuteBtn();
	}
	,enable: function() {
		this.set_visible(true);
		this.main.activateOverlay(true);
		this.refreshMuteBtn();
		this.main.sounds.stopSound("horseRun");
	}
	,disable: function() {
		this.set_visible(false);
		this.main.deactivateOverlays();
		if(this.main.mainHero != null && this.main.mainHero.isRiding()) this.main.sounds.playSound("horseRun");
	}
	,clickBtn: function(e) {
		if(!this.get_visible()) return;
		this.hp.x = e.stageX;
		this.hp.y = e.stageY;
		if(this.unpauseBtn.hitTestPoint(this.hp.x,this.hp.y)) this.unpauseClick(e); else if(this.restartBtn.hitTestPoint(this.hp.x,this.hp.y)) this.clickRetry(e); else if(this.mainMenuBtn.hitTestPoint(this.hp.x,this.hp.y)) this.clickMainMenu(e); else if(this.muteBtn.hitTestPoint(this.hp.x,this.hp.y)) this.muteClick(e);
	}
	,hp: null
	,unmutedBmd: null
	,mutedBmd: null
	,muteBtn: null
	,moreGamesBtn: null
	,mainMenuBtn: null
	,restartBtn: null
	,unpauseBtn: null
	,main: null
	,__class__: PauseMenu
});
var PlayMenu = function() {
	flash.display.Sprite.call(this);
	this.main = Main.current;
	this.play = new flash.display.Bitmap(openfl.Assets.getBitmapData("img/button_play.png"));
	this.helpBtn = new flash.display.Bitmap(openfl.Assets.getBitmapData("img/button_help.png"));
	this.credits = new flash.display.Bitmap(openfl.Assets.getBitmapData("img/button_credits.png"));
	this.moreGamesBtn = new flash.display.Bitmap(openfl.Assets.getBitmapData("img/button_moregames.png"));
	this.mutedBmd = openfl.Assets.getBitmapData("img/button_soundX.png");
	this.unmutedBmd = openfl.Assets.getBitmapData("img/button_sound.png");
	this.play.set_x((this.helpBtn.get_width() + this.credits.get_width()) / 2 - this.play.get_width() / 2);
	this.play.set_y(0);
	this.addChild(this.play);
	this.helpBtn.set_y(this.play.get_y() + this.play.get_height() - 17);
	this.helpBtn.set_x(0);
	this.addChild(this.helpBtn);
	this.credits.set_y(this.helpBtn.get_y());
	this.credits.set_x(this.helpBtn.get_x() + this.helpBtn.get_width());
	this.addChild(this.credits);
	this.muteBtn = new flash.display.Bitmap(this.mutedBmd);
	this.muteBtn.set_y(this.credits.get_y() + this.credits.get_height() - 17);
	this.muteBtn.set_x(this.helpBtn.get_x());
	this.addChild(this.muteBtn);
	this.refreshMuteBtn();
	this.moreGamesBtn.set_x(this.credits.get_x());
	this.moreGamesBtn.set_y(this.muteBtn.get_y());
	this.addChild(this.moreGamesBtn);
	this.set_x(this.main.sWidth / 2 - this.get_width() / 2);
	this.set_y(this.main.sHeight / 2 - this.get_height() / 2 + 60);
	this.play.addEventListener(flash.events.MouseEvent.CLICK,$bind(this,this.click));
	this.play.addEventListener("touchEnd",$bind(this,this.click));
	this.credits.addEventListener(flash.events.MouseEvent.CLICK,$bind(this,this.creditsClick));
	this.credits.addEventListener("touchEnd",$bind(this,this.creditsClick));
	this.helpBtn.addEventListener(flash.events.MouseEvent.CLICK,$bind(this,this.helpClick));
	this.helpBtn.addEventListener("touchEnd",$bind(this,this.helpClick));
	this.moreGamesBtn.__graphics.__surface.addEventListener("touchend",Main.openMoreGames);
	this.moreGamesBtn.__graphics.__surface.addEventListener("click",Main.openMoreGames);
	this.muteBtn.addEventListener(flash.events.MouseEvent.CLICK,$bind(this,this.muteClick));
	this.muteBtn.addEventListener("touchEnd",$bind(this,this.muteClick));
	var versionTxt = new flash.text.TextField();
	versionTxt.set_defaultTextFormat(new flash.text.TextFormat("Arial",14,16777215));
	versionTxt.set_y(this.main.sHeight - this.get_y() - 20);
	versionTxt.set_x(-this.get_x() + 4);
	versionTxt.set_text("v 1.0 mrg");
	this.addChild(versionTxt);
};
$hxClasses["PlayMenu"] = PlayMenu;
PlayMenu.__name__ = ["PlayMenu"];
PlayMenu.__super__ = flash.display.Sprite;
PlayMenu.prototype = $extend(flash.display.Sprite.prototype,{
	enable: function() {
		this.set_visible(true);
		this.main.activateOverlay(false);
		this.refreshMuteBtn();
	}
	,disable: function() {
		this.set_visible(false);
		this.main.deactivateOverlays();
	}
	,click: function(e) {
		this.disable();
		this.main.mainMenu.enable();
	}
	,refreshMuteBtn: function() {
		if(this.main.sounds.muted || !this.main.sounds.soundsAvailable) this.muteBtn.set_bitmapData(this.mutedBmd); else this.muteBtn.set_bitmapData(this.unmutedBmd);
	}
	,muteClick: function(e) {
		if(e.type != flash.events.MouseEvent.CLICK) this.muteBtn.removeEventListener(flash.events.MouseEvent.CLICK,$bind(this,this.muteClick)); else this.muteBtn.removeEventListener("touchEnd",$bind(this,this.muteClick));
		if(e.type != null && e.type != this.main.clickType) return;
		if(this.main.sounds.muted) this.main.sounds.unMute(); else this.main.sounds.mute();
		this.refreshMuteBtn();
	}
	,closeHelp: function(e) {
		flash.Lib.get_current().get_stage().removeEventListener("touchEnd",$bind(this,this.closeHelp));
		flash.Lib.get_current().get_stage().removeEventListener(flash.events.MouseEvent.CLICK,$bind(this,this.closeHelp));
		this.main.helpWindow.alpha = 0;
		this.main.removeChild(this.main.helpWindow);
	}
	,closeCredits: function(e) {
		flash.Lib.get_current().get_stage().removeEventListener("touchEnd",$bind(this,this.closeCredits));
		flash.Lib.get_current().get_stage().removeEventListener(flash.events.MouseEvent.CLICK,$bind(this,this.closeCredits));
		this.main.creditsWindow.alpha = 0;
		this.main.removeChild(this.main.creditsWindow);
	}
	,helpClick: function(e) {
		if(e.type == flash.events.MouseEvent.CLICK) this.helpBtn.removeEventListener("touchEnd",$bind(this,this.helpClick)); else this.helpBtn.removeEventListener(flash.events.MouseEvent.CLICK,$bind(this,this.helpClick));
		if(e.type != null && e.type != this.main.clickType) return;
		this.main.helpWindow.alpha = 1;
		this.main.addChild(this.main.helpWindow);
		flash.Lib.get_current().get_stage().addEventListener("touchEnd",$bind(this,this.closeHelp));
		flash.Lib.get_current().get_stage().addEventListener(flash.events.MouseEvent.CLICK,$bind(this,this.closeHelp));
		e.stopImmediatePropagation();
	}
	,creditsClick: function(e) {
		if(e.type == flash.events.MouseEvent.CLICK) this.credits.removeEventListener("touchEnd",$bind(this,this.creditsClick)); else this.credits.removeEventListener(flash.events.MouseEvent.CLICK,$bind(this,this.creditsClick));
		if(e.type != null && e.type != this.main.clickType) return;
		this.main.creditsWindow.alpha = 1;
		this.main.addChild(this.main.creditsWindow);
		flash.Lib.get_current().get_stage().addEventListener("touchEnd",$bind(this,this.closeCredits));
		flash.Lib.get_current().get_stage().addEventListener(flash.events.MouseEvent.CLICK,$bind(this,this.closeCredits));
		e.stopImmediatePropagation();
	}
	,clickBtn: function(e) {
		if(!this.get_visible()) return;
		this.hp.x = e.stageX;
		this.hp.y = e.stageY;
		if(this.play.hitTestPoint(this.hp.x,this.hp.y)) this.click(e); else if(this.credits.hitTestPoint(this.hp.x,this.hp.y)) this.creditsClick(e); else if(this.muteBtn.hitTestPoint(this.hp.x,this.hp.y)) this.muteClick(e); else if(this.helpBtn.hitTestPoint(this.hp.x,this.hp.y)) this.helpClick(e);
	}
	,hp: null
	,unmutedBmd: null
	,mutedBmd: null
	,muteBtn: null
	,main: null
	,moreGamesBtn: null
	,credits: null
	,helpBtn: null
	,play: null
	,logo: null
	,__class__: PlayMenu
});
flash.display.BitmapData = function(width,height,transparent,inFillColor) {
	if(inFillColor == null) inFillColor = -1;
	if(transparent == null) transparent = true;
	this.__locked = false;
	this.__referenceCount = 0;
	this.__leaseNum = 0;
	this.__lease = new flash.display.ImageDataLease();
	this.__lease.set(this.__leaseNum++,new Date().getTime());
	this.___textureBuffer = js.Browser.document.createElement("canvas");
	this.___textureBuffer.width = width;
	this.___textureBuffer.height = height;
	this.___id = flash.utils.Uuid.uuid();
	flash.Lib.__setSurfaceId(this.___textureBuffer,this.___id);
	this.__transparent = transparent;
	this.rect = new flash.geom.Rectangle(0,0,width,height);
	if(this.__transparent) {
		this.__transparentFiller = js.Browser.document.createElement("canvas");
		this.__transparentFiller.width = width;
		this.__transparentFiller.height = height;
		var ctx = this.__transparentFiller.getContext("2d");
		ctx.fillStyle = "rgba(0,0,0,0);";
		ctx.fill();
	}
	if(inFillColor != null && width > 0 && height > 0) {
		if(!this.__transparent) inFillColor |= -16777216;
		this.__initColor = inFillColor;
		this.__fillRect(this.rect,inFillColor);
	}
};
$hxClasses["flash.display.BitmapData"] = flash.display.BitmapData;
flash.display.BitmapData.__name__ = ["flash","display","BitmapData"];
flash.display.BitmapData.__interfaces__ = [flash.display.IBitmapDrawable];
flash.display.BitmapData.getRGBAPixels = function(bitmapData) {
	var p = bitmapData.getPixels(new flash.geom.Rectangle(0,0,bitmapData.___textureBuffer != null?bitmapData.___textureBuffer.width:0,bitmapData.___textureBuffer != null?bitmapData.___textureBuffer.height:0));
	var num = (bitmapData.___textureBuffer != null?bitmapData.___textureBuffer.width:0) * (bitmapData.___textureBuffer != null?bitmapData.___textureBuffer.height:0);
	p.position = 0;
	var _g = 0;
	while(_g < num) {
		var i = _g++;
		var pos = p.position;
		var alpha = p.readByte();
		var red = p.readByte();
		var green = p.readByte();
		var blue = p.readByte();
		p.position = pos;
		p.writeByte(red);
		p.writeByte(green);
		p.writeByte(blue);
		p.writeByte(alpha);
	}
	return p;
}
flash.display.BitmapData.loadFromBase64 = function(base64,type,onload) {
	var bitmapData = new flash.display.BitmapData(0,0);
	bitmapData.__loadFromBase64(base64,type,onload);
	return bitmapData;
}
flash.display.BitmapData.loadFromBytes = function(bytes,inRawAlpha,onload) {
	var bitmapData = new flash.display.BitmapData(0,0);
	bitmapData.__loadFromBytes(bytes,inRawAlpha,onload);
	return bitmapData;
}
flash.display.BitmapData.__base64Encode = function(bytes) {
	var blob = "";
	var codex = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
	bytes.position = 0;
	while(bytes.position < bytes.length) {
		var by1 = 0, by2 = 0, by3 = 0;
		by1 = bytes.readByte();
		if(bytes.position < bytes.length) by2 = bytes.readByte();
		if(bytes.position < bytes.length) by3 = bytes.readByte();
		var by4 = 0, by5 = 0, by6 = 0, by7 = 0;
		by4 = by1 >> 2;
		by5 = (by1 & 3) << 4 | by2 >> 4;
		by6 = (by2 & 15) << 2 | by3 >> 6;
		by7 = by3 & 63;
		blob += codex.charAt(by4);
		blob += codex.charAt(by5);
		if(bytes.position < bytes.length) blob += codex.charAt(by6); else blob += "=";
		if(bytes.position < bytes.length) blob += codex.charAt(by7); else blob += "=";
	}
	return blob;
}
flash.display.BitmapData.__createFromHandle = function(inHandle) {
	var result = new flash.display.BitmapData(0,0);
	result.___textureBuffer = inHandle;
	return result;
}
flash.display.BitmapData.__isJPG = function(bytes) {
	bytes.position = 0;
	return bytes.readByte() == 255 && bytes.readByte() == 216;
}
flash.display.BitmapData.__isPNG = function(bytes) {
	bytes.position = 0;
	return bytes.readByte() == 137 && bytes.readByte() == 80 && bytes.readByte() == 78 && bytes.readByte() == 71 && bytes.readByte() == 13 && bytes.readByte() == 10 && bytes.readByte() == 26 && bytes.readByte() == 10;
}
flash.display.BitmapData.prototype = {
	get_width: function() {
		if(this.___textureBuffer != null) return this.___textureBuffer.width; else return 0;
	}
	,get_transparent: function() {
		return this.__transparent;
	}
	,get_height: function() {
		if(this.___textureBuffer != null) return this.___textureBuffer.height; else return 0;
	}
	,__onLoad: function(data,e) {
		var canvas = data.texture;
		var width = data.image.width;
		var height = data.image.height;
		canvas.width = width;
		canvas.height = height;
		var ctx = canvas.getContext("2d");
		ctx.drawImage(data.image,0,0,width,height);
		data.bitmapData.width = width;
		data.bitmapData.height = height;
		data.bitmapData.rect = new flash.geom.Rectangle(0,0,width,height);
		data.bitmapData.__buildLease();
		if(data.inLoader != null) {
			var e1 = new flash.events.Event(flash.events.Event.COMPLETE);
			e1.target = data.inLoader;
			data.inLoader.dispatchEvent(e1);
		}
	}
	,__loadFromFile: function(inFilename,inLoader) {
		var _g = this;
		var image = js.Browser.document.createElement("img");
		if(inLoader != null) {
			var data = { image : image, texture : this.___textureBuffer, inLoader : inLoader, bitmapData : this};
			image.addEventListener("load",(function(f,a1) {
				return function(e) {
					return f(a1,e);
				};
			})($bind(this,this.__onLoad),data),false);
			image.addEventListener("error",function(e) {
				if(!image.complete) _g.__onLoad(data,e);
			},false);
		}
		image.src = inFilename;
		if(image.complete) {
		}
	}
	,__incrNumRefBitmaps: function() {
		this.__assignedBitmaps++;
	}
	,__getNumRefBitmaps: function() {
		return this.__assignedBitmaps;
	}
	,__loadFromBytes: function(bytes,inRawAlpha,onload) {
		var _g = this;
		var type = "";
		if(flash.display.BitmapData.__isPNG(bytes)) type = "image/png"; else if(flash.display.BitmapData.__isJPG(bytes)) type = "image/jpeg"; else throw new flash.errors.IOError("BitmapData tried to read a PNG/JPG ByteArray, but found an invalid header.");
		if(inRawAlpha != null) this.__loadFromBase64(flash.display.BitmapData.__base64Encode(bytes),type,function(_) {
			var ctx = _g.___textureBuffer.getContext("2d");
			var pixels = ctx.getImageData(0,0,_g.___textureBuffer.width,_g.___textureBuffer.height);
			var _g2 = 0, _g1 = inRawAlpha.length;
			while(_g2 < _g1) {
				var i = _g2++;
				pixels.data[i * 4 + 3] = inRawAlpha.readUnsignedByte();
			}
			ctx.putImageData(pixels,0,0);
			if(onload != null) onload(_g);
		}); else this.__loadFromBase64(flash.display.BitmapData.__base64Encode(bytes),type,onload);
	}
	,__loadFromBase64: function(base64,type,onload) {
		var _g = this;
		var img = js.Browser.document.createElement("img");
		var canvas = this.___textureBuffer;
		var drawImage = function(_) {
			canvas.width = img.width;
			canvas.height = img.height;
			var ctx = canvas.getContext("2d");
			ctx.drawImage(img,0,0);
			_g.rect = new flash.geom.Rectangle(0,0,canvas.width,canvas.height);
			if(onload != null) onload(_g);
		};
		img.addEventListener("load",drawImage,false);
		img.src = "data:" + type + ";base64," + base64;
	}
	,__getLease: function() {
		return this.__lease;
	}
	,__fillRect: function(rect,color) {
		this.__lease.set(this.__leaseNum++,new Date().getTime());
		var ctx = this.___textureBuffer.getContext("2d");
		var r = (color & 16711680) >>> 16;
		var g = (color & 65280) >>> 8;
		var b = color & 255;
		var a = this.__transparent?color >>> 24:255;
		if(!this.__locked) {
			var style = "rgba(" + r + ", " + g + ", " + b + ", " + a / 255 + ")";
			ctx.fillStyle = style;
			ctx.fillRect(rect.x,rect.y,rect.width,rect.height);
		} else {
			var s = 4 * (Math.round(rect.x) + Math.round(rect.y) * this.__imageData.width);
			var offsetY;
			var offsetX;
			var _g1 = 0, _g = Math.round(rect.height);
			while(_g1 < _g) {
				var i = _g1++;
				offsetY = i * this.__imageData.width;
				var _g3 = 0, _g2 = Math.round(rect.width);
				while(_g3 < _g2) {
					var j = _g3++;
					offsetX = 4 * (j + offsetY);
					this.__imageData.data[s + offsetX] = r;
					this.__imageData.data[s + offsetX + 1] = g;
					this.__imageData.data[s + offsetX + 2] = b;
					this.__imageData.data[s + offsetX + 3] = a;
				}
			}
			this.__imageDataChanged = true;
		}
	}
	,__decrNumRefBitmaps: function() {
		this.__assignedBitmaps--;
	}
	,__clearCanvas: function() {
		var ctx = this.___textureBuffer.getContext("2d");
		ctx.clearRect(0,0,this.___textureBuffer.width,this.___textureBuffer.height);
	}
	,__buildLease: function() {
		this.__lease.set(this.__leaseNum++,new Date().getTime());
	}
	,unlock: function(changeRect) {
		this.__locked = false;
		var ctx = this.___textureBuffer.getContext("2d");
		if(this.__imageDataChanged) {
			if(changeRect != null) ctx.putImageData(this.__imageData,0,0,changeRect.x,changeRect.y,changeRect.width,changeRect.height); else ctx.putImageData(this.__imageData,0,0);
		}
		var _g = 0, _g1 = this.__copyPixelList;
		while(_g < _g1.length) {
			var copyCache = _g1[_g];
			++_g;
			if(this.__transparent && copyCache.transparentFiller != null) {
				var trpCtx = copyCache.transparentFiller.getContext("2d");
				var trpData = trpCtx.getImageData(copyCache.sourceX,copyCache.sourceY,copyCache.sourceWidth,copyCache.sourceHeight);
				ctx.putImageData(trpData,copyCache.destX,copyCache.destY);
			}
			ctx.drawImage(copyCache.handle,copyCache.sourceX,copyCache.sourceY,copyCache.sourceWidth,copyCache.sourceHeight,copyCache.destX,copyCache.destY,copyCache.sourceWidth,copyCache.sourceHeight);
		}
		this.__lease.set(this.__leaseNum++,new Date().getTime());
	}
	,threshold: function(sourceBitmapData,sourceRect,destPoint,operation,threshold,color,mask,copySource) {
		if(copySource == null) copySource = false;
		if(mask == null) mask = -1;
		if(color == null) color = 0;
		haxe.Log.trace("BitmapData.threshold not implemented",{ fileName : "BitmapData.hx", lineNumber : 1211, className : "flash.display.BitmapData", methodName : "threshold"});
		return 0;
	}
	,setPixels: function(rect,byteArray) {
		rect = this.clipRect(rect);
		if(rect == null) return;
		var len = Math.round(4 * rect.width * rect.height);
		if(!this.__locked) {
			var ctx = this.___textureBuffer.getContext("2d");
			var imageData = ctx.createImageData(rect.width,rect.height);
			var _g = 0;
			while(_g < len) {
				var i = _g++;
				imageData.data[i] = byteArray.readByte();
			}
			ctx.putImageData(imageData,rect.x,rect.y);
		} else {
			var offset = Math.round(4 * this.__imageData.width * rect.y + rect.x * 4);
			var pos = offset;
			var boundR = Math.round(4 * (rect.x + rect.width));
			var _g = 0;
			while(_g < len) {
				var i = _g++;
				if(pos % (this.__imageData.width * 4) > boundR - 1) pos += this.__imageData.width * 4 - boundR;
				this.__imageData.data[pos] = byteArray.readByte();
				pos++;
			}
			this.__imageDataChanged = true;
		}
	}
	,setPixel32: function(x,y,color) {
		if(x < 0 || y < 0 || x >= (this.___textureBuffer != null?this.___textureBuffer.width:0) || y >= (this.___textureBuffer != null?this.___textureBuffer.height:0)) return;
		if(!this.__locked) {
			this.__lease.set(this.__leaseNum++,new Date().getTime());
			var ctx = this.___textureBuffer.getContext("2d");
			var imageData = ctx.createImageData(1,1);
			imageData.data[0] = (color & 16711680) >>> 16;
			imageData.data[1] = (color & 65280) >>> 8;
			imageData.data[2] = color & 255;
			if(this.__transparent) imageData.data[3] = (color & -16777216) >>> 24; else imageData.data[3] = 255;
			ctx.putImageData(imageData,x,y);
		} else {
			var offset = 4 * y * this.__imageData.width + x * 4;
			this.__imageData.data[offset] = (color & 16711680) >>> 16;
			this.__imageData.data[offset + 1] = (color & 65280) >>> 8;
			this.__imageData.data[offset + 2] = color & 255;
			if(this.__transparent) this.__imageData.data[offset + 3] = (color & -16777216) >>> 24; else this.__imageData.data[offset + 3] = 255;
			this.__imageDataChanged = true;
		}
	}
	,setPixel: function(x,y,color) {
		if(x < 0 || y < 0 || x >= (this.___textureBuffer != null?this.___textureBuffer.width:0) || y >= (this.___textureBuffer != null?this.___textureBuffer.height:0)) return;
		if(!this.__locked) {
			this.__lease.set(this.__leaseNum++,new Date().getTime());
			var ctx = this.___textureBuffer.getContext("2d");
			var imageData = ctx.createImageData(1,1);
			imageData.data[0] = (color & 16711680) >>> 16;
			imageData.data[1] = (color & 65280) >>> 8;
			imageData.data[2] = color & 255;
			if(this.__transparent) imageData.data[3] = 255;
			ctx.putImageData(imageData,x,y);
		} else {
			var offset = 4 * y * this.__imageData.width + x * 4;
			this.__imageData.data[offset] = (color & 16711680) >>> 16;
			this.__imageData.data[offset + 1] = (color & 65280) >>> 8;
			this.__imageData.data[offset + 2] = color & 255;
			if(this.__transparent) this.__imageData.data[offset + 3] = 255;
			this.__imageDataChanged = true;
		}
	}
	,putData1: function(bmd,x,y) {
		this.__lease.set(this.__leaseNum++,new Date().getTime());
		var ctx1 = bmd.___textureBuffer.getContext("2d");
		var imgdata = ctx1.getImageData(x * -1,y,this.___textureBuffer.width,this.___textureBuffer.height);
		var ctx = this.___textureBuffer.getContext("2d");
		ctx.clearRect(0,0,this.___textureBuffer.width,this.___textureBuffer.height);
		haxe.Log.trace(this.___textureBuffer.width,{ fileName : "BitmapData.hx", lineNumber : 1072, className : "flash.display.BitmapData", methodName : "putData1", customParams : [this.___textureBuffer.height]});
		ctx.putImageData(imgdata,0,0,0,0,this.___textureBuffer.width,this.___textureBuffer.height);
	}
	,putData: function(bmd,x,y) {
		this.__lease.set(this.__leaseNum++,new Date().getTime());
		var ctx = this.___textureBuffer.getContext("2d");
		ctx.clearRect(0,0,this.___textureBuffer.width,this.___textureBuffer.height);
		ctx.putImageData(bmd,x,y);
	}
	,scroll: function(x,y) {
		this.__lease.set(this.__leaseNum++,new Date().getTime());
		var ctx = this.___textureBuffer.getContext("2d");
		ctx.drawImage(this.___textureBuffer,x,y);
	}
	,noise: function(randomSeed,low,high,channelOptions,grayScale) {
		if(grayScale == null) grayScale = false;
		if(channelOptions == null) channelOptions = 7;
		if(high == null) high = 255;
		if(low == null) low = 0;
		var generator = new flash.display._BitmapData.MinstdGenerator(randomSeed);
		var ctx = this.___textureBuffer.getContext("2d");
		var imageData = null;
		if(this.__locked) imageData = this.__imageData; else imageData = ctx.createImageData(this.___textureBuffer.width,this.___textureBuffer.height);
		var _g1 = 0, _g = this.___textureBuffer.width * this.___textureBuffer.height;
		while(_g1 < _g) {
			var i = _g1++;
			if(grayScale) imageData.data[i * 4] = imageData.data[i * 4 + 1] = imageData.data[i * 4 + 2] = low + generator.nextValue() % (high - low + 1); else {
				imageData.data[i * 4] = (channelOptions & 1) == 0?0:low + generator.nextValue() % (high - low + 1);
				imageData.data[i * 4 + 1] = (channelOptions & 2) == 0?0:low + generator.nextValue() % (high - low + 1);
				imageData.data[i * 4 + 2] = (channelOptions & 4) == 0?0:low + generator.nextValue() % (high - low + 1);
			}
			imageData.data[i * 4 + 3] = (channelOptions & 8) == 0?255:low + generator.nextValue() % (high - low + 1);
		}
		if(this.__locked) this.__imageDataChanged = true; else ctx.putImageData(imageData,0,0);
	}
	,lock: function() {
		this.__locked = true;
		var ctx = this.___textureBuffer.getContext("2d");
		this.__imageData = ctx.getImageData(0,0,this.___textureBuffer != null?this.___textureBuffer.width:0,this.___textureBuffer != null?this.___textureBuffer.height:0);
		this.__imageDataChanged = false;
		this.__copyPixelList = [];
	}
	,hitTest: function(firstPoint,firstAlphaThreshold,secondObject,secondBitmapDataPoint,secondAlphaThreshold) {
		if(secondAlphaThreshold == null) secondAlphaThreshold = 1;
		var type = Type.getClassName(Type.getClass(secondObject));
		firstAlphaThreshold = firstAlphaThreshold & -1;
		var me = this;
		var doHitTest = function(imageData) {
			if(secondObject.__proto__ == null || secondObject.__proto__.__class__ == null || secondObject.__proto__.__class__.__name__ == null) return false;
			var _g = secondObject.__proto__.__class__.__name__[2];
			switch(_g) {
			case "Rectangle":
				var rect = secondObject;
				rect.x -= firstPoint.x;
				rect.y -= firstPoint.y;
				rect = me.clipRect(me.rect);
				if(me.rect == null) return false;
				var boundingBox = new flash.geom.Rectangle(0,0,me.___textureBuffer != null?me.___textureBuffer.width:0,me.___textureBuffer != null?me.___textureBuffer.height:0);
				if(!rect.intersects(boundingBox)) return false;
				var diff = rect.intersection(boundingBox);
				var offset = 4 * (Math.round(diff.x) + Math.round(diff.y) * imageData.width) + 3;
				var pos = offset;
				var boundR = Math.round(4 * (diff.x + diff.width));
				while(pos < offset + Math.round(4 * (diff.width + imageData.width * diff.height))) {
					if(pos % (imageData.width * 4) > boundR - 1) pos += imageData.width * 4 - boundR;
					if(imageData.data[pos] - firstAlphaThreshold >= 0) return true;
					pos += 4;
				}
				return false;
			case "Point":
				var point = secondObject;
				var x = point.x - firstPoint.x;
				var y = point.y - firstPoint.y;
				if(x < 0 || y < 0 || x >= (me.___textureBuffer != null?me.___textureBuffer.width:0) || y >= (me.___textureBuffer != null?me.___textureBuffer.height:0)) return false;
				if(imageData.data[Math.round(4 * (y * (me.___textureBuffer != null?me.___textureBuffer.width:0) + x)) + 3] - firstAlphaThreshold > 0) return true;
				return false;
			case "Bitmap":
				throw "bitmapData.hitTest with a second object of type Bitmap is currently not supported for HTML5";
				return false;
			case "BitmapData":
				throw "bitmapData.hitTest with a second object of type BitmapData is currently not supported for HTML5";
				return false;
			default:
				throw "BitmapData::hitTest secondObject argument must be either a Rectangle, a Point, a Bitmap or a BitmapData object.";
				return false;
			}
		};
		if(!this.__locked) {
			this.__lease.set(this.__leaseNum++,new Date().getTime());
			var ctx = this.___textureBuffer.getContext("2d");
			var imageData = ctx.getImageData(0,0,this.___textureBuffer != null?this.___textureBuffer.width:0,this.___textureBuffer != null?this.___textureBuffer.height:0);
			return doHitTest(imageData);
		} else return doHitTest(this.__imageData);
	}
	,handle: function() {
		return this.___textureBuffer;
	}
	,getPixels: function(rect) {
		var len = Math.round(4 * rect.width * rect.height);
		var byteArray = new flash.utils.ByteArray();
		if(byteArray.allocated < len) byteArray.___resizeBuffer(byteArray.allocated = Math.max(len,byteArray.allocated * 2) | 0); else if(byteArray.allocated > len) byteArray.___resizeBuffer(byteArray.allocated = len);
		byteArray.length = len;
		len;
		rect = this.clipRect(rect);
		if(rect == null) return byteArray;
		if(!this.__locked) {
			var ctx = this.___textureBuffer.getContext("2d");
			var imagedata = ctx.getImageData(rect.x,rect.y,rect.width,rect.height);
			var _g = 0;
			while(_g < len) {
				var i = _g++;
				byteArray.writeByte(imagedata.data[i]);
			}
		} else {
			var offset = Math.round(4 * this.__imageData.width * rect.y + rect.x * 4);
			var pos = offset;
			var boundR = Math.round(4 * (rect.x + rect.width));
			var _g = 0;
			while(_g < len) {
				var i = _g++;
				if(pos % (this.__imageData.width * 4) > boundR - 1) pos += this.__imageData.width * 4 - boundR;
				byteArray.writeByte(this.__imageData.data[pos]);
				pos++;
			}
		}
		byteArray.position = 0;
		return byteArray;
	}
	,getPixel32: function(x,y) {
		if(x < 0 || y < 0 || x >= (this.___textureBuffer != null?this.___textureBuffer.width:0) || y >= (this.___textureBuffer != null?this.___textureBuffer.height:0)) return 0;
		if(!this.__locked) {
			var ctx = this.___textureBuffer.getContext("2d");
			return this.getInt32(0,ctx.getImageData(x,y,1,1).data);
		} else return this.getInt32(4 * y * this.___textureBuffer.width + x * 4,this.__imageData.data);
	}
	,getPixel: function(x,y) {
		if(x < 0 || y < 0 || x >= (this.___textureBuffer != null?this.___textureBuffer.width:0) || y >= (this.___textureBuffer != null?this.___textureBuffer.height:0)) return 0;
		if(!this.__locked) {
			var ctx = this.___textureBuffer.getContext("2d");
			var imagedata = ctx.getImageData(x,y,1,1);
			return imagedata.data[0] << 16 | imagedata.data[1] << 8 | imagedata.data[2];
		} else {
			var offset = 4 * y * (this.___textureBuffer != null?this.___textureBuffer.width:0) + x * 4;
			return this.__imageData.data[offset] << 16 | this.__imageData.data[offset + 1] << 8 | this.__imageData.data[offset + 2];
		}
	}
	,getInt32: function(offset,data) {
		return (this.__transparent?data[offset + 3]:255) << 24 | data[offset] << 16 | data[offset + 1] << 8 | data[offset + 2];
	}
	,getColorBoundsRect: function(mask,color,findColor) {
		if(findColor == null) findColor = true;
		var me = this;
		var doGetColorBoundsRect = function(data) {
			var minX = me.___textureBuffer != null?me.___textureBuffer.width:0, maxX = 0, minY = me.___textureBuffer != null?me.___textureBuffer.height:0, maxY = 0, i = 0;
			while(i < data.length) {
				var value = me.getInt32(i,data);
				if(findColor) {
					if((value & mask) == color) {
						var x = Math.round(i % ((me.___textureBuffer != null?me.___textureBuffer.width:0) * 4) / 4);
						var y = Math.round(i / ((me.___textureBuffer != null?me.___textureBuffer.width:0) * 4));
						if(x < minX) minX = x;
						if(x > maxX) maxX = x;
						if(y < minY) minY = y;
						if(y > maxY) maxY = y;
					}
				} else if((value & mask) != color) {
					var x = Math.round(i % ((me.___textureBuffer != null?me.___textureBuffer.width:0) * 4) / 4);
					var y = Math.round(i / ((me.___textureBuffer != null?me.___textureBuffer.width:0) * 4));
					if(x < minX) minX = x;
					if(x > maxX) maxX = x;
					if(y < minY) minY = y;
					if(y > maxY) maxY = y;
				}
				i += 4;
			}
			if(minX < maxX && minY < maxY) return new flash.geom.Rectangle(minX,minY,maxX - minX + 1,maxY - minY); else return new flash.geom.Rectangle(0,0,me.___textureBuffer != null?me.___textureBuffer.width:0,me.___textureBuffer != null?me.___textureBuffer.height:0);
		};
		if(!this.__locked) {
			var ctx = this.___textureBuffer.getContext("2d");
			var imageData = ctx.getImageData(0,0,this.___textureBuffer != null?this.___textureBuffer.width:0,this.___textureBuffer != null?this.___textureBuffer.height:0);
			return doGetColorBoundsRect(imageData.data);
		} else return doGetColorBoundsRect(this.__imageData.data);
	}
	,floodFill: function(x,y,color) {
		var wasLocked = this.__locked;
		if(!this.__locked) this.lock();
		var queue = new Array();
		queue.push(new flash.geom.Point(x,y));
		var old = this.getPixel32(x,y);
		var iterations = 0;
		var search = new Array();
		var _g1 = 0, _g = (this.___textureBuffer != null?this.___textureBuffer.width:0) + 1;
		while(_g1 < _g) {
			var i = _g1++;
			var column = new Array();
			var _g3 = 0, _g2 = (this.___textureBuffer != null?this.___textureBuffer.height:0) + 1;
			while(_g3 < _g2) {
				var i1 = _g3++;
				column.push(false);
			}
			search.push(column);
		}
		var currPoint, newPoint;
		while(queue.length > 0) {
			currPoint = queue.shift();
			++iterations;
			var x1 = currPoint.x | 0;
			var y1 = currPoint.y | 0;
			if(x1 < 0 || x1 >= (this.___textureBuffer != null?this.___textureBuffer.width:0)) continue;
			if(y1 < 0 || y1 >= (this.___textureBuffer != null?this.___textureBuffer.height:0)) continue;
			search[x1][y1] = true;
			if(this.getPixel32(x1,y1) == old) {
				this.setPixel32(x1,y1,color);
				if(!search[x1 + 1][y1]) queue.push(new flash.geom.Point(x1 + 1,y1));
				if(!search[x1][y1 + 1]) queue.push(new flash.geom.Point(x1,y1 + 1));
				if(x1 > 0 && !search[x1 - 1][y1]) queue.push(new flash.geom.Point(x1 - 1,y1));
				if(y1 > 0 && !search[x1][y1 - 1]) queue.push(new flash.geom.Point(x1,y1 - 1));
			}
		}
		if(!wasLocked) this.unlock();
	}
	,fillRect: function(rect,color) {
		if(rect == null) return;
		if(rect.width <= 0 || rect.height <= 0) return;
		if(rect.x == 0 && rect.y == 0 && rect.width == this.___textureBuffer.width && rect.height == this.___textureBuffer.height) {
			return this.__clearCanvas();
			if(this.__transparent) {
				if(color >>> 24 == 0 || color == this.__initColor) return this.__clearCanvas();
			} else if((color | -16777216) == (this.__initColor | -16777216)) return this.__clearCanvas();
		}
		return this.__fillRect(rect,color);
	}
	,drawToSurface: function(inSurface,matrix,inColorTransform,blendMode,clipRect,smoothing) {
		this.__lease.set(this.__leaseNum++,new Date().getTime());
		var ctx = inSurface.getContext("2d");
		if(matrix != null) {
			ctx.save();
			if(matrix.a == 1 && matrix.b == 0 && matrix.c == 0 && matrix.d == 1) ctx.translate(matrix.tx,matrix.ty); else {
				flash.Lib.__setImageSmoothing(ctx,smoothing);
				ctx.setTransform(matrix.a,matrix.b,matrix.c,matrix.d,matrix.tx,matrix.ty);
			}
			ctx.drawImage(this.___textureBuffer,0,0);
			ctx.restore();
		} else ctx.drawImage(this.___textureBuffer,0,0);
		if(inColorTransform != null) this.colorTransform(new flash.geom.Rectangle(0,0,this.___textureBuffer.width,this.___textureBuffer.height),inColorTransform);
	}
	,drawBMDAlpha: function(source,tx,ty,____alpha) {
		this.__lease.set(this.__leaseNum++,new Date().getTime());
		var ctx = this.___textureBuffer.getContext("2d");
		ctx.save();
		ctx.globalAlpha = ____alpha;
		ctx.translate(tx,ty);
		ctx.drawImage(source.___textureBuffer,0,0);
		ctx.restore();
	}
	,drawBMDTransformAlpha: function(source,matrix,____alpha) {
		this.__lease.set(this.__leaseNum++,new Date().getTime());
		var ctx = this.___textureBuffer.getContext("2d");
		ctx.save();
		ctx.globalAlpha = ____alpha;
		ctx.setTransform(matrix.a,matrix.b,matrix.c,matrix.d,matrix.tx,matrix.ty);
		ctx.drawImage(source.___textureBuffer,0,0);
		ctx.restore();
	}
	,drawBMDTransform: function(source,matrix) {
		this.__lease.set(this.__leaseNum++,new Date().getTime());
		var ctx = this.___textureBuffer.getContext("2d");
		ctx.save();
		ctx.setTransform(matrix.a,matrix.b,matrix.c,matrix.d,matrix.tx,matrix.ty);
		ctx.drawImage(source.___textureBuffer,0,0);
		ctx.restore();
	}
	,draw: function(source,matrix,inColorTransform,blendMode,clipRect,smoothing) {
		if(smoothing == null) smoothing = false;
		this.__lease.set(this.__leaseNum++,new Date().getTime());
		source.drawToSurface(this.___textureBuffer,matrix,inColorTransform,blendMode,clipRect,smoothing);
		if(inColorTransform != null) {
			var rect = new flash.geom.Rectangle();
			var object = source;
			rect.x = matrix != null?matrix.tx:0;
			rect.y = matrix != null?matrix.ty:0;
			try {
				rect.width = Reflect.getProperty(source,"width");
				rect.height = Reflect.getProperty(source,"height");
			} catch( e ) {
				rect.width = this.___textureBuffer.width;
				rect.height = this.___textureBuffer.height;
			}
			this.colorTransform(rect,inColorTransform);
		}
	}
	,dispose: function() {
		this.__clearCanvas();
		this.___textureBuffer = null;
		this.__leaseNum = 0;
		this.__lease = null;
		this.__imageData = null;
	}
	,destroy: function() {
		this.___textureBuffer = null;
	}
	,copyPixels: function(sourceBitmapData,sourceRect,destPoint,alphaBitmapData,alphaPoint,mergeAlpha) {
		if(mergeAlpha == null) mergeAlpha = false;
		if(sourceBitmapData.___textureBuffer == null || this.___textureBuffer == null || sourceBitmapData.___textureBuffer.width == 0 || sourceBitmapData.___textureBuffer.height == 0 || sourceRect.width <= 0 || sourceRect.height <= 0) return;
		if(sourceRect.x + sourceRect.width > sourceBitmapData.___textureBuffer.width) sourceRect.width = sourceBitmapData.___textureBuffer.width - sourceRect.x;
		if(sourceRect.y + sourceRect.height > sourceBitmapData.___textureBuffer.height) sourceRect.height = sourceBitmapData.___textureBuffer.height - sourceRect.y;
		if(alphaBitmapData != null && alphaBitmapData.__transparent) {
			if(alphaPoint == null) alphaPoint = new flash.geom.Point();
			var bitmapData = new flash.display.BitmapData(sourceBitmapData.___textureBuffer != null?sourceBitmapData.___textureBuffer.width:0,sourceBitmapData.___textureBuffer != null?sourceBitmapData.___textureBuffer.height:0,true);
			bitmapData.copyPixels(sourceBitmapData,sourceRect,new flash.geom.Point(sourceRect.x,sourceRect.y));
			bitmapData.copyChannel(alphaBitmapData,new flash.geom.Rectangle(alphaPoint.x,alphaPoint.y,sourceRect.width,sourceRect.height),new flash.geom.Point(sourceRect.x,sourceRect.y),8,8);
			sourceBitmapData = bitmapData;
		}
		if(!this.__locked) {
			this.__lease.set(this.__leaseNum++,new Date().getTime());
			var ctx = this.___textureBuffer.getContext("2d");
			if(!mergeAlpha) {
				if(this.__transparent && sourceBitmapData.__transparent) {
					var trpCtx = sourceBitmapData.__transparentFiller.getContext("2d");
					var trpData = trpCtx.getImageData(sourceRect.x,sourceRect.y,sourceRect.width,sourceRect.height);
					ctx.putImageData(trpData,destPoint.x,destPoint.y);
				}
			}
			ctx.drawImage(sourceBitmapData.___textureBuffer,sourceRect.x,sourceRect.y,sourceRect.width,sourceRect.height,destPoint.x,destPoint.y,sourceRect.width,sourceRect.height);
		} else this.__copyPixelList[this.__copyPixelList.length] = { handle : sourceBitmapData.___textureBuffer, transparentFiller : mergeAlpha?null:sourceBitmapData.__transparentFiller, sourceX : sourceRect.x, sourceY : sourceRect.y, sourceWidth : sourceRect.width, sourceHeight : sourceRect.height, destX : destPoint.x, destY : destPoint.y};
	}
	,copyChannel: function(sourceBitmapData,sourceRect,destPoint,sourceChannel,destChannel) {
		this.rect = this.clipRect(this.rect);
		if(this.rect == null) return;
		if(destChannel == 8 && !this.__transparent) return;
		if(sourceBitmapData.___textureBuffer == null || this.___textureBuffer == null || sourceRect.width <= 0 || sourceRect.height <= 0) return;
		if(sourceRect.x + sourceRect.width > sourceBitmapData.___textureBuffer.width) sourceRect.width = sourceBitmapData.___textureBuffer.width - sourceRect.x;
		if(sourceRect.y + sourceRect.height > sourceBitmapData.___textureBuffer.height) sourceRect.height = sourceBitmapData.___textureBuffer.height - sourceRect.y;
		var doChannelCopy = function(imageData) {
			var srcCtx = sourceBitmapData.___textureBuffer.getContext("2d");
			var srcImageData = srcCtx.getImageData(sourceRect.x,sourceRect.y,sourceRect.width,sourceRect.height);
			var destIdx = -1;
			if(destChannel == 8) destIdx = 3; else if(destChannel == 4) destIdx = 2; else if(destChannel == 2) destIdx = 1; else if(destChannel == 1) destIdx = 0; else throw "Invalid destination BitmapDataChannel passed to BitmapData::copyChannel.";
			var pos = 4 * (Math.round(destPoint.x) + Math.round(destPoint.y) * imageData.width) + destIdx;
			var boundR = Math.round(4 * (destPoint.x + sourceRect.width));
			var setPos = function(val) {
				if(pos % (imageData.width * 4) > boundR - 1) pos += imageData.width * 4 - boundR;
				imageData.data[pos] = val;
				pos += 4;
			};
			var srcIdx = -1;
			if(sourceChannel == 8) srcIdx = 3; else if(sourceChannel == 4) srcIdx = 2; else if(sourceChannel == 2) srcIdx = 1; else if(sourceChannel == 1) srcIdx = 0; else throw "Invalid source BitmapDataChannel passed to BitmapData::copyChannel.";
			while(srcIdx < srcImageData.data.length) {
				setPos(srcImageData.data[srcIdx]);
				srcIdx += 4;
			}
		};
		if(!this.__locked) {
			this.__lease.set(this.__leaseNum++,new Date().getTime());
			var ctx = this.___textureBuffer.getContext("2d");
			var imageData = ctx.getImageData(0,0,this.___textureBuffer != null?this.___textureBuffer.width:0,this.___textureBuffer != null?this.___textureBuffer.height:0);
			doChannelCopy(imageData);
			ctx.putImageData(imageData,0,0);
		} else {
			doChannelCopy(this.__imageData);
			this.__imageDataChanged = true;
		}
	}
	,compare: function(inBitmapTexture) {
		throw "bitmapData.compare is currently not supported for HTML5";
		return 0;
	}
	,colorTransform: function(rect,colorTransform) {
		if(rect == null) return;
		rect = this.clipRect(rect);
		if(!this.__locked) {
			this.__lease.set(this.__leaseNum++,new Date().getTime());
			var ctx = this.___textureBuffer.getContext("2d");
			var imagedata = ctx.getImageData(rect.x,rect.y,rect.width,rect.height);
			var offsetX;
			var _g1 = 0, _g = imagedata.data.length >> 2;
			while(_g1 < _g) {
				var i = _g1++;
				offsetX = i * 4;
				imagedata.data[offsetX] = imagedata.data[offsetX] * colorTransform.redMultiplier + colorTransform.redOffset | 0;
				imagedata.data[offsetX + 1] = imagedata.data[offsetX + 1] * colorTransform.greenMultiplier + colorTransform.greenOffset | 0;
				imagedata.data[offsetX + 2] = imagedata.data[offsetX + 2] * colorTransform.blueMultiplier + colorTransform.blueOffset | 0;
				imagedata.data[offsetX + 3] = imagedata.data[offsetX + 3] * colorTransform.alphaMultiplier + colorTransform.alphaOffset | 0;
			}
			ctx.putImageData(imagedata,rect.x,rect.y);
		} else {
			var s = 4 * (Math.round(rect.x) + Math.round(rect.y) * this.__imageData.width);
			var offsetY;
			var offsetX;
			var _g1 = 0, _g = Math.round(rect.height);
			while(_g1 < _g) {
				var i = _g1++;
				offsetY = i * this.__imageData.width;
				var _g3 = 0, _g2 = Math.round(rect.width);
				while(_g3 < _g2) {
					var j = _g3++;
					offsetX = 4 * (j + offsetY);
					this.__imageData.data[s + offsetX] = this.__imageData.data[s + offsetX] * colorTransform.redMultiplier + colorTransform.redOffset | 0;
					this.__imageData.data[s + offsetX + 1] = this.__imageData.data[s + offsetX + 1] * colorTransform.greenMultiplier + colorTransform.greenOffset | 0;
					this.__imageData.data[s + offsetX + 2] = this.__imageData.data[s + offsetX + 2] * colorTransform.blueMultiplier + colorTransform.blueOffset | 0;
					this.__imageData.data[s + offsetX + 3] = this.__imageData.data[s + offsetX + 3] * colorTransform.alphaMultiplier + colorTransform.alphaOffset | 0;
				}
			}
			this.__imageDataChanged = true;
		}
	}
	,clone: function() {
		var bitmapData = new flash.display.BitmapData(this.___textureBuffer != null?this.___textureBuffer.width:0,this.___textureBuffer != null?this.___textureBuffer.height:0,this.__transparent);
		var rect = new flash.geom.Rectangle(0,0,this.___textureBuffer != null?this.___textureBuffer.width:0,this.___textureBuffer != null?this.___textureBuffer.height:0);
		bitmapData.setPixels(rect,this.getPixels(rect));
		bitmapData.__lease.set(bitmapData.__leaseNum++,new Date().getTime());
		return bitmapData;
	}
	,clipRect: function(r) {
		if(r.x < 0) {
			r.width -= -r.x;
			r.x = 0;
			if(r.x + r.width <= 0) return null;
		}
		if(r.y < 0) {
			r.height -= -r.y;
			r.y = 0;
			if(r.y + r.height <= 0) return null;
		}
		if(r.x + r.width >= (this.___textureBuffer != null?this.___textureBuffer.width:0)) {
			r.width -= r.x + r.width - (this.___textureBuffer != null?this.___textureBuffer.width:0);
			if(r.width <= 0) return null;
		}
		if(r.y + r.height >= (this.___textureBuffer != null?this.___textureBuffer.height:0)) {
			r.height -= r.y + r.height - (this.___textureBuffer != null?this.___textureBuffer.height:0);
			if(r.height <= 0) return null;
		}
		return r;
	}
	,clear: function(color) {
		this.fillRect(this.rect,color);
	}
	,applyFilter: function(sourceBitmapData,sourceRect,destPoint,filter) {
		if(sourceBitmapData == this && sourceRect.x == destPoint.x && sourceRect.y == destPoint.y) filter.__applyFilter(this.___textureBuffer,sourceRect); else {
			var bitmapData = new flash.display.BitmapData(sourceRect.width | 0,sourceRect.height | 0);
			bitmapData.copyPixels(sourceBitmapData,sourceRect,new flash.geom.Point());
			filter.__applyFilter(bitmapData.___textureBuffer);
			this.copyPixels(bitmapData,bitmapData.rect,destPoint);
		}
	}
	,___textureBuffer: null
	,___id: null
	,__transparentFiller: null
	,__transparent: null
	,__locked: null
	,__leaseNum: null
	,__lease: null
	,__initColor: null
	,__imageDataChanged: null
	,__copyPixelList: null
	,__assignedBitmaps: null
	,__referenceCount: null
	,__glTexture: null
	,__imageData: null
	,width: null
	,transparent: null
	,rect: null
	,height: null
	,__class__: flash.display.BitmapData
	,__properties__: {get_height:"get_height",get_transparent:"get_transparent",get_width:"get_width"}
}
var RaceHorce = function(width,height,transparent,fillRGBA,onload) {
	if(fillRGBA == null) fillRGBA = -1;
	if(transparent == null) transparent = true;
	flash.display.BitmapData.call(this,width,height,transparent,fillRGBA);
	var currentType = Type.getClass(this);
	if(RaceHorce.preload != null) {
		this.___textureBuffer.width = RaceHorce.preload.get_width() | 0;
		this.___textureBuffer.height = RaceHorce.preload.get_height() | 0;
		this.rect = new flash.geom.Rectangle(0,0,RaceHorce.preload.get_width(),RaceHorce.preload.get_height());
		this.setPixels(this.rect,RaceHorce.preload.getPixels(this.rect));
		this.__lease.set(this.__leaseNum++,new Date().getTime());
	} else {
		var byteArray = flash.utils.ByteArray.fromBytes(haxe.Resource.getBytes(RaceHorce.resourceName));
		if(onload != null && !js.Boot.__instanceof(onload,Bool)) this.__loadFromBytes(byteArray,null,onload); else this.__loadFromBytes(byteArray,null,null);
	}
};
$hxClasses["RaceHorce"] = RaceHorce;
RaceHorce.__name__ = ["RaceHorce"];
RaceHorce.__super__ = flash.display.BitmapData;
RaceHorce.prototype = $extend(flash.display.BitmapData.prototype,{
	__class__: RaceHorce
});
var LoadBarContur = function(width,height,transparent,fillRGBA,onload) {
	if(fillRGBA == null) fillRGBA = -1;
	if(transparent == null) transparent = true;
	flash.display.BitmapData.call(this,width,height,transparent,fillRGBA);
	var currentType = Type.getClass(this);
	if(LoadBarContur.preload != null) {
		this.___textureBuffer.width = LoadBarContur.preload.get_width() | 0;
		this.___textureBuffer.height = LoadBarContur.preload.get_height() | 0;
		this.rect = new flash.geom.Rectangle(0,0,LoadBarContur.preload.get_width(),LoadBarContur.preload.get_height());
		this.setPixels(this.rect,LoadBarContur.preload.getPixels(this.rect));
		this.__lease.set(this.__leaseNum++,new Date().getTime());
	} else {
		var byteArray = flash.utils.ByteArray.fromBytes(haxe.Resource.getBytes(LoadBarContur.resourceName));
		if(onload != null && !js.Boot.__instanceof(onload,Bool)) this.__loadFromBytes(byteArray,null,onload); else this.__loadFromBytes(byteArray,null,null);
	}
};
$hxClasses["LoadBarContur"] = LoadBarContur;
LoadBarContur.__name__ = ["LoadBarContur"];
LoadBarContur.__super__ = flash.display.BitmapData;
LoadBarContur.prototype = $extend(flash.display.BitmapData.prototype,{
	__class__: LoadBarContur
});
var LoadBar = function(width,height,transparent,fillRGBA,onload) {
	if(fillRGBA == null) fillRGBA = -1;
	if(transparent == null) transparent = true;
	flash.display.BitmapData.call(this,width,height,transparent,fillRGBA);
	var currentType = Type.getClass(this);
	if(LoadBar.preload != null) {
		this.___textureBuffer.width = LoadBar.preload.get_width() | 0;
		this.___textureBuffer.height = LoadBar.preload.get_height() | 0;
		this.rect = new flash.geom.Rectangle(0,0,LoadBar.preload.get_width(),LoadBar.preload.get_height());
		this.setPixels(this.rect,LoadBar.preload.getPixels(this.rect));
		this.__lease.set(this.__leaseNum++,new Date().getTime());
	} else {
		var byteArray = flash.utils.ByteArray.fromBytes(haxe.Resource.getBytes(LoadBar.resourceName));
		if(onload != null && !js.Boot.__instanceof(onload,Bool)) this.__loadFromBytes(byteArray,null,onload); else this.__loadFromBytes(byteArray,null,null);
	}
};
$hxClasses["LoadBar"] = LoadBar;
LoadBar.__name__ = ["LoadBar"];
LoadBar.__super__ = flash.display.BitmapData;
LoadBar.prototype = $extend(flash.display.BitmapData.prototype,{
	__class__: LoadBar
});
var LogoBar = function(width,height,transparent,fillRGBA,onload) {
	if(fillRGBA == null) fillRGBA = -1;
	if(transparent == null) transparent = true;
	flash.display.BitmapData.call(this,width,height,transparent,fillRGBA);
	var currentType = Type.getClass(this);
	if(LogoBar.preload != null) {
		this.___textureBuffer.width = LogoBar.preload.get_width() | 0;
		this.___textureBuffer.height = LogoBar.preload.get_height() | 0;
		this.rect = new flash.geom.Rectangle(0,0,LogoBar.preload.get_width(),LogoBar.preload.get_height());
		this.setPixels(this.rect,LogoBar.preload.getPixels(this.rect));
		this.__lease.set(this.__leaseNum++,new Date().getTime());
	} else {
		var byteArray = flash.utils.ByteArray.fromBytes(haxe.Resource.getBytes(LogoBar.resourceName));
		if(onload != null && !js.Boot.__instanceof(onload,Bool)) this.__loadFromBytes(byteArray,null,onload); else this.__loadFromBytes(byteArray,null,null);
	}
};
$hxClasses["LogoBar"] = LogoBar;
LogoBar.__name__ = ["LogoBar"];
LogoBar.__super__ = flash.display.BitmapData;
LogoBar.prototype = $extend(flash.display.BitmapData.prototype,{
	__class__: LogoBar
});
var Preloader = function() {
	this.horseAng = 0;
	this._painted = false;
	NMEPreloader.call(this);
	this.barContur = new flash.display.Bitmap(new LoadBarContur(218,13));
	this.bar = new flash.display.Bitmap(new LoadBar(218,13));
	this.bar.set_x(this.getWidth() / 2 - this.bar.get_width() / 2);
	this.bar.set_y(this.getHeight() / 2 - this.bar.get_height() / 2);
	this.barContur.set_x(this.bar.get_x());
	this.barContur.set_y(this.bar.get_y());
	this.addChild(this.barContur);
	this.addChild(this.bar);
	this.bar.set_width(1);
	this.raceHorseCont = new flash.display.Sprite();
	this._raceHorse = new flash.display.Bitmap(new RaceHorce(30,31));
	this._raceHorse.set_x(-this._raceHorse.get_width() / 2);
	this._raceHorse.set_y(-this._raceHorse.get_height());
	this.raceHorseCont.addChild(this._raceHorse);
	this.raceHorseCont.set_x(this.bar.get_x() + this.bar.get_width());
	this.raceHorseCont.set_y(this.bar.get_y() - 5);
	this.addChild(this.raceHorseCont);
	this.logo = new flash.display.Bitmap(new LogoBar(145,63));
	this.logo.set_x(this.getWidth() / 2 - this.logo.get_width() / 2);
	this.logo.set_y(this.raceHorseCont.get_y() - this.raceHorseCont.get_height() - this.logo.get_height() - 10);
	this.addChild(this.logo);
	this.getChildAt(0).set_visible(false);
	this.getChildAt(1).set_visible(false);
};
$hxClasses["Preloader"] = Preloader;
Preloader.__name__ = ["Preloader"];
Preloader.__super__ = NMEPreloader;
Preloader.prototype = $extend(NMEPreloader.prototype,{
	onUpdate: function(filesLoaded,filesTotal) {
		NMEPreloader.prototype.onUpdate.call(this,filesLoaded,filesTotal);
		this.bar.set_width(218 * filesLoaded / filesTotal);
		this.raceHorseCont.set_x(this.bar.get_x() + this.bar.get_width());
		this.horseAng += 0.6;
		this.raceHorseCont.set_rotation(15 * Math.sin(this.horseAng));
	}
	,horseAng: null
	,_painted: null
	,logo: null
	,bar: null
	,barContur: null
	,raceHorseCont: null
	,_raceHorse: null
	,__class__: Preloader
});
var Reflect = function() { }
$hxClasses["Reflect"] = Reflect;
Reflect.__name__ = ["Reflect"];
Reflect.hasField = function(o,field) {
	return Object.prototype.hasOwnProperty.call(o,field);
}
Reflect.field = function(o,field) {
	var v = null;
	try {
		v = o[field];
	} catch( e ) {
	}
	return v;
}
Reflect.getProperty = function(o,field) {
	var tmp;
	return o == null?null:o.__properties__ && (tmp = o.__properties__["get_" + field])?o[tmp]():o[field];
}
Reflect.fields = function(o) {
	var a = [];
	if(o != null) {
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		for( var f in o ) {
		if(f != "__id__" && f != "hx__closures__" && hasOwnProperty.call(o,f)) a.push(f);
		}
	}
	return a;
}
Reflect.isFunction = function(f) {
	return typeof(f) == "function" && !(f.__name__ || f.__ename__);
}
Reflect.compareMethods = function(f1,f2) {
	if(f1 == f2) return true;
	if(!Reflect.isFunction(f1) || !Reflect.isFunction(f2)) return false;
	return f1.scope == f2.scope && f1.method == f2.method && f1.method != null;
}
Reflect.deleteField = function(o,field) {
	if(!Reflect.hasField(o,field)) return false;
	delete(o[field]);
	return true;
}
var SimpleMc = function(imgName,frames,frameRateCoef) {
	if(frameRateCoef == null) frameRateCoef = 1;
	this.totalFrames = 0;
	this.currentFrame = 0;
	this.frameCoef = 1;
	this.visible = true;
	this.y = 0;
	this.x = 0;
	this.totalFrames = frames;
	this.frameCoef = frameRateCoef;
	this.bitmaps = new Array();
	var _g = 0;
	while(_g < frames) {
		var i = _g++;
		this.bitmaps.push(openfl.Assets.getBitmapData(imgName + (i + 1) + ".png"));
	}
};
$hxClasses["SimpleMc"] = SimpleMc;
SimpleMc.__name__ = ["SimpleMc"];
SimpleMc.prototype = {
	get_height: function() {
		return this.bitmaps[0].get_height();
	}
	,get_width: function() {
		return this.bitmaps[0].get_width();
	}
	,getHeight: function() {
		return this.bitmaps[0].get_height();
	}
	,getWidth: function() {
		return this.bitmaps[0].get_width();
	}
	,getBitmapData: function() {
		return this.bitmaps[Math.floor(this.currentFrame)];
	}
	,update: function() {
		var ended = false;
		this.currentFrame += this.frameCoef;
		if(this.currentFrame >= this.totalFrames) {
			this.currentFrame = 0;
			ended = true;
		}
		return ended;
	}
	,totalFrames: null
	,currentFrame: null
	,frameCoef: null
	,bitmaps: null
	,visible: null
	,height: null
	,width: null
	,y: null
	,x: null
	,__class__: SimpleMc
	,__properties__: {get_width:"get_width",get_height:"get_height"}
}
var Std = function() { }
$hxClasses["Std"] = Std;
Std.__name__ = ["Std"];
Std.string = function(s) {
	return js.Boot.__string_rec(s,"");
}
Std.parseInt = function(x) {
	var v = parseInt(x,10);
	if(v == 0 && (HxOverrides.cca(x,1) == 120 || HxOverrides.cca(x,1) == 88)) v = parseInt(x);
	if(isNaN(v)) return null;
	return v;
}
Std.parseFloat = function(x) {
	return parseFloat(x);
}
var StringBuf = function() {
	this.b = "";
};
$hxClasses["StringBuf"] = StringBuf;
StringBuf.__name__ = ["StringBuf"];
StringBuf.prototype = {
	b: null
	,__class__: StringBuf
}
var StringTools = function() { }
$hxClasses["StringTools"] = StringTools;
StringTools.__name__ = ["StringTools"];
StringTools.urlEncode = function(s) {
	return encodeURIComponent(s);
}
StringTools.urlDecode = function(s) {
	return decodeURIComponent(s.split("+").join(" "));
}
StringTools.startsWith = function(s,start) {
	return s.length >= start.length && HxOverrides.substr(s,0,start.length) == start;
}
StringTools.isSpace = function(s,pos) {
	var c = HxOverrides.cca(s,pos);
	return c > 8 && c < 14 || c == 32;
}
StringTools.ltrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,r)) r++;
	if(r > 0) return HxOverrides.substr(s,r,l - r); else return s;
}
StringTools.rtrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,l - r - 1)) r++;
	if(r > 0) return HxOverrides.substr(s,0,l - r); else return s;
}
StringTools.trim = function(s) {
	return StringTools.ltrim(StringTools.rtrim(s));
}
StringTools.replace = function(s,sub,by) {
	return s.split(sub).join(by);
}
StringTools.hex = function(n,digits) {
	var s = "";
	var hexChars = "0123456789ABCDEF";
	do {
		s = hexChars.charAt(n & 15) + s;
		n >>>= 4;
	} while(n > 0);
	if(digits != null) while(s.length < digits) s = "0" + s;
	return s;
}
var Type = function() { }
$hxClasses["Type"] = Type;
Type.__name__ = ["Type"];
Type.getClass = function(o) {
	if(o == null) return null;
	return o.__class__;
}
Type.getClassName = function(c) {
	var a = c.__name__;
	return a.join(".");
}
Type.resolveClass = function(name) {
	var cl = $hxClasses[name];
	if(cl == null || !cl.__name__) return null;
	return cl;
}
Type.resolveEnum = function(name) {
	var e = $hxClasses[name];
	if(e == null || !e.__ename__) return null;
	return e;
}
Type.createInstance = function(cl,args) {
	switch(args.length) {
	case 0:
		return new cl();
	case 1:
		return new cl(args[0]);
	case 2:
		return new cl(args[0],args[1]);
	case 3:
		return new cl(args[0],args[1],args[2]);
	case 4:
		return new cl(args[0],args[1],args[2],args[3]);
	case 5:
		return new cl(args[0],args[1],args[2],args[3],args[4]);
	case 6:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5]);
	case 7:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6]);
	case 8:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7]);
	default:
		throw "Too many arguments";
	}
	return null;
}
Type.createEmptyInstance = function(cl) {
	function empty() {}; empty.prototype = cl.prototype;
	return new empty();
}
Type.createEnum = function(e,constr,params) {
	var f = Reflect.field(e,constr);
	if(f == null) throw "No such constructor " + constr;
	if(Reflect.isFunction(f)) {
		if(params == null) throw "Constructor " + constr + " need parameters";
		return f.apply(e,params);
	}
	if(params != null && params.length != 0) throw "Constructor " + constr + " does not need parameters";
	return f;
}
Type.getInstanceFields = function(c) {
	var a = [];
	for(var i in c.prototype) a.push(i);
	HxOverrides.remove(a,"__class__");
	HxOverrides.remove(a,"__properties__");
	return a;
}
Type.getEnumConstructs = function(e) {
	var a = e.__constructs__;
	return a.slice();
}
var WinLoseScreen = function() {
	flash.display.Sprite.call(this);
	this.main = Main.current;
	this.sWidth = this.main.sWidth;
	this.sHeight = this.main.sHeight;
	this.numericFont = this.main.numericFont;
	this.labelField = new flash.display.Bitmap(new flash.display.BitmapData(100,100,true,0));
	this.labelField.set_y(40);
	this.labelField.set_x(250);
	this.placesBmd = new flash.display.Bitmap(new flash.display.BitmapData(this.sWidth | 0,100,true,0));
	this.placesBmd.set_y(50);
	this.placesBmd.set_x(40);
	this.addChild(this.placesBmd);
	this.youFailed = new flash.display.Bitmap(openfl.Assets.getBitmapData("img/YouFailed.png"));
	this.youFailed.set_x(this.sWidth / 2 - this.youFailed.get_width() / 2);
	this.youFailed.set_y(80);
	this.addChild(this.youFailed);
	this.youWon = new flash.display.Bitmap(openfl.Assets.getBitmapData("img/YouWon.png"));
	this.youWon.set_x(this.sWidth / 2 - this.youWon.get_width() / 2);
	this.youWon.set_y(80);
	this.addChild(this.youWon);
	this.retryBtn = new flash.display.Bitmap(openfl.Assets.getBitmapData("img/button_replay.png"));
	this.mainMenuBtn = new flash.display.Bitmap(openfl.Assets.getBitmapData("img/button_menu.png"));
	this.moreGamesBtn = new flash.display.Bitmap(openfl.Assets.getBitmapData("img/button_moregames.png"));
	this.retryBtn.set_x(this.sWidth / 2 - this.retryBtn.get_width() - 2.5);
	this.retryBtn.set_y(this.sHeight / 2 - this.retryBtn.get_height() / 2);
	this.addChild(this.retryBtn);
	this.mainMenuBtn.set_x(this.sWidth / 2 + 2.5);
	this.mainMenuBtn.set_y(this.retryBtn.get_y());
	this.addChild(this.mainMenuBtn);
	this.moreGamesBtn.set_x(this.sWidth / 2 - this.moreGamesBtn.get_width() / 2);
	this.moreGamesBtn.set_y(this.mainMenuBtn.get_y() + this.mainMenuBtn.get_height());
	this.addChild(this.moreGamesBtn);
	this.retryBtn.addEventListener(flash.events.MouseEvent.CLICK,$bind(this,this.retryClick));
	this.retryBtn.addEventListener("touchEnd",$bind(this,this.retryTouch));
	this.mainMenuBtn.addEventListener(flash.events.MouseEvent.CLICK,$bind(this,this.clickMainMenu));
	this.mainMenuBtn.addEventListener("touchEnd",$bind(this,this.touchMainMenu));
	this.moreGamesBtn.__graphics.__surface.addEventListener("touchend",Main.openMoreGames);
	this.moreGamesBtn.__graphics.__surface.addEventListener("click",Main.openMoreGames);
	this.resultTxt = new flash.text.TextField();
};
$hxClasses["WinLoseScreen"] = WinLoseScreen;
WinLoseScreen.__name__ = ["WinLoseScreen"];
WinLoseScreen.__super__ = flash.display.Sprite;
WinLoseScreen.prototype = $extend(flash.display.Sprite.prototype,{
	setResult: function(isWin,score,places) {
		if(score == null) score = "";
		if(!isWin) {
			this.youFailed.alpha = 1;
			this.youWon.alpha = 0;
			return;
		} else {
			this.youFailed.alpha = 0;
			this.youWon.alpha = 1;
		}
	}
	,touchMainMenu: function(e) {
		if(!this.get_visible()) return;
		if(e.type != null && e.type != this.main.clickType) return;
		this.main.sounds.playAmbient(true);
		this.main.sounds.stopSound("nature");
		this.disable();
		this.main.playMenu.enable();
	}
	,clickMainMenu: function(e) {
		if(!this.get_visible()) return;
		if(e.type != null && e.type != this.main.clickType) return;
		this.main.sounds.playAmbient(true);
		this.main.sounds.stopSound("nature");
		this.disable();
		this.main.playMenu.enable();
	}
	,retryTouch: function(e) {
		if(!this.get_visible()) return;
		if(e.type != null && e.type != this.main.clickType) return;
		this.disable();
		this.main.newGame(true);
	}
	,retryClick: function(e) {
		if(!this.get_visible()) return;
		if(e.type != null && e.type != this.main.clickType) return;
		this.disable();
		this.main.newGame(true);
	}
	,enable: function() {
		this.set_visible(true);
		this.main.activateOverlay(true);
	}
	,disable: function() {
		this.set_visible(false);
		this.main.deactivateOverlays();
	}
	,clickBtn: function(e) {
		this.hp.x = e.stageX;
		this.hp.y = e.stageY;
		if(this.retryBtn.hitTestPoint(this.hp.x,this.hp.y)) this.retryClick(e); else if(this.mainMenuBtn.hitTestPoint(this.hp.x,this.hp.y)) this.clickMainMenu(e);
	}
	,hp: null
	,moreGamesBtn: null
	,mainMenuBtn: null
	,retryBtn: null
	,placesBmd: null
	,labelField: null
	,resScore: null
	,numericFont: null
	,youFailed: null
	,youWon: null
	,resultTxt: null
	,sHeight: null
	,sWidth: null
	,main: null
	,__class__: WinLoseScreen
});
var haxe = {}
haxe.Timer = function(time_ms) {
	var me = this;
	this.id = setInterval(function() {
		me.run();
	},time_ms);
};
$hxClasses["haxe.Timer"] = haxe.Timer;
haxe.Timer.__name__ = ["haxe","Timer"];
haxe.Timer.delay = function(f,time_ms) {
	var t = new haxe.Timer(time_ms);
	t.run = function() {
		t.stop();
		f();
	};
	return t;
}
haxe.Timer.stamp = function() {
	return new Date().getTime() / 1000;
}
haxe.Timer.prototype = {
	run: function() {
		haxe.Log.trace("run",{ fileName : "Timer.hx", lineNumber : 98, className : "haxe.Timer", methodName : "run"});
	}
	,stop: function() {
		if(this.id == null) return;
		clearInterval(this.id);
		this.id = null;
	}
	,id: null
	,__class__: haxe.Timer
}
flash.Lib = function(rootElement,width,height) {
	this.mKilled = false;
	this.__scr = rootElement;
	if(this.__scr == null) throw "Root element not found";
	this.__scr.style.setProperty("overflow","visible","");
	this.__scr.style.setProperty("position","absolute","");
	if(this.__scr.style.getPropertyValue("width") != "100%") this.__scr.style.width = width + "px";
	if(this.__scr.style.getPropertyValue("height") != "100%") this.__scr.style.height = height + "px";
};
$hxClasses["flash.Lib"] = flash.Lib;
flash.Lib.__name__ = ["flash","Lib"];
flash.Lib.__properties__ = {get_current:"get_current"}
flash.Lib.addCallback = function(functionName,closure) {
	flash.Lib.mMe.__scr[functionName] = closure;
}
flash.Lib["as"] = function(v,c) {
	return js.Boot.__instanceof(v,c)?v:null;
}
flash.Lib.attach = function(name) {
	return new flash.display.MovieClip();
}
flash.Lib.getTimer = function() {
	return (haxe.Timer.stamp() - flash.Lib.starttime) * 1000 | 0;
}
flash.Lib.getURL = function(request,target) {
//	if(target == null) target = "_blank";
//	window.open(request.url,target);
}
flash.Lib.preventDefaultTouchMove = function() {
	js.Browser.document.addEventListener("touchmove",function(evt) {
		evt.preventDefault();
	},false);
}
flash.Lib.Run = function(tgt,width,height) {
	flash.Lib.mMe = new flash.Lib(tgt,width,height);
	var _g1 = 0, _g = tgt.attributes.length;
	while(_g1 < _g) {
		var i = _g1++;
		var attr = tgt.attributes.item(i);
		if(StringTools.startsWith(attr.name,"data-")) {
			if(attr.name == "data-" + "framerate") flash.Lib.__getStage().set_frameRate(Std.parseFloat(attr.value));
		}
	}
	var _g = 0, _g1 = flash.Lib.HTML_TOUCH_EVENT_TYPES;
	while(_g < _g1.length) {
		var type = _g1[_g];
		++_g;
		tgt.addEventListener(type,($_=flash.Lib.__getStage(),$bind($_,$_.__queueStageEvent)),true);
	}
	var _g = 0, _g1 = flash.Lib.HTML_TOUCH_ALT_EVENT_TYPES;
	while(_g < _g1.length) {
		var type = _g1[_g];
		++_g;
		tgt.addEventListener(type,($_=flash.Lib.__getStage(),$bind($_,$_.__queueStageEvent)),true);
	}
	var _g = 0, _g1 = flash.Lib.HTML_DIV_EVENT_TYPES;
	while(_g < _g1.length) {
		var type = _g1[_g];
		++_g;
		tgt.addEventListener(type,($_=flash.Lib.__getStage(),$bind($_,$_.__queueStageEvent)),true);
	}
	if(Reflect.hasField(js.Browser.window,"on" + "devicemotion")) js.Browser.window.addEventListener("devicemotion",($_=flash.Lib.__getStage(),$bind($_,$_.__queueStageEvent)),true);
	if(Reflect.hasField(js.Browser.window,"on" + "orientationchange")) js.Browser.window.addEventListener("orientationchange",($_=flash.Lib.__getStage(),$bind($_,$_.__queueStageEvent)),true);
	var _g = 0, _g1 = flash.Lib.HTML_WINDOW_EVENT_TYPES;
	while(_g < _g1.length) {
		var type = _g1[_g];
		++_g;
		js.Browser.window.addEventListener(type,($_=flash.Lib.__getStage(),$bind($_,$_.__queueStageEvent)),false);
	}
	if(tgt.style.backgroundColor != null && tgt.style.backgroundColor != "") flash.Lib.__getStage().set_backgroundColor(flash.Lib.__parseColor(tgt.style.backgroundColor,function(res,pos,cur) {
		return pos == 0?res | cur << 16:pos == 1?res | cur << 8:pos == 2?res | cur:(function($this) {
			var $r;
			throw "pos should be 0-2";
			return $r;
		}(this));
	})); else flash.Lib.__getStage().set_backgroundColor(16777215);
	flash.Lib.get_current().get_graphics().beginFill(flash.Lib.__getStage().get_backgroundColor());
	flash.Lib.get_current().get_graphics().drawRect(0,0,width,height);
	flash.Lib.__setSurfaceId(flash.Lib.get_current().get_graphics().__surface,"Root MovieClip");
	flash.Lib.__getStage().__updateNextWake();
	return flash.Lib.mMe;
}
flash.Lib.setUserScalable = function(isScalable) {
	if(isScalable == null) isScalable = true;
	var meta = js.Browser.document.createElement("meta");
	meta.name = "viewport";
	meta.content = "user-scalable=" + (isScalable?"yes":"no");
}
flash.Lib.trace = function(arg) {
	if(window.console != null) window.console.log(arg);
}
flash.Lib.__appendSurface = function(surface,before,after) {
	if(flash.Lib.mMe.__scr != null) {
		surface.style.setProperty("position","absolute","");
		surface.style.setProperty("left","0px","");
		surface.style.setProperty("top","0px","");
		surface.style.setProperty("transform-origin","0 0","");
		surface.style.setProperty("-moz-transform-origin","0 0","");
		surface.style.setProperty("-webkit-transform-origin","0 0","");
		surface.style.setProperty("-o-transform-origin","0 0","");
		surface.style.setProperty("-ms-transform-origin","0 0","");
		try {
			if(surface.localName == "canvas") surface.onmouseover = surface.onselectstart = function() {
				return false;
			};
		} catch( e ) {
		}
		if(before != null) before.parentNode.insertBefore(surface,before); else if(after != null && after.nextSibling != null) after.parentNode.insertBefore(surface,after.nextSibling); else flash.Lib.mMe.__scr.appendChild(surface);
	}
}
flash.Lib.__appendText = function(surface,container,text,wrap,isHtml) {
	var _g1 = 0, _g = surface.childNodes.length;
	while(_g1 < _g) {
		var i = _g1++;
		surface.removeChild(surface.childNodes[i]);
	}
	if(isHtml) container.innerHTML = text; else container.appendChild(js.Browser.document.createTextNode(text));
	container.style.setProperty("position","relative","");
	container.style.setProperty("cursor","default","");
	if(!wrap) container.style.setProperty("white-space","nowrap","");
	surface.appendChild(container);
}
flash.Lib.__bootstrap = function() {
	if(flash.Lib.mMe == null) {
		var target = js.Browser.document.getElementById("haxe:openfl");
		if(target == null) target = js.Browser.document.createElement("div");
		var agent = navigator.userAgent;
		if(agent.indexOf("BlackBerry") > -1 && target.style.height == "100%") target.style.height = screen.height + "px";
		if(agent.indexOf("Android") > -1) {
			var version = Std.parseFloat(HxOverrides.substr(agent,agent.indexOf("Android") + 8,3));
			if(version <= 2.3) flash.Lib.mForce2DTransform = true;
		}
		flash.Lib.Run(target,flash.Lib.__getWidth(),flash.Lib.__getHeight());
	}
}
flash.Lib.__copyStyle = function(src,tgt) {
	tgt.id = src.id;
	var _g = 0, _g1 = ["left","top","transform","transform-origin","-moz-transform","-moz-transform-origin","-webkit-transform","-webkit-transform-origin","-o-transform","-o-transform-origin","opacity","display"];
	while(_g < _g1.length) {
		var prop = _g1[_g];
		++_g;
		tgt.style.setProperty(prop,src.style.getPropertyValue(prop),"");
	}
}
flash.Lib.__createSurfaceAnimationCSS = function(surface,data,template,templateFunc,fps,discrete,infinite) {
	if(infinite == null) infinite = false;
	if(discrete == null) discrete = false;
	if(fps == null) fps = 25;
	if(surface.id == null || surface.id == "") {
		flash.Lib.trace("Failed to create a CSS Style tag for a surface without an id attribute");
		return null;
	}
	var style = null;
	if(surface.getAttribute("data-openfl-anim") != null) style = js.Browser.document.getElementById(surface.getAttribute("data-openfl-anim")); else {
		style = flash.Lib.mMe.__scr.appendChild(js.Browser.document.createElement("style"));
		style.sheet.id = "__openfl_anim_" + surface.id + "__";
		surface.setAttribute("data-openfl-anim",style.sheet.id);
	}
	var keyframeStylesheetRule = "";
	var _g1 = 0, _g = data.length;
	while(_g1 < _g) {
		var i = _g1++;
		var perc = i / (data.length - 1) * 100;
		var frame = data[i];
		keyframeStylesheetRule += perc + "% { " + template.execute(templateFunc(frame)) + " } ";
	}
	var animationDiscreteRule = discrete?"steps(::steps::, end)":"";
	var animationInfiniteRule = infinite?"infinite":"";
	var animationTpl = "";
	var _g = 0, _g1 = ["animation","-moz-animation","-webkit-animation","-o-animation","-ms-animation"];
	while(_g < _g1.length) {
		var prefix = _g1[_g];
		++_g;
		animationTpl += prefix + ": ::id:: ::duration::s " + animationDiscreteRule + " " + animationInfiniteRule + "; ";
	}
	var animationStylesheetRule = new haxe.Template(animationTpl).execute({ id : surface.id, duration : data.length / fps, steps : 1});
	var rules = style.sheet.rules != null?style.sheet.rules:style.sheet.cssRules;
	var _g = 0, _g1 = ["","-moz-","-webkit-","-o-","-ms-"];
	while(_g < _g1.length) {
		var variant = _g1[_g];
		++_g;
		try {
			style.sheet.insertRule("@" + variant + "keyframes " + surface.id + " {" + keyframeStylesheetRule + "}",rules.length);
		} catch( e ) {
		}
	}
	style.sheet.insertRule("#" + surface.id + " { " + animationStylesheetRule + " } ",rules.length);
	return style;
}
flash.Lib.__designMode = function(mode) {
	js.Browser.document.designMode = mode?"on":"off";
}
flash.Lib.__disableFullScreen = function() {
}
flash.Lib.__disableRightClick = function() {
	if(flash.Lib.mMe != null) try {
		flash.Lib.mMe.__scr.oncontextmenu = function() {
			return false;
		};
	} catch( e ) {
		flash.Lib.trace("Disable right click not supported in this browser.");
	}
}
flash.Lib.__drawClippedImage = function(surface,tgtCtx,clipRect) {
	if(clipRect != null) {
		if(clipRect.x < 0) {
			clipRect.width += clipRect.x;
			clipRect.x = 0;
		}
		if(clipRect.y < 0) {
			clipRect.height += clipRect.y;
			clipRect.y = 0;
		}
		if(clipRect.width > surface.width - clipRect.x) clipRect.width = surface.width - clipRect.x;
		if(clipRect.height > surface.height - clipRect.y) clipRect.height = surface.height - clipRect.y;
		tgtCtx.drawImage(surface,clipRect.x,clipRect.y,clipRect.width,clipRect.height,clipRect.x,clipRect.y,clipRect.width,clipRect.height);
	} else tgtCtx.drawImage(surface,0,0);
}
flash.Lib.__drawSurfaceRect = function(surface,tgt,x,y,rect) {
	var tgtCtx = tgt.getContext("2d");
	tgt.width = rect.width;
	tgt.height = rect.height;
	tgtCtx.drawImage(surface,rect.x,rect.y,rect.width,rect.height,0,0,rect.width,rect.height);
	tgt.style.left = x + "px";
	tgt.style.top = y + "px";
}
flash.Lib.__drawToSurface = function(surface,tgt,matrix,alpha,clipRect,smoothing) {
	if(smoothing == null) smoothing = true;
	if(alpha == null) alpha = 1.0;
	var srcCtx = surface.getContext("2d");
	var tgtCtx = tgt.getContext("2d");
	tgtCtx.globalAlpha = alpha;
	flash.Lib.__setImageSmoothing(tgtCtx,smoothing);
	if(surface.width > 0 && surface.height > 0) {
		if(matrix != null) {
			tgtCtx.save();
			if(matrix.a == 1 && matrix.b == 0 && matrix.c == 0 && matrix.d == 1) tgtCtx.translate(matrix.tx,matrix.ty); else tgtCtx.setTransform(matrix.a,matrix.b,matrix.c,matrix.d,matrix.tx,matrix.ty);
			flash.Lib.__drawClippedImage(surface,tgtCtx,clipRect);
			tgtCtx.restore();
		} else flash.Lib.__drawClippedImage(surface,tgtCtx,clipRect);
	}
}
flash.Lib.__enableFullScreen = function() {
	if(flash.Lib.mMe != null) {
		var origWidth = flash.Lib.mMe.__scr.style.getPropertyValue("width");
		var origHeight = flash.Lib.mMe.__scr.style.getPropertyValue("height");
		flash.Lib.mMe.__scr.style.setProperty("width","100%","");
		flash.Lib.mMe.__scr.style.setProperty("height","100%","");
		flash.Lib.__disableFullScreen = function() {
			flash.Lib.mMe.__scr.style.setProperty("width",origWidth,"");
			flash.Lib.mMe.__scr.style.setProperty("height",origHeight,"");
		};
	}
}
flash.Lib.__enableRightClick = function() {
	if(flash.Lib.mMe != null) try {
		flash.Lib.mMe.__scr.oncontextmenu = null;
	} catch( e ) {
		flash.Lib.trace("Enable right click not supported in this browser.");
	}
}
flash.Lib.__fullScreenHeight = function() {
	return js.Browser.window.innerHeight;
}
flash.Lib.__fullScreenWidth = function() {
	return js.Browser.window.innerWidth;
}
flash.Lib.__getHeight = function() {
	var tgt = flash.Lib.mMe != null?flash.Lib.mMe.__scr:js.Browser.document.getElementById("haxe:openfl");
	return tgt != null && tgt.clientHeight > 0?tgt.clientHeight:500;
}
flash.Lib.__getStage = function() {
	if(flash.Lib.mStage == null) {
		var width = flash.Lib.__getWidth();
		var height = flash.Lib.__getHeight();
		flash.Lib.mStage = new flash.display.Stage(width,height);
	}
	return flash.Lib.mStage;
}
flash.Lib.__getWidth = function() {
	var tgt = flash.Lib.mMe != null?flash.Lib.mMe.__scr:js.Browser.document.getElementById("haxe:openfl");
	return tgt != null && tgt.clientWidth > 0?tgt.clientWidth:500;
}
flash.Lib.realStageWidth = function() {
	return eval("window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;");
}
flash.Lib.realStageHeight = function() {
	return eval("window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;");
}
flash.Lib.__isOnStage = function(surface) {
	var p = surface;
	while(p != null && p != flash.Lib.mMe.__scr) p = p.parentNode;
	return p == flash.Lib.mMe.__scr;
}
flash.Lib.__parseColor = function(str,cb) {
	var re = new EReg("rgb\\(([0-9]*), ?([0-9]*), ?([0-9]*)\\)","");
	var hex = new EReg("#([0-9a-zA-Z][0-9a-zA-Z])([0-9a-zA-Z][0-9a-zA-Z])([0-9a-zA-Z][0-9a-zA-Z])","");
	if(re.match(str)) {
		var col = 0;
		var _g = 1;
		while(_g < 4) {
			var pos = _g++;
			var v = Std.parseInt(re.matched(pos));
			col = cb(col,pos - 1,v);
		}
		return col;
	} else if(hex.match(str)) {
		var col = 0;
		var _g = 1;
		while(_g < 4) {
			var pos = _g++;
			var v = "0x" + hex.matched(pos) & 255;
			v = cb(col,pos - 1,v);
		}
		return col;
	} else throw "Cannot parse color '" + str + "'.";
}
flash.Lib.__removeSurface = function(surface) {
	if(flash.Lib.mMe.__scr != null) {
		var anim = surface.getAttribute("data-openfl-anim");
		if(anim != null) {
			var style = js.Browser.document.getElementById(anim);
			if(style != null) flash.Lib.mMe.__scr.removeChild(style);
		}
		if(surface.parentNode != null) surface.parentNode.removeChild(surface);
	}
	return surface;
}
flash.Lib.__setSurfaceBorder = function(surface,color,size) {
	surface.style.setProperty("border-color","#" + StringTools.hex(color),"");
	surface.style.setProperty("border-style","solid","");
	surface.style.setProperty("border-width",size + "px","");
	surface.style.setProperty("border-collapse","collapse","");
}
flash.Lib.__setSurfaceClipping = function(surface,rect) {
}
flash.Lib.__setSurfaceFont = function(surface,font,bold,size,color,align,lineHeight) {
	surface.style.setProperty("font-family",font,"");
	surface.style.setProperty("font-weight",Std.string(bold),"");
	surface.style.setProperty("color","#" + StringTools.hex(color),"");
	surface.style.setProperty("font-size",size + "px","");
	surface.style.setProperty("text-align",align,"");
	surface.style.setProperty("line-height",lineHeight + "px","");
}
flash.Lib.__setSurfaceOpacity = function(surface,alpha) {
	surface.style.setProperty("opacity",Std.string(alpha),"");
}
flash.Lib.__setSurfacePadding = function(surface,padding,margin,display) {
	surface.style.setProperty("padding",padding + "px","");
	surface.style.setProperty("margin",margin + "px","");
	surface.style.setProperty("top",padding + 2 + "px","");
	surface.style.setProperty("right",padding + 1 + "px","");
	surface.style.setProperty("left",padding + 1 + "px","");
	surface.style.setProperty("bottom",padding + 1 + "px","");
	surface.style.setProperty("display",display?"inline":"block","");
}
flash.Lib.__setSurfaceTransform = function(surface,matrix) {
	if(matrix.a == 1 && matrix.b == 0 && matrix.c == 0 && matrix.d == 1 && surface.getAttribute("data-openfl-anim") == null) {
		surface.style.left = matrix.tx + "px";
		surface.style.top = matrix.ty + "px";
		surface.style.setProperty("transform","","");
		surface.style.setProperty("-moz-transform","","");
		surface.style.setProperty("-webkit-transform","","");
		surface.style.setProperty("-o-transform","","");
		surface.style.setProperty("-ms-transform","","");
	} else {
		surface.style.left = "0px";
		surface.style.top = "0px";
		surface.style.setProperty("transform","matrix(" + matrix.a + ", " + matrix.b + ", " + matrix.c + ", " + matrix.d + ", " + matrix.tx + ", " + matrix.ty + ")","");
		surface.style.setProperty("-moz-transform","matrix(" + matrix.a + ", " + matrix.b + ", " + matrix.c + ", " + matrix.d + ", " + matrix.tx + "px, " + matrix.ty + "px)","");
		if(!flash.Lib.mForce2DTransform) surface.style.setProperty("-webkit-transform","matrix3d(" + matrix.a + ", " + matrix.b + ", " + "0, 0, " + matrix.c + ", " + matrix.d + ", " + "0, 0, 0, 0, 1, 0, " + matrix.tx + ", " + matrix.ty + ", " + "0, 1" + ")",""); else surface.style.setProperty("-webkit-transform","matrix(" + matrix.a + ", " + matrix.b + ", " + matrix.c + ", " + matrix.d + ", " + matrix.tx + ", " + matrix.ty + ")","");
		surface.style.setProperty("-o-transform","matrix(" + matrix.a + ", " + matrix.b + ", " + matrix.c + ", " + matrix.d + ", " + matrix.tx + ", " + matrix.ty + ")","");
		surface.style.setProperty("-ms-transform","matrix(" + matrix.a + ", " + matrix.b + ", " + matrix.c + ", " + matrix.d + ", " + matrix.tx + ", " + matrix.ty + ")","");
	}
}
flash.Lib.__setSurfaceZIndexAfter = function(surface1,surface2) {
	if(surface1 != null && surface2 != null) {
		if(surface1.parentNode != surface2.parentNode && surface2.parentNode != null) surface2.parentNode.appendChild(surface1);
		if(surface2.parentNode != null) {
			var nextSibling = surface2.nextSibling;
			if(surface1.previousSibling != surface2) {
				var swap = flash.Lib.__removeSurface(surface1);
				if(nextSibling == null) surface2.parentNode.appendChild(swap); else surface2.parentNode.insertBefore(swap,nextSibling);
			}
		}
	}
}
flash.Lib.__swapSurface = function(surface1,surface2) {
	var parent1 = surface1.parentNode;
	var parent2 = surface2.parentNode;
	if(parent1 != null && parent2 != null) {
		if(parent1 == parent2) {
			var next1 = surface1.nextSibling;
			var next2 = surface2.nextSibling;
			if(next1 == surface2) parent1.insertBefore(surface2,surface1); else if(next2 == surface1) parent1.insertBefore(surface1,surface2); else {
				parent1.replaceChild(surface2,surface1);
				if(next2 != null) parent1.insertBefore(surface1,next2); else parent1.appendChild(surface1);
			}
		} else {
			var next2 = surface2.nextSibling;
			parent1.replaceChild(surface2,surface1);
			if(next2 != null) parent2.insertBefore(surface1,next2); else parent2.appendChild(surface1);
		}
	}
}
flash.Lib.__setContentEditable = function(surface,contentEditable) {
	if(contentEditable == null) contentEditable = true;
	surface.setAttribute("contentEditable",contentEditable?"true":"false");
}
flash.Lib.__setCursor = function(type) {
	if(flash.Lib.mMe != null) flash.Lib.mMe.__scr.style.cursor = (function($this) {
		var $r;
		switch( (type)[1] ) {
		case 0:
			$r = "pointer";
			break;
		case 1:
			$r = "text";
			break;
		default:
			$r = "default";
		}
		return $r;
	}(this));
}
flash.Lib.__setImageSmoothing = function(context,enabled) {
	var _g = 0, _g1 = ["imageSmoothingEnabled","mozImageSmoothingEnabled","webkitImageSmoothingEnabled"];
	while(_g < _g1.length) {
		var variant = _g1[_g];
		++_g;
		context[variant] = enabled;
	}
}
flash.Lib.__setSurfaceAlign = function(surface,align) {
	surface.style.setProperty("text-align",align,"");
}
flash.Lib.__setSurfaceId = function(surface,name) {
	var regex = new EReg("[^a-zA-Z0-9\\-]","g");
	surface.id = regex.replace(name,"_");
}
flash.Lib.__setSurfaceRotation = function(surface,rotate) {
	surface.style.setProperty("transform","rotate(" + rotate + "deg)","");
	surface.style.setProperty("-moz-transform","rotate(" + rotate + "deg)","");
	surface.style.setProperty("-webkit-transform","rotate(" + rotate + "deg)","");
	surface.style.setProperty("-o-transform","rotate(" + rotate + "deg)","");
	surface.style.setProperty("-ms-transform","rotate(" + rotate + "deg)","");
}
flash.Lib.__setSurfaceScale = function(surface,scale) {
	surface.style.setProperty("transform","scale(" + scale + ")","");
	surface.style.setProperty("-moz-transform","scale(" + scale + ")","");
	surface.style.setProperty("-webkit-transform","scale(" + scale + ")","");
	surface.style.setProperty("-o-transform","scale(" + scale + ")","");
	surface.style.setProperty("-ms-transform","scale(" + scale + ")","");
}
flash.Lib.__setSurfaceSpritesheetAnimation = function(surface,spec,fps) {
	if(spec.length == 0) return surface;
	var div = js.Browser.document.createElement("div");
	div.style.backgroundImage = "url(" + surface.toDataURL("image/png") + ")";
	div.id = surface.id;
	var keyframeTpl = new haxe.Template("background-position: ::left::px ::top::px; width: ::width::px; height: ::height::px; ");
	var templateFunc = function(frame) {
		return { left : -frame.x, top : -frame.y, width : frame.width, height : frame.height};
	};
	flash.Lib.__createSurfaceAnimationCSS(div,spec,keyframeTpl,templateFunc,fps,true,true);
	if(flash.Lib.__isOnStage(surface)) {
		flash.Lib.__appendSurface(div);
		flash.Lib.__copyStyle(surface,div);
		flash.Lib.__swapSurface(surface,div);
		flash.Lib.__removeSurface(surface);
	} else flash.Lib.__copyStyle(surface,div);
	return div;
}
flash.Lib.__setSurfaceVisible = function(surface,visible) {
	if(visible) surface.style.setProperty("display","block",""); else surface.style.setProperty("display","none","");
}
flash.Lib.__setTextDimensions = function(surface,width,height,align) {
	surface.style.setProperty("width",width + "px","");
	surface.style.setProperty("height",height + "px","");
	surface.style.setProperty("overflow","visible","");
	surface.style.setProperty("text-align",align,"");
}
flash.Lib.__surfaceHitTest = function(surface,x,y) {
	var _g1 = 0, _g = surface.childNodes.length;
	while(_g1 < _g) {
		var i = _g1++;
		var node = surface.childNodes[i];
		if(x >= node.offsetLeft && x <= node.offsetLeft + node.offsetWidth && y >= node.offsetTop && y <= node.offsetTop + node.offsetHeight) return true;
	}
	return false;
}
flash.Lib.get_current = function() {
	if(flash.Lib.mMainClassRoot == null) {
		flash.Lib.mMainClassRoot = new flash.display.MovieClip();
		flash.Lib.mCurrent = flash.Lib.mMainClassRoot;
		flash.Lib.__getStage().addChild(flash.Lib.mCurrent);
	}
	return flash.Lib.mMainClassRoot;
}
flash.Lib.prototype = {
	__scr: null
	,mKilled: null
	,mArgs: null
	,__class__: flash.Lib
}
flash._Lib = {}
flash._Lib.CursorType = $hxClasses["flash._Lib.CursorType"] = { __ename__ : true, __constructs__ : ["Pointer","Text","Default"] }
flash._Lib.CursorType.Pointer = ["Pointer",0];
flash._Lib.CursorType.Pointer.toString = $estr;
flash._Lib.CursorType.Pointer.__enum__ = flash._Lib.CursorType;
flash._Lib.CursorType.Text = ["Text",1];
flash._Lib.CursorType.Text.toString = $estr;
flash._Lib.CursorType.Text.__enum__ = flash._Lib.CursorType;
flash._Lib.CursorType.Default = ["Default",2];
flash._Lib.CursorType.Default.toString = $estr;
flash._Lib.CursorType.Default.__enum__ = flash._Lib.CursorType;
flash._Vector = {}
flash._Vector.Vector_Impl_ = function() { }
$hxClasses["flash._Vector.Vector_Impl_"] = flash._Vector.Vector_Impl_;
flash._Vector.Vector_Impl_.__name__ = ["flash","_Vector","Vector_Impl_"];
flash._Vector.Vector_Impl_.__properties__ = {set_fixed:"set_fixed",get_fixed:"get_fixed",set_length:"set_length",get_length:"get_length"}
flash._Vector.Vector_Impl_._new = function(length,fixed) {
	return new Array();
}
flash._Vector.Vector_Impl_.concat = function(this1,a) {
	return this1.concat(a);
}
flash._Vector.Vector_Impl_.copy = function(this1) {
	return this1.slice();
}
flash._Vector.Vector_Impl_.iterator = function(this1) {
	return HxOverrides.iter(this1);
}
flash._Vector.Vector_Impl_.join = function(this1,sep) {
	return this1.join(sep);
}
flash._Vector.Vector_Impl_.pop = function(this1) {
	return this1.pop();
}
flash._Vector.Vector_Impl_.push = function(this1,x) {
	return this1.push(x);
}
flash._Vector.Vector_Impl_.reverse = function(this1) {
	this1.reverse();
}
flash._Vector.Vector_Impl_.shift = function(this1) {
	return this1.shift();
}
flash._Vector.Vector_Impl_.unshift = function(this1,x) {
	this1.unshift(x);
}
flash._Vector.Vector_Impl_.slice = function(this1,pos,end) {
	return this1.slice(pos,end);
}
flash._Vector.Vector_Impl_.sort = function(this1,f) {
	this1.sort(f);
}
flash._Vector.Vector_Impl_.splice = function(this1,pos,len) {
	return this1.splice(pos,len);
}
flash._Vector.Vector_Impl_.toString = function(this1) {
	return this1.toString();
}
flash._Vector.Vector_Impl_.indexOf = function(this1,x,from) {
	if(from == null) from = 0;
	var _g1 = from, _g = this1.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(this1[i] == x) return i;
	}
	return -1;
}
flash._Vector.Vector_Impl_.lastIndexOf = function(this1,x,from) {
	if(from == null) from = 0;
	var i = this1.length - 1;
	while(i >= from) {
		if(this1[i] == x) return i;
		i--;
	}
	return -1;
}
flash._Vector.Vector_Impl_.ofArray = function(a) {
	return flash._Vector.Vector_Impl_.concat(flash._Vector.Vector_Impl_._new(),a);
}
flash._Vector.Vector_Impl_.convert = function(v) {
	return v;
}
flash._Vector.Vector_Impl_.fromArray = function(a) {
	return a;
}
flash._Vector.Vector_Impl_.toArray = function(this1) {
	return this1;
}
flash._Vector.Vector_Impl_.get_length = function(this1) {
	return this1.length;
}
flash._Vector.Vector_Impl_.set_length = function(this1,value) {
	if(value < this1.length) this1 = this1.slice(0,value);
	while(value > this1.length) this1.push(null);
	return value;
}
flash._Vector.Vector_Impl_.get_fixed = function(this1) {
	return false;
}
flash._Vector.Vector_Impl_.set_fixed = function(this1,value) {
	return value;
}
flash.accessibility = {}
flash.accessibility.AccessibilityProperties = function() {
	this.description = "";
	this.forceSimple = false;
	this.name = "";
	this.noAutoLabeling = false;
	this.shortcut = "";
	this.silent = false;
};
$hxClasses["flash.accessibility.AccessibilityProperties"] = flash.accessibility.AccessibilityProperties;
flash.accessibility.AccessibilityProperties.__name__ = ["flash","accessibility","AccessibilityProperties"];
flash.accessibility.AccessibilityProperties.prototype = {
	silent: null
	,shortcut: null
	,noAutoLabeling: null
	,name: null
	,forceSimple: null
	,description: null
	,__class__: flash.accessibility.AccessibilityProperties
}
flash.display.Bitmap = function(inBitmapData,inPixelSnapping,inSmoothing) {
	if(inSmoothing == null) inSmoothing = false;
	flash.display.DisplayObject.call(this);
	this.pixelSnapping = inPixelSnapping;
	this.smoothing = inSmoothing;
	if(inBitmapData != null) {
		this.set_bitmapData(inBitmapData);
		if(this.bitmapData.__referenceCount == 1) this.__graphics = new flash.display.Graphics(this.bitmapData.___textureBuffer);
	}
	if(this.pixelSnapping == null) this.pixelSnapping = flash.display.PixelSnapping.AUTO;
	if(this.__graphics == null) this.__graphics = new flash.display.Graphics();
	if(this.bitmapData != null) this.__render();
};
$hxClasses["flash.display.Bitmap"] = flash.display.Bitmap;
flash.display.Bitmap.__name__ = ["flash","display","Bitmap"];
flash.display.Bitmap.__super__ = flash.display.DisplayObject;
flash.display.Bitmap.prototype = $extend(flash.display.DisplayObject.prototype,{
	set_bitmapData: function(inBitmapData) {
		if(inBitmapData != this.bitmapData) {
			if(this.bitmapData != null) {
				this.bitmapData.__referenceCount--;
				if(this.__graphics.__surface == this.bitmapData.___textureBuffer) flash.Lib.__setSurfaceOpacity(this.bitmapData.___textureBuffer,0);
			}
			if(inBitmapData != null) inBitmapData.__referenceCount++;
		}
		this.___renderFlags |= 64;
		if(this.parent != null) this.parent.___renderFlags |= 64;
		this.bitmapData = inBitmapData;
		return inBitmapData;
	}
	,__render: function(inMask,clipRect) {
		if(!this.__combinedVisible) return;
		if(this.bitmapData == null) return;
		if((this.___renderFlags & 4) != 0 || (this.___renderFlags & 8) != 0) this.__validateMatrix();
		if(this.bitmapData.___textureBuffer != this.__graphics.__surface) {
			var imageDataLease = this.bitmapData.__lease;
			if(imageDataLease != null && (this.__currentLease == null || imageDataLease.seed != this.__currentLease.seed || imageDataLease.time != this.__currentLease.time)) {
				var srcCanvas = this.bitmapData.___textureBuffer;
				this.__graphics.__surface.width = srcCanvas.width;
				this.__graphics.__surface.height = srcCanvas.height;
				this.__graphics.clear();
				flash.Lib.__drawToSurface(srcCanvas,this.__graphics.__surface);
				this.__currentLease = imageDataLease.clone();
				this.___renderFlags |= 64;
				if(this.parent != null) this.parent.___renderFlags |= 64;
				this.__applyFilters(this.__graphics.__surface);
				this.___renderFlags |= 32;
			}
		}
		if(inMask != null) {
			this.__applyFilters(this.__graphics.__surface);
			var m = this.getBitmapSurfaceTransform(this.__graphics);
			flash.Lib.__drawToSurface(this.__graphics.__surface,inMask,m,(this.parent != null?this.parent.__combinedAlpha:1) * this.alpha,clipRect,this.smoothing);
		} else {
			if((this.___renderFlags & 32) != 0) {
				var m = this.getBitmapSurfaceTransform(this.__graphics);
				flash.Lib.__setSurfaceTransform(this.__graphics.__surface,m);
				this.___renderFlags &= -33;
			}
			if(!this.__init) {
				flash.Lib.__setSurfaceOpacity(this.__graphics.__surface,0);
				this.__init = true;
			} else flash.Lib.__setSurfaceOpacity(this.__graphics.__surface,(this.parent != null?this.parent.__combinedAlpha:1) * this.alpha);
		}
	}
	,__getObjectUnderPoint: function(point) {
		if(!this.get_visible()) return null; else if(this.bitmapData != null) {
			var local = this.globalToLocal(point);
			if(local.x < 0 || local.y < 0 || local.x > this.get_width() / this.get_scaleX() || local.y > this.get_height() / this.get_scaleY()) return null; else return this;
		} else return flash.display.DisplayObject.prototype.__getObjectUnderPoint.call(this,point);
	}
	,__getGraphics: function() {
		return this.__graphics;
	}
	,validateBounds: function() {
		if(this.get__boundsInvalid()) {
			flash.display.DisplayObject.prototype.validateBounds.call(this);
			if(this.bitmapData != null) {
				var r = new flash.geom.Rectangle(0,0,this.bitmapData.get_width(),this.bitmapData.get_height());
				if(r.width != 0 || r.height != 0) {
					if(this.__boundsRect.width == 0 && this.__boundsRect.height == 0) this.__boundsRect = r.clone(); else this.__boundsRect.extendBounds(r);
				}
			}
			if(this.scale9Grid != null) {
				this.__boundsRect.width *= this.__scaleX;
				this.__boundsRect.height *= this.__scaleY;
				this.__width = this.__boundsRect.width;
				this.__height = this.__boundsRect.height;
			} else {
				this.__width = this.__boundsRect.width * this.__scaleX;
				this.__height = this.__boundsRect.height * this.__scaleY;
			}
		}
	}
	,toString: function() {
		return "[Bitmap name=" + this.name + " id=" + this.___id + "]";
	}
	,getBitmapSurfaceTransform: function(gfx) {
		var extent = gfx.__extentWithFilters;
		var fm = this.transform.__getFullMatrix(null);
		fm.__translateTransformed(extent.get_topLeft());
		return fm;
	}
	,__init: null
	,__currentLease: null
	,__graphics: null
	,smoothing: null
	,pixelSnapping: null
	,bitmapData: null
	,__class__: flash.display.Bitmap
	,__properties__: $extend(flash.display.DisplayObject.prototype.__properties__,{set_bitmapData:"set_bitmapData"})
});
flash.display.ImageDataLease = function() {
};
$hxClasses["flash.display.ImageDataLease"] = flash.display.ImageDataLease;
flash.display.ImageDataLease.__name__ = ["flash","display","ImageDataLease"];
flash.display.ImageDataLease.prototype = {
	set: function(s,t) {
		this.seed = s;
		this.time = t;
	}
	,clone: function() {
		var leaseClone = new flash.display.ImageDataLease();
		leaseClone.seed = this.seed;
		leaseClone.time = this.time;
		return leaseClone;
	}
	,time: null
	,seed: null
	,__class__: flash.display.ImageDataLease
}
flash.display._BitmapData = {}
flash.display._BitmapData.MinstdGenerator = function(seed) {
	if(seed == 0) this.value = 1; else this.value = seed;
};
$hxClasses["flash.display._BitmapData.MinstdGenerator"] = flash.display._BitmapData.MinstdGenerator;
flash.display._BitmapData.MinstdGenerator.__name__ = ["flash","display","_BitmapData","MinstdGenerator"];
flash.display._BitmapData.MinstdGenerator.prototype = {
	nextValue: function() {
		var lo = 16807 * (this.value & 65535);
		var hi = 16807 * (this.value >>> 16);
		lo += (hi & 32767) << 16;
		if(lo < 0 || lo > -2147483648 - 1) {
			lo &= -2147483648 - 1;
			++lo;
		}
		lo += hi >>> 15;
		if(lo < 0 || lo > -2147483648 - 1) {
			lo &= -2147483648 - 1;
			++lo;
		}
		return this.value = lo;
	}
	,value: null
	,__class__: flash.display._BitmapData.MinstdGenerator
}
flash.display.BitmapDataChannel = function() { }
$hxClasses["flash.display.BitmapDataChannel"] = flash.display.BitmapDataChannel;
flash.display.BitmapDataChannel.__name__ = ["flash","display","BitmapDataChannel"];
flash.display.BlendMode = $hxClasses["flash.display.BlendMode"] = { __ename__ : true, __constructs__ : ["ADD","ALPHA","DARKEN","DIFFERENCE","ERASE","HARDLIGHT","INVERT","LAYER","LIGHTEN","MULTIPLY","NORMAL","OVERLAY","SCREEN","SUBTRACT"] }
flash.display.BlendMode.ADD = ["ADD",0];
flash.display.BlendMode.ADD.toString = $estr;
flash.display.BlendMode.ADD.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.ALPHA = ["ALPHA",1];
flash.display.BlendMode.ALPHA.toString = $estr;
flash.display.BlendMode.ALPHA.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.DARKEN = ["DARKEN",2];
flash.display.BlendMode.DARKEN.toString = $estr;
flash.display.BlendMode.DARKEN.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.DIFFERENCE = ["DIFFERENCE",3];
flash.display.BlendMode.DIFFERENCE.toString = $estr;
flash.display.BlendMode.DIFFERENCE.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.ERASE = ["ERASE",4];
flash.display.BlendMode.ERASE.toString = $estr;
flash.display.BlendMode.ERASE.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.HARDLIGHT = ["HARDLIGHT",5];
flash.display.BlendMode.HARDLIGHT.toString = $estr;
flash.display.BlendMode.HARDLIGHT.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.INVERT = ["INVERT",6];
flash.display.BlendMode.INVERT.toString = $estr;
flash.display.BlendMode.INVERT.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.LAYER = ["LAYER",7];
flash.display.BlendMode.LAYER.toString = $estr;
flash.display.BlendMode.LAYER.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.LIGHTEN = ["LIGHTEN",8];
flash.display.BlendMode.LIGHTEN.toString = $estr;
flash.display.BlendMode.LIGHTEN.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.MULTIPLY = ["MULTIPLY",9];
flash.display.BlendMode.MULTIPLY.toString = $estr;
flash.display.BlendMode.MULTIPLY.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.NORMAL = ["NORMAL",10];
flash.display.BlendMode.NORMAL.toString = $estr;
flash.display.BlendMode.NORMAL.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.OVERLAY = ["OVERLAY",11];
flash.display.BlendMode.OVERLAY.toString = $estr;
flash.display.BlendMode.OVERLAY.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.SCREEN = ["SCREEN",12];
flash.display.BlendMode.SCREEN.toString = $estr;
flash.display.BlendMode.SCREEN.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.SUBTRACT = ["SUBTRACT",13];
flash.display.BlendMode.SUBTRACT.toString = $estr;
flash.display.BlendMode.SUBTRACT.__enum__ = flash.display.BlendMode;
flash.display.CapsStyle = $hxClasses["flash.display.CapsStyle"] = { __ename__ : true, __constructs__ : ["NONE","ROUND","SQUARE"] }
flash.display.CapsStyle.NONE = ["NONE",0];
flash.display.CapsStyle.NONE.toString = $estr;
flash.display.CapsStyle.NONE.__enum__ = flash.display.CapsStyle;
flash.display.CapsStyle.ROUND = ["ROUND",1];
flash.display.CapsStyle.ROUND.toString = $estr;
flash.display.CapsStyle.ROUND.__enum__ = flash.display.CapsStyle;
flash.display.CapsStyle.SQUARE = ["SQUARE",2];
flash.display.CapsStyle.SQUARE.toString = $estr;
flash.display.CapsStyle.SQUARE.__enum__ = flash.display.CapsStyle;
flash.display.GradientType = $hxClasses["flash.display.GradientType"] = { __ename__ : true, __constructs__ : ["RADIAL","LINEAR"] }
flash.display.GradientType.RADIAL = ["RADIAL",0];
flash.display.GradientType.RADIAL.toString = $estr;
flash.display.GradientType.RADIAL.__enum__ = flash.display.GradientType;
flash.display.GradientType.LINEAR = ["LINEAR",1];
flash.display.GradientType.LINEAR.toString = $estr;
flash.display.GradientType.LINEAR.__enum__ = flash.display.GradientType;
flash.display.Graphics = function(inSurface) {
	flash.Lib.__bootstrap();
	if(inSurface == null) {
		this.__surface = js.Browser.document.createElement("canvas");
		this.__surface.width = 0;
		this.__surface.height = 0;
	} else this.__surface = inSurface;
	this.mLastMoveID = 0;
	this.mPenX = 0.0;
	this.mPenY = 0.0;
	this.mDrawList = new Array();
	this.mPoints = [];
	this.mSolidGradient = null;
	this.mBitmap = null;
	this.mFilling = false;
	this.mFillColour = 0;
	this.mFillAlpha = 0.0;
	this.mLastMoveID = 0;
	this.boundsDirty = true;
	this.__clearLine();
	this.mLineJobs = [];
	this.__changed = true;
	this.nextDrawIndex = 0;
	this.__extent = new flash.geom.Rectangle();
	this.__extentWithFilters = new flash.geom.Rectangle();
	this._padding = 0.0;
	this.__clearNextCycle = true;
};
$hxClasses["flash.display.Graphics"] = flash.display.Graphics;
flash.display.Graphics.__name__ = ["flash","display","Graphics"];
flash.display.Graphics.__detectIsPointInPathMode = function() {
	var canvas = js.Browser.document.createElement("canvas");
	var ctx = canvas.getContext("2d");
	if(ctx.isPointInPath == null) return flash.display.PointInPathMode.USER_SPACE;
	ctx.save();
	ctx.translate(1,0);
	ctx.beginPath();
	ctx.rect(0,0,1,1);
	var rv = ctx.isPointInPath(0.3,0.3)?flash.display.PointInPathMode.USER_SPACE:flash.display.PointInPathMode.DEVICE_SPACE;
	ctx.restore();
	return rv;
}
flash.display.Graphics.prototype = {
	__render: function(maskHandle,filters,sx,sy,clip0,clip1,clip2,clip3) {
		if(sy == null) sy = 1.0;
		if(sx == null) sx = 1.0;
		if(!this.__changed) return false;
		this.closePolygon(true);
		var padding = this._padding;
		if(filters != null) {
			var _g = 0;
			while(_g < filters.length) {
				var filter = filters[_g];
				++_g;
				if(Reflect.hasField(filter,"blurX")) padding += Math.max(Reflect.field(filter,"blurX"),Reflect.field(filter,"blurY")) * 4;
			}
		}
		this.__expandFilteredExtent(-(padding * sx) / 2,-(padding * sy) / 2);
		if(this.__clearNextCycle) {
			this.nextDrawIndex = 0;
			this.__clearCanvas();
			this.__clearNextCycle = false;
		}
		if(this.__extentWithFilters.width - this.__extentWithFilters.x > this.__surface.width || this.__extentWithFilters.height - this.__extentWithFilters.y > this.__surface.height) this.__adjustSurface(sx,sy);
		var ctx = (function($this) {
			var $r;
			try {
				$r = $this.__surface.getContext("2d");
			} catch( e ) {
				$r = null;
			}
			return $r;
		}(this));
		if(ctx == null) return false;
		if(clip0 != null) {
			ctx.beginPath();
			ctx.moveTo(clip0.x * sx,clip0.y * sy);
			ctx.lineTo(clip1.x * sx,clip1.y * sy);
			ctx.lineTo(clip2.x * sx,clip2.y * sy);
			ctx.lineTo(clip3.x * sx,clip3.y * sy);
			ctx.closePath();
			ctx.clip();
		}
		if(filters != null) {
			var _g = 0;
			while(_g < filters.length) {
				var filter = filters[_g];
				++_g;
				if(js.Boot.__instanceof(filter,flash.filters.DropShadowFilter)) filter.__applyFilter(this.__surface,null,true);
			}
		}
		var len = this.mDrawList.length;
		ctx.save();
		if(this.__extentWithFilters.x != 0 || this.__extentWithFilters.y != 0) ctx.translate(-this.__extentWithFilters.x * sx,-this.__extentWithFilters.y * sy);
		if(sx != 1 || sy != 0) ctx.scale(sx,sy);
		var doStroke = false;
		var _g = this.nextDrawIndex;
		while(_g < len) {
			var i = _g++;
			var d = this.mDrawList[len - 1 - i];
			if(d.tileJob != null) this.__drawTiles(d.tileJob.sheet,d.tileJob.drawList,d.tileJob.flags); else {
				if(d.lineJobs.length > 0) {
					var _g1 = 0, _g2 = d.lineJobs;
					while(_g1 < _g2.length) {
						var lj = _g2[_g1];
						++_g1;
						ctx.lineWidth = lj.thickness;
						switch(lj.joints) {
						case 0:
							ctx.lineJoin = "round";
							break;
						case 4096:
							ctx.lineJoin = "miter";
							break;
						case 8192:
							ctx.lineJoin = "bevel";
							break;
						}
						switch(lj.caps) {
						case 256:
							ctx.lineCap = "round";
							break;
						case 512:
							ctx.lineCap = "square";
							break;
						case 0:
							ctx.lineCap = "butt";
							break;
						}
						ctx.miterLimit = lj.miter_limit;
						if(lj.grad != null) ctx.strokeStyle = this.createCanvasGradient(ctx,lj.grad); else ctx.strokeStyle = this.createCanvasColor(lj.colour,lj.alpha);
						ctx.beginPath();
						var _g4 = lj.point_idx0, _g3 = lj.point_idx1 + 1;
						while(_g4 < _g3) {
							var i1 = _g4++;
							var p = d.points[i1];
							switch(p.type) {
							case 0:
								ctx.moveTo(p.x,p.y);
								break;
							case 2:
								ctx.quadraticCurveTo(p.cx,p.cy,p.x,p.y);
								break;
							default:
								ctx.lineTo(p.x,p.y);
							}
						}
						ctx.closePath();
						doStroke = true;
					}
				} else {
					ctx.beginPath();
					var _g1 = 0, _g2 = d.points;
					while(_g1 < _g2.length) {
						var p = _g2[_g1];
						++_g1;
						switch(p.type) {
						case 0:
							ctx.moveTo(p.x,p.y);
							break;
						case 2:
							ctx.quadraticCurveTo(p.cx,p.cy,p.x,p.y);
							break;
						default:
							ctx.lineTo(p.x,p.y);
						}
					}
					ctx.closePath();
				}
				var fillColour = d.fillColour;
				var fillAlpha = d.fillAlpha;
				var g = d.solidGradient;
				var bitmap = d.bitmap;
				if(g != null) ctx.fillStyle = this.createCanvasGradient(ctx,g); else if(bitmap != null && (bitmap.flags & 16) > 0) {
					var m = bitmap.matrix;
					if(m != null) ctx.transform(m.a,m.b,m.c,m.d,m.tx,m.ty);
					if((bitmap.flags & 65536) == 0) {
						ctx.mozImageSmoothingEnabled = false;
						ctx.webkitImageSmoothingEnabled = false;
					}
					ctx.fillStyle = ctx.createPattern(bitmap.texture_buffer,"repeat");
				} else ctx.fillStyle = this.createCanvasColor(fillColour,Math.min(1.0,Math.max(0.0,fillAlpha)));
				ctx.fill();
				if(doStroke) ctx.stroke();
				ctx.save();
				if(bitmap != null && (bitmap.flags & 16) == 0) {
					ctx.clip();
					var img = bitmap.texture_buffer;
					var m = bitmap.matrix;
					if(m != null) ctx.transform(m.a,m.b,m.c,m.d,m.tx,m.ty);
					ctx.drawImage(img,0,0);
				}
				ctx.restore();
			}
		}
		ctx.restore();
		this.__changed = false;
		this.nextDrawIndex = len > 0?len - 1:0;
		this.mDrawList = [];
		return true;
	}
	,__mediaSurface: function(surface) {
		this.__surface = surface;
	}
	,__invalidate: function() {
		this.__changed = true;
		this.__clearNextCycle = true;
	}
	,__hitTest: function(inX,inY) {
		var ctx = (function($this) {
			var $r;
			try {
				$r = $this.__surface.getContext("2d");
			} catch( e ) {
				$r = null;
			}
			return $r;
		}(this));
		if(ctx == null) return false;
		if(ctx.isPointInPath(inX,inY)) return true; else if(this.mDrawList.length == 0 && this.__extent.width > 0 && this.__extent.height > 0) return true;
		return false;
	}
	,__expandStandardExtent: function(x,y,thickness) {
		if(thickness == null) thickness = 0;
		if(this._padding > 0) {
			this.__extent.width -= this._padding;
			this.__extent.height -= this._padding;
		}
		if(thickness != null && thickness > this._padding) this._padding = thickness;
		var maxX, minX, maxY, minY;
		minX = this.__extent.x;
		minY = this.__extent.y;
		maxX = this.__extent.width + minX;
		maxY = this.__extent.height + minY;
		maxX = x > maxX?x:maxX;
		minX = x < minX?x:minX;
		maxY = y > maxY?y:maxY;
		minY = y < minY?y:minY;
		this.__extent.x = minX;
		this.__extent.y = minY;
		this.__extent.width = maxX - minX + this._padding;
		this.__extent.height = maxY - minY + this._padding;
		this.boundsDirty = true;
	}
	,__expandFilteredExtent: function(x,y) {
		var maxX, minX, maxY, minY;
		minX = this.__extent.x;
		minY = this.__extent.y;
		maxX = this.__extent.width + minX;
		maxY = this.__extent.height + minY;
		maxX = x > maxX?x:maxX;
		minX = x < minX?x:minX;
		maxY = y > maxY?y:maxY;
		minY = y < minY?y:minY;
		this.__extentWithFilters.x = minX;
		this.__extentWithFilters.y = minY;
		this.__extentWithFilters.width = maxX - minX;
		this.__extentWithFilters.height = maxY - minY;
	}
	,__drawTiles: function(sheet,tileData,flags) {
		if(flags == null) flags = 0;
		var useScale = (flags & 1) > 0;
		var useRotation = (flags & 2) > 0;
		var useTransform = (flags & 16) > 0;
		var useRGB = (flags & 4) > 0;
		var useAlpha = (flags & 8) > 0;
		if(useTransform) {
			useScale = false;
			useRotation = false;
		}
		var scaleIndex = 0;
		var rotationIndex = 0;
		var rgbIndex = 0;
		var alphaIndex = 0;
		var transformIndex = 0;
		var numValues = 3;
		if(useScale) {
			scaleIndex = numValues;
			numValues++;
		}
		if(useRotation) {
			rotationIndex = numValues;
			numValues++;
		}
		if(useTransform) {
			transformIndex = numValues;
			numValues += 4;
		}
		if(useRGB) {
			rgbIndex = numValues;
			numValues += 3;
		}
		if(useAlpha) {
			alphaIndex = numValues;
			numValues++;
		}
		var totalCount = tileData.length;
		var itemCount = totalCount / numValues | 0;
		var index = 0;
		var rect = null;
		var center = null;
		var previousTileID = -1;
		var surface = sheet.__bitmap.___textureBuffer;
		var ctx = (function($this) {
			var $r;
			try {
				$r = $this.__surface.getContext("2d");
			} catch( e ) {
				$r = null;
			}
			return $r;
		}(this));
		if(ctx != null) while(index < totalCount) {
			var tileID = tileData[index + 2] | 0;
			if(tileID != previousTileID) {
				rect = sheet.__tileRects[tileID];
				center = sheet.__centerPoints[tileID];
				previousTileID = tileID;
			}
			if(rect != null && center != null) {
				ctx.save();
				ctx.translate(tileData[index],tileData[index + 1]);
				if(useRotation) ctx.rotate(tileData[index + rotationIndex]);
				var scale = 1.0;
				if(useScale) scale = tileData[index + scaleIndex];
				if(useTransform) ctx.transform(tileData[index + transformIndex],tileData[index + transformIndex + 1],tileData[index + transformIndex + 2],tileData[index + transformIndex + 3],0,0);
				if(useAlpha) ctx.globalAlpha = tileData[index + alphaIndex];
				ctx.drawImage(surface,rect.x,rect.y,rect.width,rect.height,-center.x * scale,-center.y * scale,rect.width * scale,rect.height * scale);
				ctx.restore();
			}
			index += numValues;
		}
	}
	,__drawEllipse: function(x,y,rx,ry) {
		this.moveTo(x + rx,y);
		this.curveTo(rx + x,-0.4142 * ry + y,0.7071 * rx + x,-0.7071 * ry + y);
		this.curveTo(0.4142 * rx + x,-ry + y,x,-ry + y);
		this.curveTo(-0.4142 * rx + x,-ry + y,-0.7071 * rx + x,-0.7071 * ry + y);
		this.curveTo(-rx + x,-0.4142 * ry + y,-rx + x,y);
		this.curveTo(-rx + x,0.4142 * ry + y,-0.7071 * rx + x,0.7071 * ry + y);
		this.curveTo(-0.4142 * rx + x,ry + y,x,ry + y);
		this.curveTo(0.4142 * rx + x,ry + y,0.7071 * rx + x,0.7071 * ry + y);
		this.curveTo(rx + x,0.4142 * ry + y,rx + x,y);
	}
	,__clearLine: function() {
		this.mCurrentLine = new flash.display.LineJob(null,-1,-1,0.0,0.0,0,1,0,256,3,3.0);
	}
	,__clearCanvas: function() {
		if(this.__surface != null) {
			var ctx = (function($this) {
				var $r;
				try {
					$r = $this.__surface.getContext("2d");
				} catch( e ) {
					$r = null;
				}
				return $r;
			}(this));
			if(ctx != null) ctx.clearRect(0,0,this.__surface.width,this.__surface.height);
		}
	}
	,__adjustSurface: function(sx,sy) {
		if(sy == null) sy = 1.0;
		if(sx == null) sx = 1.0;
		if(Reflect.field(this.__surface,"getContext") != null) {
			var width = Math.ceil((this.__extentWithFilters.width - this.__extentWithFilters.x) * sx);
			var height = Math.ceil((this.__extentWithFilters.height - this.__extentWithFilters.y) * sy);
			if(width <= 5000 && height <= 5000) {
				var dstCanvas = js.Browser.document.createElement("canvas");
				dstCanvas.width = width;
				dstCanvas.height = height;
				flash.Lib.__drawToSurface(this.__surface,dstCanvas);
				if(flash.Lib.__isOnStage(this.__surface)) {
					flash.Lib.__appendSurface(dstCanvas);
					flash.Lib.__copyStyle(this.__surface,dstCanvas);
					flash.Lib.__swapSurface(this.__surface,dstCanvas);
					flash.Lib.__removeSurface(this.__surface);
					if(this.__surface.id != null) flash.Lib.__setSurfaceId(dstCanvas,this.__surface.id);
				}
				this.__surface = dstCanvas;
			}
		}
	}
	,moveTo: function(inX,inY) {
		this.mPenX = inX;
		this.mPenY = inY;
		this.__expandStandardExtent(inX,inY);
		if(!this.mFilling) this.closePolygon(false); else {
			this.addLineSegment();
			this.mLastMoveID = this.mPoints.length;
			this.mPoints.push(new flash.display.GfxPoint(this.mPenX,this.mPenY,0.0,0.0,0));
		}
	}
	,lineTo: function(inX,inY) {
		var pid = this.mPoints.length;
		if(pid == 0) {
			this.mPoints.push(new flash.display.GfxPoint(this.mPenX,this.mPenY,0.0,0.0,0));
			pid++;
		}
		this.mPenX = inX;
		this.mPenY = inY;
		this.__expandStandardExtent(inX,inY,this.mCurrentLine.thickness);
		this.mPoints.push(new flash.display.GfxPoint(this.mPenX,this.mPenY,0.0,0.0,1));
		if(this.mCurrentLine.grad != null || this.mCurrentLine.alpha > 0) {
			if(this.mCurrentLine.point_idx0 < 0) this.mCurrentLine.point_idx0 = pid - 1;
			this.mCurrentLine.point_idx1 = pid;
		}
		if(!this.mFilling) this.closePolygon(false);
	}
	,lineStyle: function(thickness,color,alpha,pixelHinting,scaleMode,caps,joints,miterLimit) {
		this.addLineSegment();
		if(thickness == null) {
			this.__clearLine();
			return;
		} else {
			this.mCurrentLine.grad = null;
			this.mCurrentLine.thickness = thickness;
			this.mCurrentLine.colour = color == null?0:color;
			this.mCurrentLine.alpha = alpha == null?1.0:alpha;
			this.mCurrentLine.miter_limit = miterLimit == null?3.0:miterLimit;
			this.mCurrentLine.pixel_hinting = pixelHinting == null || !pixelHinting?0:16384;
		}
		if(caps != null) {
			switch( (caps)[1] ) {
			case 1:
				this.mCurrentLine.caps = 256;
				break;
			case 2:
				this.mCurrentLine.caps = 512;
				break;
			case 0:
				this.mCurrentLine.caps = 0;
				break;
			}
		}
		this.mCurrentLine.scale_mode = 3;
		if(scaleMode != null) {
			switch( (scaleMode)[1] ) {
			case 2:
				this.mCurrentLine.scale_mode = 3;
				break;
			case 3:
				this.mCurrentLine.scale_mode = 1;
				break;
			case 0:
				this.mCurrentLine.scale_mode = 2;
				break;
			case 1:
				this.mCurrentLine.scale_mode = 0;
				break;
			}
		}
		this.mCurrentLine.joints = 0;
		if(joints != null) {
			switch( (joints)[1] ) {
			case 1:
				this.mCurrentLine.joints = 0;
				break;
			case 0:
				this.mCurrentLine.joints = 4096;
				break;
			case 2:
				this.mCurrentLine.joints = 8192;
				break;
			}
		}
	}
	,lineGradientStyle: function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) {
		this.mCurrentLine.grad = this.createGradient(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio);
	}
	,getContext: function() {
		try {
			return this.__surface.getContext("2d");
		} catch( e ) {
			return null;
		}
	}
	,flush: function() {
		this.closePolygon(true);
	}
	,endFill: function() {
		this.closePolygon(true);
	}
	,drawTiles: function(sheet,tileData,smooth,flags) {
		if(flags == null) flags = 0;
		if(smooth == null) smooth = false;
		this.__expandStandardExtent(flash.Lib.get_current().get_stage().get_stageWidth(),flash.Lib.get_current().get_stage().get_stageHeight());
		this.addDrawable(new flash.display.Drawable(null,null,null,null,null,null,new flash.display.TileJob(sheet,tileData,flags)));
		this.__changed = true;
	}
	,drawRoundRect: function(x,y,width,height,rx,ry) {
		if(ry == null) ry = -1;
		if(ry == -1) ry = rx;
		rx *= 0.5;
		ry *= 0.5;
		var w = width * 0.5;
		x += w;
		if(rx > w) rx = w;
		var lw = w - rx;
		var w_ = lw + rx * Math.sin(Math.PI / 4);
		var cw_ = lw + rx * Math.tan(Math.PI / 8);
		var h = height * 0.5;
		y += h;
		if(ry > h) ry = h;
		var lh = h - ry;
		var h_ = lh + ry * Math.sin(Math.PI / 4);
		var ch_ = lh + ry * Math.tan(Math.PI / 8);
		this.closePolygon(false);
		this.moveTo(x + w,y + lh);
		this.curveTo(x + w,y + ch_,x + w_,y + h_);
		this.curveTo(x + cw_,y + h,x + lw,y + h);
		this.lineTo(x - lw,y + h);
		this.curveTo(x - cw_,y + h,x - w_,y + h_);
		this.curveTo(x - w,y + ch_,x - w,y + lh);
		this.lineTo(x - w,y - lh);
		this.curveTo(x - w,y - ch_,x - w_,y - h_);
		this.curveTo(x - cw_,y - h,x - lw,y - h);
		this.lineTo(x + lw,y - h);
		this.curveTo(x + cw_,y - h,x + w_,y - h_);
		this.curveTo(x + w,y - ch_,x + w,y - lh);
		this.lineTo(x + w,y + lh);
		this.closePolygon(false);
	}
	,drawRect: function(x,y,width,height) {
		this.closePolygon(false);
		this.moveTo(x,y);
		this.lineTo(x + width,y);
		this.lineTo(x + width,y + height);
		this.lineTo(x,y + height);
		this.lineTo(x,y);
		this.closePolygon(false);
	}
	,drawGraphicsData: function(points) {
		var $it0 = ((function(_e) {
			return function() {
				return $iterator(flash._Vector.Vector_Impl_)(_e);
			};
		})(points))();
		while( $it0.hasNext() ) {
			var data = $it0.next();
			if(data == null) this.mFilling = true; else switch(data.__graphicsDataType) {
			case flash.display.GraphicsDataType.STROKE:
				var stroke = data;
				if(stroke.fill == null) this.lineStyle(stroke.thickness,0,1.,stroke.pixelHinting,stroke.scaleMode,stroke.caps,stroke.joints,stroke.miterLimit); else switch(stroke.fill.__graphicsFillType) {
				case flash.display.GraphicsFillType.SOLID_FILL:
					var fill = stroke.fill;
					this.lineStyle(stroke.thickness,fill.color,fill.alpha,stroke.pixelHinting,stroke.scaleMode,stroke.caps,stroke.joints,stroke.miterLimit);
					break;
				case flash.display.GraphicsFillType.GRADIENT_FILL:
					var fill = stroke.fill;
					this.lineGradientStyle(fill.type,fill.colors,fill.alphas,fill.ratios,fill.matrix,fill.spreadMethod,fill.interpolationMethod,fill.focalPointRatio);
					break;
				}
				break;
			case flash.display.GraphicsDataType.PATH:
				var path = data;
				var j = 0;
				var _g1 = 0, _g = flash._Vector.Vector_Impl_.get_length(path.commands);
				while(_g1 < _g) {
					var i = _g1++;
					var command = path.commands[i];
					switch(command) {
					case 1:
						this.moveTo(path.data[j],path.data[j + 1]);
						j = j + 2;
						break;
					case 2:
						this.lineTo(path.data[j],path.data[j + 1]);
						j = j + 2;
						break;
					case 3:
						this.curveTo(path.data[j],path.data[j + 1],path.data[j + 2],path.data[j + 3]);
						j = j + 4;
						break;
					}
				}
				break;
			case flash.display.GraphicsDataType.SOLID:
				var fill = data;
				this.beginFill(fill.color,fill.alpha);
				break;
			case flash.display.GraphicsDataType.GRADIENT:
				var fill = data;
				this.beginGradientFill(fill.type,fill.colors,fill.alphas,fill.ratios,fill.matrix,fill.spreadMethod,fill.interpolationMethod,fill.focalPointRatio);
				break;
			}
		}
	}
	,drawEllipse: function(x,y,rx,ry) {
		this.closePolygon(false);
		rx /= 2;
		ry /= 2;
		this.__drawEllipse(x + rx,y + ry,rx,ry);
		this.closePolygon(false);
	}
	,drawCircle: function(x,y,rad) {
		this.closePolygon(false);
		this.__drawEllipse(x,y,rad,rad);
		this.closePolygon(false);
	}
	,curveTo: function(inCX,inCY,inX,inY) {
		var pid = this.mPoints.length;
		if(pid == 0) {
			this.mPoints.push(new flash.display.GfxPoint(this.mPenX,this.mPenY,0.0,0.0,0));
			pid++;
		}
		this.mPenX = inX;
		this.mPenY = inY;
		this.__expandStandardExtent(inX,inY,this.mCurrentLine.thickness);
		this.mPoints.push(new flash.display.GfxPoint(inX,inY,inCX,inCY,2));
		if(this.mCurrentLine.grad != null || this.mCurrentLine.alpha > 0) {
			if(this.mCurrentLine.point_idx0 < 0) this.mCurrentLine.point_idx0 = pid - 1;
			this.mCurrentLine.point_idx1 = pid;
		}
	}
	,createGradient: function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) {
		var points = new Array();
		var _g1 = 0, _g = colors.length;
		while(_g1 < _g) {
			var i = _g1++;
			points.push(new flash.display.GradPoint(colors[i],alphas[i],ratios[i]));
		}
		var flags = 0;
		if(type == flash.display.GradientType.RADIAL) flags |= 1;
		if(spreadMethod == flash.display.SpreadMethod.REPEAT) flags |= 2; else if(spreadMethod == flash.display.SpreadMethod.REFLECT) flags |= 4;
		if(matrix == null) {
			matrix = new flash.geom.Matrix();
			matrix.createGradientBox(25,25);
		} else matrix = matrix.clone();
		var focal = focalPointRatio == null?0:focalPointRatio;
		return new flash.display.Grad(points,matrix,flags,focal);
	}
	,createCanvasGradient: function(ctx,g) {
		var gradient;
		var matrix = g.matrix;
		if((g.flags & 1) == 0) {
			var p1 = matrix.transformPoint(new flash.geom.Point(-819.2,0));
			var p2 = matrix.transformPoint(new flash.geom.Point(819.2,0));
			gradient = ctx.createLinearGradient(p1.x,p1.y,p2.x,p2.y);
		} else {
			var p1 = matrix.transformPoint(new flash.geom.Point(g.focal * 819.2,0));
			var p2 = matrix.transformPoint(new flash.geom.Point(0,819.2));
			gradient = ctx.createRadialGradient(p1.x,p1.y,0,p2.x,p1.y,p2.y);
		}
		var _g = 0, _g1 = g.points;
		while(_g < _g1.length) {
			var point = _g1[_g];
			++_g;
			var color = this.createCanvasColor(point.col,point.alpha);
			var pos = point.ratio / 255;
			gradient.addColorStop(pos,color);
		}
		return gradient;
	}
	,createCanvasColor: function(color,alpha) {
		var r = (16711680 & color) >> 16;
		var g = (65280 & color) >> 8;
		var b = 255 & color;
		return "rgba" + "(" + r + "," + g + "," + b + "," + alpha + ")";
	}
	,closePolygon: function(inCancelFill) {
		var l = this.mPoints.length;
		if(l > 0) {
			if(l > 1) {
				if(this.mFilling && l > 2) {
					if(this.mPoints[this.mLastMoveID].x != this.mPoints[l - 1].x || this.mPoints[this.mLastMoveID].y != this.mPoints[l - 1].y) this.lineTo(this.mPoints[this.mLastMoveID].x,this.mPoints[this.mLastMoveID].y);
				}
				this.addLineSegment();
				var drawable = new flash.display.Drawable(this.mPoints,this.mFillColour,this.mFillAlpha,this.mSolidGradient,this.mBitmap,this.mLineJobs,null);
				this.addDrawable(drawable);
			}
			this.mLineJobs = [];
			this.mPoints = [];
		}
		if(inCancelFill) {
			this.mFillAlpha = 0;
			this.mSolidGradient = null;
			this.mBitmap = null;
			this.mFilling = false;
		}
		this.__changed = true;
	}
	,clear: function() {
		this.__clearLine();
		this.mPenX = 0.0;
		this.mPenY = 0.0;
		this.mDrawList = new Array();
		this.nextDrawIndex = 0;
		this.mPoints = [];
		this.mSolidGradient = null;
		this.mFilling = false;
		this.mFillColour = 0;
		this.mFillAlpha = 0.0;
		this.mLastMoveID = 0;
		this.__clearNextCycle = true;
		this.boundsDirty = true;
		this.__extent.x = 0.0;
		this.__extent.y = 0.0;
		this.__extent.width = 0.0;
		this.__extent.height = 0.0;
		this._padding = 0.0;
		this.mLineJobs = [];
	}
	,blit: function(inTexture) {
		this.closePolygon(true);
		var ctx = (function($this) {
			var $r;
			try {
				$r = $this.__surface.getContext("2d");
			} catch( e ) {
				$r = null;
			}
			return $r;
		}(this));
		if(ctx != null) ctx.drawImage(inTexture.___textureBuffer,this.mPenX,this.mPenY);
	}
	,beginGradientFill: function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) {
		this.closePolygon(true);
		this.mFilling = true;
		this.mBitmap = null;
		this.mSolidGradient = this.createGradient(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio);
	}
	,beginFill: function(color,alpha) {
		this.closePolygon(true);
		this.mFillColour = color;
		this.mFillAlpha = alpha == null?1.0:alpha;
		this.mFilling = true;
		this.mSolidGradient = null;
		this.mBitmap = null;
	}
	,beginBitmapFill: function(bitmap,matrix,in_repeat,in_smooth) {
		if(in_smooth == null) in_smooth = false;
		if(in_repeat == null) in_repeat = true;
		this.closePolygon(true);
		var repeat = in_repeat == null?true:in_repeat;
		var smooth = in_smooth == null?false:in_smooth;
		this.mFilling = true;
		this.mSolidGradient = null;
		this.__expandStandardExtent(bitmap.___textureBuffer != null?bitmap.___textureBuffer.width:0,bitmap.___textureBuffer != null?bitmap.___textureBuffer.height:0);
		this.mBitmap = { texture_buffer : bitmap.___textureBuffer, matrix : matrix == null?matrix:matrix.clone(), flags : (repeat?16:0) | (smooth?65536:0)};
	}
	,addLineSegment: function() {
		if(this.mCurrentLine.point_idx1 > 0) this.mLineJobs.push(new flash.display.LineJob(this.mCurrentLine.grad,this.mCurrentLine.point_idx0,this.mCurrentLine.point_idx1,this.mCurrentLine.thickness,this.mCurrentLine.alpha,this.mCurrentLine.colour,this.mCurrentLine.pixel_hinting,this.mCurrentLine.joints,this.mCurrentLine.caps,this.mCurrentLine.scale_mode,this.mCurrentLine.miter_limit));
		this.mCurrentLine.point_idx0 = this.mCurrentLine.point_idx1 = -1;
	}
	,addDrawable: function(inDrawable) {
		if(inDrawable == null) return;
		this.mDrawList.unshift(inDrawable);
	}
	,_padding: null
	,__clearNextCycle: null
	,__changed: null
	,nextDrawIndex: null
	,mSolidGradient: null
	,mPoints: null
	,mPenY: null
	,mPenX: null
	,mLineJobs: null
	,mLineDraws: null
	,mLastMoveID: null
	,mFilling: null
	,mFillAlpha: null
	,mFillColour: null
	,mDrawList: null
	,mCurrentLine: null
	,mBitmap: null
	,__surface: null
	,__extentWithFilters: null
	,__extent: null
	,boundsDirty: null
	,__class__: flash.display.Graphics
}
flash.display.Drawable = function(inPoints,inFillColour,inFillAlpha,inSolidGradient,inBitmap,inLineJobs,inTileJob) {
	this.points = inPoints;
	this.fillColour = inFillColour;
	this.fillAlpha = inFillAlpha;
	this.solidGradient = inSolidGradient;
	this.bitmap = inBitmap;
	this.lineJobs = inLineJobs;
	this.tileJob = inTileJob;
};
$hxClasses["flash.display.Drawable"] = flash.display.Drawable;
flash.display.Drawable.__name__ = ["flash","display","Drawable"];
flash.display.Drawable.prototype = {
	tileJob: null
	,solidGradient: null
	,points: null
	,lineJobs: null
	,fillColour: null
	,fillAlpha: null
	,bitmap: null
	,__class__: flash.display.Drawable
}
flash.display.GfxPoint = function(inX,inY,inCX,inCY,inType) {
	this.x = inX;
	this.y = inY;
	this.cx = inCX;
	this.cy = inCY;
	this.type = inType;
};
$hxClasses["flash.display.GfxPoint"] = flash.display.GfxPoint;
flash.display.GfxPoint.__name__ = ["flash","display","GfxPoint"];
flash.display.GfxPoint.prototype = {
	y: null
	,x: null
	,type: null
	,cy: null
	,cx: null
	,__class__: flash.display.GfxPoint
}
flash.display.Grad = function(inPoints,inMatrix,inFlags,inFocal) {
	this.points = inPoints;
	this.matrix = inMatrix;
	this.flags = inFlags;
	this.focal = inFocal;
};
$hxClasses["flash.display.Grad"] = flash.display.Grad;
flash.display.Grad.__name__ = ["flash","display","Grad"];
flash.display.Grad.prototype = {
	points: null
	,matrix: null
	,focal: null
	,flags: null
	,__class__: flash.display.Grad
}
flash.display.GradPoint = function(inCol,inAlpha,inRatio) {
	this.col = inCol;
	this.alpha = inAlpha;
	this.ratio = inRatio;
};
$hxClasses["flash.display.GradPoint"] = flash.display.GradPoint;
flash.display.GradPoint.__name__ = ["flash","display","GradPoint"];
flash.display.GradPoint.prototype = {
	ratio: null
	,col: null
	,alpha: null
	,__class__: flash.display.GradPoint
}
flash.display.LineJob = function(inGrad,inPoint_idx0,inPoint_idx1,inThickness,inAlpha,inColour,inPixel_hinting,inJoints,inCaps,inScale_mode,inMiter_limit) {
	this.grad = inGrad;
	this.point_idx0 = inPoint_idx0;
	this.point_idx1 = inPoint_idx1;
	this.thickness = inThickness;
	this.alpha = inAlpha;
	this.colour = inColour;
	this.pixel_hinting = inPixel_hinting;
	this.joints = inJoints;
	this.caps = inCaps;
	this.scale_mode = inScale_mode;
	this.miter_limit = inMiter_limit;
};
$hxClasses["flash.display.LineJob"] = flash.display.LineJob;
flash.display.LineJob.__name__ = ["flash","display","LineJob"];
flash.display.LineJob.prototype = {
	thickness: null
	,scale_mode: null
	,point_idx1: null
	,point_idx0: null
	,pixel_hinting: null
	,miter_limit: null
	,joints: null
	,grad: null
	,colour: null
	,caps: null
	,alpha: null
	,__class__: flash.display.LineJob
}
flash.display.PointInPathMode = $hxClasses["flash.display.PointInPathMode"] = { __ename__ : true, __constructs__ : ["USER_SPACE","DEVICE_SPACE"] }
flash.display.PointInPathMode.USER_SPACE = ["USER_SPACE",0];
flash.display.PointInPathMode.USER_SPACE.toString = $estr;
flash.display.PointInPathMode.USER_SPACE.__enum__ = flash.display.PointInPathMode;
flash.display.PointInPathMode.DEVICE_SPACE = ["DEVICE_SPACE",1];
flash.display.PointInPathMode.DEVICE_SPACE.toString = $estr;
flash.display.PointInPathMode.DEVICE_SPACE.__enum__ = flash.display.PointInPathMode;
flash.display.TileJob = function(sheet,drawList,flags) {
	this.sheet = sheet;
	this.drawList = drawList;
	this.flags = flags;
};
$hxClasses["flash.display.TileJob"] = flash.display.TileJob;
flash.display.TileJob.__name__ = ["flash","display","TileJob"];
flash.display.TileJob.prototype = {
	sheet: null
	,flags: null
	,drawList: null
	,__class__: flash.display.TileJob
}
flash.display.IGraphicsFill = function() { }
$hxClasses["flash.display.IGraphicsFill"] = flash.display.IGraphicsFill;
flash.display.IGraphicsFill.__name__ = ["flash","display","IGraphicsFill"];
flash.display.IGraphicsFill.prototype = {
	__graphicsFillType: null
	,__class__: flash.display.IGraphicsFill
}
flash.display.IGraphicsData = function() { }
$hxClasses["flash.display.IGraphicsData"] = flash.display.IGraphicsData;
flash.display.IGraphicsData.__name__ = ["flash","display","IGraphicsData"];
flash.display.IGraphicsData.prototype = {
	__graphicsDataType: null
	,__class__: flash.display.IGraphicsData
}
flash.display.GraphicsGradientFill = function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) {
	if(focalPointRatio == null) focalPointRatio = 0;
	this.type = type;
	this.colors = colors;
	this.alphas = alphas;
	this.ratios = ratios;
	this.matrix = matrix;
	this.spreadMethod = spreadMethod;
	this.interpolationMethod = interpolationMethod;
	this.focalPointRatio = focalPointRatio;
	this.__graphicsDataType = flash.display.GraphicsDataType.GRADIENT;
	this.__graphicsFillType = flash.display.GraphicsFillType.GRADIENT_FILL;
};
$hxClasses["flash.display.GraphicsGradientFill"] = flash.display.GraphicsGradientFill;
flash.display.GraphicsGradientFill.__name__ = ["flash","display","GraphicsGradientFill"];
flash.display.GraphicsGradientFill.__interfaces__ = [flash.display.IGraphicsFill,flash.display.IGraphicsData];
flash.display.GraphicsGradientFill.prototype = {
	__graphicsFillType: null
	,__graphicsDataType: null
	,type: null
	,spreadMethod: null
	,ratios: null
	,matrix: null
	,interpolationMethod: null
	,focalPointRatio: null
	,colors: null
	,alphas: null
	,__class__: flash.display.GraphicsGradientFill
}
flash.display.IGraphicsPath = function() { }
$hxClasses["flash.display.IGraphicsPath"] = flash.display.IGraphicsPath;
flash.display.IGraphicsPath.__name__ = ["flash","display","IGraphicsPath"];
flash.display.GraphicsPath = function(commands,data,winding) {
	this.commands = commands;
	this.data = data;
	this.winding = winding;
	this.__graphicsDataType = flash.display.GraphicsDataType.PATH;
};
$hxClasses["flash.display.GraphicsPath"] = flash.display.GraphicsPath;
flash.display.GraphicsPath.__name__ = ["flash","display","GraphicsPath"];
flash.display.GraphicsPath.__interfaces__ = [flash.display.IGraphicsPath,flash.display.IGraphicsData];
flash.display.GraphicsPath.prototype = {
	moveTo: function(x,y) {
		if(this.commands != null && this.data != null) {
			flash._Vector.Vector_Impl_.push(this.commands,1);
			flash._Vector.Vector_Impl_.push(this.data,x);
			flash._Vector.Vector_Impl_.push(this.data,y);
		}
	}
	,lineTo: function(x,y) {
		if(this.commands != null && this.data != null) {
			flash._Vector.Vector_Impl_.push(this.commands,2);
			flash._Vector.Vector_Impl_.push(this.data,x);
			flash._Vector.Vector_Impl_.push(this.data,y);
		}
	}
	,curveTo: function(controlX,controlY,anchorX,anchorY) {
		if(this.commands != null && this.data != null) {
			flash._Vector.Vector_Impl_.push(this.commands,3);
			flash._Vector.Vector_Impl_.push(this.data,anchorX);
			flash._Vector.Vector_Impl_.push(this.data,anchorY);
			flash._Vector.Vector_Impl_.push(this.data,controlX);
			flash._Vector.Vector_Impl_.push(this.data,controlY);
		}
	}
	,__graphicsDataType: null
	,winding: null
	,data: null
	,commands: null
	,__class__: flash.display.GraphicsPath
}
flash.display.GraphicsPathCommand = function() { }
$hxClasses["flash.display.GraphicsPathCommand"] = flash.display.GraphicsPathCommand;
flash.display.GraphicsPathCommand.__name__ = ["flash","display","GraphicsPathCommand"];
flash.display.GraphicsPathWinding = $hxClasses["flash.display.GraphicsPathWinding"] = { __ename__ : true, __constructs__ : ["EVEN_ODD","NON_ZERO"] }
flash.display.GraphicsPathWinding.EVEN_ODD = ["EVEN_ODD",0];
flash.display.GraphicsPathWinding.EVEN_ODD.toString = $estr;
flash.display.GraphicsPathWinding.EVEN_ODD.__enum__ = flash.display.GraphicsPathWinding;
flash.display.GraphicsPathWinding.NON_ZERO = ["NON_ZERO",1];
flash.display.GraphicsPathWinding.NON_ZERO.toString = $estr;
flash.display.GraphicsPathWinding.NON_ZERO.__enum__ = flash.display.GraphicsPathWinding;
flash.display.GraphicsSolidFill = function(color,alpha) {
	if(alpha == null) alpha = 1;
	if(color == null) color = 0;
	this.alpha = alpha;
	this.color = color;
	this.__graphicsDataType = flash.display.GraphicsDataType.SOLID;
	this.__graphicsFillType = flash.display.GraphicsFillType.SOLID_FILL;
};
$hxClasses["flash.display.GraphicsSolidFill"] = flash.display.GraphicsSolidFill;
flash.display.GraphicsSolidFill.__name__ = ["flash","display","GraphicsSolidFill"];
flash.display.GraphicsSolidFill.__interfaces__ = [flash.display.IGraphicsFill,flash.display.IGraphicsData];
flash.display.GraphicsSolidFill.prototype = {
	__graphicsFillType: null
	,__graphicsDataType: null
	,color: null
	,alpha: null
	,__class__: flash.display.GraphicsSolidFill
}
flash.display.IGraphicsStroke = function() { }
$hxClasses["flash.display.IGraphicsStroke"] = flash.display.IGraphicsStroke;
flash.display.IGraphicsStroke.__name__ = ["flash","display","IGraphicsStroke"];
flash.display.GraphicsStroke = function(thickness,pixelHinting,scaleMode,caps,joints,miterLimit,fill) {
	if(miterLimit == null) miterLimit = 3;
	if(pixelHinting == null) pixelHinting = false;
	if(thickness == null) thickness = 0.0;
	this.caps = caps != null?caps:null;
	this.fill = fill;
	this.joints = joints != null?joints:null;
	this.miterLimit = miterLimit;
	this.pixelHinting = pixelHinting;
	this.scaleMode = scaleMode != null?scaleMode:null;
	this.thickness = thickness;
	this.__graphicsDataType = flash.display.GraphicsDataType.STROKE;
};
$hxClasses["flash.display.GraphicsStroke"] = flash.display.GraphicsStroke;
flash.display.GraphicsStroke.__name__ = ["flash","display","GraphicsStroke"];
flash.display.GraphicsStroke.__interfaces__ = [flash.display.IGraphicsStroke,flash.display.IGraphicsData];
flash.display.GraphicsStroke.prototype = {
	__graphicsDataType: null
	,thickness: null
	,scaleMode: null
	,pixelHinting: null
	,miterLimit: null
	,joints: null
	,fill: null
	,caps: null
	,__class__: flash.display.GraphicsStroke
}
flash.display.GraphicsDataType = $hxClasses["flash.display.GraphicsDataType"] = { __ename__ : true, __constructs__ : ["STROKE","SOLID","GRADIENT","PATH"] }
flash.display.GraphicsDataType.STROKE = ["STROKE",0];
flash.display.GraphicsDataType.STROKE.toString = $estr;
flash.display.GraphicsDataType.STROKE.__enum__ = flash.display.GraphicsDataType;
flash.display.GraphicsDataType.SOLID = ["SOLID",1];
flash.display.GraphicsDataType.SOLID.toString = $estr;
flash.display.GraphicsDataType.SOLID.__enum__ = flash.display.GraphicsDataType;
flash.display.GraphicsDataType.GRADIENT = ["GRADIENT",2];
flash.display.GraphicsDataType.GRADIENT.toString = $estr;
flash.display.GraphicsDataType.GRADIENT.__enum__ = flash.display.GraphicsDataType;
flash.display.GraphicsDataType.PATH = ["PATH",3];
flash.display.GraphicsDataType.PATH.toString = $estr;
flash.display.GraphicsDataType.PATH.__enum__ = flash.display.GraphicsDataType;
flash.display.GraphicsFillType = $hxClasses["flash.display.GraphicsFillType"] = { __ename__ : true, __constructs__ : ["SOLID_FILL","GRADIENT_FILL"] }
flash.display.GraphicsFillType.SOLID_FILL = ["SOLID_FILL",0];
flash.display.GraphicsFillType.SOLID_FILL.toString = $estr;
flash.display.GraphicsFillType.SOLID_FILL.__enum__ = flash.display.GraphicsFillType;
flash.display.GraphicsFillType.GRADIENT_FILL = ["GRADIENT_FILL",1];
flash.display.GraphicsFillType.GRADIENT_FILL.toString = $estr;
flash.display.GraphicsFillType.GRADIENT_FILL.__enum__ = flash.display.GraphicsFillType;
flash.display.InterpolationMethod = $hxClasses["flash.display.InterpolationMethod"] = { __ename__ : true, __constructs__ : ["RGB","LINEAR_RGB"] }
flash.display.InterpolationMethod.RGB = ["RGB",0];
flash.display.InterpolationMethod.RGB.toString = $estr;
flash.display.InterpolationMethod.RGB.__enum__ = flash.display.InterpolationMethod;
flash.display.InterpolationMethod.LINEAR_RGB = ["LINEAR_RGB",1];
flash.display.InterpolationMethod.LINEAR_RGB.toString = $estr;
flash.display.InterpolationMethod.LINEAR_RGB.__enum__ = flash.display.InterpolationMethod;
flash.display.JointStyle = $hxClasses["flash.display.JointStyle"] = { __ename__ : true, __constructs__ : ["MITER","ROUND","BEVEL"] }
flash.display.JointStyle.MITER = ["MITER",0];
flash.display.JointStyle.MITER.toString = $estr;
flash.display.JointStyle.MITER.__enum__ = flash.display.JointStyle;
flash.display.JointStyle.ROUND = ["ROUND",1];
flash.display.JointStyle.ROUND.toString = $estr;
flash.display.JointStyle.ROUND.__enum__ = flash.display.JointStyle;
flash.display.JointStyle.BEVEL = ["BEVEL",2];
flash.display.JointStyle.BEVEL.toString = $estr;
flash.display.JointStyle.BEVEL.__enum__ = flash.display.JointStyle;
flash.display.LineScaleMode = $hxClasses["flash.display.LineScaleMode"] = { __ename__ : true, __constructs__ : ["HORIZONTAL","NONE","NORMAL","VERTICAL"] }
flash.display.LineScaleMode.HORIZONTAL = ["HORIZONTAL",0];
flash.display.LineScaleMode.HORIZONTAL.toString = $estr;
flash.display.LineScaleMode.HORIZONTAL.__enum__ = flash.display.LineScaleMode;
flash.display.LineScaleMode.NONE = ["NONE",1];
flash.display.LineScaleMode.NONE.toString = $estr;
flash.display.LineScaleMode.NONE.__enum__ = flash.display.LineScaleMode;
flash.display.LineScaleMode.NORMAL = ["NORMAL",2];
flash.display.LineScaleMode.NORMAL.toString = $estr;
flash.display.LineScaleMode.NORMAL.__enum__ = flash.display.LineScaleMode;
flash.display.LineScaleMode.VERTICAL = ["VERTICAL",3];
flash.display.LineScaleMode.VERTICAL.toString = $estr;
flash.display.LineScaleMode.VERTICAL.__enum__ = flash.display.LineScaleMode;
flash.display.Loader = function() {
	flash.display.Sprite.call(this);
	this.contentLoaderInfo = flash.display.LoaderInfo.create(this);
};
$hxClasses["flash.display.Loader"] = flash.display.Loader;
flash.display.Loader.__name__ = ["flash","display","Loader"];
flash.display.Loader.__super__ = flash.display.Sprite;
flash.display.Loader.prototype = $extend(flash.display.Sprite.prototype,{
	handleLoad: function(e) {
		e.currentTarget = this;
		this.content.__invalidateBounds();
		this.content.__render(null,null);
		this.contentLoaderInfo.removeEventListener(flash.events.Event.COMPLETE,$bind(this,this.handleLoad));
	}
	,validateBounds: function() {
		if(this.get__boundsInvalid()) {
			flash.display.Sprite.prototype.validateBounds.call(this);
			if(this.mImage != null) {
				var r = new flash.geom.Rectangle(0,0,this.mImage.get_width(),this.mImage.get_height());
				if(r.width != 0 || r.height != 0) {
					if(this.__boundsRect.width == 0 && this.__boundsRect.height == 0) this.__boundsRect = r.clone(); else this.__boundsRect.extendBounds(r);
				}
			}
			if(this.scale9Grid != null) {
				this.__boundsRect.width *= this.__scaleX;
				this.__boundsRect.height *= this.__scaleY;
				this.__width = this.__boundsRect.width;
				this.__height = this.__boundsRect.height;
			} else {
				this.__width = this.__boundsRect.width * this.__scaleX;
				this.__height = this.__boundsRect.height * this.__scaleY;
			}
		}
	}
	,toString: function() {
		return "[Loader name=" + this.name + " id=" + this.___id + "]";
	}
	,loadBytes: function(buffer) {
		var _g = this;
		try {
			this.contentLoaderInfo.addEventListener(flash.events.Event.COMPLETE,$bind(this,this.handleLoad),false,2147483647);
			flash.display.BitmapData.loadFromBytes(buffer,null,function(bmd) {
				_g.content = new flash.display.Bitmap(bmd);
				_g.contentLoaderInfo.content = _g.content;
				_g.addChild(_g.content);
				var evt = new flash.events.Event(flash.events.Event.COMPLETE);
				evt.currentTarget = _g;
				_g.contentLoaderInfo.dispatchEvent(evt);
			});
		} catch( e ) {
			haxe.Log.trace("Error " + Std.string(e),{ fileName : "Loader.hx", lineNumber : 123, className : "flash.display.Loader", methodName : "loadBytes"});
			var evt = new flash.events.IOErrorEvent(flash.events.IOErrorEvent.IO_ERROR);
			evt.currentTarget = this;
			this.contentLoaderInfo.dispatchEvent(evt);
		}
	}
	,load: function(request,context) {
		var extension = "";
		var parts = request.url.split(".");
		if(parts.length > 0) extension = parts[parts.length - 1].toLowerCase();
		var transparent = true;
		this.contentLoaderInfo.url = request.url;
		if(request.contentType == null && request.contentType != "") this.contentLoaderInfo.contentType = (function($this) {
			var $r;
			switch(extension) {
			case "swf":
				$r = "application/x-shockwave-flash";
				break;
			case "jpg":case "jpeg":
				$r = (function($this) {
					var $r;
					transparent = false;
					$r = "image/jpeg";
					return $r;
				}($this));
				break;
			case "png":
				$r = "image/png";
				break;
			case "gif":
				$r = "image/gif";
				break;
			default:
				$r = "application/x-www-form-urlencoded";
			}
			return $r;
		}(this)); else this.contentLoaderInfo.contentType = request.contentType;
		this.mImage = new flash.display.BitmapData(0,0,transparent);
		try {
			this.contentLoaderInfo.addEventListener(flash.events.Event.COMPLETE,$bind(this,this.handleLoad),false,2147483647);
			this.mImage.__loadFromFile(request.url,this.contentLoaderInfo);
			this.content = new flash.display.Bitmap(this.mImage);
			this.contentLoaderInfo.content = this.content;
			this.addChild(this.content);
		} catch( e ) {
			haxe.Log.trace("Error " + Std.string(e),{ fileName : "Loader.hx", lineNumber : 86, className : "flash.display.Loader", methodName : "load"});
			var evt = new flash.events.IOErrorEvent(flash.events.IOErrorEvent.IO_ERROR);
			evt.currentTarget = this;
			this.contentLoaderInfo.dispatchEvent(evt);
			return;
		}
		if(this.mShape == null) {
			this.mShape = new flash.display.Shape();
			this.addChild(this.mShape);
		}
	}
	,mShape: null
	,mImage: null
	,contentLoaderInfo: null
	,content: null
	,__class__: flash.display.Loader
});
flash.display.LoaderInfo = function() {
	flash.events.EventDispatcher.call(this);
	this.applicationDomain = flash.system.ApplicationDomain.currentDomain;
	this.bytesLoaded = 0;
	this.bytesTotal = 0;
	this.childAllowsParent = true;
	this.parameters = { };
};
$hxClasses["flash.display.LoaderInfo"] = flash.display.LoaderInfo;
flash.display.LoaderInfo.__name__ = ["flash","display","LoaderInfo"];
flash.display.LoaderInfo.create = function(ldr) {
	var li = new flash.display.LoaderInfo();
	if(ldr != null) li.loader = ldr; else li.url = "";
	return li;
}
flash.display.LoaderInfo.__super__ = flash.events.EventDispatcher;
flash.display.LoaderInfo.prototype = $extend(flash.events.EventDispatcher.prototype,{
	width: null
	,url: null
	,sharedEvents: null
	,sameDomain: null
	,parentAllowsChild: null
	,parameters: null
	,loaderURL: null
	,loader: null
	,height: null
	,frameRate: null
	,contentType: null
	,content: null
	,childAllowsParent: null
	,bytesTotal: null
	,bytesLoaded: null
	,bytes: null
	,applicationDomain: null
	,__class__: flash.display.LoaderInfo
});
flash.display.MovieClip = function() {
	flash.display.Sprite.call(this);
	this.enabled = true;
	this.__currentFrame = 0;
	this.__totalFrames = 0;
	this.loaderInfo = flash.display.LoaderInfo.create(null);
};
$hxClasses["flash.display.MovieClip"] = flash.display.MovieClip;
flash.display.MovieClip.__name__ = ["flash","display","MovieClip"];
flash.display.MovieClip.__super__ = flash.display.Sprite;
flash.display.MovieClip.prototype = $extend(flash.display.Sprite.prototype,{
	get_totalFrames: function() {
		return this.__totalFrames;
	}
	,get_framesLoaded: function() {
		return this.__totalFrames;
	}
	,get_currentFrame: function() {
		return this.__currentFrame;
	}
	,toString: function() {
		return "[MovieClip name=" + this.name + " id=" + this.___id + "]";
	}
	,stop: function() {
	}
	,prevFrame: function() {
	}
	,play: function() {
	}
	,nextFrame: function() {
	}
	,gotoAndStop: function(frame,scene) {
		if(scene == null) scene = "";
	}
	,gotoAndPlay: function(frame,scene) {
		if(scene == null) scene = "";
	}
	,__totalFrames: null
	,__currentFrame: null
	,totalFrames: null
	,framesLoaded: null
	,enabled: null
	,currentFrame: null
	,__class__: flash.display.MovieClip
	,__properties__: $extend(flash.display.Sprite.prototype.__properties__,{get_currentFrame:"get_currentFrame",get_framesLoaded:"get_framesLoaded",get_totalFrames:"get_totalFrames"})
});
flash.display.PixelSnapping = $hxClasses["flash.display.PixelSnapping"] = { __ename__ : true, __constructs__ : ["NEVER","AUTO","ALWAYS"] }
flash.display.PixelSnapping.NEVER = ["NEVER",0];
flash.display.PixelSnapping.NEVER.toString = $estr;
flash.display.PixelSnapping.NEVER.__enum__ = flash.display.PixelSnapping;
flash.display.PixelSnapping.AUTO = ["AUTO",1];
flash.display.PixelSnapping.AUTO.toString = $estr;
flash.display.PixelSnapping.AUTO.__enum__ = flash.display.PixelSnapping;
flash.display.PixelSnapping.ALWAYS = ["ALWAYS",2];
flash.display.PixelSnapping.ALWAYS.toString = $estr;
flash.display.PixelSnapping.ALWAYS.__enum__ = flash.display.PixelSnapping;
flash.display.Shape = function() {
	flash.display.DisplayObject.call(this);
	this.__graphics = new flash.display.Graphics();
};
$hxClasses["flash.display.Shape"] = flash.display.Shape;
flash.display.Shape.__name__ = ["flash","display","Shape"];
flash.display.Shape.__super__ = flash.display.DisplayObject;
flash.display.Shape.prototype = $extend(flash.display.DisplayObject.prototype,{
	get_graphics: function() {
		return this.__graphics;
	}
	,__getObjectUnderPoint: function(point) {
		if(this.parent == null) return null;
		if(this.parent.mouseEnabled && flash.display.DisplayObject.prototype.__getObjectUnderPoint.call(this,point) == this) return this.parent; else return null;
	}
	,__getGraphics: function() {
		return this.__graphics;
	}
	,toString: function() {
		return "[Shape name=" + this.name + " id=" + this.___id + "]";
	}
	,__graphics: null
	,__class__: flash.display.Shape
	,__properties__: $extend(flash.display.DisplayObject.prototype.__properties__,{get_graphics:"get_graphics"})
});
flash.display.SpreadMethod = $hxClasses["flash.display.SpreadMethod"] = { __ename__ : true, __constructs__ : ["REPEAT","REFLECT","PAD"] }
flash.display.SpreadMethod.REPEAT = ["REPEAT",0];
flash.display.SpreadMethod.REPEAT.toString = $estr;
flash.display.SpreadMethod.REPEAT.__enum__ = flash.display.SpreadMethod;
flash.display.SpreadMethod.REFLECT = ["REFLECT",1];
flash.display.SpreadMethod.REFLECT.toString = $estr;
flash.display.SpreadMethod.REFLECT.__enum__ = flash.display.SpreadMethod;
flash.display.SpreadMethod.PAD = ["PAD",2];
flash.display.SpreadMethod.PAD.toString = $estr;
flash.display.SpreadMethod.PAD.__enum__ = flash.display.SpreadMethod;
flash.events.Event = function(inType,inBubbles,inCancelable) {
	if(inCancelable == null) inCancelable = false;
	if(inBubbles == null) inBubbles = false;
	this.type = inType;
	this.bubbles = inBubbles;
	this.cancelable = inCancelable;
	this.__isCancelled = false;
	this.__isCancelledNow = false;
	this.target = null;
	this.currentTarget = null;
	this.eventPhase = flash.events.EventPhase.AT_TARGET;
};
$hxClasses["flash.events.Event"] = flash.events.Event;
flash.events.Event.__name__ = ["flash","events","Event"];
flash.events.Event.prototype = {
	__setPhase: function(phase) {
		this.eventPhase = phase;
	}
	,__getIsCancelledNow: function() {
		return this.__isCancelledNow;
	}
	,__getIsCancelled: function() {
		return this.__isCancelled;
	}
	,__createSimilar: function(type,related,targ) {
		var result = new flash.events.Event(type,this.bubbles,this.cancelable);
		if(targ != null) result.target = targ;
		return result;
	}
	,toString: function() {
		return "[Event type=" + this.type + " bubbles=" + Std.string(this.bubbles) + " cancelable=" + Std.string(this.cancelable) + "]";
	}
	,stopPropagation: function() {
		this.__isCancelled = true;
	}
	,stopImmediatePropagation: function() {
		this.__isCancelled = true;
		this.__isCancelledNow = true;
	}
	,clone: function() {
		return new flash.events.Event(this.type,this.bubbles,this.cancelable);
	}
	,__isCancelledNow: null
	,__isCancelled: null
	,type: null
	,target: null
	,eventPhase: null
	,currentTarget: null
	,cancelable: null
	,bubbles: null
	,__class__: flash.events.Event
}
flash.events.MouseEvent = function(type,bubbles,cancelable,localX,localY,relatedObject,ctrlKey,altKey,shiftKey,buttonDown,delta,commandKey,clickCount) {
	if(clickCount == null) clickCount = 0;
	if(commandKey == null) commandKey = false;
	if(delta == null) delta = 0;
	if(buttonDown == null) buttonDown = false;
	if(shiftKey == null) shiftKey = false;
	if(altKey == null) altKey = false;
	if(ctrlKey == null) ctrlKey = false;
	if(localY == null) localY = 0;
	if(localX == null) localX = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = true;
	flash.events.Event.call(this,type,bubbles,cancelable);
	this.shiftKey = shiftKey;
	this.altKey = altKey;
	this.ctrlKey = ctrlKey;
	this.bubbles = bubbles;
	this.relatedObject = relatedObject;
	this.delta = delta;
	this.localX = localX;
	this.localY = localY;
	this.buttonDown = buttonDown;
	this.commandKey = commandKey;
	this.clickCount = clickCount;
};
$hxClasses["flash.events.MouseEvent"] = flash.events.MouseEvent;
flash.events.MouseEvent.__name__ = ["flash","events","MouseEvent"];
flash.events.MouseEvent.__create = function(type,event,local,target) {
	var __mouseDown = false;
	var delta = 2;
	if(type == flash.events.MouseEvent.MOUSE_WHEEL) {
		var mouseEvent = event;
		if(mouseEvent.wheelDelta) delta = mouseEvent.wheelDelta / 120 | 0; else if(mouseEvent.detail) -mouseEvent.detail | 0;
	}
	if(type == flash.events.MouseEvent.MOUSE_DOWN) __mouseDown = event.which != null?event.which == 1:event.button != null?event.button == 0:false; else if(type == flash.events.MouseEvent.MOUSE_UP) {
		if(event.which != null) {
			if(event.which == 1) __mouseDown = false; else if(event.button != null) {
				if(event.button == 0) __mouseDown = false; else __mouseDown = false;
			}
		}
	}
	var pseudoEvent = new flash.events.MouseEvent(type,true,false,local.x,local.y,null,event.ctrlKey,event.altKey,event.shiftKey,__mouseDown,delta);
	pseudoEvent.stageX = flash.Lib.get_current().get_stage().get_mouseX();
	pseudoEvent.stageY = flash.Lib.get_current().get_stage().get_mouseY();
	pseudoEvent.target = target;
	return pseudoEvent;
}
flash.events.MouseEvent.__super__ = flash.events.Event;
flash.events.MouseEvent.prototype = $extend(flash.events.Event.prototype,{
	updateAfterEvent: function() {
	}
	,__createSimilar: function(type,related,targ) {
		var result = new flash.events.MouseEvent(type,this.bubbles,this.cancelable,this.localX,this.localY,related == null?this.relatedObject:related,this.ctrlKey,this.altKey,this.shiftKey,this.buttonDown,this.delta,this.commandKey,this.clickCount);
		if(targ != null) result.target = targ;
		return result;
	}
	,stageY: null
	,stageX: null
	,shiftKey: null
	,relatedObject: null
	,localY: null
	,localX: null
	,delta: null
	,ctrlKey: null
	,clickCount: null
	,commandKey: null
	,buttonDown: null
	,altKey: null
	,__class__: flash.events.MouseEvent
});
flash.display.Stage = function(width,height) {
	flash.display.DisplayObjectContainer.call(this);
	this.__focusObject = null;
	this.__focusObjectActivated = false;
	this.__windowWidth = width;
	this.__windowHeight = height;
	this.stageFocusRect = false;
	this.scaleMode = flash.display.StageScaleMode.SHOW_ALL;
	this.__stageMatrix = new flash.geom.Matrix();
	this.tabEnabled = true;
	this.set_frameRate(0.0);
	this.set_backgroundColor(16777215);
	this.name = "Stage";
	this.loaderInfo = flash.display.LoaderInfo.create(null);
	this.loaderInfo.parameters.width = Std.string(this.__windowWidth);
	this.loaderInfo.parameters.height = Std.string(this.__windowHeight);
	this.__pointInPathMode = flash.display.Graphics.__detectIsPointInPathMode();
	this.__mouseOverObjects = [];
	this.set_showDefaultContextMenu(true);
	this.__touchInfo = [];
	this.__uIEventsQueue = new Array(1000);
	this.__uIEventsQueueIndex = 0;
};
$hxClasses["flash.display.Stage"] = flash.display.Stage;
flash.display.Stage.__name__ = ["flash","display","Stage"];
flash.display.Stage.getOrientation = function() {
	var rotation = window.orientation;
	var orientation = flash.display.Stage.OrientationPortrait;
	switch(rotation) {
	case -90:
		orientation = flash.display.Stage.OrientationLandscapeLeft;
		break;
	case 180:
		orientation = flash.display.Stage.OrientationPortraitUpsideDown;
		break;
	case 90:
		orientation = flash.display.Stage.OrientationLandscapeRight;
		break;
	default:
		orientation = flash.display.Stage.OrientationPortrait;
	}
	return orientation;
}
flash.display.Stage.__super__ = flash.display.DisplayObjectContainer;
flash.display.Stage.prototype = $extend(flash.display.DisplayObjectContainer.prototype,{
	get_stageWidth: function() {
		return this.__windowWidth;
	}
	,get_stageHeight: function() {
		return this.__windowHeight;
	}
	,get_stage: function() {
		return flash.Lib.__getStage();
	}
	,set_showDefaultContextMenu: function(showDefaultContextMenu) {
		if(showDefaultContextMenu != this.__showDefaultContextMenu && this.__showDefaultContextMenu != null) {
			if(!showDefaultContextMenu) flash.Lib.__disableRightClick(); else flash.Lib.__enableRightClick();
		}
		this.__showDefaultContextMenu = showDefaultContextMenu;
		return showDefaultContextMenu;
	}
	,get_showDefaultContextMenu: function() {
		return this.__showDefaultContextMenu;
	}
	,set_quality: function(inQuality) {
		return this.quality = inQuality;
	}
	,get_quality: function() {
		return this.quality != null?this.quality:flash.display.StageQuality.BEST;
	}
	,get_mouseY: function() {
		return this._mouseY;
	}
	,get_mouseX: function() {
		return this._mouseX;
	}
	,get_fullScreenHeight: function() {
		return js.Browser.window.innerHeight;
	}
	,get_fullScreenWidth: function() {
		return js.Browser.window.innerWidth;
	}
	,set_frameRate: function(speed) {
		if(speed == 0) {
			var window = js.Browser.window;
			var __requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
			if(__requestAnimationFrame == null) speed = 60;
		}
		if(speed != 0) this.__interval = 1000.0 / speed | 0;
		this.__frameRate = speed;
		this.__updateNextWake();
		return speed;
	}
	,get_frameRate: function() {
		return this.__frameRate;
	}
	,set_focus: function(inObj) {
		this.__onFocus(inObj);
		return this.__focusObject;
	}
	,get_focus: function() {
		return this.__focusObject;
	}
	,set_displayState: function(displayState) {
		if(displayState != this.displayState && this.displayState != null) {
			switch( (displayState)[1] ) {
			case 0:
				flash.Lib.__disableFullScreen();
				break;
			case 1:
			case 2:
				flash.Lib.__enableFullScreen();
				break;
			}
		}
		this.displayState = displayState;
		return displayState;
	}
	,get_displayState: function() {
		return this.displayState;
	}
	,set_color: function(col) {
		return this.__backgroundColour = col;
	}
	,get_color: function() {
		return this.__backgroundColour;
	}
	,set_backgroundColor: function(col) {
		return this.__backgroundColour = col;
	}
	,get_backgroundColor: function() {
		return this.__backgroundColour;
	}
	,__onTouch: function(event,touch,type,touchInfo,isPrimaryTouchPoint) {
		var rect = flash.Lib.mMe.__scr.getBoundingClientRect();
		var point = new flash.geom.Point(touch.pageX,touch.pageY);
		var obj = this.__getObjectUnderPoint(point);
		this._mouseX = point.x;
		this._mouseY = point.y;
		var stack = new Array();
		if(obj != null) obj.__getInteractiveObjectStack(stack);
		if(stack.length > 0) {
			stack.reverse();
			var local = obj.globalToLocal(point);
			var evt = flash.events.TouchEvent.__create(type,event,touch,local,obj);
			evt.touchPointID = touch.identifier;
			evt.isPrimaryTouchPoint = isPrimaryTouchPoint;
			this.__checkInOuts(evt,stack,touchInfo);
			obj.__fireEvent(evt);
			var mouseType = (function($this) {
				var $r;
				switch(type) {
				case "touchBegin":
					$r = flash.events.MouseEvent.MOUSE_DOWN;
					break;
				case "touchEnd":
					$r = flash.events.MouseEvent.MOUSE_UP;
					break;
				default:
					$r = (function($this) {
						var $r;
						if($this.__dragObject != null) $this.__drag(point);
						$r = flash.events.MouseEvent.MOUSE_MOVE;
						return $r;
					}($this));
				}
				return $r;
			}(this));
			obj.__fireEvent(flash.events.MouseEvent.__create(mouseType,evt,local,obj));
		} else {
			var evt = flash.events.TouchEvent.__create(type,event,touch,point,null);
			evt.touchPointID = touch.identifier;
			evt.isPrimaryTouchPoint = isPrimaryTouchPoint;
			this.__checkInOuts(evt,stack,touchInfo);
		}
	}
	,__onResize: function(inW,inH) {
		this.__windowWidth = inW;
		this.__windowHeight = inH;
		var event = new flash.events.Event(flash.events.Event.RESIZE);
		event.target = this;
		this.__broadcast(event);
	}
	,__onMouse: function(event,type) {
		var rect = flash.Lib.mMe.__scr.getBoundingClientRect();
		var point = new flash.geom.Point(event.clientX - rect.left,event.clientY - rect.top);
		if(this.__dragObject != null) this.__drag(point);
		var obj = this.__getObjectUnderPoint(point);
		this._mouseX = point.x;
		this._mouseY = point.y;
		var stack = new Array();
		if(obj != null) obj.__getInteractiveObjectStack(stack);
		if(stack.length > 0) {
			stack.reverse();
			var local = obj.globalToLocal(point);
			var evt = flash.events.MouseEvent.__create(type,event,local,obj);
			this.__checkInOuts(evt,stack);
			if(type == flash.events.MouseEvent.MOUSE_DOWN) this.__onFocus(stack[stack.length - 1]);
			obj.__fireEvent(evt);
		} else {
			var evt = flash.events.MouseEvent.__create(type,event,point,null);
			this.__checkInOuts(evt,stack);
		}
	}
	,__onFocus: function(target) {
		if(target != this.__focusObject) {
			if(this.__focusObject != null) this.__focusObject.__fireEvent(new flash.events.FocusEvent(flash.events.FocusEvent.FOCUS_OUT,true,false,this.__focusObject,false,0));
			target.__fireEvent(new flash.events.FocusEvent(flash.events.FocusEvent.FOCUS_IN,true,false,target,false,0));
			this.__focusObject = target;
		}
	}
	,__onKey: function(code,pressed,inChar,ctrl,alt,shift,keyLocation) {
		var stack = new Array();
		if(this.__focusObject == null) this.__getInteractiveObjectStack(stack); else this.__focusObject.__getInteractiveObjectStack(stack);
		if(stack.length > 0) {
			var obj = stack[0];
			var evt = new flash.events.KeyboardEvent(pressed?flash.events.KeyboardEvent.KEY_DOWN:flash.events.KeyboardEvent.KEY_UP,true,false,inChar,code,keyLocation,ctrl,alt,shift);
			obj.__fireEvent(evt);
		}
	}
	,__handleOrientationChange: function() {
	}
	,__handleAccelerometer: function(evt) {
		flash.display.Stage.__acceleration.x = evt.accelerationIncludingGravity.x;
		flash.display.Stage.__acceleration.y = evt.accelerationIncludingGravity.y;
		flash.display.Stage.__acceleration.z = evt.accelerationIncludingGravity.z;
	}
	,__updateNextWake: function() {
		if(this.__frameRate == 0) {
			var __requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
			__requestAnimationFrame($bind(this,this.__updateNextWake));
			this.__stageRender();
		} else {
			js.Browser.window.clearInterval(this.__timer);
			this.__timer = js.Browser.window.setInterval($bind(this,this.__stageRender),this.__interval);
		}
	}
	,__stopDrag: function(sprite) {
		this.__dragBounds = null;
		this.__dragObject = null;
	}
	,__startDrag: function(sprite,lockCenter,bounds) {
		if(lockCenter == null) lockCenter = false;
		this.__dragBounds = bounds == null?null:bounds.clone();
		this.__dragObject = sprite;
		if(this.__dragObject != null) {
			var mouse = new flash.geom.Point(this._mouseX,this._mouseY);
			var p = this.__dragObject.parent;
			if(p != null) mouse = p.globalToLocal(mouse);
			if(lockCenter) {
				var bounds1 = sprite.getBounds(this);
				this.__dragOffsetX = this.__dragObject.get_x() - (bounds1.width / 2 + bounds1.x);
				this.__dragOffsetY = this.__dragObject.get_y() - (bounds1.height / 2 + bounds1.y);
			} else {
				this.__dragOffsetX = this.__dragObject.get_x() - mouse.x;
				this.__dragOffsetY = this.__dragObject.get_y() - mouse.y;
			}
		}
	}
	,__stageRender: function(_) {
		if(!this.__stageActive) {
			this.__onResize(this.__windowWidth,this.__windowHeight);
			var event = new flash.events.Event(flash.events.Event.ACTIVATE);
			event.target = this;
			this.__broadcast(event);
			this.__stageActive = true;
		}
		var _g1 = 0, _g = this.__uIEventsQueueIndex;
		while(_g1 < _g) {
			var i = _g1++;
			if(this.__uIEventsQueue[i] != null) this.__processStageEvent(this.__uIEventsQueue[i]);
		}
		this.__uIEventsQueueIndex = 0;
		var event = new flash.events.Event(flash.events.Event.ENTER_FRAME);
		this.__broadcast(event);
		if(this.__invalid) {
			var event1 = new flash.events.Event(flash.events.Event.RENDER);
			this.__broadcast(event1);
		}
		this.__renderAll();
	}
	,__renderToCanvas: function(canvas) {
		canvas.width = canvas.width;
		this.__render(canvas);
	}
	,__renderAll: function() {
		this.__render(null,null);
	}
	,__queueStageEvent: function(evt) {
		this.__uIEventsQueue[this.__uIEventsQueueIndex++] = evt;
	}
	,__processStageEvent: function(evt) {
		evt.stopPropagation();
		switch(evt.type) {
		case "resize":
			this.__onResize(flash.Lib.__getWidth(),flash.Lib.__getHeight());
			break;
		case "focus":
			this.__onFocus(this);
			if(!this.__focusObjectActivated) {
				this.__focusObjectActivated = true;
				this.dispatchEvent(new flash.events.Event(flash.events.Event.ACTIVATE));
			}
			break;
		case "blur":
			if(this.__focusObjectActivated) {
				this.__focusObjectActivated = false;
				this.dispatchEvent(new flash.events.Event(flash.events.Event.DEACTIVATE));
			}
			break;
		case "mousemove":
			this.__onMouse(evt,flash.events.MouseEvent.MOUSE_MOVE);
			break;
		case "mousedown":
			this.__onMouse(evt,flash.events.MouseEvent.MOUSE_DOWN);
			break;
		case "mouseup":
			this.__onMouse(evt,flash.events.MouseEvent.MOUSE_UP);
			break;
		case "click":
			this.__onMouse(evt,flash.events.MouseEvent.CLICK);
			break;
		case "mousewheel":
			this.__onMouse(evt,flash.events.MouseEvent.MOUSE_WHEEL);
			break;
		case "dblclick":
			this.__onMouse(evt,flash.events.MouseEvent.DOUBLE_CLICK);
			break;
		case "keydown":
			var evt1 = evt;
			var keyCode = evt1.keyCode != null?evt1.keyCode:evt1.which;
			keyCode = flash.ui.Keyboard.__convertMozillaCode(keyCode);
			this.__onKey(keyCode,true,evt1.charCode,evt1.ctrlKey,evt1.altKey,evt1.shiftKey,evt1.keyLocation);
			break;
		case "keyup":
			var evt1 = evt;
			var keyCode = evt1.keyCode != null?evt1.keyCode:evt1.which;
			keyCode = flash.ui.Keyboard.__convertMozillaCode(keyCode);
			this.__onKey(keyCode,false,evt1.charCode,evt1.ctrlKey,evt1.altKey,evt1.shiftKey,evt1.keyLocation);
			break;
		case "touchstart":
			var evt1 = evt;
			evt1.preventDefault();
			var touchInfo = new flash.display._Stage.TouchInfo();
			this.__touchInfo[evt1.changedTouches[0].identifier] = touchInfo;
			this.__onTouch(evt1,evt1.changedTouches[0],"touchBegin",touchInfo,false);
			break;
		case "touchmove":
			var evt1 = evt;
			evt1.preventDefault();
			var touchInfo = this.__touchInfo[evt1.changedTouches[0].identifier];
			this.__onTouch(evt1,evt1.changedTouches[0],"touchMove",touchInfo,true);
			break;
		case "touchend":
			var evt1 = evt;
			evt1.preventDefault();
			var touchInfo = this.__touchInfo[evt1.changedTouches[0].identifier];
			this.__onTouch(evt1,evt1.changedTouches[0],"touchEnd",touchInfo,true);
			this.__touchInfo[evt1.changedTouches[0].identifier] = null;
			break;
		case "devicemotion":
			var evt1 = evt;
			this.__handleAccelerometer(evt1);
			break;
		case "orientationchange":
			this.__handleOrientationChange();
			break;
		default:
		}
	}
	,__isOnStage: function() {
		return true;
	}
	,__drag: function(point) {
		var p = this.__dragObject.parent;
		if(p != null) point = p.globalToLocal(point);
		var x = point.x + this.__dragOffsetX;
		var y = point.y + this.__dragOffsetY;
		if(this.__dragBounds != null) {
			if(x < this.__dragBounds.x) x = this.__dragBounds.x; else if(x > this.__dragBounds.get_right()) x = this.__dragBounds.get_right();
			if(y < this.__dragBounds.y) y = this.__dragBounds.y; else if(y > this.__dragBounds.get_bottom()) y = this.__dragBounds.get_bottom();
		}
		this.__dragObject.set_x(x);
		this.__dragObject.set_y(y);
	}
	,__checkInOuts: function(event,stack,touchInfo) {
		var prev = touchInfo == null?this.__mouseOverObjects:touchInfo.touchOverObjects;
		var changeEvents = touchInfo == null?flash.display.Stage.__mouseChanges:flash.display.Stage.__touchChanges;
		var new_n = stack.length;
		var new_obj = new_n > 0?stack[new_n - 1]:null;
		var old_n = prev.length;
		var old_obj = old_n > 0?prev[old_n - 1]:null;
		if(new_obj != old_obj) {
			if(old_obj != null) old_obj.__fireEvent(event.__createSimilar(changeEvents[0],new_obj,old_obj));
			if(new_obj != null) new_obj.__fireEvent(event.__createSimilar(changeEvents[1],old_obj,new_obj));
			var common = 0;
			while(common < new_n && common < old_n && stack[common] == prev[common]) common++;
			var rollOut = event.__createSimilar(changeEvents[2],new_obj,old_obj);
			var i = old_n - 1;
			while(i >= common) {
				prev[i].dispatchEvent(rollOut);
				i--;
			}
			var rollOver = event.__createSimilar(changeEvents[3],old_obj);
			var i1 = new_n - 1;
			while(i1 >= common) {
				stack[i1].dispatchEvent(rollOver);
				i1--;
			}
			if(touchInfo == null) this.__mouseOverObjects = stack; else touchInfo.touchOverObjects = stack;
		}
	}
	,toString: function() {
		return "[Stage id=" + this.___id + "]";
	}
	,invalidate: function() {
		this.__invalid = true;
	}
	,_mouseY: null
	,_mouseX: null
	,__windowHeight: null
	,__windowWidth: null
	,__uIEventsQueueIndex: null
	,__uIEventsQueue: null
	,__touchInfo: null
	,__timer: null
	,__stageMatrix: null
	,__stageActive: null
	,__showDefaultContextMenu: null
	,__mouseOverObjects: null
	,__invalid: null
	,__interval: null
	,__frameRate: null
	,__focusObjectActivated: null
	,__focusObject: null
	,__dragOffsetY: null
	,__dragOffsetX: null
	,__dragObject: null
	,__dragBounds: null
	,__backgroundColour: null
	,stageWidth: null
	,stageHeight: null
	,stageFocusRect: null
	,scaleMode: null
	,quality: null
	,__pointInPathMode: null
	,fullScreenWidth: null
	,fullScreenHeight: null
	,displayState: null
	,align: null
	,__class__: flash.display.Stage
	,__properties__: $extend(flash.display.DisplayObjectContainer.prototype.__properties__,{set_backgroundColor:"set_backgroundColor",get_backgroundColor:"get_backgroundColor",set_color:"set_color",get_color:"get_color",set_displayState:"set_displayState",get_displayState:"get_displayState",set_focus:"set_focus",get_focus:"get_focus",set_frameRate:"set_frameRate",get_frameRate:"get_frameRate",get_fullScreenHeight:"get_fullScreenHeight",get_fullScreenWidth:"get_fullScreenWidth",set_quality:"set_quality",get_quality:"get_quality",set_showDefaultContextMenu:"set_showDefaultContextMenu",get_showDefaultContextMenu:"get_showDefaultContextMenu",get_stageHeight:"get_stageHeight",get_stageWidth:"get_stageWidth"})
});
flash.display._Stage = {}
flash.display._Stage.TouchInfo = function() {
	this.touchOverObjects = [];
};
$hxClasses["flash.display._Stage.TouchInfo"] = flash.display._Stage.TouchInfo;
flash.display._Stage.TouchInfo.__name__ = ["flash","display","_Stage","TouchInfo"];
flash.display._Stage.TouchInfo.prototype = {
	touchOverObjects: null
	,__class__: flash.display._Stage.TouchInfo
}
flash.display.StageAlign = $hxClasses["flash.display.StageAlign"] = { __ename__ : true, __constructs__ : ["TOP_RIGHT","TOP_LEFT","TOP","RIGHT","LEFT","BOTTOM_RIGHT","BOTTOM_LEFT","BOTTOM"] }
flash.display.StageAlign.TOP_RIGHT = ["TOP_RIGHT",0];
flash.display.StageAlign.TOP_RIGHT.toString = $estr;
flash.display.StageAlign.TOP_RIGHT.__enum__ = flash.display.StageAlign;
flash.display.StageAlign.TOP_LEFT = ["TOP_LEFT",1];
flash.display.StageAlign.TOP_LEFT.toString = $estr;
flash.display.StageAlign.TOP_LEFT.__enum__ = flash.display.StageAlign;
flash.display.StageAlign.TOP = ["TOP",2];
flash.display.StageAlign.TOP.toString = $estr;
flash.display.StageAlign.TOP.__enum__ = flash.display.StageAlign;
flash.display.StageAlign.RIGHT = ["RIGHT",3];
flash.display.StageAlign.RIGHT.toString = $estr;
flash.display.StageAlign.RIGHT.__enum__ = flash.display.StageAlign;
flash.display.StageAlign.LEFT = ["LEFT",4];
flash.display.StageAlign.LEFT.toString = $estr;
flash.display.StageAlign.LEFT.__enum__ = flash.display.StageAlign;
flash.display.StageAlign.BOTTOM_RIGHT = ["BOTTOM_RIGHT",5];
flash.display.StageAlign.BOTTOM_RIGHT.toString = $estr;
flash.display.StageAlign.BOTTOM_RIGHT.__enum__ = flash.display.StageAlign;
flash.display.StageAlign.BOTTOM_LEFT = ["BOTTOM_LEFT",6];
flash.display.StageAlign.BOTTOM_LEFT.toString = $estr;
flash.display.StageAlign.BOTTOM_LEFT.__enum__ = flash.display.StageAlign;
flash.display.StageAlign.BOTTOM = ["BOTTOM",7];
flash.display.StageAlign.BOTTOM.toString = $estr;
flash.display.StageAlign.BOTTOM.__enum__ = flash.display.StageAlign;
flash.display.StageDisplayState = $hxClasses["flash.display.StageDisplayState"] = { __ename__ : true, __constructs__ : ["NORMAL","FULL_SCREEN","FULL_SCREEN_INTERACTIVE"] }
flash.display.StageDisplayState.NORMAL = ["NORMAL",0];
flash.display.StageDisplayState.NORMAL.toString = $estr;
flash.display.StageDisplayState.NORMAL.__enum__ = flash.display.StageDisplayState;
flash.display.StageDisplayState.FULL_SCREEN = ["FULL_SCREEN",1];
flash.display.StageDisplayState.FULL_SCREEN.toString = $estr;
flash.display.StageDisplayState.FULL_SCREEN.__enum__ = flash.display.StageDisplayState;
flash.display.StageDisplayState.FULL_SCREEN_INTERACTIVE = ["FULL_SCREEN_INTERACTIVE",2];
flash.display.StageDisplayState.FULL_SCREEN_INTERACTIVE.toString = $estr;
flash.display.StageDisplayState.FULL_SCREEN_INTERACTIVE.__enum__ = flash.display.StageDisplayState;
flash.display.StageQuality = function() { }
$hxClasses["flash.display.StageQuality"] = flash.display.StageQuality;
flash.display.StageQuality.__name__ = ["flash","display","StageQuality"];
flash.display.StageScaleMode = $hxClasses["flash.display.StageScaleMode"] = { __ename__ : true, __constructs__ : ["SHOW_ALL","NO_SCALE","NO_BORDER","EXACT_FIT"] }
flash.display.StageScaleMode.SHOW_ALL = ["SHOW_ALL",0];
flash.display.StageScaleMode.SHOW_ALL.toString = $estr;
flash.display.StageScaleMode.SHOW_ALL.__enum__ = flash.display.StageScaleMode;
flash.display.StageScaleMode.NO_SCALE = ["NO_SCALE",1];
flash.display.StageScaleMode.NO_SCALE.toString = $estr;
flash.display.StageScaleMode.NO_SCALE.__enum__ = flash.display.StageScaleMode;
flash.display.StageScaleMode.NO_BORDER = ["NO_BORDER",2];
flash.display.StageScaleMode.NO_BORDER.toString = $estr;
flash.display.StageScaleMode.NO_BORDER.__enum__ = flash.display.StageScaleMode;
flash.display.StageScaleMode.EXACT_FIT = ["EXACT_FIT",3];
flash.display.StageScaleMode.EXACT_FIT.toString = $estr;
flash.display.StageScaleMode.EXACT_FIT.__enum__ = flash.display.StageScaleMode;
flash.errors = {}
flash.errors.Error = function(message,id) {
	if(id == null) id = 0;
	if(message == null) message = "";
	this.message = message;
	this.errorID = id;
};
$hxClasses["flash.errors.Error"] = flash.errors.Error;
flash.errors.Error.__name__ = ["flash","errors","Error"];
flash.errors.Error.prototype = {
	toString: function() {
		if(this.message != null) return this.message; else return "Error";
	}
	,getStackTrace: function() {
		return haxe.CallStack.toString(haxe.CallStack.exceptionStack());
	}
	,name: null
	,message: null
	,errorID: null
	,__class__: flash.errors.Error
}
flash.errors.IOError = function(message) {
	if(message == null) message = "";
	flash.errors.Error.call(this,message);
};
$hxClasses["flash.errors.IOError"] = flash.errors.IOError;
flash.errors.IOError.__name__ = ["flash","errors","IOError"];
flash.errors.IOError.__super__ = flash.errors.Error;
flash.errors.IOError.prototype = $extend(flash.errors.Error.prototype,{
	__class__: flash.errors.IOError
});
flash.errors.SecurityError = function(inMessage) {
	if(inMessage == null) inMessage = "";
	flash.errors.Error.call(this,inMessage,0);
};
$hxClasses["flash.errors.SecurityError"] = flash.errors.SecurityError;
flash.errors.SecurityError.__name__ = ["flash","errors","SecurityError"];
flash.errors.SecurityError.__super__ = flash.errors.Error;
flash.errors.SecurityError.prototype = $extend(flash.errors.Error.prototype,{
	__class__: flash.errors.SecurityError
});
flash.events.TextEvent = function(type,bubbles,cancelable,text) {
	if(text == null) text = "";
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	flash.events.Event.call(this,type,bubbles,cancelable);
	this.text = text;
};
$hxClasses["flash.events.TextEvent"] = flash.events.TextEvent;
flash.events.TextEvent.__name__ = ["flash","events","TextEvent"];
flash.events.TextEvent.__super__ = flash.events.Event;
flash.events.TextEvent.prototype = $extend(flash.events.Event.prototype,{
	text: null
	,__class__: flash.events.TextEvent
});
flash.events.ErrorEvent = function(type,bubbles,cancelable,text,id) {
	if(id == null) id = 0;
	flash.events.TextEvent.call(this,type,bubbles,cancelable);
	this.text = text;
	this.errorID = id;
};
$hxClasses["flash.events.ErrorEvent"] = flash.events.ErrorEvent;
flash.events.ErrorEvent.__name__ = ["flash","events","ErrorEvent"];
flash.events.ErrorEvent.__super__ = flash.events.TextEvent;
flash.events.ErrorEvent.prototype = $extend(flash.events.TextEvent.prototype,{
	errorID: null
	,__class__: flash.events.ErrorEvent
});
flash.events.Listener = function(inListener,inUseCapture,inPriority) {
	this.mListner = inListener;
	this.mUseCapture = inUseCapture;
	this.mPriority = inPriority;
	this.mID = flash.events.Listener.sIDs++;
};
$hxClasses["flash.events.Listener"] = flash.events.Listener;
flash.events.Listener.__name__ = ["flash","events","Listener"];
flash.events.Listener.prototype = {
	Is: function(inListener,inCapture) {
		return Reflect.compareMethods(this.mListner,inListener) && this.mUseCapture == inCapture;
	}
	,dispatchEvent: function(event) {
		this.mListner(event);
	}
	,mUseCapture: null
	,mPriority: null
	,mListner: null
	,mID: null
	,__class__: flash.events.Listener
}
flash.events.EventPhase = function() { }
$hxClasses["flash.events.EventPhase"] = flash.events.EventPhase;
flash.events.EventPhase.__name__ = ["flash","events","EventPhase"];
flash.events.FocusEvent = function(type,bubbles,cancelable,inObject,inShiftKey,inKeyCode) {
	if(inKeyCode == null) inKeyCode = 0;
	if(inShiftKey == null) inShiftKey = false;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	flash.events.Event.call(this,type,bubbles,cancelable);
	this.keyCode = inKeyCode;
	this.shiftKey = inShiftKey == null?false:inShiftKey;
	this.target = inObject;
};
$hxClasses["flash.events.FocusEvent"] = flash.events.FocusEvent;
flash.events.FocusEvent.__name__ = ["flash","events","FocusEvent"];
flash.events.FocusEvent.__super__ = flash.events.Event;
flash.events.FocusEvent.prototype = $extend(flash.events.Event.prototype,{
	shiftKey: null
	,relatedObject: null
	,keyCode: null
	,__class__: flash.events.FocusEvent
});
flash.events.HTTPStatusEvent = function(type,bubbles,cancelable,status) {
	if(status == null) status = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	this.status = status;
	flash.events.Event.call(this,type,bubbles,cancelable);
};
$hxClasses["flash.events.HTTPStatusEvent"] = flash.events.HTTPStatusEvent;
flash.events.HTTPStatusEvent.__name__ = ["flash","events","HTTPStatusEvent"];
flash.events.HTTPStatusEvent.__super__ = flash.events.Event;
flash.events.HTTPStatusEvent.prototype = $extend(flash.events.Event.prototype,{
	status: null
	,responseURL: null
	,responseHeaders: null
	,__class__: flash.events.HTTPStatusEvent
});
flash.events.IOErrorEvent = function(type,bubbles,cancelable,inText) {
	if(inText == null) inText = "";
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	flash.events.Event.call(this,type,bubbles,cancelable);
	this.text = inText;
};
$hxClasses["flash.events.IOErrorEvent"] = flash.events.IOErrorEvent;
flash.events.IOErrorEvent.__name__ = ["flash","events","IOErrorEvent"];
flash.events.IOErrorEvent.__super__ = flash.events.Event;
flash.events.IOErrorEvent.prototype = $extend(flash.events.Event.prototype,{
	text: null
	,__class__: flash.events.IOErrorEvent
});
flash.events.KeyboardEvent = function(type,bubbles,cancelable,inCharCode,inKeyCode,inKeyLocation,inCtrlKey,inAltKey,inShiftKey,controlKeyValue,commandKeyValue) {
	if(commandKeyValue == null) commandKeyValue = false;
	if(controlKeyValue == null) controlKeyValue = false;
	if(inShiftKey == null) inShiftKey = false;
	if(inAltKey == null) inAltKey = false;
	if(inCtrlKey == null) inCtrlKey = false;
	if(inKeyLocation == null) inKeyLocation = 0;
	if(inKeyCode == null) inKeyCode = 0;
	if(inCharCode == null) inCharCode = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	flash.events.Event.call(this,type,bubbles,cancelable);
	this.altKey = inAltKey == null?false:inAltKey;
	this.charCode = inCharCode == null?0:inCharCode;
	this.ctrlKey = inCtrlKey == null?false:inCtrlKey;
	this.commandKey = commandKeyValue;
	this.controlKey = controlKeyValue;
	this.keyCode = inKeyCode;
	this.keyLocation = inKeyLocation == null?0:inKeyLocation;
	this.shiftKey = inShiftKey == null?false:inShiftKey;
};
$hxClasses["flash.events.KeyboardEvent"] = flash.events.KeyboardEvent;
flash.events.KeyboardEvent.__name__ = ["flash","events","KeyboardEvent"];
flash.events.KeyboardEvent.__super__ = flash.events.Event;
flash.events.KeyboardEvent.prototype = $extend(flash.events.Event.prototype,{
	shiftKey: null
	,keyLocation: null
	,keyCode: null
	,controlKey: null
	,commandKey: null
	,ctrlKey: null
	,charCode: null
	,altKey: null
	,__class__: flash.events.KeyboardEvent
});
flash.events.ProgressEvent = function(type,bubbles,cancelable,bytesLoaded,bytesTotal) {
	if(bytesTotal == null) bytesTotal = 0;
	if(bytesLoaded == null) bytesLoaded = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	flash.events.Event.call(this,type,bubbles,cancelable);
	this.bytesLoaded = bytesLoaded;
	this.bytesTotal = bytesTotal;
};
$hxClasses["flash.events.ProgressEvent"] = flash.events.ProgressEvent;
flash.events.ProgressEvent.__name__ = ["flash","events","ProgressEvent"];
flash.events.ProgressEvent.__super__ = flash.events.Event;
flash.events.ProgressEvent.prototype = $extend(flash.events.Event.prototype,{
	bytesTotal: null
	,bytesLoaded: null
	,__class__: flash.events.ProgressEvent
});
flash.events.SecurityErrorEvent = function(type,bubbles,cancelable,text) {
	if(text == null) text = "";
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	flash.events.ErrorEvent.call(this,type,bubbles,cancelable);
	this.text = text;
};
$hxClasses["flash.events.SecurityErrorEvent"] = flash.events.SecurityErrorEvent;
flash.events.SecurityErrorEvent.__name__ = ["flash","events","SecurityErrorEvent"];
flash.events.SecurityErrorEvent.__super__ = flash.events.ErrorEvent;
flash.events.SecurityErrorEvent.prototype = $extend(flash.events.ErrorEvent.prototype,{
	__class__: flash.events.SecurityErrorEvent
});
flash.events.TimerEvent = function(type,bubbles,cancelable) {
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	flash.events.Event.call(this,type,bubbles,cancelable);
};
$hxClasses["flash.events.TimerEvent"] = flash.events.TimerEvent;
flash.events.TimerEvent.__name__ = ["flash","events","TimerEvent"];
flash.events.TimerEvent.__super__ = flash.events.Event;
flash.events.TimerEvent.prototype = $extend(flash.events.Event.prototype,{
	updateAfterEvent: function() {
	}
	,__class__: flash.events.TimerEvent
});
flash.events.TouchEvent = function(type,bubbles,cancelable,localX,localY,relatedObject,ctrlKey,altKey,shiftKey,buttonDown,delta,commandKey,clickCount) {
	if(clickCount == null) clickCount = 0;
	if(commandKey == null) commandKey = false;
	if(delta == null) delta = 0;
	if(buttonDown == null) buttonDown = false;
	if(shiftKey == null) shiftKey = false;
	if(altKey == null) altKey = false;
	if(ctrlKey == null) ctrlKey = false;
	if(localY == null) localY = 0;
	if(localX == null) localX = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = true;
	flash.events.Event.call(this,type,bubbles,cancelable);
	this.shiftKey = shiftKey;
	this.altKey = altKey;
	this.ctrlKey = ctrlKey;
	this.bubbles = bubbles;
	this.relatedObject = relatedObject;
	this.delta = delta;
	this.localX = localX;
	this.localY = localY;
	this.buttonDown = buttonDown;
	this.commandKey = commandKey;
	this.touchPointID = 0;
	this.isPrimaryTouchPoint = true;
};
$hxClasses["flash.events.TouchEvent"] = flash.events.TouchEvent;
flash.events.TouchEvent.__name__ = ["flash","events","TouchEvent"];
flash.events.TouchEvent.__create = function(type,event,touch,local,target) {
	var evt = new flash.events.TouchEvent(type,true,false,local.x,local.y,null,event.ctrlKey,event.altKey,event.shiftKey,false,0,null,0);
	evt.stageX = flash.Lib.get_current().get_stage().get_mouseX();
	evt.stageY = flash.Lib.get_current().get_stage().get_mouseY();
	evt.target = target;
	return evt;
}
flash.events.TouchEvent.__super__ = flash.events.Event;
flash.events.TouchEvent.prototype = $extend(flash.events.Event.prototype,{
	__createSimilar: function(type,related,targ) {
		var result = new flash.events.TouchEvent(type,this.bubbles,this.cancelable,this.localX,this.localY,related == null?this.relatedObject:related,this.ctrlKey,this.altKey,this.shiftKey,this.buttonDown,this.delta,this.commandKey);
		result.touchPointID = this.touchPointID;
		result.isPrimaryTouchPoint = this.isPrimaryTouchPoint;
		if(targ != null) result.target = targ;
		return result;
	}
	,touchPointID: null
	,stageY: null
	,stageX: null
	,shiftKey: null
	,relatedObject: null
	,localY: null
	,localX: null
	,isPrimaryTouchPoint: null
	,delta: null
	,ctrlKey: null
	,commandKey: null
	,buttonDown: null
	,altKey: null
	,__class__: flash.events.TouchEvent
});
flash.filters = {}
flash.filters.BitmapFilter = function(inType) {
	this._mType = inType;
};
$hxClasses["flash.filters.BitmapFilter"] = flash.filters.BitmapFilter;
flash.filters.BitmapFilter.__name__ = ["flash","filters","BitmapFilter"];
flash.filters.BitmapFilter.prototype = {
	__applyFilter: function(surface,rect,refreshCache) {
		if(refreshCache == null) refreshCache = false;
	}
	,__preFilter: function(surface) {
	}
	,clone: function() {
		return new flash.filters.BitmapFilter(this._mType);
	}
	,___cached: null
	,_mType: null
	,__class__: flash.filters.BitmapFilter
}
flash.filters.DropShadowFilter = function(in_distance,in_angle,in_color,in_alpha,in_blurX,in_blurY,in_strength,in_quality,in_inner,in_knockout,in_hideObject) {
	if(in_hideObject == null) in_hideObject = false;
	if(in_knockout == null) in_knockout = false;
	if(in_inner == null) in_inner = false;
	if(in_quality == null) in_quality = 1;
	if(in_strength == null) in_strength = 1.0;
	if(in_blurY == null) in_blurY = 4.0;
	if(in_blurX == null) in_blurX = 4.0;
	if(in_alpha == null) in_alpha = 1.0;
	if(in_color == null) in_color = 0;
	if(in_angle == null) in_angle = 45.0;
	if(in_distance == null) in_distance = 4.0;
	flash.filters.BitmapFilter.call(this,"DropShadowFilter");
	this.distance = in_distance;
	this.angle = in_angle;
	this.color = in_color;
	this.alpha = in_alpha;
	this.blurX = in_blurX;
	this.blurY = in_blurX;
	this.strength = in_strength;
	this.quality = in_quality;
	this.inner = in_inner;
	this.knockout = in_knockout;
	this.hideObject = in_hideObject;
	this.___cached = false;
};
$hxClasses["flash.filters.DropShadowFilter"] = flash.filters.DropShadowFilter;
flash.filters.DropShadowFilter.__name__ = ["flash","filters","DropShadowFilter"];
flash.filters.DropShadowFilter.__super__ = flash.filters.BitmapFilter;
flash.filters.DropShadowFilter.prototype = $extend(flash.filters.BitmapFilter.prototype,{
	__applyFilter: function(surface,rect,refreshCache) {
		if(refreshCache == null) refreshCache = false;
		if(!this.___cached || refreshCache) {
			var distanceX = this.distance * Math.sin(2 * Math.PI * this.angle / 360.0);
			var distanceY = this.distance * Math.cos(2 * Math.PI * this.angle / 360.0);
			var blurRadius = Math.max(this.blurX,this.blurY);
			var context = surface.getContext("2d");
			context.shadowOffsetX = distanceX;
			context.shadowOffsetY = distanceY;
			context.shadowBlur = blurRadius;
			context.shadowColor = "rgba(" + (this.color >> 16 & 255) + "," + (this.color >> 8 & 255) + "," + (this.color & 255) + "," + this.alpha + ")";
			this.___cached = true;
		}
	}
	,clone: function() {
		return new flash.filters.DropShadowFilter(this.distance,this.angle,this.color,this.alpha,this.blurX,this.blurY,this.strength,this.quality,this.inner,this.knockout,this.hideObject);
	}
	,strength: null
	,quality: null
	,knockout: null
	,inner: null
	,hideObject: null
	,distance: null
	,color: null
	,blurY: null
	,blurX: null
	,angle: null
	,alpha: null
	,__class__: flash.filters.DropShadowFilter
});
flash.geom = {}
flash.geom.ColorTransform = function(inRedMultiplier,inGreenMultiplier,inBlueMultiplier,inAlphaMultiplier,inRedOffset,inGreenOffset,inBlueOffset,inAlphaOffset) {
	if(inAlphaOffset == null) inAlphaOffset = 0;
	if(inBlueOffset == null) inBlueOffset = 0;
	if(inGreenOffset == null) inGreenOffset = 0;
	if(inRedOffset == null) inRedOffset = 0;
	if(inAlphaMultiplier == null) inAlphaMultiplier = 1;
	if(inBlueMultiplier == null) inBlueMultiplier = 1;
	if(inGreenMultiplier == null) inGreenMultiplier = 1;
	if(inRedMultiplier == null) inRedMultiplier = 1;
	this.redMultiplier = inRedMultiplier == null?1.0:inRedMultiplier;
	this.greenMultiplier = inGreenMultiplier == null?1.0:inGreenMultiplier;
	this.blueMultiplier = inBlueMultiplier == null?1.0:inBlueMultiplier;
	this.alphaMultiplier = inAlphaMultiplier == null?1.0:inAlphaMultiplier;
	this.redOffset = inRedOffset == null?0.0:inRedOffset;
	this.greenOffset = inGreenOffset == null?0.0:inGreenOffset;
	this.blueOffset = inBlueOffset == null?0.0:inBlueOffset;
	this.alphaOffset = inAlphaOffset == null?0.0:inAlphaOffset;
};
$hxClasses["flash.geom.ColorTransform"] = flash.geom.ColorTransform;
flash.geom.ColorTransform.__name__ = ["flash","geom","ColorTransform"];
flash.geom.ColorTransform.prototype = {
	set_color: function(value) {
		this.redOffset = value >> 16 & 255;
		this.greenOffset = value >> 8 & 255;
		this.blueOffset = value & 255;
		this.redMultiplier = 0;
		this.greenMultiplier = 0;
		this.blueMultiplier = 0;
		return this.get_color();
	}
	,get_color: function() {
		return (this.redOffset | 0) << 16 | (this.greenOffset | 0) << 8 | (this.blueOffset | 0);
	}
	,concat: function(second) {
		this.redMultiplier += second.redMultiplier;
		this.greenMultiplier += second.greenMultiplier;
		this.blueMultiplier += second.blueMultiplier;
		this.alphaMultiplier += second.alphaMultiplier;
	}
	,redOffset: null
	,redMultiplier: null
	,greenOffset: null
	,greenMultiplier: null
	,blueOffset: null
	,blueMultiplier: null
	,alphaOffset: null
	,alphaMultiplier: null
	,__class__: flash.geom.ColorTransform
	,__properties__: {set_color:"set_color",get_color:"get_color"}
}
flash.geom.Matrix = function(in_a,in_b,in_c,in_d,in_tx,in_ty) {
	if(in_ty == null) in_ty = 0;
	if(in_tx == null) in_tx = 0;
	if(in_d == null) in_d = 1;
	if(in_c == null) in_c = 0;
	if(in_b == null) in_b = 0;
	if(in_a == null) in_a = 1;
	this.a = in_a;
	this.b = in_b;
	this.c = in_c;
	this.d = in_d;
	this.set_tx(in_tx);
	this.set_ty(in_ty);
	this._sx = 1.0;
	this._sy = 1.0;
};
$hxClasses["flash.geom.Matrix"] = flash.geom.Matrix;
flash.geom.Matrix.__name__ = ["flash","geom","Matrix"];
flash.geom.Matrix.prototype = {
	set_ty: function(inValue) {
		this.ty = inValue;
		return this.ty;
	}
	,set_tx: function(inValue) {
		this.tx = inValue;
		return this.tx;
	}
	,__translateTransformed: function(inPos) {
		this.set_tx(inPos.x * this.a + inPos.y * this.c + this.tx);
		this.set_ty(inPos.x * this.b + inPos.y * this.d + this.ty);
		this.a = Math.round(this.a * 1000) / 1000;
		this.b = Math.round(this.b * 1000) / 1000;
		this.c = Math.round(this.c * 1000) / 1000;
		this.d = Math.round(this.d * 1000) / 1000;
		this.set_tx(Math.round(this.tx * 10) / 10);
		this.set_ty(Math.round(this.ty * 10) / 10);
	}
	,__transformY: function(inPos) {
		return inPos.x * this.b + inPos.y * this.d + this.ty;
	}
	,__transformX: function(inPos) {
		return inPos.x * this.a + inPos.y * this.c + this.tx;
	}
	,translate: function(inDX,inDY) {
		var m = new flash.geom.Matrix();
		m.set_tx(inDX);
		m.set_ty(inDY);
		this.concat(m);
	}
	,transformPoint: function(inPos) {
		return new flash.geom.Point(inPos.x * this.a + inPos.y * this.c + this.tx,inPos.x * this.b + inPos.y * this.d + this.ty);
	}
	,toString: function() {
		return "matrix(" + this.a + ", " + this.b + ", " + this.c + ", " + this.d + ", " + this.tx + ", " + this.ty + ")";
	}
	,toMozString: function() {
		return "matrix(" + this.a + ", " + this.b + ", " + this.c + ", " + this.d + ", " + this.tx + "px, " + this.ty + "px)";
	}
	,to3DString: function() {
		return "matrix3d(" + this.a + ", " + this.b + ", " + "0, 0, " + this.c + ", " + this.d + ", " + "0, 0, 0, 0, 1, 0, " + this.tx + ", " + this.ty + ", " + "0, 1" + ")";
	}
	,setRotation: function(inTheta,inScale) {
		if(inScale == null) inScale = 1;
		var scale = inScale;
		this.a = Math.cos(inTheta) * scale;
		this.c = Math.sin(inTheta) * scale;
		this.b = -this.c;
		this.d = this.a;
		this.a = Math.round(this.a * 1000) / 1000;
		this.b = Math.round(this.b * 1000) / 1000;
		this.c = Math.round(this.c * 1000) / 1000;
		this.d = Math.round(this.d * 1000) / 1000;
		this.set_tx(Math.round(this.tx * 10) / 10);
		this.set_ty(Math.round(this.ty * 10) / 10);
	}
	,scale: function(inSX,inSY) {
		this._sx = inSX;
		this._sy = inSY;
		this.a *= inSX;
		this.b *= inSY;
		this.c *= inSX;
		this.d *= inSY;
		var _g = this;
		_g.set_tx(_g.tx * inSX);
		var _g = this;
		_g.set_ty(_g.ty * inSY);
		this.a = Math.round(this.a * 1000) / 1000;
		this.b = Math.round(this.b * 1000) / 1000;
		this.c = Math.round(this.c * 1000) / 1000;
		this.d = Math.round(this.d * 1000) / 1000;
		this.set_tx(Math.round(this.tx * 10) / 10);
		this.set_ty(Math.round(this.ty * 10) / 10);
	}
	,rotate: function(inTheta) {
		var cos = Math.cos(inTheta);
		var sin = Math.sin(inTheta);
		var a1 = this.a * cos - this.b * sin;
		this.b = this.a * sin + this.b * cos;
		this.a = a1;
		var c1 = this.c * cos - this.d * sin;
		this.d = this.c * sin + this.d * cos;
		this.c = c1;
		var tx1 = this.tx * cos - this.ty * sin;
		this.set_ty(this.tx * sin + this.ty * cos);
		this.set_tx(tx1);
		this.a = Math.round(this.a * 1000) / 1000;
		this.b = Math.round(this.b * 1000) / 1000;
		this.c = Math.round(this.c * 1000) / 1000;
		this.d = Math.round(this.d * 1000) / 1000;
		this.set_tx(Math.round(this.tx * 10) / 10);
		this.set_ty(Math.round(this.ty * 10) / 10);
	}
	,mult: function(m) {
		var result = this.clone();
		result.concat(m);
		return result;
	}
	,invert: function() {
		var norm = this.a * this.d - this.b * this.c;
		if(norm == 0) {
			this.a = this.b = this.c = this.d = 0;
			this.set_tx(-this.tx);
			this.set_ty(-this.ty);
		} else {
			norm = 1.0 / norm;
			var a1 = this.d * norm;
			this.d = this.a * norm;
			this.a = a1;
			this.b *= -norm;
			this.c *= -norm;
			var tx1 = -this.a * this.tx - this.c * this.ty;
			this.set_ty(-this.b * this.tx - this.d * this.ty);
			this.set_tx(tx1);
		}
		this._sx /= this._sx;
		this._sy /= this._sy;
		this.a = Math.round(this.a * 1000) / 1000;
		this.b = Math.round(this.b * 1000) / 1000;
		this.c = Math.round(this.c * 1000) / 1000;
		this.d = Math.round(this.d * 1000) / 1000;
		this.set_tx(Math.round(this.tx * 10) / 10);
		this.set_ty(Math.round(this.ty * 10) / 10);
		return this;
	}
	,identity: function() {
		this.a = 1;
		this.b = 0;
		this.c = 0;
		this.d = 1;
		this.set_tx(0);
		this.set_ty(0);
		this._sx = 1.0;
		this._sy = 1.0;
	}
	,createGradientBox: function(in_width,in_height,rotation,in_tx,in_ty) {
		if(in_ty == null) in_ty = 0;
		if(in_tx == null) in_tx = 0;
		if(rotation == null) rotation = 0;
		this.a = in_width / 1638.4;
		this.d = in_height / 1638.4;
		if(rotation != null && rotation != 0.0) {
			var cos = Math.cos(rotation);
			var sin = Math.sin(rotation);
			this.b = sin * this.d;
			this.c = -sin * this.a;
			this.a *= cos;
			this.d *= cos;
		} else {
			this.b = 0;
			this.c = 0;
		}
		this.set_tx(in_tx != null?in_tx + in_width / 2:in_width / 2);
		this.set_ty(in_ty != null?in_ty + in_height / 2:in_height / 2);
	}
	,copy: function(m) {
		this.a = m.a;
		this.b = m.b;
		this.c = m.c;
		this.d = m.d;
		this.set_tx(m.tx);
		this.set_ty(m.ty);
		this._sx = m._sx;
		this._sy = m._sy;
	}
	,concat: function(m) {
		var a1 = this.a * m.a + this.b * m.c;
		this.b = this.a * m.b + this.b * m.d;
		this.a = a1;
		var c1 = this.c * m.a + this.d * m.c;
		this.d = this.c * m.b + this.d * m.d;
		this.c = c1;
		var tx1 = this.tx * m.a + this.ty * m.c + m.tx;
		this.set_ty(this.tx * m.b + this.ty * m.d + m.ty);
		this.set_tx(tx1);
		this._sx *= m._sx;
		this._sy *= m._sy;
		this.a = Math.round(this.a * 1000) / 1000;
		this.b = Math.round(this.b * 1000) / 1000;
		this.c = Math.round(this.c * 1000) / 1000;
		this.d = Math.round(this.d * 1000) / 1000;
		this.set_tx(Math.round(this.tx * 10) / 10);
		this.set_ty(Math.round(this.ty * 10) / 10);
	}
	,clone: function() {
		var m = new flash.geom.Matrix(this.a,this.b,this.c,this.d,this.tx,this.ty);
		m._sx = this._sx;
		m._sy = this._sy;
		return m;
	}
	,cleanValues: function() {
		this.a = Math.round(this.a * 1000) / 1000;
		this.b = Math.round(this.b * 1000) / 1000;
		this.c = Math.round(this.c * 1000) / 1000;
		this.d = Math.round(this.d * 1000) / 1000;
		this.set_tx(Math.round(this.tx * 10) / 10);
		this.set_ty(Math.round(this.ty * 10) / 10);
	}
	,_sy: null
	,_sx: null
	,ty: null
	,tx: null
	,d: null
	,c: null
	,b: null
	,a: null
	,__class__: flash.geom.Matrix
	,__properties__: {set_tx:"set_tx",set_ty:"set_ty"}
}
flash.geom.Point = function(inX,inY) {
	if(inY == null) inY = 0;
	if(inX == null) inX = 0;
	this.x = inX;
	this.y = inY;
};
$hxClasses["flash.geom.Point"] = flash.geom.Point;
flash.geom.Point.__name__ = ["flash","geom","Point"];
flash.geom.Point.distance = function(pt1,pt2) {
	var dx = pt1.x - pt2.x;
	var dy = pt1.y - pt2.y;
	return Math.sqrt(dx * dx + dy * dy);
}
flash.geom.Point.interpolate = function(pt1,pt2,f) {
	return new flash.geom.Point(pt2.x + f * (pt1.x - pt2.x),pt2.y + f * (pt1.y - pt2.y));
}
flash.geom.Point.polar = function(len,angle) {
	return new flash.geom.Point(len * Math.cos(angle),len * Math.sin(angle));
}
flash.geom.Point.prototype = {
	get_length: function() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}
	,subtract: function(v) {
		return new flash.geom.Point(this.x - v.x,this.y - v.y);
	}
	,setTo: function(xa,ya) {
		this.x = xa;
		this.y = ya;
	}
	,offset: function(dx,dy) {
		this.x += dx;
		this.y += dy;
	}
	,normalize: function(thickness) {
		if(this.x == 0 && this.y == 0) return; else {
			var norm = thickness / Math.sqrt(this.x * this.x + this.y * this.y);
			this.x *= norm;
			this.y *= norm;
		}
	}
	,equals: function(toCompare) {
		return toCompare.x == this.x && toCompare.y == this.y;
	}
	,clone: function() {
		return new flash.geom.Point(this.x,this.y);
	}
	,add: function(v) {
		return new flash.geom.Point(v.x + this.x,v.y + this.y);
	}
	,y: null
	,x: null
	,length: null
	,__class__: flash.geom.Point
	,__properties__: {get_length:"get_length"}
}
flash.geom.Rectangle = function(inX,inY,inWidth,inHeight) {
	if(inHeight == null) inHeight = 0;
	if(inWidth == null) inWidth = 0;
	if(inY == null) inY = 0;
	if(inX == null) inX = 0;
	this.x = inX;
	this.y = inY;
	this.width = inWidth;
	this.height = inHeight;
};
$hxClasses["flash.geom.Rectangle"] = flash.geom.Rectangle;
flash.geom.Rectangle.__name__ = ["flash","geom","Rectangle"];
flash.geom.Rectangle.prototype = {
	set_topLeft: function(p) {
		this.x = p.x;
		this.y = p.y;
		return p.clone();
	}
	,get_topLeft: function() {
		return new flash.geom.Point(this.x,this.y);
	}
	,set_top: function(t) {
		this.height -= t - this.y;
		this.y = t;
		return t;
	}
	,get_top: function() {
		return this.y;
	}
	,set_size: function(p) {
		this.width = p.x;
		this.height = p.y;
		return p.clone();
	}
	,get_size: function() {
		return new flash.geom.Point(this.width,this.height);
	}
	,set_right: function(r) {
		this.width = r - this.x;
		return r;
	}
	,get_right: function() {
		return this.x + this.width;
	}
	,set_left: function(l) {
		this.width -= l - this.x;
		this.x = l;
		return l;
	}
	,get_left: function() {
		return this.x;
	}
	,set_bottomRight: function(p) {
		this.width = p.x - this.x;
		this.height = p.y - this.y;
		return p.clone();
	}
	,get_bottomRight: function() {
		return new flash.geom.Point(this.x + this.width,this.y + this.height);
	}
	,set_bottom: function(b) {
		this.height = b - this.y;
		return b;
	}
	,get_bottom: function() {
		return this.y + this.height;
	}
	,union: function(toUnion) {
		var x0 = this.x > toUnion.x?toUnion.x:this.x;
		var x1 = this.get_right() < toUnion.get_right()?toUnion.get_right():this.get_right();
		var y0 = this.y > toUnion.y?toUnion.y:this.y;
		var y1 = this.get_bottom() < toUnion.get_bottom()?toUnion.get_bottom():this.get_bottom();
		return new flash.geom.Rectangle(x0,y0,x1 - x0,y1 - y0);
	}
	,transform: function(m) {
		var tx0 = m.a * this.x + m.c * this.y;
		var tx1 = tx0;
		var ty0 = m.b * this.x + m.d * this.y;
		var ty1 = tx0;
		var tx = m.a * (this.x + this.width) + m.c * this.y;
		var ty = m.b * (this.x + this.width) + m.d * this.y;
		if(tx < tx0) tx0 = tx;
		if(ty < ty0) ty0 = ty;
		if(tx > tx1) tx1 = tx;
		if(ty > ty1) ty1 = ty;
		tx = m.a * (this.x + this.width) + m.c * (this.y + this.height);
		ty = m.b * (this.x + this.width) + m.d * (this.y + this.height);
		if(tx < tx0) tx0 = tx;
		if(ty < ty0) ty0 = ty;
		if(tx > tx1) tx1 = tx;
		if(ty > ty1) ty1 = ty;
		tx = m.a * this.x + m.c * (this.y + this.height);
		ty = m.b * this.x + m.d * (this.y + this.height);
		if(tx < tx0) tx0 = tx;
		if(ty < ty0) ty0 = ty;
		if(tx > tx1) tx1 = tx;
		if(ty > ty1) ty1 = ty;
		return new flash.geom.Rectangle(tx0 + m.tx,ty0 + m.ty,tx1 - tx0,ty1 - ty0);
	}
	,setEmpty: function() {
		this.x = this.y = this.width = this.height = 0;
	}
	,offsetPoint: function(point) {
		this.x += point.x;
		this.y += point.y;
	}
	,offset: function(dx,dy) {
		this.x += dx;
		this.y += dy;
	}
	,isEmpty: function() {
		return this.width <= 0 || this.height <= 0;
	}
	,intersects: function(toIntersect) {
		var x0 = this.x < toIntersect.x?toIntersect.x:this.x;
		var x1 = this.get_right() > toIntersect.get_right()?toIntersect.get_right():this.get_right();
		if(x1 <= x0) return false;
		var y0 = this.y < toIntersect.y?toIntersect.y:this.y;
		var y1 = this.get_bottom() > toIntersect.get_bottom()?toIntersect.get_bottom():this.get_bottom();
		return y1 > y0;
	}
	,intersection: function(toIntersect) {
		var x0 = this.x < toIntersect.x?toIntersect.x:this.x;
		var x1 = this.get_right() > toIntersect.get_right()?toIntersect.get_right():this.get_right();
		if(x1 <= x0) return new flash.geom.Rectangle();
		var y0 = this.y < toIntersect.y?toIntersect.y:this.y;
		var y1 = this.get_bottom() > toIntersect.get_bottom()?toIntersect.get_bottom():this.get_bottom();
		if(y1 <= y0) return new flash.geom.Rectangle();
		return new flash.geom.Rectangle(x0,y0,x1 - x0,y1 - y0);
	}
	,inflatePoint: function(point) {
		this.inflate(point.x,point.y);
	}
	,inflate: function(dx,dy) {
		this.x -= dx;
		this.width += dx * 2;
		this.y -= dy;
		this.height += dy * 2;
	}
	,extendBounds: function(r) {
		var dx = this.x - r.x;
		if(dx > 0) {
			this.x -= dx;
			this.width += dx;
		}
		var dy = this.y - r.y;
		if(dy > 0) {
			this.y -= dy;
			this.height += dy;
		}
		if(r.get_right() > this.get_right()) this.set_right(r.get_right());
		if(r.get_bottom() > this.get_bottom()) this.set_bottom(r.get_bottom());
	}
	,equals: function(toCompare) {
		return this.x == toCompare.x && this.y == toCompare.y && this.width == toCompare.width && this.height == toCompare.height;
	}
	,containsRect: function(rect) {
		if(rect.width <= 0 || rect.height <= 0) return rect.x > this.x && rect.y > this.y && rect.get_right() < this.get_right() && rect.get_bottom() < this.get_bottom(); else return rect.x >= this.x && rect.y >= this.y && rect.get_right() <= this.get_right() && rect.get_bottom() <= this.get_bottom();
	}
	,containsPoint: function(point) {
		return this.contains(point.x,point.y);
	}
	,contains: function(inX,inY) {
		return inX >= this.x && inY >= this.y && inX < this.get_right() && inY < this.get_bottom();
	}
	,clone: function() {
		return new flash.geom.Rectangle(this.x,this.y,this.width,this.height);
	}
	,y: null
	,x: null
	,width: null
	,height: null
	,__class__: flash.geom.Rectangle
	,__properties__: {set_bottom:"set_bottom",get_bottom:"get_bottom",set_bottomRight:"set_bottomRight",get_bottomRight:"get_bottomRight",set_left:"set_left",get_left:"get_left",set_right:"set_right",get_right:"get_right",set_size:"set_size",get_size:"get_size",set_top:"set_top",get_top:"get_top",set_topLeft:"set_topLeft",get_topLeft:"get_topLeft"}
}
flash.geom.Transform = function(displayObject) {
	if(displayObject == null) throw "Cannot create Transform with no DisplayObject.";
	this._displayObject = displayObject;
	this._matrix = new flash.geom.Matrix();
	this._fullMatrix = new flash.geom.Matrix();
	this.set_colorTransform(new flash.geom.ColorTransform());
};
$hxClasses["flash.geom.Transform"] = flash.geom.Transform;
flash.geom.Transform.__name__ = ["flash","geom","Transform"];
flash.geom.Transform.prototype = {
	get_pixelBounds: function() {
		return this._displayObject.getBounds(null);
	}
	,set_matrix: function(inValue) {
		this._matrix.copy(inValue);
		this._displayObject.__matrixOverridden();
		return this._matrix;
	}
	,get_matrix: function() {
		return this._matrix.clone();
	}
	,get_concatenatedMatrix: function() {
		return this.__getFullMatrix(this._matrix);
	}
	,set_colorTransform: function(inValue) {
		this.colorTransform = inValue;
		return inValue;
	}
	,__setMatrix: function(inValue) {
		this._matrix.copy(inValue);
	}
	,__setFullMatrix: function(inValue) {
		this._fullMatrix.copy(inValue);
		return this._fullMatrix;
	}
	,__getFullMatrix: function(localMatrix) {
		var m;
		if(localMatrix != null) m = localMatrix.mult(this._fullMatrix); else m = this._fullMatrix.clone();
		return m;
	}
	,_matrix: null
	,_fullMatrix: null
	,_displayObject: null
	,concatenatedMatrix: null
	,colorTransform: null
	,__class__: flash.geom.Transform
	,__properties__: {set_colorTransform:"set_colorTransform",get_concatenatedMatrix:"get_concatenatedMatrix",set_matrix:"set_matrix",get_matrix:"get_matrix",get_pixelBounds:"get_pixelBounds"}
}
flash.media = {}
flash.media.Sound = function(stream,ctx) {
	flash.events.EventDispatcher.call(this);
	if(stream != null) this.load(stream,ctx);
};
$hxClasses["flash.media.Sound"] = flash.media.Sound;
flash.media.Sound.__name__ = ["flash","media","Sound"];
flash.media.Sound.canPlayType = function(o) {
	var f, v;
	o = o.toLowerCase();
	if(flash.media.Sound.canPlayMap != null) {
		if(flash.media.Sound.canPlayMap.exists(o)) return flash.media.Sound.canPlayMap.get(o);
	} else flash.media.Sound.canPlayMap = new haxe.ds.StringMap();
	f = flash.media.Sound.getFormatType(o);
	v = new Audio().canPlayType(f) != "no";
	flash.media.Sound.canPlayMap.set(o,v);
	return v;
}
flash.media.Sound.getFormatType = function(o) {
	return o == "mp3"?"audio/mpeg;":o == "ogg"?"audio/ogg; codecs=\"vorbis\"":null;
}
flash.media.Sound.__super__ = flash.events.EventDispatcher;
flash.media.Sound.prototype = $extend(flash.events.EventDispatcher.prototype,{
	get_length: function() {
		return this.component != null?this.component.duration * 1000:0;
	}
	,play: function(ofs,loops,stf) {
		if(loops == null) loops = 0;
		if(ofs == null) ofs = 0;
		var o, i;
		if(this.qCache.length == 0) {
			(o = new flash.media.SoundChannel()).init(this,this.component,loops);
			this.component = this.component.cloneNode(true);
		} else {
			o = this.qCache[0];
			var _g = 0, _g1 = this.qCache;
			while(_g < _g1.length) {
				var v = _g1[_g];
				++_g;
				if(v.component.currentTime * 1000 == ofs) {
					o = v;
					break;
				}
			}
			HxOverrides.remove(this.qCache,o);
		}
		o.set_soundTransform(stf);
		try {
			o._loops = loops;
			o.play(ofs);
		} catch( e ) {
			flash.Lib.trace(e);
		}
		return o;
	}
	,load: function(stream,ctx) {
		var s = stream.url, m = flash.media.Sound.library;
		if(m != null && m.exists(s)) {
			this.component = m.get(s);
			flash.media.Sound.library.set(s,this.component.cloneNode(true));
		} else this.component = new Audio(s);
		this.qCache = [];
	}
	,close: function() {
		if(this.component != null) this.component = null; else throw new flash.errors.IOError("Attempt to close unexisting stream.");
	}
	,length: null
	,qCache: null
	,component: null
	,id3: null
	,__class__: flash.media.Sound
	,__properties__: {get_length:"get_length"}
});
flash.media.SoundChannel = function() {
	this._loops = 1;
	this.active = false;
	this.rightPeak = 1;
	this.leftPeak = 1;
	flash.events.EventDispatcher.call(this);
};
$hxClasses["flash.media.SoundChannel"] = flash.media.SoundChannel;
flash.media.SoundChannel.__name__ = ["flash","media","SoundChannel"];
flash.media.SoundChannel.__super__ = flash.events.EventDispatcher;
flash.media.SoundChannel.prototype = $extend(flash.events.EventDispatcher.prototype,{
	onEnded: function(e) {
		if(this.active) {
			if(--this._loops > 0) {
				this.set_position(this._position);
				if(this.component.paused) this.component.play();
			} else {
				this.stop();
				this.component.currentTime = 0;
				this.dispatchEvent(new flash.events.Event(flash.events.Event.SOUND_COMPLETE));
			}
		}
	}
	,set_position: function(v) {
		if(this.component.currentTime != v / 1000) {
			var p = !this.component.paused;
			if(p) this.component.pause();
			this.component.currentTime = v / 1000;
			if(p) this.component.play();
		}
		return v;
	}
	,get_position: function() {
		return this.component.currentTime * 1000;
	}
	,get_duration: function() {
		var o = this.component, f;
		try {
			f = o.buffered != null?o.buffered.end(0):o.duration;
		} catch( _ ) {
			f = o.duration;
			if(Math.isNaN(f)) f = 0;
		}
		return f;
	}
	,set_soundTransform: function(v) {
		this.soundTransform = v;
		this.component.volume = v != null?v.volume:1;
		return v;
	}
	,stop: function() {
		if(this.active) {
			this.active = false;
			this.component.pause();
			this.qSound.qCache.push(this);
		}
	}
	,play: function(p) {
		var o = this.component, l;
		if(!this.active) {
			l = this.get_duration();
			if(p == 0 || p / 1000 <= l) {
				this._position = this.set_position(p);
				o.load();
				o.play();
				this.active = true;
			} else {
				this.set_position(0);
				o.load();
				o.play();
				o.pause();
				this.qSound.qCache.push(this);
			}
		}
	}
	,init: function(q,v,loops) {
		if(loops == null) loops = 1;
		this.qSound = q;
		this.component = v;
		this._loops = loops;
		this.component.addEventListener("ended",$bind(this,this.onEnded));
	}
	,_loops: null
	,_position: null
	,active: null
	,qSound: null
	,component: null
	,soundTransform: null
	,rightPeak: null
	,leftPeak: null
	,__class__: flash.media.SoundChannel
	,__properties__: {set_soundTransform:"set_soundTransform",set_position:"set_position",get_position:"get_position"}
});
flash.media.SoundLoaderContext = function(bufferTime,checkPolicyFile) {
	if(checkPolicyFile == null) checkPolicyFile = false;
	if(bufferTime == null) bufferTime = 0;
	this.bufferTime = bufferTime;
	this.checkPolicyFile = checkPolicyFile;
};
$hxClasses["flash.media.SoundLoaderContext"] = flash.media.SoundLoaderContext;
flash.media.SoundLoaderContext.__name__ = ["flash","media","SoundLoaderContext"];
flash.media.SoundLoaderContext.prototype = {
	checkPolicyFile: null
	,bufferTime: null
	,__class__: flash.media.SoundLoaderContext
}
flash.media.SoundTransform = function(vol,panning) {
	if(panning == null) panning = 0;
	if(vol == null) vol = 1;
	this.volume = vol;
	this.pan = panning;
};
$hxClasses["flash.media.SoundTransform"] = flash.media.SoundTransform;
flash.media.SoundTransform.__name__ = ["flash","media","SoundTransform"];
flash.media.SoundTransform.prototype = {
	volume: null
	,rightToRight: null
	,rightToLeft: null
	,pan: null
	,leftToRight: null
	,leftToLeft: null
	,__class__: flash.media.SoundTransform
}
flash.net = {}
flash.net.URLLoader = function(request) {
	flash.events.EventDispatcher.call(this);
	this.bytesLoaded = 0;
	this.bytesTotal = 0;
	this.set_dataFormat(flash.net.URLLoaderDataFormat.TEXT);
	if(request != null) this.load(request);
};
$hxClasses["flash.net.URLLoader"] = flash.net.URLLoader;
flash.net.URLLoader.__name__ = ["flash","net","URLLoader"];
flash.net.URLLoader.__super__ = flash.events.EventDispatcher;
flash.net.URLLoader.prototype = $extend(flash.events.EventDispatcher.prototype,{
	set_dataFormat: function(inputVal) {
		if(inputVal == flash.net.URLLoaderDataFormat.BINARY && !Reflect.hasField(js.Browser.window,"ArrayBuffer")) this.dataFormat = flash.net.URLLoaderDataFormat.TEXT; else this.dataFormat = inputVal;
		return this.dataFormat;
	}
	,onStatus: function(status) {
		var evt = new flash.events.HTTPStatusEvent(flash.events.HTTPStatusEvent.HTTP_STATUS,false,false,status);
		evt.currentTarget = this;
		this.dispatchEvent(evt);
	}
	,onSecurityError: function(msg) {
		var evt = new flash.events.SecurityErrorEvent(flash.events.SecurityErrorEvent.SECURITY_ERROR);
		evt.text = msg;
		evt.currentTarget = this;
		this.dispatchEvent(evt);
	}
	,onProgress: function(event) {
		var evt = new flash.events.ProgressEvent(flash.events.ProgressEvent.PROGRESS);
		evt.currentTarget = this;
		evt.bytesLoaded = event.loaded;
		evt.bytesTotal = event.total;
		this.dispatchEvent(evt);
	}
	,onOpen: function() {
		var evt = new flash.events.Event(flash.events.Event.OPEN);
		evt.currentTarget = this;
		this.dispatchEvent(evt);
	}
	,onError: function(msg) {
		var evt = new flash.events.IOErrorEvent(flash.events.IOErrorEvent.IO_ERROR);
		evt.text = msg;
		evt.currentTarget = this;
		this.dispatchEvent(evt);
	}
	,onData: function(_) {
		var content = this.getData();
		var _g = this;
		switch( (_g.dataFormat)[1] ) {
		case 0:
			this.data = flash.utils.ByteArray.__ofBuffer(content);
			break;
		default:
			this.data = Std.string(content);
		}
		var evt = new flash.events.Event(flash.events.Event.COMPLETE);
		evt.currentTarget = this;
		this.dispatchEvent(evt);
	}
	,requestUrl: function(url,method,data,requestHeaders) {
		var xmlHttpRequest = new XMLHttpRequest();
		this.registerEvents(xmlHttpRequest);
		var uri = "";
		if(js.Boot.__instanceof(data,flash.utils.ByteArray)) {
			var data1 = data;
			var _g = this;
			switch( (_g.dataFormat)[1] ) {
			case 0:
				uri = data1.data.buffer;
				break;
			default:
				uri = data1.readUTFBytes(data1.length);
			}
		} else if(js.Boot.__instanceof(data,flash.net.URLVariables)) {
			var data1 = data;
			var _g = 0, _g1 = Reflect.fields(data1);
			while(_g < _g1.length) {
				var p = _g1[_g];
				++_g;
				if(uri.length != 0) uri += "&";
				uri += StringTools.urlEncode(p) + "=" + StringTools.urlEncode(Reflect.field(data1,p));
			}
		} else if(data != null) uri = data.toString();
		try {
			if(method == "GET" && uri != null && uri != "") {
				var question = url.split("?").length <= 1;
				xmlHttpRequest.open(method,url + (question?"?":"&") + Std.string(uri),true);
				uri = "";
			} else xmlHttpRequest.open(method,url,true);
		} catch( e ) {
			this.onError(e.toString());
			return;
		}
		var _g = this;
		switch( (_g.dataFormat)[1] ) {
		case 0:
			xmlHttpRequest.responseType = "arraybuffer";
			break;
		default:
		}
		var _g1 = 0;
		while(_g1 < requestHeaders.length) {
			var header = requestHeaders[_g1];
			++_g1;
			xmlHttpRequest.setRequestHeader(header.name,header.value);
		}
		xmlHttpRequest.send(uri);
		this.onOpen();
		this.getData = function() {
			if(xmlHttpRequest.response != null) return xmlHttpRequest.response; else return xmlHttpRequest.responseText;
		};
	}
	,registerEvents: function(subject) {
		var self = this;
		if(typeof XMLHttpRequestProgressEvent != "undefined") subject.addEventListener("progress",$bind(this,this.onProgress),false);
		subject.onreadystatechange = function() {
			if(subject.readyState != 4) return;
			var s = (function($this) {
				var $r;
				try {
					$r = subject.status;
				} catch( e ) {
					$r = null;
				}
				return $r;
			}(this));
			if(s == undefined) s = null;
			if(s != null) self.onStatus(s);
			if(s != null && s >= 200 && s < 400) self.onData(subject.response); else if(s == null) self.onError("Failed to connect or resolve host"); else if(s == 12029) self.onError("Failed to connect to host"); else if(s == 12007) self.onError("Unknown host"); else if(s == 0) {
				self.onError("Unable to make request (may be blocked due to cross-domain permissions)");
				self.onSecurityError("Unable to make request (may be blocked due to cross-domain permissions)");
			} else self.onError("Http Error #" + subject.status);
		};
	}
	,load: function(request) {
		this.requestUrl(request.url,request.method,request.data,request.formatRequestHeaders());
	}
	,getData: function() {
		return null;
	}
	,close: function() {
	}
	,dataFormat: null
	,data: null
	,bytesTotal: null
	,bytesLoaded: null
	,__class__: flash.net.URLLoader
	,__properties__: {set_dataFormat:"set_dataFormat"}
});
flash.net.URLLoaderDataFormat = $hxClasses["flash.net.URLLoaderDataFormat"] = { __ename__ : true, __constructs__ : ["BINARY","TEXT","VARIABLES"] }
flash.net.URLLoaderDataFormat.BINARY = ["BINARY",0];
flash.net.URLLoaderDataFormat.BINARY.toString = $estr;
flash.net.URLLoaderDataFormat.BINARY.__enum__ = flash.net.URLLoaderDataFormat;
flash.net.URLLoaderDataFormat.TEXT = ["TEXT",1];
flash.net.URLLoaderDataFormat.TEXT.toString = $estr;
flash.net.URLLoaderDataFormat.TEXT.__enum__ = flash.net.URLLoaderDataFormat;
flash.net.URLLoaderDataFormat.VARIABLES = ["VARIABLES",2];
flash.net.URLLoaderDataFormat.VARIABLES.toString = $estr;
flash.net.URLLoaderDataFormat.VARIABLES.__enum__ = flash.net.URLLoaderDataFormat;
flash.net.URLRequest = function(inURL) {
	if(inURL != null) this.url = inURL;
	this.requestHeaders = [];
	this.method = flash.net.URLRequestMethod.GET;
	this.contentType = null;
};
$hxClasses["flash.net.URLRequest"] = flash.net.URLRequest;
flash.net.URLRequest.__name__ = ["flash","net","URLRequest"];
flash.net.URLRequest.prototype = {
	formatRequestHeaders: function() {
		var res = this.requestHeaders;
		if(res == null) res = [];
		if(this.method == flash.net.URLRequestMethod.GET || this.data == null) return res;
		if(js.Boot.__instanceof(this.data,String) || js.Boot.__instanceof(this.data,flash.utils.ByteArray)) {
			res = res.slice();
			res.push(new flash.net.URLRequestHeader("Content-Type",this.contentType != null?this.contentType:"application/x-www-form-urlencoded"));
		}
		return res;
	}
	,url: null
	,requestHeaders: null
	,method: null
	,data: null
	,contentType: null
	,__class__: flash.net.URLRequest
}
flash.net.URLRequestHeader = function(name,value) {
	if(value == null) value = "";
	if(name == null) name = "";
	this.name = name;
	this.value = value;
};
$hxClasses["flash.net.URLRequestHeader"] = flash.net.URLRequestHeader;
flash.net.URLRequestHeader.__name__ = ["flash","net","URLRequestHeader"];
flash.net.URLRequestHeader.prototype = {
	value: null
	,name: null
	,__class__: flash.net.URLRequestHeader
}
flash.net.URLRequestMethod = function() { }
$hxClasses["flash.net.URLRequestMethod"] = flash.net.URLRequestMethod;
flash.net.URLRequestMethod.__name__ = ["flash","net","URLRequestMethod"];
flash.net.URLVariables = function(inEncoded) {
	if(inEncoded != null) this.decode(inEncoded);
};
$hxClasses["flash.net.URLVariables"] = flash.net.URLVariables;
flash.net.URLVariables.__name__ = ["flash","net","URLVariables"];
flash.net.URLVariables.prototype = {
	toString: function() {
		var result = new Array();
		var fields = Reflect.fields(this);
		var _g = 0;
		while(_g < fields.length) {
			var f = fields[_g];
			++_g;
			result.push(StringTools.urlEncode(f) + "=" + StringTools.urlEncode(Reflect.field(this,f)));
		}
		return result.join("&");
	}
	,decode: function(inVars) {
		var fields = Reflect.fields(this);
		var _g = 0;
		while(_g < fields.length) {
			var f = fields[_g];
			++_g;
			Reflect.deleteField(this,f);
		}
		var fields1 = inVars.split(";").join("&").split("&");
		var _g = 0;
		while(_g < fields1.length) {
			var f = fields1[_g];
			++_g;
			var eq = f.indexOf("=");
			if(eq > 0) this[StringTools.urlDecode(HxOverrides.substr(f,0,eq))] = StringTools.urlDecode(HxOverrides.substr(f,eq + 1,null)); else if(eq != 0) this[StringTools.urlDecode(f)] = "";
		}
	}
	,__class__: flash.net.URLVariables
}
flash.system = {}
flash.system.ApplicationDomain = function(parentDomain) {
	if(parentDomain != null) this.parentDomain = parentDomain; else this.parentDomain = flash.system.ApplicationDomain.currentDomain;
};
$hxClasses["flash.system.ApplicationDomain"] = flash.system.ApplicationDomain;
flash.system.ApplicationDomain.__name__ = ["flash","system","ApplicationDomain"];
flash.system.ApplicationDomain.prototype = {
	hasDefinition: function(name) {
		return Type.resolveClass(name) != null;
	}
	,getDefinition: function(name) {
		return Type.resolveClass(name);
	}
	,parentDomain: null
	,__class__: flash.system.ApplicationDomain
}
flash.system.LoaderContext = function(checkPolicyFile,applicationDomain,securityDomain) {
	if(checkPolicyFile == null) checkPolicyFile = false;
	this.checkPolicyFile = checkPolicyFile;
	this.securityDomain = securityDomain;
	if(applicationDomain != null) this.applicationDomain = applicationDomain; else this.applicationDomain = flash.system.ApplicationDomain.currentDomain;
};
$hxClasses["flash.system.LoaderContext"] = flash.system.LoaderContext;
flash.system.LoaderContext.__name__ = ["flash","system","LoaderContext"];
flash.system.LoaderContext.prototype = {
	securityDomain: null
	,checkPolicyFile: null
	,applicationDomain: null
	,allowLoadBytesCodeExecution: null
	,allowCodeImport: null
	,__class__: flash.system.LoaderContext
}
flash.system.SecurityDomain = function() {
};
$hxClasses["flash.system.SecurityDomain"] = flash.system.SecurityDomain;
flash.system.SecurityDomain.__name__ = ["flash","system","SecurityDomain"];
flash.system.SecurityDomain.prototype = {
	__class__: flash.system.SecurityDomain
}
flash.text = {}
flash.text.Font = function() {
	this.__metrics = [];
	this.__fontScale = 9.0;
	var className = Type.getClassName(Type.getClass(this));
	if(flash.text.Font.__fontData == null) {
		flash.text.Font.__fontData = [];
		flash.text.Font.__fontData["Bitstream_Vera_Sans"] = haxe.Unserializer.run(flash.text.Font.DEFAULT_FONT_DATA);
	}
	if(className == "flash.text.Font") this.set_fontName("Bitstream_Vera_Sans"); else this.set_fontName(className.split(".").pop());
};
$hxClasses["flash.text.Font"] = flash.text.Font;
flash.text.Font.__name__ = ["flash","text","Font"];
flash.text.Font.enumerateFonts = function(enumerateDeviceFonts) {
	if(enumerateDeviceFonts == null) enumerateDeviceFonts = false;
	return flash.text.Font.__registeredFonts.slice();
}
flash.text.Font.__ofResource = function(resourceName,fontName) {
	if(fontName == null) fontName = "";
	var data = haxe.Unserializer.run(haxe.Resource.getString(resourceName));
	if(data == null) {
	} else {
		if(fontName == "") {
			flash.text.Font.__fontData[resourceName] = data.hash;
			fontName = data.fontName;
		}
		flash.text.Font.__fontData[data.fontName] = data.hash;
	}
	return fontName;
}
flash.text.Font.registerFont = function(font) {
	var instance = js.Boot.__cast(Type.createInstance(font,[]) , flash.text.Font);
	if(instance != null) {
		if(Reflect.hasField(font,"resourceName")) instance.set_fontName(flash.text.Font.__ofResource(Reflect.field(font,"resourceName")));
		flash.text.Font.__registeredFonts.push(instance);
	}
}
flash.text.Font.prototype = {
	set_fontName: function(name) {
		if(name == "_sans" || name == "_serif" || name == "_typewriter") name = "Bitstream_Vera_Sans";
		this.fontName = name;
		if(flash.text.Font.__fontData[this.fontName] == null) try {
			flash.text.Font.__ofResource(name);
		} catch( e ) {
			this.fontName = "Bitstream_Vera_Sans";
		}
		if(flash.text.Font.__fontData[this.fontName] != null) try {
			this.__glyphData = flash.text.Font.__fontData[this.fontName];
		} catch( e ) {
			this.fontName = "Bitstream_Vera_Sans";
		}
		return name;
	}
	,__setScale: function(scale) {
		this.__fontScale = scale / 1024;
	}
	,__render: function(graphics,inChar,inX,inY,inOutline) {
		var index = 0;
		var glyph = this.__glyphData.get(inChar);
		if(glyph == null) return;
		var commands = glyph.commands;
		var data = glyph.data;
		var _g = 0;
		while(_g < commands.length) {
			var c = commands[_g];
			++_g;
			switch(c) {
			case 1:
				graphics.moveTo(inX + data[index++] * this.__fontScale,inY + data[index++] * this.__fontScale);
				break;
			case 2:
				graphics.lineTo(inX + data[index++] * this.__fontScale,inY + data[index++] * this.__fontScale);
				break;
			case 3:
				graphics.curveTo(inX + data[index++] * this.__fontScale,inY + data[index++] * this.__fontScale,inX + data[index++] * this.__fontScale,inY + data[index++] * this.__fontScale);
				break;
			}
		}
	}
	,__getAdvance: function(inGlyph,height) {
		var m = this.__metrics[inGlyph];
		if(m == null) {
			var glyph = this.__glyphData.get(inGlyph);
			if(glyph == null) return 0;
			this.__metrics[inGlyph] = m = glyph._width * this.__fontScale | 0;
		}
		if(m == null) return 0;
		return m;
	}
	,hasGlyph: function(str) {
		return this.__glyphData.exists(HxOverrides.cca(str,0));
	}
	,__metrics: null
	,__glyphData: null
	,__fontScale: null
	,fontType: null
	,fontStyle: null
	,fontName: null
	,__class__: flash.text.Font
	,__properties__: {set_fontName:"set_fontName"}
}
flash.text.FontStyle = $hxClasses["flash.text.FontStyle"] = { __ename__ : true, __constructs__ : ["REGULAR","ITALIC","BOLD_ITALIC","BOLD"] }
flash.text.FontStyle.REGULAR = ["REGULAR",0];
flash.text.FontStyle.REGULAR.toString = $estr;
flash.text.FontStyle.REGULAR.__enum__ = flash.text.FontStyle;
flash.text.FontStyle.ITALIC = ["ITALIC",1];
flash.text.FontStyle.ITALIC.toString = $estr;
flash.text.FontStyle.ITALIC.__enum__ = flash.text.FontStyle;
flash.text.FontStyle.BOLD_ITALIC = ["BOLD_ITALIC",2];
flash.text.FontStyle.BOLD_ITALIC.toString = $estr;
flash.text.FontStyle.BOLD_ITALIC.__enum__ = flash.text.FontStyle;
flash.text.FontStyle.BOLD = ["BOLD",3];
flash.text.FontStyle.BOLD.toString = $estr;
flash.text.FontStyle.BOLD.__enum__ = flash.text.FontStyle;
flash.text.FontType = $hxClasses["flash.text.FontType"] = { __ename__ : true, __constructs__ : ["EMBEDDED","DEVICE"] }
flash.text.FontType.EMBEDDED = ["EMBEDDED",0];
flash.text.FontType.EMBEDDED.toString = $estr;
flash.text.FontType.EMBEDDED.__enum__ = flash.text.FontType;
flash.text.FontType.DEVICE = ["DEVICE",1];
flash.text.FontType.DEVICE.toString = $estr;
flash.text.FontType.DEVICE.__enum__ = flash.text.FontType;
flash.text.GridFitType = $hxClasses["flash.text.GridFitType"] = { __ename__ : true, __constructs__ : ["NONE","PIXEL","SUBPIXEL"] }
flash.text.GridFitType.NONE = ["NONE",0];
flash.text.GridFitType.NONE.toString = $estr;
flash.text.GridFitType.NONE.__enum__ = flash.text.GridFitType;
flash.text.GridFitType.PIXEL = ["PIXEL",1];
flash.text.GridFitType.PIXEL.toString = $estr;
flash.text.GridFitType.PIXEL.__enum__ = flash.text.GridFitType;
flash.text.GridFitType.SUBPIXEL = ["SUBPIXEL",2];
flash.text.GridFitType.SUBPIXEL.toString = $estr;
flash.text.GridFitType.SUBPIXEL.__enum__ = flash.text.GridFitType;
flash.text.TextField = function() {
	flash.display.InteractiveObject.call(this);
	this.mWidth = 100;
	this.mHeight = 20;
	this.mHTMLMode = false;
	this.multiline = false;
	this.__graphics = new flash.display.Graphics();
	this.mFace = flash.text.TextField.mDefaultFont;
	this.mAlign = flash.text.TextFormatAlign.LEFT;
	this.mParagraphs = new Array();
	this.mSelStart = -1;
	this.mSelEnd = -1;
	this.scrollH = 0;
	this.scrollV = 1;
	this.mType = flash.text.TextFieldType.DYNAMIC;
	this.set_autoSize("NONE");
	this.mTextHeight = 12;
	this.mMaxHeight = this.mTextHeight;
	this.mHTMLText = " ";
	this.mText = " ";
	this.mTextColour = 0;
	this.tabEnabled = false;
	this.mTryFreeType = true;
	this.selectable = true;
	this.mInsertPos = 0;
	this.__inputEnabled = false;
	this.mDownChar = 0;
	this.mSelectDrag = -1;
	this.mLineInfo = [];
	this.set_defaultTextFormat(new flash.text.TextFormat());
	this.set_borderColor(0);
	this.set_border(false);
	this.set_backgroundColor(16777215);
	this.set_background(false);
	this.gridFitType = flash.text.GridFitType.PIXEL;
	this.sharpness = 0;
};
$hxClasses["flash.text.TextField"] = flash.text.TextField;
flash.text.TextField.__name__ = ["flash","text","TextField"];
flash.text.TextField.__super__ = flash.display.InteractiveObject;
flash.text.TextField.prototype = $extend(flash.display.InteractiveObject.prototype,{
	set_wordWrap: function(inWordWrap) {
		this.wordWrap = inWordWrap;
		this.Rebuild();
		return this.get_wordWrap();
	}
	,get_wordWrap: function() {
		return this.wordWrap;
	}
	,set_width: function(inValue) {
		if(this.parent != null) this.parent.__invalidateBounds();
		if(this.get__boundsInvalid()) this.validateBounds();
		if(inValue != this.mWidth) {
			this.mWidth = inValue;
			this.Rebuild();
		}
		return this.mWidth;
	}
	,get_width: function() {
		return Math.max(this.mWidth,this.getBounds(this.get_stage()).width);
	}
	,set_type: function(inType) {
		this.mType = inType;
		this.__inputEnabled = this.mType == flash.text.TextFieldType.INPUT;
		if(this.mHTMLMode) {
			if(this.__inputEnabled) flash.Lib.__setContentEditable(this.__graphics.__surface,true); else flash.Lib.__setContentEditable(this.__graphics.__surface,false);
		} else if(this.__inputEnabled) {
			this.set_htmlText(StringTools.replace(this.mText,"\n","<BR />"));
			flash.Lib.__setContentEditable(this.__graphics.__surface,true);
		}
		this.tabEnabled = this.get_type() == flash.text.TextFieldType.INPUT;
		this.Rebuild();
		return inType;
	}
	,get_type: function() {
		return this.mType;
	}
	,get_textHeight: function() {
		return this.mMaxHeight;
	}
	,get_textWidth: function() {
		return this.mMaxWidth;
	}
	,set_textColor: function(inCol) {
		this.mTextColour = inCol;
		this.RebuildText();
		return inCol;
	}
	,get_textColor: function() {
		return this.mTextColour;
	}
	,set_text: function(inText) {
		this.mText = Std.string(inText);
		this.mHTMLMode = false;
		this.RebuildText();
		this.___renderFlags |= 64;
		if(this.parent != null) this.parent.___renderFlags |= 64;
		return this.mText;
	}
	,get_text: function() {
		if(this.mHTMLMode) this.ConvertHTMLToText(false);
		return this.mText;
	}
	,set_scrollV: function(value) {
		return this.scrollV = value;
	}
	,get_scrollV: function() {
		return this.scrollV;
	}
	,set_scrollH: function(value) {
		return this.scrollH = value;
	}
	,get_scrollH: function() {
		return this.scrollH;
	}
	,get_numLines: function() {
		return 0;
	}
	,set_multiline: function(value) {
		return this.multiline = value;
	}
	,get_multiline: function() {
		return this.multiline;
	}
	,get_maxScrollV: function() {
		return 0;
	}
	,get_maxScrollH: function() {
		return 0;
	}
	,set_htmlText: function(inHTMLText) {
		this.mParagraphs = new Array();
		this.mHTMLText = inHTMLText;
		if(!this.mHTMLMode) {
			var domElement = js.Browser.document.createElement("div");
			if(this.background || this.border) {
				domElement.style.width = this.mWidth + "px";
				domElement.style.height = this.mHeight + "px";
			}
			if(this.background) domElement.style.backgroundColor = "#" + StringTools.hex(this.backgroundColor,6);
			if(this.border) domElement.style.border = "1px solid #" + StringTools.hex(this.borderColor,6);
			domElement.style.color = "#" + StringTools.hex(this.mTextColour,6);
			domElement.style.fontFamily = this.mFace;
			domElement.style.fontSize = this.mTextHeight + "px";
			domElement.style.textAlign = Std.string(this.mAlign);
			var wrapper = domElement;
			wrapper.innerHTML = inHTMLText;
			var destination = new flash.display.Graphics(wrapper);
			var __surface = this.__graphics.__surface;
			if(flash.Lib.__isOnStage(__surface)) {
				flash.Lib.__appendSurface(wrapper);
				flash.Lib.__copyStyle(__surface,wrapper);
				flash.Lib.__swapSurface(__surface,wrapper);
				flash.Lib.__removeSurface(__surface);
			}
			this.__graphics = destination;
			this.__graphics.__extent.width = wrapper.width;
			this.__graphics.__extent.height = wrapper.height;
		} else this.__graphics.__surface.innerHTML = inHTMLText;
		this.mHTMLMode = true;
		this.RebuildText();
		this.___renderFlags |= 64;
		if(this.parent != null) this.parent.___renderFlags |= 64;
		return this.mHTMLText;
	}
	,get_htmlText: function() {
		return this.mHTMLText;
	}
	,set_height: function(inValue) {
		if(this.parent != null) this.parent.__invalidateBounds();
		if(this.get__boundsInvalid()) this.validateBounds();
		if(inValue != this.mHeight) {
			this.mHeight = inValue;
			this.Rebuild();
		}
		return this.mHeight;
	}
	,get_height: function() {
		return Math.max(this.mHeight,this.getBounds(this.get_stage()).height);
	}
	,set_defaultTextFormat: function(inFmt) {
		this.setTextFormat(inFmt);
		this._defaultTextFormat = inFmt;
		return inFmt;
	}
	,get_defaultTextFormat: function() {
		return this._defaultTextFormat;
	}
	,get_caretPos: function() {
		return this.mInsertPos;
	}
	,get_bottomScrollV: function() {
		return 0;
	}
	,set_borderColor: function(inBorderCol) {
		this.borderColor = inBorderCol;
		this.Rebuild();
		return inBorderCol;
	}
	,set_border: function(inBorder) {
		this.border = inBorder;
		this.Rebuild();
		return inBorder;
	}
	,set_backgroundColor: function(inCol) {
		this.backgroundColor = inCol;
		this.Rebuild();
		return inCol;
	}
	,set_background: function(inBack) {
		this.background = inBack;
		this.Rebuild();
		return inBack;
	}
	,set_autoSize: function(inAutoSize) {
		this.autoSize = inAutoSize;
		this.Rebuild();
		return inAutoSize;
	}
	,get_autoSize: function() {
		return this.autoSize;
	}
	,__render: function(inMask,clipRect) {
		if(!this.__combinedVisible) return;
		if((this.___renderFlags & 4) != 0 || (this.___renderFlags & 8) != 0) this.__validateMatrix();
		if(this.__graphics.__render(inMask,this.__filters,1,1)) {
			this.___renderFlags |= 64;
			if(this.parent != null) this.parent.___renderFlags |= 64;
			this.__applyFilters(this.__graphics.__surface);
			this.___renderFlags |= 32;
		}
		if(!this.mHTMLMode && inMask != null) {
			var m = this.getSurfaceTransform(this.__graphics);
			flash.Lib.__drawToSurface(this.__graphics.__surface,inMask,m,(this.parent != null?this.parent.__combinedAlpha:1) * this.alpha,clipRect,this.gridFitType != flash.text.GridFitType.PIXEL);
		} else {
			if((this.___renderFlags & 32) != 0) {
				var m = this.getSurfaceTransform(this.__graphics);
				flash.Lib.__setSurfaceTransform(this.__graphics.__surface,m);
				this.___renderFlags &= -33;
			}
			flash.Lib.__setSurfaceOpacity(this.__graphics.__surface,(this.parent != null?this.parent.__combinedAlpha:1) * this.alpha);
		}
	}
	,__getObjectUnderPoint: function(point) {
		if(!this.get_visible()) return null; else if(this.mText.length > 1) {
			var local = this.globalToLocal(point);
			if(local.x < 0 || local.y < 0 || local.x > this.mMaxWidth || local.y > this.mMaxHeight) return null; else return this;
		} else return flash.display.InteractiveObject.prototype.__getObjectUnderPoint.call(this,point);
	}
	,__getGraphics: function() {
		return this.__graphics;
	}
	,toString: function() {
		return "[TextField name=" + this.name + " id=" + this.___id + "]";
	}
	,setTextFormat: function(inFmt,beginIndex,endIndex) {
		if(endIndex == null) endIndex = 0;
		if(beginIndex == null) beginIndex = 0;
		if(inFmt.font != null) this.mFace = inFmt.font;
		if(inFmt.size != null) this.mTextHeight = inFmt.size | 0;
		if(inFmt.align != null) this.mAlign = inFmt.align;
		if(inFmt.color != null) this.mTextColour = inFmt.color;
		this.RebuildText();
		this.___renderFlags |= 64;
		if(this.parent != null) this.parent.___renderFlags |= 64;
		return this.getTextFormat();
	}
	,setSelection: function(beginIndex,endIndex) {
	}
	,RenderRow: function(inRow,inY,inCharIdx,inAlign,inInsert) {
		if(inInsert == null) inInsert = 0;
		var h = 0;
		var w = 0;
		var _g = 0;
		while(_g < inRow.length) {
			var chr = inRow[_g];
			++_g;
			if(chr.fh > h) h = chr.fh;
			w += chr.adv;
		}
		if(w > this.mMaxWidth) this.mMaxWidth = w;
		var full_height = h * 1.2 | 0;
		var align_x = 0;
		var insert_x = 0;
		if(inInsert != null) {
			if(this.autoSize != "NONE") {
				this.scrollH = 0;
				insert_x = inInsert;
			} else {
				insert_x = inInsert - this.scrollH;
				if(insert_x < 0) this.scrollH -= (this.mLimitRenderX * 3 >> 2) - insert_x; else if(insert_x > this.mLimitRenderX) this.scrollH += insert_x - (this.mLimitRenderX * 3 >> 2);
				if(this.scrollH < 0) this.scrollH = 0;
			}
		}
		if(this.autoSize == "NONE" && w <= this.mLimitRenderX) {
			if(inAlign == flash.text.TextFormatAlign.CENTER) align_x = Math.round(this.mWidth) - w >> 1; else if(inAlign == flash.text.TextFormatAlign.RIGHT) align_x = Math.round(this.mWidth) - w;
		}
		var x_list = new Array();
		this.mLineInfo.push({ mY0 : inY, mIndex : inCharIdx - 1, mX : x_list});
		var cache_sel_font = null;
		var cache_normal_font = null;
		var x = align_x - this.scrollH;
		var x0 = x;
		var _g = 0;
		while(_g < inRow.length) {
			var chr = inRow[_g];
			++_g;
			var adv = chr.adv;
			if(x + adv > this.mLimitRenderX) break;
			x_list.push(x);
			if(x >= 0) {
				var font = chr.font;
				if(chr.sel) {
					this.__graphics.lineStyle();
					this.__graphics.beginFill(2105440);
					this.__graphics.drawRect(x,inY,adv,full_height);
					this.__graphics.endFill();
					if(cache_normal_font == chr.font) font = cache_sel_font; else {
						font = flash.text.FontInstance.CreateSolid(chr.font.GetFace(),chr.fh,16777215,1.0);
						cache_sel_font = font;
						cache_normal_font = chr.font;
					}
				}
				font.RenderChar(this.__graphics,chr.chr,x,inY + (h - chr.fh) | 0);
			}
			x += adv;
		}
		x += this.scrollH;
		return full_height;
	}
	,RebuildText: function() {
		this.mParagraphs = [];
		if(!this.mHTMLMode) {
			var font = flash.text.FontInstance.CreateSolid(this.mFace,this.mTextHeight,this.mTextColour,1.0);
			var paras = this.mText.split("\n");
			var _g = 0;
			while(_g < paras.length) {
				var paragraph = paras[_g];
				++_g;
				this.mParagraphs.push({ align : this.mAlign, spans : [{ font : font, text : paragraph + "\n"}]});
			}
		}
		this.Rebuild();
	}
	,Rebuild: function() {
		if(this.mHTMLMode) return;
		this.mLineInfo = [];
		this.__graphics.clear();
		if(this.background) {
			this.__graphics.beginFill(this.backgroundColor);
			this.__graphics.drawRect(0,0,this.get_width(),this.get_height());
			this.__graphics.endFill();
		}
		this.__graphics.lineStyle(this.mTextColour);
		var insert_x = null;
		this.mMaxWidth = 0;
		var wrap = this.mLimitRenderX = this.get_wordWrap() && !this.__inputEnabled?this.mWidth | 0:999999;
		var char_idx = 0;
		var h = 0;
		var s0 = this.mSelStart;
		var s1 = this.mSelEnd;
		var _g = 0, _g1 = this.mParagraphs;
		while(_g < _g1.length) {
			var paragraph = _g1[_g];
			++_g;
			var row = [];
			var row_width = 0;
			var last_word_break = 0;
			var last_word_break_width = 0;
			var last_word_char_idx = 0;
			var start_idx = char_idx;
			var tx = 0;
			var _g2 = 0, _g3 = paragraph.spans;
			while(_g2 < _g3.length) {
				var span = _g3[_g2];
				++_g2;
				var text = span.text;
				var font = span.font;
				var fh = font.get_height();
				last_word_break = row.length;
				last_word_break_width = row_width;
				last_word_char_idx = char_idx;
				var _g5 = 0, _g4 = text.length;
				while(_g5 < _g4) {
					var ch = _g5++;
					var g = HxOverrides.cca(text,ch);
					var adv = font.__getAdvance(g);
					if(g == 32) {
						last_word_break = row.length;
						last_word_break_width = tx;
						last_word_char_idx = char_idx;
					}
					if(tx + adv > wrap) {
						if(last_word_break > 0) {
							var row_end = row.splice(last_word_break,row.length - last_word_break);
							h += this.RenderRow(row,h,start_idx,paragraph.align);
							row = row_end;
							tx -= last_word_break_width;
							start_idx = last_word_char_idx;
							last_word_break = 0;
							last_word_break_width = 0;
							last_word_char_idx = 0;
							if(row_end.length > 0 && row_end[0].chr == 32) {
								row_end.shift();
								start_idx++;
							}
						} else {
							h += this.RenderRow(row,h,char_idx,paragraph.align);
							row = [];
							tx = 0;
							start_idx = char_idx;
						}
					}
					row.push({ font : font, chr : g, x : tx, fh : fh, sel : char_idx >= s0 && char_idx < s1, adv : adv});
					tx += adv;
					char_idx++;
				}
			}
			if(row.length > 0) {
				h += this.RenderRow(row,h,start_idx,paragraph.align,insert_x);
				insert_x = null;
			}
		}
		var w = this.mMaxWidth;
		if(h < this.mTextHeight) h = this.mTextHeight;
		this.mMaxHeight = h;
		var _g = this;
		switch(_g.autoSize) {
		case "LEFT":
			break;
		case "RIGHT":
			var x0 = this.get_x() + this.get_width();
			this.set_x(this.mWidth - x0);
			break;
		case "CENTER":
			var x0 = this.get_x() + this.get_width() / 2;
			this.set_x(this.mWidth / 2 - x0);
			break;
		default:
			if(this.get_wordWrap()) this.set_height(h);
		}
		if(this.border) {
			this.__graphics.endFill();
			this.__graphics.lineStyle(1,this.borderColor,1,true);
			this.__graphics.drawRect(.5,.5,this.get_width() - .5,this.get_height() - .5);
		}
	}
	,getTextFormat: function(beginIndex,endIndex) {
		if(endIndex == null) endIndex = 0;
		if(beginIndex == null) beginIndex = 0;
		return new flash.text.TextFormat(this.mFace,this.mTextHeight,this.mTextColour);
	}
	,getLineIndexAtPoint: function(inX,inY) {
		if(this.mLineInfo.length < 1) return -1;
		if(inY <= 0) return 0;
		var _g1 = 0, _g = this.mLineInfo.length;
		while(_g1 < _g) {
			var l = _g1++;
			if(this.mLineInfo[l].mY0 > inY) return l == 0?0:l - 1;
		}
		return this.mLineInfo.length - 1;
	}
	,getCharIndexAtPoint: function(inX,inY) {
		var li = this.getLineIndexAtPoint(inX,inY);
		if(li < 0) return -1;
		var line = this.mLineInfo[li];
		var idx = line.mIndex;
		var _g = 0, _g1 = line.mX;
		while(_g < _g1.length) {
			var x = _g1[_g];
			++_g;
			if(x > inX) return idx;
			idx++;
		}
		return idx;
	}
	,getCharBoundaries: function(a) {
		return null;
	}
	,DecodeColour: function(col) {
		return Std.parseInt("0x" + HxOverrides.substr(col,1,null));
	}
	,ConvertHTMLToText: function(inUnSetHTML) {
		this.mText = "";
		var _g = 0, _g1 = this.mParagraphs;
		while(_g < _g1.length) {
			var paragraph = _g1[_g];
			++_g;
			var _g2 = 0, _g3 = paragraph.spans;
			while(_g2 < _g3.length) {
				var span = _g3[_g2];
				++_g2;
				this.mText += span.text;
			}
		}
		if(inUnSetHTML) {
			this.mHTMLMode = false;
			this.RebuildText();
		}
	}
	,appendText: function(newText) {
		var _g = this;
		_g.set_text(_g.get_text() + newText);
	}
	,_defaultTextFormat: null
	,__inputEnabled: null
	,__graphics: null
	,mWidth: null
	,mType: null
	,mTextColour: null
	,mText: null
	,mSelectDrag: null
	,mSelStart: null
	,mSelEnd: null
	,mSelectionAnchored: null
	,mSelectionAnchor: null
	,mMaxWidth: null
	,mMaxHeight: null
	,mLineInfo: null
	,mLimitRenderX: null
	,mInsertPos: null
	,mHTMLMode: null
	,mHTMLText: null
	,mHeight: null
	,mAlign: null
	,wordWrap: null
	,textWidth: null
	,textHeight: null
	,sharpness: null
	,selectionEndIndex: null
	,selectionBeginIndex: null
	,selectable: null
	,scrollV: null
	,scrollH: null
	,restrict: null
	,numLines: null
	,multiline: null
	,mTryFreeType: null
	,mTextHeight: null
	,mParagraphs: null
	,mFace: null
	,mDownChar: null
	,maxScrollV: null
	,maxScrollH: null
	,maxChars: null
	,length: null
	,gridFitType: null
	,embedFonts: null
	,displayAsPassword: null
	,caretPos: null
	,caretIndex: null
	,bottomScrollV: null
	,borderColor: null
	,border: null
	,backgroundColor: null
	,background: null
	,autoSize: null
	,antiAliasType: null
	,__class__: flash.text.TextField
	,__properties__: $extend(flash.display.InteractiveObject.prototype.__properties__,{set_autoSize:"set_autoSize",set_background:"set_background",set_backgroundColor:"set_backgroundColor",set_border:"set_border",set_borderColor:"set_borderColor",get_bottomScrollV:"get_bottomScrollV",get_caretPos:"get_caretPos",set_defaultTextFormat:"set_defaultTextFormat",get_defaultTextFormat:"get_defaultTextFormat",set_htmlText:"set_htmlText",get_htmlText:"get_htmlText",get_maxScrollH:"get_maxScrollH",get_maxScrollV:"get_maxScrollV",get_numLines:"get_numLines",set_text:"set_text",get_text:"get_text",set_textColor:"set_textColor",get_textColor:"get_textColor",get_textHeight:"get_textHeight",get_textWidth:"get_textWidth",set_type:"set_type",get_type:"get_type",set_wordWrap:"set_wordWrap",get_wordWrap:"get_wordWrap"})
});
flash.text.FontInstanceMode = $hxClasses["flash.text.FontInstanceMode"] = { __ename__ : true, __constructs__ : ["fimSolid"] }
flash.text.FontInstanceMode.fimSolid = ["fimSolid",0];
flash.text.FontInstanceMode.fimSolid.toString = $estr;
flash.text.FontInstanceMode.fimSolid.__enum__ = flash.text.FontInstanceMode;
flash.text.FontInstance = function(inFont,inHeight) {
	this.mFont = inFont;
	this.mHeight = inHeight;
	this.mTryFreeType = true;
	this.mGlyphs = [];
	this.mCacheAsBitmap = false;
};
$hxClasses["flash.text.FontInstance"] = flash.text.FontInstance;
flash.text.FontInstance.__name__ = ["flash","text","FontInstance"];
flash.text.FontInstance.CreateSolid = function(inFace,inHeight,inColour,inAlpha) {
	var id = "SOLID:" + inFace + ":" + inHeight + ":" + inColour + ":" + inAlpha;
	var f = flash.text.FontInstance.mSolidFonts.get(id);
	if(f != null) return f;
	var font = new flash.text.Font();
	font.__setScale(inHeight);
	font.set_fontName(inFace);
	if(font == null) return null;
	f = new flash.text.FontInstance(font,inHeight);
	f.SetSolid(inColour,inAlpha);
	flash.text.FontInstance.mSolidFonts.set(id,f);
	return f;
}
flash.text.FontInstance.prototype = {
	get_height: function() {
		return this.mHeight;
	}
	,__getAdvance: function(inChar) {
		if(this.mFont == null) return 0;
		return this.mFont.__getAdvance(inChar,this.mHeight);
	}
	,toString: function() {
		return "FontInstance:" + Std.string(this.mFont) + ":" + this.mColour + "(" + this.mGlyphs.length + ")";
	}
	,RenderChar: function(inGraphics,inGlyph,inX,inY) {
		inGraphics.__clearLine();
		inGraphics.beginFill(this.mColour,this.mAlpha);
		this.mFont.__render(inGraphics,inGlyph,inX,inY,this.mTryFreeType);
		inGraphics.endFill();
	}
	,SetSolid: function(inCol,inAlpha) {
		this.mColour = inCol;
		this.mAlpha = inAlpha;
		this.mMode = flash.text.FontInstanceMode.fimSolid;
	}
	,GetFace: function() {
		return this.mFont.fontName;
	}
	,mCacheAsBitmap: null
	,mGlyphs: null
	,mHeight: null
	,mFont: null
	,mAlpha: null
	,mColour: null
	,mMode: null
	,mTryFreeType: null
	,height: null
	,__class__: flash.text.FontInstance
	,__properties__: {get_height:"get_height"}
}
flash.text.TextFieldAutoSize = function() { }
$hxClasses["flash.text.TextFieldAutoSize"] = flash.text.TextFieldAutoSize;
flash.text.TextFieldAutoSize.__name__ = ["flash","text","TextFieldAutoSize"];
flash.text.TextFieldType = function() { }
$hxClasses["flash.text.TextFieldType"] = flash.text.TextFieldType;
flash.text.TextFieldType.__name__ = ["flash","text","TextFieldType"];
flash.text.TextFormat = function(in_font,in_size,in_color,in_bold,in_italic,in_underline,in_url,in_target,in_align,in_leftMargin,in_rightMargin,in_indent,in_leading) {
	this.font = in_font;
	this.size = in_size;
	this.color = in_color;
	this.bold = in_bold;
	this.italic = in_italic;
	this.underline = in_underline;
	this.url = in_url;
	this.target = in_target;
	this.align = in_align;
	this.leftMargin = in_leftMargin;
	this.rightMargin = in_rightMargin;
	this.indent = in_indent;
	this.leading = in_leading;
};
$hxClasses["flash.text.TextFormat"] = flash.text.TextFormat;
flash.text.TextFormat.__name__ = ["flash","text","TextFormat"];
flash.text.TextFormat.prototype = {
	clone: function() {
		var newFormat = new flash.text.TextFormat(this.font,this.size,this.color,this.bold,this.italic,this.underline,this.url,this.target);
		newFormat.align = this.align;
		newFormat.leftMargin = this.leftMargin;
		newFormat.rightMargin = this.rightMargin;
		newFormat.indent = this.indent;
		newFormat.leading = this.leading;
		newFormat.blockIndent = this.blockIndent;
		newFormat.bullet = this.bullet;
		newFormat.display = this.display;
		newFormat.kerning = this.kerning;
		newFormat.letterSpacing = this.letterSpacing;
		newFormat.tabStops = this.tabStops;
		return newFormat;
	}
	,url: null
	,underline: null
	,target: null
	,tabStops: null
	,size: null
	,rightMargin: null
	,letterSpacing: null
	,leftMargin: null
	,leading: null
	,kerning: null
	,italic: null
	,indent: null
	,font: null
	,display: null
	,color: null
	,bullet: null
	,bold: null
	,blockIndent: null
	,align: null
	,__class__: flash.text.TextFormat
}
flash.text.TextFormatAlign = $hxClasses["flash.text.TextFormatAlign"] = { __ename__ : true, __constructs__ : ["LEFT","RIGHT","JUSTIFY","CENTER"] }
flash.text.TextFormatAlign.LEFT = ["LEFT",0];
flash.text.TextFormatAlign.LEFT.toString = $estr;
flash.text.TextFormatAlign.LEFT.__enum__ = flash.text.TextFormatAlign;
flash.text.TextFormatAlign.RIGHT = ["RIGHT",1];
flash.text.TextFormatAlign.RIGHT.toString = $estr;
flash.text.TextFormatAlign.RIGHT.__enum__ = flash.text.TextFormatAlign;
flash.text.TextFormatAlign.JUSTIFY = ["JUSTIFY",2];
flash.text.TextFormatAlign.JUSTIFY.toString = $estr;
flash.text.TextFormatAlign.JUSTIFY.__enum__ = flash.text.TextFormatAlign;
flash.text.TextFormatAlign.CENTER = ["CENTER",3];
flash.text.TextFormatAlign.CENTER.toString = $estr;
flash.text.TextFormatAlign.CENTER.__enum__ = flash.text.TextFormatAlign;
flash.ui = {}
flash.ui.Keyboard = function() { }
$hxClasses["flash.ui.Keyboard"] = flash.ui.Keyboard;
flash.ui.Keyboard.__name__ = ["flash","ui","Keyboard"];
flash.ui.Keyboard.isAccessible = function() {
	return false;
}
flash.ui.Keyboard.__convertMozillaCode = function(code) {
	switch(code) {
	case 8:
		return 8;
	case 9:
		return 9;
	case 13:
		return 13;
	case 14:
		return 13;
	case 16:
		return 16;
	case 17:
		return 17;
	case 20:
		return 18;
	case 27:
		return 27;
	case 32:
		return 32;
	case 33:
		return 33;
	case 34:
		return 34;
	case 35:
		return 35;
	case 36:
		return 36;
	case 37:
		return 37;
	case 39:
		return 39;
	case 38:
		return 38;
	case 40:
		return 40;
	case 45:
		return 45;
	case 46:
		return 46;
	case 144:
		return 144;
	default:
		return code;
	}
}
flash.ui.Keyboard.__convertWebkitCode = function(code) {
	var _g = code.toLowerCase();
	switch(_g) {
	case "backspace":
		return 8;
	case "tab":
		return 9;
	case "enter":
		return 13;
	case "shift":
		return 16;
	case "control":
		return 17;
	case "capslock":
		return 18;
	case "escape":
		return 27;
	case "space":
		return 32;
	case "pageup":
		return 33;
	case "pagedown":
		return 34;
	case "end":
		return 35;
	case "home":
		return 36;
	case "left":
		return 37;
	case "right":
		return 39;
	case "up":
		return 38;
	case "down":
		return 40;
	case "insert":
		return 45;
	case "delete":
		return 46;
	case "numlock":
		return 144;
	case "break":
		return 19;
	}
	if(code.indexOf("U+") == 0) return Std.parseInt("0x" + HxOverrides.substr(code,3,null));
	throw "Unrecognized key code: " + code;
	return 0;
}
flash.utils = {}
flash.utils.ByteArray = function() {
	this.littleEndian = false;
	this.allocated = 0;
	this.position = 0;
	this.length = 0;
	this.___resizeBuffer(this.allocated);
};
$hxClasses["flash.utils.ByteArray"] = flash.utils.ByteArray;
flash.utils.ByteArray.__name__ = ["flash","utils","ByteArray"];
flash.utils.ByteArray.fromBytes = function(inBytes) {
	var result = new flash.utils.ByteArray();
	result.byteView = new Uint8Array(inBytes.b);
	result.set_length(result.byteView.length);
	result.allocated = result.length;
	return result;
}
flash.utils.ByteArray.__ofBuffer = function(buffer) {
	var bytes = new flash.utils.ByteArray();
	bytes.set_length(bytes.allocated = buffer.byteLength);
	bytes.data = new DataView(buffer);
	bytes.byteView = new Uint8Array(buffer);
	return bytes;
}
flash.utils.ByteArray.prototype = {
	set_length: function(value) {
		if(this.allocated < value) this.___resizeBuffer(this.allocated = Math.max(value,this.allocated * 2) | 0); else if(this.allocated > value) this.___resizeBuffer(this.allocated = value);
		this.length = value;
		return value;
	}
	,set_endian: function(endian) {
		this.littleEndian = endian == "littleEndian";
		return endian;
	}
	,get_endian: function() {
		return this.littleEndian?"littleEndian":"bigEndian";
	}
	,get_bytesAvailable: function() {
		return this.length - this.position;
	}
	,__set: function(pos,v) {
		this.data.setUint8(pos,v);
	}
	,__getBuffer: function() {
		return this.data.buffer;
	}
	,___resizeBuffer: function(len) {
		var oldByteView = this.byteView;
		var newByteView = new Uint8Array(len);
		if(oldByteView != null) {
			if(oldByteView.length <= len) newByteView.set(oldByteView); else newByteView.set(oldByteView.subarray(0,len));
		}
		this.byteView = newByteView;
		this.data = new DataView(newByteView.buffer);
	}
	,_getUTFBytesCount: function(value) {
		var count = 0;
		var _g1 = 0, _g = value.length;
		while(_g1 < _g) {
			var i = _g1++;
			var c = value.charCodeAt(i);
			if(c <= 127) count += 1; else if(c <= 2047) count += 2; else if(c <= 65535) count += 3; else count += 4;
		}
		return count;
	}
	,__get: function(pos) {
		return this.data.getUint8(pos);
	}
	,__fromBytes: function(inBytes) {
		this.byteView = new Uint8Array(inBytes.b);
		this.set_length(this.byteView.length);
		this.allocated = this.length;
	}
	,writeUTFBytes: function(value) {
		var _g1 = 0, _g = value.length;
		while(_g1 < _g) {
			var i = _g1++;
			var c = value.charCodeAt(i);
			if(c <= 127) this.writeByte(c); else if(c <= 2047) {
				this.writeByte(192 | c >> 6);
				this.writeByte(128 | c & 63);
			} else if(c <= 65535) {
				this.writeByte(224 | c >> 12);
				this.writeByte(128 | c >> 6 & 63);
				this.writeByte(128 | c & 63);
			} else {
				this.writeByte(240 | c >> 18);
				this.writeByte(128 | c >> 12 & 63);
				this.writeByte(128 | c >> 6 & 63);
				this.writeByte(128 | c & 63);
			}
		}
	}
	,writeUTF: function(value) {
		this.writeUnsignedShort(this._getUTFBytesCount(value));
		this.writeUTFBytes(value);
	}
	,writeUnsignedShort: function(value) {
		var lengthToEnsure = this.position + 2;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Math.max(lengthToEnsure,this.allocated * 2) | 0); else if(this.allocated > lengthToEnsure) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setUint16(this.position,value,this.littleEndian);
		this.position += 2;
	}
	,writeUnsignedInt: function(value) {
		var lengthToEnsure = this.position + 4;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Math.max(lengthToEnsure,this.allocated * 2) | 0); else if(this.allocated > lengthToEnsure) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setUint32(this.position,value,this.littleEndian);
		this.position += 4;
	}
	,writeShort: function(value) {
		var lengthToEnsure = this.position + 2;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Math.max(lengthToEnsure,this.allocated * 2) | 0); else if(this.allocated > lengthToEnsure) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setInt16(this.position,value,this.littleEndian);
		this.position += 2;
	}
	,writeInt: function(value) {
		var lengthToEnsure = this.position + 4;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Math.max(lengthToEnsure,this.allocated * 2) | 0); else if(this.allocated > lengthToEnsure) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setInt32(this.position,value,this.littleEndian);
		this.position += 4;
	}
	,writeFloat: function(x) {
		var lengthToEnsure = this.position + 4;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Math.max(lengthToEnsure,this.allocated * 2) | 0); else if(this.allocated > lengthToEnsure) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setFloat32(this.position,x,this.littleEndian);
		this.position += 4;
	}
	,writeDouble: function(x) {
		var lengthToEnsure = this.position + 8;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Math.max(lengthToEnsure,this.allocated * 2) | 0); else if(this.allocated > lengthToEnsure) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setFloat64(this.position,x,this.littleEndian);
		this.position += 8;
	}
	,writeBytes: function(bytes,offset,length) {
		if(offset < 0 || length < 0) throw new flash.errors.IOError("Write error - Out of bounds");
		var lengthToEnsure = this.position + length;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Math.max(lengthToEnsure,this.allocated * 2) | 0); else if(this.allocated > lengthToEnsure) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.byteView.set(bytes.byteView.subarray(offset,offset + length),this.position);
		this.position += length;
	}
	,writeByte: function(value) {
		var lengthToEnsure = this.position + 1;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Math.max(lengthToEnsure,this.allocated * 2) | 0); else if(this.allocated > lengthToEnsure) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		var data = this.data;
		data.setInt8(this.position,value);
		this.position += 1;
	}
	,writeBoolean: function(value) {
		this.writeByte(value?1:0);
	}
	,toString: function() {
		var cachePosition = this.position;
		this.position = 0;
		var value = this.readUTFBytes(this.length);
		this.position = cachePosition;
		return value;
	}
	,readUTFBytes: function(len) {
		var value = "";
		var max = this.position + len;
		while(this.position < max) {
			var data = this.data;
			var c = data.getUint8(this.position++);
			if(c < 128) {
				if(c == 0) break;
				value += String.fromCharCode(c);
			} else if(c < 224) value += String.fromCharCode((c & 63) << 6 | data.getUint8(this.position++) & 127); else if(c < 240) {
				var c2 = data.getUint8(this.position++);
				value += String.fromCharCode((c & 31) << 12 | (c2 & 127) << 6 | data.getUint8(this.position++) & 127);
			} else {
				var c2 = data.getUint8(this.position++);
				var c3 = data.getUint8(this.position++);
				value += String.fromCharCode((c & 15) << 18 | (c2 & 127) << 12 | c3 << 6 & 127 | data.getUint8(this.position++) & 127);
			}
		}
		return value;
	}
	,readUTF: function() {
		var bytesCount = this.readUnsignedShort();
		return this.readUTFBytes(bytesCount);
	}
	,readUnsignedShort: function() {
		var uShort = this.data.getUint16(this.position,this.littleEndian);
		this.position += 2;
		return uShort;
	}
	,readUnsignedInt: function() {
		var uInt = this.data.getUint32(this.position,this.littleEndian);
		this.position += 4;
		return uInt;
	}
	,readUnsignedByte: function() {
		var data = this.data;
		return data.getUint8(this.position++);
	}
	,readShort: function() {
		var $short = this.data.getInt16(this.position,this.littleEndian);
		this.position += 2;
		return $short;
	}
	,readInt: function() {
		var $int = this.data.getInt32(this.position,this.littleEndian);
		this.position += 4;
		return $int;
	}
	,readFullBytes: function(bytes,pos,len) {
		if(this.length < len) {
			if(this.allocated < len) this.___resizeBuffer(this.allocated = Math.max(len,this.allocated * 2) | 0); else if(this.allocated > len) this.___resizeBuffer(this.allocated = len);
			this.length = len;
			len;
		}
		var _g1 = pos, _g = pos + len;
		while(_g1 < _g) {
			var i = _g1++;
			var data = this.data;
			data.setInt8(this.position++,bytes.b[i]);
		}
	}
	,readFloat: function() {
		var $float = this.data.getFloat32(this.position,this.littleEndian);
		this.position += 4;
		return $float;
	}
	,readDouble: function() {
		var $double = this.data.getFloat64(this.position,this.littleEndian);
		this.position += 8;
		return $double;
	}
	,readBytes: function(bytes,offset,length) {
		if(offset < 0 || length < 0) throw new flash.errors.IOError("Read error - Out of bounds");
		if(offset == null) offset = 0;
		if(length == null) length = this.length;
		var lengthToEnsure = offset + length;
		if(bytes.length < lengthToEnsure) {
			if(bytes.allocated < lengthToEnsure) bytes.___resizeBuffer(bytes.allocated = Math.max(lengthToEnsure,bytes.allocated * 2) | 0); else if(bytes.allocated > lengthToEnsure) bytes.___resizeBuffer(bytes.allocated = lengthToEnsure);
			bytes.length = lengthToEnsure;
			lengthToEnsure;
		}
		bytes.byteView.set(this.byteView.subarray(this.position,this.position + length),offset);
		bytes.position = offset;
		this.position += length;
		if(bytes.position + length > bytes.length) bytes.set_length(bytes.position + length);
	}
	,readByte: function() {
		var data = this.data;
		return data.getUint8(this.position++);
	}
	,readBoolean: function() {
		return this.readByte() != 0;
	}
	,clear: function() {
		if(this.allocated < 0) this.___resizeBuffer(this.allocated = Math.max(0,this.allocated * 2) | 0); else if(this.allocated > 0) this.___resizeBuffer(this.allocated = 0);
		this.length = 0;
		0;
	}
	,littleEndian: null
	,data: null
	,byteView: null
	,allocated: null
	,position: null
	,objectEncoding: null
	,length: null
	,bytesAvailable: null
	,__class__: flash.utils.ByteArray
	,__properties__: {get_bytesAvailable:"get_bytesAvailable",set_endian:"set_endian",get_endian:"get_endian",set_length:"set_length"}
}
flash.utils.Endian = function() { }
$hxClasses["flash.utils.Endian"] = flash.utils.Endian;
flash.utils.Endian.__name__ = ["flash","utils","Endian"];
flash.utils.Timer = function(delay,repeatCount) {
	if(repeatCount == null) repeatCount = 0;
	flash.events.EventDispatcher.call(this);
	this.running = false;
	this.set_delay(delay);
	this.set_repeatCount(repeatCount);
	this.currentCount = 0;
};
$hxClasses["flash.utils.Timer"] = flash.utils.Timer;
flash.utils.Timer.__name__ = ["flash","utils","Timer"];
flash.utils.Timer.__super__ = flash.events.EventDispatcher;
flash.utils.Timer.prototype = $extend(flash.events.EventDispatcher.prototype,{
	set_repeatCount: function(v) {
		if(this.running && v != 0 && v <= this.currentCount) this.stop();
		this.repeatCount = v;
		return v;
	}
	,set_delay: function(v) {
		if(v != this.delay) {
			var wasRunning = this.running;
			if(this.running) this.stop();
			this.delay = v;
			if(wasRunning) this.start();
		}
		return v;
	}
	,__onInterval: function() {
		this.currentCount++;
		if(this.repeatCount > 0 && this.currentCount >= this.repeatCount) {
			this.stop();
			this.dispatchEvent(new flash.events.TimerEvent("timer"));
			this.dispatchEvent(new flash.events.TimerEvent("timerComplete"));
		} else this.dispatchEvent(new flash.events.TimerEvent("timer"));
	}
	,stop: function() {
		if(this.timerId != null) {
			window.clearInterval(this.timerId);
			this.timerId = null;
		}
		this.running = false;
	}
	,start: function() {
		if(this.running) return;
		this.running = true;
		this.timerId = window.setInterval($bind(this,this.__onInterval),this.delay | 0);
	}
	,reset: function() {
		this.stop();
		this.currentCount = 0;
	}
	,timerId: null
	,running: null
	,repeatCount: null
	,delay: null
	,currentCount: null
	,__class__: flash.utils.Timer
	,__properties__: {set_delay:"set_delay",set_repeatCount:"set_repeatCount"}
});
flash.utils.Uuid = function() { }
$hxClasses["flash.utils.Uuid"] = flash.utils.Uuid;
flash.utils.Uuid.__name__ = ["flash","utils","Uuid"];
flash.utils.Uuid.random = function(size) {
	if(size == null) size = 32;
	var nchars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".length;
	var uid = new StringBuf();
	var _g = 0;
	while(_g < size) {
		var i = _g++;
		uid.b += Std.string("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.random() * nchars | 0));
	}
	return uid.b;
}
flash.utils.Uuid.uuid = function() {
	return flash.utils.Uuid.random(8) + "-" + flash.utils.Uuid.random(4) + "-" + flash.utils.Uuid.random(4) + "-" + flash.utils.Uuid.random(4) + "-" + flash.utils.Uuid.random(12);
}
var googleAnalytics = {}
googleAnalytics.Campaign = function(type) {
	this.responseCount = 0;
	if(type != "direct" && type != "organic" && type != "referral") googleAnalytics.Tracker._raiseError("Campaign type has to be one of the Campaign::TYPE_* constant values.","Campaign.new");
	this.type = type;
	switch(type) {
	case "direct":
		this.name = "(direct)";
		this.source = "(direct)";
		this.medium = "(none)";
		break;
	case "referral":
		this.name = "(referral)";
		this.medium = "referral";
		break;
	case "organic":
		this.name = "(organic)";
		this.medium = "organic";
		break;
	}
	this.creationTime = new googleAnalytics.DateTime();
};
$hxClasses["googleAnalytics.Campaign"] = googleAnalytics.Campaign;
googleAnalytics.Campaign.__name__ = ["googleAnalytics","Campaign"];
googleAnalytics.Campaign.createFromReferrer = function(url) {
	var instance = new googleAnalytics.Campaign("referral");
	var urlInfo = new googleAnalytics.URLParser(url);
	instance.source = urlInfo.host;
	instance.content = urlInfo.path;
	return instance;
}
googleAnalytics.Campaign.prototype = {
	getContent: function() {
		return this.content;
	}
	,setContent: function(content) {
		this.content = content;
	}
	,getTerm: function() {
		return this.term;
	}
	,setTerm: function(term) {
		this.term = term;
	}
	,getMedium: function() {
		return this.medium;
	}
	,setMedium: function(medium) {
		this.medium = medium;
	}
	,getName: function() {
		return this.name;
	}
	,setName: function(name) {
		this.name = name;
	}
	,getDClickId: function() {
		return this.dClickId;
	}
	,setDClickId: function(dClickId) {
		this.dClickId = dClickId;
	}
	,getGClickId: function() {
		return this.gClickId;
	}
	,setGClickId: function(gClickId) {
		this.gClickId = gClickId;
	}
	,getSource: function() {
		return this.source;
	}
	,setSource: function(source) {
		this.source = source;
	}
	,getId: function() {
		return this.id;
	}
	,setId: function(id) {
		this.id = id;
	}
	,increaseResponseCount: function(byAmount) {
		if(byAmount == null) byAmount = 1;
		this.responseCount += byAmount;
	}
	,getResponseCount: function() {
		return this.responseCount;
	}
	,setResponseCount: function(responseCount) {
		this.responseCount = responseCount;
	}
	,getCreationTime: function() {
		return this.creationTime;
	}
	,setCreationTime: function(creationTime) {
		this.creationTime = creationTime;
	}
	,getType: function() {
		return this.type;
	}
	,setType: function(type) {
		this.type = type;
	}
	,validate: function() {
		if(this.source == null) googleAnalytics.Tracker._raiseError("Campaigns need to have at least the \"source\" attribute defined.","Campaign.validate");
	}
	,content: null
	,term: null
	,medium: null
	,name: null
	,dClickId: null
	,gClickId: null
	,source: null
	,id: null
	,responseCount: null
	,creationTime: null
	,type: null
	,__class__: googleAnalytics.Campaign
}
googleAnalytics.Config = function() {
	this.sitespeedSampleRate = 1;
	this.endPointPath = "/__utm.gif";
	this.endPointHost = "www.google-analytics.com";
	this.requestTimeout = 1;
	this.fireAndForget = false;
	this.sendOnShutdown = false;
	this.errorSeverity = 2;
};
$hxClasses["googleAnalytics.Config"] = googleAnalytics.Config;
googleAnalytics.Config.__name__ = ["googleAnalytics","Config"];
googleAnalytics.Config.prototype = {
	setSitespeedSampleRate: function(sitespeedSampleRate) {
		if(sitespeedSampleRate < 0 || sitespeedSampleRate > 100) {
			googleAnalytics.Tracker._raiseError("For consistency with ga.js, sample rates must be specified as a number between 0 and 100.","config.setSitespeedSampleRate");
			return;
		}
		this.sitespeedSampleRate = sitespeedSampleRate;
	}
	,getSitespeedSampleRate: function() {
		return this.sitespeedSampleRate;
	}
	,setEndPointPath: function(endPointPath) {
		this.endPointPath = endPointPath;
	}
	,getEndPointPath: function() {
		return this.endPointPath;
	}
	,setEndPointHost: function(endPointHost) {
		this.endPointHost = endPointHost;
	}
	,getEndPointHost: function() {
		return this.endPointHost;
	}
	,setRequestTimeout: function(requestTimeout) {
		this.requestTimeout = requestTimeout;
	}
	,getRequestTimeout: function() {
		return this.requestTimeout;
	}
	,setLoggingCallback: function(cb) {
		this.loggingCallback = cb;
	}
	,getLoggingCallback: function() {
		return this.loggingCallback;
	}
	,setFireAndForget: function(fireAndForget) {
		this.fireAndForget = fireAndForget;
	}
	,getFireAndForget: function() {
		return this.fireAndForget;
	}
	,setSendOnShutdown: function(sendOnShutdown) {
		this.sendOnShutdown = sendOnShutdown;
	}
	,getSendOnShutdown: function() {
		return this.sendOnShutdown;
	}
	,setErrorSeverity: function(errorSeverity) {
		this.errorSeverity = errorSeverity;
	}
	,getErrorSeverity: function() {
		return this.errorSeverity;
	}
	,sitespeedSampleRate: null
	,endPointPath: null
	,endPointHost: null
	,requestTimeout: null
	,loggingCallback: null
	,fireAndForget: null
	,sendOnShutdown: null
	,errorSeverity: null
	,__class__: googleAnalytics.Config
}
googleAnalytics.CustomVariable = function(index,name,value,scope) {
	if(scope == null) scope = 0;
	if(index == null) index = 0;
	this.scope = 3;
	if(index != 0) this.setIndex(index);
	if(name != null) this.setName(name);
	if(value != null) this.setValue(value);
	if(scope != 0) this.setScope(scope);
};
$hxClasses["googleAnalytics.CustomVariable"] = googleAnalytics.CustomVariable;
googleAnalytics.CustomVariable.__name__ = ["googleAnalytics","CustomVariable"];
googleAnalytics.CustomVariable.prototype = {
	setScope: function(scope) {
		if(scope != 3 && scope != 2 && scope != 1) googleAnalytics.Tracker._raiseError("Custom Variable scope has to be one of the CustomVariable::SCOPE_* constant values.","CustomVariable.setScope");
		this.scope = scope;
	}
	,getScope: function() {
		return this.scope;
	}
	,setValue: function(value) {
		this.value = value;
	}
	,getValue: function() {
		return this.value;
	}
	,setName: function(name) {
		this.name = name;
	}
	,getName: function() {
		return this.name;
	}
	,setIndex: function(index) {
		if(index < 1 || index > 5) googleAnalytics.Tracker._raiseError("Custom Variable index has to be between 1 and 5.","CustomVariable.setIndex");
		this.index = index;
	}
	,getIndex: function() {
		return this.index;
	}
	,validate: function() {
		if((this.name + Std.string(this.value)).length > 128) googleAnalytics.Tracker._raiseError("Custom Variable combined name and value length must not be larger than 128 bytes.","CustomVariable.validate");
	}
	,scope: null
	,value: null
	,name: null
	,index: null
	,__class__: googleAnalytics.CustomVariable
}
googleAnalytics.DateTime = function(current) {
	if(current == null) this.date = Math.round(new Date().getTime()) + ""; else this.date = current;
};
$hxClasses["googleAnalytics.DateTime"] = googleAnalytics.DateTime;
googleAnalytics.DateTime.__name__ = ["googleAnalytics","DateTime"];
googleAnalytics.DateTime.prototype = {
	toString: function() {
		return this.date;
	}
	,date: null
	,__class__: googleAnalytics.DateTime
}
googleAnalytics.Event = function(category,action,label,value,noninteraction) {
	if(noninteraction == null) noninteraction = false;
	if(value == null) value = 0;
	this.noninteraction = false;
	if(category != null) this.setCategory(category);
	if(action != null) this.setAction(action);
	if(label != null) this.setLabel(label);
	this.setValue(value);
	this.setNoninteraction(noninteraction);
};
$hxClasses["googleAnalytics.Event"] = googleAnalytics.Event;
googleAnalytics.Event.__name__ = ["googleAnalytics","Event"];
googleAnalytics.Event.prototype = {
	setNoninteraction: function(value) {
		this.noninteraction = value;
	}
	,getNoninteraction: function() {
		return this.noninteraction;
	}
	,setValue: function(value) {
		this.value = value;
	}
	,getValue: function() {
		return this.value;
	}
	,setLabel: function(label) {
		this.label = label;
	}
	,getLabel: function() {
		return this.label;
	}
	,setAction: function(action) {
		this.action = action;
	}
	,getAction: function() {
		return this.action;
	}
	,setCategory: function(category) {
		this.category = category;
	}
	,getCategory: function() {
		return this.category;
	}
	,validate: function() {
		if(this.category == null || this.action == null) googleAnalytics.Tracker._raiseError("Events need at least to have a category and action defined.","Event.validate");
	}
	,noninteraction: null
	,value: null
	,label: null
	,action: null
	,category: null
	,__class__: googleAnalytics.Event
}
googleAnalytics.Item = function() {
	this.quantity = 1;
};
$hxClasses["googleAnalytics.Item"] = googleAnalytics.Item;
googleAnalytics.Item.__name__ = ["googleAnalytics","Item"];
googleAnalytics.Item.prototype = {
	setQuantity: function(quantity) {
		this.quantity = quantity;
	}
	,getQuantity: function() {
		return this.quantity;
	}
	,setPrice: function(price) {
		this.price = price;
	}
	,getPrice: function() {
		return this.price;
	}
	,setVariation: function(variation) {
		this.variation = variation;
	}
	,getVariation: function() {
		return this.variation;
	}
	,setName: function(name) {
		this.name = name;
	}
	,getName: function() {
		return this.name;
	}
	,setSku: function(sku) {
		this.sku = sku;
	}
	,getSku: function() {
		return this.sku;
	}
	,setOrderId: function(orderId) {
		this.orderId = orderId;
	}
	,getOrderId: function() {
		return this.orderId;
	}
	,validate: function() {
		if(this.sku == null) googleAnalytics.Tracker._raiseError("Items need to have a sku/product code defined.","Item.validate");
	}
	,quantity: null
	,price: null
	,variation: null
	,name: null
	,sku: null
	,orderId: null
	,__class__: googleAnalytics.Item
}
googleAnalytics.Page = function(path) {
	this.setPath(path);
};
$hxClasses["googleAnalytics.Page"] = googleAnalytics.Page;
googleAnalytics.Page.__name__ = ["googleAnalytics","Page"];
googleAnalytics.Page.prototype = {
	getLoadTime: function() {
		return this.loadTime;
	}
	,setLoadTime: function(loadTime) {
		this.loadTime = loadTime;
	}
	,getReferrer: function() {
		return this.referrer;
	}
	,setReferrer: function(referrer) {
		this.referrer = referrer;
	}
	,getCharset: function() {
		return this.charset;
	}
	,setCharset: function(encoding) {
		this.charset = encoding;
	}
	,getTitle: function() {
		return this.title;
	}
	,setTitle: function(title) {
		this.title = title;
	}
	,getPath: function() {
		return this.path;
	}
	,setPath: function(path) {
		if(path != null && path.charAt(0) != "/") googleAnalytics.Tracker._raiseError("The page path should always start with a slash (\"/\").","Page.setPath");
		this.path = path;
	}
	,loadTime: null
	,referrer: null
	,charset: null
	,title: null
	,path: null
	,__class__: googleAnalytics.Page
}
googleAnalytics.Session = function() {
	this.setSessionId(this.generateSessionId());
	this.setTrackCount(0);
	this.setStartTime(new googleAnalytics.DateTime());
};
$hxClasses["googleAnalytics.Session"] = googleAnalytics.Session;
googleAnalytics.Session.__name__ = ["googleAnalytics","Session"];
googleAnalytics.Session.prototype = {
	setStartTime: function(startTime) {
		this.startTime = startTime;
	}
	,getStartTime: function() {
		return this.startTime;
	}
	,increaseTrackCount: function(byAmount) {
		if(byAmount == null) byAmount = 1;
		this.trackCount += byAmount;
	}
	,setTrackCount: function(trackCount) {
		this.trackCount = trackCount;
	}
	,getTrackCount: function() {
		return this.trackCount;
	}
	,setSessionId: function(sessionId) {
		this.sessionId = sessionId;
	}
	,getSessionId: function() {
		return this.sessionId;
	}
	,generateSessionId: function() {
		return googleAnalytics.internals.Util.generate32bitRandom();
	}
	,fromUtmb: function(value) {
		var parts = value.split(".");
		if(parts.length != 4) {
			googleAnalytics.Tracker._raiseError("The given \"__utmb\" cookie value is invalid.","Session.fromUtmb");
			return this;
		}
		this.setTrackCount(googleAnalytics.internals.Util.parseInt(parts[1],0));
		this.setStartTime(new googleAnalytics.DateTime(parts[3]));
		return this;
	}
	,startTime: null
	,trackCount: null
	,sessionId: null
	,__class__: googleAnalytics.Session
}
googleAnalytics.SocialInteraction = function(network,action,target) {
	if(network != null) this.setNetwork(network);
	if(action != null) this.setAction(action);
	if(target != null) this.setTarget(target);
};
$hxClasses["googleAnalytics.SocialInteraction"] = googleAnalytics.SocialInteraction;
googleAnalytics.SocialInteraction.__name__ = ["googleAnalytics","SocialInteraction"];
googleAnalytics.SocialInteraction.prototype = {
	getTarget: function() {
		return this.target;
	}
	,setTarget: function(target) {
		this.target = target;
	}
	,getAction: function() {
		return this.action;
	}
	,setAction: function(action) {
		this.action = action;
	}
	,getNetwork: function() {
		return this.network;
	}
	,setNetwork: function(network) {
		this.network = network;
	}
	,validate: function() {
		if(this.network == null || this.action == null) googleAnalytics.Tracker._raiseError("Social interactions need to have at least the \"network\" and \"action\" attributes defined.","SocialInteraction.validate");
	}
	,target: null
	,action: null
	,network: null
	,__class__: googleAnalytics.SocialInteraction
}
googleAnalytics.Tracker = function(accountId,domainName,config) {
	this.allowHash = true;
	this.customVariables = new Array();
	googleAnalytics.Tracker.setConfig(config != null?config:new googleAnalytics.Config());
	this.setAccountId(accountId);
	this.setDomainName(domainName);
};
$hxClasses["googleAnalytics.Tracker"] = googleAnalytics.Tracker;
googleAnalytics.Tracker.__name__ = ["googleAnalytics","Tracker"];
googleAnalytics.Tracker.getConfig = function() {
	return googleAnalytics.Tracker.config;
}
googleAnalytics.Tracker.setConfig = function(config) {
	googleAnalytics.Tracker.config = config;
}
googleAnalytics.Tracker._raiseError = function(message,method) {
	message = method + "(): " + message;
	var errorSeverity = googleAnalytics.Tracker.config != null?googleAnalytics.Tracker.config.getErrorSeverity():0;
	switch(errorSeverity) {
	case 1:
		haxe.Log.trace(message,{ fileName : "Tracker.hx", lineNumber : 253, className : "googleAnalytics.Tracker", methodName : "_raiseError"});
		break;
	case 2:
		throw message;
		break;
	case 0:
		break;
	default:
	}
}
googleAnalytics.Tracker.prototype = {
	trackSocial: function(socialInteraction,page,session,visitor) {
		var request = new googleAnalytics.internals.request.SocialInteractionRequest(googleAnalytics.Tracker.config);
		request.setSocialInteraction(socialInteraction);
		request.setPage(page);
		request.setSession(session);
		request.setVisitor(visitor);
		request.setTracker(this);
		request.send();
	}
	,trackTransaction: function(transaction,session,visitor) {
		transaction.validate();
		var transactionRequest = new googleAnalytics.internals.request.TransactionRequest(googleAnalytics.Tracker.config);
		transactionRequest.setTransaction(transaction);
		transactionRequest.setSession(session);
		transactionRequest.setVisitor(visitor);
		transactionRequest.setTracker(this);
		transactionRequest.send();
		var item;
		var $it0 = ((function(_e) {
			return function() {
				return _e.iterator();
			};
		})(transaction.getItems()))();
		while( $it0.hasNext() ) {
			var item1 = $it0.next();
			item1.validate();
			var itemRequest = new googleAnalytics.internals.request.ItemRequest(googleAnalytics.Tracker.config);
			itemRequest.setItem(item1);
			itemRequest.setSession(session);
			itemRequest.setVisitor(visitor);
			itemRequest.setTracker(this);
			itemRequest.send();
		}
	}
	,trackEvent: function(event,session,visitor) {
		event.validate();
		var request = new googleAnalytics.internals.request.EventRequest(googleAnalytics.Tracker.config);
		request.setEvent(event);
		request.setSession(session);
		request.setVisitor(visitor);
		request.setTracker(this);
		request.send();
	}
	,trackPageview: function(page,session,visitor) {
		var request = new googleAnalytics.internals.request.PageviewRequest(googleAnalytics.Tracker.config);
		request.setPage(page);
		request.setSession(session);
		request.setVisitor(visitor);
		request.setTracker(this);
		request.send();
	}
	,getCampaign: function() {
		return this.campaign;
	}
	,setCampaign: function(campaign) {
		if(campaign != null) campaign.validate();
		this.campaign = campaign;
	}
	,removeCustomVariable: function(index) {
		HxOverrides.remove(this.customVariables,this.customVariables[index]);
	}
	,getCustomVariables: function() {
		return this.customVariables;
	}
	,addCustomVariable: function(customVariable) {
		customVariable.validate();
		this.customVariables[customVariable.getIndex()] = customVariable;
	}
	,getAllowHash: function() {
		return this.allowHash;
	}
	,setAllowHash: function(value) {
		this.allowHash = value;
	}
	,getDomainName: function() {
		return this.domainName;
	}
	,setDomainName: function(value) {
		this.domainName = value;
	}
	,getAccountId: function() {
		return this.accountId;
	}
	,setAccountId: function(value) {
		var r = new EReg("^(UA|MO)-[0-9]*-[0-9]*$","");
		if(!r.match(value)) googleAnalytics.Tracker._raiseError("\"" + value + "\" is not a valid Google Analytics account ID.","Tracker.setAccountId");
		this.accountId = value;
	}
	,campaign: null
	,customVariables: null
	,allowHash: null
	,domainName: null
	,accountId: null
	,__class__: googleAnalytics.Tracker
}
googleAnalytics.Transaction = function() {
	this.items = new haxe.ds.StringMap();
};
$hxClasses["googleAnalytics.Transaction"] = googleAnalytics.Transaction;
googleAnalytics.Transaction.__name__ = ["googleAnalytics","Transaction"];
googleAnalytics.Transaction.prototype = {
	setCountry: function(country) {
		this.country = country;
	}
	,getCountry: function() {
		return this.country;
	}
	,setRegion: function(region) {
		this.region = region;
	}
	,getRegion: function() {
		return this.region;
	}
	,setCity: function(city) {
		this.city = city;
	}
	,getCity: function() {
		return this.city;
	}
	,setShipping: function(shipping) {
		this.shipping = shipping;
	}
	,getShipping: function() {
		return this.shipping;
	}
	,setTax: function(tax) {
		this.tax = tax;
	}
	,getTax: function() {
		return this.tax;
	}
	,setTotal: function(total) {
		this.total = total;
	}
	,getTotal: function() {
		return this.total;
	}
	,setAffiliation: function(affiliation) {
		this.affiliation = affiliation;
	}
	,getAffiliation: function() {
		return this.affiliation;
	}
	,setOrderId: function(orderId) {
		this.orderId = orderId;
		var $it0 = ((function(_e) {
			return function() {
				return _e.iterator();
			};
		})(this.items))();
		while( $it0.hasNext() ) {
			var item = $it0.next();
			item.setOrderId(orderId);
		}
	}
	,getOrderId: function() {
		return this.orderId;
	}
	,getItems: function() {
		return this.items;
	}
	,addItem: function(item) {
		item.setOrderId(this.orderId);
		this.items.set(item.getSku(),item);
	}
	,validate: function() {
		if(this.items == null) googleAnalytics.Tracker._raiseError("Transactions need to consist of at least one item.","Transaction.validate");
	}
	,items: null
	,country: null
	,region: null
	,city: null
	,shipping: null
	,tax: null
	,total: null
	,affiliation: null
	,orderId: null
	,__class__: googleAnalytics.Transaction
}
googleAnalytics.URLParser = function(url) {
	this.url = url;
	var r = new EReg("^(?:(?![^:@]+:[^:@/]*@)([^:/?#.]+):)?(?://)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:/?#]*)(?::(\\d*))?)(((/(?:[^?#](?![^?#/]*\\.[^?#/.]+(?:[?#]|$)))*/?)?([^?#/]*))(?:\\?([^#]*))?(?:#(.*))?)","");
	r.match(url);
	var _g1 = 0, _g = googleAnalytics.URLParser.parts.length;
	while(_g1 < _g) {
		var i = _g1++;
		this[googleAnalytics.URLParser.parts[i]] = r.matched(i);
	}
};
$hxClasses["googleAnalytics.URLParser"] = googleAnalytics.URLParser;
googleAnalytics.URLParser.__name__ = ["googleAnalytics","URLParser"];
googleAnalytics.URLParser.parse = function(url) {
	return new googleAnalytics.URLParser(url);
}
googleAnalytics.URLParser.prototype = {
	toString: function() {
		var s = "For Url -> " + this.url + "\n";
		var _g1 = 0, _g = googleAnalytics.URLParser.parts.length;
		while(_g1 < _g) {
			var i = _g1++;
			s += googleAnalytics.URLParser.parts[i] + ": " + Std.string(Reflect.field(this,googleAnalytics.URLParser.parts[i])) + (i == googleAnalytics.URLParser.parts.length - 1?"":"\n");
		}
		return s;
	}
	,anchor: null
	,query: null
	,file: null
	,directory: null
	,path: null
	,relative: null
	,port: null
	,host: null
	,password: null
	,user: null
	,userInfo: null
	,authority: null
	,protocol: null
	,source: null
	,url: null
	,__class__: googleAnalytics.URLParser
}
googleAnalytics.Visitor = function() {
	var now = new googleAnalytics.DateTime();
	this.uniqueId = 0;
	this.setFirstVisitTime(now);
	this.setPreviousVisitTime(now);
	this.setCurrentVisitTime(now);
	this.setVisitCount(1);
};
$hxClasses["googleAnalytics.Visitor"] = googleAnalytics.Visitor;
googleAnalytics.Visitor.__name__ = ["googleAnalytics","Visitor"];
googleAnalytics.Visitor.prototype = {
	getScreenResolution: function() {
		return this.screenResolution;
	}
	,setScreenResolution: function(value) {
		this.screenResolution = value;
	}
	,getScreenColorDepth: function() {
		return this.screenColorDepth;
	}
	,setScreenColorDepth: function(value) {
		this.screenColorDepth = value;
	}
	,getJavaEnabled: function() {
		return this.javaEnabled;
	}
	,setJavaEnabled: function(value) {
		this.javaEnabled = value;
	}
	,getFlashVersion: function() {
		return this.flashVersion;
	}
	,setFlashVersion: function(value) {
		this.flashVersion = value;
	}
	,getLocale: function() {
		return this.locale;
	}
	,setLocale: function(value) {
		this.locale = value;
	}
	,getUserAgent: function() {
		return this.userAgent;
	}
	,setUserAgent: function(value) {
		this.userAgent = value;
	}
	,getIpAddress: function() {
		return this.ipAddress;
	}
	,setIpAddress: function(value) {
		this.ipAddress = value;
	}
	,getVisitCount: function() {
		return this.visitCount;
	}
	,setVisitCount: function(value) {
		this.visitCount = value;
	}
	,getCurrentVisitTime: function() {
		return this.currentVisitTime;
	}
	,setCurrentVisitTime: function(value) {
		this.currentVisitTime = value;
	}
	,getPreviousVisitTime: function() {
		return this.previousVisitTime;
	}
	,setPreviousVisitTime: function(value) {
		this.previousVisitTime = value;
	}
	,getFirstVisitTime: function() {
		return this.firstVisitTime;
	}
	,setFirstVisitTime: function(value) {
		this.firstVisitTime = value;
	}
	,addSession: function(session) {
		var startTime = session.getStartTime();
		if(startTime != this.currentVisitTime) {
			this.previousVisitTime = this.currentVisitTime;
			this.currentVisitTime = startTime;
			++this.visitCount;
		}
	}
	,getUniqueId: function() {
		if(this.uniqueId == 0) this.uniqueId = this.generateUniqueId();
		return this.uniqueId;
	}
	,setUniqueId: function(value) {
		if(value < 0 || value > 2147483647) googleAnalytics.Tracker._raiseError("Visitor unique ID has to be a 32-bit integer between 0 and " + 2147483647 + ".","Visitor.setUniqueId");
		this.uniqueId = value;
	}
	,generateUniqueId: function() {
		return (googleAnalytics.internals.Util.generate32bitRandom() ^ this.generateHash()) & 2147483647;
	}
	,generateHash: function() {
		return googleAnalytics.internals.Util.generateHash(this.userAgent + this.screenResolution + this.screenColorDepth);
	}
	,fromUtma: function(value) {
		var parts = value.split(".");
		if(parts.length != 6) {
			googleAnalytics.Tracker._raiseError("The given \"__utma\" cookie value is invalid.","Visitor.fromUtma");
			return this;
		}
		this.setUniqueId(googleAnalytics.internals.Util.parseInt(parts[1],0));
		this.setFirstVisitTime(new googleAnalytics.DateTime(parts[2]));
		this.setPreviousVisitTime(new googleAnalytics.DateTime(parts[3]));
		this.setCurrentVisitTime(new googleAnalytics.DateTime(parts[4]));
		this.setVisitCount(googleAnalytics.internals.Util.parseInt(parts[5],0));
		return this;
	}
	,screenResolution: null
	,screenColorDepth: null
	,javaEnabled: null
	,flashVersion: null
	,locale: null
	,userAgent: null
	,ipAddress: null
	,visitCount: null
	,currentVisitTime: null
	,previousVisitTime: null
	,firstVisitTime: null
	,uniqueId: null
	,__class__: googleAnalytics.Visitor
}
googleAnalytics.internals = {}
googleAnalytics.internals.ParameterHolder = function() {
	this.utmwv = "5.2.5";
	this.utmr = this.utmcs = this.utmfl = this.utmje = "0";
};
$hxClasses["googleAnalytics.internals.ParameterHolder"] = googleAnalytics.internals.ParameterHolder;
googleAnalytics.internals.ParameterHolder.__name__ = ["googleAnalytics","internals","ParameterHolder"];
googleAnalytics.internals.ParameterHolder.prototype = {
	toQueryString: function() {
		var qs = "";
		var property = "utmac";
		qs += property + "=" + StringTools.replace(Std.string(Reflect.field(this,property)) + "","&","%26") + "&";
		var _g = 0, _g1 = Type.getInstanceFields(googleAnalytics.internals.ParameterHolder);
		while(_g < _g1.length) {
			var property1 = _g1[_g];
			++_g;
			if(property1 != "utmac" && property1.charAt(0) != "_" && !Reflect.isFunction(Reflect.field(this,property1)) && Reflect.field(this,property1) != null && Reflect.field(this,property1) != "null") qs += property1 + "=" + StringTools.replace(Std.string(Reflect.field(this,property1)) + "","&","%26") + "&";
		}
		return qs;
	}
	,toHashTable: function() {
		var hash = new haxe.ds.StringMap();
		var property;
		var _g = 0, _g1 = Type.getInstanceFields(googleAnalytics.internals.ParameterHolder);
		while(_g < _g1.length) {
			var property1 = _g1[_g];
			++_g;
			if(property1.charAt(0) != "_" && !Reflect.isFunction(Reflect.field(this,property1))) {
				var value = Reflect.field(this,property1);
				hash.set(property1,value);
			}
		}
		return hash;
	}
	,__utmv: null
	,__utmx: null
	,utmsid: null
	,utmsa: null
	,utmsn: null
	,__utmz: null
	,utmcvr: null
	,utmcct: null
	,utmctr: null
	,utmcmd: null
	,utmccn: null
	,utmdclid: null
	,utmgclid: null
	,utmcsr: null
	,utmcid: null
	,utmcr: null
	,utmcn: null
	,utmtco: null
	,utmtrg: null
	,utmtci: null
	,utmtsp: null
	,utmttx: null
	,utmtto: null
	,utmtst: null
	,utmtid: null
	,utmiva: null
	,utmiqt: null
	,utmipr: null
	,utmipn: null
	,utmipc: null
	,__utmc: null
	,__utmb: null
	,utmhid: null
	,__utma: null
	,utmsr: null
	,utmsc: null
	,utmje: null
	,utmfl: null
	,utmul: null
	,utmip: null
	,utmr: null
	,utmcs: null
	,utmdt: null
	,utmp: null
	,utmu: null
	,utmni: null
	,utme: null
	,utmcc: null
	,utmn: null
	,utms: null
	,utmt: null
	,utmvid: null
	,utmhn: null
	,utmac: null
	,utmwv: null
	,__class__: googleAnalytics.internals.ParameterHolder
}
googleAnalytics.internals.Util = function() { }
$hxClasses["googleAnalytics.internals.Util"] = googleAnalytics.internals.Util;
googleAnalytics.internals.Util.__name__ = ["googleAnalytics","internals","Util"];
googleAnalytics.internals.Util.encodeUriComponent = function(value) {
	return googleAnalytics.internals.Util.convertToUriComponentEncoding(StringTools.urlEncode(value));
}
googleAnalytics.internals.Util.stringReplaceArray = function(s,sub,by) {
	var _g1 = 0, _g = sub.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(sub[i] == null) continue;
		s = StringTools.replace(s + " ",sub[i],by[i]);
	}
	return StringTools.trim(s);
}
googleAnalytics.internals.Util.parseInt = function(s,defaultVal) {
	return s == null?defaultVal:Std.parseInt(s);
}
googleAnalytics.internals.Util.convertToUriComponentEncoding = function(encodedValue) {
	return googleAnalytics.internals.Util.stringReplaceArray(encodedValue,["!","*","'","(",")"," ","+"],["%21","%2A","%27","%28","%29","%20","%20"]);
}
googleAnalytics.internals.Util.generate32bitRandom = function() {
	return Math.round(Math.random() * 2147483647);
}
googleAnalytics.internals.Util.generateHash = function(string) {
	var hash = 1;
	var current;
	var leftMost7;
	if(string != null && string != "") {
		hash = 0;
		var pos = string.length - 1;
		while(pos >= 0) {
			current = HxOverrides.cca(string,pos);
			hash = (hash << 6 & 268435455) + current + (current << 14);
			leftMost7 = hash & 266338304;
			if(leftMost7 != 0) hash ^= leftMost7 >> 21;
			pos--;
		}
	}
	return hash;
}
googleAnalytics.internals.X10 = function() {
	this.projectData = new haxe.ds.StringMap();
	this.KEY = "k";
	this.VALUE = "v";
	this.SET = ["k","v"];
	this.DELIM_BEGIN = "(";
	this.DELIM_END = ")";
	this.DELIM_SET = "*";
	this.DELIM_NUM_VALUE = "!";
	this.MINIMUM = 1;
	this.ESCAPE_CHAR_MAP = new haxe.ds.StringMap();
	this.ESCAPE_CHAR_MAP.set("'","'0");
	this.ESCAPE_CHAR_MAP.set(")","'1");
	this.ESCAPE_CHAR_MAP.set("*","'2");
	this.ESCAPE_CHAR_MAP.set("!","'3");
};
$hxClasses["googleAnalytics.internals.X10"] = googleAnalytics.internals.X10;
googleAnalytics.internals.X10.__name__ = ["googleAnalytics","internals","X10"];
googleAnalytics.internals.X10.prototype = {
	renderUrlString: function() {
		var result = "";
		var $it0 = this.projectData.keys();
		while( $it0.hasNext() ) {
			var projectId = $it0.next();
			result += projectId + this.renderProject(this.projectData.get(projectId));
		}
		return result;
	}
	,renderProject: function(project) {
		var result = "";
		var needTypeQualifier = false;
		var _g1 = 0, _g = this.SET.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(project.exists(this.SET[i])) {
				if(needTypeQualifier) result += this.SET[i];
				result += this.renderDataType(project.get(this.SET[i]));
				needTypeQualifier = false;
			} else needTypeQualifier = true;
		}
		return result;
	}
	,renderDataType: function(data) {
		var result = new Array();
		var lastI = 0;
		var _g1 = 0, _g = data.length;
		while(_g1 < _g) {
			var i = _g1++;
			var entry = data[i];
			if(entry != null) {
				var str = "";
				if(i != this.MINIMUM && i - 1 != lastI) {
					str += i;
					str += this.DELIM_NUM_VALUE;
				}
				str += this.escapeExtensibleValue(entry);
				result.push(str);
			}
			lastI = i;
		}
		return this.DELIM_BEGIN + result.join(this.DELIM_SET) + this.DELIM_END;
	}
	,SORT_NUMERIC: function(v1,v2) {
		if(v1 == v2) return 0;
		if(v1 > v2) return 1;
		return -1;
	}
	,escapeExtensibleValue: function(value) {
		var result = "";
		var _g1 = 0, _g = value.length;
		while(_g1 < _g) {
			var i = _g1++;
			var $char = value.charAt(i);
			if(this.ESCAPE_CHAR_MAP.exists($char)) result += this.ESCAPE_CHAR_MAP.get($char); else result += $char;
		}
		return result;
	}
	,clearInternal: function(projectId,type) {
		if(this.projectData.exists(projectId) && this.projectData.get(projectId).exists(type)) this.projectData.get(projectId).remove(type);
	}
	,getInternal: function(projectId,type,num) {
		if(!this.projectData.exists(projectId)) return null;
		var p = this.projectData.get(projectId);
		if(!p.exists(type)) return null;
		var a = p.get(type);
		if(a[num] == null) return null;
		return a[num];
	}
	,setInternal: function(projectId,type,num,value) {
		if(!this.projectData.exists(projectId)) this.projectData.set(projectId,new haxe.ds.StringMap());
		var p = this.projectData.get(projectId);
		if(!p.exists(type)) p.set(type,new Array());
		p.get(type)[num] = value;
	}
	,clearValue: function(projectId) {
		this.clearInternal(projectId,this.VALUE);
	}
	,getValue: function(projectId,num) {
		return this.getInternal(projectId,this.VALUE,num);
	}
	,setValue: function(projectId,num,value) {
		this.setInternal(projectId,this.VALUE,num,value);
	}
	,clearKey: function(projectId) {
		this.clearInternal(projectId,this.KEY);
	}
	,getKey: function(projectId,num) {
		return this.getInternal(projectId,this.KEY,num);
	}
	,setKey: function(projectId,num,value) {
		this.setInternal(projectId,this.KEY,num,value);
	}
	,hasProject: function(projectId) {
		return this.projectData.exists(projectId);
	}
	,MINIMUM: null
	,ESCAPE_CHAR_MAP: null
	,DELIM_NUM_VALUE: null
	,DELIM_SET: null
	,DELIM_END: null
	,DELIM_BEGIN: null
	,SET: null
	,VALUE: null
	,KEY: null
	,projectData: null
	,__class__: googleAnalytics.internals.X10
}
googleAnalytics.internals.request = {}
googleAnalytics.internals.request.Request = function(config) {
	this.setConfig(config != null?config:new googleAnalytics.Config());
};
$hxClasses["googleAnalytics.internals.request.Request"] = googleAnalytics.internals.request.Request;
googleAnalytics.internals.request.Request.__name__ = ["googleAnalytics","internals","request","Request"];
googleAnalytics.internals.request.Request.prototype = {
	generateDomainHash: function() {
		var hash = 1;
		if(this.tracker.getAllowHash()) hash = googleAnalytics.internals.Util.generateHash(this.tracker.getDomainName());
		return hash;
	}
	,buildCampaignParameters: function(p) {
		var campaign = this.tracker.getCampaign();
		if(campaign == null) return p;
		p.__utmz = this.generateDomainHash() + ".";
		p.__utmz += campaign.getCreationTime().toString() + ".";
		p.__utmz += this.visitor.getVisitCount() + ".";
		p.__utmz += campaign.getResponseCount() + ".";
		var data = "utmcid=" + campaign.getId() + "|" + "utmcsr=" + campaign.getSource() + "|" + "utmgclid=" + campaign.getGClickId() + "|" + "utmdclid=" + campaign.getDClickId() + "|" + "utmccn=" + campaign.getName() + "|" + "utmcmd=" + campaign.getMedium() + "|" + "utmctr=" + campaign.getTerm() + "|" + "utmcct=" + campaign.getContent();
		p.__utmz += StringTools.replace(StringTools.replace(data,"+","%20")," ","%20");
		return p;
	}
	,buildCookieParameters: function(p) {
		var domainHash = this.generateDomainHash();
		p.__utma = domainHash + ".";
		p.__utma += this.visitor.getUniqueId() + ".";
		p.__utma += this.visitor.getFirstVisitTime().toString() + ".";
		p.__utma += this.visitor.getPreviousVisitTime().toString() + ".";
		p.__utma += this.visitor.getCurrentVisitTime().toString() + ".";
		p.__utma += this.visitor.getVisitCount();
		p.__utmb = domainHash + ".";
		p.__utmb += this.session.getTrackCount() + ".";
		p.__utmb += 10 + ".";
		p.__utmb += this.session.getStartTime().toString();
		p.__utmc = domainHash;
		var cookies = "__utma=" + p.__utma + ";";
		if(p.__utmz != null) cookies += "+__utmz=" + p.__utmz + ";";
		if(p.__utmv != null) cookies += "+__utmv=" + p.__utmv + ";";
		p.utmcc = cookies;
		return p;
	}
	,buildCustomVariablesParameter: function(p) {
		var customVars = this.tracker.getCustomVariables();
		if(customVars == null) return p;
		if(customVars.length > 5) googleAnalytics.Tracker._raiseError("The sum of all custom variables cannot exceed 5 in any given request.","Request.buildCustomVariablesParameter");
		var x10 = new googleAnalytics.internals.X10();
		var name;
		var value;
		x10.clearKey("8");
		x10.clearKey("9");
		x10.clearKey("11");
		var _g = 0;
		while(_g < customVars.length) {
			var customVar = customVars[_g];
			++_g;
			name = googleAnalytics.internals.Util.encodeUriComponent(customVar.getName());
			value = googleAnalytics.internals.Util.encodeUriComponent(customVar.getValue());
			x10.setKey("8",customVar.getIndex(),name);
			x10.setKey("9",customVar.getIndex(),value);
			if(customVar.getScope() != 3) x10.setKey("11",customVar.getIndex(),customVar.getScope());
		}
		var eventFragment = x10.renderUrlString();
		if(eventFragment != null) {
			if(p.utme == null) p.utme = eventFragment; else p.utme += eventFragment;
		}
		return p;
	}
	,buildVisitorParameters: function(p) {
		if(this.visitor.getLocale() != null) p.utmul = StringTools.replace(this.visitor.getLocale(),"_","-").toLowerCase();
		if(this.visitor.getFlashVersion() != null) p.utmfl = this.visitor.getFlashVersion();
		p.utmje = this.visitor.getJavaEnabled()?"1":"0";
		if(this.visitor.getScreenColorDepth() != null) p.utmsc = this.visitor.getScreenColorDepth() + "-bit";
		p.utmsr = this.visitor.getScreenResolution();
		return p;
	}
	,buildParameters: function() {
		var p = new googleAnalytics.internals.ParameterHolder();
		p.utmac = this.tracker.getAccountId();
		p.utmhn = this.tracker.getDomainName();
		p.utmt = "" + this.getType();
		p.utmn = googleAnalytics.internals.Util.generate32bitRandom();
		p.utmip = this.visitor.getIpAddress();
		p.utmhid = this.session.getSessionId();
		p.utms = this.session.getTrackCount();
		p = this.buildVisitorParameters(p);
		p = this.buildCustomVariablesParameter(p);
		p = this.buildCampaignParameters(p);
		p = this.buildCookieParameters(p);
		return p;
	}
	,getType: function() {
		return null;
	}
	,send: function() {
		if(this.config.getEndPointHost() == null) return;
		var parameters = this.buildParameters();
		if(this.visitor != null) {
			this.setUserAgent(this.visitor.getUserAgent());
			parameters.utmvid = this.visitor.getUniqueId();
		}
		var queryString = googleAnalytics.internals.Util.convertToUriComponentEncoding(parameters.toQueryString());
		var url = "http://" + this.config.getEndPointHost() + this.config.getEndPointPath() + "?" + queryString;
		this.increaseTrackCount();
		var img = new Image();
		img.src = url;
	}
	,increaseTrackCount: function() {
		this.session.increaseTrackCount();
		if(this.session.getTrackCount() > 500) googleAnalytics.Tracker._raiseError("Google Analytics does not guarantee to process more than 500 requests per session.","Request.buildHttpRequest");
		if(this.tracker.getCampaign() != null) this.tracker.getCampaign().increaseResponseCount();
	}
	,onError: function(e) {
		haxe.Log.trace("ERROR: " + e,{ fileName : "Request.hx", lineNumber : 121, className : "googleAnalytics.internals.request.Request", methodName : "onError"});
	}
	,setSession: function(session) {
		this.session = session;
	}
	,getSession: function() {
		return this.session;
	}
	,setVisitor: function(visitor) {
		this.visitor = visitor;
	}
	,getVisitor: function() {
		return this.visitor;
	}
	,setTracker: function(tracker) {
		this.tracker = tracker;
	}
	,getTracker: function() {
		return this.tracker;
	}
	,setUserAgent: function(value) {
		this.userAgent = value;
	}
	,setConfig: function(config) {
		this.config = config;
	}
	,getConfig: function() {
		return this.config;
	}
	,session: null
	,visitor: null
	,tracker: null
	,userAgent: null
	,config: null
	,type: null
	,__class__: googleAnalytics.internals.request.Request
}
googleAnalytics.internals.request.EventRequest = function(config) {
	googleAnalytics.internals.request.Request.call(this,config);
};
$hxClasses["googleAnalytics.internals.request.EventRequest"] = googleAnalytics.internals.request.EventRequest;
googleAnalytics.internals.request.EventRequest.__name__ = ["googleAnalytics","internals","request","EventRequest"];
googleAnalytics.internals.request.EventRequest.__super__ = googleAnalytics.internals.request.Request;
googleAnalytics.internals.request.EventRequest.prototype = $extend(googleAnalytics.internals.request.Request.prototype,{
	setEvent: function(event) {
		this.event = event;
	}
	,getEvent: function() {
		return this.event;
	}
	,buildParameters: function() {
		var p = googleAnalytics.internals.request.Request.prototype.buildParameters.call(this);
		var x10 = new googleAnalytics.internals.X10();
		x10.clearKey("5");
		x10.clearValue("5");
		x10.setKey("5",1,this.event.getCategory());
		x10.setKey("5",2,this.event.getAction());
		if(this.event.getLabel() != null) x10.setKey("5",3,this.event.getLabel());
		if(this.event.getValue() != 0) x10.setValue("5",1,this.event.getValue());
		var eventFragment = x10.renderUrlString();
		if(eventFragment != null) {
			if(p.utme == null) p.utme = eventFragment; else p.utme += eventFragment;
		}
		if(this.event.getNoninteraction()) p.utmni = 1;
		return p;
	}
	,getType: function() {
		return "event";
	}
	,event: null
	,__class__: googleAnalytics.internals.request.EventRequest
});
googleAnalytics.internals.request.ItemRequest = function(config) {
	googleAnalytics.internals.request.Request.call(this,config);
};
$hxClasses["googleAnalytics.internals.request.ItemRequest"] = googleAnalytics.internals.request.ItemRequest;
googleAnalytics.internals.request.ItemRequest.__name__ = ["googleAnalytics","internals","request","ItemRequest"];
googleAnalytics.internals.request.ItemRequest.__super__ = googleAnalytics.internals.request.Request;
googleAnalytics.internals.request.ItemRequest.prototype = $extend(googleAnalytics.internals.request.Request.prototype,{
	setItem: function(item) {
		this.item = item;
	}
	,getItem: function() {
		return this.item;
	}
	,buildCustomVariablesParameter: function(p) {
		return p;
	}
	,buildVisitorParameters: function(p) {
		return p;
	}
	,buildParameters: function() {
		var p = googleAnalytics.internals.request.Request.prototype.buildParameters.call(this);
		p.utmtid = this.item.getOrderId();
		p.utmipc = this.item.getSku();
		p.utmipn = this.item.getName();
		p.utmiva = this.item.getVariation();
		p.utmipr = this.item.getPrice();
		p.utmiqt = this.item.getQuantity();
		return p;
	}
	,getType: function() {
		return "item";
	}
	,item: null
	,__class__: googleAnalytics.internals.request.ItemRequest
});
googleAnalytics.internals.request.PageviewRequest = function(config) {
	googleAnalytics.internals.request.Request.call(this,config);
};
$hxClasses["googleAnalytics.internals.request.PageviewRequest"] = googleAnalytics.internals.request.PageviewRequest;
googleAnalytics.internals.request.PageviewRequest.__name__ = ["googleAnalytics","internals","request","PageviewRequest"];
googleAnalytics.internals.request.PageviewRequest.__super__ = googleAnalytics.internals.request.Request;
googleAnalytics.internals.request.PageviewRequest.prototype = $extend(googleAnalytics.internals.request.Request.prototype,{
	setPage: function(page) {
		this.page = page;
	}
	,getPage: function() {
		return this.page;
	}
	,buildParameters: function() {
		var p = googleAnalytics.internals.request.Request.prototype.buildParameters.call(this);
		p.utmp = this.page.getPath();
		p.utmdt = this.page.getTitle();
		if(this.page.getCharset() != null) p.utmcs = this.page.getCharset();
		if(this.page.getReferrer() != null) p.utmr = this.page.getReferrer();
		if(this.page.getLoadTime() != 0) {
			if(p.utmn % 100 < this.config.getSitespeedSampleRate()) {
				if(p.utme == null) p.utme = "" + 0; else p.utme += 0;
			}
		}
		return p;
	}
	,getType: function() {
		return null;
	}
	,page: null
	,__class__: googleAnalytics.internals.request.PageviewRequest
});
googleAnalytics.internals.request.SocialInteractionRequest = function(config) {
	googleAnalytics.internals.request.PageviewRequest.call(this,config);
};
$hxClasses["googleAnalytics.internals.request.SocialInteractionRequest"] = googleAnalytics.internals.request.SocialInteractionRequest;
googleAnalytics.internals.request.SocialInteractionRequest.__name__ = ["googleAnalytics","internals","request","SocialInteractionRequest"];
googleAnalytics.internals.request.SocialInteractionRequest.__super__ = googleAnalytics.internals.request.PageviewRequest;
googleAnalytics.internals.request.SocialInteractionRequest.prototype = $extend(googleAnalytics.internals.request.PageviewRequest.prototype,{
	setSocialInteraction: function(socialInteraction) {
		this.socialInteraction = socialInteraction;
	}
	,getSocialInteraction: function() {
		return this.socialInteraction;
	}
	,buildParameters: function() {
		var p = googleAnalytics.internals.request.PageviewRequest.prototype.buildParameters.call(this);
		p.utmsn = this.socialInteraction.getNetwork();
		p.utmsa = this.socialInteraction.getAction();
		p.utmsid = this.socialInteraction.getTarget();
		if(p.utmsid == null) p.utmsid = this.page.getPath();
		return p;
	}
	,getType: function() {
		return "social";
	}
	,socialInteraction: null
	,__class__: googleAnalytics.internals.request.SocialInteractionRequest
});
googleAnalytics.internals.request.TransactionRequest = function(config) {
	googleAnalytics.internals.request.Request.call(this,config);
};
$hxClasses["googleAnalytics.internals.request.TransactionRequest"] = googleAnalytics.internals.request.TransactionRequest;
googleAnalytics.internals.request.TransactionRequest.__name__ = ["googleAnalytics","internals","request","TransactionRequest"];
googleAnalytics.internals.request.TransactionRequest.__super__ = googleAnalytics.internals.request.Request;
googleAnalytics.internals.request.TransactionRequest.prototype = $extend(googleAnalytics.internals.request.Request.prototype,{
	setTransaction: function(transaction) {
		this.transaction = transaction;
	}
	,getTransaction: function() {
		return this.transaction;
	}
	,buildCustomVariablesParameter: function(p) {
		return p;
	}
	,buildVisitorParameters: function(p) {
		return p;
	}
	,buildParameters: function() {
		var p = googleAnalytics.internals.request.Request.prototype.buildParameters.call(this);
		p.utmtid = this.transaction.getOrderId();
		p.utmtst = this.transaction.getAffiliation();
		p.utmtto = this.transaction.getTotal();
		p.utmttx = this.transaction.getTax();
		p.utmtsp = this.transaction.getShipping();
		p.utmtci = this.transaction.getCity();
		p.utmtrg = this.transaction.getRegion();
		p.utmtco = this.transaction.getCountry();
		return p;
	}
	,getType: function() {
		return "tran";
	}
	,transaction: null
	,__class__: googleAnalytics.internals.request.TransactionRequest
});
haxe.StackItem = $hxClasses["haxe.StackItem"] = { __ename__ : true, __constructs__ : ["CFunction","Module","FilePos","Method","Lambda"] }
haxe.StackItem.CFunction = ["CFunction",0];
haxe.StackItem.CFunction.toString = $estr;
haxe.StackItem.CFunction.__enum__ = haxe.StackItem;
haxe.StackItem.Module = function(m) { var $x = ["Module",1,m]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.StackItem.FilePos = function(s,file,line) { var $x = ["FilePos",2,s,file,line]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.StackItem.Method = function(classname,method) { var $x = ["Method",3,classname,method]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.StackItem.Lambda = function(v) { var $x = ["Lambda",4,v]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.CallStack = function() { }
$hxClasses["haxe.CallStack"] = haxe.CallStack;
haxe.CallStack.__name__ = ["haxe","CallStack"];
haxe.CallStack.exceptionStack = function() {
	return [];
}
haxe.CallStack.toString = function(stack) {
	var b = new StringBuf();
	var _g = 0;
	while(_g < stack.length) {
		var s = stack[_g];
		++_g;
		b.b += "\nCalled from ";
		haxe.CallStack.itemToString(b,s);
	}
	return b.b;
}
haxe.CallStack.itemToString = function(b,s) {
	var $e = (s);
	switch( $e[1] ) {
	case 0:
		b.b += "a C function";
		break;
	case 1:
		var m = $e[2];
		b.b += "module ";
		b.b += Std.string(m);
		break;
	case 2:
		var line = $e[4], file = $e[3], s1 = $e[2];
		if(s1 != null) {
			haxe.CallStack.itemToString(b,s1);
			b.b += " (";
		}
		b.b += Std.string(file);
		b.b += " line ";
		b.b += Std.string(line);
		if(s1 != null) b.b += ")";
		break;
	case 3:
		var meth = $e[3], cname = $e[2];
		b.b += Std.string(cname);
		b.b += ".";
		b.b += Std.string(meth);
		break;
	case 4:
		var n = $e[2];
		b.b += "local function #";
		b.b += Std.string(n);
		break;
	}
}
haxe.Log = function() { }
$hxClasses["haxe.Log"] = haxe.Log;
haxe.Log.__name__ = ["haxe","Log"];
haxe.Log.trace = function(v,infos) {
	js.Boot.__trace(v,infos);
}
haxe.Resource = function() { }
$hxClasses["haxe.Resource"] = haxe.Resource;
haxe.Resource.__name__ = ["haxe","Resource"];
haxe.Resource.listNames = function() {
	var names = new Array();
	var _g = 0, _g1 = haxe.Resource.content;
	while(_g < _g1.length) {
		var x = _g1[_g];
		++_g;
		names.push(x.name);
	}
	return names;
}
haxe.Resource.getString = function(name) {
	var _g = 0, _g1 = haxe.Resource.content;
	while(_g < _g1.length) {
		var x = _g1[_g];
		++_g;
		if(x.name == name) {
			if(x.str != null) return x.str;
			var b = haxe.Unserializer.run(x.data);
			return b.toString();
		}
	}
	return null;
}
haxe.Resource.getBytes = function(name) {
	var _g = 0, _g1 = haxe.Resource.content;
	while(_g < _g1.length) {
		var x = _g1[_g];
		++_g;
		if(x.name == name) {
			if(x.str != null) return haxe.io.Bytes.ofString(x.str);
			return haxe.Unserializer.run(x.data);
		}
	}
	return null;
}
haxe._Template = {}
haxe._Template.TemplateExpr = $hxClasses["haxe._Template.TemplateExpr"] = { __ename__ : true, __constructs__ : ["OpVar","OpExpr","OpIf","OpStr","OpBlock","OpForeach","OpMacro"] }
haxe._Template.TemplateExpr.OpVar = function(v) { var $x = ["OpVar",0,v]; $x.__enum__ = haxe._Template.TemplateExpr; $x.toString = $estr; return $x; }
haxe._Template.TemplateExpr.OpExpr = function(expr) { var $x = ["OpExpr",1,expr]; $x.__enum__ = haxe._Template.TemplateExpr; $x.toString = $estr; return $x; }
haxe._Template.TemplateExpr.OpIf = function(expr,eif,eelse) { var $x = ["OpIf",2,expr,eif,eelse]; $x.__enum__ = haxe._Template.TemplateExpr; $x.toString = $estr; return $x; }
haxe._Template.TemplateExpr.OpStr = function(str) { var $x = ["OpStr",3,str]; $x.__enum__ = haxe._Template.TemplateExpr; $x.toString = $estr; return $x; }
haxe._Template.TemplateExpr.OpBlock = function(l) { var $x = ["OpBlock",4,l]; $x.__enum__ = haxe._Template.TemplateExpr; $x.toString = $estr; return $x; }
haxe._Template.TemplateExpr.OpForeach = function(expr,loop) { var $x = ["OpForeach",5,expr,loop]; $x.__enum__ = haxe._Template.TemplateExpr; $x.toString = $estr; return $x; }
haxe._Template.TemplateExpr.OpMacro = function(name,params) { var $x = ["OpMacro",6,name,params]; $x.__enum__ = haxe._Template.TemplateExpr; $x.toString = $estr; return $x; }
haxe.Template = function(str) {
	var tokens = this.parseTokens(str);
	this.expr = this.parseBlock(tokens);
	if(!tokens.isEmpty()) throw "Unexpected '" + Std.string(tokens.first().s) + "'";
};
$hxClasses["haxe.Template"] = haxe.Template;
haxe.Template.__name__ = ["haxe","Template"];
haxe.Template.prototype = {
	run: function(e) {
		var $e = (e);
		switch( $e[1] ) {
		case 0:
			var v = $e[2];
			this.buf.b += Std.string(Std.string(this.resolve(v)));
			break;
		case 1:
			var e1 = $e[2];
			this.buf.b += Std.string(Std.string(e1()));
			break;
		case 2:
			var eelse = $e[4], eif = $e[3], e1 = $e[2];
			var v = e1();
			if(v == null || v == false) {
				if(eelse != null) this.run(eelse);
			} else this.run(eif);
			break;
		case 3:
			var str = $e[2];
			this.buf.b += Std.string(str);
			break;
		case 4:
			var l = $e[2];
			var $it0 = l.iterator();
			while( $it0.hasNext() ) {
				var e1 = $it0.next();
				this.run(e1);
			}
			break;
		case 5:
			var loop = $e[3], e1 = $e[2];
			var v = e1();
			try {
				var x = $iterator(v)();
				if(x.hasNext == null) throw null;
				v = x;
			} catch( e2 ) {
				try {
					if(v.hasNext == null) throw null;
				} catch( e3 ) {
					throw "Cannot iter on " + Std.string(v);
				}
			}
			this.stack.push(this.context);
			var v1 = v;
			while( v1.hasNext() ) {
				var ctx = v1.next();
				this.context = ctx;
				this.run(loop);
			}
			this.context = this.stack.pop();
			break;
		case 6:
			var params = $e[3], m = $e[2];
			var v = Reflect.field(this.macros,m);
			var pl = new Array();
			var old = this.buf;
			pl.push($bind(this,this.resolve));
			var $it1 = params.iterator();
			while( $it1.hasNext() ) {
				var p = $it1.next();
				var $e = (p);
				switch( $e[1] ) {
				case 0:
					var v1 = $e[2];
					pl.push(this.resolve(v1));
					break;
				default:
					this.buf = new StringBuf();
					this.run(p);
					pl.push(this.buf.b);
				}
			}
			this.buf = old;
			try {
				this.buf.b += Std.string(Std.string(v.apply(this.macros,pl)));
			} catch( e1 ) {
				var plstr = (function($this) {
					var $r;
					try {
						$r = pl.join(",");
					} catch( e2 ) {
						$r = "???";
					}
					return $r;
				}(this));
				var msg = "Macro call " + m + "(" + plstr + ") failed (" + Std.string(e1) + ")";
				throw msg;
			}
			break;
		}
	}
	,makeExpr2: function(l) {
		var p = l.pop();
		if(p == null) throw "<eof>";
		if(p.s) return this.makeConst(p.p);
		switch(p.p) {
		case "(":
			var e1 = this.makeExpr(l);
			var p1 = l.pop();
			if(p1 == null || p1.s) throw p1.p;
			if(p1.p == ")") return e1;
			var e2 = this.makeExpr(l);
			var p2 = l.pop();
			if(p2 == null || p2.p != ")") throw p2.p;
			return (function($this) {
				var $r;
				switch(p1.p) {
				case "+":
					$r = function() {
						return e1() + e2();
					};
					break;
				case "-":
					$r = function() {
						return e1() - e2();
					};
					break;
				case "*":
					$r = function() {
						return e1() * e2();
					};
					break;
				case "/":
					$r = function() {
						return e1() / e2();
					};
					break;
				case ">":
					$r = function() {
						return e1() > e2();
					};
					break;
				case "<":
					$r = function() {
						return e1() < e2();
					};
					break;
				case ">=":
					$r = function() {
						return e1() >= e2();
					};
					break;
				case "<=":
					$r = function() {
						return e1() <= e2();
					};
					break;
				case "==":
					$r = function() {
						return e1() == e2();
					};
					break;
				case "!=":
					$r = function() {
						return e1() != e2();
					};
					break;
				case "&&":
					$r = function() {
						return e1() && e2();
					};
					break;
				case "||":
					$r = function() {
						return e1() || e2();
					};
					break;
				default:
					$r = (function($this) {
						var $r;
						throw "Unknown operation " + p1.p;
						return $r;
					}($this));
				}
				return $r;
			}(this));
		case "!":
			var e = this.makeExpr(l);
			return function() {
				var v = e();
				return v == null || v == false;
			};
		case "-":
			var e3 = this.makeExpr(l);
			return function() {
				return -e3();
			};
		}
		throw p.p;
	}
	,makeExpr: function(l) {
		return this.makePath(this.makeExpr2(l),l);
	}
	,makePath: function(e,l) {
		var p = l.first();
		if(p == null || p.p != ".") return e;
		l.pop();
		var field = l.pop();
		if(field == null || !field.s) throw field.p;
		var f = field.p;
		haxe.Template.expr_trim.match(f);
		f = haxe.Template.expr_trim.matched(1);
		return this.makePath(function() {
			return Reflect.field(e(),f);
		},l);
	}
	,makeConst: function(v) {
		haxe.Template.expr_trim.match(v);
		v = haxe.Template.expr_trim.matched(1);
		if(HxOverrides.cca(v,0) == 34) {
			var str = HxOverrides.substr(v,1,v.length - 2);
			return function() {
				return str;
			};
		}
		if(haxe.Template.expr_int.match(v)) {
			var i = Std.parseInt(v);
			return function() {
				return i;
			};
		}
		if(haxe.Template.expr_float.match(v)) {
			var f = Std.parseFloat(v);
			return function() {
				return f;
			};
		}
		var me = this;
		return function() {
			return me.resolve(v);
		};
	}
	,parseExpr: function(data) {
		var l = new List();
		var expr = data;
		while(haxe.Template.expr_splitter.match(data)) {
			var p = haxe.Template.expr_splitter.matchedPos();
			var k = p.pos + p.len;
			if(p.pos != 0) l.add({ p : HxOverrides.substr(data,0,p.pos), s : true});
			var p1 = haxe.Template.expr_splitter.matched(0);
			l.add({ p : p1, s : p1.indexOf("\"") >= 0});
			data = haxe.Template.expr_splitter.matchedRight();
		}
		if(data.length != 0) l.add({ p : data, s : true});
		var e;
		try {
			e = this.makeExpr(l);
			if(!l.isEmpty()) throw l.first().p;
		} catch( s ) {
			if( js.Boot.__instanceof(s,String) ) {
				throw "Unexpected '" + s + "' in " + expr;
			} else throw(s);
		}
		return function() {
			try {
				return e();
			} catch( exc ) {
				throw "Error : " + Std.string(exc) + " in " + expr;
			}
		};
	}
	,parse: function(tokens) {
		var t = tokens.pop();
		var p = t.p;
		if(t.s) return haxe._Template.TemplateExpr.OpStr(p);
		if(t.l != null) {
			var pe = new List();
			var _g = 0, _g1 = t.l;
			while(_g < _g1.length) {
				var p1 = _g1[_g];
				++_g;
				pe.add(this.parseBlock(this.parseTokens(p1)));
			}
			return haxe._Template.TemplateExpr.OpMacro(p,pe);
		}
		if(HxOverrides.substr(p,0,3) == "if ") {
			p = HxOverrides.substr(p,3,p.length - 3);
			var e = this.parseExpr(p);
			var eif = this.parseBlock(tokens);
			var t1 = tokens.first();
			var eelse;
			if(t1 == null) throw "Unclosed 'if'";
			if(t1.p == "end") {
				tokens.pop();
				eelse = null;
			} else if(t1.p == "else") {
				tokens.pop();
				eelse = this.parseBlock(tokens);
				t1 = tokens.pop();
				if(t1 == null || t1.p != "end") throw "Unclosed 'else'";
			} else {
				t1.p = HxOverrides.substr(t1.p,4,t1.p.length - 4);
				eelse = this.parse(tokens);
			}
			return haxe._Template.TemplateExpr.OpIf(e,eif,eelse);
		}
		if(HxOverrides.substr(p,0,8) == "foreach ") {
			p = HxOverrides.substr(p,8,p.length - 8);
			var e = this.parseExpr(p);
			var efor = this.parseBlock(tokens);
			var t1 = tokens.pop();
			if(t1 == null || t1.p != "end") throw "Unclosed 'foreach'";
			return haxe._Template.TemplateExpr.OpForeach(e,efor);
		}
		if(haxe.Template.expr_splitter.match(p)) return haxe._Template.TemplateExpr.OpExpr(this.parseExpr(p));
		return haxe._Template.TemplateExpr.OpVar(p);
	}
	,parseBlock: function(tokens) {
		var l = new List();
		while(true) {
			var t = tokens.first();
			if(t == null) break;
			if(!t.s && (t.p == "end" || t.p == "else" || HxOverrides.substr(t.p,0,7) == "elseif ")) break;
			l.add(this.parse(tokens));
		}
		if(l.length == 1) return l.first();
		return haxe._Template.TemplateExpr.OpBlock(l);
	}
	,parseTokens: function(data) {
		var tokens = new List();
		while(haxe.Template.splitter.match(data)) {
			var p = haxe.Template.splitter.matchedPos();
			if(p.pos > 0) tokens.add({ p : HxOverrides.substr(data,0,p.pos), s : true, l : null});
			if(HxOverrides.cca(data,p.pos) == 58) {
				tokens.add({ p : HxOverrides.substr(data,p.pos + 2,p.len - 4), s : false, l : null});
				data = haxe.Template.splitter.matchedRight();
				continue;
			}
			var parp = p.pos + p.len;
			var npar = 1;
			while(npar > 0) {
				var c = HxOverrides.cca(data,parp);
				if(c == 40) npar++; else if(c == 41) npar--; else if(c == null) throw "Unclosed macro parenthesis";
				parp++;
			}
			var params = HxOverrides.substr(data,p.pos + p.len,parp - (p.pos + p.len) - 1).split(",");
			tokens.add({ p : haxe.Template.splitter.matched(2), s : false, l : params});
			data = HxOverrides.substr(data,parp,data.length - parp);
		}
		if(data.length > 0) tokens.add({ p : data, s : true, l : null});
		return tokens;
	}
	,resolve: function(v) {
		if(Reflect.hasField(this.context,v)) return Reflect.field(this.context,v);
		var $it0 = this.stack.iterator();
		while( $it0.hasNext() ) {
			var ctx = $it0.next();
			if(Reflect.hasField(ctx,v)) return Reflect.field(ctx,v);
		}
		if(v == "__current__") return this.context;
		return Reflect.field(haxe.Template.globals,v);
	}
	,execute: function(context,macros) {
		this.macros = macros == null?{ }:macros;
		this.context = context;
		this.stack = new List();
		this.buf = new StringBuf();
		this.run(this.expr);
		return this.buf.b;
	}
	,buf: null
	,stack: null
	,macros: null
	,context: null
	,expr: null
	,__class__: haxe.Template
}
haxe.Unserializer = function(buf) {
	this.buf = buf;
	this.length = buf.length;
	this.pos = 0;
	this.scache = new Array();
	this.cache = new Array();
	var r = haxe.Unserializer.DEFAULT_RESOLVER;
	if(r == null) {
		r = Type;
		haxe.Unserializer.DEFAULT_RESOLVER = r;
	}
	this.setResolver(r);
};
$hxClasses["haxe.Unserializer"] = haxe.Unserializer;
haxe.Unserializer.__name__ = ["haxe","Unserializer"];
haxe.Unserializer.initCodes = function() {
	var codes = new Array();
	var _g1 = 0, _g = haxe.Unserializer.BASE64.length;
	while(_g1 < _g) {
		var i = _g1++;
		codes[haxe.Unserializer.BASE64.charCodeAt(i)] = i;
	}
	return codes;
}
haxe.Unserializer.run = function(v) {
	return new haxe.Unserializer(v).unserialize();
}
haxe.Unserializer.prototype = {
	unserialize: function() {
		var _g = this.buf.charCodeAt(this.pos++);
		switch(_g) {
		case 110:
			return null;
		case 116:
			return true;
		case 102:
			return false;
		case 122:
			return 0;
		case 105:
			return this.readDigits();
		case 100:
			var p1 = this.pos;
			while(true) {
				var c = this.buf.charCodeAt(this.pos);
				if(c >= 43 && c < 58 || c == 101 || c == 69) this.pos++; else break;
			}
			return Std.parseFloat(HxOverrides.substr(this.buf,p1,this.pos - p1));
		case 121:
			var len = this.readDigits();
			if(this.buf.charCodeAt(this.pos++) != 58 || this.length - this.pos < len) throw "Invalid string length";
			var s = HxOverrides.substr(this.buf,this.pos,len);
			this.pos += len;
			s = StringTools.urlDecode(s);
			this.scache.push(s);
			return s;
		case 107:
			return Math.NaN;
		case 109:
			return Math.NEGATIVE_INFINITY;
		case 112:
			return Math.POSITIVE_INFINITY;
		case 97:
			var buf = this.buf;
			var a = new Array();
			this.cache.push(a);
			while(true) {
				var c = this.buf.charCodeAt(this.pos);
				if(c == 104) {
					this.pos++;
					break;
				}
				if(c == 117) {
					this.pos++;
					var n = this.readDigits();
					a[a.length + n - 1] = null;
				} else a.push(this.unserialize());
			}
			return a;
		case 111:
			var o = { };
			this.cache.push(o);
			this.unserializeObject(o);
			return o;
		case 114:
			var n = this.readDigits();
			if(n < 0 || n >= this.cache.length) throw "Invalid reference";
			return this.cache[n];
		case 82:
			var n = this.readDigits();
			if(n < 0 || n >= this.scache.length) throw "Invalid string reference";
			return this.scache[n];
		case 120:
			throw this.unserialize();
			break;
		case 99:
			var name = this.unserialize();
			var cl = this.resolver.resolveClass(name);
			if(cl == null) throw "Class not found " + name;
			var o = Type.createEmptyInstance(cl);
			this.cache.push(o);
			this.unserializeObject(o);
			return o;
		case 119:
			var name = this.unserialize();
			var edecl = this.resolver.resolveEnum(name);
			if(edecl == null) throw "Enum not found " + name;
			var e = this.unserializeEnum(edecl,this.unserialize());
			this.cache.push(e);
			return e;
		case 106:
			var name = this.unserialize();
			var edecl = this.resolver.resolveEnum(name);
			if(edecl == null) throw "Enum not found " + name;
			this.pos++;
			var index = this.readDigits();
			var tag = Type.getEnumConstructs(edecl)[index];
			if(tag == null) throw "Unknown enum index " + name + "@" + index;
			var e = this.unserializeEnum(edecl,tag);
			this.cache.push(e);
			return e;
		case 108:
			var l = new List();
			this.cache.push(l);
			var buf = this.buf;
			while(this.buf.charCodeAt(this.pos) != 104) l.add(this.unserialize());
			this.pos++;
			return l;
		case 98:
			var h = new haxe.ds.StringMap();
			this.cache.push(h);
			var buf = this.buf;
			while(this.buf.charCodeAt(this.pos) != 104) {
				var s = this.unserialize();
				h.set(s,this.unserialize());
			}
			this.pos++;
			return h;
		case 113:
			var h = new haxe.ds.IntMap();
			this.cache.push(h);
			var buf = this.buf;
			var c = this.buf.charCodeAt(this.pos++);
			while(c == 58) {
				var i = this.readDigits();
				h.set(i,this.unserialize());
				c = this.buf.charCodeAt(this.pos++);
			}
			if(c != 104) throw "Invalid IntMap format";
			return h;
		case 77:
			var h = new haxe.ds.ObjectMap();
			this.cache.push(h);
			var buf = this.buf;
			while(this.buf.charCodeAt(this.pos) != 104) {
				var s = this.unserialize();
				h.set(s,this.unserialize());
			}
			this.pos++;
			return h;
		case 118:
			var d = HxOverrides.strDate(HxOverrides.substr(this.buf,this.pos,19));
			this.cache.push(d);
			this.pos += 19;
			return d;
		case 115:
			var len = this.readDigits();
			var buf = this.buf;
			if(this.buf.charCodeAt(this.pos++) != 58 || this.length - this.pos < len) throw "Invalid bytes length";
			var codes = haxe.Unserializer.CODES;
			if(codes == null) {
				codes = haxe.Unserializer.initCodes();
				haxe.Unserializer.CODES = codes;
			}
			var i = this.pos;
			var rest = len & 3;
			var size = (len >> 2) * 3 + (rest >= 2?rest - 1:0);
			var max = i + (len - rest);
			var bytes = haxe.io.Bytes.alloc(size);
			var bpos = 0;
			while(i < max) {
				var c1 = codes[buf.charCodeAt(i++)];
				var c2 = codes[buf.charCodeAt(i++)];
				bytes.b[bpos++] = (c1 << 2 | c2 >> 4) & 255;
				var c3 = codes[buf.charCodeAt(i++)];
				bytes.b[bpos++] = (c2 << 4 | c3 >> 2) & 255;
				var c4 = codes[buf.charCodeAt(i++)];
				bytes.b[bpos++] = (c3 << 6 | c4) & 255;
			}
			if(rest >= 2) {
				var c1 = codes[buf.charCodeAt(i++)];
				var c2 = codes[buf.charCodeAt(i++)];
				bytes.b[bpos++] = (c1 << 2 | c2 >> 4) & 255;
				if(rest == 3) {
					var c3 = codes[buf.charCodeAt(i++)];
					bytes.b[bpos++] = (c2 << 4 | c3 >> 2) & 255;
				}
			}
			this.pos += len;
			this.cache.push(bytes);
			return bytes;
		case 67:
			var name = this.unserialize();
			var cl = this.resolver.resolveClass(name);
			if(cl == null) throw "Class not found " + name;
			var o = Type.createEmptyInstance(cl);
			this.cache.push(o);
			o.hxUnserialize(this);
			if(this.buf.charCodeAt(this.pos++) != 103) throw "Invalid custom data";
			return o;
		default:
		}
		this.pos--;
		throw "Invalid char " + this.buf.charAt(this.pos) + " at position " + this.pos;
	}
	,unserializeEnum: function(edecl,tag) {
		if(this.buf.charCodeAt(this.pos++) != 58) throw "Invalid enum format";
		var nargs = this.readDigits();
		if(nargs == 0) return Type.createEnum(edecl,tag);
		var args = new Array();
		while(nargs-- > 0) args.push(this.unserialize());
		return Type.createEnum(edecl,tag,args);
	}
	,unserializeObject: function(o) {
		while(true) {
			if(this.pos >= this.length) throw "Invalid object";
			if(this.buf.charCodeAt(this.pos) == 103) break;
			var k = this.unserialize();
			if(!js.Boot.__instanceof(k,String)) throw "Invalid object key";
			var v = this.unserialize();
			o[k] = v;
		}
		this.pos++;
	}
	,readDigits: function() {
		var k = 0;
		var s = false;
		var fpos = this.pos;
		while(true) {
			var c = this.buf.charCodeAt(this.pos);
			if(c != c) break;
			if(c == 45) {
				if(this.pos != fpos) break;
				s = true;
				this.pos++;
				continue;
			}
			if(c < 48 || c > 57) break;
			k = k * 10 + (c - 48);
			this.pos++;
		}
		if(s) k *= -1;
		return k;
	}
	,setResolver: function(r) {
		if(r == null) this.resolver = { resolveClass : function(_) {
			return null;
		}, resolveEnum : function(_) {
			return null;
		}}; else this.resolver = r;
	}
	,resolver: null
	,scache: null
	,cache: null
	,length: null
	,pos: null
	,buf: null
	,__class__: haxe.Unserializer
}
haxe.ds = {}
haxe.ds.IntMap = function() {
	this.h = { };
};
$hxClasses["haxe.ds.IntMap"] = haxe.ds.IntMap;
haxe.ds.IntMap.__name__ = ["haxe","ds","IntMap"];
haxe.ds.IntMap.__interfaces__ = [IMap];
haxe.ds.IntMap.prototype = {
	exists: function(key) {
		return this.h.hasOwnProperty(key);
	}
	,get: function(key) {
		return this.h[key];
	}
	,set: function(key,value) {
		this.h[key] = value;
	}
	,h: null
	,__class__: haxe.ds.IntMap
}
haxe.ds.ObjectMap = function() {
	this.h = { };
	this.h.__keys__ = { };
};
$hxClasses["haxe.ds.ObjectMap"] = haxe.ds.ObjectMap;
haxe.ds.ObjectMap.__name__ = ["haxe","ds","ObjectMap"];
haxe.ds.ObjectMap.__interfaces__ = [IMap];
haxe.ds.ObjectMap.prototype = {
	set: function(key,value) {
		var id = key.__id__ != null?key.__id__:key.__id__ = ++haxe.ds.ObjectMap.count;
		this.h[id] = value;
		this.h.__keys__[id] = key;
	}
	,h: null
	,__class__: haxe.ds.ObjectMap
}
haxe.ds.StringMap = function() {
	this.h = { };
};
$hxClasses["haxe.ds.StringMap"] = haxe.ds.StringMap;
haxe.ds.StringMap.__name__ = ["haxe","ds","StringMap"];
haxe.ds.StringMap.__interfaces__ = [IMap];
haxe.ds.StringMap.prototype = {
	iterator: function() {
		return { ref : this.h, it : this.keys(), hasNext : function() {
			return this.it.hasNext();
		}, next : function() {
			var i = this.it.next();
			return this.ref["$" + i];
		}};
	}
	,keys: function() {
		var a = [];
		for( var key in this.h ) {
		if(this.h.hasOwnProperty(key)) a.push(key.substr(1));
		}
		return HxOverrides.iter(a);
	}
	,remove: function(key) {
		key = "$" + key;
		if(!this.h.hasOwnProperty(key)) return false;
		delete(this.h[key]);
		return true;
	}
	,exists: function(key) {
		return this.h.hasOwnProperty("$" + key);
	}
	,get: function(key) {
		return this.h["$" + key];
	}
	,set: function(key,value) {
		this.h["$" + key] = value;
	}
	,h: null
	,__class__: haxe.ds.StringMap
}
haxe.io = {}
haxe.io.Bytes = function(length,b) {
	this.length = length;
	this.b = b;
};
$hxClasses["haxe.io.Bytes"] = haxe.io.Bytes;
haxe.io.Bytes.__name__ = ["haxe","io","Bytes"];
haxe.io.Bytes.alloc = function(length) {
	var a = new Array();
	var _g = 0;
	while(_g < length) {
		var i = _g++;
		a.push(0);
	}
	return new haxe.io.Bytes(length,a);
}
haxe.io.Bytes.ofString = function(s) {
	var a = new Array();
	var _g1 = 0, _g = s.length;
	while(_g1 < _g) {
		var i = _g1++;
		var c = s.charCodeAt(i);
		if(c <= 127) a.push(c); else if(c <= 2047) {
			a.push(192 | c >> 6);
			a.push(128 | c & 63);
		} else if(c <= 65535) {
			a.push(224 | c >> 12);
			a.push(128 | c >> 6 & 63);
			a.push(128 | c & 63);
		} else {
			a.push(240 | c >> 18);
			a.push(128 | c >> 12 & 63);
			a.push(128 | c >> 6 & 63);
			a.push(128 | c & 63);
		}
	}
	return new haxe.io.Bytes(a.length,a);
}
haxe.io.Bytes.prototype = {
	toString: function() {
		return this.readString(0,this.length);
	}
	,readString: function(pos,len) {
		if(pos < 0 || len < 0 || pos + len > this.length) throw haxe.io.Error.OutsideBounds;
		var s = "";
		var b = this.b;
		var fcc = String.fromCharCode;
		var i = pos;
		var max = pos + len;
		while(i < max) {
			var c = b[i++];
			if(c < 128) {
				if(c == 0) break;
				s += fcc(c);
			} else if(c < 224) s += fcc((c & 63) << 6 | b[i++] & 127); else if(c < 240) {
				var c2 = b[i++];
				s += fcc((c & 31) << 12 | (c2 & 127) << 6 | b[i++] & 127);
			} else {
				var c2 = b[i++];
				var c3 = b[i++];
				s += fcc((c & 15) << 18 | (c2 & 127) << 12 | c3 << 6 & 127 | b[i++] & 127);
			}
		}
		return s;
	}
	,b: null
	,length: null
	,__class__: haxe.io.Bytes
}
haxe.io.Eof = function() { }
$hxClasses["haxe.io.Eof"] = haxe.io.Eof;
haxe.io.Eof.__name__ = ["haxe","io","Eof"];
haxe.io.Eof.prototype = {
	toString: function() {
		return "Eof";
	}
	,__class__: haxe.io.Eof
}
haxe.io.Error = $hxClasses["haxe.io.Error"] = { __ename__ : true, __constructs__ : ["Blocked","Overflow","OutsideBounds","Custom"] }
haxe.io.Error.Blocked = ["Blocked",0];
haxe.io.Error.Blocked.toString = $estr;
haxe.io.Error.Blocked.__enum__ = haxe.io.Error;
haxe.io.Error.Overflow = ["Overflow",1];
haxe.io.Error.Overflow.toString = $estr;
haxe.io.Error.Overflow.__enum__ = haxe.io.Error;
haxe.io.Error.OutsideBounds = ["OutsideBounds",2];
haxe.io.Error.OutsideBounds.toString = $estr;
haxe.io.Error.OutsideBounds.__enum__ = haxe.io.Error;
haxe.io.Error.Custom = function(e) { var $x = ["Custom",3,e]; $x.__enum__ = haxe.io.Error; $x.toString = $estr; return $x; }
var js = {}
js.Boot = function() { }
$hxClasses["js.Boot"] = js.Boot;
js.Boot.__name__ = ["js","Boot"];
js.Boot.__unhtml = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
js.Boot.__trace = function(v,i) {
	var msg = i != null?i.fileName + ":" + i.lineNumber + ": ":"";
	msg += js.Boot.__string_rec(v,"");
	if(i != null && i.customParams != null) {
		var _g = 0, _g1 = i.customParams;
		while(_g < _g1.length) {
			var v1 = _g1[_g];
			++_g;
			msg += "," + js.Boot.__string_rec(v1,"");
		}
	}
	var d;
	if(typeof(document) != "undefined" && (d = document.getElementById("haxe:trace")) != null) d.innerHTML += js.Boot.__unhtml(msg) + "<br/>"; else if(typeof(console) != "undefined" && console.log != null) console.log(msg);
}
js.Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) return o[0];
				var str = o[0] + "(";
				s += "\t";
				var _g1 = 2, _g = o.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(i != 2) str += "," + js.Boot.__string_rec(o[i],s); else str += js.Boot.__string_rec(o[i],s);
				}
				return str + ")";
			}
			var l = o.length;
			var i;
			var str = "[";
			s += "\t";
			var _g = 0;
			while(_g < l) {
				var i1 = _g++;
				str += (i1 > 0?",":"") + js.Boot.__string_rec(o[i1],s);
			}
			str += "]";
			return str;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString) {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) { ;
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str.length != 2) str += ", \n";
		str += s + k + " : " + js.Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
	}
}
js.Boot.__interfLoop = function(cc,cl) {
	if(cc == null) return false;
	if(cc == cl) return true;
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0, _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js.Boot.__interfLoop(i1,cl)) return true;
		}
	}
	return js.Boot.__interfLoop(cc.__super__,cl);
}
js.Boot.__instanceof = function(o,cl) {
	if(cl == null) return false;
	switch(cl) {
	case Int:
		return (o|0) === o;
	case Float:
		return typeof(o) == "number";
	case Bool:
		return typeof(o) == "boolean";
	case String:
		return typeof(o) == "string";
	case Dynamic:
		return true;
	default:
		if(o != null) {
			if(typeof(cl) == "function") {
				if(o instanceof cl) {
					if(cl == Array) return o.__enum__ == null;
					return true;
				}
				if(js.Boot.__interfLoop(o.__class__,cl)) return true;
			}
		} else return false;
		if(cl == Class && o.__name__ != null) return true;
		if(cl == Enum && o.__ename__ != null) return true;
		return o.__enum__ == cl;
	}
}
js.Boot.__cast = function(o,t) {
	if(js.Boot.__instanceof(o,t)) return o; else throw "Cannot cast " + Std.string(o) + " to " + Std.string(t);
}
js.Browser = function() { }
$hxClasses["js.Browser"] = js.Browser;
js.Browser.__name__ = ["js","Browser"];
openfl.AssetCache = function() {
	this.enabled = true;
	this.bitmapData = new haxe.ds.StringMap();
	this.font = new haxe.ds.StringMap();
	this.sound = new haxe.ds.StringMap();
};
$hxClasses["openfl.AssetCache"] = openfl.AssetCache;
openfl.AssetCache.__name__ = ["openfl","AssetCache"];
openfl.AssetCache.prototype = {
	clear: function() {
		this.bitmapData = new haxe.ds.StringMap();
		this.font = new haxe.ds.StringMap();
		this.sound = new haxe.ds.StringMap();
	}
	,sound: null
	,font: null
	,enabled: null
	,bitmapData: null
	,__class__: openfl.AssetCache
}
openfl.Assets = function() { }
$hxClasses["openfl.Assets"] = openfl.Assets;
openfl.Assets.__name__ = ["openfl","Assets"];
openfl.Assets.exists = function(id,type) {
	openfl.Assets.initialize();
	if(type == null) type = openfl.AssetType.BINARY;
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) return library.exists(symbolName,type);
	return false;
}
openfl.Assets.getBitmapData = function(id,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.bitmapData.exists(id)) {
		var bitmapData = openfl.Assets.cache.bitmapData.get(id);
		if(openfl.Assets.isValidBitmapData(bitmapData)) return bitmapData;
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.IMAGE)) {
			if(library.isLocal(symbolName,openfl.AssetType.IMAGE)) {
				var bitmapData = library.getBitmapData(symbolName);
				if(useCache && openfl.Assets.cache.enabled) openfl.Assets.cache.bitmapData.set(id,bitmapData);
				return bitmapData;
			} else haxe.Log.trace("[openfl.Assets] BitmapData asset \"" + id + "\" exists, but only asynchronously",{ fileName : "Assets.hx", lineNumber : 118, className : "openfl.Assets", methodName : "getBitmapData"});
		} else haxe.Log.trace("[openfl.Assets] There is no BitmapData asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 124, className : "openfl.Assets", methodName : "getBitmapData"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 130, className : "openfl.Assets", methodName : "getBitmapData"});
	return null;
}
openfl.Assets.getBytes = function(id) {
	openfl.Assets.initialize();
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.BINARY)) {
			if(library.isLocal(symbolName,openfl.AssetType.BINARY)) return library.getBytes(symbolName); else haxe.Log.trace("[openfl.Assets] String or ByteArray asset \"" + id + "\" exists, but only asynchronously",{ fileName : "Assets.hx", lineNumber : 167, className : "openfl.Assets", methodName : "getBytes"});
		} else haxe.Log.trace("[openfl.Assets] There is no String or ByteArray asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 173, className : "openfl.Assets", methodName : "getBytes"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 179, className : "openfl.Assets", methodName : "getBytes"});
	return null;
}
openfl.Assets.getFont = function(id,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.font.exists(id)) return openfl.Assets.cache.font.get(id);
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.FONT)) {
			if(library.isLocal(symbolName,openfl.AssetType.FONT)) {
				var font = library.getFont(symbolName);
				if(useCache && openfl.Assets.cache.enabled) openfl.Assets.cache.font.set(id,font);
				return font;
			} else haxe.Log.trace("[openfl.Assets] Font asset \"" + id + "\" exists, but only asynchronously",{ fileName : "Assets.hx", lineNumber : 230, className : "openfl.Assets", methodName : "getFont"});
		} else haxe.Log.trace("[openfl.Assets] There is no Font asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 236, className : "openfl.Assets", methodName : "getFont"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 242, className : "openfl.Assets", methodName : "getFont"});
	return null;
}
openfl.Assets.getLibrary = function(name) {
	if(name == null || name == "") name = "default";
	return openfl.Assets.libraries.get(name);
}
openfl.Assets.getMovieClip = function(id) {
	openfl.Assets.initialize();
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.MOVIE_CLIP)) {
			if(library.isLocal(symbolName,openfl.AssetType.MOVIE_CLIP)) return library.getMovieClip(symbolName); else haxe.Log.trace("[openfl.Assets] MovieClip asset \"" + id + "\" exists, but only asynchronously",{ fileName : "Assets.hx", lineNumber : 292, className : "openfl.Assets", methodName : "getMovieClip"});
		} else haxe.Log.trace("[openfl.Assets] There is no MovieClip asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 298, className : "openfl.Assets", methodName : "getMovieClip"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 304, className : "openfl.Assets", methodName : "getMovieClip"});
	return null;
}
openfl.Assets.getMusic = function(id,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.sound.exists(id)) {
		var sound = openfl.Assets.cache.sound.get(id);
		if(openfl.Assets.isValidSound(sound)) return sound;
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.MUSIC)) {
			if(library.isLocal(symbolName,openfl.AssetType.MUSIC)) {
				var sound = library.getMusic(symbolName);
				if(useCache && openfl.Assets.cache.enabled) openfl.Assets.cache.sound.set(id,sound);
				return sound;
			} else haxe.Log.trace("[openfl.Assets] Sound asset \"" + id + "\" exists, but only asynchronously",{ fileName : "Assets.hx", lineNumber : 361, className : "openfl.Assets", methodName : "getMusic"});
		} else haxe.Log.trace("[openfl.Assets] There is no Sound asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 367, className : "openfl.Assets", methodName : "getMusic"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 373, className : "openfl.Assets", methodName : "getMusic"});
	return null;
}
openfl.Assets.getPath = function(id) {
	openfl.Assets.initialize();
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,null)) return library.getPath(symbolName); else haxe.Log.trace("[openfl.Assets] There is no asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 408, className : "openfl.Assets", methodName : "getPath"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 414, className : "openfl.Assets", methodName : "getPath"});
	return null;
}
openfl.Assets.getSound = function(id,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.sound.exists(id)) {
		var sound = openfl.Assets.cache.sound.get(id);
		if(openfl.Assets.isValidSound(sound)) return sound;
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.SOUND)) {
			if(library.isLocal(symbolName,openfl.AssetType.SOUND)) {
				var sound = library.getSound(symbolName);
				if(useCache && openfl.Assets.cache.enabled) openfl.Assets.cache.sound.set(id,sound);
				return sound;
			} else haxe.Log.trace("[openfl.Assets] Sound asset \"" + id + "\" exists, but only asynchronously",{ fileName : "Assets.hx", lineNumber : 471, className : "openfl.Assets", methodName : "getSound"});
		} else haxe.Log.trace("[openfl.Assets] There is no Sound asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 477, className : "openfl.Assets", methodName : "getSound"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 483, className : "openfl.Assets", methodName : "getSound"});
	return null;
}
openfl.Assets.getText = function(id) {
	openfl.Assets.initialize();
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.TEXT)) {
			if(library.isLocal(symbolName,openfl.AssetType.TEXT)) return library.getText(symbolName); else haxe.Log.trace("[openfl.Assets] String asset \"" + id + "\" exists, but only asynchronously",{ fileName : "Assets.hx", lineNumber : 520, className : "openfl.Assets", methodName : "getText"});
		} else haxe.Log.trace("[openfl.Assets] There is no String asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 526, className : "openfl.Assets", methodName : "getText"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 532, className : "openfl.Assets", methodName : "getText"});
	return null;
}
openfl.Assets.initialize = function() {
	if(!openfl.Assets.initialized) {
		openfl.Assets.registerLibrary("default",new DefaultAssetLibrary());
		openfl.Assets.initialized = true;
	}
}
openfl.Assets.isLocal = function(id,type,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled) {
		if(type == openfl.AssetType.IMAGE || type == null) {
			if(openfl.Assets.cache.bitmapData.exists(id)) return true;
		}
		if(type == openfl.AssetType.FONT || type == null) {
			if(openfl.Assets.cache.font.exists(id)) return true;
		}
		if(type == openfl.AssetType.SOUND || type == openfl.AssetType.MUSIC || type == null) {
			if(openfl.Assets.cache.sound.exists(id)) return true;
		}
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) return library.isLocal(symbolName,type);
	return false;
}
openfl.Assets.isValidBitmapData = function(bitmapData) {
	return true;
}
openfl.Assets.isValidSound = function(sound) {
	return true;
}
openfl.Assets.loadBitmapData = function(id,handler,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.bitmapData.exists(id)) {
		var bitmapData = openfl.Assets.cache.bitmapData.get(id);
		if(openfl.Assets.isValidBitmapData(bitmapData)) {
			handler(bitmapData);
			return;
		}
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.IMAGE)) {
			if(useCache && openfl.Assets.cache.enabled) library.loadBitmapData(symbolName,function(bitmapData) {
				openfl.Assets.cache.bitmapData.set(id,bitmapData);
				handler(bitmapData);
			}); else library.loadBitmapData(symbolName,handler);
			return;
		} else haxe.Log.trace("[openfl.Assets] There is no BitmapData asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 695, className : "openfl.Assets", methodName : "loadBitmapData"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 701, className : "openfl.Assets", methodName : "loadBitmapData"});
	handler(null);
}
openfl.Assets.loadBytes = function(id,handler) {
	openfl.Assets.initialize();
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.BINARY)) {
			library.loadBytes(symbolName,handler);
			return;
		} else haxe.Log.trace("[openfl.Assets] There is no String or ByteArray asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 731, className : "openfl.Assets", methodName : "loadBytes"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 737, className : "openfl.Assets", methodName : "loadBytes"});
	handler(null);
}
openfl.Assets.loadFont = function(id,handler,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.font.exists(id)) {
		handler(openfl.Assets.cache.font.get(id));
		return;
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.FONT)) {
			if(useCache && openfl.Assets.cache.enabled) library.loadFont(symbolName,function(font) {
				openfl.Assets.cache.font.set(id,font);
				handler(font);
			}); else library.loadFont(symbolName,handler);
			return;
		} else haxe.Log.trace("[openfl.Assets] There is no Font asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 788, className : "openfl.Assets", methodName : "loadFont"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 794, className : "openfl.Assets", methodName : "loadFont"});
	handler(null);
}
openfl.Assets.loadLibrary = function(name,handler) {
	openfl.Assets.initialize();
	var data = openfl.Assets.getText("libraries/" + name + ".dat");
	if(data != null && data != "") {
		var unserializer = new haxe.Unserializer(data);
		unserializer.setResolver({ resolveEnum : openfl.Assets.resolveEnum, resolveClass : openfl.Assets.resolveClass});
		var library = unserializer.unserialize();
		openfl.Assets.libraries.set(name,library);
		library.load(handler);
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + name + "\"",{ fileName : "Assets.hx", lineNumber : 824, className : "openfl.Assets", methodName : "loadLibrary"});
}
openfl.Assets.loadMusic = function(id,handler,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.sound.exists(id)) {
		var sound = openfl.Assets.cache.sound.get(id);
		if(openfl.Assets.isValidSound(sound)) {
			handler(sound);
			return;
		}
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.MUSIC)) {
			if(useCache && openfl.Assets.cache.enabled) library.loadMusic(symbolName,function(sound) {
				openfl.Assets.cache.sound.set(id,sound);
				handler(sound);
			}); else library.loadMusic(symbolName,handler);
			return;
		} else haxe.Log.trace("[openfl.Assets] There is no Sound asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 879, className : "openfl.Assets", methodName : "loadMusic"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 885, className : "openfl.Assets", methodName : "loadMusic"});
	handler(null);
}
openfl.Assets.loadMovieClip = function(id,handler) {
	openfl.Assets.initialize();
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.MOVIE_CLIP)) {
			library.loadMovieClip(symbolName,handler);
			return;
		} else haxe.Log.trace("[openfl.Assets] There is no MovieClip asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 915, className : "openfl.Assets", methodName : "loadMovieClip"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 921, className : "openfl.Assets", methodName : "loadMovieClip"});
	handler(null);
}
openfl.Assets.loadSound = function(id,handler,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.sound.exists(id)) {
		var sound = openfl.Assets.cache.sound.get(id);
		if(openfl.Assets.isValidSound(sound)) {
			handler(sound);
			return;
		}
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.SOUND)) {
			if(useCache && openfl.Assets.cache.enabled) library.loadSound(symbolName,function(sound) {
				openfl.Assets.cache.sound.set(id,sound);
				handler(sound);
			}); else library.loadSound(symbolName,handler);
			return;
		} else haxe.Log.trace("[openfl.Assets] There is no Sound asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 978, className : "openfl.Assets", methodName : "loadSound"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 984, className : "openfl.Assets", methodName : "loadSound"});
	handler(null);
}
openfl.Assets.loadText = function(id,handler) {
	openfl.Assets.initialize();
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.TEXT)) {
			library.loadText(symbolName,handler);
			return;
		} else haxe.Log.trace("[openfl.Assets] There is no String asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 1014, className : "openfl.Assets", methodName : "loadText"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 1020, className : "openfl.Assets", methodName : "loadText"});
	handler(null);
}
openfl.Assets.registerLibrary = function(name,library) {
	if(openfl.Assets.libraries.exists(name)) openfl.Assets.unloadLibrary(name);
	openfl.Assets.libraries.set(name,library);
}
openfl.Assets.resolveClass = function(name) {
	return Type.resolveClass(name);
}
openfl.Assets.resolveEnum = function(name) {
	var value = Type.resolveEnum(name);
	return value;
}
openfl.Assets.unloadLibrary = function(name) {
	openfl.Assets.initialize();
	var keys = openfl.Assets.cache.bitmapData.keys();
	while( keys.hasNext() ) {
		var key = keys.next();
		var libraryName = key.substring(0,key.indexOf(":"));
		var symbolName = HxOverrides.substr(key,key.indexOf(":") + 1,null);
		if(libraryName == name) openfl.Assets.cache.bitmapData.remove(key);
	}
	openfl.Assets.libraries.remove(name);
}
openfl.AssetData = function() {
};
$hxClasses["openfl.AssetData"] = openfl.AssetData;
openfl.AssetData.__name__ = ["openfl","AssetData"];
openfl.AssetData.prototype = {
	type: null
	,path: null
	,id: null
	,__class__: openfl.AssetData
}
openfl.AssetType = $hxClasses["openfl.AssetType"] = { __ename__ : true, __constructs__ : ["BINARY","FONT","IMAGE","MOVIE_CLIP","MUSIC","SOUND","TEMPLATE","TEXT"] }
openfl.AssetType.BINARY = ["BINARY",0];
openfl.AssetType.BINARY.toString = $estr;
openfl.AssetType.BINARY.__enum__ = openfl.AssetType;
openfl.AssetType.FONT = ["FONT",1];
openfl.AssetType.FONT.toString = $estr;
openfl.AssetType.FONT.__enum__ = openfl.AssetType;
openfl.AssetType.IMAGE = ["IMAGE",2];
openfl.AssetType.IMAGE.toString = $estr;
openfl.AssetType.IMAGE.__enum__ = openfl.AssetType;
openfl.AssetType.MOVIE_CLIP = ["MOVIE_CLIP",3];
openfl.AssetType.MOVIE_CLIP.toString = $estr;
openfl.AssetType.MOVIE_CLIP.__enum__ = openfl.AssetType;
openfl.AssetType.MUSIC = ["MUSIC",4];
openfl.AssetType.MUSIC.toString = $estr;
openfl.AssetType.MUSIC.__enum__ = openfl.AssetType;
openfl.AssetType.SOUND = ["SOUND",5];
openfl.AssetType.SOUND.toString = $estr;
openfl.AssetType.SOUND.__enum__ = openfl.AssetType;
openfl.AssetType.TEMPLATE = ["TEMPLATE",6];
openfl.AssetType.TEMPLATE.toString = $estr;
openfl.AssetType.TEMPLATE.__enum__ = openfl.AssetType;
openfl.AssetType.TEXT = ["TEXT",7];
openfl.AssetType.TEXT.toString = $estr;
openfl.AssetType.TEXT.__enum__ = openfl.AssetType;
openfl.display = {}
openfl.display.FPS = function(x,y,color) {
	if(color == null) color = 0;
	if(y == null) y = 10;
	if(x == null) x = 10;
	flash.text.TextField.call(this);
	this.set_x(x);
	this.set_y(y);
	this.currentFPS = 0;
	this.selectable = false;
	this.set_defaultTextFormat(new flash.text.TextFormat("_sans",12,color));
	this.set_text("FPS: ");
	this.cacheCount = 0;
	this.times = [];
	this.addEventListener(flash.events.Event.ENTER_FRAME,$bind(this,this.this_onEnterFrame));
};
$hxClasses["openfl.display.FPS"] = openfl.display.FPS;
openfl.display.FPS.__name__ = ["openfl","display","FPS"];
openfl.display.FPS.__super__ = flash.text.TextField;
openfl.display.FPS.prototype = $extend(flash.text.TextField.prototype,{
	this_onEnterFrame: function(event) {
		var currentTime = haxe.Timer.stamp();
		this.times.push(currentTime);
		while(this.times[0] < currentTime - 1) this.times.shift();
		var currentCount = this.times.length;
		this.currentFPS = Math.round((currentCount + this.cacheCount) / 2);
		if(currentCount != this.cacheCount && this.get_visible()) this.set_text("FPS: " + this.currentFPS);
		this.cacheCount = currentCount;
	}
	,times: null
	,cacheCount: null
	,currentFPS: null
	,__class__: openfl.display.FPS
});
openfl.display.Tilesheet = function(image) {
	this.__bitmap = image;
	this.__centerPoints = new Array();
	this.__tileRects = new Array();
	this.__tileUVs = new Array();
};
$hxClasses["openfl.display.Tilesheet"] = openfl.display.Tilesheet;
openfl.display.Tilesheet.__name__ = ["openfl","display","Tilesheet"];
openfl.display.Tilesheet.prototype = {
	getTileUVs: function(index) {
		return this.__tileUVs[index];
	}
	,getTileRect: function(index) {
		return this.__tileRects[index];
	}
	,getTileCenter: function(index) {
		return this.__centerPoints[index];
	}
	,drawTiles: function(graphics,tileData,smooth,flags) {
		if(flags == null) flags = 0;
		if(smooth == null) smooth = false;
		graphics.drawTiles(this,tileData,smooth,flags);
	}
	,addTileRect: function(rectangle,centerPoint) {
		this.__tileRects.push(rectangle);
		if(centerPoint == null) centerPoint = new flash.geom.Point();
		this.__centerPoints.push(centerPoint);
		this.__tileUVs.push(new flash.geom.Rectangle(rectangle.get_left() / this.__bitmap.get_width(),rectangle.get_top() / this.__bitmap.get_height(),rectangle.get_right() / this.__bitmap.get_width(),rectangle.get_bottom() / this.__bitmap.get_height()));
		return this.__tileRects.length - 1;
	}
	,__tileUVs: null
	,__tileRects: null
	,__centerPoints: null
	,__bitmap: null
	,__class__: openfl.display.Tilesheet
}
function $iterator(o) { if( o instanceof Array ) return function() { return HxOverrides.iter(o); }; return typeof(o.iterator) == 'function' ? $bind(o,o.iterator) : o.iterator; };
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; };
if(Array.prototype.indexOf) HxOverrides.remove = function(a,o) {
	var i = a.indexOf(o);
	if(i == -1) return false;
	a.splice(i,1);
	return true;
};
Math.__name__ = ["Math"];
Math.NaN = Number.NaN;
Math.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
Math.POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
$hxClasses.Math = Math;
Math.isFinite = function(i) {
	return isFinite(i);
};
Math.isNaN = function(i) {
	return isNaN(i);
};
String.prototype.__class__ = $hxClasses.String = String;
String.__name__ = ["String"];
Array.prototype.__class__ = $hxClasses.Array = Array;
Array.__name__ = ["Array"];
Date.prototype.__class__ = $hxClasses.Date = Date;
Date.__name__ = ["Date"];
var Int = $hxClasses.Int = { __name__ : ["Int"]};
var Dynamic = $hxClasses.Dynamic = { __name__ : ["Dynamic"]};
var Float = $hxClasses.Float = Number;
Float.__name__ = ["Float"];
var Bool = $hxClasses.Bool = Boolean;
Bool.__ename__ = ["Bool"];
var Class = $hxClasses.Class = { __name__ : ["Class"]};
var Enum = { };
haxe.Resource.content = [{ name : "__ASSET__:bitmap_LoadBar", data : "s23851:iVBORw0KGgoAAAANSUhEUgAAANoAAAANCAYAAADPJnBMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89%bN:rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz:SMBAPh%PDwrIsAHvgABeNMLCADATZvAMByH:w:qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf%bTAICd%Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA:g88wAAKCRFRHgg:P9eM4Ors7ONo62Dl8t6r8G:yJiYuP%5c%rcEAAAOF0ftH%LC%zGoA7BoBt:qIl7gRoXgugdfeLZrIPQLUAoOnaV:Nw%H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl:AV:1s%X48:Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H:LcL::wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s%wM%3zUAsGo%AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93:%8::UegJQCAZkmScQAAXkQkLlTKsz:HCAAARKCBKrBBG:TBGCzABhzBBdzBC:xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD:phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8%Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8%xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR%cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI%ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG%Qh8lsKnWJAcaT4U%IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr%h0uhHdlR5Ol9BX0svpR%iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK%YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI%pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q:pH5Z:YkGWcNMw09DpFGgsV:jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY:R27iz2qqaE5QzNKM1ezUvOUZj8H45hx%Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4:OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up%6Ynr5egJ5Mb6feeb3n%hx9L:1U:W36p:VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm%eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw%6TvZN9un2N:T0HDYfZDqsdWh1%c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc%Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26:uNu5p7ofcn8w0nymeWTNz0MPIQ%BR5dE:C5%VMGvfrH5PQ0%BZ7XnIy9jL5FXrdewt6V3qvdh7xc%9j5yn%M%4zw33jLeWV:MN8C3yLfLT8Nvnl%F30N:I:9k:3r:0QCngCUBZwOJgUGBWwL7%Hp8Ib%OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo%qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt:87fOH4p3iC%N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi:RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z%pn5mZ2y6xlhbL%xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a:zYnKOZarnivN7cyzytuQN5zvn::tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1%1dT1gvWd%1YfqGnRs%FYmKrhTbF5cVf9go3HjlG4dvyr%Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql%aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO:PLi8ZafJzs07P1SkVPRU%lQ27tLdtWHX%G7R7ht7vPY07NXbW7z3:T7JvttVAVVN1WbVZftJ%7P3P66Jqun4lvttXa1ObXHtxwPSA:0HIw6217nU1R3SPVRSj9Yr60cOxx%%:p3vdy0NNg1VjZzG4iNwRHnk6fcJ3:ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w%0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb%%6EHTh0kX:i%c7vDvOXPK4dPKy2%UTV7hXmq86X23qdOo8:pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb:1tWeOT3dvfN6b:fF9:XfFt1%cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v%3Njv3H9qwHeg89HcR:cGhYPP:pH1jw9DBY%Zj8uGDYbrnjg%OTniP3L96fynQ89kzyaeF:6i:suuFxYvfvjV69fO0ZjRoZfyl5O:bXyl:erA6xmv28bCxh6%yXgzMV70VvvtwXfcdx3vo98PT%R8IH8o:2j5sfVT0Kf7kxmTk:8EA5jz:GMzLdsAADhfaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu%7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI:Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjUtYzAxNCA3OS4xNTE0ODEsIDIwMTMvMDMvMTMtMTI6MDk6MTUgICAgICAgICI%CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI%CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgICAgICAgICB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgICAgICAgICB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iPgogICAgICAgICA8eG1wOkNyZWF0b3JUb29sPkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cyk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpDcmVhdGVEYXRlPjIwMTQtMDMtMjdUMTY6MzA6NTgrMDI6MDA8L3htcDpDcmVhdGVEYXRlPgogICAgICAgICA8eG1wOk1vZGlmeURhdGU%MjAxNC0wMy0yN1QxNjozMTozMSswMjowMDwveG1wOk1vZGlmeURhdGU%CiAgICAgICAgIDx4bXA6TWV0YWRhdGFEYXRlPjIwMTQtMDMtMjdUMTY6MzE6MzErMDI6MDA8L3htcDpNZXRhZGF0YURhdGU%CiAgICAgICAgIDxkYzpmb3JtYXQ%aW1hZ2UvcG5nPC9kYzpmb3JtYXQ%CiAgICAgICAgIDxwaG90b3Nob3A6Q29sb3JNb2RlPjM8L3Bob3Rvc2hvcDpDb2xvck1vZGU%CiAgICAgICAgIDxwaG90b3Nob3A6SUNDUHJvZmlsZT5zUkdCIElFQzYxOTY2LTIuMTwvcGhvdG9zaG9wOklDQ1Byb2ZpbGU%CiAgICAgICAgIDx4bXBNTTpJbnN0YW5jZUlEPnhtcC5paWQ6MWU4MjA2OGItMjhjOS03NzQzLTgzZWMtYmM1YjVjM2M3NzI4PC94bXBNTTpJbnN0YW5jZUlEPgogICAgICAgICA8eG1wTU06RG9jdW1lbnRJRD54bXAuZGlkOjFlODIwNjhiLTI4YzktNzc0My04M2VjLWJjNWI1YzNjNzcyODwveG1wTU06RG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOjFlODIwNjhiLTI4YzktNzc0My04M2VjLWJjNWI1YzNjNzcyODwveG1wTU06T3JpZ2luYWxEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06SGlzdG9yeT4KICAgICAgICAgICAgPHJkZjpTZXE%CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmNyZWF0ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ%eG1wLmlpZDoxZTgyMDY4Yi0yOGM5LTc3NDMtODNlYy1iYzViNWMzYzc3Mjg8L3N0RXZ0Omluc3RhbmNlSUQ%CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTQtMDMtMjdUMTY6MzA6NTgrMDI6MDA8L3N0RXZ0OndoZW4%CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cyk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ%CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICA8L3JkZjpTZXE%CiAgICAgICAgIDwveG1wTU06SGlzdG9yeT4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24%MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgICAgPHRpZmY6WFJlc29sdXRpb24%NzIwMDAwLzEwMDAwPC90aWZmOlhSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WVJlc29sdXRpb24%CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ%CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U%MTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24%MjE4PC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjEzPC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24%CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE%CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw:eHBhY2tldCBlbmQ9InciPz5YmfDUAAAAIGNIUk0AAHolAACAgwAA%f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAKgSURBVHja7JlLjtw2EIa:Iim1ujt2NtnlClkF2foCPoYP4asayNJAFoaNZDzTepEify%6E8zE82jZM8gA4bcTJBSLRf5VRdHevO1%x:jZe9s5Y:TOwCQADJA4PlQqldswADP%EYrMchFFbHPWgPgj:PbLq33Xbna77Z6u7bZmRtGCKKBCLpmjBasRrVS%4qgN7zyYw3A4C0hiihPD2O%mOO:Dq19fa9f9wI8vfmLb7tENcVUqlbX1zTuPmWOMPZ%vPjFMB4W0fCYuC3P0wIwoSBmzf4m2Uqnc0zuepCIw8xiOOQ7E5YK09IQPf75j03Ychpd0XYvzwizjTJjZDSu6Zle3jKVv9FFnvDtnzLu%fyrf:k856KH5PkaM71uzh9bfnti3u8a8Xo0kUWRInpKNaYpcDZfMcSJcDO:VpkDWln0JNC14L5yvp7JKZe1prWTI2UgR%nHhchiJaVH46:CeTevIeJIZnRyhAZ8NM7CTfmv3WKncV%kNCXIRS4JpLhwGcdVn5lgIl:0Fm2gUObKMeXG0jeGPP1G%UmylUrmtdQQVyBliEtNUOPTi0BfmJMI8QGnAIQzIi4gNeE:tHSuVlb1jzpCSmGYx9GIcICUI4wCLF1bABDmKphHO2:edJCtPcwigJsBnWdpOa1OySAnm%LfQRMoQxkEWPRQdS1:aFJpgOKe6oJXKykRYCqRFzLPoRzGOImcsjFfFeW8oQUkwtyJ4wzsws5PW9F:4fFZfXKk8h5ImQBK5wJJFjDCNYppEznLh4mMZvGdqW%valjE0hnfIOW5eWq:Y:PrO9uf6K7PjJeDZ9s8UpFb4bY%UCLQmo9xhzFaaeNS2VOuCbGfE:NHn8tA8Vu6:Vfv%VNFywZYkYmQbo6acGb4AAAD::wMATEd5aSJ5Q6gAAAAASUVORK5CYII"},{ name : "__ASSET__:bitmap_LogoBar", data : "s46231:iVBORw0KGgoAAAANSUhEUgAAAJEAAAA:CAYAAADgziq9AAAACXBIWXMAAAsTAAALEwEAmpwYAABNtWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMTQgNzkuMTUxNDgxLCAyMDEzLzAzLzEzLTEyOjA5OjE1ICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiCiAgICAgICAgICAgIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgICAgICAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyI%CiAgICAgICAgIDx4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ%eG1wLmRpZDo5NjkwREFGMkUzOTNFMzExQTNGNEUwQzZEMDU1NkEwRTwveG1wTU06T3JpZ2luYWxEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06RG9jdW1lbnRJRD54bXAuZGlkOjhEMjQzOEY5OTRCMDExRTNCMUVBOURCNjQ5MzIyOTkyPC94bXBNTTpEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06SW5zdGFuY2VJRD54bXAuaWlkOjVhNmUzZDJiLWE1ZGItZGI0Mi05YmFjLTU1MWM4YjY0ODZmYjwveG1wTU06SW5zdGFuY2VJRD4KICAgICAgICAgPHhtcE1NOkRlcml2ZWRGcm9tIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgPHN0UmVmOmluc3RhbmNlSUQ%eG1wLmlpZDozYTVkZmNlMC1lZDRlLTU2NDItYjAxMS1jMWZhOGM1OTNkMjc8L3N0UmVmOmluc3RhbmNlSUQ%CiAgICAgICAgICAgIDxzdFJlZjpkb2N1bWVudElEPnhtcC5kaWQ6OEQyNDM4Rjk5NEIwMTFFM0IxRUE5REI2NDkzMjI5OTI8L3N0UmVmOmRvY3VtZW50SUQ%CiAgICAgICAgICAgIDxzdFJlZjpvcmlnaW5hbERvY3VtZW50SUQ%eG1wLmRpZDo5NjkwREFGMkUzOTNFMzExQTNGNEUwQzZEMDU1NkEwRTwvc3RSZWY6b3JpZ2luYWxEb2N1bWVudElEPgogICAgICAgICA8L3htcE1NOkRlcml2ZWRGcm9tPgogICAgICAgICA8eG1wTU06SGlzdG9yeT4KICAgICAgICAgICAgPHJkZjpTZXE%CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPnNhdmVkPC9zdEV2dDphY3Rpb24%CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6ODAzODY4NEFCODk0RTMxMUFDQTFDNUUwNzU2QzQ4NzY8L3N0RXZ0Omluc3RhbmNlSUQ%CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTQtMDItMTNUMTY6MDg6MTkrMDI6MDA8L3N0RXZ0OndoZW4%CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDUzUuMSBXaW5kb3dzPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI%CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24%c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ%eG1wLmlpZDpmMWVmYWQ0OS1hOTZjLTc2NDQtOWE0Ny02MDg3OWJjNGZlOTY8L3N0RXZ0Omluc3RhbmNlSUQ%CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTQtMDItMTdUMjE6MDE6NDgrMDI6MDA8L3N0RXZ0OndoZW4%CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cyk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ%CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpjaGFuZ2VkPi88L3N0RXZ0OmNoYW5nZWQ%CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5jb252ZXJ0ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnBhcmFtZXRlcnM%ZnJvbSBpbWFnZS9qcGVnIHRvIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3A8L3N0RXZ0OnBhcmFtZXRlcnM%CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5kZXJpdmVkPC9zdEV2dDphY3Rpb24%CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpwYXJhbWV0ZXJzPmNvbnZlcnRlZCBmcm9tIGltYWdlL2pwZWcgdG8gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcDwvc3RFdnQ6cGFyYW1ldGVycz4KICAgICAgICAgICAgICAgPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPnNhdmVkPC9zdEV2dDphY3Rpb24%CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6YmM5ZWRkMjQtMzhkZC05ODRlLWE3MTctMzVhNGUwNmVmN2U1PC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE0LTAyLTE3VDIxOjAxOjQ4KzAyOjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI%CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24%c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ%eG1wLmlpZDozYTVkZmNlMC1lZDRlLTU2NDItYjAxMS1jMWZhOGM1OTNkMjc8L3N0RXZ0Omluc3RhbmNlSUQ%CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTQtMDMtMjdUMTU6NTg6NTUrMDI6MDA8L3N0RXZ0OndoZW4%CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cyk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ%CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpjaGFuZ2VkPi88L3N0RXZ0OmNoYW5nZWQ%CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5jb252ZXJ0ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnBhcmFtZXRlcnM%ZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZzwvc3RFdnQ6cGFyYW1ldGVycz4KICAgICAgICAgICAgICAgPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmRlcml2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnBhcmFtZXRlcnM%Y29udmVydGVkIGZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmc8L3N0RXZ0OnBhcmFtZXRlcnM%CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5zYXZlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOjM1ZDk2MjhmLWM5NzEtZTk0Yy04YWQ1LTdlMTA0ZmRmYzM3Mjwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4%MjAxNC0wMy0yN1QxNTo1ODo1NSswMjowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ%QWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ%Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPnNhdmVkPC9zdEV2dDphY3Rpb24%CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6NWE2ZTNkMmItYTVkYi1kYjQyLTliYWMtNTUxYzhiNjQ4NmZiPC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE0LTAzLTI3VDE2OjMwOjQwKzAyOjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgPC9yZGY6U2VxPgogICAgICAgICA8L3htcE1NOkhpc3Rvcnk%CiAgICAgICAgIDx4bXA6Q3JlYXRvclRvb2w%QWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKTwveG1wOkNyZWF0b3JUb29sPgogICAgICAgICA8eG1wOkNyZWF0ZURhdGU%MjAxNC0wMi0xMlQxNToxNDo0MiswMjowMDwveG1wOkNyZWF0ZURhdGU%CiAgICAgICAgIDx4bXA6TW9kaWZ5RGF0ZT4yMDE0LTAzLTI3VDE2OjMwOjQwKzAyOjAwPC94bXA6TW9kaWZ5RGF0ZT4KICAgICAgICAgPHhtcDpNZXRhZGF0YURhdGU%MjAxNC0wMy0yN1QxNjozMDo0MCswMjowMDwveG1wOk1ldGFkYXRhRGF0ZT4KICAgICAgICAgPHBob3Rvc2hvcDpMZWdhY3lJUFRDRGlnZXN0PkVDOUE5QjZEOTQxNUU3NjIzRkUyQjVCMDgxNjg2NkQzPC9waG90b3Nob3A6TGVnYWN5SVBUQ0RpZ2VzdD4KICAgICAgICAgPHBob3Rvc2hvcDpDb2xvck1vZGU%MzwvcGhvdG9zaG9wOkNvbG9yTW9kZT4KICAgICAgICAgPHBob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4KICAgICAgICAgICAgPHJkZjpCYWc%CiAgICAgICAgICAgICAgIDxyZGY6bGk%MjMyQjI5MkI0MTcxMkZBODNGQTlEQjQxRDdGQTdFOUQ8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT41MEM5NDZDNzg4NzQ3Qjg2MjI5N0IxOEIyMjU5QTJEQTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPjlCQUY2RDRCOENFMUM5NDY2QTgxMjRGM0YyRUJBMDI5PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%QTVGRjNGNjcxM0Y1MDY2RkNGREQxMkQyQjdBNTM1QTA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT5ENjgzMjg2OUVGOENENEFGREJGOUJDNzIzNEJGMjVBODwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPkVDQzcyNTdBRDg0Q0M0MDc4MzdGNTAyQkFBMERBQ0M2PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%RjNCMEQxQzcwOUY5MzFGMjJEQ0MzM0FBNzI2QkMwN0I8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjUyREI1Qzg5M0RFQkRGMTE5MzQzOUI3QkQ0QzU2QzI5PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDo1NzBFNzJCOUM3OTYxMURGODlDMEZGNUMzRTI4NUJBODwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6Nzc1NkMyOEM4NDdDRTAxMUJFMTBGNjVEQkIwRDU3QTE8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjgwRTZDRTA2RUQ2QUUyMTFBMDREOEMwMURFMTQ0NTQzPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDo4M0JDNzk1QjE1MTNFMDExODVBOUREMDQwQjRBNUEzNDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6OEQyNDM4Rjk5NEIwMTFFM0IxRUE5REI2NDkzMjI5OTI8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkIyNzQyRThCNzRDRUUwMTFCRjU1RUZDMUUwRDEzMENCPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDpDRjE5MzI4Qjc1ODBFMDExOUVDNkY0RDU5OTdDMzc5OTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6RTdEQTNEMDYxM0VCREYxMUI4MjBCOUQ2OTI3RTY3NEQ8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkY4MDZGRDEzM0Y4RkRGMTFBM0JFQjIzMjY5NTc0OTI0PC9yZGY6bGk%CiAgICAgICAgICAgIDwvcmRmOkJhZz4KICAgICAgICAgPC9waG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM%CiAgICAgICAgIDxkYzpmb3JtYXQ%aW1hZ2UvcG5nPC9kYzpmb3JtYXQ%CiAgICAgICAgIDx0aWZmOkltYWdlV2lkdGg%MzUwMDwvdGlmZjpJbWFnZVdpZHRoPgogICAgICAgICA8dGlmZjpJbWFnZUxlbmd0aD43Njg8L3RpZmY6SW1hZ2VMZW5ndGg%CiAgICAgICAgIDx0aWZmOkJpdHNQZXJTYW1wbGU%CiAgICAgICAgICAgIDxyZGY6U2VxPgogICAgICAgICAgICAgICA8cmRmOmxpPjg8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT44PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%ODwvcmRmOmxpPgogICAgICAgICAgICA8L3JkZjpTZXE%CiAgICAgICAgIDwvdGlmZjpCaXRzUGVyU2FtcGxlPgogICAgICAgICA8dGlmZjpQaG90b21ldHJpY0ludGVycHJldGF0aW9uPjI8L3RpZmY6UGhvdG9tZXRyaWNJbnRlcnByZXRhdGlvbj4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24%MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgICAgPHRpZmY6U2FtcGxlc1BlclBpeGVsPjM8L3RpZmY6U2FtcGxlc1BlclBpeGVsPgogICAgICAgICA8dGlmZjpYUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WFJlc29sdXRpb24%CiAgICAgICAgIDx0aWZmOllSZXNvbHV0aW9uPjcyMDAwMC8xMDAwMDwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6UmVzb2x1dGlvblVuaXQ%MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICAgICAgICAgPGV4aWY6RXhpZlZlcnNpb24%MDIyMTwvZXhpZjpFeGlmVmVyc2lvbj4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT42NTUzNTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24%MTQ1PC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjYzPC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24%CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE%CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw:eHBhY2tldCBlbmQ9InciPz4BfhA4AAAAIGNIUk0AAHolAACAgwAA%f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAADk2SURBVHja7L13lGVneeb72:HkWKdyrurqrs651WplBApGEhI5DMZ48GKMjW0crsczgw1ec68H%874Xi%bucbW2GAbDEIIBEIgYeUcWq1Wp%pQOddJdfLO949vn67qVksgZjwjM9prnXUq7LPDt5:vDc:7vN%R3q:yM7FJgOuB4ULdAxkyEZl9MZ0dqRAjYZ0W26VRrDNdbHC0ZPOEA9NxGVQZPN7aftpN:VkAj%NB2QEPOjsCfHhXmlt6YuxrjxFNByAAKAigWBKUbZgv45xa4YHjWf6oavN4XBXHegtMP8Uz%JdqiZqWp%SABNs3Jvk:dnXyvpEWAkkVpAZUi2C6ICckpGAAHAdn1UIxIJ4BOQqncnD:Gb40VeGTCQVk6S0g:W8BIgmoOVD36NgY5:%6coCPb82AakJhGdyoRHjTNuKbtxHu7SLY3YUeC%O4GmauSuXcDNnH76d%9DiZdrCC8NWX%d7hLO9Kq7jSW7j42QVR090UbIir:MI7BvnLg33oagNyS6D1p2m99jrartxCvF%HcB6cWajMgVEBRYNEH8T34zW2M3vfi4z:%ReIenX0FvjyS3znWJbbk%pb1uhnEkTN2KfooG%I8bV3b%Xdg3FYnARao:S8%0a6374ZrX0F8o:D4gloAI7:4ebm%u%tSdj9WVYPJzj6W79BzKlQD8J:fZbPFw0%F1LfAsfPFIgkwHKh5JI41MED797KAbkOK1nouGEnGz52HXrvCkzfDyt5YUYUQH6dg1r%%xW:SvbZdo7:7mfpaIGnF6h::SQ74ypn3oLHT7YpW%V:GQAquwxf18N9H9jBvmoWSrbC6K:ewNAvjaIY34OxJ6BWF%DRESlZwM8:Xf%13iIp:vvCc4T37sAqRMk%P0FbG9rZLMWCwcOa:Mau8zzF4ILnCergp9lcT1yuLL0Fov8hALJdWHXpv2mA5%7YwnBuBtx0mN2fv5WWK0w4fTfkVgUowkBSfNAtg5kDyQa5xQeNcRGQZN8iqQX09AALT54gFoClKvpkmTsDP%HYWA6UXDA9uloCfLw:wa:YLkMli2O6jPmT3q:lQNkF22PQ8eiuu6wEJZDe5GB6Uzszx4OiS%K6br51yyYy2VmQOyLs:IMrCXWdgVeOCtcVBFLgZmHlGcidhuoc2BWQNGjZAgM:B1oSKF:k5lRgeYJYey%xDa04Z1foirNTnmMjcPq1rk1GWJyyi5SUuXlXC:9mtJV3DCUJJjSouXz026d4%:Es74ypuK8VqDsuNFxogJyQuWVPhk9uaeXGoIry:DwPHM:yvohKSXoLRD%dFSo66Pta%e67t7KnsAhSq87uzx0gkJmCsVNip5gAUfYxOHc:1GYhrEMsDpIOhgkT34fqCuz6lO:irIv9pQXSPOFOjdIYZEKEwwqbHJfTinxpAFVsCOv80tVdfH60lc7eGMgNWM1BNS7TmnG5ZRM3LZT5VMXkz3XlQuAYAjgEYE9XlPeNtvCRLe309kTBK4Megu3d3PBXz:HlkznuiKlvgeiNAUiCogX9Ef7r%7dzVa0Adlhiz%9tJ5CZgYmz4knGRM5:7u9g4kFIxqCtEyZX4dlZlrM1pkZa2Li1n0ThJKy8BK2HgNVLnNTOE0o55D2I6BDT6V%ug%sKzOlAWAFFEgAIKHzkQ9v40p5OWJ6D3ByERrro:ujtaJrJ5F::Nekw9CZ4x4vL:LnsWxwDCMH%jgi3DqW5faSF7X1xiMtQXhGeOXb5Psx6kfDCWQ72cPuZHHtcj8Nv1hhJfTNaoIYNmsR73r2FXww4sGLCzl8fINxfgvGzYqeI2P:4X8HC09DTB0sNuPsoj49l%ULZ48EGmK%s8Isd%7gzrkLhjA%iS0bFBpJnnY%ZSg6WCcPbU:x%V5zLZko8dbbAHwVlzjRcuKyTj2:OwGwWIrs3sPmmW8hsj6NsqLP6vSfxGmAFoGCyUABCHlf3xbh9IMVNw2k298QgroC5CqV5MNtDJK47QP%VO2i7bRfn:vgvyB6FRAwCCiOex2HeAtFPtnlA1aPt5kH%y0gKZqZh%AMxUvslmDondtLEdD77ZZh:CroH4EQO7jrO55dNPheXIO3fWcXmZLYG6QBYJd%VXapI5trgWniA6WDsbuUzGzP82YYkekgCW2HTg%d498OTbAVW2qNsbVQgkIKtnwyh9p%Fcw:DC1XsGQU0qNnQG%WyvhhjW1rZ2BmBqARGCSpLkE%rRHfvYfDgPjI72wj1VMF8Aab%G95SFUkXZRvXo:5WTPQGrFDJhsEon3:bEH3ZJUhvg:5bo7C8LFI1WQTRS4:A1I%EBTqVg79%iXd5cG:rOrbZ80RSdj67kVmXnnkXWaIGVsXGtCEWJ3DLCJu8EpRWZIzuOCFKvH3YTUyt8qmXCvx5VKfNtUFPgmq8AkdeEYdMa3h4OP6l3jDArjBQK0C9CnZ7lMiBXQzu20l6ewfhrhqo47D0bTg9LzJMDxqroOhQN8DxyGryWyD6ibMxD:ZfO8i:CThQ0mDb%6OgmFCuiKcSBXMBzt0LyTjkTPjmCf6jB:cm1TVCugkTVSIeUsFzQQ0Dmge1S53coZH16YGKiMliO7ew%b23oXgLnPzjL5MMQ0SnW4WuiI7seqDFfPqgKROQVKy6jWuBXQQvCk53J7HL99K1bQPprRmCbXWQT0P2OzA5Kz6rgmdA4RjMPQPlCehsgefPsWB4jOlvWaKfbCs7sDnFb%7ogOV56L0JYqMqLK4KAEkinZl%CMxliHXDN17mgSWDz2Y0XpVHNxxoDbMnFQSrAZEOLl0UU8Epe9Rz4BgQGVIY:sSHSe0ZgfTzzH3xfqQaFFWYL:FsWqE9ognDGGy5iDLwPOyagwT0::x1pA7eQLzHQU2tgjMGi:8Ap1ZEhB0T7nV1EnInID8G1VkIKtDRDmMFeGqav9Qh92bmit40IPI8IenY180HpQboGeh9WxBqlohX:GC6PgVLz0EmA0cWcV5a4d%lFPH5i12jAfQmuCEdgoIJ8R5AUhAFtXVbGKpTUF0Sn%u%XiV14Bk4%004U6fwMgQCMFGBuToPDES5PqyBU4dA3AdR8:yyTG1ZITHsMvzxOvAgrDwNE3WRFbr%qKdh8XGYehDMIsgGJJIQboXFGjw9Ru7JGX6zbvOV2EUW9i0QvcZWdaAvysc3tUA%B903gtbtiZSrOQsDkD0KdgGsNnhulr%X4UXlEhog24MgXLm9nWutCoQ7IDogC9njxZG8IqyBWYBwFyR7DTh7BiSo5aA0B:EwTE8xVoVzIZVfC2lQrYIebtYnvPNDKikS7VdYYD4DM%AUoLQEkXbQE:5uBsw9AaUJSPeAEYbDOazTOZ48m%Nvcjb:GJYwo29yAL2pQGSBuinDLVEVGlFo2yOD4YEnVGcoQAXypyAegYkCTBT5clR5NYAkkaKzLc2nN7VAbhEG3w5yWoOsdeHOmn:c4%BYkBiAUJci4qa4Q3laxDZGCiaLPCoBUZ0hFZADoMX9YO78jVhIGJgFWPwG5E9D4TTIGuz9DUmMuAKNRTCrHu098NwS%QfO8n%WHL7hwGzUzy7:OZWWridqko4HuvzT1:neNCByPQjDtYMpRqqrkNgE0UEZKs6aFQpCdRqq8xANwpkFXjbgichFVkhCpMU6vPPqft7vNkBPQ8dlmqCIPffCBC0G%cOwOg5aGFKjgC6JczuCWwqpsFyBxQrfiQDxoMjMtBhoEcC%EJSuCWe%AaoKsgqmCe17hIvGkEB3MfLgVESicHyFRxcd:ku7cmHR1XsNt2%L%tp5lYsmgSb:eFWm54HpiPmhQG9G59aQRl%2weNVh:ujymuXZ970IDIdaAmxJxMCswZtG4CACyXvAldWXwC7DGYSpks8roHlXQKQBZfEjb38yWgG5mdgw3tVAn1hWCpfWIBVhQmcfxKsiu:KNkjCAgY87AKUZ0APwHSWbNnmMRXUmE4njgDdBSCSANPEMV1UHYjjuhKeXkWJ9gKqJ9ypJFPLuSgelAyomxxN8NpVe8kvlVQFex6Jy1zVGmRfJECH5VAv1DlSsPm%LlGIXGSZHVdYHB84XRmd27YmuWOkhesGk2hhDfINfvc7p:jKdImPRdR:QSDyRDqP54ma6JYIV7UERDU8NSz5D2bdcHgKjZKH4rnUbKiZzCqXICrzDvKeFr5200Y255chMQK9N6egUn%1FUpA:iXIHxPuJjEAoU5ZjHgMKqegsQKBGEwVeUo4PjbHdHpwQA2CGpH8ON0TNRFTxjEcFB1KJnZYR8GDSCvCXHiCQKotgeLAqgXFBmO6:PrcmQfbhuN8eksb7%1Lkk4HBCY932iezWE%Ps1ncwZ:HJWh5tfmwrC7Jcg7dia5aSjFVQMp1IwONGA1C3YCNneA4:Hzf:k8X7ddvv9GXZv6Pwswru9:HT83UqFPkxlWZdpCLq1tMfY4NkhRCLR6kPDjoJz:wOUonmcgyw0MBzyPqrTeADhQ8JB3p7nvIzu5yS6DJcP2X%hCijiwUFlLxT2:ENuAmQdF2CWr61xZWbjRwiSoNhQMmC:zuCJcR3tER3I9CCUB3YNqMzOTcBsutiEeruHgxFxUNSYCe0zRy4Tp0siCIsOqATWbqaByCesjlJx0BvnDm0b47LY20Cyo5MAogx0B14CoA28fQN:ewRf%:mV2nS7xn0bjfKwvya2DKUa6opBQfeCsQD4CoQ2b6P:k%zDmDrN47:dJBaAtwoGl6psERB5%4dIVBkWDjUGV:VGdzfEgu0I6myNBusIawYAGmiJezxZBD8LylyDV6jG0C7r2AiVAj4EaxjEX0KJgeUTqCFdSFQXSy6:r4i9vGWU7FSjVJLZ:ZjOxzTZMn77QjUnCCs3cC:kTwiUpoXWuTBGEZHkcAjpMliFf5yEZiAXYnQqB0RA0w8WyEqsBZhlUDRISqtNAirVBpE0SpkGTcEoSjZKLEoDcKjMuF6oom0K8isuGA23cffsWdsQ8WJkFuTNBy21X0bN9B1qmC88NkH:2CWbu%jItCXjPVt4:X%Z9WzKoERfqq0LBUEwqhIZ30vHu7bTubiO%yYa%JWbvPI1dBLcVHA9T%l8dE9mOmGwStIZU3p6OcG0yzFWJMKOJMFJAXiN3TVO8bEPockp%sCi7MHVKAPGZ%%C2T8HGtwGyTri:A5sFEipsb%NDT8%wkgwS357glt2dXL%5FUqLUJdktv:2flqvAsaf9y3ZOoSnhauaul:ENXZDaI7Ou7KgiL9qKxAOwswiR2043AC2J7itNQS5BsS6BC%E5yfhmrAw9ipYKq4mo0ggBdtBiiCOHQGj6NHIQSIA2RozFqysJxNtAaDRGwZ49NZR2sorsGBB30dvpO%WfWi9NWAMik9AsJ3WGz9EfLiDsT:%AskESkcnlFahEUwSu2If:TuGyWxPExqsQmoOZv8J5:AspW9C9hEIpiFnQ8lgQpH:F4HIsMEGPaLynvYYH2yP8:aWKOGQIk5gNKBaAjsAoZYExFKk2zqJp%NEgwrBpthGlqk7GmajTuHEs4wfy:LQP0DPBggPzdFy%Q1ER3MUXxjj7UPsvLyPO2UPkiq4NVg8C9Ht3ez95BXEN03DuWeE71wPoKgoa5z%Gth1CKYEkJPrszIdagtgFcFKwFSRR7NAv8rvXDvAtY2ycE:JERXqCAbR55vy4yI7Q8W1HNBd5ESff%yqiIcaeeFaDA2KDc5c:NwKLvGrO:nubaO0ZRfAiQfZ85u3kLhahuJf4L1QxKuCnPSjtLFv03nrb7N6ZB%L971AWYbMXp3Rz:w8alcCQk:Dua9Rf7BE9hgUJqCyCLU8xKLQ1wXPHKdQdXgopvxPBpEpLE8sHeQzfS38SleStmhADGJpFcphmWhHO229g7R1JEglI2RiCgmlhq7Y4DUEw2fX:IBTgUQGlBCPTXpMBqBWgUoJwoYBnGbjv:11jn:uTymPnUGzQArDakwiMLCJjb94GV1viyPzGJx9%dUWKCzueOxOWD0HoYywQsEWSI74rkwSgVt1WcTB%TqUDbz9cf72tlE%1hYUbmXLe3Tk1iAsl8%XY9yyCNJRRJYYlFDcIES6WWMMZZl6zkWRoGJAqcFxfZ0bK9owEuc:v2sLGwrL4CVl9v3BlQS3nIGjLzP3I1g6Co0c9N0APdcjovPZu0htSbD0Q3BsaD9go6b%Bu9IhcnveeTPQW1ZSE%wQU9BohUqFnz7OOajk3wmILH00zRvvmEQNXXPdRc1ofNb29v5:f4M4YAEhRzkTJmW4UF2XDNIb0%K7phFSKmAtQjlJZhZOs:BvEofowGM8ejL8MIimBXYejm0jfg1jDMPEd%cZt%X:oTsE6exlqdQkgmiPWHiPXWk0HGY%iYUq%LO1gMoJF7n:h4Wn4FIRgSudg1aRiHU4bsyP4hvFBpYlo2q43xwB5:qjqC6FViehIH3D9B1cwTyZ8QH:Exv8UGoTIGewCs3cBQHNdoBsU7Zt1jiYmpLIDtQ9qDY4JSmrE3KIHzotk18QrVElWTXpwYJDp2GY9Mc:7LQTkViIhSY%AFktkGwFagsEtRKeJKwkqkBF:Jlimdg7B6ROEoeqHGIbBsCs0S0nuXpGYpfH%dQq8TJkMpPRRSpbxRAdVHGumlLG1:c2MVgWIblLMjJMBuu3cGWTZ30pxxkexEKL8FYTgBA9UGiCZeCy4WtPZKYIf90BJ5fBKkCG3fBz:2K:5mGv%:xb6JlHqPzyiuEmKcxB8UxmD8twCk3wbgOQBER54x:FSZ:CO2dMFPB9DxIauiRXkS%3ewKiW9C7wtTXXyccAol5cJqBfT%Drb86yvovt6AlcegborrToK1IGKsWBhmqjRcD1okiPSAnPCgKolra3gYJVAUKDXAdFkIKuIwZQ:5bb383nDK57f%VYTE7gYsznHqLlh4Clp6YLmOGdTQZBnJqkCwE:BquNUqVhXa94OaAZQY%UkZNe7Qsn8bsdGNpLYPkd6R4uQf:TGNZyEdIpAGT5N:OgC9IRBJQNWGqMZv7Rvi:%5KQi4LZV1n6:V72Le9nZZQAZYfhWN5n0oVAHE0KNWhWIBiDaomNEwx88I6xIPQk4KXZ%HwlMiah:fDOz8NatJP85tWRUf0Sq:cs3ZhMpcGD0J7hAmn74TZR6GzC84UMZ%cYurmEQZxINyybn8PKM7Rc:tvYgcP0Zg7R6glTGy4i:RWBTX0Ikz%SMwm2XeREpz%R7BzoLTAyTkqe7tIWA1IDjZjLRd0GacKZtlF0aFYZMaFaQDDgZTCh:Z2sb1SEDFa77UqNPLkXhDiu84%eGqe%dUGynXdtFsa6DGfUwu4VJeEe05v9CdctZXMzR%m444okb46xOYg8BDe%GGMuQpqAOpVTEdEVv%8ZQ8JIUxPBPjs1Zv4w4gGM4vQt22I667ZSnt0BaZ%COUG6MLdzZdgYRVWylCoiklrOUL6KiE4ElkSf3Nd0FUhHgupkNbh7b8Eaicww1qPWHNTLvG3izmGgLAQxhSc:DsoHIfubpipwH97iT9oDdOSCPDb9aogGi84dm4RVf4iGz78IbC2gbwEtadh:gUoVddAGxHnOfO3sPwi9PXCPaeYLDaotAVoragQ7WWtMUAHYwHqWUiuZWbLkh%ObUxxe3sEiisweiUQbUDFZOl54Y0nytSenuHcB7az16xCfBcEOhVoeGA55E5AOAOpTTJUPXBmSQx:HcjDRA5rHsrzUJyARgHaYlBaYMGE2Zj0zwgiSRJqjESAz14zyh:qEiwU4Yp37OKKvWmYfxTOlCAKRQOOnIHJnDDVhg1BDXQFbAfPsLEU0Ufl2Q6u50FAQwsEUF0PTBenJ4LcJyGVn4FIr3BDmJeIn14LPJqITzBh6QE4cy9IJejphyOLeHcd53eLHn:Sp:JHpk9g2%Y6OYfkW7vcJOT%SIyQvU7C0XS:KRGnjd0Jc48JgB5dIf:AFF:88GY%jQnRPoh2y1DzL15yMYtCfGbpUDaYlZrEIiS741wmmSKmSY8qYDmY8x6laQgn4PFp8vu72dAbJrxYhs1XaaBpoNSoTkD2CLQfBL1dAgNcw6TwrTOUZqA8JzJOuwqyCe3dkG3AsSXuCf9zV:FNGzSZjx3cwB8GVVgqwg03bGXnqA3HHhIDnIDjk:Cj49CwIBIACZyQilszMMsOnq6iWC6O50JAQ1FkZEVG1hRkSRJWybVwLJAKMlLlu4IEbLnNJxurl6hIausebND:vQylwzDxI8gdg5YkqB3ww7Os:uAct3rweKsMK1VeXjUgDRTPQts1:nGaAb:qn68Zt6n%KyzO1TgFp%6Cwino6YGxPPzVYe5IanSPZOitrEL3IBCRoOCnZqqEUfGEpzGhZnFO85npAGxsj9LrmhAeBi3ugBfErKiYhQZuFA700BGRUebGYeD2CMl9CeHaYzDzkNBut233rbDuMftDOP4PEI5AKgnxANSiYn2mwwvw8CT:sFTn8:H:zgUsfjyIPDI7uviPrVGYXYFrr%xh5wYDTp0VO8Rgah6%e0S02qTDQh9WNbA88II6umPhaRJaXEOyLbAM4cIMV1hiz7cimow%V4elKIQ9qHwVduag%zqQO30LYK4DUBmcVSgVITcP5SxY02CeFv:u6YapEvzgRb5:NM8vR2WmA:6qaKs2z8yuUurvJr70PLTugNRVQJG1TtlmXBfygVQCcwZmnxFFW7kOLe3w7CxT3xrj3SU4fKiNhxIq5HVIbfCvOSRkCoQ96iuCUK05gtxTJcFOx3SGk0ExaZMdTUDLaN07QT6CsVhHU1HLJnTfspENH2%B6jFI2mSfhNmHxfmSI7K4fsMjdxpiSSAORwt4c2VOzZd5bLnCCyWLp4AT8f8BK6C8LogsG5IBfmmolZ6VEoz0qOwfNgRqmma:Co8cFSlrADANJM8F3SVomYLBDiRk9GSKYLyVeFsb0XiIkK4Q0mUkn5jwFJWKpbEwOcXc8y9Qch0aYTDuhaGjENsszHw4BYEonBsTVFBxGeplqBTANCCagI1tkArA986w%Pg0v151%UbqogWsVJh8coYv7ujk38Y0OPkVGFqC9l0gxXyLZEN5QaT1xRVYOge5CSG6D8ZFO8:MKjw8w1jF5VwERjakudaqQXoEEgeERtcuQP55ISspnBZWYSYHWYPnmomnZ%G6DqgSSC6QAco1Als3seG3b2b6G:cRao:SccUg7YeqsPxDUMs0JuHM10UNLbnRd2WuR2MJ6kuQboHvn2P829PcFIAzQf%xhfweujcKIEd0nyBJaxqk1wWRCWxI8qGgBvUG7NukQ6Mspo4iBrnRsR2710GbOYelq6jBMFo4SqK9k1Q6SiKqk0zGSIdM4koDRfEEvWyVhP4CT1RotSCE22DnNiau2c%P:v5uynMLZBPQugreE7BkizLFrAnnsqJOZZkQTsvEBjMonolbLTJrwN3H%cp4lY8124e8i7xhRIXZGr:3lSP0fWgbH9ZsOPYNeOWHIt5pOFCpQrkIpSzUK0JZq%jiXSrA0ipoATg0zA3FBiun5jgaVqkjE9YSUHgSFp4T3FEjJyZaogWyHjw0wf26xIHOOL8c1tkbDtC7aOOUJJSJZ2DJhLYe6NryDbru%CRdN35MBDb2kyLNjHoYs3D0L8DIQ7QVOg5KEJDBsilOgVeFegzGi:wgAmeSb5AVdP2FKRxPRC0e6AGZ:WGdQ6bDlOFwd1DBUV9PKKZL7E3H2F4zoCcD3TFTaAyUNZQF3VU%8N63UagdRHZNQlKDqNxAVxxwV8XolVdgIS:iGnedq5AuCopt8bfB:Xu59aM38a2:%AqW5XDGxWjXsTJxonkDd9FAVjTo3Zhh86ErCEfD9HVEmD5zjh9%:WECYbA8CjEg8BrKR9uFqMSBhsvgkRxkYrCqQH0R6uMi2HZdEZdFO6O0tnaQ7OwhEtUJhQJYrkKp3GDl7AlWz06TjqDt28Cuqocnh0RtLvu0IPgIghKDioObreFNlzFaU%zd0c9NmoekyEJGni:CsgPePBw:DJEkJFtrbN73p1z2QVDSvtmKQe0wjH0VrByoEfDiEEz72YHuURoX1NdyHVaqPBL9MTUxxxNFA9c7n0xGdImtusLmWIDN8SC7o0F2JcO0xUOiTvrSFN9drnDba65P5LigyHzwio18zfNg:yAc2so65rWpwfB5kHhYPK16DWreeUCcT4fVdRmQ92MyrDKwdy8PH7U5:sjLmBo8dop:nwwweGADn:AkUB344O1DJPpisDQLxipldZi7fjANZp2xJU6eWGRfRKV2KeGa7XDVngEe2dSJvJyH1aKwMpGWENHWTpIdXbSkQ2QyCVpiCmm1gqZ5YpUIzxD9R3oCQ2vn1ILL09:6HubSAsEkZGScjIZnglpxBb:WcKBu4tVNvCDIsit4Mj2lE0ikCLd0EUunCIZDGJZDcWGOldOnqc0bAPRshpv:NbSlYOxBOPuECH3ciMieG64Awc5r4eB74aX:B7QVeHqF1W%NsSWmMC9JaxITZx1gZEgFZLbrKlsiAbZGAmyNBdkRC9ISCfjyWd:NVivgyNDWBqs1eOQkv6z%GB1Q2XFAU6FureNnnItSatcTZFBTCx25CEBNEdF6hrrBq9cMagIzAqycYyCa4agGiSAEdPoiUVrCQcgW4e0H4iS0PLww7ncoQqwP0q1xFifqtMTYrC2x0:V4%uJ2G8OBniS:M9yGnF%F9NAAO0a3kIzpZJIBWgJ1Aooh2MPqCVheEkhw1mIlXPFzIAI7dx6i:9c%xLf:8mtU5xYYV7DHXexkFHW1JAhA14VgQpYSnWkp1tZLS1ualmSQTGuCtFYjplrC38k2SDqeuoMl9zqOvjLB8fvuZ3HC5t7:F1o0WMqDHfSlNhWRqOhhiaAq8fi9LlIVglURIcyWeMVmDUC%rno0onFTLMiOSJCdkQDD8SCJSECARfU5h0YdGiWwQxBIJQlnOhkdHiTkFDj15NOEVehI8NrrpMkS1B2eLzUobmgjeXYRRqagr2ddmaI5xV1:YG2xwEa1ClUDKiZUGqLQWDcF%gMqDGRgQ8frCIkVoFYmbEIgINGwPGekjX810EKkUIKRviC7RiOQXxKpfdMiUqe3t42JU0u0JCAe5N3FOk8H1AsFcjIc7G:h1roJQR3uuCJBqL0G%ZMizasbYoraws2UTCiaAnydcYjHfQLR8%:98adI7sxx7a0H%d6d9xBTCUgSAaMBLUP9dAyPkE7opFMx2sImcc0US38YM1BagFJZWPh1AJVk6OiO0XHlHfT3fowH:%bvqNVN6o5wjZ6sEU13kO7qoaMzRTrs8PIjjzO7UGPmedjfDXM1OJvj65F1EhM8btvdx3e6ksKyaJIo2NbrIu7VYjJ6IkG0rYeOjnaSMZV0Ok57zCOp1yFWZ%7IHC83wAuCYbOovh7JKMPyZJZvD7byC6oK33kZNixCe8zPdPz0vG4JsroJGMsRF2w5wneqiq8M9fmRZ8bhnTtg9wY:nb7UpjjUy6sYpkdARe5vIWg5Qt9z7d441IpiWun%wKtAeYWetgx6REOVLNoSvDNX5z:4hPB5K9Qa5Rfbk1Aow2WbVEKlEzBhCUbZEUF7sS5euYq4v:P3IsP1W2C0z7922Sc3T48xMBqjb6Sb8RNzSCq0x%F9N:WiJDQoTUF1AebyFwCmYUPJEljMJER8c57GWCjD1FfYdN31lG6%lsfueoCIKhosr7lugO0H9iJZJZCzVMYnebxQIxgUx8nW4DtjPJU3%f8SfmJRd1G3dfCft:fAyiqYko6bSBPLdNDb2UoyqpJpTZMJNogFGqDUwZmH8kuC3ym44MLYWaEalV0o1nj6dd1ZQIalKh9:dpzuff28oyUKk1k4Ob9G7uKXMHRFuD1VEQMt%WbRUaBh4eZqTDouwfYEXXgwkfVB9Dp9McWyh2VDJCAcZaUGt1yVJhG1YamOpcDCCvQmxcylWKd9RKZ7oJP5sWl60mweX%E9tstXm2IrFwZ60nxAAkIB2NKjC3MTEG705TH4wcsQCYq6XpNxl:2OilIDnj4HwxnQ9HWuXQZyZ0iHNM5JAnCjfSrK4jNw3AZdxEBzJSg0RDyRr4paou3HR%kw:NwOSPmM%:lV3F96lG29BzjREye7WKItDlsi00ivnBNqviicOC1kHckwPHiG587l%GLZ5p64iu35gsGwwkf6M2xYzkMyE%Tqd72TRFghLFWQtBpYM1B6FqYKkPPI1yBXF69V05fFNATgOxNwdgmqJo%8JogaNigS%6MK%uk8t%YqfGC4ld9PhRmOBgVIml2npgPlBl7dItewWGqYjNctTtZMxsoN8oZHPCRxYGMnt2oqOCa0Rn3zZFiv0d4As0UBSoB8CXZuirB5WIflRYjAxAy8OAEfOuA:RBdorLBxtIdzr0zTkYCeFJ8%m%WrUUWcKhXkkz1p4vkq7OhVSCY8KJu%eg4mlsWDCGgizJtrsFQ1OF2scTgR5sodveytNISMqLv9IhBZDXTbwnCgIwGbunRxsyHBdD:zCjw2JlxoQIGQLw2WfcZ%MgePjsHt%9dNLk2o:kKVGdpTGhPjsGtIQVUcwdbGxOknV0WlIFuGF5b4jA5PRdW14TQ8GE7yS:GQiKmuH1Tpch%FE1kwIV8Whq:QEKDJ10X1oW4KkKu%oUDCC2pIi6twbI5:L8Mr6qVE9TWHeFuUL27u5CMhDRaLjB1f5DNPzLEhDi0hmR2STAKwPQ:DcSkaHsumWF%hooiJPBiU6E1H2N0W5:aeNPuiKtLCMnQNJDi4Lwa1uQtN2jrtz:wyjK9ASIdKDTpSCm:bmxCkjS8beeYc1Ezh1bSm1GRhio0jgxwe6qAyv8hQGwdn8nzYdviqBeneFj4aUKEhwdY%DVznfHF0dhGWSpCMwNFpjpxc5qMSnJWE6ICQzl2yxF7VJ%ouDCIB16RaEQM:0q0RinqwaoMGjYqYucmwiAvLDShUaVQaTJQbnOhIsKMzyUiuCpUKRJutSM1kpJFDtkRAN9gqrV2ACss5UehOBOH0Ioc1eCqsXpi%q:CO3hauqBlioYiRFhum86DDfBm%%bKvbJEEwFVVnCKig2uJYdI0CASQXpll8vQSv6pI3BfQLiIbPQ%qDuHeBD88NMJByRFk2%YONvVk%P7ZJZ5bKPJFw2LWc5iUJIISxAMaQ0mN60M6w%EAO0Ia:bEgrZEAclAByYHVVVgOqWy5agvX7w6jrR4TPVjqRQDyXcQzZ:w01C87XXswgyZXRLSegOdPwXxBPJRyA9LNANsA1Zhj%4HNPPi1RTrbYCDD77yyzFfbAnykr4XuQhWG2xU6WmWoNs7P%rEl8V43Yb7IVzU41gzKPZuhtjg3WI6QrrQkNLDtNV%sgNPwmMtBOgpb%gOCCfWtycQclGqQjsGLEzw1kePfSTDuwEwN1HCIF3p9ZYMky1zQPK0AjRqlEnQkoT%jClj72fBEVlQX6hZky9ynXWTUGw50Jfjl9rggSPcOa8I6moLzO7MohiEZFGPv2GDVRfwqByDUGieeaUWurOBVS%gKpg33hfw1ENSLAdSX4J8uH%FgowpSNM7QTfs49dDTqLU6Ozo4MNLGAQ8RaEqSMMf4qlIFgV7XFpF%vQ5mQiHW2cfooQFG%2P0x5Zh5rBIebRLAEiHx4:AuRUBkHwJrtmfpq8TWCiJ9Rln4NHD4FmwWILFgqD3z%uNps6wY8cwJ7dsIDt2ls1d7JpY4U87kuyJBMAwYPuA5o%YiD2qVZjOiu7amTyVqsndQXVNR9Ua4ff6WogXqzDYpqBFFKhaF1z73AJMrsDloyqphCcCCZ:ZP7csrOVqDeYL:JkCjzYVjYrD9tYIOy0XMmGIhJoKsTWA1mqiVLJrUEUJiRVHmy54Kicsdr4KpTo:0JQLOTFgpC:NO20XEiHY1K2CaYEG1Ry8dEKQq3ZEI5BKEkm2kupoJxnTSCUjdLRGSbHMd%9ZJpuHWJCNOmx1PY7Lfmd4E0CRviT:dPkGLqvXxPjccXUXg1cPsnnnNp594gjLJw9jr1ZwasLceYg4QwmCGpVQQ3GIJoik2%hpTZCKB8mkw3RHTXRWYPkwHFt9tYAMv8jpwZMvw7MT4mZXKzDSH%Lg9jCszIsHHk:ygtRDy4EEfV0xQgGZNk6BMb7mGg2Qlo9z6PoD3H12kohnc2CIX23GOX1tMn3tMlRr5yv2EysiG0tHYLHIvcA4PoB0mY:s6uMTfpGYPRv8hi9vXcXfhecnRCy1czAItnXeCuVXYUYMPqcWmG24PBD2AVq2oTvO73UmYaUEuwdUCMriH9IaQM9Mi7He0quuueCmKyuJ8Tq9yIsWPKVLF%rg0yF%oSOBXqjAniGVaFwSYm4NVjv2MPquTtoTKql0jFSgQUKpC72Ik4faCSgukR2zWJyBcAzyWY7acDwgraud1QSAHjq0gQO1GlRthdvv2MpgMgf33En:6AD9Nx4ie80WFrMVjFKJhu2ieA66KqEGAkTiMaKKSVytEVJs0VJhzENhVjRumT5w9EuUgAPiG4F%dFy4lERIWOtkTOYdl7f43XquX8:RuPpAP%GgLEr45gosLQl99LqWayZn6Dswwp4bruLZex6msxPVdoRL2TYYEPmps9ZKfW5ZZGLZMsyt8meOAFAiGeDf7Rngt9NhkeVef6iFdLsEy6U1tWUQXjkLR6fh0EaFTMqDsiH%r8CZJQGAgAoLq9ytQKEJ0LjGf9rVy:sMC6I6jPYFfIHTOrWCCc%fhYE2ifaUdF6jjOy7Mue8K:uWtr5hVHw02tvCz%uqYJ4392nCX3nCEHeFK3T15cBYEUr%bFmIuy3hrUsWuDK8OAO2Ks61XOKe9TZAbYiZcPehER9AjsId79rKYDoPU3OCPT47CacnybRoZNIdggBRQqIC6lnivVQVnXJla01Etr7kEbqEFkgXZZRXTsMTZwXPlAr7HJMFb7u2lVigBgt1sa8GsrFC%Mx9a7W39Vpt76LjH3%EKw9%kLmpbSweOYYSE1ZoQ5eyZoU0WFwRliISgIkVZsMat6QjfLIlyi39GVoVB2aX4cDlvRzYocPiuTXAhmFxCR45CbGAb4VcW1yXJtqSzi6LYy%tYq5U%ZIsLJCcDvKnlw3xa5EALOTgpqtSxNMeZKsXLOr13AmYzsFHr9ZA8VuJNdEsc6557BLGQp17VaEBC6nQ7oGUCvDpvjQ9hQoMdSq0ZxShVW5qpOZO0zgjunxXG1BsiEij3BC7Wa6QpyiySOtPLWAU6ty1vmNX1WTeu62HGz0bPFnijlu3CABNzoqTSL7gCwQRUZpZi:ku7ir1Z96rALP%:7r42SrDqSl4eVpkREEdUhExg0pVuGJvhqEeCebz57XalfIamVnz2fBCHXJluGYTdGQu0hvVXJQzP%Lm99zGPy4vU5heZtdlAVFeaK7:KAnr51sKr7%FzuEM:0HzuyOKefBiYa65eZRDIwbMnRBstb%Cf2kVvn8E8hU4OKLS0SaLVRr8e52cgWwJEmGYL3BEg4MtUX6xNc4HhtroUVyRiR66qp9dWySYn7wAoLPz8PBJGGoTyQB14zz455cEGRoNQM1gbjDOHyTCbNYUMkGVqKYSiQQEAGwHtvXr4PkAj8DZaXj8tF9Dc0RK73oidtNkQa84oqXOtR2ko9NIh%f4fROOB9exEGosxMGIDoUaXLldY7BtTkxL9RJ1rR%nbV4PmIstkQtODRZzImg%tyIGIBGCeAjHsEGSUAqrsHEgzJW7orAyfb5f7Mw0:OCoGJBmt22zO6HSgN6MWKLugkA9CMwuk0o9xQ0fvoFj99:PYKYuOAP:usor8MoZkY2sVpEkCUWLgB0JEUi0svngALtHYrTL4zB9cm1R6xBkV%A7h8XYtURg51DQz4fXaoxnl8Svho031M72Ld38tS4jqUAhD3Y4yLU:t4nLRwyYHRMu1q8:5nPw:ZfFgu47BjTkkAer7vnxncwKCbIu4:UlGBxJMyTLIqO1Tb8juSq6tLaNSAy0%xbYd5HPjIsJnAiDbeN4Ho7n4dYa2IaNazs4zbqj7YJhYW:v5BMNi9uncnzO9XhAlUE1LGYcDxIRODZuErbzbB7wZaDWusLp64GFdVZIXqP0bQPyNbGiy9KqEO7nq8LaJMLCK87myeUq5De0M1KrQyqpiThodUGUpsOigfGxU2JQIgEBHlURaa0kiWNNZ%FyA:F01ktag8DxEyQDOa7dm0BulNaWIdZUZuOjxPen2dgSJBSQiQQUwok40aBMi1omxBIsvAgrVTH4fgPk%BT84Jgw9TKwoUulo1USlLZ:7uySsLaeBbWq6ENoSGCGIZBuY2jXMPtGk3Rpk6J33FlTUq4sw3deEuPVk4ZNPeoaMauBVRBhQG0ViCAFkxpyNIGih9AjcRKpNKFwgFg0QKVmM9R4DtySQEMY5pZEkpGOQKlBzbCwXb8grivI4QCaJMI4RZVQVB:4epDWYIiRaJC7j86wT5YYU6smXzo2yycuG2Zb3YT7TsDRRdjaBb0pYSkukHGsY5RxwfHNYM0UVrzcgPJFdaeGJRjPaFCk7XUTZvNYMzn%drnMysFhflVXwHIlbr6um6hWgpwhZrwCT58Wsz0TgxOzjBeqPOh45PNVTg618ht7BtiztAqTeRgcEBLXfEkwAstlYQ0S%jLvPySLJUAUP5YyYENfgtFtSSSvKr5RxiwL4d1yUQQFhm95YuLhGSV46iwcnhYMbkgXjYS7hoKi9bfp6sMBzipdaENhurszhCM64YBMOKQTiUboDDeIayuw8KQwB00ZrgoTU:D9V4SLUWUY7dOJxGXxbYG%lV1JbiZzdQ:bkjKJeJh4IkpUswhLdQKygyx7Imhyc7hKDHc6LHq2fO8wnRXPJaCALhEI6YQ0CcmxRUBtN8T9KjEZJRRFCUbQ4y3I9Sy17CJ9aaLjy9xeM:mCGlCoj%d4W9Xgb3b2886elKjnPHhirScsERY303QfsiRmYMMSIDHttYJrMwgLagLGQZ:5rBowsUIpX%HxfJX7KyZfq0J%VysP9qWJF6pw816d7vYCZFdFUVOD8XF4eUaUEaay1I8t8V4FXmp%A9XCKqmawZ6QDofHYTEveJNiTfCSriuSkWuuDImmyUJtzWo6NtrpJ9ckKfJFsZ3uy1IcgasTi:DSjGiwjQbFmBSqsL2vaYWMdZZYY%uODew9GEZTLKHmNEsiGKwWYCIn2nqazZy6kHU8eQxenBL8m%6P35YeRfi087plaM%ovGeDgmStQGVFKNrqZaHlstZNeBnkgIQsS%epFWcVjp4RlyEnIJQMKVo4TiCeIpppJRYLEQlIRCIhYskYEd0jJNWJJyQOP:ISj01CKAyS5K8M3hSD1IRvfd9AC3:Yk2Y0FhJg8DwBDMddW1Tc88T:VFl0cjaFTq7PMDdsqBl4pTqzFYOXS3Weqxo8a7g8A5R0SXy%7hDd3cPZ0S7aTRtGO0TR15UE3xLS4MmzwsopMjx0ks:VTT4fXCcur9l0bO3kyP5B2rO%5YsH:e8Mc0UgvqlL4Z1XRMWqEq63Bpb1cZu3Zl1xxfqNpYYwEtM%MEt1URLxPFx:ssimCe%:Kkp7i7UGovP1hnXao:Xnki%kO6wKjC3C81PCescCwl3nynBgk8a1ewJQqFwYo:pSlQuOuf4crJPpuOvuUYZcdAvPrA6SDjkkU3FisQAxuUpUNtbJl4tgFKHqW2bDBBMefAVOFwWZ:Mw5rgMeOQ%ipmDJEI2a1yaCvDMZ5mAsxLawTkKRkZoFV0lUqS3Tpm461EybJcNirm4xXjeZMh0mLIfTlscJSTTAimZF%dVF3tYo:3DNKB9WZchVBWA9T%wrS2LGR3R44jRPTxY4FFVfvZwcEjdtbOeunjRR24HFVYrhAEp7nBgu3HFII9MiFj5wPHHeZnGxYYv3mikAaNiCo1qti9:rlrj2eFBc1:wq1VyZwsZ2eqoG7B7WuW5fEIqltQd5cXKhrNMe%cK2uiGW557KiwA5WxGuHnAsG8kFWZPgA29LkNAbUDPWkp2LQcM6qmPdz56v85LWrw7ngtc6BO19SFYOqnlhkio1IVHxLjp%M5kKiBj3q0%IeXh2icUjc2yIqFQvKY:15aPN%DOlSQxJEuHm6oQSqK5HyfHIOZAHas3z%s2JNHvJfoK%tkQmxp3DrbwnHBSpZVOFp8jCwp1dYu70Eu8IKJy8WKXoAxrTpSWscYvnsZKzeWV3Bw:s7GXU82CgRcRqNR8sluOLz33LaTUJYL%wqsjCFTclFDUTshXyi0XunC3z7O5u:nSkjV5FgvdcrRGJSEIJ4Aky2XDWANqwhCuvmQKghiX4mFW:ndx1BXgUGeYKGBWDcn8LmVIVrtoZ4MAuTVD3vqbdNAWPWTF8kJsC3A1bXKssi7:V:Tj02k0K4ZC:%JO0tubB%SxQWZeEyOuAbvtexY93JUlwVc%Mi4n9:DgPTuS5Iay%RreHLAl:rDeXy:F48VWaMb9m8t%70ruusrpc5r0rZTYGVHYpMhkPFFUmElDprJmMVU3uDiiXXvak6VqDMjnL4ctNdW2%wtOux6gmw9FZXw%kgKKK:SXPb5j0:277pFrDBtPBrJnkqgZjq3WerTR4suHwiARlHfa0ROhFgmAAxsYtilVR5GyYAhim3xpuu:7Cm47Pp8hrAFVlYWEbFkznMBeKfHlqlaf39fIFRYaeFtjV7VKeqTO1Iqx0U39kOb7M1RXAaR5blkWi47rC9e4fVgi3amA2BIvvrS1S6ko%CGsClE2g1y1h9JrW2bD9CeefpyUirPRymbua5ZU3zRcJe56wgE2X6fkWUZHW4q43tHaSTbA1xlf6M7wvpINp4xgWVdOhatqsWA4rhsW85ZI3LJZthyXHZcnxKLguOQsmgUbTFTf5qYaNMtTK8weH2V3zWd5mfKj6BJ0sra1RuX69StM5X21vlOucLdV5brXGE1Wb%zxYVmDXNZt4KRMVVIYmC02VYYtjhnQBwCZA149XU02qK2sk4a27JFpjEvMFl3JjDShV0088mwCx:TURPH%iyeJdVcVkc721pMq04cg0Dy%WeFvzG7v:xXyl%U%zNcSs69MVNjsuWcdjyRFtXw1lfULmu8%mG5Zex8L6AfuBoTbu6c:QJfkrxZk2nmlTNRwqlkXBdFiwHJYth3zDZN5yWHI9Co7Liuky7sCs2rRO:nnrNoGRNo4eHGZj3bdoqiweXN2Cch2zYjDbMBlvWEyZYiIse%C4Hrm6xWRngs9euZEbm13FNUNYrabL1v31MTXVTyR9gLt%B4jpu1z:XqqGxYppM%e4lBsW88Uaj9se9wWVtS6an2kQrbdwPw4cb2SJHccDwyEWVLlRkYjbLnOOS871yNqw5EFdWR9brz%3tAbcS12r47GrO8VfdSbYZ7sY%SrP5yv8qGZyxHI4ZsG5ZqzePHYzNvQtxu5dfTw81EbCddfA4XrCCjZE8mDVLfKGxZJhM2dYzNQt5iybBd8aLzkuyxYsAbX1E269VeZ:FxD9c26O3yH6k1iwnxSgrgd1sVbXsJ8wT6u%kFH%Md9M3cywXY:RTJTfSoTY67gUqwZjNZMJy2HeEYCft8S6SPULGAJ5nUV%A:fy:w8AoLrHV%kggHIAAAAASUVORK5CYII"},{ name : "__ASSET__:bitmap_LoadBarContur", data : "s24375:iVBORw0KGgoAAAANSUhEUgAAANoAAAANCAYAAADPJnBMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89%bN:rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz:SMBAPh%PDwrIsAHvgABeNMLCADATZvAMByH:w:qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf%bTAICd%Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA:g88wAAKCRFRHgg:P9eM4Ors7ONo62Dl8t6r8G:yJiYuP%5c%rcEAAAOF0ftH%LC%zGoA7BoBt:qIl7gRoXgugdfeLZrIPQLUAoOnaV:Nw%H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl:AV:1s%X48:Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H:LcL::wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s%wM%3zUAsGo%AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93:%8::UegJQCAZkmScQAAXkQkLlTKsz:HCAAARKCBKrBBG:TBGCzABhzBBdzBC:xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD:phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8%Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8%xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR%cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI%ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG%Qh8lsKnWJAcaT4U%IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr%h0uhHdlR5Ol9BX0svpR%iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK%YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI%pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q:pH5Z:YkGWcNMw09DpFGgsV:jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY:R27iz2qqaE5QzNKM1ezUvOUZj8H45hx%Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4:OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up%6Ynr5egJ5Mb6feeb3n%hx9L:1U:W36p:VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm%eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw%6TvZN9un2N:T0HDYfZDqsdWh1%c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc%Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26:uNu5p7ofcn8w0nymeWTNz0MPIQ%BR5dE:C5%VMGvfrH5PQ0%BZ7XnIy9jL5FXrdewt6V3qvdh7xc%9j5yn%M%4zw33jLeWV:MN8C3yLfLT8Nvnl%F30N:I:9k:3r:0QCngCUBZwOJgUGBWwL7%Hp8Ib%OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo%qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt:87fOH4p3iC%N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi:RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z%pn5mZ2y6xlhbL%xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a:zYnKOZarnivN7cyzytuQN5zvn::tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1%1dT1gvWd%1YfqGnRs%FYmKrhTbF5cVf9go3HjlG4dvyr%Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql%aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO:PLi8ZafJzs07P1SkVPRU%lQ27tLdtWHX%G7R7ht7vPY07NXbW7z3:T7JvttVAVVN1WbVZftJ%7P3P66Jqun4lvttXa1ObXHtxwPSA:0HIw6217nU1R3SPVRSj9Yr60cOxx%%:p3vdy0NNg1VjZzG4iNwRHnk6fcJ3:ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w%0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb%%6EHTh0kX:i%c7vDvOXPK4dPKy2%UTV7hXmq86X23qdOo8:pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb:1tWeOT3dvfN6b:fF9:XfFt1%cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v%3Njv3H9qwHeg89HcR:cGhYPP:pH1jw9DBY%Zj8uGDYbrnjg%OTniP3L96fynQ89kzyaeF:6i:suuFxYvfvjV69fO0ZjRoZfyl5O:bXyl:erA6xmv28bCxh6%yXgzMV70VvvtwXfcdx3vo98PT%R8IH8o:2j5sfVT0Kf7kxmTk:8EA5jz:GMzLdsAADoUaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu%7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI:Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjUtYzAxNCA3OS4xNTE0ODEsIDIwMTMvMDMvMTMtMTI6MDk6MTUgICAgICAgICI%CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI%CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgICAgICAgICB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgICAgICAgICB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iPgogICAgICAgICA8eG1wOkNyZWF0b3JUb29sPkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cyk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpDcmVhdGVEYXRlPjIwMTQtMDMtMjdUMTY6MjE6MTcrMDI6MDA8L3htcDpDcmVhdGVEYXRlPgogICAgICAgICA8eG1wOk1vZGlmeURhdGU%MjAxNC0wMy0yN1QxNjozMTo1MyswMjowMDwveG1wOk1vZGlmeURhdGU%CiAgICAgICAgIDx4bXA6TWV0YWRhdGFEYXRlPjIwMTQtMDMtMjdUMTY6MzE6NTMrMDI6MDA8L3htcDpNZXRhZGF0YURhdGU%CiAgICAgICAgIDxkYzpmb3JtYXQ%aW1hZ2UvcG5nPC9kYzpmb3JtYXQ%CiAgICAgICAgIDxwaG90b3Nob3A6Q29sb3JNb2RlPjM8L3Bob3Rvc2hvcDpDb2xvck1vZGU%CiAgICAgICAgIDxwaG90b3Nob3A6SUNDUHJvZmlsZT5zUkdCIElFQzYxOTY2LTIuMTwvcGhvdG9zaG9wOklDQ1Byb2ZpbGU%CiAgICAgICAgIDx4bXBNTTpJbnN0YW5jZUlEPnhtcC5paWQ6MzVjYzVjZTktMDkyNC1hYTRjLWExYTgtOWU5MDU0MmUyZDg3PC94bXBNTTpJbnN0YW5jZUlEPgogICAgICAgICA8eG1wTU06RG9jdW1lbnRJRD54bXAuZGlkOjkxYjUyNGNlLWU5MzItMWI0Mi05YTk4LTUzMTBhMDM5MGQwNDwveG1wTU06RG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOjkxYjUyNGNlLWU5MzItMWI0Mi05YTk4LTUzMTBhMDM5MGQwNDwveG1wTU06T3JpZ2luYWxEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06SGlzdG9yeT4KICAgICAgICAgICAgPHJkZjpTZXE%CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmNyZWF0ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ%eG1wLmlpZDo5MWI1MjRjZS1lOTMyLTFiNDItOWE5OC01MzEwYTAzOTBkMDQ8L3N0RXZ0Omluc3RhbmNlSUQ%CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTQtMDMtMjdUMTY6MjE6MTcrMDI6MDA8L3N0RXZ0OndoZW4%CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cyk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ%CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5zYXZlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOjM1Y2M1Y2U5LTA5MjQtYWE0Yy1hMWE4LTllOTA1NDJlMmQ4Nzwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4%MjAxNC0wMy0yN1QxNjozMTo1MyswMjowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ%QWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ%Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk%CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC94bXBNTTpIaXN0b3J5PgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpYUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WFJlc29sdXRpb24%CiAgICAgICAgIDx0aWZmOllSZXNvbHV0aW9uPjcyMDAwMC8xMDAwMDwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6UmVzb2x1dGlvblVuaXQ%MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT4xPC9leGlmOkNvbG9yU3BhY2U%CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj4yMTg8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24%MTM8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0idyI:PipIjScAAAAgY0hSTQAAeiUAAICDAAD5:wAAgOkAAHUwAADqYAAAOpgAABdvkl:FRgAAAnRJREFUeNrsmMmOWzcQRU8V%dSDjfxAYATINggQf5B:3HsjCy%ySONNJOtm8dS20ZDUT1rEgcOzkSAOEIdbt4r24f1PHw1%NrdHM5vMDAwBYHD81ul0LvGtVoRJQtKDQqPgU3736%9vch4eD:d3pCE:mPs2wrrCOp2rkQGGImilss7LY63lTf7ltz%U7%65f:uWdDgAQtE2ddoXhX5VLS9%Y0fbpShwbi69iBKn%l5qf23spYh0bn69%LxmrT9CxObEHmjn:u05:73neandLtzNa%:l3nv%Ym:ME2C0dWV%eqIus3KrI5YqtYAYtt7ScbD1CNXp7Lezo9g2V2ul0OoTra7kp7:%JA8D63hHehgwA7N47ntWwN:T0Pa0s8PQrjVMnQg92rlO3dDnGsO4xVCuKcNPrdtuMJzXDO3SGV5KKP5NQzub4B09SnIkaFNhnRZqKeRp:Kw8JII7hkikQVgC8%fZuqt1Oq%b2SY:BahBK0ZZGsu4UEtTnsfP%MEIJWo4QxiWwf10JOt0OieTRgAiQBXKIsoUzHMjVpHn%W9S3ewu5NRqeDY8Geb:v5q:07n1jUgB0URU0VaxzME6Ba1CrrOIZLjAFAzV8SyODyddZJ3O3ppOEA2iQilBnaDMm:hyXTZRGQHh6CB8%Jo6djqd:URAFKgrrGtQF21CK4vMXdAMGkQzfP3yQtmLtP9SAXA2lH7n:2M:2B7bjeOPr47RoK6iLEEpIgLL6yT3ZEQV0YJaDPdnR7Ous05nt061OVpAK6KsolaIJs:TWEc3Zk9%nzNTSoa7yXcG1U6n12ffpI5AhKw1USsP0WIOMf4DAAD::wMA4kt2KAH6i1AAAAAASUVORK5CYII"},{ name : "__ASSET__:bitmap_RaceHorce", data : "s29094:iVBORw0KGgoAAAANSUhEUgAAAB4AAAAfCAYAAADwbH0HAAAACXBIWXMAAAsTAAALEwEAmpwYAABLbWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMTQgNzkuMTUxNDgxLCAyMDEzLzAzLzEzLTEyOjA5OjE1ICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiCiAgICAgICAgICAgIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgICAgICAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyI%CiAgICAgICAgIDx4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ%eG1wLmRpZDo5NjkwREFGMkUzOTNFMzExQTNGNEUwQzZEMDU1NkEwRTwveG1wTU06T3JpZ2luYWxEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06RG9jdW1lbnRJRD54bXAuZGlkOjhEMjQzOEY5OTRCMDExRTNCMUVBOURCNjQ5MzIyOTkyPC94bXBNTTpEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06SW5zdGFuY2VJRD54bXAuaWlkOjQ5NWNmOWM2LTQ5MzItZjk0YS1hM2JmLTg2YWRiZmE1NjNkYTwveG1wTU06SW5zdGFuY2VJRD4KICAgICAgICAgPHhtcE1NOkRlcml2ZWRGcm9tIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgPHN0UmVmOmluc3RhbmNlSUQ%eG1wLmlpZDo5ODc2NjdmYy00ZDJkLWU2NGUtOTRkMi02MDljNGRiYTIzMTQ8L3N0UmVmOmluc3RhbmNlSUQ%CiAgICAgICAgICAgIDxzdFJlZjpkb2N1bWVudElEPnhtcC5kaWQ6OEQyNDM4Rjk5NEIwMTFFM0IxRUE5REI2NDkzMjI5OTI8L3N0UmVmOmRvY3VtZW50SUQ%CiAgICAgICAgICAgIDxzdFJlZjpvcmlnaW5hbERvY3VtZW50SUQ%eG1wLmRpZDo5NjkwREFGMkUzOTNFMzExQTNGNEUwQzZEMDU1NkEwRTwvc3RSZWY6b3JpZ2luYWxEb2N1bWVudElEPgogICAgICAgICA8L3htcE1NOkRlcml2ZWRGcm9tPgogICAgICAgICA8eG1wTU06SGlzdG9yeT4KICAgICAgICAgICAgPHJkZjpTZXE%CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPnNhdmVkPC9zdEV2dDphY3Rpb24%CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6ODAzODY4NEFCODk0RTMxMUFDQTFDNUUwNzU2QzQ4NzY8L3N0RXZ0Omluc3RhbmNlSUQ%CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTQtMDItMTNUMTY6MDg6MTkrMDI6MDA8L3N0RXZ0OndoZW4%CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDUzUuMSBXaW5kb3dzPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI%CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24%c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ%eG1wLmlpZDpmMWVmYWQ0OS1hOTZjLTc2NDQtOWE0Ny02MDg3OWJjNGZlOTY8L3N0RXZ0Omluc3RhbmNlSUQ%CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTQtMDItMTdUMjE6MDE6NDgrMDI6MDA8L3N0RXZ0OndoZW4%CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cyk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ%CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpjaGFuZ2VkPi88L3N0RXZ0OmNoYW5nZWQ%CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5jb252ZXJ0ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnBhcmFtZXRlcnM%ZnJvbSBpbWFnZS9qcGVnIHRvIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3A8L3N0RXZ0OnBhcmFtZXRlcnM%CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5kZXJpdmVkPC9zdEV2dDphY3Rpb24%CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpwYXJhbWV0ZXJzPmNvbnZlcnRlZCBmcm9tIGltYWdlL2pwZWcgdG8gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcDwvc3RFdnQ6cGFyYW1ldGVycz4KICAgICAgICAgICAgICAgPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPnNhdmVkPC9zdEV2dDphY3Rpb24%CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6YmM5ZWRkMjQtMzhkZC05ODRlLWE3MTctMzVhNGUwNmVmN2U1PC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE0LTAyLTE3VDIxOjAxOjQ4KzAyOjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI%CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24%c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ%eG1wLmlpZDo5ODc2NjdmYy00ZDJkLWU2NGUtOTRkMi02MDljNGRiYTIzMTQ8L3N0RXZ0Omluc3RhbmNlSUQ%CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTQtMDItMjVUMjE6MjQ6MDgrMDI6MDA8L3N0RXZ0OndoZW4%CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cyk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ%CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpjaGFuZ2VkPi88L3N0RXZ0OmNoYW5nZWQ%CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5jb252ZXJ0ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnBhcmFtZXRlcnM%ZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZzwvc3RFdnQ6cGFyYW1ldGVycz4KICAgICAgICAgICAgICAgPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmRlcml2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnBhcmFtZXRlcnM%Y29udmVydGVkIGZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmc8L3N0RXZ0OnBhcmFtZXRlcnM%CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5zYXZlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOjQ5NWNmOWM2LTQ5MzItZjk0YS1hM2JmLTg2YWRiZmE1NjNkYTwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4%MjAxNC0wMi0yNVQyMToyNDowOCswMjowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ%QWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ%Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk%CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC94bXBNTTpIaXN0b3J5PgogICAgICAgICA8eG1wOkNyZWF0b3JUb29sPkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cyk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpDcmVhdGVEYXRlPjIwMTQtMDItMTJUMTU6MTQ6NDIrMDI6MDA8L3htcDpDcmVhdGVEYXRlPgogICAgICAgICA8eG1wOk1vZGlmeURhdGU%MjAxNC0wMi0yNVQyMToyNDowOCswMjowMDwveG1wOk1vZGlmeURhdGU%CiAgICAgICAgIDx4bXA6TWV0YWRhdGFEYXRlPjIwMTQtMDItMjVUMjE6MjQ6MDgrMDI6MDA8L3htcDpNZXRhZGF0YURhdGU%CiAgICAgICAgIDxwaG90b3Nob3A6TGVnYWN5SVBUQ0RpZ2VzdD5FQzlBOUI2RDk0MTVFNzYyM0ZFMkI1QjA4MTY4NjZEMzwvcGhvdG9zaG9wOkxlZ2FjeUlQVENEaWdlc3Q%CiAgICAgICAgIDxwaG90b3Nob3A6Q29sb3JNb2RlPjM8L3Bob3Rvc2hvcDpDb2xvck1vZGU%CiAgICAgICAgIDxwaG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM%CiAgICAgICAgICAgIDxyZGY6QmFnPgogICAgICAgICAgICAgICA8cmRmOmxpPjIzMkIyOTJCNDE3MTJGQTgzRkE5REI0MUQ3RkE3RTlEPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%NTBDOTQ2Qzc4ODc0N0I4NjIyOTdCMThCMjI1OUEyREE8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT45QkFGNkQ0QjhDRTFDOTQ2NkE4MTI0RjNGMkVCQTAyOTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPkE1RkYzRjY3MTNGNTA2NkZDRkREMTJEMkI3QTUzNUEwPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%RDY4MzI4NjlFRjhDRDRBRkRCRjlCQzcyMzRCRjI1QTg8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT5FQ0M3MjU3QUQ4NENDNDA3ODM3RjUwMkJBQTBEQUNDNjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPkYzQjBEMUM3MDlGOTMxRjIyRENDMzNBQTcyNkJDMDdCPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDo1MkRCNUM4OTNERUJERjExOTM0MzlCN0JENEM1NkMyOTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6NTcwRTcyQjlDNzk2MTFERjg5QzBGRjVDM0UyODVCQTg8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjc3NTZDMjhDODQ3Q0UwMTFCRTEwRjY1REJCMEQ1N0ExPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDo4M0JDNzk1QjE1MTNFMDExODVBOUREMDQwQjRBNUEzNDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6OEQyNDM4Rjk5NEIwMTFFM0IxRUE5REI2NDkzMjI5OTI8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkIyNzQyRThCNzRDRUUwMTFCRjU1RUZDMUUwRDEzMENCPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDpDRjE5MzI4Qjc1ODBFMDExOUVDNkY0RDU5OTdDMzc5OTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6RTdEQTNEMDYxM0VCREYxMUI4MjBCOUQ2OTI3RTY3NEQ8L3JkZjpsaT4KICAgICAgICAgICAgPC9yZGY6QmFnPgogICAgICAgICA8L3Bob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4KICAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9wbmc8L2RjOmZvcm1hdD4KICAgICAgICAgPHRpZmY6SW1hZ2VXaWR0aD4zNTAwPC90aWZmOkltYWdlV2lkdGg%CiAgICAgICAgIDx0aWZmOkltYWdlTGVuZ3RoPjc2ODwvdGlmZjpJbWFnZUxlbmd0aD4KICAgICAgICAgPHRpZmY6Qml0c1BlclNhbXBsZT4KICAgICAgICAgICAgPHJkZjpTZXE%CiAgICAgICAgICAgICAgIDxyZGY6bGk%ODwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPjg8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT44PC9yZGY6bGk%CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC90aWZmOkJpdHNQZXJTYW1wbGU%CiAgICAgICAgIDx0aWZmOlBob3RvbWV0cmljSW50ZXJwcmV0YXRpb24%MjwvdGlmZjpQaG90b21ldHJpY0ludGVycHJldGF0aW9uPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpTYW1wbGVzUGVyUGl4ZWw%MzwvdGlmZjpTYW1wbGVzUGVyUGl4ZWw%CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyMDAwMC8xMDAwMDwvdGlmZjpYUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6WVJlc29sdXRpb24%NzIwMDAwLzEwMDAwPC90aWZmOllSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpSZXNvbHV0aW9uVW5pdD4yPC90aWZmOlJlc29sdXRpb25Vbml0PgogICAgICAgICA8ZXhpZjpFeGlmVmVyc2lvbj4wMjIxPC9leGlmOkV4aWZWZXJzaW9uPgogICAgICAgICA8ZXhpZjpDb2xvclNwYWNlPjY1NTM1PC9leGlmOkNvbG9yU3BhY2U%CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj4zMDwvZXhpZjpQaXhlbFhEaW1lbnNpb24%CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4zMTwvZXhpZjpQaXhlbFlEaW1lbnNpb24%CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY%CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSJ3Ij8%KmK11gAAACBjSFJNAAB6JQAAgIMAAPn:AACA6QAAdTAAAOpgAAA6mAAAF2%SX8VGAAAJSUlEQVR42pSXfVDUdR7HX7u:fYB9APYBBWRFcjWtFlolIg1CE5G4kOAuHG0u0O5m1DOzpjs9LWs8NfNM1NjR5i6nI6uTKXXUEUv0DPU0hRAQeRAQXJ4CggV2WUD43h95d%Zzn5n3f7:fvOb9:b0:n9:nK:EANXO8mvquYQC7xaBYHjFWs3JwWDzR5x3p08hpnBiqp71n8Lb3ZDIZAAqFArlc:jMpePCyjTcrP::7sgkPPzzKj7JOMSu:uD195:66LcAH:MKSPcAzipnj1V8sjAtIjQ43SBOeCgWhhwA:0KuovdjC3DdPHr10rTcV8N7qWAiBQnG7P5m:6t7UCSbp6KnFo2erxxlB0sKIDoxm8DcCEgTL6Pq%jocyv3YASxW60XS0OgFsMplsrhDiL3cCy%:jNmNXss9suVxGZ%MgjABjtaBVgkoBZi20ejA85s:bGWGvdPcNAaDVaomKitqUmZm5Dki74zFqfJV3pc4JHVoyySio7xpm4kQFXc3dlBY0Y7yuYLDKy3jbGIauufEMDDFacqmA%YAKsE2fPj1xyZIltLe378zPzz8F:PAz8D3c:jllsjquqXuIgNEj5B9v4NS3auy2xwm2T8A0KQClUkHAI0BPF6t37WHqrGf3zEtKxtnYwKVLlxgcHCQjI%PaoUOHem5z:GS47m7gqKTHNZRVNlF7%UeauqJYuOo5:G1hmGw2MPlDXR3v7silv6GOsfMWsGPDVgZcnTQ0NnLhwgWCg4MpLy8fvjV0APKLTV7uot0qP3%mWn241HSdtBeSUGuGMM94mfz9%eByMdLcSl7%v%mPSmdDdg615d%zNTub%vp6kpOTGRoaoqCgYBxguhUsGbR3:cbVVZ3Xkx5:SBt6%GIfEwwWLKMNhAQFEjsxDF2:B7lCxnBLMwfPXcRsMpKfn09dXR1z587lwoULNDU1kZKSou3q6prd3d29q6fn:ycuS0xM5OjRo3eDa2WQKOD5j5OnvpyVlSojZAx09sLwdTDpKD7%Hbm9JmpqqgkbE0JKSgoHDx4kNTWVmJgYdDod3d3d2Gy2951O55:%59hqtbJhwwYGBgaorq6%FTwEsr5tuz:9S1hQuP:%N1bR7HLh6fdyztlG7heH%fpYMcuyc3D3dBMXG0tkZCQtLS0EBgbS3NyMxWJBq9UyatSo6fv27fsE6L4t1RNstju5Xvxq5gILgO38RfbuyeXSjQGgASKfnI5mlIkBr5erV68SGxtLRkYGpaWlNDY24nK5SEtL46WXXmL9%vVb6urq0oUQPzm22%2UlpaSPncuFceOofR4btas35nNT:crldTNjOfX728mAjlVhd%yYv0GtOvewaRU0eJ00t3dTUdHB%Xl5eh0OtxuNzU1NbS0tKDRaJAkafLJkye:B6pum1xrtm9nRkYGPmPHMtjaymBrq19rVhbHH3uMJ2229fXe:h87fpPOdquVhOIivvpHLqMNBqxWKy6Xi4KCAq5cuYIQArfbjUKh4PTp07z33nsolUqSkpI%BeLvOTInpqQQ:ojFcPb5GJbDa8hka3Ysf:WypbeXr95%C2tAAPPS00EmQyaT4XQ6WbBgAcnJybS1teH1eunr62NkZIShoSHq6%uxWCx6u92%%F7g%cBqt8a3Jbune1n2gQPbgBVOZ:Oj51ua%W7Ag22SlUcnTwYgPz8fo9EIQFFRER6PB5VKhV6vRyaTUVpaSkFBAcPDw5jN5lEK4EPADrwJnLkBdRw4cGCx1%vlXFHJtdVr1m4Emv51oShk3VPRrDtxnKr5qzB6OlAqP0Cu8qG1tZWVK1eSl5fHzp07ycrKorCw8JRGo7mu1%vjfX198fX1pa%vj4qKigrJZDI9odPpgl588cX1bW1tMf7%:n%cPXv2r86dO0d:fz9mY4B:4qwZyTU1NfqRvl7caiUFyvHMe:sjvCo:tr%%kKAADXOSn8fX15fq6mpUKhVBQUHk5ub%3mq1vlVQUIDdbo8PCQkRR44c2dTc3LxOFh0dTUJCAqWlpbUOh%Oh4uJiPB4PM2bMoLi42L106dKzmzZtinc4HJJBryNyWix7CstRCRm9rh%Rd9Tztx2bGbguOH:%PEIILBYLR48edefl5Y0CPBqNBo:HMxkYCgwMvNLe3g7R0dHo9Xr0ev3CkpIS0dbWJiorK4UQQiQmJq41m83s3bu3paGhQXzzzTGxdetWkb3xXTEhNFA8%9QUUV56Uezbf0Dk5eWJhoYGcfXqVeF2u0V8fHwl4GMwGO674khpaWmVHo9HCCHE7t27OyVJmm82m:%QmZnpbmtrE6dPnxYWi0VkZWWJmJgYsXHjRuHxeER4eLgIDg4Whw8fFv39:aK6ulpMmTJlKCIiot1gMJwAsm:6V:8EuwksLl%%:FVhYaHpzJkztrVr14oAg%GF%GeeSXG73UqFQoFarcbPz4:IyEjOnj1LeHg406ZNw%VyERUVhb%:Pw6Hg6qqKnR6nTx0TKjmSm3tOJWPOmZOUnJ6Xe2VQ5IkNUmSdLvtuLg4gHLT6FFCp9eJOXPmiBUrVoikpCSRk5MjSkpKRFdXl4iLixMOh0N0dnYKp9MpnE6nOHv2rFi3bp0IDQ0VdrtdTJo8SQBi01%zxdWmDiFJUpAkSUiSxG3oltYWJIX0CCMiOmzsOJ57Lon29nYqKyuJiIggNze39ciRIz0VFRX6gIAAysrK2LJlC1arlbKyMjo6OkhISKD2Si3FxcWEhY8j75%fk5297ci3J0:suuvqMzgwCFA0ODBISEgwAwMDqH3ULFq0iMrKSr788svpQBMwMycnJwgQwPXe3t41drv94aKiImbOnElKSgrIBK0:tOP46GOv48NtrxlN5nvu1b4arbbOzxAQ1OtyET01itjYWGRyOZs3b97k8XhW3iWcloiIiMvJycnanp4e6uvruVR5mYa6eoBh4LfAZ:dKt1KlVudawsNEYHCQ8NFqxbRp00R4eHjnzam8SyWkpqaKVxa9IjRarQDEshVviOOF54TRaHzVaDTyX92xVGo1SqXyRIglVIyzjhdKH7W40Q7370lJej3UEioA8ebK1UIIIVateeezm6H3AyOXyz8wBQYKH1:fkge9E91olY%fjntGdLi8Ysmy5Z%sWvMOvxQMkCWD2bIbgZA92IVrzJSo6ANLlr22XpIUOklScKv%MwA6mwCsPyQVZwAAAABJRU5ErkJggg"}];
flash.display.DisplayObject.GRAPHICS_INVALID = 2;
flash.display.DisplayObject.MATRIX_INVALID = 4;
flash.display.DisplayObject.MATRIX_CHAIN_INVALID = 8;
flash.display.DisplayObject.MATRIX_OVERRIDDEN = 16;
flash.display.DisplayObject.TRANSFORM_INVALID = 32;
flash.display.DisplayObject.BOUNDS_INVALID = 64;
flash.display.DisplayObject.RENDER_VALIDATE_IN_PROGRESS = 1024;
flash.display.DisplayObject.ALL_RENDER_FLAGS = 98;
DefaultAssetLibrary.className = new haxe.ds.StringMap();
DefaultAssetLibrary.path = new haxe.ds.StringMap();
DefaultAssetLibrary.type = new haxe.ds.StringMap();
RaceHorce.resourceName = "__ASSET__:bitmap_RaceHorce";
LoadBarContur.resourceName = "__ASSET__:bitmap_LoadBarContur";
LoadBar.resourceName = "__ASSET__:bitmap_LoadBar";
LogoBar.resourceName = "__ASSET__:bitmap_LogoBar";
flash.Lib.HTML_ACCELEROMETER_EVENT_TYPE = "devicemotion";
flash.Lib.HTML_ORIENTATION_EVENT_TYPE = "orientationchange";
flash.Lib.DEFAULT_HEIGHT = 500;
flash.Lib.DEFAULT_WIDTH = 500;
flash.Lib.HTML_DIV_EVENT_TYPES = ["resize","mouseover","mouseout","mousewheel","dblclick","click"];
flash.Lib.HTML_TOUCH_EVENT_TYPES = ["touchstart","touchmove","touchend"];
flash.Lib.HTML_TOUCH_ALT_EVENT_TYPES = ["mousedown","mousemove","mouseup"];
flash.Lib.HTML_WINDOW_EVENT_TYPES = ["keyup","keypress","keydown","resize","blur","focus"];
flash.Lib.NME_IDENTIFIER = "haxe:openfl";
flash.Lib.VENDOR_HTML_TAG = "data-";
flash.Lib.starttime = haxe.Timer.stamp();
flash.display._BitmapData.MinstdGenerator.a = 16807;
flash.display._BitmapData.MinstdGenerator.m = -2147483648 - 1;
flash.display.BitmapDataChannel.ALPHA = 8;
flash.display.BitmapDataChannel.BLUE = 4;
flash.display.BitmapDataChannel.GREEN = 2;
flash.display.BitmapDataChannel.RED = 1;
flash.display.Graphics.TILE_SCALE = 1;
flash.display.Graphics.TILE_ROTATION = 2;
flash.display.Graphics.TILE_RGB = 4;
flash.display.Graphics.TILE_ALPHA = 8;
flash.display.Graphics.TILE_TRANS_2x2 = 16;
flash.display.Graphics.TILE_BLEND_NORMAL = 0;
flash.display.Graphics.TILE_BLEND_ADD = 65536;
flash.display.Graphics.BMP_REPEAT = 16;
flash.display.Graphics.BMP_SMOOTH = 65536;
flash.display.Graphics.CORNER_ROUND = 0;
flash.display.Graphics.CORNER_MITER = 4096;
flash.display.Graphics.CORNER_BEVEL = 8192;
flash.display.Graphics.CURVE = 2;
flash.display.Graphics.END_NONE = 0;
flash.display.Graphics.END_ROUND = 256;
flash.display.Graphics.END_SQUARE = 512;
flash.display.Graphics.LINE = 1;
flash.display.Graphics.MOVE = 0;
flash.display.Graphics.__MAX_DIM = 5000;
flash.display.Graphics.PIXEL_HINTING = 16384;
flash.display.Graphics.RADIAL = 1;
flash.display.Graphics.SCALE_HORIZONTAL = 2;
flash.display.Graphics.SCALE_NONE = 0;
flash.display.Graphics.SCALE_NORMAL = 3;
flash.display.Graphics.SCALE_VERTICAL = 1;
flash.display.Graphics.SPREAD_REPEAT = 2;
flash.display.Graphics.SPREAD_REFLECT = 4;
flash.display.GraphicsPathCommand.LINE_TO = 2;
flash.display.GraphicsPathCommand.MOVE_TO = 1;
flash.display.GraphicsPathCommand.CURVE_TO = 3;
flash.display.GraphicsPathCommand.WIDE_LINE_TO = 5;
flash.display.GraphicsPathCommand.WIDE_MOVE_TO = 4;
flash.display.GraphicsPathCommand.NO_OP = 0;
flash.display.GraphicsPathCommand.CUBIC_CURVE_TO = 6;
flash.events.Event.ACTIVATE = "activate";
flash.events.Event.ADDED = "added";
flash.events.Event.ADDED_TO_STAGE = "addedToStage";
flash.events.Event.CANCEL = "cancel";
flash.events.Event.CHANGE = "change";
flash.events.Event.CLOSE = "close";
flash.events.Event.COMPLETE = "complete";
flash.events.Event.CONNECT = "connect";
flash.events.Event.CONTEXT3D_CREATE = "context3DCreate";
flash.events.Event.DEACTIVATE = "deactivate";
flash.events.Event.ENTER_FRAME = "enterFrame";
flash.events.Event.ID3 = "id3";
flash.events.Event.INIT = "init";
flash.events.Event.MOUSE_LEAVE = "mouseLeave";
flash.events.Event.OPEN = "open";
flash.events.Event.REMOVED = "removed";
flash.events.Event.REMOVED_FROM_STAGE = "removedFromStage";
flash.events.Event.RENDER = "render";
flash.events.Event.RESIZE = "resize";
flash.events.Event.SCROLL = "scroll";
flash.events.Event.SELECT = "select";
flash.events.Event.TAB_CHILDREN_CHANGE = "tabChildrenChange";
flash.events.Event.TAB_ENABLED_CHANGE = "tabEnabledChange";
flash.events.Event.TAB_INDEX_CHANGE = "tabIndexChange";
flash.events.Event.UNLOAD = "unload";
flash.events.Event.SOUND_COMPLETE = "soundComplete";
flash.events.MouseEvent.CLICK = "click";
flash.events.MouseEvent.DOUBLE_CLICK = "doubleClick";
flash.events.MouseEvent.MOUSE_DOWN = "mouseDown";
flash.events.MouseEvent.MOUSE_MOVE = "mouseMove";
flash.events.MouseEvent.MOUSE_OUT = "mouseOut";
flash.events.MouseEvent.MOUSE_OVER = "mouseOver";
flash.events.MouseEvent.MOUSE_UP = "mouseUp";
flash.events.MouseEvent.MOUSE_WHEEL = "mouseWheel";
flash.events.MouseEvent.RIGHT_CLICK = "rightClick";
flash.events.MouseEvent.RIGHT_MOUSE_DOWN = "rightMouseDown";
flash.events.MouseEvent.RIGHT_MOUSE_UP = "rightMouseUp";
flash.events.MouseEvent.ROLL_OUT = "rollOut";
flash.events.MouseEvent.ROLL_OVER = "rollOver";
flash.display.Stage.NAME = "Stage";
flash.display.Stage.OrientationPortrait = 1;
flash.display.Stage.OrientationPortraitUpsideDown = 2;
flash.display.Stage.OrientationLandscapeRight = 3;
flash.display.Stage.OrientationLandscapeLeft = 4;
flash.display.Stage.__acceleration = { x : 0.0, y : 1.0, z : 0.0};
flash.display.Stage.DEFAULT_FRAMERATE = 0.0;
flash.display.Stage.UI_EVENTS_QUEUE_MAX = 1000;
flash.display.Stage.__mouseChanges = [flash.events.MouseEvent.MOUSE_OUT,flash.events.MouseEvent.MOUSE_OVER,flash.events.MouseEvent.ROLL_OUT,flash.events.MouseEvent.ROLL_OVER];
flash.display.Stage.__touchChanges = ["touchOut","touchOver","touchRollOut","touchRollOver"];
flash.display.StageQuality.BEST = "best";
flash.display.StageQuality.HIGH = "high";
flash.display.StageQuality.MEDIUM = "medium";
flash.display.StageQuality.LOW = "low";
flash.errors.Error.DEFAULT_TO_STRING = "Error";
flash.events.TextEvent.LINK = "link";
flash.events.TextEvent.TEXT_INPUT = "textInput";
flash.events.ErrorEvent.ERROR = "error";
flash.events.Listener.sIDs = 1;
flash.events.EventPhase.CAPTURING_PHASE = 0;
flash.events.EventPhase.AT_TARGET = 1;
flash.events.EventPhase.BUBBLING_PHASE = 2;
flash.events.FocusEvent.FOCUS_IN = "focusIn";
flash.events.FocusEvent.FOCUS_OUT = "focusOut";
flash.events.FocusEvent.KEY_FOCUS_CHANGE = "keyFocusChange";
flash.events.FocusEvent.MOUSE_FOCUS_CHANGE = "mouseFocusChange";
flash.events.HTTPStatusEvent.HTTP_RESPONSE_STATUS = "httpResponseStatus";
flash.events.HTTPStatusEvent.HTTP_STATUS = "httpStatus";
flash.events.IOErrorEvent.IO_ERROR = "ioError";
flash.events.KeyboardEvent.KEY_DOWN = "keyDown";
flash.events.KeyboardEvent.KEY_UP = "keyUp";
flash.events.ProgressEvent.PROGRESS = "progress";
flash.events.ProgressEvent.SOCKET_DATA = "socketData";
flash.events.SecurityErrorEvent.SECURITY_ERROR = "securityError";
flash.events.TimerEvent.TIMER = "timer";
flash.events.TimerEvent.TIMER_COMPLETE = "timerComplete";
flash.events.TouchEvent.TOUCH_BEGIN = "touchBegin";
flash.events.TouchEvent.TOUCH_END = "touchEnd";
flash.events.TouchEvent.TOUCH_MOVE = "touchMove";
flash.events.TouchEvent.TOUCH_OUT = "touchOut";
flash.events.TouchEvent.TOUCH_OVER = "touchOver";
flash.events.TouchEvent.TOUCH_ROLL_OUT = "touchRollOut";
flash.events.TouchEvent.TOUCH_ROLL_OVER = "touchRollOver";
flash.events.TouchEvent.TOUCH_TAP = "touchTap";
flash.filters.DropShadowFilter.DEGREES_FULL_RADIUS = 360.0;
flash.geom.Transform.DEG_TO_RAD = Math.PI / 180.0;
flash.media.Sound.library = new haxe.ds.StringMap();
flash.net.URLRequestMethod.DELETE = "DELETE";
flash.net.URLRequestMethod.GET = "GET";
flash.net.URLRequestMethod.HEAD = "HEAD";
flash.net.URLRequestMethod.OPTIONS = "OPTIONS";
flash.net.URLRequestMethod.POST = "POST";
flash.net.URLRequestMethod.PUT = "PUT";
flash.system.ApplicationDomain.currentDomain = new flash.system.ApplicationDomain(null);
flash.system.SecurityDomain.currentDomain = new flash.system.SecurityDomain();
flash.text.Font.DEFAULT_FONT_DATA = "q:55oy6:ascentd950.5y4:dataad84d277.5d564d277.5d564d320.5d293d1024d187.5d1024d442.5d362.5d84d362.5d84d277.5hy6:_widthd651.5y4:xMaxd564y4:xMind84y4:yMaxd746.5y4:yMind0y7:_heightd662.5y7:leadingd168y7:descentd241.5y8:charCodei55y15:leftsideBearingd84y12:advanceWidthd651.5y8:commandsai1i2i2i2i2i2i2i2hg:111oR0d950.5R1ad313.5d528.5d239.5d528.5d196.5d586.25d153.5d644d153.5d744.5d153.5d845d196.25d902.75d239d960.5d313.5d960.5d387d960.5d430d902.5d473d844.5d473d744.5d473d645d430d586.75d387d528.5d313.5d528.5d313.5d450.5d433.5d450.5d502d528.5d570.5d606.5d570.5d744.5d570.5d882d502d960.25d433.5d1038.5d313.5d1038.5d193d1038.5d124.75d960.25d56.5d882d56.5d744.5d56.5d606.5d124.75d528.5d193d450.5d313.5d450.5hR2d626.5R3d570.5R4d56.5R5d573.5R6d-14.5R7d517R8d168R9d241.5R10i111R11d56.5R12d626.5R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hg:54oR0d950.5R1ad338d610.5d270d610.5d230.25d657d190.5d703.5d190.5d784.5d190.5d865d230.25d911.75d270d958.5d338d958.5d406d958.5d445.75d911.75d485.5d865d485.5d784.5d485.5d703.5d445.75d657d406d610.5d338d610.5d538.5d294d538.5d386d500.5d368d461.75d358.5d423d349d385d349d285d349d232.25d416.5d179.5d484d172d620.5d201.5d577d246d553.75d290.5d530.5d344d530.5d456.5d530.5d521.75d598.75d587d667d587d784.5d587d899.5d519d969d451d1038.5d338d1038.5d208.5d1038.5d140d939.25d71.5d840d71.5d651.5d71.5d474.5d155.5d369.25d239.5d264d381d264d419d264d457.75d271.5d496.5d279d538.5d294hR2d651.5R3d587R4d71.5R5d760R6d-14.5R7d688.5R8d168R9d241.5R10i54R11d71.5R12d651.5R13ai1i3i3i3i3i3i3i3i3i1i2i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3hg:110oR0d950.5R1ad562d686d562d1024d470d1024d470d689d470d609.5d439d570d408d530.5d346d530.5d271.5d530.5d228.5d578d185.5d625.5d185.5d707.5d185.5d1024d93d1024d93d464d185.5d464d185.5d551d218.5d500.5d263.25d475.5d308d450.5d366.5d450.5d463d450.5d512.5d510.25d562d570d562d686hR2d649R3d562R4d93R5d573.5R6d0R7d480.5R8d168R9d241.5R10i110R11d93R12d649R13ai1i2i2i2i3i3i3i3i2i2i2i2i2i3i3i3i3hg:53oR0d950.5R1ad110.5d277.5d507d277.5d507d362.5d203d362.5d203d545.5d225d538d247d534.25d269d530.5d291d530.5d416d530.5d489d599d562d667.5d562d784.5d562d905d487d971.75d412d1038.5d275.5d1038.5d228.5d1038.5d179.75d1030.5d131d1022.5d79d1006.5d79d905d124d929.5d172d941.5d220d953.5d273.5d953.5d360d953.5d410.5d908d461d862.5d461d784.5d461d706.5d410.5d661d360d615.5d273.5d615.5d233d615.5d192.75d624.5d152.5d633.5d110.5d652.5d110.5d277.5hR2d651.5R3d562R4d79R5d746.5R6d-14.5R7d667.5R8d168R9d241.5R10i53R11d79R12d651.5R13ai1i2i2i2i2i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3i2hg:109oR0d950.5R1ad532.5d571.5d567d509.5d615d480d663d450.5d728d450.5d815.5d450.5d863d511.75d910.5d573d910.5d686d910.5d1024d818d1024d818d689d818d608.5d789.5d569.5d761d530.5d702.5d530.5d631d530.5d589.5d578d548d625.5d548d707.5d548d1024d455.5d1024d455.5d689d455.5d608d427d569.25d398.5d530.5d339d530.5d268.5d530.5d227d578.25d185.5d626d185.5d707.5d185.5d1024d93d1024d93d464d185.5d464d185.5d551d217d499.5d261d475d305d450.5d365.5d450.5d426.5d450.5d469.25d481.5d512d512.5d532.5d571.5hR2d997.5R3d910.5R4d93R5d573.5R6d0R7d480.5R8d168R9d241.5R10i109R11d93R12d997.5R13ai1i3i3i3i3i2i2i2i3i3i3i3i2i2i2i3i3i3i3i2i2i2i2i2i3i3i3i3hg:52oR0d950.5R1ad387d365.5d132d764d387d764d387d365.5d360.5d277.5d487.5d277.5d487.5d764d594d764d594d848d487.5d848d487.5d1024d387d1024d387d848d50d848d50d750.5d360.5d277.5hR2d651.5R3d594R4d50R5d746.5R6d0R7d696.5R8d168R9d241.5R10i52R11d50R12d651.5R13ai1i2i2i2i1i2i2i2i2i2i2i2i2i2i2i2hg:108oR0d950.5R1ad96.5d246d188.5d246d188.5d1024d96.5d1024d96.5d246hR2d284.5R3d188.5R4d96.5R5d778R6d0R7d681.5R8d168R9d241.5R10i108R11d96.5R12d284.5R13ai1i2i2i2i2hg:51oR0d950.5R1ad415.5d621.5d488d637d528.75d686d569.5d735d569.5d807d569.5d917.5d493.5d978d417.5d1038.5d277.5d1038.5d230.5d1038.5d180.75d1029.25d131d1020d78d1001.5d78d904d120d928.5d170d941d220d953.5d274.5d953.5d369.5d953.5d419.25d916d469d878.5d469d807d469d741d422.75d703.75d376.5d666.5d294d666.5d207d666.5d207d583.5d298d583.5d372.5d583.5d412d553.75d451.5d524d451.5d468d451.5d410.5d410.75d379.75d370d349d294d349d252.5d349d205d358d157.5d367d100.5d386d100.5d296d158d280d208.25d272d258.5d264d303d264d418d264d485d316.25d552d368.5d552d457.5d552d519.5d516.5d562.25d481d605d415.5d621.5hR2d651.5R3d569.5R4d78R5d760R6d-14.5R7d682R8d168R9d241.5R10i51R11d78R12d651.5R13ai1i3i3i3i3i3i3i2i3i3i3i3i3i3i2i2i2i3i3i3i3i3i3i2i3i3i3i3i3i3hg:107oR0d950.5R1ad93d246d185.5d246d185.5d705.5d460d464d577.5d464d280.5d726d590d1024d470d1024d185.5d750.5d185.5d1024d93d1024d93d246hR2d593R3d590R4d93R5d778R6d0R7d685R8d168R9d241.5R10i107R11d93R12d593R13ai1i2i2i2i2i2i2i2i2i2i2i2hg:50oR0d950.5R1ad196.5d939d549d939d549d1024d75d1024d75d939d132.5d879.5d231.75d779.25d331d679d356.5d650d405d595.5d424.25d557.75d443.5d520d443.5d483.5d443.5d424d401.75d386.5d360d349d293d349d245.5d349d192.75d365.5d140d382d80d415.5d80d313.5d141d289d194d276.5d247d264d291d264d407d264d476d322d545d380d545d477d545d523d527.75d564.25d510.5d605.5d465d661.5d452.5d676d385.5d745.25d318.5d814.5d196.5d939hR2d651.5R3d549R4d75R5d760R6d0R7d685R8d168R9d241.5R10i50R11d75R12d651.5R13ai1i2i2i2i2i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3hg:106oR0d950.5R1ad96.5d464d188.5d464d188.5d1034d188.5d1141d147.75d1189d107d1237d16.5d1237d-18.5d1237d-18.5d1159d6d1159d58.5d1159d77.5d1134.75d96.5d1110.5d96.5d1034d96.5d464d96.5d246d188.5d246d188.5d362.5d96.5d362.5d96.5d246hR2d284.5R3d188.5R4d-18.5R5d778R6d-213R7d796.5R8d168R9d241.5R10i106R11d-18.5R12d284.5R13ai1i2i2i3i3i2i2i2i3i3i2i1i2i2i2i2hg:49oR0d950.5R1ad127d939d292d939d292d369.5d112.5d405.5d112.5d313.5d291d277.5d392d277.5d392d939d557d939d557d1024d127d1024d127d939hR2d651.5R3d557R4d112.5R5d746.5R6d0R7d634R8d168R9d241.5R10i49R11d112.5R12d651.5R13ai1i2i2i2i2i2i2i2i2i2i2i2hg:105oR0d950.5R1ad96.5d464d188.5d464d188.5d1024d96.5d1024d96.5d464d96.5d246d188.5d246d188.5d362.5d96.5d362.5d96.5d246hR2d284.5R3d188.5R4d96.5R5d778R6d0R7d681.5R8d168R9d241.5R10i105R11d96.5R12d284.5R13ai1i2i2i2i2i1i2i2i2i2hg:48oR0d950.5R1ad325.5d344d247.5d344d208.25d420.75d169d497.5d169d651.5d169d805d208.25d881.75d247.5d958.5d325.5d958.5d404d958.5d443.25d881.75d482.5d805d482.5d651.5d482.5d497.5d443.25d420.75d404d344d325.5d344d325.5d264d451d264d517.25d363.25d583.5d462.5d583.5d651.5d583.5d840d517.25d939.25d451d1038.5d325.5d1038.5d200d1038.5d133.75d939.25d67.5d840d67.5d651.5d67.5d462.5d133.75d363.25d200d264d325.5d264hR2d651.5R3d583.5R4d67.5R5d760R6d-14.5R7d692.5R8d168R9d241.5R10i48R11d67.5R12d651.5R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hg:104oR0d950.5R1ad562d686d562d1024d470d1024d470d689d470d609.5d439d570d408d530.5d346d530.5d271.5d530.5d228.5d578d185.5d625.5d185.5d707.5d185.5d1024d93d1024d93d246d185.5d246d185.5d551d218.5d500.5d263.25d475.5d308d450.5d366.5d450.5d463d450.5d512.5d510.25d562d570d562d686hR2d649R3d562R4d93R5d778R6d0R7d685R8d168R9d241.5R10i104R11d93R12d649R13ai1i2i2i2i3i3i3i3i2i2i2i2i2i3i3i3i3hg:47oR0d950.5R1ad260d277.5d345d277.5d85d1119d0d1119d260d277.5hR2d345R3d345R4d0R5d746.5R6d-95R7d746.5R8d168R9d241.5R10i47R11d0R12d345R13ai1i2i2i2i2hg:103oR0d950.5R1ad465d737.5d465d637.5d423.75d582.5d382.5d527.5d308d527.5d234d527.5d192.75d582.5d151.5d637.5d151.5d737.5d151.5d837d192.75d892d234d947d308d947d382.5d947d423.75d892d465d837d465d737.5d557d954.5d557d1097.5d493.5d1167.25d430d1237d299d1237d250.5d1237d207.5d1229.75d164.5d1222.5d124d1207.5d124d1118d164.5d1140d204d1150.5d243.5d1161d284.5d1161d375d1161d420d1113.75d465d1066.5d465d971d465d925.5d436.5d975d392d999.5d347.5d1024d285.5d1024d182.5d1024d119.5d945.5d56.5d867d56.5d737.5d56.5d607.5d119.5d529d182.5d450.5d285.5d450.5d347.5d450.5d392d475d436.5d499.5d465d549d465d464d557d464d557d954.5hR2d650R3d557R4d56.5R5d573.5R6d-213R7d517R8d168R9d241.5R10i103R11d56.5R12d650R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i2i3i3i3i3i2i3i3i3i3i3i3i3i3i2i2i2hg:46oR0d950.5R1ad109.5d897d215d897d215d1024d109.5d1024d109.5d897hR2d325.5R3d215R4d109.5R5d127R6d0R7d17.5R8d168R9d241.5R10i46R11d109.5R12d325.5R13ai1i2i2i2i2hg:102oR0d950.5R1ad380d246d380d322.5d292d322.5d242.5d322.5d223.25d342.5d204d362.5d204d414.5d204d464d355.5d464d355.5d535.5d204d535.5d204d1024d111.5d1024d111.5d535.5d23.5d535.5d23.5d464d111.5d464d111.5d425d111.5d331.5d155d288.75d198.5d246d293d246d380d246hR2d360.5R3d380R4d23.5R5d778R6d0R7d754.5R8d168R9d241.5R10i102R11d23.5R12d360.5R13ai1i2i2i3i3i2i2i2i2i2i2i2i2i2i2i2i3i3i2hg:45oR0d950.5R1ad50d702.5d319.5d702.5d319.5d784.5d50d784.5d50d702.5hR2d369.5R3d319.5R4d50R5d321.5R6d239.5R7d271.5R8d168R9d241.5R10i45R11d50R12d369.5R13ai1i2i2i2i2hg:101oR0d950.5R1ad575.5d721d575.5d766d152.5d766d158.5d861d209.75d910.75d261d960.5d352.5d960.5d405.5d960.5d455.25d947.5d505d934.5d554d908.5d554d995.5d504.5d1016.5d452.5d1027.5d400.5d1038.5d347d1038.5d213d1038.5d134.75d960.5d56.5d882.5d56.5d749.5d56.5d612d130.75d531.25d205d450.5d331d450.5d444d450.5d509.75d523.25d575.5d596d575.5d721d483.5d694d482.5d618.5d441.25d573.5d400d528.5d332d528.5d255d528.5d208.75d572d162.5d615.5d155.5d694.5d483.5d694hR2d630R3d575.5R4d56.5R5d573.5R6d-14.5R7d517R8d168R9d241.5R10i101R11d56.5R12d630R13ai1i2i2i3i3i3i3i2i3i3i3i3i3i3i3i3i1i3i3i3i3i2hg:44oR0d950.5R1ad120d897d225.5d897d225.5d983d143.5d1143d79d1143d120d983d120d897hR2d325.5R3d225.5R4d79R5d127R6d-119R7d48R8d168R9d241.5R10i44R11d79R12d325.5R13ai1i2i2i2i2i2i2hg:100oR0d950.5R1ad465d549d465d246d557d246d557d1024d465d1024d465d940d436d990d391.75d1014.25d347.5d1038.5d285.5d1038.5d184d1038.5d120.25d957.5d56.5d876.5d56.5d744.5d56.5d612.5d120.25d531.5d184d450.5d285.5d450.5d347.5d450.5d391.75d474.75d436d499d465d549d151.5d744.5d151.5d846d193.25d903.75d235d961.5d308d961.5d381d961.5d423d903.75d465d846d465d744.5d465d643d423d585.25d381d527.5d308d527.5d235d527.5d193.25d585.25d151.5d643d151.5d744.5hR2d650R3d557R4d56.5R5d778R6d-14.5R7d721.5R8d168R9d241.5R10i100R11d56.5R12d650R13ai1i2i2i2i2i2i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hg:43oR0d950.5R1ad471d382d471d660.5d749.5d660.5d749.5d745.5d471d745.5d471d1024d387d1024d387d745.5d108.5d745.5d108.5d660.5d387d660.5d387d382d471d382hR2d858R3d749.5R4d108.5R5d642R6d0R7d533.5R8d168R9d241.5R10i43R11d108.5R12d858R13ai1i2i2i2i2i2i2i2i2i2i2i2i2hg:99oR0d950.5R1ad499.5d485.5d499.5d571.5d460.5d550d421.25d539.25d382d528.5d342d528.5d252.5d528.5d203d585.25d153.5d642d153.5d744.5d153.5d847d203d903.75d252.5d960.5d342d960.5d382d960.5d421.25d949.75d460.5d939d499.5d917.5d499.5d1002.5d461d1020.5d419.75d1029.5d378.5d1038.5d332d1038.5d205.5d1038.5d131d959d56.5d879.5d56.5d744.5d56.5d607.5d131.75d529d207d450.5d338d450.5d380.5d450.5d421d459.25d461.5d468d499.5d485.5hR2d563R3d499.5R4d56.5R5d573.5R6d-14.5R7d517R8d168R9d241.5R10i99R11d56.5R12d563R13ai1i2i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3hg:42oR0d950.5R1ad481.5d400.5d302d497.5d481.5d595d452.5d644d284.5d542.5d284.5d731d227.5d731d227.5d542.5d59.5d644d30.5d595d210d497.5d30.5d400.5d59.5d351d227.5d452.5d227.5d264d284.5d264d284.5d452.5d452.5d351d481.5d400.5hR2d512R3d481.5R4d30.5R5d760R6d293R7d729.5R8d168R9d241.5R10i42R11d30.5R12d512R13ai1i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2hg:98oR0d950.5R1ad498.5d744.5d498.5d643d456.75d585.25d415d527.5d342d527.5d269d527.5d227.25d585.25d185.5d643d185.5d744.5d185.5d846d227.25d903.75d269d961.5d342d961.5d415d961.5d456.75d903.75d498.5d846d498.5d744.5d185.5d549d214.5d499d258.75d474.75d303d450.5d364.5d450.5d466.5d450.5d530.25d531.5d594d612.5d594d744.5d594d876.5d530.25d957.5d466.5d1038.5d364.5d1038.5d303d1038.5d258.75d1014.25d214.5d990d185.5d940d185.5d1024d93d1024d93d246d185.5d246d185.5d549hR2d650R3d594R4d93R5d778R6d-14.5R7d685R8d168R9d241.5R10i98R11d93R12d650R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3i2i2i2i2i2hg:41oR0d950.5R1ad82d247d162d247d237d365d274.25d478d311.5d591d311.5d702.5d311.5d814.5d274.25d928d237d1041.5d162d1159d82d1159d148.5d1044.5d181.25d931.25d214d818d214d702.5d214d587d181.25d474.5d148.5d362d82d247hR2d399.5R3d311.5R4d82R5d777R6d-135R7d695R8d168R9d241.5R10i41R11d82R12d399.5R13ai1i2i3i3i3i3i2i3i3i3i3hg:97oR0d950.5R1ad351d742.5d239.5d742.5d196.5d768d153.5d793.5d153.5d855d153.5d904d185.75d932.75d218d961.5d273.5d961.5d350d961.5d396.25d907.25d442.5d853d442.5d763d442.5d742.5d351d742.5d534.5d704.5d534.5d1024d442.5d1024d442.5d939d411d990d364d1014.25d317d1038.5d249d1038.5d163d1038.5d112.25d990.25d61.5d942d61.5d861d61.5d766.5d124.75d718.5d188d670.5d313.5d670.5d442.5d670.5d442.5d661.5d442.5d598d400.75d563.25d359d528.5d283.5d528.5d235.5d528.5d190d540d144.5d551.5d102.5d574.5d102.5d489.5d153d470d200.5d460.25d248d450.5d293d450.5d414.5d450.5d474.5d513.5d534.5d576.5d534.5d704.5hR2d627.5R3d534.5R4d61.5R5d573.5R6d-14.5R7d512R8d168R9d241.5R10i97R11d61.5R12d627.5R13ai1i3i3i3i3i3i3i2i2i1i2i2i2i3i3i3i3i3i3i2i2i3i3i3i3i2i3i3i3i3hg:40oR0d950.5R1ad317.5d247d250.5d362d218d474.5d185.5d587d185.5d702.5d185.5d818d218.25d931.25d251d1044.5d317.5d1159d237.5d1159d162.5d1041.5d125.25d928d88d814.5d88d702.5d88d591d125d478d162d365d237.5d247d317.5d247hR2d399.5R3d317.5R4d88R5d777R6d-135R7d689R8d168R9d241.5R10i40R11d88R12d399.5R13ai1i3i3i3i3i2i3i3i3i3i2hg:96oR0d950.5R1ad183.5d205d324.5d392d248d392d85d205d183.5d205hR2d512R3d324.5R4d85R5d819R6d632R7d734R8d168R9d241.5R10i96R11d85R12d512R13ai1i2i2i2i2hg:39oR0d950.5R1ad183.5d277.5d183.5d555d98.5d555d98.5d277.5d183.5d277.5hR2d281.5R3d183.5R4d98.5R5d746.5R6d469R7d648R8d168R9d241.5R10i39R11d98.5R12d281.5R13ai1i2i2i2i2hg:95oR0d950.5R1ad522d1194d522d1265.5d-10d1265.5d-10d1194d522d1194hR2d512R3d522R4d-10R5d-170R6d-241.5R7d-160R8d168R9d241.5R10i95R11d-10R12d512R13ai1i2i2i2i2hg:38oR0d950.5R1ad249d622.5d203.5d663d182.25d703.25d161d743.5d161d787.5d161d860.5d214d909d267d957.5d347d957.5d394.5d957.5d436d941.75d477.5d926d514d894d249d622.5d319.5d566.5d573.5d826.5d603d782d619.5d731.25d636d680.5d639d623.5d732d623.5d726d689.5d700d754d674d818.5d627.5d881.5d767d1024d641d1024d569.5d950.5d517.5d995d460.5d1016.75d403.5d1038.5d338d1038.5d217.5d1038.5d141d969.75d64.5d901d64.5d793.5d64.5d729.5d98d673.25d131.5d617d198.5d567.5d174.5d536d162d504.75d149.5d473.5d149.5d443.5d149.5d362.5d205d313.25d260.5d264d352.5d264d394d264d435.25d273d476.5d282d519d300d519d391d475.5d367.5d436d355.25d396.5d343d362.5d343d310d343d277.25d370.75d244.5d398.5d244.5d442.5d244.5d468d259.25d493.75d274d519.5d319.5d566.5hR2d798.5R3d767R4d64.5R5d760R6d-14.5R7d695.5R8d168R9d241.5R10i38R11d64.5R12d798.5R13ai1i3i3i3i3i3i3i2i1i2i3i3i2i3i3i2i2i2i3i3i3i3i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3hg:94oR0d950.5R1ad478d277.5d749.5d556d649d556d429d358.5d209d556d108.5d556d380d277.5d478d277.5hR2d858R3d749.5R4d108.5R5d746.5R6d468R7d638R8d168R9d241.5R10i94R11d108.5R12d858R13ai1i2i2i2i2i2i2i2hg:37oR0d950.5R1ad744.5d695.5d701d695.5d676.25d732.5d651.5d769.5d651.5d835.5d651.5d900.5d676.25d937.75d701d975d744.5d975d787d975d811.75d937.75d836.5d900.5d836.5d835.5d836.5d770d811.75d732.75d787d695.5d744.5d695.5d744.5d632d823.5d632d870d687d916.5d742d916.5d835.5d916.5d929d869.75d983.75d823d1038.5d744.5d1038.5d664.5d1038.5d618d983.75d571.5d929d571.5d835.5d571.5d741.5d618.25d686.75d665d632d744.5d632d228.5d327.5d185.5d327.5d160.75d364.75d136d402d136d467d136d533d160.5d570d185d607d228.5d607d272d607d296.75d570d321.5d533d321.5d467d321.5d402.5d296.5d365d271.5d327.5d228.5d327.5d680d264d760d264d293d1038.5d213d1038.5d680d264d228.5d264d307.5d264d354.5d318.75d401.5d373.5d401.5d467d401.5d561.5d354.75d616d308d670.5d228.5d670.5d149d670.5d102.75d615.75d56.5d561d56.5d467d56.5d374d103d319d149.5d264d228.5d264hR2d973R3d916.5R4d56.5R5d760R6d-14.5R7d703.5R8d168R9d241.5R10i37R11d56.5R12d973R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3i1i2i2i2i2i1i3i3i3i3i3i3i3i3hg:93oR0d950.5R1ad311.5d246d311.5d1159d99.5d1159d99.5d1087.5d219d1087.5d219d317.5d99.5d317.5d99.5d246d311.5d246hR2d399.5R3d311.5R4d99.5R5d778R6d-135R7d678.5R8d168R9d241.5R10i93R11d99.5R12d399.5R13ai1i2i2i2i2i2i2i2i2hg:36oR0d950.5R1ad346d1174.5d296d1174.5d295.5d1024d243d1023d190.5d1011.75d138d1000.5d85d978d85d888d136d920d188.25d936.25d240.5d952.5d296d953d296d725d185.5d707d135.25d664d85d621d85d546d85d464.5d139.5d417.5d194d370.5d296d363.5d296d246d346d246d346d362d392.5d364d436d371.75d479.5d379.5d521d393d521d480.5d479.5d459.5d435.75d448d392d436.5d346d434.5d346d648d459.5d665.5d513d710.5d566.5d755.5d566.5d833.5d566.5d918d509.75d966.75d453d1015.5d346d1023d346d1174.5d296d639d296d434d238d440.5d207.5d467d177d493.5d177d537.5d177d580.5d205.25d604.5d233.5d628.5d296d639d346d735d346d951.5d409.5d943d441.75d915.5d474d888d474d843d474d799d443.25d773d412.5d747d346d735hR2d651.5R3d566.5R4d85R5d778R6d-150.5R7d693R8d168R9d241.5R10i36R11d85R12d651.5R13ai1i2i2i3i3i2i3i3i2i3i3i3i3i2i2i2i3i3i2i3i3i2i3i3i3i3i2i1i2i3i3i3i3i1i2i3i3i3i3hg:92oR0d950.5R1ad85d277.5d345d1119d260d1119d0d277.5d85d277.5hR2d345R3d345R4d0R5d746.5R6d-95R7d746.5R8d168R9d241.5R10i92R11d0R12d345R13ai1i2i2i2i2hg:35oR0d950.5R1ad523.5d573.5d378d573.5d336d740.5d482.5d740.5d523.5d573.5d448.5d289d396.5d496.5d542.5d496.5d595d289d675d289d623.5d496.5d779.5d496.5d779.5d573.5d604d573.5d563d740.5d722d740.5d722d817d543.5d817d491.5d1024d411.5d1024d463d817d316.5d817d265d1024d184.5d1024d236.5d817d79d817d79d740.5d255d740.5d297d573.5d136d573.5d136d496.5d316.5d496.5d367.5d289d448.5d289hR2d858R3d779.5R4d79R5d735R6d0R7d656R8d168R9d241.5R10i35R11d79R12d858R13ai1i2i2i2i2i1i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2hg:91oR0d950.5R1ad88d246d300d246d300d317.5d180d317.5d180d1087.5d300d1087.5d300d1159d88d1159d88d246hR2d399.5R3d300R4d88R5d778R6d-135R7d690R8d168R9d241.5R10i91R11d88R12d399.5R13ai1i2i2i2i2i2i2i2i2hg:34oR0d950.5R1ad183.5d277.5d183.5d555d98.5d555d98.5d277.5d183.5d277.5d372.5d277.5d372.5d555d287.5d555d287.5d277.5d372.5d277.5hR2d471R3d372.5R4d98.5R5d746.5R6d469R7d648R8d168R9d241.5R10i34R11d98.5R12d471R13ai1i2i2i2i2i1i2i2i2i2hg:90oR0d950.5R1ad57.5d277.5d644d277.5d644d354.5d172d939d655.5d939d655.5d1024d46d1024d46d947d518d362.5d57.5d362.5d57.5d277.5hR2d701.5R3d655.5R4d46R5d746.5R6d0R7d700.5R8d168R9d241.5R10i90R11d46R12d701.5R13ai1i2i2i2i2i2i2i2i2i2i2hg:33oR0d950.5R1ad154.5d897d256d897d256d1024d154.5d1024d154.5d897d154.5d277.5d256d277.5d256d605d246d783.5d165d783.5d154.5d605d154.5d277.5hR2d410.5R3d256R4d154.5R5d746.5R6d0R7d592R8d168R9d241.5R10i33R11d154.5R12d410.5R13ai1i2i2i2i2i1i2i2i2i2i2i2hg:89oR0d950.5R1ad-2d277.5d106.5d277.5d313.5d584.5d519d277.5d627.5d277.5d363.5d668.5d363.5d1024d262d1024d262d668.5d-2d277.5hR2d625.5R3d627.5R4d-2R5d746.5R6d0R7d748.5R8d168R9d241.5R10i89R11d-2R12d625.5R13ai1i2i2i2i2i2i2i2i2i2hg:32oR0d950.5R1ahR2d325.5R3d0R4d0R5d0R6d0R7d0R8d168R9d241.5R10i32R11d0R12d325.5R13ahg:88oR0d950.5R1ad64.5d277.5d173d277.5d358.5d555d545d277.5d653.5d277.5d413.5d636d669.5d1024d561d1024d351d706.5d139.5d1024d30.5d1024d297d625.5d64.5d277.5hR2d701.5R3d669.5R4d30.5R5d746.5R6d0R7d716R8d168R9d241.5R10i88R11d30.5R12d701.5R13ai1i2i2i2i2i2i2i2i2i2i2i2i2hg:87oR0d950.5R1ad34d277.5d136d277.5d293d908.5d449.5d277.5d563d277.5d720d908.5d876.5d277.5d979d277.5d791.5d1024d664.5d1024d507d376d348d1024d221d1024d34d277.5hR2d1012.5R3d979R4d34R5d746.5R6d0R7d712.5R8d168R9d241.5R10i87R11d34R12d1012.5R13ai1i2i2i2i2i2i2i2i2i2i2i2i2i2hg:86oR0d950.5R1ad293d1024d8d277.5d113.5d277.5d350d906d587d277.5d692d277.5d407.5d1024d293d1024hR2d700.5R3d692R4d8R5d746.5R6d0R7d738.5R8d168R9d241.5R10i86R11d8R12d700.5R13ai1i2i2i2i2i2i2i2hg:85oR0d950.5R1ad89d277.5d190.5d277.5d190.5d731d190.5d851d234d903.75d277.5d956.5d375d956.5d472d956.5d515.5d903.75d559d851d559d731d559d277.5d660.5d277.5d660.5d743.5d660.5d889.5d588.25d964d516d1038.5d375d1038.5d233.5d1038.5d161.25d964d89d889.5d89d743.5d89d277.5hR2d749.5R3d660.5R4d89R5d746.5R6d-14.5R7d657.5R8d168R9d241.5R10i85R11d89R12d749.5R13ai1i2i2i3i3i3i3i2i2i2i3i3i3i3i2hg:84oR0d950.5R1ad-3d277.5d628.5d277.5d628.5d362.5d363.5d362.5d363.5d1024d262d1024d262d362.5d-3d362.5d-3d277.5hR2d625.5R3d628.5R4d-3R5d746.5R6d0R7d749.5R8d168R9d241.5R10i84R11d-3R12d625.5R13ai1i2i2i2i2i2i2i2i2hg:83oR0d950.5R1ad548d302d548d400.5d490.5d373d439.5d359.5d388.5d346d341d346d258.5d346d213.75d378d169d410d169d469d169d518.5d198.75d543.75d228.5d569d311.5d584.5d372.5d597d485.5d618.5d539.25d672.75d593d727d593d818d593d926.5d520.25d982.5d447.5d1038.5d307d1038.5d254d1038.5d194.25d1026.5d134.5d1014.5d70.5d991d70.5d887d132d921.5d191d939d250d956.5d307d956.5d393.5d956.5d440.5d922.5d487.5d888.5d487.5d825.5d487.5d770.5d453.75d739.5d420d708.5d343d693d281.5d681d168.5d658.5d118d610.5d67.5d562.5d67.5d477d67.5d378d137.25d321d207d264d329.5d264d382d264d436.5d273.5d491d283d548d302hR2d650R3d593R4d67.5R5d760R6d-14.5R7d692.5R8d168R9d241.5R10i83R11d67.5R12d650R13ai1i2i3i3i3i3i3i3i2i3i3i3i3i3i3i2i3i3i3i3i3i3i2i3i3i3i3i3i3hg:82oR0d950.5R1ad454.5d674d487d685d517.75d721d548.5d757d579.5d820d682d1024d573.5d1024d478d832.5d441d757.5d406.25d733d371.5d708.5d311.5d708.5d201.5d708.5d201.5d1024d100.5d1024d100.5d277.5d328.5d277.5d456.5d277.5d519.5d331d582.5d384.5d582.5d492.5d582.5d563d549.75d609.5d517d656d454.5d674d201.5d360.5d201.5d625.5d328.5d625.5d401.5d625.5d438.75d591.75d476d558d476d492.5d476d427d438.75d393.75d401.5d360.5d328.5d360.5d201.5d360.5hR2d711.5R3d682R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i82R11d100.5R12d711.5R13ai1i3i3i2i2i2i3i3i2i2i2i2i2i3i3i3i3i1i2i2i3i3i3i3i2hg:81oR0d950.5R1ad403.5d346d293.5d346d228.75d428d164d510d164d651.5d164d792.5d228.75d874.5d293.5d956.5d403.5d956.5d513.5d956.5d577.75d874.5d642d792.5d642d651.5d642d510d577.75d428d513.5d346d403.5d346d545d1010.5d678d1156d556d1156d445.5d1036.5d429d1037.5d420.25d1038d411.5d1038.5d403.5d1038.5d246d1038.5d151.75d933.25d57.5d828d57.5d651.5d57.5d474.5d151.75d369.25d246d264d403.5d264d560.5d264d654.5d369.25d748.5d474.5d748.5d651.5d748.5d781.5d696.25d874d644d966.5d545d1010.5hR2d806R3d748.5R4d57.5R5d760R6d-132R7d702.5R8d168R9d241.5R10i81R11d57.5R12d806R13ai1i3i3i3i3i3i3i3i3i1i2i2i2i3i3i3i3i3i3i3i3i3i3hg:80oR0d950.5R1ad201.5d360.5d201.5d641d328.5d641d399d641d437.5d604.5d476d568d476d500.5d476d433.5d437.5d397d399d360.5d328.5d360.5d201.5d360.5d100.5d277.5d328.5d277.5d454d277.5d518.25d334.25d582.5d391d582.5d500.5d582.5d611d518.25d667.5d454d724d328.5d724d201.5d724d201.5d1024d100.5d1024d100.5d277.5hR2d617.5R3d582.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i80R11d100.5R12d617.5R13ai1i2i2i3i3i3i3i2i1i2i3i3i3i3i2i2i2i2hg:79oR0d950.5R1ad403.5d346d293.5d346d228.75d428d164d510d164d651.5d164d792.5d228.75d874.5d293.5d956.5d403.5d956.5d513.5d956.5d577.75d874.5d642d792.5d642d651.5d642d510d577.75d428d513.5d346d403.5d346d403.5d264d560.5d264d654.5d369.25d748.5d474.5d748.5d651.5d748.5d828d654.5d933.25d560.5d1038.5d403.5d1038.5d246d1038.5d151.75d933.5d57.5d828.5d57.5d651.5d57.5d474.5d151.75d369.25d246d264d403.5d264hR2d806R3d748.5R4d57.5R5d760R6d-14.5R7d702.5R8d168R9d241.5R10i79R11d57.5R12d806R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hg:78oR0d950.5R1ad100.5d277.5d236.5d277.5d567.5d902d567.5d277.5d665.5d277.5d665.5d1024d529.5d1024d198.5d399.5d198.5d1024d100.5d1024d100.5d277.5hR2d766R3d665.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i78R11d100.5R12d766R13ai1i2i2i2i2i2i2i2i2i2i2hg:77oR0d950.5R1ad100.5d277.5d251d277.5d441.5d785.5d633d277.5d783.5d277.5d783.5d1024d685d1024d685d368.5d492.5d880.5d391d880.5d198.5d368.5d198.5d1024d100.5d1024d100.5d277.5hR2d883.5R3d783.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i77R11d100.5R12d883.5R13ai1i2i2i2i2i2i2i2i2i2i2i2i2i2hg:76oR0d950.5R1ad100.5d277.5d201.5d277.5d201.5d939d565d939d565d1024d100.5d1024d100.5d277.5hR2d570.5R3d565R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i76R11d100.5R12d570.5R13ai1i2i2i2i2i2i2hg:75oR0d950.5R1ad100.5d277.5d201.5d277.5d201.5d593d536.5d277.5d666.5d277.5d296d625.5d693d1024d560d1024d201.5d664.5d201.5d1024d100.5d1024d100.5d277.5hR2d671.5R3d693R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i75R11d100.5R12d671.5R13ai1i2i2i2i2i2i2i2i2i2i2i2hg:74oR0d950.5R1ad100.5d277.5d201.5d277.5d201.5d972d201.5d1107d150.25d1168d99d1229d-14.5d1229d-53d1229d-53d1144d-21.5d1144d45.5d1144d73d1106.5d100.5d1069d100.5d972d100.5d277.5hR2d302R3d201.5R4d-53R5d746.5R6d-205R7d799.5R8d168R9d241.5R10i74R11d-53R12d302R13ai1i2i2i3i3i2i2i2i3i3i2hg:73oR0d950.5R1ad100.5d277.5d201.5d277.5d201.5d1024d100.5d1024d100.5d277.5hR2d302R3d201.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i73R11d100.5R12d302R13ai1i2i2i2i2hg:72oR0d950.5R1ad100.5d277.5d201.5d277.5d201.5d583.5d568.5d583.5d568.5d277.5d669.5d277.5d669.5d1024d568.5d1024d568.5d668.5d201.5d668.5d201.5d1024d100.5d1024d100.5d277.5hR2d770R3d669.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i72R11d100.5R12d770R13ai1i2i2i2i2i2i2i2i2i2i2i2i2hg:71oR0d950.5R1ad609.5d917.5d609.5d717d444.5d717d444.5d634d709.5d634d709.5d954.5d651d996d580.5d1017.25d510d1038.5d430d1038.5d255d1038.5d156.25d936.25d57.5d834d57.5d651.5d57.5d468.5d156.25d366.25d255d264d430d264d503d264d568.75d282d634.5d300d690d335d690d442.5d634d395d571d371d508d347d438.5d347d301.5d347d232.75d423.5d164d500d164d651.5d164d802.5d232.75d879d301.5d955.5d438.5d955.5d492d955.5d534d946.25d576d937d609.5d917.5hR2d793.5R3d709.5R4d57.5R5d760R6d-14.5R7d702.5R8d168R9d241.5R10i71R11d57.5R12d793.5R13ai1i2i2i2i2i2i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3hg:70oR0d950.5R1ad100.5d277.5d529.5d277.5d529.5d362.5d201.5d362.5d201.5d582.5d497.5d582.5d497.5d667.5d201.5d667.5d201.5d1024d100.5d1024d100.5d277.5hR2d589R3d529.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i70R11d100.5R12d589R13ai1i2i2i2i2i2i2i2i2i2i2hg:126oR0d950.5R1ad749.5d615.5d749.5d704.5d697d744d652.25d761d607.5d778d559d778d504d778d431d748.5d425.5d746.5d423d745.5d419.5d744d412d741.5d334.5d710.5d287.5d710.5d243.5d710.5d200.5d729.75d157.5d749d108.5d790.5d108.5d701.5d161d662d205.75d644.75d250.5d627.5d299d627.5d354d627.5d427.5d657.5d432.5d659.5d435d660.5d439d662d446d664.5d523.5d695.5d570.5d695.5d613.5d695.5d655.75d676.5d698d657.5d749.5d615.5hR2d858R3d749.5R4d108.5R5d408.5R6d233.5R7d300R8d168R9d241.5R10i126R11d108.5R12d858R13ai1i2i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3hg:69oR0d950.5R1ad100.5d277.5d572.5d277.5d572.5d362.5d201.5d362.5d201.5d583.5d557d583.5d557d668.5d201.5d668.5d201.5d939d581.5d939d581.5d1024d100.5d1024d100.5d277.5hR2d647R3d581.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i69R11d100.5R12d647R13ai1i2i2i2i2i2i2i2i2i2i2i2i2hg:125oR0d950.5R1ad128d1119d163d1119d233d1119d254.25d1097.5d275.5d1076d275.5d1004.5d275.5d880.5d275.5d802.5d298d767d320.5d731.5d376d718d320.5d705.5d298d670d275.5d634.5d275.5d556d275.5d432d275.5d361d254.25d339.25d233d317.5d163d317.5d128d317.5d128d246d159.5d246d284d246d325.75d282.75d367.5d319.5d367.5d430d367.5d550d367.5d624.5d394.5d653.25d421.5d682d492.5d682d523.5d682d523.5d753.5d492.5d753.5d421.5d753.5d394.5d782.5d367.5d811.5d367.5d887d367.5d1006.5d367.5d1117d325.75d1154d284d1191d159.5d1191d128d1191d128d1119hR2d651.5R3d523.5R4d128R5d778R6d-167R7d650R8d168R9d241.5R10i125R11d128R12d651.5R13ai1i2i3i3i2i3i3i3i3i2i3i3i2i2i2i3i3i2i3i3i2i2i2i3i3i2i3i3i2i2hg:68oR0d950.5R1ad201.5d360.5d201.5d941d323.5d941d478d941d549.75d871d621.5d801d621.5d650d621.5d500d549.75d430.25d478d360.5d323.5d360.5d201.5d360.5d100.5d277.5d308d277.5d525d277.5d626.5d367.75d728d458d728d650d728d843d626d933.5d524d1024d308d1024d100.5d1024d100.5d277.5hR2d788.5R3d728R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i68R11d100.5R12d788.5R13ai1i2i2i3i3i3i3i2i1i2i3i3i3i3i2i2hg:124oR0d950.5R1ad215d241.5d215d1265.5d130d1265.5d130d241.5d215d241.5hR2d345R3d215R4d130R5d782.5R6d-241.5R7d652.5R8d168R9d241.5R10i124R11d130R12d345R13ai1i2i2i2i2hg:67oR0d950.5R1ad659.5d335d659.5d441.5d608.5d394d550.75d370.5d493d347d428d347d300d347d232d425.25d164d503.5d164d651.5d164d799d232d877.25d300d955.5d428d955.5d493d955.5d550.75d932d608.5d908.5d659.5d861d659.5d966.5d606.5d1002.5d547.25d1020.5d488d1038.5d422d1038.5d252.5d1038.5d155d934.75d57.5d831d57.5d651.5d57.5d471.5d155d367.75d252.5d264d422d264d489d264d548.25d281.75d607.5d299.5d659.5d335hR2d715R3d659.5R4d57.5R5d760R6d-14.5R7d702.5R8d168R9d241.5R10i67R11d57.5R12d715R13ai1i2i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3hg:123oR0d950.5R1ad523.5d1119d523.5d1191d492.5d1191d368d1191d325.75d1154d283.5d1117d283.5d1006.5d283.5d887d283.5d811.5d256.5d782.5d229.5d753.5d158.5d753.5d128d753.5d128d682d158.5d682d230d682d256.75d653.25d283.5d624.5d283.5d550d283.5d430d283.5d319.5d325.75d282.75d368d246d492.5d246d523.5d246d523.5d317.5d489.5d317.5d419d317.5d397.5d339.5d376d361.5d376d432d376d556d376d634.5d353.25d670d330.5d705.5d275.5d718d331d731.5d353.5d767d376d802.5d376d880.5d376d1004.5d376d1075d397.5d1097d419d1119d489.5d1119d523.5d1119hR2d651.5R3d523.5R4d128R5d778R6d-167R7d650R8d168R9d241.5R10i123R11d128R12d651.5R13ai1i2i2i3i3i2i3i3i2i2i2i3i3i2i3i3i2i2i2i3i3i2i3i3i3i3i2i3i3i2hg:66oR0d950.5R1ad201.5d667.5d201.5d941d363.5d941d445d941d484.25d907.25d523.5d873.5d523.5d804d523.5d734d484.25d700.75d445d667.5d363.5d667.5d201.5d667.5d201.5d360.5d201.5d585.5d351d585.5d425d585.5d461.25d557.75d497.5d530d497.5d473d497.5d416.5d461.25d388.5d425d360.5d351d360.5d201.5d360.5d100.5d277.5d358.5d277.5d474d277.5d536.5d325.5d599d373.5d599d462d599d530.5d567d571d535d611.5d473d621.5d547.5d637.5d588.75d688.25d630d739d630d815d630d915d562d969.5d494d1024d368.5d1024d100.5d1024d100.5d277.5hR2d702.5R3d630R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i66R11d100.5R12d702.5R13ai1i2i2i3i3i3i3i2i1i2i2i3i3i3i3i2i1i2i3i3i3i3i3i3i3i3i2i2hg:122oR0d950.5R1ad56.5d464d493.5d464d493.5d548d147.5d950.5d493.5d950.5d493.5d1024d44d1024d44d940d390d537.5d56.5d537.5d56.5d464hR2d537.5R3d493.5R4d44R5d560R6d0R7d516R8d168R9d241.5R10i122R11d44R12d537.5R13ai1i2i2i2i2i2i2i2i2i2i2hg:65oR0d950.5R1ad350d377d213d748.5d487.5d748.5d350d377d293d277.5d407.5d277.5d692d1024d587d1024d519d832.5d182.5d832.5d114.5d1024d8d1024d293d277.5hR2d700.5R3d692R4d8R5d746.5R6d0R7d738.5R8d168R9d241.5R10i65R11d8R12d700.5R13ai1i2i2i2i1i2i2i2i2i2i2i2i2hg:121oR0d950.5R1ad329.5d1076d290.5d1176d253.5d1206.5d216.5d1237d154.5d1237d81d1237d81d1160d135d1160d173d1160d194d1142d215d1124d240.5d1057d257d1015d30.5d464d128d464d303d902d478d464d575.5d464d329.5d1076hR2d606R3d575.5R4d30.5R5d560R6d-213R7d529.5R8d168R9d241.5R10i121R11d30.5R12d606R13ai1i3i3i2i2i2i3i3i2i2i2i2i2i2i2hg:64oR0d950.5R1ad381d755.5d381d827d416.5d867.75d452d908.5d514d908.5d575.5d908.5d610.75d867.5d646d826.5d646d755.5d646d685.5d610d644.25d574d603d513d603d452.5d603d416.75d644d381d685d381d755.5d653.5d905d623.5d943.5d584.75d961.75d546d980d494.5d980d408.5d980d354.75d917.75d301d855.5d301d755.5d301d655.5d355d593d409d530.5d494.5d530.5d546d530.5d585d549.25d624d568d653.5d606d653.5d540.5d725d540.5d725d908.5d798d897.5d839.25d841.75d880.5d786d880.5d697.5d880.5d644d864.75d597d849d550d817d510d765d444.5d690.25d409.75d615.5d375d527.5d375d466d375d409.5d391.25d353d407.5d305d439.5d226.5d490.5d182.25d573.25d138d656d138d752.5d138d832d166.75d901.5d195.5d971d250d1024d302.5d1076d371.5d1103.25d440.5d1130.5d519d1130.5d583.5d1130.5d645.75d1108.75d708d1087d760d1046.5d805d1102d742.5d1150.5d668.75d1176.25d595d1202d519d1202d426.5d1202d344.5d1169.25d262.5d1136.5d198.5d1074d134.5d1011.5d101d929.25d67.5d847d67.5d752.5d67.5d661.5d101.5d579d135.5d496.5d198.5d434d263d370.5d347.5d336.75d432d303d526.5d303d632.5d303d723.25d346.5d814d390d875.5d470d913d519d932.75d576.5d952.5d634d952.5d695.5d952.5d827d873d903d793.5d979d653.5d982d653.5d905hR2d1024R3d952.5R4d67.5R5d721R6d-178R7d653.5R8d168R9d241.5R10i64R11d67.5R12d1024R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3i2i2i2i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i2hg:120oR0d950.5R1ad562d464d359.5d736.5d572.5d1024d464d1024d301d804d138d1024d29.5d1024d247d731d48d464d156.5d464d305d663.5d453.5d464d562d464hR2d606R3d572.5R4d29.5R5d560R6d0R7d530.5R8d168R9d241.5R10i120R11d29.5R12d606R13ai1i2i2i2i2i2i2i2i2i2i2i2i2hg:63oR0d950.5R1ad195.5d897d297d897d297d1024d195.5d1024d195.5d897d294d823.5d198.5d823.5d198.5d746.5d198.5d696d212.5d663.5d226.5d631d271.5d588d316.5d543.5d345d517d357.75d493.5d370.5d470d370.5d445.5d370.5d401d337.75d373.5d305d346d251d346d211.5d346d166.75d363.5d122d381d73.5d414.5d73.5d320.5d120.5d292d168.75d278d217d264d268.5d264d360.5d264d416.25d312.5d472d361d472d440.5d472d478.5d454d512.75d436d547d391d590d347d633d323.5d656.5d313.75d669.75d304d683d300d695.5d297d706d295.5d721d294d736d294d762d294d823.5hR2d543.5R3d472R4d73.5R5d760R6d0R7d686.5R8d168R9d241.5R10i63R11d73.5R12d543.5R13ai1i2i2i2i2i1i2i2i3i3i2i3i3i3i3i3i3i2i3i3i3i3i3i3i2i3i3i3i3i2hg:119oR0d950.5R1ad43d464d135d464d250d901d364.5d464d473d464d588d901d702.5d464d794.5d464d648d1024d539.5d1024d419d565d298d1024d189.5d1024d43d464hR2d837.5R3d794.5R4d43R5d560R6d0R7d517R8d168R9d241.5R10i119R11d43R12d837.5R13ai1i2i2i2i2i2i2i2i2i2i2i2i2i2hg:62oR0d950.5R1ad108.5d520d108.5d429d749.5d661.5d749.5d744.5d108.5d977d108.5d886d623.5d703.5d108.5d520hR2d858R3d749.5R4d108.5R5d595R6d47R7d486.5R8d168R9d241.5R10i62R11d108.5R12d858R13ai1i2i2i2i2i2i2i2hg:118oR0d950.5R1ad30.5d464d128d464d303d934d478d464d575.5d464d365.5d1024d240.5d1024d30.5d464hR2d606R3d575.5R4d30.5R5d560R6d0R7d529.5R8d168R9d241.5R10i118R11d30.5R12d606R13ai1i2i2i2i2i2i2i2hg:61oR0d950.5R1ad108.5d559d749.5d559d749.5d643d108.5d643d108.5d559d108.5d763d749.5d763d749.5d848d108.5d848d108.5d763hR2d858R3d749.5R4d108.5R5d465R6d176R7d356.5R8d168R9d241.5R10i61R11d108.5R12d858R13ai1i2i2i2i2i1i2i2i2i2hg:117oR0d950.5R1ad87d803d87d464d179d464d179d799.5d179d879d210d918.75d241d958.5d303d958.5d377.5d958.5d420.75d911d464d863.5d464d781.5d464d464d556d464d556d1024d464d1024d464d938d430.5d989d386.25d1013.75d342d1038.5d283.5d1038.5d187d1038.5d137d978.5d87d918.5d87d803hR2d649R3d556R4d87R5d560R6d-14.5R7d473R8d168R9d241.5R10i117R11d87R12d649R13ai1i2i2i2i3i3i3i3i2i2i2i2i2i3i3i3i3hg:60oR0d950.5R1ad749.5d520d233.5d703.5d749.5d886d749.5d977d108.5d744.5d108.5d661.5d749.5d429d749.5d520hR2d858R3d749.5R4d108.5R5d595R6d47R7d486.5R8d168R9d241.5R10i60R11d108.5R12d858R13ai1i2i2i2i2i2i2i2hg:116oR0d950.5R1ad187.5d305d187.5d464d377d464d377d535.5d187.5d535.5d187.5d839.5d187.5d908d206.25d927.5d225d947d282.5d947d377d947d377d1024d282.5d1024d176d1024d135.5d984.25d95d944.5d95d839.5d95d535.5d27.5d535.5d27.5d464d95d464d95d305d187.5d305hR2d401.5R3d377R4d27.5R5d719R6d0R7d691.5R8d168R9d241.5R10i116R11d27.5R12d401.5R13ai1i2i2i2i2i2i3i3i2i2i2i3i3i2i2i2i2i2i2hg:59oR0d950.5R1ad120d494.5d225.5d494.5d225.5d621.5d120d621.5d120d494.5d120d897d225.5d897d225.5d983d143.5d1143d79d1143d120d983d120d897hR2d345R3d225.5R4d79R5d529.5R6d-119R7d450.5R8d168R9d241.5R10i59R11d79R12d345R13ai1i2i2i2i2i1i2i2i2i2i2i2hg:115oR0d950.5R1ad453.5d480.5d453.5d567.5d414.5d547.5d372.5d537.5d330.5d527.5d285.5d527.5d217d527.5d182.75d548.5d148.5d569.5d148.5d611.5d148.5d643.5d173d661.75d197.5d680d271.5d696.5d303d703.5d401d724.5d442.25d762.75d483.5d801d483.5d869.5d483.5d947.5d421.75d993d360d1038.5d252d1038.5d207d1038.5d158.25d1029.75d109.5d1021d55.5d1003.5d55.5d908.5d106.5d935d156d948.25d205.5d961.5d254d961.5d319d961.5d354d939.25d389d917d389d876.5d389d839d363.75d819d338.5d799d253d780.5d221d773d135.5d755d97.5d717.75d59.5d680.5d59.5d615.5d59.5d536.5d115.5d493.5d171.5d450.5d274.5d450.5d325.5d450.5d370.5d458d415.5d465.5d453.5d480.5hR2d533.5R3d483.5R4d55.5R5d573.5R6d-14.5R7d518R8d168R9d241.5R10i115R11d55.5R12d533.5R13ai1i2i3i3i3i3i3i3i2i3i3i3i3i3i3i2i3i3i3i3i3i3i2i3i3i3i3i3i3hg:58oR0d950.5R1ad120d897d225.5d897d225.5d1024d120d1024d120d897d120d494.5d225.5d494.5d225.5d621.5d120d621.5d120d494.5hR2d345R3d225.5R4d120R5d529.5R6d0R7d409.5R8d168R9d241.5R10i58R11d120R12d345R13ai1i2i2i2i2i1i2i2i2i2hg:114oR0d950.5R1ad421d550d405.5d541d387.25d536.75d369d532.5d347d532.5d269d532.5d227.25d583.25d185.5d634d185.5d729d185.5d1024d93d1024d93d464d185.5d464d185.5d551d214.5d500d261d475.25d307.5d450.5d374d450.5d383.5d450.5d395d451.75d406.5d453d420.5d455.5d421d550hR2d421R3d421R4d93R5d573.5R6d0R7d480.5R8d168R9d241.5R10i114R11d93R12d421R13ai1i3i3i3i3i2i2i2i2i2i3i3i3i3i2hg:57oR0d950.5R1ad112.5d1008.5d112.5d916.5d150.5d934.5d189.5d944d228.5d953.5d266d953.5d366d953.5d418.75d886.25d471.5d819d479d682d450d725d405.5d748d361d771d307d771d195d771d129.75d703.25d64.5d635.5d64.5d518d64.5d403d132.5d333.5d200.5d264d313.5d264d443d264d511.25d363.25d579.5d462.5d579.5d651.5d579.5d828d495.75d933.25d412d1038.5d270.5d1038.5d232.5d1038.5d193.5d1031d154.5d1023.5d112.5d1008.5d313.5d692d381.5d692d421.25d645.5d461d599d461d518d461d437.5d421.25d390.75d381.5d344d313.5d344d245.5d344d205.75d390.75d166d437.5d166d518d166d599d205.75d645.5d245.5d692d313.5d692hR2d651.5R3d579.5R4d64.5R5d760R6d-14.5R7d695.5R8d168R9d241.5R10i57R11d64.5R12d651.5R13ai1i2i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hg:113oR0d950.5R1ad151.5d744.5d151.5d846d193.25d903.75d235d961.5d308d961.5d381d961.5d423d903.75d465d846d465d744.5d465d643d423d585.25d381d527.5d308d527.5d235d527.5d193.25d585.25d151.5d643d151.5d744.5d465d940d436d990d391.75d1014.25d347.5d1038.5d285.5d1038.5d184d1038.5d120.25d957.5d56.5d876.5d56.5d744.5d56.5d612.5d120.25d531.5d184d450.5d285.5d450.5d347.5d450.5d391.75d474.75d436d499d465d549d465d464d557d464d557d1237d465d1237d465d940hR2d650R3d557R4d56.5R5d573.5R6d-213R7d517R8d168R9d241.5R10i113R11d56.5R12d650R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3i2i2i2i2i2hg:56oR0d950.5R1ad325.5d669.5d253.5d669.5d212.25d708d171d746.5d171d814d171d881.5d212.25d920d253.5d958.5d325.5d958.5d397.5d958.5d439d919.75d480.5d881d480.5d814d480.5d746.5d439.25d708d398d669.5d325.5d669.5d224.5d626.5d159.5d610.5d123.25d566d87d521.5d87d457.5d87d368d150.75d316d214.5d264d325.5d264d437d264d500.5d316d564d368d564d457.5d564d521.5d527.75d566d491.5d610.5d427d626.5d500d643.5d540.75d693d581.5d742.5d581.5d814d581.5d922.5d515.25d980.5d449d1038.5d325.5d1038.5d202d1038.5d135.75d980.5d69.5d922.5d69.5d814d69.5d742.5d110.5d693d151.5d643.5d224.5d626.5d187.5d467d187.5d525d223.75d557.5d260d590d325.5d590d390.5d590d427.25d557.5d464d525d464d467d464d409d427.25d376.5d390.5d344d325.5d344d260d344d223.75d376.5d187.5d409d187.5d467hR2d651.5R3d581.5R4d69.5R5d760R6d-14.5R7d690.5R8d168R9d241.5R10i56R11d69.5R12d651.5R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hg:112oR0d950.5R1ad185.5d940d185.5d1237d93d1237d93d464d185.5d464d185.5d549d214.5d499d258.75d474.75d303d450.5d364.5d450.5d466.5d450.5d530.25d531.5d594d612.5d594d744.5d594d876.5d530.25d957.5d466.5d1038.5d364.5d1038.5d303d1038.5d258.75d1014.25d214.5d990d185.5d940d498.5d744.5d498.5d643d456.75d585.25d415d527.5d342d527.5d269d527.5d227.25d585.25d185.5d643d185.5d744.5d185.5d846d227.25d903.75d269d961.5d342d961.5d415d961.5d456.75d903.75d498.5d846d498.5d744.5hR2d650R3d594R4d93R5d573.5R6d-213R7d480.5R8d168R9d241.5R10i112R11d93R12d650R13ai1i2i2i2i2i2i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hgh";
flash.text.Font.DEFAULT_FONT_SCALE = 9.0;
flash.text.Font.DEFAULT_FONT_NAME = "Bitstream_Vera_Sans";
flash.text.Font.DEFAULT_CLASS_NAME = "flash.text.Font";
flash.text.Font.__registeredFonts = new Array();
flash.text.TextField.mDefaultFont = "Bitstream_Vera_Sans";
flash.text.FontInstance.mSolidFonts = new haxe.ds.StringMap();
flash.text.TextFieldAutoSize.CENTER = "CENTER";
flash.text.TextFieldAutoSize.LEFT = "LEFT";
flash.text.TextFieldAutoSize.NONE = "NONE";
flash.text.TextFieldAutoSize.RIGHT = "RIGHT";
flash.text.TextFieldType.DYNAMIC = "DYNAMIC";
flash.text.TextFieldType.INPUT = "INPUT";
flash.ui.Keyboard.NUMBER_0 = 48;
flash.ui.Keyboard.NUMBER_1 = 49;
flash.ui.Keyboard.NUMBER_2 = 50;
flash.ui.Keyboard.NUMBER_3 = 51;
flash.ui.Keyboard.NUMBER_4 = 52;
flash.ui.Keyboard.NUMBER_5 = 53;
flash.ui.Keyboard.NUMBER_6 = 54;
flash.ui.Keyboard.NUMBER_7 = 55;
flash.ui.Keyboard.NUMBER_8 = 56;
flash.ui.Keyboard.NUMBER_9 = 57;
flash.ui.Keyboard.A = 65;
flash.ui.Keyboard.B = 66;
flash.ui.Keyboard.C = 67;
flash.ui.Keyboard.D = 68;
flash.ui.Keyboard.E = 69;
flash.ui.Keyboard.F = 70;
flash.ui.Keyboard.G = 71;
flash.ui.Keyboard.H = 72;
flash.ui.Keyboard.I = 73;
flash.ui.Keyboard.J = 74;
flash.ui.Keyboard.K = 75;
flash.ui.Keyboard.L = 76;
flash.ui.Keyboard.M = 77;
flash.ui.Keyboard.N = 78;
flash.ui.Keyboard.O = 79;
flash.ui.Keyboard.P = 80;
flash.ui.Keyboard.Q = 81;
flash.ui.Keyboard.R = 82;
flash.ui.Keyboard.S = 83;
flash.ui.Keyboard.T = 84;
flash.ui.Keyboard.U = 85;
flash.ui.Keyboard.V = 86;
flash.ui.Keyboard.W = 87;
flash.ui.Keyboard.X = 88;
flash.ui.Keyboard.Y = 89;
flash.ui.Keyboard.Z = 90;
flash.ui.Keyboard.NUMPAD_0 = 96;
flash.ui.Keyboard.NUMPAD_1 = 97;
flash.ui.Keyboard.NUMPAD_2 = 98;
flash.ui.Keyboard.NUMPAD_3 = 99;
flash.ui.Keyboard.NUMPAD_4 = 100;
flash.ui.Keyboard.NUMPAD_5 = 101;
flash.ui.Keyboard.NUMPAD_6 = 102;
flash.ui.Keyboard.NUMPAD_7 = 103;
flash.ui.Keyboard.NUMPAD_8 = 104;
flash.ui.Keyboard.NUMPAD_9 = 105;
flash.ui.Keyboard.NUMPAD_MULTIPLY = 106;
flash.ui.Keyboard.NUMPAD_ADD = 107;
flash.ui.Keyboard.NUMPAD_ENTER = 108;
flash.ui.Keyboard.NUMPAD_SUBTRACT = 109;
flash.ui.Keyboard.NUMPAD_DECIMAL = 110;
flash.ui.Keyboard.NUMPAD_DIVIDE = 111;
flash.ui.Keyboard.F1 = 112;
flash.ui.Keyboard.F2 = 113;
flash.ui.Keyboard.F3 = 114;
flash.ui.Keyboard.F4 = 115;
flash.ui.Keyboard.F5 = 116;
flash.ui.Keyboard.F6 = 117;
flash.ui.Keyboard.F7 = 118;
flash.ui.Keyboard.F8 = 119;
flash.ui.Keyboard.F9 = 120;
flash.ui.Keyboard.F10 = 121;
flash.ui.Keyboard.F11 = 122;
flash.ui.Keyboard.F12 = 123;
flash.ui.Keyboard.F13 = 124;
flash.ui.Keyboard.F14 = 125;
flash.ui.Keyboard.F15 = 126;
flash.ui.Keyboard.BACKSPACE = 8;
flash.ui.Keyboard.TAB = 9;
flash.ui.Keyboard.ENTER = 13;
flash.ui.Keyboard.SHIFT = 16;
flash.ui.Keyboard.CONTROL = 17;
flash.ui.Keyboard.CAPS_LOCK = 18;
flash.ui.Keyboard.ESCAPE = 27;
flash.ui.Keyboard.SPACE = 32;
flash.ui.Keyboard.PAGE_UP = 33;
flash.ui.Keyboard.PAGE_DOWN = 34;
flash.ui.Keyboard.END = 35;
flash.ui.Keyboard.HOME = 36;
flash.ui.Keyboard.LEFT = 37;
flash.ui.Keyboard.RIGHT = 39;
flash.ui.Keyboard.UP = 38;
flash.ui.Keyboard.DOWN = 40;
flash.ui.Keyboard.INSERT = 45;
flash.ui.Keyboard.DELETE = 46;
flash.ui.Keyboard.NUMLOCK = 144;
flash.ui.Keyboard.BREAK = 19;
flash.ui.Keyboard.SEMICOLON = 186;
flash.ui.Keyboard.EQUAL = 187;
flash.ui.Keyboard.COMMA = 188;
flash.ui.Keyboard.MINUS = 189;
flash.ui.Keyboard.PERIOD = 190;
flash.ui.Keyboard.SLASH = 191;
flash.ui.Keyboard.BACKQUOTE = 192;
flash.ui.Keyboard.LEFTBRACKET = 219;
flash.ui.Keyboard.BACKSLASH = 220;
flash.ui.Keyboard.RIGHTBRACKET = 221;
flash.ui.Keyboard.DOM_VK_CANCEL = 3;
flash.ui.Keyboard.DOM_VK_HELP = 6;
flash.ui.Keyboard.DOM_VK_BACK_SPACE = 8;
flash.ui.Keyboard.DOM_VK_TAB = 9;
flash.ui.Keyboard.DOM_VK_CLEAR = 12;
flash.ui.Keyboard.DOM_VK_RETURN = 13;
flash.ui.Keyboard.DOM_VK_ENTER = 14;
flash.ui.Keyboard.DOM_VK_SHIFT = 16;
flash.ui.Keyboard.DOM_VK_CONTROL = 17;
flash.ui.Keyboard.DOM_VK_ALT = 18;
flash.ui.Keyboard.DOM_VK_PAUSE = 19;
flash.ui.Keyboard.DOM_VK_CAPS_LOCK = 20;
flash.ui.Keyboard.DOM_VK_ESCAPE = 27;
flash.ui.Keyboard.DOM_VK_SPACE = 32;
flash.ui.Keyboard.DOM_VK_PAGE_UP = 33;
flash.ui.Keyboard.DOM_VK_PAGE_DOWN = 34;
flash.ui.Keyboard.DOM_VK_END = 35;
flash.ui.Keyboard.DOM_VK_HOME = 36;
flash.ui.Keyboard.DOM_VK_LEFT = 37;
flash.ui.Keyboard.DOM_VK_UP = 38;
flash.ui.Keyboard.DOM_VK_RIGHT = 39;
flash.ui.Keyboard.DOM_VK_DOWN = 40;
flash.ui.Keyboard.DOM_VK_PRINTSCREEN = 44;
flash.ui.Keyboard.DOM_VK_INSERT = 45;
flash.ui.Keyboard.DOM_VK_DELETE = 46;
flash.ui.Keyboard.DOM_VK_0 = 48;
flash.ui.Keyboard.DOM_VK_1 = 49;
flash.ui.Keyboard.DOM_VK_2 = 50;
flash.ui.Keyboard.DOM_VK_3 = 51;
flash.ui.Keyboard.DOM_VK_4 = 52;
flash.ui.Keyboard.DOM_VK_5 = 53;
flash.ui.Keyboard.DOM_VK_6 = 54;
flash.ui.Keyboard.DOM_VK_7 = 55;
flash.ui.Keyboard.DOM_VK_8 = 56;
flash.ui.Keyboard.DOM_VK_9 = 57;
flash.ui.Keyboard.DOM_VK_SEMICOLON = 59;
flash.ui.Keyboard.DOM_VK_EQUALS = 61;
flash.ui.Keyboard.DOM_VK_A = 65;
flash.ui.Keyboard.DOM_VK_B = 66;
flash.ui.Keyboard.DOM_VK_C = 67;
flash.ui.Keyboard.DOM_VK_D = 68;
flash.ui.Keyboard.DOM_VK_E = 69;
flash.ui.Keyboard.DOM_VK_F = 70;
flash.ui.Keyboard.DOM_VK_G = 71;
flash.ui.Keyboard.DOM_VK_H = 72;
flash.ui.Keyboard.DOM_VK_I = 73;
flash.ui.Keyboard.DOM_VK_J = 74;
flash.ui.Keyboard.DOM_VK_K = 75;
flash.ui.Keyboard.DOM_VK_L = 76;
flash.ui.Keyboard.DOM_VK_M = 77;
flash.ui.Keyboard.DOM_VK_N = 78;
flash.ui.Keyboard.DOM_VK_O = 79;
flash.ui.Keyboard.DOM_VK_P = 80;
flash.ui.Keyboard.DOM_VK_Q = 81;
flash.ui.Keyboard.DOM_VK_R = 82;
flash.ui.Keyboard.DOM_VK_S = 83;
flash.ui.Keyboard.DOM_VK_T = 84;
flash.ui.Keyboard.DOM_VK_U = 85;
flash.ui.Keyboard.DOM_VK_V = 86;
flash.ui.Keyboard.DOM_VK_W = 87;
flash.ui.Keyboard.DOM_VK_X = 88;
flash.ui.Keyboard.DOM_VK_Y = 89;
flash.ui.Keyboard.DOM_VK_Z = 90;
flash.ui.Keyboard.DOM_VK_CONTEXT_MENU = 93;
flash.ui.Keyboard.DOM_VK_NUMPAD0 = 96;
flash.ui.Keyboard.DOM_VK_NUMPAD1 = 97;
flash.ui.Keyboard.DOM_VK_NUMPAD2 = 98;
flash.ui.Keyboard.DOM_VK_NUMPAD3 = 99;
flash.ui.Keyboard.DOM_VK_NUMPAD4 = 100;
flash.ui.Keyboard.DOM_VK_NUMPAD5 = 101;
flash.ui.Keyboard.DOM_VK_NUMPAD6 = 102;
flash.ui.Keyboard.DOM_VK_NUMPAD7 = 103;
flash.ui.Keyboard.DOM_VK_NUMPAD8 = 104;
flash.ui.Keyboard.DOM_VK_NUMPAD9 = 105;
flash.ui.Keyboard.DOM_VK_MULTIPLY = 106;
flash.ui.Keyboard.DOM_VK_ADD = 107;
flash.ui.Keyboard.DOM_VK_SEPARATOR = 108;
flash.ui.Keyboard.DOM_VK_SUBTRACT = 109;
flash.ui.Keyboard.DOM_VK_DECIMAL = 110;
flash.ui.Keyboard.DOM_VK_DIVIDE = 111;
flash.ui.Keyboard.DOM_VK_F1 = 112;
flash.ui.Keyboard.DOM_VK_F2 = 113;
flash.ui.Keyboard.DOM_VK_F3 = 114;
flash.ui.Keyboard.DOM_VK_F4 = 115;
flash.ui.Keyboard.DOM_VK_F5 = 116;
flash.ui.Keyboard.DOM_VK_F6 = 117;
flash.ui.Keyboard.DOM_VK_F7 = 118;
flash.ui.Keyboard.DOM_VK_F8 = 119;
flash.ui.Keyboard.DOM_VK_F9 = 120;
flash.ui.Keyboard.DOM_VK_F10 = 121;
flash.ui.Keyboard.DOM_VK_F11 = 122;
flash.ui.Keyboard.DOM_VK_F12 = 123;
flash.ui.Keyboard.DOM_VK_F13 = 124;
flash.ui.Keyboard.DOM_VK_F14 = 125;
flash.ui.Keyboard.DOM_VK_F15 = 126;
flash.ui.Keyboard.DOM_VK_F16 = 127;
flash.ui.Keyboard.DOM_VK_F17 = 128;
flash.ui.Keyboard.DOM_VK_F18 = 129;
flash.ui.Keyboard.DOM_VK_F19 = 130;
flash.ui.Keyboard.DOM_VK_F20 = 131;
flash.ui.Keyboard.DOM_VK_F21 = 132;
flash.ui.Keyboard.DOM_VK_F22 = 133;
flash.ui.Keyboard.DOM_VK_F23 = 134;
flash.ui.Keyboard.DOM_VK_F24 = 135;
flash.ui.Keyboard.DOM_VK_NUM_LOCK = 144;
flash.ui.Keyboard.DOM_VK_SCROLL_LOCK = 145;
flash.ui.Keyboard.DOM_VK_COMMA = 188;
flash.ui.Keyboard.DOM_VK_PERIOD = 190;
flash.ui.Keyboard.DOM_VK_SLASH = 191;
flash.ui.Keyboard.DOM_VK_BACK_QUOTE = 192;
flash.ui.Keyboard.DOM_VK_OPEN_BRACKET = 219;
flash.ui.Keyboard.DOM_VK_BACK_SLASH = 220;
flash.ui.Keyboard.DOM_VK_CLOSE_BRACKET = 221;
flash.ui.Keyboard.DOM_VK_QUOTE = 222;
flash.ui.Keyboard.DOM_VK_META = 224;
flash.ui.Keyboard.DOM_VK_KANA = 21;
flash.ui.Keyboard.DOM_VK_HANGUL = 21;
flash.ui.Keyboard.DOM_VK_JUNJA = 23;
flash.ui.Keyboard.DOM_VK_FINAL = 24;
flash.ui.Keyboard.DOM_VK_HANJA = 25;
flash.ui.Keyboard.DOM_VK_KANJI = 25;
flash.ui.Keyboard.DOM_VK_CONVERT = 28;
flash.ui.Keyboard.DOM_VK_NONCONVERT = 29;
flash.ui.Keyboard.DOM_VK_ACEPT = 30;
flash.ui.Keyboard.DOM_VK_MODECHANGE = 31;
flash.ui.Keyboard.DOM_VK_SELECT = 41;
flash.ui.Keyboard.DOM_VK_PRINT = 42;
flash.ui.Keyboard.DOM_VK_EXECUTE = 43;
flash.ui.Keyboard.DOM_VK_SLEEP = 95;
flash.utils.Endian.BIG_ENDIAN = "bigEndian";
flash.utils.Endian.LITTLE_ENDIAN = "littleEndian";
flash.utils.Uuid.UID_CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
googleAnalytics.Campaign.TYPE_DIRECT = "direct";
googleAnalytics.Campaign.TYPE_ORGANIC = "organic";
googleAnalytics.Campaign.TYPE_REFERRAL = "referral";
googleAnalytics.Config.ERROR_SEVERITY_SILENCE = 0;
googleAnalytics.Config.ERROR_SEVERITY_TRACE = 1;
googleAnalytics.Config.ERROR_SEVERITY_EXCEPTIONS = 2;
googleAnalytics.CustomVariable.SCOPE_VISITOR = 1;
googleAnalytics.CustomVariable.SCOPE_SESSION = 2;
googleAnalytics.CustomVariable.SCOPE_PAGE = 3;
googleAnalytics.Page.REFERRER_INTERNAL = "0";
googleAnalytics.Tracker.VERSION = "5.2.5";
googleAnalytics.URLParser.parts = ["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];
googleAnalytics.internals.X10.OBJECT_KEY_NUM = 1;
googleAnalytics.internals.X10.TYPE_KEY_NUM = 2;
googleAnalytics.internals.X10.LABEL_KEY_NUM = 3;
googleAnalytics.internals.X10.VALUE_VALUE_NUM = 1;
googleAnalytics.internals.request.Request.TYPE_EVENT = "event";
googleAnalytics.internals.request.Request.TYPE_TRANSACTION = "tran";
googleAnalytics.internals.request.Request.TYPE_ITEM = "item";
googleAnalytics.internals.request.Request.TYPE_SOCIAL = "social";
googleAnalytics.internals.request.Request.TYPE_CUSTOMVARIABLE = "var";
googleAnalytics.internals.request.Request.X10_CUSTOMVAR_NAME_PROJECT_ID = "8";
googleAnalytics.internals.request.Request.X10_CUSTOMVAR_VALUE_PROJECT_ID = "9";
googleAnalytics.internals.request.Request.X10_CUSTOMVAR_SCOPE_PROJECT_ID = "11";
googleAnalytics.internals.request.Request.CAMPAIGN_DELIMITER = "|";
googleAnalytics.internals.request.EventRequest.X10_EVENT_PROJECT_ID = "5";
haxe.Template.splitter = new EReg("(::[A-Za-z0-9_ ()&|!+=/><*.\"-]+::|\\$\\$([A-Za-z0-9_-]+)\\()","");
haxe.Template.expr_splitter = new EReg("(\\(|\\)|[ \r\n\t]*\"[^\"]*\"[ \r\n\t]*|[!+=/><*.&|-]+)","");
haxe.Template.expr_trim = new EReg("^[ ]*([^ ]+)[ ]*$","");
haxe.Template.expr_int = new EReg("^[0-9]+$","");
haxe.Template.expr_float = new EReg("^([+-]?)(?=\\d|,\\d)\\d*(,\\d*)?([Ee]([+-]?\\d+))?$","");
haxe.Template.globals = { };
haxe.Unserializer.DEFAULT_RESOLVER = Type;
haxe.Unserializer.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
haxe.ds.ObjectMap.count = 0;
js.Browser.window = typeof window != "undefined" ? window : null;
js.Browser.document = typeof window != "undefined" ? window.document : null;
openfl.Assets.cache = new openfl.AssetCache();
openfl.Assets.libraries = new haxe.ds.StringMap();
openfl.Assets.initialized = false;
openfl.display.Tilesheet.TILE_SCALE = 1;
openfl.display.Tilesheet.TILE_ROTATION = 2;
openfl.display.Tilesheet.TILE_RGB = 4;
openfl.display.Tilesheet.TILE_ALPHA = 8;
openfl.display.Tilesheet.TILE_TRANS_2x2 = 16;
openfl.display.Tilesheet.TILE_BLEND_NORMAL = 0;
openfl.display.Tilesheet.TILE_BLEND_ADD = 65536;
openfl.display.Tilesheet.TILE_BLEND_MULTIPLY = 131072;
openfl.display.Tilesheet.TILE_BLEND_SCREEN = 262144;
ApplicationMain.main();
})();
