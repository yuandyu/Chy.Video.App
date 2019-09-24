import { api } from './index'
import request from '../utils/request';
import { getStore } from '../utils/loaction';

/**
 * 新增用户留言
 * memberId      会员id
 * contentId     内容Id
 * isLike        是否点赞
 * */
export function AddMessage(Content) {
  return request({
    url: api + 'Message/AddMessage',
    method: 'POSt',
    data: {
      PublishUserId: Number(getStore('Id')),
      PublishUserName: getStore('Nickname'),
      Content: Content,
      Status: 1
    }
  });
}

/**
 * 留言列表
 * memberId      会员id
 * contentId     内容Id
 * isLike        是否点赞
 * */
export function ValidMessageList(pageIndex = 1, pageSize = 8) {
  return request({
    url: api + 'Message/ValidMessageList',
    method: 'GET',
    params: {
      memberId: Number(getStore('Id')),
      pageIndex: pageIndex,
      pageSize: pageSize
    }
  });
}
