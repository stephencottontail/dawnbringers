module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy( {
        "_includes/assets/fonts": "assets/fonts"
    } );
};
