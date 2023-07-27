<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
</script>

<template>
  <div>
    Index Page
    <n-button type="primary">
      Merhaba
    </n-button>
    <div>
      {{ runtimeConfig.public }}
    </div>
  </div>
</template>

<style scoped>

</style>
