import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-[1600px] mx-auto px-10 py-20 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-12">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-1 flex flex-col">
            <div className="mb-6">
              <Image 
                src="/Matrixmo Logo.png" 
                alt="Matrixmo Logo" 
                width={200} 
                height={200} 
                className="h-[180px] w-auto hover:opacity-80 transition-opacity duration-200"
              />
            </div>
            {/* <p className="text-gray-700 text-xl leading-relaxed font-medium max-w-xs" style={{ fontFamily: 'Inter, sans-serif' }}>
              Innovating the Future, One Solution at a Time
            </p> */}
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-black font-semibold text-2xl mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              Company
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="/company" className="text-gray-600 hover:text-[#ED1C24] text-xl transition-colors duration-200" style={{ fontFamily: 'Inter, sans-serif' }}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/company#team" className="text-gray-600 hover:text-[#ED1C24] text-xl transition-colors duration-200" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/company#careers" className="text-gray-600 hover:text-[#ED1C24] text-xl transition-colors duration-200" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-black font-semibold text-2xl mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              Services
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="/technology" className="text-gray-600 hover:text-[#ED1C24] text-xl transition-colors duration-200" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Technology
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-600 hover:text-[#ED1C24] text-xl transition-colors duration-200" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/industry" className="text-gray-600 hover:text-[#ED1C24] text-xl transition-colors duration-200" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Industry
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Links */}
          <div>
            <h3 className="text-black font-semibold text-2xl mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              Get in Touch
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-[#ED1C24] text-xl transition-colors duration-200" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="mailto:info@matrixmo.com" className="text-gray-600 hover:text-[#ED1C24] text-xl transition-colors duration-200" style={{ fontFamily: 'Inter, sans-serif' }}>
                  info@matrixmo.com
                </a>
              </li>
            </ul>
            
            {/* Social Media Icons */}
            <div className="mt-8">
              <h4 className="text-black font-semibold text-lg mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                Follow Us
              </h4>
              <div className="flex gap-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#ED1C24] transition-colors duration-200" aria-label="Facebook">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#ED1C24] transition-colors duration-200" aria-label="LinkedIn">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#ED1C24] transition-colors duration-200" aria-label="Instagram">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#ED1C24] transition-colors duration-200" aria-label="TikTok">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-xl mb-4 md:mb-0" style={{ fontFamily: 'Inter, sans-serif' }}>
            © {new Date().getFullYear()} Matrixmo. All rights reserved.
          </p>
          <div className="flex space-x-8">
            <Link href="/privacy" className="text-gray-600 hover:text-[#ED1C24] text-xl transition-colors duration-200" style={{ fontFamily: 'Inter, sans-serif' }}>
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-600 hover:text-[#ED1C24] text-xl transition-colors duration-200" style={{ fontFamily: 'Inter, sans-serif' }}>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
