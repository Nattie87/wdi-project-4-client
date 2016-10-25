angular
.module("loveOnTheLineApp")
.config(Router);

Router.$inject = ["$stateProvider", "$locationProvider", "$urlRouterProvider"];
function Router($stateProvider, $locationProvider, $urlRouterProvider){
  $locationProvider.html5Mode(true);

  $stateProvider
  .state("home", {
    url: "/",
    templateUrl: "/js/views/home.html"
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
    templateUrl: "/js/views/users/index.html",
    controller:  "usersIndexCtrl as usersIndex",
  })
  .state("usersShow", {
    url: "/users/:id",
    templateUrl: "/js/views/users/show.html",
    controller: "usersShowCtrl as usersShow"
  })
  .state("usersEdit", {
    url: "/users/:id/edit",
    templateUrl: "/js/views/users/edit.html",
    controller: "usersEditCtrl as usersEdit",
  })
  .state("postsIndex", {
    url: "/posts",
    templateUrl: "/js/views/posts/index.html",
    controller:  "postsIndexCtrl as postsIndex",
  })
  .state("postsNew", {
    url: "/posts/new",
    templateUrl: "/js/views/posts/new.html",
    controller:  "postsNewCtrl as postsNew",
  })
  .state("postsShow", {
    url: "/posts/:id",
    templateUrl: "/js/views/posts/show.html",
    controller: "postsShowCtrl as postsShow"
  })
  .state("postsEdit", {
    url: "/posts/:id/edit",
    templateUrl: "/js/views/posts/edit.html",
    controller: "postsEditCtrl as postsEdit",
  });

  $urlRouterProvider.otherwise("/");
}
