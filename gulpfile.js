const gulp = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const rename = require("gulp-rename");
const ejs = require("gulp-ejs");
const replace = require("gulp-replace"); 
var browsersync = require("browser-sync").create();

gulp.task("scss", function () {
    return (
      gulp
        .src("www/src/assets/_scss/**/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("www/dist/assets/css"))
    );
  });

  gulp.task("ejs", done => {
    gulp
      .src(["www/src/ejs/**/*.ejs", "!www/src/ejs/**/_*.ejs"])
      .pipe(ejs({}, {}, { ext: ".html" }))
      .pipe(rename({ extname: ".html" }))
      .pipe(replace(/[\s\S]*?(<!DOCTYPE)/, "$1"))
      .pipe(gulp.dest("./www/dist/"));
    done();
  });

  gulp.task('build-server', function (done) {
    browsersync.init({
        server: {
            baseDir: "./"
        },
        startPath: './www/dist/index.html'
    });
    done();
    console.log('Server was launched');
  });
  
  gulp.task('browser-reload', function (done){
    browsersync.reload();
    done();
    console.log('Browser reload completed');
  });
  
  gulp.task('watch-files', function(done) {
    gulp.watch("./www/src/ejs/**/*.ejs",gulp.task('ejs'));
    gulp.watch("./www/src/ejs/**/_*.ejs",gulp.task('ejs'));
    gulp.watch("./www/src/assets/**/*.scss",gulp.task('scss'));
    gulp.watch("./www/dist/*.html", gulp.task('browser-reload'));
    gulp.watch("./www/dist/assets/css/*.css", gulp.task('browser-reload'));
    gulp.watch("./www/dist/assets/js/*.js", gulp.task('browser-reload'));
    gulp.watch("./www/src/ejs/**/*.ejs",gulp.task('browser-reload'));
    gulp.watch("./www/src/ejs/**/_*.ejs",gulp.task('browser-reload'));
    done();
    console.log(('gulp watch started'));
  });

  gulp.task('default', gulp.series('build-server', 'watch-files','ejs','scss', function(done){
    done();
    console.log('Default all task done!');
  }));