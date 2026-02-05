import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Company() {
  return (
    <section id="company" className="py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        
        <div className="text-center mb-20">
            <span className="text-xs font-bold tracking-[0.2em] text-[#F2A900] block mb-6 uppercase">Company</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900">
                会社概要
            </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            
            {/* Map Section */}
            <div className="relative order-2 lg:order-1">
                 <div className="aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl shadow-gray-200 border border-gray-100 relative z-10">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3263.266736486004!2d136.91899147629555!3d35.12499126027376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60037a1a4571736b%3A0x6a2c30058914041d!2z44CSNDY3LTA4NTYg5oSb55-l55yM5ZCN5Y-k5bGL5biC55Ge56mC5Yy65paw6ZaL55S677yS77yV4oiS77yR77yY!5e0!3m2!1sja!2sjp!4v1705645000000!5m2!1sja!2sjp" 
                        width="100%" 
                        height="100%" 
                        style={{border:0}} 
                        allowFullScreen={true} 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="株式会社現場ジン 所在地マップ"
                    ></iframe>
                </div>
                {/* Decorative background element */}
                <div className="absolute -top-10 -left-10 w-full h-full bg-gray-50 rounded-3xl -z-10" />
            </div>

            {/* Info Section */}
            <div className="order-1 lg:order-2">
                <div className="bg-white rounded-3xl border border-gray-100 shadow-[0_2px_20px_-4px_rgba(0,0,0,0.05)] p-8 md:p-12">
                    <dl className="space-y-8">
                        <div className="border-b border-gray-100 pb-8 last:border-0 last:pb-0">
                            <dt className="text-xs font-bold text-[#F2A900] uppercase tracking-widest mb-2">Company Name</dt>
                            <dd className="text-xl font-bold text-slate-900">株式会社現場ジン</dd>
                        </div>
                        
                        <div className="border-b border-gray-100 pb-8 last:border-0 last:pb-0">
                            <dt className="text-xs font-bold text-[#F2A900] uppercase tracking-widest mb-2">Representative</dt>
                            <dd className="text-xl font-medium text-slate-900">遠藤 廣士</dd>
                        </div>

                        <div className="border-b border-gray-100 pb-8 last:border-0 last:pb-0">
                            <dt className="text-xs font-bold text-[#F2A900] uppercase tracking-widest mb-2">Business</dt>
                            <dd className="text-base font-medium text-slate-900 space-y-2">
                                <div className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 bg-slate-300 rounded-full" />
                                    一般建築・土木全般
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 bg-slate-300 rounded-full" />
                                    外構工事
                                </div>
                            </dd>
                        </div>

                        <div className="border-b border-gray-100 pb-8 last:border-0 last:pb-0">
                            <dt className="text-xs font-bold text-[#F2A900] uppercase tracking-widest mb-2">Address</dt>
                            <dd className="text-base font-medium text-slate-900 leading-relaxed">
                                〒467-0856<br />
                                愛知県名古屋市瑞穂区新開町25-18
                            </dd>
                        </div>

                        <div className="border-b border-gray-100 pb-8 last:border-0 last:pb-0">
                            <dt className="text-xs font-bold text-[#F2A900] uppercase tracking-widest mb-2">Area</dt>
                            <dd className="text-base font-medium text-slate-900">
                                名古屋市全域及び愛知県内
                            </dd>
                        </div>

                    </dl>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}