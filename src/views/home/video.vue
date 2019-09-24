<template>
  <div style="background-color: #0a0a08;" :style="{height: outerHeight + 'px'}">
     <div class="chy-nav-bar">
       <van-nav-bar
           left-arrow
           @click-left="$router.go(-1)"
       />
     </div>
    <div v-html="content.VideoURL" class="iframe"></div>
    <chy-article-title :content="content" />
    <chy-share :wxInfo="content" />
    <chy-article-bottom :content="content" @showFn="comments.show = true" @show="show = true" @LikeCount="LikeCount" />

    <van-popup
      v-model="show"
      round
      position="bottom"
      :style="{ height: '63%' }"
    >
      <div>
        <chy-comments-list @showFn="show = false" />
        <div style="height: 60px;">&nbsp;</div>
        <van-search
          @click="comments.show = true"
          style="border-top: 1px solid #f1f2ed; position: fixed; bottom: 0; width: 100%;"
          left-icon="edit"
          disabled
          placeholder="写评论..."
          shape="round"
        />
      </div>
    </van-popup>
    <chy-comments :show="comments.show" @onClickLeft="onClickLeft" :content="content" />
  </div>
</template>

<script>
  import { PublishedContent, PostLike } from '../../api/video';
  import { Search, Popup, NavBar } from 'vant';
  import {ChyCommentsList, ChyComments, ChyShare, ChyArticleTitle, ChyArticleBottom } from '../../components/index';
  const outerHeight = window.outerHeight;
  export default {
    name: "Video",
    components: {
      'van-search': Search,
      'van-popup': Popup,
      'van-nav-bar': NavBar,
      'chy-comments-list': ChyCommentsList,
      'chy-comments': ChyComments,
      'chy-share': ChyShare,
      'chy-article-title': ChyArticleTitle,
      'chy-article-bottom': ChyArticleBottom
    },
    data(){
      return {
        content: {},
        outerHeight: outerHeight,
        show: false,
        comments: {
          show: false
        },
        value: ''
      }
    },
    created(){
      this.PublishedContentAwait();
      this.PostLikeAwait();
    },
    methods: {
      async PostLikeAwait() { // 点赞
        const contentId = this.$route.query.Id;
        await PostLike(contentId, true, 3);
      },
      LikeCount(LikeCount){
        this.content.IsLike = !this.content.IsLike;
        this.content.LikeCount = LikeCount;
      },
      async PublishedContentAwait() { // 内容请求
        await PublishedContent(this.$route.query.Id).then(res => {
          if(res.Code !== 0){
            this.$toast(res.Msg);
            this.error = false;
            setTimeout(function () {
              this.$router.push('/')
            }, 2000);
            return
          }
          this.content = res.Data;
        })
      },
      onClickLeft(){
        this.comments.show = false;
      }
    }
  }
</script>
<style>
  .iframe  iframe{
    width: 100%;
    display: inherit;
    height: 200px;
  }
</style>
<style scoped>
  .chy-nav-bar>>>.van-nav-bar{
    background-color: #0a0a08;
  }
  .chy-nav-bar>>>.van-nav-bar .van-icon{
    color: #fff;
  }
</style>
<style scoped lang="scss">

  .chy-ts{
    text-align: center;
    color: #fafaf8;
    font-size: 14px;
    width: 300px;
    margin-left: -150px;
    position: absolute;
    bottom: 60px;
    left: 50%;

  }
</style>
