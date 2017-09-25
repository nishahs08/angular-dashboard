angular
    .module('dashboardModule')
    .config(
        function ($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');
            
            $routeProvider
                .when(
                    '/alert', {
                        template: '<dash-alert></dash-alert>'
                    }
                )
        }
    )