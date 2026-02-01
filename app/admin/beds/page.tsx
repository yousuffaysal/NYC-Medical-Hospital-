'use client'

import { AdminHeader, GlassCard } from '@/components/admin/ui-components'
import { Badge } from '@/components/ui/badge'
import { Bed, User, Clock, Activity } from 'lucide-react'
import { Button } from '@/components/ui/button'

const wards = [
    {
        name: 'ICU',
        total: 10,
        occupied: 8,
        beds: [
            { id: 'ICU-1', status: 'Occupied', patient: 'John Doe', condition: 'Critical' },
            { id: 'ICU-2', status: 'Occupied', patient: 'Jane Smith', condition: 'Stable' },
            { id: 'ICU-3', status: 'Available', patient: null },
            { id: 'ICU-4', status: 'Occupied', patient: 'Mike Ross', condition: 'Critical' },
            { id: 'ICU-5', status: 'Maintenance', patient: null },
        ]
    },
    {
        name: 'General Ward A',
        total: 20,
        occupied: 15,
        beds: [
            { id: 'GW-1', status: 'Occupied', patient: 'Alice Brown', condition: 'Stable' },
            { id: 'GW-2', status: 'Available', patient: null },
            { id: 'GW-3', status: 'Occupied', patient: 'Bob White', condition: 'Recovering' },
            { id: 'GW-4', status: 'Available', patient: null },
        ]
    }
]

export default function BedsPage() {
    return (
        <div className="space-y-8 animate-fade-in-up">
            <AdminHeader
                title="Bed Management"
                description="Real-time tracking of ward occupancy and bed availability."
                actionLabel="Admit Patient"
            />

            {/* Overview Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <GlassCard className="p-4 flex flex-col items-center justify-center text-center">
                    <h3 className="text-3xl font-bold text-white mb-1">124</h3>
                    <p className="text-slate-400 text-sm">Total Beds</p>
                </GlassCard>
                <GlassCard className="p-4 flex flex-col items-center justify-center text-center border-green-500/20 bg-green-500/5">
                    <h3 className="text-3xl font-bold text-green-400 mb-1">32</h3>
                    <p className="text-green-200/60 text-sm">Available</p>
                </GlassCard>
                <GlassCard className="p-4 flex flex-col items-center justify-center text-center border-blue-500/20 bg-blue-500/5">
                    <h3 className="text-3xl font-bold text-blue-400 mb-1">88</h3>
                    <p className="text-blue-200/60 text-sm">Occupied</p>
                </GlassCard>
                <GlassCard className="p-4 flex flex-col items-center justify-center text-center border-yellow-500/20 bg-yellow-500/5">
                    <h3 className="text-3xl font-bold text-yellow-400 mb-1">4</h3>
                    <p className="text-yellow-200/60 text-sm">Maintenance</p>
                </GlassCard>
            </div>

            {wards.map((ward, idx) => (
                <div key={idx} className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-white flex items-center gap-3">
                            <span className="w-1 h-6 bg-teal-500 rounded-full" />
                            {ward.name}
                        </h3>
                        <div className="text-sm text-slate-400">
                            {ward.occupied} / {ward.total} Beds Occupied
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {ward.beds.map((bed, i) => (
                            <GlassCard key={i} className={`p-4 relative group transition-all duration-300 hover:-translate-y-1 ${bed.status === 'Occupied' ? 'bg-slate-800/80 border-slate-700' :
                                bed.status === 'Available' ? 'bg-green-900/10 border-green-500/20' :
                                    'bg-yellow-900/10 border-yellow-500/20'
                                }`}>
                                <div className="flex justify-between items-start mb-3">
                                    <Bed className={`w-5 h-5 ${bed.status === 'Occupied' ? 'text-blue-400' :
                                        bed.status === 'Available' ? 'text-green-400' : 'text-yellow-400'
                                        }`} />
                                    <span className="text-xs font-mono font-bold text-slate-500">{bed.id}</span>
                                </div>

                                {bed.status === 'Occupied' ? (
                                    <div className="space-y-1">
                                        <p className="font-bold text-white text-sm truncate">{bed.patient}</p>
                                        <p className="text-xs text-slate-400 flex items-center gap-1">
                                            <Activity className="w-3 h-3 text-red-400" /> {bed.condition}
                                        </p>
                                    </div>
                                ) : (
                                    <div className="h-10 flex items-center text-sm font-medium opacity-60">
                                        {bed.status}
                                    </div>
                                )}

                                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
                            </GlassCard>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}
