angular.module('orcamentoApp').config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.hashPrefix('');
    $urlRouterProvider.otherwise('/modulos');

    $stateProvider

    .state('modulos', {
    	url: '/modulos',
    	templateUrl: 'components/modulos/modulos.html'
    })

    .state('orcamentoCiclos', {
    	url: '/orcamento/ciclos',
    	templateUrl: 'components/orcamento/ciclos/orcamentoCiclos.html',
    	controller: 'orcamentoCiclosCtrl as ct'
    })

    .state('orcamentoDashboard', {
        url: '/orcamento/dashboard',
        templateUrl: 'components/orcamento/dashboard/dashboard.html',
        controller: 'dashboardCtrl as ct'
    })

    .state('orcamentoOrcamento', {
        url: '/orcamento/orcamento',
        views: {
            '': {
                templateUrl: 'components/orcamento/orcamento/orcamento.html',
                controller: 'orcamentoCtrl as ctOrcamento'
            },
            'base@orcamentoOrcamento': {
                templateUrl: 'components/orcamento/orcamento/pessoal/base.html',
                controller: 'orcamentoPessoalBaseCtrl as ct'
            },
            'contratacoes@orcamentoOrcamento': {
                templateUrl: 'components/orcamento/orcamento/pessoal/contratacoes.html',
                controller: 'orcamentoPessoalContratacoesCtrl as ct'
            },
            'transfEnviadas@orcamentoOrcamento': {
                templateUrl: 'components/orcamento/orcamento/pessoal/transfEnviadas.html',
                controller: 'orcamentoTransfEnviadasCtrl as ct'
            },
            'transfRecebidas@orcamentoOrcamento': {
                templateUrl: 'components/orcamento/orcamento/pessoal/transfRecebidas.html',
                controller: 'orcamentoTransfRecebidasCtrl as ct'
            },
            'valoresAbertos@orcamentoOrcamento': {
                templateUrl: 'components/orcamento/orcamento/pessoal/valoresAbertos.html',
                controller: 'orcamentoValoresAbertosCtrl as ct'
            }
        }
        
    })

    .state('pthSubModulos', {
        url: '/pthSubModulos',
        templateUrl: 'components/pth/subModulos/subModulosPth.html',
        controller: 'subModulosPthCtrl as ct'
    })

    .state('pthOrcadoAprovacoes', {
        url: '/pth/Orcado/Aprovacoes',
        templateUrl: 'components/pth/orcado/aprovacoes.html',
        controller: 'filaSolicitacoesAprovacoesOrcadoCtrl as ct'
    })

    .state('pthOrcadoContratacoes', {
        url: '/pth/Orcado/Contratacoes',
        templateUrl: 'components/pth/orcado/contratacoes.html',
        controller: 'filaSolicitacoesContratacoesOrcadoCtrl as ct'
    })

    .state('pthOrcadoReajustes', {
        url: '/pth/Orcado/Reajustes',
        templateUrl: 'components/pth/orcado/reajustes.html',
        controller: 'filaSolicitacoesReajustesOrcadoCtrl as ct'
    })

    .state('pthOrcadoDesligamentos', {
        url: '/pth/Orcado/Desligamentos',
        templateUrl: 'components/pth/orcado/desligamentos.html',
        controller: 'filaSolicitacoesDesligamentosOrcadoCtrl as ct'
    })

    .state('premissasEncargos', {
        url: '/premissas/encargos',
        views: {
            '': {
                templateUrl: 'components/premissas/encargos/encargos.html',
                controller: 'premissasEncargosCtrl as ct'
            },
            'empresa@premissasEncargos': {
                templateUrl: 'components/premissas/encargos/encargosEmpresa.html',
                controller: 'premissasEncargosEmpresaCtrl as ct'
            },
            'filial@premissasEncargos': {
                templateUrl: 'components/premissas/encargos/encargosFilial.html',
                controller: 'premissasEncargosFilialCtrl as ct'
            }
        }
        
    })

    .state('premissasSalarios', {
        url: '/premissas/salarios',
        templateUrl: 'components/premissas/salarios/salarios.html',
        controller: 'premissasSalariosCtrl as ct'
    })

    .state('premissasBeneficios', {
        url: '/premissas/beneficios',
        templateUrl: 'components/premissas/beneficios/beneficios.html',
        controller: 'premissasBeneficiosCtrl as ct'
    })

    .state('premissasAcordosColetivos', {
        url: '/premissas/acordos',
        templateUrl: 'components/premissas/acordos/acordos.html',
        controller: 'premissasAcordosCtrl as ct'
    })

    .state('usuarios', {
        url: '/usuarios',
        templateUrl: 'components/usuarios/usuarios.html',
        controller: 'usuariosCtrl as ct'
    })

    .state('pthBase', {
        url: '/pthBase',
        templateUrl: 'components/pth/base/base.html'
    })

    .state('pthContratacoes', {
        url: '/pthContratacoes',
        templateUrl: 'components/pth/contratacoes/contratacoes.html'
    })
    
    .state('orcamentoSimulacoes', {
        url: '/orcamento/simulacoes',
        templateUrl: 'components/orcamento/simulacoes/simulacoes.html',
        controller: 'simulacoesCtrl as ct'
    });


}]);