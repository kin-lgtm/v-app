import { Link } from 'react-router-dom';
import RibbonBadge from '../components/RibbonBadge';
import ScrollReveal from '../components/ScrollReveal';
import {
  ArrowRight,
  Monitor,
} from 'lucide-react';
import DemoForm from '../components/DemoForm';

const steps = [
  { step: '01', title: 'Contact Us', desc: 'Reach out to VAPP and express your interest in becoming a partner service center.' },
  { step: '02', title: 'Get Verified', desc: 'Our team will verify your service center and complete the registration internally.' },
  { step: '03', title: 'Go Live', desc: 'Start receiving bookings from customers and grow your business digitally.' },
];

export default function ServiceCenters() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <ScrollReveal>
        <section className="bg-white section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <RibbonBadge>Partner with VAPP</RibbonBadge>
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-dark leading-tight mb-6">
                Join Our Network of <span className="text-primary">Trusted Partners</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-medium leading-relaxed mb-8">
                Connect with 10,000+ vehicle owners actively seeking quality service. Get discovered, grow your business, and streamline operations with our partner platform.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/pricing" className="btn-primary gap-2">
                  Become a Partner
                  <ArrowRight size={16} />
                </Link>
                <Link to="/contact" className="btn-outline gap-2">
                  Request Demo
                </Link>
              </div>
            </div>
            {/* Dashboard Preview */}
            <div className="bg-gray-light rounded-2xl p-8">
              <div className="bg-white rounded-xl border border-gray-100 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Monitor size={18} className="text-primary" />
                  <span className="text-lg font-semibold text-md text-dark">
                    Admin Dashboard
                  </span>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-primary-light rounded-lg p-3 text-center">
                      <div className="text-xl font-bold text-primary">156</div>
                      <div className="text-xs text-gray-medium">Customers</div>
                    </div>
                    <div className="bg-primary-light rounded-lg p-3 text-center">
                      <div className="text-xl font-bold text-primary">24</div>
                      <div className="text-xs text-gray-medium">Today's Bookings</div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-md mb-1">
                      <span className="text-gray-medium">Capacity</span>
                      <span className="text-lg font-semibold text-dark">78%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full">
                      <div className="h-2 bg-primary rounded-full" style={{ width: '78%' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* How It Works */}
      <ScrollReveal delay={100}>
        <section className="bg-gray-light section-padding">
        <div className="container-main">
          <div className="text-center mb-16">
            <RibbonBadge>How It Works</RibbonBadge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-4">
              Get Started in 3 Simple Steps
            </h2>
            <p className="text-base sm:text-lg text-gray-medium max-w-2xl mx-auto leading-relaxed">
              Join our network of trusted service centers and start growing your business today.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {steps.map((s) => (
              <div key={s.step} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 h-full">
                {/* Step Number Badge */}
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary rounded-xl mb-6">
                  <span className="text-2xl font-bold text-white">{s.step}</span>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-dark mb-3">{s.title}</h3>
                <p className="text-gray-medium leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </ScrollReveal>


      {/* Demo Form */}
      <ScrollReveal delay={100}>
        <section className="bg-white section-padding">
        <div className="container-main">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-dark mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-gray-medium">
                Book a free demo and see how VAPP can transform your business.
              </p>
            </div>
            <DemoForm />
          </div>
        </div>
      </section>
      </ScrollReveal>
    </div>
  );
}
