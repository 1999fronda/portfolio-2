<script setup lang="ts">
import { Motion } from 'motion-v';
import { getDelayedMotion } from '../utils/motionConfig';

defineProps<{
    project: {
        id: string,
        title: string,
        link: string,
        date: string,
        role: string,
        image: string,
        summary: string,
        description: string[],
        contributions: string[],
        tech: Array<{ name: string }>,
        impact: string,
    }
}>()
</script>

<template>
    <UContainer class="max-w-3xl mx-auto">
        <UPage>
            <Motion v-bind="getDelayedMotion(0.1)">
                <UPageHeader :title="project.title" :ui="{ root: 'border-0 pb-0' }">
                    <template #description>
                        <div class="flex items-center gap-4">
                            <h6 class="text-sm mb-3 flex items-center">
                                <UIcon name="i-lucide:calendar" class="size-5 me-2" />
                                <span> {{ project.date }}</span>
                            </h6>
                            <h6 class="text-sm mb-3 flex items-center">
                                <UIcon name="i-lucide:user" class="size-5 me-2" />
                                <span> {{ project.role }}</span>
                            </h6>
                        </div>
                        <h6 class="text-sm mb-3 flex items-center">
                            <UIcon name="i-lucide:tool-case" class="size-5 me-2" />
                            <span>Technologies</span>
                        </h6>
                        <div class="flex flex-wrap gap-1">
                            <UButton v-for="tech in project.tech" :label="tech.name" color="primary" size="sm"
                                variant="soft" />
                        </div>
                        <div
                            class="relative bg-linear-to-b from-gray-100 to-gray-200 rounded transition-all duration-300 ease-in-out hover:cursor-pointer hover:rounded-xl my-5">
                            <UButton v-if="project.link" :to="project.link" target="_blank" color="secondary"
                                variant="soft" class="absolute top-3 right-3" size="xs">View Live
                            </UButton>
                            <img :src="`/images/${project.image}`" alt="" class="lg:max-w-sm py-10 mx-auto">
                        </div>
                    </template>
                </UPageHeader>
            </Motion>

            <UPageBody class="text-lg">
                <Motion v-bind="getDelayedMotion(0.2)">
                    <h6 class="mb-3">Summary:</h6>
                    <p class="mb-3">
                        {{ project.summary }}
                    </p>
                    <h6 class="mb-3">Contributions:</h6>
                    <p v-for="desc in project.description" v-html="desc"></p>
                </Motion>
            </UPageBody>
        </UPage>
    </UContainer>
</template>