export default {
  build: 'client/build',
  source: 'client/app',
  views: {
    index: 'client/app/index.html'
  },
  scripts: {
    sourceFile: 'client/app/js/bundle.js',
    prodFile: 'client/build/js/main.js'
  }
};
