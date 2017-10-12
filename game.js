function Brain(layers_dim){
	this.layers = [];
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



