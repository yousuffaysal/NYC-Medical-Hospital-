'use client'

import React from 'react'
import {
    Users, Stethoscope, Activity, TrendingUp,
    Calendar, AlertCircle, Clock, DollarSign,
    ArrowUpRight, ArrowDownRight, MoreHorizontal
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import { GlassCard } from '@/components/admin/ui-components'

const StatCard = ({ title, value, change, trend, icon: Icon, color, delay }: any) => {
    return (
        <div
            className={`glass-panel p-6 rounded-3xl relative overflow-hidden group hover:border-teal-500/30 transition-all duration-500 animate-reveal ${delay}`}
        >
            <div className={`absolute -right-4 -top-4 w-24 h-24 rounded-full opacity-10 blur-2xl group-hover:opacity-20 transition-opacity ${color.replace('text-', 'bg-')}`}></div>

            <div className="flex items-start justify-between mb-4 relative z-10">
                <div className={`p-3 rounded-2xl glass-panel border-white/5 ${color} bg-opacity-10`}>
                    <Icon className={`w-6 h-6 ${color}`} />
                </div>
                <div className={`flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full border ${trend === 'up' ? 'bg-teal-500/10 text-teal-400 border-teal-500/20' : 'bg-red-500/10 text-red-400 border-red-500/20'}`}>
                    {trend === 'up' ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                    {change}
                </div>
            </div>
            <div className="relative z-10">
                <p className="text-slate-400 text-sm font-medium mb-1 tracking-wide">{title}</p>
                <h3 className="text-3xl font-heading font-bold text-white group-hover:scale-105 transition-transform origin-left">{value}</h3>
            </div>
        </div>
    )
}

export default function AdminDashboard() {
    const { toast } = useToast()

    const handleQuickAction = (action: string) => {
        toast({
            title: `${action} Clicked`,
            description: "This feature is part of the demo and will be implemented soon.",
            variant: "default",
        })
    }

    return (
        <div className="space-y-8 pb-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 animate-reveal">
                <div>
                    <h1 className="text-4xl font-heading font-bold text-white tracking-tight leading-tight">
                        Admin <span className="text-teal-400">Dashboard</span>
                    </h1>
                    <p className="text-slate-400 mt-2 font-light text-lg">Hospital performance & real-time analytics.</p>
                </div>
                <div className="flex items-center gap-3">
                    <Button variant="outline" className="bg-slate-900/50 text-slate-300 border-slate-800 hover:bg-slate-800 hover:text-white rounded-xl backdrop-blur-sm">
                        <Calendar className="w-4 h-4 mr-2 text-teal-400" /> <span className="font-mono">{new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </Button>
                    <Button className="bg-slate-100 hover:bg-white text-slate-900 font-bold rounded-xl shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all hover:scale-105">
                        <Activity className="w-4 h-4 mr-2 text-teal-600" /> Generate Report
                    </Button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                    title="Total Patients"
                    value="1,248"
                    change="+12.5%"
                    trend="up"
                    icon={Users}
                    color="text-blue-400"
                    delay="delay-100"
                />
                <StatCard
                    title="Appointments"
                    value="86"
                    change="+4.2%"
                    trend="up"
                    icon={Calendar}
                    color="text-teal-400"
                    delay="delay-200"
                />
                <StatCard
                    title="Doctors on Duty"
                    value="24"
                    change="-2"
                    trend="down"
                    icon={Stethoscope}
                    color="text-violet-400"
                    delay="delay-300"
                />
                <StatCard
                    title="Daily Revenue"
                    value="$42,500"
                    change="+8.1%"
                    trend="up"
                    icon={DollarSign}
                    color="text-amber-400"
                    delay="delay-500"
                />
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Chart Section */}
                <div className="lg:col-span-2 glass-panel p-8 rounded-3xl animate-reveal delay-300">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h3 className="text-xl font-heading font-bold text-white flex items-center gap-2">
                                <Activity className="w-5 h-5 text-teal-400" /> Hospital Activity
                            </h3>
                            <p className="text-sm text-slate-400 mt-1">Patient admission vs discharge trends</p>
                        </div>
                        <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white hover:bg-white/5"><MoreHorizontal className="w-5 h-5" /></Button>
                    </div>

                    {/* Chart Visual - Neon Cyber Style */}
                    <div className="h-64 flex items-end justify-between gap-3 px-2 relative">
                        {/* Grid Lines */}
                        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
                            {[1, 2, 3, 4].map(i => <div key={i} className="w-full h-px bg-slate-500 dashed"></div>)}
                        </div>

                        {[40, 65, 45, 80, 55, 70, 40, 60, 75, 50, 85, 90].map((h, i) => (
                            <div key={i} className="w-full h-full flex items-end relative group">
                                <div
                                    className="w-full rounded-t-lg transition-all duration-700 ease-out group-hover:brightness-125 relative overflow-hidden"
                                    style={{
                                        height: `${h}%`,
                                        background: `linear-gradient(to top, rgba(45, 212, 191, 0.2), rgba(45, 212, 191, 0.8))`
                                    }}
                                >
                                    <div className="absolute top-0 left-0 w-full h-1 bg-teal-300 shadow-[0_0_10px_#5eead4]"></div>
                                </div>
                                {/* Hover Tooltip */}
                                <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-slate-900 border border-slate-700 text-teal-300 text-xs font-mono py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-all pointer-events-none transform translate-y-2 group-hover:translate-y-0 z-20">
                                    {h}%
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-between mt-6 text-xs text-slate-500 font-mono tracking-wider uppercase border-t border-slate-800/50 pt-4">
                        <span>Jan 01</span>
                        <span>Time Period</span>
                        <span>Dec 31</span>
                    </div>
                </div>

                {/* Right: Notifications */}
                <div className="glass-panel p-8 rounded-3xl flex flex-col animate-reveal delay-500">
                    <h3 className="text-xl font-heading font-bold text-white mb-6 flex items-center gap-2">
                        <AlertCircle className="w-5 h-5 text-violet-400" /> Recent Alerts
                    </h3>

                    <div className="space-y-4 flex-1 overflow-y-auto max-h-[400px] pr-2 custom-scrollbar">
                        {[
                            { title: "Emergency Ward Full", time: "10 mins ago", type: "critical" },
                            { title: "New Appointment Request", time: "25 mins ago", type: "info" },
                            { title: "Dr. Smith Check-in", time: "1 hour ago", type: "success" },
                            { title: "Low Stock: Paracetamol", time: "2 hours ago", type: "warning" },
                            { title: "Server Maintenance", time: "5 hours ago", type: "info" },
                        ].map((alert, i) => (
                            <div key={i} className="flex gap-4 items-start p-3 rounded-xl hover:bg-white/5 transition-colors group border border-transparent hover:border-white/5">
                                <div className={`w-2 h-2 mt-2 rounded-full shrink-0 shadow-[0_0_8px] ${alert.type === 'critical' ? 'bg-red-500 shadow-red-500/50 animate-pulse' :
                                    alert.type === 'warning' ? 'bg-amber-400 shadow-amber-400/50' :
                                        alert.type === 'success' ? 'bg-teal-500 shadow-teal-500/50' : 'bg-blue-400 shadow-blue-400/50'
                                    }`} />
                                <div>
                                    <h4 className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">{alert.title}</h4>
                                    <p className="text-xs text-slate-500 flex items-center gap-1 mt-1 font-mono">
                                        <Clock className="w-3 h-3" /> {alert.time}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <Button variant="outline" className="w-full mt-6 rounded-xl border-dashed border-slate-700 text-slate-400 hover:text-white hover:bg-white/5 hover:border-slate-500">
                        View All System Logs
                    </Button>
                </div>
            </div>

            {/* Quick Actions Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-reveal delay-500">
                {['Add Patient', 'Book Appointment', 'Generate Bill', 'Add Staff'].map((action, i) => (
                    <button
                        key={i}
                        onClick={() => handleQuickAction(action)}
                        className="p-4 glass-panel rounded-2xl text-sm font-bold text-slate-300 hover:text-white hover:bg-teal-500/10 hover:border-teal-500/30 transition-all hover:-translate-y-1 group flex items-center justify-center gap-2"
                    >
                        <span className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-teal-400 group-hover:bg-teal-500 group-hover:text-black transition-colors">+</span>
                        {action}
                    </button>
                ))}
            </div>
        </div>
    )
}
