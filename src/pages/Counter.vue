<template>
    <div class="counter">
        <input type="text" v-model="$store.state.mod.counter" @change="changeNum" />
    </div>
</template>


<script>
export default {
    data() {
        return {
        }
    },
    methods: {
        changeNum() {
            this.$store.dispatch('setUpdateInfo', this.$store.state.mod.counter);
        }
    },
    mounted() {

    }
}
</script>

<style scoped>

</style>