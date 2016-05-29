angular.module('TeacherDash.services', [])

.factory('Students', ['$http','$q', function($http, $q) {
  fetchData = function(req, res) {
    return $http({
        method: 'GET',
        url: '/api/students'
     })
    .then(function (resp) {
      return resp.data;
    });
  };
  return {
    fetchData: fetchData
  };
}]);
