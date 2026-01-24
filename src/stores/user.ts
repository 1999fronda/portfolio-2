import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'

export const useUserStore = defineStore('user', () => {
  const user = reactive({
    firstName: 'Emmanuel',
    lastName: 'Episcope',
    title: 'Full-Stack Developer',
    bio: 'A full-stack developer with a strong focus on Laravel, building clean,scalable, and user-focused web applications.',
  })

  const fullName = computed(() => {
    return `${user.firstName} ${user.lastName}`
  })

  return { user, fullName }
})
