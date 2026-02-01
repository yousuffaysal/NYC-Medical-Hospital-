'use client'

import { useState } from 'react'
import { AdminHeader, GlassCard } from '@/components/admin/ui-components'
import { Badge } from '@/components/ui/badge'
import { FileText, Activity, AlertCircle, CheckCircle, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const initialLabTests = [
    { id: 'REQ-2024-001', patient: 'Alice Smith', test: 'Complete Blood Count (CBC)', doctor: 'Dr. Sarah Mitchell', date: 'Oct 24, 2024', priority: 'Routine', status: 'Completed' },
    { id: 'REQ-2024-002', patient: 'Robert Brown', test: 'MRI - Brain Scan', doctor: 'Dr. James Chen', date: 'Oct 24, 2024', priority: 'Urgent', status: 'In Progress' },
    { id: 'REQ-2024-003', patient: 'John Doe', test: 'Lipid Panel', doctor: 'Dr. Michael Park', date: 'Oct 23, 2024', priority: 'Routine', status: 'Pending' },
    { id: 'REQ-2024-004', patient: 'Emily Davis', test: 'X-Ray Chest', doctor: 'Dr. Emily Thompson', date: 'Oct 23, 2024', priority: 'Urgent', status: 'Completed' },
    { id: 'REQ-2024-005', patient: 'Michael Wilson', test: 'Liver Function Test', doctor: 'Dr. Sarah Mitchell', date: 'Oct 22, 2024', priority: 'Routine', status: 'Completed' },
]

export default function LabPage() {
    const { toast } = useToast()
    const [labTests, setLabTests] = useState(initialLabTests)
    const [isRequestOpen, setIsRequestOpen] = useState(false)
    const [newRequest, setNewRequest] = useState({ patient: '', test: '', doctor: '', priority: 'Routine', date: 'Today' })

    const handleNewRequestSubmit = () => {
        if (!newRequest.patient || !newRequest.test || !newRequest.doctor) {
            toast({
                title: "Validation Error",
                description: "All fields are required.",
                variant: "destructive",
            })
            return
        }

        const request = {
            id: `REQ-2024-00${labTests.length + 1}`,
            ...newRequest,
            date: newRequest.date === 'Today' ? 'Oct 25, 2024' : 'Oct 26, 2024', // Simplified date logic for demo
            status: 'Pending'
        }

        setLabTests([request, ...labTests])
        setIsRequestOpen(false)
        setNewRequest({ patient: '', test: '', doctor: '', priority: 'Routine', date: 'Today' })

        toast({
            title: "Request Submitted",
            description: `Lab request for ${newRequest.patient} has been created.`,
            variant: "default",
        })
    }

    return (
        <div className="space-y-6 animate-fade-in-up">
            <AdminHeader
                title="Laboratory & Diagnostics"
                description="Manage test requisitions, sample collection, and result distribution."
                actionLabel="New Request"
                onAction={() => setIsRequestOpen(true)}
            />

            <Dialog open={isRequestOpen} onOpenChange={setIsRequestOpen}>
                <DialogContent className="sm:max-w-[500px] bg-slate-900 border-slate-800 text-white">
                    <DialogHeader>
                        <DialogTitle>New Lab Request</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="patient" className="text-right">Patient</Label>
                            <Input
                                id="patient"
                                value={newRequest.patient}
                                onChange={(e) => setNewRequest({ ...newRequest, patient: e.target.value })}
                                className="col-span-3 bg-slate-800 border-slate-700 text-white"
                                placeholder="Patient Name"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="test" className="text-right">Test Name</Label>
                            <Input
                                id="test"
                                value={newRequest.test}
                                onChange={(e) => setNewRequest({ ...newRequest, test: e.target.value })}
                                className="col-span-3 bg-slate-800 border-slate-700 text-white"
                                placeholder="e.g. CBC, MRI, Lipid Panel"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="doctor" className="text-right">Doctor</Label>
                            <div className="col-span-3 flex items-center gap-2">
                                <span className="text-slate-400">Dr.</span>
                                <Input
                                    id="doctor"
                                    value={newRequest.doctor}
                                    onChange={(e) => setNewRequest({ ...newRequest, doctor: e.target.value })}
                                    className="bg-slate-800 border-slate-700 text-white"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="priority" className="text-right">Priority</Label>
                            <div className="col-span-3">
                                <Select
                                    value={newRequest.priority}
                                    onValueChange={(val) => setNewRequest({ ...newRequest, priority: val })}
                                >
                                    <SelectTrigger className="bg-slate-800 border-slate-700 text-white">
                                        <SelectValue placeholder="Select priority" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-slate-800 border-slate-700 text-white">
                                        <SelectItem value="Routine">Routine</SelectItem>
                                        <SelectItem value="Urgent">Urgent</SelectItem>
                                        <SelectItem value="Critical">Critical</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="date" className="text-right">Date</Label>
                            <div className="col-span-3">
                                <Select
                                    value={newRequest.date}
                                    onValueChange={(val) => setNewRequest({ ...newRequest, date: val })}
                                >
                                    <SelectTrigger className="bg-slate-800 border-slate-700 text-white">
                                        <SelectValue placeholder="Select date" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-slate-800 border-slate-700 text-white">
                                        <SelectItem value="Today">Today</SelectItem>
                                        <SelectItem value="Tomorrow">Tomorrow</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit" onClick={handleNewRequestSubmit} className="bg-teal-600 hover:bg-teal-700 text-white">Create Request</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <GlassCard className="p-4 flex items-center gap-4 border-l-4 border-l-blue-500">
                    <div className="p-3 rounded-full bg-blue-500/20 text-blue-400"><Activity className="w-5 h-5" /></div>
                    <div><p className="text-slate-400 text-xs uppercase font-bold">Total Tests</p><h3 className="text-xl font-bold text-white">{1540 + labTests.length - 5}</h3></div>
                </GlassCard>
                <GlassCard className="p-4 flex items-center gap-4 border-l-4 border-l-yellow-500">
                    <div className="p-3 rounded-full bg-yellow-500/20 text-yellow-400"><Clock className="w-5 h-5" /></div>
                    <div><p className="text-slate-400 text-xs uppercase font-bold">Pending</p><h3 className="text-xl font-bold text-white">{24 + labTests.filter(t => t.status === 'Pending' && t.id.includes(String(labTests.length))).length}</h3></div>
                </GlassCard>
                <GlassCard className="p-4 flex items-center gap-4 border-l-4 border-l-green-500">
                    <div className="p-3 rounded-full bg-green-500/20 text-green-400"><CheckCircle className="w-5 h-5" /></div>
                    <div><p className="text-slate-400 text-xs uppercase font-bold">Completed</p><h3 className="text-xl font-bold text-white">86</h3></div>
                </GlassCard>
                <GlassCard className="p-4 flex items-center gap-4 border-l-4 border-l-red-500">
                    <div className="p-3 rounded-full bg-red-500/20 text-red-400"><AlertCircle className="w-5 h-5" /></div>
                    <div><p className="text-slate-400 text-xs uppercase font-bold">Critical</p><h3 className="text-xl font-bold text-white">3</h3></div>
                </GlassCard>
            </div>

            <GlassCard className="p-0 overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-white/10 text-slate-400 text-sm">
                            <th className="p-4 font-medium pl-6">Requisition ID</th>
                            <th className="p-4 font-medium">Test Name</th>
                            <th className="p-4 font-medium">Patient</th>
                            <th className="p-4 font-medium">Doctor</th>
                            <th className="p-4 font-medium">Date</th>
                            <th className="p-4 font-medium">Status</th>
                            <th className="p-4 font-medium text-right pr-6">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {labTests.map((item) => (
                            <tr key={item.id} className="group hover:bg-white/5 transition-colors">
                                <td className="p-4 pl-6 text-slate-400 text-sm font-mono">{item.id}</td>
                                <td className="p-4 font-semibold text-white">
                                    {item.test}
                                    {item.priority === 'Urgent' && <Badge className="ml-2 bg-red-500/20 text-red-300 hover:bg-red-500/30 border-0 text-[10px] px-1.5 py-0.5">Urgent</Badge>}
                                </td>
                                <td className="p-4 text-slate-300">{item.patient}</td>
                                <td className="p-4 text-slate-400 text-sm">{item.doctor}</td>
                                <td className="p-4 text-slate-400 text-sm">{item.date}</td>
                                <td className="p-4">
                                    <Badge variant="outline" className={`
                      ${item.status === 'Completed' ? 'border-teal-500/50 text-teal-400 bg-teal-500/10' :
                                            item.status === 'In Progress' ? 'border-blue-500/50 text-blue-400 bg-blue-500/10' :
                                                'border-yellow-500/50 text-yellow-400 bg-yellow-500/10'}
                    `}>
                                        {item.status}
                                    </Badge>
                                </td>
                                <td className="p-4 text-right pr-6">
                                    <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-white">
                                        <FileText className="w-4 h-4" />
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </GlassCard>
        </div>
    )
}
