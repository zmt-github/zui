import ZLink from '../packages/Link/src'

export default {
  title: 'Basic/Link',
  component: ZLink,
  argTypes: {
    type: { control: { type: 'select', options: ['success', 'danger', 'info', 'primary', 'warning'] } },
    onClick: {}
  }
}

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { ZLink },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup () {
    return { args }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<z-link v-bind="args">link</z-link>'
})

export const Link = Template.bind({})
Link.args = {
  type: 'success',
  href: '/'
}
