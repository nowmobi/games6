!function () {
    class WebAudioEngine {
        constructor() {
            this.beEnabled = false;
            this.isMuted = false;
            this.bePauseSound = false;
            this.bePauseMusic = false;
            this.tryToResumeIntervalId = -1;
            this.isVisibilityMuted = false;
            this.adShowing = false;
        }
        init() {
            return new Promise((resolve, reject) => {
                try {
                    this.musicAudio = new WebAudioContext();
                    this.soundAudio = new WebAudioContext();
                    window.document.addEventListener("mousedown", this.tryToResumeAudioContext.bind(this), true);
                    window.document.addEventListener("touchstart", this.tryToResumeAudioContext.bind(this), true);
                    window.document.addEventListener("visibilitychange", this.onVisibilitychange.bind(this));
                    this.tryToResumeIntervalId = setInterval(this.tryToResumeAudioContext.bind(this), 0.2e3);
                    this.musicAudio.getContext().onstatechange = this.onMusicStatechange.bind(this);
                    this.soundAudio.getContext().onstatechange = this.onSoundStatechange.bind(this);
                    this.beEnabled = true;
                    this.musicVolume = 60;
                    resolve(true);
                }
                catch (e) {
                    console.log("Web Audio API", e);
                    alert("Web Audio API is not supported in this browser");
                    resolve(false);
                }
            });
        }
        onVisibilitychange() {
            if (window.WebAudioEngine.adShowing) {
                return;
            }
            if (document.visibilityState == "hidden") {
                if (!this.isMuted) {
                    this.isVisibilityMuted = this.muted = true;
                }
            }
            else if (document.visibilityState == "visible") {
                if (this.isVisibilityMuted) {
                    this.isVisibilityMuted = this.muted = false;
                }
            }
        }
        onDBInstanceMuted() {
            // this.pauseMusic = DBInstance$1.musicMuted.value;
            // this.pauseSound = DBInstance$1.soundMuted.value;
        }
        tryToResumeAudioContext() {
            if (this.isMuted)
                return;

            if (this.musicAudio.isSuspend() && !this.bePauseMusic) {
                this.musicAudio.resume();
            }
            if (this.soundAudio.isSuspend() && !this.bePauseSound) {
                this.soundAudio.resume();
            }
            if (!this.musicAudio.isSuspend() || !this.soundAudio.isSuspend()) {
                window.document.removeEventListener("mousedown", this.tryToResumeAudioContext.bind(this), true);
                window.document.removeEventListener("touchstart", this.tryToResumeAudioContext.bind(this), true);
                clearInterval(this.tryToResumeIntervalId);
                this.tryToResumeIntervalId = -1;
            }
        }
        onMusicStatechange() {
            if (this.musicAudio.isSuspend() && !this.isMuted && !this.bePauseMusic && this.tryToResumeIntervalId === -1) {
                window.document.addEventListener("mousedown", this.tryToResumeAudioContext.bind(this), true);
                window.document.addEventListener("touchstart", this.tryToResumeAudioContext.bind(this), true);
                this.tryToResumeIntervalId = setInterval(this.tryToResumeAudioContext.bind(this), 0.2e3);
            }
        }
        onSoundStatechange() {
            if (this.soundAudio.isSuspend() && !this.isMuted && !this.bePauseSound && this.tryToResumeIntervalId === -1) {
                window.document.addEventListener("mousedown", this.tryToResumeAudioContext.bind(this), true);
                window.document.addEventListener("touchstart", this.tryToResumeAudioContext.bind(this), true);
                this.tryToResumeIntervalId = setInterval(this.tryToResumeAudioContext.bind(this), 0.2e3);
            }
        }
        set muted(b) {
            this.isMuted = b;
            if (this.isMuted) {
                this.musicAudio.suspend();
                this.soundAudio.suspend();
            }
            else {
                if (this.tryToResumeIntervalId == -1) {
                    this.tryToResumeIntervalId = setInterval(this.tryToResumeAudioContext.bind(this), 0.2e3);
                }

            }
        }

        get muted() {
            return this.isMuted;
        }

        set pause(b) {
            this.pauseSound = b;
            this.pauseMusic = b;
        }
        get pause() {
            return this.pauseSound || this.pauseMusic;
        }

        set pauseSound(b) {
            this.bePauseSound = b;
            if (this.bePauseSound) {
                this.soundAudio.suspend();
            }
            else {
                if (this.isMuted)
                    return;
                this.soundAudio.resume();
            }
        }
        get pauseSound() {
            return this.bePauseSound;
        }
        get pauseMusic() {
            return this.bePauseMusic;
        }
        set pauseMusic(b) {
            this.bePauseMusic = b;
            if (this.bePauseMusic) {
                this.musicAudio.suspend();
            }
            else {
                if (this.isMuted)
                    return;
                this.musicAudio.resume();
            }
        }
        stopAll() {
            this.musicAudio.stopAll();
            this.soundAudio.stopAll();
        }
        parse(url, data, onComplete) {
            this.soundAudio.parse(url, data);
        }
        playMusic(url) {
            this.musicAudio.stopAll();
            this.musicAudio.playMusic(url);
        }
        stopMusic() {
            this.musicAudio.stopAll();
        }
        stopSound(url) {
            this.soundAudio.stop(url);
        }
        set musicVolume(vlaue) {
            this.musicAudio.musicVolume = vlaue;
        }
        get musicVolume() {
            return this.musicAudio.musicVolume;
        }
        playSound(url, loop = false, singleton = false) {
            if (!this.beEnabled)
                return;
            this.soundAudio.play(url, loop, singleton);
        }
    }
    class WebAudioSource {
    }
    class WebAudioContext {
        constructor() {
            this.volume = 100;
            this._audioInstances = new Map();
            this._musicVolume = 100;
            window.AudioContext = window.AudioContext || window["webkitAudioContext"];
            this.context = new AudioContext();
        }
        getContext() {
            return this.context;
        }
        isSuspend() {
            return this.context.state === "suspended";
        }
        suspend() {
            this.context.suspend();
        }
        resume() {
            this.context.resume();
        }
        stopAll() {
            const values = this._audioInstances.values();
            for (const sound of values) {
                const instance = sound.instance;
                if (instance.source.buffer) {
                    try {
                        instance.source.stop(this.context.currentTime);
                    }
                    catch (e) {
                        instance.source.disconnect();
                    }
                    instance.source.onended = (function () { });
                    instance.setup();
                }
            }
        }
        stop(url) {
            if (this._audioInstances.has(url)) {
                const sound = this._audioInstances.get(url);
                this._stopSound(sound);
            }
        }
        _stopSound(sound) {
            const instance = sound.instance;
            if (instance.source.buffer) {
                try {
                    instance.source.stop(this.context.currentTime);
                }
                catch (e) {
                    instance.source.disconnect();
                }
                instance.source.onended = (function () { });
                instance.setup();
            }
        }
        playMusic(url) {
            if (this._music) {
                this._stopSound(this._music);
            }
            if (this._audioInstances.has(url)) {
                this._music = this._audioInstances.get(url);
                this.musicVolume = this._musicVolume;
                this.play(url, true);
            }
            else {
                this.downloadArrayBuffer(url, () => {
                    this.playMusic(url);
                });
            }
        }
        stopMusic() {
            if (this._music) {
                this._stopSound(this._music);
            }
        }
        set musicVolume(vlaue) {
            this._musicVolume = vlaue;
            if (this._music) {
                this._music.instance.gain.gain.value = this._musicVolume / 100;
            }
        }
        get musicVolume() {
            return this._musicVolume;
        }
        play(url, loop = false, singleton = false) {
            if (this._audioInstances.has(url)) {
                const sound = this._audioInstances.get(url);
                const instance = sound.instance;
                if (singleton && !instance.ended)
                    return;
                this.stop(url);
                if (sound.buffer) {
                    try {
                        instance.playBuffer(this.context.currentTime, sound.buffer);
                        instance.source.loop = loop;
                    }
                    catch (e) {
                        console.error("playBuffer error. Exception: " + e);
                    }
                }
            }
            else {
                this.downloadArrayBuffer(url, () => {
                    this.play(url, loop);
                });
            }
        }
        load(urls, onComplete) {
            let t = urls.length;
            let d = 0;
            for (let i = 0; i < urls.length; i++) {
                const url = urls[i];
                this.downloadArrayBuffer(url, () => {
                    d++;
                    if (d >= t) {
                        onComplete && onComplete();
                    }
                });
            }
        }
        setThreeD(url) {
            if (this._audioInstances.has(url)) {
                const sound = this._audioInstances.get(url);
                sound.instance.threeD = true;
            }
        }
        createSoundInstance() {
            let audioContext = this.context;
            const instance = {
                gain: audioContext.createGain(),
                panner: audioContext.createPanner(),
                threeD: false,
                ended: false,
                playBuffer: (function (delay, buffer, offset) {
                    this.source.buffer = buffer;
                    var chan = this;
                    this.ended = false;
                    this.source.onended = (function () {
                        chan.setup();
                        chan.ended = true;
                    });
                    this.source.start(delay, offset);
                }),
                setup: (function () {
                    this.source = audioContext.createBufferSource();
                    this.setupPanning();
                }),
                setupPanning: (function () {
                    if (this.threeD) {
                        this.source.disconnect();
                        this.source.connect(this.panner);
                        this.panner.connect(this.gain);
                    }
                    else {
                        this.panner.disconnect();
                        this.source.connect(this.gain);
                    }
                })
            };
            instance.panner.rolloffFactor = 0;
            instance.gain.connect(this.context.destination);
            instance.setup();
            return instance;
        }
        parse(url, data, onComplete) {
            const sound = new WebAudioSource();
            sound.url = url;
            sound.instance = this.createSoundInstance();
            this._audioInstances.set(url, sound);
            this.context.decodeAudioData(data, function (buffer) {
                sound.buffer = buffer;
                onComplete && onComplete();
            }, function (e) {
                sound.error = true;
                onComplete && onComplete();
                console.log("Decode error." + sound.url);
            });
        }
        downloadArrayBuffer(url, onComplete) {
            if (this._audioInstances.has(url)) {
                onComplete && onComplete();
                return;
            }
            const t = this;
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.responseType = "arraybuffer";
            xhr.onload = function () {
                if (xhr.status === 200 || xhr.status === 0) {
                    t.parse(url, xhr.response, onComplete);
                }
                else {
                    throw "no response";
                }
            };
            xhr.onerror = function () {
                onComplete && onComplete();
                throw "no response";
            };
            xhr.ontimeout = function () {
                onComplete && onComplete();
            };
            xhr.onabort = function () {
                onComplete && onComplete();
            };
            xhr.send(null);
        }
    }
    class NullWebAudioEngine {
        constructor() {
            this.beEnabled = false;
            this.isMuted = false;
            this.bePauseSound = false;
            this.bePauseMusic = false;
            this.tryToResumeIntervalId = -1;
            this.isVisibilityMuted = false;
            this.adShowing = false;
        }
        init() {
            return new Promise((resolve, reject) => {
                try {
                    this.beEnabled = true;
                    this.musicVolume = 60;
                    resolve(true);
                }
                catch (e) {
                    console.log("Web Audio API", e);
                    resolve(false);
                }
            });
        }
        onVisibilitychange() {
        }
        onDBInstanceMuted() {
            // this.pauseMusic = DBInstance$1.musicMuted.value;
            // this.pauseSound = DBInstance$1.soundMuted.value;
        }
        tryToResumeAudioContext() {
            if (this.isMuted)
                return;

        }
        onMusicStatechange() {
        }
        onSoundStatechange() {
        }
        set muted(b) {
            this.isMuted = b;
        }

        get muted() {
            return this.isMuted;
        }

        set pause(b) {
            this.pauseSound = b;
            this.pauseMusic = b;
        }
        get pause() {
            return this.pauseSound || this.pauseMusic;
        }

        set pauseSound(b) {
            this.bePauseSound = b;
        }
        get pauseSound() {
            return this.bePauseSound;
        }
        get pauseMusic() {
            return this.bePauseMusic;
        }
        set pauseMusic(b) {
            this.bePauseMusic = b;
        }
        stopAll() {
        }
        parse(url, data, onComplete) {
        }
        playMusic(url) {
        }
        stopMusic() {
        }
        stopSound(url) {
        }
        set musicVolume(vlaue) {
        }
        get musicVolume() {
            return 60;
        }
        playSound(url, loop = false, singleton = false) {
            if (!this.beEnabled)
                return;
        }
    }
    // const audioEngine = window.WebAudioEngine = new NullWebAudioEngine();
    const audioEngine = window.WebAudioEngine = new WebAudioEngine();

    class platform {
        constructor() {
            this.canNavigateActive_ = false;
            this.screen_ = "";
            this.action_ = "";
            this.to_ = "";
            this.prompt_ = null;
            this.initialized_ = false;
			this.lastShowVedioTime = 0;
            this.lastTableAdShowTime = new Date().getTime();
            this.lastShowPropTime = new Date().getTime();
        }
        static getInstance() {
            if (!this._instance) {
                this._instance = new platform();
            }
            return this._instance;
        }
		showTableAd(dua)
		{
			
		}
        initAds(showBanner = true)
        {
            

        }
        showBanner()
        {
           
        }
        hideBanner() {
           
        }
        //插屏广告
        showInterstitial(complete) {
            
            complete && complete();
            window.ggmgr.xsi();
        }
        //复活
        showReward(success, failure) {
            console.log("激励广告");
            console.log("3333333333333333333333");

            window.ggmgr.xsv((bool)=>{
                if(bool)
                {
                    success && success();
                }else
                {
                    failure && failure();
                }
            });
        }

        initList(appList) {
        }
        getForgames() {
			return null;
        }

        createLogo() {
            return null;
        }
		showSplash(data) {

		}
		hideSplash() {
			
		}
        /**
         * 启动YAD——SDK
         * @param {*} name 
         * @param {*} complete 
         */
        yadstartup(name, complete) {
            if (this.initialized_)
            {
                complete && complete(); complete = null;
                return;
            }
            //临时锁死
            this.initialized_ = true;
            this.initialized_ = false;
            complete && complete(); complete = null; this.initialized_ = true;
            this.initAds();
        }
        prompt(msg, duration) {
            if (msg == null || msg =="")
            {
                return;
            }
			if (window.WebAudioEngine instanceof NullWebAudioEngine)
			{
				return 
			}
            if (!this.prompt_) {
                this.prompt_ = document.createElement('div');
                this.prompt_.style.cssText = "font-family:siyuan;max-width:80%;min-width:320px;padding:10px 10px 10px 10px;min-height:40px;color: rgb(255, 255, 255);line-height: 20px;text-align:center;border-radius: 4px;position: fixed;top: 40%;left: 50%;transform: translate(-50%, -50%);z-index: 999999;background: rgba(0, 0, 0,.7);font-size: 16px;";
                document.body.appendChild(this.prompt_);
            }
            this.prompt_.innerHTML = msg;
            duration = isNaN(duration) ? 2000 : duration;
            this.prompt_.style.display = "inline";
            this.prompt_.style.opacity = '1';
            setTimeout(function () {
                var d = 0.5;
                this.prompt_.style.webkitTransition = '-webkit-transform ' + d + 's ease-in, opacity ' + d + 's ease-in';
                this.prompt_.style.opacity = '0';
                this.prompt_.style.display = "none";
            }.bind(this), duration);
        }
    }
    platform._instance = null;
    window["platform"] = platform;
}()