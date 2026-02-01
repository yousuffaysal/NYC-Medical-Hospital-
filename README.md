# NYC Medical Advanced Care 🏥

![NYC Medical Banner](/public/images/booking-illustration.png)

**A Premium, Next-Gen Hospital Management System**

NYC Medical Advanced Care is a state-of-the-art web application designed to streamline hospital operations, enhance patient experience, and provide robust administrative control. Built with a focus on **visual excellence**, **smooth interactions**, and **comprehensive functionality**.

---

## ✨ Key Features

### 🎨 Frontend & Experience
*   **Premium Aesthetic**: A clean, light-themed editorial design inspired by top-tier medical journals.
*   **Smooth Animations**: "Arising" scroll animations and micro-interactions powered by `Framer Motion` for a polished feel.
*   **Responsive**: Fully responsive layouts optimized for mobile, tablet, and desktop.
*   **Editorial News**: A redesigned news section featuring floating glass cards and refined typography.

### 🏥 Patient Portal (Public)
*   **Appointment Booking**: Intuitive scheduling system with doctor and specialty selection.
*   **Doctor Directory**: Browse potential physicians by specialty.
*   **Services Overview**: Detailed information on hospital departments and capabilities.
*   **Live Updates**: "News & Insights" section for the latest medical breakthroughs and hospital announcements.

### 🛠️ Administrator Dashboard
A powerful, centralized control panel located at `/admin`.

| Module | Description |
| :--- | :--- |
| **📊 Analytics** | Real-time overview of hospital KPIs, patient flow, and occupancy. |
| **🗓️ Appointments** | Manage upcoming visits, reschedule, or cancel patient bookings. |
| **🧑‍⚕️ Doctors** | Staff management, scheduling, and profile updates. |
| **🤒 Patients** | Electronic Health Records (EHR) access and patient history. |
| **🛏️ Bed Management** | Track bed availability and ward occupancy in real-time. |
| **💊 Pharmacy** | Inventory tracking for medications and prescriptions. |
| **🧪 Lab** | Manage laboratory tests, results, and sample tracking. |
| **💰 Billing** | Invoice generation, insurance processing, and revenue tracking. |
| **🛡️ Security** | Access control logs and system security settings. |
| **📢 Notifications** | System-wide alerts and communication. |
| **👥 Users** | Role-based access control (RBAC) for staff accounts. |
| **📈 Reports** | Generate detailed PDF/CSV reports for audits. |

---

## 🚀 Tech Stack

*   **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
*   **Language**: TypeScript
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **UI Components**: [Shadcn UI](https://ui.shadcn.com/)
*   **Icons**: [Lucide React](https://lucide.dev/)
*   **Animations**: [Framer Motion](https://www.framer.com/motion/)
*   **Forms**: React Hook Form + Zod

---

## 📂 Project Structure

```bash
├── app/
│   ├── (public)/          # Public facing pages (Home, About, Doctors, etc.)
│   ├── admin/             # Secured Admin Dashboard modules
│   ├── api/               # Next.js API Routes
│   └── layout.tsx         # Root layout with providers
├── components/
│   ├── hospital/          # Feature-specific components (Hero, Services, etc.)
│   └── ui/                # Reusable UI primitives (Buttons, Cards, Modals)
└── public/                # Static assets (images, icons)
```

---

## ⚡ Getting Started

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/yousuffaysal/NYC-Medical-Hospital-.git
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    ```

4.  **Open the app**:
    Visit `http://localhost:3000` to see the Public Portal.
    Visit `http://localhost:3000/admin` to access the Admin Dashboard.

---

## 📝 License

This project is proprietary software designed for NYC Medical Advanced Care. All rights reserved.
