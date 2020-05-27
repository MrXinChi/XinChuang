<template>
  <div class="container_">
    <header-nav title="帮助中心"></header-nav>
    <my-video ref="video"></my-video>
    <div class="nav_list">
      <nav-item
        v-for="(item,index) in navList"
        :key="index"
        :navItem="item"
        :index="index"
        @toDetails="toDetails"
      ></nav-item>
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
      console.log(init)
    }

  },
  created() {
    console.log("444")
    this.helpBtn()
  },
};
</script>

<style scoped lang="scss">
.container_ {
  width: 100%;
  min-height: 100%;
  height: auto;
  background: #f3f4f5;
}
</style>