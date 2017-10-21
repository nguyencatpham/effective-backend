import path from 'path'

module.exports = {
  entry: '../index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  }
};