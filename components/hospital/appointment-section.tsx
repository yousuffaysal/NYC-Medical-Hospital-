'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { Calendar, Clock, User, Mail, Stethoscope } from 'lucide-react'

interface AppointmentSectionProps {
  onBookClick?: () => void
}

export default function AppointmentSection({ onBookClick }: AppointmentSectionProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    date: '',
    time: '',
    doctor: '',
  })
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <section ref={ref} className="py-24 md:py-32 relative bg-[#0B0F19] overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Form */}
          <div className={`transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="mb-10">
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Easy Scheduling</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Book Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-400">Appointment</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed max-w-lg">
                Skip the waiting room. Schedule your visit online instantly with our streamlined booking system.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl">
              {/* Form Fields with Icons */}
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300 ml-1">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <Input
                        placeholder="John Doe"
                        value={formData.fullName}
                        onChange={(e) => handleChange('fullName', e.target.value)}
                        className="pl-10 h-12 bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-primary/50 transition-colors rounded-xl"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300 ml-1">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <Input
                        placeholder="hello@example.com"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        className="pl-10 h-12 bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-primary/50 transition-colors rounded-xl"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300 ml-1">Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <Input
                        type="date"
                        value={formData.date}
                        onChange={(e) => handleChange('date', e.target.value)}
                        className="pl-10 h-12 bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-primary/50 transition-colors rounded-xl [color-scheme:dark]"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300 ml-1">Time</label>
                    <div className="relative">
                      <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 z-10" />
                      <Select value={formData.time} onValueChange={(val) => handleChange('time', val)}>
                        <SelectTrigger className="pl-10 h-12 bg-white/5 border-white/10 text-white focus:border-primary/50 transition-colors rounded-xl">
                          <SelectValue placeholder="Select Time" />
                        </SelectTrigger>
                        <SelectContent>
                          {['09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM'].map(time => (
                            <SelectItem key={time} value={time}>{time}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300 ml-1">Select Doctor</label>
                  <div className="relative">
                    <Stethoscope className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 z-10" />
                    <Select value={formData.doctor} onValueChange={(val) => handleChange('doctor', val)}>
                      <SelectTrigger className="pl-10 h-12 bg-white/5 border-white/10 text-white focus:border-primary/50 transition-colors rounded-xl">
                        <SelectValue placeholder="Choose a specialist" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Dr. Sarah Mitchell">Dr. Sarah Mitchell (Cardiology)</SelectItem>
                        <SelectItem value="Dr. James Chen">Dr. James Chen (Neurology)</SelectItem>
                        <SelectItem value="Dr. Maria Rodriguez">Dr. Maria Rodriguez (Pediatrics)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button
                  onClick={onBookClick}
                  className="w-full h-14 bg-gradient-to-r from-primary to-teal-500 hover:from-primary/90 hover:to-teal-500/90 text-white rounded-xl text-lg font-bold shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] mt-2"
                >
                  Confirm Appointment
                </Button>
              </div>
            </div>
          </div>

          {/* Right: 3D Illustration */}
          <div className={`relative hidden lg:block transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative animate-float">
              <Image
                src="/images/booking-illustration.png"
                alt="Modern Scheduling Interface"
                width={800}
                height={800}
                className="w-full h-auto object-contain drop-shadow-2xl"
                priority
              />
              {/* Decorative Elements */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/5 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
