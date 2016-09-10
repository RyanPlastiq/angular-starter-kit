'use strict';

import gulp from 'gulp';
import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import sourcemaps from 'gulp-sourcemaps';
import gutil from 'gulp-util';
import config from '../config';
import gulpif from 'gulp-if';
import ngAnnotate from 'browserify-ngannotate';
import handleErrors from '../util/handleErrors';
import uglify from 'gulp-uglify';
import streamify from 'gulp-streamify';
import watchify from 'watchify';



function createSourcemap() {
  return !config.isProd || config.browserify.prodSourcemap;
}

//Be careful if editing the buildScript

function buildScript() {
  let bundler = browserify({
    entries: config.scripts.sourceFile,
    debug: createSourcemap(),
    cache: {},
    packageCache: {},
    fullPaths: !config.isProd
  });

  if ( !config.isProd ) {
    bundler = watchify(bundler);

    bundler.on('update', function() {
      rebundle();
      gutil.log('Rebundle...');
    });
  }

  const transforms = [
    { 'name':babelify, 'options': {}},
    { 'name':ngAnnotate, 'options': {}},
    // { 'name':'brfs', 'options': {}},
    // { 'name':'bulkify', 'options': {}}
  ];

  transforms.forEach(function(transform) {
    bundler.transform(transform.name, transform.options);
  });

  function rebundle() {
    const stream = bundler.bundle();
    const sourceMapLocation = config.isProd ? './' : '';

    return stream.on('error', handleErrors)
      .pipe(source(config.scripts.prodFile))
      // .pipe(streamify(stripCode({
      //   start_comment: "start-test-block",
      //   end_comment: "end-test-block"
      // })))
      .pipe(gulpif(createSourcemap(), buffer()))
      .pipe(gulpif(createSourcemap(), sourcemaps.init({ loadMaps: true })))
      .pipe(gulpif(config.isProd, streamify(uglify({
        compress: { drop_console: true }
      }))))
      .pipe(gulpif(createSourcemap(), sourcemaps.write(sourceMapLocation)))      
      .pipe(gulp.dest('./'));
      // .pipe(browserSync.stream());
  }

  return rebundle();

}

gulp.task('browserify', function() {

  return buildScript();

});
