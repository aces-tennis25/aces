'use client'

import { useEffect } from 'react'

export default function AOSInit() {
  useEffect(() => {
    const initAOS = async () => {
      const AOS = await import('aos')
      
      // Create and inject CSS dynamically
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = 'https://unpkg.com/aos@next/dist/aos.css'
      document.head.appendChild(link)
      
      AOS.init({
        duration: 1000,
        once: true,
        easing: 'ease-in-out',
      })
    }

    initAOS()
  }, [])

  return null
}