import ZCheckbox from '../packages/Checkbox/src'

export default {
  title: 'Form/Checkbox',
  component: ZCheckbox,
  argTypes: {
    size: { control: { type: 'select', options: ['medium', 'small', 'mini'] } },
    type: { control: { type: 'select', options: ['primary', 'success', 'info', 'warning', 'danger'] } },
    onClick: {}
  }
}

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { ZCheckbox },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup () {
    return { args }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<z-checkbox v-bind="args"></z-checkbox>'
})

export const Checkbox = Template.bind({})
Checkbox.args = {
}
