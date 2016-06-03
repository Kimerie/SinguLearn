var singulearn = angular.module('singulearn', [
  // 'StudentDash',
  // 'StudentWork',
  'TeacherDash.services',
  // 'Demo',
  'ClassListCtrl',
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
    templateUrl: 'App/Components/TeacherDashboard/TeacherDashView.html'
  })

  .when('/content', {
    templateUrl: 'App/Components/TeacherDashboard/TeacherDashView.html',
    controller:'TeacherCtrl'
  })

.when('/class', {
    templateUrl: 'App/Components/TeacherWorkSpace/classList.html',
    controller:'ClassCtrl'
  })
   .when('/QA', {
    templateUrl: 'App/Components/TeacherDashboard/TeacherDashView.html',
    controller:'TeacherCtrl'
  })
   .when('/playlists', {
    templateUrl: 'App/Components/TeacherWorkSpace/TeacherWork.html',
    controller:'TeachWorkCtrl'
  })

   .when('/', {
    templateUrl: 'App/Components/login/landingpage.html'
    // controller:'loginCtrl'
  })
  //  .when('/builder', {
  //   templateUrl: 'App/assets/test.html',
  //   // controller:'TeachWorkCtrl'
  // })

  .otherwise({
    redirectTo: '/dashboard'
  });

  // $locationProvider.html5Mode(true);

});