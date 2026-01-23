<script setup lang="ts">
import Footer from './layouts/Footer.vue';
import Header from './layouts/Header.vue';

</script>

<template>
  <Suspense>
    <UApp>
      <Header />
      <UMain>
        <RouterView />
      </UMain>
      <USeparator />
      <Footer />
    </UApp>
  </Suspense>
</template>
