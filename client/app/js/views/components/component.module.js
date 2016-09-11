import controller from './component.controller';
import route from './component.route';

export default angular.module('component', [])
  .config(route)
  .controller('ComponentController', controller);