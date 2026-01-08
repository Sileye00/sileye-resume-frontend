"use client"

import React, { useState, useEffect } from 'react'
import { useVisitorCounter } from '@/hooks/useVisitorCounter'
import { FiEye, FiUsers, FiTrendingUp } from 'react-icons/fi'

const AnimatedNumber = ({ value, duration = 2000 }: { value: number; duration?: number }) => {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (value === 0) return

    const startTime = Date.now()
    const startValue = 0

    const updateValue = () => {
      const now = Date.now()
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentValue = Math.floor(startValue + (value - startValue) * easeOutQuart)
      
      setDisplayValue(currentValue)
      
      if (progress < 1) {
        requestAnimationFrame(updateValue)
      }
    }

    requestAnimationFrame(updateValue)
  }, [value, duration])

  return <span>{displayValue.toLocaleString()}</span>
}

const VisitorCounter = () => {
  const { count, isLoading } = useVisitorCounter()

  return (
    <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-lg shadow-lg border border-gray-200/50 dark:border-gray-700/50 p-4 transform transition-all duration-500 hover:scale-105 hover:shadow-xl relative">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
            <FiEye className="w-4 h-4 text-white" />
          </div>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Visitors
          </span>
        </div>
        <FiTrendingUp className="w-4 h-4 text-green-500" />
      </div>

      {/* Counter */}
      <div className="text-center">
        {isLoading ? (
          <div className="flex items-center justify-center space-x-1">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        ) : (
          <div className="space-y-1">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              <AnimatedNumber value={count} />
            </div>
            <div className="flex items-center justify-center space-x-1 text-xs text-gray-500 dark:text-gray-400">
              <FiUsers className="w-3 h-3" />
              <span>Total Views</span>
            </div>
          </div>
        )}
      </div>

      {/* Pulse Animation */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur opacity-75 animate-pulse"></div>
    </div>
  )
}

export default VisitorCounter