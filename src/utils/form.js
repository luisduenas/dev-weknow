
import axios from 'axios';
import qs from 'qs';

export function saveFormData(form, payload) {
  return axios({
    method: 'post',
    url: `/`,
    data: qs.stringify({
      'form-name': form, 
      ...payload
    }),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  }).catch(error => error);
}
