'use strict';

function LayoutController($scope) {
  var vm = this;

  $scope.testValue = 170;

  vm.tester = 'Hello this is the test value for controller as syntax!!!';

  vm.navItems = [
    {name: 'Home', ref: 'App.Home'}, 
    {name: 'Components', ref: 'App.Component'},
    {name: 'Tests', ref: 'App.Tests'},
    {name: 'Animations', ref:'App.Animations'}
  ];
}

export default LayoutController;
