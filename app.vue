<script lang="ts" setup>
import type { ThemeConfig } from '@bg-dev/nuxt-naiveui'
import { theme } from '#tailwind-config'

const themeConfig: ThemeConfig = {
  shared: {
    common: {
      fontFamily: theme.fontFamily.sans.join(', '),
      lineHeight: theme.lineHeight.normal,
    },
  },
  light: {
    common: {
      primaryColor: theme.colors.blue[600],
      primaryColorHover: theme.colors.blue[500],
      primaryColorPressed: theme.colors.blue[700],
    },
  },
  dark: {
    common: {
      primaryColor: theme.colors.blue[500],
      primaryColorHover: theme.colors.blue[400],
      primaryColorPressed: theme.colors.blue[600],
    },
  },
}
</script>

<template>
  <div>
    <NaiveConfig :theme-config="themeConfig">
      <NuxtPage />
    </NaiveConfig>
  </div>
</template>
