import Vue from 'vue';
import axios from 'axios';
import Deployment from '@/deployment'

const BACKEND_HOST = Deployment.value('FE_DEPLOY_BE_HOST')

class Api {

  constructor () {
  }

  fetchV1(request, options = {}) {
    request.path = '/rest/v1' + request.path
    this.fetch(request, options)
  }

  getLoader(options) {
    var loader = null
    if(!options.noLoader) {
      loader = Vue.$loading.show({ canCancel: false, color: '#007BFF', width: 128, height: 128 })
    }
    return loader
  }

  fetch(request, options = {}) {
    console.log(BACKEND_HOST + request.path)
    var loader = this.getLoader(options)
    axios({
      method: request.method,
      url: BACKEND_HOST + request.path,
      headers: {
        'Accept': options.contentType || 'application/json',
        'Content-Type': options.contentType || 'application/json',
      },
      responseType: options.responseType || null,
      ...request,
    })
    .then((response) => {
      if(options.callback) {
        options.callback(response);
      }
      if(loader) {
        loader.hide()
      }
    })
    .catch(err => {
      if(options.callbackErr) {
        options.callbackErr(err)
      }
      if(err.response) {
        var respData = err.response.data
        var msg = respData.description
      }
      if(!msg && respData) {
        msg = respData.error + ': ' + respData.message
      }
      if(loader) {
        loader.hide()
      }
      Vue.notify({
        group: 'api',
        title: request.path,
        type: 'error',
        text: err + (msg ? "<br/>" + msg : '')
      });
    })
    .finally(() => {
    });
  }
}

export default new Api;
