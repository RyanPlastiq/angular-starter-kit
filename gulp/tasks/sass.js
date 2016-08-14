'use strict';

import config from '../config';
import gulp from 'gulp';
import sass from 'gulp-sass';

gulp.task('sass', function() {
  return gulp.src(config.style.sourceFile)
    .pipe(sass())
    .pipe(gulp.dest(config.style.dest));
});