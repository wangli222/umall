<template>
  <div class="header">
      <div class="back" v-if="back" @click="$router.go(-1)">返回</div>
      <h3>{{title}}</h3>
      <div class="register" v-if="register" @click="$router.push('/register')">注册</div>
  </div>
</template>

<script>
export default {
    props:["title" ,"back","register"]
}
</script>

<style scoped>
.header {
  width: 100vw;
  height: 0.8rem;
  background: #ff4400;
  position: fixed;
  top: 0rem;
  left: 0rem;
}
.header .back {
  position: absolute;
  top: 0rem;
  left: 0.2rem;
  line-height: 0.8rem;
  color: #fff;
  z-index: 2;
}
.header h3 {
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: 0.8rem;
  color: #fff;
}
.header .register {
  position: absolute;
  top: 0rem;
  right: 0.2rem;
  line-height: 0.8rem;
  color: #fff;
  z-index: 2;
}
</style>