<script setup lang="ts">
import { Motion } from 'motion-v';
import skills from '../data/skills.json'
import { getDelayedMotion } from '../utils/motionConfig';
</script>

<template>
    <UPageSection id="skills" title="Skills"
        description="Tools and technologies I use to build and maintain real-world web applications.">
        <Motion v-bind="getDelayedMotion(0.1)">
            <UPageGrid>
                <UPageCard v-for="skill in skills" :title="skill.title" :ui="{ title: 'font-medium' }" spotlight>
                    <template #description>
                        <div class="flex flex-wrap gap-1 mt-6">
                            <UButton v-for="tech in skill.tech" :label="tech.name" color="neutral" variant="soft"
                                :icon="tech.icon" />
                        </div>
                    </template>
                </UPageCard>
            </UPageGrid>
        </Motion>
    </UPageSection>
</template>