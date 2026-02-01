'use client'

import { useRef, useEffect, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

const specialties = [
  {
    name: 'Cardiology',
    description: 'Advanced cardiac care & surgery',
    image: '/images/specialties/cardiology.png'
  },
  {
    name: 'Neurology',
    description: 'Brain & nervous system specialists',
    image: '/images/specialties/neurology.png'
  },
  {
    name: 'Orthopedics',
    description: 'Bone, joint & sports medicine',
    image: '/images/specialties/orthopedics.png'
  },
  {
    name: 'Pediatrics',
    description: 'Compassionate care for children',
    image: '/images/specialties/pediatrics.png'
  },
  {
    name: 'Oncology',
    description: 'Leading-edge cancer treatment',
    image: '/images/specialties/oncology.png'
  },
  {
    name: 'Dermatology',
    description: 'Skin health & aesthetic medicine',
    image: '/images/specialties/dermatology.png'
  },
  {
    name: 'Psychiatry',
    description: 'Mental health & wellness support',
    image: '/images/specialties/psychiatry.png'
  },
  {
    name: 'Gastroenterology',
    description: 'Digestive health specialists',
    image: '/images/specialties/gastroenterology.png'
  },
]

export default function SpecialtiesGrid() {
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true)
        }
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-36 bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <div className={`mb-16 md:mb-24 max-w-2xl transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-primary/60" />
            <span className="text-sm font-bold text-primary tracking-widest uppercase">Center of Excellence</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-tight">
            Specialized Care <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">For Complex Needs</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {specialties.map((specialty, index) => (
            <div
              key={index}
              className={`group relative h-80 rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              {/* Image */}
              <div className="absolute inset-0">
                <Image
                  src={specialty.image}
                  alt={specialty.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold text-white tracking-tight">{specialty.name}</h3>
                    <ArrowUpRight className="text-white opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 delay-100" />
                  </div>
                  <p className="text-white/80 text-sm font-medium opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-300 delay-100 overflow-hidden">
                    {specialty.description}
                  </p>
                  <div className="h-1 w-0 bg-primary mt-4 transition-all duration-500 group-hover:w-full" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
