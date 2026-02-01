'use client'

import { Activity } from 'lucide-react'
import CardNav from '@/components/ui/card-nav'
import Image from 'next/image'

interface HeaderProps {
  onBookClick?: () => void
}

export default function Header({ onBookClick }: HeaderProps) {
  // Navigation groupings for the Card Layout
  const items = [
    {
      label: "Explore",
      bgColor: "#1e293b", // Slate 800 - Deep & Trustworthy
      textColor: "#ffffff",
      links: [
        { label: "Home", href: "/", ariaLabel: "Home" },
        { label: "About Us", href: "/about", ariaLabel: "About Us" },
        { label: "Our Doctors", href: "/doctors", ariaLabel: "Doctors" }
      ]
    },
    {
      label: "Care Services",
      bgColor: "#0f766e", // Teal 700 - Medical Primary
      textColor: "#ffffff",
      links: [
        { label: "All Departments", href: "/departments", ariaLabel: "Departments" },
        { label: "Emergency Care", href: "/#services", ariaLabel: "Emergency" },
        { label: "Telemedicine", href: "/#services", ariaLabel: "Telemedicine" },
        { label: "Cardiology", href: "/#services", ariaLabel: "Cardiology" }
      ]
    },
    {
      label: "Resources",
      bgColor: "#334155", // Slate 700 - Neutral Info
      textColor: "#ffffff",
      links: [
        { label: "Latest Articles", href: "/news", ariaLabel: "News" },
        { label: "Contact Us", href: "/contact", ariaLabel: "Contact" },
        { label: "Admin Portal", href: "/admin", ariaLabel: "Portal" }
      ]
    }
  ]

  const Logo = (
    <div className="flex items-center gap-2 select-none group cursor-pointer" onClick={() => window.location.href = '/'}>
      <div className="relative w-10 h-10 group-hover:scale-105 transition-transform">
        <Image
          src="https://ik.imagekit.io/8fky5hetz/Blue%20and%20White%20Geometric%20Health%20Logo%20(1).png"
          alt="NYC Medical Logo"
          fill
          className="object-contain"
        />
      </div>
      <div className="flex flex-col">
        <span className="font-bold text-lg tracking-tight text-slate-900 leading-none">NYC Medical</span>
        <span className="text-[9px] font-bold text-teal-600 uppercase tracking-widest leading-none mt-0.5">Advanced Care</span>
      </div>
    </div>
  )

  return (
    <>
      {/* Spacer to prevent content overlap since CardNav is fixed/absolute */}
      <div className="h-0 md:h-0 w-full" />

      <CardNav
        logo={Logo}
        logoAlt="NYC Medical"
        items={items}
        baseColor="rgba(255, 255, 255, 0.95)"
        menuColor="#0f172a"
        buttonBgColor="#0d9488"
        buttonTextColor="#ffffff"
        ctaLabel="Book Appointment"
        onCtaClick={onBookClick}
        className="font-sans backdrop-blur-md"
      />
    </>
  )
}
