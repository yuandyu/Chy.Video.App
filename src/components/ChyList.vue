<template>
  <div>
    <div v-for="(list, index) in contentList" :key="index" class="contentList">
      <!--视频1-->
      <div class="chy-iframe">

        <div class="chy-CreatedTime" style="">{{list.CreatedTime | time}}推荐</div>
        <van-row :class="{ 'van-row--flex van-row--justify-space-between verticalRow': list.ShowType }">
          <van-col v-if="list.Type === 2">
            <div class="chy-find-img" @click="goRouter(list)">
              <van-image
                  :width="list.ShowType ? '80px' : '100%'"
                  :height="list.ShowType ? '80px' : ''"
                  fit="cover"
                  :src="list.CoverImgUrl"
              />
            </div>
          </van-col>
          <van-col v-else style="width: 100%;">
            <div v-html="list.VideoURL" style="background-color: #fff;" class="iframe"></div>
          </van-col>
          <van-col class="chy-iframe-title" @click="goRouter(list)">{{list.Title}}</van-col>
        </van-row>


        <div class="chy-iframe-bigbox">
          <div class="chy-iframe-box">
            <div class="chy-iframe-name" @click="goRouter(list)">
              <van-tag plain v-for="(tag, index) in list.Taglist" :key="index" style="margin-right: 5px;">{{tag.Name}}</van-tag>
            </div>
            <div class="chy-iframe-operating">
              <van-row type="flex" class="chy-home-align" @click.native="goRouter(list)">
                <van-col class="chy-home-icon">
                  <van-icon name="eye" style="font-size: 18px;" />
                </van-col>
                <van-col class="chy-home-size" v-if="list.ReadCount !== 0">{{list.ReadCount}}</van-col>
              </van-row>
              <van-row type="flex" align="center" @click.native="PostLikeAwait(list)">
                <van-col class="chy-home-icon">
                  <van-icon name="like" :class="{ 'chy-zan-color': list.IsLike}" />
                </van-col>
                <van-col class="chy-home-size" v-if="list.LikeCount !== 0">{{list.LikeCount}}</van-col>
              </van-row>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // import ChyShare from '../components/ChyShare';
  import { PostLike } from '../api/video';
  import { longTime } from '../utils/loaction';
  import { Icon, Row, Col, Image, Tag } from 'vant';
  export default {
    name: "ChyList",
    components: {
      'van-icon': Icon,
      'van-row': Row,
      'van-col': Col,
      'van-image': Image,
      'van-tag': Tag
      // 'chy-share': ChyShare
    },
    props: {
      contentList: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    methods: {
      goRouter(list){
        if(list.Type === 2){
          this.$router.push({path: '/article', query: { Id: list.Id }})
        } else {
          this.$router.push({path: '/video', query: { Id: list.Id }})
        }
      },
      async PostLikeAwait(list) {
        const contentId = list.Id,
              isLike = !list.IsLike;
        await PostLike(contentId, isLike, 1).then(() => {
          this.contentList.forEach(item => {
            if(contentId === item.Id) {
              item.IsLike = !item.IsLike;
              // 添加减少点赞数量
              item.IsLike ? item.LikeCount++ : item.LikeCount--;
              this.GetWriteLog({
                UserAction: item.IsLike ? 'Like' : 'Unlik',
                ResourceType: list.Type === 2 ? 'Article_Comment' : 'Video_Comment',
                Content: contentId,
                Detail: list.Title
              });
            }
          });
        })
      },
    },
    filters: {
      time(value){
        return longTime(value)
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
  .iframe{
    background-color: #fff;
  }
  >>>.van-tag::after{
    border-color: #a0a0a0;
  }
  >>>.van-tag--default.van-tag--plain{
    color: #b9b8bd;
  }
  >>>.van-tabs--line{
    padding-top: 0;
  }
  >>>.van-tabs__wrap{
    position: sticky;
    top: 0;
  }
  >>>.van-actionsheet{
    z-index: 3001!important;
  }
  >>>.van-actionsheet__name{
    font-size: 14px!important;
  }
  >>>.van-ellipsis{
    font-weight: bold;
  }
</style>
<style scoped lang="scss">

  .chy-CreatedTime{
    color: #b9b8bd;
    font-size: 12px;
    padding: 20px 10px;
  }
  .contentList{
    padding-bottom: 18px;
    border-radius: 5px;
  }
  .chy-fixed{
    position: fixed;
    bottom: 30px;
    right: 20px;
    z-index: 3000;
    .iconfont{
      font-size: 30px;
      color: #09f;
    }
  }
  .chy-zbo{
    display: inline-block;
    height: 50px;
    line-height: 50px;
    color: red;
    font-size: 16px;
    text-align: center;
    width: 100%;
    background-color: #fff;
    margin-bottom: 5px;
  }
  .chy-home-message{
    display: flex;
    justify-content: space-around;
    padding: 10px 0;
    text-align: center;
    div{
      color: #333;
      .iconfont{
        font-size: 30px;
      }
      div{
        padding-top: 10px;
      }
    }
  }

  .chy-zan-color{
    color: #e55749;
  }
  .chy-home-size{
    font-size: 12px;
    margin-left: 2px;
  }
  .chy-home-icon{
    display: flex;
    font-size: 16px;
    color: #858587;
  }
  .chy-home-align{
    margin: 0 15px;
    align-items: center
  }
  .chy-find-box{
    display: flex;
    padding: 10px;
    margin-bottom: 5px;
    background-color: #fff;
    .chy-find-img{
      flex: 5;
      background-color: #fff;
      padding: 0 5px;
      img{
        width: 100%;
        height: 110px;
      }
    }
    .chy-find-right{
      flex: 7;
      margin-left: 10px;
      align-content: space-between;
      display: grid;

      .chy-find-title{

        font-size: 14px;
        font-weight: bold;
      }
      .chy-find-nav{
        min-height: 80px;
        font-size: 12px;
        color: #666;
        padding-top: 5px;
      }
      .chy-iframe-operating{
        display: flex;
        color: #c7c7c7;
        justify-content: flex-end;
      }
    }
  }
  body{
    background-color: #ebebeb;
  }
  .chy-iframe{
    width: 100%;
    background-color: #fff;
    border-radius: 6px;
    .verticalRow{
      flex-direction: row-reverse;
      display: flex;
      justify-content: space-between;
      padding-right: 10px;
      .chy-iframe-title{
        padding-top: 0;
      }
    }
    .chy-iframe-title{
      color: #292732;
      font-weight: bold;
      font-size: 14px;
      background-color: #fff;
      padding: 20px 10px 0;
    }
    .chy-iframe-bigbox{
      padding: 0 10px 20px;
    }

  }

  .chy-iframe-box{
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    align-items: center;
    padding-top: 20px;
    .chy-iframe-name{
      display: flex;
      .chy-iframe-bg{
        padding: 5px 10px;
        border: 1px solid #a3a3a3;
        color: #9d9d9d;
        margin-right: 5px;
        border-radius: 4px;
      }
    }
    .chy-iframe-operating{
      display: flex;
      color: #858587;
    }
  }
  .chy-home-box{
    background-color: #ebebeb;
    .chy-home-banner{
      width: 100%;
      display: inherit;
    }
  }
</style>
