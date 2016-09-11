import angular from 'angular';
import onConfig from './onConfig';
import onRun from './onRun';

import 'angular-ui-router';
import './templates';
import './layout/layout.module';
import './views/components/component.module';
import './views/tests/tests.module';
import './views/animations/animations.module';

angular.module('cstaton', [
  'templates',
  'ui.router',
  'layout',
  'component',
  'tests',
  'animations'
])
.config(onConfig)
.run(onRun);