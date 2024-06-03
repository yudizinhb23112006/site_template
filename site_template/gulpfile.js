const gulp = require('gulp')

gulp.task('build:images', function() {
    return gulp
        .src('./assets/images/**/*.*')
        .pipe(gulp.dest('./build/images'))

})