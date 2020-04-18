import Vue from 'vue';
import axios from 'axios';

class Api {
  constructor () {
  }

  fetch(request, options = {}) {
    console.log(global.BEHOST + '/rest/v1' + request.path)
    axios({
      method: request.method,
      url: global.BEHOST + '/rest/v1' + request.path,
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
