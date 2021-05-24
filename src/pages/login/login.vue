<template>
  <div class="box">
    <v-header title="手机登录" :back="false" :register="true"></v-header>
    <!-- <div>
      手机号：<input type="text" placeholder="手机号" v-model="user.phone" />
    </div> -->
    <van-cell-group>
      <van-field v-model="user.phone" label="手机号" placeholder="请输入手机号" />
    </van-cell-group>
    <!-- <div>
      密码：<input type="password" placeholder="密码" v-model="user.password" />
    </div> -->
    <van-cell-group>
      <van-field v-model="user.password" label="密码" placeholder="请输入密码" />
    </van-cell-group>
    <!-- <button @click="login">登录</button> -->
    <van-button @click="login" type="primary" size="large">登录</van-button>
  </div>
</template>

<script>
import { reqLogin } from "../../request/index";
export default {
  data() {
    return {
      user: {
        phone: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      /*axios({
        url: "/api/login",
        method: "POST",
        data: this.user,
      }).then((res) => {
        console.log(res);
        if ((res.data, code === "200")) {
          //存一下用户信息,由于用户信息是个json,本地存储存进去，需要先转字符串
          localStorage.setItem("userInfo", JSON.stringify(res.data.list));
          //跳转

          this.$router.push("/index");
        } else {
          alert(this.data.msg);
        }
      });*/
      // 简化  axios.post(url,参数,配置项).then()
      reqLogin(this.user).then((res) => {
        console.log(res);
        if (res.data.code === 200) {
          //存一下用户信息,由于用户信息是个json,本地存储存进去，需要先转字符串
          localStorage.setItem("userInfo", JSON.stringify(res.data.list));
          //跳转
          this.$router.push("/index");
        } else {
          alert(this.data.msg);
        }
      });
    },
  },
};
</script>

<style scoped>
.box{
  margin-top: 3rem;
}
</style>