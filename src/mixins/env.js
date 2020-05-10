import Deployment from '@/deployment'

export default {
  methods: {
    isLive() {
      //console.log('isLive ? [' + Deployment.value('FE_DEPLOY_ENV') + ']')
      return ('live'.localeCompare(Deployment.value('FE_DEPLOY_ENV')) == 0)
    }
  }
};
