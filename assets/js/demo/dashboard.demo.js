/*
Template Name: ASPSTUDIO - Responsive Bootstrap 5 Admin Template
Version: 3.3.0
Author: Sean Ngu
Website: http://www.seantheme.com/asp-studio/
*/

var handleChart = function() {
	$('#chart').empty();
	
	Apex = {
		grid: {
			borderColor: 'rgba('+ app.color.componentColorRgb + ', .15)'
		},
		title: {
			style: {
				color: app.color.componentColor
			}
		},
		legend: {
			labels: {
				colors: app.color.componentColor
			}
		},
		xaxis: {
			axisBorder: {
				show: true,
				color: 'rgba('+ app.color.componentColorRgb + ', .25)',
				height: 1,
				width: '100%',
				offsetX: 0,
				offsetY: -1
			},
			axisTicks: {
				show: true,
				borderType: 'solid',
				color: 'rgba('+ app.color.componentColorRgb + ', .25)',
				height: 6,
				offsetX: 0,
				offsetY: 0
			},
			labels: {
				style: {
					colors: app.color.componentColor,
					fontSize: app.font.size,
					fontFamily: app.font.family,
					fontWeight: 400,
					cssClass: 'apexcharts-xaxis-label',
				}
			}
		},
		yaxis: {
			labels: {
				style: {
					colors: app.color.componentColor,
					fontSize: app.font.size,
					fontFamily: app.font.family,
					fontWeight: 400,
					cssClass: 'apexcharts-xaxis-label',
				}
			}
		}
	};
	
	var series = {
		'monthDataSeries1': {
			'prices': [
				8107, 8128, 8122, 8165, 8340, 8423, 8423, 8514, 8481, 8487, 
				8506, 8626, 8668, 8602, 8607, 8512, 8496, 8600, 8881, 9340
			],
			'dates': [
				'13 Nov 2021', '14 Nov 2021', '15 Nov 2021', '16 Nov 2021',
				'17 Nov 2021', '20 Nov 2021', '21 Nov 2021', '22 Nov 2021',
				'23 Nov 2021', '24 Nov 2021', '27 Nov 2021', '28 Nov 2021',
				'29 Nov 2021', '30 Nov 2021', '01 Dec 2021', '04 Dec 2021', 
				'05 Dec 2021', '06 Dec 2021', '07 Dec 2021', '08 Dec 2021'
			]
		}
	};
	var options = {
		series: [{
			data: [
				8107, 8128, 8122, 8165, 8340, 8423, 8423, 8514, 8481, 8487, 
				8506, 8626, 8668, 8602, 8607, 8512, 8496, 8600, 8881, 9340
			]
		}],
		labels: [
			'13 Nov 2021', '14 Nov 2021', '15 Nov 2021', '16 Nov 2021',
			'17 Nov 2021', '20 Nov 2021', '21 Nov 2021', '22 Nov 2021',
			'23 Nov 2021', '24 Nov 2021', '27 Nov 2021', '28 Nov 2021',
			'29 Nov 2021', '30 Nov 2021', '01 Dec 2021', '04 Dec 2021', 
			'05 Dec 2021', '06 Dec 2021', '07 Dec 2021', '08 Dec 2021'
		],
		colors: [app.color.blue],
		chart: {
			height: 256,
			type: 'line',
			toolbar: {
				show: false
			}
		},
		annotations: {
			yaxis: [{
				y: 8200,
				borderColor: app.color.indigo,
				label: {
					borderColor: app.color.indigo,
					style: {
						color: app.color.white,
						background: app.color.indigo,
					},
					text: 'Support',
				}
			}, {
				y: 8600,
				y2: 9000,
				borderColor: app.color.orange,
				fillColor: app.color.orange,
				opacity: 0.1,
				label: {
					borderColor: app.color.yellow,
					style: {
						fontSize: '10px',
						color: app.color.gray900,
						background: app.color.yellow,
					},
					text: 'Earning',
				}
			}],
			xaxis: [{
				x: new Date('23 Nov 2021').getTime(),
				strokeDashArray: 0,
				borderColor: app.color.gray900,
				label: {
					borderColor: app.color.gray900,
					style: {
						color: app.color.white,
						background: app.color.gray900,
					},
					text: 'Anno Test',
				}
			}, {
				x: new Date('26 Nov 2021').getTime(),
				x2: new Date('28 Nov 2021').getTime(),
				fillColor: app.color.teal,
				opacity: 0.4,
				label: {
					borderColor: app.color.teal,
					style: {
						fontSize: '10px',
						color: '#fff',
						background: app.color.teal,
					},
					offsetY: -7,
					text: 'X-axis range',
				}
			}],
			points: [{
				x: new Date('01 Dec 2021').getTime(),
				y: 8607.55,
				marker: {
					size: 8,
					fillColor: app.color.white,
					strokeColor: app.color.pink,
					radius: 2
				},
				label: {
					borderColor: app.color.pink,
					offsetY: 0,
					style: {
						color: app.color.white,
						background: app.color.pink,
					},

					text: 'Point Annotation',
				}
			}]
		},
		dataLabels: {
			enabled: false
		},
		stroke: {
			curve: 'straight'
		},
		grid: {
			padding: {
				right: 30,
				left: 20
			}
		},
		xaxis: {
			type: 'datetime',
		},
	};

	var chart = new ApexCharts(document.querySelector('#chart'), options);
	chart.render();
};


/* Controller
------------------------------------------------ */
$(document).ready(function() {
	handleChart();
	
	$(document).on('theme-change', function() {
		handleChart();
	});
});