<template>
  <div class="box">
    <v-header title="注册" :back="true"></v-header>
    <!-- <div>
      <input type="text" placeholder="手机号" v-model="user.phone" />
    <div>
      <input type="text" placeholder="昵称" v-model="user.nickname" />
    </div>
    <div>
      <input type="text" placeholder="密码" v-model="user.password" />
    </div> -->
    <!-- <button @click="register">注册</button> -->
    <div class="box">
      <van-field
        v-model="user.phone"
        name="手机号"
        label="手机号"
        placeholder="手机号"
        :rules="[{ required: true, message: '请填写手机号' }]"
      />
      <van-field
        v-model="user.nickname"
        name="昵称"
        label="昵称"
        placeholder="昵称"
        :rules="[{ required: true, message: '请填写昵称' }]"
      />

      <van-field
        v-model="user.password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div>
        <van-button  class="button" round type="info" @click="register">注册</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import { reqRegister } from "../../request/index";
export default {
  data() {
    return {
      user: {
        phone: "",
        nickname: "",
        password: "",
      },
    };
  },
  methods: {
    register() {
      if (
        this.user.phone === "" ||
        this.user.nickname === "" ||
        this.user.password === ""
      ) {
        alert("所有都不能为空");
        return;
      }
      reqRegister(this.user).then((res) => {
        // console.log(res);
        alert(res.data.msg);
        if (res.data.code == 200) {
          this.$router.replace("/login");
        }
      });
    },
  },
};
</script>

<style scoped>
.box{
  position: fixed;
  top: 4rem;
  left: 0.5rem;
}
.button{
  margin: 0.2rem 0 0 1rem;
}
</style>