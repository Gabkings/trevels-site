var gulp = require('gulp'),
    watch = require('gulp-watch'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'),
    nested = require('postcss-nested');

gulp.task('default', function(){
    console.log("You create a gulp task");
});

gulp.task('html', function(){
    console.log("html task being run here");
});
gulp.task('styles', function(){
    return gulp.src('./assets/styles/styles.css')
                .pipe(postcss([nested, cssvars, autoprefixer])) 
                .pipe(gulp.dest('./assets/temp/styles'))

});
gulp.task('watch',function(){
    watch('./index.html',function(){
        gulp.start('html');
    });
    watch('./assets/styles/**/*.css',function(){
        gulp.start('styles');
    });
});
