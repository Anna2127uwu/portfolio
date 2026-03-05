const gulp = require('gulp'); // Importa Gulp
const sass = require('gulp-sass')(require('sass')); // Importa gulp-sass y sass
autoprefixer = require('gulp-autoprefixer'); // Importa gulp-autoprefixer

// Tarea para compilar SASS a CSS
gulp.task ('sass', () => 
    gulp.src('./src/scss/*.scss')
    .pipe(sass({
        outputStyle: 'compressed',
        sourceComments: true
    }

    )) // Compila SASS a CSS
    .pipe(autoprefixer({
        versions : ['last 2 browsers']
    }))
    .pipe(gulp.dest('./src/css'))

);

gulp.task('default', () => {
   gulp.watch('./src/scss/*.scss', ['sass']);
});