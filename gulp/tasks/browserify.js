'use strict';

import gulp from 'gulp';
import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import sourcemaps from 'gulp-sourcemaps';
import gutil from 'gulp-util';
import config from '../config';

function build() {
  const bundler = browserify(config.scripts.sourceFile, {
    debug: true,
    transform: [babelify]
  });

  return bundler.bundle()
    .pipe(source(config.scripts.prodFile))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .on('error', gutil.log)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./'));
}

gulp.task('browserify', build);