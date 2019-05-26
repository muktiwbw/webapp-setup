const { src, dest, series, parallel } = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const postcss = require('gulp-postcss')
const replace = require('gulp-replace')
const sourcemap = require('gulp-sourcemap')

const srcPath = {
    sass: './app/sass/style.sass',
    js: './app/js/app.bundle.js'
}