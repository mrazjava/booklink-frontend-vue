import Vue from 'vue';
import axios from 'axios';

class Api {
  constructor () {
  }

  fetch(request, options = {}) {
    console.log(global.BEHOST + '/rest/v1' + request.path)
    axios({
      url: global.BEHOST + '/rest/v1' + request.path,
      headers: {
        'Accept': options.contentType || 'application/json',
        'Content-Type': options.contentType || 'application/json',
      },
      responseType: options.responseType || null,
      ...request,
    })
    .then((response) => {
      options.callback(response);
    })
    .catch(err => {
      console.log(err)
      var msg = err.response.data.description
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
