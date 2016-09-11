import controller from './tests.controller';
import route from './tests.route';

export default angular.module('tests', [])
  .config(route)
  .controller('TestsController', controller);