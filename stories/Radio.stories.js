import ZRadio from '../packages/Radio/src'

export default {
  title: 'Form/Radio',
  component: ZRadio,
  argTypes: {
    size: { control: { type: 'select', options: ['medium', 'small', 'mini'] } },
    type: { control: { type: 'select', options: ['primary', 'success', 'info', 'warning', 'danger'] } }
  }
}

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { ZRadio },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup () {
    return { args }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<z-radio v-bind="args"></z-radio>'
})

export const Radio = Template.bind({})
Radio.args = {
  label: '男'
}
