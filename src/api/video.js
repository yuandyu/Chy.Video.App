/* eslint-disable no-console */
import { api } from './index'
import request from '../utils/request';
import { getStore } from '../utils/loaction';
// const qs = require('qs');
/**
 * 前端获取有效分类
 *
 * */
export function ValidCategoryList() {
  return request({
    url: api + 'Category/ValidCategoryList',
    method: 'GET',
    params: {
      pageIndex: '1',
      pageSize: '15',
      categoryId: '1'
    }
  });
}

/**
 * 列表页
 *
 * */
export function PublishedContentList(categoryId, pageIndex = 1, isRecommend = 0, keyword = '', pageSize = 5) {
  return request({
    url: api + 'Content/PublishedContentList',
    method: 'GET',
    params: {
      pageIndex: pageIndex,
      pageSize: pageSize,
      categoryId: categoryId,
      keyword: keyword,
      isRecommend: isRecommend
    }
  });
}

/**
 * 点赞
 * memberId      会员id
 * contentId     内容Id
 * isLike        是否点赞
 * type          1 对内容点赞， 2对评论点赞
 * */
export function PostLike(contentId, isLike, type) {
  return request({
    url: api + 'Content/PostLike',
    method: 'POSt',
    data: {
      memberId: Number(getStore('Id')),
      objId: contentId,
      isLike: isLike,
      type: type,
      loader: true
    }
  });
}

/**
 * 文章详情
 * contentId    内容Id
 * */
export function PublishedContent(contentId) {
  return request({
    url: api + 'Content/PublishedContent',
    method: 'GET',
    params: {
      contentId: contentId
    }
  });
}

/**
 * 文章详情评论
 * contentId    内容Id
 * */
export function CommentList(contentId, pageIndex = 1, pageSize = 8) {
  return request({
    url: api + 'Content/CommentList',
    method: 'GET',
    params: {
      contentId: contentId,
      pageIndex: pageIndex,
      pageSize: pageSize
    }
  });
}

/**
 * 发布评论
 * ContentId          文章id
 * PublishUserId      评论id
 * PublishUserName    评论用户名
 * Content            评论内容
 * ParentCommentId    是否是回复  0没有
 * */
export function PostComment(ContentId, Content, ParentCommentId = 0) {
  return request({
    url: api + 'Content/PostComment',
    method: 'POSt',
    data: {
      ContentId: ContentId,
      PublishUserId: Number(getStore('Id')),
      PublishUserName: getStore('Nickname'),
      Content: Content,
      ParentCommentId: ParentCommentId
    }
  });
}

/**
 * 根据openid获取会员数据
 * openId          会员id
 * */
export function GetByOpenid(openId) {
  return request({
    url: api + 'Member/GetByOpenid',
    method: 'GET',
    params: {
      openId: openId
    }
  });
}

/**
 * 获取个人评论
 * */
export function MyCommentList(pageIndex, contentId, pageSize = 8) {
  return request({
    url: api + 'Content/MyCommentList',
    method: 'GET',
    params: {
      pageIndex: pageIndex,
      contentId: contentId,
      pageSize: pageSize
    }
  });
}

/**
 * DeleteMyComment
 * */
export function DeleteMyComment(id, contentId) {
  return request({
    url: api + 'Content/DeleteMyComment',
    method: 'POST',
    data: {
      id: id,
      contentId: contentId
    }
  });
}

/*
* banner
* */
export function GetAllAdList(){
  return request({
    url: api + 'Ad/GetAllAdList',
    method: 'GET',
  });
}
