import { ref, onMounted, onUnmounted, computed } from 'vue'

export function useScreen() {
  const width = ref(window.innerWidth)

  const handleResize = () => {
    width.value = window.innerWidth
  }

  onMounted(() => {
    window.addEventListener('resize', handleResize)
  })
  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
  })

  const isSmall = computed(() => width.value < 640)
  const isMedium = computed(() => width.value >= 640 && width.value < 1024)
  const isLarge = computed(() => width.value >= 1024)

  return { width, isSmall, isMedium, isLarge }
}
