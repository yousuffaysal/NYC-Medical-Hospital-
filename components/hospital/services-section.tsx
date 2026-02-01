'use client'

import { useEffect, useRef, useState } from 'react'
import { Heart, Brain, Pill, Stethoscope, Zap, Beaker, Phone, Users, ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const services = [
  {
    icon: Zap,
    title: 'Emergency Care',
    description: 'Immediate access to trauma specialists and emergency medicine experts available 24/7.',
    color: 'bg-rose-500',
    textColor: 'text-white',
    gridClass: 'md:col-span-2 md:row-span-2',
    isDark: true
  },
  {
    icon: Heart,
    title: 'Cardiology',
    description: 'Advanced treatments with state-of-the-art diagnostic equipment.',
    color: 'bg-white',
    textColor: 'text-slate-800',
    gridClass: 'md:col-span-1'
  },
  {
    icon: Brain,
    title: 'Neurology',
    description: 'Expert neurological care & neurosurgery.',
    color: 'bg-white',
    textColor: 'text-slate-800',
    gridClass: 'md:col-span-1'
  },
  {
    icon: Users,
    title: 'Primary Care',
    description: 'Your trusted partner for routine wellness.',
    color: 'bg-sky-50',
    textColor: 'text-sky-900',
    gridClass: 'md:col-span-1'
  },
  {
    icon: Stethoscope,
    title: 'Orthopedics',
    description: 'Minimally invasive surgical techniques for joint & bone health.',
    color: 'bg-white',
    textColor: 'text-slate-800',
    gridClass: 'md:col-span-2'
  },
  {
    icon: Pill,
    title: 'Pediatrics',
    description: 'Compassionate care for newborns.',
    color: 'bg-teal-50',
    textColor: 'text-teal-900',
    gridClass: 'md:col-span-1'
  },
  {
    icon: Beaker,
    title: 'Oncology',
    description: 'Comprehensive cancer programs.',
    color: 'bg-white',
    textColor: 'text-slate-800',
    gridClass: 'md:col-span-1'
  },
  {
    icon: Phone,
    title: 'Telemedicine',
    description: 'Virtual consultations from home.',
    color: 'bg-slate-900',
    textColor: 'text-white',
    gridClass: 'md:col-span-1',
    isDark: true
  }
]

export default function ServicesSection() {
  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} id="services" className="py-32 bg-[#fafafa] relative overflow-hidden">

      {/* Organic Background Shapes & Texture */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `radial-gradient(#1e293b 1.5px, transparent 1.5px)`,
            backgroundSize: '24px 24px'
          }}
        />
        <div className="absolute -top-[10%] -left-[5%] w-[70vh] h-[70vh] rounded-full bg-gradient-to-br from-rose-100/40 to-transparent blur-[100px]" />
        <div className="absolute top-[20%] right-[-10%] w-[60vh] h-[60vh] rounded-full bg-gradient-to-bl from-teal-100/40 to-transparent blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[50vh] h-[50vh] rounded-full bg-gradient-to-t from-sky-100/40 to-transparent blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-3xl">
            <span className="text-teal-600 font-bold tracking-widest uppercase text-xs mb-4 block">Our Expertise</span>
            <h2 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight leading-[0.95]">
              Holistic Medical <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-600 font-serif italic pr-4">Excellence.</span>
            </h2>
          </div>
          <p className="text-lg text-slate-500 max-w-sm leading-relaxed mb-2">
            A comprehensive spectrum of specialized care, designed to treat the whole person.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-6 auto-rows-[250px] md:h-[800px]">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className={`group relative p-8 flex flex-col justify-between rounded-[2rem] transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200/50 hover:-translate-y-1 overflow-hidden
                  ${service.gridClass} ${service.color} ${service.textColor}
                  ${service.isDark ? 'shadow-lg' : 'border border-slate-100 shadow-sm'}
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
                `}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                {/* Hover Decoration */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0">
                  <ArrowUpRight className={`w-6 h-6 ${service.isDark ? 'text-white' : 'text-slate-400'}`} />
                </div>

                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110 ${service.isDark ? 'bg-white/20 text-white' : 'bg-slate-50 text-teal-600'}`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-2 tracking-tight">{service.title}</h3>
                    <p className={`text-sm font-medium leading-relaxed opacity-90 ${service.isDark ? 'text-white/80' : 'text-slate-500'}`}>
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className={`mt-20 flex justify-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Button
            size="lg"
            className="bg-slate-900 hover:bg-slate-800 text-white h-14 px-10 rounded-full text-lg font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            view All Departments
          </Button>
        </div>
      </div>
    </section>
  )
}
