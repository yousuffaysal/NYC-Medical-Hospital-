'use client'

import React, { useEffect, useState, use } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Calendar, Clock, Share2, Facebook, Twitter, Linkedin, User, Copy } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Header from '@/components/hospital/header'
import Footer from '@/components/hospital/footer'

// Mock Data
const newsArticles = [
  {
    id: 1,
    title: 'New Advanced MRI Technology Arrives at NYC Medical',
    date: 'Jan 28, 2026',
    category: 'Technology',
    image: '/images/news/mri.png',
    excerpt: 'Revolutionizing diagnostic accuracy with our new state-of-the-art MRI suite.',
    content: `
      <p class="mb-8 text-xl font-medium leading-relaxed text-slate-800">
        NYC Medical is proud to announce the installation of the latest MAGNETOM Terra 7 Tesla MRI scanner, marking a new era in diagnostic imaging for our region.
      </p>
      <p class="mb-6 leading-relaxed text-slate-600">
        This revolutionary technology offers twice the signal-to-noise ratio of conventional 3T MRI machines, allowing our radiologists to visualize potential health issues with unprecedented clarity. From detecting subtle neurological changes to mapping complex cardiac structures, the 7T MRI provides a level of detail that was previously impossible.
      </p>
      <div class="my-10 p-8 bg-slate-50 border-l-4 border-primary rounded-r-xl">
        <h3 class="text-xl font-bold text-slate-900 mb-2">Key Takeaway</h3>
        <p class="text-slate-600 italic">"The 7T MRI Scanner allows us to see the unseeable, diagnosing conditions years before traditional methods."</p>
      </div>
      <h3 class="text-3xl font-bold text-slate-900 mt-12 mb-6">Why This Matters for Patients</h3>
      <p class="mb-6 leading-relaxed text-slate-600">
        For our patients, this means faster scan times, more accurate diagnoses, and in many cases, the elimination of the need for invasive exploratory procedures. The specific benefits include:
      </p>
      <ul class="list-none space-y-4 mb-8">
        <li class="flex items-start gap-4 mb-4">
            <span class="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">1</span>
            <span class="text-slate-700 text-lg"><strong>Ultra-High Resolution:</strong> Capable of resolving details smaller than a millimeter.</span>
        </li>
        <li class="flex items-start gap-4 mb-4">
            <span class="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">2</span>
            <span class="text-slate-700 text-lg"><strong>Reduced Scan Times:</strong> Faster imaging means less time in the scanner.</span>
        </li>
        <li class="flex items-start gap-4 mb-4">
            <span class="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">3</span>
            <span class="text-slate-700 text-lg"><strong>Early Detection:</strong> Identifying pathologies at their earliest, most treatable stages.</span>
        </li>
      </ul>
      <p class="mb-6 leading-relaxed text-slate-600">
        "This investment reflects our core mission: to bring the absolute best in medical technology to our community," says Dr. Elena Rostova, Chief of Radiology.
      </p>
    `
  },
  {
    id: 2,
    title: 'Cardiology Team Wins National Excellence Award',
    date: 'Jan 25, 2026',
    category: 'Awards',
    image: '/images/news/cardio-award.png',
    excerpt: 'Recognition for outstanding contributions to cardiac care and patient safety standards.',
    content: `
      <p class="mb-8 text-xl font-medium leading-relaxed text-slate-800">
        We are thrilled to announce that the NYC Medical Cardiology Department has been awarded the prestigious "National Heart Excellence Award" for 2025-2026.
      </p>
      <p class="mb-6 leading-relaxed text-slate-600">
        This honor is bestowed upon only top 1% of hospitals nationwide that demonstrate exceptional outcomes in cardiac surgery, interventional cardiology, and preventive heart care. The selection criteria involved rigorous analysis of patient recovery rates, complication metrics, and long-term wellness data.
      </p>
      <h3 class="text-3xl font-bold text-slate-900 mt-12 mb-6">A Commitment to Excellence</h3>
      <p class="mb-6 leading-relaxed text-slate-600">
        The award recognizes our implementation of rapid-response protocols for heart attacks, which has reduced our door-to-balloon time to well below the national average.
      </p>
    `
  },
  {
    id: 3,
    title: 'Free Community Health Screening Events',
    date: 'Jan 22, 2026',
    category: 'Events',
    image: '/images/news/screening.png',
    excerpt: 'Community wellness initiatives and preventive care programs.',
    content: `
      <p class="mb-8 text-xl font-medium leading-relaxed text-slate-800">
        Join us this month for a series of free health screening events designed to help you take control of your well-being.
      </p>
      <p class="mb-6 leading-relaxed text-slate-600">
        Early detection is key to managing chronic conditions like hypertension, diabetes, and high cholesterol. Our "Health First" initiative brings our expert staff directly to the community, offering accessible care without barriers.
      </p>
      <h3 class="text-3xl font-bold text-slate-900 mt-12 mb-6">Event Schedule</h3>
      <div class="bg-white border rounded-xl overflow-hidden shadow-sm">
        <div class="p-4 border-b flex justify-between items-center bg-slate-50">
            <span class="font-bold">Jan 24</span>
            <span class="text-sm text-muted-foreground">Main Lobby</span>
        </div>
        <div class="p-4 px-6 text-slate-700">Blood Pressure & Glucose Checks</div>
        
        <div class="p-4 border-b border-t flex justify-between items-center bg-slate-50">
            <span class="font-bold">Jan 26</span>
            <span class="text-sm text-muted-foreground">Pediatrics Wing</span>
        </div>
        <div class="p-4 px-6 text-slate-700">Vision & Hearing Screening</div>
      </div>
    `
  },
  {
    id: 4,
    title: 'Breakthrough in Neurological Treatment Research',
    date: 'Jan 20, 2026',
    category: 'Research',
    image: '/images/news/neuro-research.png',
    excerpt: 'New therapeutic approaches showing promising results.',
    content: `
      <p class="mb-8 text-xl font-medium leading-relaxed text-slate-800">
        Researchers at NYC Medical Research Institute have published groundbreaking findings in the Journal of Neurology regarding a new non-invasive stimulation therapy.
      </p>
      <p class="mb-6 leading-relaxed text-slate-600">
        The study focuses on enhancing neural plasticity in post-stroke recovery patients. Early trials have shown a 40% improvement in motor function recovery speeds compared to traditional physical therapy alone.
      </p>
    `
  }
]

export default function ArticlePage({ params }: { params: Promise<{ id: string }> }) {
  // Use React.use() to unwrap params in Next.js 15+ client components
  // OR just handle it as a prop that might be a promise depending on next version, 
  // but better to just unwrap it if it is a promise.
  // Actually, in 'use client', params is passed as a value in older versions, but in 15 it's a promise.
  // To be safe and compatible with 15 (which is implied by "params is a promise" behavior), 
  // we should use the new `use` hook or just `await` it in a server component. 
  // BUT this file is marked 'use client' at the top.
  // In Client Components, params is NOT a promise in Next 14, but IS in Next 15.
  // We can use `use(params)` if React 19/Next 15.

  const { id } = React.use(params)
  const article = newsArticles.find(a => String(a.id) === id)
  const [scrolled, setScrolled] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = winScroll / height
      setScrolled(scrolled)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!article) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Article Not Found</h1>
        <p className="text-muted-foreground mb-8">The article you are looking for does not exist.</p>
        <Link href="/">
          <Button>Return Home</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="bg-white min-h-screen selection:bg-primary/20">
      {/* Scroll Progress */}
      <div className="fixed top-0 left-0 h-1.5 bg-gradient-to-r from-primary to-accent z-50 transition-all duration-300 transform origin-left" style={{ transform: `scaleX(${scrolled})` }} />

      <Header />

      {/* Hero Section */}
      <div className="relative w-full h-[65vh] lg:h-[75vh] min-h-[500px] overflow-hidden group">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-[20s] ease-linear scale-100 group-hover:scale-110"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />

        <div className="absolute bottom-0 w-full">
          <div className="w-full mx-auto px-6 md:px-12 lg:px-24 py-12 md:py-24 text-white">
            <Link href="/#news" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors group/back">
              <div className="p-2 rounded-full bg-white/10 group-hover/back:bg-white/20 transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </div>
              <span className="font-semibold tracking-wide">Back to News</span>
            </Link>

            <div className="flex flex-wrap items-center gap-4 text-sm font-bold tracking-widest uppercase mb-6">
              <span className="bg-primary px-4 py-1.5 rounded-full text-white shadow-lg shadow-primary/20">{article.category}</span>
              <span className="flex items-center gap-2 text-primary-200"><Calendar className="w-4 h-4" /> {article.date}</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] mb-8 text-balance max-w-6xl">
              {article.title}
            </h1>

            <div className="flex items-center gap-8 text-white/90 text-base border-t border-white/20 pt-8 max-w-2xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center font-bold text-white border-2 border-white/20">
                  <User className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold leading-none">Editorial Team</span>
                  <span className="text-xs text-white/60 mt-1">Medical Review Board</span>
                </div>
              </div>
              <div className="h-8 w-px bg-white/20" />
              <span className="flex items-center gap-2 font-medium"><Clock className="w-5 h-5" /> 5 min read</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <main className="max-w-4xl mx-auto px-6 py-16 lg:py-24 relative -mt-20 z-10">
        <div className="bg-white p-8 md:p-16 rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100">

          {/* Article Proportional styling */}
          <div className="prose prose-lg md:prose-xl prose-slate max-w-none 
                prose-headings:font-bold prose-headings:text-slate-900 
                prose-p:text-slate-600 prose-p:leading-8
                prose-li:text-slate-600
                first-letter:text-6xl first-letter:font-serif first-letter:font-bold first-letter:text-slate-900 first-letter:float-left first-letter:mr-4 first-letter:mt-2
                ">
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </div>

          {/* Sharing & Tags */}
          <div className="mt-16 pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Share Article</span>
              <div className="flex gap-3">
                <Button variant="outline" size="icon" className="rounded-full w-12 h-12 bg-white border border-slate-200 text-slate-600 hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] transition-all"><Facebook className="w-5 h-5" /></Button>
                <Button variant="outline" size="icon" className="rounded-full w-12 h-12 bg-white border border-slate-200 text-slate-600 hover:bg-[#1DA1F2] hover:text-white hover:border-[#1DA1F2] transition-all"><Twitter className="w-5 h-5" /></Button>
                <Button variant="outline" size="icon" className="rounded-full w-12 h-12 bg-white border border-slate-200 text-slate-600 hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-all"><Linkedin className="w-5 h-5" /></Button>
                <Button variant="outline" size="icon" className="rounded-full w-12 h-12 bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-all"><Copy className="w-5 h-5" /></Button>
              </div>
            </div>
            <div className="flex flex-col gap-2 md:items-end">
              <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Medical Disclaimer</span>
              <p className="text-xs text-slate-400 max-w-xs text-center md:text-right">
                Information presented here is for educational purposes only and not a substitute for professional medical advice.
              </p>
            </div>
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 p-10 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">Subscribe to our Medical Journal</h3>
            <p className="text-slate-300 mb-8 max-w-xl mx-auto text-lg">Get the latest research breakthroughs and health tips delivered directly to your inbox.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input type="email" placeholder="email@address.com" className="h-14 px-6 rounded-full border border-white/10 bg-white/10 text-white placeholder:text-white/40 flex-1 outline-none focus:ring-2 focus:ring-primary focus:bg-white/20 transition-all" />
              <Button className="h-14 px-8 rounded-full bg-primary hover:bg-primary/90 text-lg font-semibold shadow-lg shadow-primary/30">Subscribe</Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
