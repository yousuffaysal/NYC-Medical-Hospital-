'use client'

import { useEffect, useRef, useState } from 'react'
import { Brain, Smartphone, Lock, BarChart3, Activity, Zap, Dna, Microscope } from 'lucide-react'

export default function HealthTech() {
  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.15 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Subtle Mesh Background - Light & Airy */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-gradient-to-br from-teal-50 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-slate-100 to-transparent rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#0f766e 1px, transparent 1px), linear-gradient(to right, #0f766e 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className={`mb-20 max-w-3xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-teal-600 font-bold tracking-widest uppercase text-xs mb-4 block">Medical Innovation</span>
          <h2 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight leading-[0.9] mb-8">
            Precision through <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-700">Technology.</span>
          </h2>
          <p className="text-xl text-slate-500 leading-relaxed max-w-xl">
            We replace guesswork with data. Our AI-driven ecosystem integrates seamlessly with clinical expertise to deliver outcomes that redefine standards.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 h-auto md:min-h-[600px]">

          {/* Feature 1: AI Diagnostics (Large Card) */}
          <div
            className={`md:col-span-3 lg:col-span-5 bg-slate-50 rounded-[2rem] p-10 flex flex-col justify-between border border-slate-100 hover:border-teal-200 transition-all duration-500 hover:shadow-2xl hover:shadow-teal-900/5 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '100ms' }}
          >
            <div>
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500">
                <Brain className="w-7 h-7 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">AI Diagnostics</h3>
              <p className="text-slate-500 leading-relaxed">
                Machine learning algorithms analyze imaging and pathology data with 99.8% accuracy, identifying anomalies human eyes might miss.
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-slate-200/60 flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-400">Accuracy Rate</span>
              <span className="text-3xl font-bold text-slate-900">99.8%</span>
            </div>
          </div>

          {/* Feature 2: Real-time Vitals (Tall Card) */}
          <div
            className={`md:col-span-3 lg:col-span-3 bg-teal-600 rounded-[2rem] p-8 text-white flex flex-col relative overflow-hidden group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <Activity className="w-8 h-8 mb-auto relative z-10" />

            <div className="relative z-10 mt-12">
              <h3 className="text-xl font-bold mb-2">Live Monitoring</h3>
              <p className="text-teal-100 text-sm leading-relaxed opacity-90 mb-6">
                Continuous tracking of vital signs via integrated IoT wearables.
              </p>

              {/* Simulated Vitals Graph */}
              <div className="h-16 flex items-end gap-1">
                {[4, 7, 5, 9, 6, 8, 5, 7, 4, 6].map((h, i) => (
                  <div key={i} className="flex-1 bg-white/20 rounded-t-sm animate-pulse" style={{ height: `${h * 10}%`, animationDelay: `${i * 100}ms` }} />
                ))}
              </div>
            </div>
          </div>

          {/* Feature 3: Secure Cloud (Wide Card) */}
          <div
            className={`md:col-span-6 lg:col-span-4 bg-white rounded-[2rem] p-10 border border-slate-200 shadow-sm flex flex-col justify-center relative overflow-hidden group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="absolute inset-0 bg-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <Lock className="w-8 h-8 text-slate-400 group-hover:text-teal-600 transition-colors duration-300" />
                <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider">HIPAA Ready</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Encrypted Vault</h3>
              <p className="text-slate-500">
                Military-grade encryption for patient records. Your privacy is protected by immutable blockchain ledgers.
              </p>
            </div>
          </div>

          {/* Feature 4: Tech Grid (Mosaic) */}
          <div
            className={`md:col-span-6 lg:col-span-12 grid grid-cols-2 md:grid-cols-4 gap-6 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '400ms' }}
          >
            {[
              { icon: Microscope, label: 'Genomics', desc: 'DNA Sequencing' },
              { icon: Smartphone, label: 'Telehealth', desc: 'HD Consults' },
              { icon: Zap, label: 'Speed', desc: 'Instant Lab Results' },
              { icon: Dna, label: 'Research', desc: 'Clinical Trials' }
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl p-6 hover:bg-white hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 group cursor-default">
                <item.icon className="w-6 h-6 text-teal-600 mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="font-bold text-slate-900">{item.label}</h4>
                <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
