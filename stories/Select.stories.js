import Select from '../packages/Select/src'

export default {
  title: 'Form/Select',
  component: Select,
  argTypes: {
    borderType: { control: { type: 'select', options: ['primary', 'success', 'info', 'warning', 'danger'] } },
    size: { control: { type: 'select', options: ['mini', 'small', 'medium'] } }
  }
}

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Select },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup () {
    return { args }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<z-select v-bind="args"></z-select>'
})

export const Input = Template.bind({})
Input.args = {
}
