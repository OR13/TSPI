
angular.module "ALTGC"
.config ['$stateProvider', ($stateProvider) ->
  $stateProvider
  .state "coffeescript",
    url: "/coffeescript"
    templateUrl: "app/legacy/legacy/legacy.html"
    controller: "LegacyController"
    controllerAs: "legacy"
]