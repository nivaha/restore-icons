var basePaths = {
  src: 'svg/',
  dest: 'output/',
};

var config = {
  shape: {
    dimension: {
      maxWidth: 32,
      maxHeight: 32
    },
    spacing: {
      padding: 3
    }
  },
  mode: {
    css: true, // Create a «css» sprite
    view: true // Create a «view» sprite
  }
};

var gulp = require('gulp');
var svgSprite = require('gulp-svg-sprite');

gulp.task('default', function() {

  gulp.src(basePaths.src + '*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest(basePaths.dest));

});
