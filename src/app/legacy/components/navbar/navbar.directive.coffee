angular.module "TSPI"
.directive 'altgcNavbar',  ['$log', ($log) ->

  $log.debug('testing altgcNavbar debug...')

  LegacyNavbarController = ['$log', ($log) ->
    $log.debug('testing LegacyNavbarController debug...')
    vm = this
    # "vm.creation" is avaible by directive option "bindToController: true"
    vm.relativeDate = vm.creationDate
    return
  ]

  directive =
    restrict: 'E'
    templateUrl: 'app/legacy/components/navbar/navbar.html'
    scope:
      creationDate: '='
    controller: LegacyNavbarController
    controllerAs: 'vm'
    bindToController: true

  return directive

]
