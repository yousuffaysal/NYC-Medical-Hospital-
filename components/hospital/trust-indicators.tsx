'use client'

import { useEffect, useRef, useState } from 'react'
import { Award, CheckCircle, Shield, Zap } from 'lucide-react'

export default function TrustIndicators() {
  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const indicators = [
    {
      icon: Award,
      title: 'Joint Commission',
      subtitle: 'Accredited',
      description: 'Gold standard in safety',
      value: '100%'
    },
    {
      icon: Shield,
      title: 'HIPAA',
      subtitle: 'Compliant',
      description: 'Ironclad data privacy',
      value: '2024'
    },
    {
      icon: CheckCircle,
      title: 'Years of',
      subtitle: 'Excellence',
      description: 'Serving NYC since 1999',
      value: '25+'
    },
    {
      icon: Zap,
      title: 'Tech',
      subtitle: 'Enabled',
      description: 'AI-assisted diagnostics',
      value: '#1'
    }
  ]

  return (
    <section
      ref={ref}
      className="py-24 relative overflow-hidden bg-[#020617]"
    >
      {/* Narrative Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
            Trusted by <span className="text-teal-400">50,000+ Patients</span>
          </h2>
          <p className="text-xl text-slate-400 font-light max-w-2xl mx-auto">
            Where advanced medical science meets compassionate, human-centric care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {indicators.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className={`group relative p-8 rounded-3xl bg-slate-900/40 border border-white/5 hover:border-teal-500/30 hover:bg-slate-900/60 transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-teal-500/5 to-transparent pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-teal-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500/10 to-transparent border border-teal-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 relative">
                      <Icon className="w-7 h-7 text-teal-400" />
                    </div>
                  </div>

                  <div className="space-y-1 mb-4">
                    <span className="text-4xl font-bold text-white block tracking-tighter">{item.value}</span>
                    <h3 className="text-lg font-semibold text-slate-200">
                      {item.title} <span className="text-teal-500">{item.subtitle}</span>
                    </h3>
                  </div>

                  <p className="text-sm text-slate-500 font-medium tracking-wide uppercase">{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
