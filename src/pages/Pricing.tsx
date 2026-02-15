import { Link } from 'react-router-dom';
import { ArrowRight, Headphones, MapPin, Users, Package } from 'lucide-react';
import RibbonBadge from '../components/RibbonBadge';
import ScrollReveal from '../components/ScrollReveal';

const pricingConsiderations = [
  {
    icon: Headphones,
    title: 'Support & Service',
    description: 'Pricing varies based on the level of support required - from basic email support to dedicated 24/7 assistance with priority response times.',
  },
  {
    icon: MapPin,
    title: 'Store Locations',
    description: 'Multi-location service centers receive customized pricing. Each additional branch gets special rates and consolidated management tools.',
  },
  {
    icon: Users,
    title: 'User Accounts and Roles',
    description: 'Flexible pricing adapts to your team size. Add technicians, managers, and administrators with role-based access control.',
  },
  {
    icon: Package,
    title: 'Chosen Package',
    description: 'Select from Silver or Gold packages - each designed with specific features and loyalty rates to match your business growth stage.',
  },
];

const faqs = [
  {
    q: 'Is there a free trial?',
    a: 'Yes. Every service center gets a 30-day free trial with full access to all Silver features.',
  },
  {
    q: 'Can I switch between packages?',
    a: 'Absolutely. You can upgrade or downgrade your plan at any time from your dashboard.',
  },
  {
    q: 'Are there any setup fees?',
    a: 'No setup fees. You only pay the monthly subscription after your free trial ends.',
  },
  {
    q: 'How does the loyalty system work?',
    a: 'Customers earn points based on Service Base Value × your package rate. 1,000 points = 1% discount.',
  },
];

export default function Pricing() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <ScrollReveal>
        <section className="bg-white section-padding">
        <div className="container-main text-center">
          <RibbonBadge>Pricing</RibbonBadge>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-dark leading-tight mb-6">
            Simple, <span className="text-primary">Transparent Pricing</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-medium leading-relaxed mb-8 max-w-2xl mx-auto">
            Choose the plan that fits your service center. No hidden fees, no
            long-term contracts.
          </p>
        </div>
      </section>
      </ScrollReveal>

      {/* Our Pricing Considerations */}
      <ScrollReveal delay={100}>
        <section className="bg-gray-light section-padding">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark mb-4">
              Our Pricing Considerations
            </h2>
            <p className="text-gray-medium max-w-2xl mx-auto">
              We customize pricing based on your specific business needs. Here are the key factors we consider to provide you with the best value.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {pricingConsiderations.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 h-full"
              >
                <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center mb-6">
                  <item.icon size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-medium leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/contact" className="btn-primary gap-2">
              Get Custom Quote
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* FAQs */}
      <ScrollReveal delay={100}>
        <section className="bg-white section-padding">
        <div className="container-main">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-dark text-center mb-10">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="border-b border-gray-100 pb-6"
                >
                  <h3 className="text-lg font-semibold text-dark mb-2">{faq.q}</h3>
                  <p className="text-md text-gray-medium leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>
    </div>
  );
}
