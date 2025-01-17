'use client'

import { ThemeProvider } from 'next-themes'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Info from './components/Info'

export default function Home() {
  return (
    <ThemeProvider attribute="class">
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Navbar />
        <Hero />
        <Projects />
        <Info />
      </div>
    </ThemeProvider>
  )
}

