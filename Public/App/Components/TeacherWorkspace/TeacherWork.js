var teachWork =angular.module('TeacherWorkspaceController', [])

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

// .directive('draggable', ['$document', function($document) {
//   return function(scope, element, attr) {
//     var startX = 0, startY = 0, x = 0, y = 0;
//     element.css({
//      position: 'relative',
//      border: 'none',
//      backgroundColor: 'lightgrey',
//      cursor: 'pointer',
//      display: 'block',
//      width: '65px'
//     });
//     element.on('mousedown', function(event) {
//       // Prevent default dragging of selected content
//       event.preventDefault();
//       startX = event.screenX - x;
//       startY = event.screenY - y;
//       $document.on('mousemove', mousemove);
//       $document.on('mouseup', mouseup);
//     });

//     function mousemove(event) {
//       y = event.screenY - startY;
//       x = event.screenX - startX;
//       element.css({
//         top: y + 'px',
//         left:  x + 'px'
//       });
//     }

//     function mouseup() {
//       $document.off('mousemove', mousemove);
//       $document.off('mouseup', mouseup);
//     }

//     var internalDNDType = "cheese";

//     function dropHandler(event){
//       console.log('in here!!!!')
//       var li = document.createElement('li')
//       var data = event.datatTransfer.getData(internalDNDType)
//       if(data === 'cheese'){
//         li.textContent ="peanut butter"
//       }
//       event.target.appendChild(li);
//     }
//   };
// }]);