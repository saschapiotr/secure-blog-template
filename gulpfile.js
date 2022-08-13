const { src, dest, parallel } = require("gulp");
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

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

function css(cb) {
  src(['web/site/snippets/**/*scss', 'web/site/templates/**/*scss'])
    .pipe(sourcemaps.init())
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(autoprefixer({ cascade: false, }))
    .pipe(concat('index.min.css'))
    .pipe(cleanCSS({compatibility: 'ie10'}))
    .pipe(sourcemaps.write())
    .pipe(dest('web/assets/css'));
  cb();
}

exports.build = parallel(js, css)