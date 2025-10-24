import { motion, useScroll, useTransform } from 'framer-motion'

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll()
  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <motion.div
      style={{ scaleX: progressScale }}
      className="fixed top-0 left-0 right-0 origin-left h-1 bg-accent/80 z-[100] pointer-events-none"
    />
  )
}