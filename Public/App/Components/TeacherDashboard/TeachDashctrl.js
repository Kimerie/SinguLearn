angular.module('TeacherDashCtrl', [])

.controller('TeacherDash.ctrl',['$scope', 'Dashboard', function($scope, Dashboard) {
    console.log('inside TeacherDashCtrl');
    $scope.salutation = 'goodbye world';
  }]);
