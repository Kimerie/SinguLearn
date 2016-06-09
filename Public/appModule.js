var singulearn = angular.module('singulearn', [
  // 'StudentDash',
  // 'StudentWork',
  'TeacherDash.services',
  // 'Demo',
  'ClassListCtrl',
  'TeacherWorkspaceController',
  'ngTouch',
  'ngAnimate',
  'ui.bootstrap',
  'ngRoute',

])
.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/home', {
    templateUrl: 'studentDashView.html',
    controller:'studentDash'
  })

  .when('/dashboard', {
    templateUrl: 'app/components/teacherDashboard/teacherDashView.html'
  })

  .when('/content', {
    templateUrl: 'app/components/teacherDashboard/teacherDashView.html',
    controller:'TeacherCtrl'
  })

.when('/class', {
    templateUrl: 'app/components/teacherWorkSpace/classList.html',
    controller:'ClassCtrl'
  })
   .when('/QA', {
    templateUrl: 'app/components/teacherDashboard/teacherDashView.html',
    controller:'TeacherCtrl'
  })
   .when('/playlists', {
    templateUrl: 'app/Components/teacherWorkSpace/teacherWork.html',
    controller:'TeachWorkCtrl'
  })

   .when('/', {
    templateUrl: 'app/components/login/landingpage.html'
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