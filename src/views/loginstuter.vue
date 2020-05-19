<template>
  <div class="container"> 
    <div class="bodytop">
      <img class="img1" src="@/assets/login/logins.png"/>
    </div>
    
      <div class="bodybottom">
          <div class="buttonBtn">
            <button @click="loginBtn(0)" class="fw_500 fs15 c_fff">学生登录</button>
          </div>
          <div class="buttonBtn">
            <button @click="loginBtn(1)" class="fw_500 fs15 c_fff">教师登录</button>
          </div>
      </div>
      <div class="next flex flex_x_center fs14 c_666" @click="nexthomeBtn">隨便看看>></div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
        
    };
  },
  methods: {
    loginBtn(index) {
      if(index==0){
        this.$router.push("/student/login");
      }else{
        this.$router.push("/teacher/login");
      }
    },
    nexthomeBtn(){
      this.$router.replace('/dashboard/homestu')
      sessionStorage.setItem('tabBarActiveIndex', 0);
    }
  }
};
</script>

<style scoped="scoped" lang="scss">
  .img1{ 
    padding-top: 20px;
    margin: 0 auto;
  }
  .bodytop{  
    width:100%;
    height:264px;
    background:rgba(73,131,166,1);
  }
  .container {
    width:100%; 
  }
  .buttonBtn {
    padding: 0 15px;
    box-sizing: border-box;
    margin-top: 30px;
    button {
      width: 100%;
      height: 44px;
      background: rgba(62, 112, 147, 1);
      border-radius: 4px;
    }
  } 
  .bodybottom{
  	margin-top: 50px;
  }
  .next{
		margin-top:20px;
	}
</style>