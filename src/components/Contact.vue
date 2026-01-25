<script setup lang="ts">
import { useUserStore } from '../stores/user';

const userStore = useUserStore()
</script>

<template>
    <UPageSection id="contact" :ui="{ container: 'max-w-5xl' }">
        <UPageCTA title="Let's connect"
            description="I’m always open to chat about web development, design ideas, or new opportunities. Let’s make something awesome together."
            variant="subtle">
            <template #links>
                <UButton label="Email me" :to="'mailto:' + userStore.user.email" size="xl" color="primary"
                    variant="solid" class="cursor-pointer" />
            </template>
        </UPageCTA>
    </UPageSection>
</template>