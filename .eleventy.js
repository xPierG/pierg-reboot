// .eleventy.js
const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Copia le cartelle statiche (css, fonts, img)
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("fonts");
  eleventyConfig.addPassthroughCopy("img");

  // Aggiunge il filtro "date" per formattare le date
  eleventyConfig.addFilter("date", (dateObj, format) => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat(format);
  });

  return {
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: ".",
      output: "_site",
    },
  };
};