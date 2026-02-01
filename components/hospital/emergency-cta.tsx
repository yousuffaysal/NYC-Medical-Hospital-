'use client'

import { useEffect, useRef, useState } from 'react'
import { AlertCircle, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function EmergencyCTA() {
  const ref = useRef<HTMLElement>(null)
  const [pulse, setPulse] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(prev => !prev)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section ref={ref} className="relative py-20 md:py-32 bg-gradient-to-br from-primary to-teal-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-amber-200/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* Icon */}
          <div className="flex justify-center">
            <div className={`p-4 rounded-full bg-white/20 backdrop-blur-sm transition-transform duration-1000 ${pulse ? 'scale-100' : 'scale-110'}`}>
              <AlertCircle className="w-12 h-12 text-white animate-pulse" />
            </div>
          </div>

          {/* Heading */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
              In Medical Emergency?
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto text-balance leading-relaxed">
              Our 24/7 emergency team stands ready with specialists on duty. Expert care is moments away.
            </p>
          </div>

          {/* Phone Number */}
          <div className="space-y-4">
            <div className="inline-block">
              <p className="text-sm text-white/70 mb-2 uppercase tracking-wider font-semibold">Call Emergency Now</p>
              <p className="text-6xl md:text-7xl font-bold text-white tracking-wide">
                911
              </p>
              <p className="text-sm text-white/70 mt-3 uppercase tracking-wider">or reach us at</p>
              <p className="text-3xl font-bold text-white/90 font-mono mt-2">
                (212) 555-0100
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button
              size="lg"
              className="bg-white text-slate-900 hover:bg-white/90 text-base font-semibold h-14 px-8 shadow-lg hover:shadow-xl rounded-full"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base font-semibold h-14 px-8 border-2 border-white/40 text-white hover:bg-white/10 bg-transparent rounded-full"
            >
              Get Directions
            </Button>
          </div>

          {/* Info */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20">
            <div>
              <p className="font-bold text-white mb-2">Response Time</p>
              <p className="text-sm text-white/70">Average 3 minutes from admission</p>
            </div>
            <div>
              <p className="font-bold text-white mb-2">Board Certified</p>
              <p className="text-sm text-white/70">Emergency medicine specialists</p>
            </div>
            <div>
              <p className="font-bold text-white mb-2">Equipment</p>
              <p className="text-sm text-white/70">Latest trauma and life-support tech</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
