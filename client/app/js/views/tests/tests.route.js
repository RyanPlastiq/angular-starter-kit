'use strict';

function TestsRoutes($stateProvider, $urlRouterProvider) {

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
    .state('App.Tests', {
      title: "Tests",
      // controller: 'HomeController as HomeCtrl',
      template: '<div><p>Tests view!!</p></div>',
      url: '/tests'
    });

}

export default TestsRoutes;