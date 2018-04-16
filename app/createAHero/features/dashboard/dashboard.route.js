angular
  .module("createAHero.dashboard")
  .config(dashboardConfig);

function dashboardConfig($stateProvider){
  $stateProvider.state({
    name: 'dashboard',
    url: '/',
    templateUrl: '/createAHero/features/dashboard/dashboard.html',
    controller: 'DashboardCtrl',
    controllerAs: 'DashboardVM'
  });
};
