<template>
  <div class="container_">
    <header-nav title="帮助中心"></header-nav>

    <my-video ref="video"></my-video>
    <div   v-for="(item,index) in navList" :key="index">
      <p class=" fw_500 nav_list" v-html="item.text"></p>
      <!-- <nav-item
        v-for="(item,index) in navList"
        :key="index"
        :navItem="item"
        :index="index"
        @toDetails="toDetails"
      ></nav-item> -->
    </div>
  </div>
</template>


<script>
import navItem from "../components/navItem";
export default {
  components: {
    navItem
  },
  data() {
    return {
      navList: [
        {
          title: "软件使用说明视频",
          isBorder: false
        },
        {
          title: "软件使用说明视频",
          isBorder: false
        },
        {
          title: "软件使用说明视频",
          isBorder: false
        },
        {
          title: "软件使用说明视频",
          isBorder: true
        }
      ]
    };
  },
  created() {this.helpBtn()},
  mounted() {
    this.$refs.video.playerOptions.sources[0].src =
      "http://tu.yyzxh.com/video/f756f201909111009512491.MP4";
  },
  methods: {
    toDetails() {
      this.$router.push('/helpCenterDetail')
    },
    async helpBtn(){
      let init = await this.service.personalCenter.help()
      if(init.state==200){
        this.navList = init.data
        this.$refs.video.playerOptions.sources[0].src = init.data[0].video
     
      }
    }
  }
};
</script>

<style  lang="scss">
.container_ {
  width: 100%;
  min-height: 100%;
  height: auto;
  background: #f3f4f5;
}
.nav_list{
  /deep/h2{
    font-size:20px;
    color:#000;
    padding: 10px;
    b{font-weight: bold;}
  }
  /deep/h3{
    font-size: 18px;
    padding: 0px 0 10px 20px;
    b{font-weight: 500;}
  }
  /deep/.MsoNormal{
    padding: 0 10px 5px 10px;
    font-size: 14px;
    line-height: 15px;
    text-indent: 20px;
  }
}
</style>