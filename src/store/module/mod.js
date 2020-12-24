const mod = {
    state: {
        counter: 10,
        students: [
            {id: 10, name: 'Jack', age: 10},
            {id: 11, name: 'Lucy', age: 15},
            {id: 12, name: 'Mary', age: 20},
            {id: 13, name: 'James', age: 25}
        ]
    },
    mutations: {
        'SET_COUNTER': (state, counter) => {
            state.counter = counter;
        },
        updateInfo(state) {
            state.students[1].name='lai';
        }
    },
    actions: {
        // 当有异步操作一定是在actions里面处理, mutations可以处理同步操作,处理异步在devtools里面不更新
        'setCounter': ({ commit }, counter) => {
            return commit('SET_COUNTER', counter);
        },
        'setUpdateInfo': (context, payment) => {
            console.log(payment);
            return new Promise((resolve, reject) => {
                setTimeout(()=>{
                    //  这里不能直接操作state, 否则相当于跳过mutations操作属性了
                    context.commit('updateInfo');
                    resolve('执行完毕后响应');
                }, 1000);
            });
        }
    },
    getters: {
        //  方法不需要解构
        /* 类似于计算属性 */
        //  调用 $store.getters.filterStu()
        filterStu(state) {
            return state.students.filter(item=>item.age>8);
        },
        filterStuMore(state) {
            return function(age){
                return state.students.filter(item=>item.age<=age);
            }
        }
    }
}

export default mod;