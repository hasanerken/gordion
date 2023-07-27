<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
const result = await $fetch('/tenants')
</script>

<template>
  <div>
    Index Page
    <n-button type="primary">
      Merhaba
    </n-button>
    <div>
      {{ result }}
    </div>
  </div>
</template>

<style scoped>

</style>
