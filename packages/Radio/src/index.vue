<template>
  <label
    class="z-radio"
    :class="[
      disabled ? 'is-disabled': '',
      border ? 'is-border' : '',
      modelValue === label ? 'is-checked': '',
      border ? 'z-radio__' + type : '',
      border ? 'z-radio__' + size : ''
    ]"
  >
    <span class="z-radio__input">
      <span class="z-radio__inner" :class="['z-radio__' + type]"></span>
      <input
        type="radio"
        class="z-radio__original"
        :disabled='disabled'
        :name='name'
        :value='label'
        @change='change'
      />
    </span>
    <span class="z-radio__label" :class="[modelValue === label ? 'z-radio-label__' + type: '']"><slot>{{label}}</slot></span>
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'z-radio',

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
      default: 'medium',
      validator: (value: string) => {
        return ['medium', 'small', 'mini'].indexOf(value) > -1
      }
    },
    type: {
      type: String,
      default: 'primary',
      validator: (value: string) => {
        return ['primary', 'success', 'info', 'warning', 'danger', 'default'].indexOf(value) > -1
      }
    },

    name: {
      type: [String, Number],
      default: ''
    },

    modelValue: {
      type: [String, Number],
      default: ''
    }
  },

  setup (props, cxt) {
    function change () {
      cxt.emit('update:modelValue', props.label)
    }
    return { change }
  }
})
</script>
<style lang="scss" scoped>
@import '../../styles/types';
@import '../../styles/handler';

.z-radio{
  font-size: 16px;
  font-weight: 500;
  line-height: 1;
  margin-right: 30px;
  outline: 0;
  outline: none;
  cursor: pointer;
  white-space: nowrap;
  display: inline-block;
  vertical-align: middle;
}
.z-radio__input{
  position: relative;
  vertical-align: middle;
}

.z-radio__inner{
  width: 14px;
  height: 14px;
  border: 1px solid getColor('info');
  border-radius: 50%;
  background-color: getColor('default');
  position: relative;
  margin-right: 15px;
  display: inline-block;
}
.z-radio__inner::after{
  content: '';
  width: 4px;
  height: 4px;
  border-radius: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
}
.z-radio__original{
  opacity: 0;
  outline: none;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
}

@each $type in $types {
  .z-radio-label__#{$type}{
    color: getColor($type);
  }
}

.is-checked{
  @each $type in $types {
    .z-radio__#{$type}{
      background-color: getColor($type);
      border-color: getColor($type);
    }
  }
}

.is-disabled{
  cursor: no-drop;
  opacity: .5;
}

@each $size in $sizes {
  .z-radio__#{$size}{
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

.is-border{
  border: 1px solid getColor('info');
  border-radius: 5px;
  &.is-checked{
    @each $type in $types {
      &.z-radio__#{$type}{
        border-color: getColor($type);
      }
    }
  }

}
</style>
