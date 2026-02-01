'use client'

import { useState } from 'react'
import { AdminHeader, GlassCard } from '@/components/admin/ui-components'
import { MoreHorizontal } from 'lucide-react'
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

const initialUsers = [
    { id: 1, name: 'Dr. Sarah Mitchell', role: 'Doctor', email: 'sarah.m@nycmed.com', status: 'Active', lastLogin: '2 mins ago' },
    { id: 2, name: 'James Wilson', role: 'Admin', email: 'j.wilson@nycmed.com', status: 'Active', lastLogin: '1 hour ago' },
    { id: 3, name: 'Emily Blunt', role: 'Nurse', email: 'emily.b@nycmed.com', status: 'Offline', lastLogin: '2 days ago' },
    { id: 4, name: 'Michael Chen', role: 'Doctor', email: 'm.chen@nycmed.com', status: 'Active', lastLogin: '5 mins ago' },
    { id: 5, name: 'Jessica Lee', role: 'Receptionist', email: 'jess.l@nycmed.com', status: 'Active', lastLogin: 'Just now' },
]

export default function UsersPage() {
    const { toast } = useToast()
    const [users, setUsers] = useState(initialUsers)
    const [isAddUserOpen, setIsAddUserOpen] = useState(false)
    const [newUser, setNewUser] = useState({ name: '', role: '', email: '' })

    const handleAddUserSubmit = () => {
        if (!newUser.name || !newUser.role || !newUser.email) {
            toast({
                title: "Validation Error",
                description: "All fields are required.",
                variant: "destructive",
            })
            return
        }

        const user = {
            id: users.length + 1,
            ...newUser,
            status: 'Active',
            lastLogin: 'Just now'
        }

        setUsers([user, ...users])
        setIsAddUserOpen(false)
        setNewUser({ name: '', role: '', email: '' })

        toast({
            title: "User Added",
            description: `${newUser.name} has been successfully added to the system.`,
            variant: "default",
        })
    }

    return (
        <div className="space-y-6 animate-fade-in-up">
            <AdminHeader
                title="User Management"
                description="Manage system access and permissions for hospital staff."
                actionLabel="Add User"
                onAction={() => setIsAddUserOpen(true)}
            />

            <Dialog open={isAddUserOpen} onOpenChange={setIsAddUserOpen}>
                <DialogContent className="sm:max-w-[425px] bg-slate-900 border-slate-800 text-white">
                    <DialogHeader>
                        <DialogTitle>Add New User</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Name
                            </Label>
                            <Input
                                id="name"
                                value={newUser.name}
                                onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                                className="col-span-3 bg-slate-800 border-slate-700 text-white"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="role" className="text-right">
                                Role
                            </Label>
                            <Input
                                id="role"
                                value={newUser.role}
                                onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                                className="col-span-3 bg-slate-800 border-slate-700 text-white"
                                placeholder="Admin, Doctor, Nurse..."
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="email" className="text-right">
                                Email
                            </Label>
                            <Input
                                id="email"
                                value={newUser.email}
                                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                                className="col-span-3 bg-slate-800 border-slate-700 text-white"
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit" onClick={handleAddUserSubmit} className="bg-teal-600 hover:bg-teal-700 text-white">Save changes</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            <GlassCard className="p-0 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-white/10 text-slate-400 text-sm">
                                <th className="p-4 font-medium pl-6">User</th>
                                <th className="p-4 font-medium">Role</th>
                                <th className="p-4 font-medium">Status</th>
                                <th className="p-4 font-medium">Last Activity</th>
                                <th className="p-4 font-medium text-right pr-6">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {users.map((user) => (
                                <tr key={user.id} className="group hover:bg-white/5 transition-colors">
                                    <td className="p-4 pl-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 font-bold border border-slate-700">
                                                {user.name.charAt(0)}
                                            </div>
                                            <div>
                                                <div className="font-semibold text-white">{user.name}</div>
                                                <div className="text-xs text-slate-500">{user.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${user.role === 'Admin' ? 'bg-purple-500/10 text-purple-400 border-purple-500/20' :
                                            user.role === 'Doctor' ? 'bg-teal-500/10 text-teal-400 border-teal-500/20' :
                                                'bg-slate-700/50 text-slate-400 border-slate-600'
                                            }`}>
                                            {user.role}
                                        </span>
                                    </td>
                                    <td className="p-4">
                                        <div className="flex items-center gap-2">
                                            <div className={`w-2 h-2 rounded-full ${user.status === 'Active' ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]' : 'bg-slate-500'}`} />
                                            <span className="text-slate-300 text-sm">{user.status}</span>
                                        </div>
                                    </td>
                                    <td className="p-4 text-slate-400 text-sm">{user.lastLogin}</td>
                                    <td className="p-4 text-right pr-6">
                                        <Button variant="ghost" size="icon" className="hover:bg-white/10 text-slate-400 hover:text-white rounded-full">
                                            <MoreHorizontal className="w-4 h-4" />
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
