angular.module "ALTGC"
.directive 'altgcNavbar',  ['$log', ($log) ->

  LegacyNavbarController = ['$log', ($log) ->
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


