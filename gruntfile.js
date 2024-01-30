module.exports = function (grunt) {
  // 1. Configure the task
  grunt.initConfig({
    //   2. Specify tasks
    uglify: {
      target: {
        files: {
          "dest/js/main.min.js": ["src/js/input1.js", "src/js/*.js"],
        },
      },
    },
  });

  // 3. Load the libraries
  grunt.loadNpmTasks("grunt-contrib-uglify");
  // 4. Setting up tasks
  grunt.registerTask("default", ["uglify"]);
};
