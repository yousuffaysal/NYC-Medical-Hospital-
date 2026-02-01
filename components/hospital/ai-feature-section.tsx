'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Bot, Sparkles, Activity, ShieldCheck, ArrowRight, BrainCircuit } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function AiFeatureSection() {
    const containerRef = useRef<HTMLDivElement>(null)
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
        if (containerRef.current) observer.observe(containerRef.current)
        return () => observer.disconnect()
    }, [])

    const features = [
        {
            icon: <Activity className="w-6 h-6 text-teal-400" />,
            title: "Instant Triage",
            description: "Get immediate analysis of your symptoms before you even step foot in the hospital."
        },
        {
            icon: <ShieldCheck className="w-6 h-6 text-teal-400" />,
            title: "Private & Secure",
            description: "Your health data is encrypted and handled with the highest standards of medical privacy."
        },
        {
            icon: <BrainCircuit className="w-6 h-6 text-teal-400" />,
            title: "Smart Navigation",
            description: "Effortlessly find the right specialist, department, or facility for your specific needs."
        }
    ]

    return (
        <section ref={containerRef} className="py-24 relative overflow-hidden bg-slate-950 text-white">
            {/* Background Elements */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] animate-pulse delay-700" />

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <div className={`space-y-8 transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-semibold">
                            <Sparkles className="w-4 h-4" />
                            <span>Foxmen Studio AI Technology</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            Your Personal <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
                                AI Health Companion
                            </span>
                        </h2>

                        <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
                            Experience the future of healthcare with our advanced AI assistant. Available 24/7 to answer your questions, guide your care, and provide instant medical support.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6 pt-4">
                            {features.map((feature, idx) => (
                                <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-teal-500/50 transition-colors">
                                    <div className="mb-3 w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center border border-teal-500/20">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-lg font-semibold mb-1 text-white">{feature.title}</h3>
                                    <p className="text-sm text-slate-400">{feature.description}</p>
                                </div>
                            ))}
                        </div>

                        <div className="pt-6">
                            <Button
                                onClick={() => document.getElementById('ai-chatbot-toggle')?.click()}
                                className="h-14 px-8 bg-teal-600 hover:bg-teal-700 text-white rounded-full text-lg font-bold shadow-lg shadow-teal-500/25 flex items-center gap-2 transition-all hover:scale-105"
                            >
                                <Bot className="w-5 h-5" />
                                Chat with AI Assistant
                                <ArrowRight className="w-5 h-5 ml-1" />
                            </Button>
                            <p className="mt-4 text-xs text-slate-500">
                                Powered by advanced LLMs. Always consult a real doctor for emergencies.
                            </p>
                        </div>
                    </div>

                    {/* Right Visual */}
                    <div className={`relative transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="relative z-10 bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-white/10 p-6 shadow-2xl">
                            {/* Mock Chat Interface Visual */}
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400 border border-teal-500/30">
                                        <Bot className="w-4 h-4" />
                                    </div>
                                    <div className="bg-white/10 p-3 rounded-2xl rounded-tl-none text-sm text-slate-200">
                                        Hello! I noticed you're looking into cardiology services. How can I help you today?
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 justify-end">
                                    <div className="bg-teal-600 p-3 rounded-2xl rounded-tr-none text-sm text-white">
                                        What are the visiting hours for the heart center?
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center">
                                        <div className="w-4 h-4 bg-slate-400 rounded-full" />
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400 border border-teal-500/30">
                                        <Bot className="w-4 h-4" />
                                    </div>
                                    <div className="bg-white/10 p-3 rounded-2xl rounded-tl-none text-sm text-slate-200">
                                        <p className="mb-2">The Cardiology Department visiting hours are:</p>
                                        <ul className="list-disc list-inside space-y-1 text-slate-300">
                                            <li>Mon-Fri: 10:00 AM - 8:00 PM</li>
                                            <li>Weekends: 11:00 AM - 6:00 PM</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                                className="absolute -top-6 -right-6 px-4 py-2 bg-slate-800 rounded-xl border border-teal-500/30 shadow-xl flex items-center gap-2"
                            >
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-xs font-bold text-teal-400">System Online</span>
                            </motion.div>
                        </div>

                        {/* Glow effect behind visual */}
                        <div className="absolute inset-0 bg-teal-500/20 blur-3xl -z-10 rounded-full" />
                    </div>

                </div>
            </div>
        </section>
    )
}
