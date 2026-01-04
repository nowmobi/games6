


const scriptsInEvents = {

	async Gamesheet_Event312_Act2(runtime, localVars)
	{
		var array = JSON.parse(localVars.vJSON);
		
		if (array.includes(localVars.vLevel)) {
		  localVars.vExist = 1;
		} else {
		  localVars.vExist = 0;
		}
	},

	async Gamesheet_Event465_Act3(runtime, localVars)
	{
		var a = JSON.stringify({"Moves":30,"Board":[2,1],"Used":["D4"],"Items":{"D4":[[0,0],[1,0]]},"Targets":[]});
		localVars.vValue = a;
	},

	async Gamesheet_Event490_Act3(runtime, localVars)
	{
		var a = JSON.stringify({"Moves":30,"Board":[5,4],"Used":["D1","Wall"],"Items":{"D1":[[0,0],[1,0],[1,1],[2,1],[3,1],[3,2],[4,2],[4,3]],"Wall":[[3,3],[2,3],[2,2],[1,2],[1,3],[0,3],[0,2],[0,1],[4,1],[4,0],[3,0],[2,0]]},"Targets":[]});
		localVars.vValue = a;
	},

	async Gamesheet_Event491_Act3(runtime, localVars)
	{
		var a = JSON.stringify({"Moves":30,"Board":[3,2],"Used":["D1","D4"],"Items":{"D1":[[1,0],[0,1]],"D4":[[1,1],[2,1]]},"Targets":[]});
		localVars.vValue = a;
	},

	async Gamesheet_Event493_Act5(runtime, localVars)
	{
		var a = JSON.stringify({"Moves":30,"Board":[6,4],"Used":["D1","D2","D4","Wall"],"Items":{"Wall":[[3,2],[3,3],[2,3],[2,2],[1,0],[1,1],[0,1],[4,0],[4,1],[5,1]],"D1":[[3,1],[2,1],[2,0],[3,0],[5,2],[0,2],[5,0],[4,2],[4,3],[5,3]],"D2":[[0,0],[1,2],[1,3],[0,3]]},"Targets":[]});
		localVars.vValue = a;
	},

	async Generalsheet_Event45_Act1(runtime, localVars)
	{
		var stringArray = localVars.ValueString;
		var array = JSON.parse(stringArray);
		
		if (array.includes(localVars.SearchFor)) {
		  localVars.vExist = 1;
		} else {
		  localVars.vExist = 0;
		}
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

