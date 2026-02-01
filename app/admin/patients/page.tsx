'use client'

import { useState } from 'react'
import { AdminHeader, GlassCard } from '@/components/admin/ui-components'
import { Badge } from '@/components/ui/badge'
import { MoreHorizontal, FileText, Activity } from 'lucide-react'
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

const initialPatients = [
    { id: 'P-1024', name: 'John Doe', age: 45, condition: 'Hypertension', status: 'Inpatient', room: '304-A', doctor: 'Dr. Mitchell' },
    { id: 'P-1025', name: 'Alice Smith', age: 28, condition: 'Migraine', status: 'Outpatient', room: '-', doctor: 'Dr. Chen' },
    { id: 'P-1026', name: 'Robert Brown', age: 62, condition: 'Cardiac Arrest', status: 'Critical', room: 'ICU-02', doctor: 'Dr. Johnson' },
    { id: 'P-1027', name: 'Emily Davis', age: 8, condition: 'Flu', status: 'Outpatient', room: '-', doctor: 'Dr. Thompson' },
    { id: 'P-1028', name: 'Michael Wilson', age: 35, condition: 'Fracture', status: 'Inpatient', room: '205-B', doctor: 'Dr. Rodriguez' },
]

export default function PatientsPage() {
    const { toast } = useToast()
    const [patients, setPatients] = useState(initialPatients)
    const [isRegisterOpen, setIsRegisterOpen] = useState(false)
    const [newPatient, setNewPatient] = useState({ name: '', age: '', condition: '', status: 'Outpatient', doctor: '' })

    const handleRegisterSubmit = () => {
        if (!newPatient.name || !newPatient.age || !newPatient.condition || !newPatient.doctor) {
            toast({
                title: "Validation Error",
                description: "All fields are required.",
                variant: "destructive",
            })
            return
        }

        const patient = {
            id: `P-${1029 + patients.length}`,
            name: newPatient.name,
            age: parseInt(newPatient.age),
            condition: newPatient.condition,
            status: newPatient.status,
            room: newPatient.status === 'Inpatient' ? 'TBD' : '-',
            doctor: `Dr. ${newPatient.doctor}`
        }

        setPatients([patient, ...patients])
        setIsRegisterOpen(false)
        setNewPatient({ name: '', age: '', condition: '', status: 'Outpatient', doctor: '' })

        toast({
            title: "Patient Registered",
            description: `${newPatient.name} has been successfully registered.`,
            variant: "default",
        })
    }

    return (
        <div className="space-y-6 animate-fade-in-up">
            <AdminHeader
                title="Patient Management"
                description="View and manage patient records, admissions, and discharges."
                actionLabel="Register Patient"
                onAction={() => setIsRegisterOpen(true)}
            />

            <Dialog open={isRegisterOpen} onOpenChange={setIsRegisterOpen}>
                <DialogContent className="sm:max-w-[500px] bg-slate-900 border-slate-800 text-white">
                    <DialogHeader>
                        <DialogTitle>Register New Patient</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">Name</Label>
                            <Input
                                id="name"
                                value={newPatient.name}
                                onChange={(e) => setNewPatient({ ...newPatient, name: e.target.value })}
                                className="col-span-3 bg-slate-800 border-slate-700 text-white"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="age" className="text-right">Age</Label>
                            <Input
                                id="age"
                                type="number"
                                value={newPatient.age}
                                onChange={(e) => setNewPatient({ ...newPatient, age: e.target.value })}
                                className="col-span-3 bg-slate-800 border-slate-700 text-white"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="condition" className="text-right">Diagnosis</Label>
                            <Input
                                id="condition"
                                value={newPatient.condition}
                                onChange={(e) => setNewPatient({ ...newPatient, condition: e.target.value })}
                                className="col-span-3 bg-slate-800 border-slate-700 text-white"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="status" className="text-right">Status</Label>
                            <div className="col-span-3">
                                <Select
                                    value={newPatient.status}
                                    onValueChange={(val) => setNewPatient({ ...newPatient, status: val })}
                                >
                                    <SelectTrigger className="bg-slate-800 border-slate-700 text-white">
                                        <SelectValue placeholder="Select status" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-slate-800 border-slate-700 text-white">
                                        <SelectItem value="Outpatient">Outpatient</SelectItem>
                                        <SelectItem value="Inpatient">Inpatient</SelectItem>
                                        <SelectItem value="Critical">Critical</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="doctor" className="text-right">Doctor</Label>
                            <div className="col-span-3 flex items-center gap-2">
                                <span className="text-slate-400">Dr.</span>
                                <Input
                                    id="doctor"
                                    value={newPatient.doctor}
                                    onChange={(e) => setNewPatient({ ...newPatient, doctor: e.target.value })}
                                    className="bg-slate-800 border-slate-700 text-white"
                                />
                            </div>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit" onClick={handleRegisterSubmit} className="bg-teal-600 hover:bg-teal-700 text-white">Register Patient</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <GlassCard className="p-4 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400">
                        <Activity className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-slate-400 text-sm">Total Patients</p>
                        <h3 className="text-2xl font-bold text-white">{1248 + patients.length - 5}</h3>
                    </div>
                </GlassCard>
                <GlassCard className="p-4 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center text-orange-400">
                        <Activity className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-slate-400 text-sm">Critical Care</p>
                        <h3 className="text-2xl font-bold text-white">12</h3>
                    </div>
                </GlassCard>
                <GlassCard className="p-4 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center text-green-400">
                        <Activity className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-slate-400 text-sm">Discharged Today</p>
                        <h3 className="text-2xl font-bold text-white">45</h3>
                    </div>
                </GlassCard>
            </div>

            <GlassCard className="p-0 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-white/10 text-slate-400 text-sm">
                                <th className="p-4 font-medium pl-6">ID</th>
                                <th className="p-4 font-medium">Patient Details</th>
                                <th className="p-4 font-medium">Diagnosis</th>
                                <th className="p-4 font-medium">Status</th>
                                <th className="p-4 font-medium">Assigned Doctor</th>
                                <th className="p-4 font-medium text-right pr-6">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {patients.map((patient) => (
                                <tr key={patient.id} className="group hover:bg-white/5 transition-colors">
                                    <td className="p-4 pl-6 text-slate-400 font-mono text-sm">{patient.id}</td>
                                    <td className="p-4">
                                        <div className="font-semibold text-white">{patient.name}</div>
                                        <div className="text-xs text-slate-500">{patient.age} Yrs • {patient.room}</div>
                                    </td>
                                    <td className="p-4 text-slate-300">{patient.condition}</td>
                                    <td className="p-4">
                                        <Badge variant="outline" className={`
                      ${patient.status === 'Critical' ? 'border-red-500/50 text-red-400 bg-red-500/10' :
                                                patient.status === 'Inpatient' ? 'border-blue-500/50 text-blue-400 bg-blue-500/10' :
                                                    'border-slate-600 text-slate-400'}
                    `}>
                                            {patient.status}
                                        </Badge>
                                    </td>
                                    <td className="p-4 text-slate-300 text-sm">{patient.doctor}</td>
                                    <td className="p-4 text-right pr-6">
                                        <Button variant="ghost" size="icon" className="hover:bg-white/10 text-slate-400 hover:text-white rounded-full">
                                            <FileText className="w-4 h-4" />
                                        </Button>
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
