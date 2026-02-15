import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import DemoForm from '../components/DemoForm';
import RibbonBadge from '../components/RibbonBadge';
import ScrollReveal from '../components/ScrollReveal';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'hello@vapp.lk', href: 'mailto:hello@vapp.lk' },
  { icon: Phone, label: 'Phone', value: '+94 77 123 4567', href: 'tel:+94771234567' },
  { icon: MapPin, label: 'Address', value: '170/1 Colombo - Horana Rd, Polgasowita 10320', href: '#' },
  { icon: Clock, label: 'Hours', value: 'Mon–Fri, 9am – 6pm', href: '#' },
];

export default function Contact() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <ScrollReveal>
        <section className="bg-white section-padding">
          <div className="container-main text-center">
            <RibbonBadge>Get in Touch</RibbonBadge>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-dark leading-tight mb-6">
              We'd Love to <span className="text-primary">Hear From You</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-medium leading-relaxed mb-8 max-w-2xl mx-auto">
              Whether you're a service center looking to partner or a vehicle
              owner with questions — reach out.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* Contact Details */}
      <ScrollReveal delay={100}>
        <section className=" section-padding !pt-0">
        <div className="container-main">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-primary" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 mb-0.5">{label}</div>
                  <div className="text-sm font-medium text-dark">{value}</div>
                </div>
              </a>
            ))}
          </div>

          {/* Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-dark mb-6">
                Send Us a Message
              </h2>
              <DemoForm />
            </div>

            {/* Map Location */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-dark mb-6">
                Our Location
              </h2>
              <p className="text-gray-medium mb-6">
                170/1 Colombo - Horana Rd, Polgasowita 10320, Sri Lanka
              </p>
              <div className="rounded-xl overflow-hidden border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.2827389234844!2d79.99347!3d6.84817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2507f3a6c1c1b%3A0x0!2sColombo%20-%20Horana%20Rd%2C%20Polgasowita!5e0!3m2!1sen!2slk!4v1234567890"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="VAPP Office Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>
    </div>
  );
}
