'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Star, MapPin, Clock, GraduationCap, ShieldCheck, Calendar, MessageSquare, Phone, Mail, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Header from '@/components/hospital/header'
import Footer from '@/components/hospital/footer'

// Shared Doctor Data (Duplicated for standalone page, in real app should be in @/lib/data)
const allDoctors = [
    {
        name: 'Dr. Sarah Mitchell',
        slug: 'dr-sarah-mitchell',
        specialty: 'Cardiology',
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800&h=800',
        experience: 15,
        qualifications: ['MD from Columbia University', 'Board Certified in Cardiology', 'Fellowship in Interventional Cardiology'],
        rating: 4.9,
        reviews: 128,
        bio: 'Dr. Mitchell specializes in complex cardiac cases with over 1000 successful procedures. She is renowned for her patient-centric approach and expertise in minimally invasive techniques.',
        availability: 'Mon-Fri, 9:00 AM - 5:00 PM',
        location: 'Building A, Floor 3, Suite 304',
        languages: ['English', 'Spanish'],
        insurance: ['Blue Cross', 'Aetna', 'Medicare', 'Cigna'],
        about: `Dr. Sarah Mitchell is a distinguished cardiologist with over 15 years of experience in diagnosing and treating cardiovascular diseases. She completed her medical degree at Columbia University and performed her residency at Johns Hopkins Hospital.

Processing state-of-the-art diagnostic imaging and interventional cardiology, Dr. Mitchell is committed to providing comprehensive heart care. She is an active member of the American College of Cardiology and frequently speaks at national conferences.`
    },
    {
        name: 'Dr. James Chen',
        slug: 'dr-james-chen',
        specialty: 'Neurology',
        image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800&h=800',
        experience: 12,
        qualifications: ['MD from NYU School of Medicine', 'PhD in Neuroscience', 'Board Certified in Neurology'],
        rating: 4.95,
        reviews: 94,
        bio: 'Expert in stroke treatment and neurodegenerative diseases with published research. Dr. Chen combines clinical excellence with cutting-edge research.',
        availability: 'Mon-Sat, 10:00 AM - 6:00 PM',
        location: 'Building B, Floor 2, Suite 210',
        languages: ['English', 'Mandarin'],
        insurance: ['Blue Cross', 'UnitedHealth', 'Aetna'],
        about: 'Dr. James Chen is a dual-qualified neurologist and neuroscientist. His approach integrates the latest research findings into clinical practice, offering patients access to novel therapies for conditions like Alzheimer’s, Parkinson’s, and stroke recovery.'
    },
    {
        name: 'Dr. Lisa Rodriguez',
        slug: 'dr-lisa-rodriguez',
        specialty: 'Orthopedic Surgery',
        image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800&h=800',
        experience: 18,
        qualifications: ['MD from Yale University', 'Sports Medicine Specialist', 'Minimally Invasive Techniques'],
        rating: 4.88,
        reviews: 215,
        bio: 'Pioneer in arthroscopic surgery with expertise in sports injuries and joint replacement. Former team physician for olympic athletes.',
        availability: 'Tue-Fri, 7:00 AM - 3:00 PM',
        location: 'Sports Medicine Center, Wing C',
        languages: ['English', 'Portuguese'],
        insurance: ['All Major Insurers'],
        about: 'Dr. Rodriguez focuses on getting patients back to their active lifestyles as quickly and safely as possible. Specializing in knee and shoulder reconstruction, she utilizes advanced robotic-assisted surgery techniques.'
    },
    {
        name: 'Dr. Michael Park',
        slug: 'dr-michael-park',
        specialty: 'Emergency Medicine',
        image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800&h=800',
        experience: 10,
        qualifications: ['MD from Harvard Medical School', 'Trauma Specialist', 'ACLS Instructor'],
        rating: 4.92,
        reviews: 86,
        bio: 'Experienced emergency physician with expertise in trauma and critical care. Known for calm leadership in high-pressure situations.',
        availability: 'Mon-Sun (Rotational)',
        location: 'Emergency Department',
        languages: ['English', 'Korean'],
        insurance: ['Accepted'],
        about: 'Dr. Park serves as a lead attending physician in our Level 1 Trauma Center. His dedication to rapid, accurate diagnosis and life-saving interventions has earned him multiple "Physician of the Year" awards.'
    },
    {
        name: 'Dr. Emma Thompson',
        slug: 'dr-emma-thompson',
        specialty: 'Pediatrics',
        image: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&q=80&w=800&h=800',
        experience: 8,
        qualifications: ['MD from Cornell University', 'Pediatric Specialist', 'Child Development Expert'],
        rating: 4.94,
        reviews: 180,
        bio: 'Compassionate pediatrician dedicated to providing excellent care for children. Creating a fear-free environment for young patients.',
        availability: 'Mon-Fri, 9:00 AM - 4:00 PM',
        location: 'Building D, Pediatrics Wing',
        languages: ['English', 'French'],
        insurance: ['Blue Cross', 'Medicaid', 'Aetna'],
        about: 'Dr. Thompson believes in a holistic approach to child health, addressing physical, emotional, and developmental needs. Her warm demeanor puts both children and parents at ease.'
    },
    {
        name: 'Dr. David Cohen',
        slug: 'dr-david-cohen',
        specialty: 'Oncology',
        image: 'https://images.unsplash.com/photo-1537368910025-4000c1875438?auto=format&fit=crop&q=80&w=800&h=800',
        experience: 20,
        qualifications: ['MD from Johns Hopkins', 'Medical Oncology Specialist', 'Cancer Researcher'],
        rating: 4.97,
        reviews: 142,
        bio: 'Leading oncologist with groundbreaking research in cancer immunotherapy. Providing hope through innovation.',
        availability: 'Mon-Thu, 8:00 AM - 4:00 PM',
        location: 'Cancer Center, Floor 4',
        languages: ['English', 'German', 'Hebrew'],
        insurance: ['Blue Cross', 'Medicare', 'UnitedHealth'],
        about: 'Dr. Cohen is at the forefront of personalized cancer treatment. He leads our oncology clinical trials program and works tirelessly to develop tailored treatment plans for each patient.'
    }
]

export default function DoctorDetailPage({ params }: { params: Promise<{ id: string }> }) {
    // Unwrap params using React.use() for Next.js 15+ compatibility
    const { id } = React.use(params)

    // Find doctor by slug (id)
    const doctor = allDoctors.find(d => d.slug === id)

    if (!doctor) {
        return (
            <div className="min-h-screen bg-white flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold text-slate-900 mb-4">Doctor Not Found</h1>
                <Link href="/doctors"><Button>View All Doctors</Button></Link>
            </div>
        )
    }

    return (
        <div className="bg-white min-h-screen">
            <Header />

            {/* Profile Header Block */}
            <div className="pt-32 pb-12 md:pt-40 md:pb-20 bg-slate-50 border-b border-border/50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <Link href="/doctors" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors text-sm font-semibold uppercase tracking-wider">
                        <ArrowLeft className="w-4 h-4" /> Back to Doctors
                    </Link>

                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
                        {/* Image - Rounded & Premium */}
                        <div className="relative w-full max-w-[300px] lg:max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white mx-auto lg:mx-0">
                            <Image
                                src={doctor.image}
                                alt={doctor.name}
                                fill
                                className="object-cover"
                                priority
                            />
                            {/* Verified Badge */}
                            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-primary px-4 py-2 rounded-full flex items-center gap-2 shadow-lg text-sm font-bold">
                                <ShieldCheck className="w-4 h-4" /> Board Certified
                            </div>
                        </div>

                        {/* Info Block */}
                        <div className="flex-1 text-center lg:text-left">
                            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-0 text-sm px-4 py-1.5">{doctor.specialty}</Badge>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 tracking-tight">{doctor.name}</h1>

                            {/* Stats Row */}
                            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-8 mb-8 text-sm md:text-base">
                                <div className="flex items-center gap-2">
                                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                    <span className="font-bold text-slate-900">{doctor.rating}</span>
                                    <span className="text-slate-500">({doctor.reviews} Reviews)</span>
                                </div>
                                <div className="w-1.5 h-1.5 bg-slate-300 rounded-full hidden md:block" />
                                <div className="flex items-center gap-2">
                                    <GraduationCap className="w-5 h-5 text-purple-500" />
                                    <span className="font-bold text-slate-900">{doctor.experience} Years</span>
                                    <span className="text-slate-500">Experience</span>
                                </div>
                                <div className="w-1.5 h-1.5 bg-slate-300 rounded-full hidden md:block" />
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-5 h-5 text-red-500" />
                                    <span className="text-slate-700 font-medium whitespace-nowrap">{doctor.location}</span>
                                </div>
                            </div>

                            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mb-10 mx-auto lg:mx-0">
                                {doctor.bio}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Button className="h-14 px-8 text-lg rounded-xl bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20">Book Appointment</Button>
                                <Button variant="outline" className="h-14 px-8 text-lg rounded-xl">Contact Office</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Details Grid */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
                <div className="grid lg:grid-cols-3 gap-12">

                    {/* Left: About + Video? */}
                    <div className="lg:col-span-2 space-y-12">
                        <section>
                            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                <User className="w-6 h-6 text-primary" /> About {doctor.name}
                            </h3>
                            <div className="prose prose-lg text-slate-600">
                                <p>{doctor.about}</p>
                            </div>
                        </section>

                        <section>
                            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                <GraduationCap className="w-6 h-6 text-primary" /> Qualifications
                            </h3>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {doctor.qualifications.map((q, i) => (
                                    <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                                        <div className="w-2 h-2 rounded-full bg-primary" />
                                        <span className="font-medium text-slate-700">{q}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                <MessageSquare className="w-6 h-6 text-primary" /> Patient Reviews
                            </h3>
                            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 text-center">
                                <p className="text-slate-600 italic mb-4">"Dr. Mitchell saved my life. Her attention to detail and calm demeanor made a terrifying situation manageable."</p>
                                <div className="font-bold text-slate-900">- Sarah Jenkins, Recovered Patient</div>
                            </div>
                        </section>
                    </div>

                    {/* Right: Sidebar Info */}
                    <div className="space-y-8">
                        <div className="p-8 rounded-3xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 sticky top-24">
                            <h4 className="font-bold text-lg mb-6">Clinic Information</h4>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 shrink-0">
                                        <Clock className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-slate-900">Availability</div>
                                        <div className="text-slate-500 text-sm mt-1">{doctor.availability}</div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-500 shrink-0">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-slate-900">Emergency Contact</div>
                                        <div className="text-slate-500 text-sm mt-1">+1 (555) 123-4567</div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-500 shrink-0">
                                        <ShieldCheck className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-slate-900">Accepted Insurance</div>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {doctor.insurance.map((ins, i) => (
                                                <span key={i} className="px-2 py-1 bg-white border border-slate-200 rounded-md text-xs font-medium text-slate-600">{ins}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Button className="w-full mt-8 h-12 bg-slate-900 text-white hover:bg-slate-800 rounded-xl">Request Consultation</Button>
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    )
}
