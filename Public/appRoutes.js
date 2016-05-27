singulearn.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/home', {
    templateUrl: 'StudentDashView.html',
    controller:'StudentDash.js'
  })

  .when('/dashboard', {
    templateUrl: 'App/Components/TeacherDashboard/TeacherDashView.html',
    controller:'TeacherDash.ctrl'
  })

  .otherwise({
    redirectTo: '/'
  });

  $locationProvider.html5Mode(true);

});
