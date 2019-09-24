<template>
  <div>
    <van-popup
      v-model="show"
      position="right"
      :style="{ height: '100%', width: '100%' }"
    >
      <van-nav-bar
        title="评论"
        left-arrow
        @click-left="onClickLeft"
      />
      <div class="chy-comments">
        <div class="chy-comments-title">{{content.Title}}</div>
        <van-field
            class="chy-comments-message"
          v-model="message"
          type="textarea"
          placeholder="请输入留言"
          rows="6"
          maxlength="600"
        />
        <div class="chy-comments-size">最大字数600，您还可以输入{{600 - message.length}}字</div>
        <van-button type="info" style="width: 100%; margin-top: 10px;" @click="PostCommentAwait">提交</van-button>
      </div>
      <div class="chy-comments-my">
        <div class="title">我的评论</div>
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="getMyCommentList"
        >
          <div v-for="(list, index) in commentList" :key="index">
            <van-row type="flex" class="chy-comments-box">
              <van-col span="3">
                <van-image
                    round
                    width="40"
                    height="40"
                    :src="list.HeadImage || '../assets/img/logo.png'"
                />
              </van-col>
              <van-col span="21">
                <van-row type="flex" justify="space-between" align="center">
                  <van-col>
                    <div class="name">{{list.PublishUserName}}</div>
                    <div class="time">{{list.CreatedTime | CreatedTime}}</div>
                  </van-col>
                  <van-col @click.native="postDeleteMyComment(list.Id, list.ContentId)"><van-icon class="delete" name="delete" /></van-col>
                </van-row>
                <div class="content">{{list.Content}}</div>
              </van-col>
            </van-row>
          </div>

        </van-list>
      </div>
    </van-popup>
  </div>
</template>

<script>
  import { Popup, NavBar, Field, Button, Row, Col, Image, Icon, List } from 'vant';
  import { PostComment, MyCommentList, DeleteMyComment } from '../api/video';
  import { getStore } from '../utils/loaction';
  const _ = require('lodash');
  export default {
    name: "ChyComments",
    components: {
      'van-popup': Popup,
      'van-nav-bar': NavBar,
      'van-field': Field,
      'van-button': Button,
      'van-row': Row,
      'van-col': Col,
      'van-image': Image,
      'van-icon': Icon,
      'van-list': List
    },
    data(){
      return {
        message: '',
        commentList: [],
        ParentCommentId: 0,     // 回复id 0为新添评论
        pageIndex: 1,
        loading: false,
        finished: false
      }
    },
    props: {
      show: {
        type: Boolean,
        default: false
      },
      content: Object
    },
    methods: {
      async postDeleteMyComment(Id, ContentId){
        await DeleteMyComment(Id, ContentId).then(result => {
          if(result.Code !== 0){
            this.$toast(result.Msg);
            return;
          }
          this.$toast(result.Data);
          this.commentList = _.remove(this.commentList, function(item) {
            if(item.Id !== Id){
              return item
            }
          });
          this.GetWriteLog({
            UserAction: 'DeleteComment',
            ResourceType: this.$route.meta.type,
            Content: this.$route.query.Id,
            Detail: Id
          });
        })
      },
      async getMyCommentList(){
        let Id = this.$route.query.Id;
        await MyCommentList(this.pageIndex, Id).then(result => {
          this.commentList.push(...result.Data.data);
          this.loading = false;
          // 数据全部加载完成
          if (this.pageIndex >= result.Data.total / 8) {
            this.finished = true;
          }
          this.pageIndex ++;
        })
      },
      async PostCommentAwait() { // 回复
        const Content = this.message,
              ContentId = this.content.Id;
        if(Content === '') {
          this.$toast('内容不能为空！');
          return;
        }
        await PostComment(ContentId, Content, this.ParentCommentId).then(res => {
          // 新添加评论
          this.commentList.unshift({
            Content: Content,
            ContentId: ContentId,
            IsLike: 0,
            HeadImage: getStore('HeadImage'),
            Id: res.Data,
            IshaveParentComment: 0,
            PublishUserId: Number(getStore('Id')),
            LikeCount: 0,
            PublishUserName: getStore('Nickname'),
            UpdatedTime: new Date().toJSON(),
            CreatedTime: new Date().toJSON()
          });
          this.GetWriteLog({
            UserAction: 'Comment',
            ResourceType: this.$route.meta.type,
            Content: this.$route.query.Id,
            Detail: Content
          });
          this.message = '';
          this.ParentCommentId = 0;
          this.show = true;
          this.value = '';
        })
      },
      onClickLeft(){
        this.$router.go(0);
        this.$emit('onClickLeft');
      }
    },
    filters: {
      CreatedTime(value){
        let t = value.split('T')[1].split('.')[0].split(":");
        return `${value.split('T')[0]} ${t[0]}:${t[1]}`;
      }
    }
  }
</script>

<style scoped lang="scss">
  .chy-comments-my{
    border-top: 10px solid #f8f8f8;
    padding: 10px;
    .title{
      font-size: 14px;
      color: #1d1d1d;
      padding: 10px 0;
    }
    .chy-comments-box{
      padding: 10px 0;
      .name{
        color: #676767;
      }
      .time{
        color: #9c9c9c;
        padding-top: 5px;
      }
      .delete{
        font-size: 18px;
        color: #9d9d9d;
      }
      .content{
        color: #282828;
        padding-top: 10px;
      }
    }
  }
  .chy-comments{
    padding: 10px;
    .chy-comments-title{
      font-size: 14px;
      color: #020202;
    }
    .chy-comments-message{
      border: 1px solid #c9c9c9; /*no*/
      padding: 10px;
      margin-top: 10px;
    }
    .chy-comments-size{
      color: #a3a3a3;
      margin-top: 10px;
    }
  }
</style>
