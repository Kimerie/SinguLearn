var studentDash = angular.module('StudentDashController', [])

studentDash.controller('StudentDashCtrl',['$scope', 'Students', function ($scope, Students) {
  console.log('inside Student Dashboard');
  
  $scope.studentInfo = [];
  $scope.names = [];
  $scope.$selected = undefined;
  $scope.lessonNames = [];

  $scope.lessons = [
    {lessonType: "Nouns", lessonName: " Me, myself, and I.", id: 1},
    {lessonType:"Onomatopoeias",lessonName: "Beep, beep. Who's got the keys to the jeep? Vroom! ", id: 2},
  ];
    
    $scope.getStudents = function() {
     Students.fetchData()
     .then(function (students) {
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


