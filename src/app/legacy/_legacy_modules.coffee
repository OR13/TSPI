angular.module "ALTGC"
  .constant 'malarkey', malarkey
  .constant 'toastr', toastr

toastr.options.timeOut = 3000
toastr.options.positionClass = 'toast-top-right'
toastr.options.preventDuplicates = true
toastr.options.progressBar = true


