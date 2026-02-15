import RibbonBadge from '../components/RibbonBadge';
import ScrollReveal from '../components/ScrollReveal';
import { Link } from 'react-router-dom';
import {
  Bell,
  FileText,
  BarChart3,
  Calendar,
  CreditCard,
  Fuel,
  Gift,
  MessageSquare,
  Users,
  Package,
  Megaphone,
  Target,
  CalendarClock,
  ShieldCheck,
  Download,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react';

interface FeatureItem {
  icon: LucideIcon;
  title: string;
  desc: string;
  image?: string;
}

/* ── Feature data ── */

const ownerFeatures: FeatureItem[] = [
  { icon: Bell, title: 'Intelligent Service Reminders', desc: 'Never miss oil changes, insurance renewals, or license expirations.', image: '/images/service-reminder.png' },
  { icon: FileText, title: 'Digital Document Vault', desc: 'Securely store warranties, manuals, service receipts, and reports.', image: '/images/service-record.png' },
  { icon: BarChart3, title: 'Complete Maintenance History', desc: 'Track every repair and service — increasing resale value.', image: '/images/home.png' },
  { icon: Calendar, title: 'Instant Appointment Booking', desc: 'Book trusted partner service centers in seconds.', image: '/images/appointment.png' },
  { icon: CreditCard, title: 'Secure Online Payments', desc: 'Integrated PayHere payment gateway for hassle-free transactions.', image: '/images/payment.png' },
  { icon: Fuel, title: 'Fuel Efficiency Tracking', desc: 'Monitor weekly fuel consumption and vehicle performance.', image: '/images/fuel.png' },
  { icon: Gift, title: 'Loyalty Rewards', desc: 'Earn points after each completed service and redeem for discounts.', image: '/images/loyalty-points.png' },
  { icon: MessageSquare, title: 'Real-Time Service Updates', desc: 'Service records update automatically once your appointment is completed.', image: '/images/notification.png' },
];

const centerFeatures: FeatureItem[] = [
  { icon: Calendar, title: 'Smart Appointment Management', desc: 'Manage bookings from customers directly through the platform.', image: '/images/sc/sc_appointments.png' },
  { icon: Users, title: 'Customer Management System', desc: 'Maintain digital customer profiles and complete service history.', image: '/images/sc/sc_user_management.png' },
  { icon: Package, title: 'Service & Package Management', desc: 'Define services, manage pricing, and offer Silver / Gold packages.', image: '/images/sc/sc_appointments_1.png' },
  { icon: BarChart3, title: 'Performance Analytics Dashboard', desc: 'Track revenue, services completed, and customer retention.' },
  { icon: Megaphone, title: 'Promote Your Service Center', desc: 'Get listed inside the VAPP mobile app and gain visibility.' },
  { icon: Target, title: 'Loyalty Engine Integration', desc: 'Automatically calculate and redeem loyalty points.', image: '/images/sc/closure_schedule.png' },
  { icon: CalendarClock, title: 'Service Availability Control', desc: 'Set close days and manage real-time slot availability.', image: '/images/sc/change_service_availability.png' },
  { icon: ShieldCheck, title: 'Multi-Role Access Control', desc: 'Admin, Cashier, and Data Operator roles supported.', image: '/images/sc/lgoins.png' },
];

export default function Features() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-white section-padding">
        <div className="container-main text-center">
          <RibbonBadge>Platform Features</RibbonBadge>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-dark leading-tight mb-6">
            One Platform. <span className="text-primary">Two Powerful Experiences</span>.
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-medium leading-relaxed mb-8 max-w-2xl mx-auto">
            VAPP connects vehicle owners and service centers through a smart digital
            ecosystem. Each side works independently — yet seamlessly integrates
            through appointments and service updates.
          </p>
        </div>
      </section>

      {/* ── PART 1: Vehicle Owner Mobile App ── */}
      <ScrollReveal>
        <section className="section-padding">
        <div className="container-main">
          {/* Section header */}
          <div className="text-center mb-12">
            <RibbonBadge variant="blue">For Vehicle Owners</RibbonBadge>
            <h2 className="text-3xl font-bold text-dark mb-3">
              Smart Vehicle Companion App
            </h2>
            <p className="text-lg text-gray-medium max-w-xl mx-auto">
              Everything your vehicle needs. In one app.
            </p>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ownerFeatures.map((f) => (
              <div
                key={f.title}
                className=" overflow-hidden flex flex-col items-center p-5"
              >
                {/* 3D Phone frame */}
                <div className="w-full max-w-[180px] mx-auto" style={{ perspective: '800px' }}>
                  <div
                    className="relative rounded-[24px] border-[3px] border-dark bg-dark p-1.5 transition-transform duration-500 ease-out"
                    style={{
                      transform: 'rotateY(-8deg) rotateX(4deg)',
                      transformStyle: 'preserve-3d',
                      boxShadow: '12px 12px 24px rgba(0,0,0,0.15), 4px 4px 8px rgba(0,0,0,0.1)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'rotateY(0deg) rotateX(0deg) translateY(-8px) scale(1.03)';
                      e.currentTarget.style.boxShadow = '0 20px 40px rgba(4,138,255,0.18), 0 8px 16px rgba(0,0,0,0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'rotateY(-8deg) rotateX(4deg)';
                      e.currentTarget.style.boxShadow = '12px 12px 24px rgba(0,0,0,0.15), 4px 4px 8px rgba(0,0,0,0.1)';
                    }}
                  >
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-3.5 bg-dark rounded-b-xl z-10" />
                    {/* Screen */}
                    <div className="rounded-[18px] overflow-hidden bg-white aspect-[9/17]">
                      {f.image ? (
                        <img src={f.image} alt={f.title} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gray-100">
                          <f.icon size={36} className="text-primary" />
                        </div>
                      )}
                    </div>
                    {/* Bottom bar */}
                    <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-10 h-1 bg-gray-500 rounded-full" />
                  </div>
                </div>

                {/* Description below phone */}
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-semibold text-dark mb-1">{f.title}</h3>
                  <p className="text-md text-gray-medium leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </section>
      </ScrollReveal>

      {/* ── PART 2: Service Center Management ── */}
      <ScrollReveal delay={100}>
        <section className="bg-white section-padding">
        <div className="container-main">
          {/* Section header */}
          <div className="text-center mb-12">
            <RibbonBadge variant="blue">For Service Centers</RibbonBadge>
            <h2 className="text-3xl font-bold text-dark mb-3">
              Digital Management Platform
            </h2>
            <p className="text-lg text-gray-medium max-w-xl mx-auto">
              Modernize your service center. Digitally.
            </p>
          </div>

          {/* Feature cards with laptop frames */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {centerFeatures.map((f) => (
              <div
                key={f.title}
                className=" overflow-hidden flex flex-col items-center p-5"
              >
                {/* 3D Laptop frame */}
                <div className="w-full mx-auto" style={{ perspective: '800px' }}>
                  <div
                    className="transition-transform duration-500 ease-out"
                    style={{
                      transform: 'rotateY(6deg) rotateX(-2deg)',
                      transformStyle: 'preserve-3d',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'rotateY(0deg) rotateX(0deg) translateY(-6px) scale(1.02)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'rotateY(6deg) rotateX(-2deg)';
                    }}
                  >
                    {/* Screen */}
                    <div
                      className="relative rounded-t-lg border-[3px] border-b-0 border-gray-700 bg-gray-700 p-1.5 pb-0"
                      style={{
                        boxShadow: '8px 8px 20px rgba(0,0,0,0.12), 2px 2px 6px rgba(0,0,0,0.08)',
                      }}
                    >
                      {/* Camera dot */}
                      <div className="absolute top-[3px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-gray-500 rounded-full" />
                      {/* Screen content */}
                      <div className="rounded-t-[4px] overflow-hidden bg-white aspect-[16/10] mt-1">
                        {f.image ? (
                          <img src={f.image} alt={f.title} className="w-full h-full object-cover object-top" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gray-100">
                            <f.icon size={32} className="text-primary" />
                          </div>
                        )}
                      </div>
                    </div>
                    {/* Keyboard base */}
                    <div className="h-2.5 bg-gradient-to-b from-gray-600 to-gray-500 rounded-b-lg mx-[-2px]" />
                    {/* Bottom edge / trackpad hint */}
                    <div className="h-1 bg-gray-400 rounded-b-xl mx-3" />
                  </div>
                </div>

                {/* Description below laptop */}
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-semibold text-dark mb-1">{f.title}</h3>
                  <p className="text-md text-gray-medium leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* ── Integration CTA ── */}
      <ScrollReveal delay={100}>
        <section className="bg-primary section-padding">
        <div className="container-main text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Two Experiences. One Ecosystem.
          </h2>
          <p className="text-blue-100 mb-8 max-w-lg mx-auto">
            When a vehicle owner books an appointment and the service is completed,
            records sync automatically across both platforms — creating a seamless,
            connected experience.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/download" className="btn-white gap-2">
              <Download size={18} />
              Download App
            </Link>
            <Link
              to="/service-centers"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white text-lg font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors duration-200 gap-2"
            >
              For Service Centers
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
      </ScrollReveal>
    </div>
  );
}
