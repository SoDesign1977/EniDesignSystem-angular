
module.exports = {
  "stories": [
    "../projects/enidesignsystem-angular/src/lib/**/**/*.stories.@(js|jsx|ts|tsx)",
    "../projects/enidesignsystem-angular/src/lib/**/**/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/preset-scss'
  ],
  "core": {
    "builder": "webpack5"
  }
}