global.$ ={
  gulp: require('gulp'),
  gp: require('gulp-load-plugins')(),
  browserSync: require('browser-sync').create(),
  path:  require('./gulpfiles/config/path.js'),
  app: require('./gulpfiles/config/app.js'),
}

const del = require('del');


//Задачи
const pug = require('./gulpfiles/task/pug.js')
const sass = require('./gulpfiles/task/sass.js')
const js = require('./gulpfiles/task/js.js')
const img = require('./gulpfiles/task/img.js')
const font = require('./gulpfiles/task/font.js')
const icon = require('./gulpfiles/task/icon.js')



const clear = () => {
  return del($.path.root)
}

const watcher = () => {
  $.gulp.watch($.path.pug.watch, pug)
  $.gulp.watch($.path.sass.watch, sass)
  $.gulp.watch($.path.js.watch, js)
  $.gulp.watch($.path.img.watch, img)
  $.gulp.watch($.path.font.watch, font)
  $.gulp.watch($.path.icon.watch, icon)
}

const server = () => {
  $.browserSync.init({
    server: {
      baseDir: $.path.root,
    },
    host: 'localhost',
    port: 5000,
    logPrefix: "DEV"
  });
}

const build = $.gulp.series(
  clear,
  $.gulp.parallel(pug, sass, js, img, font, icon),
)

const devBefore = $.gulp.series(
  $.gulp.parallel(pug, sass, js),
)

const dev = $.gulp.series(
  devBefore,
  $.gulp.parallel(watcher, server)
)


exports.pug = pug;
exports.sass = sass;
exports.js = js;
exports.img = img;
exports.font = font;
exports.icon = icon;

exports.default = $.app.isProd ? build : dev;

exports.files = devBefore;