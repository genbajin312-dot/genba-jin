import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

export function ContactPage() {
  return (
    <div className="bg-white font-sans">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1653212883731-4d5bc66e0181?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHN1cHBvcnQlMjBwaG9uZSUyMGVtYWlsJTIwY29udGFjdHxlbnwxfHx8fDE3NjUwODMxODV8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0b1c3e]/70 mix-blend-multiply" />
        </div>
        <div className="relative z-10 text-center text-white pt-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-serif font-medium tracking-widest mb-2"
          >
            お問い合わせ
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-sm md:text-base font-sans tracking-[0.2em] opacity-80 uppercase"
          >
            Contact
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center">
            {/* QR Code Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#10b981] mb-4">
                スマホで簡単お問い合わせ
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                下記のQRコードをスマートフォンで読み取ると、<br />
                お問い合わせフォームにアクセスできます。
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100 inline-block">
              {/* QR Code Placeholder */}
              <div className="w-64 h-64 bg-gray-100 rounded-lg flex items-center justify-center mb-6 mx-auto border-4 border-[#10b981]">
                <div className="text-center">
                  <div className="text-6xl mb-2">📱</div>
                  <p className="text-sm font-bold text-gray-500">QRコード</p>
                  <p className="text-xs text-gray-400">準備中</p>
                </div>
              </div>
              <p className="text-sm text-gray-500">
                スマートフォンのカメラでこちらを読み取ってください
              </p>
            </div>

            <div className="mt-12 bg-blue-50/50 p-6 rounded-lg max-w-2xl mx-auto">
              <h3 className="font-bold text-gray-800 mb-2">個人情報の取り扱いについて</h3>
              <p className="text-sm text-gray-600">
                ご入力いただいた個人情報は、お問い合わせへの回答および対応上必要な手続きにのみ使用し、法令に基づく場合を除き、第三者に提供することはございません。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}