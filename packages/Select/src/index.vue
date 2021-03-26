<template>
  <div class="z-select">
    <span>
      <select v-model="selfVaue">
        <option v-for="item in options" :value='item[optionValueKey]' :key="item[optionValueKey]">{{options[optionLabelKey]}}</option>
      </select>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'z-select',

  props: {
    modelValue: {
      type: String,
      default: ''
    },
    options: {
      type: Array,
      default: () => []
    },
    optionValueKey: {
      type: String,
      default: 'value'
    },
    optionLabelKey: {
      type: String,
      default: 'label'
    }
  },

  setup (props, ctx) {
    const selfValue = ref(props.modelValue)

    function change () {
      ctx.emit('updata.modelValue', selfValue.value)
    }

    return { change, selfValue }
  }
})
</script>

<style lang="scss" scoped>

</style>
