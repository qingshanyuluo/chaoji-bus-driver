import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        isloginStatus: uni.getStorageSync('user')?true:false,
		userId: uni.getStorageSync('user')?uni.getStorageSync('user').user.id:false,
		token: uni.getStorageSync('user')?uni.getStorageSync('user').token:""
    },
    mutations: {
        login(state, data) {
			uni.setStorageSync('user', data);
            state.isloginStatus = true;
            state.userId = data.user.id;
            state.token = data.token;
        },
		clear(state) {
			state.isloginStatus = false
		}
    },
})

export default store