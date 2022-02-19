const path = require('path')

module.exports = {
  mode: 'development',
  entry: './frontend/src/index.ts',
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: 'bundle.js',
  },
}
