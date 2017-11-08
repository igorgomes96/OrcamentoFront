angular.module('orcamentoApp').config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.hashPrefix('');
    $urlRouterProvider.otherwise('/modulos');

    $stateProvider

    .state('login', {
        url: '/login',
        templateUrl: 'components/login/login.html'
    })

    .state('modulos', {
    	url: '/modulos',
    	templateUrl: 'components/modulos/modulos.html',
        controller: 'modulosCtrl as ct'
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

    .state('pthOrcadoCiclos', {
        url: '/pth/orcado/ciclos',
        templateUrl: 'components/pth/orcado/ciclosOrcamento/ciclosOrcamento.html',
        controller: 'orcamentoCiclosCtrl as ct'
    })

    .state('pthOrcadoDashboard', {
        url: '/pth/orcado/dashboard',
        templateUrl: 'components/pth/orcado/dashboard/dashboard.html',
        controller: 'pthOrcadoDashboardCtrl as ct'
    })

    .state('pthOrcadoBase', {
        url: '/pth/orcado/base',
        templateUrl: 'components/pth/orcado/base/base.html',
        controller: 'pthOrcadoBaseCtrl as ct'
    })

    .state('pthOrcadoAprovacoes', {
        url: '/pth/orcado/aprovacoes',
        templateUrl: 'components/pth/orcado/aprovacoes/aprovacoes.html',
        controller: 'pthOrcadoAprovacoesCtrl as ct'
    })

    .state('pthOrcadoContratacoes', {
        url: '/pth/orcado/contratacoes',
        templateUrl: 'components/pth/orcado/contratacoes/contratacoes.html',
        controller: 'pthOrcadoContratacoesCtrl as ct'
    })

    .state('pthOrcadoReajustes', {
        url: '/pth/orcado/reajustes',
        templateUrl: 'components/pth/orcado/reajustes/reajustes.html',
        controller: 'pthOrcadoReajustesCtrl as ct'
    })

    .state('pthOrcadoDesligamentos', {
        url: '/pth/orcado/desligamentos',
        templateUrl: 'components/pth/orcado/desligamentos/desligamentos.html',
        controller: 'pthOrcadoDesligamentosCtrl as ct'
    })

    .state('pthRealDashboard', {
        url: '/pth/real/dashboard',
        templateUrl: 'components/pth/real/dashboard/dashboard.html',
        controller: 'pthRealDashboardCtrl as ct'
    })

    .state('pthRealEventos', {
        url: '/pth/real/eventosFolha',
        templateUrl: 'components/pth/real/eventos/eventos.html',
        controller: 'pthRealEventosCtrl as ct'
    })

    .state('pthRealBase', {
        url: '/pth/real/base',
        templateUrl: 'components/pth/real/base/base.html',
        controller: 'pthRealBaseCtrl as ct'
    })

    .state('pthRealAprovacoes', {
        url: '/pth/real/aprovacoes',
        templateUrl: 'components/pth/real/aprovacoes/aprovacoes.html',
        controller: 'pthRealAprovacoesCtrl as ct'
    })

    .state('pthRealContratacoes', {
        url: '/pth/real/contratacoes',
        templateUrl: 'components/pth/real/contratacoes/contratacoes.html',
        controller: 'pthRealContratacoesCtrl as ct'
    })

    .state('pthRealReajustes', {
        url: '/pth/real/reajustes',
        templateUrl: 'components/pth/real/reajustes/reajustes.html',
        controller: 'pthRealReajustesCtrl as ct'
    })

    .state('pthRealDesligamentos', {
        url: '/pth/real/desligamentos',
        templateUrl: 'components/pth/real/desligamentos/desligamentos.html',
        controller: 'pthRealDesligamentosCtrl as ct'
    })


    //PTH Gestor
    .state('pthGestorDashboard', {
        url: '/pth/gestor/dashboard',
        templateUrl: 'components/pth/gestor/dashboard/dashboard.html',
        controller: 'pthGestorDashboardCtrl as ct'
    })

    .state('pthGestorEventos', {
        url: '/pth/gestor/eventosFolha',
        templateUrl: 'components/pth/gestor/eventos/eventos.html',
        controller: 'pthGestorEventosCtrl as ct'
    })

    .state('pthGestorBase', {
        url: '/pth/gestor/base',
        templateUrl: 'components/pth/gestor/base/base.html',
        controller: 'pthGestorBaseCtrl as ct'
    })

    .state('pthGestorSolicitacoes', {
        url: '/pth/gestor/solicitacoes',
        templateUrl: 'components/pth/gestor/solicitacoes/solicitacoes.html',
        controller: 'pthGestorSolicitacoesCtrl as ct'
    })

    .state('pthGestorContratacoes', {
        url: '/pth/gestor/contratacoes',
        templateUrl: 'components/pth/gestor/contratacoes/contratacoes.html',
        controller: 'pthGestorContratacoesCtrl as ct'
    })

    .state('pthGestorReajustes', {
        url: '/pth/gestor/reajustes',
        templateUrl: 'components/pth/gestor/reajustes/reajustes.html',
        controller: 'pthGestorReajustesCtrl as ct'
    })

    .state('pthGestorDesligamentos', {
        url: '/pth/gestor/desligamentos',
        templateUrl: 'components/pth/gestor/desligamentos/desligamentos.html',
        controller: 'pthGestorDesligamentosCtrl as ct'
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

    
    .state('orcamentoSimulacoes', {
        url: '/orcamento/simulacoes',
        templateUrl: 'components/orcamento/simulacoes/simulacoes.html',
        controller: 'simulacoesCtrl as ct'
    });


}]);