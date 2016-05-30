angular.module('TeacherDash.services', [])

.factory('Students', ['$http','$q', function($http, $q) {
  fetchData = function(req, res) {
    return $http({
        method: 'GET',
        url: '/api/students'
     })
    .success(function(data) {
        console.log('data successfully retrieved', data);
    }).error(function() {
        console.log("error retrieving data");
    });
  };
  return {
    fetchData: fetchData
  };
}]);
