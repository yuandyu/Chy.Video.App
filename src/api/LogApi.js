import { api } from './index'
import request from '../utils/request';

/**
 *
 UserAction: '',   行为 UserAction(浏览：View ，分享：Share， 删除 ：Delete , 评论Comment ，点赞 like,搜索Search)
 ResourceType: '', 资源类型 ResourceType(视频 Video，文章 Article, 栏目List)
 Content: '',      内容 文章ID，栏目ID，关键字
 Detail: ''        详情 Detail(视频标题，文章标题, 评论内容，栏目名称)
 * */
export function WriteLog(data) {
  return request({
    url: api + 'LogApi/WriteLog',
    method: 'GET',
    params: data
  });
}
