import ZRadio from './src/index.vue'
import { App } from 'vue'

ZRadio.install = function (app: App) {
  app.component(ZRadio.name, ZRadio)
}

export default ZRadio
