module.exports = (isDev) => {
  return {
    preserveWhiteSpace: true,
    extractCss: !isDev,
    cssModules: {}
    // hotReload: false //根据环境变量生成
  }
}