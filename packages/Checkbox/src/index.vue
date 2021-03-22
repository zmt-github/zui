<template>
  <label>
    <input
      type="checkbox"
      class="z-checkbox"
      :disabled='disabled'
      :name='name'
      :class="[
        'z-checkbox--' + size,
        border? 'is-border' : ''
      ]"
    />
    <span>{{label}}</span>
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'z-checkbox',

  props: {
    disabled: {
      type: Boolean,
      default: false
    },

    label: {
      type: String,
      default: ''
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
      type: String,
      default: ''
    },

    checked: {
      type: Boolean,
      default: false
    }
  }
})
</script>
<style lang="scss" scoped>
$sizes: 'medium', 'small', 'mini';

@each $size in $sizes {
  .z-radio--#{$size} {
    font-size: 13px;
  }
}
</style>
