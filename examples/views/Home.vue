<template>
  <div class="home">
    <z-button type='primary' size='mini'>你好</z-button>
    <z-button type='success' size='small'>你好</z-button>
    <z-button type='warning' size='normal'>你好</z-button>
    <z-button type='danger' size='large' >你好</z-button>
    <z-button type='info' size='large' >你好</z-button>

    <hr/>
    <z-button type='primary' plain>你好</z-button>
    <z-button type='success' plain>你好</z-button>
    <z-button type='warning' plain>你好</z-button>
    <z-button type='danger' plain>你好</z-button>
    <z-button type='info' plain>你好</z-button>

    <hr/>
    <z-button type='primary' disabled>你好</z-button>
    <z-button type='success' disabled>你好</z-button>
    <z-button type='warning' disabled>你好</z-button>
    <z-button type='danger' disabled>你好</z-button>
    <z-button type='info' disabled>你好</z-button>
    <br/>
    <z-button type='primary' plain disabled>你好</z-button>
    <z-button type='success' plain disabled>你好</z-button>
    <z-button type='warning' plain disabled>你好</z-button>
    <z-button type='danger' plain disabled>你好</z-button>
    <z-button type='info' plain disabled>你好</z-button>

    <hr/>
    <z-button type='warning' round>你好</z-button>
    <z-button type='success' round>你好</z-button>
    <z-button type='danger' round>你好</z-button>
    <z-button type='primary' round>你好</z-button>
    <z-button type='info' round >你好</z-button>
    <br/>
    <z-button type='primary' plain round>你好</z-button>
    <z-button type='success' plain round>你好</z-button>
    <z-button type='warning' plain round>你好</z-button>
    <z-button type='danger' plain round>你好</z-button>
    <z-button type='info' plain round>你好</z-button>

    <hr/>
    <z-button type='warning' circle>你好</z-button>
    <z-button type='success' circle>你好</z-button>
    <z-button type='danger' circle>你好</z-button>
    <z-button type='primary' circle>你好</z-button>
    <z-button type='info' circle >你好</z-button>
    <br/>
    <z-button type='primary' plain circle>你好</z-button>
    <z-button type='success' plain circle>你好</z-button>
    <z-button type='warning' plain circle>你好</z-button>
    <z-button type='danger' plain circle>你好</z-button>
    <z-button type='info' plain circle>你好</z-button>

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
