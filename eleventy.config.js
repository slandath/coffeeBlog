export default function(eleventyConfig) {
  eleventyConfig.addCollection("brands", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./brands/*.liquid")
  });
  eleventyConfig.addCollection("equipment", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./equipment/*.liquid")
  });
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./blog/*.liquid").sort((a, b) => b.date - a.date);
  });
  eleventyConfig.addCollection("recipes", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./recipes/*.liquid")
  });
  eleventyConfig.addCollection("resources", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./resources/*.liquid")
  });
  eleventyConfig.addCollection("shops", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./shops/*.liquid")
  });
  eleventyConfig.addPassthroughCopy("main.css");
  eleventyConfig.addPassthroughCopy("script.js");
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.setLiquidOptions({
      dynamicPartials: false,
      jsTruthy: true,
    });
    return {
      dir: {
        input: ".", // Source files root directory
        includes: "_includes", // Directory for layouts, partials, and includes
        layouts: "_includes/layouts", // Subdirectory for layouts specifically
        output: "_site", // Output directory for the built site
      },
    };
  };