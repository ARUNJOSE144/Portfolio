import { useEffect, useRef, useState } from 'react'

/**
 * Returns [ref, hasBeenInView].
 * Once an element has entered the viewport it stays true (fire-once).
 */
export function useInView(options = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    if (inView) return          // already triggered, no need to keep observing
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
        observer.unobserve(el)
      }
    }, { threshold: 0.15, ...options })

    observer.observe(el)
    return () => observer.disconnect()
  }, [inView, options])

  return [ref, inView]
}
