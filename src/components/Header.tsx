'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

  const navItems = [
    { label: 'Beranda', href: '#beranda' },
    { label: 'Tentang', href: '#tentang' },
    { label: 'Program', href: '#program' },
    { label: 'Alumni', href: '#alumni' },
    { label: 'Kontak', href: '#kontak' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm" ref={menuRef}>
      <nav className="container-max flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-3">
          <Image 
            src="/diya-blue.png" 
            alt="Diya Project Logo" 
            width={120}
            height={120}
            quality={100}
            priority
            className="h-12 w-auto"
          />
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-gray-700 hover:text-primary font-medium transition-colors duration-200 hover:scale-105 transform"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <button className="btn-primary">
            Daftar Sekarang
          </button>
        </div>

        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-gray-700 hover:text-primary font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button className="btn-primary w-full mt-4">
              Daftar Sekarang
            </button>
          </div>
        </div>
      )}
    </header>
  )
}