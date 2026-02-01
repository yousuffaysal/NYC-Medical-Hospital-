'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import {
    LayoutDashboard, Users, UserPlus, Stethoscope, Calendar,
    TestTube, Pill, Bed, CreditCard, BarChart3, Bell,
    Settings, ShieldAlert, Activity, ChevronRight, Menu, BrainCircuit
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

const sidebarItems = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/admin' },
    { icon: Users, label: 'User Management', href: '/admin/users' },
    { icon: UserPlus, label: 'Patients', href: '/admin/patients' },
    { icon: Stethoscope, label: 'Doctors', href: '/admin/doctors' },
    { icon: Calendar, label: 'Appointments', href: '/admin/appointments' },
    { icon: TestTube, label: 'Lab & Diagnostics', href: '/admin/lab' },
    { icon: Pill, label: 'Pharmacy', href: '/admin/pharmacy' },
    { icon: Bed, label: 'Bed Management', href: '/admin/beds' },
    { icon: CreditCard, label: 'Billing & Finance', href: '/admin/billing' },
    { icon: BarChart3, label: 'Reports', href: '/admin/reports' },
    { icon: BrainCircuit, label: 'Analytics & Prediction', href: '/admin/analytics' },
    { icon: Bell, label: 'Notifications', href: '/admin/notifications' },
    { icon: Settings, label: 'Settings', href: '/admin/settings' },
    { icon: ShieldAlert, label: 'Security & Logs', href: '/admin/security' },
]

export default function AdminSidebar() {
    const pathname = usePathname()
    const [collapsed, setCollapsed] = useState(false)

    return (
        <aside className={cn(
            "fixed left-0 top-0 h-screen bg-slate-900 text-white transition-all duration-300 z-50 flex flex-col border-r border-slate-800",
            collapsed ? "w-20" : "w-72"
        )}>
            {/* Header */}
            <div className="h-20 flex items-center px-6 border-b border-slate-800/50">
                <div className="flex items-center gap-3 overflow-hidden">
                    <div className="relative w-8 h-8 shrink-0">
                        <Image
                            src="https://ik.imagekit.io/8fky5hetz/Blue%20and%20White%20Geometric%20Health%20Logo%20(1).png"
                            alt="NYC Medical Logo"
                            fill
                            className="object-contain brightness-0 invert"
                        />
                    </div>
                    <div className={cn("flex flex-col transition-opacity duration-300", collapsed ? "opacity-0 w-0" : "opacity-100")}>
                        <span className="font-bold text-lg tracking-tight whitespace-nowrap">NYC Medical</span>
                        <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">Admin Portal</span>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1 custom-scrollbar">
                {sidebarItems.map((item, index) => {
                    const isActive = pathname === item.href
                    return (
                        <Link
                            key={index}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 group relative overflow-hidden",
                                isActive
                                    ? "bg-teal-600/10 text-teal-400 font-medium"
                                    : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                            )}
                        >
                            {isActive && (
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-teal-500 rounded-r-full" />
                            )}
                            <item.icon className={cn("w-5 h-5 transition-colors", isActive ? "text-teal-400" : "group-hover:text-white")} />
                            <span className={cn("transition-all duration-300 whitespace-nowrap", collapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100")}>
                                {item.label}
                            </span>

                            {/* Tooltip for collapsed state */}
                            {collapsed && (
                                <div className="absolute left-16 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50 whitespace-nowrap border border-slate-700 shadow-xl">
                                    {item.label}
                                </div>
                            )}
                        </Link>
                    )
                })}
            </nav>

            {/* Footer / User */}
            <div className="p-4 border-t border-slate-800/50 bg-slate-900/50">
                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className="w-full flex items-center justify-center p-2 rounded-lg hover:bg-slate-800 transition-colors text-slate-400 hover:text-white mb-4"
                >
                    {collapsed ? <ChevronRight className="w-5 h-5" /> : (
                        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider">
                            <Menu className="w-4 h-4" /> <span>Collapse Menu</span>
                        </div>
                    )}
                </button>

                <div className={cn("flex items-center gap-3 transition-all duration-300", collapsed ? "justify-center" : "")}>
                    <div className="w-10 h-10 rounded-full bg-indigo-500/20 border-2 border-indigo-500/30 flex items-center justify-center text-indigo-400 font-bold shrink-0">
                        AD
                    </div>
                    {!collapsed && (
                        <div className="overflow-hidden">
                            <p className="text-sm font-medium text-white truncate">Admin User</p>
                            <p className="text-xs text-slate-500 truncate">Super Admin</p>
                        </div>
                    )}
                </div>
            </div>
        </aside>
    )
}
