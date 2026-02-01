'use client'

import { useState } from 'react'
import { AdminHeader, GlassCard } from '@/components/admin/ui-components'
import { Badge } from '@/components/ui/badge'
import { DollarSign, CreditCard, FileText, Download, TrendingUp, AlertCircle } from 'lucide-react'
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

const initialInvoices = [
    { id: 'INV-2024-001', patient: 'Alice Smith', amount: 150.00, status: 'Paid', date: 'Oct 24, 2024', method: 'Credit Card' },
    { id: 'INV-2024-002', patient: 'Robert Brown', amount: 3500.00, status: 'Pending Insurance', date: 'Oct 23, 2024', method: 'Insurance (Aetna)' },
    { id: 'INV-2024-003', patient: 'John Doe', amount: 45.00, status: 'Paid', date: 'Oct 23, 2024', method: 'Cash' },
    { id: 'INV-2024-004', patient: 'Michael Wilson', amount: 1200.00, status: 'Overdue', date: 'Oct 15, 2024', method: 'Insurance (BlueCross)' },
    { id: 'INV-2024-005', patient: 'Emily Davis', amount: 75.00, status: 'Pending', date: 'Oct 24, 2024', method: 'Credit Card' },
]

export default function BillingPage() {
    const { toast } = useToast()
    const [invoices, setInvoices] = useState(initialInvoices)
    const [isAddOpen, setIsAddOpen] = useState(false)
    const [newInvoice, setNewInvoice] = useState({ patient: '', item: '', description: '', amount: '', status: 'Pending', method: 'Credit Card', date: 'Oct 25, 2024' })

    const handleAddInvoiceSubmit = () => {
        if (!newInvoice.patient || !newInvoice.amount || !newInvoice.item) {
            toast({
                title: "Validation Error",
                description: "Patient, Item, and Amount are required.",
                variant: "destructive",
            })
            return
        }

        const invoice = {
            id: `INV-2024-00${invoices.length + 1}`,
            patient: newInvoice.patient,
            item: newInvoice.item,
            description: newInvoice.description,
            amount: parseFloat(newInvoice.amount),
            status: newInvoice.status,
            date: newInvoice.date,
            method: newInvoice.method
        }

        setInvoices([invoice, ...invoices])
        setIsAddOpen(false)
        setNewInvoice({ patient: '', item: '', description: '', amount: '', status: 'Pending', method: 'Credit Card', date: 'Oct 25, 2024' })

        toast({
            title: "Invoice Created",
            description: `Invoice for ${newInvoice.patient} has been generated.`,
            variant: "default",
        })
    }

    return (
        <div className="space-y-6 animate-fade-in-up">
            <AdminHeader
                title="Billing & Finance"
                description="Manage patient invoices, insurance claims, and hospital revenue."
                actionLabel="Create Invoice"
                onAction={() => setIsAddOpen(true)}
            />

            <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
                <DialogContent className="sm:max-w-[500px] bg-slate-900 border-slate-800 text-white">
                    <DialogHeader>
                        <DialogTitle>Create New Invoice</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="patient" className="text-right">Patient</Label>
                            <Input
                                id="patient"
                                value={newInvoice.patient}
                                onChange={(e) => setNewInvoice({ ...newInvoice, patient: e.target.value })}
                                className="col-span-3 bg-slate-800 border-slate-700 text-white"
                                placeholder="Patient Name"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="item" className="text-right">Item</Label>
                            <Input
                                id="item"
                                value={newInvoice.item}
                                onChange={(e) => setNewInvoice({ ...newInvoice, item: e.target.value })}
                                className="col-span-3 bg-slate-800 border-slate-700 text-white"
                                placeholder="Service or Item"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="description" className="text-right">Description</Label>
                            <Input
                                id="description"
                                value={newInvoice.description}
                                onChange={(e) => setNewInvoice({ ...newInvoice, description: e.target.value })}
                                className="col-span-3 bg-slate-800 border-slate-700 text-white"
                                placeholder="Details (Optional)"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="amount" className="text-right">Amount ($)</Label>
                            <Input
                                id="amount"
                                type="number"
                                value={newInvoice.amount}
                                onChange={(e) => setNewInvoice({ ...newInvoice, amount: e.target.value })}
                                className="col-span-3 bg-slate-800 border-slate-700 text-white"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="method" className="text-right">Payment</Label>
                            <div className="col-span-3">
                                <Select
                                    value={newInvoice.method}
                                    onValueChange={(val) => setNewInvoice({ ...newInvoice, method: val })}
                                >
                                    <SelectTrigger className="bg-slate-800 border-slate-700 text-white">
                                        <SelectValue placeholder="Select method" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-slate-800 border-slate-700 text-white">
                                        <SelectItem value="Credit Card">Credit Card</SelectItem>
                                        <SelectItem value="Cash">Cash</SelectItem>
                                        <SelectItem value="Insurance (Aetna)">Insurance (Aetna)</SelectItem>
                                        <SelectItem value="Insurance (BlueCross)">Insurance (BlueCross)</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="status" className="text-right">Status</Label>
                            <div className="col-span-3">
                                <Select
                                    value={newInvoice.status}
                                    onValueChange={(val) => setNewInvoice({ ...newInvoice, status: val })}
                                >
                                    <SelectTrigger className="bg-slate-800 border-slate-700 text-white">
                                        <SelectValue placeholder="Select status" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-slate-800 border-slate-700 text-white">
                                        <SelectItem value="Pending">Pending</SelectItem>
                                        <SelectItem value="Paid">Paid</SelectItem>
                                        <SelectItem value="Overdue">Overdue</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit" onClick={handleAddInvoiceSubmit} className="bg-teal-600 hover:bg-teal-700 text-white">Generate Invoice</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* Revenue Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <GlassCard className="p-6 relative overflow-hidden bg-gradient-to-br from-indigo-900/50 to-indigo-800/20 border-indigo-500/20">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-indigo-200 font-medium mb-1">Total Revenue (Oct)</p>
                            <h3 className="text-3xl font-bold text-white">${(124500 + invoices.reduce((sum, inv) => sum + inv.amount, 0) - initialInvoices.reduce((sum, inv) => sum + inv.amount, 0)).toLocaleString()}</h3>
                        </div>
                        <div className="p-3 bg-indigo-500/20 rounded-xl text-indigo-400"><DollarSign className="w-6 h-6" /></div>
                    </div>
                    <div className="mt-4 flex items-center text-sm text-indigo-300">
                        <TrendingUp className="w-4 h-4 mr-1" /> +8.4% vs last month
                    </div>
                </GlassCard>

                <GlassCard className="p-6">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-slate-400 font-medium mb-1">Pending Claims</p>
                            <h3 className="text-3xl font-bold text-white">${(42800 + invoices.filter(i => i.status.includes('Insurance')).reduce((sum, i) => sum + i.amount, 0) - initialInvoices.filter(i => i.status.includes('Insurance')).reduce((sum, i) => sum + i.amount, 0)).toLocaleString()}</h3>
                        </div>
                        <div className="p-3 bg-slate-800 rounded-xl text-slate-400"><FileText className="w-6 h-6" /></div>
                    </div>
                    <div className="mt-4 w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-yellow-500 h-full w-[45%]" />
                    </div>
                    <p className="text-xs text-slate-500 mt-2">45% processing</p>
                </GlassCard>

                <GlassCard className="p-6">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-slate-400 font-medium mb-1">Overdue Invoices</p>
                            <h3 className="text-3xl font-bold text-white">${(3200 + invoices.filter(i => i.status === 'Overdue').reduce((sum, i) => sum + i.amount, 0) - initialInvoices.filter(i => i.status === 'Overdue').reduce((sum, i) => sum + i.amount, 0)).toLocaleString()}</h3>
                        </div>
                        <div className="p-3 bg-slate-800 rounded-xl text-slate-400"><AlertCircle className="w-6 h-6 text-red-400" /></div>
                    </div>
                    <Button variant="link" className="text-red-400 p-0 h-auto text-xs mt-4">Send Reminders &rarr;</Button>
                </GlassCard>
            </div>

            <GlassCard className="p-0 overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-white/10 text-slate-400 text-sm">
                            <th className="p-4 font-medium pl-6">Invoice ID</th>
                            <th className="p-4 font-medium">Patient</th>
                            <th className="p-4 font-medium">Date</th>
                            <th className="p-4 font-medium">Amount</th>
                            <th className="p-4 font-medium">Payment Method</th>
                            <th className="p-4 font-medium">Status</th>
                            <th className="p-4 font-medium text-right pr-6">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {invoices.map((inv) => (
                            <tr key={inv.id} className="group hover:bg-white/5 transition-colors">
                                <td className="p-4 pl-6 text-slate-400 font-mono text-xs">{inv.id}</td>
                                <td className="p-4 font-semibold text-white">{inv.patient}</td>
                                <td className="p-4 text-slate-400 text-sm">{inv.date}</td>
                                <td className="p-4 font-bold text-white">${inv.amount.toFixed(2)}</td>
                                <td className="p-4 text-slate-400 text-sm flex items-center gap-2">
                                    <CreditCard className="w-3 h-3" /> {inv.method}
                                </td>
                                <td className="p-4">
                                    <Badge variant="outline" className={`
                      ${inv.status === 'Paid' ? 'border-green-500/50 text-green-400 bg-green-500/10' :
                                            inv.status === 'Overdue' ? 'border-red-500/50 text-red-400 bg-red-500/10' :
                                                'border-yellow-500/50 text-yellow-400 bg-yellow-500/10'}
                    `}>
                                        {inv.status}
                                    </Badge>
                                </td>
                                <td className="p-4 text-right pr-6">
                                    <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white">
                                        <Download className="w-4 h-4" />
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


