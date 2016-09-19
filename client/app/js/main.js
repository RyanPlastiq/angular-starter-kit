import angular from 'angular';
import onConfig from './onConfig';
import onRun from './onRun';

import 'angular-ui-router';
import './templates';
import './layout/layout.module';
import './views/components/component.module';
import './views/tests/tests.module';
import './views/animations/animations.module';
import './directives/textInput/textInput.module.js';

angular.module('cstaton', [
  'templates',
  'ui.router',
  'layout',
  'component',
  'tests',
  'animations',
  'textInput'
])
.config(onConfig)
.run(onRun);