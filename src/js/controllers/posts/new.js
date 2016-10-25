angular
  .module("loveOnTheLineApp")
  .controller("postsNewCtrl", postsNewCtrl);

postsNewCtrl.$inject = ['Post', '$state'];
function postsNewCtrl(Post, $state){
  const vm   = this;
  vm.linesList = [
    'Northern Line',
    'Victoria Line',
    'Piccadilly Line',
    'Bakerloo Line',
    'Central Line',
    'Circle Line',
    'District Line',
    'Hammersmith & City Line',
    'Jubilee Line',
    'Metropolitain Line',
    'Waterloo & City Line',
    'London Overground Line',
    'TFL Rail Line',
    'DLR Line',
    'Tram Line'
  ];
  vm.submit = () => {
    Post
    .save({post: vm.post})
    .$promise
    .then(data => {
      $state.go("postsIndex");
    });
  };
}
