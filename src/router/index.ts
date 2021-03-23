import { App } from 'vue'
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Home
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export function setupRouter (app: App): void {
  app.use(router)
  router.isReady().then(() => { app.mount('#app') })
}

export default router
