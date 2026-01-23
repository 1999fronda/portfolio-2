<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import { computed } from 'vue';
import navigationsData from '../data/navigations.json'
import { useRoute } from 'vue-router';

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() =>
  navigationsData.map(item => ({
    label: item.name.toLocaleUpperCase(),
    to: item.href,
    active: route.hash === item.href.replace('/', ''), // remove the "/" from "/#about"
  }))
)

</script>

<template>
  <UHeader>
    <template #left>
      <RouterLink to="/">
        <AppLogo class="w-auto h-6 shrink-0" />
      </RouterLink>
    </template>

    <template #right>
      <UNavigationMenu :items="items" variant="link" class="hidden lg:block" />

      <UColorModeButton class="cursor-pointer" />
    </template>

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" variant="link" class="-mx-2.5" />
    </template>

  </UHeader>
</template>