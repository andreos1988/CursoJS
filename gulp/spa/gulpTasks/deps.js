const gulp = require('gulp')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

function depsCSS(cb){

    return cb()
}

function depsFonts(){
    return gulp.src('node_modules/font_awesome/css/font-awesome.css')
                .pipe(uglifycss({"uglyComments": false}))
                .pipe(concat('deps.min.css'))
                .pipe(gulp.dest('build/assets/css'))
    
    
}

module.exports = {
    depsCSS,
    depsFonts
}