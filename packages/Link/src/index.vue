<template>
  <a href=""
    :class="[
      'z-lin--'+ type
    ]"
  >
    <slot></slot>
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'z-link',

  porps: {
    type: {
      type: String,
      default: 'default',
      validator: (value: string) => {
        return ['success', 'danger', 'info', 'primary', 'warning', 'default'].indexOf(value) > -1
      }
    }
  },

  setup () {
    return {}
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
    background-color: getColor($type);
  }
}
</style>
