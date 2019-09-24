<template>
  <div style="background-color: #fff;">
    <div class="chy-comments" v-if="typeComments === 'video'">
      <van-row type="flex" justify="space-between" align="center" style="padding: 0 15px;">
        <van-col @click.native="$emit('showFn')">
          <van-icon name="cross" class="chy-cross" />
        </van-col>
        <van-col class="chy-title">评论（{{total}}）</van-col>
        <van-col></van-col>
      </van-row>
    </div>
    <div class="pl-top" style="" v-else>
      <div class="number">评论（{{total}}）</div>
    </div>

    <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
    >
      <div class="chy-comments-nav" v-for="(list, index) in commentList" :key="index">
        <van-row type="flex">
          <van-col span="3">
            <van-image
              round
              width="30px"
              height="30px"
              :src="list.HeadImage || CHY_IMG"
            />
          </van-col>
          <van-col span="21">
            <van-row type="flex" justify="space-between" align="center">
              <van-col class="chy-comments-name">
                <div class="name">{{list.PublishUserName}}</div>
                <div class="time">{{list.CreatedTime | time}}</div>
              </van-col>
            </van-row>
            <van-row type="flex" justify="space-between" align="center" class="chy-comments-content">
              <van-col class="chy-fs-14">{{list.Content}}</van-col>
              <van-col class="chy-icon" @click.native="PostLikeAwait(list.Id, !list.IsLike)">
                <van-icon name="like" class="chy-icon-like" :class="{ 'chy-icon-color': list.IsLike}" />
                <span class="chy-ml5" v-show="list.LikeCount !== 0">{{list.LikeCount}}</span>
              </van-col>
            </van-row>
          </van-col>
        </van-row>
        <van-row type="flex" class="ParentCommentPublishUserName" v-for="(comment, index) in list.ReComment" :key="index">
          <van-col span="3">
            <van-image
              round
              width="30px"
              height="30px"
              :src="CHY_IMG"
            />
          </van-col>
          <van-col span="21">
            <van-row type="flex" justify="space-between" align="center">
              <van-col class="chy-comments-name">
                <div class="name">{{comment.PublishUserName}}</div>
                <div class="time">{{comment.CreatedTime | time}}</div>
              </van-col>
            </van-row>
            <van-row type="flex" justify="space-between" align="center" class="chy-comments-content">
              <van-col class="chy-fs-14">{{comment.Content}}</van-col>
            </van-row>
          </van-col>
        </van-row>
      </div>
    </van-list>
  </div>
</template>

<script>
  import { Row, Col, Icon, Image, List } from 'vant';
  import { CommentList, PostLike } from '../api/video';
  import { longTime } from '../utils/loaction';
  const CHY_IMG = require('../assets/img/logo.png');
  export default {
    name: "ChyComments",
    components: {
      'van-row': Row,
      'van-col': Col,
      'van-icon': Icon,
      'van-image': Image,
      'van-list': List
    },
    props: {
      typeComments: {
        type: String,
        default: 'video'
      }
    },
    data(){
      return{
        CHY_IMG: CHY_IMG,
        ajaxStatus: true,
        pageIndex: 1,
        commentList: [],
        loading: false,
        finished: false,
        total: ''
      }
    },
    methods: {
      async CommentListAwait() { // 评论请求
        if(!this.ajaxStatus) return;
        const res = await CommentList(this.$route.query.Id, this.pageIndex);
        this.ajaxStatus = true;
        if (this.pageIndex >= res.Data.total / 8) {
          this.finished = true;
        } else {
          this.finished = false;
        }
        this.pageIndex = this.pageIndex + 1;
        this.total = res.Data.total;
        return res.Data.data;
      },
      onLoad() { // 下拉加载
        this.loading = false;
        this.CommentListAwait(this.pageIndex).then(res => {
          if(res === undefined || res.length === 0) return;
          res.forEach(item => {
            this.commentList.push(item)
          })
        });
        this.ajaxStatus = false;
      },
      async PostLikeAwait(contentId, isLike) { // 点赞
        await PostLike(contentId, isLike, 2).then(() => {
          this.commentList.forEach(item => {
            if(contentId === item.Id) {
              item.IsLike = !item.IsLike;
              // 添加减少点赞数量
              item.IsLike ? item.LikeCount++ : item.LikeCount--;
              this.GetWriteLog({
                UserAction: item.IsLike ? 'LikeComment' : 'UnLikeComment',
                ResourceType: this.$route.meta.type,
                Content: this.$route.query.Id,
                Detail: item.Id
              });
            }
          })
        });
      }
    },
    filters: {
      time(value){
        return longTime(value)
      }
    }
  }
</script>

<style scoped lang="scss">
  .pl-top{
    background-color: #fff;
    padding-bottom: 10px;
    border-top: 5px solid #ececec;
    .number{
      padding: 15px 15px 0 15px;
    }
  }
  .ParentCommentPublishUserName{
    border-top: 1px solid #eee;
    margin-top: 10px;
    padding-top: 10px;
    margin-left: 35px;
}
.chy-comments{
  border-bottom: 1px solid #f1f2ed;
  padding: 15px 0;
  position: sticky;
  z-index: 10;
  top: 0;
  width: 100%;
  background-color: #fff;
}
.chy-cross{
  font-size: 20px;
  font-weight: bold;
  color: #12101d;
}
.chy-title{
  font-size: 16px;
}
.chy-comments-nav{
  padding: 15px 15px 0 15px;
  .chy-comments-content{
    padding-top: 10px;
    .chy-fs-14{
      font-size: 14px;
    }
    .chy-icon{
      font-size: 14px;
      display: flex;
      align-items: center;
      .chy-icon-like{
        font-size: 14px;
        color: #ccc;
      }
      .chy-icon-color{
        color: #e55749;
      }
    }
  }
  .chy-comments-name{
    .name{
      color: #6e6e6e;
      font-size: 14px;
    }
    .time{
      font-size: 12px;
    }
  }
  .ellipsis{
    font-size: 14px;
  }
}


</style>
