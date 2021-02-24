import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import One from "../components/one.vue";
import Two from "../components/two.vue";
import Three from "../components/three.vue";
import Four from "../components/four.vue";
// import Five from "../components/five.vue";
import FiveOne from "../components/fiveOne.vue";
import FiveTwo from "../components/fiveTwo.vue";
import store from "../store/index.js";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/login.vue")
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path:"/one",
    name:"One",
    component:One,
  },
  {
    path:"/two",
    name:"Two",
    component:Two
  },
  {
    path:"/three",
    name:"Three",
    component:Three
  },
  {
    path:"/four",
    name:"Four",
    component:Four
  },
  {
    path:'/fiveOne',
    name:'FiveOne',
    component:FiveOne
  },
  {
    path:'/fiveTwo',
    name:'FiveTwo',
    component:FiveTwo
  },
  // {
  //   path:"/five",
  //   name:"Five",
  //   component:Five, 
  //   children:[
  //     {
  //       path:'/fiveOne',
  //       name:'FiveOne',
  //       component:FiveOne
  //     },
  //     {
  //       path:'/fiveTwo',
  //       name:'FiveTwo',
  //       component:FiveTwo
  //     },
  //   ]
  // }
];

const router = new VueRouter({
  mode: "hash",  // 使用history打包后会访问不到文件，默认hash
  base: process.env.BASE_URL,
  routes
});

// 路由守卫
router.beforeEach((to,from,next) => {
  
  //是否登录
  if(store.state.isLogin){
    // 去登录页
    if(to.path === 'login'){
      next('/');
    }else{
      next();
    }
  }else{
      // 没有登录
      if(to.path === '/login'){
        next();
      }else{
        next('login?redirect=' + to.fullPath);
      }
  }
})

export default router;
