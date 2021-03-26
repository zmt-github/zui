import ZInputNumber from './src/index.vue'
import { App } from 'vue'

ZInputNumber.install = function (app: App) {
  app.component(ZInputNumber.name, ZInputNumber)
}

export default ZInputNumber
