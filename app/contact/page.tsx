'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/hospital/header'
import Footer from '@/components/hospital/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Phone, MapPin, Mail, Clock, Calendar, User, ArrowRight } from 'lucide-react'
import { newsArticles } from '@/components/hospital/news-section'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <Header onBookClick={() => { }} />

      {/* 1. Hero Section - Redesigned */}
      <section className="relative py-32 md:py-48 bg-[#0B1120] text-white overflow-hidden">
        {/* Abstract Location Vector */}
        <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-20 pointer-events-none">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-teal-500 fill-current filter blur-3xl">
            <circle cx="100" cy="100" r="40" />
            <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="20" fill="none" opacity="0.5" />
          </svg>
        </div>

        {/* Mesh Gradient Background */}
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-900/40 via-transparent to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center">

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-bold tracking-widest uppercase mb-8 animate-fade-in-up">
            <MapPin className="w-4 h-4" />
            <span>24/7 Support</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-[0.9] text-white animate-fade-in-up delay-100">
            Get in <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-200 font-serif italic relative">
              Touch
              {/* Underline Decoration */}
              <svg className="absolute w-full h-3 -bottom-2 left-0 text-teal-500 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </span>
          </h1>

          <div className="max-w-2xl mx-auto animate-fade-in-up delay-200">
            <p className="text-xl text-slate-300 leading-relaxed font-light">
              We're here to help. Reach out to us for appointments, inquiries, or emergency services.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Map Section */}
      <section className="h-[400px] md:h-[500px] w-full relative grayscale hover:grayscale-0 transition-all duration-700">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1647932049581!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          className="w-full h-full"
        />
      </section>

      {/* 3. Contact Form & Grid Layout */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Get in Touch</h4>
            <h2 className="text-4xl font-bold text-slate-900">Contact</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column: Form (Dark Blue) */}
            <div className="bg-slate-900 text-white rounded-lg p-8 md:p-12 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    placeholder="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400 h-12"
                  />
                  <Input
                    placeholder="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400 h-12"
                  />
                </div>
                <Input
                  placeholder="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400 h-12"
                />
                <Textarea
                  placeholder="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400 min-h-[150px] resize-none"
                />
                <Button type="submit" className="w-full bg-blue-200 hover:bg-white text-slate-900 font-bold h-12 uppercase tracking-wide transition-colors">
                  Submit
                </Button>
              </form>
            </div>

            {/* Right Column: 2x2 Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Emergency */}
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-12 h-12 rounded-xl bg-rose-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-rose-500" />
                </div>
                <h4 className="font-bold uppercase text-slate-900 mb-2 text-sm tracking-wide">Emergency</h4>
                <p className="text-slate-600 text-sm font-medium">(237) 681-812-444</p>
                <p className="text-slate-600 text-sm font-medium">(237) 666-331-894</p>
              </div>

              {/* Location */}
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6 text-teal-600" />
                </div>
                <h4 className="font-bold uppercase text-slate-900 mb-2 text-sm tracking-wide">Location</h4>
                <p className="text-slate-600 text-sm">0123 Some place</p>
                <p className="text-slate-600 text-sm">9876 Some country</p>
              </div>

              {/* Email */}
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-bold uppercase text-slate-900 mb-2 text-sm tracking-wide">Email</h4>
                <p className="text-slate-600 text-sm">fildineeesoe@gmil.com</p>
                <p className="text-slate-600 text-sm">myebstudios@gmail.com</p>
              </div>

              {/* Working Hours */}
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Clock className="w-6 h-6 text-amber-600" />
                </div>
                <h4 className="font-bold uppercase text-slate-900 mb-2 text-sm tracking-wide">Working Hours</h4>
                <p className="text-slate-600 text-sm">Mon-Sat 09:00-20:00</p>
                <p className="text-rose-500 text-sm font-semibold mt-1">Sunday Emergency Only</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. News Section (Generic Grid) */}
      <section className="py-20 md:py-28 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Better Information, Better Health</h4>
            <h2 className="text-4xl font-bold text-slate-900">News</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-x-8 gap-y-12">
            {newsArticles.slice(0, 4).map((article) => (
              <div key={article.id} className="flex gap-6 items-start group">
                <div className="w-32 h-32 md:w-40 md:h-40 relative shrink-0 overflow-hidden rounded-md bg-slate-100 px-3 py-1">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-3 text-xs text-primary font-bold mb-2">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {article.date}</span>
                    <span className="w-px h-3 bg-slate-300" />
                    <span className="flex items-center gap-1"><User className="w-3 h-3" /> Admin</span>
                  </div>
                  <Link href={`/news/${article.id}`}>
                    <h3 className="text-lg font-bold text-slate-900 hover:text-primary transition-colors leading-snug mb-3">
                      {article.title}
                    </h3>
                  </Link>
                  <div className="flex items-center gap-4 text-xs text-slate-400">
                    <span className="flex items-center gap-1">👁 68</span>
                    <span className="flex items-center gap-1 text-red-400">❤ {article.id * 12 + 45}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Dots (Visual Only) */}
          <div className="flex justify-center gap-2 mt-16">
            <div className="w-3 h-3 rounded-full bg-primary" />
            <div className="w-3 h-3 rounded-full bg-slate-300" />
            <div className="w-3 h-3 rounded-full bg-slate-300" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
