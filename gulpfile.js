const { src, dest, series, parallel } = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const postcss = require('gulp-postcss')
const replace = require('gulp-replace')
const sourcemaps = require('gulp-sourcemaps')
const uglify = require('gulp-uglify')

const srcPath = {
    sass: './app/sass/style.sass',
    js: './app/js/app.bundle.js'
}

function bootstrapBuild(){
    return src('./node_modules/bootstrap/dist/css/bootstrap.min.css')
    .pipe(dest('./public/assets/css'))
}

function sassBuild(){
    return src(srcPath.sass)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(postcss([autoprefixer(),cssnano()]))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('./public/assets/css'))
}

function jsBuild(){
    return src(srcPath.js)
        .pipe(uglify())
        .pipe(dest('./public/assets/js'))
}

function cacheBusting(){
    return src('./public/index.html')
        .pipe(replace(/cb=\d+/g, 'cb=' + new Date().getTime()))
        .pipe(dest('./public'))
}

exports.default = parallel(
    bootstrapBuild,
    sassBuild,
    jsBuild,
    cacheBusting
    )