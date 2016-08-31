import angular from 'angular';
import onConfig from './onConfig';
import onRun from './onRun';

import 'angular-ui-router';
import './layout/layout.module';
import './templates';

angular.module('cstaton', [
  'templates',
  'ui.router',
  'layout'
])
.config(onConfig)
.run(onRun);