import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [//注册组件
  {
    path:"/login",
    component: ()=>import("../pages/login/login.vue"),
  },
  {
    path:"/register",
    component: ()=>import("../pages/register/register.vue"),
  },
  {
    path:"/index",
    component: ()=>import("../pages/index/index.vue"),
    children:[
      {
        path:"home",
        component: ()=>import("../pages/home/home.vue"),  
      },
      {
        path:"cate",
        component: ()=>import("../pages/cate/cate.vue"),  
      },
      {
        path:"shop",
        component: ()=>import("../pages/shop/shop.vue"),  
      },
      {
        path:"user",
        component: ()=>import("../pages/user/user.vue"),  
      },
      {
        path:'',
        redirect: "home" 
      }
    ]
  },
  {
    path:"/list",
    component: ()=>import("../pages/list/list.vue"),
  },
  {
    path:"/detail",
    component: ()=>import("../pages/detail/detail.vue"),
  },
  {
    path:"*",
    redirect:"/login"
  }
]

const router = new VueRouter({
  routes
})

export default router
