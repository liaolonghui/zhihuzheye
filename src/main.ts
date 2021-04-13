import { createApp } from 'vue'
import store from './store'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Column from './views/ColumnDetail.vue'
import CreatePost from './views/CreatePost.vue'
import App from './App.vue'

const routerHistory = createWebHistory()
const router = createRouter({
  history: routerHistory,
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/login', name: 'Login', component: Login, meta: { redirectAlreadyLogin: true } },
    { path: '/column/:id', name: 'Column', component: Column },
    { path: '/create', name: 'CreatePost', component: CreatePost, meta: { requireLogin: true } }
  ]
})
router.beforeEach((to, from, next) => {
  // 需要登陆的页面就不让未登录用户访问
  if (to.meta.requireLogin && !store.state.User.isLogin) {
    next('/login')
  } else if (to.meta.redirectAlreadyLogin && store.state.User.isLogin) {
    next('/')
  } else {
    next()
  }
})

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
