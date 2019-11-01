const fs = require( 'fs' );
const path = require( 'path' );

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy( {
        "_includes/assets/fonts": "assets/fonts",
        "_includes/assets/images": "assets/images"
    } );

    eleventyConfig.addFilter( 'useSVG', function( value ) {
        let relativeFilePath = `./_includes/${value}`;

        if ( '.svg' != path.extname( value ) ) {
            throw new Error( 'This filter expects an SVG' );
        }

        let data = fs.readFileSync( relativeFilePath, function( err, contents ) {
            if ( err ) {
                throw new Error( err );
            }

            return contents;
        } );

        return data.toString( 'utf-8' );
    } );
};
