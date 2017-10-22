let cols = 3;
let rows = cols;

let currentY = 0;
let obstacleID = 3;
let currentX = Math.floor(cols/2);
let currentCreature = 0;
let genID = 0;
let creatureAmount = 200;
let gen = new Generation(creatureAmount);
let obstacles = getObstacles(cols);
let lefts = 0;
let rights = 0;
let centers = 0;
let timer;
let timeInterval = 3;
let totalScore = 0;

window.onload = function(){

	drawGenInfo(totalScore/creatureAmount, genID, creatureAmount);
	//updateChart(genID, totalScore/creatureAmount);
	drawCreatureID(currentCreature);
	timer = setInterval(loop, timeInterval);
};

function loop(){
	// new gen if necessary
	if(currentCreature === creatureAmount -1){
		drawGenInfo(totalScore/creatureAmount, genID, creatureAmount);
		//console.log("\n\nNew Gen");
		gen.evolve();
		//console.log("Average: " + totalScore/creatureAmount + ", L: " + lefts + ", C: " + centers + ", R: " + rights);
		lefts = rights = centers = 0;
		totalScore = 0;
		genID++;
		currentY = 0;
		currentX = 0;
		currentCreature = 0;
	}


	let input = obstacles[obstacleID].slice();
	let centeredX = currentX - (cols-1)/2;
	input.push(centeredX);
	//console.log(input);
	//console.log("Creatures: " + gen.creatures);
	//console.log("Creatures: " + gen.creatures);
	//console.log("CurrentC: " + gen.creatures[currentCreature]);
	//console.log("Calc: " + gen.creatures[currentCreature].calculate);
	//console.log("Input: " + input + ", Output: " + gen.creatures[currentCreature].calculate(input));
	let output = gen.creatures[currentCreature].calculate(input);
	if(output.length === 1) {
		if (output < 0.3) {
			currentX--;
			lefts++;
		}
		else if (output > 0.7) {
			currentX++;
			rights++;
		}
		else {
			//dk
			centers++;
		}
	}

	else {
		let max_id = maxID(output);
		switch (max_id) {
			case 0:
				currentX--;
				lefts++;
				break;
			case 1:
				// stay there;
				centers++;
				break;
			case 2:
				currentX++;
				rights++;
				break;
		}
	}
	if(currentX === cols){
		currentX--;
	}
	else if(currentX === -1){
		currentX++;
	}

	if(gonnaLose()){
		drawGrid(obstacles[obstacleID], currentY, rows, cols, currentX);
		currentY = 0;
		totalScore += gen.creatures[currentCreature].score;
		currentCreature++;
		currentX = Math.floor(cols/2);
		drawCreatureID(currentCreature);
	}
	else{
		gen.creatures[currentCreature].increaseScore();
		drawGrid(obstacles[obstacleID], currentY, rows, cols, currentX);
		currentY++;
		drawScore(gen.creatures[currentCreature].score);
		if(currentY === rows){
			currentY = 0;
			obstacleID = randomInt(0, obstacles.length);
		}
	}

}

window.onkeydown = function(event){
	switch (event.keyCode) {
		case 80:
			if(timer === null){
				timer = setInterval(loop, timeInterval);
			}
			else{
				clearInterval(timer);
				timer = null;
			}
			break;
	}
};

function gonnaLose() {
	if (currentY !== rows - 2) {
		return false;
	}
	else if(gen.creatures[currentCreature].score > 200) {
		return true;
	}
	else{
		return obstacles[obstacleID][currentX] === 1;
	}
}

function getObstacles(width){
	let result = [[0], [1]];
	let currentLength = 2;
	for(let w=1; w<width; w++){
		currentLength = result.length;
		for(let i=0; i<currentLength; i++){
			result[i] = [0].concat(result[i]);
			result[i+currentLength] = result[i].slice();
			result[i+currentLength][0] = 1;
		}
	}

	// remove empty and full obstacles (first and last)
	result = result.slice(1, result.length-1);

	return result;
}

function obstaclesToString(obstacles){
	let s = "{\n";
	for(let i=0; i<obstacles.length; i++){
		s += obstacles[i].toString() + "\n";
	}
	s += "}\n";
	return s;
}

