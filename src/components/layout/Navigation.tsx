'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

interface NavigationLink {
  id: string
  label: string
  href: string
}

const navigationLinks: NavigationLink[] = [
  { id: 'hero', label: 'Home', href: '#hero' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'booths', label: 'Browse Booths', href: '#booths' },
  { id: 'contact', label: 'Contact', href: '#contact' }
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    
    if (href.startsWith('#')) {
      const targetId = href.substring(1)
      const targetElement = document.getElementById(targetId)
      
      if (targetElement) {
        const navHeight = 80 // Navigation height
        const targetPosition = targetElement.offsetTop - navHeight
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        })
      }
    }
    
    setIsMobileMenuOpen(false)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg' 
            : 'bg-white/95 backdrop-blur-md'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <motion.div
                className="text-2xl font-black text-brand-navy"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                myBlueprint
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className="text-neutral-5 hover:text-primary-blue transition-colors duration-200 font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <motion.button
                className="px-6 py-2 bg-primary-blue text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  const boothsElement = document.getElementById('booths')
                  if (boothsElement) {
                    const navHeight = 80
                    const targetPosition = boothsElement.offsetTop - navHeight
                    window.scrollTo({
                      top: targetPosition,
                      behavior: 'smooth'
                    })
                  }
                }}
              >
                Visit Expo
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-neutral-5 hover:text-primary-blue transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={closeMobileMenu}
            />
            
            {/* Menu Content */}
            <motion.div
              className="absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg border-b"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="max-w-7xl mx-auto px-4 py-6">
                <div className="flex flex-col space-y-4">
                  {navigationLinks.map((link, index) => (
                    <motion.div
                      key={link.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <Link
                        href={link.href}
                        onClick={(e) => handleSmoothScroll(e, link.href)}
                        className="block py-3 text-lg font-medium text-neutral-5 hover:text-primary-blue transition-colors border-b border-neutral-1 last:border-b-0"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                  
                  <motion.div
                    className="pt-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.3 }}
                  >
                    <button
                      className="w-full py-3 bg-primary-blue text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
                      onClick={() => {
                        const boothsElement = document.getElementById('booths')
                        if (boothsElement) {
                          const navHeight = 64
                          const targetPosition = boothsElement.offsetTop - navHeight
                          window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                          })
                        }
                        setIsMobileMenuOpen(false)
                      }}
                    >
                      Visit Expo
                    </button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}