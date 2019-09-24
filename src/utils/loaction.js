/* eslint-disable no-console */
const _ = require('lodash');
var wx = require('weixin-js-sdk');

/**
 * 设置localStorage
 * */
export const setStore = (name, content) => {
  if (!name) return;
  if (typeof content !== 'string') {
    content = JSON.stringify(content);
  }
  window.localStorage.setItem(name, content);
};

/**
 * 获取localStorage
 */
export const getStore = name => {
  if (!name) return;
  return window.localStorage.getItem(name);
};

/**
 * 删除localStorage
 */
export const removeStore = name => {
  if (!name) return;
  window.localStorage.removeItem(name);
};

/**
 * 微信分享到朋友圈
 * */
export function onMenuShareTimeline(wxInfo) {
  wx.onMenuShareTimeline({
    title: wxInfo.Title, // 分享标题  wxInfo.Title
    link: 'http://www.baidu.com', // 分享链接  window.location.host + '/#/detail?Id=' + wxInfo.Id
    imgUrl: wxInfo.CoverImgUrl, // 分享图标
    success: function () {
      // 用户确认分享后执行的回调函数
      console.log(11);
    },
    cancel: function () {
      // 用户取消分享后执行的回调函数
      console.log(222)
    }
  });
}

/**
 * 微信分享给朋友
 * */
export function onMenuShareAppMessage(wxInfo) {
  wx.onMenuShareAppMessage({
    title: wxInfo.Title, // 分享标题
    desc: wxInfo.Description, // 分享描述
    link: window.location.host + '/#/detail?Id=' + wxInfo.Id, // 分享链接，该链接域名必须与当前企业的可信域名一致
    imgUrl: wxInfo.CoverImgUrl, // 分享图标
    type: '', // 分享类型,music、video或link，不填默认为link
    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
    success: function () {
      // 用户确认分享后执行的回调函数
    },
    cancel: function () {
      // 用户取消分享后执行的回调函数
    }
  });
}

/**
 * 获取屏幕高度
 * */
export const autodivheight = () => {
  var winHeight = 0;
  if (window.innerHeight) {
    winHeight = window.innerHeight;
  } else if ((document.body) && (document.body.clientHeight)) {
    winHeight = document.body.clientHeight;
  }
  // 通过深入Document内部对body进行检测，获取浏览器窗口高度
  if (document.documentElement && document.documentElement.clientHeight) {
    winHeight = document.documentElement.clientHeight;
  }
  return winHeight;
};

/**
 * UTC日期转换
 * utc_datetime UTC时间
 * */
export const formatUtc = (utcDatetime) => {
  let time = _.split(utcDatetime, 'T');
  return time[0]
};

/**
 * 手机号码验证
 * phoneNumberReg :: String -> Boolean
 * */
export const phoneNumberReg = (phone) => {
  const REG = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
  return REG.test(phone);
};

/**
 * 拨打电话
 * */
export function phoneCall(tel) {
  return window.location.href = 'tel://' + tel;
}

/**
 * 转换时间
 * */
export function longTime(UpdatedTime) {
  let time = Math.round(new Date()) - new Date(UpdatedTime);
  const days = Math.floor(time/(24*3600*1000)); //计算天数
  const leave1=time%(24*3600*1000);    //计算天数后剩余的毫秒数
  const hours=Math.floor(leave1/(3600*1000));
  const leave2=leave1%(3600*1000);        //计算小时数后剩余的毫秒数
  const minutes=Math.floor(leave2/(60*1000));
  return days > 0 ? `${days}天前` : (hours === 0 ? `${minutes}分钟前` : `${hours}小时前`);
}
