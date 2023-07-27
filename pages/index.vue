<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
const result = await $fetch('https//fiber.railway.internal/tenants')
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
