/* eslint-disable no-console */
import { api } from './index'
import request from '../utils/request';

export function CRMLoginByOpenId(openId) {
  return request({
    url: api + 'User/GetUserInfoByWxOpenId',
    method: 'GET',
    params: {
      wxOpenId: openId
    }
  });
}
