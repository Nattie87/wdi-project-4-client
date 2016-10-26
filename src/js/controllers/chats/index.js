angular
  .module("loveOnTheLineApp")
  .controller("ChatsIndexCtrl", ChatsIndexCtrl);

ChatsIndexCtrl.$inject = ["Chat", "$stateParams", "$state"];
function ChatsIndexCtrl(Chat, $stateParams, $state){
  const vm                = this;

  Chat.query(data => {
    vm.chats           = data.chats;
    // vm.chats           = data.chats;
  });
}
