import RibbonBadge from '../components/RibbonBadge';
import ScrollReveal from '../components/ScrollReveal';
import {
  Bell,
  BarChart3,
  Gift,
  Calendar,
  CheckCircle,
} from 'lucide-react';

const appFeatures = [
  'Digital document storage',
  'Smart service reminders',
  'Maintenance history reports',
  'Instant appointment booking',
  'Secure PayHere payments',
  'Loyalty points & discounts',
];

export default function DownloadApp() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <ScrollReveal>
        <section className="bg-white section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <RibbonBadge>Mobile App</RibbonBadge>
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-dark leading-tight mb-6">
                Your Vehicle Management <span className="text-primary">Companion</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-medium leading-relaxed mb-8">
                Download the VAPP mobile app and take control of your vehicle's
                maintenance, payments, and service history — all from your pocket.
              </p>
              <ul className="space-y-3 mb-8">
                {appFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-gray-medium">
                    <CheckCircle size={16} className="text-primary shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                {/* App Store Buttons */}
                <a
                  href="#"
                  className="inline-flex items-center gap-3 bg-dark text-white px-6 py-3 rounded-lg"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                  </svg>
                  <div>
                    <div className="text-[10px] leading-none">Download on the</div>
                    <div className="text-md text-lg font-semibold leading-tight">App Store</div>
                  </div>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-3 bg-dark text-white px-6 py-3 rounded-lg"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                  </svg>
                  <div>
                    <div className="text-[10px] leading-none">GET IT ON</div>
                    <div className="text-md text-lg font-semibold leading-tight">Google Play</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Two Phone Mockup */}
            <div className="flex justify-center lg:justify-end relative h-[400px] sm:h-[500px] lg:h-[600px]">
              {/* Left Phone - Hidden on mobile */}
              <div className="hidden md:block absolute left-0 top-12 transform -rotate-6 z-10">
                <div className="w-48 lg:w-64 bg-dark rounded-[2.5rem] p-3 shadow-2xl">
                  <div className="bg-white rounded-[2rem] overflow-hidden">
                    {/* Status Bar */}
                    <div className="bg-gray-dark h-6 flex items-center justify-between px-4 text-white text-[10px]">
                      <span>9:41</span>
                      <div className="flex gap-1">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                    </div>
                    {/* App Content */}
                    <div className="bg-white p-4 space-y-3 h-[500px]">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 bg-primary rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-xs">V</span>
                          </div>
                          <span className="font-bold text-sm text-dark">VAPP</span>
                        </div>
                        <Bell size={14} className="text-primary" />
                      </div>

                      <div className="bg-primary-light rounded-xl p-3">
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar size={12} className="text-primary" />
                          <span className="text-[10px] font-semibold text-primary">
                            Next Service
                          </span>
                        </div>
                        <div className="text-sm font-semibold text-dark">
                          Full Service Check
                        </div>
                        <div className="text-[10px] text-gray-medium mt-1">
                          AutoCare Pro — March 5
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-gray-light rounded-lg p-2 text-center">
                          <Gift size={12} className="text-primary mx-auto mb-1" />
                          <div className="text-sm font-bold text-primary">2,450</div>
                          <div className="text-[8px] text-gray-medium">Points</div>
                        </div>
                        <div className="bg-gray-light rounded-lg p-2 text-center">
                          <BarChart3 size={12} className="text-primary mx-auto mb-1" />
                          <div className="text-sm font-bold text-primary">85%</div>
                          <div className="text-[8px] text-gray-medium">Health</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Phone */}
              <div className="absolute left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-0 top-0 transform rotate-3 md:rotate-6 z-20">
                <div className="w-56 sm:w-60 lg:w-64 bg-dark rounded-[2.5rem] p-3 shadow-2xl">
                  <div className="bg-white rounded-[2rem] overflow-hidden">
                    {/* Status Bar */}
                    <div className="bg-gray-dark h-6 flex items-center justify-between px-4 text-white text-[10px]">
                      <span>9:41</span>
                      <div className="flex gap-1">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                    </div>
                    {/* App Screenshot */}
                    <img
                      src="/images/home.png"
                      alt="VAPP Mobile App"
                      className="w-full h-[500px] object-cover"
                    />
                  </div>
                </div>
                {/* Floating Badge */}
                <div className="absolute -top-3 -right-3 bg-green-500 text-white px-3 py-1.5 rounded-lg shadow-lg">
                  <div className="text-[10px]">🎉 Free</div>
                  <div className="font-bold text-xs">Download</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>
      
    </div>
  );
}
