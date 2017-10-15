function Matrix(row, col){
	this.mat = [];
	this.columns = col;
	this.rows = row;
	for(let i=0; i<row; i++){
		this.mat[i] = [];
		for(let j=0; j<col; j++){
			this.mat[i][j] = 0;
		}
	}

	this.randomize = function(max = maxNeuValue){
		for(let i=0; i<this.rows; i++){
			this.mat[i] = [];
			for(let j=0; j<this.columns; j++){
				this.mat[i][j] = randomFloat(-max, max);
			}
		}
	};

	this.mutate = function(m_p = mutation_prob, rm_p = randomMutation_prob, m_c = mutation_coeff, maxV = maxNeuValue){
		for(let i=0; i<this.rows; i++){
			this.mat[i] = [];
			for(let j=0; j<this.columns; j++){
				if(randomProb(rm_p)){
					this.mat[i][j] = randomFloat(-maxV, maxV);
				}
				else if(randomProb(m_p)){
					this.mat[i][j] += this.mat[i][j] * m_c * randomSign();
				}
			}
		}
	};

	this.toString = function(){
		let s = "";
		for(let c=0; c<this.columns; c++){
			for(let r=0; r<this.rows; r++){
				if(this.mat[r][c] > 0){
					s += " ";
				}
				s += this.mat[r][c] + " ";
			}
			s += "\n";
		}
		return s;
	};

	this.get = function(row, col){
		if(col >= this.columns || col < 0){
			console.log("Col out of bound");
		}
		if(row >= this.rows || row < 0){
			console.log("Row out of bound");
		}
		return this.mat[row][col];
	};

	this.set = function(row, col, value){
		if(col >= this.columns || col < 0){
			console.log("Col out of bound");
		}
		if(row >= this.rows || row < 0){
			console.log("Row out of bound");
		}
		this.mat[row][col] = value;
	};

	this.clone = function(){
		let result = new Matrix(this.rows, this.columns);
		for(let r=0; r<this.rows; r++){
			for(let c=0; c<this.columns; c++){
				result.set(r, c, this.mat[r][c]);
			}
		}
		return result;
	};

}


