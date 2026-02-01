'use client'

import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ChevronRight, Star, ShieldCheck, Stethoscope } from 'lucide-react'

const doctors = [
  {
    name: 'Dr. Sarah Mitchell',
    specialty: 'Cardiology',
    experience: '15 Years Exp.',
    qualifications: ['Columbia MD', 'Board Certified'],
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800&h=800'
  },
  {
    name: 'Dr. James Chen',
    specialty: 'Neurology',
    experience: '12 Years Exp.',
    qualifications: ['NYU MD', 'PhD Neuroscience'],
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800&h=800'
  },
  {
    name: 'Dr. Lisa Rodriguez',
    specialty: 'Orthopedic Surgery',
    experience: '18 Years Exp.',
    qualifications: ['Yale MD', 'Sports Med'],
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800&h=800'
  },
  {
    name: 'Dr. Michael Park',
    specialty: 'Emergency Med',
    experience: '10 Years Exp.',
    qualifications: ['Harvard MD', 'Trauma'],
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800&h=800'
  },
  {
    name: 'Dr. Emily Wong',
    specialty: 'Dermatology',
    experience: '8 Years Exp.',
    qualifications: ['Stanford MD', 'Cosmetic'],
    rating: 4.95,
    image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=800&h=800'
  },
  {
    name: 'Dr. Robert Fox',
    specialty: 'Ophthalmology',
    experience: '14 Years Exp.',
    qualifications: ['Johns Hopkins', 'Retina Spec'],
    rating: 4.88,
    image: 'https://images.unsplash.com/photo-1612276529731-4b21494e6d71?auto=format&fit=crop&q=80&w=800&h=800'
  },
  {
    name: 'Dr. Anita Patel',
    specialty: 'Pediatrics',
    experience: '9 Years Exp.',
    qualifications: ['UCSF MD', 'Family Care'],
    rating: 4.98,
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800&h=800'
  },
  {
    name: 'Dr. Alan Grant',
    specialty: 'Radiology',
    experience: '20 Years Exp.',
    qualifications: ['Chicago Med', 'Imaging Tech'],
    rating: 4.92,
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=800&h=800'
  }
]

interface DoctorsSectionProps {
  onBookClick?: (doctorName: string, specialty: string) => void
}

export default function DoctorsSection({ onBookClick }: DoctorsSectionProps) {
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
    <section ref={ref} className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
      {/* Detailed Texture Pattern */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#0d9488 1.5px, transparent 1.5px), radial-gradient(#0d9488 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px',
          backgroundPosition: '0 0, 12px 12px'
        }}>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        <div className={`flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div>
            <span className="text-teal-600 font-bold tracking-widest uppercase text-xs mb-4 block">World-Class Care</span>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight leading-[0.9]">
              Meet Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-400">Care Team.</span>
            </h2>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="rounded-full border-slate-200 text-slate-600 hover:text-teal-600 hover:border-teal-200">
              View All Specialists
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-[2rem] p-3 transition-all duration-500 hover:shadow-2xl hover:shadow-teal-900/10 hover:-translate-y-2
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
              `}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-[4/5] rounded-[1.5rem] overflow-hidden mb-4 bg-slate-100">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Floating Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-teal-700 shadow-sm flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <ShieldCheck className="w-3 h-3" /> Verified
                </div>

                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-teal-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Quick Action on Hover */}
                <div className="absolute bottom-4 left-4 right-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <Button
                    onClick={() => onBookClick?.(doctor.name, doctor.specialty)}
                    className="w-full bg-white text-teal-700 hover:bg-teal-50 font-bold rounded-xl shadow-lg"
                  >
                    Book Now
                  </Button>
                </div>
              </div>

              <div className="px-2 pb-2">
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 leading-tight group-hover:text-teal-600 transition-colors">{doctor.name}</h3>
                    <p className="text-sm text-slate-500 font-medium">{doctor.specialty}</p>
                  </div>
                  <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-lg border border-amber-100">
                    <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                    <span className="text-xs font-bold text-amber-700">{doctor.rating}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-3 opacity-60 group-hover:opacity-100 transition-opacity">
                  {doctor.qualifications.map((q, i) => (
                    <span key={i} className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 bg-slate-50 px-2 py-1 rounded-md border border-slate-100">
                      {q}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
