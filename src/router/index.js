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

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
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
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
