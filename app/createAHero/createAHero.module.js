angular
  .module('createAHero', [
    'ui.router',
    'createAHero.dashboard'
  ])
  .config(createAHeroConfig);

function createAHeroConfig($urlRouterProvider){
  $urlRouterProvider.otherwise('/');
}
