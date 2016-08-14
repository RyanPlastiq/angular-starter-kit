export default {
  build: 'client/build',
  source: 'client/source',
  views: {
    index: 'client/source/index.html'
  },
  scripts: {
    sourceFile: 'client/source/js/bundle.js',
    prodFile: 'client/build/js/main.js'
  }
}