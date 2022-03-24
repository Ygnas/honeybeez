const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("images");  
  eleventyConfig.addPassthroughCopy("media");  
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
};