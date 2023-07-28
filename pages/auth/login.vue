<script setup>
const { $jwtAuth } = useNuxtApp()

const loginForm = reactive({
  email: 'hasan.erken@gmail.com',
  password: 'Sirena79*',
})
async function login() {
  try {
    await $jwtAuth.login(loginForm, (data) => {
      console.log(data)
      router.push('/home')
    })
  }
  catch (error) {
    console.warn(error)
  }
}
</script>

<template>
  <n-space justify="center" class="mt-24">
    <n-input v-model:value="loginForm.email" type="text" placeholder="Basic Input" />
    <n-input v-model:value="loginForm.password" type="text" placeholder="Basic Input" />
    <n-button @click="login">
      Sign In
    </n-button>
  </n-space>
</template>

<style lang="scss" scoped>

</style>
