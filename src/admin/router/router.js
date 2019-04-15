/*import about from "../components/pages/about.vue"
import works from "../components/pages/works.vue"
import reviews from "../components/pages/reviews.vue"

export default [
  {
    path: "/",
    component: about,
    meta: {
      title: "Блок «Обо мне»"
    }
  },
  {
    path: "/works",
    component: works,
    meta: {
      title: "Блок «Работы»"
    }
  },
  {
    path: "/reviews",
    component: reviews,
    meta: {
      title: "Блок «Отзывы»"
    }
  },
  
];
*/

import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import about from "../components/pages/about.vue"
import works from "../components/pages/works.vue"
import reviews from "../components/pages/reviews.vue"
import login from "../components/pages/login.vue"

const routes = [
  {
    path: "/",
    component:about,
    
    
  },
 {
    path: "/works",
    component: works,
    
  },
    {
    path: "/reviews",
    component: reviews,
    
  },
  {
    path: "/login",
    component: login,
    meta: {
      public: true
    }
    
  }
];

export default new VueRouter ({routes})