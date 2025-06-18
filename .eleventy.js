// .eleventy.js
module.exports = function(eleventyConfig) {
  // Questa riga dice a Eleventy di copiare la cartella 'css' nel sito finale.
  // Ci servirà nella prossima fase.
  eleventyConfig.addPassthroughCopy("css");

  return {
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: ".",
      output: "_site",
    },
  };
};