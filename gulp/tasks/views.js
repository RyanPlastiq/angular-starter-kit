'use strict';

import config from '../config';
import gulp from 'gulp';
import templateCache from 'gulp-angular-templatecache';

gulp.task('index', function() {
  return gulp.src(config.views.index)
    .pipe(gulp.dest(config.build));
});

gulp.task('templates', function() {
  return gulp.src(config.views.templateGlob)
    .pipe(templateCache({
      standalone: true
    }))
    .pipe(gulp.dest(config.views.templateDest));
});

gulp.task('views', ['index', 'templates']);