angular.module('orcamentoApp').service('menuService', [function() {
	var self = this;

	var activeByTextFunc = function(text) {
		this.menu.forEach(function(x) {
			x.active = false; 
		});

		var found = this.menu.filter(function(x) {
			return x.text == text;
		});

		if (found.length > 0)
			found[0].active = true;
	}

	self.orcamento = {
		menu: [
			{
				icon: 'fa-line-chart',
				text: 'Dashboard',
				state: 'orcamentoDashboard'
			},
			{
				icon: 'fa-money',
				text: 'Orçamento',
				state: 'orcamentoOrcamento'
			}
		],
		activeByText: activeByTextFunc
	};

	self.pthOrcado = {
		menu: [
			{
				icon: 'fa-check',
				text: 'Aprovações',
				state: 'pthOrcadoAprovacoes'
			},
			{
				icon: 'fa-user-plus',
				text: 'Contratações',
				state: 'pthOrcadoContratacoes'
			},
			{
				icon: 'fa-user-times',
				text: 'Desligamentos',
				state: 'pthOrcadoDesligamentos'
			},
			{
				icon: 'fa-level-up',
				text: 'Promoções',
				state: 'pthOrcadoReajustes'
			}
		],
		activeByText: activeByTextFunc
	};

	self.premissas = {
		menu: [
			{
				icon: 'fa-money',
				text: 'Encargos',
				state: 'premissasEncargos'
			},
			{
				icon: 'fa-usd',
				text: 'Salários',
				state: 'premissasSalarios'
			},
			{
				icon: 'fa-credit-card',
				text: 'Benefícios',
				state: 'premissasBeneficios'
			},
			{
				icon: 'fa-handshake-o',
				text: 'Acordos Coletivos',
				state: 'premissasAcordosColetivos'
			}
		],
		activeByText: activeByTextFunc
	}

	
}])