var gulp = require( 'gulp' );
var postCSS = require( 'gulp-postcss' );
var nano = require( 'cssnano' );
var autoprefixer = require( 'autoprefixer' );

gulp.task( 'styles', function ( done ) {
    var plugins = [
        autoprefixer( { overrideBrowserslist: ['last 1 version' ] } ),
        nano( { preset: 'default' } )
    ];
    return gulp.src( './assets/css/*.css' )
        .pipe( postCSS( plugins ) )
        .pipe( gulp.dest( './_includes/assets/css' ) );

    done();
} );
