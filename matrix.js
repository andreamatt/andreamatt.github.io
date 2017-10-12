function Matrix(row, col){
	this.mat = [];
	this.columns = col;
	this.rows = row;
	for(i=0; i<row; i++){
		this.mat[i] = [];
		for(j=0; j<col; j++){
			this.mat[i][j] = 0;
		}
	}

	this.randomize = function(max = maxNeuValue){
		for(i=0; i<this.row; i++){
			this.mat[i] = [];
			for(j=0; j<this.col; j++){
				this.mat[i][j] = randomFloat(-max, max);
			}
		}
	}

	this.mutate = function(m_p = mutation_prob, rm_p = randommut_prob, m_c = mutation_coeff, maxV = maxNeuValue){
		for(i=0; i<this.row; i++){
			this.mat[i] = [];
			for(j=0; j<this.col; j++){
				if(randomProb(rm_p)){
					this.mat[i][j] = randomFloat(-maxV, maxV);
				}
				else if(randomProb(m_p)){
					this.mat[i][j] += this.mat[i][j] * m_c * randomSign();
				}
			}
		}
	}

	this.toString = function(){
		s = "";
		for(c=0; c<this.columns; c++){
			for(r=0; r<this.rows; r++){
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
	}

	this.clone = function(){
		result = new Matrix(this.rows, this.columns);
		for(r=0; r<this.rows; r++){
			for(c=0; c<this.columns; c++){
				result.set(r, c, this.mat[r][c]);
			}
		}
		return result;
	}
}

function GetOutput(Mat, inputs){
	if(Mat.rows !== inputs.length){
		console.log("Doesnt seem good...");
	}
	result = [];
	for(i=0; i<Mat.columns; i++){
		result[i] = 0;
	}

	for(r=0; r<Mat.rows; r++){
		for(c=0; c<Mat.columns; c++){
			result[c] += inputs[r]*Mat.get(r, c);
		}
	}
	return result;
}

