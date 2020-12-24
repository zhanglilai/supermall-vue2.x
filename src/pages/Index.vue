<template>
    <div class="index">
        <fieldset>
            <legend>自增-自减</legend>
            <div class="num">
                <button @click="plus()">+</button>
                <v-counter></v-counter>
                <button @click="minus()">-</button>
            </div>
        </fieldset>
        <fieldset>
            <legend>学生数据</legend>
            <button @click="updateInfo()">更新</button>
            <div class="student">
                <ul>
                    <li v-for="item in $store.getters.filterStu" :key="item.id">
                        {{item.name}}-{{item.age}}
                    </li>
                </ul>
            </div>
        </fieldset>
        <fieldset>
            <legend>axios</legend>
            <button @click="requestData">请求数据</button>
        </fieldset>
    </div>
</template>

<script>
import vCounter from './Counter';
import { getLogin } from '@/util/network';
export default {
    components: {
        vCounter
    },
    data() {
        return {

        }
    },
    methods: {
        plus() {
            this.$store.dispatch('setCounter', ++this.$store.state.mod.counter);
        },
        minus() {
            this.$store.dispatch('setCounter', --this.$store.state.mod.counter);
        },
        updateInfo() {
            // this.$store.commit('updateInfo'); //直接操作mutations
            this.$store.dispatch('setUpdateInfo', '传递参数').then((res)=>{
                console.log(res);
            });
        },
        async requestData() {
            let data = await getLogin().catch(err=>console.log(err));
            console.log(data);
        }
    }
}
</script>

<style scoped>
    .num {
        display: flex;
    }
</style>