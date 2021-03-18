import XLink from './src/index.vue'
import { App } from 'vue'

XLink.install = function (app: App) {
  app.component(XLink.name, XLink)
}

export default XLink
