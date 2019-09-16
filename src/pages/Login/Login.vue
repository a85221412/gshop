<template>
  <div class="loginContainer">
    <div class="loginInner">
      <div class="login_header">
        <h2 class="login_logo">Mint外卖</h2>
        <div class="login_header_title">
          <a :class="{on: loginWay}" @click="loginWay=true">短信登录</a>
          <a :class="{on: !loginWay}" @click="loginWay=false">密码登录</a>
        </div>
      </div>
      <div class="login_content">
        <form @submit.prevent="login">
          <div :class="{on: loginWay}">
            <div class="login_message">
              <input type="tel" maxlength="11" placeholder="手机号" v-model="phone">
              <button :disabled="!right_phone" class="get_verification"
                      :class="{right_phone:right_phone}" @click.prevent="getcode">
                {{timeout>0?`已发送(${timeout}s)`:'发送验证码'}}
              </button>
            </div>
            <div class="login_verification">
              <input type="tel" maxlength="8" placeholder="验证码" v-model="code">
            </div>
            <div class="login_hint">
              温馨提示：未注册Mint外卖帐号的手机号，登录时将自动注册，且代表已同意
              <a href="javascript:;">《用户服务协议》</a>
            </div>
          </div>
          <div :class="{on: !loginWay}">
            <div>
              <div class="login_message">
                <input type="text" maxlength="11" placeholder="手机/邮箱/用户名" v-model="username">
              </div>
              <div class="login_verification">
                <input type="tel" maxlength="8" placeholder="密码" v-if="showpassword" v-model="password">
                <input type="password" maxlength="8" placeholder="密码" v-else v-model="password">
                <div class="switch_button" :class="showpassword? 'on':'off'" @click="showpassword=!showpassword">
                  <div class="switch_circle" :class="{right:showpassword}"></div>
                  <span class="switch_text">{{showpassword?'abc':'...'}}</span>
                </div>
              </div>
              <div class="login_message">
                <input type="text" maxlength="11" placeholder="验证码" v-model="captcha">
                <img class="get_verification captcha" src="./image/captcha.png" alt="captcha">
              </div>
            </div>
          </div>
          <button class="login_submit">登录</button>
        </form>
        <a href="javascript:;" class="about_us">关于我们</a>
      </div>
      <!--利用$router.back()返回上一级路由 -->
      <a href="javascript:" class="go_back" @click="$router.back()">
        <i class="iconfont icon-zuo"></i>
      </a>
    </div>
    <!--    <AlertTip :alertText="alertText" v-show="alertShow" @closeTip="closeTip"/>-->
  </div>
</template>

<script>
  import MintUI from 'mint-ui'
  import vue from 'vue'
  import {MessageBox} from 'mint-ui';
  import 'mint-ui/lib/style.css'
  // import {req_login} from '../../api/api'

  vue.use(MintUI)
  export default {
    data() {
      return {
        loginWay: true, //false代表密码登录 true代表短信登录
        phone: '',//手机号码
        timeout: 0,//计时器的时间
        showpassword: false, //是否显示密码
        password: '',//登录密码
        code: '',//短信验证码
        username: '',//用户名
        captcha: '',//图形验证码
        src: 'static/images/index/login-code.png'
      }
    },
    methods: {
      //获取手机验证码
      getcode() {
        if (this.timeout == 0) {
          this.timeout = 30
          const interval = setInterval(() => {
            this.timeout--
            if (this.timeout <= 0) {
              //停止计时
              clearInterval(interval)
            }
          }, 1000)
        }

      },
      login() {
        if (this.loginWay) {
          // 手机登录
          const {right_phone, phone, code} = this
          if (!right_phone) {
            //手机号码格式不规范
            MessageBox.alert('手机号码格式不规范', '温馨提示')
          } else if (!/^1\d{10}$/.test(code)) {
            //验证码不正确
            MessageBox.alert('验证码不正确', '温馨提示')
          }else {
            MessageBox.alert('暂无登录效果','温馨提示')
          }
        } else {
          // 用户名登录
          const {username, password, captcha} = this
          if (!username) {
            //用户名格式不规范
            MessageBox.alert('手机号码格式不规范','温馨提示')
          } else if (!password) {
            //密码不正确
            MessageBox.alert('密码不正确', '温馨提示')
          } else if (!captcha) {
            //图形验证码不正确
            MessageBox.alert('图形验证码不正确', '温馨提示')
          } else {
            // var data = {
            //   username: this.username,
            //   password: this.password,
            //   captcha: this.captcha
            // }
            // let that = this
            // req_login(data).then(function (res) {
            //   console.log(res)
            //   console.log(res.data.info[0])
            //   localStorage.userinfo = JSON.stringify(res.data.info[0])
            //   console.log(localStorage.userinfo)
            //   that.$router.replace('/profile')
            //
            // }).catch(function (error) {
            //   console.log(error)
            // })
            MessageBox.alert('暂无登录效果','温馨提示')
          }
        }
      },

    },
    computed: {
      right_phone() {

        return /^1\d{10}$/.test(this.phone)
      }
    }
  }
</script>

<style>
  .loginContainer {
    width: 100%;
    height: 100%;
    background: #fff
  }

  .loginInner {
    padding-top: 60px;
    width: 80%;
    margin: 0 auto;
  }

  .login_header {

  }

  .login_logo {
    font-size: 40px;
    font-weight: bold;
    color: #02a774;
    text-align: center
  }

  .login_header_title {
    padding-top: 40px;
    text-align: center
  }

  .login_header_title > a {
    color: #333;
    font-size: 14px;
    padding-bottom: 4px
  }

  .login_header_title > a:first-child {
    margin-right: 40px
  }


  login_header_title > a .on {
    color: #02a774;
    font-weight: 700;
    border-bottom: 2px solid #02a774
  }

  .login_content > form > div {
    display: none
  }

  .login_content > form > div.on {
    display: block
  }

  input {
    width: 100%;
    height: 100%;
    padding-left: 10px;
    box-sizing: border-box;
    border: 1px solid #ddd;
    border-radius: 4px;
    outline: 0;
    font: 400 14px Arial
  }

  input:focus {
    border: 1px solid #02a774
  }

  .login_message {
    position: relative;
    margin-top: 16px;
    height: 48px;
    font-size: 14px;
    background: #fff
  }

  .get_verification {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    border: 0;
    color: #ccc;
    font-size: 14px;
    background: transparent
  }

  .captcha.get_verification {
    width: 100px;
    height: 30px;
  }

  .get_verification.right_phone {
    color: black
  }

  .login_verification {
    position: relative;
    margin-top: 16px;
    height: 48px;
    font-size: 14px;
    background: #fff
  }

  .switch_button {
    font-size: 12px;
    border: 1px solid #ddd;
    border-radius: 8px;
    /*transition: background-color.3s,border-color:.3s;*/
    padding: 0 6px;
    width: 30px;
    height: 16px;
    line-height: 16px;
    color: #fff;
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%)
  }


  .switch_button.off {
    background: #fff
  }

  .switch_button.on {
    background: #02a774
  }

  .switch_text {
    float: left;
    color: white;
    margin-top: -0.3px;
  }


  .switch_button > .switch_circle {
  / / transform: translateX(27 px);
    position: absolute;
    top: -1px;
    left: -1px;
    width: 16px;
    height: 16px;
    border: 1px solid #ddd;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .1);
    transition: transform .3s
  }

  .switch_button > .switch_circle.right {
    transform: translateX(30px)
  }

  .login_hint {
    margin-top: 12px;
    color: #999;
    font-size: 14px;
    line-height: 20px
  }

  .login_hint > a {
    color: #02a774
  }

  .login_submit {
    display: block;
    width: 100%;
    height: 42px;
    margin-top: 30px;
    border-radius: 4px;
    background: #4cd96f;
    color: #fff;
    text-align: center;
    font-size: 16px;
    line-height: 42px;
    border: 0
  }

  .about_us {
    display: block;
    font-size: 12px;
    margin-top: 20px;
    text-align: center;
    color: #999
  }

  .go_back {
    position: absolute;
    top: 5px;
    left: 5px;
    width: 30px;
    height: 30px;
  }

  .go_back > .iconfont {
    font-size: 20px;
    color: #999
  }

</style>
