<script setup lang="ts">
import { useRoute } from 'vue-router';
import projects from '../data/projects.json';
import { computed } from 'vue';
import Project from '../components/Project.vue';
import NotFound from './notFound.vue';

const route = useRoute()

const project = computed(() => {
    return projects.find(p => p.id === route.params.id)
})
</script>

<template>
    <Project v-if="project" :project />
    <NotFound v-else />
</template>