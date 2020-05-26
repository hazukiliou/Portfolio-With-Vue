import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')

// router.beforeEach((to, from, next) => {
// 	console.log(to.name)
// 	console.log(from.name)
// 	if (to.name == from.name) {
// 		console.log(0)
// 		next(false)
// 	}
// })
