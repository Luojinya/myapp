module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://10.11.56.121:3000',
        changeOrigoin:true,
        pathRewrite: {
          '^/api/' : '/' // 重写请求，api/解析为/
        }
      }
    }
  }
}