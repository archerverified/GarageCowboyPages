import svgPaths from "../../imports/svg-gglmnz0hu1";
import imgGoogle from "figma:asset/43868bc8eeea26f5e93f178b6ba8e3677c4213e1.png";
import imgFacebook from "figma:asset/8dbe5f86efa1469441d188b9e45cc6558331091f.png";
import imgYelp from "figma:asset/9397697363694d03af296d09c2d018d15b0d2911.png";
import imgGoogleMaps from "figma:asset/9b3ea44960a30e76204c97c302b0f370311844da.png";

interface NavigationProps {
  activeItem?: 'home' | 'about' | 'services' | 'texas' | 'residential' | 'commercial';
}

export function Navigation({ activeItem = 'home' }: NavigationProps) {
  const menuItems = [
    { id: 'home', label: 'Home', href: '/' },
    { id: 'about', label: 'About Us', href: '/about-us' },
    { id: 'services', label: 'Services', href: '/services' },
    { id: 'texas', label: 'Texas', href: '/texas' },
    { id: 'residential', label: 'Residential', href: '/residential' },
    { id: 'commercial', label: 'Commercial', href: '/commercial' },
  ];

  return (
    <div className="bg-[#35363a] relative rounded-tl-[20px] rounded-tr-[20px] w-full" data-name="Nav Section">
      <div className="border-[4px_4px_0px] border-black border-solid absolute inset-0 pointer-events-none rounded-tl-[20px] rounded-tr-[20px]" />
      
      <div className="max-w-[1920px] mx-auto px-[101px] py-0 relative h-[137px] flex items-center justify-between">
        {/* Menu Items */}
        <div className="flex gap-[50px] items-center">
          {menuItems.map((item, index) => {
            const isActive = item.id === activeItem;
            const hasDropdown = item.id === 'services' || item.id === 'texas';
            
            return (
              <div key={item.id} className="relative flex items-center gap-[8px]">
                <a
                  href={item.href}
                  className={`font-['Product_Sans:Bold',sans-serif] text-[24px] uppercase ${
                    isActive ? 'text-[#eaeaea]' : 'text-white'
                  } hover:text-[#fec300] transition-colors`}
                >
                  {item.label}
                </a>
                
                {/* Dropdown Arrow */}
                {hasDropdown && (
                  <div className="w-[18px] h-[10.211px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 10.2106">
                      <path d={svgPaths.p82c3080} fill="#F7BD15" />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right Side - Social Icons + CTA */}
        <div className="flex items-center gap-[24px]">
          {/* Social Icons */}
          <div className="flex gap-[8px] items-center">
            <a href="https://google.com" target="_blank" rel="noopener noreferrer">
              <img alt="Google" className="w-[56px] h-[56px] object-contain hover:opacity-80 transition-opacity" src={imgGoogle} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img alt="Facebook" className="w-[49px] h-[56px] object-contain hover:opacity-80 transition-opacity" src={imgFacebook} />
            </a>
            <a href="https://yelp.com" target="_blank" rel="noopener noreferrer">
              <img alt="Yelp" className="w-[56px] h-[56px] object-contain hover:opacity-80 transition-opacity" src={imgYelp} />
            </a>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
              <img alt="Google Maps" className="w-[56px] h-[56px] object-contain hover:opacity-80 transition-opacity" src={imgGoogleMaps} />
            </a>
          </div>

          {/* CTA Button */}
          <a
            href="#contact"
            className="bg-[#fec300] rounded-[20px] border-2 border-[#35363a] shadow-[0px_5px_5px_0px_rgba(0,0,0,0.25)] px-[32px] py-[20px] flex items-center gap-[12px] hover:bg-[#f7bd15] transition-colors"
          >
            <div className="w-[40px] h-[40px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
                <path d={svgPaths.p38d94d00} fill="#222222" />
              </svg>
            </div>
            <div className="text-center">
              <p className="font-['Product_Sans:Bold',sans-serif] text-[22px] text-[#222] leading-none mb-1">
                SCHEDULE A
              </p>
              <p className="font-['Product_Sans_Black:Regular',sans-serif] text-[22px] text-[#222] leading-none">
                <span className="bg-clip-text bg-gradient-to-b from-[rgba(63,63,63,0.22)] to-[#000000]" style={{ WebkitTextFillColor: 'transparent' }}>FREE</span>
                {' INSPECTION'}
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}