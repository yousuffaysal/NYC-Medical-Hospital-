'use client'

import { AdminHeader, GlassCard } from '@/components/admin/ui-components'
import { Badge } from '@/components/ui/badge'
import { Shield, Lock, Eye, AlertOctagon, RefreshCcw } from 'lucide-react'
import { Button } from '@/components/ui/button'

const logs = [
    { id: 'LOG-9921', user: 'Dr. Sarah Mitchell', action: 'View Patient Record', resource: 'Patient #P-1024', ip: '192.168.1.12', time: '10:42 AM', status: 'Success' },
    { id: 'LOG-9922', user: 'Admin User', action: 'System Config Change', resource: 'Settings', ip: '192.168.1.5', time: '10:15 AM', status: 'Success' },
    { id: 'LOG-9923', user: 'Unknown', action: 'Login Attempt', resource: 'Auth', ip: '45.22.19.11', time: '09:20 AM', status: 'Failed' },
    { id: 'LOG-9924', user: 'Nurse Emily', action: 'Update Vitals', resource: 'Patient #P-1028', ip: '192.168.1.18', time: '08:55 AM', status: 'Success' },
    { id: 'LOG-9925', user: 'Dr. Michael Park', action: 'Prescription', resource: 'Pharmacy', ip: '192.168.1.14', time: '08:10 AM', status: 'Success' },
]

export default function SecurityPage() {
    return (
        <div className="space-y-6 animate-fade-in-up">
            <AdminHeader
                title="Security & Logs"
                description="Monitor system access, audit trails, and compliance reports."
                actionLabel="Export Logs"
            />

            {/* Security Status Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <GlassCard className="p-4 border-b-4 border-b-green-500">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <p className="text-slate-400 text-xs font-bold uppercase">Security Status</p>
                            <h3 className="text-xl font-bold text-white mt-1">Protected</h3>
                        </div>
                        <Shield className="w-8 h-8 text-green-500" />
                    </div>
                    <p className="text-xs text-slate-500">Last scan: 10 mins ago</p>
                </GlassCard>
                <GlassCard className="p-4 border-b-4 border-b-blue-500">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <p className="text-slate-400 text-xs font-bold uppercase">Active Sessions</p>
                            <h3 className="text-xl font-bold text-white mt-1">18 Users</h3>
                        </div>
                        <Lock className="w-8 h-8 text-blue-500" />
                    </div>
                    <p className="text-xs text-slate-500">Peak: 24 (1h ago)</p>
                </GlassCard>
                <GlassCard className="p-4 border-b-4 border-b-orange-500">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <p className="text-slate-400 text-xs font-bold uppercase">Failed Logins</p>
                            <h3 className="text-xl font-bold text-white mt-1">3 Attempts</h3>
                        </div>
                        <AlertOctagon className="w-8 h-8 text-orange-500" />
                    </div>
                    <Button variant="link" className="p-0 h-auto text-xs text-orange-400">Review IP Addresses</Button>
                </GlassCard>
            </div>

            <GlassCard className="p-0 overflow-hidden">
                <div className="p-4 border-b border-white/5 flex justify-between items-center">
                    <h3 className="font-bold text-white">System Audit Log</h3>
                    <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white"><RefreshCcw className="w-4 h-4 mr-2" /> Refresh</Button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-white/10 text-slate-400 text-sm">
                                <th className="p-4 font-medium pl-6">Timestamp</th>
                                <th className="p-4 font-medium">User</th>
                                <th className="p-4 font-medium">Action</th>
                                <th className="p-4 font-medium">Resource</th>
                                <th className="p-4 font-medium">IP Address</th>
                                <th className="p-4 font-medium">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {logs.map((log) => (
                                <tr key={log.id} className="group hover:bg-white/5 transition-colors">
                                    <td className="p-4 pl-6 text-slate-400 font-mono text-xs">{log.time}</td>
                                    <td className="p-4 font-medium text-white">{log.user}</td>
                                    <td className="p-4 text-slate-300">{log.action}</td>
                                    <td className="p-4 text-slate-400 text-sm">{log.resource}</td>
                                    <td className="p-4 text-slate-500 font-mono text-xs">{log.ip}</td>
                                    <td className="p-4">
                                        <Badge variant="outline" className={`
                        ${log.status === 'Success' ? 'border-green-500/50 text-green-400 bg-green-500/10' :
                                                'border-red-500/50 text-red-400 bg-red-500/10'}
                        `}>
                                            {log.status}
                                        </Badge>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </GlassCard>
        </div>
    )
}
