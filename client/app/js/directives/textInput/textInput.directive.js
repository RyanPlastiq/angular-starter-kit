'use strict';

function TextInputDirective () {
  'ngInject';

  return {
    restrict: 'E',
    templateUrl: 'directives/textInput/textInput.html',
    scope: {},
    bindToController: {
      model: '=cdsModel',
      name: '@cdsName',
      labelName: '@cdsLabelName'
    },
    controller: 'TextInputController',
    controllerAs: 'textInputCtrl',
    require: '^form',
    link: function(scope, element, attrs, ctrl) {
      console.log('inside link input link function');
      console.log(scope);
    }
  };
}

export default TextInputDirective;