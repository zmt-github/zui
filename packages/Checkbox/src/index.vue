<template>
  <label class="z-checkbox">
    <span class="z-checkbox__input">
      <span
        class="z-checkbox__inner"
      ></span>
      <input
        class="z-checkbox__original"
        type="checkbox"
        :disabled='disabled'
        :checked='checked'
      >
    </span>
    <span class="z-checkbox__label"><slot>{{label}}</slot></span>
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'z-checkbox',

  props: {
    modelValue: {

    },

    label: {
      type: String,
      default: ''
    },
    trueLabel: {

    },

    falseLabel: {

    },
    disabled: {
      type: Boolean,
      default: false
    },

    border: {
      type: Boolean,
      default: false
    },

    size: {
      type: String,
      default: '',
      validator: (value: string) => {
        return ['medium', 'small', 'mini'].indexOf(value) > -1
      }
    },

    name: {

    },

    checked: {
      type: Boolean,
      default: false
    }
  }
})
</script>
<style lang="scss" scoped>
.z-checkbox{

}
</style>
