'use client'

import React from "react"
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { CheckCircle, Calendar, Clock, User, Stethoscope } from 'lucide-react'

interface AppointmentBookingProps {
  preselectedDoctor?: string
  preselectedSpecialty?: string
}

export default function AppointmentBooking({ preselectedDoctor, preselectedSpecialty }: AppointmentBookingProps) {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    department: preselectedSpecialty || '',
    doctor: preselectedDoctor || '',
    date: '',
    time: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    reason: ''
  })

  // Update form data if props change
  React.useEffect(() => {
    if (preselectedDoctor || preselectedSpecialty) {
      setFormData(prev => ({
        ...prev,
        doctor: preselectedDoctor || prev.doctor,
        department: preselectedSpecialty || prev.department
      }))
    }
  }, [preselectedDoctor, preselectedSpecialty])

  const departments = [
    'Cardiology',
    'Neurology',
    'Orthopedics',
    'Pediatrics',
    'Emergency Care',
    'Oncology'
  ]

  const doctors = {
    'Cardiology': ['Dr. Sarah Mitchell', 'Dr. John Smith'],
    'Neurology': ['Dr. James Chen', 'Dr. Emily Brown'],
    'Orthopedics': ['Dr. Lisa Rodriguez', 'Dr. Mark Johnson'],
    'Pediatrics': ['Dr. Emma Thompson', 'Dr. Robert Wilson'],
    'Emergency Care': ['Dr. Michael Park', 'Dr. Susan Davis'],
    'Oncology': ['Dr. David Cohen', 'Dr. Jennifer Lee']
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setStep(1)
      setFormData({
        department: '',
        doctor: '',
        date: '',
        time: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        reason: ''
      })
      setSubmitted(false)
    }, 3000)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center animate-reveal">
        <div className="mb-6 p-4 bg-primary/10 rounded-full">
          <CheckCircle className="w-16 h-16 text-primary animate-scale-reveal" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-3">Appointment Confirmed</h3>
        <p className="text-base text-muted-foreground mb-6">
          A confirmation has been sent to <span className="font-semibold text-foreground">{formData.email}</span>
        </p>
        <div className="bg-muted/30 rounded-2xl p-6 w-full max-w-md border border-border/50">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Your Appointment Details</p>
          <div className="space-y-3 text-left">
            <div className="flex items-center gap-3">
              <Stethoscope className="w-4 h-4 text-primary" />
              <p className="text-sm font-medium"><span className="text-muted-foreground mr-1">Specialist:</span> {formData.doctor}</p>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="w-4 h-4 text-primary" />
              <p className="text-sm font-medium"><span className="text-muted-foreground mr-1">Date:</span> {formData.date}</p>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-primary" />
              <p className="text-sm font-medium"><span className="text-muted-foreground mr-1">Time:</span> {formData.time}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const stepTitles = ['Select Care', 'Choose Time', 'Your Details']

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Modern Stepper */}
      <div className="relative">
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-muted/50 -translate-y-1/2 rounded-full" />
        <div className="relative flex justify-between z-10 px-2">
          {[1, 2, 3].map((s, i) => (
            <div key={s} className="flex flex-col items-center gap-2">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ring-4 ring-card ${s <= step
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-100'
                  : 'bg-muted text-muted-foreground scale-90'
                  }`}
              >
                {s < step ? <CheckCircle className="w-5 h-5" /> : s}
              </div>
              <span className={`text-xs font-semibold transition-colors duration-300 ${s <= step ? 'text-primary' : 'text-muted-foreground'}`}>
                {stepTitles[i]}
              </span>
            </div>
          ))}
        </div>

        {/* Progress Bar Fill */}
        <div
          className="absolute top-1/2 left-0 h-0.5 bg-primary -translate-y-1/2 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${((step - 1) / 2) * 100}%` }}
        />
      </div>

      {/* Step 1: Select Department & Doctor */}
      {step === 1 && (
        <div className="space-y-6 animate-reveal">
          <div>
            <Label htmlFor="department" className="block text-sm font-semibold text-foreground mb-3 ml-1">
              What service do you need?
            </Label>
            <Select value={formData.department} onValueChange={(val) => handleInputChange('department', val)}>
              <SelectTrigger className="border-border bg-secondary/30 h-12 rounded-xl text-base hover:bg-secondary/50 transition-colors focus:ring-primary/20">
                <SelectValue placeholder="Select a department" />
              </SelectTrigger>
              <SelectContent className="rounded-xl border-border/50 shadow-2xl bg-white z-50">
                {departments.map(dept => (
                  <SelectItem key={dept} value={dept} className="text-base py-3 cursor-pointer text-slate-700 focus:bg-teal-50 focus:text-teal-700">{dept}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {formData.department && (
            <div className="animate-reveal delay-100">
              <Label htmlFor="doctor" className="block text-sm font-semibold text-foreground mb-3 ml-1">
                Choose your specialist
              </Label>
              <Select value={formData.doctor} onValueChange={(val) => handleInputChange('doctor', val)}>
                <SelectTrigger className="border-border bg-secondary/30 h-12 rounded-xl text-base hover:bg-secondary/50 transition-colors focus:ring-primary/20">
                  <SelectValue placeholder="Select a doctor" />
                </SelectTrigger>
                <SelectContent className="rounded-xl border-border/50 shadow-2xl bg-white z-50">
                  {doctors[formData.department as keyof typeof doctors]?.map(doc => (
                    <SelectItem key={doc} value={doc} className="text-base py-3 cursor-pointer text-slate-700 focus:bg-teal-50 focus:text-teal-700">{doc}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          <Button
            type="button"
            onClick={() => formData.department && formData.doctor && setStep(2)}
            disabled={!formData.department || !formData.doctor}
            className="w-full bg-teal-600 hover:bg-teal-700 shadow-lg hover:shadow-teal-500/20 text-white mt-4 h-12 rounded-xl font-bold text-base transition-all duration-300"
          >
            Continue
          </Button>
        </div>
      )}

      {/* Step 2: Select Date & Time */}
      {step === 2 && (
        <div className="space-y-6 animate-reveal">
          <div>
            <Label htmlFor="date" className="block text-sm font-semibold text-foreground mb-3 ml-1">
              When would you like to visit?
            </Label>
            <div className="relative">
              <Input
                type="date"
                value={formData.date}
                onChange={(e) => handleInputChange('date', e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className="border-border bg-secondary/30 h-12 rounded-xl text-base hover:bg-secondary/50 transition-colors focus:ring-primary/20 pl-10 block w-full"
              />
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
            </div>
          </div>

          <div>
            <Label htmlFor="time" className="block text-sm font-semibold text-foreground mb-3 ml-1">
              Preferred time slot
            </Label>
            <Select value={formData.time} onValueChange={(val) => handleInputChange('time', val)}>
              <SelectTrigger className="border-border bg-secondary/30 h-12 rounded-xl text-base hover:bg-secondary/50 transition-colors focus:ring-primary/20">
                <SelectValue placeholder="Select a time" />
              </SelectTrigger>
              <SelectContent className="rounded-xl border-border/50 shadow-2xl bg-white z-50">
                {['09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM', '04:00 PM'].map(time => (
                  <SelectItem key={time} value={time} className="text-base py-3 cursor-pointer text-slate-700 focus:bg-teal-50 focus:text-teal-700">{time}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setStep(1)}
              className="flex-1 h-12 rounded-xl font-bold border-border hover:bg-muted"
            >
              Back
            </Button>
            <Button
              type="button"
              onClick={() => formData.date && formData.time && setStep(3)}
              disabled={!formData.date || !formData.time}
              className="flex-1 bg-teal-600 hover:bg-teal-700 shadow-lg hover:shadow-teal-500/20 text-white h-12 rounded-xl font-bold transition-all duration-300"
            >
              Continue
            </Button>
          </div>
        </div>
      )}

      {/* Step 3: Personal Information */}
      {step === 3 && (
        <div className="space-y-6 animate-reveal">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName" className="block text-xs font-semibold text-foreground mb-2 ml-1">
                First Name
              </Label>
              <Input
                type="text"
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                placeholder="John"
                className="border-border bg-secondary/30 h-12 rounded-xl text-base hover:bg-secondary/50 transition-colors focus:ring-primary/20"
              />
            </div>
            <div>
              <Label htmlFor="lastName" className="block text-xs font-semibold text-foreground mb-2 ml-1">
                Last Name
              </Label>
              <Input
                type="text"
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                placeholder="Doe"
                className="border-border bg-secondary/30 h-12 rounded-xl text-base hover:bg-secondary/50 transition-colors focus:ring-primary/20"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="email" className="block text-xs font-semibold text-foreground mb-2 ml-1">
              Email Address
            </Label>
            <div className="relative">
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="john@example.com"
                className="border-border bg-secondary/30 h-12 rounded-xl text-base hover:bg-secondary/50 transition-colors focus:ring-primary/20 pl-10"
              />
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
            </div>
          </div>

          <div>
            <Label htmlFor="phone" className="block text-xs font-semibold text-foreground mb-2 ml-1">
              Phone Number
            </Label>
            <Input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              placeholder="(555) 123-4567"
              className="border-border bg-secondary/30 h-12 rounded-xl text-base hover:bg-secondary/50 transition-colors focus:ring-primary/20"
            />
          </div>

          <div>
            <Label htmlFor="reason" className="block text-xs font-semibold text-foreground mb-2 ml-1">
              Reason for Visit (Optional)
            </Label>
            <Input
              type="text"
              value={formData.reason}
              onChange={(e) => handleInputChange('reason', e.target.value)}
              placeholder="Brief description of your concern"
              className="border-border bg-secondary/30 h-12 rounded-xl text-base hover:bg-secondary/50 transition-colors focus:ring-primary/20"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setStep(2)}
              className="flex-1 h-12 rounded-xl font-bold border-border hover:bg-muted"
            >
              Back
            </Button>
            <Button
              type="submit"
              disabled={!formData.firstName || !formData.lastName || !formData.email || !formData.phone}
              className="flex-1 bg-teal-600 hover:bg-teal-700 shadow-lg hover:shadow-teal-500/20 text-white h-12 rounded-xl font-bold transition-all duration-300"
            >
              Confirm Appointment
            </Button>
          </div>
        </div>
      )}
    </form>
  )
}
