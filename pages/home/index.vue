<script setup>
definePageMeta({
  layout: 'home',
})
</script>

<template>
  <n-space justify="center">
    <n-space justify="center" align="center" class="mt-16" style="max-width: 1600px;">
      <n-card :bordered="false" class="m-0">
        <div class="grid grid-cols-1 lg:grid-cols-2">
          <div class="p-3 sm:p-6 md:p-12">
            <n-image class="hidden sm:inline-flex lg:hidden" src="/3pl.png" />
            <h1 class="mb-6 text-3xl font-bold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
              Discover First-Class 3PL Solutions with <span class=" text-red-600">PrepShipHub</span>
            </h1>
            <p class="font-light text-lg text-gray-700 lg:text-2xl dark:text-gray-400">
              Seamlessly optimize your operations with our top-notch e-commerce services.
              Collaborate with e-commerce sellers and merchants to create an unbeatable customer experience that sets your business apart.
            </p>
            <n-space class="mt-8">
              <n-button color="#EE2B3A" class="h-10 w-40 p-6">
                <span class="text-white">
                  More Information
                </span>
              </n-button>
              <n-button color="#89C225" class="h-10 w-40 p-6">
                Get Started
              </n-button>
            </n-space>
          </div>
          <div class="text-center grid place-self-center">
            <n-image class="hidden lg:inline " src="/3pl.png" preview-disabled />
          </div>
        </div>
      </n-card>
    </n-space>

    <n-space justify="center" align="center" style="max-width: 1600px;" class="">
      <n-card :bordered="true" class="p-1 sm:p-4 md:p-6">
        <n-image src="/inventory.png" width="64" preview-disabled class="" />
        <p class="text-lime-600 text-2xl font-light">
          Trace each item precisely!
        </p>
        <h2 class="mb-6 text-2xl font-bold text-gray-900 dark:text-white md:text-3xl lg:text-4xl">
          Streamlined Inventory Management
        </h2>
        <p class="text-lg">
          PrepShipHub's cutting-edge Centralized Inventory Management offers effortless control and efficiency.
          Track inventory in real-time, optimize processes, and synchronize stock levels across sales channels.
          Elevate your operations and thrive with PrepShipHub's centralized solution!
        </p>
        <n-button class="mt-5 h-12" color="#89C225" focusable ghost>
          More Information
        </n-button>
        <nuxt-link class="m-5" :to="{ name: 'auth-login' }">
          Login
        </nuxt-link>
      </n-card>
    </n-space>
  </n-space>
</template>

<style scoped>

</style>
