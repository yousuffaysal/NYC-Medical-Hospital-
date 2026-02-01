'use client'

import { useState } from 'react'
import { AdminHeader, GlassCard } from '@/components/admin/ui-components'
import { Badge } from '@/components/ui/badge'
import { Star, MapPin, Phone, Mail, MoreHorizontal, Upload } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
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

const initialDoctors = [
    {
        id: 1,
        name: 'Dr. Sarah Mitchell',
        specialty: 'Cardiology',
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800&h=1000',
        rating: 4.9,
        patients: 1240,
        status: 'On Duty'
    },
    {
        id: 2,
        name: 'Dr. James Chen',
        specialty: 'Neurology',
        image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800&h=1000',
        rating: 4.8,
        patients: 890,
        status: 'In Surgery'
    },
    {
        id: 3,
        name: 'Dr. Emily Thompson',
        specialty: 'Pediatrics',
        image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800&h=1000',
        rating: 5.0,
        patients: 2100,
        status: 'Off Duty'
    },
    {
        id: 4,
        name: 'Dr. Michael Park',
        specialty: 'Emergency Medicine',
        image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800&h=1000',
        rating: 4.7,
        patients: 1540,
        status: 'On Duty'
    },
]

export default function DoctorsPage() {
    const { toast } = useToast()
    const [doctors, setDoctors] = useState(initialDoctors)
    const [isAddOpen, setIsAddOpen] = useState(false)
    const [newDoctor, setNewDoctor] = useState({ name: '', specialty: '', status: 'On Duty', image: '' })
    const [previewImage, setPreviewImage] = useState<string | null>(null)

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                const result = reader.result as string
                setPreviewImage(result)
                setNewDoctor({ ...newDoctor, image: result })
            }
            reader.readAsDataURL(file)
        }
    }

    const handleAddSubmit = () => {
        if (!newDoctor.name || !newDoctor.specialty || !newDoctor.image) {
            toast({
                title: "Validation Error",
                description: "Please fill all fields and upload an image.",
                variant: "destructive",
            })
            return
        }

        const doctor = {
            id: doctors.length + 1,
            ...newDoctor,
            rating: 5.0,
            patients: 0,
        }

        setDoctors([...doctors, doctor])
        setIsAddOpen(false)
        setNewDoctor({ name: '', specialty: '', status: 'On Duty', image: '' })
        setPreviewImage(null)

        toast({
            title: "Doctor Added",
            description: `${newDoctor.name} has been successfully added.`,
            variant: "default",
        })
    }

    return (
        <div className="space-y-6 animate-fade-in-up">
            <AdminHeader
                title="Doctor Management"
                description="Manage medical staff profiles, schedules, and performance."
                actionLabel="Add Doctor"
                onAction={() => setIsAddOpen(true)}
            />

            <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
                <DialogContent className="sm:max-w-[500px] bg-slate-900 border-slate-800 text-white">
                    <DialogHeader>
                        <DialogTitle>Add New Doctor</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="flex justify-center mb-4">
                            <div className="relative w-24 h-24 rounded-full overflow-hidden bg-slate-800 border-2 border-dashed border-slate-600 flex items-center justify-center group cursor-pointer hover:border-teal-500 transition-colors">
                                {previewImage ? (
                                    <Image src={previewImage} alt="Preview" fill className="object-cover" />
                                ) : (
                                    <Upload className="w-8 h-8 text-slate-400 group-hover:text-teal-500" />
                                )}
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                    className="absolute inset-0 opacity-0 cursor-pointer"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">Name</Label>
                            <div className="col-span-3">
                                <Input
                                    id="name"
                                    value={newDoctor.name}
                                    onChange={(e) => setNewDoctor({ ...newDoctor, name: e.target.value })}
                                    className="bg-slate-800 border-slate-700 text-white"
                                    placeholder="Dr. Name"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="specialty" className="text-right">Specialty</Label>
                            <div className="col-span-3">
                                <Input
                                    id="specialty"
                                    value={newDoctor.specialty}
                                    onChange={(e) => setNewDoctor({ ...newDoctor, specialty: e.target.value })}
                                    className="bg-slate-800 border-slate-700 text-white"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="status" className="text-right">Status</Label>
                            <div className="col-span-3">
                                <Select
                                    value={newDoctor.status}
                                    onValueChange={(val) => setNewDoctor({ ...newDoctor, status: val })}
                                >
                                    <SelectTrigger className="bg-slate-800 border-slate-700 text-white">
                                        <SelectValue placeholder="Select status" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-slate-800 border-slate-700 text-white">
                                        <SelectItem value="On Duty">On Duty</SelectItem>
                                        <SelectItem value="Off Duty">Off Duty</SelectItem>
                                        <SelectItem value="In Surgery">In Surgery</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit" onClick={handleAddSubmit} className="bg-teal-600 hover:bg-teal-700 text-white">Add Doctor</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {doctors.map((doctor) => (
                    <GlassCard key={doctor.id} className="p-0 overflow-hidden group hover:border-teal-500/30 transition-all duration-300">
                        <div className="relative h-48 w-full overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10" />
                            <Image
                                src={doctor.image}
                                alt={doctor.name}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute bottom-4 left-4 z-20">
                                <Badge className={`mb-2 ${doctor.status === 'On Duty' ? 'bg-green-500 hover:bg-green-600' :
                                    doctor.status === 'In Surgery' ? 'bg-orange-500 hover:bg-orange-600' :
                                        'bg-slate-500 hover:bg-slate-600'
                                    }`}>{doctor.status}</Badge>
                                <h3 className="font-bold text-white text-lg leading-tight">{doctor.name}</h3>
                                <p className="text-slate-300 text-sm">{doctor.specialty}</p>
                            </div>
                        </div>

                        <div className="p-4 space-y-4">
                            <div className="flex items-center justify-between text-sm">
                                <div className="flex items-center gap-1 text-yellow-400">
                                    <Star className="w-4 h-4 fill-current" />
                                    <span className="text-white font-medium">{doctor.rating}</span>
                                </div>
                                <div className="text-slate-400">
                                    <span className="text-white font-medium">{doctor.patients}</span> Patients
                                </div>
                            </div>

                            <div className="flex gap-2">
                                <Button variant="outline" className="flex-1 bg-slate-800 border-slate-700 hover:bg-slate-700 text-slate-300 hover:text-white text-xs h-8">
                                    View Profile
                                </Button>
                                <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-white">
                                    <MoreHorizontal className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                    </GlassCard>
                ))}
            </div>
        </div>
    )
}
