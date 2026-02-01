'use client'

import React from "react"

import Link from 'next/link'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Facebook, Twitter, Linkedin, Instagram, Phone, MapPin, Mail } from 'lucide-react'
import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setEmail('')
  }

  return (
    <footer className="bg-primary-foreground text-foreground">


      {/* Main Footer */}
      <div className="bg-slate-900 text-white relative z-10 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* About */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-10 h-10">
                  <Image
                    src="https://ik.imagekit.io/8fky5hetz/Blue%20and%20White%20Geometric%20Health%20Logo%20(1).png"
                    alt="Logo"
                    fill
                    className="object-contain brightness-0 invert"
                  />
                </div>
                <h3 className="text-xl font-bold text-white">NYC Medical</h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Pioneering compassionate, expert care for the New York community for over 25 years.
              </p>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-accent/20 hover:bg-accent/40 text-accent rounded-full flex items-center justify-center transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-accent/20 hover:bg-accent/40 text-accent rounded-full flex items-center justify-center transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-accent/20 hover:bg-accent/40 text-accent rounded-full flex items-center justify-center transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-accent/20 hover:bg-accent/40 text-accent rounded-full flex items-center justify-center transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="text-slate-400 hover:text-teal-400 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-slate-400 hover:text-teal-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/departments" className="text-slate-400 hover:text-teal-400 transition-colors">
                    Departments
                  </Link>
                </li>
                <li>
                  <Link href="/doctors" className="text-slate-400 hover:text-teal-400 transition-colors">
                    Our Doctors
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-slate-400 hover:text-teal-400 transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold text-white mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#services" className="text-slate-400 hover:text-teal-400 transition-colors">
                    Emergency Care
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-slate-400 hover:text-teal-400 transition-colors">
                    Cardiology
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-slate-400 hover:text-teal-400 transition-colors">
                    Neurology
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-slate-400 hover:text-teal-400 transition-colors">
                    Telemedicine
                  </a>
                </li>
                <li>
                  <Link href="/admin" className="text-slate-400 hover:text-teal-400 transition-colors">
                    Admin Portal
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-white mb-4">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-2">
                  <MapPin className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-400">
                    123 Medical Plaza<br />
                    New York, NY 10001
                  </span>
                </li>
                <li className="flex gap-2">
                  <Phone className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-400">(212) 555-0100</span>
                </li>
                <li className="flex gap-2">
                  <Mail className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-400">info@nycmedical.com</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-slate-800 pt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-500 mb-4">
              <div className="flex gap-4">
                <Link href="#" className="hover:text-teal-400 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="#" className="hover:text-teal-400 transition-colors">
                  HIPAA Compliance
                </Link>
                <Link href="#" className="hover:text-teal-400 transition-colors">
                  Accessibility
                </Link>
              </div>
              <div className="md:text-right flex flex-col items-end gap-1">
                <p>&copy; 2024 NYC Medical Center. All rights reserved.</p>
                <p className="text-xs flex items-center gap-1">
                  Powered by <a href="https://foxmen.studio" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 font-medium transition-colors">Foxmen Studio</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
