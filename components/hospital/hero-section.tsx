'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, Activity, ShieldCheck, Users } from 'lucide-react'
import Image from 'next/image'

interface HeroSectionProps {
  onCTAClick?: () => void
}

export default function HeroSection({ onCTAClick }: HeroSectionProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-background">
      {/* Video Background - Desktop */}
      <div className="absolute inset-0 overflow-hidden hidden md:block">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/medical-hero.mov" type="video/mp4" />
          <source src="/videos/medical-hero.mov" type="video/quicktime" />
        </video>
        {/* Overlays for Readability */}
        <div className="absolute inset-0 bg-black/5 dark:bg-slate-950/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
      </div>

      {/* Static Image Background - Mobile */}
      <div className="absolute inset-0 overflow-hidden block md:hidden">
        <Image
          src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80"
          alt="Medical Hero Background"
          fill
          className="object-cover"
          priority
        />
        {/* Stronger overlay for mobile text readability */}
        <div className="absolute inset-0 bg-background/80" />
      </div>

      <div className="relative z-10 w-full mx-auto px-6 sm:px-12 lg:px-24 xl:px-32 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center pt-32 lg:pt-0">

        {/* Text Content */}
        <div className="text-left">
          <div className={`flex items-center gap-2 mb-6 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold tracking-wide uppercase border border-accent/20">
              World-Class Healthcare
            </span>
          </div>

          <h1 className={`text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-foreground tracking-tight transition-all duration-700 delay-100 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            Advanced Medicine. <br />
            <span className="text-teal-600">Trusted Care.</span>
          </h1>

          <p className={`text-lg sm:text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed transition-all duration-700 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            Dedicated to providing the highest standard of patient-centered treatment. From emergency services to specialized surgery, your health is our priority.
          </p>

          <div className={`flex flex-wrap gap-4 transition-all duration-700 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <button
              onClick={onCTAClick}
              className="group relative px-8 py-4 bg-teal-600 text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-teal-600/25 hover:scale-105 transition-all duration-300 flex items-center gap-3 overflow-hidden"
            >
              <span>Book Appointment</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-background border border-border text-foreground hover:bg-muted/50 rounded-2xl font-semibold text-lg transition-all duration-300">
              Explore Services
            </button>
          </div>

          <div className={`mt-16 flex items-center gap-10 transition-all duration-700 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-foreground">98%</span>
              <span className="text-sm text-muted-foreground font-bold uppercase tracking-wider mt-1">Satisfaction</span>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-foreground">15min</span>
              <span className="text-sm text-muted-foreground font-bold uppercase tracking-wider mt-1">Avg Wait Time</span>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-foreground">24/7</span>
              <span className="text-sm text-muted-foreground font-bold uppercase tracking-wider mt-1">Care & Support</span>
            </div>
          </div>
        </div>

        {/* Visual/Image Side */}
        <div className={`relative hidden lg:block h-[600px] w-full transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
          {/* Abstract Composition representing 'Advanced Care' without generic stock photos */}
          <div className="absolute inset-0 bg-gradient-to-tr from-secondary/5 to-primary/5 rounded-[3rem] border border-white/50 backdrop-blur-sm overflow-hidden p-8 shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px]" />

            {/* Floating Cards simulating UI/Tech elements */}
            <div className="relative mt-12 ml-8 bg-card p-6 rounded-2xl shadow-xl border border-border/50 max-w-sm animate-float-up">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Activity className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">Real-time Monitoring</h3>
                  <p className="text-xs text-muted-foreground">Live vitals tracking</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-primary rounded-full" />
                </div>
                <div className="flex justify-between text-xs text-muted-foreground font-medium">
                  <span>Stable</span>
                  <span>98 BPM</span>
                </div>
              </div>
            </div>

            <div className="absolute top-1/2 right-8 bg-card p-6 rounded-2xl shadow-xl border border-border/50 max-w-xs animate-float-up delay-1000" style={{ animationDuration: '4s' }}>
              <div className="flex items-center gap-3 mb-2">
                <ShieldCheck className="w-8 h-8 text-accent" />
                <h3 className="font-bold text-foreground">Verified Specialists</h3>
              </div>
              <p className="text-sm text-muted-foreground">Top-tier doctors available for instant consultation.</p>
            </div>

            <div className="absolute bottom-20 left-16 bg-card/80 backdrop-blur-md p-4 rounded-xl border border-border/50 flex items-center gap-4 animate-float-up delay-500" style={{ animationDuration: '5s' }}>
              <div className="flex -space-x-3">
                <div className="relative w-8 h-8 rounded-full border-2 border-card overflow-hidden">
                  <Image src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=100&h=100" alt="Doctor" fill className="object-cover" />
                </div>
                <div className="relative w-8 h-8 rounded-full border-2 border-card overflow-hidden">
                  <Image src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=100&h=100" alt="Doctor" fill className="object-cover" />
                </div>
                <div className="relative w-8 h-8 rounded-full border-2 border-card overflow-hidden">
                  <Image src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=100&h=100" alt="Doctor" fill className="object-cover" />
                </div>
              </div>
              <div className="text-sm font-semibold text-foreground">
                500+ Doctors
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
