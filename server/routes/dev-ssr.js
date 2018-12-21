const Router = require('koa-router')
const axios = require('axios')
const MemoryFs = require('memory-fs')
const webpack = require('webpack')
const VueServerRenderer = require('vue-server-renderer')
const path = require('path')
const fs = require('fs')
const serverConfig = require('../../build/webpack.config.server')

const serverCompiler = webpack(serverConfig)
const serverRender = require('./server-render')

const mfs = new MemoryFs()

serverCompiler.outputFileSystem = mfs

let bundle
serverCompiler.watch({}, (err, stats) => {
  if (err) throw err
  stats = stats.toJson()
  stats.errors.forEach((err, index) => {
    console.log(err)
  })
  stats.warnings.forEach((warn, index) => {
    console.log(warn)
  })
  const bundlePath = path.join(
    serverConfig.output.path,
    'vue-ssr-server-bundle.json'
  )
  bundle = JSON.parse(mfs.readFileSync(bundlePath, 'utf-8'))
  console.log('new bundle generated')
})
const handleSsr = async (ctx) => {
  if (!bundle) {
    ctx.body = '别急，等等...'
    return
  }
  const clinentManifestResp = await axios.get(
    'http://127.0.0.1:8080/vue-ssr-client-manifest.json'
  )
  const clientManifest = clinentManifestResp.data
  const template = fs.readFileSync(
    path.join(__dirname, '../server-template.ejs'),
    'utf-8'
  )
  const renderer = VueServerRenderer.createBundleRenderer(bundle, {
    inject: false,
    clientManifest
  })

  await serverRender(ctx, renderer, template)
}

const router = new Router()
router.get('*', handleSsr)

module.exports = router
