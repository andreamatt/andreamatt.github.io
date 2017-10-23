function drawGrid(obs, currentY, rows, cols, currentX){
	let s = "{<br>";
	for(let r=0; r<rows; r++){
		for(let c=0; c<cols; c++){
			if(r === rows-1 && c === currentX){
				s += "M, ";
			}
			else {
				if (r === currentY) {
					s += obs[c] + ", ";
				}
				else {
					s += 0 + ", ";
				}
			}
		}
		s += "<br>";
	}
	s += "}";
	//console.log("Drawing(obstacle: " + obs + ", at Y: " + currentY + ", at X: " + currentX + ")");
	document.getElementById("grid").innerHTML = s;
}

function drawScore(score){
	document.getElementById("score").innerHTML = "Score: " + score;
}


function drawCreatureID(id){
	document.getElementById("creature").innerHTML = "Creature: " + id;
}

function drawGenInfo(averageScore, genID, amountOfCreatures){
	document.getElementById("genInfo").innerHTML = amountOfCreatures + " creatures. Gen: " + genID + ", avg score: " + averageScore;
	addData(genID, averageScore);
}


