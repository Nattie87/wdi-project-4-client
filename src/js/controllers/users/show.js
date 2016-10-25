angular
  .module("loveOnTheLineApp")
  .controller("usersShowCtrl", usersShowCtrl);

  usersShowCtrl.$inject = ["$rootScope", "CurrentUserService", "$state"];
  function usersShowCtrl($rootScope, CurrentUserService, $state) {
    const vm = this;

    vm.user = CurrentUserService.getUser();
  }
