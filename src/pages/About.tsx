import { Link } from 'react-router-dom';
import RibbonBadge from '../components/RibbonBadge';
import ScrollReveal from '../components/ScrollReveal';
import {
  Target,
  Heart,
  Lightbulb,
  Users,
  ArrowRight,
} from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Mission-Driven',
    desc: 'We exist to modernize vehicle service management for everyone in the ecosystem.',
  },
  {
    icon: Heart,
    title: 'Customer First',
    desc: 'Every feature is built based on real feedback from service centers and vehicle owners.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    desc: 'We continuously push boundaries to deliver smarter and more efficient solutions.',
  },
  {
    icon: Users,
    title: 'Community',
    desc: 'VAPP is more than software — it\'s a network that connects people and businesses.',
  },
];

const timeline = [
  { year: '2024', event: 'VAPP concept born — research & development begins' },
  { year: '2025', event: 'Beta launch with 5 service centers in Colombo' },
  { year: '2026', event: 'Full platform launch — mobile app, dashboard, and payments' },
];

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-white section-padding">
        <div className="container-main text-center">
          <RibbonBadge>About VAPP</RibbonBadge>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-dark leading-tight mb-6 max-w-4xl mx-auto">
            Building the Future of <span className="text-primary">Vehicle Service Management</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-medium leading-relaxed mb-8 max-w-2xl mx-auto">
            VAPP is a digital ecosystem connecting service centers and vehicle
            owners through smart technology, transparency, and trust.
          </p>
        </div>
      </section>

      {/* Story */}
      <ScrollReveal>
        <section className="bg-gray-light section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-dark mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-medium leading-relaxed">
                <p>
                  VAPP started with a simple observation: vehicle owners struggle
                  to keep track of maintenance, and service centers lack the tools
                  to manage their businesses digitally.
                </p>
                <p>
                  We set out to build a platform that bridges this gap — giving
                  service centers a powerful management dashboard and vehicle
                  owners a smart companion app for all their automotive needs.
                </p>
                <p>
                  Today, VAPP is growing into a trusted network of service
                  professionals and car owners across Sri Lanka.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-dark mb-6">Our Journey</h3>
              <div className="space-y-6">
                {timeline.map((t, i) => (
                  <div key={t.year} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center">
                        <span className="text-primary font-bold text-xs">
                          {t.year}
                        </span>
                      </div>
                      {i < timeline.length - 1 && (
                        <div className="w-px h-full bg-gray-200 mt-2" />
                      )}
                    </div>
                    <div className="pb-6">
                      <p className="text-md text-gray-medium">{t.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* Values */}
      <ScrollReveal delay={100}>
        <section className="bg-white section-padding">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark mb-4">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-gray-light rounded-xl p-6 border border-gray-200 text-center"
              >
                <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon size={22} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-dark mb-2">{title}</h3>
                <p className="text-md text-gray-medium">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* CTA */}
      <ScrollReveal delay={100}>
        <section className="bg-primary section-padding">
        <div className="container-main text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Want to Be Part of the Story?
          </h2>
          <p className="text-blue-100 mb-8 max-w-md mx-auto">
            Join the VAPP network as a service center partner or download the
            app today.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/service-centers" className="btn-white gap-2">
              Become a Partner
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white text-lg font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors duration-200 gap-2"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      </ScrollReveal>
    </div>
  );
}
