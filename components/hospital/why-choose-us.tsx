'use client'

import { useEffect, useRef, useState } from 'react'
import { Clock, Users, Zap, TrendingUp, Award, Heart } from 'lucide-react'

const reasons = [
  {
    icon: Clock,
    title: '24/7 Emergency',
    description: 'Round-the-clock emergency services with rapid response times'
  },
  {
    icon: Users,
    title: 'NYC Specialists',
    description: 'Top medical professionals trained at leading institutions'
  },
  {
    icon: Zap,
    title: 'AI Diagnostics',
    description: 'Advanced AI-assisted technology for accurate diagnosis'
  },
  {
    icon: TrendingUp,
    title: 'Better Outcomes',
    description: 'Proven track record with higher success rates'
  },
  {
    icon: Award,
    title: 'World-Class',
    description: 'Equipped with state-of-the-art medical equipment'
  },
  {
    icon: Heart,
    title: 'Patient First',
    description: 'Your health and comfort are our top priority'
  }
]

export default function WhyChooseUs() {
  const ref = useRef<HTMLElement>(null)
  const [visibleItems, setVisibleItems] = useState<number[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Staggered reveal for cards + content
          setVisibleItems(reasons.map((_, i) => i))
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
      {/* Atmosphere Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-50/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left Side: Editorial Content */}
          <div className={`transition-all duration-1000 ${visibleItems.length > 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <span className="inline-block py-1 px-3 rounded-full bg-teal-100/50 border border-teal-200 text-teal-700 text-xs font-bold tracking-widest uppercase mb-6">
              Why Choose Us
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-[1.1]">
              Excellence Rooted in <br />
              <span className="font-serif italic text-teal-600">Compassion</span>
            </h2>

            <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-lg">
              For over 25 years, we've earned trust through exceptional medical expertise and an unwavering commitment to treating every patient with dignity and genuine care.
            </p>

            {/* Stats - Modern Cards */}
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <p className="text-4xl font-bold text-slate-900 mb-1">50K+</p>
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">Patients Treated</p>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <p className="text-4xl font-bold text-slate-900 mb-1">98%</p>
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">Satisfaction Rate</p>
              </div>
            </div>
          </div>

          {/* Right Side: Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map((reason, index) => {
              const Icon = reason.icon
              const isVisible = visibleItems.includes(index)
              return (
                <div
                  key={index}
                  className={`group p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-teal-100/50 transition-all duration-500 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                  style={{ transitionDelay: `${100 + (index * 100)}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-teal-50 group-hover:bg-teal-600 transition-colors flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-teal-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{reason.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
