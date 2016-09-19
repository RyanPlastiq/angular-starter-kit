import controller from './textInput.controller.js';
import directive from './textInput.directive.js';

export default angular.module('textInput', [])
  .directive('cdsTextInput', directive)
  .controller('TextInputController', controller);