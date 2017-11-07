angular.module('orcamentoApp').controller('dashboardCtrl', ['menuService', '$scope', function(menuService, $scope) {

	var self = this;

	$scope.menu = menuService.orcamento.menu;
	menuService.orcamento.activeByText('Dashboard');

	Highcharts.chart('container-graf-custos', {
	    chart: {
	        type: 'column'
	    },
	    title: {
	        text: 'Custos Totais no Ciclo (R$ 1000,00)'
	    },
	    xAxis: {
	        categories: ['Jan/18', 'Feb/18', 'Mar/18', 'Apr/18', 'May/18', 'Jun/18', 'Jul/18', 'Aug/18', 'Sep/18', 'Oct/18', 'Nov/18', 'Dec/18']
	    },
	    yAxis: {
	        title: {
	            text: 'Valor (R$)'
	        }
	    },
	    plotOptions: {
	        column: {
	            dataLabels: {
	                enabled: true
	            }
	        }
	    },
	    series: [{
	        name: 'Custos',
	        data: [10, 7.8, 9.5, 14.5, 18.4, 21.5, 22.2, 26.5, 23.3, 18.3, 13.9, 9.6]
	    }]
	});

	Highcharts.chart('container-graf-qtdas', {
	    chart: {
	        type: 'line'
	    },
	    title: {
	        text: 'Qtda de Funcionários'
	    },
	    xAxis: {
	        categories: ['Jan/18', 'Feb/18', 'Mar/18', 'Apr/18', 'May/18', 'Jun/18', 'Jul/18', 'Aug/18', 'Sep/18', 'Oct/18', 'Nov/18', 'Dec/18']
	    },
	    yAxis: {
	        title: {
	            text: 'Qtda'
	        }
	    },
	    plotOptions: {
	        line: {
	            dataLabels: {
	                enabled: true
	            },
	            enableMouseTracking: false
	        }
	    },
	    series: [{
	        name: 'Qtda',
	        data: [24, 24, 23, 22, 25, 25, 25, 26, 27, 25, 26, 28]
	    }]
	});

}]);

