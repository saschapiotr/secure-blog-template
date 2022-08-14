const { src, dest, watch } = require("gulp");
const { spawn } = require('node:child_process');
const log4js = require('log4js');

// gulp plugins
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

log4js.configure({
  appenders: { 
    console: { 
      type: "console",
      layout: {
        type: 'pattern',
        pattern: "[%d{hh:mm:ss}] %[%p %c %m%]",
      }
    } 
  },
  categories: { 
    default: { appenders: ["console"], level: "info" },
    docker: { appenders: ["console"], level: "info" },
    gulp: { appenders: ["console"], level: "info" },
  },
});

const dockerCompose = () => {
  const logger = log4js.getLogger('docker');
  const compose = spawn('docker-compose', ['-f', 'docker-compose.dev.yml', 'up', '--remove-orphans']);
  
  compose.stdout.on('data', (data) => { logger.info(data.toString()); });
  compose.stderr.on('data', (data) => {  logger.info(data.toString()); });
  compose.stderr.on('error', (error) => {  logger.error(error.toString()); });
  compose.on('close', (code) => { logger.info('child process exited with code ' + code); });
}

const js = (cb) => {
  src(['web/site/snippets/**/*js', 'web/site/templates/**/*js'])
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(concat('index.min.js'))
    .pipe(dest('web/assets/js'));
  cb();
}

const css = (cb) => {
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

exports.dev = () => {
  const logger = log4js.getLogger('gulp');
  logger.info('starting dev container and listening for js and scss changes');
  dockerCompose();
  watch('web/site/**/*js', js);
  watch('web/site/**/*css', css);
}