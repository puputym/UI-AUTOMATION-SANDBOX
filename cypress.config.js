const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
      specPattern : "cypress/integration",
      reporter: "mochawesome",
      supportFile : false,
      viewportWidth: 1500,
      viewportHeight: 1000,
      video : true,
      videoUploadOnPasses: false
  },
});
