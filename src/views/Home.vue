<template>
  <div class="home">
    <z-radio v-model="value" size='mini' border  label='1' name='sex' type='success'>男</z-radio>
    <z-radio v-model="value" border label='2' name='sex' type='success'>女</z-radio>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'home',

  setup () {
    const value = ref('1')

    function change () {
      console.log(value.value)
    }

    return { value, change }
  }
})
</script>
<style lang="scss" scoped>
.home{
  width: 100%;
  height: 100%;
}
</style>
