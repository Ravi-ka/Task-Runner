module.exports = function (grunt) {
  //  Configure the task
  grunt.initConfig({
    //   Specify tasks - uglify
    uglify: {
      target: {
        files: {
          "dest/js/main.min.js": ["src/js/input1.js", "src/js/*.js"],
        },
      },
    },
    // Configure minify css
    cssmin: {
      target: {
        files: [
          {
            expand: true,
            cwd: "src/css",
            src: ["*.css", "!*.min.css"],
            dest: "dest/css",
            ext: ".min.css",
          },
        ],
      },
    },
  });

  // Load the libraries
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  // Setting up tasks
  grunt.registerTask("default", ["uglify", "cssmin"]);
};
