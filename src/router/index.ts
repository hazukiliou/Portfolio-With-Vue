import { createRouter, createWebHistory } from 'vue-router/auto'

// const routes = [
//   {
//     path: '/',
//     name: 'login',
//   },
//   {
//     path: '/user',
//     name: 'user',
//     component: () => import('@/views/Layout.vue'),
//     components: {
//       default: () => import('@/views/index.vue'),
//       Navbar: () => import('@/components/TheNavbar.vue'),
//       Sidebar: () => import('@/components/TheSidebar.vue'),
//     },
//     children: [
//       {
//         path: '/TodoList',
//         name: 'TodoList',
//         component: () => import('@/views/TodoList.vue'),
//       }
//     ]
//   }
// ]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL)
  // routes
})

console.log(router)

export default router
