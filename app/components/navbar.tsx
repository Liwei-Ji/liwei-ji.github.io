'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'

export default function Navbar() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <nav className="sticky top-0 z-10 bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="text-2xl focus:outline-none"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? '🌙' : '🌞'}
            </button>
          </div>
          <div className="flex items-center">
            <Link href="#projects" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800">
              Projects
            </Link>
            <Link href="#info" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800">
              Info
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
