<script setup lang="ts">
import projects from '../data/projects.json';
import { Motion } from 'motion-v';
import { getDelayedMotion } from '../utils/motionConfig';
import { useScreen } from '../composables/useScreen';

const { isMedium } = useScreen()
</script>

<template>
    <UPageSection id="projects" title="Projects" :ui="{ container: 'max-w-5xl' }">
        <template #description>
            Real-world projects I built from the ground up, handling both backend and frontend development.
        </template>
        <Motion v-for="project, i in projects" :key="i" v-bind="getDelayedMotion(0.1 + i * 0.1)">
            <UPageCard variant="outline" orientation="horizontal" spotlight :reverse="!isMedium && i % 2 === 0"
                :ui="{ title: 'font-medium text-xl' }">
                <template #title>
                    {{ project.title }}
                </template>
                <template #description>
                    <div class="overflow-hidden">
                        {{ project.summary }}
                    </div>
                    <div class="mt-3">
                        <UButton :to="`/projects/${project.id}`" trailing-icon="i-lucide-arrow-right" variant="link">
                            View
                            project</UButton>
                    </div>
                    <div class="flex gap-1 mt-3 flex-wrap">
                        <UButton v-for="skill, i in project.tech" :key="i" :label="skill.name" variant="soft"
                            color="neutral" size="sm" />
                    </div>
                </template>
                <ULink :to="`/projects/${project.id}`" class="block min-w-0">
                    <img :src="'/images/' + project.image" alt="Tailwind CSS" class="w-full h-auto" />
                </ULink>
            </UPageCard>
        </Motion>
    </UPageSection>
</template>