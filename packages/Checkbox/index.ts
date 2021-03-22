import XCheckbox from './src/XCheckbox.vue'
import { App } from 'vue'

XCheckbox.install = function (app: App) {
  app.component(XCheckbox.name, XCheckbox)
}

export default XCheckbox
