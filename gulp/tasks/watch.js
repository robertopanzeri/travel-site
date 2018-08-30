var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('cssInject', ['styles'], function(){//[dependencies that are run before the cssInject task, in this case the task styles]
    return gulp.src('./app/temp/styles/styles.css')
        .pipe(browserSync.stream());
});

gulp.task('watch', function(){

    browserSync.init ({
        notify: false,//hide notification label on the browser about browserSync actions
        server: {
            baseDir: "app"
        }
    });

    watch('./app/index.html', function(){
        //gulp.start('html');
        browserSync.reload();
    });
    watch('./app/assets/styles/**/*.css', function(){
        gulp.start('cssInject');
    });
    
});
