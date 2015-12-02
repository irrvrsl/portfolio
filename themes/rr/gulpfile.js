var gulp 		= require('gulp'),
	sass 		= require('gulp-sass'),
	autoPref	= require('gulp-autoprefixer'),
	csso		= require('gulp-csso')
	concat      = require('gulp-concat'),
	uglify		= require('gulp-uglify');

gulp.task('default', function(){
	gulp.run('sass', 'concatApp', 'concatVendor');
	gulp.watch('./assets/scss/**', function() {
        gulp.run('sass');
    })
	gulp.watch('./assets/js/app/*.js', function() {
        gulp.run('concatApp');
	})
	gulp.watch('./assets/js/vendor/*.js', function() {
    	gulp.run('concatVendor');
	})
});

gulp.task('sass', function(){
	return gulp.src('assets/scss/*.scss')
		.pipe(sass())
		.pipe(autoPref({
			browsers: ['last 5 versions'],
			cascade: false
		}))
		.pipe(csso())
		.pipe(gulp.dest('./static/css'));
});
gulp.task('concatApp', function() {
	return gulp.src('assets/js/app/*.js')
		.pipe(concat('app.js'))
		.pipe(uglify())
    	.pipe(gulp.dest('./static/js/'));
});
gulp.task('concatVendor', function() {
	return gulp.src('assets/js/vendor/*.js')
		.pipe(concat('vendor.js'))
		.pipe(uglify())
    	.pipe(gulp.dest('./static/js/'));
});