angular.module('StudentDash.services', [])

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
  

  updatePlaylist = function(params) {
    return $http({
        method: 'Post',
        url: '/api/students',
        data: params
     })
    .then(function(res) {
        console.log('data successfully sent');
        return res.data
    });
  };

  return {
    fetchData: fetchData,
    updatePlaylist : updatePlaylist
    
  };
}]);