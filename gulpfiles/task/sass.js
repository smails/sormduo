const sasss = require('gulp-sass')(require('sass'));
const sassGlob = require('gulp-sass-glob')
const sass = () => {
  return $.gulp.src($.path.sass.global, {sourcemaps : $.app.isDev})
    .pipe($.gp.plumber({
      errorHandler: $.gp.notify.onError(error => ({
        title: 'SASS',
        message: error.message
      }))
    }))
    .pipe(sassGlob())
    .pipe(sasss())
    .pipe($.gp.autoprefixer())
    .pipe($.gp.shorthand())
    .pipe($.gp.rename("style.css"))
    .pipe($.gulp.dest($.path.sass.dest, {sourcemaps : $.app.isDev}))
    .pipe($.browserSync.stream());
}


module.exports = sass;