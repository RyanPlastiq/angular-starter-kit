import config from '../config';
import gulp from 'gulp';

gulp.task('watch', function() {
  gulp.watch(config.style.sourceGlob, ['sass']);
  gulp.watch(config.scripts.sourceGlob, ['lint']);
  gulp.watch(config.views.templateGlob, ['views']);
});