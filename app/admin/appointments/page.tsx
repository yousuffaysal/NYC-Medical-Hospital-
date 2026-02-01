'use client'

import { useState } from 'react'
import { AdminHeader, GlassCard } from '@/components/admin/ui-components'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock, User, FileText, Check, X } from 'lucide-react'
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

const initialAppointments = [
    { id: 1, patient: 'Alice Smith', doctor: 'Dr. Sarah Mitchell', type: 'Check-up', time: '09:00 AM', date: 'Today', status: 'Confirmed' },
    { id: 2, patient: 'Robert Brown', doctor: 'Dr. James Chen', type: 'MRI Scan', time: '10:30 AM', date: 'Today', status: 'Pending' },
    { id: 3, patient: 'John Doe', doctor: 'Dr. Michael Park', type: 'Emergency', time: '11:15 AM', date: 'Today', status: 'In Progress' },
    { id: 4, patient: 'Emily Davis', doctor: 'Dr. Emily Thompson', type: 'Vaccination', time: '02:00 PM', date: 'Tomorrow', status: 'Confirmed' },
    { id: 5, patient: 'Sarah Wilson', doctor: 'Dr. Sarah Mitchell', type: 'Follow-up', time: '04:30 PM', date: 'Tomorrow', status: 'Cancelled' },
]

export default function AppointmentsPage() {
    const { toast } = useToast()
    const [appointments, setAppointments] = useState(initialAppointments)
    const [isNewOpen, setIsNewOpen] = useState(false)
    const [newAppt, setNewAppt] = useState({ patient: '', doctor: '', type: '', time: '', date: 'Today' })

    const handleNewAppointmentSubmit = () => {
        if (!newAppt.patient || !newAppt.doctor || !newAppt.type || !newAppt.time) {
            toast({
                title: "Validation Error",
                description: "All fields are required.",
                variant: "destructive",
            })
            return
        }

        const appointment = {
            id: appointments.length + 1,
            patient: newAppt.patient,
            doctor: `Dr. ${newAppt.doctor}`,
            type: newAppt.type,
            time: newAppt.time,
            date: newAppt.date,
            status: 'Pending'
        }

        setAppointments([appointment, ...appointments])
        setIsNewOpen(false)
        setNewAppt({ patient: '', doctor: '', type: '', time: '', date: 'Today' })

        toast({
            title: "Appointment Scheduled",
            description: `Appointment for ${newAppt.patient} has been booked.`,
            variant: "default",
        })
    }

    return (
        <div className="space-y-6 animate-fade-in-up">
            <AdminHeader
                title="Appointment Management"
                description="Schedule, approve, and track patient appointments."
                actionLabel="New Appointment"
                onAction={() => setIsNewOpen(true)}
            />

            <Dialog open={isNewOpen} onOpenChange={setIsNewOpen}>
                <DialogContent className="sm:max-w-[500px] bg-slate-900 border-slate-800 text-white">
                    <DialogHeader>
                        <DialogTitle>Schedule New Appointment</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="patient" className="text-right">Patient</Label>
                            <Input
                                id="patient"
                                value={newAppt.patient}
                                onChange={(e) => setNewAppt({ ...newAppt, patient: e.target.value })}
                                className="col-span-3 bg-slate-800 border-slate-700 text-white"
                                placeholder="Patient Name"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="doctor" className="text-right">Doctor</Label>
                            <div className="col-span-3 flex items-center gap-2">
                                <span className="text-slate-400">Dr.</span>
                                <Input
                                    id="doctor"
                                    value={newAppt.doctor}
                                    onChange={(e) => setNewAppt({ ...newAppt, doctor: e.target.value })}
                                    className="bg-slate-800 border-slate-700 text-white"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="type" className="text-right">Type</Label>
                            <div className="col-span-3">
                                <Select
                                    value={newAppt.type}
                                    onValueChange={(val) => setNewAppt({ ...newAppt, type: val })}
                                >
                                    <SelectTrigger className="bg-slate-800 border-slate-700 text-white">
                                        <SelectValue placeholder="Select type" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-slate-800 border-slate-700 text-white">
                                        <SelectItem value="Check-up">Check-up</SelectItem>
                                        <SelectItem value="Consultation">Consultation</SelectItem>
                                        <SelectItem value="Surgery">Surgery</SelectItem>
                                        <SelectItem value="Emergency">Emergency</SelectItem>
                                        <SelectItem value="Follow-up">Follow-up</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="time" className="text-right">Time</Label>
                            <Input
                                id="time"
                                type="time"
                                value={newAppt.time}
                                onChange={(e) => setNewAppt({ ...newAppt, time: e.target.value })}
                                className="col-span-3 bg-slate-800 border-slate-700 text-white"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="date" className="text-right">Date</Label>
                            <div className="col-span-3">
                                <Select
                                    value={newAppt.date}
                                    onValueChange={(val) => setNewAppt({ ...newAppt, date: val })}
                                >
                                    <SelectTrigger className="bg-slate-800 border-slate-700 text-white">
                                        <SelectValue placeholder="Select date" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-slate-800 border-slate-700 text-white">
                                        <SelectItem value="Today">Today</SelectItem>
                                        <SelectItem value="Tomorrow">Tomorrow</SelectItem>
                                        <SelectItem value="Next Week">Next Week</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit" onClick={handleNewAppointmentSubmit} className="bg-teal-600 hover:bg-teal-700 text-white">Book Appointment</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Calendar / Schedule Widget Placeholder */}
                <div className="lg:col-span-2 space-y-6">
                    <GlassCard className="min-h-[200px] flex items-center justify-center border-dashed border-slate-700">
                        <div className="text-center">
                            <Calendar className="w-10 h-10 text-slate-600 mx-auto mb-3" />
                            <p className="text-slate-500">Interactive Calendar View</p>
                            <p className="text-xs text-slate-600">(Coming soon in Phase 2)</p>
                        </div>
                    </GlassCard>

                    <h3 className="text-xl font-bold text-white mb-4">Upcoming Appointments</h3>
                    <div className="space-y-3">
                        {appointments.map((apt) => (
                            <GlassCard key={apt.id} className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-teal-500/30 transition-colors">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-slate-800 flex flex-col items-center justify-center text-slate-300 border border-slate-700 shrink-0">
                                        <span className="text-xs font-bold uppercase text-slate-500">{apt.date}</span>
                                        <span className="text-sm font-bold text-white">{apt.time.split(' ')[0]}</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white text-lg">{apt.patient}</h4>
                                        <div className="flex items-center gap-2 text-sm text-slate-400">
                                            <User className="w-3 h-3" /> {apt.doctor}
                                            <span className="w-1 h-1 rounded-full bg-slate-600" />
                                            <FileText className="w-3 h-3" /> {apt.type}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <Badge variant="outline" className={`
                      ${apt.status === 'Confirmed' ? 'border-teal-500/50 text-teal-400 bg-teal-500/10' :
                                            apt.status === 'Pending' ? 'border-yellow-500/50 text-yellow-400 bg-yellow-500/10' :
                                                apt.status === 'In Progress' ? 'border-blue-500/50 text-blue-400 bg-blue-500/10' :
                                                    'border-red-500/50 text-red-400 bg-red-500/10'}
                   `}>
                                        {apt.status}
                                    </Badge>

                                    {apt.status === 'Pending' && (
                                        <div className="flex gap-2">
                                            <Button size="sm" className="h-8 w-8 p-0 rounded-full bg-green-500/20 text-green-400 hover:bg-green-500 hover:text-white">
                                                <Check className="w-4 h-4" />
                                            </Button>
                                            <Button size="sm" className="h-8 w-8 p-0 rounded-full bg-red-500/20 text-red-400 hover:bg-red-500 hover:text-white">
                                                <X className="w-4 h-4" />
                                            </Button>
                                        </div>
                                    )}
                                </div>
                            </GlassCard>
                        ))}
                    </div>
                </div>

                {/* Right Sidebar: Summary */}
                <div className="space-y-6">
                    <GlassCard>
                        <h3 className="text-lg font-bold text-white mb-4">Today's Summary</h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-slate-400">Total Booked</span>
                                <span className="text-white font-bold">{42 + appointments.length - 5}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-slate-400">Confirmed</span>
                                <span className="text-teal-400 font-bold">38</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-slate-400">Cancelled</span>
                                <span className="text-red-400 font-bold">2</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-slate-400">Pending</span>
                                <span className="text-yellow-400 font-bold">{2 + appointments.filter(a => a.status === 'Pending' && a.id > 5).length}</span>
                            </div>
                            <div className="pt-4 border-t border-white/5">
                                <div className="flex justify-between items-center">
                                    <span className="text-slate-300 font-medium">Available Slots</span>
                                    <span className="text-white font-bold">{12 - (appointments.length - 5)}</span>
                                </div>
                            </div>
                        </div>
                        <Button className="w-full mt-6 bg-slate-800 hover:bg-slate-700 text-white">View Full Schedule</Button>
                    </GlassCard>
                </div>
            </div>
        </div>
    )
}
