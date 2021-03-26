<template>
  <div class="z-input">
    <span class="z-input__inner"
      :class="[
        'z-input__' + borderType,
        'z-input__' + size,
        disabled ? 'is_disabled' : null
      ]"
    >
      <span class="z-input__label">{{label}}</span>
      <span class="z-input__prefix">

      </span>
      <input
        v-if="type !== 'textarea'"
        class="z-input__original"
        v-model="selfValue"
        :type="type"
        :maxlength='maxlength'
        :minlength='minlength'
        :placeholder='placeholder'
        :disabled='disabled'
        :rows='type === "textarea" ? rows : null'
        :autocomplete="autocomplete"
        :name="name"
        :max="max"
        :min="min"
        :step="step"
        :readonly="readonly"
        :autofocus="autofocus"
        :form="form"
        :tabindex="tabindex"
        @input="change"
      />
      <textarea
        v-else
        class="z-input__original"
        v-model="selfValue"
        :type="type"
        :maxlength='maxlength'
        :minlength='minlength'
        :placeholder='placeholder'
        :disabled='disabled'
        :rows='rows'
        :autocomplete="autocomplete"
        :name="name"
        :max="max"
        :min="min"
        :step="step"
        :autosize='autosize'
        :readonly="readonly"
        :autofocus="autofocus"
        :form="form"
        :tabindex="tabindex"
        @input="change"
      >
      </textarea>
      <span class="z-input__suffix"
        :class="[
        showWordLimit ? 'is-suffix' : null,
        clearable ? 'is-suffix' : null
        ]"
      >
        <span class="limit" :class="showWordLimit ? 'is-limit' : null">{{limit}}/{{maxlength}}</span>
        <span class="clearable" :class="clearable ? 'is-clearable' : null" @click="clear"></span>
      </span>
    </span>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
export default defineComponent({
  name: 'z-input',
  props: {
    modelValue: {
      type: [String, Number],
      default: null
    },
    type: {
      type: String,
      default: 'text'
    },
    borderType: {
      type: String,
      default: 'primary',
      validator: (value: string) => {
        return ['primary', 'success', 'info', 'warning', 'danger'].indexOf(value) > -1
      }
    },
    maxlength: {
      type: Number,
      default: null
    },
    minlength: {
      type: Number,
      default: null
    },
    showWordLimit: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: null
    },
    showPassword: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
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
    },
    rows: {
      type: Number,
      default: 2
    },
    autosize: {
      type: Boolean,
      default: false
    },
    autocomplete: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: null
    },
    readonly: {
      type: Boolean,
      default: false
    },
    max: {
      default: 150
    },
    min: {},
    step: {},
    autofocus: {
      type: Boolean,
      default: false
    },
    form: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: null
    },
    tabindex: {
      type: String,
      default: null
    },
    validateEvent: {
      type: Boolean,
      default: false
    }
  },

  setup (props, cxt) {
    const selfValue = ref('')

    const limit = computed(() => selfValue.value.length)

    function change () {
      cxt.emit('update:modelValue', selfValue.value)
    }

    function clear () {
      selfValue.value = ''
      cxt.emit('update:modelValue', selfValue.value)
    }

    return { selfValue, limit, change, clear }
  }
})
</script>
<style lang="scss" scoped>
@import '../../styles/types';
@import '../../styles/handler';

.z-input{
  position: relative;
  display: inline-block;
  line-height: 40px;
  box-sizing: border-box;
  font-size: 14px;
}
.z-input__inner{
  display: flex;
  align-items: center;
}
.z-input__original{
  box-sizing: border-box;
  height: 100%;
  flex: 1;
  line-height: 40px;
  padding: 0 15px;
  outline: none;
  border: 1px solid getColor('info');
  transition: border-color .25s;
  border-radius: 4px;
}
.z-input__label{
  color: getColor('info');
  margin-right: 10px;
}
.is_disabled .z-input__original{
  cursor: no-drop;
}
.z-input__suffix{
  position: absolute;
  top: 0;
  bottom: 0;
  right: 5px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  display: none;
}
.is-suffix{
  display: flex;
}
.limit{
  display: none;
  background: #fff;
  line-height: normal;
  display: inline-block;
  padding: 0 5px;
  font-size: 12px;
  color: getColor('info');
}

.is-limit{
  display: inline-block;
}

@each $type in $types {
  .z-input__#{$type}{
    display: inline-block;
    & .z-input__original:focus{
      border: 1px solid getColor($type)
    }
  }
}
@each $size in $sizes {
  .z-input__#{$size} {
    @if($size == 'mini') {
      height: 28px;
      line-height: 28px;
      font-size: 12px;
    } @else if ($size == 'small') {
      height: 32px;
      line-height: 32px;
      font-size: 14px;
    } @else {
      height: 40px;
      line-height: 40px;
      font-size: 14px;
    }
  }
}
</style>
