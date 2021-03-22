import ZButton from './src/index.vue'
import { App } from 'vue'

ZButton.install = function (app: App) {
  app.component(ZButton.name, ZButton)
}

export default ZButton
