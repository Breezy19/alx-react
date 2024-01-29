const path = require('path');

module.exports = {
  mode: 'production', // or 'development' if needed
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
