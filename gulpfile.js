// includes
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin');
var plumber = require("gulp-plumber");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var removeComments = require('gulp-strip-css-comments');
var cssbeautify = require("gulp-cssbeautify");
var rename = require("gulp-rename");

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
    src: ['theme/assets/css/bundles/main.css', 'theme/assets/css/fonts.css', 'theme/assets/css/bundles/blocks/**/*.css']
};

gulp.task('styles', function () {
    return gulp.src(configCss.src)
        .pipe(concat('main-styles.min.css'))
        .pipe(cssmin())
        .pipe(gulp.dest('theme/assets/css/bundles/.'));
});

var path = {
    build: {
        css: "theme/assets/css/bundles/."
    },
    src: {
        css: "theme/assets/css/sass/**/*.scss"
    }
};

gulp.task("css:build", function () {
    gulp.src(path.src.css)
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ["last 5 versions"],
            cascade: true
        }))
        .pipe(removeComments())
        .pipe(cssbeautify())
        .pipe(gulp.dest(path.build.css))
        .pipe(cssmin())
        .pipe(rename("style.min.css"))
        .pipe(gulp.dest(path.build.css));
});

//default tasks
gulp.task('default', ['scripts', 'css:build', 'styles'], function () { });
