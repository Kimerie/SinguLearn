var singulearn = angular.module('singulearn', [
  'StudentDashController',
  'TeacherDash.services',
  'StudentDash.services',
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
    templateUrl: 'app/components/studentDashboard/studentDashView.html',
    controller:'StudentDashCtrl'
  })
  .when('/student', {
    templateUrl: 'app/components/login/studentlanding.html',
    // controller:'studentDash'
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
  .otherwise({
    redirectTo: '/'
  });

  // $locationProvider.html5Mode(true);

});