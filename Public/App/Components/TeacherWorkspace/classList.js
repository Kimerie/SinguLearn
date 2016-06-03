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

    // $scope.models = {
    //     selected: null,
    //     lists: {"A": [], "B": []}
    // };

    // // Generate initial model
    // for (var i = 1; i <= 3; ++i) {
    //     $scope.models.lists.A.push({label: "Item A" + i});
    //     $scope.models.lists.B.push({label: "Item B" + i});
    // }

    // // Model to JSON for demo purpose
    // $scope.$watch('models', function(model) {
    //     $scope.modelAsJson = angular.toJson(model, true);
    // }, true);



  }]);