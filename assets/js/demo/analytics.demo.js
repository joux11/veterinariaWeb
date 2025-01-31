/*
Template Name: ASPSTUDIO - Responsive Bootstrap 5 Admin Template
Version: 3.3.0
Author: Sean Ngu
Website: http://www.seantheme.com/asp-studio/
*/

function newDate(days) {
	return moment().add(days, 'd').format('D MMM');
}

function newDateString(days) {
	return moment().add(days, 'd').format();
}


var options = {
	maintainAspectRatio: false,
	elements: {
		line: {
			tension: 0.000001
		}
	},
	legend: {
		display: false
	},
	tooltips: {
		mode: 'nearest',
		callbacks: {
			label: function(tooltipItem, data) {
				var label = data.datasets[tooltipItem.datasetIndex].label || '';

				if (label) {
				label += ': ';
				}
				label += Math.round(tooltipItem.yLabel * 100) / 100;
				label = '$' + label;
				return label;
			},
			labelColor: function(tooltipItem, chart) {
				console.log(tooltipItem.datasetIndex);
				console.log(chart);
				return {
					borderColor: 'rgba('+ app.color.white + ', .75)',
					backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].color
				};
			},
			labelTextColor: function(tooltipItem, chart) {
				return app.color.white;
			}
		}
	}
};

var chart1, chart2, chart3, chart4, chart5;

var handleRenderChart = function() {
	Chart.defaults.color = 'rgba('+ app.color.componentColorRgb + ', .65)';
	Chart.defaults.font.family = app.font.family;
	Chart.defaults.font.weight = 600;
	Chart.defaults.scale.grid.color = 'rgba('+ app.color.componentColorRgb + ', .15)';
	Chart.defaults.scale.ticks.backdropColor = 'rgba('+ app.color.componentColorRgb + ', 0)';
	Chart.defaults.scale.beginAtZero = true;
	Chart.defaults.plugins.tooltip.padding = 8;
	Chart.defaults.plugins.tooltip.backgroundColor = 'rgba('+ app.color.gray900Rgb +', .95)';
	Chart.defaults.plugins.tooltip.titleFont.family = app.font.family;
	Chart.defaults.plugins.tooltip.titleFont.weight = 600;
	Chart.defaults.plugins.tooltip.footerFont.family = app.font.family;
	Chart.defaults.plugins.legend.display = false;
	
	// #chart1
	options.scales = {
		yAxes: {
			ticks: {
				beginAtZero: true,
				min: 0,
				max: 750,
				stepSize: 250
			}
		}
	};
	var ctx = document.getElementById('chart1').getContext('2d');
	chart1 = new Chart(ctx, {
			type: 'line',
			data: {
				labels: ['', '4am', '8am', '12pm', '4pm', '8pm', newDate(1)],
					datasets: [{
						color: app.color.blue,
						backgroundColor: 'transparent',
						borderColor: app.color.blue,
						borderWidth: 2,
						pointBackgroundColor: app.color.componentBg,
						pointBorderWidth: 2,
						pointRadius: 4,
						pointHoverBackgroundColor: app.color.componentBg,
						pointHoverBorderColor: app.color.blue,
						pointHoverRadius: 6,
						pointHoverBorderWidth: 2,
						data: [0, 0, 0, 601.5, 220]
					},{
						color: app.color.gray300,
						backgroundColor: 'rgba('+ app.color.gray500 + ', .2)',
						borderColor: app.color.gray300,
						borderWidth: 2,
						pointBackgroundColor: app.color.componentBg,
						pointBorderWidth: 2,
						pointRadius: 4,
						pointHoverBackgroundColor: app.color.componentBg,
						pointHoverBorderColor: app.color.gray300,
						pointHoverRadius: 6,
						pointHoverBorderWidth: 2,
						data: [0, 0, 0, 500, 120, 0, 0, 0]
					}]
			}, options
	});
	
	// #chart2
	options.scales = {
		yAxes: {
			ticks: {
				beginAtZero: true,
				min: 0,
				max: 150,
				stepSize: 50
			}
		}
	};
	var ctx2 = document.getElementById('chart2').getContext('2d');
	chart2 = new Chart(ctx2, {
		type: 'line',
		data: {
			labels: ['', '4am', '8am', '12pm', '4pm', '8pm', newDate(1)],
				datasets: [{
					color: app.color.blue,
					backgroundColor: 'transparent',
					borderColor: app.color.blue,
					borderWidth: 2,
					pointBackgroundColor: app.color.componentBg,
					pointBorderWidth: 2,
					pointRadius: 4,
					pointHoverBackgroundColor: app.color.componentBg,
					pointHoverBorderColor: app.color.blue,
					pointHoverRadius: 6,
					pointHoverBorderWidth: 2,
					data: [0, 20, 50, 100, 120]
				},{
					color: app.color.gray300,
					backgroundColor: 'rgba('+ app.color.gray300 + ', .2)',
					borderColor: app.color.gray300,
					borderWidth: 2,
					pointBackgroundColor: app.color.componentBg,
					pointBorderWidth: 2,
					pointRadius: 4,
					pointHoverBackgroundColor: app.color.componentBg,
					pointHoverBorderColor: app.color.gray300,
					pointHoverRadius: 6,
					pointHoverBorderWidth: 2,
					data: [0, 30, 44, 130, 34, 15, 43, 22]
				}]
		}, options
});

	// #chart3
	options.scales = {
		yAxes: {
			ticks: {
				beginAtZero: true,
				min: 0,
				max: 30,
				stepSize: 10
			}
		}
	};
	var ctx3 = document.getElementById('chart3').getContext('2d');
	chart3 = new Chart(ctx3, {
		type: 'line',
		data: {
			labels: ['', '4am', '8am', '12pm', '4pm', '8pm', newDate(1)],
				datasets: [{
					color: app.color.indigo,
					backgroundColor: 'transparent',
					borderColor: app.color.indigo,
					borderWidth: 2,
					pointBackgroundColor: app.color.componentBg,
					pointBorderWidth: 2,
					pointRadius: 4,
					pointHoverBackgroundColor: app.color.componentBg,
					pointHoverBorderColor: app.color.indigo,
					pointHoverRadius: 6,
					pointHoverBorderWidth: 2,
					data: [0, 0, 5, 18, 9]
				},{
					color: app.color.teal,
					backgroundColor: 'rgba('+ app.color.teal + ', .2)',
					borderColor: app.color.teal,
					borderWidth: 2,
					pointBackgroundColor: app.color.componentBg,
					pointBorderWidth: 2,
					pointRadius: 4,
					pointHoverBackgroundColor: app.color.componentBg,
					pointHoverBorderColor: app.color.teal,
					pointHoverRadius: 6,
					pointHoverBorderWidth: 2,
					data: [0, 0, 10, 26, 13]
				}]
		}, options
	});

	// #chart4
	options.scales = {
		yAxes: {
			ticks: {
				beginAtZero: true,
				min: 0,
				max:  60,
				stepSize: 20
			}
		}
	};
	var ctx4 = document.getElementById('chart4').getContext('2d');
	chart4 = new Chart(ctx4, {
		type: 'line',
		data: {
			labels: ['', '4am', '8am', '12pm', '4pm', '8pm', newDate(1)],
				datasets: [{
					color: app.color.blue,
					backgroundColor: 'transparent',
					borderColor: app.color.blue,
					borderWidth: 2,
					pointBackgroundColor: app.color.componentBg,
					pointBorderWidth: 2,
					pointRadius: 4,
					pointHoverBackgroundColor: app.color.componentBg,
					pointHoverBorderColor: app.color.blue,
					pointHoverRadius: 6,
					pointHoverBorderWidth: 2,
					data: [0, 0, 0, 24, 39]
				},{
					color: app.color.gray300,
					backgroundColor: 'rgba('+ app.color.gray300 + ', .2)',
					borderColor: app.color.gray300,
					borderWidth: 2,
					pointBackgroundColor: app.color.componentBg,
					pointBorderWidth: 2,
					pointRadius: 4,
					pointHoverBackgroundColor: app.color.componentBg,
					pointHoverBorderColor: app.color.gray300,
					pointHoverRadius: 6,
					pointHoverBorderWidth: 2,
					data: [0, 0, 0, 28, 35, 23, 0, 0]
				}]
		}, options
	});
	
	// #chart5
	options.scales = {
		yAxes: {
			ticks: {
				beginAtZero: true,
				min: 0,
				max:  15,
				stepSize: 5
			}
		}
	};
	var ctx5 = document.getElementById('chart5').getContext('2d');
	chart5 = new Chart(ctx5, {
		type: 'line',
		data: {
			labels: ['', '4am', '8am', '12pm', '4pm', '8pm', newDate(1)],
				datasets: [{
					color: app.color.blue,
					backgroundColor: 'transparent',
					borderColor: app.color.blue,
					borderWidth: 2,
					pointBackgroundColor: app.color.componentBg,
					pointBorderWidth: 2,
					pointRadius: 4,
					pointHoverBackgroundColor: app.color.componentBg,
					pointHoverBorderColor: app.color.blue,
					pointHoverRadius: 6,
					pointHoverBorderWidth: 2,
					data: [0, 0, 0, 12, 5]
				},{
					color: app.color.gray300,
					backgroundColor: 'rgba('+ app.color.gray300 + ', .2)',
					borderColor: app.color.gray300,
					borderWidth: 2,
					pointBackgroundColor: app.color.componentBg,
					pointBorderWidth: 2,
					pointRadius: 4,
					pointHoverBackgroundColor: app.color.componentBg,
					pointHoverBorderColor: app.color.gray300,
					pointHoverRadius: 6,
					pointHoverBorderWidth: 2,
					data: [0, 0, 0, 10, 4, 2, 0, 0]
				}]
		}, options
	});
}

var handleDaterangepicker = function() {
	$('[data-id="prev-date"]').html(moment().add(-1, 'd').format('D MMM YYYY'));
	$('[data-id="today-date"]').html(moment().format('D MMM YYYY'));
	
	$('#daterangepicker').daterangepicker({
    opens: 'right',
    format: 'MM/DD/YYYY',
    separator: ' to ',
    startDate: moment(),
    endDate: moment(),
    maxDate: moment()
  });
};


/* Controller
------------------------------------------------ */
$(document).ready(function() {
	handleRenderChart();
	handleDaterangepicker();
	
	$(document).on('theme-change', function() {
		chart1.destroy();
		chart2.destroy();
		chart3.destroy();
		chart4.destroy();
		chart5.destroy();
		
		handleRenderChart();
	});
});