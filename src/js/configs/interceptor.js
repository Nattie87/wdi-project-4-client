angular
  .module("loveOnTheLineApp")
  .config(setUpInterceptor);

setUpInterceptor.$inject = ["$httpProvider"];
function setUpInterceptor($httpProvider){
  return $httpProvider.interceptors.push("AuthInterceptor");
}