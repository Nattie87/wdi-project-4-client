angular
  .module("loveOnTheLineApp")
  .factory("Post", postFactory);

postFactory.$inject = ["API", "$resource"];
function postFactory(API, $resource){
  return $resource(`${API}/posts/:id`, { id: "@id"}, {
    'query'   : { method: "GET" , isArray: true },
    'update'  : { method: "PUT" },
  });
}
