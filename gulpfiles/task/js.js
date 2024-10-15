const webpackStream = require('webpack-stream');
const webpack = require('webpack');
const uglify = require('gulp-uglify');

const webpackConf = {
  mode: $.app.isDev ? 'development' : 'production',
  devtool: $.app.isDev ? 'eval-source-map' : false,
  optimization: {
    minimize: false
  },
  output: {
    filename: 'common.js',
  },
  module: {
    rules: []
  }
}

if ($.app.isProd) {
  webpackConf.module.rules.push({
    test: /\.(js)$/,
    exclude: /(node_modules)/,
    loader: 'babel-loader'
  });
}
const js = () => {
  return $.gulp.src($.path.js.src)
    .pipe($.gp.plumber({
      errorHandler: $.gp.notify.onError(error => ({
        title: 'JS',
        message: error.message
      }))
    }))
    .pipe(webpackStream(webpackConf, webpack))
    .pipe(uglify())
    .pipe($.gp.rename("common.js"))
    .pipe($.gulp.dest($.path.js.dest, {
      sourcemaps: $.app.isDev
    }))
    .pipe($.browserSync.stream());
}


module.exports = js;