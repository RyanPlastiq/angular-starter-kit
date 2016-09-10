# Angular Starter Kit
### This is a simple repo to get going with a nice Angular build system utilizing Browserify and Babel
### Enables you to write in ES6 syntax!

1. To get Started fork and clone the repo to your local environment.
2. Inside the root folder run command 'npm install'
3. To kick off the main build run 'gulp dev'
  * This is the main command to run in order to build the folder
4. Inside the build folder run the command 'open index.html'
  * This will open the file with your default browser
  * You can optionally use a server if you like
    -> check out my other repos!!

#### High Level Explanation of whats going on here

Gulp: Is a task runner which is doing all the work in the building the main build folder which is then able to be read by the browser


Babel: This is a preprocess which essentially converts all your code from ES6 to ES5
  * The reason we need to do this is because modern browsers that people use don't currently have support for ES6

Babelify: This is essentially the bridge to enable babel to work with Browserify
  * A key piece of this is enabling the ES6 module system to work
  * Babelify basically converts the imports to requires and the exports to module.exports

Browserify: This is the main process which does all the dependency management and builds a single file essentially concatenating everything together
  * Browserify has something called Transforms which allow you to run preprocesses before browserify builds the file
  * The basic steps go like this
    1. Babel converts ES6 to ES5
    2. Babelify converts imports to requires
    3. Browserify builds the file with the files in the correct order
    4. Have one main.js file with everything built correctly to be used by the index.html
