angular
    .module('dashboardModule')
    .component('dashAlert', {
        templateUrl: 'app/dashboard/alert/alert.template.html',
        controller: function DashAlertController($scope) {
            const self = this;

            this.formModel = {
                email: '',
                password: ''
            };
            this.tableData = [
                {
                    alert: 3305029,
                    asset_name: 'PAC',
                    data_point: 'STN1',
                    properties: 'Humidity',
                    description: 'Hight',
                    current_value: 33100,
                    is_selection: true,
                    reaction_plan: '123123',
                    acknowledge: true
                },
                {
                    alert: 1121233,
                    asset_name: 'PAC2',
                    data_point: 'STN2',
                    properties: 'Rigidity',
                    description: 'Low',
                    current_value: 110011,
                    is_selection: false,
                    reaction_plan: '0128301',
                    acknowledge: false
                },
                {
                    alert: 3305029,
                    asset_name: 'PAC',
                    data_point: 'STN1',
                    properties: 'Humidity',
                    description: 'Hight',
                    current_value: 33100,
                    is_selection: true,
                    reaction_plan: '123123',
                    acknowledge: true
                }
            ]

            this.methods = {
                handleClick() {
                    console.log(self.formModel);
                }
            }
        }
    })