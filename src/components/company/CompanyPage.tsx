import { motion } from "motion/react";
import { Contact } from "../home/Contact"; // Renders null
import { Heart, TrendingUp, Package, ArrowLeftRight, Phone } from "lucide-react";

export function CompanyPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1706851133383-3d8bfeccdd97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwc3RlZWwlMjBiZWFtcyUyMGJsdWUlMjBzdHJ1Y3R1cmV8ZW58MXx8fHwxNzY1MDc3ODQyfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Construction Site"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0b1c3e]/60 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent" />
        </div>
        <div className="relative z-10 text-center text-white pt-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-serif font-medium tracking-widest mb-2"
          >
            会社情報
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-sm md:text-base font-sans tracking-[0.2em] opacity-80 uppercase"
          >
            information
          </motion.p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-16">
            {/* Left Content */}
            <div className="w-full md:w-1/2 relative">
               <div className="relative z-10">
                 <div className="relative">
                   <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] md:text-[15rem] font-serif font-bold text-emerald-300 leading-none tracking-widest opacity-30 whitespace-nowrap pointer-events-none select-none -z-10">
                     Company
                   </span>
                   <h2 className="text-2xl md:text-3xl font-bold text-[#10b981] leading-relaxed mb-6">
                     インフラ整備を基本とした<br />総合建設会社です。
                   </h2>
                 </div>
                 <div className="w-full h-[2px] bg-[#facc15] mb-8" />
                 
                 <p className="text-gray-700 leading-loose mb-6">
                   私たち現場ジンは、建設や解体などを請負う総合建設会社です。建設のことでお困りの際はお気軽にご相談ください。
                 </p>
               </div>
            </div>

            {/* Right Image */}
            <div className="w-full md:w-1/2 relative">
              <div className="relative z-10 rounded-sm overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1640236889592-99fdc210494d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXIlMjB3YWxraW5nJTIwb24lMjByZWJhciUyMHNpdGUlMjBoZWxtZXR8ZW58MXx8fHwxNzY1MDc3ODQyfDA&ixlib=rb-4.1.0&q=80&w=1080" 
                  alt="Construction Worker" 
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
              </div>
              {/* Blue Offset Box */}
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-[#10b981] -z-10 rounded-sm" />
            </div>
          </div>
        </div>
      </section>

      {/* SDGs Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-[#009ebb] tracking-tighter mb-1">
              SUSTAINABLE
            </h3>
            <h3 className="text-3xl md:text-4xl font-bold text-[#009ebb] tracking-tighter mb-4">
              DEVELOPMENT <span className="text-gray-600">GOALS</span>
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-3xl mx-auto">
            {/* Goal 3 */}
            <div className="bg-[#4c9f38] aspect-square p-4 flex flex-col justify-between text-white rounded-sm">
               <span className="text-xl font-bold self-start">3</span>
               <div className="self-center">
                  <Heart className="w-12 h-12 fill-current" />
               </div>
               <span className="text-xs font-bold leading-tight text-left">すべての人に<br/>健康と福祉を</span>
            </div>

            {/* Goal 8 */}
            <div className="bg-[#a21942] aspect-square p-4 flex flex-col justify-between text-white rounded-sm">
               <span className="text-xl font-bold self-start">8</span>
               <div className="self-center">
                  <TrendingUp className="w-12 h-12" />
               </div>
               <span className="text-xs font-bold leading-tight text-left">働きがいも<br/>経済成長も</span>
            </div>

            {/* Goal 9 */}
            <div className="bg-[#fd6925] aspect-square p-4 flex flex-col justify-between text-white rounded-sm">
               <span className="text-xl font-bold self-start">9</span>
               <div className="self-center">
                  <Package className="w-12 h-12" />
               </div>
               <span className="text-xs font-bold leading-tight text-left">産業と技術革新の<br/>基盤をつくろう</span>
            </div>

            {/* Goal 10 */}
            <div className="bg-[#dd1367] aspect-square p-4 flex flex-col justify-between text-white rounded-sm">
               <span className="text-xl font-bold self-start">10</span>
               <div className="self-center">
                  <ArrowLeftRight className="w-12 h-12" />
               </div>
               <span className="text-xs font-bold leading-tight text-left">人や国の不平等を<br/>なくそう</span>
            </div>
          </div>

          <div className="text-sm text-gray-600 space-y-4 font-medium">
            <p>当社は、国連が提唱する「持続可能な開発目標(SDGs)」に賛同し、SDGsの達成に向けた取組を行っていく事を宣言します。</p>
            <p>2021年5月1日 株式会社現場ジン</p>
          </div>
        </div>
      </section>

      {/* Company Info Header with Watermark */}
      <section className="pt-10 pb-4 text-center relative overflow-hidden">
         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none">
             <span className="text-[80px] md:text-[120px] font-serif text-emerald-100/50 italic">Company</span>
         </div>
         <div className="relative z-10">
            <h2 className="text-3xl font-bold text-[#10b981] mb-2">会社情報</h2>
            <div className="w-24 h-1 bg-[#10b981] mx-auto" />
         </div>
      </section>

      {/* New Company Info Cards Section */}
      <section className="pb-24 bg-gray-50 pt-12">
        <div className="container mx-auto px-6 max-w-5xl space-y-6">
          
          {/* Name Card */}
          <InfoCard title="会社名">
            <p className="text-gray-600 font-medium">株式会社現場ジン</p>
          </InfoCard>

          {/* Address Card */}
          <InfoCard title="アドレス">
            <p className="text-gray-600">〒457-0856 名古屋市南区南陽通6丁目1番地</p>
            <p className="text-gray-600 flex items-center justify-center gap-2 mt-1">
              <Phone className="w-4 h-4 fill-current" />
              052-698-3003
            </p>
          </InfoCard>

          {/* Representative Card */}
          <InfoCard title="代表">
            <p className="text-gray-600">代表取締役　青松 栄甫</p>
          </InfoCard>

          {/* Capital Card */}
          <InfoCard title="資本金">
            <p className="text-gray-600">800万円</p>
          </InfoCard>

          {/* History Card */}
          <InfoCard title="沿革">
            <div className="space-y-2 text-sm md:text-base text-gray-600 leading-relaxed">
              <div className="space-y-6 text-left mx-auto w-full max-w-lg">
                <div className="flex flex-col md:flex-row md:gap-8 border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                  <span className="font-bold text-gray-800 md:w-32 md:text-right shrink-0">昭和41年3月</span>
                  <span className="text-gray-600">青松工業 創立</span>
                </div>
                
                <div className="flex flex-col md:flex-row md:gap-8 border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                  <span className="font-bold text-gray-800 md:w-32 md:text-right shrink-0">平成19年4月</span>
                  <span className="text-gray-600">株式会社現場ジン 設立</span>
                </div>

                <div className="flex flex-col md:flex-row md:gap-8 border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                  <span className="font-bold text-gray-800 md:w-32 md:text-right shrink-0">平成19年4月</span>
                  <span className="text-gray-600">特定労働者派遣事業 届出</span>
                </div>

                <div className="flex flex-col md:flex-row md:gap-8">
                  <span className="font-bold text-gray-800 md:w-32 md:text-right shrink-0">平成21年8月</span>
                  <span className="text-gray-600">一般建設業許可取得</span>
                </div>
              </div>
              
              <div className="pt-6">
                <p className="text-sm text-gray-500 mb-1">許可番号</p>
                <p>愛知県知事許可 (般-21) 第105376号</p>
              </div>
            </div>
          </InfoCard>

        </div>
      </section>

      {/* Access Section (Map) */}
      <section className="pb-24 bg-white">
        <div className="w-full h-[500px] bg-gray-200 relative">
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3263.951558913926!2d136.9034376767709!3d35.107873972778155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60037a0f6a36c5b9%3A0x1b1b1b1b1b1b1b1b!2z44CSNDU3LTA4NTYg5oSb55-l55yM5ZCN5Y-k5bGL5biC5Y2X5Yy65Y2X6Zm96YCa77yW5LiB55uu77yR55Wq5Zyw!5e0!3m2!1sja!2sjp!4v1700000000000!5m2!1sja!2sjp" 
            width="100%" 
            height="100%" 
            style={{border:0}} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
      </section>

      <Contact />
    </div>
  );
}

function InfoCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white w-full rounded-sm shadow-sm p-10 text-center border border-gray-100 hover:shadow-md transition-shadow duration-300">
      <h3 className="text-xl font-bold text-[#10b981] mb-6 tracking-wide">{title}</h3>
      <div className="flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  );
}