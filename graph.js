let ctx = document.getElementById("chart_canvas");
let myChart = new Chart(ctx, {
	type: 'line',
	data: {
		datasets: [{
			label: 'Average Score'
		}]
	},
	options: {
		responsive: false,
		scales: {
			xAxes: [{
				type: 'linear',
				position: 'bottom',
			}]
		},
		elements: {
			line: {
				tension: 0.4, // disables bezier curves
			}
		}
	}
});

function addData(x, y){
	myChart.data.datasets[0].data.push({x: x, y: y});
	myChart.update();
}
