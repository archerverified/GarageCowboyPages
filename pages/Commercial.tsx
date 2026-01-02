import { Header } from '@/components/layout/Header';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { ContactForm } from '@/components/sections/ContactFormSection/ContactForm';
import { useContent } from '@/hooks/useContent';
import type { CommercialPageContent } from '@/types/content';

export default function CommercialPage() {
  const { data: content, loading } = useContent<CommercialPageContent>('commercial-page');

  if (loading || !content) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <Header />
      
      {/* Navigation Section */}
      <Navigation activeItem="commercial" />

      {/* Hero Section */}
      <section 
        className="relative h-[600px] flex items-center bg-cover bg-center"
        style={{ backgroundImage: `url('${content.hero.backgroundImage}')` }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-3xl">
            <div className="mb-6">
              <span 
                className="gc-font-h4 px-6 py-3 rounded-full inline-block"
                style={{ backgroundColor: 'var(--gc-brand-yellow-primary)' }}
              >
                {content.hero.badge}
              </span>
            </div>
            <h1 
              className="gc-font-hero text-white mb-6"
              style={{ textShadow: 'var(--gc-text-shadow-lg)' }}
            >
              {content.hero.headline}
            </h1>
            <p 
              className="gc-font-h2 text-white mb-8"
              style={{ textShadow: 'var(--gc-text-shadow-sm)' }}
            >
              {content.hero.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="gc-button-primary inline-block text-center"
              >
                Request Commercial Quote
              </a>
              <a
                href={`tel:${content.hero.ctaPhone}`}
                className="bg-transparent border-2 border-white text-white px-12 py-6 rounded-lg gc-font-h4 hover:bg-white hover:text-[var(--gc-brand-black)] transition-all text-center"
              >
                24/7 Emergency: {content.hero.ctaPhone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section 
        className="py-12 px-4"
        style={{ backgroundColor: 'var(--gc-brand-dark)' }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {content.trustIndicators.map((indicator) => (
              <div key={indicator.id}>
                <div className="gc-font-hero text-[var(--gc-brand-yellow-primary)] mb-2">
                  {indicator.value}
                </div>
                <p className="gc-font-body text-white">
                  {indicator.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="gc-font-h1 text-center text-[var(--gc-text-primary)] mb-4">
            {content.industries.title}
          </h2>
          <p className="gc-font-h3 text-center text-[var(--gc-text-secondary)] mb-12 max-w-3xl mx-auto">
            {content.industries.description}
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {content.industries.items.map((industry) => (
              <div
                key={industry.id}
                className="group bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all text-center"
                style={{ border: 'var(--gc-border-button)' }}
              >
                <div 
                  className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: 'var(--gc-brand-yellow-primary)' }}
                >
                  <img
                    src={industry.icon}
                    alt={industry.name}
                    className="w-16 h-16"
                  />
                </div>
                <h3 className="gc-font-h3 text-[var(--gc-brand-black)] mb-4">
                  {industry.name}
                </h3>
                <p className="gc-font-body text-[var(--gc-text-secondary)] mb-6">
                  {industry.description}
                </p>
                <ul className="text-left space-y-2">
                  {industry.examples.map((example, index) => (
                    <li 
                      key={index}
                      className="gc-font-body text-[var(--gc-text-primary)] flex items-start text-sm"
                    >
                      <span 
                        className="mr-2 mt-1"
                        style={{ color: 'var(--gc-brand-yellow-secondary)' }}
                      >
                        •
                      </span>
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Services */}
      <section 
        className="py-20 px-4"
        style={{ backgroundColor: 'var(--gc-brand-yellow-secondary)' }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="gc-font-h1 text-center text-[var(--gc-brand-black)] mb-12">
            {content.services.title}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {content.services.items.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <div className="md:flex">
                  <div className="md:w-2/5 h-64 md:h-auto">
                    <img
                      src={service.imageUrl}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-3/5 p-8">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="gc-font-h3 text-[var(--gc-brand-black)]">
                        {service.title}
                      </h3>
                      {service.popular && (
                        <span 
                          className="gc-font-label px-3 py-1 rounded-full text-[var(--gc-brand-black)] text-xs uppercase"
                          style={{ backgroundColor: 'var(--gc-brand-yellow-primary)' }}
                        >
                          Popular
                        </span>
                      )}
                    </div>
                    <p className="gc-font-body text-[var(--gc-text-primary)] mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, index) => (
                        <li 
                          key={index}
                          className="gc-font-body text-[var(--gc-text-secondary)] flex items-start text-sm"
                        >
                          <span 
                            className="mr-2 mt-1"
                            style={{ color: 'var(--gc-brand-yellow-secondary)' }}
                          >
                            ✓
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#contact"
                      className="gc-button-submit"
                    >
                      Request Quote
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Commercial Clients Choose Us */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="gc-font-h1 text-center text-[var(--gc-text-primary)] mb-12">
            {content.whyChooseUs.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {content.whyChooseUs.reasons.slice(0, 3).map((reason) => (
                <div
                  key={reason.id}
                  className="flex gap-4 p-6 rounded-lg"
                  style={{ backgroundColor: 'var(--gc-gray-light)' }}
                >
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'var(--gc-brand-yellow-primary)' }}
                  >
                    <span className="text-2xl">{reason.icon}</span>
                  </div>
                  <div>
                    <h3 className="gc-font-h3 text-[var(--gc-brand-black)] mb-2">
                      {reason.title}
                    </h3>
                    <p className="gc-font-body text-[var(--gc-text-primary)]">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              {content.whyChooseUs.reasons.slice(3).map((reason) => (
                <div
                  key={reason.id}
                  className="flex gap-4 p-6 rounded-lg"
                  style={{ backgroundColor: 'var(--gc-gray-light)' }}
                >
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'var(--gc-brand-yellow-primary)' }}
                  >
                    <span className="text-2xl">{reason.icon}</span>
                  </div>
                  <div>
                    <h3 className="gc-font-h3 text-[var(--gc-brand-black)] mb-2">
                      {reason.title}
                    </h3>
                    <p className="gc-font-body text-[var(--gc-text-primary)]">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies / Projects */}
      <section 
        className="py-20 px-4"
        style={{ backgroundColor: 'var(--gc-brand-dark)' }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="gc-font-h1 text-center text-white mb-12">
            {content.caseStudies.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {content.caseStudies.items.map((study) => (
              <div
                key={study.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <div className="h-48">
                  <img
                    src={study.imageUrl}
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span 
                    className="gc-font-label px-3 py-1 rounded inline-block mb-3"
                    style={{ 
                      backgroundColor: 'var(--gc-brand-yellow-primary)',
                      color: 'var(--gc-brand-black)'
                    }}
                  >
                    {study.industry}
                  </span>
                  <h3 className="gc-font-h3 text-[var(--gc-brand-black)] mb-3">
                    {study.title}
                  </h3>
                  <p className="gc-font-body text-[var(--gc-text-primary)] mb-4">
                    {study.description}
                  </p>
                  <div 
                    className="p-4 rounded"
                    style={{ backgroundColor: 'var(--gc-gray-light)' }}
                  >
                    <p className="gc-font-body text-[var(--gc-brand-black)] mb-2">
                      <strong>Challenge:</strong> {study.challenge}
                    </p>
                    <p className="gc-font-body text-[var(--gc-brand-black)]">
                      <strong>Solution:</strong> {study.solution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Plans */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="gc-font-h1 text-center text-[var(--gc-text-primary)] mb-4">
            {content.maintenancePlans.title}
          </h2>
          <p className="gc-font-h3 text-center text-[var(--gc-text-secondary)] mb-12 max-w-3xl mx-auto">
            {content.maintenancePlans.description}
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {content.maintenancePlans.plans.map((plan) => (
              <div
                key={plan.id}
                className={`rounded-lg p-8 text-center ${
                  plan.featured 
                    ? 'shadow-2xl transform scale-105' 
                    : 'shadow-lg'
                }`}
                style={{ 
                  backgroundColor: plan.featured 
                    ? 'var(--gc-brand-yellow-primary)' 
                    : 'white',
                  border: plan.featured 
                    ? '4px solid var(--gc-brand-dark)' 
                    : 'var(--gc-border-button)'
                }}
              >
                {plan.featured && (
                  <div 
                    className="mb-4 -mt-12 mx-auto w-32 py-2 rounded-full"
                    style={{ backgroundColor: 'var(--gc-brand-dark)' }}
                  >
                    <span className="gc-font-label text-white uppercase">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="gc-font-h2 text-[var(--gc-brand-black)] mb-4">
                  {plan.name}
                </h3>
                <div className="mb-6">
                  <span className="gc-font-hero text-[var(--gc-brand-black)]">
                    {plan.price}
                  </span>
                  <span className="gc-font-body text-[var(--gc-text-secondary)]">
                    /{plan.period}
                  </span>
                </div>
                <ul className="space-y-3 mb-8 text-left">
                  {plan.features.map((feature, index) => (
                    <li 
                      key={index}
                      className="gc-font-body text-[var(--gc-text-primary)] flex items-start"
                    >
                      <span 
                        className="mr-2 mt-1"
                        style={{ color: 'var(--gc-brand-dark)' }}
                      >
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`block w-full text-center py-4 rounded-lg gc-font-h4 transition-all ${
                    plan.featured
                      ? 'bg-[var(--gc-brand-dark)] text-white hover:bg-black'
                      : 'gc-button-submit'
                  }`}
                >
                  Select Plan
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Compliance */}
      <section 
        className="py-16 px-4"
        style={{ backgroundColor: 'var(--gc-brand-yellow-secondary)' }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="gc-font-h1 text-center text-[var(--gc-brand-black)] mb-12">
            {content.certifications.title}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {content.certifications.items.map((cert) => (
              <div
                key={cert.id}
                className="bg-white p-6 rounded-lg flex flex-col items-center justify-center text-center"
              >
                <img
                  src={cert.logo}
                  alt={cert.name}
                  className="h-20 object-contain mb-4"
                />
                <p className="gc-font-label text-[var(--gc-text-primary)]">
                  {cert.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section 
        className="py-20 px-4 bg-white"
        id="contact"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="gc-font-h1 text-center text-[var(--gc-text-primary)] mb-4">
            Request a Commercial Quote
          </h2>
          <p className="gc-font-h3 text-center text-[var(--gc-text-secondary)] mb-12">
            Get a customized estimate for your business within 24 hours
          </p>
          <ContactForm />
        </div>
      </section>

      {/* Emergency Service Banner */}
      <section 
        className="py-12 px-4"
        style={{ backgroundColor: 'var(--gc-brand-dark)' }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="gc-font-h2 text-white mb-2">
            24/7 Emergency Commercial Service
          </h2>
          <p className="gc-font-h3 text-[var(--gc-gray-light)] mb-6">
            We understand your business can't wait
          </p>
          <a
            href={`tel:${content.hero.ctaPhone}`}
            className="gc-button-primary inline-block text-2xl px-12 py-6"
          >
            Emergency: {content.hero.ctaPhone}
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
