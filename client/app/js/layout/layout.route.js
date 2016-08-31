'use strict';

function LayoutRoutes($stateProvider) {

  $stateProvider
    .state('App', {
      title: 'cstaton App',
      url: '/layout',
      // template: '<div><p>Hello World</p></div>',
      templateUrl: 'layout/layout.html',
      controller: 'LayoutController as layoutCtrl',
      resolve: {
        testData: function() {
         console.log('Inside main layout resolve block'); 
        }
      }
    });

}

export default LayoutRoutes;