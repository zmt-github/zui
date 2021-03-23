import { createApp } from 'vue'
import App from './app.vue'
import zui from '../packages'
import { setupRouter } from './router'
const app = createApp(App)

setupRouter(app)

app.use(zui)
