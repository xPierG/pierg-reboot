// File: .eleventy.js
module.exports = function(eleventyConfig) {
  
  const { DateTime } = require("luxon");
  eleventyConfig.addFilter("date", (dateObj, format) => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat(format);
  });

  // Passthrough Copy: Copia le cartelle nella build finale (_site).
  // I percorsi sono relativi alla root del progetto.
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/fonts");
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("admin");

  // Dizgli a Eleventy di usare la cartella `src` come input.
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes", // La cartella _includes è dentro src
      layouts: "_includes"  // Specifichiamo per sicurezza
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};