import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/pages/Index';



Vue.use(Router);
const routes = [
  { path:'/', redirect:'/index' },
  { path:'/index', component:Index }
];



export default new Router({
  routes
})
