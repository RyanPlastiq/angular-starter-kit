'use strict';

import config from '../config';
import gulp from 'gulp';

gulp.task('index', function() {
  return gulp.src(config.views.index)
    .pipe(gulp.dest(config.build));
});