import ZInputNumber from '../packages/InputNumber/src'

export default {
  title: 'Form/InputNumber',
  component: ZInputNumber,
  argTypes: {
    borderType: { control: { type: 'select', options: ['primary', 'success', 'info', 'warning', 'danger'] } },
    size: { control: { type: 'select', options: ['mini', 'small', 'medium'] } }
  }
}

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { ZInputNumber },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup () {
    return { args }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<z-input-number v-bind="args"></z-input-number>'
})

export const InputNumber = Template.bind({})
InputNumber.args = {
}
