<template>
    <UPageHero title="Hi, I am Emmanuel">
      <template #description>
        A full-stack developer with a strong focus on Laravel, building clean,
        scalable, and user-focused web applications.
      </template>

      <template #links>
        <div class="flex gap-2">
          <UButton
            label="Resume"
            icon="i-lucide-arrow-down"
            size="xl"
            color="neutral"
            variant="subtle"
          />
          <UButton
            label="Let's connect"
            size="xl"
            color="primary"
            variant="solid"
          />
        </div>
      </template>
    </UPageHero>
</template>