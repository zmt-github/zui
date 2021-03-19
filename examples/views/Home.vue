<template>
  <div class="home">
    <z-button @click="onClick">你好</z-button>
    <!-- <z-link @click="onClick">你好</z-link> -->
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
