angular
  .module("loveOnTheLineApp")
  .controller("usersShowCtrl", usersShowCtrl);

usersShowCtrl.$inject = ["User", "$stateParams", "$state"];
function usersShowCtrl(User, $stateParams, $state) {
  const vm = this;

  vm.user = User.get($stateParams);

  vm.userDelete = () => {
    User
    .delete($stateParams)
    .$promise
    .then(data => {
      $state.go("home");
    });
  };
}
