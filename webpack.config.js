const path = require("path");

module.exports = {
  entry: "./src/index.js", // Path to your entry point
  output: {
    filename: "bundle.js", // Output bundle file name
    path: path.resolve(__dirname, "dist"), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Regex to match .css files
        use: ["style-loader", "css-loader"], // Use the installed loaders
      },
    ],
  },
};
