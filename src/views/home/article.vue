<template>
  <div style="background-color: #fff;" :style="{height: outerHeight + 60 + 'px'}">
    <van-nav-bar
        :fixed="true"
        title="详情"
        left-arrow
        @click-left="$router.go(-1)" />
    <div style="height: 46px;">&nbsp;</div>
    <chy-article-title :type=0 :content="content" />
    <div v-html="content.Text" class="content" style="padding: 0 10px;"></div>

    <chy-comments-list :typeComments="'article'" />
    <chy-share />
    <div style="height: 60px">&nbsp;</div>
    <chy-article-bottom :type=0  @showFn="comments.show = true" :content="content" @LikeCount="LikeCount" />
    <chy-comments :show="comments.show" @onClickLeft="onClickLeft" :content="content" />
  </div>
</template>

<script>
  const outerHeight = window.outerHeight;
  import { PublishedContent, PostLike } from '../../api/video';
  import { NavBar } from 'vant';
  import { ChyShare, ChyArticleTitle, ChyArticleBottom, ChyComments, ChyCommentsList } from '../../components/index';
  export default {
    name: "Article",
    components: {
      'chy-share': ChyShare,
      'chy-article-title': ChyArticleTitle,
      'chy-article-bottom': ChyArticleBottom,
      'chy-comments': ChyComments,
      'chy-comments-list': ChyCommentsList,
      'van-nav-bar': NavBar
    },
    data(){
      return {
        outerHeight: outerHeight,
        content: {},
        comments: {
          show: false
        },
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
<style scoped>
  .content >>> img{
    width: 100%;
  }
  >>>.van-nav-bar .van-icon{
    color: #0b0a10;
  }
</style>
<style scoped lang="scss">
  .content{
    background-color: #Fff;
  }
  .dsf{
    text-align: center;
    font-size: 14px;
    padding: 20px 0;
    background-color: #fff;
  }

</style>
