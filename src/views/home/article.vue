<template>
  <div style="background-color: #fff;" :style="{height: outerHeight + 60 + 'px'}">
    <van-nav-bar
        :fixed="true"
        title="详情"
        left-arrow
        @click-left="$router.go(-1)" />
    <div style="height: 46px;">&nbsp;</div>
    <chy-article-title :type=0 :content="content" />
    <div v-html="content.Text" class="content ql-editor" style="padding: 0 10px;"></div>

    <chy-comments-list :typeComments="'article'" />
    <chy-share />
    <div style="height: 60px">&nbsp;</div>
    <chy-article-bottom :type=0  @showFn="comments.show = true" :content="content" @LikeCount="LikeCount" />
    <chy-comments :show="comments.show" @onClickLeft="onClickLeft" :content="content" />
  </div>
</template>

<script>
  const outerHeight = window.outerHeight;
  import '../../assets/css/quill.core.css';
  import '../../assets/css/quill.snow.css';
  import '../../assets/css/quill.bubble.css';
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
      PublishedContentAwait: async function () { // 内容请求
        await PublishedContent(this.$route.query.Id).then(res => {
          if (res.Code !== 0) {
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
<style>

  .ql-editor p {
    margin: 0;
  }
  .ql-editor .ql-size-small {
    font-size: 0.75em;
  }
  .ql-editor .ql-size-large {
    font-size: 1.5em;
  }
  .ql-editor .ql-size-huge {
    font-size: 2.5em;
  }
  .ql-editor .ql-size-8px {
    font-size: 8px;
  }

  .ql-editor .ql-size-12px {
    font-size: 12px;
  }
  .ql-editor .ql-size-14px {
    font-size: 14px;
  }
  .ql-editor .ql-size-16px {
    font-size: 16px;
  }

  .ql-editor .ql-size-20px {
    font-size: 20px;
  }
  .ql-editor .ql-size-22px {
    font-size: 22px;
  }
  .ql-editor .ql-size-24px {
    font-size: 24px;
  }
  .ql-editor .ql-size-26px {
    font-size: 26px;
  }

  .ql-editor .ql-size-48px {
    font-size: 48px;
  }
  .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="8px"]::before,
  .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="8px"]::before {
    content: '8px';
  }

  .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="8px"]::before {
    font-size: 8px;
  }

  .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="12px"]::before,
  .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="12px"]::before {
    content: '12px';
  }

  .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="12px"]::before {
    font-size: 12px;
  }

  .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="14px"]::before,
  .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="14px"]::before {
    content: '14px';
  }

  .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="14px"]::before {
    font-size: 14px;
  }
  .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="16px"]::before,
  .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="16px"]::before {
    content: '16px';
  }

  .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="16px"]::before {
    font-size: 16px;
  }

  .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="20px"]::before,
  .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="20px"]::before {
    content: '20px';
  }

  .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="20px"]::before {
    font-size: 20px;
  }
  .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="22px"]::before,
  .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="22px"]::before {
    content: '22px';
  }

  .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="22px"]::before {
    font-size: 22px;
  }
  .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="24px"]::before,
  .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="24px"]::before {
    content: '24px';
  }

  .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="24px"]::before {
    font-size: 24px;
  }

  .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="26px"]::before,
  .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="26px"]::before {
    content: '26px';
  }

  .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="26px"]::before {
    font-size: 26px;
  }
  .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="48px"]::before,
  .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="48px"]::before {
    content: '48px';
  }

  .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="48px"]::before {
    font-size: 48px;
  }
  .ql-editor .ql-size-small {
    font-size: 0.75em;
  }
  .ql-editor .ql-size-large {
    font-size: 1.5em;
  }
  .ql-editor .ql-size-huge {
    font-size: 2.5em;
  }

  .ql-editor .ql-size-8px {
    font-size: 8px;
  }

  .ql-editor .ql-size-12px {
    font-size: 12px;
  }
  .ql-editor .ql-size-14px {
    font-size: 14px;
  }
  .ql-editor .ql-size-16px {
    font-size: 16px;
  }

  .ql-editor .ql-size-20px {
    font-size: 20px;
  }
  .ql-editor .ql-size-22px {
    font-size: 22px;
  }
  .ql-editor .ql-size-24px {
    font-size: 24px;
  }
  .ql-editor .ql-size-26px {
    font-size: 26px;
  }

  .ql-editor .ql-size-48px {
    font-size: 48px;
  }
  .ql-editor .ql-size-small {
    font-size: 0.75em;
  }
  .ql-editor .ql-size-large {
    font-size: 1.5em;
  }
  .ql-editor .ql-size-huge {
    font-size: 2.5em;
  }
  .ql-editor .ql-size-8px {
    font-size: 8px;
  }
  .ql-editor .ql-size-12px {
    font-size: 12px;
  }
  .ql-editor .ql-size-14px {
    font-size: 14px;
  }
  .ql-editor .ql-size-16px {
    font-size: 16px;
  }
  .ql-editor .ql-size-20px {
    font-size: 20px;
  }
  .ql-editor .ql-size-22px {
    font-size: 22px;
  }
  .ql-editor .ql-size-24px {
    font-size: 24px;
  }
  .ql-editor .ql-size-26px {
    font-size: 26px;
  }
  .ql-editor .ql-size-48px {
    font-size: 48px;
  }
  .ql-bubble .ql-picker.ql-size .ql-picker-label[data-value=small]::before,
  .ql-bubble .ql-picker.ql-size .ql-picker-item[data-value=small]::before {
    content: 'Small';
  }
  .ql-bubble .ql-picker.ql-size .ql-picker-label[data-value=large]::before,
  .ql-bubble .ql-picker.ql-size .ql-picker-item[data-value=large]::before {
    content: 'Large';
  }
  .ql-bubble .ql-picker.ql-size .ql-picker-label[data-value=huge]::before,
  .ql-bubble .ql-picker.ql-size .ql-picker-item[data-value=huge]::before {
    content: 'Huge';
  }
  .ql-bubble .ql-picker.ql-size .ql-picker-item[data-value=small]::before {
    font-size: 10px;
  }
  .ql-bubble .ql-picker.ql-size .ql-picker-label[data-value="8px"]::before,
  .ql-bubble .ql-picker.ql-size .ql-picker-item[data-value="8px"]::before {
    content: '8px';
  }
  .ql-bubble .ql-picker.ql-size .ql-picker-item[data-value="8px"]::before {
    font-size: 8px;
  }

  .ql-bubble .ql-picker.ql-size .ql-picker-label[data-value="12px"]::before,
  .ql-bubble .ql-picker.ql-size .ql-picker-item[data-value="12px"]::before {
    content: '12px';
  }
  .ql-bubble .ql-picker.ql-size .ql-picker-item[data-value="12px"]::before {
    font-size: 12px;
  }
  .ql-bubble .ql-picker.ql-size .ql-picker-label[data-value="14px"]::before,
  .ql-bubble .ql-picker.ql-size .ql-picker-item[data-value="14px"]::before {
    content: '14px';
  }
  .ql-bubble .ql-picker.ql-size .ql-picker-item[data-value="14px"]::before {
    font-size: 14px;
  }

  .ql-bubble .ql-picker.ql-size .ql-picker-label[data-value="16px"]::before,
  .ql-bubble .ql-picker.ql-size .ql-picker-item[data-value="16px"]::before {
    content: '16px';
  }
  .ql-bubble .ql-picker.ql-size .ql-picker-item[data-value="16px"]::before {
    font-size: 16px;
  }
  .ql-bubble .ql-picker.ql-size .ql-picker-label[data-value="20px"]::before,
  .ql-bubble .ql-picker.ql-size .ql-picker-item[data-value="20px"]::before {
    content: '20px';
  }
  .ql-bubble .ql-picker.ql-size .ql-picker-item[data-value="20px"]::before {
    font-size: 20px;
  }
  .ql-bubble .ql-picker.ql-size .ql-picker-label[data-value="22px"]::before,
  .ql-bubble .ql-picker.ql-size .ql-picker-item[data-value="22px"]::before {
    content: '22px';
  }
  .ql-bubble .ql-picker.ql-size .ql-picker-item[data-value="22px"]::before {
    font-size: 22px;
  }
  .ql-bubble .ql-picker.ql-size .ql-picker-label[data-value="24px"]::before,
  .ql-bubble .ql-picker.ql-size .ql-picker-item[data-value="24px"]::before {
    content: '24px';
  }
  .ql-bubble .ql-picker.ql-size .ql-picker-item[data-value="24px"]::before {
    font-size: 24px;
  }
  .ql-bubble .ql-picker.ql-size .ql-picker-label[data-value="26px"]::before,
  .ql-bubble .ql-picker.ql-size .ql-picker-item[data-value="26px"]::before {
    content: '26px';
  }
  .ql-bubble .ql-picker.ql-size .ql-picker-item[data-value="26px"]::before {
    font-size: 26px;
  }

  .ql-bubble .ql-picker.ql-size .ql-picker-label[data-value="48px"]::before,
  .ql-bubble .ql-picker.ql-size .ql-picker-item[data-value="48px"]::before {
    content: '48px';
  }
  .ql-bubble .ql-picker.ql-size .ql-picker-item[data-value="48px"]::before {
    font-size: 48px;
  }
  .ql-bubble .ql-picker.ql-size .ql-picker-item[data-value=large]::before {
    font-size: 18px;
  }
  .ql-bubble .ql-picker.ql-size .ql-picker-item[data-value=huge]::before {
    font-size: 32px;
  }
  .ql-snow .ql-picker.ql-font .ql-picker-label::before,
  .ql-snow .ql-picker.ql-font .ql-picker-item::before {
    content: 'Sans Serif';
  }
  .ql-snow .ql-picker.ql-font .ql-picker-label[data-value=serif]::before,
  .ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]::before {
    content: 'Serif';
  }
  .ql-snow .ql-picker.ql-font .ql-picker-label[data-value=monospace]::before,
  .ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before {
    content: 'Monospace';
  }
  .ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]::before {
    font-family: Georgia, Times New Roman, serif;
  }
  .ql-snow .ql-picker.ql-font .ql-picker-label[data-value=SimSun]::before,
  .ql-snow .ql-picker.ql-font .ql-picker-item[data-value=SimSun]::before {
    content: "宋体";
    font-family: "SimSun";
  }
  .ql-snow .ql-picker.ql-font .ql-picker-label[data-value=SimHei]::before,
  .ql-snow .ql-picker.ql-font .ql-picker-item[data-value=SimHei]::before {
    content: "黑体";
    font-family: "SimHei";
  }
  .ql-snow .ql-picker.ql-font .ql-picker-label[data-value=Microsoft-YaHei]::before,
  .ql-snow .ql-picker.ql-font .ql-picker-item[data-value=Microsoft-YaHei]::before {
    content: "微软雅黑";
    font-family: "Microsoft YaHei";
  }
  .ql-snow .ql-picker.ql-font .ql-picker-label[data-value=KaiTi]::before,
  .ql-snow .ql-picker.ql-font .ql-picker-item[data-value=KaiTi]::before {
    content: "楷体";
    font-family: "KaiTi";
  }
  .ql-snow .ql-picker.ql-font .ql-picker-label[data-value=FangSong]::before,
  .ql-snow .ql-picker.ql-font .ql-picker-item[data-value=FangSong]::before {
    content: "仿宋";
    font-family: "FangSong";
  }
  .ql-snow .ql-picker.ql-font .ql-picker-label[data-value=Arial]::before,
  .ql-snow .ql-picker.ql-font .ql-picker-item[data-value=Arial]::before {
    content: "Arial";
    font-family: "Arial";
  }
  .ql-snow .ql-picker.ql-font .ql-picker-label[data-value=Times-New-Roman]::before,
  .ql-snow .ql-picker.ql-font .ql-picker-item[data-value=Times-New-Roman]::before {
    content: "Times New Roman";
    font-family: "Times New Roman";
  }
  .ql-snow .ql-picker.ql-font .ql-picker-label[data-value=sans-serif]::before,
  .ql-snow .ql-picker.ql-font .ql-picker-item[data-value=sans-serif]::before {
    content: "sans-serif";
    font-family: "sans-serif";
  }

  .ql-font-SimSun {
    font-family: "SimSun";
  }
  .ql-font-SimHei {
    font-family: "SimHei";
  }
  .ql-font-Microsoft-YaHei {
    font-family: "Microsoft YaHei";
  }
  .ql-font-KaiTi {
    font-family: "KaiTi";
  }
  .ql-font-FangSong {
    font-family: "FangSong";
  }
  .ql-font-Arial {
    font-family: "Arial";
  }
  .ql-font-Times-New-Roman {
    font-family: "Times New Roman";
  }
  .ql-font-sans-serif {
    font-family: "sans-serif";
  }
  .ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before {
    font-family: Monaco, Courier New, monospace;
  }
</style>
