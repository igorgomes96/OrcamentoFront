angular.module('orcamentoApp').service('dataService', [function() {

	var self = this;

	var ciclosOrcamento = [
		{
			Codigo: 2,
			DataInicio: new Date(2018, 0, 1),
			DataFim: new Date(2018, 11, 31),
			Descricao: 'Orçamento 2018',
			CodigoCicloRealBase: 2,
			MesRealBase: new Date(2017, 11, 01),
			Fechado: false
		},
		{
			Codigo: 1,
			DataInicio: new Date(2017, 0, 1),
			DataFim: new Date(2017, 11, 31),
			Descricao: 'Orçamento 2017',
			Fechado: true		
		}
	];

	var ciclosReal = [
		{
			Codigo: 2,
			DataInicio: new Date(2017, 0, 1),
			DataFim: new Date(2017, 11, 31),
			Descricao: 'PTH 2017',
			Fechado: false
		}
	];

	var encargosEmpresa = [
		{
			Empresa: 'Algar Telecom',
			Salario13: 0.0833,
			Ferias: 0.11111,
			SistemaS: 0,
			FGTS: 0.08,
			INSS: 0.2,
			AvisoPrevio: 0.03316
		}
	];

	var encargosFilial = [
		{
			Empresa: 'Algar Telecom',
			Cidade: 'Uberlândia',
			Sindicato: 'Sindicato Exemplo',
			SAT: 0.03,
			FAP: 0
		},
		{
			Empresa: 'Algar Telecom',
			Cidade: 'Uberaba',
			Sindicato: 'Sindicato Exemplo',
			SAT: 0.03,
			FAP: 0
		},
		{
			Empresa: 'Algar Telecom',
			Cidade: 'São Paulo',
			Sindicato: 'Sindicato Exemplo',
			SAT: 0.03,
			FAP: 0
		},
		{
			Empresa: 'Algar Telecom',
			Cidade: 'Rio de Janeiro',
			Sindicato: 'Sindicato Exemplo',
			SAT: 0.03,
			FAP: 0
		}
	];

	var filiais = [
		{
			Codigo: 1,
			Cidade: 'Uberlândia'
		},
		{
			Codigo: 2,
			Cidade: 'Uberaba'
		},
		{
			Codigo: 3,
			Cidade: 'São Paulo'
		},
		{
			Codigo: 4,
			Cidade: 'Rio de Janeiro'
		}
	];

	var usuarios = [
		{
			Login: 'usuario1',
			Nome: 'Usuário 1',
			Perfil: 'Administrador',
			Ramal: '34554',
			Email: 'usuario1@email.com',
			Setor: 'Financeiro'
		},
		{
			Login: 'usuario2',
			Nome: 'Usuário 2',
			Perfil: 'BP',
			Ramal: '34555',
			Email: 'usuario2@email.com',
			Setor: 'TH'
		},
		{
			Login: 'usuario3',
			Nome: 'Usuário 3',
			Perfil: 'Gestor',
			Ramal: '34554',
			Email: 'usuario3@email.com',
			Setor: 'TI'
		}
	];



	var pthRealSolicitacoesContratacoes = [
		{
			Codigo: 1,
			CodigoCR: 11111,
			Solicitante: 'Nome do Solicitante',
			HorarioSolicitacao: new Date(),
			Cidade: 'Uberlândia',
			CargoNome: 'Cargo Exemplo 1111',
			CargaHoraria: 220,
			Salario: 6000,
			Qtda: 2,
			DataContratacao: new Date(2018, 7, 15),
			Descricao: 'Solicitação de Contratação de 2 Cargo Exemplo 1111 para Uberlândia.',
			Orcado: false,
			ConfirmarOrcamento: undefined,
			Aprovado: undefined,
			MotivoReprovacao: undefined
		},
		{
			Codigo: 2,
			CodigoCR: 22222,
			Solicitante: 'Nome do Solicitante',
			HorarioSolicitacao: new Date(),
			Cidade: 'Uberaba',
			CargoNome: 'Cargo Exemplo 2222',
			CargaHoraria: 220,
			Salario: 7000,
			Qtda: 6,
			DataContratacao: new Date(2018, 7, 15),
			Descricao: 'Solicitação de Contratação de 6 Cargo Exemplo 2222 para Uberaba.',
			Orcado: false,
			ConfirmarOrcamento: undefined,
			Aprovado: undefined,
			MotivoReprovacao: undefined
		}
	];

	var pthRealSolicitacoesPromocoes = [
		{
			Matricula: '1111',
			Nome: 'Funcionario 1111',
			CargoNome: 'Cargo Exemplo 1111',
			CargaHoraria: 220,
			Salario: 1111,
			DataAdmissao: new Date(2011, 01, 01),
			Situacao: 'Funcionário Ativo',
			CodigoCR: 11111,
			HorasExtras: angular.copy(horasExtras),
			HorasNoturnas: angular.copy(horasNoturnas),
			Ferias: angular.copy(ferias),
			EventosFolha: angular.copy(eventosFolha),
			DataInicioCR: new Date(2018, 0, 1),
			DataFimCR: null,
			MesDesligamento: null,
			Promocao: {
				MesPromocao: new Date(2018, 3, 1),
				CargoNomePromocao: 'Cargo Exemplo 6666',
				SalarioPromocao: 4000,
				Aprovado: undefined
			}
		}
	];



	var inputsFolha = [
		{
			Input: 'Férias (%)',
			Valores: []
		},
		{
			Input: 'PGP / PGI (R$)',
			Valores: []
		},
		{
			Input: 'Pró-Labore (R$)',
			Valores: []
		},
		{
			Input: 'Gratificações (R$)',
			Valores: []
		},
		{
			Input: 'Produtividade (R$)',
			Valores: []
		},
		{
			Input: 'Adicional Noturno (R$)',
			Valores: []
		},
		{
			Input: 'Comissão (R$)',
			Valores: []
		},
		{
			Input: 'Ajuda de Custo (R$)',
			Valores: []
		}
	];

	var meses = [];

	var horasExtras = {
		he170: [],
		he100: [],
		he75: [],
		he60: [],
		he50: []
	};

	var horasNoturnas = {
		hn20: [],
		hn30: [],
		hn40: [],
		hn50: [],
		hn60: []
	};

	var eventosFolha = {
		Gratificacoes: [],
		Produtividade: [],
		Comissao: [],
		ProLabore: [],
		PGP: [],
		AjudaCusto: []
	};

	var qtdaMensalContratacao = [];

	var ferias = {
		Parcela1: {Mes:null, QtdaDias: undefined},
		Parcela2: {Mes:null, QtdaDias: undefined},
		Parcela3: {Mes:null, QtdaDias: undefined}
	}

	var premissasCargos = [
		{
			Codigo: 1,
			CargoNome: 'Cargo Exemplo 1111',
			CH: 220,
			Cidade: 'Uberlândia',
			Empresa: 'Algar Telecom',
			Faixa1: 2000,
			Faixa2: 3000,
			Faixa3: 4000,
			Faixa4: 5000
		},
		{
			Codigo: 2,
			CargoNome: 'Cargo Exemplo 2222',
			CH: 220,
			Cidade: 'Uberlândia',
			Empresa: 'Algar Telecom',
			Faixa1: 2000,
			Faixa2: 3000,
			Faixa3: 4000,
			Faixa4: 5000
		},
		{
			Codigo: 3,
			CargoNome: 'Cargo Exemplo 3333',
			CH: 220,
			Cidade: 'Uberlândia',
			Empresa: 'Algar Telecom',
			Faixa1: 2000,
			Faixa2: 3000,
			Faixa3: 4000,
			Faixa4: 5000
		},
		{
			Codigo: 4,
			CargoNome: 'Cargo Exemplo 4444',
			CH: 220,
			Cidade: 'Uberlândia',
			Empresa: 'Algar Telecom',
			Faixa1: 2000,
			Faixa2: 3000,
			Faixa3: 4000,
			Faixa4: 5000
		},
		{
			Codigo: 5,
			CargoNome: 'Cargo Exemplo 5555',
			CH: 220,
			Cidade: 'Uberlândia',
			Empresa: 'Algar Telecom',
			Faixa1: 2000,
			Faixa2: 3000,
			Faixa3: 4000,
			Faixa4: 5000
		},
		{
			Codigo: 6,
			CargoNome: 'Cargo Exemplo 6666',
			CH: 220,
			Cidade: 'Uberlândia',
			Empresa: 'Algar Telecom',
			Faixa1: 2000,
			Faixa2: 3000,
			Faixa3: 4000,
			Faixa4: 5000
		},
		{
			Codigo: 7,
			CargoNome: 'Cargo Exemplo 7777',
			CH: 220,
			Cidade: 'Uberlândia',
			Empresa: 'Algar Telecom',
			Faixa1: 2000,
			Faixa2: 3000,
			Faixa3: 4000,
			Faixa4: 5000
		},
		{
			Codigo: 8,
			CargoNome: 'Cargo Exemplo 8888',
			CH: 220,
			Cidade: 'Uberlândia',
			Empresa: 'Algar Telecom',
			Faixa1: 2000,
			Faixa2: 3000,
			Faixa3: 4000,
			Faixa4: 5000
		},
		{
			Codigo: 9,
			CargoNome: 'Cargo Exemplo 9999',
			CH: 220,
			Cidade: 'Uberlândia',
			Empresa: 'Algar Telecom',
			Faixa1: 2000,
			Faixa2: 3000,
			Faixa3: 4000,
			Faixa4: 5000
		}
	];



	var cargos = [
		{
			Codigo: 1,
			CargoNome: 'Cargo Exemplo 1111',
			CH: 220
		},
		{
			Codigo: 2,
			CargoNome: 'Cargo Exemplo 2222',
			CH: 220
		},
		{
			Codigo: 3,
			CargoNome: 'Cargo Exemplo 3333',
			CH: 220
		},
		{
			Codigo: 4,
			CargoNome: 'Cargo Exemplo 4444',
			CH: 220
		},
		{
			Codigo: 5,
			CargoNome: 'Cargo Exemplo 5555',
			CH: 220
		},
		{
			Codigo: 6,
			CargoNome: 'Cargo Exemplo 6666',
			CH: 220
		},
		{
			Codigo: 7,
			CargoNome: 'Cargo Exemplo 7777',
			CH: 220
		},
		{
			Codigo: 8,
			CargoNome: 'Cargo Exemplo 8888',
			CH: 220
		},
		{
			Codigo: 9,
			CargoNome: 'Cargo Exemplo 9999',
			CH: 220
		}
	];

	var crsUser = [
		{
			CodigoCR: 11111,
			Descricao: 'Descrição CR 11111',
			InputsFolha: []
		},
		{
			CodigoCR: 22222,
			Descricao: 'Descrição CR 22222',
			InputsFolha: []
		},
		{
			CodigoCR: 33333,
			Descricao: 'Descrição CR 33333',
			InputsFolha: []
		},
		{
			CodigoCR: 44444,
			Descricao: 'Descrição CR 44444',
			InputsFolha: []
		}
	];

	for (var i = 0; i < 12; i++) {
		var mes = new Date(2018, i, 1);
		meses.push(mes);
		for (var prop in horasExtras) {
			horasExtras[prop].push({
				Mes: mes,
				QtdaHoras: 0
			});
		}

		for (var prop in horasNoturnas) {
			horasNoturnas[prop].push({
				Mes: mes,
				QtdaHoras: 0
			});
		}

		for (var prop in eventosFolha) {
			eventosFolha[prop].push({
				Mes: mes,
				Valor: 0
			});
		}

		qtdaMensalContratacao.push({
			Mes: mes,
			Qtda: 2
		});

		inputsFolha.forEach(function(y) {
			y.Valores.push({
				Mes: mes,
				Valor: 0
			});
		});
		
	}

	var funcionarios = [
		{
			Matricula: '1111',
			Nome: 'Funcionario 1111',
			CargoNome: 'Cargo Exemplo 1111',
			CargaHoraria: 220,
			Salario: 1111,
			DataAdmissao: new Date(2011, 01, 01),
			Situacao: 'Funcionário Ativo',
			CodigoCR: 11111,
			HorasExtras: angular.copy(horasExtras),
			HorasNoturnas: angular.copy(horasNoturnas),
			Ferias: angular.copy(ferias),
			EventosFolha: angular.copy(eventosFolha),
			DataInicioCR: new Date(2018, 0, 1),
			DataFimCR: null,
			MesDesligamento: null
		},
		{
			Matricula: '2222',
			Nome: 'Funcionario 2222',
			CargoNome: 'Cargo Exemplo 2222',
			CargaHoraria: 220,
			Salario: 2222,
			DataAdmissao: new Date(2012, 02, 02),
			Situacao: 'Funcionário Ativo',
			CodigoCR: 11111,
			HorasExtras: angular.copy(horasExtras),
			HorasNoturnas: angular.copy(horasNoturnas),
			Ferias: angular.copy(ferias),
			EventosFolha: angular.copy(eventosFolha),
			Promocao: {
				MesPromocao: new Date(2018, 5, 1),
				CargoNomePromocao: 'Cargo Exemplo 5555',
				SalarioPromocao: 2323,
				Aprovado: undefined
			},
			DataInicioCR: new Date(2018, 0, 1),
			DataFimCR: null,
			MesDesligamento: null
		},
		{
			Matricula: '3333',
			Nome: 'Funcionario 3333',
			CargoNome: 'Cargo Exemplo 3333',
			CargaHoraria: 220,
			Salario: 3333,
			DataAdmissao: new Date(2013, 03, 03),
			Situacao: 'Funcionário Afastado',
			CodigoCR: 33333,
			HorasExtras: angular.copy(horasExtras),
			HorasNoturnas: angular.copy(horasNoturnas),
			Ferias: angular.copy(ferias),
			EventosFolha: angular.copy(eventosFolha),
			DataInicioCR: new Date(2018, 0, 1),
			DataFimCR: null,
			MesDesligamento: null
		},
		{
			Matricula: '4444',
			Nome: 'Funcionario 4444',
			CargoNome: 'Cargo Exemplo 4444',
			CargaHoraria: 220,
			Salario: 4444,
			DataAdmissao: new Date(2004, 04, 04),
			Situacao: 'Funcionário Ativo',
			CodigoCR: 22222,
			HorasExtras: angular.copy(horasExtras),
			HorasNoturnas: angular.copy(horasNoturnas),
			Ferias: angular.copy(ferias),
			EventosFolha: angular.copy(eventosFolha),
			DataInicioCR: new Date(2018, 0, 1),
			DataFimCR: null,
			MesDesligamento: null
		}
	];


	var contratacoes = [
		{
			Codigo: 1,
			CargoNome: 'Cargo Exemplo 1111',
			CargaHoraria: 220,
			Cidade: 'Uberlândia',
			Salario: 4000,
			MotivoContratacao: 'Aumento de Quadro',
			QtdaMensal: angular.copy(qtdaMensalContratacao),
			CodigoCR: 11111,
			NomeUsuario: 'Gestor 1',
			Aprovado: undefined,
			DataContratacao: new Date(2018, 0, 1),
			Qtda: 2
		},
		{
			Codigo: 2,
			CargoNome: 'Cargo Exemplo 2222',
			CargaHoraria: 220,
			Cidade: 'Uberlândia',
			Salario: 3000,
			MotivoContratacao: 'Substituição',
			QtdaMensal: angular.copy(qtdaMensalContratacao),
			CodigoCR: 11111,
			NomeUsuario: 'Gestor 1',
			Aprovado: undefined,
			DataContratacao: new Date(2018, 0, 1),
			Qtda: 2
		},
		{
			Codigo: 3,
			CargoNome: 'Cargo Exemplo 3333',
			CargaHoraria: 220,
			Cidade: 'Uberaba',
			Salario: 5000,
			MotivoContratacao: 'Substituição',
			QtdaMensal: angular.copy(qtdaMensalContratacao),
			CodigoCR: 22222,
			NomeUsuario: 'Gestor 1',
			Aprovado: undefined,
			DataContratacao: new Date(2018, 0, 1),
			Qtda: 2
		}
	];

	var transferencias = [
		{
			Codigo: 1,
			MatriculaFuncionario: '2222',
			NomeFuncionario: 'Funcionario 2222',
			CargoNome: 'Cargo Exemplo 2222',
			Salario: 1111,
			CROrigem: 11111,
			CRDestino: 22222,
			DataSolicitacao: new Date(),
			MesTransferencia: new Date(2018, 05, 01),
			Status: 'Aguardando Aprovação'
		}
	];

	crsUser.forEach(function(x) {
		x.InputsFolha = angular.copy(inputsFolha);
	});

	self.aprovarContratacaoOrcamento = function(contratacao) {
		contratacao.Aprovado = true;
		pthRealSolicitacoesContratacoes.push({
			Codigo: pthRealSolicitacoesContratacoes.length + 1,
			CodigoCR: contratacao.CodigoCR,
			Solicitante: 'Nome do Solicitante',
			HorarioSolicitacao: new Date(),
			Cidade: contratacao.Cidade,
			CargoNome: contratacao.CargoNome,
			CargaHoraria: contratacao.CargaHoraria,
			Salario: contratacao.Salario,
			Qtda: contratacao.Qtda,
			DataContratacao: contratacao.DataContratacao,
			Descricao: '(Solicitado no Orçamento)',
			Orcado: true,
			ConfirmarOrcamento: false,
			Aprovado: undefined,
			MotivoReprovacao: undefined
		});

		console.log(pthRealSolicitacoesContratacoes);
	}

	self.postTransferencia = function(transf) {
		var data = transf.DataInicioCR;
		var transferencia = {
			Codigo: transferencias.length + 1,
			MatriculaFuncionario: transf.Matricula,
			NomeFuncionario: transf.Nome,
			CargoNome: transf.CargoNome,
			Salario: transf.Salario,
			CRDestino: transf.CodigoCR,
			DataSolicitacao: new Date(),
			MesTransferencia: new Date(data.getYear() + 1900, data.getMonth(), 1),
			Status: 'Aguardando Aprovação'
		}

		var funcFiltro = funcionarios.filter(function(x) {
			return x.Matricula == transf.Matricula;
		});

		if (funcFiltro.length > 0) {
			transferencia.CROrigem = funcFiltro[0].CodigoCR;
			funcFiltro[0].DataFimCR = addDays(transferencia.MesTransferencia, -1);
		}

		transferencias.push(transferencia);
		funcionarios.push(transf);

		console.log(transferencias);
		console.log(funcionarios);
	}

	self.getDesligamentos = function() {
		return funcionarios.filter(x => x.MesDesligamento);
	}

	self.getCargosSalarios = function() {
		return premissasCargos;
	}

	self.getEncargosEmpresa = function() {
		return encargosEmpresa;
	}

	self.getEncargosFilial = function() {
		return encargosFilial;
	}

	self.getCiclosReal = function() {
		return ciclosReal;
	}

	self.postCicloReal = function(ciclo) {
		ciclo['Codigo'] = ciclosReal.length + 1;
		ciclosReal.push(ciclo);
	}

	self.getCiclosOrcamento = function() {
		return ciclosOrcamento;
	}

	self.postCicloOrcamento = function(ciclo) {
		ciclo['Codigo'] = ciclosOrcamento.length + 1;
		ciclosOrcamento.push(ciclo);
	}

	self.getUsuarios = function() {
		return usuarios;
	}

	self.getPthOrcadoSolicitacoesContratacoes = function(aprovado) {
		return contratacoes.filter(x => x.Aprovado === aprovado);
	}

	self.getPthRealSolicitacoesContratacoes = function(aprovado) {
		return pthRealSolicitacoesContratacoes.filter(x => x.Aprovado === aprovado);
	}

	self.getPthOrcadoSolicitacoesReajustes = function(aprovado) {
		return funcionarios.filter(x => (x.Promocao && x.Promocao.Aprovado === aprovado));
	}

	self.getPthRealSolicitacoesReajustes = function(aprovado) {
		return pthRealSolicitacoesPromocoes.filter(x => (x.Promocao && x.Promocao.Aprovado === aprovado));
	}

	self.aprovarReajusteReal = function(solicitacao) {
		solicitacao.Promocao.Aprovado = true;
	}

	self.aprovarReajusteOrcamento = function(funcionario) {
		funcionario.Promocao.Aprovado = true;
		pthRealSolicitacoesPromocoes.push(funcionario);
	}

	self.aprovarContratacaoReal = function(contratacao) {
		contratacao.Aprovado = true;
	}

	self.reprovarContratacaoReal = function(contratacao) {
		contratacao.Aprovado = false;
	}

	self.getFuncionariosInfo = function(cr) {
		return funcionarios.filter(function(x) {
			return !cr || x.CodigoCR == cr;
		});
	}

	self.getCRsUser = function() {
		return crsUser;
	}

	self.getCargos = function() {
		return cargos;
	}

	self.getMeses = function() {
		return meses;
	}

	self.getFiliais = function() {
		return filiais;
	}

	self.getContratacoes = function(cr) {
		return contratacoes.filter(function(x) {
			return x.CodigoCR == cr;
		});
	}

	self.postContratacao = function(contratacao) {
		contratacao.Codigo = contratacoes.length + 1;
		contratacoes.push(angular.copy(contratacao));
		return contratacoes;
	}

	self.deleteContratacao = function(codContratacao) {
		var c = contratacoes.filter(function(x) {
			return x.Codigo == codContratacao;
		});

		if (c.length > 0)
			contratacoes.splice(c[0], 1);

		return c;
	}

	self.getTransferenciasEnviadas = function(cr) {
		return transferencias.filter(function(x) {
			return x.CROrigem == cr;
		});
	}

	self.getTransferenciasRecebidas = function(cr) {	
		return transferencias.filter(function(x) {
			return x.CRDestino == cr;
		});
	}

	self.getValoresAbertosCR = function(cr) {
		var c = crsUser.filter(function(x) {
			return x.CodigoCR == cr;
		});


		if (c.length > 0)
			return c[0].InputsFolha;
		else
			return null;
	}

}]);