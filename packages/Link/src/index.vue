<template>
  <a
    :href="href"
    :class="[
      'z-link--' + type,
      disabled ? 'is-disabled' : '',
      underline ? 'is-underline' : ''
    ]"
    :disabled='disabled'
    @click="click($event)"
  >
    <span><slot></slot></span>
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'z-link',

  props: {
    type: {
      type: String,
      default: 'default',
      validator: (value: string) => {
        return ['success', 'danger', 'info', 'primary', 'warning'].indexOf(value) > -1
      }
    },

    href: {
      type: String,
      default: '/'
    },

    disabled: {
      type: Boolean,
      default: false
    },

    underline: {
      type: Boolean,
      default: false
    }
  },

  setup (props) {
    function click (event: Event) {
      if (props.disabled) {
        event.preventDefault()
      }
    }
    return { click }
  }
})
</script>

<style lang="scss" scoped>
a{
  text-decoration: none
}
@import '../../styles/handler';
$types: 'primary', 'success', 'info', 'warning', 'danger', 'default';
@each $type in $types {
  .z-link--#{$type} {
    color: getColor($type);
    &.is-underline:hover{
      text-decoration: underline;
    }
    &.is-disabled{
      opacity: .7;
      cursor: not-allowed;
      text-decoration: none;
    }
  }
}
</style>
