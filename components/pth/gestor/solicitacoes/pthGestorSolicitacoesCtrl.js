angular.module('orcamentoApp').controller('pthGestorSolicitacoesCtrl', ['menuService', '$scope', 'pthRealSolicitacoesApi', 'filiaisApi', 'empresasApi', 'crsApi', 'cargosApi', 'funcionariosApi', function(menuService, $scope, pthRealSolicitacoesApi, filiaisApi, empresasApi, crsApi, cargosApi, funcionariosApi) {

	var self = this;

	self.contratacoes = [];
	self.reajustes = [];
	self.filiais = [];
	self.crs = [];
	self.empresas = [];
	self.cargos = [];

	$scope.menu = menuService.pthGestor.menu;
	menuService.pthGestor.activeByText('Solicitações');

	var loadCargos = function() {
		cargosApi.getCargos()
		.then(function(dado) {
			self.cargos = dado.data;
		});
	}

	var loadEmpresas = function() {
		empresasApi.getEmpresas()
		.then(function(dado) {
			self.empresas = dado.data;
		});
	}

	var loadFiliais = function() {
		filiaisApi.getFiliais()
		.then(function(dado) {
			self.filiais = dado.data;
		});
	}

	var loadCRs = function() {
		crsApi.getCRsUser()
		.then(function(dado) {
			self.crs = dado.data;
		});
	}

	var loadSolicitacoesContratacoes = function() {
		pthRealSolicitacoesApi.getPthRealSolicitacoesContratacoes()
		.then(function(dado) {
			self.contratacoes = dado.data;
		})
	}

	var loadSolicitacoesReajustes = function() {
		pthRealSolicitacoesApi.getPthRealSolicitacoesReajustes()
		.then(function(dado) {
			self.reajustes = dado.data;
		})
	}

	self.buscaFuncionario = function(matricula) {
		funcionariosApi.getFuncionario(matricula)
		.then(function(dado) {
			self.solicitacaoReajuste = angular.copy(dado.data);
			if (self.solicitacaoReajuste) {
				self.solicitacaoReajuste.Promocao = {
					MesPromocao: null,
					CargoNomePromocao: self.solicitacaoReajuste.CargoNome,
					SalarioPromocao: self.solicitacaoReajuste.Salario,
					Aprovado: undefined
				}
			}
			console.log(self.solicitacaoReajuste);
		});
	}

	self.aprovarContratacao = function(contratacao) {
		pthRealSolicitacoesApi.postAprovarContratacaoOrcamento(contratacao)
		.then(function(dado) {
			swal('Sucesso!', 'Solciitação aprovada com sucesso!', 'success');
			loadSolicitacoesContratacoes();
		});
	}

	self.aprovarReajuste = function(reajuste) {
		pthRealSolicitacoesApi.postAprovarReajusteOrcamento(reajuste)
		.then(function(dado) {
			swal('Sucesso!', 'Solciitação aprovada com sucesso!', 'success');
			loadSolicitacoesReajustes();
		});
	}

	self.solicitarContratacao = function(solicitacao) {
		pthRealSolicitacoesApi.postPthRealSolicitacoesContratacoes(solicitacao)
		.then(function() {
			loadSolicitacoesContratacoes();
		});
	}

	self.solicitarReajuste = function(solicitacao) {
		pthRealSolicitacoesApi.postPthRealSolicitacoesPromocoes(solicitacao)
		.then(function() {
			loadSolicitacoesReajustes();
		});
	}

	loadCargos();
	loadEmpresas();
	loadCRs();
	loadFiliais();
	loadSolicitacoesReajustes();
	loadSolicitacoesContratacoes();
	
}]);