var rt;
var gameStarted = false;
var genListLevel = 500;
var genStr = "";
var script1Loaded;
var script2Loaded;
var tries = 0;

function setRT(runtime) {
	rt = runtime;
}

var allWords;
var board, wordArr, wordBank, wordsActive, mode;
var wordsList = [];
var correctionList = ""
var maxBoardSize = 8;
var genCount = 0;
var jsonAll = "";
var minXX,maxXX,minYY,maxYY;
var challengeWord = "";

var Bounds = {  
	top:0, right:0, bottom:0, left:0,

	Update:function(x,y){
		this.top = Math.min(y,this.top);
		this.right = Math.max(x,this.right);
		this.bottom = Math.max(y,this.bottom);
		this.left = Math.min(x,this.left);
	},

	Clean:function(){
		this.top = 999;
		this.right = 0;
		this.bottom = 0;    
		this.left = 999;
	}
};


function Generate() { 
	rt.callFunction("Gen" , 1);
}


function Create(allWords , vChallengeWord) {
	CleanVars();
	wordArr = allWords;
	challengeWord = vChallengeWord;

	if (PopulateBoard())  {
		if (CheckMaxBoardSize()) {
			let errFound = false;

			for(var i = 0; i < wordsActive.length; i++){ 
				if ( CheckWordMisplace(i) ) {
					errFound = true;
				}

				if(i == wordsActive.length-1) { 

					if(!errFound) {
						Done();
					}
					else {
						Generate();
					}
				}
			}
		}

		else {
			Generate();
		}
	}
	else {
		Generate();

	}

}



function CheckWordMisplace(curWord) {

	var curWordStartPoint = (wordsActive[curWord].dir == 0 ? wordsActive[curWord].x : wordsActive[curWord].y);
	var curWordEndPoint = (wordsActive[curWord].dir == 0 ? (wordsActive[curWord].x + wordsActive[curWord].string.length) : (wordsActive[curWord].y + wordsActive[curWord].string.length));
	var curWordAxis = (wordsActive[curWord].dir == 0 ? wordsActive[curWord].y : wordsActive[curWord].x)

	for(var i = 0; i < wordsActive.length; i++){ 

		if (wordsActive[curWord].string != wordsActive[i].string) {
			var iStartPoint = (wordsActive[i].dir == 0 ? wordsActive[i].x : wordsActive[i].y);
			var iEndPoint = (wordsActive[i].dir == 0 ? (wordsActive[i].x + wordsActive[i].string.length) : (wordsActive[i].y + wordsActive[i].string.length));
			var iAxis = (wordsActive[i].dir == 0 ? wordsActive[i].y : wordsActive[i].x)

			if (wordsActive[curWord].dir == wordsActive[i].dir && curWordAxis == iAxis) {
				if (curWordStartPoint >= iStartPoint && curWordEndPoint <= iEndPoint) {
					return true
				}
				else if (iStartPoint >= curWordStartPoint && iEndPoint <= curWordEndPoint) {
					return true
				}
			}
		}

	}
	return false
}

function CheckMaxBoardSize() {

	let minX = Infinity;
	let maxX = -Infinity;

	let minY = Infinity;
	let maxY = -Infinity;

	for(var i = 0; i < wordsActive.length; i++){ 

		if (wordsActive[i].dir == 0) {

			if (wordsActive[i].x + (wordsActive[i].string).length-1 > maxX) {
				maxX = wordsActive[i].x + (wordsActive[i].string).length-1;
			}
			if (wordsActive[i].x < minX) {
				minX = wordsActive[i].x
			}
		}
		else {
			if (wordsActive[i].y + (wordsActive[i].string).length-1 > maxY) {
				maxY = wordsActive[i].y + (wordsActive[i].string).length-1;
			}
			if (wordsActive[i].y < minY) {
				minY = wordsActive[i].y
			}
		}

	}

	minXX = minX;
	maxXX = maxX;
	minYY = minY;
	maxYY = maxY;
	return !(((maxX - minX) > maxBoardSize-1) || ((maxY - minY) > maxBoardSize-1))
}

function Done() {
	for(var i = 0; i < wordsActive.length; i++){ 
		rt.callFunction("CreateWord", wordsActive[i].string, wordsActive[i].dir, wordsActive[i].x, wordsActive[i].y, "" , 0);

		if(i == wordsActive.length-1) { 
			rt.callFunction("WordsDone" , 0);
			CreateChallengeWord()
		}
	}
}

function CreateChallengeWord() {
	if (challengeWord.length >= 3 ) {
		
		var pos = GetChallengeWordPos();
		rt.callFunction("CreateWord", challengeWord, pos[2], pos[0], pos[1], "" , 1);

	}
}

function GetChallengeWordPos() {

	let chances = []

	if (board[minXX + challengeWord.length][minYY]===null) {
		let letterCount= 0;
		for(var i = minXX; i < maxXX; i++){ 

			if ((board[i][minYY]===null) && (board[i][minYY+1]===null)) {
				letterCount++
				if (letterCount == challengeWord.length) {
					chances.push([minXX , minYY , 0])
					break;
				}
			}
			else { break;}
		}
	}
	if (board[maxXX - challengeWord.length][minYY]===null) {

		let letterCount= 0;
		for(var i = (maxXX - challengeWord.length+1); i <= maxXX; i++){ 
			if ((board[i][minYY]===null) && (board[i][minYY+1]===null)) {
				letterCount++
				if (letterCount == challengeWord.length) {
					chances.push([maxXX - challengeWord.length+1 , minYY , 0])
					break;
				}
			}
			else { break;}
		}
	}
	if (board[minXX + challengeWord.length][maxYY]===null) {
		let letterCount= 0;
		for(var i = minXX; i < maxXX; i++){ 

			if ((board[i][maxYY]===null) && (board[i][maxYY-1]===null)) {
				letterCount++
				if (letterCount == challengeWord.length) {
					chances.push([minXX , maxYY , 0])
					break;
				}
			}
			else { break;}
		}
	}
	if (board[maxXX - challengeWord.length][maxYY]===null) {

		let letterCount= 0;
		for(var i = (maxXX - challengeWord.length+1); i <= maxXX; i++){ 
			if ((board[i][maxYY]===null) && (board[i][maxYY-1]===null)) {
				letterCount++
				if (letterCount == challengeWord.length) {
					chances.push([maxXX - challengeWord.length+1 , maxYY , 0])
					break;
				}
			}
			else { break;}
		}
	}
	//vertical

	if (board[minXX][minYY + challengeWord.length]===null) {
		let letterCount= 0;

		for(var i = minYY; i < maxYY; i++){ 

			if ((board[minXX][i]===null) && (board[minXX+1][i]===null)) {
				letterCount++
				if (letterCount == challengeWord.length) {
					chances.push([minXX , minYY , 1])
					break;
				}
			}
			else { break;}
		}
	}
	if (board[maxXX][minYY + challengeWord.length]===null) {
		let letterCount= 0;
		for(var i = minYY; i < maxYY; i++){ 
			if ((board[maxXX][i]===null) && (board[maxXX-1][i]===null)) {
				letterCount++
				if (letterCount == challengeWord.length) {
					chances.push([maxXX , minYY , 1])
					break;
				}
			}
			else { break;}
		}
	}
	if (board[minXX][maxYY - challengeWord.length]===null) {
		let letterCount= 0;
		for(var i = maxYY - challengeWord.length+1 ; i <= maxYY; i++){ 

			if ((board[minXX][i]===null) && (board[minXX+1][i]===null)) {
				letterCount++
				if (letterCount == challengeWord.length) {
					chances.push([minXX , maxYY-challengeWord.length+1  , 1])
					break;
				}
			}
			else { break;}
		}
	}
	if (board[maxXX][maxYY - challengeWord.length]===null) {
		let letterCount= 0;
		for(var i = maxYY - challengeWord.length+1 ; i <= maxYY; i++){ 

			if ((board[maxXX][i]===null) && (board[maxXX-1][i]===null)) {
				letterCount++
				if (letterCount == challengeWord.length) {
					chances.push([maxXX , maxYY-challengeWord.length+1 , 1])
					break;
				}
			}
			else { break;}
		}
	}

	if (chances.length > 0) {
		const randomIndex = Math.floor(Math.random() * chances.length);
		return chances[randomIndex];
	}
	else {
		if ((maxXX - minXX) > (maxYY - minYY)) {
			chances.push([minXX , minYY-2 , 0])
		}
		else {
			chances.push([maxXX + 2 , minYY , 1])
		}
		
		return chances[0];
	}


}

function CleanVars(){

	Bounds.Clean();
	wordBank = [];
	wordsActive = [];
	board = [];


	for(var i = 0; i < 60; i++){
		board.push([]);
		for(var j = 0; j < 60; j++){
			board[i].push(null);
		}
	}

}


function PopulateBoard(){
	PrepareBoard();

	for(var i=0,isOk=true,len=wordBank.length; i<len && isOk; i++){
		isOk = AddWordToBoard();
	}  
	return isOk;
}


function PrepareBoard(){
	wordBank=[];

	for(var i = 0, len = wordArr.length; i < len; i++){
		wordBank.push(new WordObj(wordArr[i]));
	}

	for(i = 0; i < wordBank.length; i++){
		for(var j = 0, wA=wordBank[i]; j<wA.char.length; j++){
			for(var k = 0, cA=wA.char[j]; k<wordBank.length; k++){
				for(var l = 0,wB=wordBank[k]; k!==i && l<wB.char.length; l++){
					wA.totalMatches += (cA === wB.char[l])?1:0;
				}
			}
		}
	}  
}


function AddWordToBoard(){
	var i, len, curIndex, curWord, curChar, curMatch, testWord, testChar, 
		minMatchDiff = 9999, curMatchDiff;  

	if(wordsActive.length < 1){
		curIndex = 0;
		for(i = 0, len = wordBank.length; i < len; i++){
			if (wordBank[i].totalMatches < wordBank[curIndex].totalMatches){
				curIndex = i;
			}
		}
		wordBank[curIndex].successfulMatches = [{x:12,y:12,dir:0}];
	}
	else{  
		curIndex = -1;

		for(i = 0, len = wordBank.length; i < len; i++){
			curWord = wordBank[i];
			curWord.effectiveMatches = 0;
			curWord.successfulMatches = [];
			for(var j = 0, lenJ = curWord.char.length; j < lenJ; j++){
				curChar = curWord.char[j];
				for (var k = 0, lenK = wordsActive.length; k < lenK; k++){
					testWord = wordsActive[k];
					for (var l = 0, lenL = testWord.char.length; l < lenL; l++){
						testChar = testWord.char[l];            
						if (curChar === testChar){
							curWord.effectiveMatches++;

							var curCross = {x:testWord.x,y:testWord.y,dir:0};              
							if(testWord.dir === 0){                
								curCross.dir = 1;
								curCross.x += l;
								curCross.y -= j;
							} 
							else{
								curCross.dir = 0;
								curCross.y += l;
								curCross.x -= j;
							}

							var isMatch = true;

							for(var m = -1, lenM = curWord.char.length + 1; m < lenM; m++){
								var crossVal = [];
								if (m !== j){
									if (curCross.dir === 0){
										var xIndex = curCross.x + m;

										if (xIndex < 0 || xIndex > board.length){
											isMatch = false;
											break;
										}

										crossVal.push(board[xIndex][curCross.y]);
										crossVal.push(board[xIndex][curCross.y + 1]);
										crossVal.push(board[xIndex][curCross.y - 1]);

									}
									else{
										var yIndex = curCross.y + m;

										if (yIndex < 0 || yIndex > board[curCross.x].length){
											isMatch = false;
											break;
										}

										crossVal.push(board[curCross.x][yIndex]);
										crossVal.push(board[curCross.x + 1][yIndex]);
										crossVal.push(board[curCross.x - 1][yIndex]);
									}

									if(m > -1 && m < lenM-1){
										if (crossVal[0] !== curWord.char[m]){
											if (crossVal[0] !== null){
												isMatch = false;                  
												break;
											}
											else if (crossVal[1] !== null){
												isMatch = false;
												break;
											}
											else if (crossVal[2] !== null){
												isMatch = false;                  
												break;
											}
										}
									}
									else if (crossVal[0] !== null){
										isMatch = false;                  
										break;
									}
								}
							}

							if (isMatch === true){                
								curWord.successfulMatches.push(curCross);
							}
						}
					}
				}
			}

			curMatchDiff = curWord.totalMatches - curWord.effectiveMatches;

			if (curMatchDiff<minMatchDiff && curWord.successfulMatches.length>0){
				curMatchDiff = minMatchDiff;
				curIndex = i;
			}
			else if (curMatchDiff <= 0){
				return false;
			}
		}
	}

	if (curIndex === -1){
		return false;
	}

	var spliced = wordBank.splice(curIndex, 1);
	wordsActive.push(spliced[0]);

	var pushIndex = wordsActive.length - 1,
		rand = Math.random(),
		matchArr = wordsActive[pushIndex].successfulMatches,
		matchIndex = Math.floor(rand * matchArr.length),  
		matchData = matchArr[matchIndex];

	wordsActive[pushIndex].x = matchData.x;
	wordsActive[pushIndex].y = matchData.y;
	wordsActive[pushIndex].dir = matchData.dir;

	for(i = 0, len = wordsActive[pushIndex].char.length; i < len; i++){
		var xIndex = matchData.x,
			yIndex = matchData.y;

		if (matchData.dir === 0){
			xIndex += i;    
			board[xIndex][yIndex] = wordsActive[pushIndex].char[i];
		}
		else{
			yIndex += i;  
			board[xIndex][yIndex] = wordsActive[pushIndex].char[i];
		}

		Bounds.Update(xIndex,yIndex);

	}

	return true;

}

function BoardCharToElement(c){
	var arr=(c)?['square','letter']:['square'];
	return EleStr('div',[{a:'class',v:arr}],c);
}

function WordObj(stringValue){
	this.string = stringValue;
	this.char = stringValue.split("");
	this.totalMatches = 0;
	this.effectiveMatches = 0;
	this.successfulMatches = [];  
}


function EleStr(e,c,h){
	h = (h)?h:"";
	for(var i=0,s="<"+e+" "; i<c.length; i++){
		s+=c[i].a+ "='"+ArrayToString(c[i].v," ")+"' ";    
	}
	return (s+">"+h+"</"+e+">");
}

function ArrayToString(a,s){
	if(a===null||a.length<1)return "";
	if(s===null)s=",";
	for(var r=a[0],i=1;i<a.length;i++){r+=s+a[i];}
	return r;
}




const scriptsInEvents = {

	async Gamesheet_Event52_Act3(runtime, localVars)
	{
		maxBoardSize = localVars.vMaxBoardSize
	},

	async Gamesheet_Event55_Act3(runtime, localVars)
	{
		maxBoardSize = localVars.vMaxBoardSize
	},

	async Gamesheet_Event80_Act5(runtime, localVars)
	{
		tries++;
	},

	async Gamesheet_Event87_Act2(runtime, localVars)
	{
		localVars.vTries = tries;
	},

	async Gamesheet_Event97_Act1(runtime, localVars)
	{
		wordsList = [];
	},

	async Gamesheet_Event99_Act2(runtime, localVars)
	{
		wordsList.push(localVars.vCurWord)
	},

	async Gamesheet_Event101_Act3(runtime, localVars)
	{
		Create(wordsList , localVars.vChallengeWord);
	},

	async Gamesheet_Event129_Act3(runtime, localVars)
	{
		console.log("Level " + localVars.vCurLevel)
		jsonAll +=   '"' + localVars.vCurLevel + '"' + ':' + localVars.vJSONCurLevel + ',';
	},

	async Gamesheet_Event130_Act1(runtime, localVars)
	{
		jsonAll = jsonAll.substring(0, jsonAll.length - 1);
		jsonAll = '{' + jsonAll + '}'
		console.log( JSON.parse(jsonAll))
	},

	async Gamesheet_Event250(runtime, localVars)
	{
		if (allWords.includes(localVars.Word)) {
			localVars.vExist = 1;
		}
	},

	async Gamesheet_Event449(runtime, localVars)
	{
		var str = localVars.vList;
		var sum = 0;
		var myJSON = JSON.parse(localVars.vJSON);
		
		
		for (let i = 0; i < str.split(',').length-1 ; i++) {
			var a = str.split(',')[i];
			sum += myJSON.GiftsChance[a].Chance;
		}
		let random = Math.random() * sum;
		
		for (let i = 0; i < str.split(',').length-1 ; i++) {
			var a = str.split(',')[i];
			random -= myJSON.GiftsChance[a].Chance;
			if (random <= 0) {
				localVars.vRes = myJSON.GiftsChance[a].Name;
				break;
			}
		}
		
	},

	async Loadersheet_Event2_Act3(runtime, localVars)
	{
		setRT(runtime);
	},

	async Loadersheet_Event6_Act2(runtime, localVars)
	{
		allWords = localVars.vWords.split(',');
	},

	async Creatorsheet_Event3_Act1(runtime, localVars)
	{
		setRT(runtime);
	},

	async Creatorsheet_Event8_Act5(runtime, localVars)
	{
		var res = allWords.filter( (word) => ( check(word , localVars.vInputWord) ));
		
		function check(word , letters) { 
			var str = letters.split('');
			var count = 0;
		
			for(var i = 0; i < word.length; i++){ 
		
				if ( str.includes(word.split('')[i]) )  {
		
					count++
					str.splice(str.indexOf(word.split('')[i]), 1);
				}
				else return false;
		
			}
			
			return word
		}
		
		for(var i = 0; i < res.length; i++){ 
			runtime.callFunction("AddToBonusList" , res[i])		
		}
	},

	async Creatorsheet_Event36_Act1(runtime, localVars)
	{
		runtime.globalVars.GenListLevel = genListLevel;
	},

	async Creatorsheet_Event37_Act1(runtime, localVars)
	{
		tries = 0;
	},

	async Creatorsheet_Event45_Act1(runtime, localVars)
	{
		runtime.globalVars.GenListLevel = genListLevel;
	},

	async Creatorsheet_Event45_Act3(runtime, localVars)
	{
		genListLevel++;
		runtime.globalVars.GenListLevel = genListLevel;
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

