<template>
  <button
    class="z-button"
    :disabled='disabled'
    :class="[
      'z-button--'+ type,
      'z-button--'+ size,
      round ? 'is-round' : '',
      circle ? 'is-circle' : '',
      plain ? 'is-plain' : ''
    ]"
  >
    <span><slot></slot></span>
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
    },

    round: {
      type: Boolean,
      default: false
    },

    circle: {
      type: Boolean,
      default: false
    },

    disabled: {
      type: Boolean,
      default: false
    },

    plain: {
      type: Boolean,
      default: false
    }
  },

  setup () {
    return {}
  }
})
</script>
<style lang="scss" scoped>
@import '../../styles/handler';
$types: 'primary', 'success', 'info', 'warning', 'danger', 'default';
$sizes: 'mini', 'small', 'normal', 'large';
.z-button{
  border: 0;
  outline: 0;
  text-align: center;
  color: getColor('default');
  border-radius: 3px;
  border: 1px solid getColor('default');
  margin: 0 3px;
  transition: all .3s;
  cursor: pointer;
}
@each $type in $types {
  .z-button--#{$type} {
    background-color: getColor($type);
    &.is-plain {
      background-color: getColor("#{$type}-plain");
      color: getColor($type);
      border-color: getColor($type);
      &:hover{
        background-color: getColor($type);
        color: getColor('default')
      }
      &:hover[disabled] {
        background-color: getColor("#{$type}-plain");
        color: getColor($type);
        border-color: getColor($type);
        cursor: no-drop;
      }
    }
    .is-round {
      border-radius: 5px;
    }
  }
}

@each $size in $sizes {
  .z-button--#{$size} {
    @if($size == 'mini') {
      padding: 2px 5px;
      &.is-round{ border-radius: 11px;}
    } @else if($size == 'small') {
      padding: 3px 10px;
      &.is-round{ border-radius: 12px;}
    } @else if($size == 'normal') {
      padding: 5px 15px;
      &.is-round{ border-radius: 14px;}
    } @else if($size == 'large') {
      padding: 7px 20px;
      &.is-round{ border-radius: 16px;}
    }
  }
}

.z-button:hover{
  opacity: .7;
}

.z-button[disabled] {
  opacity: .7;
  cursor: no-drop;
}

.is-circle{
  border-radius: 50%;
  padding: 12px;
}
</style>
