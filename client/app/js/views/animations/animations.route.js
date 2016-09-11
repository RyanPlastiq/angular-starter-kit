'use strict';

function AnimationsRoutes($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/home');

  $stateProvider
    // .state('App', {
    //   title: 'cstaton App',
    //   // url: '/layout',
    //   // template: '<div><p>Hello World</p></div>',
    //   templateUrl: 'layout/layout.html',
    //   controller: 'LayoutController as layoutCtrl',
    //   resolve: {
    //     testData: function() {
    //      console.log('Inside main layout resolve block'); 
    //     }
    //   }
    // })
    .state('App.Animations', {
      title: "Animations",
      // controller: 'HomeController as HomeCtrl',
      template: '<div><p>Animations view!!</p></div>',
      url: '/animations'
    });

}

export default AnimationsRoutes;