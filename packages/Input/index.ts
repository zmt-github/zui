import ZInput from './src/index.vue'
import { App } from 'vue'

ZInput.install = function (app: App) {
  app.component(ZInput.name, ZInput)
}

export default ZInput
