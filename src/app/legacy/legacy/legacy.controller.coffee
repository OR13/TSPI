angular.module "ALTGC"
.controller "LegacyController", ($timeout, webDevTec, toastr) ->
  vm = this
  activate = ->
    getWebDevTec()
    $timeout (->
      vm.classAnimation = 'rubberBand'
      return
    ), 4000
    return

  showToastr = ->
    toastr.info 'Fork <a href="https://github.com/OR13/ALTGC" target="_blank"><b>ALTGC</b></a>'
    vm.classAnimation = ''
    return

  getWebDevTec = ->
    vm.awesomeThings = webDevTec.getTec()
    angular.forEach vm.awesomeThings, (awesomeThing) ->
      awesomeThing.rank = Math.random()
      return
    return

  vm.awesomeThings = []
  vm.classAnimation = ''
  vm.creationDate = 1437089589536
  vm.showToastr = showToastr
  activate()
  return
