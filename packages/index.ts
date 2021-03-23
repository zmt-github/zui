import { App, DefineComponent } from 'vue'
import ZButton from './Button'
import ZLink from './Link'
import ZRadio from './Radio'

// eslint-disable-next-line
const components: Array<any> = [
  ZButton,
  ZLink,
  ZRadio
]

function install (app: App): void {
  components.forEach((component: DefineComponent) => app.component(component.name, component))
}

export default {
  install,
  ZButton,
  ZLink,
  ZRadio
}
