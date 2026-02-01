'use client'

import { useState } from 'react'
import Header from '@/components/hospital/header'
import Footer from '@/components/hospital/footer'
import { Button } from '@/components/ui/button'
import { Heart, Brain, Pill, Stethoscope, Zap, Beaker, Phone, Users, ChevronRight, Sparkles } from 'lucide-react'
import Image from 'next/image'
import AppointmentBooking from '@/components/hospital/appointment-booking'

const departments = [
  {
    id: 'cardiology',
    name: 'Cardiology',
    description: 'Comprehensive heart care led by world-renowned cardiologists using state-of-the-art technology.',
    longDescription: 'Our Cardiology Center of Excellence provides the latest in cardiovascular care, from preventive screenings to complex surgical interventions. We specialize in minimally invasive procedures that ensure faster recovery and better outcomes for our patients.',
    image: '/images/specialties/cardiology.png',
    stats: { specialists: 12, beds: 25 },
    icon: Heart,
    head: "Dr. Sarah Smith",
    phone: "(212) 555-0123",
    features: ["Interventional Cardiology", "Electrophysiology", "Heart Failure Program", "Cardiac Rehabilitation", "Preventive Cardiology"]
  },
  {
    id: 'neurology',
    name: 'Neurology',
    description: 'Advanced diagnosis and treatment for disorders of the brain, spine, and nervous system.',
    longDescription: 'The Neurology Department offers cutting-edge treatment for stroke, epilepsy, multiple sclerosis, and other neurological conditions. Our multidisciplinary team works together to provide personalized care plans tailored to each patient’s unique needs.',
    image: '/images/specialties/neurology.png',
    stats: { specialists: 10, beds: 20 },
    icon: Brain,
    head: "Dr. John Doe",
    phone: "(212) 555-0124",
    features: ["Stroke Center", "Epilepsy Monitoring", "Movement Disorders", "Neuro-Oncology", "Sleep Medicine"]
  },
  {
    id: 'pediatrics',
    name: 'Pediatrics',
    description: 'Dedicated care for infants, children, and adolescents in a family-centered environment.',
    longDescription: 'From routine checkups to specialized acute care, our Pediatric Department is designed to make children feel safe and comfortable. We offer a full range of sub-specialties including pediatric cardiology, oncology, and pulmonology.',
    image: '/images/specialties/pediatrics.png',
    stats: { specialists: 20, beds: 35 },
    icon: Pill,
    head: "Dr. Emily Blunt",
    phone: "(212) 555-0125",
    features: ["Neonatal ICU (NICU)", "Pediatric Emergency", "Adolescent Medicine", "Developmental Pediatrics", "Child Life Services"]
  },
  {
    id: 'orthopedics',
    name: 'Orthopedics',
    description: 'Restoring mobility and quality of life through advanced orthopedic surgery and rehabilitation.',
    longDescription: 'Our Orthopedic team specializes in joint replacement, sports medicine, and spine surgery. Using the latest robotic-assisted techniques, we help patients return to their active lifestyles faster and with less pain.',
    image: '/images/specialties/orthopedics.png',
    stats: { specialists: 14, beds: 30 },
    icon: Stethoscope,
    head: "Dr. Michael Chen",
    phone: "(212) 555-0126",
    features: ["Joint Replacement", "Sports Medicine", "Spine Surgery", "Hand & Upper Extremity", "Physical Therapy"]
  },
  {
    id: 'oncology',
    name: 'Oncology',
    description: 'Compassionate, comprehensive cancer care including the latest immunotherapies and clinical trials.',
    longDescription: 'The Cancer Center provides a holistic approach to treatment, combining medical expertise with supportive care services. We offer advanced radiation therapy, chemotherapy, and access to groundbreaking clinical trials.',
    image: '/images/specialties/oncology.png',
    stats: { specialists: 18, beds: 28 },
    icon: Beaker,
    head: "Dr. Lisa Wong",
    phone: "(212) 555-0127",
    features: ["Medical Oncology", "Radiation Therapy", "Surgical Oncology", "Genetic Counseling", "Support Groups"]
  },
  {
    id: 'dermatology',
    name: 'Dermatology',
    description: 'Expert diagnostics and treatments for all skin, hair, and nail conditions.',
    longDescription: 'Our Dermatologists provide medical, surgical, and cosmetic services. We treat everything from acne and eczema to skin cancer, utilizing the latest laser technologies and minimally invasive procedures.',
    image: '/images/specialties/dermatology.png',
    stats: { specialists: 8, beds: 0 },
    icon: Sparkles,
    head: "Dr. Robert Fox",
    phone: "(212) 555-0128",
    features: ["Mohs Surgery", "Cosmetic Dermatology", "Pediatric Dermatology", "Laser Treatments", "Skin Cancer Screening"]
  },
  {
    id: 'emergency',
    name: 'Emergency Care',
    description: '24/7 rapid response for critical injuries and illnesses with a dedicated trauma team.',
    longDescription: 'Our Level 1 Trauma Center is staffed by board-certified emergency physicians and trauma surgeons ready to handle any medical crisis. We feature dedicated pediatric emergency zones and rapid-assessment cardiac units.',
    image: '/images/specialties/emergency.png',
    stats: { specialists: 15, beds: 40 },
    icon: Zap,
    head: "Dr. James Wilson",
    phone: "911 or (212) 555-0199",
    features: ["Level 1 Trauma", "Stroke & Chest Pain Center", "Pediatric ER", "Rapid Triage", "24/7 Imaging"]
  },
  {
    id: 'primary',
    name: 'Primary Care',
    description: 'Your medical home for preventive care, checkups, and chronic disease management.',
    longDescription: 'We focus on keeping you healthy before you get sick. Our Primary Care physicians coordinate all your healthcare needs, offering annual physicals, vaccinations, and management of conditions like diabetes and hypertension.',
    image: '/images/specialties/primary.png',
    stats: { specialists: 25, beds: 0 },
    icon: Users,
    head: "Dr. Karen Miller",
    phone: "(212) 555-0130",
    features: ["Annual Physicals", "Vaccinations", "Women's Health", "Geriatrics", "Chronic Management"]
  }
]

export default function DepartmentsPage() {
  const [showBooking, setShowBooking] = useState(false)
  const [selectedSpecialty, setSelectedSpecialty] = useState<string | null>(null)

  const handleBookAppointment = (specialty?: string) => {
    setSelectedSpecialty(specialty || null)
    setShowBooking(true)
  }

  const handleCloseModal = () => {
    setShowBooking(false)
    setTimeout(() => setSelectedSpecialty(null), 300)
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <Header onBookClick={() => handleBookAppointment()} />

      <main>
        {/* 1. Impactful Editorial Hero */}
        {/* 1. Impactful Editorial Hero with Medical Vector */}
        <section className="relative py-32 md:py-48 bg-[#0B1120] text-white overflow-hidden">
          {/* Medical Vector Shape - Abstract Plus/Cross */}
          <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-20 pointer-events-none">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-teal-500 fill-current filter blur-3xl">
              <path d="M80 0 H120 V80 H200 V120 H120 V200 H80 V120 H0 V80 H80 Z" />
            </svg>
          </div>

          {/* Mesh Gradient Background */}
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-900/40 via-transparent to-transparent"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center">

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-bold tracking-widest uppercase mb-8 animate-fade-in-up">
              <Sparkles className="w-4 h-4" />
              <span>World Class Care</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-[0.9] text-white animate-fade-in-up delay-100">
              Centers of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-200 font-serif italic relative">
                Excellence
                {/* Underline Decoration */}
                <svg className="absolute w-full h-3 -bottom-2 left-0 text-teal-500 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </span>
            </h1>

            <div className="max-w-2xl mx-auto animate-fade-in-up delay-200">
              <p className="text-xl text-slate-300 leading-relaxed font-light">
                We have organized our medical expertise into specialized departments, each designed to provide the highest level of personalized care through advanced technology and compassionate service.
              </p>
            </div>
          </div>
        </section>

        {/* 2. Departments - Alternating Editorial Rows */}
        <div className="flex flex-col">
          {departments.map((dept, index) => {
            const Icon = dept.icon
            const isEven = index % 2 === 0
            return (
              <section
                key={index}
                className={`py-24 md:py-32 relative overflow-hidden ${isEven ? 'bg-white' : 'bg-slate-50'}`}
              >
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                  <div className={`flex flex-col md:flex-row items-center gap-16 lg:gap-24 ${!isEven ? 'md:flex-row-reverse' : ''}`}>

                    {/* Visual Side */}
                    <div className="w-full md:w-1/2 relative group">
                      <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                          src={dept.image}
                          alt={dept.name}
                          fill
                          className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/40 to-transparent pointer-events-none" />

                        {/* Floating Badge */}
                        <div className={`absolute bottom-8 ${isEven ? 'left-8' : 'right-8'} bg-white/95 backdrop-blur shadow-xl p-4 rounded-2xl max-w-[200px] transform transition-transform duration-500 group-hover:-translate-y-2`}>
                          <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 bg-primary/10 rounded-full text-primary">
                              <Icon className="w-5 h-5" />
                            </div>
                            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Stats</span>
                          </div>
                          <div className="space-y-1">
                            <div className="flex justify-between text-sm">
                              <span className="text-slate-500">Doctors</span>
                              <span className="font-bold text-slate-900">{dept.stats.specialists}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-slate-500">Beds</span>
                              <span className="font-bold text-slate-900">{dept.stats.beds || '-'}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Decorative Elements */}
                      <div className={`absolute -z-10 top-1/2 -translate-y-1/2 ${isEven ? '-left-12' : '-right-12'} w-24 h-24 bg-pattern-dots opacity-20`} />
                    </div>

                    {/* Content Side */}
                    <div className="w-full md:w-1/2">
                      <div className="flex items-baseline gap-4 mb-4">
                        <span className="text-6xl text-slate-300 font-bold select-none">
                          0{index + 1}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                          {dept.name}
                        </h2>
                      </div>

                      <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                        {dept.longDescription}
                      </p>

                      {/* Key Features Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                        {dept.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-3 group/item">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover/item:bg-primary transition-colors" />
                            <span className="text-sm font-medium text-slate-700">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Footer: Head of Dept + CTA */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-8 border-t border-slate-200/60">
                        <div>
                          <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mb-1">Department Head</p>
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center overflow-hidden">
                              <Icon className="w-4 h-4 text-slate-500" />
                            </div>
                            <div>
                              <p className="font-bold text-slate-900 text-sm">{dept.head}</p>
                              <p className="text-xs text-slate-500">{dept.phone}</p>
                            </div>
                          </div>
                        </div>
                        <Button onClick={() => handleBookAppointment(dept.name)} className="rounded-full h-12 px-8 bg-slate-900 text-white hover:bg-primary hover:text-white transition-all shadow-lg hover:shadow-primary/25">
                          Book Appointment
                        </Button>
                      </div>
                    </div>

                  </div>
                </div>
              </section>
            )
          })}
        </div>


        {
          showBooking && (
            <div className="fixed inset-0 bg-background/80 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fade-in-up">
              <div className="bg-card/90 backdrop-blur-xl rounded-[2rem] shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/20 ring-1 ring-black/5">
                <div className="sticky top-0 bg-card/95 backdrop-blur border-b border-border/40 p-6 flex items-center justify-between z-10">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground tracking-tight">Schedule Your Visit</h2>
                    <p className="text-sm text-muted-foreground mt-1">Complete these steps to book your appointment</p>
                  </div>
                  <button
                    onClick={handleCloseModal}
                    className="text-muted-foreground hover:text-foreground hover:bg-muted/50 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 font-bold"
                  >
                    ✕
                  </button>
                </div>
                <div className="p-6 sm:p-8">
                  <AppointmentBooking
                    preselectedSpecialty={selectedSpecialty || undefined}
                  />
                </div>
              </div>
            </div>
          )
        }
      </main >

      <Footer />
    </div >
  )

}
