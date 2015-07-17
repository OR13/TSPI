angular.module "ALTGC"
.config ($stateProvider) ->
  $stateProvider
  .state "legacy",
    url: "/legacy"
    templateUrl: "app/legacy/legacy/legacy.html"
    controller: "LegacyController"
    controllerAs: "legacy"

.constant 'malarkey', malarkey
.constant 'toastr', toastr

