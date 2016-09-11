'use strict';

function ComponentRoutes($stateProvider, $urlRouterProvider) {

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
    .state('App.Component', {
      title: "Component",
      controller: 'ComponentController as componentCtrl',
      templateUrl: 'views/components/component.html',
      // template: '<div><p>Component view!!</p></div>',
      url: '/component'
    });

}

export default ComponentRoutes;