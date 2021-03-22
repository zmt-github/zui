import ZButton from '../packages/Button/src'

export default {
  title: 'Basic/Button',
  component: ZButton,
  argTypes: {
    size: { control: { type: 'select', options: ['mini', 'small', 'large', 'normal'] } },
    type: { control: { type: 'select', options: ['success', 'danger', 'info', 'primary', 'warning'] } },
    onClick: {}
  }
}

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { ZButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup () {
    return { args }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<z-button v-bind="args">button</z-button>'
})

export const Button = Template.bind({})
Button.args = {
  size: 'normal',
  type: 'primary'
}
