import { ReactLenis } from 'lenis/react'
import { ReactNode, useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function LenisProvider({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.08, wheelMultiplier: 1, smoothWheel: true }}>
      {children}
    </ReactLenis>
  )
}
