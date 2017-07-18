import './app.scss';
export const test01 = {
    template: require('./app.html'),
    controller($scope, $http, DataService) {
        DataService.getData().then(function(data) {
            $scope.products = data;
        });

        $scope.generateKey = function(data){
        	return data.split(' ').join("").toUpperCase();
        }
    }
};
