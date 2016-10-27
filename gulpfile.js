var gulp   = require('gulp');
var minify = require('gulp-minify');

gulp.task('copy-js', function() {
    gulp.src('./node_modules/select2/dist/js/*.js')
        .pipe(gulp.dest('./Resources/public/js/'))

    gulp.src('./node_modules/jquery/dist/*.js')
        .pipe(gulp.dest('./Resources/public/js/'))

    gulp.src('./Resources/public/src/widget.js')
        .pipe(gulp.dest('./Resources/public/js/'))
});

gulp.task('copy-css', function() {
    gulp.src('./node_modules/select2/dist/css/*.css')
        .pipe(gulp.dest('./Resources/public/css/'))
});

gulp.task('minify-js', function() {
    gulp.src('./Resources/public/src/*.js')
        .pipe(minify({
            ext:{
                min:'.min.js'
            },
            ignoreFiles: ['*.min.js']
        }))
        .pipe(gulp.dest('./Resources/public/js'))
});

gulp.task('default', ['copy-js', 'copy-css', 'minify-js']);