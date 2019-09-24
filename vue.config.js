module.exports = {
  devServer: {
    proxy: {
      '/login': {
        target: 'http://111.231.250.223:6801',
        changeOrigin: true,
        pathRewrite: { '^/login': '' }
      },
      '/api': {
        target: 'http://192.168.1.8:9006',
        changeOrigin: true,
        pathRewrite: { '^/api': '' }
      }
    }
  },
  productionSourceMap: false
};
