function PickRandomSymbol() {
	const totalRate = window.symbols.reduce((total, symbol) => total + symbol.Appearance_Rate, 0);
	let random = Math.random() * totalRate;

	for (const symbol of window.symbols) {
		random -= symbol.Appearance_Rate;
		if (random <= 0) {
			return symbol;
		}
	}

	return null;
}


function HSLToRGB(h, s, l) {
  s /= 100;
  l /= 100;
  const k = n => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = n =>
    l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  return [255 * f(0), 255 * f(8), 255 * f(4)];
};

//var num = Math.floor(Math.random() * 360);



const scriptsInEvents = {

	async Gamesheet_Event37_Act1(runtime, localVars)
	{
		localVars.vRnd = PickRandomSymbol().Name;
	},

	async Gamesheet_Event38_Act1(runtime, localVars)
	{
		localVars.vRnd = PickRandomSymbol().Name;
	},

	async Gamesheet_Event209_Act2(runtime, localVars)
	{
		runtime.globalVars.Win = (Math.round(runtime.globalVars.Win * 100) / 100).toFixed(2)
	},

	async Gamesheet_Event236_Act1(runtime, localVars)
	{
		var val = (Math.round(localVars.Num * 100) / 100).toFixed(2)
		localVars.vShowNum = val.toString();
	},

	async Gamesheet_Event358_Act1(runtime, localVars)
	{
		var num = localVars.vNum;
		localVars.R = HSLToRGB(num , 100 , 50)[0];
		localVars.G = HSLToRGB(num , 100 , 50)[1];
		localVars.B = HSLToRGB(num , 100 , 50)[2];
	},

	async Loadersheet_Event4_Act3(runtime, localVars)
	{
		var configJSON = JSON.parse(localVars.vJSON)
		window.symbols = Object.values(configJSON.Symbols);
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

