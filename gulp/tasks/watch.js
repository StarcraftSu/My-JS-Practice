//Microproject gulp

var gulp = require("gulp");                
var watch = require("gulp-watch");                  //gulp监听 
var browserSync=require('browser-sync').create();   //网页同步

gulp.task('watch',function(){
	notify:false,
	browserSync.init({
		server:{
			baseDir:"Image-slider"
		},
		startPath: "imageSlider.html" 
		//The default path is index.html
		//for a customized name you have to add startpath
	});

	watch("./Image-slider/imageSlider.html",function(){
		browserSync.reload();
	});

	watch('./Image-slider/CSS/**/*',function(){
		gulp.start('cssInject');
	});


	watch('./Image-slider/Script/**/*',function(){
		gulp.start('jsInject');
	})
});


gulp.task('cssInject',['styles'],function(){
	return gulp.src('./Image-slider/temp/style/style.css')
	.pipe(browserSync.stream());
});

gulp.task('jsInject',['scripts'],function(){
	return gulp.src('./Image-slider/temp/script/app-es6.js')
	.pipe(browserSync.stream());

});
