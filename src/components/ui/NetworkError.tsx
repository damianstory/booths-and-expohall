'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Wifi, WifiOff, RefreshCw } from 'lucide-react'

interface NetworkErrorProps {
  onRetry: () => void
  retryCount?: number
  maxRetries?: number
  className?: string
}

export default function NetworkError({ 
  onRetry, 
  retryCount = 0, 
  maxRetries = 3,
  className = '' 
}: NetworkErrorProps) {
  const [isOnline, setIsOnline] = useState(true)
  const [isRetrying, setIsRetrying] = useState(false)

  useEffect(() => {
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    setIsOnline(navigator.onLine)
    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  const handleRetry = async () => {
    setIsRetrying(true)
    try {
      await onRetry()
    } finally {
      setTimeout(() => setIsRetrying(false), 1000)
    }
  }

  return (
    <motion.div 
      className={`flex flex-col items-center justify-center py-20 px-4 ${className}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="max-w-md mx-auto text-center">
        {/* Connection Status Icon */}
        <motion.div 
          className={`
            w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6
            ${isOnline 
              ? 'bg-yellow-50 border-2 border-yellow-200' 
              : 'bg-red-50 border-2 border-red-200'
            }
          `}
          animate={{ 
            scale: [1, 1.05, 1],
            transition: { 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          <AnimatePresence mode="wait">
            {isOnline ? (
              <motion.div
                key="wifi"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                <Wifi className="w-12 h-12 text-yellow-500" />
              </motion.div>
            ) : (
              <motion.div
                key="wifi-off"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                <WifiOff className="w-12 h-12 text-red-500" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Error Message */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {isOnline ? 'Connection Problem' : 'No Internet Connection'}
        </h3>
        <p className="text-gray-600 mb-6">
          {isOnline 
            ? 'Unable to load booth data. Please check your connection and try again.'
            : 'Please check your internet connection and try again.'
          }
        </p>

        {/* Retry Information */}
        {retryCount > 0 && (
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-600">
              Retry attempt {retryCount} of {maxRetries}
            </p>
            {retryCount >= maxRetries && (
              <p className="text-sm text-red-600 mt-1">
                Maximum retry attempts reached. Please refresh the page.
              </p>
            )}
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <motion.button
            onClick={handleRetry}
            disabled={isRetrying || (!isOnline && retryCount >= maxRetries)}
            className={`
              inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-colors font-medium
              ${isRetrying || (!isOnline && retryCount >= maxRetries)
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-primary-blue text-white hover:bg-blue-600'
              }
            `}
            whileHover={!isRetrying ? { scale: 1.02 } : {}}
            whileTap={!isRetrying ? { scale: 0.98 } : {}}
          >
            <motion.div
              animate={isRetrying ? { rotate: 360 } : {}}
              transition={isRetrying ? { 
                duration: 1,
                repeat: Infinity,
                ease: "linear"
              } : {}}
            >
              <RefreshCw className="w-4 h-4" />
            </motion.div>
            {isRetrying ? 'Retrying...' : 'Try Again'}
          </motion.button>

          <motion.button
            onClick={() => window.location.reload()}
            className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Refresh Page
          </motion.button>
        </div>

        {/* Connection Status Indicator */}
        <motion.div 
          className="mt-6 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className={`
            inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium
            ${isOnline 
              ? 'bg-green-100 text-green-700' 
              : 'bg-red-100 text-red-700'
            }
          `}>
            <div className={`
              w-2 h-2 rounded-full
              ${isOnline ? 'bg-green-500' : 'bg-red-500'}
            `} />
            {isOnline ? 'Connected' : 'Offline'}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}