import { Activity } from 'lucide-react'
import Header from '@/components/hospital/header'
import Footer from '@/components/hospital/footer'
import NewsSection from '@/components/hospital/news-section'

export default function NewsPage() {
    return (
        <div className="bg-white min-h-screen font-sans">
            <Header />

            <main>
                {/* Hero Section */}
                <section className="relative py-32 md:py-48 bg-[#0B1120] text-white overflow-hidden">
                    {/* Medical Vector - Pulse/Signal */}
                    <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-[800px] h-[400px] opacity-20 pointer-events-none">
                        <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-teal-500 fill-none stroke-current stroke-2 filter blur-xl">
                            <path d="M0 100 H50 L80 100 L100 20 L120 180 L140 100 H400" />
                        </svg>
                    </div>

                    {/* Gradient Mesh */}
                    <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-900/40 via-transparent to-transparent"></div>

                    <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-bold tracking-widest uppercase mb-8 animate-fade-in-up">
                            <Activity className="w-4 h-4" />
                            <span>Medical Updates</span>
                        </div>

                        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-[0.9] text-white animate-fade-in-up delay-100">
                            Latest News & <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-200 font-serif italic relative">
                                Insights
                                {/* Underline Decoration */}
                                <svg className="absolute w-full h-3 -bottom-2 left-0 text-teal-500 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                                </svg>
                            </span>
                        </h1>

                        <div className="max-w-2xl mx-auto animate-fade-in-up delay-200">
                            <p className="text-xl text-slate-300 leading-relaxed font-light">
                                Stay informed with the latest breakthroughs, community events, and medical achievements from our world-class team.
                            </p>
                        </div>
                    </div>
                </section>

                <div className="pt-0">
                    <NewsSection />
                </div>
            </main>

            <Footer />
        </div>
    )
}
