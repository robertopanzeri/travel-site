var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('default', function(){
    console.log("Gulp task created");
});

gulp.task('html', function(){
    console.log("Task related to HTML");
});

gulp.task('styles', function(){
    console.log("Task related to CSS, maybe SASS");
});

gulp.task('watch', function(){

    watch('./app/index.html', function(){
        gulp.start('html');
    });
    watch('./app/assets/styles/**/*.css', function(){
        gulp.start('styles');
    });
    
});