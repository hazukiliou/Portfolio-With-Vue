import Vue from 'vue'
import router from '@/router'
import VueAnalytics from 'vue-analytics'

Vue.use(VueAnalytics, {
	id: 'UA-117337614-2',
	router,
	debug: {
		sendHitTask: process.env.NODE_ENV === 'production',
	},
	autoTracking: {
		pageviewOnLoad: false,
	},
})
