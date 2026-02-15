import { Link } from 'react-router-dom';
import RibbonBadge from '../components/RibbonBadge';
import ScrollReveal from '../components/ScrollReveal';
import {
  Bell,
  BarChart3,
  Gift,
  Smartphone,
  Shield,
  Cloud,
  CheckCircle,
} from 'lucide-react';

export default function Owners() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <ScrollReveal>
        <section className="bg-white section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <RibbonBadge>For Vehicle Owners</RibbonBadge>
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-dark leading-tight mb-6">
                Everything Your Vehicle Needs in <span className="text-primary">One App</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-medium leading-relaxed mb-8">
                From service reminders to payments to loyalty rewards — VAPP
                puts you in control of your vehicle's health.
              </p>
              <Link to="/download" className="btn-primary gap-2">
                Download Mobile App
              </Link>
            </div>
            {/* Phone Mockup */}
            <div className="flex justify-center">
              <div className="w-64 bg-gray-light rounded-[2rem] p-4 border-4 border-gray-200">
                <div className="bg-white rounded-2xl p-4 space-y-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Smartphone size={16} className="text-primary" />
                    <span className="text-lg font-semibold text-md text-dark">VAPP</span>
                  </div>
                  <div className="bg-primary-light rounded-xl p-3">
                    <div className="text-xs font-medium text-primary">Upcoming Service</div>
                    <div className="text-md text-lg font-semibold text-dark mt-1">Oil Change</div>
                    <div className="text-xs text-gray-medium">AutoCare Pro — Feb 20</div>
                  </div>
                  <div className="bg-gray-light rounded-xl p-3">
                    <div className="text-xs font-medium text-gray-medium">Loyalty Points</div>
                    <div className="text-lg font-bold text-primary">2,450</div>
                  </div>
                  <div className="bg-gray-light rounded-xl p-3">
                    <div className="text-xs font-medium text-gray-medium">Vehicle Health</div>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="h-2 flex-1 bg-gray-200 rounded-full">
                        <div className="h-2 bg-primary rounded-full" style={{ width: '85%' }} />
                      </div>
                      <span className="text-xs text-lg font-semibold text-primary">85%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* Why VAPP */}
      <ScrollReveal delay={100}>
        <section className="bg-white section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-dark mb-6">
                Why Vehicle Owners Love VAPP
              </h2>
              <div className="space-y-4">
                {[
                  { icon: Cloud, text: 'All documents stored safely in the cloud' },
                  { icon: Shield, text: 'Bank-level security for payments and data' },
                  { icon: Bell, text: 'Never miss another service date' },
                  { icon: Gift, text: 'Save money with loyalty rewards' },
                  { icon: BarChart3, text: 'Increase resale value with full history' },
                ].map(({ text }) => (
                  <div key={text} className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-primary shrink-0" />
                    <span className="text-gray-medium">{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-light rounded-2xl p-8 text-center">
              <div className="text-5xl font-bold text-primary mb-2">4.8</div>
              <div className="text-gray-medium mb-4">Average App Rating</div>
              <div className="flex justify-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className={`w-3 h-3 rounded-full ${i <= 4 ? 'bg-primary' : 'bg-primary/40'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

    </div>
  );
}
