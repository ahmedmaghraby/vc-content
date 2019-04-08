// includes
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin');

//files
var config = {
    src: ['theme/assets/scripts/**/*.js', 'pages/community/angular/*.js', '!theme/assets/scripts/**/*.min.js', '!theme/assets/scripts/angular/docs.js', '!theme/assets/scripts/angular/blog.js', '!theme/assets/guides/js/guides.js']
};

//tasks
gulp.task('scripts', function () {
    return gulp.src(config.src)
      .pipe(concat('main-layout.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('theme/assets/scripts/bundles/.'));
});

var configCss = {
    src: ['theme/assets/css/reset.css', 'theme/assets/css/main.css', 'theme/assets/css/main_new.css', 'theme/assets/css/flags.css', 'theme/assets/css/responsive.css', 'theme/assets/css/magnific-popup.css']
};

gulp.task('styles', function () {
    return gulp.src(configCss.src)
        .pipe(concat('main-styles.min.css'))
        .pipe(cssmin())
        .pipe(gulp.dest('theme/assets/css/bundles/.'));
});

//default tasks
gulp.task('default', ['scripts', 'styles'], function () { });
