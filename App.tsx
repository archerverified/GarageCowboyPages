import { Header } from './components/layout/Header';
import { Navigation } from './components/layout/Navigation';
import { Footer } from './components/layout/Footer';
import { useContent } from './hooks/useContent';
import type { AboutUsContent } from './types/content';

export default function App() {
  const { data: content, loading } = useContent<AboutUsContent>('about-us');

  if (loading || !content) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#fec300]"></div>
          <p className="mt-4 font-['Product_Sans:Regular',sans-serif] text-[20px] text-[#222]">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <Header />
      
      {/* Navigation Section */}
      <Navigation activeItem="about" />

      {/* Hero Section */}
      <section 
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80')` }}
      >
        <div className="relative z-10 text-center px-4">
          <h1 
            className="font-['Product_Sans_Black:Regular',sans-serif] text-[52px] text-white mb-4"
            style={{ textShadow: '0px 4px 8px rgba(0,0,0,0.5)' }}
          >
            {content.hero.headline}
          </h1>
          {content.hero.subheadline && (
            <p 
              className="font-['Product_Sans:Bold',sans-serif] text-[24px] text-white max-w-3xl mx-auto"
              style={{ textShadow: '0px 2px 4px rgba(0,0,0,0.5)' }}
            >
              {content.hero.subheadline}
            </p>
          )}
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-['Product_Sans:Bold',sans-serif] text-[48px] text-[#222] mb-6">
                {content.story.title}
              </h2>
              <div className="space-y-4">
                {content.story.paragraphs.map((paragraph, index) => (
                  <p 
                    key={index}
                    className="font-['Product_Sans:Regular',sans-serif] text-[15px] text-[#222] leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"
                alt={content.story.imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-[#f7bd15]">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-['Product_Sans:Bold',sans-serif] text-[48px] text-center text-[#222] mb-12">
            {content.values.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {content.values.items.map((value) => (
              <div
                key={value.id}
                className="bg-white p-8 rounded-lg shadow-lg text-center border-2 border-[#35363a]"
              >
                <div 
                  className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-[#fec300]"
                >
                  <span className="text-4xl">
                    {value.id === 'integrity' && '🤝'}
                    {value.id === 'quality' && '⭐'}
                    {value.id === 'service' && '💯'}
                  </span>
                </div>
                <h3 className="font-['Product_Sans:Bold',sans-serif] text-[24px] text-[#222] mb-4">
                  {value.title}
                </h3>
                <p className="font-['Product_Sans:Regular',sans-serif] text-[15px] text-[#222]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-['Product_Sans:Bold',sans-serif] text-[48px] text-center text-[#222] mb-12">
            {content.team.title}
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {content.team.members.map((member) => (
              <div
                key={member.id}
                className="text-center"
              >
                <div className="relative w-full aspect-square mb-4 rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={`https://images.unsplash.com/photo-${
                      member.id === 'deno' ? '1560250097-0b93528c311a' :
                      member.id === 'mike' ? '1472099645785-5658abf4ff4e' :
                      member.id === 'sarah' ? '1573496359142-b8d87734a5a2' :
                      '1519085360753-af0119f7b3be'
                    }?w=400&q=80`}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-['Product_Sans:Bold',sans-serif] text-[24px] text-[#222] mb-2">
                  {member.name}
                </h3>
                <p className="font-['Product_Sans:Regular',sans-serif] text-[15px] text-[#f7bd15] mb-2">
                  {member.role}
                </p>
                <p className="font-['Product_Sans:Regular',sans-serif] text-[15px] text-[#666] text-sm">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Awards Section */}
      <section className="py-20 px-4 bg-[#35363a]">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-['Product_Sans:Bold',sans-serif] text-[48px] text-center text-white mb-12">
            {content.certifications.title}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {content.certifications.items.map((cert) => (
              <div
                key={cert.id}
                className="bg-white p-6 rounded-lg flex flex-col items-center justify-center"
              >
                <div className="h-20 flex items-center justify-center mb-4">
                  <span className="text-5xl">
                    {cert.id === 'bbb' && '🏆'}
                    {cert.id === 'idea' && '💡'}
                    {cert.id === 'angie' && '🌟'}
                    {cert.id === 'homeadvisor' && '🏠'}
                  </span>
                </div>
                <p className="font-['Product_Sans:Regular',sans-serif] text-[15px] text-center text-[#222]">
                  {cert.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-[#fec300]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-['Product_Sans:Bold',sans-serif] text-[48px] text-[#222] mb-6">
            {content.cta.title}
          </h2>
          <p className="font-['Product_Sans:Bold',sans-serif] text-[24px] text-[#222] mb-8">
            {content.cta.subtitle}
          </p>
          <a
            href={`tel:${content.cta.phone}`}
            className="inline-block bg-[#35363a] text-white px-12 py-6 rounded-lg font-['Product_Sans:Bold',sans-serif] text-[22px] border-2 border-black shadow-[0px_5px_5px_0px_rgba(0,0,0,0.25)] hover:bg-[#222] transition-colors"
          >
            {content.cta.buttonText}
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
