import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { useContent } from '@/hooks/useContent';
import type { ServicesPageContent } from '@/types/content';

export default function ServicesPage() {
  const { data: content, loading } = useContent<ServicesPageContent>('services-page');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  if (loading || !content) {
    return <div>Loading...</div>;
  }

  const filteredServices = selectedCategory === 'all'
    ? content.services
    : content.services.filter(s => s.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <Header />
      
      {/* Navigation Section */}
      <Navigation activeItem="services" />

      {/* Hero Section */}
      <section 
        className="relative h-[500px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url('${content.hero.backgroundImage}')` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 
            className="gc-font-hero text-white mb-6"
            style={{ textShadow: 'var(--gc-text-shadow-lg)' }}
          >
            {content.hero.headline}
          </h1>
          <p 
            className="gc-font-h3 text-white mb-8"
            style={{ textShadow: 'var(--gc-text-shadow-sm)' }}
          >
            {content.hero.subheadline}
          </p>
          <a
            href={`tel:${content.hero.ctaPhone}`}
            className="gc-button-primary inline-block"
          >
            {content.hero.ctaText}
          </a>
        </div>
      </section>

      {/* Service Categories Filter */}
      <section className="py-8 px-4 border-b-2 border-[var(--gc-border-primary)]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-lg transition-all ${
                selectedCategory === 'all'
                  ? 'gc-button-primary'
                  : 'bg-white border-2 border-[var(--gc-border-dark)] text-[var(--gc-text-primary)] hover:bg-[var(--gc-brand-yellow-primary)]'
              }`}
            >
              All Services
            </button>
            {content.categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg transition-all gc-font-body ${
                  selectedCategory === category.id
                    ? 'gc-button-primary'
                    : 'bg-white border-2 border-[var(--gc-border-dark)] text-[var(--gc-text-primary)] hover:bg-[var(--gc-brand-yellow-primary)]'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                style={{ border: 'var(--gc-border-input)' }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform hover:scale-110"
                  />
                  {service.featured && (
                    <div 
                      className="absolute top-4 right-4 px-4 py-2 rounded-full"
                      style={{ backgroundColor: 'var(--gc-brand-yellow-primary)' }}
                    >
                      <span className="gc-font-label text-[var(--gc-brand-black)] uppercase font-bold">
                        Popular
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="gc-font-h3 text-[var(--gc-brand-black)] mb-3">
                    {service.title}
                  </h3>
                  <p className="gc-font-body text-[var(--gc-text-primary)] mb-4">
                    {service.description}
                  </p>
                  
                  {service.features && service.features.length > 0 && (
                    <ul className="mb-4 space-y-2">
                      {service.features.map((feature, index) => (
                        <li 
                          key={index}
                          className="gc-font-body text-[var(--gc-text-secondary)] flex items-start"
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
                  )}

                  {service.price && (
                    <p className="gc-font-h3 text-[var(--gc-brand-yellow-secondary)] mb-4">
                      {service.price}
                    </p>
                  )}

                  <a
                    href={service.ctaLink || `tel:${content.hero.ctaPhone}`}
                    className="gc-button-submit w-full text-center block"
                  >
                    {service.ctaText || 'Get Quote'}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Service Banner */}
      <section 
        className="py-12 px-4"
        style={{ backgroundColor: 'var(--gc-brand-dark)' }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="gc-font-h1 text-white mb-4">
            {content.emergency.title}
          </h2>
          <p className="gc-font-h3 text-[var(--gc-gray-light)] mb-6">
            {content.emergency.description}
          </p>
          <a
            href={`tel:${content.emergency.phone}`}
            className="gc-button-primary inline-block text-2xl px-12 py-6"
          >
            {content.emergency.phone}
          </a>
        </div>
      </section>

      {/* Service Process Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="gc-font-h1 text-center text-[var(--gc-text-primary)] mb-12">
            {content.process.title}
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {content.process.steps.map((step, index) => (
              <div key={step.id} className="text-center">
                <div 
                  className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center text-4xl font-bold text-white"
                  style={{ backgroundColor: 'var(--gc-brand-yellow-secondary)' }}
                >
                  {index + 1}
                </div>
                <h3 className="gc-font-h3 text-[var(--gc-brand-black)] mb-3">
                  {step.title}
                </h3>
                <p className="gc-font-body text-[var(--gc-text-secondary)]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warranty Section */}
      <section 
        className="py-16 px-4"
        style={{ backgroundColor: 'var(--gc-brand-yellow-primary)' }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <img
              src={content.warranty.icon}
              alt="Warranty Badge"
              className="w-24 h-24 mx-auto"
            />
          </div>
          <h2 className="gc-font-h1 text-[var(--gc-brand-black)] mb-4">
            {content.warranty.title}
          </h2>
          <p className="gc-font-h3 text-[var(--gc-brand-black)]">
            {content.warranty.description}
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
