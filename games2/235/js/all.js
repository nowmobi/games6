/**
 * Extends class. Contains a lots of *MAGIC*!
 * Наследует класс.
 * @param {Function} Child Child class. Класс наследник.
 * @param {Function} Parent Parent class. Класс родитель.
 * @returns {void}
 */
 gLevel = null;
 gScore = null;
 musicFlag = null;

function extend(Child, Parent) {
    var F = function() {
    };
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
    Child.super = Parent.prototype;
}

function TrinUtil() {
}

/**
 * Device type constants
 * Константы типа устройства.
 * @type Number
 */
TrinUtil.prototype.DEVICE_PC            = 0;
TrinUtil.prototype.DEVICE_ANDROID       = 1;
TrinUtil.prototype.DEVICE_IOS           = 2;
TrinUtil.prototype.DEVICE_OTHER_MOBILE  = 3;

TrinUtil.prototype.BROWSER_OTHER = 0;
TrinUtil.prototype.BROWSER_SAFARI = 1;
TrinUtil.prototype.BROWSER_CHROME = 2;

/**
 * Just digits array.
 * Просто массив цифр.
 * @type String
 */
TrinUtil.prototype.digits = "0123456789ABCDEF";

/**
 * Global list of loaded json.
 * Глобальный список загруженный JSON файлов.
 * @type Array
 */
TrinUtil.prototype.LOADED_JSON = [];

/**
 * Detects where game is runed.
 * Проверяет где запущена игра.
 * @returns {Boolean} True if game runed on mobile device. Истинно если игра запущена на мобильном устройстве.
 */
TrinUtil.prototype.isOtherMobile = function() {
    if (       navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/BlackBerry/i)
            || navigator.userAgent.match(/Windows Phone/i))
    {
        return true;
    } else {
        return false;
    }
};

/**
 * Check what game is runed on Android device.
 * Проверяет не запущена ли игра на Андроиде.
 * @returns {Boolean} True if game runed on Android device. Истинно, если игра запущена на Андроиде.
 */
TrinUtil.prototype.isAndroid = function(){
    return navigator.userAgent.match(/Android/i);
};


/**
 * Check what game is runed on IDevice (IPad, IPhone etc.).
 * Проверяет не запущена ли игра на айУстройстве (айПод, айФон и т.д.).
 * @returns {Boolean}
 */
TrinUtil.prototype.isIOSDevice = function(){
    return (navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i));
};

/**
 * Converts number to dec format.
 * Конвертирует число в десятичное представление.
 * @param {String} number Number to convert. Число для конвертаций.
 * @param {Integer} base Notation base of number. В какой системе счисления число.
 * @returns {Number} Converted number. Конвертированое число.
 */
TrinUtil.prototype.numberToDec = function(number, base) {
    var dec = 0;
    var p = 1;
    number = number.toUpperCase();
    for (var i = number.length - 1; i >= 0; i--) {
        var c = number[i];
        dec += this.digits.indexOf(c) * p;
        p *= base;
    }
    return dec;
};

/**
 * Converts number in dec to number with other notation base.
 * Конвертирует число из десятичной системы счисления в другую. 
 * @param {Integer} dec Number in dec. Число в десятичной системе счисления.
 * @param {Integer} base New notation base. Новое основание системы счисления.
 * @param {Integer} len Min number length. Минимальная длина числа.
 * @returns {String}
 */
TrinUtil.prototype.decToNumber = function(dec, base, len) {
    if (len === undefined) {
        len = 2;
    }
    var number = "";
    while (dec > 0) {
        number = this.digits[dec % base] + number;
        dec = Math.floor(dec / base);
    }
    while (number.length < len) {
        number = "0" + number;
    }
    return number;
};

/**
 * Returns type of player device.
 * Возвращает тип устройства игрока.
 * @returns {Integer|TrinUtil.DEVICE_PC|TrinUtil.DEVICE_ANDROID|TrinUtil.DEVICE_IOS|TrinUtil.DEVICE_OTHER_MOBILE}
 */
TrinUtil.prototype.getDeviceType = function()   {
    if (this.isAndroid())   {
        return this.DEVICE_ANDROID;
    }   
    else if (this.isIOSDevice())    {
        return this.DEVICE_IOS;
    }   
    else if (this.isOtherMobile())  {
        return this.DEVICE_OTHER_MOBILE;
    }   
    return this.DEVICE_PC;
};

TrinUtil.prototype.isSafari = function(){
	if (TrinUtil.prototype.isChrome())	{
		return false;
	}
    return navigator.userAgent.match(/Safari/i);
};

/**
 * Check what game is runed in Chrome browser.
 * Проверяет не запущена ли игра в Хроме.
 * @returns {Boolean} True if game runed in Chrome browser. Истинно, если игра запущена в Хроме.
 */
TrinUtil.prototype.isChrome = function(){
    return navigator.userAgent.match(/Chrome/i);
};

TrinUtil.prototype.isMacintosh = function(){
    return navigator.userAgent.match(/Macintosh/i);
};

TrinUtil.prototype.getBrowserType = function()   {
    if (this.isChrome())    {
        var navU = navigator.userAgent;

        // Android Mobile
        var isAndroidMobile = navU.indexOf('Android') > -1 && navU.indexOf('Mozilla/5.0') > -1 && navU.indexOf('AppleWebKit') > -1;

        // Apple webkit
        var regExAppleWebKit = new RegExp(/AppleWebKit\/([\d.]+)/);
        var resultAppleWebKitRegEx = regExAppleWebKit.exec(navU);
        var appleWebKitVersion = (resultAppleWebKitRegEx === null ? null : parseFloat(regExAppleWebKit.exec(navU)[1]));

        // Chrome
        var regExChrome = new RegExp(/Chrome\/([\d.]+)/);
        var resultChromeRegEx = regExChrome.exec(navU);
        var chromeVersion = (resultChromeRegEx === null ? null : parseFloat(regExChrome.exec(navU)[1]));

        // Native Android Browser
        var isAndroidBrowser = isAndroidMobile && (appleWebKitVersion !== null && appleWebKitVersion < 537) || (chromeVersion !== null && chromeVersion < 37)
        if (isAndroidBrowser)   {
            return this.BROWSER_OTHER;   
        }
        return this.BROWSER_CHROME;
    }else if (this.isSafari())   {
        return this.BROWSER_SAFARI;
    }     
    return this.BROWSER_OTHER;
};

/**
 * Initialize main HTML elements.
 * Инициализирует базовые HTML элементы.
 * @returns {void}
 */
TrinUtil.prototype.initIndex = function()   {
    var html = document.getElementsByTagName('html')[0];
    var body = document.getElementsByTagName('body')[0];
    html.style.overflow = body.style.overflow = "hidden";
    
    var div = document.createElement("div");
    div.id = "TrinGameContainer";
    div.style.position = "absolute";
    div.style.left = "50%";
    div.style.top = "50%";
    div.style.zIndex = "-1000";
    document.getElementsByTagName('body')[0].appendChild(div);
    
    
    var canvas = document.createElement("Canvas");
    canvas.id = "TrinGameCanvas";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    div.appendChild(canvas);
};

/**
 * Sets HTML background.
 * Устанавливает задний фон на уровне HTML.
 * @param {String|"#RRGGBB"} color Color of background. Цвет заднего фона.
 * @param {String|Url} url URL to background image. Адрес изображения которое следует использовать для заднего фона.
 * @returns {void}
 */
TrinUtil.prototype.setGlobalBackground= function(color, url){
    var body = document.getElementsByTagName("body")[0];
    body.style.backgroundColor = color;
    if (url !== undefined)  {
        body.style.backgroundImage = "url(\""+url+"\")";
    }
};

TrinUtil.prototype.getDistance = function(x1, y1, x2, y2, k)   {
    if (k === undefined)    {
        k = 1;
    }
    var dx=(x1 - x2)*(x1 - x2);
    var dy = (y1 - y2) * k;
    dy *=dy;
    return Math.sqrt(dx+dy);
};

TrinUtil.prototype.stacktrace = function(max) {
  var i = 0;
  if (max === undefined)    {
      max = 20;
  }
  function st2(f) {
      i++;
      if (i > max)  {
          return "";
      }
    return !f ? "" : st2(f.caller) + "\n----\n" + f.toString(); 
        //st2(f.caller).concat([f.toString().split('(')[0].substring(9) + '(' + f.arguments.join(',') + ')']);
  }
  return st2(arguments.callee.caller);
};/**
 * Animation class. Have a link to the image and list of rectangles (frames) from this image.  
 * Класс анимаций. Представляет собой ссылку на изображение и список областей (кадров) из этого изображения.
 * @param {Image} image Animation image (Изображение)
 * @param {String} name Animation name (Имя создаваемой анимации)
 * @returns void
 */
function TrinAnimation(image, name) {
    if (image === undefined) {
        TrinGame.debugger.log("AnimationConstructorImageInvalid");
    }
    if (name === undefined) {
        name = "noname";
    }
    this.image = image;
    this.frames = [];
    this.name = name;
    this.totalFrames = 0;
    this.width = 0;
    this.height = 0;
}

/**
 * Images and animations arrays. 
 * Массивы для изображений и анимаций.
 * @type Array
 */
TrinAnimation.prototype.IMAGES = [];
TrinAnimation.prototype.ANIMATIONS = [];

/**
 * Adds loaded image to array. 
 * Добавляет загруженное изображение в контейнер.
 * @param {Image} image
 * @returns {void}
 */
TrinAnimation.prototype.addImage = function(image) {
    if (this.IMAGES[image.info.name] === undefined) {
        this.IMAGES[image.info.name] = image;
    } else {
        TrinGame.debugger.log("AnimationImageAlreadyExists", [image.info.name]);
    }
};

/**
 * Creates animation from gridded image. 
 * Создает анимацию из изображения разбитого на ячейки.
 * @param {String} imageName Name of image. Название изображения.
 * @param {String} animationName Name for new animation. Название новой анимаций.
 * @param {Integer} frameWidth Frame width (Grid cell width). Ширина кадра (Ширина ячейки).
 * @param {Integer} frameHeight Frame height (Grid cell height). Высота кадра (Высота ячейки)
 * @param {Array of Integer} frames Array of frames numbers. Массив номеров кадров.
 * @returns {void}
 */
TrinAnimation.prototype.makeAnimation = function(imageName, animationName, frameWidth, frameHeight, frames) {
    var image = this.IMAGES[imageName];
    if (image === undefined || image === null) {
        TrinGame.debugger.log("AnimationImageNotLoaded", [imageName]);
        return;
    }
    if (frameWidth === undefined) {
        frameWidth = image.width;
    }
    if (frameHeight === undefined) {
        frameHeight = image.height;
    }
    if (frames === undefined || frames.length === 0) {
        frames = [0];
    }
    var animation = new TrinAnimation(image, animationName);
    var rows = Math.floor(image.height / frameHeight);
    var columns = Math.floor(image.width / frameWidth);
    for (var i = 0; i < frames.length; i++) {
        var frameNum = frames[i];
        var frame = {x: (frameNum % columns) * frameWidth, y: Math.floor(frameNum / columns) * frameHeight, width: frameWidth, height: frameHeight, offset: {x: 0, y: 0}};
        animation.frames.push(frame);
    }
    animation.totalFrames = animation.frames.length;
    this.ANIMATIONS[animationName] = animation;
};

TrinAnimation.prototype.makeAnimationFromAtlas = function(imageName, jsonName) {
    var image = this.IMAGES[imageName];
    if (image === undefined || image === null) {
        TrinGame.debugger.log("AnimationImageNotLoaded", [imageName]);
        return;
    }
    if (jsonName === undefined) {
        jsonName = imageName;
    }
    var json = TrinUtil.prototype.LOADED_JSON[jsonName];
    if (json === undefined || json === null) {
        TrinGame.debugger.log("AnimationJsonNotLoaded", [jsonName]);
        return;
    }
    var atlas = json.atlas;
    var animation;
    var animationJson;
    var frames;
    for(var i = 0; i < atlas.animations.length; i++)    {
        animationJson = atlas.animations[i];
        animation = new TrinAnimation(image, animationJson.name);
        frames = animationJson.frames;
        var offsetMin = {x: 10000, y: 10000};
        var frame;
        for (var j = 0; j < frames.length; j++) {
            frame = frames[j];
            offsetMin.x = Math.min(offsetMin.x, frame.offsetX);
            offsetMin.y = Math.min(offsetMin.y, frame.offsetY);
        }
        for (var j = 0; j < frames.length; j++)   {
            frame = {
                x: frames[j].x,
                y: frames[j].y, 
                width: frames[j].width, 
                height: frames[j].height, 
                offset: {
                    x: frames[j].offsetX - offsetMin.x,
                    y: frames[j].offsetY - offsetMin.y
                }
            };
            animation.frames.push(frame);
        }
        animation.totalFrames = frames.length;
        this.ANIMATIONS[animation.name] = animation;
    }
};

/**
 * Returns animation by name. 
 * Возвращает анимацию по ее имени.
 * @param {String} name Name of animation. Имя анимации.
 * @returns {TrinAnimation}
 */
TrinAnimation.prototype.getAnimation = function(name) {
    if (TrinAnimation.prototype.ANIMATIONS[name] === undefined) {
        TrinGame.debugger.log("AnimationNotCreated", [name]);
        return null;
    }
    return TrinAnimation.prototype.ANIMATIONS[name];
};

/**
 * Destroy and clear instance. 
 * Уничтожает и очищает сущьность.
 * @returns {void}
 */
TrinAnimation.prototype.destroy = function() {
    this.frames = null;
    this.image = null;
};/**
 * Class for loading Images, Sounds (beta) and JSON. 
 * Класс для загрузки изображений, звуков (бета) и файлов JSON. 
 * @param {Function} onComplete Complete callback. Функция выполняема по завершений загрузки.
 * @param {Function} onProgress Progress callback. Функция выполняемая при продвижений загрузки.
 * @returns {TrinAssetLoader}
 */
function TrinAssetLoader(onComplete, onProgress) {
    if (onComplete === undefined) {
        onComplete = null;
    }
    if (onProgress === undefined) {
        onProgress = null;
    }
    this.currentAsset = 0;
    this.assetsToLoad = [];
    this.onComplete = onComplete;
    this.onProgress = onProgress;
    this.caller = null;
    this.partSize = 0;
    this.currentProgress = 0;
}

/**
 * Asset type constants. 
 * Константы типа загружаемого ресурса.
 * @type Number
 */
TrinAssetLoader.prototype.TYPE_IMAGE = 0;
TrinAssetLoader.prototype.TYPE_SOUND = 1;
TrinAssetLoader.prototype.TYPE_JSON = 2;

/**
 * Add image to loading queue. 
 * Добавляет изображение в очередь загруки.
 * @param {String} imageName Name of loaded image. Имя загружаемого изображения.
 * @param {String} imageUrl URL path to image. Путь загружаемого изображения.
 * @param {Boolean} isAnimated
 * @returns {void}
 */
TrinAssetLoader.prototype.addImage = function(imageName, imageUrl, isAnimated) {
    if (isAnimated === undefined) {
        isAnimated = false;
    }
    if (TrinGame.debugger.debug)    {
        imageUrl += "?rnd=" + Math.random();
    }
    this.assetsToLoad.push({
        name: imageName,
        src: imageUrl,
        type: this.TYPE_IMAGE,
        animated: isAnimated
    });
};

/**
 * Add sound to loading queue. 
 * Добавляет звук в очередь загрузки.
 * @param {String} soundName Name of sound. Имя загружаемого изображения.
 * @param {String} soundUrl Url path to sound. Путь к загружаемому звуку.
 * @returns {void}
 */
TrinAssetLoader.prototype.addSound = function(soundName, soundUrl, allowMP3, looped) {
    if (TrinGame.debugger.debug)    {
        soundUrl += "?rnd=" + Math.random();
    }
    if (allowMP3 === undefined) {
        allowMP3 = false;   
    }
	if (looped === undefined)	{
		looped = false;
	}
    this.assetsToLoad.push({
        name: soundName,
        src: soundUrl,
        type: this.TYPE_SOUND,
        allowMP3: allowMP3,
		looped: looped
    });
};

/**
 * Add json toloading queue. 
 * Добавляет файл JSON в очередь загрузки.
 * @param {String} jsonName
 * @param {String} jsonUrl
 * @returns {void}
 */
TrinAssetLoader.prototype.addJson = function(jsonName, jsonUrl) {
    if (TrinGame.debugger.debug)    {
        jsonUrl += "?rnd=" + Math.random();
    }
    this.assetsToLoad.push({
        name: jsonName,
        src: jsonUrl,
        type: this.TYPE_JSON
    });
};

/**
 * Start the assetloading. 
 * Начинает загрузку ресурсов.
 * @returns {void}
 */
TrinAssetLoader.prototype.startLoading = function() {
    this.loadNext();
};

/**
 * Start loading of next asset in queue. 
 * Начинает загрузку следующего ресурса в очереди.
 * @returns {void}
 */
TrinAssetLoader.prototype.loadNext = function() {
    if (this.currentAsset === this.assetsToLoad.length) {
        this.process(1);
        this.loadingEnded();
        return;
    }
    this.currentProgress = this.currentAsset / this.assetsToLoad.length;
    this.process(this.currentProgress);
    var info = this.assetsToLoad[this.currentAsset++];
    switch (info.type) {
        case this.TYPE_IMAGE:
            var xobj = new XMLHttpRequest();
            var ext = info.src.substring(info.src.lastIndexOf(".") + 1, info.src.length);
            if (xobj.overrideMimeType){
                xobj.overrideMimeType("image/" + ext);
            }
            xobj.open('GET', info.src, true);
            xobj.onreadystatechange = function() {
                if (xobj.readyState === 4) {
                    var info = arguments.callee.info;
                    if (xobj.status === 200 || xobj.status === 0)
                    {
                        var obj = new Image();
                        obj.src = info.src;
                        obj.info = info;
                        TrinAnimation.prototype.addImage(obj);
                        if (!info.animated) {
                            TrinAnimation.prototype.makeAnimation(obj.info.name, obj.info.name);
                        }
                        xobj.onreadystatechange = null;
                        arguments.callee.loader.loadNext();
                    }   else    {
                        TrinGame.debugger.log("AssetLoaderFileNotFound", info.src);
                    }
                }
            };
            xobj.onreadystatechange.info = info;
            xobj.onreadystatechange.loader = this;
            xobj.onprogress = function(event) {
                var l = arguments.callee.loader;
                l.process(l.currentProgress + (1 / l.assetsToLoad.length) * (event.loaded/event.total));            
            };
            xobj.onprogress.loader = this;
            xobj.send(null);
            break;
        case this.TYPE_SOUND:
			var sound;
			if (Howl === undefined)	{
				var sound = new Audio();
				var src;
				src = document.createElement("source");
				src.setAttribute("src", info.src + ".aac");
				src.setAttribute("type", "audio/aac");
				sound.appendChild(src);

				src = document.createElement("source");
				src.setAttribute("src", info.src + ".ogg");
				src.setAttribute("type", "audio/ogg");
				sound.appendChild(src);

                src = document.createElement("source");
                src.setAttribute("src", info.src + ".mp3");
                src.setAttribute("type", "audio/mpeg");
                sound.appendChild(src);
                
				sound.info = info;
				sound.loader = this;
				sound.addEventListener("canplaythrough", TrinAssetLoader.prototype.onAudioLoad, false);
				sound.addEventListener("progress", TrinAssetLoader.prototype.onAudioProgress, false);
				sound.addEventListener("error", TrinAssetLoader.prototype.onAudioError, false);
				sound.volume = 0;
				//sound.play();	
				TrinSound.prototype.add(sound);		
				if (TrinGame.device === TrinUtil.prototype.DEVICE_ANDROID && TrinGame.browser === TrinUtil.prototype.BROWSER_CHROME)    {
					this.loadNext();   
				}
			}	else	{
				sound = new Howl({
					urls: [info.src + ".aac", info.src + ".ogg", info.src + ".mp3"],
					autoplay: false,
					loop: info.looped
				});
				sound.info = info;
				sound.load();	
				TrinSound.prototype.add(sound);	
				this.loadNext();   
			}
	        break;
        case this.TYPE_JSON:
            var xobj = new XMLHttpRequest();
            if (xobj.overrideMimeType){
                xobj.overrideMimeType("application/json");
            }
            xobj.open('GET', info.src, true);
            xobj.onreadystatechange = function() {
                if (xobj.readyState === 4) {
                    var info = arguments.callee.info;
                    if (xobj.status === 200 || xobj.status === 0)
                    {
                        var obj = JSON.parse(xobj.responseText);
                        TrinUtil.prototype.LOADED_JSON[info.name] = obj;
                        xobj.onreadystatechange = null;
                        arguments.callee.loader.loadNext();
                    }   else    {
                        TrinGame.debugger.log("AssetLoaderFileNotFound", info.src);
                    }
                }
            };
            xobj.onreadystatechange.loader = this;
            xobj.onreadystatechange.info = info;
            xobj.send(null);
            break;
    }
};

TrinAssetLoader.prototype.onAudioProgress = function(event){var propValue;
    var l = this.loader;
	this.pause();
    if (l === undefined)    {
        return;   
    }
    l.process(l.currentProgress + (1 / l.assetsToLoad.length) * 0.5); 
};

TrinAssetLoader.prototype.onAudioLoad = function(){
    //alert("Loaded: " + this.info.src);
	this.pause();
    this.volume = 1;
	this.removeEventListener("canplaythrough", TrinAssetLoader.prototype.onAudioLoad, false);
	this.removeEventListener("progress",  TrinAssetLoader.prototype.onAudioProgress, false);
    this.removeEventListener("error", TrinAssetLoader.prototype.onAudioError, false);
    if (TrinGame.device !== TrinUtil.prototype.DEVICE_ANDROID || TrinGame.browser !== TrinUtil.prototype.BROWSER_CHROME)    {
	   this.loader.loadNext();
    }
	this.loader = undefined;
};

TrinAssetLoader.prototype.onAudioError = function(e){
    //alert("Failed: " + this.info.src);
	this.removeEventListener("canplaythrough", TrinAssetLoader.prototype.onAudioLoad, false);
	this.removeEventListener("progress",  TrinAssetLoader.prototype.onAudioProgress, false);
    this.removeEventListener("error", TrinAssetLoader.prototype.onAudioError, false);
	this.loader.loadNext();
	this.loader = undefined;
};

/**
 * Loading complete. 
 * Завершение загрузки.
 * @returns {void}
 */
TrinAssetLoader.prototype.loadingEnded = function() {
    this.currentAsset = 0;
    this.assetsToLoad = [];
    if (this.onComplete !== null) {
        this.onComplete();
    }
};

/**
 * Loading process. 
 * Процесс загрузки.
 * @param {Number} percent Percent of loading from 0 to 1. Процент загрузки от 0 до 1.
 * @returns {void}
 */
TrinAssetLoader.prototype.process = function(percent) {
    if (this.onProgress !== null) {
        this.onProgress(percent);
    }
};/**
 * Basic class in Tringine objects hierarchy. 
 * Базовый класс в иерархий объектов Tringine.
 * @returns {void}
 */
function TrinBasic() {
    this.active = true;
    this.exists = true;
    this.visible = true;
    this.parent = null;
    this.alive = true;
}

/**
 * Destroy and cleen the instance. 
 * Уничтожает и очищает сущьность
 * @returns {void}
 */
TrinBasic.prototype.destroy = function() {
};

/**
 * Update the instance. Running every step.
 * Обновляет сущность. Выполняется каждый шаг.
 * @returns {void}
 */
TrinBasic.prototype.update = function() {
};

/**
 * Update the instance. Running every step after update.
 * Обновляет сущность. Выполняется каждый шаг после update.
 * @returns {void}
 */
TrinBasic.prototype.postUpdate = function() {
};

/**
 * Draw the instance. Running every step after postUpdate.
 * Рисует сущьность. Выполняется каждый шаг.
 * @param {TrinCamera} camera Camera instance for drawing. Сущьность камеры на которую рисовать.
 * @returns {void}
 */
TrinBasic.prototype.draw = function(camera) {
};

/**
 * Kills the instance (Not destroy). 
 * Убивает сущьность (Не уничтожает).
 * @returns {void}
 */
TrinBasic.prototype.kill = function() {
    this.exists = false;
    this.alive = false;
};

/**
 * Revive the instance.
 * Воскрещает сущьность. Прям как Ийсус.
 * @returns {void}
 */
TrinBasic.prototype.revive = function() {
    this.exists = true;
    this.alive = true;
};

/**
 * Test instance for hits in position {x,y}
 * Проверка на столкновение в позиций {x, y}.
 * @param {Integer} x X coordinate of hit-test. Х координата для проверки столкновения.
 * @param {Integer} y Y coordinate of hit-test. Y координата для проверки столкновения.
 * @returns {Boolean}
 */
TrinBasic.prototype.hitTest = function(x, y) {
    return false;
};/**
 * Debugger class. (Класс дебагера.)
 * @param {Boolean} debug Debug enabled flag. (Вклюючен ли режим дебага)
 * @param {String} language Default debug messages language. Язык стандартных дебаг сообщений.
 * @returns {void}
 */
function TrinDebugger(debug, language) {
    if (debug === undefined)    {
        debug = false;
    }
    if (language === undefined || this.defaultMessages[language] === undefined) {
        language = "en";
    }
    this.debug = debug;
    this.language = language;
    this.messagesLog = [];
}

/**
 * Default debug messages. Стандартные дебаг сообщения.
 * @type Object
 */
TrinDebugger.prototype.defaultMessages  = {
    "en": {
        AnimationConstructorImageInvalid: "[Error] Parameter \"image\" is undefined or null. [TrinAnimation constructor]",
        AnimationImageAlreadyExists: "[Error] Image with name \"{0}\" already exists. [TrinAnimation addImage]",
        AnimationImageNotLoaded: "[Error] No such image with name \"{0}\". [TrinAnimation makeAnimation]",
        AnimationNotCreated: "[Error] No such animation with name \"{0}\". [TrinAnimation getAnimation]",
        AssetLoaderFileNotFound: "[Error] File \"{0}\" not found. [TrinAssetLoader loadNext]",
        SpriteNoAnimation: "[Error] No such animation with name \"{0}\". [TrinSprite switchAnimation]",
        CameraNoContext: "[Error] You are must set the context for camera. [TrinCamera constructor]",
        AnimationJsonNotLoaded: "[Error] No such JSON with name \"{0}\". [TrinAnimation makeAnimationFromAtlas]"
    }
};

/**
 * Add message to log. (Добавляет сообщение в лог.)
 * @param {String} message Message for adding to log. (Сообщение для добавления в лог.)
 * @param {Array} params Params for default log messages. Параметры для стандартных сообщений лога.
 * @returns {void}
 */
TrinDebugger.prototype.log = function(message, params) {
    if (this.defaultMessages[this.language][message] !== undefined)
    {
        message = this.defaultMessages[this.language][message];
        if (params !== undefined)   {
            for (var i = 0; i < params.length; i++)
            {
                message = message.replace("{" + i + "}", params[i]);
            }
        }
    }
    this.messagesLog[this.messagesLog.length] = message;
    if (this.debug) {
        this.outLog();
    }
};

/**
 * Out log. Выводит лог. 
 * @returns {void}
 */
TrinDebugger.prototype.outLog = function() {
    if (this.debug)
    {
        //Concatinate all messages in one string.
        //Объеденяем все сообщения в одну строку.
        var message = "";
        for (var i = 0; i < this.messagesLog.length; i++)
        {
            message += this.messagesLog[i] + "\n------";
        }
        
        //Out result string. 
        //Выводим результирующую строку.
        if (TrinGame.isMobile) {
            //If page have a #trinLog element - out log into them. Else just alert message.
            //Если на странице есть элемент #trinLog - выводим лог в него. Иначе просто делаем alert.
            var element = document.getElementById("trinLog");
            if (element !== null && element !== undefined) {
                element.innerHTML = message;
            } else {
                alert(message);
            }
        } else {
            console.log(message);
        }
    }
    
    this.clearLog();
};

/**
 * Clears the log. Очищает лог.
 * @returns {void}
 */
TrinDebugger.prototype.clearLog = function() {
    this.messagesLog = [];
};/**
 * Class for objects with size.
 * Класс для сущьностей у которых есть размер.
 * @returns {void}
 */
function TrinEntity() {
    TrinEntity.super.constructor.apply(this);
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
    this.origin = {x: 0, y: 0};
    this.bounds = new TrinRectangle(0, 0, 0, 0);
    this.boundsOffset = {left: 0, top: 0, right: 0, bottom: 0};
    this.scale = {x: 1, y: 1};
    this.alpha = 1;
    this.angle = 0;
    this.shadow = {x: 0, y: 0, blur: 0, color: "#000000"};
}

extend(TrinEntity, TrinBasic);


/**
 * Destroy and cleen the instance. 
 * Уничтожает и очищает сущьность
 * @returns {void}
 */
TrinEntity.prototype.destroy = function() {
    TrinEntity.super.destroy.apply(this);
    this.origin = null;
    this.bounds = null;
    this.boundsOffset = null;
    this.scale = null;
};


/**
 * Update the bounds of instance. Running every step after update. 
 * Обновляет границы сущности. Выполняется каждый шаг после update. 
 * @returns {void}
 */
TrinEntity.prototype.postUpdate = function() {
    TrinEntity.super.postUpdate.apply(this);
    this.updateBounds();
};

/**
 * Test for hits in position {x,y} with instance bounds.
 * Проверка на столкновение в позиций {x, y} с границами сущьности.
 * @param {Integer} x X coordinate of hit-test. Х координата для проверки столкновения.
 * @param {Integer} y Y coordinate of hit-test. Y координата для проверки столкновения.
 * @returns {Boolean}
 */
TrinEntity.prototype.hitTest = function(x, y) {
    return this.bounds.intersects(x, y);
};

/**
 * Updates the instance bounds. 
 * Обновляет границы сущности.
 * @returns {void}
 */
TrinEntity.prototype.updateBounds = function() {
    this.bounds.set(this.x - this.origin.x * this.scale.x + this.boundsOffset.left,
            this.y - this.origin.y * this.scale.y + this.boundsOffset.top,
            (this.width - this.boundsOffset.right - this.boundsOffset.left) * this.scale.x,
            (this.height - this.boundsOffset.bottom - this.boundsOffset.top) * this.scale.y);
};

/**
 * Moves instance on some values. 
 * Двигает сущьность на некоторую величину.
 * @param {Number} x The X value of translation. Смещение по оси Х. 
 * @param {Number} y The Y value of translation. Смещение по оси Y. 
 * @returns {void}
 */
TrinEntity.prototype.move = function(x, y) {
    this.reset(this.x + x, this.y + y);
};

/**
 * Moves instance to absolute position. 
 * Двигает сущьность в определенную точку.
 * @param {Number} x The X value of destination point. Координата точки назначения по оси Х. 
 * @param {Number} y The Y value of destination point. Координата точки назначения по оси Y. 
 * @returns {void}
 */
TrinEntity.prototype.reset = function(x, y) {
    this.x = x;
    this.y = y;
};

TrinEntity.prototype.center = function(axis) {
    if (axis === undefined) {
        axis = "xy";
    }
    if (axis.indexOf("x") > -1) {
        this.origin.x = this.width / 2;
    }
    if (axis.indexOf("y") > -1) {
        this.origin.y = this.height / 2;
    }
};

TrinEntity.prototype.draw = function(camera) {
    TrinEntity.super.draw.apply(this, [camera]);
    var context = camera.context;
    context.restore();
    context.save();
    if (this.angle !== 0) {
        context.translate(this.x - camera.x, this.y - camera.y);
        context.rotate(this.angle);
    }
    context.globalAlpha = this.alpha;

    context.shadowOffsetX = this.shadow.x;
    context.shadowOffsetY = this.shadow.y;
    context.shadowBlur = this.shadow.blur;
    context.shadowColor = this.shadow.color;
};/**
 * Entity draws rectangle.
 * Сущность рисует прямоугольник.
 * @param {Number} x Left side coordinate. Координата левой стороны прямоугольника.
 * @param {Number} y Top side coordinate. Координата верхней стороны прямоугольника.
 * @param {Number} width Width of the rectangle. Ширина прямоугольника.
 * @param {Number} height Height of the rectangle. Высота прямоугольника.
 * @param {String} color Color of the rectangle. Цвет прямоугольника.
 * @param {String} fillColor Color of the rectangle fill. Цвет заливки прямоугольника.
 * @returns {void}
 */
function TrinShapeRectangle(x, y, width, height, color, fillColor) {
    TrinShapeRectangle.super.constructor.apply(this);
    if (x === undefined) {
        x = 0;
    }
    if (y === undefined) {
        y = 0;
    }
    if (width === undefined) {
        width = 10;
    }
    if (height === undefined) {
        height = 10;
    }
    if (color === undefined) {
        color = "#ffffff";
    }
    if (fillColor === undefined) {
        fillColor = null;
    }
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.fillColor = fillColor;
}

extend(TrinShapeRectangle, TrinEntity);

/**
 * Draw the rectangle to camera.
 * Рисует прямоугольник на камеру.
 * @param {TrinCamera} camera
 * @returns {void}
 */
TrinShapeRectangle.prototype.draw = function(camera) {
    TrinShapeRectangle.super.draw.apply(this, [camera]);
    var context = camera.context;
    context.beginPath();
    context.globalAlpha = this.alpha;
    if (this.fillColor !== null) {
        context.strokeStyle = this.color;    
        context.fillStyle = this.fillColor;    
        context.rect(this.x - camera.x, this.y - camera.y, this.width, this.height);
        context.fill();
    } else {
        context.strokeStyle = this.color;
        context.rect(this.x - camera.x, this.y - camera.y, this.width, this.height);
    }
    context.stroke();
};

/**
 * Check intersects with rectangle.
 * Проверяет пересечение с прямоугольником.
 * @param {Number} x X coordinate of other rectangle. Х координата другого прямоугольника.
 * @param {Number} y Y coordinate of other rectangle. У координата другого прямоугольника.
 * @param {Number} w Other rectangle width size... ШирИна другого прямоугольника.
 * @param {Number} h Other rectangle height. Высота другого прямоугольника.
 * @returns {Boolean}
 */
TrinShapeRectangle.prototype.intersects = function(x, y, w, h) {
    var rect = new TrinRectangle(this.x, this.y, this.width, this.height);
    return rect.intersects(x, y, w, h);
};

/**
 * Check intersects with rectangle.
 * Проверяет пересечение с прямоугольником.
 * @param {TrinRectangle} rectangle Other rectangle. Другой прямоугольник.
 * @returns {Boolean}
 */
TrinShapeRectangle.prototype.intersectsRect = function(rectangle)  {
    return rectangle.intersects(this.x, this.y, this.width, this.height);
}; /**
 * This class draws its childs to separated canvas. After draw this canvas on parent canvas. 
 * Use like surface for grouping static elements.
 * Рисует детей на отдельный канвас. Потом рисует этот канвас на родительский.
 * Используется как сурфейс (Сурфейсы добавятся позже) для групировки статичных элементов.
 * @param {Number} width Width of new canvas. Ширина создаваемого канваса.
 * @param {Number} height Height of new canvas. Высота создаваемого канваса.
 * @returns {void}
 */
function TrinGroup(width, height) {
    TrinGroup.super.constructor.apply(this);
    var canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    this.canvas = canvas;
    var context = canvas.getContext("2d");
    
    this.layer = new TrinLayer();
    this.width = width;
    this.height = height;
    this.camera = new TrinCamera(context, 0, 0, width, height);
    this.updateBounds();
    
    this.group = new TrinLayer();
}

extend(TrinGroup, TrinEntity);

TrinGroup.prototype.update = function() {
    this.childrensToGlobal();
    TrinGroup.super.update.apply(this);
    this.group.update();
    this.childrensToLocal();
};

/**
 * Adds instance to group.
 * Добавляет сущьность в группу.
 * @param {TrinBasic} entity Instance to add. Сущность для добавления.
 * @returns {void}
 */
TrinGroup.prototype.add = function(entity) {
    this.group.add(entity);
};

/**
 * Removes instance from group.
 * Убирает сущьность из группы.
 * @param {TrinBasic} entity Instance to remove. Сущность для изъятия.
 * @returns {void}
 */
TrinGroup.prototype.remove = function(entity) {
    this.group.remove(entity);
};

TrinGroup.prototype.makeDraw = function()   {
    this.camera.context.clearRect(0 ,0, this.width, this.height);
    this.group.draw(this.camera);  
};

/**
 * Draw group to camera.
 * Рисует групу.
 * @param {TrinCamera} camera Camera to draw on. Камера для рисования.
 * @returns {void}
 */
TrinGroup.prototype.draw = function(camera) {
    TrinGroup.super.draw.apply(this, [camera]);
    
    var sx = 0;
    var sy = 0;
    var sw = this.width;
    var sh = this.height;
    var dx = this.x - this.origin.x * this.scale.x - camera.x;
    var dy = this.y - this.origin.y * this.scale.y - camera.y;
    var dw = this.width * this.scale.x;
    var dh = this.height * this.scale.y;
    camera.context.drawImage(this.camera.context.canvas, sx, sy, sw, sh, dx, dy, dw, dh);
};

TrinGroup.prototype.childrensToGlobal = function()  {
    var f = function(x, y){
        this.x += x;
        this.y += y;
        this.updateBounds();
    };
    this.group.callAll(f, [this.x -this.origin.x, this.y-this.origin.y]);
};

TrinGroup.prototype.childrensToLocal = function()  {
    var f = function(x, y){
        this.x -= x;
        this.y -= y;
        this.updateBounds();
    };
    this.group.callAll(f, [this.x - this.origin.x, this.y-this.origin.y]);
};/**
 * Class for separating drawing queue.
 * Класс для разделения очереди рисования.
 * @returns {void}
 */
function TrinLayer() {
    TrinLayer.super.constructor.apply(this);
    this.autoReviveChildren = false;
    this.children = null;
    this.numChildren = 0;
    this.sortIndex = "";
    this.sortOrder = this.ASCEDING;
    this.supportLayer = false;
}

extend(TrinLayer, TrinBasic);

/**
 * Sort order constants.
 * Константи порядка сортировки.
 * @type Number
 */
TrinLayer.prototype.ASCEDNING = -1;
TrinLayer.prototype.DESCENDING = 1;

/**
 * Destroy and cleen the instance and it childrens. 
 * Уничтожает и очищает сущьность и её детей.
 * @returns {void}
 */
TrinLayer.prototype.destroy = function() {
    TrinLayer.super.destroy.apply(this);
    if (this.children !== null && !this.supportLayer) {
        var entity;
        var i = 0;
        while (i < this.numChildren) {
            entity = this.children[i++];
            if (entity !== null) {
                entity.destroy();
            }
        }

        this.children = null;
    }
};

/**
 * Kills the instance (Not destroy) and it childrens. 
 * Убивает сущьность (Не уничтожает) и всех её детей.
 * @returns {void}
 */
TrinLayer.prototype.kill = function() {
    TrinLayer.super.kill.apply(this);
    if (this.children !== null && !this.supportLayer) {
        var entity;
        var i = 0;
        while (i < this.numChildren) {
            entity = this.children[i++];
            if (entity !== null && entity.exists) {
                entity.kill();
            }
        }
    }
};

/**
 * Revive the instance and it childrens (if reviveChildren flag is true).
 * Воскрещает сущьность и её детей (Если reviveChildren равно true).
 * @returns {void}
 */
TrinLayer.prototype.revive = function() {
    TrinLayer.super.revive.apply(this);

    if (this.autoReviveChildren && this.children !== null && !this.supportLayer) {
        var entity;
        var i = 0;
        while (i < this.numChildren) {
            entity = this.children[i++];
            if (entity !== null) {
                entity.revive();
            }
        }
    }
};

/**
 * Update instance and all instance childrens.
 * Обновляет сущность и всех её детей.
 * @returns {void}
 */
TrinLayer.prototype.update = function() {
    TrinLayer.super.update.apply(this);
    if (this.children !== null && !this.supportLayer) {
        var entity;
        var i = 0;
        while (i < this.numChildren) {
            entity = this.children[i++];
            if (entity !== null && entity.exists && entity.active) {
                entity.update();
                entity.postUpdate();
            }
        }
    }
};

/**
 * Draw instance and all it childrens.
 * Рисует сущность и всех её детей.
 * @param {TrinCamera} camera
 * @returns {void}
 */
TrinLayer.prototype.draw = function(camera) {
    TrinLayer.super.draw.apply(this, [camera]);
    if (this.children !== null) {
        var entity;
        var i = 0;
        while (i < this.numChildren) {
            entity = this.children[i++];
            if (entity !== null && entity.exists && entity.visible) {
                entity.draw(camera);
            }
        }
    }
};

/**
 * Sort instance childrens.
 * Сортирует детей сущности.
 * @param {String} fieldName Childrens parameter name to sort by. Название параметра по которому сортировать детей.
 * @param {Sort order constant} order Order to sort by. В каком порядке сортировать.
 * @returns {void}
 */
TrinLayer.prototype.sort = function(fieldName, order) {
    if (fieldName === undefined) {
        fieldName = "y";
    }
    if (order === undefined) {
        order = this.DESCENDING;
    }
    if (this.children !== null) {
        this.sortIndex = fieldName;
        this.sortOrder = order;
        this.children.sort(this.sortHandler);
    }
};

/**
 * Sort handler.  
 * Обработчик сортировкию
 * @param {TrinBasic} entity1
 * @param {TrinBasoc} entity2
 * @returns {Number}
 */
TrinLayer.prototype.sortHandler = function(entity1, entity2) {
    var sortIndex = "y";
    var sortOrder = -1;
    if (entity1 === null) {
        return sortOrder;
    } else if (entity2 === null) {
        return -sortOrder;
    }

    if (entity1[sortIndex] < entity2[sortIndex]) {
        return sortOrder;
    } else if (entity1[sortIndex] > entity2[sortIndex]) {
        return -sortOrder;
    }
    return 0;
};

/**
 * Add instance to layer.
 * Добавляет сущность в слой.
 * @param {TrinBasic} entity Entity to add. Сущность для добавления.
 * @returns {void}
 */
TrinLayer.prototype.add = function(entity) {
    if (this.children === null) {
        this.children = [];
    }

    if (this.children.indexOf(entity) > -1) {
        return entity;
    }

    if (entity.parent !== null && !this.supportLayer) {
        entity.parent.remove(entity);
    }

    if (!this.supportLayer) {
        entity.parent = this;
    }

    var i = 0;
    var n = this.children.length;
    while (i < n) {
        if (this.children[i] === null) {
            this.children[i] = entity;
            return entity;
        }
        i++;
    }

    this.children[n] = entity;
    this.numChildren++;
    return entity;
};

/**
 * Removes instance from layer.
 * Убирает сущность из слоя.
 * @param {TrinBasic} entity Entinity to remove. Сущность для изъятия.
 * @param {Boolean} splice Split array or not. Если false - на месте сущности останеся null.
 * @returns {void}
 */
TrinLayer.prototype.remove = function(entity, splice) {
    if (this.children === null) {
        return entity;
    }

    var i = this.children.indexOf(entity);
    if (i < 0 || i >= this.children.length) {
        return entity;
    }

    this.children[i] = null;
    if (!this.supportLayer) {
        entity.parent = null;
    }

    if (splice) {
        this.children.splice(i, 1);
        this.numChildren--;
    }

    return entity;
};

/**
 * Check layer to contain the entity.
 * Проверяет, содержит ли слой сущность.
 * @param {TrinBasic} entity Entity to serach. Сущность для поиска. 
 * @returns {Boolean}
 */
TrinLayer.prototype.contains = function(entity) {
    if (this.children === null) {
        return false;
    }
    return (this.children.indexOf(entity) >= 0) ? true : false;
};

/**
 * Removes first killed instance of class.
 * Возвращает первую убитую сущность класса.
 * @param {Class} _class Class for recycling. Класс для переработки.
 * @returns {TrinBasic}
 */
TrinLayer.prototype.recycle = function(_class) {
    var entity = this.getAvailable(_class);
    if (entity !== null) {
        return entity;
    }

    if (_class === undefined || _class === null) {
        return null;
    }

    entity = new _class();
    return (entity instanceof TrinBasic) ? this.add(entity) : null;
};

TrinLayer.prototype.getAvailable = function(_class) {
    if (this.children === null) {
        return null;
    }
    var entity;
    var i = 0;
    while (i < this.numChildren) {
        entity = this.children[i++];
        if (entity !== null && !entity.exists && ((_class === undefined) || (entity instanceof _class))) {
            return entity;
        }
    }
    return null;
};

/**
 * Replace on entity by other. Returns old entity.
 * Заменяет одну сущность другой. Возвращает заменяемую сущность.
 * @param {TrinBasic} oldEntity Entity to replace. Заменяемая сущность.
 * @param {TrinBasic} newEntity Entity to add. Сущьность которой заменяем.
 * @returns {TrinBasic} Replaceble entity. Заменяемая сущность.
 */
TrinLayer.prototype.replace = function(oldEntity, newEntity) {
    if (this.children === null) {
        return newEntity;
    }

    var i = this.children.indexOf(oldEntity);
    if (i >= 0 && i < this.children.length) {
        if (newEntity.parent !== null && newEntity.parent !== this && !this.supportLayer) {
            newEntity.parent.remove(newEntity);
            newEntity.parent = this;
        }

        this.children[i] = newEntity;
        if (!this.supportLayer) {
            oldEntity.parent = null;
        }
    }

    return oldEntity;
};

/**
 * Swap two entities.
 * Меняет местами две сущности.
 * @param {TrinBasic} entityA First swaping entity. Первая сущность для обмена.
 * @param {TrinBasic} entityB Second swaping entity. Вторая сущность для обмена.
 * @returns {void}
 */
TrinLayer.prototype.swap = function(entityA, entityB) {
    if (this.children === null) {
        return;
    }

    var iA = this.children.indexOf(entityA);
    var iB = this.children.indexOf(entityB);
    if (iA >= 0 && iA < this.children.length && iB >= 0 && iB < this.children.length)
    {
        this.children[iA] = entityB;
        this.children[iB] = entityA;
    }
};

/**
 * Removes all childs from layer.
 * Убирает все сущности из слоя.
 * @param {Boolean} destroy Destroy flag. If true - all childres will be destroyed. Если true - все сущности будут уничтожены.
 * @returns {void}
 */
TrinLayer.prototype.removeAll = function(destroy) {
    if (destroy === undefined) {
        destroy = false;
    }
    if (this.children === null) {
        return;
    }

    var entity;
    var i = 0;
    while (i < this.numChildren) {
        entity = this.children[i++];
        if (entity !== null) {
            if (destroy) {
                entity.destroy();
            }
            if (!this.supportLayer) {
                entity.parent = null;
            }
            this.children[i] = null;
        }
    }

    this.numChildren = 0;
};

/**
 * Returns first alive entity.
 * Возвращает первую живую сущность.
 * @param {Class} _class Class of searching entity. Класс искомой сущности.
 * @returns {TrinBasic} Firt alive entity. Первая живая сущность.
 */
TrinLayer.prototype.getAlive = function(_class) {
    if (this.children === null) {
        return null;
    }

    var entity;
    var i = 0;
    while (i < this.numChildren) {
        entity = this.children[i++];
        if (entity !== null && entity.exists && entity.alive &&
                ((_class === null) || (entity instanceof _class))) {
            return entity;
        }
    }

    return null;
};


/**
 * Returns first killed entity.
 * Возвращает первую убитую сущность.
 * @param {Class} _class Class of searching entity. Класс искомой сущности.
 * @returns {TrinBasic} Firt killed entity. Первая убитая сущность.
 */
TrinLayer.prototype.getDead = function(_class) {
    if (this.children === null) {
        return null;
    }

    var entity;
    var i = 0;
    while (i < this.numChildren) {
        entity = this.children[i++];
        if (entity !== null && !entity.alive &&
                ((_class === null) || (entity instanceof _class))) {
            return entity;
        }
    }

    return null;
};

/**
 * Set field of all childrens to one value.
 * Устанавливает поле всех детей на заданную величину.
 * @param {String} fieldName Name of setted field. Имя определяемого поля.
 * @param {Object} value New value of field. Новое значение поля.
 * @param {Boolean} recurse Call same function for childrens? Вызывать эту функцию для всех детей?
 * @returns {void}
 */
TrinLayer.prototype.setAll = function(fieldName, value, recurse) {
    var entity;
    var i = 0;
    while (i < this.numChildren) {
        entity = this.children[i++];
        if (entity !== null) {
            if (recurse && entity instanceof TrinLayer) {
                entity.setAll(fieldName, value, recurse);
            } else {
                entity[fieldName] = value;
            }
        }
    }
};

/**
 * Call function on all childrens.
 * Вызывает функцию у всех детей.
 * @param {Function} f Function to call. Функция для вызова.
 * @param {Array} args Function arguments. Аргументы функций.
 * @param {Boolean} recurse Call same function on child childrens? Вызывать ли эту функцию у детей? 
 * @returns {void}
 */
TrinLayer.prototype.callAll = function(f, args, recurse) {
    var entity;
    var i = 0;
    while (i < this.numChildren) {
        entity = this.children[i++];
        if (entity !== null) {
            if (recurse && entity instanceof TrinLayer) {
                entity.callAll(f, args, recurse);
            } 
            f.apply(entity, args);
        }
    }
};/**
 * Utility class to handle mouse and touch events.
 * Класс для обработки событий мыши и касаний.
 * @returns {void}
 */
function TrinMouse() {
    this.x = 0;
    this.y = 0;
    this.current = 0;
    this.last = 0;
    this.out = false;
    this.rawX = 0;
    this.rawY = 0;
    this.usePointerOnTouch = false;
    try {
        this.isxdk = (intel !== undefined && intel.xdk.isxdk);
    }catch(e){
        this.isxdk = false;
    }
    this.getMouseXY.mouse = this;
    
    if (TrinGame.isMobile && !this.isxdk) {
        this.onTouchStart.mouse = this;
        this.onTouchEnd.mouse = this;
        TrinGame.canvas.addEventListener('touchmove', this.getMouseXY, false);
        TrinGame.canvas.addEventListener('touchstart', this.onTouchStart, false);
        TrinGame.canvas.addEventListener('touchend', this.onTouchEnd, false);
    } else {
        this.onMouseDown.mouse = this;
        this.onMouseUp.mouse = this;
        TrinGame.canvas.addEventListener('mousedown', this.onMouseDown, false);
        TrinGame.canvas.addEventListener('mouseup', this.onMouseUp, false);
        TrinGame.canvas.addEventListener('mousemove', this.getMouseXY, false);
        TrinGame.canvas.addEventListener('mouseout', this.onMouseUp, false);
    }
}

/**
 * Updates mouse position and state.
 * Обновляет позицию и состояние курсора.
 * @returns {void}
 */
TrinMouse.prototype.update = function() {
    this.x = Math.min(Math.floor(this.rawX), TrinGame.width);
    this.y = Math.min(Math.floor(this.rawY), TrinGame.height);
    if (this.current === -1) {
        this.current = 0;
    } else if (this.current === 2) {
        this.current = 1;
    }
    this.last = this.current;
};

/**
 * Get pointer position relative to canvas left-top position.
 * Получает позицию курсора относительно левого-верхнего угла канваса.
 * @param {MouseEvent} event Mouse event. Событиу мыши. 
 * @returns {Boolean}
 */
TrinMouse.prototype.getMouseXY = function(event) {
	event.preventDefault();
    var mouse = arguments.callee.mouse;
    var mx;
    var my;
    if (TrinGame.device === TrinUtil.prototype.DEVICE_ANDROID && !mouse.isxdk) {
        if (TrinGame.isChrome)  {
            mx = (event.touches[0].pageX - TrinGame.offsetLeft) / TrinGame.scaleFactor;
            my = (event.touches[0].pageY - TrinGame.offsetTop) / TrinGame.scaleFactor;
        }   else    {
            mx = (event.touches[0].pageX + event.layerX) / TrinGame.scaleFactor;
            my = (event.touches[0].pageY + event.layerY) / TrinGame.scaleFactor;            
        }
    } else {
        if (event.offsetX === undefined) {
            mx = event.layerX / TrinGame.scaleFactor;
            my = event.layerY / TrinGame.scaleFactor;
        } else {
            mx = event.offsetX / TrinGame.scaleFactor;
            my = event.offsetY / TrinGame.scaleFactor;
        }
    }
    mouse.rawX = mx;
    mouse.rawY = my; 
    return false;
};

/**
 * Return true if mouse is pressed.
 * Возвращает true если кнопка мыши опущена.
 * @returns {Boolean}
 */
TrinMouse.prototype.isDown = function() {
    return this.current > 0;
};

/**
 * Return true if mouse is pressed on this step.
 * Возвращает true если кнопка мыши опущена в этот шаг.
 * @returns {Boolean}
 */
TrinMouse.prototype.isPressed = function() {
    return this.current === 2;
};


/**
 * Return true if mouse is released on this step.
 * Возвращает true если кнопка мыши отпущена в этот шаг.
 * @returns {Boolean}
 */
TrinMouse.prototype.isReleased = function() {
    return this.current === -1;
};

/**
 * Mouse down handler
 * Обработчик нажатия на кнопку мыши.
 * @returns {void}
 */
TrinMouse.prototype.onMouseDown = function() {
    var mouse = arguments.callee.mouse;
    mouse.current = (mouse.current > 0) ? 1 : 2;
};

/**
 * Mouse up handler
 * Обработчик отпускания кнопки мыши.
 * @returns {void}
 */
TrinMouse.prototype.onMouseUp = function() {
    var mouse = arguments.callee.mouse;
    mouse.current = (mouse.current > 0) ? -1 : 0;
};

/**
 * Touch start handler.
 * Обработчик начала касания.
 * @param {TouchEvent} event Touch event. Событие касания.
 * @returns {Boolean}
 */
TrinMouse.prototype.onTouchStart = function(event) {
    var mouse = arguments.callee.mouse;
    if (TrinGame.device === TrinUtil.prototype.DEVICE_ANDROID) {
        event.preventDefault();
        if (TrinGame.isChrome)  {
            mouse.rawX = mouse.x = (event.changedTouches[0].pageX - TrinGame.offsetLeft) / TrinGame.scaleFactor + TrinGame.camera.x;
            mouse.rawY = mouse.y = (event.changedTouches[0].pageY - TrinGame.offsetTop) / TrinGame.scaleFactor + TrinGame.camera.y;
        }   else    {
            mouse.rawX = mouse.x = (event.changedTouches[0].pageX + event.layerX) / TrinGame.scaleFactor + TrinGame.camera.x;
            mouse.rawY = mouse.y = (event.changedTouches[0].pageY + event.layerY) / TrinGame.scaleFactor + TrinGame.camera.y;         
        }
    } else {
        mouse.rawX = mouse.x = event.layerX / TrinGame.scaleFactor;
        mouse.rawY = mouse.y = event.layerY / TrinGame.scaleFactor;
    }
    mouse.current = (mouse.current > 0) ? 1 : 2;
    return false;
};

/**
 * Touch end handler.
 * Оброботчик окончания каания.
 * @returns {Boolean}
 */
TrinMouse.prototype.onTouchEnd = function() {
    var mouse = arguments.callee.mouse;
    mouse.current = (mouse.current > 0) ? -1 : 0;
    if (!this.usePointerOnTouch)
    {
        mouse.rawX = -999;
        mouse.rawY = -999;
    }
    return false;
};

/**
 * Reset mouse button state.
 * Сбросить состояние нопки мыши.
 * @returns {void}
 */
TrinMouse.prototype.reset = function() {
    this.current = 0;
};/**
 * Just a rectangle entity. Have x, y, width and height. 
 * Просто сущность прямоугольника. Имеет Х, Y, ширину и высоту.
 * @param {Number} x
 * @param {Number} y
 * @param {Number} width
 * @param {Number} height
 * @returns {TrinRectangle}
 */
function	TrinRectangle(x, y, width, height) {
    if (x === undefined)    { x = 0;}
    if (y === undefined)    { y = 0;}
    if (width === undefined)    { width = 0;}
    if (height === undefined)    { height = 0;}
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
}

/**
 * Top side of rectangle.
 * Верхняя сторона прямоугольника.
 * @returns {Number} Y coordinate of top side of the rectangle. Y координата верхней стороны прямоугольника.
 */
TrinRectangle.prototype.top = function() {
    return this.y;
};

/**
 * Left side of rectangle.
 * Левая сторона прямоугольника.
 * @returns {Number} X coordinate of left side of the rectangle. Х координата левой стороны прямоугольника.
 */
TrinRectangle.prototype.left = function() {
    return this.x;
};

/**
 * Bottom side of rectangle.
 * Нижняя сторона прямоугольника.
 * @returns {Number} Y coordinate of bottom side of the rectangle. Y координата нижней стороны прямоугольника.
 */
TrinRectangle.prototype.bottom = function() {
    return this.y + this.height;
};

/**
 * Right side of rectangle.
 * Правая сторона прямоугольника.
 * @returns {Number} X coordinate of right side of the rectangle. Х координата правой стороны прямоугольника.
 */
TrinRectangle.prototype.right = function() {
    return this.x + this.width;
};

/**
 * Set position and size of rectangle.
 * Устанавливает позицию и размер прямоугольника.
 * @param {Number} x New X coordinate of the rectangle. Новая позиция по Х прямоугольника. 
 * @param {Number} y New Y coordinate of the rectangle. Новая позиция по Y прямоугольника.
 * @param {Number} width New width of the rectange. Новая ширина прямоугольника.
 * @param {Number} height New height of the rectangle. Новая высота прямоугольника.
 * @returns {void}
 */
TrinRectangle.prototype.set = function(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
};


/**
 * Check intersects with rectangle.
 * Проверяет пересечение с прямоугольником.
 * @param {Number} x X coordinate of other rectangle. Х координата другого прямоугольника.
 * @param {Number} y Y coordinate of other rectangle. У координата другого прямоугольника.
 * @param {Number} width Other rectangle width size... ШирИна другого прямоугольника.
 * @param {Number} height Other rectangle height. Высота другого прямоугольника.
 * @returns {Boolean}
 */
TrinRectangle.prototype.intersects = function(x, y, width, height) {
    if (width === undefined && height === undefined) {
        return (x > this.left() && x < this.right() && y > this.top() && y < this.bottom());
    }
    var t = y;
    var r = x + width;
    var b = y + height;
    var l = x;

    return (r > this.left() && l < this.right()) && (b > this.top() && t < this.bottom());
};


/**
 * Check intersects with rectangle.
 * Проверяет пересечение с прямоугольником.
 * @param {TrinRectangle} rectangle Other rectangle. Другой прямоугольник.
 * @returns {Boolean}
 */
TrinRectangle.prototype.intersectsRect = function(rectangle) {
    return this.intersects(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
};
function TrinCamera(context, x, y, width, height)   {
    TrinCamera.super.constructor.apply(this, [x, y, width, height]);
    if (context === undefined) {
        TrinGame.debugger.log("CameraNoContext");
    }
    this.context = context;
    this.context.save();
    this.backgroundColor = null;
}

extend(TrinCamera, TrinRectangle);

TrinCamera.prototype.clear = function()    {
    if (this.backgroundColor === null)  {
        this.context.clearRect(0, 0, this.width, this.height);
    }
    else
    {
        this.context.fillStyle = this.backgroundColor;
        this.context.fillRect(0, 0, this.width, this.height);
    }
}/**
 * !!!ATTENTION!!! Sounds is fully alfa-beta version. Best way - don't use this.
 * !!!ВНИМАНИЕ!!! Звуки в полной пре-альфа-бета версий. Лучший путь - не ипользовать их. * 
 * @returns {TrinSound}
 */
function TrinSound() {
}

/**
 * Global sound list.
 * Глобальный список звуков.
 * @type Array
 */
TrinSound.prototype.SOUNDS = [];
TrinSound.prototype.withMusic   = false;
TrinSound.prototype.withSounds  = false;

TrinSound.prototype.mute = false;

/**
 * Adds sound to list after loading.
 * Добавляет звук в список после загрузки.
 * @param {Audio} sound Sound to add. Звук для добавления.
 * @returns {void}
 */
TrinSound.prototype.add = function(sound) {
    this.SOUNDS[sound.info.name] = sound;
    sound.muted = false;
};

TrinSound.prototype.remove = function(sound) {
    this.SOUNDS[sound.info.name] = undefined;
};

/**
 * Returns sound from list by name.
 * Возвращает звук из списка по имени.
 * @param {String} name
 * @returns {Audio}
 */
TrinSound.prototype.get = function(name) {
    if (this.SOUNDS[name] === undefined) {
        return null;
    }
    return this.SOUNDS[name];
};


/**
 * Mutes all sounds.
 * Ставит на паузу все звуки.
 *  @returns {void}
 */
TrinSound.prototype.muteAll = function() {
    var sounds = TrinSound.prototype.SOUNDS;
    for (var key in sounds) {
        if (sounds.hasOwnProperty(key)) {
            var sound = TrinSound.prototype.get(key);
            if (sound !== null)  {
                sound.trinMuted = true;
                sound.muted = true;
                sound.pause();
            }
        }
    }
};

/**
 * Start playing all paused sounds.
 * Воспроизводит все звуки на паузе.
 * @returns {void}
 */
TrinSound.prototype.unMuteAll = function() {
    var sounds = TrinSound.prototype.SOUNDS;
    for (var key in sounds) {
        if (sounds.hasOwnProperty(key)) {
            var sound = TrinSound.prototype.get(key);
            if (sound != null && sound.trinMuted)    {
                sound.trinMuted = false;
                sound.muted = false;
            }
        }
    }
};

TrinSound.prototype.play = function(name, forced) {
    if (this.mute || this.SOUNDS[name] === undefined)   {
        return;
    }
    if (forced === undefined || forced === true)    {
        this.SOUNDS[name].currentTime = 0;
    }
    //this.SOUNDS[name].play();
    if (this.SOUNDS[name].loop) {
        this.SOUNDS[name].ontimeupdate = TrinGame.soundPlayed;   
    }
};

TrinSound.prototype.setVolume = function(name, volume) {
    if (this.mute || this.SOUNDS[name] === undefined)   {
        return;
    }
    this.SOUNDS[name].volume = volume;
};

TrinSound.prototype.setLoop = function(name, loop) {
    if (this.mute || this.SOUNDS[name] === undefined)   {
        return;
    }
    this.SOUNDS[name].loop = loop;
};

TrinSound.prototype.stop = function(name) {
    if (this.SOUNDS[name] !== undefined) {
        this.SOUNDS[name].pause();
        this.SOUNDS[name].currentTime = 0;
    }
};
/**
 * Basic class to display animations.
 * Базовый класс для отображения анимаций.
 * @param {String} animationName Name of first animation. Имя начальной анимаций.
 * @returns {void}
 */
function TrinSprite(animationName) {
    TrinSprite.super.constructor.apply(this);
    this.currentAnimation = null;
    this.currentFrameNumber = 0;
    this.currentFrame = null;
    this.animationProgress = 0;
    this.animationSpeed = 30;
    this.looped = true;
    this.cutArea = {left: 0, top: 0, right: 0, bottom: 0};
    this.repeat = this.REPEAT_NO;
    this.abstract = false;
    this.repeatOrigin = {x: 0, y: 0};
    if (animationName !== undefined) {
        this.switchAnimation(animationName);
    }
}

extend(TrinSprite, TrinEntity);

/**
 * Repeat type constants.
 * Константы типа повторения.
 * @type Number
 */
TrinSprite.prototype.REPEAT_NO = 0;
TrinSprite.prototype.REPEAT_X = 1;
TrinSprite.prototype.REPEAT_Y = 2;

/**
 * Updates animations.
 * Обновляет анимацию.
 * @returns {void}
 */
TrinSprite.prototype.update = function() {
    TrinSprite.super.update.apply(this);
    if (this.currentAnimation !== null) {
        var prevFrame = this.currentFrameNumber;
        this.animationProgress += (this.animationSpeed === 0 ? 0 : 1 / (TrinGame.frameRate / this.animationSpeed));
        if (this.animationProgress >= this.currentAnimation.frames.length) {
            if (this.looped) {
                this.animationProgress -= Math.floor(this.animationProgress);
            } else {
                this.animationProgress = this.currentAnimation.frames.length - 1;
            }
        } else if (this.animationProgress < 0) {
            if (this.looped) {
                this.animationProgress += this.currentAnimation.frames.length;
            } else {
                this.animationProgress = 0;
            }
        }
        this.currentFrameNumber = Math.floor(this.animationProgress);
        if (this.currentFrameNumber !== prevFrame) {
            this.updateSize();
        }
    }
};

/**
 * Drawing instance animation frame to camera.
 * Рисует кадр из анимаций этой сущности на камеру.
 * @param {TrinCamera} camera Camera to draw in. Камера для отрисовки.
 * @returns {void}
 */
TrinSprite.prototype.draw = function(camera) {
    TrinSprite.super.draw.apply(this, [camera]);
    var animation = this.currentAnimation;
    if (animation !== null && this.visible && this.exists && (this.abstract || this.bounds.intersectsRect(camera))) {
        var context = camera.context;

        var frame = animation.frames[Math.floor(this.currentFrameNumber)];
        this.currentFrame = frame;

        var sx = frame.x + this.cutArea.left;
        var sy = frame.y + this.cutArea.top;
        var sw = frame.width - this.cutArea.right - this.cutArea.left;
        var sh = frame.height - this.cutArea.bottom - this.cutArea.top;
        var dx = this.x + this.cutArea.left - this.origin.x * this.scale.x - camera.x + frame.offset.x * this.scale.x;
        var dy = this.y + this.cutArea.top - this.origin.y * this.scale.y - camera.y + frame.offset.y * this.scale.y;
        var dw = sw * this.scale.x;
        var dh = sh * this.scale.y;

        if (this.angle !== 0) {
            dx -= this.x - camera.x;
            dy -= this.y - camera.y;
        }
        else
        {
            if (this.scale.x < 0) {
                context.translate(camera.width, 0);
                context.scale(-1, 1);
                context.translate(0, 0);
                dw = -dw;
                dx = (camera.width / 2 - (this.x - camera.width / 2)) - this.origin.x * this.scale.x - this.cutArea.left + camera.x + frame.offset.x * this.scale.x - dw;
            }
            if (this.scale.y < 0) {
                context.translate(0, camera.height);
                context.scale(1, -1);
                context.translate(0, 0);
                dh = -dh;
                dy = (camera.height / 2 - (this.y - camera.height / 2)) - this.origin.y * this.scale.y - this.cutArea.top + camera.y + frame.offset.y * this.scale.y - dh;
            }
        }
        if (sw > 0 && sh > 0 && dw !== 0 && dh !== 0) {
            switch (this.repeat) {
                case (this.REPEAT_NO):
                    {
                        context.drawImage(animation.image, sx, sy, sw, sh, dx, dy, dw, dh);
                    }
                    break;
                case (this.REPEAT_Y):
                    {
                        this.repeatOrign.y = this.repeatOrign.y % sh;
                        var repeatSize = this.repeatOrign.y * this.scale.y;
                        if (repeatSize > 0) {
                            context.drawImage(animation.image, sx, sy + (sh - this.repeatOrign.y),
                                    sw, this.repeatOrign.y, dx, dy,
                                    dw, repeatSize);
                        }
                        if (dh - repeatSize > 0) {
                            context.drawImage(animation.image, sx, sy,
                                    sw, sh - this.repeatOrign.y,
                                    dx, dy + this.repeatOrign.y,
                                    dw, dh - repeatSize);
                        }
                    }
                    break;
                case (this.REPEAT_X):
                    {
                        this.repeatOrign.y = this.repeatOrign.y % sh;
                        repeatSize = this.repeatOrign.x * this.scale.x;
                        if (repeatSize > 0) {
                            context.drawImage(animation.image, sx + (sw - this.repeatOrign.x), sy,
                                    this.repeatOrign.x, sh, dx, dy,
                                    repeatSize, dh);
                        }
                        if (dw - repeatSize > 0) {
                            context.drawImage(animation.image, sx, sy,
                                    sw - this.repeatOrign.x, sh,
                                    dx + this.repeatOrign.x, dy,
                                    dw - repeatSize, dh);
                        }
                    }
                    break;
            }
        }
    }

    if (TrinGame.debugger.debug) {
        this.drawBounds(camera);
    }
};

/**
 * Draw instance bounds.
 * Рисует границы сущьности.
 * @param {TrinCamera} camera Camera to draw in. Камера для отрисовки.
 * @returns {void}
 */
TrinSprite.prototype.drawBounds = function(camera) {
    var context = camera.context;
    context.restore();
    context.save();
    context.beginPath();
    context.strokeStyle = "#0000FF";
    context.arc(this.bounds.x - camera.x, this.bounds.y - camera.y, 2, 0, 2 * Math.PI, false);
    context.stroke();
    context.beginPath();
    context.strokeStyle = "#000000";
    context.globalAlpha = 1;
    context.rect(this.bounds.x - camera.x, this.bounds.y - camera.y, this.bounds.width, this.bounds.height);
    context.stroke();
    context.beginPath();
    context.strokeStyle = "#FF0000";
    context.arc(this.x - camera.x, this.y - camera.y, 5, 0, 2 * Math.PI, false);
    context.stroke();
};

/**
 * Switching beetwen animations.
 * Переключение между анимациями.
 * @param {String} animationName Name of animation to switch on. Имя анимаций на которую следует переключиться.
 * @returns {void}
 */
TrinSprite.prototype.switchAnimation = function(animationName) {
    var animation = TrinAnimation.prototype.getAnimation(animationName);
    if (animation === undefined || animation === null) {
        TrinGame.debugger.log("SpriteNoAnimation", [animationName]);
        return;
    }
    this.currentAnimation = animation;
    this.currentFrameNumber = this.animationProgress = 0;
    this.updateSize();
};

/**
 * Updates the instance bounds. 
 * Обновляет границы сущности.
 * @returns {void}
 */
TrinSprite.prototype.updateBounds = function() {
    if (this.currentFrame === null || this.currentFrame === undefined || this.currentFrame.offset === undefined) {
        TrinSprite.super.updateBounds.apply(this);
    } else {
        this.bounds.set(this.x - (this.origin.x + this.boundsOffset.left - this.currentFrame.offset.x) * this.scale.x * (this.scale.x > 0 ? 1 : (this.scale.x < 0 ? -1 : 0)),
                        this.y - (this.origin.y + this.boundsOffset.top - this.currentFrame.offset.y) * this.scale.y * (this.scale.y > 0 ? 1 : (this.scale.y < 0 ? -1 : 0)),
                (this.currentFrame.width - this.boundsOffset.right - this.boundsOffset.left - this.currentFrame.offset.x) * Math.abs(this.scale.x),
                (this.currentFrame.height - this.boundsOffset.bottom - this.boundsOffset.top - this.currentFrame.offset.y) * Math.abs(this.scale.y));
    }
};

/**
 * Updates the sprite size. 
 * Обновляет размер сущности.
 * @returns {void}
 */
TrinSprite.prototype.updateSize = function() {
    var frame = this.currentAnimation.frames[Math.floor(this.currentFrameNumber)];
    this.width = frame.width * Math.abs(this.scale.x);
    this.height = frame.height * Math.abs(this.scale.y);
    this.updateBounds();
};

/**
 * Destroy and cleen the instance. 
 * Уничтожает и очищает сущьность
 * @returns {void}
 */
TrinSprite.prototype.destroy = function() {
    TrinSprite.super.destroy.apply(this);
    this.currentAnimation = null;
    this.cutArea = null;
    this.repeatOrigin = null;
};

/**
 * Test frame pixels in position near to point {x, y} for transparency.
 * !!!ATENTION!!! Works only with not transformed sprites.
 * Проверка пикселей кадра близких к позиций {x, y} на прозрачность.
 * !!!ВНИМАНИЕ!!!! Работает только с не трансформироваными спрайтами.
 * @param {Number} x X position of center pixel for test. Позиция центрального пикселя по оси Х.
 * @param {Number} y Y position of center pixel for test. Позиция центрального пикселя по оси Y.
 * @param {Integer} d Rectangle side size for test. Размер стороны квадрата для проверки.   
 * @param {TrinCamera} camera On which camera to test. На какой камере проверять.
 * @returns {Boolean} False if all pixel in rect is transparent. Возвращает False, если все пиксели оказались прозрачными.
 */
TrinSprite.prototype.hitTest = function(x, y, d, camera) {
    TrinSprite.super.hitTest.apply(this);
    var animation = this.currentAnimation;
    if (animation === null) {
        return false;
    }
    if (d === undefined || d < 1) {
        d = 1;
    }
    if (camera === undefined) {
        camera = TrinGame.camera;
    }
    d = Math.floor((d - 1) / 2);
    x -= this.x - camera.x;
    y -= this.y - camera.y;
    var frame = animation.frames[this.currentFrameNumber];

    var l = x - d;
    var r = x + d;
    var t = y - d;
    var b = y + d;

    if (l > this.width || r < 0 || t > this.height || b < 0) {
        return false;
    }

    var image = animation.image;
    var canvas = document.createElement("Canvas");
    canvas.width = frame.width;
    canvas.height = frame.height;
    var context = canvas.getContext("2d");
    context.drawImage(image, frame.x, frame.y, frame.width, frame.height, 0, 0, frame.width, frame.height);
    var imageData;
    var cx = 0;
    var cy = 0;
    try {
        imageData = context.getImageData(0, 0, frame.width, frame.height);
    } catch (e) {
        return true;
    }

    for (var i = -d; i <= d; i++) {
        for (var j = -d; j <= d; j++) {
            cx = x + j;
            cy = y + i;
            if (cx >= 0 && cx < this.width && cy >= 0 && cy < this.height) {
                if (imageData.data[((cy * frame.width + cx) * 4 + 3)] > 0) {
                    return true;
                }
            }
        }
    }
    return false;
};

/**
 * Returns true if animation is ended.
 * Возвращает true, если анимация закончилась.
 * @returns {Boolean}
 */
TrinSprite.prototype.isFinished = function() {
    return this.currentFrameNumber === this.currentAnimation.frames.length - 1;
};

/**
 * Start playeing animation from first frame.
 * Начинает проигрывать анимацию с начала.
 * @returns {void}
 */
TrinSprite.prototype.play = function() {
    this.currentFrameNumber = this.animationProgress = 0;
};/**
 * Button calss.
 * Класс кнопки.
 * @param {String} animationName Name of button animation (1-3 frames). Имя анимаций кнопки (1-3 кадра). 
 * @param {String} text Text to draw on button. Текст для рисования на кнопке.
 * @param {Function} onClick On click callback. Функция выполняемая при клике.
 * @param {type} opensLink Set this flag true if button open link (Prevents pop-up blocking). Открывает ли функция окно (Нужно для предотвращения блокировки как поп-ап окна).
 * @returns {void}
 */
function TrinButton(animationName, text, onClick, opensLink) {
    TrinButton.super.constructor.apply(this);
    if (opensLink === undefined) {
        opensLink = false;
    }
    this.onClick = onClick;
    if (animationName !== null) {
        this.switchAnimation(animationName);
    }
    this.animationSpeed = 0;
    this.opensLink = opensLink;
    this.hovered = false;
    this.label = null;
    this.labelImagePatterns = {basic: "", hovered: ""};
    this.labelColors = {basic: "#E77D50", hovered: "#FF9386"};
    this.drawBack = true;
    this.scaleFactor = {x: 1, y: 1};
    if (this.currentAnimation === null) {
        this.width = 150;
        this.height = 50;
        this.center();
        this.updateBounds();
    }
    if (text !== undefined && text.length > 0)
    {
        this.label = new TrinText(text);
        this.label.setStyle("Arial", 32, true, "#FFFFFF", "center", "middle");
        this.label.reset(this.bounds.x + this.width / 2, this.bounds.y + this.height / 2);
    }
    if (this.opensLink) {
        this.onCanvasClick = function() {
            var button = arguments.callee.button;
            if (button.onClick !== undefined && button.onClick !== null && button.active &&
                    button.bounds.intersects(TrinGame.mouse.x + TrinGame.camera.x, TrinGame.mouse.y + TrinGame.camera.y)) {
                button.onClick.apply(this);
            }
        };
        this.onCanvasClick.button = this;
        var isXdk;
        try {
            isXdk = intel === undefined || !intel.isxdk;
        }catch(e)   {
            isXdk = false;   
        }
        if (TrinGame.isMobile && !isXdk) {
            TrinGame.canvas.addEventListener(this.touchEventName, this.onCanvasClick, false);
        } else {
            TrinGame.canvas.addEventListener(this.clickEventName, this.onCanvasClick, false);
        }
    }
}

extend(TrinButton, TrinSprite);

/**
 * Event types constants.
 * Константы типов событий.
 * @type String
 */
TrinButton.prototype.clickEventName = "click";
TrinButton.prototype.touchEventName = "touchend";
TrinButton.prototype.oneButtonAlreadyHovered = false;

/**
 * Update button state.
 * Обновляет состояние кнопки.
 * @returns {void}
 */
TrinButton.prototype.update = function() {
    TrinButton.super.update.apply(this);
    if (this.active) {
        this.scale.x = this.scale.y = 1;
        if (TrinGame.mouse.isReleased()) {
            //alert(TrinGame.mouse.x, TrinGame.mouse.y); 
        }
        if (!this.oneButtonAlreadyHovered && this.bounds.intersects(TrinGame.mouse.x + TrinGame.camera.x, TrinGame.mouse.y + TrinGame.camera.y)) {
            TrinButton.prototype.oneButtonAlreadyHovered = true;
            this.hovered = true;
            if (this.currentAnimation !== null && this.currentAnimation.frames.length > 1) {
                this.currentFrameNumber = 1;
            }   else {
                this.scale.x = 1.1 * this.scaleFactor.x;
                this.scale.y = 1.1 * this.scaleFactor.y;
            }
            if (TrinGame.mouse.isReleased()) {
                if (this.currentAnimation !== null) {
                    if (this.currentAnimation.frames.length > 2) {
                        this.currentFrameNumber = 2;
                    } else {
                        this.currentFrameNumber = 0;
                    }
                    this.scale.x = 1 * this.scaleFactor.x;
                    this.scale.y = 1 * this.scaleFactor.y;
                }
                if (!this.opensLink && this.onClick !== undefined && this.onClick !== null) {
                    this.onClick.apply(this);
                }
            }
            if (this.label !== null)
            {
                this.label.color = this.labelColors.hovered;
                this.label.patternImage = this.labelImagePatterns.hovered;
            }
        } else {
            this.currentFrameNumber = 0;
            this.hovered = false;
            this.scale.x = 1 * this.scaleFactor.x;
            this.scale.y = 1 * this.scaleFactor.y;
            if (this.label !== null)
            {
                this.label.color = this.labelColors.basic;
                this.label.patternImage = this.labelImagePatterns.basic;
            }
        }
    }
};

/**
 * Destroy and cleen the instance. 
 * Уничтожает и очищает сущьность
 * @returns {void}
 */
TrinButton.prototype.destroy = function() {
    TrinButton.super.destroy.apply(this);
    if (this.opensLink) {
        if (TrinGame.isMobile) {
            TrinGame.canvas.removeEventListener(this.touchEventName, this.onCanvasClick, false);
        } else {
            TrinGame.canvas.removeEventListener(this.clickEventName, this.onCanvasClick, false);
        }
    }
};

/**
 * Draws button and text on it.
 * Рисует кнопку и текст на ней.
 * @param {TrinCamera} camera
 * @returns {void}
 */
TrinButton.prototype.draw = function(camera) {
    TrinButton.super.draw.apply(this, [camera]);
    if (this.currentAnimation === null && this.drawBack) {
        var context = camera.context;
        context.beginPath();
        context.strokeStyle = "#DBB67E";
        context.fillStyle = "#842C2C";
        context.rect(this.bounds.x - camera.x, this.bounds.y - camera.y, this.width, this.height);
        context.fill();
        context.stroke();
    }
    if (this.label !== null) {
        this.label.reset(this.bounds.x + this.width / 2, this.bounds.y + this.height / 2);
        this.label.draw(camera);
    }
    if (TrinGame.debugger.debug) {
        this.drawBounds(camera);
    }
};/**
 * Basic game state entity.
 * Базовая сущность состояния игры.
 * @returns {void}
 */
function TrinState() {
    this.group = new TrinLayer();
}

/**
 * Calls once before first update call. Use it for state initialization.
 * Вызывается один раз перед первым updste. Используйте для инициализаций.
 * @returns {undefined}
 */
TrinState.prototype.create = function() {
};

/**
 * Updates game state main group.
 * Обновляет главную группу состояния.
 * @returns {void}
 */
TrinState.prototype.update = function() {
    this.group.update();
};

/**
 * Draws game state main group.
 * Отрисовывает главную группу состояния.
 * @param {TrinCamera} camera Camera for drawing. Камера на которой рисовать.
 * @returns {void}
 */
TrinState.prototype.draw = function(context) {
    this.group.draw(context);
};

/**
 * Destroys game state main group.
 * Уничтожает главную группу игрового состояния.
 * @returns {void}
 */
TrinState.prototype.destroy = function() {
    this.group.destroy();
};

/**
 * Adds instance to game state main group.
 * Добавляет сущность в главную группу состояния.
 * @param {TrinBasic} entity Instance to add. Сущность для добавления.
 * @returns {void}
 */
TrinState.prototype.add = function(entity) {
    this.group.add(entity);
};

/**
 * Removes instance from game state main group.
 * Извлекает сущность из главной группы игрового состояния.
 * @param {TrinEntity} entity Instance for removing. Сущность для извлечения.
 * @returns {void}
 */
TrinState.prototype.remove = function(entity) {
    this.group.remove(entity);
};

/**
 * Calls when game screen resized.
 * Вызывается при изменений размеров окна.
 * @returns {void}
 */
TrinState.prototype.resized = function() {
};
/**
 * Use it for saves.
 * Используйте этот класс для сохранений.
 * @returns {void}
 */
function TrinStorage() {
}

/**
 * True if you can save something. False if you can't.
 * Показывает, можем ли мы сохранять данные.
 * @type Boolean
 */
TrinStorage.prototype.supportsStorage = false;

/**
 * Checks local storage avaiablity.
 * Проверяет, доступно ли локальное хранилище.
 * @returns {void}
 */
TrinStorage.prototype.init = function()   {
    try {
        TrinStorage.prototype.supportsStorage = 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
        TrinStorage.prototype.supportsStorage = false;
    }
};

/**
 * Save value to storage.
 * Сохранить значение в хранилише.
 * @param {String} name Value key. Ключ для сохранения.
 * @param {String} value Value. Значение.
 * @returns {void}
 */
TrinStorage.prototype.save = function(name, value) {
    if (this.supportsStorage) {
        try {
            localStorage.setItem(name, value);
        } catch (e) {
            this.supportsStorage = false;
        }
    }
};

/**
 * Load value from storage by key.
 * Загружает значение из хранилища по ключу.
 * @param {String} name Value key. Ключ значения.
 * @returns {String}
 */
TrinStorage.prototype.load = function(name) {
    if (this.supportsStorage) {
        try {
            return localStorage.getItem(name);
        } catch (e) {
            this.supportsStorage = false;
        }
    }
    return null;
};

/**
 * Remove value from storage by key.
 * Убрать значение из хранилища по ключу. 
 * @param {String} name Value key. Ключ значения.
 * @returns {void}
 */
TrinStorage.prototype.remove = function(name) {
    if (this.supportsStorage) {
        try {
            localStorage.removeItem(name);
        } catch (e) {
            this.supportsStorage = false;
        }
    }
};

/**
 * Removes all storaged values.
 * Очищает все ранее сохраненые значения.
 * @returns {void}
 */
TrinStorage.prototype.clear = function() {
    if (this.supportsStorage) {
        try {
            localStorage.clear();
        } catch (e) {
            this.supportsStorage = false;
        }
    }
};

/**
 * Length of storaged elements.
 * Количество сохраненных величин.
 * @returns {Number}
 */
TrinStorage.prototype.length = function() {
    if (this.supportsStorage) {
        try {
            return localStorage.length;
        } catch (e) {
            this.supportsStorage = false;
        }
    }
    return 0;
};

/**
 * Get key by position in storage.
 * Получить ключ значения по месту в хранилище. 
 * @param {Integer} index Value index. Номер значения в хранилище.
 * @returns {String}
 */
TrinStorage.prototype.getKey = function(index) {
    if (this.supportsStorage && index >= 0 && index < this.length) {
        try {
            return localStorage.key(key);
        } catch (e) {
            this.supportsStorage = false;
        }
    }
    return null;
};/**
 * Draws text on screen.
 * Рисует текст на экране.
 * @param {String} text Initial text. Начальный текст.
 * @returns {void}
 */
function TrinText(text) {
    TrinText.super.constructor.apply(this);
    if (text !== null && text !== undefined) {
        this.text = "" + text;
    } else {
        this.text = "";
    }
    this.color = "#000000";
    this.font = "Arial";
    this.size = 16;
    this.filled = true;
    this.verticalAlign = "top";
    this.horizontalAlign = "left";
    this.patternImage = "";
    this.bold = false;
}

extend(TrinText, TrinEntity);

/**
 * Global list of fillStyle patterns.
 * Глобальный список паттернов заливки.
 * @type Array
 */
TrinText.prototype.patterns = [];

/**
 * Set drawing style of text.
 * Устанавливает стиль отрисовки текста.
 * @param {String} font Font name. Имя шрифта.
 * @param {Number} size Font size. Размер шрифта.
 * @param {Boolean} bold Font weight. Толщина шрифта.
 * @param {String} color Text color. Цвет текста.
 * @param {String} align Text horizontal align. Горизонтальное позиционирование текста.
 * @param {String} baseLine Text vertical align. Вертикальное позиционирование текста.
 * @returns {void}
 */
TrinText.prototype.setStyle = function(font, size, bold, color, horizontalAlign, verticalAlign) {
    if (font === undefined) {
        font = "Arial";
    }
    if (size === undefined) {
        size = 16;
    }
    if (bold === undefined) {
        bold = false;
    }
    if (color === undefined) {
        color = this.color;
    }
    if (horizontalAlign === undefined) {
        horizontalAlign = this.horizontalAlign;
    }
    if (verticalAlign === undefined) {
        verticalAlign = this.verticalAlign;
    }
    this.font = font;
    this.size = size;
    this.bold = bold;
    this.color = color;
    this.horizontalAlign = horizontalAlign;
    this.verticalAlign = verticalAlign;
};

/**
 * Draws text on camera.
 * Рисует текст на камеру.
 * @param {TrinCamera} camera
 * @returns {void}
 */
TrinText.prototype.draw = function(camera) {
    TrinText.super.draw.apply(this, [camera]);
    var dx = this.x - this.origin.x - camera.x;
    var dy = this.y - this.origin.y - camera.y;

    var context = camera.context;
    var style = "";
    if (this.bold) {
        style += "Bold ";
    }
    style += this.size + "px ";
    style += this.font;

    context.font = style;

    context.textBaseline = this.verticalAlign;
    context.textAlign = this.horizontalAlign;

    if (this.filled) {
        if (this.patternImage === "") {
            context.fillStyle = this.color;
        } else {
            if (this.patterns[this.patternImage] === undefined) {
                this.patterns[this.patternImage] = context.createPattern(TrinAnimation.prototype.IMAGES[this.patternImage], "repeat");
            }
            context.fillStyle = this.patterns[this.patternImage];
        }
        context.fillText(this.text, dx, dy);
    } else {
        context.strokeStyle = this.color;
        context.strokeText(this.text, dx, dy);
    }

    if (TrinGame.debugger.debug) {
        context.beginPath();
        context.strokeStyle = "#00FF00";
        context.arc(this.x - camera.x, this.y - camera.y, 2, 0, 2 * Math.PI, false);
        context.stroke();
    }
};/**
 * Global game variable.
 * @type Tringine
 */
var TrinGame;

/**
 * A main Tringine class.
 * Главный класс Tringine.
 * @param {Number} width
 * @param {Number} height
 * @param {TrinState} initialState
 * @param {Number} frameRate
 * @param {Number} minScreenWidth
 * @param {Number} minScreenHeight
 * @param {Number} api 
 * @returns {void}
 */
function Tringine(width, height, initialState, frameRate, minScreenWidth, minScreenHeight, api) {
    TrinGame = this;

    if (frameRate === undefined) {
        frameRate = 30;
    }
    if (minScreenWidth === undefined) {
        minScreenWidth = 640;
    }
    if (minScreenHeight === undefined) {
        minScreenHeight = 712;
    }
    if (api === undefined) {
        api = this.API_NONE;
    }
    this.width = width;
    this.height = height;
    this.minScreenWidth = minScreenWidth;
    this.minScreenHeight = minScreenHeight;
    this.frameRate = frameRate;

    TrinUtil.prototype.initIndex();

    this.gameContainer = document.getElementById("TrinGameContainer");
    this.canvas = document.getElementById("TrinGameCanvas");
    this.context = this.canvas.getContext("2d");
    this.scaleFactor = 1;
    this.state = null;
    this.device = TrinUtil.prototype.getDeviceType();
    this.browser = TrinUtil.prototype.getBrowserType();
    this.isChrome = TrinUtil.prototype.isChrome();
    this.isMobile = this.device !== TrinUtil.prototype.DEVICE_PC;
    this.mouse = new TrinMouse();
    this.widthToHeight = this.width / this.height;
    this.paused = false;
    this.debugger = new TrinDebugger(false);
    this.camera = new TrinCamera(this.context, 0, 0, this.width, this.height);
    this.api = api;
    this.rotateScreenState = null;
	this.screenRotated = false;
	this.gameState = null;
    this.timesResized = 0;
    this.offsetLeft = 0;
    this.offsetTop = 0;
    this.pauseSounds = null;
    this.unPauseSounds = null;
    this.lastSeen = Date.now();
    this.links = {
        moregames: function() {
            window.open("http://google.com", "_blank");
        },
        logo: function() {
            window.open("http://google.com", "_blank");
        },
        splash: function() {
            window.open("http://google.com", "_blank");
        }
    };
    this.switchState(new initialState());

    //Add resize eventListeners
    window.addEventListener('resize', function() {
        TrinGame.timesResized++;
        var f = function() {
            if (arguments.callee.time !== TrinGame.timesResized) {
                return;
            }
            window.scrollTo(0, 1);
            setTimeout(function() {
                TrinGame.resizeGame();
            }, 10);
        };
        f.time = TrinGame.timesResized;
        setTimeout(f, 10);
    }, false);
    window.addEventListener('orientationchange', function() {
        TrinGame.orientationChanged();
    }, false);

    //Resizing game
    setTimeout(function() {
        window.scrollTo(0, 1);
        setTimeout(function() {
            TrinGame.resizeGame();
        }, 10);
    }, 10);

    switch (this.api) {
        case this.API_NONE:
            this.start();
            break;
        case this.API_SOFTGAMES:
            if (SG_Hooks !== undefined) {
                this.lang = SG.lang; //SG_Hooks.getLanguage(['ru', 'en', 'de', 'es', 'fr', 'it', 'pt', 'tr', 'th' , 'nl', 'pl']);
                SG_Hooks.setOrientationHandler( this.resizeGame );
                SG_Hooks.setResizeHandler( this.resizeGame );
            }
            this.links.moregames = "http://m.softgames.com/";
            this.start();
            break;
    }
    
    /*
     * Enables touch handlers in Chrome.
     * Включает обработку нажатий в хроме
     */
    if (this.device === TrinUtil.prototype.DEVICE_ANDROID)  {
        if (this.isChrome)  {
            window.addEventListener("touchstart", function(e){e.preventDefault();});
        }else{
            document.body.addEventListener("touchstart", function(e){e.preventDefault();});            
        }
    }
    var hidden = "hidden";
    
    var onchange =  function (evt) {
        var v = "visible", h = "hidden",
            evtMap = {
            focus:v, focusin:v, pageshow:v, blur:h, focusout:h, pagehide:h, visibilitychange: h, onblur:h, onfocus:v
            };

        evt = evt || window.event;
        if (evt.type in evtMap) {
            var vis = evtMap[evt.type] === v;
            if (evt.type === "visibilitychange")    {
                vis = !document[hidden];
            }
            if (!vis) {
               if (TrinGame.pauseSounds !== null)   {
                    TrinGame.pauseSounds();   
               }                
            }else{
               if (TrinGame.unPauseSounds !== null)   {
                    TrinGame.unPauseSounds();   
               }                
            }
        }
    }
    
    if (this.device === TrinUtil.prototype.DEVICE_IOS)  {
        window.onblur = onchange;
        window.onfocus = onchange;
    }	else	{
		// Standards:
		if (hidden in document)
			document.addEventListener("visibilitychange", onchange);
		else if ((hidden = "mozHidden") in document)
			document.addEventListener("mozvisibilitychange", onchange);
		else if ((hidden = "webkitHidden") in document)
			document.addEventListener("webkitvisibilitychange", onchange);
		else if ((hidden = "msHidden") in document)
			document.addEventListener("msvisibilitychange", onchange);
		// IE 9 and lower:
		else if ("onfocusin" in document)
			document.onfocusin = document.onfocusout = onchange;
		// All others:
		else
			window.onpageshow = window.onpagehide
				= window.onfocus = window.onblur = onchange;

		// set the initial state (but only if browser supports the Page Visibility API)
		if( document[hidden] !== undefined )
			onchange({type: document[hidden] ? "blur" : "focus"});
	}
}

/**
 * API type constants.
 * Константы типа API.
 * @type Number
 */
Tringine.prototype.API_NONE = 0;
Tringine.prototype.API_SPILGAMES = 1;
Tringine.prototype.API_SOFTGAMES = 2;

Tringine.prototype.update = function() {

    //Switching states
    if (this.nextState === null) {
        this.camera.clear();

        //Update state and draw it on canvas
        this.lastSeen = Date.now();
		if (this.screenRotated)	{
			if (this.rotateScreenState !== null) {
				this.rotateScreenState.update();
				this.rotateScreenState.draw(this.camera);
				this.mouse.update();
			} 
		}	else	if (this.state !== null && !this.paused) {
			TrinButton.prototype.oneButtonAlreadyHovered = false;
			this.state.update();
			this.state.draw(this.camera);
			this.mouse.update();
		} 		
	
    } else {
        if (this.state !== null) {
            this.state.destroy();
        }
        this.mouse.reset();
        this.state = this.nextState;
        this.nextState = null;
        this.state.create();
    }
};

Tringine.prototype.start = function() {
    setInterval(function() {
        TrinGame.update();
    }, 1000 / TrinGame.frameRate);
};

Tringine.prototype.switchState = function(newState) {
    this.nextState = newState;
};

Tringine.prototype.resizeGame = function() {
    //Calculate new size
    var innerWidth = window.innerWidth + 2;
    var innerHeight = window.innerHeight + 2;
    var maxWidthToHeight = this.width / this.minScreenHeight;
    var minWidthToHeight = this.minScreenWidth / this.height;
    var newWidth = innerWidth;
    var newHeight = innerHeight;
    var newWidthToHeight = newWidth / newHeight;
	var portrait = innerHeight > innerWidth;
    if (this.rotateScreenState !== null && this.device !== TrinUtil.prototype.DEVICE_PC) {
		this.screenRotated = portrait;// (window.orientation === 0 || window.orientation === 180);
    }
    if (newWidthToHeight > maxWidthToHeight) {
        newWidth = newHeight * maxWidthToHeight;
    } else if (newWidthToHeight < minWidthToHeight) {
        newHeight = newWidth / minWidthToHeight;
    } else {
        if (newWidthToHeight > this.width / this.height) {
            newWidth = newHeight * newWidthToHeight;
        } else {
            newHeight = newWidth / minWidthToHeight;
        }
    }

    newWidth = Math.min(newWidth, innerWidth);
    newHeight = Math.min(newHeight, innerHeight);
    newWidthToHeight = newWidth / newHeight;

    //Change container size
    this.gameContainer.style.marginLeft = -newWidth / 2 + 'px';
    this.gameContainer.style.marginTop = (-newHeight / 2) + 'px';
    this.gameContainer.style.width = newWidth + "px";
    this.gameContainer.style.height = newHeight + "px";
    
    this.offsetLeft = ((innerWidth - 2) - newWidth) / 2;
    this.offsetTop = ((innerHeight - 2) - newHeight) / 2;
    
    //Calculate visible area.
    var vw = this.width;
    var vh = this.height;
    if (newWidthToHeight < this.width / this.height) {
        vw = this.height * newWidthToHeight;
    } else if (newWidthToHeight > this.width / this.height) {
        vh = this.width / newWidthToHeight;
    }
    this.scaleFactor = newWidth / vw;
    this.camera.width = vw;
    this.camera.height = vh;
    this.camera.x = (this.width - vw) / 2;
    this.camera.y = (this.height - vh) / 2;

    if (Math.abs(this.canvas.width - vw) > 1 || Math.abs(this.canvas.height - vh) > 1) {
        this.canvas.width = vw;
        this.canvas.height = vh;
    }

    if (this.state !== null) {
        this.state.resized();
    }
    window.scrollTo(0, 1);
};

Tringine.prototype.orientationChanged = function() {
    this.resizeGame();
    //window.scrollTo(0, 1);
};

Tringine.prototype.globalPause = function() {
    this.paused = true;
};

Tringine.prototype.globalResume = function() {
    this.paused = false;
};

Tringine.prototype.gameStarted = function(){
    switch (this.api)   {
        case this.API_SOFTGAMES:
            SG_Hooks.start();
            break;
    }
};

Tringine.prototype.levelCompleted = function(level, score){
    gLevel = level;
    gScore = score
    /*
    switch (this.api)   {
        case this.API_SOFTGAMES:
            SG_Hooks.levelUp(level, score);
            break;
    }*/
};

Tringine.prototype.openMoreGamesLink = function()   {
    SG.redirectToPortal();
    //window.open(TrinGame.links.moregames, "_blank");   
}

Tringine.prototype.soundPlayed = function(){
    if(Date.now() - TrinGame.lastSeen > 2000){
        TrinGame.pauseSounds();
    }
};
/*!
 *  howler.js v1.1.26
 *  howlerjs.com
 *
 *  (c) 2013-2015, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */
!function(){var e={},o=null,n=!0,t=!1;try{"undefined"!=typeof AudioContext?o=new AudioContext:"undefined"!=typeof webkitAudioContext?o=new webkitAudioContext:n=!1}catch(r){n=!1}if(!n)if("undefined"!=typeof Audio)try{new Audio}catch(r){t=!0}else t=!0;if(n){var a="undefined"==typeof o.createGain?o.createGainNode():o.createGain();a.gain.value=1,a.connect(o.destination)}var i=function(e){this._volume=1,this._muted=!1,this.usingWebAudio=n,this.ctx=o,this.noAudio=t,this._howls=[],this._codecs=e,this.iOSAutoEnable=!0};i.prototype={volume:function(e){var o=this;if(e=parseFloat(e),e>=0&&1>=e){o._volume=e,n&&(a.gain.value=e);for(var t in o._howls)if(o._howls.hasOwnProperty(t)&&o._howls[t]._webAudio===!1)for(var r=0;r<o._howls[t]._audioNode.length;r++)o._howls[t]._audioNode[r].volume=o._howls[t]._volume*o._volume;return o}return n?a.gain.value:o._volume},mute:function(){return this._setMuted(!0),this},unmute:function(){return this._setMuted(!1),this},_setMuted:function(e){var o=this;o._muted=e,n&&(a.gain.value=e?0:o._volume);for(var t in o._howls)if(o._howls.hasOwnProperty(t)&&o._howls[t]._webAudio===!1)for(var r=0;r<o._howls[t]._audioNode.length;r++)o._howls[t]._audioNode[r].muted=e},codecs:function(e){return this._codecs[e]},_enableiOSAudio:function(){var e=this;if(!o||!e._iOSEnabled&&/iPhone|iPad|iPod/i.test(navigator.userAgent)){e._iOSEnabled=!1;var n=function(){var t=o.createBuffer(1,1,22050),r=o.createBufferSource();r.buffer=t,r.connect(o.destination),"undefined"==typeof r.start?r.noteOn(0):r.start(0),setTimeout(function(){(r.playbackState===r.PLAYING_STATE||r.playbackState===r.FINISHED_STATE)&&(e._iOSEnabled=!0,e.iOSAutoEnable=!1,window.removeEventListener("touchstart",n,!1))},0)};return window.addEventListener("touchstart",n,!1),e}}};var u=null,d={};t||(u=new Audio,d={mp3:!!u.canPlayType("audio/mpeg;").replace(/^no$/,""),opus:!!u.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!u.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!u.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),aac:!!u.canPlayType("audio/aac;").replace(/^no$/,""),m4a:!!(u.canPlayType("audio/x-m4a;")||u.canPlayType("audio/m4a;")||u.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(u.canPlayType("audio/x-mp4;")||u.canPlayType("audio/mp4;")||u.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!u.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")});var l=new i(d),f=function(e){var t=this;t._autoplay=e.autoplay||!1,t._buffer=e.buffer||!1,t._duration=e.duration||0,t._format=e.format||null,t._loop=e.loop||!1,t._loaded=!1,t._sprite=e.sprite||{},t._src=e.src||"",t._pos3d=e.pos3d||[0,0,-.5],t._volume=void 0!==e.volume?e.volume:1,t._urls=e.urls||[],t._rate=e.rate||1,t._model=e.model||null,t._onload=[e.onload||function(){}],t._onloaderror=[e.onloaderror||function(){}],t._onend=[e.onend||function(){}],t._onpause=[e.onpause||function(){}],t._onplay=[e.onplay||function(){}],t._onendTimer=[],t._webAudio=n&&!t._buffer,t._audioNode=[],t._webAudio&&t._setupAudioNode(),"undefined"!=typeof o&&o&&l.iOSAutoEnable&&l._enableiOSAudio(),l._howls.push(t),t.load()};if(f.prototype={load:function(){var e=this,o=null;if(t)return void e.on("loaderror");for(var n=0;n<e._urls.length;n++){var r,a;if(e._format)r=e._format;else{if(a=e._urls[n],r=/^data:audio\/([^;,]+);/i.exec(a),r||(r=/\.([^.]+)$/.exec(a.split("?",1)[0])),!r)return void e.on("loaderror");r=r[1].toLowerCase()}if(d[r]){o=e._urls[n];break}}if(!o)return void e.on("loaderror");if(e._src=o,e._webAudio)_(e,o);else{var u=new Audio;u.addEventListener("error",function(){u.error&&4===u.error.code&&(i.noAudio=!0),e.on("loaderror",{type:u.error?u.error.code:0})},!1),e._audioNode.push(u),u.src=o,u._pos=0,u.preload="auto",u.volume=l._muted?0:e._volume*l.volume();var f=function(){e._duration=Math.ceil(10*u.duration)/10,0===Object.getOwnPropertyNames(e._sprite).length&&(e._sprite={_default:[0,1e3*e._duration]}),e._loaded||(e._loaded=!0,e.on("load")),e._autoplay&&e.play(),u.removeEventListener("canplaythrough",f,!1)};u.addEventListener("canplaythrough",f,!1),u.load()}return e},urls:function(e){var o=this;return e?(o.stop(),o._urls="string"==typeof e?[e]:e,o._loaded=!1,o.load(),o):o._urls},play:function(e,n){var t=this;return"function"==typeof e&&(n=e),e&&"function"!=typeof e||(e="_default"),t._loaded?t._sprite[e]?(t._inactiveNode(function(r){r._sprite=e;var a=r._pos>0?r._pos:t._sprite[e][0]/1e3,i=0;t._webAudio?(i=t._sprite[e][1]/1e3-r._pos,r._pos>0&&(a=t._sprite[e][0]/1e3+a)):i=t._sprite[e][1]/1e3-(a-t._sprite[e][0]/1e3);var u,d=!(!t._loop&&!t._sprite[e][2]),f="string"==typeof n?n:Math.round(Date.now()*Math.random())+"";if(function(){var o={id:f,sprite:e,loop:d};u=setTimeout(function(){!t._webAudio&&d&&t.stop(o.id).play(e,o.id),t._webAudio&&!d&&(t._nodeById(o.id).paused=!0,t._nodeById(o.id)._pos=0,t._clearEndTimer(o.id)),t._webAudio||d||t.stop(o.id),t.on("end",f)},1e3*i),t._onendTimer.push({timer:u,id:o.id})}(),t._webAudio){var _=t._sprite[e][0]/1e3,s=t._sprite[e][1]/1e3;r.id=f,r.paused=!1,p(t,[d,_,s],f),t._playStart=o.currentTime,r.gain.value=t._volume,"undefined"==typeof r.bufferSource.start?d?r.bufferSource.noteGrainOn(0,a,86400):r.bufferSource.noteGrainOn(0,a,i):d?r.bufferSource.start(0,a,86400):r.bufferSource.start(0,a,i)}else{if(4!==r.readyState&&(r.readyState||!navigator.isCocoonJS))return t._clearEndTimer(f),function(){var o=t,a=e,i=n,u=r,d=function(){o.play(a,i),u.removeEventListener("canplaythrough",d,!1)};u.addEventListener("canplaythrough",d,!1)}(),t;r.readyState=4,r.id=f,r.currentTime=a,r.muted=l._muted||r.muted,r.volume=t._volume*l.volume(),setTimeout(function(){r.play()},0)}return t.on("play"),"function"==typeof n&&n(f),t}),t):("function"==typeof n&&n(),t):(t.on("load",function(){t.play(e,n)}),t)},pause:function(e){var o=this;if(!o._loaded)return o.on("play",function(){o.pause(e)}),o;o._clearEndTimer(e);var n=e?o._nodeById(e):o._activeNode();if(n)if(n._pos=o.pos(null,e),o._webAudio){if(!n.bufferSource||n.paused)return o;n.paused=!0,"undefined"==typeof n.bufferSource.stop?n.bufferSource.noteOff(0):n.bufferSource.stop(0)}else n.pause();return o.on("pause"),o},stop:function(e){var o=this;if(!o._loaded)return o.on("play",function(){o.stop(e)}),o;o._clearEndTimer(e);var n=e?o._nodeById(e):o._activeNode();if(n)if(n._pos=0,o._webAudio){if(!n.bufferSource||n.paused)return o;n.paused=!0,"undefined"==typeof n.bufferSource.stop?n.bufferSource.noteOff(0):n.bufferSource.stop(0)}else isNaN(n.duration)||(n.pause(),n.currentTime=0);return o},mute:function(e){var o=this;if(!o._loaded)return o.on("play",function(){o.mute(e)}),o;var n=e?o._nodeById(e):o._activeNode();return n&&(o._webAudio?n.gain.value=0:n.muted=!0),o},unmute:function(e){var o=this;if(!o._loaded)return o.on("play",function(){o.unmute(e)}),o;var n=e?o._nodeById(e):o._activeNode();return n&&(o._webAudio?n.gain.value=o._volume:n.muted=!1),o},volume:function(e,o){var n=this;if(e=parseFloat(e),e>=0&&1>=e){if(n._volume=e,!n._loaded)return n.on("play",function(){n.volume(e,o)}),n;var t=o?n._nodeById(o):n._activeNode();return t&&(n._webAudio?t.gain.value=e:t.volume=e*l.volume()),n}return n._volume},loop:function(e){var o=this;return"boolean"==typeof e?(o._loop=e,o):o._loop},sprite:function(e){var o=this;return"object"==typeof e?(o._sprite=e,o):o._sprite},pos:function(e,n){var t=this;if(!t._loaded)return t.on("load",function(){t.pos(e)}),"number"==typeof e?t:t._pos||0;e=parseFloat(e);var r=n?t._nodeById(n):t._activeNode();if(r)return e>=0?(t.pause(n),r._pos=e,t.play(r._sprite,n),t):t._webAudio?r._pos+(o.currentTime-t._playStart):r.currentTime;if(e>=0)return t;for(var a=0;a<t._audioNode.length;a++)if(t._audioNode[a].paused&&4===t._audioNode[a].readyState)return t._webAudio?t._audioNode[a]._pos:t._audioNode[a].currentTime},pos3d:function(e,o,n,t){var r=this;if(o="undefined"!=typeof o&&o?o:0,n="undefined"!=typeof n&&n?n:-.5,!r._loaded)return r.on("play",function(){r.pos3d(e,o,n,t)}),r;if(!(e>=0||0>e))return r._pos3d;if(r._webAudio){var a=t?r._nodeById(t):r._activeNode();a&&(r._pos3d=[e,o,n],a.panner.setPosition(e,o,n),a.panner.panningModel=r._model||"HRTF")}return r},fade:function(e,o,n,t,r){var a=this,i=Math.abs(e-o),u=e>o?"down":"up",d=i/.01,l=n/d;if(!a._loaded)return a.on("load",function(){a.fade(e,o,n,t,r)}),a;a.volume(e,r);for(var f=1;d>=f;f++)!function(){var e=a._volume+("up"===u?.01:-.01)*f,n=Math.round(1e3*e)/1e3,i=o;setTimeout(function(){a.volume(n,r),n===i&&t&&t()},l*f)}()},fadeIn:function(e,o,n){return this.volume(0).play().fade(0,e,o,n)},fadeOut:function(e,o,n,t){var r=this;return r.fade(r._volume,e,o,function(){n&&n(),r.pause(t),r.on("end")},t)},_nodeById:function(e){for(var o=this,n=o._audioNode[0],t=0;t<o._audioNode.length;t++)if(o._audioNode[t].id===e){n=o._audioNode[t];break}return n},_activeNode:function(){for(var e=this,o=null,n=0;n<e._audioNode.length;n++)if(!e._audioNode[n].paused){o=e._audioNode[n];break}return e._drainPool(),o},_inactiveNode:function(e){for(var o=this,n=null,t=0;t<o._audioNode.length;t++)if(o._audioNode[t].paused&&4===o._audioNode[t].readyState){e(o._audioNode[t]),n=!0;break}if(o._drainPool(),!n){var r;if(o._webAudio)r=o._setupAudioNode(),e(r);else{o.load(),r=o._audioNode[o._audioNode.length-1];var a=navigator.isCocoonJS?"canplaythrough":"loadedmetadata",i=function(){r.removeEventListener(a,i,!1),e(r)};r.addEventListener(a,i,!1)}}},_drainPool:function(){var e,o=this,n=0;for(e=0;e<o._audioNode.length;e++)o._audioNode[e].paused&&n++;for(e=o._audioNode.length-1;e>=0&&!(5>=n);e--)o._audioNode[e].paused&&(o._webAudio&&o._audioNode[e].disconnect(0),n--,o._audioNode.splice(e,1))},_clearEndTimer:function(e){for(var o=this,n=0,t=0;t<o._onendTimer.length;t++)if(o._onendTimer[t].id===e){n=t;break}var r=o._onendTimer[n];r&&(clearTimeout(r.timer),o._onendTimer.splice(n,1))},_setupAudioNode:function(){var e=this,n=e._audioNode,t=e._audioNode.length;return n[t]="undefined"==typeof o.createGain?o.createGainNode():o.createGain(),n[t].gain.value=e._volume,n[t].paused=!0,n[t]._pos=0,n[t].readyState=4,n[t].connect(a),n[t].panner=o.createPanner(),n[t].panner.panningModel=e._model||"equalpower",n[t].panner.setPosition(e._pos3d[0],e._pos3d[1],e._pos3d[2]),n[t].panner.connect(n[t]),n[t]},on:function(e,o){var n=this,t=n["_on"+e];if("function"==typeof o)t.push(o);else for(var r=0;r<t.length;r++)o?t[r].call(n,o):t[r].call(n);return n},off:function(e,o){var n=this,t=n["_on"+e],r=o?o.toString():null;if(r){for(var a=0;a<t.length;a++)if(r===t[a].toString()){t.splice(a,1);break}}else n["_on"+e]=[];return n},unload:function(){for(var o=this,n=o._audioNode,t=0;t<o._audioNode.length;t++)n[t].paused||(o.stop(n[t].id),o.on("end",n[t].id)),o._webAudio?n[t].disconnect(0):n[t].src="";for(t=0;t<o._onendTimer.length;t++)clearTimeout(o._onendTimer[t].timer);var r=l._howls.indexOf(o);null!==r&&r>=0&&l._howls.splice(r,1),delete e[o._src],o=null}},n)var _=function(o,n){if(n in e)return o._duration=e[n].duration,void c(o);if(/^data:[^;]+;base64,/.test(n)){for(var t=atob(n.split(",")[1]),r=new Uint8Array(t.length),a=0;a<t.length;++a)r[a]=t.charCodeAt(a);s(r.buffer,o,n)}else{var i=new XMLHttpRequest;i.open("GET",n,!0),i.responseType="arraybuffer",i.onload=function(){s(i.response,o,n)},i.onerror=function(){o._webAudio&&(o._buffer=!0,o._webAudio=!1,o._audioNode=[],delete o._gainNode,delete e[n],o.load())};try{i.send()}catch(u){i.onerror()}}},s=function(n,t,r){o.decodeAudioData(n,function(o){o&&(e[r]=o,c(t,o))},function(e){t.on("loaderror")})},c=function(e,o){e._duration=o?o.duration:e._duration,0===Object.getOwnPropertyNames(e._sprite).length&&(e._sprite={_default:[0,1e3*e._duration]}),e._loaded||(e._loaded=!0,e.on("load")),e._autoplay&&e.play()},p=function(n,t,r){var a=n._nodeById(r);a.bufferSource=o.createBufferSource(),a.bufferSource.buffer=e[n._src],a.bufferSource.connect(a.panner),a.bufferSource.loop=t[0],t[0]&&(a.bufferSource.loopStart=t[1],a.bufferSource.loopEnd=t[1]+t[2]),a.bufferSource.playbackRate.value=n._rate};"function"==typeof define&&define.amd&&define(function(){return{Howler:l,Howl:f}}),"undefined"!=typeof exports&&(exports.Howler=l,exports.Howl=f),"undefined"!=typeof window&&(window.Howler=l,window.Howl=f)}();function TrinGrid(parameters) {
    TrinGrid.super.constructor.apply(this);
    
    this.cells = [];
    this.rows = 1;
    this.columns = 1;
    this.cellWidth = 100;
    this.cellHeight = 100;
    this.rowsSpacing = 0;
    this.columnsSpacing = 0;
    if (parameters !== undefined) {
        if (parameters.rows) {
            this.rows = parameters.rows;
        }
        if (parameters.columns) {
            this.columns = parameters.columns;
        }
        if (parameters.cellWidth) {
            this.cellWidth = parameters.cellWidth;
        }
        if (parameters.cellHeight) {
            this.cellHeight = parameters.cellHeight;
        }
        if (parameters.rowsSpacing) {
            this.rowsSpacing = parameters.rowsSpacing;
        }
        if (parameters.columnsSpacing) {
            this.columnsSpacing = parameters.columnsSpacing;
        }
    }
    for (var i = 0; i < this.rows; i++) {
        this.cells[i] = [];
        for (var j = 0; j < this.columns; j++) {
            this.cells[i][j] = {
                row: i,
                column: j,
                x: (this.cellWidth + this.columnsSpacing) * j,
                y: (this.cellHeight+ this.rowsSpacing) * i,
                data: {}
            };
        }
    }
    
    this.hoveredCell = null;
}

extend(TrinGrid, TrinEntity);

TrinGrid.prototype.update = function(){
    TrinGrid.super.update.apply(this);
    var mouse = TrinGame.mouse;
    this.hoveredCell = null;
    var cx = Math.floor((mouse.x - this.x + TrinGame.camera.x) / (this.cellWidth + this.columnsSpacing));
    var cy = Math.floor((mouse.y - this.y + TrinGame.camera.y) / (this.cellHeight + this.rowsSpacing));
    if (cy === -1)  {
        cy = 0;   
    }
    if (cx >= 0 && cx < this.columns && cy >= 0 && cy < this.rows)  {
        this.hoveredCell = this.cells[cy][cx];
    }
};  

TrinGrid.prototype.updateBounds = function(){
    this.width = this.columns * this.cellWidth;
    if (this.columns > 1)   {
        this.width += (this.columns - 1) * this.columnsSpacing;
    }
    this.height = this.rows * this.cellHeight;
    if (this.rows > 1)   {
        this.height += (this.rows - 1) * this.rowsSpacing;
    }
    for (var i = 0; i < this.rows; i++) {
        for (var j = 0; j < this.columns; j++)  {
            this.cells[i][j].x = this.x + (this.cellWidth + this.columnsSpacing) * j;
            this.cells[i][j].y = this.y + (this.cellHeight + this.rowsSpacing) * i;
        }
    }
    TrinGrid.super.updateBounds.apply(this);
};

TrinGrid.prototype.draw = function(camera){
    var context = camera.context;
    for (var i = 0; i < this.rows; i++) {
        for (var j = 0; j < this.columns; j++)  {
            context.strokeRect(this.x + j * (this.cellWidth + this.columnsSpacing) - camera.x, this.y + i * (this.cellHeight+ this.rowsSpacing) - camera.y, this.cellWidth, this.cellHeight);
        }
    }            
};

TrinGrid.prototype.callAll = function(f) {
    var cell;
    for (var i = 0; i < this.rows; i++) {
        for (var j = 0; j < this.columns; j++) {
            cell = this.cells[i][j];
            f.apply(cell);
        }
    }
};function RotateScreenState()    {
    RotateScreenState.super.constructor.apply(this);
}

extend(RotateScreenState, TrinState);

RotateScreenState.prototype.create = function(){
    RotateScreenState.super.create.apply(this);
    
    var s = new TrinSprite("button_rotare");
    s.center();
    s.reset(480, 320);
    
    this.add(s);
};function GameGrid() {
    GameGrid.super.constructor.apply(this, [{
        rows: 6,
        columns: 8,
        cellWidth: 84,
        cellHeight: 68
    }]);
    this.updateBounds();
    this.x = (960 - this.width) / 2; 
    this.y = 144; 
    this.updateBounds();
    this.callAll(function(){
        this.data.objects = new CellLayerStorage();
    });
    GameGrid.prototype.instance = this;
}

extend(GameGrid, TrinGrid);

GameGrid.prototype.instance = null;

GameGrid.prototype.draw = function(camera)  {
    var objectToDraw = null;
    var layer = 0;
    for (var i = 0; i < this.rows; i++) {
        for (var j = 0; j < this.columns; j++)  {
            layer = 0;
            while (true)    {
                objectToDraw = this.cells[i][j].data.objects.getObjectOnLayer(layer);
                layer++;
                if (objectToDraw === null)  {
                    break;
                }
                objectToDraw.draw(camera, this.cells[i][j], layer);
            }
        }
    }
    for (var i = 0; i < this.rows; i++) {
        for (var j = 0; j < this.columns; j++)  {
            layer = 0;
            while (true)    {
                objectToDraw = this.cells[i][j].data.objects.getObjectOnLayer(layer);
                layer++;
                if (objectToDraw === null)  {
                    break;
                }
                objectToDraw.postDraw(camera, this.cells[i][j], layer);
            }
        }
    }
    if (TrinGame.debugger.debug)    {
        var context = camera.context;
        context.strokeStyle = "#000000";
        for (var i = 0; i < this.rows; i++) {
            for (var j = 0; j < this.columns; j++)  {
                context.strokeRect(this.x + j * (this.cellWidth + this.columnsSpacing) - camera.x, this.y + i * (this.cellHeight+ this.rowsSpacing) - camera.y, this.cellWidth, this.cellHeight);
            }
        }   
    }
};

GameGrid.prototype.addObject = function(x, y, object){
    this.cells[y][x].data.objects.add(object);
};

GameGrid.prototype.removeObject = function(x, y){
    this.cells[y][x].data.objects.remove();
};

GameGrid.prototype.upObject = function(x, y, object){
    this.cells[y][x].data.objects.upObject(object);
};

GameGrid.prototype.downObject = function(x, y, object){
    this.cells[y][x].data.objects.downObject(object);
};

GameGrid.prototype.getObjectOnTop = function(x, y){
    return this.cells[y][x].data.objects.getObjectOnTop();
};

GameGrid.prototype.getLayerToDrawOnTop = function(caller, x, y){
    return this.cells[y][x].data.objects.getLayerToDrawOnTop(caller, x, y);
};

GameGrid.prototype.canRollIn = function(caller, from, x, y)   {
    return this.cells[y][x].data.objects.canRollIn(caller, from, x, y);
};

GameGrid.prototype.canRollOver = function(caller, from, x, y)   {
    return this.cells[y][x].data.objects.canRollOver(caller, from, x, y);
};

GameGrid.prototype.canRollOut = function(caller, from, x, y)   {
    return this.cells[y][x].data.objects.canRollOut(caller, from, x, y);
};

GameGrid.prototype.canRollCarpetSide = function(caller, from, x, y)   {
    return this.cells[y][x].data.objects.canRollCarpetSide(caller, from, x, y);
};

GameGrid.prototype.activate = function(x, y)   {
    return this.cells[y][x].data.objects.activate();
};

GameGrid.prototype.disable = function(x, y)   {
    return this.cells[y][x].data.objects.disable();
};function PreloaderState() {
    PreloaderState.super.constructor.apply(this);
    this.loaderBar = null;
    this.loaderLine = null;

    this.state = this.stateLoading;
    this.playButton = null;
    this.timer = 0;
    this.askPanel = null;
    this.moreGamesButton = null;
}

extend(PreloaderState, TrinState);

PreloaderState.prototype.stateLoading = 0;
PreloaderState.prototype.stateShowPlayButton = 1;
PreloaderState.prototype.stateWaitPlay = 2;

PreloaderState.prototype.create = function() {
    PreloaderState.super.create.apply(this);

    TrinUtil.prototype.setGlobalBackground("#0D090A");
    TrinGame.camera.backgroundColor = "#0D090A";

    this.loadingProgress.state = this;

    var loader = new TrinAssetLoader(this.loadingComplete, function() {
    });
    loader.addImage("PreloaderAtlas", "img/texture1.png", true);
    loader.addJson("Translations", "js/translations.json");
    loader.addJson("PreloaderAtlas", "img/texture1.json");

    loader.startLoading();
    
    this.debugText = new TrinText("");
    this.debugText.reset(16, 16);
    this.debugText.setStyle("Arial", 16, true, "#000", "left", "top");
};

PreloaderState.prototype.update = function() {
    PreloaderState.super.update.apply(this);
    switch (this.state) {
        case this.stateShowPlayButton:
            this.timer++;
            if (this.timer <= 30) {
                this.playButton.scale.x = this.playButton.scale.y = this.timer / 20;
            } else if (this.timer <= 40) {
                this.playButton.scale.x = this.playButton.scale.y = (20 + (40 - this.timer)) / 20;
            }
            if (this.timer >= 40) {
                this.timer = 0;
                this.state = this.stateWaitPlay;
                this.playButton.active = true;
            }
            break;
    }
};

PreloaderState.prototype.loadingComplete = function() {
    TrinAnimation.prototype.makeAnimationFromAtlas("PreloaderAtlas");
    
    TrinGame.rotateScreenState = new RotateScreenState();  
    TrinGame.rotateScreenState.create();  

    var s = new TrinSprite("bcg_mainmenu");
    s.x = -1;
    s.y = -1;
    TrinGame.state.add(s);
    
    var translations = TrinUtil.prototype.LOADED_JSON["Translations"];
    TrinGame.texts = translations[TrinGame.lang];
    
    var f = TrinGame.texts.title.indexOf(" ");
    var l = TrinGame.texts.title.lastIndexOf(" ");
    if (f === -1)    {
        f = TrinGame.texts.title.length + 1;   
    }
    var t = new TrinText(TrinGame.texts.title.substring(0, f));
    t.setStyle("Arial", 100, true, "#FFF", "center", "middle");
    t.reset(480, 120);
    TrinGame.state.debugText = t;
    if (TrinGame.lang == "th")    {
        t.y += 40;
    }
    TrinGame.state.add(t);
    
    if (f + 1 < l - 1)  {
        t = new TrinText(TrinGame.texts.title.substring(f + 1, l));
        t.setStyle("Arial", 48, true, "#FFF", "center", "middle");
        t.reset(480, 200);
        TrinGame.state.add(t);
    }
    if (l >= f && l !== -1)  {
        t = new TrinText(TrinGame.texts.title.substring(l + 1, TrinGame.texts.title.length));
        t.setStyle("Arial", 100, true, "#FFF", "center", "middle");
        t.reset(480, 264);
        TrinGame.state.add(t);
    }
    /*
    if ((TrinGame.isMobile || TrinGame.browser === TrinUtil.prototype.BROWSER_SAFARI) && !TrinUtil.prototype.isMacintosh()){// (TrinGame.device === TrinUtil.prototype.DEVICE_IOS || TrinGame.browser === TrinUtil.prototype.BROWSER_SAFARI) && !TrinUtil.prototype.isMacintosh()) {
        TrinGame.state.askPanel = new AskSoundPanel(TrinGame.state.loadWithSound, TrinGame.state.loadWithoutSound);
        TrinGame.state.add(TrinGame.state.askPanel);
        //TrinGame.state.loadWithoutSound();
    } else {
        TrinGame.state.loadWithSound();
    }
    */
    TrinGame.state.loadWithSound();
    var mgb = new TrinButton("logo_sponsor", "", TrinGame.openMoreGamesLink, true);
    mgb.center();
    mgb.x = 480;
    mgb.y = 640 - mgb.height / 2;
    TrinGame.state.moreGamesButton = mgb;
    TrinGame.state.add(mgb);
    
    TrinGame.orientationChanged();
    //setTimeout('TrinGame.orientationChanged()', 1000);
};

PreloaderState.prototype.loadWithSound = function() {
    if (TrinGame.state.askPanel !== null) {
        TrinGame.state.askPanel.dissapear();
    }
    TrinSound.prototype.withMusic = true;
    s = new TrinSprite("preloader_bar_back");
    s.center();
    s.reset(480, 494);
    TrinGame.state.add(s);
    TrinGame.state.loaderBar = s;

    s = new TrinSprite("preloader_bar_front");
    s.center();
    s.reset(480, 494);
    s.cutArea.right = s.width;
    TrinGame.state.add(s);
    TrinGame.state.loaderLine = s;

    var loader = new TrinAssetLoader(TrinGame.state.loadingTotalyCompleted, TrinGame.state.loadingProgress);
    if (TrinGame.device === TrinUtil.prototype.DEVICE_IOS || TrinGame.browser === TrinUtil.prototype.BROWSER_SAFARI || (TrinGame.device === TrinUtil.prototype.DEVICE_ANDROID && TrinGame.browser === TrinUtil.BROWSER_OTHER)) {
        loader.addSound("MainTheme", "snd/mainTheme", true, true);
    }   else {
        loader.addSound("MainTheme", "snd/mainTheme", true, true);
        loader.addSound("ButtonStep", "snd/buttonStep");
        loader.addSound("Click", "snd/click");
        loader.addSound("DragonEat", "snd/dragonEat");
        loader.addSound("DragonSleep", "snd/dragonSleep");
        loader.addSound("DragonJump", "snd/dragonJump");
        loader.addSound("DragonWakeUp", "snd/dragonWakeUp");
        loader.addSound("GetCrystal", "snd/getCrystal");
        loader.addSound("GetItem", "snd/getItem");
        loader.addSound("GetStar", "snd/getStar");
        loader.addSound("LevelStart", "snd/levelStart");
        loader.addSound("OpenSecret", "snd/openSecret");
        loader.addSound("UseKey", "snd/useKey");
        loader.addSound("UseWand", "snd/useWand");
        loader.addSound("Win", "snd/win");
        loader.addSound("WinStar1", "snd/win_star1");
        loader.addSound("WinStar2", "snd/win_star2");
        loader.addSound("WinStar3", "snd/win_star3");
    }
    loader.addImage("MainAtlas", "img/texture0.png", true);
    loader.addJson("MainAtlas", "img/texture0.json");

    loader.startLoading();
};

PreloaderState.prototype.loadWithoutSound = function() {
    if (TrinGame.state.askPanel !== null) {
        TrinGame.state.askPanel.dissapear();
    }
    TrinSound.prototype.withMusic = false;
    s = new TrinSprite("preloader_bar_back");
    s.center();
    s.reset(480, 494);
    TrinGame.state.add(s);
    TrinGame.state.loaderBar = s;

    s = new TrinSprite("preloader_bar_front");
    s.center();
    s.reset(480, 494);
    s.cutArea.right = s.width;
    TrinGame.state.add(s);
    TrinGame.state.loaderLine = s;

    var loader = new TrinAssetLoader(TrinGame.state.loadingTotalyCompleted, TrinGame.state.loadingProgress);

    loader.addSound("MainTheme", "snd/mainTheme", true, true);
    loader.addImage("MainAtlas", "img/texture0.png", true);
    loader.addJson("MainAtlas", "img/texture0.json");

    loader.startLoading();
};

PreloaderState.prototype.loadingProgress = function(progress) {
    var state = arguments.callee.state;
    if (state.loaderLine === null || state.loaderLine === undefined || state.loaderLine.cutArea === null) {
        return;
    }
    state.loaderLine.cutArea.right = state.loaderLine.width * (1 - progress);
};

PreloaderState.prototype.loadingTotalyCompleted = function() {
    TrinAnimation.prototype.makeAnimationFromAtlas("MainAtlas");
    
    if (TrinSound.prototype.withMusic) {
        TrinSound.prototype.setLoop("MainTheme", true);
        TrinSound.prototype.setLoop("DragonSleep", true);
        //TrinSound.prototype.play("MainTheme");   
    }   else    {
        TrinSound.prototype.mute = true;   
    }
    
    TrinSound.prototype.needRestore = false;
    TrinGame.pauseSounds = function(){
        if (!TrinSound.prototype.mute)   {
            TrinSound.prototype.needRestore = true;
            __soundButton.changeSound();  
        }
    };
    TrinGame.unPauseSounds = function(){
        if (TrinSound.prototype.needRestore)   {
            TrinSound.prototype.needRestore = false;
            __soundButton.changeSound();  
        }
    };
    
    TrinGame.gameStarted();
    TrinGame.switchState(new MainMenuState());
};function MainMenuState()    {
    MainMenuState.super.constructor.apply(this);
    this.backLayer = null;
    this.buttonsLayer = null;
    this.startButton = null;
    this.moreGamesButton = null;
    this.aboutButton = null;
    this.startGame = function(){
        TrinGame.switchState(new LevelSelectState());
        //TrinSound.prototype.play("Click");
    };
    this.soundButton = null;
    this.credits = null;
    this.creditsLayer = null;
    this.codeLine = null;
    this.artLine = null;
    this.musicLine = null;
    this.showCredits = false;
}

extend(MainMenuState, TrinState);

MainMenuState.prototype.firstRun = true;

MainMenuState.prototype.create = function(){
    MainMenuState.super.create.apply(this);
    
    this.backLayer = new TrinLayer();
    this.buttonsLayer = new TrinLayer();
    this.creditsLayer = new TrinLayer();
    
    var s = new TrinSprite("bcg_mainmenu");
    s.x = -1;
    s.y = -1;
    this.backLayer.add(s);
    
    this.startButton = new TrinButton("button_play_out", "", this.startGame);
    this.startButton.origin.x = this.startButton.width / 2;
    this.startButton.origin.y = this.startButton.height / 2;
    this.startButton.reset(480, 440);
    
    this.aboutButton = new TrinButton("button_about_out", "", function(){
        TrinGame.state.buttonsLayer.active = false;
        TrinGame.state.showCredits = true;
        //TrinSound.prototype.play("Click");
    }, false);
    this.aboutButton.origin.x = this.aboutButton.width / 2;
    this.aboutButton.origin.y = this.aboutButton.height / 2;
    this.aboutButton.reset(this.aboutButton.width / 2 + 16, 640 - this.aboutButton.height / 2 - 16);
    
    this.moreGamesButton = new TrinButton("button_moregames_out", "", openMoreGames, true);
    this.moreGamesButton.origin.x = this.moreGamesButton.width / 2;
    this.moreGamesButton.origin.y = this.moreGamesButton.height / 2;
    this.moreGamesButton.reset(960 - this.moreGamesButton.width / 2 - 16, this.aboutButton.y);
    
    this.soundButton = new SoundButton();
    
    var mgb = new TrinButton("logo_sponsor", "", TrinGame.openMoreGamesLink, true);
    mgb.center();
    mgb.scaleFactor.x = mgb.scaleFactor.y = 0.5;
    mgb.x = 480;
    mgb.y = mgb.height / 4 + 6;
    
    this.buttonsLayer.add(this.moreGamesButton);
    this.buttonsLayer.add(this.startButton);
    this.buttonsLayer.add(this.aboutButton);
    //this.buttonsLayer.add(this.soundButton);
    this.buttonsLayer.add(mgb);
    
    this.credits = new TrinSprite("authors");
    this.credits.scale.x = this.credits.scale.y = 0;
    this.credits.center();
    this.credits.reset(480, 320);
    
    this.codeLine = new TrinText(/*TrinGame.texts.code + ": NicolayBystrov"*/);
    this.codeLine.setStyle("Arial", 20, true, "#842C2C", "left", "middle");
    this.codeLine.alpha = 0;
    this.codeLine.reset(this.credits.x - this.credits.width / 2 + 32, this.credits.y + this.credits.height / 8 - this.credits.height / 2);
    
    this.artLine = new TrinText(/*TrinGame.texts.art + ": FinalBoss"*/);
    this.artLine.setStyle("Arial", 20, true, "#842C2C", "left", "middle");
    this.artLine.alpha = 0;
    this.artLine.reset(this.codeLine.x, this.credits.y + 2 * this.credits.height / 8 - this.credits.height / 2);
    
    this.musicLine = new TrinText(/*TrinGame.texts.music + ": Alexander Ahura"*/  "CREDITS: ");
    this.musicLine.setStyle("Arial", 20, true, "#842C2C", "left", "middle");
    this.musicLine.alpha = 0;
    this.musicLine.reset(this.codeLine.x, this.credits.y + 3 * this.credits.height / 8 - this.credits.height / 2);
    
    this.creditsLayer.add(this.credits);
    this.creditsLayer.add(this.codeLine);
    this.creditsLayer.add(this.artLine);
    this.creditsLayer.add(this.musicLine);
    
    var f = TrinGame.texts.title.indexOf(" ");
    var l = TrinGame.texts.title.lastIndexOf(" ");
    if (f === -1)    {
        f = TrinGame.texts.title.length + 1;   
    }
    
    var t = new TrinText(TrinGame.texts.title.substring(0, f));
    t.setStyle("Arial", 100, true, "#FFF", "center", "middle");
    t.reset(480, 120);
    if (TrinGame.lang == "th")    {
        t.y += 40;
    }
    this.buttonsLayer.add(t);
    
    if (f + 1 < l - 1)  {
        t = new TrinText(TrinGame.texts.title.substring(f + 1, l));
        t.setStyle("Arial", 48, true, "#FFF", "center", "middle");
        t.reset(480, 200);
        this.buttonsLayer.add(t);
    }
    if (l >= f && l !== -1)  {
        t = new TrinText(TrinGame.texts.title.substring(l + 1, TrinGame.texts.title.length));
        t.setStyle("Arial", 100, true, "#FFF", "center", "middle");
        t.reset(480, 264);
        this.buttonsLayer.add(t);
    }
    
    this.add(this.backLayer);
    this.add(this.buttonsLayer);
    this.add(this.creditsLayer);
    
    this.resized();
    
    if (this.firstRun)  {
        MainMenuState.prototype.firstRun = false;
        if (TrinSound.prototype.withMusic && TrinGame.device === TrinUtil.prototype.DEVICE_ANDROID && TrinGame.browser !== TrinUtil.prototype.BROWSER_OTHER)  {
            window.setTimeout(function(){
                //TrinSound.prototype.play("MainTheme");
            }, 250);
        }
    }
};

MainMenuState.prototype.update = function(){
    MainMenuState.super.update.apply(this);
    if (TrinGame.mouse.isPressed())   {
        TrinGame.state.buttonsLayer.active = true;
        this.showCredits = false;      
    }
    if (this.showCredits)   {
        this.credits.scale.x = this.credits.scale.y = Math.min(1, this.credits.scale.x + 0.1);
        if (this.credits.scale.x === 1) {
            this.codeLine.alpha =  this.artLine.alpha = this.musicLine.alpha = Math.min(1, this.codeLine.alpha + 0.1);
        }
    }   else {
        this.codeLine.alpha =  this.artLine.alpha = this.musicLine.alpha = Math.max(0, this.codeLine.alpha - 0.1);
        if (this.codeLine.alpha === 0) {
            this.credits.scale.x = this.credits.scale.y = Math.max(0, this.credits.scale.x - 0.1);
        }
    }
};

MainMenuState.prototype.resized = function() {
    this.aboutButton.x = TrinGame.camera.x + 16 + this.aboutButton.width / 2;
    this.moreGamesButton.x = (TrinGame.camera.x + TrinGame.camera.width) - 16 - this.moreGamesButton.width / 2
    this.soundButton.x = (TrinGame.camera.x + TrinGame.camera.width) - 16 - this.soundButton.width / 2;
};function LevelSelectState(page)    {
    if (page == undefined)  {
        page = Math.floor(this.currentLevel / 15);   
    }
    LevelSelectState.super.constructor.apply(this);
    this.back = null;
    this.digits = null;
    this.stars = null;
    this.doors =  null;
    this.buttonBack = null;
    this.buttonMoreGames = null;
    this.buttonSound = null;
    if (this.starsData === null)    {
        this.starsData = this.loadStarsData();
    }
    this.carpetLayer = null;
    this.page = page;
    this.buttonNextPage = null;
    this.buttonBackPage = null;
}

extend(LevelSelectState, TrinState);

LevelSelectState.prototype.starsData    = null;
LevelSelectState.prototype.currentLevel = 0;

LevelSelectState.prototype.create = function(){
    LevelSelectState.super.create.apply(this);
    
    this.back = new TrinSprite("bcg_choose_level");
    this.back.x = -1;
    
    var num;
    var s;
    this.digits = [];
    this.stars = [];
    this.doors = [];
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 5; j++) {
            num = this.page * 15 + i * 5 + j;
            if (num >= this.levels.length)   {
                break;
            }
            
            s = new TrinSprite((this.starsData[num] == -1 ? "choose_level_door_close" : "choose_level_door_open"));
            s.animationSpeed = 0;
            s.center();
            s.reset(220 + j * 126, 82 + i * 201);
            this.doors[num] = s;
            
            s = new TrinSprite("digits");
            s.animationSpeed = 0;
            s.animationProgress = s.currentFrameNumber = num;
            s.updateSize();
            s.center();
            s.reset((num < 9 ? 212 + j * 126 : 220 + j * 126), 80 + i * 201);
            this.digits[num] = s;
            
            s = new TrinSprite("stars_choose_level");
            s.animationSpeed = 0;
            s.animationProgress = s.currentFrameNumber = Math.max(0, this.starsData[num] - 1);
            s.center();
            s.reset(201 + j * 126, 37 + i * 201);
            if (this.starsData[num] <= 0 || this.starsData[num] === "0" || this.starsData[num] === "-1")  {
                s.visible = false;
            }
            this.stars[num] = s;
        }
    }
    
    this.carpetLayer = new TrinLayer();
    
    s = new TrinButton("button_levels_out", "", function(){
        TrinGame.switchState(new MainMenuState());
        //TrinSound.prototype.play("Click");
    });
    s.center();
    s.reset(16 + s.width / 2, 16 + s.height / 2);
    this.buttonBack = s;
    
    s = new TrinButton("button_moregames_out", "", openMoreGames, true);
    s.center();
    s.reset(944 - s.width * 3 / 2, 32 + s.height * 3 / 2);
    this.buttonMoreGames = s;

    s = new TrinButton("button_back_out", "", function(){
        TrinGame.switchState(new LevelSelectState(TrinGame.state.page + 1));
        //TrinSound.prototype.play("Click");
    });
    s.center();
    s.scaleFactor.x = -1; 
    s.reset(944 - s.width / 2, 624 - s.height / 2);
    this.buttonNextPage = s;

    s = new TrinButton("button_back_out", "", function(){
        TrinGame.switchState(new LevelSelectState(TrinGame.state.page - 1));
        //TrinSound.prototype.play("Click");
    });
    s.center();
    s.reset(16 + s.width / 2, 624 - s.height / 2);
    this.buttonBackPage = s;
    
    this.add(this.back);
    for (var i = this.page * 15; i < Math.min((this.page + 1) * 15, this.levels.length); i++)    {
        this.add(this.doors[i]);
        this.add(this.digits[i]);
        this.add(this.stars[i]);
    }
    
    this.buttonSound = new SoundButton();
    
    //this.add(this.carpetLayer);
    this.add(this.buttonBack);
    this.add(this.buttonMoreGames);
    if (this.page < Math.floor((this.levels.length - 1) / 15))   {
        this.add(this.buttonNextPage);
    }
    if (this.page > 0)   {
        this.add(this.buttonBackPage);
    }
    //this.add(this.buttonSound);
    var l;
    var s;
    var color;
    for (var i = 0; i < 3; i++)  {
        l = -Math.floor(Math.random(12));
        while (l <= 960)    {
            color = HorizontalCarpet.prototype.carpetColors[i];
            s = new TrinSprite("carpet_" + color + "_horiz");
            s.reset(l, 146 + i * 202);
            l += s.width - 2;
            this.carpetLayer.add(s);
        }
    }
    
    var mgb = new TrinButton("logo_sponsor", "", TrinGame.openMoreGamesLink, true);
    mgb.center();
    mgb.scaleFactor.x = mgb.scaleFactor.y = 0.5;
    mgb.x = 480;
    mgb.y = 634 - mgb.height / 4;;
    this.add(mgb);
    
    this.resized();
};

LevelSelectState.prototype.update = function(){
    LevelSelectState.super.update.apply(this);
    var n;
    var m = TrinGame.mouse;
    var dw = 126;
    var dh = 201;
    var l;
    var t = 20;
    for (var i = 0; i < 3; i++) {
        l = 160 - TrinGame.camera.x;
        for (var j = 0; j < 5; j++) {
            n = this.page * 15 + i * 5 + j;
            if (n >= this.levels.length)   {
                break;
            }
            if (m.x > l && m.x < l + dw && m.y > t && m.y < t + dh - 70 && this.starsData[n] > -1) {
                this.digits[n].scale.x = this.digits[n].scale.y = 1.2;
                this.doors[n].currentFrameNumber = 1;
                if (m.isPressed())  {
                    TrinGame.switchState(new PlayState(this.levels[n]));
                    LevelSelectState.prototype.currentLevel = n;
                    //TrinSound.prototype.play("LevelStart");
                }
            }   else    {
                this.doors[n].currentFrameNumber = 0;
                this.digits[n].scale.x = this.digits[n].scale.y = 1;
            }
            l += dw;
        }
        t += dh;
    }
};

LevelSelectState.prototype.loadStarsData  = function(){
    var data =[];
    var storage = new TrinStorage();
    storage.init();
    var raw = null;
    if (TrinStorage.prototype.supportsStorage)  {
        var raw = storage.load("starsData");
    }
    if (raw === null)   {
        for (var i = 0; i < this.levels.length; i++)    {
            data[i] = -1;
        }
        data[0] = 0;
    }   else    {
        data = raw.split(",");
        var l = data.length;
        for (var i = l; i < this.levels.length; i++)    {
            data[i] = -1;
        }
    }
    LevelSelectState.prototype.starsData = data;
    return data;
};

LevelSelectState.prototype.saveStarsData  = function(){
    var storage = new TrinStorage();
    storage.init();
    if (TrinStorage.prototype.supportsStorage)  {
        var ret = "";
        for (var i = 0; i < this.levels.length; i++)    {
            if (i > 0)  {
                ret +=",";
            }
            ret += this.starsData[i];
        }
        storage.save("starsData", ret);
    }
};

LevelSelectState.prototype.gotoNextLevelState = function(){
    TrinSound.prototype.SOUNDS.MainTheme.muted==false ? (TrinSound.prototype.SOUNDS.MainTheme.volume(0), musicFlag = true) : musicFlag = false
        SG_Hooks.levelUp(gLevel, gScore, function(){
            musicFlag && TrinSound.prototype.SOUNDS.MainTheme.volume(1);
            if (LevelSelectState.prototype.currentLevel === LevelSelectState.prototype.levels.length-1)   {
                TrinGame.switchState(new LevelSelectState());
            }   else {
                LevelSelectState.prototype.currentLevel++;
                TrinGame.switchState(new PlayState(LevelSelectState.prototype.levels[LevelSelectState.prototype.currentLevel]));
            }
        })

    //TrinSound.prototype.play("Click");
    TrinSound.prototype.stop("DragonSleep");
};

LevelSelectState.prototype.registerStars = function(stars)   {
    TrinGame.levelCompleted(this.currentLevel+1, stars);
    if (this.starsData[this.currentLevel] < stars) {
        this.starsData[this.currentLevel] = stars;
    }
    if (this.currentLevel < this.levels.length-1) {
        this.starsData[this.currentLevel + 1] = Math.max(this.starsData[this.currentLevel + 1], 0);
    }
    this.saveStarsData();
};

LevelSelectState.prototype.resized = function(){
    this.buttonBack.x = TrinGame.camera.x + 16 + this.buttonBack.width / 2;
    this.buttonSound.x = (TrinGame.camera.x + TrinGame.camera.width) - 16 - this.buttonMoreGames.width / 2;
    this.buttonMoreGames.x = this.buttonBack.x;
};

LevelSelectState.prototype.levels = [
    {
        objects: [
            {obj: "secret_key", row: 4, column: 3},
            {obj: "key", row: 3, column: 0},
            {obj: "star", row: 3, column: 1},
            {obj: "star", row: 3, column: 2},
            {obj: "star", row: 3, column: 3},
            {obj: "carpet", type: "h", row: 3, startColumn: 0, endColumn: 6},
            {obj: "nail", row: 3, column: 6}
        ]
    },{
        objects: [
            {obj: "star", row: 0, column: 3},
            {obj: "wand", row: 1, column: 3},
            {obj: "star", row: 2, column: 3},
            {obj: "secret_key", row: 3, column: 3},
            {obj: "star", row: 4, column: 3},
            {obj: "key", row: 2, column: 4},
            {obj: "carpet", type: "h", row: 2, startColumn: 1, endColumn: 5},
            {obj: "carpet", type: "v", column: 3, startRow: 0, endRow: 5},
            {obj: "nail", row: 2, column: 1},
            {obj: "weight", row: 2, column: 5},
            {obj: "nail", row: 5, column: 3}
        ]
    },
    {objects: [
            {obj: "wand", row: 0, column: 4},
            {obj: "secret", row: 2, column: 3},
            {obj: "star", row: 2, column: 4},
            {obj: "button", row: 2, column: 5, activate:   {row: 2, column: 3}},
            {obj: "star", row: 3, column: 3},
            {obj: "star", row: 3, column: 6},
            {obj: "wand", row: 3, column: 5},
            {obj: "carpet", type: "v", column: 4, startRow: 0, endRow: 2},
            {obj: "carpet", type: "h", row: 3, startColumn: 2, endColumn: 6},
            {obj: "weight", row: 3, column: 6}, 
            {obj: "weight", row: 3, column: 2},
            {obj: "nail", row: 3, column: 4}
    ]},
    {objects: [
            {obj: "button", row: 4, column: 3, activate: {row: 2, column: 2}},
            {obj: "carpet", type: "h", row: 4, startColumn: 1, endColumn: 4},
            {obj: "nail", row: 4, column: 2},
            {obj: "nail", row: 4, column: 4},
            {obj: "wand", row: 3, column: 4},
            {obj: "star", row: 2, column: 4},
            {obj: "star", row: 4, column: 4},
            {obj: "star", row: 5, column: 4},
            {obj: "secret", row: 2, column: 2},
            {obj: "carpet", type: "v", column: 4, startRow: 2, endRow: 5},
            {obj: "weight", row: 4, column: 4}
    ]},
    {objects: [
            {
                obj: "secret_key",
                row: 2,
                column: 3
            },
            {
                obj: "star",
                row: 2,
                column: 4
            },
            {
                obj: "bone",
                row: 2,
                column: 5
            },
            {
                obj: "star",
                row: 1,
                column: 5
            },
            {
                obj: "star",
                row: 3,
                column: 5
            },
            {
                obj: "carpet",
                type: "h",
                row: 2,
                startColumn: 1,
                endColumn: 5
            },
            {
                obj: "key",
                row: 2,
                column: 5
            },
            {
                obj: "carpet",
                type: "v",
                column: 5,
                startRow: 1,
                endRow: 3
            },
            {
                obj: "dragon",
                row: 2,
                column: 2
            }
    ]},
    {objects: [
            {obj: "star", row: 3, column: 1},
            {obj: "star", row: 3, column: 3},
            {obj: "star", row: 3, column: 5},
            {obj: "secret", row: 3, column: 2},
            {obj: "bone", row: 3, column: 2},
            {obj: "bone", row: 3, column: 4},
            {obj: "wand", row: 2, column: 2},
            {obj: "button", row: 3, column: 6, activate: {row: 3, column: 2}},
            {obj: "dragon", row: 3, column: 6},
            {obj: "carpet", type:"v", column: 2,  startRow: 1, endRow: 3},
            {obj: "carpet", type:"h", row: 3,  startColumn: 1, endColumn: 5},
            {obj: "weight", row: 1, column: 2}
    ]},
    {objects: [
            {obj: "star", row: 0, column: 0},
            {obj: "secret", row: 0, column: 1},
            {obj: "wand", row: 0, column: 5},
            {obj: "button", row: 2, column: 1, activate: {row: 0, column: 1}},
            {obj: "wand", row: 2, column: 2},
            {obj: "star", row: 2, column: 3},
            {obj: "button", row: 3, column: 6, activate: {row: 4, column: 3}},
            {obj: "star", row: 3, column: 3},
            {obj: "secret", row: 4, column: 3},
            {obj: "carpet", type: "h", row: 0, startColumn: 0, endColumn: 2},
            {obj: "carpet", type: "h", row: 0, startColumn: 5, endColumn: 6},
            {obj: "carpet", type: "h", row: 2, startColumn: 0, endColumn: 4},
            {obj: "carpet", type: "v", column: 3, startRow: 2, endRow: 4},
            {obj: "carpet", type: "v", column: 6, startRow: 2, endRow: 4},
            {obj: "nail", row: 0, column: 2},
            {obj: "nail", row: 0, column: 6},
            {obj: "nail", row: 2, column: 4},
            {obj: "nail", row: 4, column: 6},
            {obj: "weight", row: 0, column: 0},
            {obj: "weight", row: 2, column: 0},
            {obj: "weight", row: 2, column: 6}
    ]},
    {objects: [
            {obj: "secret_key", row: 1, column: 4},
            {obj: "key", row: 3, column: 4},
            {obj: "star", row: 3, column: 5},
            {obj: "star", row: 3, column: 6},
            {obj: "star", row: 3, column: 1},
            {obj: "carpet", type: "h", row: 3, startColumn: 1, endColumn: 4},
            {obj: "carpet", type: "v", column: 1, startRow: 1, endRow: 4},
            {obj: "carpet", type: "v", column: 4, startRow: 1, endRow: 4},
            {obj: "carpet", type: "h", row: 3, startColumn: 1, endColumn: 3},
            {obj: "carpet", type: "h", row: 3, startColumn: 4, endColumn: 5},
            {obj: "bone", row: 3, column: 5},
            {obj: "carpet", type: "h", row: 3, startColumn: 5, endColumn: 7},
            {obj: "carpet", type: "h", row: 1, startColumn: 3, endColumn: 6},
            {obj: "carpet", type: "v", column: 6, startRow: 1, endRow: 4},
            {obj: "bone", row: 3, column: 3, downOn: 1},
            {obj: "dragon", row: 1, column: 4}
    ]},
    {objects: [
            {obj: "key", row: 1, column: 2},
            {obj: "key", row: 3, column: 5},
            {obj: "wand", row: 0, column: 2},
            {obj: "star", row: 0, column: 2},
            {obj: "star", row: 4, column: 1},
            {obj: "star", row: 4, column: 6},
            {obj: "bone", row: 2, column: 2},
            {obj: "carpet", type: "v", column: 1, startRow: 3, endRow: 5},
            {obj: "carpet", type: "v", column: 6, startRow: 3, endRow: 5},
            {obj: "bone", row: 3, column: 1},
            {obj: "bone", row: 3, column: 6},
            {obj: "carpet", type: "h", row: 3, startColumn: 1, endColumn: 6},
            {obj: "wand", row: 3, column: 3},
            {obj: "carpet", type: "h", row: 1, startColumn: 2, endColumn: 5},
            {obj: "carpet", type: "v", column: 2, startRow: 0, endRow: 3},
            {obj: "carpet", type: "v", column: 5, startRow: 1, endRow: 3},
            {obj: "carpet", type: "h", row: 3, startColumn: 2, endColumn: 5},
            {obj: "secret_key", row: 2, column: 3},
            {obj: "secret_key", row: 2, column: 4},
            {obj: "nail", row: 5, column: 1},
            {obj: "nail", row: 5, column: 6},
            {obj: "weight", row: 0, column: 2},
            {obj: "weight", row: 3, column: 2},
            {obj: "dragon", row: 1, column: 5}
    ]},
    {objects: [
            {obj: "wand", row: 0, column: 3},
            {obj: "button", row: 5, column: 3, activate: {row: 3, column: 2}},
            {obj: "carpet", type:"v", column: 3, startRow: 0, endRow: 5},
            {obj: "carpet", type:"h", row: 5, startColumn: 2, endColumn: 5},
            {obj: "nail", row: 5, column: 2},
            {obj: "bone", row: 0, column: 3},
            {obj: "bone", row: 5, column: 4},
            {obj: "star", row: 4, column: 4},
            {obj: "carpet", type:"h", row: 4, startColumn: 4, endColumn: 5},
            {obj: "bone", row: 4, column: 4},
            {obj: "secret", row: 3, column: 2},
            {obj: "carpet", type: "h", row: 3, startColumn: 1, endColumn: 4},
            {obj: "nail", row: 3, column: 4},
            {obj: "star", row: 3, column: 4},
            {obj: "carpet", type: "v", column: 4, startRow: 2, endRow: 5},
            {obj: "nail", row: 2, column: 4},
            {obj: "star", row: 2, column: 4},
            {obj: "carpet", type: "h", row: 2, startColumn: 3, endColumn: 6},
            {obj: "nail", row: 2, column: 3},
            {obj: "carpet", type: "v", column: 3, startRow: 0, endRow: 3, actions: [{type: "down", on: 3}]},
            {obj: "nail", row: 3, column: 3, downOn: 1},
            {obj: "dragon", row: 2, column: 6},
            {obj: "weight", row: 3, column: 1}
    ]},
    {objects: [
            {obj: "dragon", row: 4, column: 5},
            {obj: "button", row: 2, column: 2, activate: {row: 4, column: 2}},
            {obj: "button", row: 2, column: 3, activate: {row: 4, column: 3}},
            {obj: "button", row: 2, column: 4, activate: {row: 4, column: 4}},
            {obj: "star", row: 2, column: 1},
            {obj: "star", row: 2, column: 5},
            {obj: "star", row: 2, column: 6},
            {obj: "secret", row: 4, column: 2},
            {obj: "secret", row: 4, column: 3},
            {obj: "secret", row: 4, column: 4},
            {obj: "carpet", type:"v", column: 1, startRow: 1, endRow: 2},
            {obj: "carpet", type:"v", column: 2, startRow: 1, endRow: 2},
            {obj: "carpet", type:"v", column: 3, startRow: 1, endRow: 2},
            {obj: "carpet", type:"v", column: 4, startRow: 1, endRow: 2},
            {obj: "carpet", type:"v", column: 5, startRow: 1, endRow: 2},
            {obj: "carpet", type:"v", column: 6, startRow: 1, endRow: 2},
            {obj: "bone", row: 2, column: 1},
            {obj: "bone", row: 2, column: 2},
            {obj: "bone", row: 2, column: 3},
            {obj: "bone", row: 2, column: 4},
            {obj: "bone", row: 2, column: 5},
            {obj: "bone", row: 2, column: 6},
            {obj: "carpet", type:"v", column: 1, startRow: 2, endRow: 3},
            {obj: "carpet", type:"v", column: 2, startRow: 2, endRow: 3},
            {obj: "carpet", type:"v", column: 3, startRow: 2, endRow: 3},
            {obj: "carpet", type:"v", column: 4, startRow: 2, endRow: 3},
            {obj: "carpet", type:"v", column: 5, startRow: 2, endRow: 3},
            {obj: "carpet", type:"v", column: 6, startRow: 2, endRow: 3},
            {obj: "nail", row: 3, column: 1},
            {obj: "nail", row: 3, column: 2},
            {obj: "nail", row: 3, column: 3},
            {obj: "nail", row: 3, column: 4},
            {obj: "nail", row: 3, column: 5},
            {obj: "nail", row: 3, column: 6}
    ]},
    {objects: [
            {obj: "button", row: 4, column: 3, activate: {row: 3, column: 2}},
            {obj: "button", row: 1, column: 2, activate: {row: 3, column: 0}},
            {obj: "star", row: 2, column: 3},
            {obj: "star", row: 4, column: 2},
            {obj: "carpet", type: "h", row: 2, startColumn: 1, endColumn:4},
            {obj: "carpet", type: "h", row: 2, startColumn: 4, endColumn:7},
            {obj: "carpet", type: "h", row: 4, startColumn: 0, endColumn:3},
            {obj: "bone", row: 4, column: 3},
            {obj: "bone", row: 2, column: 4},
            {obj: "key", row: 2, column: 6},
            {obj: "wand", row: 1, column: 4},
            {obj: "star", row: 3, column: 4},
            {obj: "carpet", type: "h", row: 4, startColumn: 3, endColumn:6},
            {obj: "carpet", type: "v", column: 1, startRow: 1, endRow:4},
            {obj: "carpet", type: "v", column: 3, startRow: 2, endRow:5},
            {obj: "carpet", type: "v", column: 4, startRow: 1, endRow:3},
            {obj: "carpet", type: "v", column: 6, startRow: 1, endRow:5},
            {obj: "secret", row: 3, column: 2},
            {obj: "secret", row: 3, column: 0},
            {obj: "secret_key", row: 3, column: 5},
            {obj: "nail", row: 2, column: 5},
            {obj: "nail", row: 4, column: 1},
            {obj: "nail", row: 5, column: 6},
            {obj: "dragon", row: 1, column: 1},
            {obj: "weight", row: 1, column: 6}
    ]},
    {objects: [
            {obj: "secret_key", row: 0, column: 0},
            {obj: "secret_key", row: 0, column: 7},
            {obj: "secret_key", row: 5, column: 0},
            {obj: "secret_key", row: 5, column: 7},
            {obj: "key", row: 1, column: 1},
            {obj: "key", row: 1, column: 6},
            {obj: "key", row: 4, column: 1},
            {obj: "key", row: 4, column: 6},
            {obj: "star", row: 0, column: 4},
            {obj: "star", row: 1, column: 3},
            {obj: "star", row: 4, column: 3},
            {obj: "wand", row: 0, column: 3},
            {obj: "carpet", type: "h", row: 0, startColumn: 1, endColumn: 6},
            {obj: "carpet", type: "h", row: 5, startColumn: 1, endColumn: 6},
            {obj: "carpet", type: "h", row: 1, startColumn: 0, endColumn: 7},
            {obj: "carpet", type: "h", row: 4, startColumn: 0, endColumn: 7},
            {obj: "carpet", type: "v", column: 0, startRow: 1, endRow: 4},
            {obj: "carpet", type: "v", column: 7, startRow: 1, endRow: 4},
            {obj: "carpet", type: "v", column: 1, startRow: 0, endRow: 5},
            {obj: "carpet", type: "v", column: 6, startRow: 0, endRow: 5},
            {obj: "nail", row: 0, column: 1},
            {obj: "nail", row: 1, column: 7},
            {obj: "nail", row: 4, column: 0},
            {obj: "nail", row: 5, column: 6},
            {obj: "dragon", row: 0, column: 6},
            {obj: "bone", row: 1, column: 0, downOn: 1},
            {obj: "weight", row: 1, column: 0},
            {obj: "bone", row: 5, column: 1, downOn: 1},
            {obj: "bone", row: 4, column: 7, downOn: 1},
            {obj: "bone", row: 4, column: 6, downOn: 1},
            {obj: "bone", row: 4, column: 1, downOn: 1}
    ]},
    {objects: [
            {obj: "star", row: 0, column: 2},
            {obj: "star", row: 2, column: 2},
            {obj: "star", row: 3, column: 1},
            {obj: "secret", row: 1, column: 2},
            {obj: "secret", row: 3, column: 4},
            {obj: "secret_key", row: 1, column: 4},
            {obj: "secret_key", row: 3, column: 2},
            {obj: "key", row: 2, column: 3},
            {obj: "key", row: 4, column: 1},
            {obj: "wand", row: 4, column: 2},
            {obj: "carpet", type: "v", column: 1, startRow: 0, endRow: 2},
            {obj: "carpet", type: "h", row: 0, startColumn: 1, endColumn: 3},
            {obj: "carpet", type: "v", column: 3, startRow: 0, endRow: 4},
            {obj: "carpet", type: "h", row: 4, startColumn: 3, endColumn: 5},
            {obj: "carpet", type: "v", column: 5, startRow: 2, endRow: 4},
            {obj: "carpet", type: "h", row: 2, startColumn: 1, endColumn: 5},
            {obj: "carpet", type: "v", column: 1, startRow: 2, endRow: 4},
            {obj: "carpet", type: "h", row: 4, startColumn: 0, endColumn: 3},
            {obj: "carpet", type: "v", column: 3, startRow: 0, endRow: 4},
            {obj: "carpet", type: "h", row: 0, startColumn: 3, endColumn: 5},
            {obj: "carpet", type: "v", column: 5, startRow: 0, endRow: 2},
            {obj: "bone", row: 4, column: 5, downOn: 1},
            {obj: "bone", row: 2, column: 1, downOn: 2},
            {obj: "bone", row: 2, column: 4, downOn: 1},
            {obj: "button", row: 0, column: 5, downOn: 2, activate: {row: 1, column: 2}},
            {obj: "bone", row: 0, column: 5, downOn: 1},
            {obj: "button", row: 4, column: 3, downOn: 4, activate: {row: 3, column: 4}},
            {obj: "bone", row: 4, column: 3, downOn: 1},
            {obj: "dragon", row: 2, column: 3},
            {obj: "nail", row: 4, column: 0},
            {obj: "weight", row: 0, column: 1}
    ]},
    {objects: [
            {obj:"wand", row:2, column: 5},
            {obj:"star", row:2, column: 4},
            {obj:"star", row:1, column: 6},
            {obj:"star", row:2, column: 1},
            {obj:"key", row:2, column: 3},
            {obj:"secret_key", row:3, column: 5},
            {obj:"secret", row:2, column: 6},
            {obj:"secret", row:4, column: 1},
            {obj:"button", row:4, column: 2, activate: {row: 4, column: 1}},
            {obj:"button", row:1, column: 5, activate: {row: 2, column: 6}},
            {obj: "carpet", type: "v", column: 1, startRow: 2, endRow: 3},
            {obj: "carpet", type: "h", row: 2, startColumn: 1, endColumn: 3},
            {obj: "carpet", type: "v", column: 2, startRow: 2, endRow: 4},
            {obj: "carpet", type: "h", row: 4, startColumn: 0, endColumn: 2},
            {obj: "nail", row: 4, column: 0},
            {obj: "carpet", type: "v", column: 0, startRow: 1, endRow: 4},
            {obj: "nail", row: 1, column: 0},
            {obj: "carpet", type: "h", row: 1, startColumn: 0, endColumn: 3},
            {obj: "nail", row: 1, column: 3},
            {obj: "carpet", type: "v", column: 3, startRow: 1, endRow: 4, actions: [{type: "down", on: 1}]},
            {obj: "nail", row: 4, column: 3},
            {obj: "carpet", type: "h", row: 4, startColumn: 3, endColumn: 4},
            {obj: "nail", row: 4, column: 4},
            {obj: "carpet", type: "v", column: 4, startRow: 1, endRow: 5},
            {obj: "nail", row: 1, column: 4},
            {obj: "carpet", type: "h", row: 1, startColumn: 2, endColumn: 7},
            {obj: "nail", row: 1, column: 7},
            {obj: "carpet", type: "v", column: 7, startRow: 1, endRow: 4},
            {obj: "nail", row: 4, column: 7},
            {obj: "carpet", type: "h", row: 4, startColumn: 5, endColumn: 7},
            {obj: "carpet", type: "v", column: 5, startRow: 2, endRow: 4},
            {obj: "carpet", type: "h", row: 2, startColumn: 2, endColumn: 6, actions: [{type: "down", on: 2}]},
            {obj: "carpet", type: "v", column: 6, startRow: 2, endRow: 3},
            {obj:"weight", row:2, column: 2},
            {obj:"dragon", row:2, column: 6},
            {obj:"bone", row:1, column: 3, downOn: 2},
            {obj:"bone", row:2, column: 6, downOn: 2},
            {obj:"bone", row:4, column: 4, downOn: 1},
            {obj:"bone", row:4, column: 2, downOn: 1}
    ]},
    {objects: [
            {obj: "star", row: 2, column: 3},
            {obj: "star", row: 2, column: 5},
            {obj: "star", row: 3, column: 6},
            {obj: "secret", row: 2, column: 2},
            {obj: "secret", row: 3, column: 2},
            {obj: "secret", row: 3, column: 5},
            {obj: "wand", row: 3, column: 2},
            {obj: "button", row: 2, column: 4, activate: {row: 3, column: 2}},
            {obj: "button", row: 2, column: 7, activate: {row: 2, column: 2}},
            {obj: "button", row: 3, column: 7, activate: {row: 3, column: 5}},
            {obj: "carpet", type: "h", row: 2, startColumn: 0, endColumn: 7},
            {obj: "carpet", type: "h", row: 3, startColumn: 0, endColumn: 4},
            {obj: "carpet", type: "h", row: 3, startColumn: 4, endColumn: 7},
            {obj: "bone", row: 2, column: 1},
            {obj: "bone", row: 3, column: 1},
            {obj: "bone", row: 2, column: 4},
            {obj: "bone", row: 3, column: 4},
            {obj: "bone", row: 2, column: 7},
            {obj: "bone", row: 3, column: 7},
            {obj: "carpet", type: "v", column: 1, startRow: 2, endRow: 3},
            {obj: "carpet", type: "v", column: 4, startRow: 2, endRow: 3},
            {obj: "carpet", type: "v", column: 7, startRow: 2, endRow: 3},
            {obj: "weight", row: 2, column: 0},
            {obj: "dragon", row: 2, column: 6},
            {obj: "nail", row: 3, column: 0}
    ]},
    {objects: [
        {obj: "secret", row: 1, column:3},
        {obj: "star", row: 3, column:3},
        {obj: "star", row: 4, column:4},
        {obj: "star", row: 3, column:5},
        {obj: "button", row: 3, column:4, activate: {row: 1, column: 3}},
        {obj: "bone", row: 0, column:3},
        {obj: "bone", row: 1, column:2},
        {obj: "bone", row: 1, column:4},
        {obj: "bone", row: 2, column:3},
        {obj: "carpet", type: "v", column: 3, startRow: 0, endRow: 1},
        {obj: "bone", row: 1, column:3},
        {obj: "carpet", type: "h", row: 1, startColumn: 2, endColumn: 3},
        {obj: "bone", row: 1, column:3},
        {obj: "carpet", type: "v", column: 3, startRow: 1, endRow: 2},
        {obj: "bone", row: 1, column:3},
        {obj: "carpet", type: "h", row: 1, startColumn: 3, endColumn: 4},
        {obj: "carpet", type: "v", column: 4, startRow: 2, endRow: 3},
        {obj: "bone", row: 3, column:4},
        {obj: "carpet", type: "h", row: 3, startColumn: 3, endColumn: 4},
        {obj: "bone", row: 3, column:4},
        {obj: "carpet", type: "v", column: 4, startRow: 3, endRow: 4},
        {obj: "bone", row: 3, column:4},
        {obj: "carpet", type: "h", row: 3, startColumn: 4, endColumn: 5},
        {obj: "dragon", row: 2, column:4}
    ]},
    {objects: [
        {obj: "secret", row: 0, column:3},
        {obj: "secret", row: 4, column:3},
        {obj: "secret", row: 2, column:1},
        {obj: "secret", row: 2, column:5},
        {obj: "bone", row: 0, column:3},
        {obj: "bone", row: 4, column:3},
        {obj: "bone", row: 2, column:1},
        {obj: "bone", row: 2, column:5},
        {obj: "button", row: 2, column:3, activate: {row: 0, column: 3}},
        {obj: "button", row: 2, column:3, activate: {row: 4, column: 3}},
        {obj: "button", row: 2, column:3, activate: {row: 2, column: 1}},
        {obj: "button", row: 2, column:3, activate: {row: 2, column: 5}},
        {obj: "star", row: 2, column:2},
        {obj: "star", row: 2, column:4},
        {obj: "star", row: 3, column:3},
        {obj: "carpet", type: "v", column: 3, startRow: 0, endRow: 2},
        {obj: "carpet", type: "h", row: 2, startColumn: 1, endColumn: 3},
        {obj: "carpet", type: "v", column: 3, startRow: 2, endRow: 4},
        {obj: "bone", row: 2, column:3},
        {obj: "carpet", type: "h", row: 2, startColumn: 3, endColumn: 5},
        {obj: "dragon", row: 0, column:5}
    ]},
    {objects: [
        {obj: "secret_key", row: 2, column:2},
        {obj: "secret_key", row: 2, column:3},
        {obj: "secret_key", row: 3, column:4},
        {obj: "secret_key", row: 3, column:5},
        {obj: "star", row: 2, column:4},
        {obj: "star", row: 3, column:3},
        {obj: "star", row: 2, column:3},
        {obj: "carpet", type: "h", row: 2, startColumn: 2, endColumn: 4},
        {obj: "carpet", type: "v", column: 3, startRow: 2, endRow: 3},
        {obj: "carpet", type: "h", row: 3, startColumn: 3, endColumn: 5},
        {obj: "carpet", type: "v", column: 4, startRow: 2, endRow: 3, actions:[{type:"down", on: 0}]},
        {obj: "key", row: 3, column:4, downOn: 1},
        {obj: "key", row: 2, column:3, downOn: 1},
        {obj: "key", row: 2, column:4, downOn: 1},
        {obj: "key", row: 3, column:3, downOn: 1}
    ]},
    {objects:[
        {obj: "secret", row: 1, column: 1},
        {obj: "secret_key", row: 3, column:3},
        {obj: "secret", row: 5, column:5},
        {obj: "button", row: 1, column: 5, activate: {row: 1, column: 1}},
        {obj: "button", row: 5, column: 1, activate: {row: 5, column: 5}},
        {obj: "star", row: 1,column: 3},
        {obj: "star", row: 3,column: 1},
        {obj: "star", row: 3,column: 5},
        {obj: "wand", row: 5,column: 3},
        {obj: "carpet", type: "h", row: 3, startColumn: 3, endColumn: 6},
        {obj: "carpet", type: "v", column: 3, startRow: 0, endRow: 5},
        {obj: "carpet", type: "v", column: 1, startRow: 1, endRow: 5},
        {obj: "carpet", type: "v", column: 5, startRow: 1, endRow: 5},
        {obj: "carpet", type: "h", row: 1, startColumn: 1, endColumn: 5, actions:[{type:"down", on: 0}]},
        {obj: "wand", row: 1,column: 3, downOn: 1},
        {obj: "bone", row: 1,column: 5, downOn: 1},
        {obj: "bone", row: 1,column:1, downOn: 1},
        {obj: "carpet", type: "h", row: 5, startColumn: 1, endColumn: 5, actions:[{type:"down", on: 4}]},
        {obj: "carpet", type: "h", row: 3, startColumn: 0, endColumn: 3, actions:[{type:"down", on: 1}]},
        {obj: "dragon", row: 0,column:3},
        {obj: "weight", row: 3, column: 3},
        {obj: "weight", row: 5, column: 1},
        {obj: "weight", row: 5, column: 5},
        {obj: "key", row: 5,column: 3, downOn: 1}
    ]},
    {objects:[
        {obj: "secret_key", row: 1, column: 1},
        {obj: "secret_key", row: 5, column:1},
        {obj: "secret_key", row: 5, column:5},
        {obj: "secret_key", row: 1, column:5},
        {obj: "star", row: 4,column: 3},
        {obj: "star", row: 3,column: 2},
        {obj: "star", row: 3,column: 4},
        {obj: "carpet", type: "h", row: 3, startColumn: 3, endColumn: 5},
        {obj: "carpet", type: "v", column: 3, startRow: 1, endRow: 3},
        {obj: "carpet", type: "v", column: 3, startRow: 3, endRow: 5},
        {obj: "carpet", type: "v", column: 1, startRow: 1, endRow: 5},
        {obj: "carpet", type: "v", column: 5, startRow: 1, endRow: 5},
        {obj: "carpet", type: "h", row: 1, startColumn: 1, endColumn: 5, actions:[{type:"down", on: 0}]},
        {obj: "bone", row: 1,column:1, downOn: 1},
        {obj: "bone", row: 1,column:5, downOn: 1},
        {obj: "carpet", type: "h", row: 5, startColumn: 1, endColumn: 5, actions:[{type:"down", on: 4}]},
        {obj: "carpet", type: "h", row: 3, startColumn: 1, endColumn: 3, actions:[{type:"down", on: 0}]},
        {obj: "bone", row: 5,column:5, downOn: 1},
        {obj: "bone", row: 5,column:1, downOn: 1},
        {obj: "bone", row: 3,column:3, downOn: 4},
        {obj: "bone", row: 3,column:3, downOn: 3},
        {obj: "bone", row: 3,column:3, downOn: 2},
        {obj: "bone", row: 3,column:3, downOn: 1},
        {obj: "key", row: 1,column: 3, downOn: 2},
        {obj: "key", row: 5,column: 3, downOn: 2},
        {obj: "key", row: 3,column: 1, downOn: 2},
        {obj: "key", row: 3,column: 5, downOn: 2},
        {obj: "dragon", row: 0,column:3}
    ]},
    {objects:[
        {obj: "secret", row: 2,column:5},
        {obj: "secret", row: 3,column:2},
        {obj: "star", row: 2,column:2},
        {obj: "star", row: 3,column:2},
        {obj: "star", row: 4,column:6},
        {obj: "button", row: 2,column:3, activate: {row: 2, column: 5}},
        {obj: "button", row: 4,column:2, activate: {row: 3, column: 2}},
        {obj: "carpet", type: "v", column: 2, startRow: 2, endRow: 4},
        {obj: "carpet", type: "h", row: 2, startColumn: 3, endColumn: 6},
        {obj: "carpet", type: "h", row: 2, startColumn: 2, endColumn: 3},
        {obj: "carpet", type: "h", row: 4, startColumn: 2, endColumn: 5},
        {obj: "carpet", type: "h", row: 4, startColumn: 2, endColumn: 4},
        {obj: "carpet", type: "h", row: 4, startColumn: 4, endColumn: 6},
        {obj: "bone", row: 2,column:2, downOn: 1},
        {obj: "bone", row: 2,column:3, downOn: 2},
        {obj: "bone", row: 2,column:4, downOn: 1},
        {obj: "bone", row: 4,column:2, downOn: 2},
        {obj: "bone", row: 4,column:2, downOn: 1},
        {obj: "bone", row: 4,column:4, downOn: 1},
        {obj: "wand", row: 4,column:3, downOn: 1},
        {obj: "dragon", row: 4,column:3},
        {obj: "weight", row: 2,column:6},
        {obj: "weight", row: 4,column:5}
    ]},
    {objects:[
        {obj: "carpet", type: "v", column: 2, startRow: 1, endRow: 3},
        {obj: "carpet", type: "v", column: 5, startRow: 1, endRow: 4},
        {obj: "carpet", type: "h", row: 1, startColumn: 2, endColumn: 5, actions:[{type:"down", on:0}]},
        {obj: "carpet", type: "h", row: 3, startColumn: 2, endColumn: 5, actions:[{type:"down", on:0}]},
        {obj: "carpet", type: "h", row: 4, startColumn: 3, endColumn: 5},
        {obj: "carpet", type: "h", row: 4, startColumn: 2, endColumn: 4},
        {obj: "bone", row: 1,column:2, downOn: 1},
        {obj: "key", row: 1,column:3, downOn: 1},
        {obj: "star", row: 1,column:4, downOn: 1},
        {obj: "secret", row: 1,column:5, downOn: 2},
        {obj: "weight", row: 1,column:5},
        {obj: "weight", row: 2,column:2},
        {obj: "star", row: 2,column:5, downOn: 1},
        {obj: "bone", row: 3,column:2, downOn: 1},
        {obj: "wand", row: 3,column:3, downOn: 1},
        {obj: "star", row: 3,column:4, downOn: 1},
        {obj: "weight", row: 3,column:5},
        {obj: "bone", row: 4,column:3, downOn: 1},
        {obj: "secret_key", row: 4,column:4, downOn: 2},
        {obj: "wand", row: 4,column:4, downOn: 1},
        {obj: "dragon", row: 4,column:4},
        {obj: "button", row: 4,column:5, downOn: 2, activate: {row:1, column: 5}},
        {obj: "weight", row: 4,column:5}
    ]},
    {objects:[
        {obj: "carpet", type: "v", column: 2, startRow: 1, endRow: 3},
        {obj: "carpet", type: "v", column: 3, startRow: 1, endRow: 3},
        {obj: "carpet", type: "v", column: 4, startRow: 1, endRow: 3},
        {obj: "carpet", type: "h", row: 1, startColumn: 2, endColumn: 4},
        {obj: "carpet", type: "h", row: 3, startColumn: 2, endColumn: 4},
        {obj: "secret", row: 1, column: 2, downOn: 2},
        {obj: "weight", row: 1, column: 2},
        {obj: "star", row: 1, column: 3, downOn: 2},
        {obj: "button", row: 1, column: 4, downOn: 2, activate: {row: 1, column: 2}},
        {obj: "weight", row: 1, column: 4},
        {obj: "star", row: 2, column: 2, downOn: 1},
        {obj: "wand", row: 2, column: 3, downOn: 1},
        {obj: "dragon", row: 2, column: 3},
        {obj: "star", row: 2, column: 4, downOn: 1},
        {obj: "button", row: 3, column: 2, downOn: 2, activate: {row: 3, column: 4}},
        {obj: "bone", row: 3, column: 2, downOn: 1},
        {obj: "secret", row: 3, column: 4, downOn: 2},
        {obj: "bone", row: 3, column: 4, downOn: 1}
    ]},
    {objects:[
        {obj: "carpet", type: "h", row: 1, startColumn: 1, endColumn: 5},
        {obj: "carpet", type: "h", row: 4, startColumn: 1, endColumn: 5},
        {obj: "carpet", type: "v", column: 1, startRow: 1, endRow: 4},
        {obj: "carpet", type: "v", column: 5, startRow: 1, endRow: 4},
        {obj: "button", row: 1, column: 1, downOn: 2, activate:{row: 1, column: 2}},
        {obj: "wand", row: 1, column: 1, downOn: 1},
        {obj: "secret", row: 1, column: 2, downOn: 1},
        {obj: "button", row: 1, column: 3, downOn: 1, activate:{row: 4, column: 3}},
        {obj: "star", row: 1, column: 3, downOn: 1},
        {obj: "secret", row: 1, column: 4, downOn: 1},
        {obj: "button", row: 1, column: 5, downOn: 2, activate:{row: 1, column: 4}},
        {obj: "wand", row: 1, column: 5, downOn: 1}, 
        {obj: "star", row: 2, column: 1, downOn: 1},
        {obj: "star", row: 3, column: 5, downOn: 1},
        {obj: "button", row: 4, column: 1, downOn: 2, activate:{row: 4, column: 4}},     
        {obj: "wand", row: 4, column: 1, downOn: 1},
        {obj: "secret", row: 4, column: 2, downOn: 1},
        {obj: "secret", row: 4, column: 3, downOn: 1},
        {obj: "secret", row: 4, column: 4, downOn: 1},
        {obj: "button", row: 4, column: 5, downOn: 2, activate:{row: 4, column: 2}},
        {obj: "wand", row: 4, column: 5, downOn: 1},   
        {obj: "weight", row: 1, column: 3}
    ]},
    {objects:[
        {obj: "carpet", type: "h", row: 1, startColumn: 2, endColumn: 4},
        {obj: "carpet", type: "v", column: 2, startRow: 1, endRow: 4},
        {obj: "carpet", type: "v", column: 4, startRow: 1, endRow: 4},   
        {obj: "carpet", type: "h", row: 4, startColumn: 2, endColumn: 4},   
        {obj: "button", row: 1, column: 2, downOn: 2, activate:{row: 1, column: 3}},   
        {obj: "star", row: 1, column: 2, downOn: 1},   
        {obj: "secret", row: 1, column: 3, downOn: 1},   
        {obj: "weight", row: 1, column: 2},   
        {obj: "star", row: 1, column: 4, downOn: 2},   
        {obj: "dragon", row: 1, column: 4},   
        {obj: "secret", row: 2, column: 2, downOn: 1},   
        {obj: "secret", row: 2, column: 4, downOn: 1},   
        {obj: "wand", row: 3, column: 2, downOn: 1},   
        {obj: "star", row: 3, column: 4, downOn: 1},   
        {obj: "button", row: 4, column: 2, downOn: 2, activate:{row:2, column: 2}},   
        {obj: "bone", row: 4, column: 2, downOn: 1},  
        {obj: "button", row: 4, column: 4, downOn: 2, activate:{row: 2, column: 4}},   
        {obj: "bone", row: 4, column: 4, downOn: 1}     
    ]},
    {objects:[
        {obj: "carpet", type: "h", row: 2, startColumn: 3, endColumn: 4},
        {obj: "carpet", type: "h", row: 3, startColumn: 2, endColumn: 3},
        {obj: "carpet", type: "h", row: 4, startColumn: 3, endColumn: 4},
        {obj: "carpet", type: "v", column: 2, startRow: 1, endRow: 5},  
        {obj: "carpet", type: "v", column: 4, startRow: 1, endRow: 5},  
        {obj: "dragon", row: 1, column: 2},  
        {obj: "secret", row: 2, column: 2, downOn: 1},  
        {obj: "star", row: 2, column: 3, downOn: 1},  
        {obj: "button", row: 2, column: 4, downOn: 2, activate:{row:2, column: 2}},  
        {obj: "bone", row: 2, column: 4, downOn: 1},  
        {obj: "secret", row: 3, column: 4, downOn: 1}, 
        {obj: "button", row: 3, column: 2, downOn: 2, activate:{row:3, column: 4}},  
        {obj: "bone", row: 3, column: 2, downOn: 1},  
        {obj: "star", row: 3, column: 3, downOn: 1},   
        {obj: "secret", row: 4, column: 2, downOn: 1},  
        {obj: "star", row: 4, column: 3, downOn: 1},  
        {obj: "button", row: 4, column: 4, downOn: 2, activate:{row: 4, column: 2}},  
        {obj: "bone", row: 4, column: 4, downOn: 1},  
        {obj: "nail", row: 5, column: 2},  
        {obj: "nail", row: 5, column: 4}
    ]},
    {objects:[
        {obj: "carpet", type: "h", row: 1, startColumn: 2, endColumn: 5},
        {obj: "carpet", type: "h", row: 2, startColumn: 2, endColumn: 5},
        {obj: "carpet", type: "h", row: 3, startColumn: 2, endColumn: 5},
        {obj: "carpet", type: "h", row: 4, startColumn: 2, endColumn: 5},
        {obj: "carpet", type: "v", column: 2, startRow: 1, endRow: 4, actions:[{type:"down", on: 1}, {type:"down", on: 3}]}, 
        {obj: "carpet", type: "v", column: 3, startRow: 1, endRow: 4, actions:[{type:"down", on: 0}, {type:"down", on: 2}]}, 
        {obj: "carpet", type: "v", column: 4, startRow: 1, endRow: 4, actions:[{type:"down", on: 1}, {type:"down", on: 3}]}, 
        {obj: "carpet", type: "v", column: 5, startRow: 1, endRow: 4, actions:[{type:"down", on: 0}, {type:"down", on: 2}]}, 
        {obj: "weight", row: 1, column: 2}, 
        {obj: "wand", row: 1, column: 3, downOn: 2}, 
        {obj: "button", row: 1, column: 5, downOn: 2, activate:{row: 2, column: 4}}, 
        {obj: "secret", row: 2, column: 4, downOn: 2}, 
        {obj: "secret", row: 3, column: 3, downOn: 2}, 
        {obj: "button", row: 4, column: 2, downOn: 2, activate:{row: 3, column: 3}}, 
        {obj: "wand", row: 4, column: 4, downOn: 2}, 
        {obj: "weight", row: 4, column: 5}, 
        {obj: "star", row: 1, column: 2, downOn: 3}, 
        {obj: "star", row: 1, column: 5, downOn: 2}, 
        {obj: "star", row: 2, column: 3, downOn: 2}  
    ]},
    {objects:[
        {obj: "carpet", type: "h", row: 1, startColumn: 2, endColumn: 5},
        {obj: "carpet", type: "v", column: 2, startRow: 1, endRow: 4}, 
        {obj: "carpet", type: "h", row: 4, startColumn: 2, endColumn: 5},
        {obj: "carpet", type: "v", column: 5, startRow: 1, endRow: 4, actions:[{type:"down", on: 0}]},         
        {obj: "button", row: 1, column: 2, downOn: 2, activate: {row: 2, column: 3}},  
        {obj: "weight", row: 1, column: 3},  
        {obj: "wand", row: 1, column: 4, downOn: 1},  
        {obj: "button", row: 1, column: 5, downOn: 2, activate: {row: 2, column: 4}},  
        {obj: "weight", row: 2, column: 2},  
        {obj: "secret", row: 2, column: 3},  
        {obj: "secret", row: 2, column:4},  
        {obj: "weight", row: 2, column: 5}, 
        {obj: "wand", row: 3, column: 2, downOn: 1}, 
        {obj: "secret", row: 3, column:3},  
        {obj: "secret", row: 3, column:4},   
        {obj: "wand", row: 3, column: 5, downOn: 1},  
        {obj: "button", row: 4, column: 2, downOn: 2, activate: {row: 3, column: 3}},  
        {obj: "wand", row: 4, column: 3, downOn: 1},  
        {obj: "weight", row: 4, column: 4},  
        {obj: "button", row: 4, column: 5, downOn: 2, activate: {row: 3, column: 4}},  
        {obj: "star", row: 1, column: 3, downOn: 2},  
        {obj: "star", row: 2, column: 5, downOn: 2}, 
        {obj: "star", row: 4, column: 4, downOn: 2}
    ]},
    {objects:[
        {obj: "carpet", type: "h", row: 2, startColumn: 3, endColumn: 4},
        {obj: "carpet", type: "v", column: 3, startRow: 2, endRow: 3}, 
        {obj: "carpet", type: "h", row: 3, startColumn: 3, endColumn: 4},
        {obj: "carpet", type: "v", column: 4, startRow: 2, endRow: 3, actions:[{type:"down", on: 0}]},             
        {obj: "star", row: 2, column: 3, downOn: 2},  
        {obj: "star", row: 2, column: 4, downOn: 2},
        {obj: "star", row: 3, column: 3, downOn: 2},  
        {obj: "secret_key", row: 3, column: 4, downOn: 2},  
        {obj: "key", row: 3, column: 4, downOn: 1}
    ]}
];function PlayState(mapData)    {
    PlayState.super.constructor.apply(this);
    this.mapData = mapData;
    this.mapGrid = null;
    this.mapObjects = null;
    this.backLayer = null;
    this.midLayer = null;
    this.foreLayer = null;
    this.winLayer = null;
    this.starsSlots = [];
    this.itemsSlots = [];
    this.itemsInSlots = [];
    this.starsCollected = 0;
    this.totalCrystals = 0;
    this.crystalsCollected = 0;
    this.state = 0;
    this.timer = 0;
    this.winState = 0;
    this.shield = null;
    this.levelCompleteText = null;
    this.buttonGotoLevelSelect = null;
    this.buttonMoreGames = null;
    this.buttonRestart = null;
    this.buttonNext = null;
    this.selectLayer = null;
    this.crystalIcon = null;
    this.crystalLabel = null;
    this.buttonSound = null;
    this.backLayerRedrawTimer = 0;
    this.currentOnSelfPlace = 0;
}

extend(PlayState, TrinState);

PlayState.prototype.stateGame = 0;
PlayState.prototype.stateWin = 1;

PlayState.prototype.create = function(){
    PlayState.super.create.apply(this);
    this.mapGrid = new GameGrid();
    this.mapObjects = new TrinLayer();
    
    var objects = this.mapData.objects;
    var objectData = null;
    var object = null;
    var action = null;
    for (var i = 0; i < objects.length; i++)    {
        objectData = objects[i];
        switch (objectData.obj)   {
            case "carpet":
                if (objectData.type === "h")    {
                    object = new HorizontalCarpet(objectData.startColumn, objectData.endColumn, objectData.row);
                    for (var j = objectData.startColumn; j <= objectData.endColumn; j++)    {
                        this.mapGrid.addObject(j, objectData.row, object);
                    }
                    if (objectData.actions !== undefined) {
                        for (var j = 0; j < objectData.actions.length; j++) {
                            action =  objectData.actions[j];
                            switch (action.type)    {
                                case "down":
                                    this.mapGrid.downObject(objectData.startColumn + action.on, objectData.row, object);
                                    break;
                                case "up":
                                    this.mapGrid.upObject(objectData.startColumn + action.on, objectData.row, object);
                                    break;
                            }
                        }
                    }
                }
                if (objectData.type === "v")    {
                    object = new VerticalCarpet(objectData.startRow, objectData.endRow, objectData.column);
                    for (var j = objectData.startRow; j <= objectData.endRow; j++)    {
                        this.mapGrid.addObject(objectData.column, j, object);
                    }
                    if (objectData.actions !== undefined) {
                        for (var j = 0; j < objectData.actions.length; j++) {
                            action =  objectData.actions[j];
                            switch (action.type)    {
                                case "down":
                                    this.mapGrid.downObject(objectData.column, objectData.startRow + action.on, object);
                                    break;
                                case "up":
                                    this.mapGrid.upObject(objectData.column, objectData.startRow + action.on, object);
                                    break;
                            }
                        }
                    }
                }
                break;
            case "secret":
                var cell = this.mapGrid.cells[objectData.row][objectData.column];
                object = new ObjectSecret(cell.x, cell.y);
                this.mapGrid.addObject(objectData.column, objectData.row, object);
                this.totalCrystals++;
                break;
            case "secret_key":
                var cell = this.mapGrid.cells[objectData.row][objectData.column];
                object = new ObjectSecretKey(cell.x, cell.y);
                this.mapGrid.addObject(objectData.column, objectData.row, object);
                this.totalCrystals++;
                break;
            case "button":
                var cell = this.mapGrid.cells[objectData.row][objectData.column];
                object = new ObjectButton(cell.x + this.mapGrid.cellWidth / 2, cell.y + this.mapGrid.cellHeight / 2);
                this.mapGrid.addObject(objectData.column, objectData.row, object);
                object.activate = objectData.activate;
                break;
            case "key":
                var cell = this.mapGrid.cells[objectData.row][objectData.column];
                object = new ObjectKey(cell.x + this.mapGrid.cellWidth / 2, cell.y + this.mapGrid.cellHeight / 2);
                this.mapGrid.addObject(objectData.column, objectData.row, object);
                break;
            case "star":
                var cell = this.mapGrid.cells[objectData.row][objectData.column];
                object = new ObjectStar(cell.x + this.mapGrid.cellWidth / 2, cell.y + this.mapGrid.cellHeight / 2);
                this.mapGrid.addObject(objectData.column, objectData.row, object);
                break;
            case "wand":
                var cell = this.mapGrid.cells[objectData.row][objectData.column];
                object = new ObjectWand(cell.x + this.mapGrid.cellWidth / 2, cell.y + this.mapGrid.cellHeight / 2);
                this.mapGrid.addObject(objectData.column, objectData.row, object);
                break;
            case "weight":
                var cell = this.mapGrid.cells[objectData.row][objectData.column];
                cell.data.objects.press();
                object = new ObjectWeight(cell.x + this.mapGrid.cellWidth / 2, cell.y + this.mapGrid.cellHeight / 2);
                this.mapGrid.addObject(objectData.column, objectData.row, object);
                break;
            case "bone":
                var cell = this.mapGrid.cells[objectData.row][objectData.column];
                object = new ObjectBone(cell.x + this.mapGrid.cellWidth / 2, cell.y + this.mapGrid.cellHeight / 2);
                object.row = objectData.row;
                object.column = objectData.column;
                this.mapGrid.addObject(objectData.column, objectData.row, object);
                break;
            case "dragon":
                var cell = this.mapGrid.cells[objectData.row][objectData.column];
                object = new ObjectDragon(cell.x + this.mapGrid.cellWidth / 2, cell.y + this.mapGrid.cellHeight / 2);
                object.row = objectData.row;
                object.column = objectData.column;
                this.mapGrid.addObject(objectData.column, objectData.row, object);
                break;
            case "nail":
                var cell = this.mapGrid.cells[objectData.row][objectData.column];
                object = new ObjectNail(cell.x + this.mapGrid.cellWidth / 2, cell.y + this.mapGrid.cellHeight / 2);
                this.mapGrid.addObject(objectData.column, objectData.row, object);
                break;
        }
        if (objectData.downOn !== undefined)    {
            for (var j = 0; j < objectData.downOn; j++) {
                this.mapGrid.downObject(objectData.column, objectData.row, object);
            }
        }
        this.mapObjects.add(object);
    }
    
    this.backLayer = new BackLayer();
    this.backLayer.makeDraw(this.mapGrid.x, this.mapGrid.y);
    this.midLayer = new TrinLayer();
    this.foreLayer = new TrinLayer();
    
    this.foreLayer.add(new BlackLayer()); 
    for (var i = 0; i < 3; i++) {
        var s = new TrinSprite("star_slot");
        s.looped = false;
        s.animationSpeed = 0;
        s.reset(80 + i * (8 + s.width), 64);
        s.updateBounds();
        s.center();
        s.origin.x += s.width / 4;
        s.origin.y += s.height / 4;
        s.scale.x = s.scale.y = 0.75;
        this.starsSlots[i] = s;
        this.foreLayer.add(s);
    }       
    
    for (var i = 0; i < 4; i++) {
        var s = new TrinSprite("item_slot");
        s.reset(480 + (i - 2) * (s.width + 16) + 8 + s.width / 2, 640 - s.height / 2);
        s.origin.x = s.width / 2;
        s.origin.y = s.height / 2;
        s.updateBounds();
        this.itemsSlots[i] = s;
        this.midLayer.add(s);
        this.itemsInSlots[i] = null;
    }       
    
    s = new TrinButton("button_moregames_out", "", openMoreGames, true);
    s.center();
    s.reset(944 - s.width / 2, 640 - s.height / 2 - 16);
    this.buttonMoreGames = s;
    
    this.buttonSound = new SoundButton();
    
    s = new TrinButton("button_levels_out", "", function(){
        TrinGame.switchState(new LevelSelectState());
        //TrinSound.prototype.play("Click");
        TrinSound.prototype.stop("DragonSleep");
    });
    s.center();
    s.reset(this.buttonSound.x - 16 - s.width, this.buttonSound.y);
    this.buttonGotoLevelSelect = s;
    
    s = new TrinButton("button_replay_out", "", function(){
        TrinGame.switchState(new PlayState(TrinGame.state.mapData));
        //TrinSound.prototype.play("Click");
        TrinSound.prototype.stop("DragonSleep");
    });
    s.center();
    s.reset(this.buttonGotoLevelSelect.x - s.width - 16, this.buttonSound.y);
    this.buttonRestart = s;
    
    this.foreLayer.add(this.buttonMoreGames);
    this.foreLayer.add(this.buttonGotoLevelSelect);
    this.foreLayer.add(this.buttonRestart);
    //this.foreLayer.add(this.buttonSound);
    
    this.selectLayer = new TrinLayer();
    this.selectLayer.autoReviveChildren = false;
    
    s = new TrinSprite("crystal");
    s.center();
    s.reset(this.itemsSlots[0].x - 100, this.itemsSlots[0].y);
    this.foreLayer.add(s);
    this.crystalIcon = s;
    
    var l = new TrinText("0/" + this.totalCrystals);
    l.setStyle("font", 32, true, "#FFF", "left", "top");
    l.shadow.x = 1;
    l.shadow.y = 1;
    l.shadow.blur = 3;
    l.reset(s.x, s.y);
    this.foreLayer.add(l);
    this.crystalLabel = l;
    
    this.add(this.backLayer);
    this.add(this.mapGrid);
    this.add(this.selectLayer);
    this.add(this.midLayer);
    this.add(this.foreLayer);
    
    if (LevelSelectState.prototype.currentLevel === 0)  {
        var carpet = this.mapGrid.getObjectOnTop(0, 3);
        var  key = this.mapGrid.cells[3][0].data.objects.objects[0];
        var  secret = this.mapGrid.cells[4][3].data.objects.objects[0];
        this.foreLayer.add(new Level1Tutorial(carpet, key, secret));
    }
    this.resized();
};

PlayState.prototype.selectCells = function(f)   {
    this.removeSelection();
    this.selectLayer.revive();
    var l;
    for (var i = 0; i < this.mapGrid.rows; i++) {
        for (var j = 0; j < this.mapGrid.columns; j++) {
            if (f(this.mapGrid.getObjectOnTop(j, i)))   {
                l = this.selectLayer.recycle(TrinSprite);
                if (!l.alive)   {
                    l.revive();
                }   else    {
                    l.switchAnimation("item_target");
                }
                l.reset(this.mapGrid.cells[i][j].x + 2, this.mapGrid.cells[i][j].y + 1);
            }
        }
    }
};

PlayState.prototype.removeSelection = function()   {
    this.selectLayer.kill();
};

PlayState.prototype.update = function(){
    if (this.backLayerRedrawTimer-- <= 0) {
        this.backLayer.makeDraw(this.mapGrid.x, this.mapGrid.y);
        this.backLayerRedrawTimer = 90;
    }
    Carpet.prototype.selectedCarpet     = null;
    Carpet.prototype.selectDistantion   = 9999;
    PlayState.super.update.apply(this);
    switch (this.state) {
        case this.stateGame:
            this.mapObjects.update();
            break;
        case this.stateWin:
            switch (this.winState)  {
                case 0:
                    this.timer++;
                    if (this.timer <= 30)   {
                        this.shield.scale.x = this.shield.scale.y = this.timer / 20;
                    }   else if (this.timer <= 40)  {
                        this.levelCompleteText.alpha += 0.1;
                        this.shield.scale.x = this.shield.scale.y = (20 + (40 - this.timer)) / 20;
                    }
                    if (this.timer >= 40)   {
                        this.levelCompleteText.alpha = 1;
                        this.timer = 0;
                        this.winState++;
                        this.timer = 0;
    
                        var mgb = new TrinButton("logo_sponsor", "", TrinGame.openMoreGamesLink, true);
                        mgb.center();
                        mgb.scale.x = mgb.scale.y = mgb.scaleFactor.x = mgb.scaleFactor.y = 0.5;
                        mgb.x = 480;
                        mgb.y = 6 + mgb.height / 4;
                        this.foreLayer.add(mgb);
                    }
                    break;
                case 1:
                    this.timer++;
                    var dx, dy;
                    var tx, ty;
                    var slot;
                    var onSelfPlace = 0;
                    for (var i = 0; i < 3; i++) {
                        if (this.timer > 5 + i * 10) {
                            tx = 480 + i * 100 - 100;
                            ty = (i % 2 === 1 ? 275  : 250); 
                            slot = this.starsSlots[i];
                            if (slot.x === tx && slot.y === ty)   {
                                onSelfPlace++;
                                continue; 
                            }
                            if (Math.abs(tx - slot.x) >= 8)    {
                                if (tx > slot.x)   {
                                    dx = Math.max(4, (tx - slot.x) / 8);
                                }   else {
                                    dx = Math.min(-4, (tx - slot.x) / 8);                
                                }
                            }   else {
                                dx = tx - slot.x;
                            }
                            if (Math.abs(ty - slot.y) >= 8)    {
                                if (ty > slot.y)   {
                                    dy = Math.max(4, (ty - slot.y) / 8);
                                }   else {
                                    dy = Math.min(-4, (ty - slot.y) / 8);                
                                }
                            }   else {
                                dy = ty - slot.y;
                            }   
                            var kx = dx / (tx - slot.x);
                            var ky = dy / (ty - slot.y);
                            if (kx > ky)    {
                                dy = (ty - slot.y) * kx;
                            }   else {
                                dx = (tx - slot.x) * ky;                
                            }
                            slot.x += dx;
                            slot.y += dy;
                            break;
                        }
                    }
                    if (onSelfPlace > this.currentOnSelfPlace)  {
                        this.currentOnSelfPlace = onSelfPlace;
                        //TrinSound.prototype.play("WinStar" + onSelfPlace);
                    }
                    if (onSelfPlace === 3)  {
                        this.winState ++;
                        this.timer = 0;
                    }
                    break;
                case 2:
                    this.timer++;
                    var buttons = [this.buttonGotoLevelSelect, this.buttonRestart, this.buttonNext];
                    var button;
                    var t = 0;
                    var finished = 0;
                    for (var i = 0; i < buttons.length; i++) {
                        if (this.timer > buttons.length + i * 10)    {
                            t = Math.min(this.timer - (5 + i *10), 40);
                            button = buttons[i];
                            button.active = true;
                            if (t <= 30)   {
                                button.scale.x = button.scale.y = t / 20;
                            }   else if (t <= 40)  {
                                button.scale.x = button.scale.y = (20 + (40 - t)) / 20;
                            }
                            if (t === 40)   {
                                finished++;
                            }
                        }
                    }
                    if (finished === buttons.length)    {
                        this.winState++;
                        this.timer = 0;
                    }
                    break;
            }
            break;
    }
};

PlayState.prototype.starGetted = function(){    
    return this.starsSlots[this.starsCollected++];
};

PlayState.prototype.itemGetted = function(item){    
    for (var i = 0; i < this.itemsInSlots.length; i++)    {
        if (this.itemsInSlots[i] === null)  {
            this.itemsInSlots[i] = item;
            return this.itemsSlots[i];
        }
    }
    return null;
};

PlayState.prototype.useItem = function(item){    
    for (var i = 0; i < this.itemsInSlots.length; i++)    {
        if (this.itemsInSlots[i] === item)  {
            this.itemsInSlots[i] = null;
        }
    }
};

PlayState.prototype.win = function()    {
    //TrinSound.prototype.play("Win");
    this.foreLayer.remove(this.buttonGotoLevelSelect);
    this.foreLayer.remove(this.buttonRestart);
    
    this.mapGrid.active = false;
    this.midLayer.active = false;
    this.state = this.stateWin;
    this.shield = new TrinSprite("victory_shield");
    this.shield.center();
    this.shield.reset(480, 320);
    this.shield.scale.x = this.shield.scale.y = 0;
    
    this.levelCompleteText = new TrinText(TrinGame.texts.levelComplete);
    this.levelCompleteText.setStyle("Arial", 28, true, "#FFF", "center", "middle");
    this.levelCompleteText.reset(480, 170);
    this.levelCompleteText.alpha = 0;
    
    var s;
    
    s = new TrinButton("button_levels_out", "", function(){
        TrinGame.switchState(new LevelSelectState());
        //TrinSound.prototype.play("Click");
        TrinSound.prototype.stop("DragonSleep");
    });
    s.center();
    s.reset(16 + s.width / 2, 624 - s.height / 2);
    s.scale.x = s.scale.y = 0;
    s.active = false;
    this.buttonGotoLevelSelect = s;
    
    s = new TrinButton("button_replay_out", "", function(){
        TrinGame.switchState(new PlayState(TrinGame.state.mapData));
        //TrinSound.prototype.play("Click");
        TrinSound.prototype.stop("DragonSleep");
    });
    s.center();
    s.reset(472 - s.width / 2, 400);
    s.scale.x = s.scale.y = 0;
    s.active = false;
    this.buttonRestart = s;
    
    s = new TrinButton("button_next_out", "", LevelSelectState.prototype.gotoNextLevelState);
    s.center();
    s.reset(488 + s.width / 2, 400);
    s.scale.x = s.scale.y = 0;
    s.active = false;
    this.buttonNext = s;
    
    this.timer = 0;
    
    for (var i = 0; i < 3; i++) {
        this.foreLayer.remove(this.starsSlots[i]);
    }
    this.foreLayer.add(this.shield);
    this.foreLayer.add(this.levelCompleteText);
    this.foreLayer.add(this.buttonGotoLevelSelect);
    this.foreLayer.add(this.buttonNext);
    this.foreLayer.add(this.buttonRestart);
    for (var i = 0; i < 3; i++) {
        this.foreLayer.add(this.starsSlots[i]);
    }
    
    LevelSelectState.prototype.registerStars(this.starsCollected);
    this.resized();
};

PlayState.prototype.crystalCollected = function(){
    this.crystalsCollected++;
    this.crystalLabel.text = this.crystalsCollected + "/" + this.totalCrystals;
    if (this.crystalsCollected >= this.totalCrystals)   {
        this.win();
    }
};

PlayState.prototype.resized = function()    {
    this.buttonMoreGames.x = (TrinGame.camera.x + TrinGame.camera.width) - 16 - this.buttonMoreGames.width / 2;
    this.buttonSound.x = (TrinGame.camera.x + TrinGame.camera.width) - 16 - this.buttonSound.width / 2;
    if (this.state === this.stateGame)  {
        this.buttonGotoLevelSelect.x = this.buttonSound.x - this.buttonSound.width - 16;
        this.buttonRestart.x = this.buttonGotoLevelSelect.x - this.buttonRestart.width - 16;
        for (var i = 0; i < 3; i++) {
            this.starsSlots[i].reset(TrinGame.camera.x + 80 + i * (8 + this.starsSlots[i].width), 64);
        }
    }   else {
        this.buttonGotoLevelSelect.x = TrinGame.camera.x + 16 + this.buttonGotoLevelSelect.width / 2;        
    }

};function GameObject(x, y){
    GameObject.super.constructor.apply(this);
    this.baseSprite = null;
    this.layerSprite = null;
    this.isPostDraw = false;
    this.grid = GameGrid.prototype.instance;
    this.activated = false;
}

extend(GameObject, TrinEntity);

GameObject.prototype.FROM_TOP = 0;
GameObject.prototype.FROM_RIGHT = 1;
GameObject.prototype.FROM_BOTTOM = 2;
GameObject.prototype.FROM_LEFT = 3;

GameObject.prototype.update = function(){
    GameObject.super.update.apply();
    if (this.baseSprite !== null)    {
        this.baseSprite.update();
    }
};

GameObject.prototype.draw = function(camera, cell, layer){
    GameObject.super.draw.apply(this, [camera]);
    if (!this.isPostDraw && this.baseSprite !== null)    {
        this.baseSprite.draw(camera);
    }
};

GameObject.prototype.postDraw = function(camera, cell, layer)   {
    if (this.isPostDraw && this.baseSprite !== null)    {
        this.baseSprite.draw(camera);
    }
};

GameObject.prototype.canRollIn = function(from, posX, posY)   {
    return true;
};

GameObject.prototype.canRollOver = function(from, posX, posY)   {
    return true;
};

GameObject.prototype.canRollOut = function(from, posX, posY)   {
    return true;
};

GameObject.prototype.canRollCarpetSide = function(from, posX, posY)   {
    return true;
};

GameObject.prototype.openObject = function(){
    return false;
};

GameObject.prototype.press = function(){};
GameObject.prototype.unpress = function(){};

GameObject.prototype.activate   = function(onTop){
    this.activated = true;
};
GameObject.prototype.disable    = function(){
    this.activated = false;
};

GameObject.prototype.openByKey  = function(){};function Carpet(){
    Carpet.super.constructor.apply(this);
    this.carpetSprite = null;
    this.startSprite = null;
    this.endSprite = null;
    this.state = this.stateWait;
    this.cutStart = 0;
    this.cutEnd = 0;
    this.maxCut = 0;
    this.minCut = 0;
    this.rollSprite = null;
}

extend(Carpet, GameObject);

Carpet.prototype.carpetColors = ["blue", "green", "purp"];
Carpet.prototype.stateWait          = 0;
Carpet.prototype.stateDraggedStart  = 1;
Carpet.prototype.stateDraggedEnd    = 2;
Carpet.prototype.stateRollStart     = 3;
Carpet.prototype.stateRollEnd       = 4;

Carpet.prototype.selectedCarpet     = null;
Carpet.prototype.selectDistantion   = 9999;

Carpet.prototype.update = function(){
    Carpet.super.update.apply(this);
    this.startSprite.update();
    this.endSprite.update();
};
                 
Carpet.prototype.resetRoll = function(){
    if (this.state === this.stateDraggedStart)  {
        this.state = this.stateRollStart;
    }
    if (this.state === this.stateDraggedEnd)  {
        this.state = this.stateRollEnd;
    }
};function CellLayerStorage() {
    CellLayerStorage.super.constructor.apply(this);
    this.objects = [];
}

extend(CellLayerStorage, TrinBasic);

CellLayerStorage.prototype.add = function(object) {
    for (var i = 0; i < this.objects.length; i++)   {
        if (this.objects[i] === null)   {
            this.objects[i] = object;
            return;
        }
    }
    this.objects[this.objects.length] = object;
};

CellLayerStorage.prototype.remove = function() {
    for (var i = this.objects.length - 1; i >= 0; i--)   {
        if (this.objects[i] !== null)   {
            this.objects[i] = null;
            var o = this.getObjectOnTop();
            if (o !== null && o.openObject() === true) {
                this.remove();
            }
            return;
        }
    }
};

CellLayerStorage.prototype.getObjectOnLayer = function(layer) {
    if (layer < 0 || layer >= this.objects.length)   {
        return null;
    }
    return this.objects[layer];
};

CellLayerStorage.prototype.upObject = function(object) {
    for (var i = 0; i < this.objects.length; i++)   {
        if (this.objects[i] === object)   {
            this.swapObjects(i, i + 1);
            return;
        }
    }
};

CellLayerStorage.prototype.downObject = function(object) {
    for (var i = 0; i < this.objects.length; i++)   {
        if (this.objects[i] === object)   {
            this.swapObjects(i, i - 1);
            return;
        }
    }
};

CellLayerStorage.prototype.swapObjects = function(n1, n2) {
    if (    n1 < 0 || n1 >= this.objects.length || 
            n2 < 0 || n2 >= this.objects.length || 
            this.objects[n1] === null || this.objects[n2] === null) {
        return;
    }
    var tmp = this.objects[n1];
    this.objects[n1] = this.objects[n2];
    this.objects[n2] = tmp;
};

CellLayerStorage.prototype.getObjectOnTop = function(){
    for (var i = this.objects.length - 1; i >= 0; i--)   {
        if (this.objects[i] !== null)   {
            return this.objects[i];
        }
    }
    return null;
};

CellLayerStorage.prototype.canRollIn = function(caller, from, x, y)   {
    for (var i = this.objects.length - 1; i >= 0; i--)   {
        if (this.objects[i] !== null && this.objects[i] !== caller && !this.objects[i].canRollIn(from, x, y))   {
            return false;
        }
    }
    return true;
};

CellLayerStorage.prototype.canRollOver = function(caller, from, x, y)   {
    for (var i = this.objects.length - 1; i >= 0; i--)   {
        if (this.objects[i] !== null && this.objects[i] !== caller && !this.objects[i].canRollOver(from, x, y))   {
            return false;
        }
    }
    return true;
};

CellLayerStorage.prototype.canRollOut = function(caller, from, x, y)   {
    for (var i = this.objects.length - 1; i >= 0; i--)   {
        if (this.objects[i] !== null && this.objects[i] !== caller && !this.objects[i].canRollOut(from, x, y))   {
            return false;
        }
    }
    return true;
};

CellLayerStorage.prototype.canRollCarpetSide = function(caller, from, x, y)   {
    for (var i = this.objects.length - 1; i >= 0; i--)   {
        if (this.objects[i] !== null && this.objects[i] !== caller && !this.objects[i].canRollCarpetSide(from, x, y))   {
            return false;
        }
    }
    return true;
};

CellLayerStorage.prototype.getLayerToDrawOnTop= function(caller, x, y)   {
    var l  = -1;
    if (caller === null)    {
        l = 0;
    }
    for (var i = this.objects.length - 1; i >= 0; i--)   {
        if (this.objects[i] !== null)   {
            if (l === -1)   {
                if (this.objects[i] === caller) {
                    l++;
                }
                continue;
            } 
            if (this.objects[i].layerSprite !== null)   {
                return {sprite: this.objects[i].layerSprite, layersOn: l};
            }
            l++;
        }
    }
    return null;
};

CellLayerStorage.prototype.press = function()   {
    for (var i = 0; i < this.objects.length; i++)   {
        if (this.objects[i] !== null)   {
            this.objects[i].press();
        }
    }
};

CellLayerStorage.prototype.unpress = function()   {
    for (var i = 0; i < this.objects.length; i++)   {
        if (this.objects[i] !== null)   {
            this.objects[i].unpress();
        }
    }
};

CellLayerStorage.prototype.activate = function()   {
    var onTop = true;
    for (var i = this.objects.length - 1; i >= 0; i--)   {
        if (this.objects[i] !== null)   {
            this.objects[i].activate(onTop);
            onTop = false;
        }
    }
};

CellLayerStorage.prototype.disable = function()   {
    for (var i = 0; i < this.objects.length; i++)   {
        if (this.objects[i] !== null)   {
            this.objects[i].disable();
        }
    }
};function HorizontalCarpet(start, end, row){
    HorizontalCarpet.super.constructor.apply(this);
    var color = this.carpetColors[Math.floor(Math.random() * this.carpetColors.length)];
    this.carpetSprite = new TrinSprite("carpet_" + color + "_horiz");
    this.carpetSprite.origin.y = -5;
    this.startSprite = new TrinSprite("carpet_" + color + "_left");
    this.startSprite.looped = false;
    this.startSprite.animationSpeed = 0;
    this.startSprite.origin.y = -4;
    this.startSprite.origin.x = -2;
    this.endSprite = new TrinSprite("carpet_" + color + "_left");
    this.endSprite.origin.y = -4;
    this.endSprite.origin.x = 0;
    this.endSprite.scale.x = -1;
    this.endSprite.looped = false;
    this.endSprite.animationSpeed = 0;
    this.rollSprite = new TrinSprite("carpet_" + color + "_roll_vert");
    this.rollSprite.y = this.grid.cells[row][0].y + this.rollSprite.height / 2 + 2;
    this.rollSprite.center();
    this.start = start;
    this.end = end;
    this.row = row;
    this.left = this.start;
    this.right = this.end;
    this.startX = this.grid.cells[this.row][this.start].x;
    this.endX = this.grid.cells[this.row][this.end].x + this.grid.cellWidth;
    
    this.carpetSprite.abstract = true;
    this.startSprite.abstract = true;
    this.endSprite.abstract = true;
    this.rollSprite.abstract = true;
}

extend(HorizontalCarpet, Carpet);

HorizontalCarpet.prototype.update = function(){
    HorizontalCarpet.super.update.apply(this);
    var hCell = this.grid.hoveredCell;
    this.startSprite.animationSpeed = -30;
    this.endSprite.animationSpeed = -30;
    var m = TrinGame.mouse;
    var mx = m.x + TrinGame.camera.x;
    switch (this.state) {
        case this.stateWait:
            if (hCell !== null && hCell.row === this.row)   {
                if (hCell.column === this.start && this.grid.getObjectOnTop(this.start, this.row) === this)  {
                    this.startSprite.animationSpeed = 30;
                }
                if (hCell.column === this.end && this.grid.getObjectOnTop(this.end, this.row) === this)  {
                    this.endSprite.animationSpeed = 30;
                }
                if (m.isPressed())  {
                    var obj;
                    var d = mx - this.grid.cells[this.row][this.left].x;
                    var rolled = hCell.column === this.left && 
                            (Carpet.prototype.selectedCarpet === null || Carpet.prototype.selectDistantion >= d) && 
                            (this.left === 0 || (this.grid.getObjectOnTop(this.left, this.row) !== this.grid.getObjectOnTop(this.left - 1, this.row))) &&
                            (this.left !== this.start || this.grid.getObjectOnTop(this.left, this.row) === this);
                    if (rolled && this.left === this.right)   {
                        rolled = d < this.grid.cellWidth / 2;
                    }
                    if (rolled)  {
                        this.state = this.stateDraggedStart;
                        this.maxCut = this.grid.cells[this.row][this.right].x - this.startX + 8;
                        for (var i = this.left; i <= this.right; i++)   {
                            obj = this.grid.getObjectOnTop(i, this.row);
                            if (obj !== this) {
                                this.maxCut = this.grid.cells[this.row][i].x - this.startX - 4; 
                                if (this.grid.canRollCarpetSide(this, this.FROM_LEFT, i, this.row))    {
                                    this.maxCut += 12;
                                }
                                this.maxCut = Math.max(this.maxCut, 0);
                                break;
                            }
                        }
                        this.minCut = 0;
                        for (var i = this.left - 1; i >= this.start; i--)   {
                            obj = this.grid.getObjectOnTop(i, this.row)
                            if (obj !== this && obj !== null) {
                                if (!this.grid.canRollIn(this, this.FROM_RIGHT, i, this.row))  {
                                    this.minCut = this.grid.cells[this.row][i].x + this.grid.cellWidth - this.startX;
                                    break;
                                }   else  if (!this.grid.canRollOver(this, this.FROM_RIGHT, i, this.row))  {
                                    this.minCut = this.grid.cells[this.row][i].x + this.grid.cellWidth - this.startX - 8;
                                    break;
                                }   else  if (!this.grid.canRollOut(this, this.FROM_RIGHT, i, this.row))  {
                                    this.minCut = this.grid.cells[this.row][i].x + 8 - this.startX;
                                    break;
                                }
                            }
                            this.minCut = Math.max(this.minCut, 0);
                        }
                        if (Carpet.prototype.selectedCarpet !== null)   {
                            Carpet.prototype.selectedCarpet.resetRoll();
                        }
                        Carpet.prototype.selectedCarpet = this;
                        Carpet.prototype.selectDistantion = d;
                    }
                    d = this.grid.cells[this.row][this.right].x + this.grid.cellWidth - mx;
                    rolled = hCell.column === this.right && 
                            (Carpet.prototype.selectedCarpet === null || Carpet.prototype.selectDistantion >=d) && 
                            (this.right === this.grid.columns - 1 || (this.grid.getObjectOnTop(this.right, this.row) !== this.grid.getObjectOnTop(this.right + 1, this.row))) &&
                            (this.right !== this.end || this.grid.getObjectOnTop(this.right, this.row) === this);
                    if (rolled && this.left === this.right)   {
                        rolled = d <= this.grid.cellWidth / 2;
                    }
                    if (rolled)  {
                        this.state = this.stateDraggedEnd;
                        this.maxCut = this.endX - this.grid.cells[this.row][this.left].x - this.grid.cellWidth+ 8;
                        for (var i = this.right; i >= this.left; i--)   {
                            obj = this.grid.getObjectOnTop(i, this.row);
                            if (obj !== this) {
                                this.maxCut = this.endX - this.grid.cells[this.row][i].x - this.grid.cellWidth - 4; 
                                if (this.grid.canRollCarpetSide(this, this.FROM_RIGHT, i, this.row))    {
                                    this.maxCut += 12;
                                }
                                this.maxCut = Math.max(this.maxCut, 0);
                                break;
                            }
                        }
                        this.minCut = 0;
                        for (var i = this.right + 1; i <= this.end; i++)   {
                            obj = this.grid.getObjectOnTop(i, this.row)
                            if (obj !== this && obj !== null) {
                                if (!this.grid.canRollIn(this, this.FROM_LEFT, i, this.row))  {
                                    this.minCut = this.endX - this.grid.cells[this.row][i].x;
                                    break;
                                }   else  if (!this.grid.canRollOver(this, this.FROM_LEFT, i, this.row))  {
                                    this.minCut = this.endX - this.grid.cells[this.row][i].x - 8;
                                    break;
                                }   else  if (!this.grid.canRollOut(this, this.FROM_LEFT, i, this.row))  {
                                    this.minCut = this.endX - this.grid.cells[this.row][i].x - this.grid.cellWidth + 8;
                                    break;
                                }
                            }
                            this.minCut = Math.max(this.minCut, 0);
                        }
                        if (Carpet.prototype.selectedCarpet !== null)   {
                            Carpet.prototype.selectedCarpet.resetRoll();
                        }
                        Carpet.prototype.selectedCarpet = this;
                        Carpet.prototype.selectDistantion = d;
                    }
                }
            }
        break;
    case this.stateDraggedStart:
        this.cutStart = Math.min(Math.max(this.minCut, mx - this.startX), this.maxCut);
        if (m.isReleased()) {
            this.state = this.stateRollStart;
            var d = Math.floor(this.cutStart / this.grid.cellWidth);
            var obj = this.grid.getObjectOnTop(this.start + d, this.row);
            if (obj !== null && obj !== this && !this.grid.canRollOut(this, this.FROM_RIGHT, this.start + d, this.row))    {
                d += 1;
            }
            var oldLeft = this.left;
            this.left = this.start + d;    
            if (this.left > oldLeft)  {
                for (var i = oldLeft; i < this.left; i++) {
                    this.grid.removeObject(i, this.row);
                }
            }
            if (this.left < oldLeft)  {
                for (var i = this.left; i < oldLeft; i++) {
                    this.grid.addObject(i, this.row, this);
                }
            }
        }
        break;
    case this.stateDraggedEnd:
        this.cutEnd = Math.min(Math.max(this.minCut, this.endX - mx), this.maxCut);
        if (m.isReleased()) {
            this.state = this.stateRollEnd;
            var d = Math.floor(this.cutEnd / this.grid.cellWidth);
            var obj = this.grid.getObjectOnTop(this.end - d, this.row);
            if (obj !== null && obj !== this && !this.grid.canRollOut(this, this.FROM_LEFT, this.end - d, this.row))    {
                d += 1;
            }
            var oldRight = this.right;
            this.right = this.end - d;
            if (this.right > oldRight)  {
                for (var i = oldRight + 1; i <= this.right; i++) {
                    this.grid.addObject(i, this.row, this);
                }
            }
            if (this.right < oldRight)  {
                for (var i = this.right + 1; i <= oldRight; i++) {
                    this.grid.removeObject(i, this.row);
                }
            }
        }
        break;
    case this.stateRollStart:
        var d = (this.startX + this.cutStart) - this.grid.cells[this.row][this.left].x;
        if (d > 0)  {
            this.cutStart -= Math.min(d, 4);
        }   else {
            this.cutStart -= Math.max(d, -4);
        }
        if (d === 0) {
            this.state = this.stateWait;
        }
        break;
    case this.stateRollEnd:
        var d = (this.grid.cells[this.row][this.right].x + this.grid.cellWidth) - (this.endX - this.cutEnd);
        if (d > 0)  {
            this.cutEnd -= Math.min(d, 4);
        }   else {
            this.cutEnd -= Math.max(d, -4);
        }
        if (d === 0) {
            this.state = this.stateWait;
        }
        break;
    }
};

HorizontalCarpet.prototype.draw = function(camera, cell, layer){
    var sprite = this.carpetSprite;
    if (cell.column === this.start) {
        sprite = this.startSprite;
    }
    if (cell.column === this.end) {
        sprite = this.endSprite;
    }
    sprite.x = cell.x;
    sprite.y = cell.y;
    sprite.cutArea.left = 0;
    sprite.cutArea.right = 0;
    var d;
    if (this.cutStart > 0)  {
        d = (sprite.x + sprite.width) - this.startX - this.cutStart;
        if (sprite.scale.x === -1)  {
            if (d < sprite.width)  {
                sprite.cutArea.right = sprite.width - d;
                sprite.x += sprite.width - d;
            }
        }   else if (d < sprite.width)  {
            sprite.cutArea.left = sprite.width - d;
        }
    }
    if (this.cutEnd > 0)  {
        d = this.endX - sprite.x - this.cutEnd;
        if (sprite.scale.x === -1)  {
            if (d < sprite.width)  {
                sprite.cutArea.left = sprite.width - d;
                sprite.x -= this.grid.cellWidth - d;
            }
        }   else if (d < sprite.width)  {
            sprite.cutArea.right = sprite.width - d;
        }
    }
    sprite.draw(camera);
    
    var l = this.grid.getLayerToDrawOnTop(this, cell.column, cell.row);
    if (l !== null) {
        sprite = l.sprite;
        sprite.cutArea.left = (this.state !== this.stateWait ? Math.max(this.startX + this.cutStart - (sprite.x - sprite.horizontalD), 0) : 0);
        sprite.cutArea.top = 0;
        sprite.cutArea.right = (this.state !== this.stateWait ? Math.max((sprite.x + sprite.width - sprite.horizontalD) - (this.endX - this.cutEnd), 0) : 0);
        sprite.cutArea.bottom = 0;
        Math.max(0, sprite.alpha = 0.25 - l.layersOn * 0.05);
        sprite.draw(camera);
    }
};

HorizontalCarpet.prototype.postDraw = function(camera, cell, layer)    {
    var sprite;
    var d;
    var n;
    switch (this.state) {
        case (this.stateDraggedStart):  {
            d = Math.max(0, this.grid.cells[this.row][this.left].x - this.startX - this.cutStart);
            n = Math.ceil(d / this.grid.cellWidth);
            for (var i = 1; i <= n; i++) {
                sprite = this.carpetSprite;
                if (this.left - i === this.start) {
                    sprite = this.startSprite;
                }
                sprite.x = this.grid.cells[this.row][this.left - i].x;
                if (i < n)  {
                    sprite.cutArea.left = 0;
                }   else {
                    sprite.cutArea.left = this.grid.cellWidth - Math.max(d - 1, 0) % this.grid.cellWidth;
                }
                sprite.draw(camera);
                
                var l = this.grid.getLayerToDrawOnTop(null, this.left - i, this.row);
                if (l !== null) {
                    sprite = l.sprite;
                    sprite.cutArea.left = Math.min(Math.max(this.startX + this.cutStart - (sprite.x - sprite.horizontalD), 0), sprite.width);
                    sprite.cutArea.top = 0;
                    sprite.cutArea.right = 0;
                    sprite.cutArea.bottom = 0;
                    Math.max(0, sprite.alpha = 0.25 - l.layersOn * 0.05);
                    sprite.draw(camera);
                }
            }
        }
        break;
        case (this.stateDraggedEnd):  {
            d = Math.max(0, (this.endX - this.cutEnd) - (this.grid.cells[this.row][this.right].x + this.grid.cellWidth));
            n = Math.ceil(d / this.grid.cellWidth);
            for (var i = 1; i <= n; i++) {
                sprite = this.carpetSprite;
                if (i + this.right === this.end) {
                    sprite = this.endSprite;
                }
                sprite.x = this.grid.cells[this.row][this.right + i].x;
                if (i < n)  {
                    sprite.cutArea.right = 0;
                    if (sprite.scale.x === -1)  {
                        sprite.cutArea.left = 0;
                    }
                }   else {
                    sprite.cutArea.right = this.grid.cellWidth - Math.max(d - 1, 0) % this.grid.cellWidth;
                    if (sprite.scale.x === -1)  {
                        sprite.cutArea.right = 0;
                        sprite.cutArea.left = this.grid.cellWidth - Math.max(d, 0) % (this.grid.cellWidth + 1);
                        sprite.x -=sprite.cutArea.left;
                    }
                }
                sprite.draw(camera);
                
                var l = this.grid.getLayerToDrawOnTop(null, this.right + i, this.row);
                if (l !== null) {
                    sprite = l.sprite;
                    sprite.cutArea.left = 0;
                    sprite.cutArea.top = 0;
                    sprite.cutArea.right = Math.min(Math.max((sprite.x + sprite.width - sprite.horizontalD) - (this.endX - this.cutEnd), 0), sprite.width);
                    sprite.cutArea.bottom = 0;
                    Math.max(0, sprite.alpha = 0.25 - l.layersOn * 0.05);
                    sprite.draw(camera);
                }
            }
        }
        break;
        case (this.stateRollStart): 
            var d = (this.left - this.start) * this.grid.cellWidth - this.cutStart;
            if (d > 0)   {
                sprite = this.carpetSprite;
                sprite.cutArea.right = 0;
                sprite.cutArea.left = this.grid.cellWidth - d;
                sprite.x = this.grid.cells[this.row][this.left - 1].x;
                sprite.draw(camera);
                
                var l = this.grid.getLayerToDrawOnTop(null, this.left - 1, this.row);
                if (l !== null) {
                    sprite = l.sprite;
                    sprite.cutArea.left = this.grid.cellWidth - d;
                    sprite.cutArea.top = 0;
                    sprite.cutArea.right = 0;
                    sprite.cutArea.bottom = 0;
                    Math.max(0, sprite.alpha = 0.25 - l.layersOn * 0.05);
                    sprite.draw(camera);
                }
            }

        break;
        case (this.stateRollEnd): 
            var d = (this.end - this.right) * this.grid.cellWidth - this.cutEnd;
            if (d > 0)   {
                sprite = this.carpetSprite;
                sprite.cutArea.right = this.grid.cellWidth - d;
                sprite.cutArea.left = 0;
                sprite.x = this.grid.cells[this.row][this.right + 1].x;
                sprite.draw(camera);
                
                var l = this.grid.getLayerToDrawOnTop(null, this.right + 1, this.row);
                if (l !== null) {
                    sprite = l.sprite;
                    sprite.cutArea.left = 0;
                    sprite.cutArea.top = 0;
                    sprite.cutArea.right = this.grid.cellWidth - d;
                    sprite.cutArea.bottom = 0;
                    Math.max(0, sprite.alpha = 0.25 - l.layersOn * 0.05);
                    sprite.draw(camera);
                }
            } 
        break;
    }
    if (cell.column === this.right)   {
        sprite = this.rollSprite;
        if (this.cutStart > 4)   {
            sprite.x = this.startX + this.cutStart + 4;
            sprite.draw(camera);
        }
        if (this.cutEnd > 4)   {
            sprite.x = this.endX - this.cutEnd - 4;
            sprite.draw(camera);
        }
    }  
};

HorizontalCarpet.prototype.canRollIn = function(from, posX, posY)   {
    switch (from)   {
        case this.FROM_TOP:
        case this.FROM_BOTTOM:
            return true;
            break;
        case this.FROM_LEFT:
            return (posX !== this.left || this.left === this.start);
            break;
        case this.FROM_RIGHT:
            return (posX !== this.right || this.right === this.end);
            break;
    }
};

HorizontalCarpet.prototype.canRollOver = function(from, posX, posY)   {
    return true;
};

HorizontalCarpet.prototype.canRollOut = function(from, posX, posY)   {
    switch (from)   {
        case this.FROM_TOP:
        case this.FROM_BOTTOM:
            return true;
            break;
        case this.FROM_LEFT:
            return (posX !== this.right || this.right === this.end);
            break;
        case this.FROM_RIGHT:
            return (posX !== this.left || this.left === this.start);
            break;
    }
};

HorizontalCarpet.prototype.canRollCarpetSide = function(from, posX, posY)   {
    switch (from)   {
        case this.FROM_TOP:
        case this.FROM_BOTTOM:
            return true;
            break;
        case this.FROM_LEFT:
            return (posX !== this.left || (this.left === this.start && this.grid.getObjectOnTop(posX, posY) !== this));
            break;
        case this.FROM_RIGHT:
            return (posX !== this.right || (this.right === this.end && this.grid.getObjectOnTop(posX, posY) !== this));
            break;
    }
};function VerticalCarpet(start, end, column){
    VerticalCarpet.super.constructor.apply(this);
    var color = this.carpetColors[Math.floor(Math.random() * this.carpetColors.length)];
    this.carpetSprite = new TrinSprite("carpet_" + color + "_vert");
    this.carpetSprite.origin.x = -6;
    this.startSprite = new TrinSprite("carpet_" + color + "_top");
    this.startSprite.origin.x = -6;
    this.startSprite.origin.y = -1;
    this.startSprite.looped = false;
    this.startSprite.animationSpeed = 0;
    this.endSprite = new TrinSprite("carpet_" + color + "_down");
    this.endSprite.origin.x = -6;
    this.endSprite.looped = false;
    this.endSprite.animationSpeed = 0;
    this.rollSprite = new TrinSprite("carpet_" + color + "_roll_horiz");
    this.rollSprite.center();
    this.rollSprite.x = this.grid.cells[0][column].x + this.rollSprite.width/ 2 + 4;
    this.start = start;
    this.end = end;
    this.column = column;
    this.top = this.start;
    this.bottom = this.end;
    this.startY = this.grid.cells[this.start][this.column].y;
    this.endY = this.grid.cells[this.end][this.column].y + this.grid.cellHeight;
    this.carpetSprite.abstract = true;
    this.startSprite.abstract = true;
    this.endSprite.abstract = true;
    this.rollSprite.abstract = true;
}

extend(VerticalCarpet, Carpet);

VerticalCarpet.prototype.update = function(){
    VerticalCarpet.super.update.apply(this);
    var hCell = this.grid.hoveredCell;
    this.startSprite.animationSpeed = -30;
    this.endSprite.animationSpeed = -30;
    var m = TrinGame.mouse;
    switch (this.state) {
        case this.stateWait:
            if (hCell !== null && hCell.column === this.column)   {
                if (hCell.row === this.start && this.grid.getObjectOnTop(this.column, this.start) === this)  {
                    this.startSprite.animationSpeed = 30;
                }
                if (hCell.row === this.end && this.grid.getObjectOnTop(this.column, this.end) === this)  {
                    this.endSprite.animationSpeed = 30;
                }
                if (m.isPressed())  {
                    var obj;
                    var d = m.y - this.grid.cells[this.top][this.column].y;
                    var rolled = hCell.row === this.top && 
                            (Carpet.prototype.selectedCarpet === null || Carpet.prototype.selectDistantion >= d) && 
                            (this.top === 0 || (this.grid.getObjectOnTop(this.column, this.top) !== this.grid.getObjectOnTop(this.column, this.top - 1))) &&
                            (this.top !== this.start || this.grid.getObjectOnTop(this.column, this.top) === this);
                    if (rolled && this.top === this.bottom)   {
                        rolled = d < this.grid.cellHeight / 2;
                    }
                    if (rolled)  {
                        this.state = this.stateDraggedStart;
                        this.maxCut = this.grid.cells[this.bottom][this.column].y - this.startY + 8;
                        for (var i = this.top; i <= this.bottom; i++)   {
                            obj = this.grid.getObjectOnTop(this.column, i);
                            if (obj !== this) {
                                this.maxCut = this.grid.cells[i][this.column].y - this.startY - 4; 
                                if (this.grid.canRollCarpetSide(this, this.FROM_TOP, this.column, i))    {
                                    this.maxCut += 8;
                                }
                                this.maxCut = Math.max(this.maxCut, 0);
                                break;
                            }
                        }
                        this.minCut = 0;
                        for (var i = this.top - 1; i >= this.start; i--)   {
                            obj = this.grid.getObjectOnTop(this.column, i)
                            if (obj !== this && obj !== null) {
                                if (!this.grid.canRollIn(this, this.FROM_BOTTOM, this.column, i))  {
                                    this.minCut = this.grid.cells[i][this.column].y + this.grid.cellHeight - this.startY; 
                                    break;
                                }   else  if (!this.grid.canRollOver(this, this.FROM_BOTTOM, this.column, i))  {
                                    this.minCut = this.grid.cells[i][this.column].y + this.grid.cellHeight - this.startY - 8; 
                                    break;
                                }   else  if (!this.grid.canRollOut(this, this.FROM_BOTTOM, this.column, i))  {
                                    this.minCut = this.grid.cells[i][this.column].y - this.startY + 8; 
                                    break;
                                }
                            }
                            this.minCut = Math.max(this.minCut, 0);
                        }
                        if (Carpet.prototype.selectedCarpet !== null)   {
                            Carpet.prototype.selectedCarpet.resetRoll();
                        }
                        Carpet.prototype.selectedCarpet = this;
                        Carpet.prototype.selectDistantion = d;
                    }
                    d = this.grid.cells[this.bottom][this.column].y + this.grid.cellHeight - m.y
                    rolled = hCell.row === this.bottom && 
                            (Carpet.prototype.selectedCarpet === null || Carpet.prototype.selectDistantion >= d) && 
                            (this.bottom === this.grid.rows - 1 || (this.grid.getObjectOnTop(this.column, this.bottom) !== this.grid.getObjectOnTop(this.column, this.bottom + 1))) &&
                            (this.bottom !== this.end || this.grid.getObjectOnTop(this.column, this.bottom) === this);
                    if (rolled && this.top === this.bottom)   {
                        rolled = d < this.grid.cellHeight / 2;
                    }
                    if (rolled)  {
                        this.state = this.stateDraggedEnd;
                        this.maxCut = this.endY - this.grid.cells[this.top][this.column].y - this.grid.cellHeight+ 8;
                        for (var i = this.bottom; i >= this.top; i--)   {
                            obj = this.grid.getObjectOnTop(this.column, i);
                            if (obj !== this) {
                                this.maxCut = this.endY - this.grid.cells[i][this.column].y - this.grid.cellHeight - 4; 
                                if (this.grid.canRollCarpetSide(this, this.FROM_BOTTOM, this.column, i))    {
                                    this.maxCut += 8;
                                }
                                this.maxCut = Math.max(this.maxCut, 0);
                                break;
                            }
                        }
                        for (var i = this.bottom + 1; i <= this.end; i++) {
                            obj = this.grid.getObjectOnTop(this.column, i)
                            if (obj !== this && obj !== null) {
                                if (!this.grid.canRollIn(this, this.FROM_TOP, this.column, i))  {
                                    this.minCut = this.endY - this.grid.cells[i][this.column].y; 
                                    break;
                                }   else  if (!this.grid.canRollOver(this, this.FROM_TOP, this.column, i))  {
                                    this.minCut = this.endY - this.grid.cells[i][this.column].y - 8;  
                                    break;
                                }   else  if (!this.grid.canRollOut(this, this.FROM_TOP, this.column, i))  {
                                    this.minCut = this.endY - this.grid.cells[i][this.column].y - this.grid.cellHeight + 8;  
                                    break;
                                }
                            }
                            this.minCut = Math.max(this.minCut, 0);
                        }
                        if (Carpet.prototype.selectedCarpet !== null)   {
                            Carpet.prototype.selectedCarpet.resetRoll();
                        }
                        Carpet.prototype.selectedCarpet = this;
                        Carpet.prototype.selectDistantion = d;
                    }
                }
            }
        break;
    case this.stateDraggedStart:
        this.cutStart = Math.min(Math.max(this.minCut, m.y - this.startY), this.maxCut);
        if (m.isReleased()) {
            this.state = this.stateRollStart;
            var d = Math.floor(this.cutStart / this.grid.cellHeight);
            var obj = this.grid.getObjectOnTop(this.column, this.start + d);
            if (obj !== null && obj !== this && !this.grid.canRollOut(this, this.FROM_BOTTOM, this.column, this.start + d))    {
                d += 1;
            }
            var oldTop = this.top;
            this.top = this.start + d;    
            if (this.top > oldTop)  {
                for (var i = oldTop; i < this.top; i++) {
                    this.grid.removeObject(this.column, i);
                }
            }
            if (this.top < oldTop)  {
                for (var i = this.top; i < oldTop; i++) {
                    this.grid.addObject(this.column, i, this);
                }
            }
        }
        break;
    case this.stateDraggedEnd:
        this.cutEnd = Math.min(Math.max(this.minCut, this.endY - m.y), this.maxCut);
        if (m.isReleased()) {
            this.state = this.stateRollEnd;
            var d = Math.floor(this.cutEnd / this.grid.cellHeight);
            var obj = this.grid.getObjectOnTop(this.column, this.end - d);
            if (obj !== null && obj !== this && !this.grid.canRollOut(this, this.FROM_TOP, this.column, this.end - d))    {
                d += 1;
            }
            var oldBottom = this.bottom;
            this.bottom = this.end - d;
            if (this.bottom > oldBottom)  {
                for (var i = oldBottom + 1; i <= this.bottom; i++) {
                    this.grid.addObject(this.column, i, this);
                }
            }
            if (this.bottom < oldBottom)  {
                for (var i = this.bottom + 1; i <= oldBottom; i++) {
                    this.grid.removeObject(this.column, i);
                }
            }
        }
        break;
    case this.stateRollStart:
        var d = (this.startY + this.cutStart) - this.grid.cells[this.top][this.column].y;
        if (d > 0)  {
            this.cutStart -= Math.min(d, 4);
        }else{
            this.cutStart -= Math.max(d, -4);
        }
        if (d === 0) {
            this.state = this.stateWait;
        }
        break;
    case this.stateRollEnd:
        var d = (this.grid.cells[this.bottom][this.column].y + this.grid.cellHeight) - (this.endY - this.cutEnd);
        if (d > 0)  {
            this.cutEnd -= Math.min(d, 4);
        }else{
            this.cutEnd -= Math.max(d, -4);
        }
        if (d === 0) {
            this.state = this.stateWait;
        }
        break;
    }
};

VerticalCarpet.prototype.draw = function(camera, cell, layer){
    var sprite = this.carpetSprite;
    if (cell.row === this.start) {
        sprite = this.startSprite;
    }
    if (cell.row === this.end) {
        sprite = this.endSprite;
    }
    sprite.x = cell.x;
    sprite.y = cell.y;
    sprite.cutArea.top = 0;
    sprite.cutArea.bottom = 0;
    var d;
    if (this.cutStart > 0)  {
        d = (sprite.y + sprite.height) - this.startY - this.cutStart;
        if (d < sprite.height)  {
            sprite.cutArea.top = sprite.height - d;
        }
    }
    if (this.cutEnd > 0)  {
        d = this.endY - sprite.y - this.cutEnd;
        if (d < sprite.height)  {
            sprite.cutArea.bottom = sprite.height - d;
        }
    }
    sprite.draw(camera);
    
    var l = this.grid.getLayerToDrawOnTop(this, cell.column, cell.row);
    if (l !== null) {
        sprite = l.sprite;
        sprite.cutArea.left = 0;
        sprite.cutArea.top = (this.state !== this.stateWait ? Math.max(this.startY + this.cutStart - (sprite.y - sprite.verticalD), 0) : 0);
        sprite.cutArea.right = 0;
        sprite.cutArea.bottom = (this.state !== this.stateWait ? Math.max((sprite.y + sprite.height- sprite.verticalD) - (this.endY - this.cutEnd), 0) : 0);;
        sprite.alpha = Math.max(0, 0.25 - l.layersOn * 0.05);
        sprite.draw(camera);
    }
};

VerticalCarpet.prototype.postDraw = function(camera, cell, layer)    {
    var sprite;
    var d;
    var n;
    switch (this.state) {
        case (this.stateDraggedStart):  {
            d = Math.max(0, this.grid.cells[this.top][this.column].y - this.startY - this.cutStart);
            n = Math.ceil(d / this.grid.cellHeight);
            for (var i = 1; i <= n; i++) {
                sprite = this.carpetSprite;
                if (this.top - i === this.start) {
                    sprite = this.startSprite;
                }
                sprite.y = this.grid.cells[this.top - i][this.column].y;
                if (i < n)  {
                    sprite.cutArea.top = 0;
                }   else {
                    sprite.cutArea.top = this.grid.cellHeight - Math.max(d - 1, 0) % this.grid.cellHeight;
                }
                sprite.draw(camera);
                
                var l = this.grid.getLayerToDrawOnTop(null, this.column, this.top - i);
                if (l !== null) {
                    sprite = l.sprite;
                    sprite.cutArea.left = 0;
                    sprite.cutArea.top = Math.min(Math.max(this.startY + this.cutStart - (sprite.y - sprite.verticalD), 0), sprite.width);
                    sprite.cutArea.right = 0;
                    sprite.cutArea.bottom = 0;
                    sprite.alpha = Math.max(0, 0.25 - l.layersOn * 0.05);
                    sprite.draw(camera);
                }
            }
        }
        break;
        case (this.stateDraggedEnd):  {
            d = Math.max(0, (this.endY - this.cutEnd) - (this.grid.cells[this.bottom][this.column].y + this.grid.cellHeight));
            n = Math.ceil(d / this.grid.cellHeight);
            for (var i = 1; i <= n; i++) {
                sprite = this.carpetSprite;
                if (i + this.bottom === this.end) {
                    sprite = this.endSprite;
                }
                sprite.y = this.grid.cells[this.bottom + i][this.column].y;
                if (i < n)  {
                    sprite.cutArea.bottom = 0;
                }   else {
                    sprite.cutArea.bottom = this.grid.cellHeight - Math.max(d - 1, 0) % this.grid.cellHeight;
                }
                sprite.draw(camera);
                
                var l = this.grid.getLayerToDrawOnTop(null, this.column, this.bottom + i);
                if (l !== null) {
                    sprite = l.sprite;
                    sprite.cutArea.left = 0;
                    sprite.cutArea.top = 0;
                    sprite.cutArea.right = 0;
                    sprite.cutArea.bottom = Math.min(Math.max((sprite.y + sprite.height - sprite.verticalD) - (this.endY - this.cutEnd), 0), sprite.height);
                    sprite.alpha = Math.max(0, 0.25 - l.layersOn * 0.05);
                    sprite.draw(camera);
                }
            }
        }
        break;
        case (this.stateRollStart): 
            var d = (this.top - this.start) * this.grid.cellHeight - this.cutStart;
            if (d > 0)   {
                sprite = this.carpetSprite;
                sprite.cutArea.bottom= 0;
                sprite.cutArea.top = this.grid.cellHeight- d;
                sprite.y = this.grid.cells[this.top - 1][this.column].y;
                sprite.draw(camera);
                
                var l = this.grid.getLayerToDrawOnTop(null, this.column, this.top - 1);
                if (l !== null) {
                    sprite = l.sprite;
                    sprite.cutArea.left = 0;
                    sprite.cutArea.top = this.grid.cellHeight - d;
                    sprite.cutArea.right = 0;
                    sprite.cutArea.bottom = 0;
                    sprite.alpha = Math.max(0, 0.25 - l.layersOn * 0.05);
                    sprite.draw(camera);
                }
            }
        break;
        case (this.stateRollEnd): 
            var d = (this.end - this.bottom) * this.grid.cellHeight- this.cutEnd;
            if (d > 0)   {
                sprite = this.carpetSprite;
                sprite.cutArea.bottom = this.grid.cellHeight - d;
                sprite.cutArea.top = 0;
                sprite.y = this.grid.cells[this.bottom][this.column].y + this.grid.cellHeight;
                sprite.draw(camera);
                
                var l = this.grid.getLayerToDrawOnTop(null, this.column, this.bottom + 1);
                if (l !== null) {
                    sprite = l.sprite;
                    sprite.cutArea.left = 0;
                    sprite.cutArea.top = 0;
                    sprite.cutArea.right = 0;
                    sprite.cutArea.bottom = this.grid.cellHeight - d;
                    sprite.alpha = Math.max(0, 0.25 - l.layersOn * 0.05);
                    sprite.draw(camera);
                }
            }
        break;
    }
    if (cell.row === this.bottom)   {
        sprite = this.rollSprite;
        if (this.cutStart > 4)  {
            sprite.y = this.startY + this.cutStart+ 4;
            sprite.draw(camera);
        }
        if (this.cutEnd > 4)    {
            sprite.y = this.endY - this.cutEnd - 4;
            sprite.draw(camera);
        }
    }  
};

VerticalCarpet.prototype.canRollFrom = function(side)   {
    return (side === this.FROM_LEFT || side === this.FROM_RIGHT|| 
           (side === this.FROM_TOP && this.top === this.start) || 
           (side === this.FROM_BOTTOM && this.bottom === this.end));
};

VerticalCarpet.prototype.canRollIn = function(from, posX, posY)   {
    switch (from)   {
        case this.FROM_LEFT:
        case this.FROM_RIGHT:
            return true;
            break;
        case this.FROM_TOP:
            return (posY !== this.top || this.top === this.start);
            break;
        case this.FROM_BOTTOM:
            return (posY !== this.bottom || this.bottom === this.end);
            break;
    }
};

VerticalCarpet.prototype.canRollOver = function(from, posX, posY)   {
    return true;
};

VerticalCarpet.prototype.canRollOut = function(from, posX, posY)   {
    switch (from)   {
        case this.FROM_LEFT:
        case this.FROM_RIGHT:
            return true;
            break;
        case this.FROM_TOP:
            return (posY !== this.bottom || this.bottom === this.end);
            break;
        case this.FROM_BOTTOM:
            return (posY !== this.top || this.top === this.start);
            break;
    }
};

VerticalCarpet.prototype.canRollCarpetSide = function(from, posX, posY)   {
    switch (from)   {
        case this.FROM_LEFT:
        case this.FROM_RIGHT:
            return true;
            break;
        case this.FROM_TOP:
            return posY !== this.top || (this.top === this.start && this.grid.getObjectOnTop(posX, posY) !== this);
            break;
        case this.FROM_BOTTOM:
            return posY !== this.bottom || (this.bottom === this.end && this.grid.getObjectOnTop(posX, posY) !== this);
            break;
    }
};function BlackLayer()   {
    BlackLayer.super.constructor.apply(this, [960, 640]);
    this.makeDraw();
}

extend(BlackLayer, TrinGroup);

BlackLayer.prototype.makeDraw = function()  {
    var s = new TrinSprite("gradient_left");
    var i = 0;
    s.x = -1;
    if (TrinGame.device === TrinUtil.prototype.DEVICE_ANDROID){
        s.alpha = 0.5;
    }
    while (i <= 640)    {
        s.y = i;
        s.draw(this.camera);
        i++;
    }
    s.scale.x = -1;
    s.x = 961 - s.width;
    i = 0;
    while (i <= 640)    {
        s.y = i;
        s.draw(this.camera);
        i++;
    }
};function BackLayer()   {
    BackLayer.super.constructor.apply(this, [960, 640]);
}

extend(BackLayer, TrinGroup);

BackLayer.prototype.makeDraw = function(xOffset, yOffset)  {
    var s = new TrinSprite("bcg_scene_top");
    s.scale.x = 960 / 920;
    s.x = -1;
    s.draw(this.camera);
    
    s = new TrinSprite("tile_A");
    while (xOffset > 0) {
        xOffset -= s.width - 2;
    }
    var left = xOffset;
    var prevTileName = "tile_A";
    var tileName;
    while (yOffset < 640)   {
        xOffset = left;
        tileName = (prevTileName === "tile_A" ? "tile_B" : "tile_A");
        prevTileName = tileName;
        while (xOffset < 960)   {
            tileName = (tileName === "tile_A" ? "tile_B" : "tile_A");
            s.switchAnimation(tileName);
            s.reset(xOffset, yOffset);
            s.draw(this.camera);
            xOffset += s.width - 2;
        }
        yOffset += s.height - 2;
    }
    
    s.switchAnimation("decor_left");
    s.reset(-1, 74);
    s.draw(this.camera);
    
    s.switchAnimation("decor_right");
    s.reset(961-s.width, 38);
    s.draw(this.camera);
};function UsableObject(x, y) {
    UsableObject.super.constructor.apply(this);
    this.state = 0;
    this.slot = null;
    this.autoPickup = true;
    this.canPickup = true;
}

extend(UsableObject, GameObject);

UsableObject.prototype.stateWait = 0;
UsableObject.prototype.stateFly = 1;
UsableObject.prototype.stateWaitInSlot = 2;
UsableObject.prototype.stateSelectTarget = 3;
UsableObject.prototype.stateUsed = 4;

UsableObject.prototype.update = function(){
    UsableObject.super.update.apply(this);
    switch(this.state)    {
        case this.stateWait:
            if (TrinGame.mouse.isPressed() && this.canPickup)   {
                var cell = this.grid.hoveredCell;
                if (cell !== null && cell.data.objects.getObjectOnTop() === this)    {
                    this.slot = TrinGame.state.itemGetted(this);
                    if (this.slot !== null) {
                        this.state = this.stateFly;
                        TrinGame.state.midLayer.add(this.baseSprite);
                        cell.data.objects.remove();
                        //TrinSound.prototype.play("GetItem");
                    }
                }
            }
            break;
        case this.stateFly:
            var dx, dy;
            if (Math.abs(this.slot.x - this.baseSprite.x) >= 8)    {
                if (this.slot.x > this.baseSprite.x)   {
                    dx = Math.max(4, (this.slot.x - this.baseSprite.x) / 8);
                }   else {
                    dx = Math.min(-4, (this.slot.x - this.baseSprite.x) / 8);                
                }
            }   else {
                dx = this.slot.x - this.baseSprite.x;
            }
            if (Math.abs(this.slot.y - this.baseSprite.y) >= 8)    {
                if (this.slot.y >this.baseSprite.y)   {
                    dy = Math.max(4, (this.slot.y - this.baseSprite.y) / 8);
                }   else {
                    dy = Math.min(-4, (this.slot.y - this.baseSprite.y) / 8);                
                }
            }   else {
                dy = this.slot.y - this.baseSprite.y;
            }
            var distX = (this.slot.x - this.baseSprite.x);
            var distY = (this.slot.y - this.baseSprite.y);
            var kx = dx / (distX === 0 ? 0.001 : distX);
            var ky = dy / (distY === 0 ? 0.001 : distY);
            if (kx < ky && kx > 0)    {
                dy = distY * kx;
            }   else if (ky > 0) {
                dx = distX * ky;                
            }
            this.baseSprite.x += dx;
            this.baseSprite.y += dy;
            if (this.baseSprite.x === this.slot.x && this.baseSprite.y === this.slot.y)   {
                this.state = this.stateWaitInSlot; 
            }
            break;
        case this.stateWaitInSlot:
            var  m = TrinGame.mouse;
            if (this.slot.bounds.intersects(m.x + TrinGame.camera.x, m.y))  {
                this.baseSprite.scale.x = this.baseSprite.scale.y = 1.2;
                if (m.isPressed())  {
                    this.state = this.stateSelectTarget;
                    TrinGame.state.selectCells(this.isValidTarget);
                }
            }   else {
                this.baseSprite.scale.x = this.baseSprite.scale.y = 1;
            }
            break;
        case this.stateSelectTarget:
            var  m = TrinGame.mouse;
            this.baseSprite.x = m.x + TrinGame.camera.x;
            this.baseSprite.y = m.y;
            if (m.isReleased()) {
                var cell = this.grid.hoveredCell;
                if (cell !== null)  {
                    var target = this.grid.hoveredCell.data.objects.getObjectOnTop();
                    if (this.isValidTarget(target))  {
                        this.useOn(cell, target);
                    }   else    {
                        this.state = this.stateFly;                      
                    }
                }   else    {
                    this.state = this.stateFly;   
                }
                TrinGame.state.removeSelection();  
            }
            break;
    }
};

UsableObject.prototype.openObject = function(){
    if (!this.autoPickup)    {
        return false;
    }
    this.slot = TrinGame.state.itemGetted(this);
    if (this.slot === null) {
        return false;
    }
    this.state = this.stateFly;
   // TrinSound.prototype.play("GetItem");
    TrinGame.state.midLayer.add(this.baseSprite);
    return true;
};

UsableObject.prototype.wandObject = function(){};

UsableObject.prototype.isValidTarget = function(target){
    return false;
};

UsableObject.prototype.useOn = function(cell, target){
    TrinGame.state.useItem(this);
    this.state = this.stateUsed;
};function openMoreGames()    {
    TrinGame.openMoreGamesLink();
}

function changeSound()  {
    if (!TrinSound.prototype.mute)  {
        TrinSound.prototype.muteAll();
        TrinSound.prototype.mute = true;
        //TrinSound.prototype.pause("MainTheme");
    }   else {
        TrinSound.prototype.mute = false;
        TrinSound.prototype.unMuteAll();
        if (!TrinSound.prototype.withMusic)  {
            TrinSound.prototype.withMusic = true;
        }  
        //TrinSound.prototype.play("MainTheme");
    }
}function ObjectSecret(x, y) {
    ObjectSecret.super.constructor.apply(this);
    this.baseSprite = new TrinSprite("secret");
    this.baseSprite.looped = false;
    this.baseSprite.animationSpeed = 0;
    this.baseSprite.reset(x, y);
    this.baseSprite.origin.x = -11;
    this.baseSprite.origin.y = -8;
    this.autoPickup = false;
    this.canPickup = false;
    this.state = this.stateWait;
    this.baseSprite.abstract = true;
}

extend(ObjectSecret, UsableObject);

ObjectSecret.prototype.stateWait = 10;
ObjectSecret.prototype.stateOpening = 11;
ObjectSecret.prototype.stateOpened = 12;
ObjectSecret.prototype.stateEnd = 13;
ObjectSecret.prototype.stateEmpty = 14;

ObjectSecret.prototype.update = function()  {
    ObjectSecret.super.update.apply(this);
    switch (this.state) {
        case this.stateOpening:
            if (this.baseSprite.currentFrameNumber >= 14)  {
                this.baseSprite.animationSpeed = 0;
                this.state = this.stateOpened;
            }
            break;
        case this.stateOpened:
            var c = this.grid.hoveredCell;
            if (TrinGame.mouse.isPressed() && c !== null && c.data.objects.getObjectOnTop() === this)   {
                this.baseSprite.animationSpeed = 10;
                this.state = this.stateEnd;
            }
            break;
        case this.stateEnd:
            if (this.baseSprite.isFinished())   {
                var c = new ObjectCrystal();
                c.reset(this.baseSprite.x + this.baseSprite.width / 2, this.baseSprite.y + this.baseSprite.height / 2);
                TrinGame.state.midLayer.add(c);   
                this.state = this.stateEmpty;             
            }
            break;
    }  
};

ObjectSecret.prototype.activate = function(OnTop){
    ObjectSecret.super.activate.apply(this);
    if (OnTop)   {
        this.baseSprite.animationSpeed = 10;
        this.state = this.stateOpening;
       // TrinSound.prototype.play("OpenSecret");
    }
};

ObjectSecret.prototype.disable = function(OnTop){
    ObjectSecret.super.disable.apply(this);
    if (this.state !== this.stateEmpty) {
        this.baseSprite.animationSpeed = -10;
        this.state = this.stateWait;
    }
};

ObjectSecret.prototype.openObject = function(){
    if (this.activated) {
        this.baseSprite.animationSpeed = 10;  
        this.state = this.stateOpening;
       // TrinSound.prototype.play("OpenSecret");
    }
    return false;
};

ObjectSecret.prototype.canRollIn = function(from, posX, posY)   {
    return this.state === this.stateWait;
};

ObjectSecret.prototype.canRollOver = function(from, posX, posY)   {
    return this.state === this.stateWait;
};function ObjectSecretKey(x, y) {
    ObjectSecretKey.super.constructor.apply(this);
    this.baseSprite = new TrinSprite("secret_key");
    this.baseSprite.looped = false;
    this.baseSprite.animationSpeed = 0;
    this.baseSprite.reset(x, y);
    this.baseSprite.origin.x = -11;
    this.baseSprite.origin.y = -8;
    this.autoPickup = false;
    this.canPickup = false;
    this.baseSprite.abstract = true;
}

extend(ObjectSecretKey, GameObject);

ObjectSecretKey.prototype.stateOpening = 10;
ObjectSecretKey.prototype.stateOpened = 11;
ObjectSecretKey.prototype.stateEnd = 12;
ObjectSecretKey.prototype.stateEmpty = 13;

ObjectSecretKey.prototype.update = function(){
    ObjectSecretKey.super.update.apply(this);
    switch (this.state) {
        case this.stateOpening:
            if (this.baseSprite.currentFrameNumber >= 14)  {
                this.baseSprite.animationSpeed = 0;
                this.state = this.stateOpened;
            }
            break;
        case this.stateOpened:
            var c = this.grid.hoveredCell;
            if (TrinGame.mouse.isPressed() && c !== null && c.data.objects.getObjectOnTop() === this)   {
                this.baseSprite.animationSpeed = 10;
                this.state = this.stateEnd;
            }
            break;
        case this.stateEnd:
            if (this.baseSprite.isFinished())   {
                var c = new ObjectCrystal();
                c.reset(this.baseSprite.x + this.grid.cellWidth / 2, this.baseSprite.y + this.grid.cellHeight / 2);
                TrinGame.state.midLayer.add(c);  
                this.state = this.stateEmpty;             
            }
            break;
    }  
    
};

ObjectSecretKey.prototype.openByKey  = function(){
    this.baseSprite.animationSpeed = 10;  
    this.state = this.stateOpening;
   // TrinSound.prototype.play("OpenSecret");
};function ObjectButton(x, y) {
    ObjectSecret.super.constructor.apply(this);
    this.baseSprite = new TrinSprite("item_button");
    this.baseSprite.looped = false;
    this.baseSprite.animationSpeed = 0;
    this.baseSprite.reset(x, y);
    this.baseSprite.center();
    
    this.layerSprite = new TrinSprite("layer_button");
    this.layerSprite.reset(x, y);
    this.layerSprite.horizontalD = this.layerSprite.width / 2;
    this.layerSprite.verticalD = this.layerSprite.height / 2;
    this.layerSprite.center();
    
    this.activate = {row: -1, column: -1};
    this.autoPickup = false;
    this.canPickup = false;
    this.baseSprite.abstract = true;
    this.layerSprite.abstract = true;
}

extend(ObjectButton, GameObject);

ObjectButton.prototype.press = function(){
    this.grid.activate(this.activate.column, this.activate.row); 
    //TrinSound.prototype.play("ButtonStep");
};

ObjectButton.prototype.unpress = function(){
    this.grid.disable(this.activate.column, this.activate.row);
};function ObjectKey(x, y) {
    ObjectKey.super.constructor.apply(this);
    this.baseSprite = new TrinSprite("item_key");
    this.baseSprite.reset(x, y);
    this.baseSprite.origin.x = this.baseSprite.width / 2;
    this.baseSprite.origin.y = this.baseSprite.height / 2;
    this.baseSprite.center();
    
    this.layerSprite = new TrinSprite("layer_key");
    this.layerSprite.reset(x, y);
    this.layerSprite.horizontalD = this.layerSprite.width / 2;
    this.layerSprite.verticalD = this.layerSprite.height / 2;
    this.layerSprite.center();
    this.baseSprite.abstract = true;
    this.layerSprite.abstract = true;
}

extend(ObjectKey, UsableObject);

ObjectKey.prototype.isValidTarget = function(target){
    return (target instanceof ObjectSecretKey && target.state === target.stateWait);
};

ObjectKey.prototype.useOn = function(cell, target){
    ObjectKey.super.useOn.apply(this, [cell, target]);
    TrinGame.state.midLayer.remove(this.baseSprite);
    TrinGame.state.mapObjects.remove(this);
    target.openByKey();
    //TrinSound.prototype.play("UseKey");
};function ObjectStar(x, y) {
    ObjectStar.super.constructor.apply(this);
    this.baseSprite = new TrinSprite("item_star");
    this.baseSprite.reset(x, y);
    this.state = 0;
    this.slot = null;
    this.baseSprite.center();
    this.baseSprite.abstract = true;
}

extend(ObjectStar, GameObject);

ObjectStar.prototype.stateWait = 0;
ObjectStar.prototype.stateFly = 1;

ObjectStar.prototype.update = function(){
    ObjectStar.super.update.apply(this);
    switch(this.state)    {
        case this.stateWait:
            break;
        case this.stateFly:
            var dx, dy;
            if (Math.abs(this.slot.x - this.baseSprite.x) >= 8)    {
                if (this.slot.x > this.baseSprite.x)   {
                    dx = Math.max(4, (this.slot.x - this.baseSprite.x) / 8);
                }   else {
                    dx = Math.min(-4, (this.slot.x - this.baseSprite.x) / 8);                
                }
            }   else {
                dx = this.slot.x - this.baseSprite.x;
            }
            if (Math.abs(this.slot.y - this.baseSprite.y) >= 8)    {
                if (this.slot.y >this.baseSprite.y)   {
                    dy = Math.max(4, (this.slot.y - this.baseSprite.y) / 8);
                }   else {
                    dy = Math.min(-4, (this.slot.y - this.baseSprite.y) / 8);                
                }
            }   else {
                dy = this.slot.y - this.baseSprite.y;
            }
            var kx = dx / (this.slot.x - this.baseSprite.x);
            var ky = dy / (this.slot.y - this.baseSprite.y);
            if (kx > ky)    {
                dy = (this.slot.y - this.baseSprite.y) * kx;
            }   else {
                dx = (this.slot.x - this.baseSprite.x) * ky;                
            }
            this.baseSprite.x += dx;
            this.baseSprite.y += dy;
            if (this.baseSprite.x === this.slot.x && this.baseSprite.y === this.slot.y)   {
                this.slot.animationSpeed = 30;
                this.baseSprite.parent.remove(this.baseSprite);
                this.parent.remove(this);
            }
            break;
    }
};

ObjectStar.prototype.openObject = function(){
    this.slot = TrinGame.state.starGetted();
    this.state = this.stateFly;
    TrinGame.state.midLayer.add(this.baseSprite);
   // TrinSound.prototype.play("GetStar");
    return true;
};function ObjectWand(x, y) {
    ObjectWand.super.constructor.apply(this);
    this.baseSprite = new TrinSprite("item_wand");
    this.baseSprite.reset(x, y);
    this.baseSprite.center();
    
    this.layerSprite = new TrinSprite("layer_wand");
    this.layerSprite.reset(x, y);
    this.layerSprite.horizontalD = this.layerSprite.width / 2;
    this.layerSprite.verticalD = this.layerSprite.height / 2;
    this.layerSprite.center();
    this.baseSprite.abstract = true;
    this.layerSprite.abstract = true;
}

extend(ObjectWand, UsableObject);

ObjectWand.prototype.isValidTarget = function(target){
    return (target instanceof ObjectWeight);
};

ObjectWand.prototype.useOn = function(cell, target){
    ObjectWand.super.useOn.apply(this, [cell, target]);
    TrinGame.state.midLayer.remove(this.baseSprite);
    TrinGame.state.mapObjects.remove(this);
    cell.data.objects.remove(target);
    //TrinSound.prototype.play("UseWand");
    target.wandObject();
    if (target instanceof ObjectWeight) {
        cell.data.objects.unpress();
    }
};function ObjectWeight(x, y) {
    ObjectWeight.super.constructor.apply(this);
    this.baseSprite = new TrinSprite("item_weight");
    this.baseSprite.reset(x, y);
    this.baseSprite.center();
    this.isPostDraw = true;
    this.autoPickup = false;
    this.canPickup = false;
    this.baseSprite.abstract = true;
}

extend(ObjectWeight, UsableObject);

ObjectWeight.prototype.canRollIn = function(from, posX, posY)   {
    return false;
};

ObjectWeight.prototype.canRollOver = function(from, posX, posY)   {
    return false;
};

ObjectWeight.prototype.isValidTarget = function(target){
    return (target === null || target instanceof Carpet || target instanceof ObjectButton || target instanceof ObjectNail);
};

ObjectWeight.prototype.useOn = function(cell, target){
    ObjectWeight.super.useOn.apply(this, [cell, target]);
    TrinGame.state.midLayer.remove(this.baseSprite);
    cell.data.objects.add(this);
    this.baseSprite.x = cell.x + this.grid.cellWidth / 2;
    this.baseSprite.y = cell.y + this.grid.cellHeight / 2;
    this.state = this.stateWait;
    cell.data.objects.press();
};

ObjectWeight.prototype.wandObject = function(){
    this.slot = TrinGame.state.itemGetted(this);
    if (this.slot === null) {
        return;
    }
    this.state = this.stateFly;
    TrinGame.state.midLayer.add(this.baseSprite);
};function ObjectBone(x, y) {
    ObjectBone.super.constructor.apply(this);
    this.baseSprite = new TrinSprite("item_bone");
    this.baseSprite.reset(x, y);
    this.baseSprite.origin.x = this.baseSprite.width / 2;
    this.baseSprite.origin.y = this.baseSprite.height / 2;
    this.baseSprite.center();
    
    this.layerSprite = new TrinSprite("layer_bone");
    this.layerSprite.reset(x, y);
    this.layerSprite.horizontalD = this.layerSprite.width / 2;
    this.layerSprite.verticalD = this.layerSprite.height / 2;
    this.layerSprite.center();
    
    this.canPickup = false;
    this.opened = false;
    this.row = 0;
    this.column = 0;
    this.baseSprite.abstract = true;
    this.layerSprite.abstract = true;
}

extend(ObjectBone, UsableObject);

ObjectBone.prototype.canRollIn = function(from, posX, posY)   {
    return !this.opened;
};

ObjectBone.prototype.canRollOver = function(from, posX, posY)   {
    return !this.opened;
};

ObjectBone.prototype.openObject = function(){
    ObjectDragon.prototype.wakeUp(this);
    this.opened = true;
    return false;
};function ObjectDragon(x, y) {
    ObjectBone.super.constructor.apply(this);
    this.baseSprite = new TrinSprite("dragon_sleep");
    this.baseSprite.reset(x, y);
    this.baseSprite.origin.x = this.baseSprite.width / 2;
    this.baseSprite.origin.y = this.baseSprite.height / 2;
    this.baseSprite.center();
    
    this.baseSprite.origin.y += 8;
    
    this.state = this.stateSleep;
    //TrinSound.prototype.play("DragonSleep");
    
    ObjectDragon.prototype.instance = this;
    this.boneQuery = [];
    this.currentBone = 0;
    this.distantionX = 0;
    this.distantionY = 0;
    this.row = 0;
    this.column = 0;
    this.originD = this.baseSprite.height - this.baseSprite.origin.y;
    this.bone = null;
    
    this.isPostDraw = true;
    this.baseSprite.animationSpeed = 7.3;
    
    this.baseSprite.abstract = true;
}

extend(ObjectDragon, GameObject);

ObjectDragon.prototype.update = function(){
    ObjectDragon.super.update.apply(this);
    switch (this.state) {
        case (this.stateSleep):
            if (this.boneQuery.length > this.currentBone)   {
                this.state = this.stateWakeUp;
                TrinSound.prototype.stop("DragonSleep");
                this.baseSprite.animationSpeed = 30;
                //TrinSound.prototype.play("DragonWakeUp");
                this.baseSprite.switchAnimation("dragon_attack");
                this.baseSprite.origin.y += this.grid.cellHeight + 10;
                this.looped = false;       
            }
            break;
        case (this.stateWakeUp):
            if (this.baseSprite.currentFrameNumber >= 34)  {
                //TrinSound.prototype.play("DragonJump");
                this.state = this.stateFly;
                this.grid.cells[this.row][this.column].data.objects.unpress();
                this.bone = this.boneQuery[this.currentBone];
                this.distantionX = this.bone.baseSprite.x - this.baseSprite.x;
                this.distantionY = this.bone.baseSprite.y - this.baseSprite.y;
                this.grid.removeObject(this.column, this.row);
                TrinGame.state.midLayer.add(this.baseSprite);
                this.currentBone++;
            }
            break;
        case (this.stateFly):
            this.baseSprite.x += this.distantionX / 13;
            this.baseSprite.y += this.distantionY / 13;
            if (this.baseSprite.currentFrameNumber >= 47)  {
                TrinGame.state.midLayer.remove(this.baseSprite);
                this.grid.removeObject(this.bone.column, this.bone.row);
                this.grid.addObject(this.bone.column, this.bone.row, this);
                this.column = this.bone.column;
                this.row = this.bone.row;
                //TrinSound.prototype.play("DragonEat");
                this.state = this.stateEat;
                this.grid.cells[this.row][this.column].data.objects.press();
            }
            break;
        case (this.stateEat):
            if (this.baseSprite.isFinished())  {
                this.state = this.stateSleep;
                //TrinSound.prototype.play("DragonSleep");
                this.baseSprite.animationSpeed = 7.3;
                this.baseSprite.switchAnimation("dragon_sleep");
                this.baseSprite.origin.y -= this.grid.cellHeight + 10;
                this.baseSprite.origin.y = this.baseSprite.height - this.originD;
                this.looped = true;
            }
            break;
    };
};

ObjectDragon.prototype.addBoneToQuery = function(bone)  {
    this.boneQuery[this.boneQuery.length] = bone;
    if (this.state === this.stateSleep) {
        this.baseSprite.switchAnimation("dragon_attack");
        this.looped = false;
        TrinSound.prototype.stop("DragonSleep");
        this.baseSprite.animationSpeed = 30;
        //TrinSound.prototype.play("DragonWakeUp");
        this.state = this.stateWakeUp;
        this.baseSprite.origin.y += this.grid.cellHeight + 10;
    }
};

ObjectDragon.prototype.canRollIn = function(from, posX, posY)   {
    return false;
};

ObjectDragon.prototype.canRollOver = function(from, posX, posY)   {
    return false;
};

ObjectDragon.prototype.instance = null;
ObjectDragon.prototype.wakeUp = function(bone)  {
    ObjectDragon.prototype.instance.addBoneToQuery(bone);
};

ObjectDragon.prototype.stateSleep = 0;
ObjectDragon.prototype.stateWakeUp = 1;
ObjectDragon.prototype.stateFly = 2;
ObjectDragon.prototype.stateGetDown = 3;function Level1Tutorial(carpet, key, crystal)   {
    Level1Tutorial.super.constructor.apply(this);
    
    this.hand = new TrinSprite("tutorial_drag_carpet");
    this.hand.reset(120, 380);
    this.add(this.hand);
    
    this.hand2 = new TrinSprite("click");
    this.hand2.animationSpeed = 15;
    
    this.carpet = carpet;
    this.key = key;
    this.crystal = crystal;
    
    this.state = this.stateShowCarpetDrag;
}

extend(Level1Tutorial, TrinLayer);

Level1Tutorial.prototype.stateShowCarpetDrag = 0;
Level1Tutorial.prototype.stateWaitKeyPickup = 1;
Level1Tutorial.prototype.stateShowUseKey = 2;
Level1Tutorial.prototype.stateShowPickupCrystal = 3;
Level1Tutorial.prototype.stateWaitEnd = 4;

Level1Tutorial.prototype.update = function(){
    Level1Tutorial.super.update.apply(this);
    switch(this.state){
        case (this.stateShowCarpetDrag):
            if (this.carpet.cutStart > 84 && this.carpet.state === this.carpet.stateRollStart) {
                this.state = this.stateWaitKeyPickup;
            }
            break;
        case (this.stateWaitKeyPickup):
            this.hand.alpha = Math.max(0, this.hand.alpha - 0.05);
            if (this.key.state === this.key.stateWaitInSlot)    {
                this.hand.switchAnimation("tutorial_drag_key");
                this.hand.alpha = 1;
                this.hand.reset(300, 380);
                this.add(this.hand);
                this.state = this.stateShowUseKey;
            }
            break;
        case (this.stateShowUseKey):
            if (this.key.state === this.key.stateUsed)  {
                this.state = this.statePickupCrystal;
                var s = new TrinSprite("hand");
                s.reset(440, 440);
                this.hand2.reset(370, 370);
                this.add(this.hand2);
                this.add(s);
                this.hand.alpha = 0;
            }
            break;
        case (this.statePickupCrystal):
            if (this.crystal.state === this.crystal.stateEmpty) {
                this.removeAll();
                this.state = this.stateWaitEnd;
            }
            break;
        case (this.stateWaitEnd):
            this.hand.alpha = Math.max(0, this.hand.alpha - 0.025);
            break;
    }
};function ObjectNail(x, y) {
    ObjectNail.super.constructor.apply(this);
    this.baseSprite = new TrinSprite("item_nails");
    this.baseSprite.reset(x, y);
    this.baseSprite.center();
    this.baseSprite.animationSpeed = 0;
    this.baseSprite.currentFrameNumber = this.baseSprite.animationProgress = Math.floor(Math.random() * 3);
    this.autoPickup = false;
    this.canPickup = false;
    this.baseSprite.abstract = true;
}

extend(ObjectNail, UsableObject);function ObjectCrystal() {
    ObjectCrystal.super.constructor.apply(this, ["item_crystal"]);
    this.center();
    this.slot = TrinGame.state.crystalIcon;
    //TrinSound.prototype.play("GetCrystal");
    this.abstract = true;
}

extend(ObjectCrystal, TrinSprite);

ObjectCrystal.prototype.update = function() {
    ObjectCrystal.super.update.apply(this);
    var dx, dy;
    if (Math.abs(this.slot.x - this.x) >= 8) {
        if (this.slot.x > this.x) {
            dx = Math.max(4, (this.slot.x - this.x) / 8);
        } else {
            dx = Math.min(-4, (this.slot.x - this.x) / 8);
        }
    } else {
        dx = this.slot.x - this.x;
    }
    if (Math.abs(this.slot.y - this.y) >= 8) {
        if (this.slot.y > this.y) {
            dy = Math.max(4, (this.slot.y - this.y) / 8);
        } else {
            dy = Math.min(-4, (this.slot.y - this.y) / 8);
        }
    } else {
        dy = this.slot.y - this.y;
    }
    var distX = (this.slot.x - this.x);
    var distY = (this.slot.y - this.y);
    var kx = dx / (distX === 0 ? 0.001 : distX);
    var ky = dy / (distY === 0 ? 0.001 : distY);
    if (kx < ky) {
        dy = distY * kx;
    } else {
        dx = distX * ky;
    }
    this.x += dx;
    this.y += dy;
    if (this.x === this.slot.x && this.y === this.slot.y) {
        TrinGame.state.midLayer.remove(this);
        TrinGame.state.crystalCollected();
    }
};var __soundButton;

function SoundButton()  {
    var soundOn = (TrinSound.prototype.withMusic ? !TrinSound.prototype.mute : false);
    SoundButton.super.constructor.apply(this, [(!soundOn  ? "button_sound_off_out" : "button_sound_on_out"), "", this.changeSound, true]);
    this.center();
    this.reset(944 - this.width / 2, this.height / 2 + 16);
    //this.active = this.visible = TrinSound.prototype.withMusic;
    if (!this.active)   {
        this.width = 24;
    }
    __soundButton = this;
}

extend(SoundButton, TrinButton);

SoundButton.prototype.changeSound = function(){
    changeSound();
    __soundButton.switchAnimation(TrinSound.prototype.mute ? "button_sound_off_out" : "button_sound_on_out");
};
function AskSoundPanel(yesCallback, noCallback) {
    AskSoundPanel.super.constructor.apply(this);
    this.state = this.STATE_APPEARS;

    this.panel = new TrinSprite("plashka");
    this.panel.center();
    this.panel.reset(480, 400);
    this.add(this.panel);
    this.yesButton = new TrinButton("button_sound_on_out", "", yesCallback, true);
    this.yesButton.center();
    this.yesButton.reset(560, this.panel.y);
    this.yesButton.scale.x = this.yesButton.scale.y = 0;
    this.yesButton.active = false;
    this.yesButton.abstract = true;
    this.add(this.yesButton);
    this.noButton = new TrinButton("button_sound_off_out", "", noCallback, true);
    this.noButton.center();
    this.noButton.reset(400, this.yesButton.y);
    this.noButton.scale.x = this.noButton.scale.y = 0;
    this.noButton.active = false;
    this.noButton.abstract = true;
    this.add(this.noButton);
    this.timer = 0;
}

extend(AskSoundPanel, TrinLayer);

AskSoundPanel.prototype.STATE_APPEARS = 0;
AskSoundPanel.prototype.STATE_WAIT = 1;
AskSoundPanel.prototype.STATE_DISAPPEARS = 2;

AskSoundPanel.prototype.update = function() {
    AskSoundPanel.super.update.apply(this);
    switch (this.state) {
        case this.STATE_APPEARS:
            this.timer++;
            var a = Math.min(1, this.timer / 20);
            var b = Math.max(0, Math.min(1, (this.timer - 20) / 20));
            var c = Math.max(0, Math.min(1, (this.timer - 25) / 20));
            this.panel.scale.x = this.panel.scale.y = a;
            this.yesButton.scale.x = this.yesButton.scale.y = b;
            this.noButton.scale.x = this.noButton.scale.y = c;
            if (c === 1) {
                this.yesButton.active = true;
                this.noButton.active = true;
                this.timer = 0;
                this.state = this.STATE_WAIT;
            }
            break;
        case this.STATE_WAIT:
            break;
        case this.STATE_DISAPPEARS:
            this.timer++;
            var t = 45 - this.timer;
            var a = Math.max(0, Math.min(1, t / 20));
            var b = Math.max(0, Math.min(1, (t - 20) / 20));
            var c = Math.max(0, Math.min(1, (t - 25) / 20));
            this.panel.scale.x = this.panel.scale.y = a;
            this.yesButton.scale.x = this.yesButton.scale.y = b;
            this.noButton.scale.x = this.noButton.scale.y = c;
            if (a === 0) {
                this.active = false;
                this.yesButton.active = false;
                this.noButton.active = false;
                this.parent.remove(this);
            }
            break;
    }
};

AskSoundPanel.prototype.dissapear = function() {
    this.state = this.STATE_DISAPPEARS;
};