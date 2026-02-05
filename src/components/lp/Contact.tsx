import { MessageCircle } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-32 bg-gray-50/50 text-slate-900 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F2A900]/10 -skew-x-12 hidden lg:block" />

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-[#F2A900] block mb-4">CONTACT</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-8 text-slate-900">
            お問い合わせ
          </h2>
          <p className="text-gray-600 font-medium leading-relaxed">
            現場の急なご依頼やご相談など、<br className="hidden md:inline" />
            LINEまたはメールにてお気軽にお問い合わせください。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* LINE Contact Card */}
          <div className="bg-white p-10 rounded-3xl border border-[#06C755]/20 shadow-[0_10px_30px_-10px_rgba(6,199,85,0.15)] flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
            <div className="w-20 h-20 bg-[#06C755]/10 rounded-full flex items-center justify-center mb-6 text-[#06C755]">
              <MessageCircle className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">LINEで相談する</h3>
            <p className="text-sm text-gray-500 mb-8 leading-relaxed">
              現場の写真を送って簡単見積もり。<br />
              24時間いつでも受付中です。
            </p>
            <a 
              href="https://lin.ee/G0HzvGh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-4 bg-[#06C755] hover:bg-[#05b54c] text-white rounded-xl font-bold tracking-widest transition-colors shadow-lg shadow-green-200/50 flex items-center justify-center gap-2"
            >
              LINE友だち追加
            </a>
          </div>

          {/* Email Contact Card */}
          <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mb-6 text-slate-900">
               <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">メールで相談する</h3>
            <p className="text-sm text-gray-500 mb-8 leading-relaxed">
              資料添付や詳細なご依頼はこちら。<br />
              原則1営業日以内に返信いたします。
            </p>
            <a 
              href="mailto:info@genba-jin.com" 
              className="w-full py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold tracking-widest transition-colors shadow-lg flex items-center justify-center gap-2"
            >
              info@genba-jin.com にメール
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}