"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface LayoutProps {
  children: React.ReactNode
  currentPageName?: string
}

export default function Layout({ children, currentPageName }: LayoutProps) {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  const navigationItems = [
    { title: "Home", url: "/" },
    { title: "PV & PVT Solutions", url: "/pv-solutions" },
    { title: "Heat Pumps", url: "/heat-pumps" },
    { title: "EV Charging", url: "/ev-charging" },
    { title: "Control Systems", url: "/control-systems" },
    { title: "Contact", url: "/contact" },
  ]

  const isActive = (url: string) => pathname === url

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-16 h-12 flex items-center justify-center">
                <Image
                  src="/images/logo.png"
                  alt="NewClear Energy"
                  width={64}
                  height={48}
                  className="h-12 w-auto object-contain"
                  priority
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-2xl font-bold text-slate-800">NewClear Energy</h1>
                <p className="text-sm text-slate-600">Powering a Greener Future</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive(item.url)
                      ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                      : "text-slate-700 hover:text-blue-600"
                  }`}
                >
                  {item.title}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                asChild
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-2 rounded-full font-medium shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                <Link href="/contact">Get Free Consultation</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-slate-700" />
              ) : (
                <Menu className="h-6 w-6 text-slate-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
            <nav className="max-w-7xl mx-auto px-4 py-4 space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className={`block py-2 text-base font-medium transition-colors ${
                    isActive(item.url) ? "text-blue-600" : "text-slate-700 hover:text-blue-600"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
              <Button asChild className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white mt-4">
                <Link href="/contact">Get Free Consultation</Link>
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-9 flex items-center justify-center">
                  <Image
                    src="/images/logo.png"
                    alt="NewClear Energy"
                    width={48}
                    height={36}
                    className="h-9 w-auto object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">NewClear Energy</h3>
                  <p className="text-sm text-slate-400">Powering a Greener Future</p>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Delivering innovative and sustainable energy solutions that empower businesses to embrace a greener
                future.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Our Services</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="/pv-solutions" className="hover:text-white transition-colors">
                    PV & PVT Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/heat-pumps" className="hover:text-white transition-colors">
                    Commercial Heat Pumps
                  </Link>
                </li>
                <li>
                  <Link href="/ev-charging" className="hover:text-white transition-colors">
                    EV Charging Stations
                  </Link>
                </li>
                <li>
                  <Link href="/control-systems" className="hover:text-white transition-colors">
                    Control Systems
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3 text-slate-400">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-500" />
                  <span>+353 (0)21 202 9123</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-500" />
                  <span>info@ne.ie</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 NewClear Energy Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
