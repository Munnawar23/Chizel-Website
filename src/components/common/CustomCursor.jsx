// src/components/common/CustomCursor.jsx
import { useRef, useEffect, useState } from 'react'
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const CustomCursor = () => {
  const cursorRef = useRef(null)
  const followerRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const cursor = cursorRef.current
    const follower = followerRef.current
    
    if (!cursor || !follower) return

    let mouseX = 0
    let mouseY = 0
    let followerX = 0
    let followerY = 0

    const handleMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      
      // Smooth cursor movement
      gsap.to(cursor, {
        x: mouseX,
        y: mouseY,
        duration: 0.1,
        ease: "power2.out"
      })
    }

    const handleMouseEnter = () => {
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    // Smooth follower animation
    const animateFollower = () => {
      const dx = mouseX - followerX
      const dy = mouseY - followerY
      
      followerX += dx * 0.1
      followerY += dy * 0.1
      
      gsap.set(follower, {
        x: followerX,
        y: followerY
      })
      
      requestAnimationFrame(animateFollower)
    }

    // Handle hover effects
    const handleMouseEnterHover = () => {
      setIsHovering(true)
    }

    const handleMouseLeaveHover = () => {
      setIsHovering(false)
    }

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)
    
    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, [role="button"]')
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnterHover)
      el.addEventListener('mouseleave', handleMouseLeaveHover)
    })

    animateFollower()

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
      
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnterHover)
        el.removeEventListener('mouseleave', handleMouseLeaveHover)
      })
    }
  }, [])

  useGSAP(() => {
    if (isHovering) {
      gsap.to(cursorRef.current, {
        scale: 1.5,
        duration: 0.3,
        ease: "power2.out"
      })
      gsap.to(followerRef.current, {
        scale: 0.8,
        duration: 0.3,
        ease: "power2.out"
      })
    } else {
      gsap.to(cursorRef.current, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      })
      gsap.to(followerRef.current, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      })
    }
  }, [isHovering])

  return (
    <>
      {/* Main Cursor */}
      <div 
        ref={cursorRef}
        className={`fixed top-0 left-0 w-4 h-4 pointer-events-none z-[9999] mix-blend-difference transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 hidden lg:block ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="w-full h-full bg-white rounded-full shadow-lg"></div>
      </div>

      {/* Follower */}
      <div 
        ref={followerRef}
        className={`fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9998] transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 hidden lg:block ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="w-full h-full border-2 border-white/50 rounded-full backdrop-blur-sm mix-blend-difference"></div>
      </div>
    </>
  )
}

export default CustomCursor