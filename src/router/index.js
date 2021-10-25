import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/pages/home/Home";
import City from "@/pages/city/City";
import Detail from "@/pages/detail/Detail";

// export default new Router({
//   routes: [{
//     path: '/',
//     name: 'Home',
//     component: Home
//   }, {
//     path: '/city',
//     name: 'City',
//     component: City
//   }, {
//     path: '/detail/:id',
//     name: 'Detail',
//     component: Detail
//   }],
//   scrollBehavior (to, from, savedPosition) {
//     return {x: 0, y: 0}
//   }
// })

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/city",
    name: "City",
    component: City,
  },
  {
    path: "/detail/:id",
    name: "Detail",
    component: Detail,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
