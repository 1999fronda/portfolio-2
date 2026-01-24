<template>
  <UError :error="{
    statusCode: 404,
    statusMessage: 'Page not found',
    message: 'The page you are looking for does not exist.'
  }">
    <template #links>
      <UButton label="Back to home" to="/" />
    </template>
  </UError>
</template>
