import { createApp } from 'vue'
import store from './store'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Column from './views/ColumnDetail.vue'
import App from './App.vue'

const routerHistory = createWebHistory()
const router = createRouter({
  history: routerHistory,
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/login', name: 'Login', component: Login },
    { path: '/column/:id', name: 'Column', component: Column }
  ]
})

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
