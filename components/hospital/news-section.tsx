
'use client'

import { ArrowRight, Calendar, Clock, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const newsArticles = [
  {
    id: 1,
    title: 'New Advanced MRI Technology Arrives at NYC Medical',
    date: 'Jan 28, 2026',
    category: 'Technology',
    image: '/images/news/mri.png',
    excerpt: 'Revolutionizing diagnostic accuracy with our new state-of-the-art MRI suite, offering faster scans and higher resolution for better patient outcomes.',
    featured: true
  },
  {
    id: 2,
    title: 'Cardiology Team Wins National Excellence Award',
    date: 'Jan 25, 2026',
    category: 'Awards',
    image: '/images/news/cardio-award.png',
    excerpt: 'Recognition for outstanding contributions to cardiac care.',
    featured: false
  },
  {
    id: 3,
    title: 'Free Community Health Screening Events',
    date: 'Jan 22, 2026',
    category: 'Events',
    image: '/images/news/screening.png',
    featured: false
  },
  {
    id: 4,
    title: 'Breakthrough in Neurological Treatment Research',
    date: 'Jan 20, 2026',
    category: 'Research',
    image: '/images/news/neuro-research.png',
    featured: false
  }
]

export default function NewsSection() {
  return (
    <section className="py-24 md:py-32 bg-[#FDFCF8] relative overflow-hidden">
      {/* Atmospherics */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-rose-100/30 rounded-full blur-[120px] mix-blend-multiply opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-100/30 rounded-full blur-[100px] mix-blend-multiply opacity-60 pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-teal-600 uppercase mb-3">Latest Updates</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-slate-900 leading-tight">
              News & <span className="italic text-slate-500">Insights</span>
            </h3>
          </div>
          <Button variant="outline" className="hidden md:flex rounded-full px-6 border-slate-200 hover:bg-slate-100 hover:text-slate-900 transition-colors">
            View All Posts <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* Featured Article (Left - spans 7 cols) */}
          <Link href={`/news/${newsArticles[0].id}`} className="lg:col-span-7 group relative block h-[500px] md:h-[600px] rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-200 transition-all duration-500 hover:shadow-teal-100/50">
            {/* Image with Parallax Scale Effect */}
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src={newsArticles[0].image}
                alt={newsArticles[0].title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
            </div>

            {/* Overlay Gradient (Subtle) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

            {/* Floating Content Box */}
            <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-auto md:max-w-xl bg-white/95 backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-lg border border-white/50 transition-transform duration-500 group-hover:-translate-y-2">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-teal-50 text-teal-700 text-xs font-bold uppercase tracking-wider rounded-full border border-teal-100">
                  {newsArticles[0].category}
                </span>
                <span className="text-slate-400 text-xs font-semibold flex items-center gap-1">
                  <Clock className="w-3 h-3" /> 5 min read
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-serif font-medium text-slate-900 mb-4 leading-tight group-hover:text-teal-700 transition-colors">
                {newsArticles[0].title}
              </h3>
              <p className="text-slate-500 text-base leading-relaxed line-clamp-2 mb-6">
                {newsArticles[0].excerpt}
              </p>
              <div className="flex items-center text-sm font-bold text-slate-900 group/link">
                Read Full Story
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/link:translate-x-1" />
              </div>
            </div>
          </Link>

          {/* Side Stack (Right - spans 5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {newsArticles.slice(1).map((article, index) => (
              <Link key={article.id} href={`/news/${article.id}`} className="group flex items-center gap-6 p-4 rounded-2xl bg-white hover:bg-white border border-transparent hover:border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
                {/* Thumbnail */}
                <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-xl overflow-hidden flex-shrink-0 shadow-inner">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0 pr-2">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{article.category}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300" />
                    <span className="text-[10px] text-slate-400 font-medium">{article.date}</span>
                  </div>
                  <h4 className="text-lg font-serif font-medium text-slate-900 leading-snug mb-2 group-hover:text-teal-600 transition-colors line-clamp-2">
                    {article.title}
                  </h4>
                  <div className="flex items-center text-xs font-semibold text-slate-400 group-hover:text-teal-500 transition-colors">
                    Read More <ArrowUpRight className="w-3 h-3 ml-1" />
                  </div>
                </div>
              </Link>
            ))}

            {/* Mobile View All Button */}
            <div className="mt-4 md:hidden">
              <Button className="w-full bg-slate-900 text-white rounded-xl py-6">
                View All Stories
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
