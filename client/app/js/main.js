import angular from 'angular';
import onConfig from './onConfig';
import onRun from './onRun';

import 'angular-ui-router';
import './templates';
import './layout/layout.module';
import './components/component.module';

angular.module('cstaton', [
  'templates',
  'ui.router',
  'layout',
  'component'
])
.config(onConfig)
.run(onRun);