'use client'

import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const testimonials = [
  {
    name: 'Maria Rodriguez',
    title: 'Recovery from Heart Surgery',
    content:
      'The entire team at NYC Medical Center provided exceptional care. From the surgeons to the nurses, everyone was compassionate and professional. I was amazed at how quickly I recovered!',
    rating: 5
  },
  {
    name: 'James Wilson',
    title: 'Emergency Care Experience',
    content:
      'I came in with severe chest pain and within minutes I was being treated by amazing doctors. The emergency response was incredible. I\'m alive because of their expertise.',
    rating: 5
  },
  {
    name: 'Sarah Chen',
    title: 'Orthopedic Treatment',
    content:
      'Dr. Lisa Rodriguez performed my knee surgery with precision. The follow-up care and physical therapy guidance were outstanding. Highly recommend!',
    rating: 5
  },
  {
    name: 'Robert Thompson',
    title: 'Ongoing Care',
    content:
      'As someone with chronic health issues, having access to such skilled specialists has been life-changing. The patient portal makes managing appointments so easy.',
    rating: 5
  },
  {
    name: 'Diana Martinez',
    title: 'Pediatric Care',
    content:
      'Dr. Thompson and her team made my children feel comfortable and safe. As a parent, that peace of mind is priceless. Wonderful doctors!',
    rating: 5
  }
]

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null)
  const [current, setCurrent] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isVisible])

  const next = () => setCurrent(prev => (prev + 1) % testimonials.length)
  const prev = () => setCurrent(prev => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section ref={ref} className="py-20 md:py-32 bg-gradient-subtle relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-100/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-accent mb-3 uppercase tracking-wider">Patient Stories</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Words from Those We've Served
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
            Real experiences from patients whose lives were transformed by our compassionate, expert care.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative bg-white rounded-3xl p-8 md:p-12 border border-border/40 shadow-xl backdrop-blur-sm">
          {/* Testimonial Content */}
          <div className="min-h-64 flex flex-col justify-between">
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(testimonials[current].rating)].map((_, i) => (
                <span key={i} className="text-2xl text-accent">
                  ★
                </span>
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-xl md:text-2xl font-bold text-foreground italic mb-6 text-balance">
              "{testimonials[current].content}"
            </blockquote>

            {/* Author */}
            <div>
              <p className="font-bold text-foreground text-lg">{testimonials[current].name}</p>
              <p className="text-sm text-muted-foreground">{testimonials[current].title}</p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2 mt-8 pt-8 border-t border-border">
            <Button
              onClick={prev}
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-full border-2 border-primary/20 hover:border-primary bg-transparent"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <div className="flex-1 flex gap-1 justify-center">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${i === current
                    ? 'w-8 bg-primary'
                    : 'w-2 bg-muted hover:bg-muted-foreground'
                    }`}
                />
              ))}
            </div>
            <Button
              onClick={next}
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-full border-2 border-primary/20 hover:border-primary bg-transparent"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mt-12 text-center">
          <div>
            <p className="text-3xl font-bold text-primary mb-1">98%</p>
            <p className="text-sm text-muted-foreground">Satisfaction</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-secondary mb-1">50K+</p>
            <p className="text-sm text-muted-foreground">Happy Patients</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-accent mb-1">4.9★</p>
            <p className="text-sm text-muted-foreground">Average Rating</p>
          </div>
        </div>
      </div>
    </section>
  )
}
