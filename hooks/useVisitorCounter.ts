"use client"

import { useState, useEffect } from 'react'

export const useVisitorCounter = () => {
  const [count, setCount] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate API call or use localStorage for demo
    const getVisitorCount = () => {
      const stored = localStorage.getItem('visitorCount')
      const currentCount = stored ? parseInt(stored) : Math.floor(Math.random() * 1000) + 500
      
      // Increment count for new visit
      const newCount = currentCount + 1
      localStorage.setItem('visitorCount', newCount.toString())
      
      return newCount
    }

    // Simulate loading delay for animation effect
    setTimeout(() => {
      setCount(getVisitorCount())
      setIsLoading(false)
    }, 1000)
  }, [])

  return { count, isLoading }
}