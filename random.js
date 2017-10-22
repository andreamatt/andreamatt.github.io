function randomBool(){
	return Math.random() > 0.5;
}

function randomProb(prob){
	return Math.random()<prob;
}

function randomFloat(min, max){
	return (Math.random() * (max-min)) + min;
}

function randomSign(){
	if(randomBool()){
		return 1;
	}
	return -1;
}

function randomInt(min, max, includeMax = false){
	if(includeMax){
		return Math.floor(Math.random()*(max-min+1)+min);	}
	else{
		return Math.floor(Math.random()*(max-min)+min);
	}
}