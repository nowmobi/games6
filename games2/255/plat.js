!function ()
{
	class Plat
	{
		static get I ()
		{
			this._I = this._I || new Plat();
			return this._I;
		}
		ShowInter (call)
		{
			console.log("调用显示插屏");
			try
			{
				platform.getInstance().showInterstitial(call)
			}
			catch (e)
			{
				call&&call();
				console.log("显示插屏报错");
			}
		}
		ShowVideo (succ, fail, desc=null)
		{
			console.log("调用显示视频");
			desc && Plat.I.SendAnay(Plat.Reward_Click, desc)
			try
			{
				platform.getInstance().showReward(succ, fail)
			}
			catch (e)
			{
				console.log("显示视频报错");
				succ && succ();
			}
		}
		GameStart (lev=0, inter=true)
		{
			this.SendAnay(Plat.Level_Begin, lev);
			this.HideFloat();
			inter && this.ShowInter();
		}
		GameEnd (v, h, T=0, R=0, L=null, D=1, B=null)
		{
			this.SendAnay(Plat.Level_End, v?Plat.Pass:Plat.Fail);
			this.SendAnay(Plat.Level_Reward, h);
			this.ShowFloat(T, R, L, D, B);
		}
		GameNext (n, v=true)
		{
			this.SendAnay(Plat.Level_Next, n);
			v && this.ShowInter();
		}
		
		ShowFloatMain (T=0, R=0, L=null, B=null)
		{
			Plat.I.SendAnay(Plat.Game_Page);
			this.ShowFloat(T, R, L, 1000, B);
		}
		ShowFloat (T=0, R=0, L=null, D=1, B=null)
		{
			console.log("调用显示悬浮窗", this.IsFloat, L, T, R, B, D);
			if(this.IsFloat) return;
			L = L!==null ? (L<=1 ? (L*100)+"vw" : L+"px") : null;
			T = T!==null ? (T<=1 ? (T*100)+"vh" : T+"px") : null;
			R = R!==null ? (R<=1 ? (R*100)+"vw" : R+"px") : null;
			B = B!==null ? (B<=1 ? (B*100)+"vh" : B+"px") : null;
			if(window.HUHU_showFloat)
			{
				this.Timeout = setTimeout(() =>
				{
					console.log("显示悬浮窗");
					this.IsFloat = true;
					window.HUHU_showFloat({top: T, left: L, bottom: B, right: R})
				}, D)
			}
		}
		HideFloat ()
		{
			clearTimeout(this.Timeout)
			console.log("调用隐藏悬浮窗", this.IsFloat);
			if(!this.IsFloat) true;
			this.IsFloat = false;
			window.HUHU_hideFloat && window.HUHU_hideFloat();
		}
		Tips (text)
		{
			Laya.stage.addChild(this._boxTips);
		
			var txtTips;
			if (this._arrTips.length)
			{
				txtTips = this._arrTips.pop();
			}
			else
			{
				txtTips = new Laya.Label();
				txtTips.stroke = 6;
				txtTips.bold = true;
				txtTips.strokeColor = "#111111";
				txtTips.color = "#FFFFFF";
				txtTips.align = "center";
				txtTips.valign = "middle";
				txtTips.wordWrap = true;
				txtTips.fontSize = 40;
				txtTips.width = Laya.stage.width*0.7;
				txtTips.anchorX = txtTips.anchorY = 0.5;
				txtTips.text = text;
				txtTips.x = Laya.stage.width*0.5;
			}
			this._boxTips.addChild(txtTips);
			txtTips.alpha = 0;
			txtTips.visible = true;
			txtTips.text = text;
			txtTips.y = Laya.stage.height * 0.38;
			Laya.Tween.to(txtTips, { alpha: 1 }, 280, Laya.Ease.quadOut, Laya.Handler.create(this, ()=>{
				Laya.Tween.to(txtTips, { y: Laya.stage.height * 0.28 }, 2000, Laya.Ease.quadOut, Laya.Handler.create(this, ()=>{
					Laya.Tween.to(txtTips, { alpha: 0 }, 300, Laya.Ease.quadOut, Laya.Handler.create(this, ()=>{
						txtTips && txtTips.parent && txtTips.parent.removeChild(txtTips);
						this._arrTips.push(txtTips);
					}))
				}))
			}));
		}
		SendAnay (keys, data)
		{
			console.log("发送事件", keys, data);
			window.HUHU_gaSend && window.HUHU_gaSend(keys, data)
		}
		
		GetCorners (camera, distance)
		{
			let halfFOV = (camera.fieldOfView * 0.5 ) * Math.PI * 2 / 360;
			let aspect = camera.aspectRatio;
			let height = distance * Math.tan(halfFOV);
			let width = height * aspect;
			return [width, height];
		}
		SetModelOffset (camera, scale=1, model=null, x=NaN, y=NaN)
		{
			if(camera)
			{
				camera.orthographic = !0,
				camera.orthographicVerticalSize = Laya.stage.height*0.5*0.01 * scale;
			}
			let width  = Laya.stage.width *0.5*0.01 * scale;
			let height = Laya.stage.height*0.5*0.01 * scale;
			if(model)
			{
				let xx = model.transform.position.x;
				let yy = model.transform.position.y;
				model.transform.position = new Laya.Vector3(isNaN(x)?xx:width*x, isNaN(y)?yy:height*y, model.transform.position.z);
			}
			return [width, height]
		}
		
		Lang (lang)
		{
			if(!this.L)
			{
				this.L = new Map();
				this.L.set("第一分店", "Branch1");
				this.L.set("第二分店", "Branch2");
				this.L.set("第三分店", "Branch3");
				this.L.set("第四分店", "Branch4");
				this.L.set("要是能雇佣个员工就好了!", "I wish I could hire a employee!")
				this.L.set("升级员工", "Upgrade employee")
				this.L.set("移动速度", "Speed")
				this.L.set("搬运容量", "Load")
				this.L.set("员工数量", "Number")
				this.L.set("升级员工移速", "Upgrade speed")
				this.L.set("升级搬运容量", "Upgrade load")
				this.L.set("升级收益", "Upgrade earnings")
				this.L.set("吃了你家的披萨，他很想在这里工作要雇佣吗？", "Ate your pizza. He really wants to work here. Want to hire?")
				this.L.set("老板娘", "Landlady")
				this.L.set("是否解锁特殊员工\n老板娘", "是否Unlock special employee\nLandlady")
				this.L.set("是否解锁特殊员工\n无人机", "是否Unlock special employee\nUAV")
				this.L.set("当前", "Current")
				this.L.set("已解锁", "Unlock")
				this.L.set("未解锁", "Locked")
				this.L.set("未开放", "Unopen")
				this.L.set("角色移动速度", "Move speed")
				this.L.set("角色搬运容量", "Bear load")
				this.L.set("角色货币收益", "Earnings")
				this.L.set("员工移动速度", "Employee move speed")
				this.L.set("员工搬运容量", "Employee bear load")
				this.L.set("升级玩家", "Upgrade player")
				this.L.set("收益", "Earnings")
				this.L.set("老板娘", "Landlady")
				this.L.set("老板娘", "Landlady")
				this.L.set("老板娘", "Landlady")
				this.L.set("老板娘", "Landlady")
				this.L.set("老板娘", "Landlady")
				
				
			}
			return this.L.has(lang) ? this.L.get(lang) : lang;
		}
	}
	Plat.Game_Start = "game_start";
	Plat.Loading_Begin = "loading_begin";
	Plat.Loading_End = "loading_end";
	Plat.Game_Page = "game_page";//显⽰游戏 主⻚⾯
	Plat.Level_Begin = "level_begin";
	Plat.Level_End = "level_end";
	Plat.Level_Reward = "level_reward";
	Plat.Level_Next = "level_next";
	Plat.Reward_Click = "reward_click";
	Plat.Fail = "Fail";
	Plat.Pass = "Pass";
	Plat.Next = "next";
	Plat.Back = "back";
	Plat.Replay = "replay";
	
	Plat.Settlement_reward = "Settlement_reward";
	window["Plat"] = Plat;
}()
