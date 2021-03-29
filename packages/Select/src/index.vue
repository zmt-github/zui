<template>
  <div class="z-select">
    <div class="z-select__inner">
      <span class="z-select__label"><slot>{{label}}</slot></span>
      <input class="z-select__original"
        v-model="selfValue"
        :autofocus='autofocus'
        :disabled='disabled'
        :name='name'
        :required='required'
        @change="change"
      />
    </div>
    <ul class="z-select__">
      <li v-for="(item, index) in options" :key='index'>{{item[optionLabelKey]}}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'z-select',

  props: {
    modelValue: {
      default: null
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
    },
    multiple: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
    size: {
      type: Number,
      default: 1
    }
  },

  setup (props, ctx) {
    const selfValue = ref(props.modelValue)

    function change () {
      ctx.emit('update:modelValue', selfValue.value)
    }

    return { change, selfValue }
  }
})
</script>

<style lang="scss" scoped>

</style>
