const icon = () => {
  return $.gulp.src($.path.icon.src)
    .pipe($.gp.plumber({
      errorHandler: $.gp.notify.onError(error => ({
        title: 'ICON',
        message: error.message
      }))
    }))
    .pipe($.gp.newer($.path.icon.dest))
    .pipe($.gp.if($.app.isProd, $.gp.imagemin({
      verbose: true,
    })))
    .pipe($.gulp.dest($.path.icon.dest))
    .pipe($.browserSync.stream());
}


module.exports = icon;