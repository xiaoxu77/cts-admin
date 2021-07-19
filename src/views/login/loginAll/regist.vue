<template>
  <div class="login-container">

    <el-form ref="user" :model="user" class="login-form" label-width="300px">
      <div class="imgtest">
        <img class="logo" src="@/assets/logo.png" alt="logo">
      </div>
      <el-form-item>
        <el-input placeholder="手机号码" prefix-icon="el-icon-mobile-phone" v-model="user.phone" clearable></el-input>
      </el-form-item>
      <el-form-item>
        <el-input class="codeWidth" placeholder="短信验证码" prefix-icon="el-icon-lock" v-model="user.phonecode"></el-input>
        <el-button class="forgetPassword">获取验证码</el-button>
      </el-form-item>
            <el-form-item>
        <el-input placeholder="密码" prefix-icon="el-icon-lock" v-model="user.password" show-password></el-input>
      </el-form-item>
            <el-form-item>
        <el-input placeholder="确认密码" prefix-icon="el-icon-lock" v-model="user.password2" show-password></el-input>
      </el-form-item>
      <el-form-item>
        <el-checkbox v-model="checked">同意用户协议</el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-button class="loginbtn" type="primary" @click="onSubmit">登录</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="text">社交帐号登录</el-button>
        <el-button type="text" class="forgetPassword" @click="changePasswordLogin">用已有账号登录</el-button>
      </el-form-item>
      <div class="test">
        <img class="imgtest" src="@/assets/court.png" alt="court">
      </div>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'LoginIndex',
  components: {},
  props: {},
  data () {
    return {
      src: '',
      checked: false,
      user: {
        phone: '',
        phonecode: '',
        password: '',
        password2: ''
      }
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    onSubmit () {
      console.log(this.user)
      // if (this.user.phone === '17608432590' && this.user.password === '752592761' && this.user.code === '123456') {
      //   this.$router.push('/home')
      // }
    },
    changeMessageLogin () {
      this.$router.push('/messagelogin')
    },
    changePasswordLogin () {
      this.$router.push('/login')
    },
    forgetpassword () {
      this.$router.push('/forgetpassword')
    }
  }
}
</script>
<style lang="scss" scoped>
.login-container{
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-form{
    .test{
      position: absolute;
      bottom: 150px;
      left: 80px;
      .imgtest{
        width: 320px;
      }
    }
    position: absolute;
    border: 1px solid #dfe6e9;
    box-shadow: 2px 2px 10px #b2bec3;
    border-radius: 5px;
    min-width: 600px;
    padding: 30px 100px 50px 100px;
    .imgtest{
      position: relative;
      top: 50px;
      left: -50px;
      .logo{
        width: 300px;
      }
    }
    .codeImg{
      position: absolute;
      right: 0;
    }
    .forgetPassword{
      position: absolute;
      right: 0;
    }
    .codeWidth{
      width: 150px;
    }
    .loginbtn{
      width: 100%;
    }
    .changeLogin{
      .changeLoginBtn{
        position: relative;
        .left{
          left: 0;
          width: 130px;
        }
        .right{
          position: absolute;
          left: 170px;
          width: 130px;
        }
      }
    }
  }
}
</style>
