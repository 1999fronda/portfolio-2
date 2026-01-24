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
                I’m <span class="font-medium">{{ userStore.fullName }}</span>, a <span class="font-medium">{{
                    userStore.user.title }}</span> with a
                strong focus on <span class="font-medium">Laravel</span>. I’ve built
                multiple university-wide
                web
                applications and currently use with <span class="font-medium">Vue.js</span> to create modern, dynamic
                frontends. I’m passionate about
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