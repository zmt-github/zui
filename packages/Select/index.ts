import ZSelect from './src/index.vue'
import { App } from 'vue'

ZSelect.install = function (app: App) {
  app.component(ZSelect.name, ZSelect)
}

export default ZSelect
