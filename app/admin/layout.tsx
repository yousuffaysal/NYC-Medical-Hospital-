
import AdminSidebar from '@/components/admin/sidebar'

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen bg-[#0B1120] text-slate-200 font-sans selection:bg-teal-500/30 flex">
            {/* Dynamic Background Pattern */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-teal-900/20 to-transparent opacity-50" />
                <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-900/20 blur-[120px]" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-teal-900/10 blur-[100px]" />
            </div>

            <AdminSidebar />

            {/* Main Content Area */}
            <main className="flex-1 ml-20 md:ml-72 transition-all duration-300 min-h-screen relative z-10">
                <div className="p-6 md:p-10 max-w-[1600px] mx-auto">
                    {children}
                </div>
            </main>
        </div>
    )
}

