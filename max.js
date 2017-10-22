function maxID(vec){
	if(vec === null || vec.length === 0){
		return -1;
	}
	let maxId = 0;
	let max = vec[0];
	for(let i=1; i<vec.length; i++){
		if(vec[i] > max){
			max = vec[i];
			maxId = i;
		}
	}
	return maxId;
}

function maxV(vec){
	if(vec === null || vec.length === 0){
		return -1;
	}
	let max = vec[0];
	for(let i=1; i<vec.length; i++){
		if(vec[i] > max){
			max = vec[i];
		}
	}
	return max;
}
