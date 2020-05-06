<template>
  <div class="container">
    <header-nav title="课程列表"></header-nav>
    <course-list color="#F29417" ref="courseList" @courseBtn="courseBtn" details="进入课堂"></course-list>
    <!-- <course-lists color="#F29417" ref="courseList" @courseBtn="courseBtn" details="进入课堂"></course-lists> -->
  </div>
</template>

<script>
import courseList from "@/components/courseList";
import courseLists from "@/components/courseLists";
export default {
  components: {
			courseList,
			courseLists
  },
  data() {
    return {};
  },
  methods: {
    courseBtn(index) {
      if (index == 0) {
        alert("我要去课堂");
      } else if (index == 1) {
        this.$router.push("/details");
      } else if (index == 2) {
        this.$router.push("/evaluate");
      }
    },
    async getMyCourseList() {
      let Deng = await this.service.personalCenter.getMyCourseList({
        user_id: localStorage.getItem("user_id"),
        token: localStorage.getItem("token")
      });
      if (Deng.state == 1) {
        toast({
          text: "没有课程!!",
          time: 1000
        });
        return;
      }
      this.$nextTick(() => {
        this.$refs.courseList.dataInfo = Deng.data;
      });
    }
  },
  created() {
    this.getMyCourseList();
  }
};
</script>

<style scoped="scoped" lang="scss">
.container {
  width: 100%;
  height: 100%;
  background: #f3f4f5;
}
</style>