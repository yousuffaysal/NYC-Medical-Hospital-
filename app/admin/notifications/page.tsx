'use client'

import { AdminHeader, GlassCard } from '@/components/admin/ui-components'
import { Badge } from '@/components/ui/badge'
import { Bell, AlertTriangle, CheckCircle, Info, Trash2, MailOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'

const notifications = [
    { id: 1, title: 'Emergency Ward Capacity Warning', message: 'The Emergency Ward A is at 95% capacity. Please divert non-critical patients.', type: 'Critical', time: '10 mins ago', read: false },
    { id: 2, title: 'System Maintenance Scheduled', message: 'Server maintenance is scheduled for Sunday at 2:00 AM EST.', type: 'Info', time: '2 hours ago', read: false },
    { id: 3, title: 'New Doctor Registration', message: 'Dr. Emily Thompson has completed onboarding. Please assign access rights.', type: 'Success', time: '5 hours ago', read: true },
    { id: 4, title: 'Low Stock Alert: Insulin', message: 'Insulin Glargine is below minimum stock levels (50 units remaining).', type: 'Warning', time: 'Yesterday', read: true },
    { id: 5, title: 'Insurance Claim Rejected', message: 'Claim #CLM-8921 for Patient John Doe was rejected by provider.', type: 'Error', time: 'Yesterday', read: true },
]

export default function NotificationsPage() {
    return (
        <div className="space-y-6 animate-fade-in-up">
            <AdminHeader
                title="Notifications Center"
                description="Stay updated with system alerts, staff messaging, and patient events."
                actionLabel="Send Announcement"
            />

            <div className="flex gap-4 mb-6">
                <Button variant="outline" className="rounded-full border-teal-500 text-teal-400 bg-teal-500/10 hover:bg-teal-500/20">All</Button>
                <Button variant="ghost" className="rounded-full text-slate-400 hover:text-white">Unread</Button>
                <Button variant="ghost" className="rounded-full text-slate-400 hover:text-white">Archived</Button>
                <div className="flex-1" />
                <Button variant="ghost" className="text-slate-400 hover:text-white"><MailOpen className="w-4 h-4 mr-2" /> Mark all as read</Button>
            </div>

            <div className="space-y-4">
                {notifications.map((note) => (
                    <GlassCard key={note.id} className={`p-4 flex gap-4 transition-all hover:bg-white/5 group ${!note.read ? 'border-l-4 border-l-teal-500 bg-teal-500/5' : ''}`}>
                        <div className={`mt-1 p-2 rounded-full shrink-0 ${note.type === 'Critical' || note.type === 'Error' ? 'bg-red-500/20 text-red-400' :
                                note.type === 'Warning' ? 'bg-orange-500/20 text-orange-400' :
                                    note.type === 'Success' ? 'bg-green-500/20 text-green-400' :
                                        'bg-blue-500/20 text-blue-400'
                            }`}>
                            {note.type === 'Critical' || note.type === 'Error' ? <AlertTriangle className="w-5 h-5" /> :
                                note.type === 'Warning' ? <AlertTriangle className="w-5 h-5" /> :
                                    note.type === 'Success' ? <CheckCircle className="w-5 h-5" /> :
                                        <Info className="w-5 h-5" />}
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between items-start mb-1">
                                <h4 className={`font-bold text-lg ${!note.read ? 'text-white' : 'text-slate-300'}`}>{note.title}</h4>
                                <span className="text-xs text-slate-500 whitespace-nowrap ml-4">{note.time}</span>
                            </div>
                            <p className="text-slate-400 text-sm leading-relaxed">{note.message}</p>
                        </div>
                        <div className="flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-500 hover:text-red-400"><Trash2 className="w-4 h-4" /></Button>
                        </div>
                    </GlassCard>
                ))}
            </div>
        </div>
    )
}
