const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite"
  },
  features: {
    storyStoreV7: true
  },
  docs: {
    autodocs: "tag"
  },
  viteFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "../src"),
      "@assets": path.resolve(__dirname, "../src/assets"),
      "@components": path.resolve(__dirname, "../src/components"),
      "@stories": path.resolve(__dirname, "../src/stories"),
      "@styles": path.resolve(__dirname, "../src/styles"),
      "@utils": path.resolve(__dirname, "../src/utils")
    };
    return config;
  }
};
