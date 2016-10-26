angular
  .module("loveOnTheLineApp")
  .controller("ChatsShowCtrl", ChatsShowCtrl);

ChatsShowCtrl.$inject = ["Chat", "$stateParams", "$state"];
function ChatsShowCtrl(Chat, $stateParams, $state){
  const vm               = this;

  vm.reply               = reply;

  Chats.get($stateParams, data => {
    vm.chat           = data.chat;
  });

  function reply(){
    Chat
      .reply({ id: vm.chat._id }, { message: vm.message })
      .$promise
      .then(data => {
        vm.chat       = data.chat;
        vm.message       = null;
      })
      .catch(console.log);
  }
}
