angular.module('orcamentoApp').controller('orcamentoCiclosCtrl', ['ciclosApi', function(ciclosApi) {

	var self = this;

	self.realSelecionado = null;
	self.realSelecionadoMeses = null;
	self.ciclos = [];
	self.ciclosReal = [];
	self.anos = [2014, 2015, 2016];
	
	var loadCiclosOrcamento = function() {
		ciclosApi.getCiclosOrcamento()
		.then(function(dado) {
			self.ciclos = dado.data;
		});
	}

	var loadCiclosReal = function() {
		ciclosApi.getCiclosReal()
		.then(function(dado) {
			self.ciclosReal = dado.data;
			if (self.ciclosReal && self.ciclosReal.length > 0)
				self.realSelecionado = self.ciclosReal[0];
			self.loadMesesRealSelecionado();
		});	
	}

	self.loadMesesRealSelecionado = function() {
		if (!self.realSelecionado) return;

		self.realSelecionadoMeses = [];

		for (var i = self.realSelecionado.DataInicio.getMonth(); i <= self.realSelecionado.DataFim.getMonth(); i++) {
			self.realSelecionadoMeses.push(new Date(self.realSelecionado.DataInicio.getYear() + 1900, i, 1));			
		}
	}

	self.salvarCiclo = function() {
		ciclosApi.postCicloOrcamento(self.novoCiclo)
		.then(function() {
			$('#modal-novo-ciclo').modal('hide')
			self.novoCiclo = null;
			loadCiclosOrcamento();
		});
	}



	loadCiclosOrcamento();
	loadCiclosReal();


}]);