module.exports = {
    // 基本路径
    publicPath: process.env.NODE_ENV === 'production' ? '' : '/',

    // 输出文件目录
    outputDir: process.env.NODE_ENV === 'production' ? 'dist' : 'devdist',

    // eslint-loader 是否在保存的时候检查
    lintOnSave: false,

    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: false,

    devServer: {
        // open: false, // 编译完成是否打开网页
        // host: '0.0.0.0', // 指定使用地址，默认localhost,0.0.0.0代表可以被外界访问
        // port: 8080, // 访问端口
        // https: false, // 编译失败时刷新页面
        hot: true, // 开启热加载
        // hotOnly: false,
        // 设置代理
        proxy: process.env.VUE_APP_CURRENTMODE === 'dev-remote' ? {
            '/api': {
                target: 'http://192.168.0.164:9092',
                ws: false,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/api'
                }
            }
        } : null,
        overlay: {
            // 全屏模式下是否显示脚本错误
            warnings: true,
            errors: true
        },
    },

    // pluginOptions: {
    //   i18n: {
    //     locale: 'cn',
    //     fallbackLocale: 'cn',
    //     localeDir: 'locales',
    //     enableLegacy: true,
    //     runtimeOnly: false,
    //     compositionOnly: true,
    //     fullInstall: true
    //   }
    // }
}
