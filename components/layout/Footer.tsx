import svgPaths from "../../imports/svg-n7y1t62sck";
import imgYelp from "figma:asset/9397697363694d03af296d09c2d018d15b0d2911.png";
import imgGoogle from "figma:asset/43868bc8eeea26f5e93f178b6ba8e3677c4213e1.png";
import imgGoogleMaps from "figma:asset/9b3ea44960a30e76204c97c302b0f370311844da.png";
import imgFacebook from "figma:asset/8dbe5f86efa1469441d188b9e45cc6558331091f.png";
import imgGoogleContacts from "figma:asset/b8be1fd15140cd16a4057de1244424c380b3e121.png";
import imgEmergency from "figma:asset/96eaf4517d4bf6650d76b0ac09c0f6969f9475e6.png";
import imgLogo from "figma:asset/0c2b872f2c474c2f7c570ef0cd5e8697f4e13e90.png";

export function Footer() {
  return (
    <footer className="relative bg-white py-16 px-[101px]" data-name="Footer Section">
      <div className="max-w-[1920px] mx-auto">
        <div className="relative h-[286px]">
          {/* Logo */}
          <div className="absolute left-0 top-0 w-[352px] h-[131px]">
            <img 
              alt="Garage Cowboy Logo" 
              className="w-full h-full object-contain" 
              src={imgLogo} 
            />
          </div>

          {/* Copyright */}
          <div className="absolute left-0 bottom-0">
            <p className="font-['Product_Sans:Regular',sans-serif] text-[20px] text-black">
              ©2026 -- Garage Cowboy Limited -- All rights reserved
            </p>
          </div>

          {/* Center - Emergency Contact */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            {/* Emergency Badge */}
            <div className="w-[248px] h-[96px] mx-auto mb-4">
              <img 
                alt="Emergency Service" 
                className="w-full h-full object-contain" 
                src={imgEmergency} 
              />
            </div>
            
            {/* Contact Icon */}
            <div className="w-[30px] h-[30px] mx-auto mb-2">
              <img 
                alt="Contact" 
                className="w-full h-full object-contain" 
                src={imgGoogleContacts} 
              />
            </div>

            {/* Phone */}
            <p className="font-['Product_Sans:Regular',sans-serif] text-[32px] text-black mb-0">
              Call us at
            </p>
            <p className="font-['Product_Sans_Black:Regular',sans-serif] text-[32px] text-black">
              (871) 256-0122
            </p>
          </div>

          {/* CTA Button */}
          <div className="absolute right-[280px] top-1/2 -translate-y-1/2">
            <a
              href="#contact"
              className="bg-[#fec300] rounded-[20px] border-2 border-[#35363a] shadow-[0px_5px_5px_0px_rgba(0,0,0,0.25)] px-[32px] py-[20px] flex items-center gap-[12px] hover:bg-[#f7bd15] transition-colors"
            >
              <div className="w-[40px] h-[40px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
                  <path d={svgPaths.p3888c980} fill="#222222" />
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

          {/* Right Side - Social Links */}
          <div className="absolute right-0 top-[63px]">
            <p className="font-['Product_Sans_Black:Regular',sans-serif] text-[20px] text-black text-center mb-6">
              Find Garage Cowboy
            </p>
            
            <div className="space-y-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <img alt="Facebook" className="w-[25px] h-[25px] object-contain" src={imgFacebook} />
                <span className="font-['Product_Sans:Regular',sans-serif] text-[20px] text-black">Facebook</span>
              </a>
              
              <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <img alt="Google" className="w-[25px] h-[25px] object-contain" src={imgGoogle} />
                <span className="font-['Product_Sans:Regular',sans-serif] text-[20px] text-black">Google</span>
              </a>
              
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <img alt="Google Maps" className="w-[25px] h-[25px] object-contain" src={imgGoogleMaps} />
                <span className="font-['Product_Sans:Regular',sans-serif] text-[20px] text-black">Google Maps</span>
              </a>
              
              <a href="https://yelp.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <img alt="Yelp" className="w-[25px] h-[25px] object-contain" src={imgYelp} />
                <span className="font-['Product_Sans:Regular',sans-serif] text-[20px] text-black">Yelp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
