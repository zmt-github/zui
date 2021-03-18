import { App, DefineComponent } from 'vue'
import XButton from './Button'
import XLink from './Link'

const components: any[] = [
  XButton,
  XLink
]

function install (app: App): void {
  components.forEach((component: DefineComponent) => app.component(component.name, component))
}

export default {
  install,
  XButton,
  XLink
}
