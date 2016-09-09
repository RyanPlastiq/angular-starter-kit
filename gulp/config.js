export default {
  isProd: false,
  build: 'build',
  source: 'client/app',
  views: {
    index: 'client/app/index.html',
    templateGlob: 'client/app/js/**/*.html',
    templateDest: 'client/app/js'
  },
  scripts: {
    sourceFile: 'client/app/js/main.js',
    prodFile: 'build/js/main.js',
    sourceGlob: 'client/app/js/**/*.js'
  },
  style: {
    sourceGlob: 'client/app/style/**/*.scss',
    sourceFile: 'client/app/style/main.scss',
    dest: 'build/style'
  }
};
