import { Header } from '@/components/layout/Header';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { ContactForm } from '@/components/sections/ContactFormSection/ContactForm';
import { useContent } from '@/hooks/useContent';
import type { ResidentialPageContent } from '@/types/content';

export default function ResidentialPage() {
  const { data: content, loading } = useContent<ResidentialPageContent>('residential-page');

  if (loading || !content) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <Header />
      
      {/* Navigation Section */}
      <Navigation activeItem="residential" />

      {/* Hero Section */}
      <section 
        className="relative h-[600px] flex items-center bg-cover bg-center"
        style={{ backgroundImage: `url('${content.hero.backgroundImage}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-2xl">
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
                {content.hero.ctaText}
              </a>
              <a
                href={`tel:${content.hero.ctaPhone}`}
                className="bg-transparent border-2 border-white text-white px-12 py-6 rounded-lg gc-font-h4 hover:bg-white hover:text-[var(--gc-brand-black)] transition-all text-center"
              >
                Call: {content.hero.ctaPhone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section 
        className="py-16 px-4"
        style={{ backgroundColor: 'var(--gc-brand-yellow-primary)' }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {content.benefits.map((benefit) => (
              <div key={benefit.id}>
                <div className="mb-4">
                  <img
                    src={benefit.icon}
                    alt={benefit.title}
                    className="w-16 h-16 mx-auto"
                  />
                </div>
                <h3 className="gc-font-h3 text-[var(--gc-brand-black)] mb-2">
                  {benefit.title}
                </h3>
                <p className="gc-font-body text-[var(--gc-brand-black)]">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Residential Services Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="gc-font-h1 text-center text-[var(--gc-text-primary)] mb-4">
            {content.services.title}
          </h2>
          <p className="gc-font-h3 text-center text-[var(--gc-text-secondary)] mb-12 max-w-3xl mx-auto">
            {content.services.description}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.services.items.map((service) => (
              <div
                key={service.id}
                className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                style={{ border: 'var(--gc-border-input)' }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="gc-font-h3 text-white">
                      {service.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="gc-font-body text-[var(--gc-text-primary)] mb-4">
                    {service.description}
                  </p>
                  
                  <ul className="mb-6 space-y-2">
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

                  <div className="flex justify-between items-center">
                    <span className="gc-font-h4 text-[var(--gc-brand-yellow-secondary)]">
                      {service.startingPrice}
                    </span>
                    <a
                      href="#contact"
                      className="gc-button-submit"
                    >
                      Get Quote
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem-Solution Section */}
      <section 
        className="py-20 px-4"
        style={{ backgroundColor: 'var(--gc-brand-dark)' }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="gc-font-h1 text-center text-white mb-12">
            {content.problems.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {content.problems.items.map((problem) => (
              <div
                key={problem.id}
                className="bg-white p-8 rounded-lg"
              >
                <div className="flex items-start gap-4">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'var(--gc-brand-yellow-primary)' }}
                  >
                    <span className="text-2xl">{problem.icon}</span>
                  </div>
                  <div>
                    <h3 className="gc-font-h3 text-[var(--gc-brand-black)] mb-3">
                      {problem.issue}
                    </h3>
                    <p className="gc-font-body text-[var(--gc-text-primary)] mb-4">
                      {problem.description}
                    </p>
                    <div 
                      className="p-4 rounded"
                      style={{ backgroundColor: 'var(--gc-gray-light)' }}
                    >
                      <p className="gc-font-body text-[var(--gc-brand-black)]">
                        <strong>Solution:</strong> {problem.solution}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Gallery */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="gc-font-h1 text-center text-[var(--gc-text-primary)] mb-12">
            {content.gallery.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {content.gallery.items.map((item) => (
              <div
                key={item.id}
                className="rounded-lg overflow-hidden shadow-lg"
                style={{ border: 'var(--gc-border-button)' }}
              >
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <img
                      src={item.beforeImage}
                      alt="Before"
                      className="w-full h-64 object-cover"
                    />
                    <div 
                      className="absolute top-4 left-4 px-3 py-1 rounded"
                      style={{ backgroundColor: 'var(--gc-brand-dark)' }}
                    >
                      <span className="gc-font-label text-white">BEFORE</span>
                    </div>
                  </div>
                  <div className="relative">
                    <img
                      src={item.afterImage}
                      alt="After"
                      className="w-full h-64 object-cover"
                    />
                    <div 
                      className="absolute top-4 right-4 px-3 py-1 rounded"
                      style={{ backgroundColor: 'var(--gc-brand-yellow-primary)' }}
                    >
                      <span className="gc-font-label text-[var(--gc-brand-black)]">AFTER</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="gc-font-h3 text-[var(--gc-brand-black)] mb-2">
                    {item.title}
                  </h3>
                  <p className="gc-font-body text-[var(--gc-text-secondary)]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Homeowner Tips Section */}
      <section 
        className="py-20 px-4"
        style={{ backgroundColor: 'var(--gc-brand-yellow-secondary)' }}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="gc-font-h1 text-center text-[var(--gc-brand-black)] mb-12">
            {content.tips.title}
          </h2>
          <div className="space-y-6">
            {content.tips.items.map((tip) => (
              <div
                key={tip.id}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="gc-font-h3 text-[var(--gc-brand-black)] mb-3 flex items-center gap-3">
                  <span 
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm"
                    style={{ backgroundColor: 'var(--gc-brand-dark)' }}
                  >
                    {tip.id}
                  </span>
                  {tip.title}
                </h3>
                <p className="gc-font-body text-[var(--gc-text-primary)]">
                  {tip.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warranty & Guarantee */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <img
              src={content.warranty.icon}
              alt="Warranty"
              className="w-32 h-32 mx-auto"
            />
          </div>
          <h2 className="gc-font-h1 text-[var(--gc-text-primary)] mb-6">
            {content.warranty.title}
          </h2>
          <p className="gc-font-h3 text-[var(--gc-text-secondary)] mb-8">
            {content.warranty.description}
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {content.warranty.features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-lg"
                style={{ backgroundColor: 'var(--gc-gray-light)' }}
              >
                <p className="gc-font-h4 text-[var(--gc-brand-black)]">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section 
        className="py-20 px-4"
        style={{ backgroundColor: 'var(--gc-brand-yellow-primary)' }}
        id="contact"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="gc-font-h1 text-center text-[var(--gc-brand-black)] mb-4">
            Schedule Your Residential Service
          </h2>
          <p className="gc-font-h3 text-center text-[var(--gc-brand-black)] mb-12">
            Get a FREE estimate for your home within 24 hours
          </p>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
