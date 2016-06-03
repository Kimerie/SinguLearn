var teachWork = angular.module('TeacherWorkspaceController', [])

teachWork.controller('TeachWorkCtrl',['$scope', function ($scope) {
  console.log('inside Teacher Workspace');

  $scope.colors = [
    {name: "Blue", id: 1},
    {name: "Red", id: 2},
    {name: "Green", id: 3},
  ];

  $scope.username;
  $scope.items = [];
  $scope.SearchParams = {};

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
      if($scope.items.indexOf(dataText) === -1) {
        $scope.items.push(dataText);
      }
    });
    console.log($scope.items);
  };
  
  $scope.handleDragOver = function (e) {
    e.preventDefault(); 
    e.dataTransfer.dropEffect = 'move';  
    return false;
  };
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

