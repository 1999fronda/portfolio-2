<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const handleRedirect = () => {
  router.push('/')
}
</script>

<template>
  <UError
    :clear="{
      class: 'cursor-pointer'
    }"
    :error="{
      statusCode: 404,
      statusMessage: 'Page not found',
      message: 'The page you are looking for does not exist.'
    }"
    @click="handleRedirect"
  />
</template>
