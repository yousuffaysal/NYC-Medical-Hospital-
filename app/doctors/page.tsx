'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/hospital/header'
import Footer from '@/components/hospital/footer'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Search, ChevronRight, Star, ShieldCheck } from 'lucide-react'

const allDoctors = [
  {
    name: 'Dr. Sarah Mitchell',
    slug: 'dr-sarah-mitchell',
    specialty: 'Cardiology',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800&h=1000',
    experience: 15,
    qualifications: ['MD Columbia', 'Board Certified'],
    rating: 4.9,
    bio: 'Renowned cardiologist specializing in minimally invasive procedures and complex cardiac cases.',
    availability: 'Mon-Fri'
  },
  {
    name: 'Dr. James Chen',
    slug: 'dr-james-chen',
    specialty: 'Neurology',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800&h=1000',
    experience: 12,
    qualifications: ['MD NYU', 'PhD Neuroscience'],
    rating: 4.95,
    bio: 'Dual-qualified neurologist integrating cutting-edge research into stroke and neurodegenerative treatment.',
    availability: 'Mon-Sat'
  },
  {
    name: 'Dr. Lisa Rodriguez',
    slug: 'dr-lisa-rodriguez',
    specialty: 'Orthopedic Surgery',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800&h=1000',
    experience: 18,
    qualifications: ['MD Yale', 'Sports Medicine'],
    rating: 4.88,
    bio: 'Pioneer in arthroscopic surgery, helping athletes and active patients regain full mobility.',
    availability: 'Tue-Fri'
  },
  {
    name: 'Dr. Michael Park',
    slug: 'dr-michael-park',
    specialty: 'Emergency Medicine',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800&h=1000',
    experience: 10,
    qualifications: ['MD Harvard', 'Trauma Specialist'],
    rating: 4.92,
    bio: 'Lead attending physician in our Level 1 Trauma Center, dedicated to rapid, life-saving interventions.',
    availability: 'Rotational'
  },
  {
    name: 'Dr. Emma Thompson',
    slug: 'dr-emma-thompson',
    specialty: 'Pediatrics',
    image: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&q=80&w=800&h=1000',
    experience: 8,
    qualifications: ['MD Cornell', 'Child Development'],
    rating: 4.94,
    bio: 'Compassionate pediatrician creating a fear-free environment for young patients and their families.',
    availability: 'Mon-Fri'
  },
  {
    name: 'Dr. David Cohen',
    slug: 'dr-david-cohen',
    specialty: 'Oncology',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800&h=1000',
    experience: 20,
    qualifications: ['MD Johns Hopkins', 'Immunotherapy'],
    rating: 4.97,
    bio: 'Leading oncologist heading our clinical trials program for personalized cancer treatments.',
    availability: 'Mon-Thu'
  },
  {
    name: 'Dr. Rebecca Williams',
    slug: 'dr-rebecca-williams',
    specialty: 'Neurology',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800&h=1000', // Reusing Rodriguez for demo or find another
    experience: 14,
    qualifications: ['MD Boston U', 'Autoimmune Expert'],
    rating: 4.91,
    bio: 'Specialist in neurological disorders with a focus on autoimmune conditions and MS.',
    availability: 'Wed-Fri'
  },
  {
    name: 'Dr. Marcus Johnson',
    slug: 'dr-marcus-johnson',
    specialty: 'Cardiology',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800&h=1000', // Reusing Chen for demo
    experience: 16,
    qualifications: ['MD Northwestern', 'Heart Failure'],
    rating: 4.93,
    bio: 'Expert in advanced heart failure management and transplant cardiology.',
    availability: 'Mon-Thu'
  }
]

export default function DoctorsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedSpecialty, setSelectedSpecialty] = useState<string | null>(null)

  const specialties = Array.from(new Set(allDoctors.map(d => d.specialty)))

  const filteredDoctors = allDoctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSpecialty = !selectedSpecialty || doctor.specialty === selectedSpecialty
    return matchesSearch && matchesSpecialty
  })

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-primary/20">
      <Header onBookClick={() => { }} />

      <main className="flex-1">
        {/* 1. Hero Section - Immersive */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-900 text-white">
          <div className="absolute inset-x-0 bottom-0 h-full opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] animate-pulse-slow"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-900/10"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur border border-white/10 text-primary-300 text-xs font-bold uppercase tracking-widest mb-6 animate-fade-in-up">
              World-Class Team
            </span>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-8 leading-[0.9] text-white animate-fade-in-up delay-100">
              Meet Our <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">Specialists</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
              A diverse team of board-certified experts dedicated to providing compassionate, personalized care using the latest medical advancements.
            </p>
          </div>
        </section>

        {/* 2. Floating Filter Bar */}
        <div className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-xl border-b border-slate-100 shadow-sm transition-all duration-300">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-4">

            {/* Search Input */}
            <div className="relative w-full md:w-96 group">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-slate-400 group-focus-within:text-primary transition-colors" />
              </div>
              <Input
                type="text"
                placeholder="Search doctors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-10 bg-slate-50 border-transparent focus:bg-white focus:border-primary/20 rounded-full transition-all"
              />
            </div>

            {/* Specialty Chips */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
              <button
                onClick={() => setSelectedSpecialty(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${selectedSpecialty === null
                  ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20'
                  : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
                  }`}
              >
                All
              </button>
              {specialties.map(specialty => (
                <button
                  key={specialty}
                  onClick={() => setSelectedSpecialty(specialty)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${selectedSpecialty === specialty
                    ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20'
                    : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
                    }`}
                >
                  {specialty}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 3. Immersive Grid */}
        <section className="py-12 md:py-20 bg-slate-50 min-h-[600px]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {filteredDoctors.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-center opacity-0 animate-fade-in-up">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                  <Search className="w-6 h-6 text-slate-400" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">No specialists found</h3>
                <p className="text-slate-500">Try adjusting your search criteria</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {filteredDoctors.map((doctor, index) => (
                  <div
                    key={index}
                    className="group relative h-[420px] rounded-[2rem] overflow-hidden bg-white shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <Link href={`/doctors/${doctor.slug}`} className="absolute inset-0">
                      <Image
                        src={doctor.image}
                        alt={doctor.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Gradient Overlay - Always Visible but deepens on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                      {/* Text Content Overlay */}
                      <div className="absolute inset-0 p-6 flex flex-col justify-end">
                        {/* Badge */}
                        <div className="mb-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-y-2 group-hover:translate-y-0">
                          <Badge className="bg-white/20 backdrop-blur-md text-white border-0">
                            {doctor.availability}
                          </Badge>
                        </div>

                        <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                          <p className="text-primary-300 font-bold tracking-wider text-xs uppercase mb-1">{doctor.specialty}</p>
                          <h3 className="text-2xl font-bold text-white mb-2">{doctor.name}</h3>

                          <div className="flex items-center gap-2 mb-4 opacity-75">
                            <div className="flex text-yellow-400">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className={`w-3 h-3 ${i < Math.floor(doctor.rating) ? 'fill-current' : 'text-slate-600'}`} />
                              ))}
                            </div>
                            <span className="text-xs text-slate-300 font-medium">{doctor.rating}</span>
                          </div>

                          <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-300">
                            <p className="text-slate-300 text-sm line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                              {doctor.bio}
                            </p>
                            <Button size="sm" className="w-full rounded-full bg-white text-slate-900 hover:bg-primary hover:text-white font-bold transition-colors">
                              View Profile
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
