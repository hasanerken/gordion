<script setup>

</script>

<template>
  <n-layout>
    <n-layout-header position="static" class="h-12 mb-4 flex align-items-center px-2 bg-gradient-to-r from-gray-900  to-red-600">
      <n-space align="center">
        <n-image src="psh-logo.png" class="h-8" />
        <p class="font-light text-white text-2xl">
          PrepShipHub
        </p>
      </n-space>
      <div class="flex-grow" />
      <naive-color-mode-switch class="mx-3" />
    </n-layout-header>
    <slot />
  </n-layout>
</template>

<style>

</style>
