import { useState } from 'react';
import svgPaths from "../../../imports/svg-gs0rfydaig";
import imgVerified from "figma:asset/52e672056319f396f2b1bf45a03eee134d6b47d8.png";
import imgGmail from "figma:asset/a3e4058ae769d1d9a0cd5c9e6f8d349b2c963f57.png";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    zip: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-[#f7bd15] relative rounded-tl-[20px] rounded-tr-[20px] w-full border-[#303135] border-[0px_3px] border-solid">
      {/* Header */}
      <div className="bg-[rgba(255,255,255,0.5)] rounded-tl-[20px] rounded-tr-[20px] border-2 border-black py-5 px-4">
        <h2 className="font-['Product_Sans:Regular',sans-serif] text-[24px] text-[#222] text-center uppercase">
          Send us a message & GET a{' '}
          <span className="font-['Product_Sans:Bold',sans-serif]">free estimate</span>
          {' '}within{' '}
          <span className="font-['Product_Sans:Bold',sans-serif]">24 hours</span>
        </h2>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="px-8 py-8">
        <div className="flex gap-6 mb-6">
          {/* Column 1 */}
          <div className="flex-1 space-y-4">
            <div>
              <label className="font-['Product_Sans_Medium:Regular',sans-serif] text-[13px] text-[rgba(48,49,53,0.75)] mb-1 block">
                Name<span className="text-black">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-4 rounded-tl-[5px] border-2 border-[#303135] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] bg-white"
              />
            </div>
            <div>
              <label className="font-['Product_Sans_Medium:Regular',sans-serif] text-[13px] text-[rgba(48,49,53,0.75)] mb-1 block">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-4 rounded-bl-[5px] border-2 border-[#303135] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] bg-white"
              />
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex-1 space-y-4">
            <div>
              <label className="font-['Product_Sans_Medium:Regular',sans-serif] text-[13px] text-[rgba(48,49,53,0.75)] mb-1 block">
                Phone Number<span className="text-black">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-4 rounded-tr-[5px] border-2 border-[#303135] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] bg-white"
              />
            </div>
            <div>
              <label className="font-['Product_Sans_Medium:Regular',sans-serif] text-[13px] text-[rgba(48,49,53,0.75)] mb-1 block">
                Zip Code
              </label>
              <input
                type="text"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                className="w-full px-4 py-4 rounded-br-[5px] border-2 border-[#303135] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] bg-white"
              />
            </div>
          </div>

          {/* Column 3 - Message */}
          <div className="flex-[1.2]">
            <label className="font-['Product_Sans:Regular',sans-serif] text-[13px] text-[rgba(48,49,53,0.75)] mb-1 block">
              Type your message...
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-4 rounded-br-[5px] rounded-tr-[5px] border-2 border-[#222] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] bg-white resize-none"
            />
          </div>

          {/* Column 4 - Submit */}
          <div className="flex-1 flex flex-col justify-between">
            <button
              type="submit"
              className="bg-[#fec300] border-2 border-[#35363a] rounded-[5px] shadow-[0px_2px_5px_0px_#535458] px-8 py-4 font-['Product_Sans_Black:Regular',sans-serif] text-[13px] text-[#303135] hover:bg-[#f7bd15] transition-colors"
            >
              SUBMIT
            </button>
            
            <div className="flex items-center gap-2 mt-4">
              <img alt="Gmail" className="w-5 h-5" src={imgGmail} />
              <span className="font-['Product_Sans_Light:Regular',sans-serif] text-[13px] text-[#303135]">
                Powered by Google
              </span>
            </div>
          </div>
        </div>

        <p className="font-['Product_Sans_Light:Regular',sans-serif] text-[12px] text-[#303135]">
          *Required
        </p>
      </form>

      {/* Testimonials Section */}
      <div className="bg-white border-[#303135] border-[3px] border-solid mx-3 mb-8 p-8 shadow-[0px_1px_0px_0px_rgba(17,17,26,0.05),0px_0px_8px_0px_rgba(17,17,26,0.1)]">
        {/* Header */}
        <div className="text-center mb-8 relative">
          <div className="w-[33px] h-[33px] mx-auto mb-4">
            <img alt="Verified" className="w-full h-full object-contain" src={imgVerified} />
          </div>
          
          <div className="flex items-center justify-center gap-8 mb-6">
            <div className="h-[1.5px] w-[320px] bg-[#8b8b92]" />
            <div>
              <p className="font-['Product_Sans:Regular',sans-serif] text-[24px] text-[#323232] uppercase mb-0">
                TAKE IT FROM OUR
              </p>
              <p className="font-['Product_Sans:Bold',sans-serif] text-[24px] text-[#323232] uppercase">
                VALUED CUSTOMERS
              </p>
            </div>
            <div className="h-[1.5px] w-[320px] bg-[#8b8b92]" />
          </div>
        </div>

        {/* Testimonial */}
        <div className="text-center mb-6">
          <p className="font-['Product_Sans:Bold',sans-serif] text-[20px] text-black mb-2">
            "Great price, professional and courteous."
          </p>
          <p className="font-['Product_Sans:Regular',sans-serif] text-[20px] text-black">
            --T. Bradley
          </p>
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center gap-3">
          <div className="w-[10px] h-[10px] rounded-full bg-black" />
          <div className="w-[10px] h-[10px] rounded-full bg-black opacity-20" />
          <div className="w-[10px] h-[10px] rounded-full bg-black opacity-20" />
        </div>
      </div>
    </div>
  );
}
