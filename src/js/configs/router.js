angular
  .module("loveOnTheLineApp")
  .config(Router);

Router.$inject = ["$stateProvider", "$locationProvider", "$urlRouterProvider"];
function Router($stateProvider, $locationProvider, $urlRouterProvider){
  $locationProvider.html5Mode(true);

  $stateProvider
  .state("home", {
    url: "/",
    templateUrl: "/js/views/home.html",
    controller: "homeCtrl as home"
  })
  .state("register", {
    url: "/register",
    templateUrl: "/js/views/register.html",
    controller: "registerCtrl as register",
  })
  .state("login", {
    url: "/login",
    templateUrl: "/js/views/login.html",
    controller: "loginCtrl as login",
  })
  .state("usersIndex", {
    url: "/users",
    templateUrl:  "/js/views/users/index.html",
    controller:   "usersIndexCtrl as usersIndex",
  })
  .state("usersShow", {
    url: "/users/:id",
    templateUrl: "/js/views/users/show.html",
    controller: "usersShowCtrl as usersShow"
  })
  .state("usersEdit", {
    url: "/edit",
    templateUrl: "/js/views/users/edit.html",
    controller: "UserEditCtrl as usersEdit",
  });

  $urlRouterProvider.otherwise("/");
}
