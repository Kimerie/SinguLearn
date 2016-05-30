angular.module('TeacherDashCtrl', [])

.controller('TeacherCtrl',['$scope','Students', function($scope, Students) {
    console.log('inside TeacherDashCtrl');
    $scope.valediction = 'Goodbye world.';
    // console.log(Students.fetchData())
    // $scope.getStudents = function() {
    //  Students.fetchData()
    //  .then(function (students) {
    //   // console.log(students)
    //     console.log("got eeeemmmmmmm!")
    //     $scope.studentInfo = students;
    //   })
    //   .catch(function (error) {
    //     console.error(error);
    //   });
    // }; 
    // $scope.getStudents();
    // console.log("here's the db info. YEEEEE!", $scope.studentInfo);
  }]);
