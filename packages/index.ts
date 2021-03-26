import { App, DefineComponent } from 'vue'
import ZButton from './Button'
import ZLink from './Link'
import ZRadio from './Radio'
import ZCheckbox from './Checkbox'
import ZInput from './Input'
import ZInputNumber from './InputNumber'

// eslint-disable-next-line
const components: Array<any> = [
  ZButton,
  ZLink,
  ZRadio,
  ZCheckbox,
  ZInput,
  ZInputNumber
]

function install (app: App): void {
  components.forEach((component: DefineComponent) => app.component(component.name, component))
}

export default {
  install,
  ...components
}
