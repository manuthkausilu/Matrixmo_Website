'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface NavItem {
  label: string;
  href: string;
}

export default function Navbar() {
  const [activeItem, setActiveItem] = useState<string>('');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const navItems: NavItem[] = [
    { label: 'Company', href: '/company' },
    { label: 'Technology', href: '/technology' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Industry', href: '/industry' },
  ];

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
      `}</style>
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 w-full max-w-5xl bg-white/90 shadow-md z-50 rounded-xl">
        <div className="px-3 sm:px-4 lg:px-6">
          <div className="flex items-center justify-between h-18">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/">
                <Image src="/Matrixmo Logo.png" alt="Matrixmo Logo" width={150} height={150} className="h-[150px] w-auto" />
              </Link>
            </div>

            {/* Navigation Items */}
            <div className="hidden md:flex items-center space-x-8 font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setActiveItem(item.label)}
                  className={`text-xl tracking-[-0.3px] py-3 px-2 transition-colors duration-200 text-gray-700 hover:text-[#ED1C24] ${
                    activeItem === item.label ? 'text-[#ED1C24]' : ''
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Contact Button */}
            <div className="hidden md:block flex-shrink-0 -mr-4">
              <Link href="/contact">
                <button className="bg-[#ED1C24] hover:bg-red-700 text-white font-medium text-xl px-5 py-4 rounded-xl transition-colors duration-200 shadow-md hover:shadow-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Get Started
                </button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isMenuOpen ? (
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 rounded-b-xl" style={{ fontFamily: 'Inter, sans-serif' }}>
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => {
                  setActiveItem(item.label);
                  setIsMenuOpen(false);
                }}
                className={`block px-3 py-2 text-lg font-medium tracking-[-0.3px] transition-colors duration-200 rounded-lg ${
                  activeItem === item.label 
                    ? 'text-[#ED1C24] bg-red-50' 
                    : 'text-gray-700 hover:text-[#ED1C24] hover:bg-gray-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="px-3 py-2">
              <Link href="/contact">
                <button 
                  className="w-full bg-[#ED1C24] hover:bg-red-700 text-white font-medium text-lg px-4 py-4 rounded-xl transition-colors duration-200 shadow-md hover:shadow-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
