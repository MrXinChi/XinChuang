<template>
  <div class="container_">
    <header-nav title="个人简历"></header-nav>
    <div class="nav_list">
      <label>
        <div class="avatar_item">
          <div class="item_bock flex flex_x_center">
            <label>
              <img :src="userInfo.avatar" />
              <input type="file" accept="image/*" @change="handleFile" class="hiddenInput" />
            </label>
          </div>
        </div>
      </label>
      <div class="reg-input">
        <div class="input-item flex flex_y_center">
          姓名
          <input v-model="userInfo.name" placeholder="请输入姓名" class="fs14" type="text" />
        </div>
        <div class="input-item flex flex_y_center">
          年龄
          <input v-model="userInfo.age" placeholder="请输入年龄" class="fs14" type="text" />
        </div>
        <div class="input-item flex flex_y_center">
          毕业院校
          <input v-model="userInfo.school" placeholder="请输入毕业院校" class="fs14" type="text" />
        </div>
        <div class="input-item flex flex_y_center">
          擅长领域
          <input v-model="userInfo.field" placeholder="请输入擅长领域" class="fs14" type="text" />
        </div>
        <div class="input-item flex flex_y_center">
          兴趣爱好
          <input v-model="userInfo.hobby" placeholder="请输入兴趣爱好" class="fs14" type="text" />
        </div>
      </div>
      <!-- <nav-item v-for="(item,index) in navList" :key="index" :navItem="item" :index="index" @toDetails="toDetails"></nav-item> -->
    </div>
    <div class="btn_wrapper">
      <button class="btn" @click="setResume">提交</button>
    </div>
  </div>
</template>

<script>
import navItem from "../components/navItem";
import toast from "@/utils/toast";

export default {
  components: {
    navItem
  },
  data() {
    return {
      userInfo:{
        name:'',
        age:'',
        school:'',
        field:'',
        hobby:'',
        avatar:"https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=62d46c39067b020818c437b303b099b6/d4628535e5dde7119c3d076aabefce1b9c1661ba.jpg"
      },
      fileImage:""
    };
  },
  methods: {
  	async getResume() {
				let Resume = await this.service.personalCenter.getResume({
					user_id: localStorage.getItem("user_id"),
					token: localStorage.getItem("token")
        });
        if(Resume.state == 200){
          this.userInfo.name = Resume.data.name
          this.userInfo.age = Resume.data.age
          this.userInfo.school = Resume.data.school
          this.userInfo.field = Resume.data.field
          this.userInfo.hobby = Resume.data.hobby
          this.userInfo.avatar = Resume.data.images
        }
			},
  	
  	async setResume(){
  		let params = {
        ...getUserData(),
        name:this.userInfo.name,
        age:this.userInfo.age,
        school:this.userInfo.school,
        field:this.userInfo.field,
        hobby:this.userInfo.hobby,
        file:this.fileImage
      }
      let init = await this.service.personalCenter.setResume(params)
      toast({
        text: init.msg,
        time: 1000
      })
      if(init.state==200){
        this.$router.push('/dashboard/personalCenter')
      }
  	},
    // 将头像显示
			handleFile: function(e) {
				let $target = e.target || e.srcElement
				let file = $target.files[0]
				let param = new FormData()
				this.fileImage = param.append('file', file)
				param.append("user_id", localStorage.getItem('user_id'))
				param.append('token', localStorage.getItem('token'))
        this.getImgsubm(param)
				var reader = new FileReader()
				reader.onload = (data) => {
					let res = data.target || data.srcElement
					this.userInfo.avatar = res.result
				}
				reader.readAsDataURL(file)
      },
      async getImgsubm(params) {  //修改头像
				let Imgsubm = await this.service.about.getImgsubm(params)
				this.Imgsubm = Imgsubm.tup
				this.getUserEdit(this.Imgsubm)
      },
      async getUserEdit(file) { //修改头像
				let UserEdit = await this.service.personalCenter.getUserEdit({
					user_id: localStorage.getItem('user_id'),
					token: localStorage.getItem('token'),
					file: file
        })
        toast({
          text: UserEdit.msg,
          time: 1000
        })
			},
  },
  created() {
  	this.getResume()
  }
};
</script>

<style scoped lang="scss">

.reg-input {
		padding-left: 15px;
		box-sizing: border-box;
		margin-top: 5px;
		background: #fff;
		.input-item {
			width: 100%;
			height: 50px;
			border-bottom: 1px solid #DDDEE3;
			.input-icon {
				width: 22px;
				height: 22px;
			}
			input {
				height: 100%;
				text-indent: 10px;
			}
			button {
				width: 100px;
				height: 22px;
				background: rgba(255, 255, 255, 1);
				border: 1px solid #3E7093;
				border-radius: 1px;
				margin-right: 15px;
				color: #3E7093;
			}
			.glasses {
				width: 24px;
				margin-right: 15px;
			}
		}
	}


.container_ {
  width: 100%;
  min-height: 100%;
  height: auto;
  background: #f3f4f5;
  .nav_list {
    margin-top: 15px;
    .avatar_item {
      @include flex-center(row, space-between);
      padding-left: 15px;
      height: 100px;
      background-color: #ffffff;
      padding-right: 15px;
      border-bottom: 15px solid #f3f4f5;
      .item_bock {
        label {
          width: 60px;
          height: 60px;
          img {
            width: 60px;
            height: 60px;
            border-radius: 50px;
          }
          .hiddenInput {
            display: none;
          }
        }
      }
    }
  }
  .btn_wrapper {
    margin-top: 100px;
    padding: 0 15px;
    box-sizing: border-box;
    .btn {
      @include btn();
    }
  }
}
</style>