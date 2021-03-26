<template>
  <label class="z-checkbox"
    :class="[
      selfChecked === trueLabel ? 'is-checked' : null,
      disabled ? 'is-disabled' : null,
      border ? 'is-border' : null,
      border ? 'z-checkbox__' + type : '',
      border ? 'z-checkbox__' + size : ''
    ]"
  >
    <span class="z-checkbox__input">
      <span
        class="z-checkbox__inner"
        :class="'z-checkbox__' + type"
      ></span>
      <input
        class="z-checkbox__original"
        type="checkbox"
        v-model='selfChecked'
        :disabled='disabled'
        @change="change"
      >
    </span>
    <span class="z-checkbox__label" :class="'z-checkbox-label__' + type"><slot>{{label}}</slot></span>
  </label>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'z-checkbox',

  props: {
    modelValue: {
      type: [String, Number, Boolean],
      default: false
    },

    label: {
      type: String,
      default: 'checkbox'
    },
    trueLabel: {
      type: [String, Number, Boolean],
      default: true
    },

    falseLabel: {
      type: [String, Number, Boolean],
      default: false
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
      default: 'medium',
      validator: (value: string) => {
        return ['medium', 'small', 'mini'].indexOf(value) > -1
      }
    },

    type: {
      type: String,
      default: 'primary',
      validator: (value: string) => {
        return ['primary', 'success', 'info', 'warning', 'danger'].indexOf(value) > -1
      }
    },

    name: {
      type: [String, Number],
      default: ''
    },

    checked: {
      type: Boolean,
      default: false
    }
  },

  setup (props, ctx) {
    const selfChecked = ref(props.checked)

    function change () {
      ctx.emit('update:modelValue', selfChecked.value)
    }
    return { change, selfChecked }
  }
})
</script>
<style lang="scss" scoped>
@import '../../styles/types';
@import '../../styles/handler';

.z-checkbox{
  font-size: 14px;
  user-select: none;
  position: relative;
  cursor: pointer;
  font-weight: 500;
  display: inline-block;
  white-space: nowrap;
  line-height: 1;
}
.z-checkbox__input{
  position: relative;
  vertical-align: middle;
  margin-right: 10px;
}
.z-checkbox__inner{
  width: 14px;
  height: 14px;
  border: 1px solid getColor('info');
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  transition: border-color .15s;
  border-radius: 2px;
}
.z-checkbox__inner::after{
  content: '';
  border: 1px solid getColor('primariy');
  display: none;
  height: 7px;
  width: 4px;
  position: absolute;
  top: 1px;
  left: 4px;
  transform: rotate(45deg) scale(1);
  transform-origin: center;
  border-left: 0;
  border-top: 0;
}
.z-checkbox__original{
  opacity: 0;
  outline: 0;
  margin: 0;
  z-index: -1;
  width: 0;
  height: 0;
  position: absolute;
}

.z-checkbox__label{
  color: getColor('info')
}

.is-checked {
  @each $type in $types{
    & .z-checkbox__#{$type}{
      background-color: getColor($type);
      border-color: getColor($type);
      transition: all .25s;
    }
    &.z-checkbox__#{$type}{
      border-color: getColor($type);
    }
    & .z-checkbox-label__#{$type}{
      color: getColor($type);
      transition: color .25s;
    }
  }
  & .z-checkbox__inner::after{
    display: block;
    border-color: getColor('default');
  }
}

.is-disabled{
  cursor: no-drop;
  opacity: .5;
}
.is-border{
  border: 1px solid getColor('info');
  border-radius: 5px;
  @each $size in $sizes {
    &.z-checkbox__#{$size}{
      @if ($size == "mini") {
        padding: 5px 10px;
        font-size: 12px;
      } @else if ($size == "small") {
        padding: 6px 12px;
        font-size: 14px;
      } @else if ($size == "medium") {
        padding: 7px 14px;
      }
    }
  }
}
</style>
