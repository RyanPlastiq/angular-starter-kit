import controller from './layout.controller';
import route from './layout.route';

export default angular.module('layout', [])
  .config(route)
  .controller('LayoutController', controller);