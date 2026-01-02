import image_7460d720a14fe20dd5eeda40f0e18dc983d0a710 from 'figma:asset/7460d720a14fe20dd5eeda40f0e18dc983d0a710.png';
import imgLogo from "figma:asset/0c2b872f2c474c2f7c570ef0cd5e8697f4e13e90.png";

export function Header() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full bg-white" data-name="Header">
      <div className="relative w-full h-[207px] flex items-center justify-center">
        {/* Logo - centered */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[414px] h-[154px]">
          <img 
            alt="Garage Cowboy Logo" 
            className="w-full h-full object-contain" 
            src={imgLogo} 
          />
        </div>
        
        {/* Emergency Badge - right side, same height as logo */}
        <div className="absolute right-[100px] top-1/2 -translate-y-1/2 h-[154px] w-auto aspect-[209/81]">
          <img 
            alt="Emergency Service Badge" 
            className="w-full h-full object-contain" 
            src={image_7460d720a14fe20dd5eeda40f0e18dc983d0a710} 
          />
        </div>
      </div>
    </div>
  );
}