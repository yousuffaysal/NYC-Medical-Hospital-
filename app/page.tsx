'use client'

import { useState } from 'react'
import HeroSection from '@/components/hospital/hero-section'
import TrustIndicators from '@/components/hospital/trust-indicators'
import ServicesSection from '@/components/hospital/services-section'
import DoctorsSection from '@/components/hospital/doctors-section'
import WhyChooseUs from '@/components/hospital/why-choose-us'
import AppointmentBooking from '@/components/hospital/appointment-booking'
import Testimonials from '@/components/hospital/testimonials'
import HealthTech from '@/components/hospital/health-tech'
import EmergencyCTA from '@/components/hospital/emergency-cta'
import Header from '@/components/hospital/header'
import Footer from '@/components/hospital/footer'
import SpecialtiesGrid from '@/components/hospital/specialties-grid'
import AppointmentSectionComponent from '@/components/hospital/appointment-section'
import AiFeatureSection from '@/components/hospital/ai-feature-section'
import NewsSectionComponent from '@/components/hospital/news-section'
import ContactSectionComponent from '@/components/hospital/contact-section'
import ScrollAnimation from '@/components/ui/scroll-animation'

export default function Home() {
  const [showAppointmentModal, setShowAppointmentModal] = useState(false)
  const [selectedDoctor, setSelectedDoctor] = useState<{ name: string; specialty: string } | null>(null)

  const handleBookAppointment = (doctorName?: string, specialty?: string) => {
    if (doctorName && specialty) {
      setSelectedDoctor({ name: doctorName, specialty })
    } else {
      setSelectedDoctor(null)
    }
    setShowAppointmentModal(true)
  }

  const handleCloseModal = () => {
    setShowAppointmentModal(false)
    setTimeout(() => setSelectedDoctor(null), 300) // Reset after animation
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header onBookClick={() => handleBookAppointment()} />
      <HeroSection onCTAClick={() => handleBookAppointment()} />

      <ScrollAnimation>
        <TrustIndicators />
      </ScrollAnimation>

      <ScrollAnimation>
        <WhyChooseUs />
      </ScrollAnimation>

      <ScrollAnimation>
        <ServicesSection />
      </ScrollAnimation>

      <ScrollAnimation>
        <HealthTech />
      </ScrollAnimation>

      <ScrollAnimation>
        <SpecialtiesGrid />
      </ScrollAnimation>

      <ScrollAnimation>
        <AppointmentSectionComponent onBookClick={() => handleBookAppointment()} />
      </ScrollAnimation>

      <ScrollAnimation>
        <AiFeatureSection />
      </ScrollAnimation>

      <ScrollAnimation>
        <DoctorsSection onBookClick={handleBookAppointment} />
      </ScrollAnimation>

      <ScrollAnimation>
        <NewsSectionComponent />
      </ScrollAnimation>

      <ScrollAnimation>
        <ContactSectionComponent />
      </ScrollAnimation>

      <ScrollAnimation>
        <EmergencyCTA />
      </ScrollAnimation>

      {showAppointmentModal && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fade-in-up">
          <div className="bg-card/90 backdrop-blur-xl rounded-[2rem] shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/20 ring-1 ring-black/5">
            {/* Header */}
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
            {/* Content */}
            <div className="p-6 sm:p-8">
              <AppointmentBooking
                preselectedDoctor={selectedDoctor?.name}
                preselectedSpecialty={selectedDoctor?.specialty}
              />
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
