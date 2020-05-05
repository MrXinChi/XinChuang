<template>
  <div class="container">
    <header-nav border :returnShow="false" title="密码登录"></header-nav>
    <div class="login-input">
      <div class="input-item flex flex_y_center">
        <input v-model="username" class="fs14" placeholder="请输入账号" type="text" />
      </div>
      <div class="input-item flex flex_y_center">
        <input v-model="paswoed" class="fs14" placeholder="请输入密码" :type="typeShop" />
        <img @click="glassesBtn" :src="glasses_img" />
      </div>
    </div>
    <div class="buttonBtn">
      <button @click="loginBtn" class="fw_500 fs15 c_fff">登录</button>
    </div>
    <div class="footer flex flex_x_bten">
      <!-- <div @click="registerBtn" class="fs15 fw_500 c_666">注册</div> -->
      <div @click="setupBtn" class="fs15 fw_500 c_666">忘记密码</div>
    </div>
  </div>
  
</template>

<script>
import glasses_true from "@/assets/login/glasses_true.png";
import glasses_false from "@/assets/login/glasses_false.png";

import toast from "@/utils/toast";

export default {
  components: {},
  data() {
    return {
      glasses_img: glasses_false, //眼睛的图片
      glasses: false, //眼睛的开关
      typeShop: "password", //input的类型
      username: "",
      paswoed: ""
    };
  },
  methods: {
    async getDeng() {
      let Deng = await this.service.login.getDeng({
        mobile: this.username,
        password: this.paswoed,
        state:'2'
      });

      if (Deng.state != 1) {
        toast({
          text: Deng.msg,
          time: 1000
        });
        return;
      }
      console.log(Deng)
      /*本地储存*/
      localStorage.setItem("user_id", Deng.data.id);
      localStorage.setItem("token", Deng.data.token);
      localStorage.setItem("name", Deng.data.name);
      localStorage.setItem("mobile", Deng.data.mobile);
      localStorage.setItem("showBottom",0);
      this.$router.push("/dashboard/home");
    },
    loginBtn() {
      this.getDeng();
    },

    glassesBtn() {
      this.glasses = !this.glasses;
      console.log(this.glasses);
      if (this.glasses == true) {
        this.glasses_img = glasses_true;
        this.typeShop = "text";
      } else {
        this.glasses_img = glasses_false;
        this.typeShop = "password";
      }
    },
    registerBtn() {
      this.$router.push("/register");
    },
    setupBtn() {
      this.$router.push("/setup");
    }
  }
};
</script>

<style scoped="scoped" lang="scss">
.container {
  width: 100%;
  .login-input {
    padding-left: 15px;
    box-sizing: border-box;
    padding-top: 5px;
    .input-item {
      width: 100%;
      height: 50px;
      border-bottom: 1px solid #dddee3;
      padding-right: 30px;
      box-sizing: border-box;
      input {
        height: 100%;
        width: 100%;
        text-indent: 7px;
      }
      img {
        width: 24px;
      }
    }
  }
  .buttonBtn {
    padding: 0 15px;
    box-sizing: border-box;
    margin-top: 100px;
    button {
      width: 100%;
      height: 44px;
      background: rgba(62, 112, 147, 1);
      border-radius: 4px;
    }
  }
  .footer {
    margin-top: 20px;
    padding: 0 17px;
  }
}
</style>