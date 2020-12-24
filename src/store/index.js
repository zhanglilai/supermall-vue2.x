import Vue from 'vue';
import Vuex from 'vuex';
import mod from './module/mod';


//  1. 安装插件
Vue.use(Vuex);

const store = new Vuex.Store({
   /*  state: {},
    mutations: {},
    actions: {}, 
    getters
    */
    modules: {
        mod
    },
});

export default store;