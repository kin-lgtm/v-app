import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Download,
  Smartphone,
  CheckCircle,
  FileText,
  Bell,
  BarChart3,
  Calendar,
  CreditCard,
  Gift,
  Star,
  Quote,
  Facebook,
  Instagram,
  Users,
  TrendingUp,
  Award,
} from 'lucide-react';
import AdCorner from '../components/AdCorner';
import RibbonBadge from '../components/RibbonBadge';
import ScrollReveal from '../components/ScrollReveal';

export default function Home() {

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="bg-white pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="container-main px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div>
              <RibbonBadge>Your Car's Best Friend</RibbonBadge>
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-dark leading-tight mb-6">
                Manage Your Vehicle from{' '}
                <span className="text-primary">Your Pocket</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-medium leading-relaxed mb-8 max-w-lg">
                Track service history, get reminders, book appointments, and earn rewards — all in one powerful mobile app.
              </p>

              {/* App Store Buttons */}
              <div className="flex flex-wrap gap-3 mb-8">
                <a
                  href="#"
                  className="inline-flex items-center gap-3 bg-dark hover:bg-dark/90 text-white px-6 py-3.5 rounded-xl transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-lg font-semibold -mt-1">App Store</div>
                  </div>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-3 bg-dark hover:bg-dark/90 text-white px-6 py-3.5 rounded-xl transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">GET IT ON</div>
                    <div className="text-lg font-semibold -mt-1">Google Play</div>
                  </div>
                </a>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <Star size={18} className="text-primary fill-primary" />
                  <div>
                    <div className="text-base sm:text-lg font-bold text-dark">4.8/5</div>
                    <div className="text-[10px] sm:text-xs text-gray-medium">App Rating</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={18} className="text-primary" />
                  <div>
                    <div className="text-base sm:text-lg font-bold text-dark">10K+</div>
                    <div className="text-[10px] sm:text-xs text-gray-medium">Users</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Award size={18} className="text-primary" />
                  <div>
                    <div className="text-base sm:text-lg font-bold text-dark">500+</div>
                    <div className="text-[10px] sm:text-xs text-gray-medium">Service Centers</div>
                  </div>
                </div>
              </div>
              
              {/* Social Media Icons */}
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-medium">Follow us:</span>
                <div className="flex gap-3">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} className="text-white" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 hover:opacity-90 flex items-center justify-center transition-opacity"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} className="text-white" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right - Phone Mockup */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[240px] sm:max-w-[280px] lg:max-w-[300px] mx-auto">
                {/* Phone Frame */}
                <div className="w-full bg-dark rounded-[3rem] p-3 shadow-2xl">
                  <div className="bg-white rounded-[2.5rem] overflow-hidden">
                    {/* App Screenshot */}
                    <img
                      src="/images/home.png"
                      alt="VAPP Mobile App"
                      className="w-full h-[480px] sm:h-[520px] lg:h-[560px] object-cover"
                    />
                  </div>
                </div>
                {/* Floating Elements */}
                <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-primary text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl shadow-lg">
                  <div className="text-[10px] sm:text-xs">New Release</div>
                  <div className="font-bold text-xs sm:text-sm">v2.0</div>
                </div>
                <div className="hidden sm:block absolute top-32 -left-8 lg:-left-45 bg-primary text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg shadow-2xl transform -rotate-12 border-4 border-white">
                  <div className="text-lg sm:text-xl font-bold uppercase tracking-wide">Free</div>
                  <div className="text-xl sm:text-2xl font-black uppercase tracking-wider -mt-1">Download</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      {/* <section className="bg-gray-light py-12">
        <div className="container-main px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Counter end={500} suffix="+" label="Vehicles Managed" />
            <Counter end={10} suffix="+" label="Service Centers" />
            <Counter end={1200} suffix="+" label="Appointments Booked" />
            <Counter end={98} suffix="%" label="Customer Satisfaction" />
          </div>
        </div>
      </section> */}

      {/* ===== FOR SERVICE CENTERS ===== */}
      {/* <section className="bg-white section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
           
            <div className="bg-gray-light rounded-2xl p-8">
              <div className="bg-white rounded-xl border border-gray-100 p-6">
                <h4 className="text-lg font-semibold text-dark mb-4 flex items-center gap-2">
                  <BarChart3 size={18} className="text-primary" />
                  Performance Dashboard
                </h4>
                <div className="space-y-3">
                  {[
                    { label: 'Monthly Revenue', value: 'LKR 245,000', pct: 85 },
                    { label: 'Customer Retention', value: '92%', pct: 92 },
                    { label: 'Appointments Filled', value: '78%', pct: 78 },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between text-md mb-1">
                        <span className="text-gray-medium">{item.label}</span>
                        <span className="text-lg font-semibold text-dark">
                          {item.value}
                        </span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full">
                        <div
                          className="h-2 bg-primary rounded-full"
                          style={{ width: `${item.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

      
            <div>
              <RibbonBadge>For Service Centers</RibbonBadge>
              <h2 className="text-3xl font-bold text-dark mb-6">
                Grow &amp; Digitize Your Service Center
              </h2>
              <div className="space-y-3 mb-8">
                {[
                  'Free Appointment Management',
                  'Free Customer Database',
                  'Loyalty Point System',
                  'Promote Your Center in the Mobile App',
                  'Digital Document Management',
                  'Performance Analytics Dashboard',
                  'Close-day Scheduling',
                  'Silver / Gold Subscription Packages',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-primary shrink-0" />
                    <span className="text-md text-gray-medium">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/service-centers" className="btn-primary gap-2">
                Become a Partner
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section> */}

      {/* ===== HOW IT WORKS ===== */}
      <ScrollReveal>
        <section className="bg-white section-padding">
          <div className="container-main">
            <div className="text-center mb-12">
              <RibbonBadge>Simple & Easy</RibbonBadge>
              <h2 className="text-3xl font-bold text-dark mb-4">
                Get Started in 3 Simple Steps
              </h2>
              <p className="text-gray-medium max-w-2xl mx-auto">
                Managing your vehicle has never been easier
              </p>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Download & Sign Up',
                desc: 'Get the VAPP app from App Store or Google Play. Create your free account in seconds.',
                icon: Download,
              },
              {
                step: '2',
                title: 'Add Your Vehicle',
                desc: 'Enter your vehicle details and upload important documents like insurance and warranty.',
                icon: Smartphone,
              },
              {
                step: '3',
                title: 'Start Saving Time',
                desc: 'Book services, track maintenance, earn rewards, and never miss another service date.',
                icon: CheckCircle,
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon size={32} className="text-white" />
                </div>
                <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4 -mt-10">
                  <span className="text-2xl font-bold text-primary">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">{item.title}</h3>
                <p className="text-gray-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* ===== APP FEATURES ===== */}
      <ScrollReveal delay={100}>
        <section className="bg-gray-light section-padding">
        <div className="container-main">
          <div className="text-center mb-12">
            <RibbonBadge>App Features</RibbonBadge>
            <h2 className="text-3xl font-bold text-dark mb-4">
              Everything You Need in One App
            </h2>
            <p className="text-gray-medium max-w-2xl mx-auto">
              Powerful features designed to make vehicle ownership effortless
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: FileText,
                title: 'Digital Document Storage',
                desc: 'Store warranties, manuals, and receipts securely in the cloud.',
              },
              {
                icon: Bell,
                title: 'Smart Service Reminders',
                desc: 'Never miss oil changes, insurance renewals, or service dates.',
              },
              {
                icon: BarChart3,
                title: 'Maintenance History Reports',
                desc: 'Detailed reports that help improve your vehicle resale value.',
              },
              {
                icon: Calendar,
                title: 'Instant Appointment Booking',
                desc: 'Book your next service in seconds from any service center.',
              },
              {
                icon: CreditCard,
                title: 'PayHere Secure Payments',
                desc: 'Pay for services securely through integrated PayHere gateway.',
              },
              {
                icon: Gift,
                title: 'Loyalty Points & Discounts',
                desc: 'Earn points with every service and redeem for discounts.',
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-primary rounded-xl p-6 border border-primary"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4">
                  <Icon size={32} className="text-white" />
                </div>
                <h3 className="text-lg text-lg font-semibold text-white mb-2">{title}</h3>
                <p className="text-md text-white/90 leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* ===== AD CORNER ===== */}
      <AdCorner />

      {/* ===== TESTIMONIALS ===== */}
      <ScrollReveal delay={100}>
        <section className="bg-white section-padding">
        <div className="container-main">
          <div className="text-center mb-12">
            <RibbonBadge>User Reviews</RibbonBadge>
            <h2 className="text-3xl font-bold text-dark mb-4">
              Loved by Vehicle Owners Across Sri Lanka
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: 'Nimal Fernando',
                role: 'VAPP User',
                text: "I never miss a service date anymore. The reminders and digital records keep my car in top shape.",
                rating: 5,
              },
              {
                name: 'Priya Rajapaksa',
                role: 'Vehicle Owner',
                text: "Booking appointments is so easy now. I can compare service centers and book in just a few taps!",
                rating: 5,
              },
              {
                name: 'Chaminda Silva',
                role: 'VAPP User',
                text: "Love the loyalty points feature. I've already saved LKR 5,000 on my last service!",
                rating: 5,
              },
            ].map((t) => (
              <div
                key={t.name}
                className="bg-gray-light rounded-xl p-6 border border-gray-200"
              >
                <Quote size={24} className="text-primary mb-4" />
                <p className="text-md text-gray-medium leading-relaxed mb-4">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="text-primary fill-primary"
                    />
                  ))}
                </div>
                <div>
                  <div className="text-lg font-semibold text-md text-dark">
                    {t.name}
                  </div>
                  <div className="text-xs text-gray-medium">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* ===== TRUSTED PARTNERS ===== */}
      <ScrollReveal delay={100}>
        <section className="bg-gray-light section-padding">
        <div className="container-main">
          <div className="text-center mb-12">
            <RibbonBadge>Our Network</RibbonBadge>
            <h2 className="text-3xl font-bold text-dark mb-4">
              500+ Trusted Service Centers
            </h2>
            <p className="text-gray-medium max-w-2xl mx-auto">
              Access a growing network of verified, quality service centers across Sri Lanka — all from your phone.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: CheckCircle,
                title: 'Verified Partners',
                desc: 'All service centers are verified and quality-checked for your peace of mind.',
              },
              {
                icon: TrendingUp,
                title: 'Growing Network',
                desc: 'New service centers joining weekly, giving you more options every day.',
              },
              {
                icon: Award,
                title: 'Quality Guaranteed',
                desc: 'Rate and review services to help others and maintain high standards.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-6 border border-gray-200 text-center"
              >
                <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-sm text-gray-medium">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-medium mb-4">Are you a service center owner?</p>
            <Link to="/service-centers" className="btn-outline gap-2">
              Partner With VAPP
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* ===== DOWNLOAD CTA ===== */}
      <ScrollReveal delay={100}>
        <section className="bg-white section-padding">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-gradient-to-r from-primary to-blue-600 rounded-3xl p-12 text-white">
              <h2 className="text-4xl font-bold mb-4">
                Ready to Take Control?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join 10,000+ vehicle owners who never miss a service date
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <a
                  href="#"
                  className="inline-flex items-center gap-3 bg-white text-dark hover:bg-gray-100 px-6 py-3.5 rounded-xl transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-lg font-semibold -mt-1">App Store</div>
                  </div>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-3 bg-white text-dark hover:bg-gray-100 px-6 py-3.5 rounded-xl transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">GET IT ON</div>
                    <div className="text-lg font-semibold -mt-1">Google Play</div>
                  </div>
                </a>
              </div>
              <p className="text-sm text-white/80">Free to download • No credit card required</p>
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>
    </>
  );
}
