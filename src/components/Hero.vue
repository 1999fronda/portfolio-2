<script setup lang="ts">
import { useUserStore } from '../stores/user';
import socials from '../data/socials.json';
import { Motion } from 'motion-v';

const userStore = useUserStore()
</script>

<template>
    <UPageHero :ui="{ container: 'max-w-4xl', footer: 'text-center' }">
        <template #title>
            <Motion :initial="{
                opacity: 0,
                y: 20
            }" :animate="{
                opacity: 1,
                y: 0
            }" :transition="{
                duration: 0.4,
                delay: 0.1
            }">
                Hi, I am
                <GradientText :text="userStore.user.firstName"
                    :colors="['#40ffaa', '#4079ff', '#40ffaa', '#4079ff', '#40ffaa']" :animation-speed="8"
                    :show-border="false" class-name="inline" />
            </Motion>
        </template>
        <template #description>
            <Motion :initial="{
                opacity: 0,
                y: 20
            }" :animate="{
                opacity: 1,
                y: 0
            }" :transition="{
                duration: 0.4,
                delay: 0.2
            }">
                A
                <GradientText :text="userStore.user.title"
                    :colors="['#40ffaa', '#4079ff', '#40ffaa', '#4079ff', '#40ffaa']" :animation-speed="8"
                    :show-border="false" class-name="inline" /> with a strong focus on Laravel,
                building
                clean, scalable, and user-focused web
                applications.
            </Motion>
            <Motion :initial="{
                opacity: 0,
                y: 20
            }" :animate="{
                opacity: 1,
                y: 0
            }" :transition="{
                duration: 0.4,
                delay: 0.3
            }">
                <div class="flex gap-2 justify-center mt-10">
                    <UButton :to="'/resume.pdf'" download target="_blank" label="Resume" icon="i-lucide-arrow-down"
                        size="xl" color="neutral" variant="subtle" class="cursor-pointer" />
                    <UButton label="Let's connect" :to="'mailto:' + userStore.user.email" size="xl" color="primary"
                        variant="solid" class="cursor-pointer" />
                </div>
            </Motion>
        </template>

        <template #footer>
            <div class="gap-x-2 inline-flex">
                <Motion v-for="social, i in socials" :key="i" :initial="{
                    opacity: 0,
                    y: 20
                }" :animate="{
                    opacity: 1,
                    y: 0
                }" :transition="{
                    duration: 0.4,
                    delay: 0.4 + i * 0.08
                }">
                    <UButton :to="social.href" :target="social.target" :icon="`simple-icons:${social.icon}`"
                        :aria-label="social.name" color="neutral" variant="ghost" />
                </Motion>
            </div>
        </template>
    </UPageHero>
</template>