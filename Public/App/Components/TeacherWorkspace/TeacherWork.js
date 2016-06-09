var teachWork = angular.module('TeacherWorkspaceController', [])

teachWork.controller('TeachWorkCtrl',['$scope', 'Students', function ($scope, Students) {
  console.log('inside Teacher Workspace');
  
  $scope.studentInfo = [];
  $scope.names = [];
  $scope.selected = undefined;
  $scope.lessonNames = [];

  $scope.lessons = [
    {lessonType:"Analogies", lessonName: "Analogies: Life is a game. Play wisely.", id: 1},
    {lessonType:"Auxiliary Verbs",lessonName: "Auxiliary Verbs: Should've, Would've, Could've.", id: 2},
    {lessonType:"Superlatives",lessonName: "Superlatives: This or That (These or Those)? ", id: 3},
    {lessonType:"Onomatopoeias",lessonName: "Onomatopoeias: Beep, beep. Who's got the key to the jeep? Vroom! ", id: 4},

  ];

  
  $scope.SearchParams = {firstName: "", lastName: "", playlistItems: []};

  // $scope.updatePlaylist = function(selected, playlistItems) {
  //   var params = {fullName: selected, newPlaylist: playlistItems}
  //   ('/recipe').success(function(response) {
  //     console.log(response);
  //   });

  // };

  $scope.getStudents = function() {
     Students.fetchData()
     .then(function (students) {
      // console.log(students)
        // console.log("got eeeemmmmmmm!")
        for (var key in students.data){
          $scope.studentInfo.push(students.data[key])
        }

        for(var i = 0; i < $scope.studentInfo.length; i++) {
          $scope.names.push($scope.studentInfo[i]['fullName'])
        }
        console.log("here's the db info. YEEEEE!", $scope.studentInfo);
        console.log("Here are the names!", $scope.names);
      })
      .catch(function (error) {
        console.error(error);
      });

    }; 
    $scope.getStudents();



  $scope.handleInput = function (input) {
    //this will make a post request to server and server will make request to DB to update the student's record

  }; 

  $scope.handleDragStart = function (e) {
    this.style.opacity = '0.4';
    e.dataTransfer.setData('text/plain', this.innerHTML);
  };
  
  $scope.handleDragEnd = function (e) {
    this.style.opacity = '1.0';
  };
  
  $scope.handleDrop = function (e) {
    e.preventDefault();
    e.stopPropagation();
    var dataText = e.dataTransfer.getData('text/plain');
    $scope.$apply(function() {
      if($scope.lessonNames.indexOf(dataText) === -1) {
        $scope.lessonNames.push(dataText);
      }
    });
    console.log($scope.lessonNames);
  };
  
  $scope.handleDragOver = function (e) {
    e.preventDefault(); 
    e.dataTransfer.dropEffect = 'move';  
    return false;
  };

  $scope.handleDelete = function (item) { 
    $scope.lessonNames.splice($scope.lessonNames.indexOf(item), 1);
    console.log($scope.lessonNames);

  }
}]);

teachWork.directive('draggable', function () {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      element[0].addEventListener('dragstart', scope.handleDragStart, false);
      element[0].addEventListener('dragend', scope.handleDragEnd, false);
    }
  }
})

teachWork.directive('droppable', function () {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      element[0].addEventListener('drop', scope.handleDrop, false);
      element[0].addEventListener('dragover', scope.handleDragOver, false)
    }
  }
})
