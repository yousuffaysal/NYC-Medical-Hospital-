'use client'

import { AdminHeader, GlassCard } from '@/components/admin/ui-components'
import { Construction, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface AdminModulePlaceholderProps {
    title: string
    description: string
    moduleName: string
}

export default function AdminModulePlaceholder({ title, description, moduleName }: AdminModulePlaceholderProps) {
    return (
        <div className="space-y-6 animate-fade-in-up">
            <AdminHeader
                title={title}
                description={description}
                actionLabel={`Add ${moduleName}`}
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <GlassCard className="lg:col-span-2 min-h-[400px] flex flex-col items-center justify-center text-center space-y-6 border-dashed border-slate-700 bg-slate-900/30">
                    <div className="w-20 h-20 rounded-full bg-slate-800 flex items-center justify-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <Construction className="w-10 h-10 text-slate-500 group-hover:text-teal-400 transition-colors" />
                    </div>

                    <div className="max-w-md mx-auto space-y-2">
                        <h3 className="text-2xl font-bold text-white">Module Under Construction</h3>
                        <p className="text-slate-400">
                            The <span className="text-teal-400 font-medium">{title}</span> module is currently being built.
                            Check back effectively for updates or explore available modules.
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <Button variant="outline" className="border-slate-700 hover:bg-slate-800 text-slate-300">
                            View Documentation
                        </Button>
                        <Link href="/admin">
                            <Button className="bg-slate-800 hover:bg-slate-700 text-white">
                                Back to Dashboard <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </Link>
                    </div>
                </GlassCard>
            </div>
        </div>
    )
}
