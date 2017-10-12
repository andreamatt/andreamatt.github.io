function Brain(layers_dim, isChild = false){
    this.layers_dim = layers_dim.slice();
    this.layers = [];
    if(isChild){
        for(i=0; i<layers_dim.length-1; i++){
            this.layers[i] = 0;
        }
    }
    else{

        for(i=0; i<layers_dim.length-1; i++){
            this.layers[i] = new Matrix(layers_dim[i], layers_dim[i+1]);
            for(j=0; j<layers_dim[i]; j++){
                for(k=0; k<layers_dim[i+1]; k++){
                    console.log(this.layers[i].toString());
                }
                console.log("_");
            }
        }
    }

	this.mutate = function(){
		for(l in this.layers){
			l.mutate();
		}
	}

	this.randmize = function(){
		for(l in this.layers){
			l.randmize();
		}
	}

	this.getChild = function(){
		result = new Brain(this.layers_dim);

        for(i=0; i<this.layers.length; i++) {
            result.layers[i] = this.layers[i].clone();
            result.layers[i].mutate(rm_p = 0.5);
        }
	}

	this.
}


