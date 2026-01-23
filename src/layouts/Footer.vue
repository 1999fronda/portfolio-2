<script setup lang="ts">
import { ref } from 'vue';
import socials from '../data/socials.json'

const name = ref('Emmanuel Episcope')
</script>

<template>
    <UFooter>
        <template #left>
          <p class="text-sm text-muted">
            © {{ new Date().getFullYear() }} {{ name }}. All rights reserved.
          </p>
        </template>

        <template #right>
            <UButton v-for="social, i in socials" 
            :key="i"
            :to="social.href"
            :target="social.target"
            :icon="`simple-icons:${social.icon}`"
            :aria-label="social.name"
            color="neutral"
            variant="ghost"
            />
        </template>
      </UFooter>
</template>