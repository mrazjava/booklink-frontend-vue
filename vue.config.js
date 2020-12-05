const GitRevisionPlugin = require('git-revision-webpack-plugin')

module.exports = {
  lintOnSave: true,
  'chainWebpack': config => {
    config.plugin('define').tap(args => {
      const gitRevisionPlugin = new GitRevisionPlugin({
        branch: true
      })
      args[0]['process.env']['VUE_APP_VERSION'] = JSON.stringify(require('./package.json').version)
      args[0]['process.env']['VUE_APP_GIT_SHORT_COMMIT_HASH'] = JSON.stringify(gitRevisionPlugin.version())
      args[0]['process.env']['VUE_APP_GIT_LONG_COMMIT_HASH'] = JSON.stringify(gitRevisionPlugin.commithash())
      args[0]['process.env']['VUE_APP_GIT_BRANCH'] = JSON.stringify(gitRevisionPlugin.branch())
      return args
    })
  }
}
