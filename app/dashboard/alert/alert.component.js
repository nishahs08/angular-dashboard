angular
    .module('dashboardModule')
    .component('dashAlert', {
        templateUrl: 'app/dashboard/alert/alert.template.html',
        controller: function DashAlertController($scope) {
            this.query = '';
            this.names = [
                'Himanshu',
                'Nisha',
                'Gabbar'
            ];
        }
    })