<template>
  <svg class="svg-class" aria-hidden="true">
    <use
      :xlink:href='iconName'
      :style='{ "color": color, "font-size": fontSize }'
    >
    </use>
  </svg>
</template>

<script lang="ts">
import './icon'
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'z-icon',

  props: {
    iconClass: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    fontSize: {
      type: String,
      default: ''
    }
  },

  setup (props) {
    const iconName = computed(() => `#icon-${props.iconClass}`)

    return { iconName }
  }
})
</script>

<style lang="scss" scoped>
.svg-class{
  width: 1em;
  height: 1em;
  font-size: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
