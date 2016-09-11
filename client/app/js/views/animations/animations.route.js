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
      controller: 'AnimationsController as animationCtrl',
      // template: '<div><p>Animations view!!</p></div>',
      templateUrl: 'views/animations/animations.html',
      url: '/animations'
    });

}

export default AnimationsRoutes;