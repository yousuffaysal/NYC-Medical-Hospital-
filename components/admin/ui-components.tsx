'use client'

import React from 'react'
import { Search, Filter, Plus, MoreHorizontal, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface AdminHeaderProps {
    title: string
    description?: string
    actionLabel?: string
    onAction?: () => void
}

export const AdminHeader = ({ title, description, actionLabel = "Add New", onAction }: AdminHeaderProps) => {
    return (
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
                <h1 className="text-4xl font-bold text-white tracking-tight font-heading">{title}</h1>
                {description && <p className="text-slate-400 mt-2 font-light">{description}</p>}
            </div>
            <div className="flex items-center gap-3">
                <div className="relative hidden md:block group">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-teal-400 transition-colors" />
                    <Input
                        placeholder="Search..."
                        className="pl-9 bg-slate-900/50 border-slate-700/50 text-slate-200 focus:border-teal-500/50 focus:ring-teal-500/20 w-64 transition-all rounded-xl"
                    />
                </div>
                <Button variant="outline" className="bg-slate-900/50 border-slate-700/50 hover:bg-slate-800 hover:text-white rounded-xl backdrop-blur-md">
                    <Filter className="w-4 h-4 mr-2" /> Filter
                </Button>
                <Button onClick={onAction} className="bg-teal-500 hover:bg-teal-600 text-slate-950 font-bold shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:shadow-[0_0_30px_rgba(20,184,166,0.5)] transition-all rounded-xl">
                    <Plus className="w-4 h-4 mr-2" /> {actionLabel}
                </Button>
            </div>
        </div>
    )
}

export const GlassCard = ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <div className={`glass-panel rounded-3xl p-6 ${className}`}>
        {children}
    </div>
)
