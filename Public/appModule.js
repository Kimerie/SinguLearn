var singulearn = angular.module('singulearn', [
  // 'StudentDash',
  // 'StudentWork',
  'TeacherDash.services',
  'TeacherDashCtrl',
  // 'appConfig',
  'ngRoute'
])
.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/home', {
    templateUrl: 'StudentDashView.html',
    controller:'StudentDash.js'
  })

  .when('/dashboard', {
    templateUrl: 'App/Components/TeacherDashboard/TeacherDashView.html',
    controller:'TeacherCtrl'
  })

  .otherwise({
    redirectTo: '/'
  });

  // $locationProvider.html5Mode(true);

});