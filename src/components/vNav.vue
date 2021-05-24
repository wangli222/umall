<template>
  <div class="footer">
    <router-link v-for="item in arr" :key="item.path" :to="item.path">
      <img
        :src="item.path === $route.path ? item.select_img : item.no_img"
        alt=""
      />
      <div>{{ item.text }}</div>
    </router-link>
  </div>
</template>

<script>
export default {
    props:["arr"]
};
</script>

<style>
.footer {
  width: 100vw;
  height: 0.8rem;
  position: fixed;
  left: 0;
  bottom: 0;
  border-top: 0.01rem solid #ccc;
  display: flex;
  background-color: #fff;
}
.footer a {
  flex: 1;
  text-align: center;
  line-height: 0.4rem;
}
.footer img {
  width: 0.4rem;
  height: 0.4rem;
}
</style>