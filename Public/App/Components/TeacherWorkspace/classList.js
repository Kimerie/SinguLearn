angular.module('ClassListCtrl', [])

.controller('ClassCtrl',['$scope','Students', function($scope, Students) {
    console.log('inside ClassListCtrl');
    $scope.username = 'Kimerie!';
    $scope.studentInfo = [];
    
    $scope.getStudents = function() {
     Students.fetchData()
     .then(function (students) {
      // console.log(students)
        // console.log("got eeeemmmmmmm!")
        for (var key in students.data){
          $scope.studentInfo.push(students.data[key])
        }
        console.log("here's the db info. YEEEEE!", $scope.studentInfo);
      })
      .catch(function (error) {
        console.error(error);
      });
    }; 
    $scope.getStudents();
  }]);