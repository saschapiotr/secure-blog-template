const { series, src, dest } = require("gulp");
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

function js(cb) {
  src(['web/site/snippets/**/*js', 'web/site/templates/**/*js'])
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(concat('index.min.js'))
    .pipe(dest('web/assets/js'));
  cb();
}

exports.build = series(js)