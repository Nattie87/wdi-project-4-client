angular
  .module("loveOnTheLineApp")
  .controller("postsIndexCtrl", postsIndexCtrl);

postsIndexCtrl.$inject = ['Post', '$state'];
function postsIndexCtrl(Post, $state){
  const vm   = this;
  Post
  .query()
  .$promise
  .then(data => {
    vm.posts = data;
  });
}
