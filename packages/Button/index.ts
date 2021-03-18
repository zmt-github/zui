import XButton from './src/index.vue'
import { App } from 'vue'

XButton.install = function (app: App) {
  app.component(XButton.name, XButton)
}

export default XButton
