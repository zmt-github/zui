import ZInput from '../packages/Input/src'

export default {
  title: 'Form/Input',
  component: ZInput,
  argTypes: {
    borderType: { control: { type: 'select', options: ['primary', 'success', 'info', 'warning', 'danger'] } },
    size: { control: { type: 'select', options: ['mini', 'small', 'medium'] } }
  }
}

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { ZInput },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup () {
    return { args }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<z-input v-bind="args"></z-input>'
})

export const Input = Template.bind({})
Input.args = {
}
