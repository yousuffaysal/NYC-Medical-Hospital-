'use client'

import { useState } from 'react'
import { AdminHeader, GlassCard } from '@/components/admin/ui-components'
import { Badge } from '@/components/ui/badge'
import { Pill, AlertTriangle, TrendingDown, History } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
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

const initialInventory = [
    { id: 1, name: 'Paracetamol 500mg', category: 'Analgesic', stock: 4500, minStock: 1000, expiry: 'Dec 2025', status: 'In Stock' },
    { id: 2, name: 'Amoxicillin 250mg', category: 'Antibiotic', stock: 120, minStock: 200, expiry: 'Jun 2025', status: 'Low Stock' },
    { id: 3, name: 'Insulin Glargine', category: 'Diabetic', stock: 50, minStock: 50, expiry: 'Mar 2025', status: 'Critical' },
    { id: 4, name: 'Ibuprofen 400mg', category: 'NSAID', stock: 2400, minStock: 500, expiry: 'Aug 2026', status: 'In Stock' },
    { id: 5, name: 'Atorvastatin 10mg', category: 'Cardio', stock: 890, minStock: 300, expiry: 'Nov 2025', status: 'In Stock' },
]

export default function PharmacyPage() {
    const { toast } = useToast()
    const [inventory, setInventory] = useState(initialInventory)
    const [isAddOpen, setIsAddOpen] = useState(false)
    const [newMedicine, setNewMedicine] = useState({ name: '', category: '', stock: '', minStock: '', expiry: '' })

    const handleAddMedicineSubmit = () => {
        if (!newMedicine.name || !newMedicine.category || !newMedicine.stock || !newMedicine.minStock || !newMedicine.expiry) {
            toast({
                title: "Validation Error",
                description: "All fields are required.",
                variant: "destructive",
            })
            return
        }

        const medicine = {
            id: inventory.length + 1,
            name: newMedicine.name,
            category: newMedicine.category,
            stock: parseInt(newMedicine.stock),
            minStock: parseInt(newMedicine.minStock),
            expiry: newMedicine.expiry,
            status: parseInt(newMedicine.stock) < parseInt(newMedicine.minStock) ? 'Low Stock' : 'In Stock'
        }

        setInventory([medicine, ...inventory])
        setIsAddOpen(false)
        setNewMedicine({ name: '', category: '', stock: '', minStock: '', expiry: '' })

        toast({
            title: "Medicine Added",
            description: `${newMedicine.name} has been added to inventory.`,
            variant: "default",
        })
    }

    return (
        <div className="space-y-6 animate-fade-in-up">
            <AdminHeader
                title="Pharmacy & Inventory"
                description="Monitor medicine stock levels, expiry dates, and supply chain."
                actionLabel="Add Medicine"
                onAction={() => setIsAddOpen(true)}
            />

            <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
                <DialogContent className="sm:max-w-[500px] bg-slate-900 border-slate-800 text-white">
                    <DialogHeader>
                        <DialogTitle>Add New Medicine</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">Name</Label>
                            <Input
                                id="name"
                                value={newMedicine.name}
                                onChange={(e) => setNewMedicine({ ...newMedicine, name: e.target.value })}
                                className="col-span-3 bg-slate-800 border-slate-700 text-white"
                                placeholder="Medicine Name"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="category" className="text-right">Category</Label>
                            <div className="col-span-3">
                                <Select
                                    value={newMedicine.category}
                                    onValueChange={(val) => setNewMedicine({ ...newMedicine, category: val })}
                                >
                                    <SelectTrigger className="bg-slate-800 border-slate-700 text-white">
                                        <SelectValue placeholder="Select category" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-slate-800 border-slate-700 text-white">
                                        <SelectItem value="Analgesic">Analgesic</SelectItem>
                                        <SelectItem value="Antibiotic">Antibiotic</SelectItem>
                                        <SelectItem value="Diabetic">Diabetic</SelectItem>
                                        <SelectItem value="NSAID">NSAID</SelectItem>
                                        <SelectItem value="Cardio">Cardio</SelectItem>
                                        <SelectItem value="Other">Other</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="stock" className="text-right">Stock</Label>
                            <Input
                                id="stock"
                                type="number"
                                value={newMedicine.stock}
                                onChange={(e) => setNewMedicine({ ...newMedicine, stock: e.target.value })}
                                className="col-span-3 bg-slate-800 border-slate-700 text-white"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="minStock" className="text-right">Min Stock</Label>
                            <Input
                                id="minStock"
                                type="number"
                                value={newMedicine.minStock}
                                onChange={(e) => setNewMedicine({ ...newMedicine, minStock: e.target.value })}
                                className="col-span-3 bg-slate-800 border-slate-700 text-white"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="expiry" className="text-right">Expiry</Label>
                            <Input
                                id="expiry"
                                value={newMedicine.expiry}
                                onChange={(e) => setNewMedicine({ ...newMedicine, expiry: e.target.value })}
                                className="col-span-3 bg-slate-800 border-slate-700 text-white"
                                placeholder="MMM YYYY"
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit" onClick={handleAddMedicineSubmit} className="bg-teal-600 hover:bg-teal-700 text-white">Add Medicine</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Stats */}
                <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <GlassCard className="p-4 flex flex-col justify-between h-32 relative overflow-hidden">
                        <div className="absolute right-0 top-0 p-4 opacity-10"><Pill className="w-24 h-24" /></div>
                        <p className="text-slate-400 font-medium">Total Medicines</p>
                        <h3 className="text-3xl font-bold text-white">{8450 + inventory.length - 5}</h3>
                        <p className="text-teal-400 text-sm flex items-center gap-1"><TrendingDown className="w-3 h-3 rotate-180" /> +12% this month</p>
                    </GlassCard>
                    <GlassCard className="p-4 flex flex-col justify-between h-32 relative overflow-hidden bg-orange-500/10 border-orange-500/20">
                        <div className="absolute right-0 top-0 p-4 opacity-10"><AlertTriangle className="w-24 h-24 text-orange-500" /></div>
                        <p className="text-orange-200 font-medium">Low Stock Alerts</p>
                        <h3 className="text-3xl font-bold text-orange-100">{12 + inventory.filter(i => (i.status === 'Low Stock' || i.status === 'Critical') && i.id > 5).length}</h3>
                        <p className="text-orange-300 text-sm">Action Required</p>
                    </GlassCard>
                    <GlassCard className="p-4 flex flex-col justify-between h-32 relative overflow-hidden">
                        <div className="absolute right-0 top-0 p-4 opacity-10"><History className="w-24 h-24" /></div>
                        <p className="text-slate-400 font-medium">Expiring Soon</p>
                        <h3 className="text-3xl font-bold text-white">5</h3>
                        <p className="text-slate-500 text-sm">Within 30 days</p>
                    </GlassCard>
                </div>

                {/* Quick Actions / Suppliers */}
                <GlassCard className="flex flex-col justify-center gap-3">
                    <h3 className="text-white font-bold mb-1">Quick Actions</h3>
                    <Button variant="outline" className="w-full justify-start bg-slate-800 border-slate-700 hover:bg-slate-700 text-slate-300 hover:text-white">Create Purchase Order</Button>
                    <Button variant="outline" className="w-full justify-start bg-slate-800 border-slate-700 hover:bg-slate-700 text-slate-300 hover:text-white">Stock Adjustment</Button>
                    <Button variant="outline" className="w-full justify-start bg-slate-800 border-slate-700 hover:bg-slate-700 text-slate-300 hover:text-white">Supplier Directory</Button>
                </GlassCard>
            </div>

            <GlassCard className="p-0 overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-white/10 text-slate-400 text-sm">
                            <th className="p-4 font-medium pl-6">Medicine Name</th>
                            <th className="p-4 font-medium">Category</th>
                            <th className="p-4 font-medium">Stock Level</th>
                            <th className="p-4 font-medium">Expiry</th>
                            <th className="p-4 font-medium">Status</th>
                            <th className="p-4 font-medium text-right pr-6">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {inventory.map((item) => {
                            const stockPercent = Math.min(100, (item.stock / item.minStock) * 33) // Mock calculation
                            return (
                                <tr key={item.id} className="group hover:bg-white/5 transition-colors">
                                    <td className="p-4 pl-6 font-semibold text-white">{item.name}</td>
                                    <td className="p-4 text-slate-400 text-sm">{item.category}</td>
                                    <td className="p-4 w-64">
                                        <div className="flex items-center gap-3">
                                            <span className="text-xs font-mono text-slate-300 w-12 text-right">{item.stock}</span>
                                            <Progress value={stockPercent} className={`h-1.5 ${item.status === 'Critical' ? 'bg-red-500/20 [&>div]:bg-red-500' :
                                                item.status === 'Low Stock' ? 'bg-orange-500/20 [&>div]:bg-orange-500' :
                                                    'bg-teal-500/20 [&>div]:bg-teal-500'
                                                }`} />
                                        </div>
                                    </td>
                                    <td className="p-4 text-slate-400 text-sm">{item.expiry}</td>
                                    <td className="p-4">
                                        <Badge variant="outline" className={`
                          ${item.status === 'In Stock' ? 'border-teal-500/50 text-teal-400 bg-teal-500/10' :
                                                item.status === 'Low Stock' ? 'border-orange-500/50 text-orange-400 bg-orange-500/10' :
                                                    'border-red-500/50 text-red-400 bg-red-500/10 is-blink'}
                        `}>
                                            {item.status}
                                        </Badge>
                                    </td>
                                    <td className="p-4 text-right pr-6">
                                        <Button size="sm" variant="ghost" className="text-teal-400 hover:text-white hover:bg-teal-500/20">Restock</Button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </GlassCard>
        </div>
    )
}
