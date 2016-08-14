'use strict';

import config from '../config';
import gulp from 'gulp';
import runSequence from 'run-sequence';

gulp.task('dev', function(callback) {
  runSequence('clean', ['sass', 'index', 'browserify'], callback);
});