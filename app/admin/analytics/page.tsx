'use client'

import React from 'react'
import { AdminHeader, GlassCard } from '@/components/admin/ui-components'
import {
    BrainCircuit, TrendingUp, AlertTriangle, Users,
    Activity, Thermometer, Calendar, ArrowUpRight, PieChart as PieChartIcon
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    PieChart, Pie, Cell, Legend
} from 'recharts'

const PredictionCard = ({ title, value, insight, trend, color }: any) => (
    <GlassCard className="relative overflow-hidden group hover:border-teal-500/30 transition-all duration-300">
        <div className={`absolute -right-6 -top-6 w-24 h-24 rounded-full opacity-10 blur-xl group-hover:opacity-20 transition-opacity ${color.replace('text-', 'bg-')}`} />
        <div className="flex items-start justify-between mb-4 relative z-10">
            <div>
                <p className="text-slate-400 text-sm font-medium mb-1">{title}</p>
                <h3 className="text-3xl font-heading font-bold text-white">{value}</h3>
            </div>
            <div className={`p-3 rounded-xl glass-panel border-white/5 ${color} bg-opacity-10`}>
                <BrainCircuit className={`w-5 h-5 ${color}`} />
            </div>
        </div>
        <div className="relative z-10">
            <div className="flex items-center gap-2 text-sm text-slate-300 mb-2">
                <TrendingUp className="w-4 h-4 text-teal-400" />
                <span>{insight}</span>
            </div>
            <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className={`h-full rounded-full ${color.replace('text-', 'bg-')} opacity-80`} style={{ width: `${trend}%` }} />
            </div>
        </div>
    </GlassCard>
)

const trafficData = [
    { name: 'Mon', value: 400 },
    { name: 'Tue', value: 300 },
    { name: 'Wed', value: 550 },
    { name: 'Thu', value: 450 },
    { name: 'Fri', value: 600 },
    { name: 'Sat', value: 700 },
    { name: 'Sun', value: 500 },
];

const departmentData = [
    { name: 'Pediatrics', value: 400, color: '#2dd4bf' }, // Teal
    { name: 'Cardiology', value: 300, color: '#8b5cf6' }, // Violet
    { name: 'Neurology', value: 300, color: '#3b82f6' }, // Blue
    { name: 'Orthopedics', value: 200, color: '#f59e0b' }, // Amber
];

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="glass-panel p-3 rounded-xl border border-slate-700 shadow-xl">
                <p className="text-slate-200 font-bold mb-1">{label}</p>
                <p className="text-teal-400 text-sm">
                    {payload[0].value} Patients
                </p>
            </div>
        );
    }
    return null;
};

export default function AnalyticsPage() {
    return (
        <div className="space-y-8 animate-fade-in-up pb-8">
            <AdminHeader
                title="Analytics & Prediction"
                description="AI-driven insights and future resource forecasting."
                actionLabel="Export Report"
                onAction={() => { }}
            />

            {/* AI Insights Banner */}
            <div className="glass-panel p-6 rounded-3xl border-l-4 border-l-teal-500 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-teal-500/10 rounded-full animate-pulse">
                        <BrainCircuit className="w-6 h-6 text-teal-400" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-white">AI Prediction Alert</h3>
                        <p className="text-slate-400 text-sm">High probability of seasonal flu surge in <span className="text-teal-400 font-bold">Volume A (Pediatrics)</span> next week.</p>
                    </div>
                </div>
                <Button className="bg-teal-600 hover:bg-teal-700 text-white rounded-xl">View Details</Button>
            </div>

            {/* Key Predictions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <PredictionCard
                    title="Predicted Patient Influx"
                    value="+18%"
                    insight="Expected surge on weekend"
                    trend={75}
                    color="text-teal-400"
                />
                <PredictionCard
                    title="Staffing Shortage Risk"
                    value="Low"
                    insight="Adequate coverage for next 7 days"
                    trend={20}
                    color="text-green-400"
                />
                <PredictionCard
                    title="Readmission Rate"
                    value="4.2%"
                    insight="Trending down from last month"
                    trend={40}
                    color="text-violet-400"
                />
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Traffic Forecast Chart */}
                <GlassCard className="lg:col-span-2 p-8 min-h-[400px]">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                <Activity className="w-5 h-5 text-teal-400" /> 7-Day Patient Traffic Forecast
                            </h3>
                            <p className="text-sm text-slate-400 mt-1">Machine learning projection based on historical data.</p>
                        </div>
                        <select className="bg-slate-900 border border-slate-700 text-slate-300 text-sm rounded-lg p-2 focus:ring-teal-500 focus:border-teal-500">
                            <option>Next 7 Days</option>
                            <option>Next 30 Days</option>
                        </select>
                    </div>

                    <div className="h-72 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={trafficData}>
                                <defs>
                                    <linearGradient id="colorTraffic" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#2dd4bf" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#2dd4bf" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.5} vertical={false} />
                                <XAxis
                                    dataKey="name"
                                    stroke="#94a3b8"
                                    tickLine={false}
                                    axisLine={false}
                                    fontSize={12}
                                />
                                <YAxis
                                    stroke="#94a3b8"
                                    tickLine={false}
                                    axisLine={false}
                                    fontSize={12}
                                />
                                <Tooltip content={<CustomTooltip />} />
                                <Area
                                    type="monotone"
                                    dataKey="value"
                                    stroke="#2dd4bf"
                                    strokeWidth={3}
                                    fillOpacity={1}
                                    fill="url(#colorTraffic)"
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </GlassCard>

                {/* Pie Chart / Distribution */}
                <GlassCard className="p-8 min-h-[400px] flex flex-col">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                        <PieChartIcon className="w-5 h-5 text-violet-400" /> Department Load
                    </h3>

                    <div className="flex-1 min-h-[250px] relative">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={departmentData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {departmentData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                                    ))}
                                </Pie>
                                <Tooltip content={<CustomTooltip />} />
                                <Legend
                                    verticalAlign="bottom"
                                    height={36}
                                    wrapperStyle={{ fontSize: '12px', color: '#94a3b8' }}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                        {/* Center Text Overlay */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                            <span className="text-3xl font-bold text-white">1.2k</span>
                            <span className="text-xs text-slate-400 uppercase tracking-wider">Patients</span>
                        </div>
                    </div>
                </GlassCard>
            </div>

            {/* Risk Heatmap / Alerts Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <GlassCard className="p-6">
                    <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <Thermometer className="w-5 h-5 text-red-400" /> Disease Outbreak Risk
                    </h3>
                    <div className="space-y-4">
                        {[
                            { area: 'Influenza A', risk: 'High', prob: 88, color: 'bg-red-500' },
                            { area: 'Dengue Fever', risk: 'Moderate', prob: 45, color: 'bg-orange-400' },
                            { area: 'COVID-19', risk: 'Low', prob: 12, color: 'bg-green-500' },
                        ].map((item, i) => (
                            <div key={i} className="space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-300">{item.area}</span>
                                    <span className={`${item.color.replace('bg-', 'text-')} font-bold`}>{item.risk} ({item.prob}%)</span>
                                </div>
                                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                                    <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.prob}%` }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </GlassCard>

                <GlassCard className="p-6">
                    <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-blue-400" /> Resource Forecast
                    </h3>
                    <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                        <p className="text-sm text-blue-200 mb-2">Projected ICU Bed Shortage</p>
                        <div className="flex items-end gap-2">
                            <span className="text-2xl font-bold text-white">Sunday</span>
                            <span className="text-sm text-blue-300 mb-1">Nov 12</span>
                        </div>
                        <div className="mt-3 flex items-center gap-2 text-xs text-blue-300">
                            <AlertTriangle className="w-3 h-3" />
                            Suggest updating roster
                        </div>
                    </div>
                </GlassCard>
            </div>
        </div>
    )
}
