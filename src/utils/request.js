/* eslint-disable no-console */
import axios from 'axios';
import { getStore } from '../utils/loaction';
import { Toast } from 'vant';
const service = axios.create({
  timeout: 500000,
  withCredentials: true
});
// request interceptor
service.interceptors.request.use(config => {
  if (config.method === 'get') { // 给get请求添加时间戳
    if (config.url.indexOf('?') > 0) {
      config.url = config.url + '&_t=' + Date.now();
    } else {
      config.url = config.url + '?_t=' + Date.now();
    }
  }
  // 请求头
  const Authorization = getStore('access_token');
  config.headers['Authorization'] = 'Bearer ' + Authorization;
  config.headers['Access-Control-Allow-Origin'] = '*';
  config.headers['Content-Type'] = 'application/json-patch+json';
  config.headers['accept'] = 'application/json';
  return config;
}, error => {
  // Do something with request error
  Toast.clear();
  Promise.reject(error);
});

service.interceptors.response.use(response => {
  if(response.data.Code !== 0){
    Toast({
      duration: 3000,
      message: response.data.Msg
    });
    return
  }
  Toast.clear();
  return response.data;
}, error => {
  Toast.clear();
  Toast.fail({
    mask: true,
    duration: 3000,
    message: '请求失败'
  });
  return Promise.reject(error);
});
export default service;
