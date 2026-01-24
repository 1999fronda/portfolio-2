<script setup lang="ts">
import { useUserStore } from '../stores/user';

const userStore = useUserStore()
</script>

<template>
    <UPageHero :title="`Hi, I am ${userStore.user.firstName}`" :ui="{ container: 'max-w-4xl' }">
        <template #description>
            {{ userStore.user.bio }}
        </template>

        <template #links>
            <div class="flex gap-2">
                <UButton :to="'/resume.pdf'" download target="_blank" label="Resume" icon="i-lucide-arrow-down"
                    size="xl" color="neutral" variant="subtle" class="cursor-pointer" />
                <UButton label="Let's connect" size="xl" color="primary" variant="solid" class="cursor-pointer" />
            </div>
        </template>
    </UPageHero>
</template>