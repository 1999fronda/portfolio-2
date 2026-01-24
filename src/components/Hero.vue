<script setup lang="ts">
import { useUserStore } from '../stores/user';
import socials from '../data/socials.json';

const userStore = useUserStore()
</script>

<template>
    <UPageHero :title="`Hi, I am ${userStore.user.firstName}`" :ui="{ container: 'max-w-4xl', footer: 'text-center' }">
        <template #description>
            A <span class="text-primary">{{ userStore.user.title }}</span> with a strong focus on Laravel, building
            clean,scalable, and user-focused web
            applications.

            <div class="flex gap-2 justify-center mt-10">
                <UButton :to="'/resume.pdf'" download target="_blank" label="Resume" icon="i-lucide-arrow-down"
                    size="xl" color="neutral" variant="subtle" class="cursor-pointer" />
                <UButton label="Let's connect" size="xl" color="primary" variant="solid" class="cursor-pointer" />
            </div>
        </template>

        <template #footer>
            <UButton v-for="social, i in socials" :key="i" :to="social.href" :target="social.target"
                :icon="`simple-icons:${social.icon}`" :aria-label="social.name" color="neutral" variant="ghost" />
        </template>
    </UPageHero>
</template>