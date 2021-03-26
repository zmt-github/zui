<template>
  <div class="z-input-number">
    <span class="z-input-number__label"><slot>{{label}}</slot></span>
    <span ref="container"  class="z-input-number__inner" :class="'z-input-number__' + size">
      <span
        class="z-input-number__decrease z-input-number__button no-select"
        :class="[
          decrease ? 'is_disabled' : null,
          disabled ? 'is_disabled' : null
        ]"
        @click="changeNum(false)"
        @mouseenter="active(decrease)"
        @mouseout="inactive"
      >-</span>
      <input class="z-input-number__original" type="number"
        v-model="selfValue"
        :disabled='disabled'
        :placeholder="placeholder"
      >
      <span
        class="z-input-number__increase z-input-number__button no-select"
        :class="[
          increase ? 'is_disabled' : null,
          disabled ? 'is_disabled' : null
        ]"
        @click="changeNum(true)"
        @mouseenter="active(increase)"
        @mouseout="inactive"
      >+</span>
      </span>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'z-input-number',
  props: {
    modelVaue: {
      type: Number,
      default: 0
    },

    borderType: {
      type: String,
      default: 'primary',
      validator: (value: string) => {
        return ['primary', 'success', 'info', 'warning', 'danger'].indexOf(value) > -1
      }
    },

    max: {
      type: Number,
      default: Infinity
    },

    min: {
      type: Number,
      default: -Infinity
    },

    step: {
      type: Number,
      default: 1
    },

    precision: {
      type: Number,
      default: 0
    },

    disabled: {
      type: Boolean,
      default: false
    },

    placeholder: {
      type: String,
      default: null
    },
    name: {},
    label: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: 'medium',
      validator: (value: string) => {
        if (['medium', 'small', 'mini'].indexOf(value) === -1) {
          throw new Error('invalid value')
        }
        return true
      }
    }
  },

  setup (props, ctx) {
    const selfValue = ref(props.modelVaue)
    // eslint-disable-next-line
    const container = ref<any>(null)

    const decrease = computed(() => selfValue.value <= props.min)
    const increase = computed(() => selfValue.value >= props.max)

    function change () {
      ctx.emit('updata.modelValue', selfValue.value.toFixed(props.precision))
    }

    function active (value: boolean) {
      if (!value) {
        container.value.classList.add(`z-input-number__${props.borderType}`)
      }
    }

    function inactive () {
      container.value.classList.remove(`z-input-number__${props.borderType}`)
    }

    function changeNum (type: boolean) {
      if (props.disabled) return
      if (type && !increase.value) {
        selfValue.value = parseFloat((selfValue.value + props.step).toFixed(props.precision))
      } else if (!type && !decrease.value) {
        selfValue.value = parseFloat((selfValue.value - props.step).toFixed(props.precision))
      }
    }

    return { change, active, inactive, changeNum, selfValue, container, decrease, increase }
  }
})
</script>

<style lang="scss" scoped>
@import '../../styles/types';
@import '../../styles/handler';
/* 谷歌 */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  appearance: none;
  margin: 0;
}
/* 火狐 */
input{
  -moz-appearance:textfield;
}
.z-input-number{
  display: flex;
  align-items: center;
}
.z-input-number__inner{
  height: 40px;
  line-height: 40px;
  width: 180px;
  display: flex;
  align-items: center;
  border: 1px solid getColor('info');
  border-radius: 4px;
  overflow: hidden;
  transition: border-color .25s;
}
.z-input-number__label{
  color: getColor('info');
  margin-right: 10px;
}

.z-input-number__button{
  width: 40px;
  line-height: 40px;
  text-align: center;
  cursor: pointer;
  background: #f5f7fa;

}

.z-input-number__decrease{
  border-right: 1px solid getColor('info');
}

.z-input-number__increase{
  border-left: 1px solid getColor('info');
}

.z-input-number__original{
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  flex: 1;
  line-height: 40px;
  padding: 0 15px;
  outline: none;
  border: 0;
  text-align: center;
}
.is_disabled{
  cursor: no-drop;
  opacity: .5;
}

@each $type in $types {
  .z-input-number__#{$type}{
    border-color: getColor($type);
  }
}
@each $size in $sizes {
  .z-input-number__#{$size} {
    @if($size == 'mini') {
      width: 140px;
      height: 28px;
      line-height: 28px;
      font-size: 12px;
      & .z-input-number__button{
        width: 30px;
      }
    } @else if ($size == 'small') {
      width: 160px;
      height: 32px;
      line-height: 32px;
      font-size: 14px;
      & .z-input-number__button{
        width: 35px;
      }
    } @else {
      height: 40px;
      line-height: 40px;
      font-size: 14px;
    }
  }
}
</style>
