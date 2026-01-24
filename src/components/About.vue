<script setup lang="ts">
import { useUserStore } from '../stores/user';

const userStore = useUserStore()
</script>

<template>
    <UPageSection id="about" :ui="{ container: 'max-w-4xl' }">
        <template #title>
            About Me
        </template>
        <template #description>
            <p class="mb-5">
                I’m {{ userStore.fullName }}, a {{ userStore.user.title }} with a strong focus on Laravel. I’ve built
                multiple university-wide
                web
                applications and currently use with Vue.js to create modern, dynamic frontends. I’m passionate about
                learning new technologies and continuously improving my craft.
            </p>
            <p>
                Lately, I’ve been exploring Android development with Kotlin to broaden my expertise. Outside
                programming, I
                enjoy watching anime and playing online games, which help me unwind and stay creative.
            </p>
        </template>
    </UPageSection>
</template>