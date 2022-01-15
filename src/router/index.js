import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from './../views/Login'
import Register from './../views/Register'
import Home from './../views/Home'

Vue.use(VueRouter);

const routes = [
    {path:'/login', component: Login},
    {path:'/', component: Login},
    {path:'/register', component: Register},
    {path:'/home', component: Home},
    ]
  
const router = new VueRouter({
    routes,
    mode:'history' 
  });


//To get previous pages
export const paths = [];
router.beforeEach((to, from, next) => {
    paths.push(to.path);
    console.log(paths);
    next();
  })

export default router;