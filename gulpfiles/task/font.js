const font = () => {
  return $.gulp.src($.path.font.src)
    .pipe($.gp.plumber({
      errorHandler: $.gp.notify.onError(error => ({
        title: 'FONT',
        message: error.message
      }))
    }))
    .pipe($.gp.newer($.path.font.dest))
    .pipe($.gp.fonter({
      formats : [ 'ttf', 'woff', 'eot', 'svg']
    }))
    .pipe($.gulp.dest($.path.font.dest))
    .pipe($.gp.ttf2woff2())
    .pipe($.gulp.dest($.path.font.dest))
    .pipe($.browserSync.stream());
}


module.exports = font;