function Generation(amount = amountOfCreatures, layers_dim = layersDim){
	this.creatures = [];
	this.amount = amount;
	this.layers_dim = layers_dim.slice();
	for(let i=0; i<amount; i++){
		this.creatures[i] = new Brain(layers_dim, false);
	}

	this.evolve = function(){
		// sort
		this.creatures.sort(function(a, b){
			return a.score - b.score;
		});

		// method 1: new half is child of best half
		if(! newChildsEveryGen){
			for(let i=0; i<this.amount/2; i++){
				this.creatures[i+this.amount/2] = this.creatures[i].getChild();
				this.creatures[i].mutate();
			}
		}

		// method 2: a quarter is new, other quarter is child
		else{
			// childs
			for(let i=0; i<this.amount/4; i++){
				this.creatures[i + this.amount/2] = this.creatures[i].getChild();
			}

			// new ones
			for(let i=this.amount*3/4; i<this.amount; i++){
				this.creatures[i] = new Creature(this.layers_dim);
			}
		}

	};
}

function Creature(layers_dim, isChild = false){
	this.brain = 0;
	if(! isChild){
		this.brain = new Brain(layers_dim);
	}
	this.score = 0;

	this.getChild = function(){
		let result = new Creature(this.brain.layers_dim, true);
		result.brain = this.brain.getChild();
		return result;
	};

	this.increaseScore = function(){
		this.score++;
	};

	this.calculate = function(input){
		return this.brain.calculate(input);
	};

	this.mutate = function(){
		this.brain.mutate();
	};
}

function Brain(layers_dim, isChild = false){
    this.layers_dim = layers_dim.slice();
    this.layers = [];
    if(isChild){
        for(let i=0; i<layers_dim.length-1; i++){
            this.layers[i] = 0;
        }
    }
    else{

        for(let i=0; i<layers_dim.length-1; i++){
            this.layers[i] = new Matrix(layers_dim[i], layers_dim[i+1]);
            for(let j=0; j<layers_dim[i]; j++){
                for(let k=0; k<layers_dim[i+1]; k++){
                    console.log(this.layers[i].toString());
                }
                console.log("_");
            }
        }
    }

	this.mutate = function(){
		for(let i=0; i<this.layers.length; i++){
			this.layers[i].mutate();
		}
	};

	this.randomize = function(){
		for(let i=0; i<this.layers.length; i++){
			this.layers[i].randomize();
		}
	};

	this.getChild = function(){
		let result = new Brain(this.layers_dim, true);

        for(let i=0; i<this.layers.length; i++) {
            result.layers[i] = this.layers[i].clone();
            result.layers[i].mutate(rm_p = 0.5);
        }
	};

	this.calculate = function(input){
		let result = input.slice();
		for(let i=0; i<this.layers.length; i++){
			result = getOutput(this.layers[i], result);
		}
		return result;
	};
}

function getOutput(Mat, inputs){
	if(Mat.rows !== inputs.length){
		console.log("Doesn't seem good...");
	}
	let result = [];
	for(let i=0; i<Mat.columns; i++){
		result[i] = 0;
	}

	for(let r=0; r<Mat.rows; r++){
		for(let c=0; c<Mat.columns; c++){
			result[c] += inputs[r]*Mat.get(r, c);
		}
	}
	return result;
}


