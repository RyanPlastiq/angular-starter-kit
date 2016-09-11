import controller from './animations.controller';
import route from './animations.route';

export default angular.module('animations', [])
  .config(route)
  .controller('AnimationsController', controller);