import XRadio from './src/XRadio.vue'
import { App } from 'vue'

XRadio.install = function (app: App) {
  app.component(XRadio.name, XRadio)
}

export default XRadio
