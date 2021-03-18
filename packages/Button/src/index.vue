<template>
  <button @click="onClick">
    <slot></slot>
  </button>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import VueTypes from 'vue-types'
export default defineComponent({
  name: 'z-button',

  props: {
    type: VueTypes.string.def('primary')
  },

  setup (props, { emit }) {
    function onClick () {
      emit('click')
    }

    return { onClick }
  }
})
</script>
<style lang="scss" scoped>

</style>
