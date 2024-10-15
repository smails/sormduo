const pathSrc = './src';
const pathDest = './public';

module.exports = {
  root: pathDest,

  pug: {
    src: pathSrc + '/pages/*.pug',
    watch: pathSrc + '/**/*.pug',
    dest: pathDest,
  },

  sass: {
    global: pathSrc + '/static/sass/global.sass',
    watch: pathSrc + '/**/*.sass',
    dest: pathDest + '/css',
  },

  js: {
    src: pathSrc + '/**/*.js',
    watch: pathSrc + '/**/*.js',
    dest: pathDest + '/js',
  },

  img: {
    src: pathSrc + '/static/img/*.{png,jpg,jpeg}',
    watch: pathSrc + '/static/img/*.{png,jpg,jpeg}',
    dest: pathDest + '/img',
  },

  icon: {
    src: pathSrc + '/static/icon/*.{png,jpg,jpeg,svg}',
    watch: pathSrc + '/static/icon/*.{png,jpg,jpeg,svg}',
    dest: pathDest + '/icon',
  },

  font: {
    src: pathSrc + '/static/font/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}',
    watch: pathSrc + '/static/font/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}',
    dest: pathDest + '/font',
  }
}