import { Link } from 'react-router-dom';
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from 'lucide-react';

const footerLinks = {
  Product: [
    { name: 'Features', path: '/features' },
    { name: 'Download App', path: '/download' },
    { name: 'Pricing', path: '/pricing' },
  ],
  Company: [
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Partner With Us', path: '/service-centers' },
  ],
  Support: [
    { name: 'Help Center', path: '#' },
    { name: 'Privacy Policy', path: '#' },
    { name: 'Terms of Service', path: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="container-main section-padding !pb-8">
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/images/logo.png" 
                alt="VAPP Logo" 
                className="h-12 w-auto"
              />
              <span className="text-xl font-bold">VAPP</span>
            </div>
            <p className="text-gray-400 text-md leading-relaxed mb-6 max-w-xs">
              Your vehicle's best friend in your pocket. Manage service history, book appointments, and earn rewards — all from one app.
            </p>
            <div className="space-y-2">
              <a href="mailto:hello@vapp.lk" className="flex items-center gap-2 text-md text-gray-400 hover:text-white transition-colors">
                <Mail size={14} className="text-primary" />
                hello@vapp.lk
              </a>
              <a href="tel:+94771234567" className="flex items-center gap-2 text-md text-gray-400 hover:text-white transition-colors">
                <Phone size={14} className="text-primary" />
                +94 77 123 4567
              </a>
              <span className="flex items-center gap-2 text-md text-gray-400">
                <MapPin size={14} className="text-primary" />
                170/1 Colombo - Horana Rd, Polgasowita
              </span>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-lg font-semibold text-md mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-md text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-md text-gray-500">
            &copy; {new Date().getFullYear()} VAPP. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="text-gray-500 hover:text-primary transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
