<template>
    <UPageHero title="Hi, I am Emmanuel">
        <template #description>
            <div class="w-full max-w-5xl mx-auto">
                A full-stack developer with a strong focus on Laravel, building clean,
                scalable, and user-focused web applications.
            </div>

        </template>

        <template #links>
            <div class="flex gap-2">
                <UButton :to="'/resume.pdf'" download target="_blank" label="Resume" icon="i-lucide-arrow-down"
                    size="xl" color="neutral" variant="subtle" class="cursor-pointer" />
                <UButton label="Let's connect" size="xl" color="primary" variant="solid" class="cursor-pointer" />
            </div>
        </template>
    </UPageHero>
</template>