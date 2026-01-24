<script setup lang="ts">
import projects from '../data/projects.json';
</script>

<template>
    <UPageSection id="projects" title="Projects" :ui="{ container: 'max-w-5xl' }">
        <UPageCard v-for="project, i in projects" :key="i" variant="outline" orientation="horizontal" spotlight
            spotlight-color="primary" :reverse="i % 2 === 0" :ui="{ title: 'font-medium text-xl' }">
            <template #title>
                {{ project.title }}
            </template>
            <template #description>
                <div>
                    A web-based admissions portal that transformed the traditional in-person process into a fully online
                    system.
                </div>
                <div class="mt-3">
                    <ULink to="/test" class="text-secondary">View project</ULink>
                </div>
                <div class="flex gap-1 mt-3">
                    <UButton v-for="skill, i in project.tech" :key="i" :label="skill.name" variant="subtle" size="sm" />
                </div>
            </template>
            <ULink to="/test">
                <img :src="'/images/' + project.image" alt="Tailwind CSS" class="w-full" />
            </ULink>
        </UPageCard>
    </UPageSection>
</template>