<template>
  <div class="home">
    <x-button @click="onClick">你好</x-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    function onClick () {
      console.log(123)
    }

    return { onClick }
  }
})
</script>
