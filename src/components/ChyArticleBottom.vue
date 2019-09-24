<template>
  <div class="chy-bottom">
    <van-row type="flex" align="center" :class="type ? 'Chy_iocn':'bg-fff'">
      <van-col :span="type ? '16' : '20'" @click.native="showFn">
        <van-search
          class="chy-search"
          :background="type ? '#0a0a08':'#ffffff'"
          left-icon="edit"
          disabled
          v-model="value"
          placeholder="写评论..."
          shape="round"
        >
        </van-search>
      </van-col>
      <van-col :span="type ? '8' : '4'" :class="type ? 'c-fefefc':'c-c5c5c5'">
        <van-row type="flex" justify="space-around">
          <van-col class="chy-icon" @click.native="show" v-show="type">
            <van-icon name="comment" class="chy-icon-size" />
            <span class="chy-ml5">{{content.CommentCount}}</span>
          </van-col>
          <van-col class="chy-icon"  @click.native="PostLikeAwait(content.Id, !content.IsLike)">
            <van-icon name="like" class="chy-icon-size " :class="content.IsLike ? 'chy-icon-color': ''" />
            <span class="chy-ml5">{{content.LikeCount}}</span>
          </van-col>
        </van-row>
      </van-col>
    </van-row>
  </div>
</template>

<script>
  import { Row, Col, Icon, Search } from 'vant';
  import { PostLike } from '../api/video';
  export default {
    name: "ChyArticleBottom",
    components: {
      'van-row': Row,
      'van-col': Col,
      'van-icon': Icon,
      'van-search': Search
    },
    props: {
      type: {
        type: Number,
        default: 1 // 1 视频，， 0， 图文
      },
      content: Object
    },
    data() {
      return{
        value: ''
      }
    },
    methods: {
      showFn(){
        this.$emit('showFn')
      },
      show() {
        this.$emit('show')
      },
      async PostLikeAwait(contentId, isLike) { // 点赞
        await PostLike(contentId, isLike, 1).then(() => {
          let LikeCount = this.content.IsLike ? this.content.LikeCount - 1: this.content.LikeCount + 1;
          this.$emit("LikeCount", LikeCount);
          this.GetWriteLog({
            UserAction: this.content.IsLike ? 'UnLike' : 'Like',
            ResourceType: this.$route.meta.type,
            Content: this.$route.query.Id,
            Detail: this.$parent.$data.content.Title
          });
        })
      }
    }
  }
</script>
<style scoped>
  .Chy_iocn >>> .van-icon-edit{
    color: #969799;
  }
</style>
<style scoped lang="scss">

  .chy-search >>>.van-search__content{
    background-color: #232321;
  }
  .chy-bottom{
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 99;
    .bg-fff{
      border-top: 2px solid #ececec;
      background-color: #fff;
      .chy-search >>>.van-search__content{
        background-color: #f7f8fa!important;
      }
    }
    .c-c5c5c5{
      color: #c5c5c5;
    }
    .c-fefefc{
      color: #fefefc;
    }
  }

  .chy-icon-size{
    font-size: 18px;
  }

  .chy-icon-color{
    color: #e55749;
  }
  .chy-icon{
    font-size: 14px;
    display: flex;
    align-items: center;
  }
  .chy-ml5{
    margin-left: 5px;
  }

</style>
