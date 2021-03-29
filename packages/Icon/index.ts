import ZIcon from './src/index.vue'
import { App } from 'vue'

ZIcon.install = function (app: App) {
  app.component(ZIcon.name, ZIcon)
}

export default ZIcon
