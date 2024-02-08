import gulp from "gulp";
import imagemin from "gulp-imagemin";

gulp.task("default", () => {
  // todo: define tasks
  return gulp
    .src("src/images/*")
    .pipe(imagemin())
    .pipe(gulp.dest("dest/images"));
});
