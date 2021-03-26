<template>
  <div class="home">
    <!-- <z-radio v-model="value" size='mini' border  label='1' name='sex' type='success'>男</z-radio> -->
    <!-- <z-radio v-model="value" border label='2' name='sex' type='success'>女</z-radio> -->
    <!-- <z-checkbox v-model="checked" @change='changeCheck'>女</z-checkbox> -->
    <!-- <z-input v-model="valueInput" @input='change' ></z-input> -->
    <z-input-number v-model="valueInput" @input='change' :max='10' :min='0' :step='2'>你好</z-input-number>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'home',

  setup () {
    const valueInput = ref(0)

    function change () {
      console.log(valueInput.value)
    }
    return { change, valueInput }
  }
})
</script>
<style lang="scss" scoped>
.home{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

}
</style>
