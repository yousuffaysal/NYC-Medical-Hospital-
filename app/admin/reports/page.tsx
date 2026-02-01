'use client'

import { AdminHeader, GlassCard } from '@/components/admin/ui-components'
import { FileText, Download, BarChart3, PieChart, Users, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

const reports = [
    { id: 1, title: 'Monthly Revenue Report', category: 'Finance', date: 'Oct 31, 2024', format: 'PDF', size: '2.4 MB' },
    { id: 2, title: 'Patient Demographics Analysis', category: 'Medical', date: 'Oct 30, 2024', format: 'XLSX', size: '1.1 MB' },
    { id: 3, title: 'Department Performance Review', category: 'HR', date: 'Oct 28, 2024', format: 'PDF', size: '4.5 MB' },
    { id: 4, title: 'Inventory Utilization', category: 'Operations', date: 'Oct 25, 2024', format: 'CSV', size: '890 KB' },
    { id: 5, title: 'Mortality & Morbidity Statistics', category: 'Medical', date: 'Oct 15, 2024', format: 'PDF', size: '1.8 MB' },
]

export default function ReportsPage() {
    return (
        <div className="space-y-8 animate-fade-in-up">
            <AdminHeader
                title="Reports & Analytics"
                description="Generate insights and export data for hospital decision making."
                actionLabel="Custom Report"
            />

            {/* Analytics Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <GlassCard className="p-6 hover:bg-white/5 cursor-pointer transition-colors group">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 mb-4 group-hover:scale-110 transition-transform">
                        <TrendingUp className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">Financial Trends</h3>
                    <p className="text-slate-400 text-sm">Revenue vs Expenses analysis</p>
                </GlassCard>
                <GlassCard className="p-6 hover:bg-white/5 cursor-pointer transition-colors group">
                    <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center text-teal-400 mb-4 group-hover:scale-110 transition-transform">
                        <Users className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">Patient Flow</h3>
                    <p className="text-slate-400 text-sm">Admission & Discharge rates</p>
                </GlassCard>
                <GlassCard className="p-6 hover:bg-white/5 cursor-pointer transition-colors group">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                        <BarChart3 className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">Clinical Outcomes</h3>
                    <p className="text-slate-400 text-sm">Success rates by department</p>
                </GlassCard>
                <GlassCard className="p-6 hover:bg-white/5 cursor-pointer transition-colors group">
                    <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center text-pink-400 mb-4 group-hover:scale-110 transition-transform">
                        <PieChart className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">Resource Usage</h3>
                    <p className="text-slate-400 text-sm">Bed & equipment utilization</p>
                </GlassCard>
            </div>

            <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">Recent Generated Reports</h3>
                <div className="grid grid-cols-1 gap-4">
                    {reports.map((report) => (
                        <GlassCard key={report.id} className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:bg-slate-800/80 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-slate-700/50 rounded-lg flex items-center justify-center text-slate-400">
                                    <FileText className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white group-hover:text-teal-400 transition-colors">{report.title}</h4>
                                    <div className="flex gap-3 text-xs text-slate-500">
                                        <span>{report.category}</span>
                                        <span>•</span>
                                        <span>{report.date}</span>
                                        <span>•</span>
                                        <span>{report.size}</span>
                                    </div>
                                </div>
                            </div>
                            <Button variant="outline" className="bg-slate-800 border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700">
                                <Download className="w-4 h-4 mr-2" /> Download {report.format}
                            </Button>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </div>
    )
}
