import dotenv from 'dotenv'

dotenv.config()

export default class Env {
  static get CONFIG () {
    return {
      RUNNING_ENV: '$VUE_APP_ENV',
      BACKEND_HOST: '$VUE_APP_BACKEND_HOST'
    }
  }

  static value (name) {
    if (!(name in this.CONFIG)) {
      console.log(`Env: There is no key named "${name}"`)
      return
    }

    const value = this.CONFIG[name]

    if (!value) {
      console.log(`Env: Value for "${name}" is not defined`)
      return
    }

    if (value.startsWith('$VUE_APP_')) {
      // value was not replaced, it seems we are in development.
      // Remove $ and get current value from process.env
      const envName = value.substr(1)
      const envValue = process.env[envName]
      if (envValue) {
        return envValue
      } else {
        console.log(`Env: Environment variable "${envName}" is not defined`)
      }
    } else {
      // value was already replaced, it seems we are in production.
      return value
    }
  }
}
