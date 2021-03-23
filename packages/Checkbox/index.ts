import ZCheckbox from './src/index.vue'
import { App } from 'vue'

ZCheckbox.install = function (app: App) {
  app.component(ZCheckbox.name, ZCheckbox)
}

export default ZCheckbox
