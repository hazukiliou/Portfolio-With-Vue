import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		sidebar: false,
	},
	mutations: {
		SET_SIDEBAR(state, payload) {
			state.sidebar = payload
		},
	},
	actions: {},
	modules: {},
})
