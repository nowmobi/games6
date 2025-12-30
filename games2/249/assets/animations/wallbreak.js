(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"wallbreak_atlas_1", frames: [[152,0,100,100],[152,102,100,100],[0,132,30,30],[32,132,30,30],[0,0,150,130]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.wall_0_0 = function() {
	this.initialize(ss["wallbreak_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.wall_0_1 = function() {
	this.initialize(ss["wallbreak_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.wall_piece_0 = function() {
	this.initialize(ss["wallbreak_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.wall_piece_1 = function() {
	this.initialize(ss["wallbreak_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.wall_smoke_0 = function() {
	this.initialize(ss["wallbreak_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.wall_smoke_0_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.instance = new lib.wall_smoke_0();
	this.instance.setTransform(-75,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.wall_smoke_0_1, new cjs.Rectangle(-75,-65,150,130), null);


(lib.wall_piece_1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.instance = new lib.wall_piece_1();
	this.instance.setTransform(-15,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.wall_piece_1_1, new cjs.Rectangle(-15,-15,30,30), null);


(lib.wall_piece_0_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.instance = new lib.wall_piece_0();
	this.instance.setTransform(-15,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.wall_piece_0_1, new cjs.Rectangle(-15,-15,30,30), null);


(lib.wall_0_1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.instance = new lib.wall_0_1();
	this.instance.setTransform(-50,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.wall_0_1_1, new cjs.Rectangle(-50,-70,100,100), null);


(lib.wall_0_0_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.instance = new lib.wall_0_0();
	this.instance.setTransform(-50,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.wall_0_0_1, new cjs.Rectangle(-50,-70,100,100), null);


(lib.wall_piece_1_spin_right = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.instance = new lib.wall_piece_1_1();
	this.instance.setTransform(0,0,1,1,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-119.9984},25).to({rotation:-180,alpha:0},5).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.2,-21.2,42.4,42.4);


(lib.wall_piece_1_spin_left = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.instance = new lib.wall_piece_1_1();
	this.instance.setTransform(0,0,1,1,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:479.9984},25).to({rotation:540,alpha:0},5).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.2,-21.2,42.4,42.4);


(lib.wall_piece_0_spin_right = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.instance = new lib.wall_piece_0_1();
	this.instance.setTransform(0,0,1,1,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-119.9984},25).to({rotation:-180,alpha:0},5).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.2,-21.2,42.4,42.4);


(lib.wall_piece_0_spin_left = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.instance = new lib.wall_piece_0_1();
	this.instance.setTransform(0,0,1,1,-179.9991);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:119.9981},25).to({rotation:180,alpha:0},5).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.2,-21.2,42.4,42.4);


(lib.wall_smoke_0_spin_right = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.instance = new lib.wall_smoke_0_1();
	this.instance.setTransform(0,0,0.8,0.8,-14.9987);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.8997,scaleY:0.8997,rotation:-4.9945},15).to({scaleX:1.0924,scaleY:1.0924,rotation:14.3476,alpha:0.0352},29).to({_off:true},1).wait(1));

	// レイヤー_2
	this.instance_1 = new lib.wall_piece_0_spin_left("synched",0);
	this.instance_1.setTransform(0,0,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.7999,scaleY:0.7999,x:-12.5,y:-127.5,startPosition:15},15,cjs.Ease.quadOut).to({scaleX:0.8,scaleY:0.8,rotation:0.0011,x:-25,y:45,startPosition:30},15,cjs.Ease.quadIn).to({_off:true},1).wait(15));

	// レイヤー_2
	this.instance_2 = new lib.wall_piece_1_spin_left("synched",0);
	this.instance_2.setTransform(0,0,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:0.6999,scaleY:0.6999,x:12.5,y:-127.5,startPosition:15},15,cjs.Ease.quadOut).to({regX:0.1,scaleX:0.5999,scaleY:0.5999,x:25.05,y:45,startPosition:30},15,cjs.Ease.quadIn).to({_off:true},1).wait(15));

	// レイヤー_3
	this.instance_3 = new lib.wall_piece_1_spin_right("synched",0);
	this.instance_3.setTransform(0,0,0.6,0.6,0.0015);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:0.5999,scaleY:0.5999,rotation:0,x:-37.5,y:-142.45,startPosition:15},15,cjs.Ease.quadOut).to({regX:-0.1,regY:0.1,x:-75.05,y:15.05,startPosition:30},15,cjs.Ease.quadIn).to({_off:true},1).wait(15));

	// レイヤー_3
	this.instance_4 = new lib.wall_piece_0_spin_right("synched",0);
	this.instance_4.setTransform(0,0,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:0.7999,scaleY:0.7999,x:-37.5,y:-157.55,startPosition:15},15,cjs.Ease.quadOut).to({scaleX:0.8,scaleY:0.8,rotation:0.0011,x:-75,y:-15,startPosition:30},15,cjs.Ease.quadIn).to({_off:true},1).wait(15));

	// レイヤー_4
	this.instance_5 = new lib.wall_piece_1_spin_left("synched",0);
	this.instance_5.setTransform(0,0,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:0.7999,scaleY:0.7999,x:37.5,y:-142.45,startPosition:15},15,cjs.Ease.quadOut).to({scaleX:0.8,scaleY:0.8,rotation:0.0011,x:75,y:15,startPosition:30},15,cjs.Ease.quadIn).to({_off:true},1).wait(15));

	// レイヤー_4
	this.instance_6 = new lib.wall_piece_0_spin_left("synched",0);
	this.instance_6.setTransform(0,0,0.6,0.6,0.0015);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:0.5999,scaleY:0.5999,rotation:0,x:37.55,y:-157.55,startPosition:15},15,cjs.Ease.quadOut).to({regX:0.1,regY:-0.1,x:75.05,y:-15.05,startPosition:30},15,cjs.Ease.quadIn).to({_off:true},1).wait(15));

	// レイヤー_1
	this.instance_7 = new lib.wall_piece_1_spin_right("synched",0);
	this.instance_7.setTransform(0,0,0.6,0.6,0.0015);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:0.5999,scaleY:0.5999,rotation:0,x:-12.5,y:-172.55,startPosition:15},15,cjs.Ease.quadOut).to({regX:-0.1,regY:-0.1,x:-25.05,y:-45.05,startPosition:30},15,cjs.Ease.quadIn).to({_off:true},1).wait(15));

	// レイヤー_1
	this.instance_8 = new lib.wall_piece_0_spin_left("synched",0);
	this.instance_8.setTransform(0,0,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({scaleX:0.7999,scaleY:0.7999,x:12.5,y:-172.5,startPosition:15},15,cjs.Ease.quadOut).to({rotation:0.0011,x:25,y:-45,startPosition:30},15,cjs.Ease.quadIn).to({_off:true},1).wait(15));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96.9,-186.1,193.9,275.2);


(lib.wall_smoke_0_spin_left = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.instance = new lib.wall_smoke_0_1();
	this.instance.setTransform(0,0,0.8,0.8,14.9987);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.9,scaleY:0.9,rotation:4.9987},15).to({scaleX:1.0933,scaleY:1.0933,rotation:-14.3312,alpha:0.0352},29).to({_off:true},1).wait(1));

	// レイヤー_2
	this.instance_1 = new lib.wall_piece_0_spin_right("synched",0);
	this.instance_1.setTransform(0,0,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.7999,scaleY:0.7999,x:-12.5,y:-127.5,startPosition:15},15,cjs.Ease.quadOut).to({scaleX:0.8,scaleY:0.8,rotation:0.0011,x:-25,y:45,startPosition:30},15,cjs.Ease.quadIn).to({_off:true},1).wait(15));

	// レイヤー_2
	this.instance_2 = new lib.wall_piece_1_spin_left("synched",0);
	this.instance_2.setTransform(0,0,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:0.6999,scaleY:0.6999,x:12.5,y:-127.5,startPosition:15},15,cjs.Ease.quadOut).to({regX:0.1,scaleX:0.5999,scaleY:0.5999,x:25.05,y:45,startPosition:30},15,cjs.Ease.quadIn).to({_off:true},1).wait(15));

	// レイヤー_3
	this.instance_3 = new lib.wall_piece_1_spin_right("synched",0);
	this.instance_3.setTransform(0,0,0.6,0.6,0.0015);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:0.5999,scaleY:0.5999,rotation:0,x:-37.5,y:-142.45,startPosition:15},15,cjs.Ease.quadOut).to({regX:-0.1,regY:0.1,x:-75.05,y:15.05,startPosition:30},15,cjs.Ease.quadIn).to({_off:true},1).wait(15));

	// レイヤー_3
	this.instance_4 = new lib.wall_piece_0_spin_right("synched",0);
	this.instance_4.setTransform(0,0,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:0.7999,scaleY:0.7999,x:-37.5,y:-157.55,startPosition:15},15,cjs.Ease.quadOut).to({scaleX:0.8,scaleY:0.8,rotation:0.0011,x:-75,y:-15,startPosition:30},15,cjs.Ease.quadIn).to({_off:true},1).wait(15));

	// レイヤー_4
	this.instance_5 = new lib.wall_piece_1_spin_left("synched",0);
	this.instance_5.setTransform(0,0,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:0.7999,scaleY:0.7999,x:37.5,y:-142.45,startPosition:15},15,cjs.Ease.quadOut).to({scaleX:0.8,scaleY:0.8,rotation:0.0011,x:75,y:15,startPosition:30},15,cjs.Ease.quadIn).to({_off:true},1).wait(15));

	// レイヤー_4
	this.instance_6 = new lib.wall_piece_0_spin_left("synched",0);
	this.instance_6.setTransform(0,0,0.6,0.6,0.0015);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:0.5999,scaleY:0.5999,rotation:0,x:37.55,y:-157.55,startPosition:15},15,cjs.Ease.quadOut).to({regX:0.1,regY:-0.1,x:75.05,y:-15.05,startPosition:30},15,cjs.Ease.quadIn).to({_off:true},1).wait(15));

	// レイヤー_1
	this.instance_7 = new lib.wall_piece_1_spin_right("synched",0);
	this.instance_7.setTransform(0,0,0.6,0.6,0.0015);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:0.5999,scaleY:0.5999,rotation:0,x:-12.5,y:-172.55,startPosition:15},15,cjs.Ease.quadOut).to({regX:-0.1,regY:-0.1,x:-25.05,y:-45.05,startPosition:30},15,cjs.Ease.quadIn).to({_off:true},1).wait(15));

	// レイヤー_1
	this.instance_8 = new lib.wall_piece_0_spin_left("synched",0);
	this.instance_8.setTransform(0,0,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({scaleX:0.7999,scaleY:0.7999,x:12.5,y:-172.5,startPosition:15},15,cjs.Ease.quadOut).to({rotation:0.0011,x:25,y:-45,startPosition:30},15,cjs.Ease.quadIn).to({_off:true},1).wait(15));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97,-186.1,194.1,275.3);


(lib.wall_0_1_disappear = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// smoke
	this.instance = new lib.wall_smoke_0_spin_left("synched",0,false);
	this.instance.setTransform(-15,-30);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(35).to({_off:false},0).wait(45));

	// wall
	this.instance_1 = new lib.wall_0_1_1();
	this.instance_1.setTransform(0,-20,1,1,0,0,0,0,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},35).wait(45));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112,-216.1,194.1,275.3);


(lib.wall_0_0_disappear = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// smoke
	this.instance = new lib.wall_smoke_0_spin_right("synched",0,false);
	this.instance.setTransform(15,-30);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(35).to({_off:false},0).wait(45));

	// wall
	this.instance_1 = new lib.wall_0_0_1();
	this.instance_1.setTransform(0,-20,1,1,0,0,0,0,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},35).wait(45));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.9,-216.1,193.9,275.3);


// stage content:
(lib.wallbreak = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// wall
	this.instance = new lib.wall_0_0_disappear("synched",0,false);
	this.instance.setTransform(310,850);

	this.instance_1 = new lib.wall_0_0_1("synched",0,false);
	this.instance_1.setTransform(260,820);

	this.instance_2 = new lib.wall_0_0_disappear("synched",0,false);
	this.instance_2.setTransform(210,790);

	this.instance_3 = new lib.wall_0_0_1("synched",0,false);
	this.instance_3.setTransform(160,760);

	this.instance_4 = new lib.wall_0_0_1("synched",0,false);
	this.instance_4.setTransform(110,730);

	this.instance_5 = new lib.wall_0_0_disappear("synched",0,false);
	this.instance_5.setTransform(60,700);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(330));

	// wall
	this.instance_6 = new lib.wall_0_1_disappear("synched",0,false);
	this.instance_6.setTransform(410,850);

	this.instance_7 = new lib.wall_0_1_1("synched",0,false);
	this.instance_7.setTransform(460,820);

	this.instance_8 = new lib.wall_0_1_1("synched",0,false);
	this.instance_8.setTransform(510,790);

	this.instance_9 = new lib.wall_0_1_disappear("synched",0,false);
	this.instance_9.setTransform(560,760);

	this.instance_10 = new lib.wall_0_1_1("synched",0,false);
	this.instance_10.setTransform(610,730);

	this.instance_11 = new lib.wall_0_1_disappear("synched",0,false);
	this.instance_11.setTransform(660,700);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6}]}).wait(330));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(338,1123.8,404.1,-214.69999999999993);
// library properties:
lib.properties = {
	id: '69182987DDD4DE42BD05F827860D643E',
	width: 720,
	height: 1280,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/wallbreak_atlas_1.png?1690445828426", id:"wallbreak_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['69182987DDD4DE42BD05F827860D643E'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;