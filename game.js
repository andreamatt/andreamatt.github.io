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

