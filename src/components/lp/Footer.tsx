import { ArrowUp, MapPin, Phone } from "lucide-react";
import logoMark from "figma:asset/ae80718e0143dc4328101914130d1775a74ac11c.png";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-green-950 text-white pt-10 pb-10 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                    <img 
                        src={logoMark} 
                        alt="GENBA JIN Logo" 
                        className="h-12 w-auto object-contain"
                    />
                    <div>

                        <p className="text-xs text-gray-400 font-extrabold tracking-widest uppercase">Construction Company</p>
                    </div>
                </div>

                {/* NAP情報 (Name, Address, Phone) - MEO対策のためフッターにも明記 */}
                <div className="text-sm text-gray-300 space-y-2">
                    
                    <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 mt-1 text-[#F2A900] shrink-0" />
                        <address className="not-italic leading-relaxed">
                            〒467-0856<br />
                            愛知県名古屋市瑞穂区新開町25-18
                        </address>
                    </div>
                    {/* 電話番号がある場合はここに追加 */}
                </div>
            </div>
            
            <div className="flex flex-col items-start md:items-end gap-8">
                <div className="flex flex-col md:flex-row gap-8 items-center text-sm font-extrabold tracking-widest text-gray-300">
                    <nav className="flex flex-col md:flex-row gap-4 md:gap-8 text-center md:text-right">
                        <a href="#hero" className="hover:text-white transition-colors">HOME</a>
                        <a href="#business" className="hover:text-white transition-colors">SERVICE</a>
                        <a href="#company" className="hover:text-white transition-colors">COMPANY</a>
                        <a href="#contact" className="hover:text-white transition-colors">CONTACT</a>
                    </nav>
                </div>
                
                <button 
                    onClick={scrollToTop}
                    className="flex items-center gap-2 hover:text-[#F2A900] transition-colors text-sm font-bold tracking-widest text-gray-300"
                >
                    PAGE TOP <ArrowUp className="w-3 h-3" />
                </button>
            </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-bold tracking-widest uppercase">
            <p>&copy; Genba Jin Co., Ltd. All Rights Reserved.</p>
            <p className="hidden md:block">Nagoya, Aichi, Japan</p>
        </div>
      </div>
    </footer>
  );
}