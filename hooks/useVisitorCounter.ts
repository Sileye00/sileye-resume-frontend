"use client"

import { useState, useEffect } from 'react'

export const useVisitorCounter = () => {
  const [count, setCount] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        const response = await fetch('https://e024p6dfvb.execute-api.us-east-1.amazonaws.com/prod/visitor-count')
        const data = await response.json()
        setCount(data.count)
        setIsLoading(false)
      } catch (error) {
        console.error('Error fetching visitor count:', error)
        setCount(1)
        setIsLoading(false)
      }
    }

    fetchVisitorCount()
  }, [])

  return { count, isLoading }
}