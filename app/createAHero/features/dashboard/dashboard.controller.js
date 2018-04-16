angular
  .module("createAHero.dashboard")
  .controller('DashboardCtrl', DashboardCtrl);

function DashboardCtrl($scope){
  var vm = this;
  vm.heroName = '';
  vm.heroGender = '';
  vm.heroCity = '';
  vm.heroEnemy = '';
  vm.heroOutcome = '';

  vm.heroGenderWord = '';
  $scope.$watch(function(){
    return vm.heroGender;
  }, function(newValue, oldValue){
    if(newValue === 'male'){
      vm.heroGenderWord = 'he';
    } else {
      vm.heroGenderWord = 'she';
    }
  })
}
