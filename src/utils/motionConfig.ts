export const motionConfig = {
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
    inViewOptions: { once: true },
  },
}

export const getDelayedMotion = (delay: number) => ({
  ...motionConfig.fadeInUp,
  transition: { ...motionConfig.fadeInUp.transition, delay },
})
