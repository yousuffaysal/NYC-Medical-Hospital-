'use client'

import { AdminHeader, GlassCard } from '@/components/admin/ui-components'
import { Badge } from '@/components/ui/badge'
import { Globe, Shield, Bell, Moon, Smartphone, Save } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'

export default function SettingsPage() {
    return (
        <div className="space-y-8 animate-fade-in-up">
            <AdminHeader
                title="System Settings"
                description="Configure general preferences, role permissions, and system modules."
                onAction={() => { }}
                actionLabel="Save Changes"
            />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Sidebar Navigation (Mock) */}
                <div className="space-y-2">
                    {[
                        { icon: Globe, label: 'General Information', active: true },
                        { icon: Shield, label: 'Roles & Permissions', active: false },
                        { icon: Bell, label: 'Notifications', active: false },
                        { icon: Moon, label: 'Appearance', active: false },
                        { icon: Smartphone, label: 'Mobile App', active: false },
                    ].map((item, i) => (
                        <button key={i} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors text-left font-medium ${item.active ? 'bg-teal-600 text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                            }`}>
                            <item.icon className="w-5 h-5" /> {item.label}
                        </button>
                    ))}
                </div>

                {/* Settings Form */}
                <div className="lg:col-span-2 space-y-6">
                    <GlassCard>
                        <h3 className="text-xl font-bold text-white mb-6">General Information</h3>

                        <div className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300">Hospital Name</label>
                                    <Input defaultValue="NYC Medical Advanced Care" className="bg-slate-800 border-slate-700 text-white" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300">Contact Email</label>
                                    <Input defaultValue="admin@nycmed.com" className="bg-slate-800 border-slate-700 text-white" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300">Address</label>
                                <Input defaultValue="123 Medical Plaza, New York, NY 10001" className="bg-slate-800 border-slate-700 text-white" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300">Timezone</label>
                                    <select className="w-full h-10 px-3 rounded-md bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500">
                                        <option>Eastern Standard Time (EST)</option>
                                        <option>Pacific Standard Time (PST)</option>
                                        <option>UTC +00:00</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300">Currency</label>
                                    <select className="w-full h-10 px-3 rounded-md bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500">
                                        <option>USD ($)</option>
                                        <option>EUR (€)</option>
                                        <option>GBP (£)</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </GlassCard>

                    <GlassCard>
                        <h3 className="text-xl font-bold text-white mb-6">System Modules</h3>
                        <div className="space-y-4">
                            {[
                                { label: 'Patient Portal Access', desc: 'Allow patients to verify appointments online' },
                                { label: 'Telemedicine Integration', desc: 'Enable video consultation features' },
                                { label: 'Auto-Backup', desc: 'Backup database every 24 hours' },
                                { label: 'SMS Notifications', desc: 'Send appointment reminders via SMS' },
                            ].map((feature, i) => (
                                <div key={i} className="flex items-center justify-between py-2">
                                    <div>
                                        <p className="font-medium text-white">{feature.label}</p>
                                        <p className="text-xs text-slate-500">{feature.desc}</p>
                                    </div>
                                    <Switch defaultChecked={i < 3} className="data-[state=checked]:bg-teal-600" />
                                </div>
                            ))}
                        </div>
                    </GlassCard>

                    <div className="flex justify-end pt-4">
                        <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8">Save Changes</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
