<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute()
console.log(route);
</script>

<template>
    this is a project page. {{ $route }}
</template>