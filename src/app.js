angular
.module("loveOnTheLineApp", [
  "ui.router",
  "ngResource",
  "angular-jwt"

]);

console.log("loaded!");


// angular.module('userApp', ['ui.router', 'lbServices'])
//
// .controller('UserController', ['$scope', '$state', 'Se_user', function ($scope, $state, Se_user) {
//     $scope.users = [];
//
//     function getSe_users() {
//         Se_user
//             .find()
//             .$promise
//             .then(function (results) {
//                 $scope.users = results;
//             });
//     }
//     getSe_users();
//
//     $scope.addSe_user = function () {
//       Se_user
// .create($scope.user,
// function(newUser) {
// console.log(newUser);
// // only set pristine here, this
// // callback fires on success
// $scope.create.$setPristine();
// },
// function(err) {
// console.log(err); // will log the error to the console
// }
//
// );
//
//     $scope.editSe_user = function(user_id) {
//         Se_user
//             .editById(user_id)
//             .$promise
//             .then(function (user_id) {
//                 getSe_users();
//         });
//     };
//
//     $scope.removeUser = function (item) {
//         Se_user
//             .deleteById(item)
//             .$promise
//             .then(function () {
//                 getSe_users();
//             });
//     };
// }];
//
// .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
//
//     $urlRouterProvider.otherwise('');
//
//     $stateProvider
//
//         .state('home', {
//             url: '',
//             templateUrl: 'partial-home.html',
//             controller: 'UserController'
//         })
//         .state('create', {
//             url: '/create',
//             templateUrl: 'partial-create.html',
//             controller: 'UserController'
//         })
//     .state('admin', {
//         url: '/admin',
//         templateUrl: 'partial-admin.html',
//         contoller: 'UserController'
//     });
//
// }]);
