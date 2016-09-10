'use strict';

import config from '../config';
import gulp from 'gulp';
import sass from 'gulp-sass';
import handleErrors from '../util/handleErrors';

gulp.task('sass', function() {
  return gulp.src(config.style.sourceFile)
    .pipe(sass())
    .on('error', handleErrors)
    .pipe(gulp.dest(config.style.dest));
});