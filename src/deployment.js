import dotenv from 'dotenv'
dotenv.config()

// support for resultion of environment variables by /entrypoint.sh

export default class Deployment {
  static get CONFIG () {
    return {
      FE_DEPLOY_ENV: '$FE_DEPLOY_ENV',
      FE_DEPLOY_BE_HOST: '$FE_DEPLOY_BE_HOST',
      FE_FB_APPID: '$FE_FB_APPID',
      FE_GL_APPID: '$FE_GL_APPID',
      FE_SANDBOX: '$FE_SANDBOX'
    }
  }

  static value (name) {
    if (!(name in this.CONFIG)) {
      console.warn(`Configuration: There is no key named "${name}"`)
      return
    }

    const value = this.CONFIG[name]

    if (!value) {
      console.warn(`Configuration: Value for "${name}" is not defined`)
      return
    }

    if (value.startsWith('$FE_')) {
      // value was not replaced, it seems we are in development.
      // Remove $ and get current value from process.env
      const envName = value.substr(1)
      const envValue = process.env['VUE_APP_' + envName]
      if (envValue) {
        //console.debug('DEV, TOKEN[' + name + '] replaced w/ [' + envValue + ']')
        return envValue
      } else {
        console.warn(`Configuration: Environment variable "${envName}" is not defined`)
      }
    } else {
      // value was already replaced, it seems we are in production.
      //console.debug('TOKEN [' + name + '] resolved to [' + value + ']')
      return value
    }
  }
}
