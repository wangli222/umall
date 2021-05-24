<template>
  <div>
    <v-header title="首页"></v-header>
    <van-search v-model="value_search" placeholder="请输入关键词" />
    <div class="nav_top">
      <span v-for="item in navArr" :key="item.id">{{ item.catename }}</span>
    </div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in banner" :key="item.id">
        <img
          class="swipe_img"
          :src="'http://localhost:3000' + item.img"
          alt=""
        />
      </van-swipe-item>
    </van-swipe>
    <div class="miaosha">
      <img :src="miaosha" alt="" />
    </div>
    <div class="picture">
      <div class="home_1">
        <!-- <div class="picture_left"> -->
        <div class="home_1_left">
          <span class="blue">限时秒杀</span>
          <van-count-down :time="time">
            <!--  -->
            <template #default="timeData">
              <span class="block">{{ timeData.hours }}</span>
              <span class="colon">:</span>
              <span class="block">{{ timeData.minutes }}</span>
              <span class="colon">:</span>
              <span class="block">{{ timeData.seconds }}</span>
            </template>
          </van-count-down>
        </div>
        <div class="home_1_right">
          <h3>查看更多<van-icon name="arrow" /></h3>
        </div>
        <img :src="require('../../assets/img/home_1.png')" alt="" />
      </div>
      <div class="home_2">
        <img :src="require('../../assets/img/home_2.png')" alt="" />
        <img :src="require('../../assets/img/home_3.png')" alt="" />
      </div>
    </div>
    <div class="shiyi">
      <div class="shiyi_left">双十一尖货预购</div>
      <div class="shiyi_right">畅购全球</div>
    </div>
    <div class="tupian">
      <img :src="require('../../assets/img/01.png')" alt="" />
      <img :src="require('../../assets/img/02.png')" alt="" />
      <img :src="require('../../assets/img/03.png')" alt="" />
      <img :src="require('../../assets/img/04.png')" alt="" />
    </div>

    <div class="hortgoods">
      <div
        class="hot_item"
        v-for="(item, index) in navs"
        :key="item"
        @click="changeN(index)"
        :class="index == n ? 'select' : ''"
      >
        {{ item }}
      </div>
    </div>
    <div v-if="goodsList.length > 0">
      <div
        v-for="item in goodsList[n].content"
        :key="item.id"
        class="goods_list"
      >
        <img
          class="goods_list_img"
          :src="'http://localhost:3000' + item.img"
          alt=""
        />
        <div class="goods_list_right">
          <h5>{{ item.goodsname }}</h5>
          <div>
            <p class="p1">{{"现价格：￥"+ item.price }}</p>
            <p class="p2">{{"原价格：￥"+ item.market_price }}</p>
          </div>
          <div class="buying" @click="$router.push('/detail?id='+item.id)">立即抢购</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import miaosha from "../../assets/img/miaosha.png";
export default {
  data() {
    return {
      value_search: "",
      miaosha,
      time: "",
      navArr: [],
      banner: [],
      navs: ["热门推荐", "上新推荐", "所有商品"],
      goodsList: [],
      n: 0,
    };
  },
  mounted() {
    // axios.get(url,config).then()
    axios.get("/api/getcate").then((res) => {
      this.navArr = res.data.list;
    });
    axios.get("/api/getbanner").then((res) => {
      this.banner = res.data.list;
    });
    axios.get("/api/getseckill").then((res) => {
      this.time = res.data.list[0].endtime;
    });
    axios.get("/api/gethortgoods").then((res) => {
      console.log(res);

      this.goodsList = res.data.list;
    });
  },
  methods: {
    changeN(index) {
      this.n = index;
    },
  },
};
</script>

<style scoped>
.nav_top {
  position: absolute;
  top: 1.5rem;
  left: 0;
  width: 100vw;
  height: 0.8rem;
  line-height: 0.8rem;
  background: #ff4400;
  overflow: hidden;
  /* text-overflow:ellipsis; */
  white-space: nowrap;
  color: #fff;
}
.nav_top span {
  margin: 0rem 0.2rem;
}
.my-swipe {
  margin-top: 0.47rem;
}
.swipe_img {
  width: 100vw;
  height: 4rem;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 0.2rem;
  height: 4rem;
  line-height: 2.5rem;
  text-align: center;
}
.miaosha {
  margin-top: 0.2rem;
}
.picture {
  position: relative;
  width: 100vw;
  height: 3.7rem;
  background-color: #f2f2f2;
}
.picture .home_1 {
  position: absolute;
  top: 0.2rem;
  left: 0.1rem;
  width: 50vw;
}
.picture .home_1 img {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}
.picture .home_1 .home_1_left {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
}
.picture .home_1 .home_1_right {
  position: absolute;
  top: 0.1rem;
  right: 0.3rem;
  z-index: 10;
}
.picture .home_1 .blue {
  display: block;
  color: #88a15e;
  font-weight: 700;
  margin: 0.1rem 0;
}
.picture .home_2 {
  position: absolute;
  top: 0.2rem;
  right: 0rem;
  width: 50vw;
}

.colon {
  display: inline-block;
  margin: 0 4px;
  color: #ee0a24;
}
.block {
  display: inline-block;
  width: 0.22rem;
  color: #fff;
  font-size: 0.12rem;
  text-align: center;
  background-color: #ee0a24;
}
.shiyi {
  width: 100vw;
  height: 40px;
  text-align: center;
  line-height: 40px;
  display: flex;
}
.shiyi .shiyi_left {
  flex: 1;
}
.shiyi .shiyi_right {
  flex: 1;
}
.tupian {
  width: 100vw;
  height: 1.5rem;
  display: flex;
}
.tupian img {
  flex: 1;
  height: 1.5rem;
}

.hortgoods {
  display: flex;
  height: 0.6rem;
}
.hot_item {
  flex: 1;
  height: 0.6rem;
  text-align: center;
  line-height: 0.6rem;
  color: #fea500;
}

/* goodsList  */
.goods_list {
  width: 80vw;
  height: 3rem;
  margin: 0.2rem auto;
  overflow: hidden;
}

.goods_list_img {
  width: 2rem;
  height: 2.5rem;
  float: left;
  /* display: inline-block;
  line-height: 2.5rem; */
}
.goods_list_right{
  margin-left: 2.5rem;
}
.goods_list_right h5{
  margin: 0.1rem 0;
  font-weight: 700;
}
.goods_list_right .p1 {
  color:red
}
.goods_list_right .p2{
  text-decoration:line-through
}
.goods_list_right .buying{
  width: 2rem;
  height: 0.8rem;
  border-radius: 0.2rem;
  text-align: center;
  line-height: 0.8rem;
  background-color: #FEA600;
  color: #fff;
  margin-top: 0.1rem;

}


























.select {
  background: #fea500;
  color: #fff;
}
.zui {
  height: 10rem;
}
</style>