'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/hospital/header'
import Footer from '@/components/hospital/footer'
import { Button } from '@/components/ui/button'
import { Quote, Check, Facebook, Twitter, Linkedin, Phone, MapPin, Mail, Clock, ArrowRight, Calendar, User } from 'lucide-react'
import { newsArticles } from '@/components/hospital/news-section'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <Header onBookClick={() => { }} />

      {/* 1. Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80"
            alt="Medical Team"
            fill
            className="object-cover"
            priority
          />
          {/* Blue/Teal Overlay */}
          <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply" />
        </div>

        <div className="relative z-10 text-center text-white">
          <h5 className="text-lg uppercase tracking-widest mb-2 font-medium opacity-90">Home / About</h5>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">About Us</h1>
        </div>
      </section>

      {/* 2. Welcome Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-white to-slate-50/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Image Collage with Staggered Animation */}
            <div className="relative group perspective-1000">
              <div className="w-full h-[500px] relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 transform group-hover:rotate-y-2 group-hover:scale-[1.02]">
                <Image
                  src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80"
                  alt="Nurse Smiling"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />
              </div>
              {/* Floating Card Overlay */}
              <div className="absolute -bottom-12 -right-8 w-56 h-56 bg-white p-2 rounded-2xl shadow-2xl animate-float hidden md:block">
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80"
                    alt="Doctor"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              {/* Decorative Dot Pattern */}
              <div className="absolute -top-12 -left-12 w-32 h-32 bg-grid-pattern opacity-20 -z-10" />
            </div>

            {/* Right: Content */}
            <div className="animate-reveal delay-200">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6 border border-primary/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Welcome to NYC Medical
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-[1.15] tracking-tight">
                Best Care for Your <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Good Health</span>
              </h2>

              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                We combine advanced medical technology with a compassionate, human-centered approach to provide the best possible outcomes for every patient.
              </p>

              <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                {['Passion for Healing', '5-Star Care', 'All our best', 'Believe in Us', 'Always Caring', 'A Legacy of Excellence'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 group">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <Check className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <span className="font-semibold text-slate-700 group-hover:text-primary transition-colors">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <p className="text-slate-500 italic border-l-4 border-primary/30 pl-4 py-2">
                  "Dedicated to improving the health of our community, one patient at a time."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Testimonial Quote */}
      {/* 3. Testimonial Quote - Emotional Centerpiece */}
      <section className="py-32 bg-slate-900 relative overflow-hidden flex items-center justify-center">
        {/* Atmospheric Background Layers */}
        <div className="absolute inset-0 bg-[#020617]" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/30 via-slate-900/0 to-transparent" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Subtle Moving Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse delay-700" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-[80px] animate-pulse" />

        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          {/* Decorative Quote Mark */}
          <div className="inline-block mb-8 relative">
            <div className="absolute inset-0 blur-2xl bg-primary/30 rounded-full transform scale-150" />
            <Quote className="w-12 h-12 text-primary relative z-10" />
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 leading-tight tracking-tight mb-12 max-w-4xl mx-auto">
            "The level of care I received was <span className="text-primary font-serif italic selection:bg-primary/30">extraordinary</span>.
            The team treated me with a dignity that gave me hope when I needed it most."
          </h2>

          <div className="flex flex-col items-center justify-center gap-4 animate-fade-in-up">
            <div className="w-16 h-16 rounded-full p-1 border border-white/10 relative group cursor-pointer">
              <div className="absolute inset-0 rounded-full border border-primary/50 scale-100 opacity-0 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500" />
              <Image
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80"
                alt="Sarah Jenkins"
                fill
                className="rounded-full object-cover"
              />
            </div>
            <div className="text-center">
              <div className="text-white font-bold text-lg tracking-wide">Sarah Jenkins</div>
              <div className="text-primary/80 text-xs font-bold uppercase tracking-[0.2em] mt-1">Recovered Patient</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Doctors - Premium Portrait Cards */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:16px_16px]" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-reveal">
            <h4 className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-bold uppercase tracking-widest text-xs mb-4 border border-primary/20">
              World Class Team
            </h4>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Specialists</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                name: 'Dr. John Deo',
                role: 'Neurology',
                img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80',
                color: 'from-blue-500 to-indigo-600'
              },
              {
                name: 'Dr. Sarah Smith',
                role: 'Cardiology',
                img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80',
                color: 'from-teal-500 to-emerald-600'
              },
              {
                name: 'Dr. Emily Blunt',
                role: 'Pediatrics',
                img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80',
                color: 'from-rose-500 to-pink-600'
              },
            ].map((doc, i) => (
              <div key={i} className="group relative h-[500px] rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 motion-safe:hover:-translate-y-2 motion-safe:hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)]">
                {/* Background Image */}
                <Image
                  src={doc.img}
                  alt={doc.name}
                  fill
                  className="object-cover transition-transform duration-700 motion-safe:group-hover:scale-105"
                />

                {/* Gradient Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${doc.color} opacity-0 motion-safe:group-hover:opacity-90 transition-opacity duration-500 mix-blend-multiply`} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60 motion-safe:group-hover:opacity-40 transition-opacity duration-500" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                  <div className="transform translate-y-4 motion-safe:group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-2 mb-2 opacity-0 motion-safe:group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      <span className="w-8 h-[2px] bg-white/50" />
                      <span className="text-xs font-bold uppercase tracking-widest">{doc.role}</span>
                    </div>

                    <h3 className="text-3xl font-bold mb-2 leading-tight">{doc.name}</h3>

                    <div className="h-0 motion-safe:group-hover:h-auto overflow-hidden transition-all duration-500">
                      <p className="text-white/80 text-sm mb-6 opacity-0 motion-safe:group-hover:opacity-100 transition-opacity duration-500 delay-200">
                        Dedicated to providing compassionate care with over 10+ years of experience in modern medicine.
                      </p>

                      <div className="flex gap-4 mb-6 opacity-0 motion-safe:group-hover:opacity-100 transition-opacity duration-500 delay-300">
                        {[Facebook, Twitter, Linkedin].map((Icon, idx) => (
                          <a key={idx} href="#" className="p-2 rounded-full bg-white/20 motion-safe:hover:bg-white text-white motion-safe:hover:text-slate-900 transition-colors backdrop-blur-sm">
                            <Icon className="w-4 h-4" />
                          </a>
                        ))}
                      </div>

                      <Link href="/doctors" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest motion-safe:hover:gap-4 transition-all duration-300 opacity-0 motion-safe:group-hover:opacity-100 delay-100">
                        View Profile <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-3 mt-16">
            <div className="w-24 h-1 rounded-full bg-primary" />
            <div className="w-4 h-1 rounded-full bg-slate-300" />
            <div className="w-4 h-1 rounded-full bg-slate-300" />
          </div>
        </div>
      </section>

      {/* 5. News */}
      {/* 5. News - Premium Magazine Grid */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 animate-reveal">
            <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Insights & Updates</h4>
            <h2 className="text-4xl font-bold text-slate-900 tracking-tight">Latest <span className="text-primary">News</span></h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Articles */}
            {newsArticles.map((article) => (
              <div key={article.id} className="group flex flex-col md:flex-row gap-6 cursor-pointer bg-white rounded-2xl p-4 transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-transparent hover:border-slate-100">
                <div className="w-full md:w-48 h-48 relative shrink-0 overflow-hidden rounded-xl">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-900 shadow-sm">
                    {article.category}
                  </div>
                </div>

                <div className="flex-1 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-xs text-slate-500 font-bold mb-3 uppercase tracking-wider">
                    <span className="flex items-center gap-1 text-primary"><Calendar className="w-3 h-3" /> {article.date}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300" />
                    <span className="flex items-center gap-1"><User className="w-3 h-3" /> Medical Team</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 leading-snug mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  <div className="flex items-center gap-4 text-xs text-slate-400 mt-auto pt-4 border-t border-slate-100">
                    <Link href={`/news/${article.id}`} className="flex items-center gap-1 group-hover:text-primary transition-colors">Read More <ArrowRight className="w-3 h-3 ml-1" /></Link>
                    <div className="ml-auto flex gap-3">
                      <span className="flex items-center gap-1 hover:text-red-500 transition-colors"><div className="w-1.5 h-1.5 rounded-full bg-red-500" /> {article.id * 8 + 42} Likes</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-16">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <div className="w-2 h-2 rounded-full bg-slate-200" />
            <div className="w-2 h-2 rounded-full bg-slate-200" />
          </div>
        </div>
      </section>

      {/* 6. Contact Info Strip - Dark & Bold */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px]" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-2">We are here for you</h4>
            <h2 className="text-4xl font-bold text-white tracking-tight">Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Touch</span></h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {/* Item 1 */}
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 text-center rounded-2xl border border-white/5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-14 h-14 mx-auto mb-6 bg-slate-900 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-bold uppercase text-white mb-3 tracking-wider text-sm">Emergency</h4>
              <p className="text-slate-400 text-sm hover:text-white transition-colors cursor-pointer">(212) 555-0100</p>
              <p className="text-slate-400 text-sm hover:text-white transition-colors cursor-pointer">(212) 555-0199</p>
            </div>

            {/* Item 2 - Highlighted */}
            <div className="bg-primary p-8 text-center rounded-2xl shadow-[0_10px_40px_-10px_rgba(13,148,136,0.5)] transform md:-translate-y-4 hover:-translate-y-6 transition-all duration-300 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              <div className="w-14 h-14 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center text-white backdrop-blur-md">
                <MapPin className="w-6 h-6" />
              </div>
              <h4 className="font-bold uppercase text-white mb-3 tracking-wider text-sm">Location</h4>
              <p className="text-white/90 text-sm">0123 Medical Plaza</p>
              <p className="text-white/90 text-sm">New York, NY 10001</p>
            </div>

            {/* Item 3 */}
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 text-center rounded-2xl border border-white/5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-14 h-14 mx-auto mb-6 bg-slate-900 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-bold uppercase text-white mb-3 tracking-wider text-sm">Email</h4>
              <p className="text-slate-400 text-sm hover:text-white transition-colors cursor-pointer">info@nycmed.com</p>
              <p className="text-slate-400 text-sm hover:text-white transition-colors cursor-pointer">support@nycmed.com</p>
            </div>

            {/* Item 4 */}
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 text-center rounded-2xl border border-white/5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-14 h-14 mx-auto mb-6 bg-slate-900 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-bold uppercase text-white mb-3 tracking-wider text-sm">Working Hours</h4>
              <p className="text-slate-400 text-sm">Mon-Sat 09:00-20:00</p>
              <p className="text-primary text-sm font-semibold mt-1">Sunday Emergency</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
