var gulp = require( 'gulp' );
var uglify = require( 'gulp-uglify' );
var postCSS = require( 'gulp-postcss' );
var nano = require( 'cssnano' );
var autoprefixer = require( 'autoprefixer' );

gulp.task( 'styles', function ( done ) {
    var plugins = [
        autoprefixer( { overrideBrowserslist: ['last 1 version' ] } ),
        nano( { preset: 'default' } )
    ];
    return gulp.src( [ './node_modules/normalize.css/normalize.css', './assets/css/*.css' ] )
        .pipe( postCSS( plugins ) )
        .pipe( gulp.dest( './_includes/assets/css' ) );

    done();
} );

gulp.task( 'scripts', function ( done ) {
    return gulp.src( './assets/js/*.js' )
        .pipe( uglify() )
        .pipe( gulp.dest( './_includes/assets/js' ) );

    done();
} );
