import Vue from 'vue';
import axios from 'axios';
import Deployment from '@/deployment'

const BACKEND_HOST = Deployment.value('FE_DEPLOY_BE_HOST')

class Api {

  constructor () {
  }

  fetch(request, options = {}) {
    console.log(BACKEND_HOST + '/rest/v1' + request.path)
    axios({
      method: request.method,
      url: BACKEND_HOST + '/rest/v1' + request.path,
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
    })
    .catch(err => {
      if(options.callbackErr) {
        options.callbackErr(err)
      }
      var respData = err.response.data
      var msg = respData.description
      if(!msg) {
        msg = respData.error + ': ' + respData.message
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
