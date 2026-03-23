import { useEffect, useRef } from 'react'

/**
 * Calls `onEnter(sectionId)` when a section crosses the viewport midpoint.
 * @param {string[]} sectionIds  - ordered list of section element IDs
 * @param {(id: string) => void} onEnter
 */
export function useScrollSpy(sectionIds, onEnter) {
  const observerRef = useRef(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onEnter(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observerRef.current.observe(el)
    })

    return () => observerRef.current?.disconnect()
  }, [sectionIds, onEnter])
}
