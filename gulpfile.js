const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');

function styles() {
    return gulp.src('./src/css/**/*.scss')
        .pipe(sass().on('errosr', sass.logError))
        .pipe(concat('all.css'))
        .pipe(autoprefixer({
            browsers: ['> 0.1%'],
            cascade: false
        }))
        .pipe(cleanCSS({
            level: 2
        }))
        .pipe(gulp.dest('./build/css'))

}

function scripts() {
    return gulp.src('./src/js/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/js'))

}

function watch() {

    gulp.watch('./src/css/**/*css', styles);
    //watching for all files and let func styles
    gulp.watch('./src/js/**/*js', scripts);
}

//task registration
gulp.task('styles', styles);
gulp.task('scripts', scripts);
gulp.task('watch', watch);


//npm install node-sass gulp-sass --save-dev
//npm install --save-dev gulp-watch
//npm install gulp-clean-css --save-dev
//npm install --save-dev gulp-autoprefixer
//npm install --save-dev gulp-concat
//npm install --save-dev gulp-uglify