import Vue from 'vue';
import Notifications from 'vue-notification';
import axios from 'axios';

class Api {
  constructor () {
  }

  fetch(request, options = {}) {
    console.log(GBL_BEHOST + '/rest/v1' + request.path)
    axios({
      url: GBL_BEHOST + '/rest/v1' + request.path,
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
      Vue.notify({
        group: 'api',
        title: request.path,
        type: 'error',
        text: err
      });
    })
    .finally(() => {
    });
  }
}

export default new Api;
