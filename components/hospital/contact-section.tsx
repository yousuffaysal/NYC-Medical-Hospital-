'use client'

import { Phone, MapPin, Mail, Clock } from 'lucide-react'

const contactInfo = [
  {
    title: 'Emergency',
    subtitle: '24/7 Available',
    icon: Phone,
    details: '911 or (212) 555-0100',
    colorClass: 'bg-rose-50 text-rose-500 group-hover:bg-rose-500 group-hover:text-white'
  },
  {
    title: 'Location',
    subtitle: 'Visit Us',
    icon: MapPin,
    details: '123 Medical Plaza, New York, NY 10001',
    colorClass: 'bg-teal-50 text-teal-600 group-hover:bg-teal-600 group-hover:text-white'
  },
  {
    title: 'Email',
    subtitle: 'Get in Touch',
    icon: Mail,
    details: 'contact@nycmedical.com',
    colorClass: 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white'
  },
  {
    title: 'Working Hours',
    subtitle: 'Mon - Fri',
    icon: Clock,
    details: '8:00 AM - 6:00 PM',
    colorClass: 'bg-amber-50 text-amber-600 group-hover:bg-amber-600 group-hover:text-white'
  },
]

export default function ContactSection() {
  return (
    <section className="py-24 md:py-32 bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-bold text-teal-500 mb-3 uppercase tracking-widest">Get in Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact
          </h2>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 hover:shadow-xl hover:shadow-teal-900/10 transition-all duration-300 text-center hover:-translate-y-1"
              >
                <div className={`w-16 h-16 rounded-2xl ${item.colorClass} flex items-center justify-center mx-auto mb-6 transition-all duration-300`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm font-medium text-slate-400 mb-4 uppercase tracking-wide">
                  {item.subtitle}
                </p>
                <p className="text-base font-semibold text-teal-600">
                  {item.details}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
