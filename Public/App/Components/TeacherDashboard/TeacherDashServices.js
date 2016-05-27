angular.module('TeacherDash.services', [])

.factory('Dashboard', ['$http', function($http) {
  fetchData = function(req, res) {
    return $http({
        method: 'GET',
        url: '/dashboard',
        data: data
     }).success(function(data) {
        console.log('data successfully retrieved', data);
        res.send(data);
    }).error(function() {
        console.log("error retrieving data");
    });
  };
  return {
    fetchData: fetchData
  };
}]);
