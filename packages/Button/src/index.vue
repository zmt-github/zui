<template>
  <button class="z-button" :class="['z-button--'+ type, 'z-button--'+ size]">
    <slot></slot>
  </button>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'z-button',

  props: {
    type: {
      type: String,
      default: 'default',
      validator: (value: string) => {
        return ['success', 'danger', 'info', 'primary', 'warning', 'default'].indexOf(value) > -1
      }
    },

    size: {
      type: String,
      default: 'normal',
      validator: (value: string) => {
        return ['mini', 'small', 'large', 'normal'].indexOf(value) > -1
      }
    }
  },

  setup () {
    return {}
  }
})
</script>
<style lang="scss" scoped>
@import '../../styles/handler';
.z-button{
  border: 0;
  outline: 0;
  text-align: center;
  color: getColor('default');
  &--primary{
    background-color: getColor('primary');
  }
  &--success{
    background-color: getColor('success');
  }
  &--info{
    background-color: getColor('info');
  }
  &--warning{
    background-color: getColor('warning');
  }
  &--default{
    background-color: getColor('default');
    color: #000
  }
}
</style>
