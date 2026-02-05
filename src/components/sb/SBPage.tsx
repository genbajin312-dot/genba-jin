import { motion } from "motion/react";
import { Contact } from "../home/Contact";
import { Check, X, Clock, Banknote, ShieldCheck, Smile, MessageSquare, FileText, CheckCircle, Calendar, Wrench, Wind, Sparkles } from "lucide-react";
import { SBHero } from "./SBHero";

export function SBPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <SBHero />

      {/* Elevator Maintenance Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Section Header */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              エレベーターメンテナンス事業
            </h2>
            <div className="w-full h-[2px] bg-[#5fa8d3] mb-8"></div>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              エレベーターは毎日稼働するため、定期的にメンテナンスが必要です。建物やマンションのオーナー様に対して、安全で最適なご提案をさせていただきます。
            </p>
          </div>

          {/* Cards Container */}
          <div className="space-y-32 mb-32">
            {/* Card 1: POG Contract */}
            <div className="relative flex flex-col md:block">
              <div className="w-full md:w-[65%] h-[400px] overflow-hidden shadow-lg relative z-0">
                <img
                  src="https://images.unsplash.com/photo-1758193017781-e3aee6c3e359?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBlbGV2YXRvciUyMGhhbGwlMjBpbnRlcmlvciUyMGx1eHVyeXxlbnwxfHx8fDE3NjUwNzM5MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Elevator Hall"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full md:w-[45%] bg-[#4285f4] text-white p-10 md:p-12 shadow-xl md:absolute md:top-12 md:right-0 z-10"
              >
                <h3 className="text-2xl font-bold mb-2">
                  ①点検契約(POG契約)
                </h3>
                <div className="w-16 h-1 bg-yellow-400 mb-6"></div>
                <p className="text-white/90 leading-loose text-sm">
                  エレベーターに関する各種機器装置の点検・給油・調整を行います。消耗品は保守料に含まれていますが、その他の部品の交換や修理は、別途料金となります。
                </p>
              </motion.div>
            </div>

            {/* Card 2: FM Contract */}
            <div className="relative flex flex-col md:block">
              <div className="w-full md:w-[65%] md:ml-auto h-[400px] overflow-hidden shadow-lg relative z-0">
                <img
                  src="https://images.unsplash.com/photo-1497218770144-3fea6dbc33fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJwZW50ZXIlMjB0b29scyUyMG9uJTIwd29vZGVuJTIwdGFibGUlMjBmbGF0JTIwbGF5fGVufDF8fHx8MTc2NTA3MzkxMnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Maintenance Tools"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full md:w-[45%] bg-white p-10 md:p-12 shadow-xl md:absolute md:top-12 md:left-0 z-10 border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-[#4285f4] mb-2">
                  ②フルメンテナンス契約<br/>(FM契約)
                </h3>
                <div className="w-16 h-1 bg-yellow-400 mb-6"></div>
                <p className="text-[#4285f4] leading-loose text-sm font-medium">
                  点検契約と同様です。<br />
                  修理費用は月々の保守料に含まれており、エレベーターを常に最良の状態で維持いたします。
                </p>
              </motion.div>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="max-w-4xl mx-auto mb-32 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="grid grid-cols-3 text-center border-b border-gray-200">
              <div className="p-4 bg-transparent"></div>
              <div className="p-4 bg-[#4285f4] text-white font-bold text-lg">POG契約</div>
              <div className="p-4 bg-[#4285f4] text-white font-bold text-lg border-l border-white/20">FM契約</div>
            </div>
            
            {[
              { label: "点検・調整・注油", pog: true, fm: true },
              { label: "故障時緊急対応", pog: true, fm: true },
              { label: "点検材料供給", pog: true, fm: true },
              { label: "機器の取替部品", pog: false, fm: true, pogText: "× (別途有料)" },
              { label: "定期検査受検", pog: true, fm: true },
              { label: "遠隔監視", pog: true, fm: true },
              { label: "非常通話装置", pog: true, fm: true },
            ].map((row, index) => (
              <div key={index} className={`grid grid-cols-3 text-center items-center ${index !== 6 ? 'border-b border-gray-100' : ''}`}>
                <div className="p-4 text-blue-500 font-medium text-left pl-8">{row.label}</div>
                <div className="p-4 flex justify-center items-center">
                  {row.pogText ? (
                    <span className="text-red-500 font-bold text-sm">{row.pogText}</span>
                  ) : (
                    <div className="w-6 h-6 rounded-full border-2 border-gray-800 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-transparent" />
                    </div>
                  )}
                </div>
                <div className="p-4 flex justify-center items-center">
                   <div className="w-6 h-6 rounded-full border-2 border-gray-800 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-transparent" />
                   </div>
                </div>
              </div>
            ))}
          </div>

          {/* Features Timeline */}
          <div className="max-w-4xl mx-auto mb-32 relative">
            {/* Vertical Line */}
            <div className="absolute left-[27px] top-6 bottom-6 w-[2px] bg-gray-200 hidden md:block"></div>

            <div className="space-y-12">
              {/* Feature 1 */}
              <div className="flex flex-col md:flex-row gap-8 relative">
                <div className="hidden md:flex flex-col items-center flex-shrink-0 z-10">
                  <div className="w-14 h-14 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center">
                     <Smile className="w-8 h-8 text-yellow-400" />
                  </div>
                </div>
                <div className="flex-1 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">サービス品質</h3>
                  <p className="text-gray-600 text-sm leading-loose">
                    メーカー系メンテナンス会社と遜色ないサービス品質を提供いたします。特許を取得したコア技術(PRIME)によって独立系で唯一メーカーと遜色ないリモート遠隔点検サービスを提供いたします。詳細な情報の把握と、迅速な対応を可能にし、安心・安全を確保します。メーカー純正部品の豊富な品揃えによる適切な修理、調整も実施します。
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col md:flex-row gap-8 relative">
                <div className="hidden md:flex flex-col items-center flex-shrink-0 z-10">
                   <div className="w-14 h-14 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center">
                     <Clock className="w-8 h-8 text-yellow-400" />
                  </div>
                </div>
                <div className="flex-1 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">24時間365日体制</h3>
                  <p className="text-gray-600 text-sm leading-loose">
                    次世代リモートコントロールセンターとの提携により、エレベーターのメンテナンスに必要である、遠隔監視、定期点検、エンジニア出動等、様々な業務を一括管理し、あらゆる状況でも迅速な対応が可能です。
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col md:flex-row gap-8 relative">
                <div className="hidden md:flex flex-col items-center flex-shrink-0 z-10">
                   <div className="w-14 h-14 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center">
                     <Banknote className="w-8 h-8 text-yellow-400" />
                  </div>
                </div>
                <div className="flex-1 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">コスト競争力</h3>
                  <p className="text-gray-600 text-sm leading-loose">
                    メーカー主導の価格設定を根本から見直した明確な価格体系を実現。<br/>
                    利用者目線に立った安価で高品質なサービスを提供します。※下記参照
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Cost Comparison Chart */}
          <div className="max-w-4xl mx-auto mb-32 flex flex-col md:flex-row justify-center items-end gap-4 md:gap-16 pt-12">
            {/* Manufacturer */}
            <div className="flex flex-col items-center w-full md:w-64">
              <div className="w-full flex flex-col items-center">
                 <div className="w-full bg-[#fcd34d] h-32 flex items-center justify-center text-white font-bold text-lg">
                   製造コスト
                 </div>
                 <div className="relative -my-4 z-10">
                    <div className="text-white text-4xl font-bold drop-shadow-md">+</div>
                 </div>
                 <div className="w-full bg-[#4285f4] h-32 flex items-center justify-center text-white font-bold text-lg">
                   メンテナンス料金
                 </div>
              </div>
              <p className="mt-4 text-gray-600 text-sm font-medium">メーカー系メンテナンス料金</p>
            </div>

            {/* Dashed Line Connection (Visual only) */}
             <div className="hidden md:block h-64 w-px border-l-2 border-dashed border-gray-300 transform -rotate-[30deg] origin-top-left translate-y-10"></div>


            {/* Genba Gin */}
             <div className="flex flex-col items-center w-full md:w-64">
              <div className="w-full flex flex-col items-center">
                 <div className="w-full border-2 border-dashed border-gray-300 h-32 flex items-center justify-center text-gray-400 font-bold text-lg bg-transparent">
                   製造コストなし
                 </div>
                 <div className="w-full bg-[#4285f4] h-32 flex items-center justify-center text-white font-bold text-lg mt-0">
                   メンテナンス料金
                 </div>
              </div>
              <p className="mt-4 text-gray-600 text-sm font-medium">現場ジンのメンテナンス料金</p>
            </div>
          </div>

          {/* Service Flow Section */}
          <div className="mb-32 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#10b981]/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#facc15]/5 rounded-full blur-3xl"></div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16 relative z-10"
            >
              <motion.span 
                className="text-[#10b981] font-black tracking-[0.3em] text-sm uppercase inline-block mb-2"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{
                  background: "linear-gradient(90deg, #10b981, #facc15, #10b981)",
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Service Flow
              </motion.span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                ご利用の流れ
              </h2>
              <motion.div
                className="w-24 h-1 bg-gradient-to-r from-[#10b981] to-[#facc15] mx-auto mt-4 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </motion.div>

            {/* Flow Steps */}
            <div className="relative max-w-5xl mx-auto">
              {/* Connection Line - Desktop */}
              <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-[#10b981] via-[#facc15] to-[#10b981] opacity-30"></div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                {[
                  {
                    step: 1,
                    icon: MessageSquare,
                    title: "お問い合わせ",
                    description: "電話、メール、LINEでお気軽にご連絡ください。専門スタッフが丁寧に対応いたします。",
                    color: "from-[#10b981] to-[#059669]",
                    delay: 0.1,
                  },
                  {
                    step: 2,
                    icon: FileText,
                    title: "現地調査・見積もり",
                    description: "現地にて状況を確認し、最適なプランをご提案。お見積もりは無料です。",
                    color: "from-[#facc15] to-[#fbbf24]",
                    delay: 0.2,
                  },
                  {
                    step: 3,
                    icon: CheckCircle,
                    title: "ご契約",
                    description: "内容にご納得いただけましたら、ご契約となります。不明点はお気軽にご質問ください。",
                    color: "from-[#10b981] to-[#059669]",
                    delay: 0.3,
                  },
                  {
                    step: 4,
                    icon: Calendar,
                    title: "定期点検開始",
                    description: "プロのスタッフが定期的に点検・メンテナンスを実施。24時間365日サポート体制。",
                    color: "from-[#facc15] to-[#fbbf24]",
                    delay: 0.4,
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.step}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: item.delay }}
                      className="relative group"
                    >
                      {/* Card */}
                      <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden h-full">
                        {/* Glassmorphism overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#10b981]/5 to-[#facc15]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                        </div>

                        <div className="relative z-10">
                          {/* Step Number */}
                          <motion.div
                            className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-br from-[#0f172a] to-[#1e293b] flex items-center justify-center shadow-xl"
                            whileHover={{ scale: 1.1, rotate: 10 }}
                          >
                            <span className="text-2xl font-black text-[#facc15]">
                              {item.step}
                            </span>
                          </motion.div>

                          {/* Icon */}
                          <motion.div
                            className={`w-20 h-20 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 shadow-lg group-hover:shadow-2xl transition-shadow duration-500`}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                          >
                            <Icon className="w-10 h-10 text-white" />
                          </motion.div>

                          {/* Title */}
                          <h3 className="text-xl font-black text-[#0f172a] mb-4">
                            {item.title}
                          </h3>

                          {/* Description */}
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {item.description}
                          </p>
                        </div>

                        {/* Bottom accent */}
                        <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                      </div>

                      {/* Arrow - Desktop only */}
                      {item.step < 4 && (
                        <div className="hidden lg:block absolute top-20 -right-4 z-20">
                          <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="w-8 h-8 text-[#10b981]"
                          >
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                          </motion.div>
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-16 text-center relative z-10"
            >
              <div className="inline-block bg-gradient-to-r from-[#10b981] to-[#facc15] p-8 rounded-2xl shadow-2xl"
              >
                <p className="text-white font-black text-lg mb-4">
                  まずはお気軽にご相談ください！
                </p>
                <p className="text-white/90 text-sm">
                  専門スタッフが最適なプランをご提案いたします
                </p>
              </div>
            </motion.div>
          </div>

           {/* Air Conditioning Section */}
           <div className="mb-20">
             <h2 className="text-3xl font-bold text-gray-900 mb-6">
               空調清掃業務
             </h2>
             <div className="w-full h-[2px] bg-[#5fa8d3] mb-8"></div>
             <p className="text-gray-600 leading-relaxed text-sm md:text-base">
               家庭用と業務用エアコンの分解薬品洗浄を行います。
             </p>
           </div>

           {/* Cleaning Business Section */}
           <div className="mb-20">
             <h2 className="text-3xl font-bold text-gray-900 mb-6">
               クリーニング業務
             </h2>
             <div className="w-full h-[2px] bg-[#5fa8d3] mb-8"></div>
             <p className="text-gray-600 leading-relaxed text-sm md:text-base">
               ハウスクリーニング、フロアクリーニング、オフィスクリーニングを行います。
             </p>
           </div>

        </div>
      </section>

      <Contact />
    </div>
  );
}