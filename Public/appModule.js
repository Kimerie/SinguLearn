var singulearn = angular.module('singulearn', [
  // 'StudentDash',
  // 'StudentWork',
  'TeacherDash.services',
  // 'Demo',
  'TeacherDashCtrl',
  'TeacherWorkspaceController',
  // 'appConfig',
  'dndLists',
  'ngRoute',

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

  .when('/content', {
    templateUrl: 'App/Components/TeacherDashboard/TeacherDashView.html',
    controller:'TeacherCtrl'
  })

   .when('/questions', {
    templateUrl: 'App/Components/TeacherDashboard/TeacherDashView.html',
    controller:'TeacherCtrl'
  })
   .when('/playlists', {
    templateUrl: 'App/Components/TeacherWorkSpace/TeacherWork.html',
    controller:'TeachWorkCtrl'
  })

   .when('/', {
    templateUrl: 'App/Components/login/landingpage.html'
    // controller:'TeacherCtrl'
  })

  // .otherwise({
  //   redirectTo: '/'
  // });

  // $locationProvider.html5Mode(true);

});