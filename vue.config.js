module.exports = {
    publicPath:'./',
    lintOnSave: false,
    devServer: {   
        proxy: {
          '/api': {
            // target: 'http://api.yuejizhibo05.com', // 优先 
            target: 'http://app.yuejizhibo05.com', // 2021-12-24 14:52
            // target: 'http://app.yuejizhibo.com', // 其次
           // secure:true,
            // ws: true,
            changeOrigin: true,
            pathRewrite: {
              "^/api": "", 
            },
          },
        }
      }
}
// 