<script setup lang="ts">
// const tenants = ref<any>([])
// async function getTenants() {
//   const { data: count } = await useApi('/tenants')
//   tenants.value = count
// }
definePageMeta({
  redirect: '/home',
})
</script>

<template>
  <div>
    <!-- <n-space class="p-3">
    <naive-color-mode-switch />
    <n-button type="primary" class="h-10" @click="getTenants">
      <naive-icon name="ion:md-clipboard" class="mr-2" />
      Get Tenants
    </n-button>
    <div>
      {{ tenants }}
    </div>
  </n-space> -->
  </div>
</template>

<style scoped>

</style>
