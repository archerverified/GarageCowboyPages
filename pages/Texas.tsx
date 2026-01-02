import { Header } from '@/components/layout/Header';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { ContactForm } from '@/components/sections/ContactFormSection/ContactForm';
import { useContent } from '@/hooks/useContent';
import type { TexasPageContent } from '@/types/content';

export default function TexasPage() {
  const { data: content, loading } = useContent<TexasPageContent>('texas-page');

  if (loading || !content) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <Header />
      
      {/* Navigation Section */}
      <Navigation activeItem="texas" />

      {/* Hero Section with Map Background */}
      <section 
        className="relative h-[600px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url('${content.hero.backgroundImage}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 
            className="gc-font-hero text-white mb-6"
            style={{ textShadow: 'var(--gc-text-shadow-lg)' }}
          >
            {content.hero.headline}
          </h1>
          <p 
            className="gc-font-h2 mb-8"
            style={{ 
              color: 'var(--gc-brand-yellow-primary)',
              textShadow: 'var(--gc-text-shadow-lg)'
            }}
          >
            {content.hero.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${content.hero.ctaPhone}`}
              className="gc-button-primary inline-block"
            >
              Call Now: {content.hero.ctaPhone}
            </a>
            <a
              href="#service-areas"
              className="bg-white text-[var(--gc-brand-black)] px-12 py-6 rounded-lg gc-font-h4 border-2 border-white hover:bg-transparent hover:text-white transition-all"
            >
              View Service Areas
            </a>
          </div>
        </div>
      </section>

      {/* Coverage Area Highlight */}
      <section 
        className="py-16 px-4"
        style={{ backgroundColor: 'var(--gc-brand-yellow-primary)' }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {content.coverage.stats.map((stat) => (
              <div key={stat.id}>
                <div className="gc-font-hero text-[var(--gc-brand-black)] mb-2">
                  {stat.value}
                </div>
                <p className="gc-font-h3 text-[var(--gc-brand-black)]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section id="service-areas" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="gc-font-h1 text-center text-[var(--gc-text-primary)] mb-4">
            {content.serviceAreas.title}
          </h2>
          <p className="gc-font-h3 text-center text-[var(--gc-text-secondary)] mb-12 max-w-3xl mx-auto">
            {content.serviceAreas.description}
          </p>

          {/* Primary Cities */}
          <div className="mb-16">
            <h3 
              className="gc-font-h2 mb-8 pb-4 border-b-4"
              style={{ 
                color: 'var(--gc-brand-yellow-secondary)',
                borderColor: 'var(--gc-brand-yellow-secondary)'
              }}
            >
              {content.serviceAreas.primaryCities.title}
            </h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {content.serviceAreas.primaryCities.cities.map((city) => (
                <div
                  key={city.id}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center"
                  style={{ border: 'var(--gc-border-button)' }}
                >
                  <h4 className="gc-font-h3 text-[var(--gc-brand-black)] mb-2">
                    {city.name}
                  </h4>
                  <p className="gc-font-label text-[var(--gc-text-secondary)] mb-4">
                    {city.county} County
                  </p>
                  <a
                    href={`tel:${content.hero.ctaPhone}`}
                    className="gc-button-submit w-full text-center block"
                  >
                    Get Service
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Cities */}
          <div>
            <h3 
              className="gc-font-h2 mb-8"
              style={{ color: 'var(--gc-brand-black)' }}
            >
              {content.serviceAreas.additionalCities.title}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {content.serviceAreas.additionalCities.cities.map((city) => (
                <div
                  key={city.id}
                  className="bg-[var(--gc-gray-light)] p-4 rounded text-center hover:bg-[var(--gc-brand-yellow-primary)] transition-colors cursor-pointer"
                >
                  <p className="gc-font-body text-[var(--gc-brand-black)]">
                    {city.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section 
        className="py-20 px-4"
        style={{ backgroundColor: 'var(--gc-brand-dark)' }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="gc-font-h1 text-center text-white mb-12">
            {content.map.title}
          </h2>
          <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
            <div className="aspect-video">
              <iframe
                src={content.map.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Service Area Map"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Texas Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="gc-font-h1 text-center text-[var(--gc-text-primary)] mb-12">
            {content.whyChooseUs.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {content.whyChooseUs.reasons.map((reason) => (
              <div
                key={reason.id}
                className="flex gap-6 p-6 rounded-lg"
                style={{ backgroundColor: 'var(--gc-gray-light)' }}
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'var(--gc-brand-yellow-primary)' }}
                >
                  <img
                    src={reason.icon}
                    alt={reason.title}
                    className="w-10 h-10"
                  />
                </div>
                <div>
                  <h3 className="gc-font-h3 text-[var(--gc-brand-black)] mb-3">
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
      </section>

      {/* Local Testimonials */}
      <section 
        className="py-20 px-4"
        style={{ backgroundColor: 'var(--gc-brand-yellow-secondary)' }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="gc-font-h1 text-center text-[var(--gc-brand-black)] mb-12">
            {content.testimonials.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {content.testimonials.items.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="flex-1">
                    <p className="gc-font-h4 text-[var(--gc-brand-black)]">
                      {testimonial.author}
                    </p>
                    <p className="gc-font-label text-[var(--gc-text-secondary)]">
                      {testimonial.location}
                    </p>
                  </div>
                  {testimonial.verified && (
                    <img
                      src="/images/verified.png"
                      alt="Verified"
                      className="w-8 h-8"
                    />
                  )}
                </div>
                <p className="gc-font-testimonial text-[var(--gc-text-primary)] mb-4">
                  "{testimonial.quote}"
                </p>
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span 
                      key={i}
                      style={{ color: 'var(--gc-brand-yellow-secondary)' }}
                    >
                      ★
                    </span>
                  ))}
                </div>
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
            Request Service in Your Area
          </h2>
          <p className="gc-font-h3 text-center text-[var(--gc-text-secondary)] mb-12">
            Get a FREE estimate within 24 hours
          </p>
          <ContactForm />
        </div>
      </section>

      {/* Emergency CTA */}
      <section 
        className="py-12 px-4"
        style={{ backgroundColor: 'var(--gc-brand-dark)' }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="gc-font-h2 text-white mb-6">
            Need Emergency Garage Door Repair in Texas?
          </h2>
          <a
            href={`tel:${content.hero.ctaPhone}`}
            className="gc-button-primary inline-block text-2xl px-12 py-6"
          >
            Call Now: {content.hero.ctaPhone}
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
