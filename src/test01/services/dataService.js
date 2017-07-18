export default dataService;

function dataService($http) {
    var service = {
        getData: function() {

            var promiseObj = $http.get('test01/data.json').then(function(response) {
                return response.data;
            });

            return promiseObj;
        }
    };
    return service;
}