<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
const tenants = ref<any>([])
async function getTenants() {
  const { data: count } = await useApi('/tenants')
  tenants.value = count
}
</script>

<template>
  <div>
    Index Page
    <n-button type="primary" @click="getTenants">
      Get Tenants
    </n-button>
    <div>
      {{ tenants }}
    </div>
  </div>
</template>

<style scoped>

</style>
