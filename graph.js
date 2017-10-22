
google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawChart);

var globalData;

function drawChart() {

	globalData = new google.visualization.DataTable();
	
	globalData.addColumn('number', 'X');
	globalData.addColumn('number', 'Avg Score');

	globalData.addRows([
		[0, 0]
	]);

	var options = {
		hAxis: {
			title: 'Generation'
		},
		vAxis: {
			title: 'Average Score'
		}
	};

	var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
	chart.draw(globalData, options);
}

function updateChart(genID, avgScore){
	//globalData.addRows([
		//[genID, avgScore]
	//]);
}