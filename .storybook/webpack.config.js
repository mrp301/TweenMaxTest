const path = require('path');
const rootPath = path.resolve(__dirname, '../');

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
          {
            loader:'sass-resources-loader',
            options: {
              resources: ['./assets/css/setting.scss']
        }}],
        include: path.resolve(__dirname, '../'),
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': rootPath,
      '~': rootPath,
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
}