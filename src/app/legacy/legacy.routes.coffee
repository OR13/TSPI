
angular.module "ALTGC"
.config ['$stateProvider', ($stateProvider) ->
  $stateProvider
  .state "legacy",
    url: "/legacy"
    templateUrl: "app/legacy/legacy/legacy.html"
    controller: "LegacyController"
    controllerAs: "legacy"
]