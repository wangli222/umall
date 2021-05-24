<template>
  <div>
    <v-header title="index"></v-header>
    <router-view></router-view>
    <v-nav :arr='arr'></v-nav>
  </div>
</template>

<script>
import home_selected from "../../assets/img/home_selected.png";
import home_unselected from "../../assets/img/home_unselected.png";
import shop_selected from "../../assets/img/shop_selected.png";
import shop_unselected from "../../assets/img/shop_unselected.png";
import cate_selected from "../../assets/img/cate_selected.png";
import cate_unselected from "../../assets/img/cate_unselected.png";
import user_selected from "../../assets/img/user_selected.png";
import user_unselected from "../../assets/img/user_unselected.png";
export default {
  data() {
    return {
      arr: [
        {
          path: "/index/home",
          text: "首页",
          select_img: home_selected,
          no_img: home_unselected,
        },
        {
          path: "/index/cate",
          text: "分类",
          select_img: cate_selected,
          no_img: cate_unselected,
        },
        {
          path: "/index/shop",
          text: "购物车",
          select_img: shop_selected,
          no_img: shop_unselected,
        },
        {
          path: "/index/user",
          text: "我的",
          select_img: user_selected,
          no_img: user_unselected,
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>