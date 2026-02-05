import { motion } from "motion/react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { useNavigation } from "../../contexts/NavigationContext";

export function RecruitPage() {
  const { navigateTo } = useNavigation();

  const handleContactClick = () => {
    navigateTo('contact' as any);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1681965825791-7befca134490?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtd29yayUyMGNvbnN0cnVjdGlvbiUyMHNpdGV8ZW58MXx8fHwxNzY1MDc5MDY5fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Construction Team"
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
            採用情報
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-sm md:text-base font-sans tracking-[0.2em] opacity-80 uppercase"
          >
            Recruitment
          </motion.p>
        </div>
      </section>

      {/* Message Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#10b981] mb-8 tracking-wide">
            未来の街づくりを、共に。
          </h2>
          <p className="text-gray-700 leading-loose text-lg mb-12">
            株式会社現場ジンでは、事業拡大に伴い、共に働く新しい仲間を募集しています。<br />
            経験者はもちろん、未経験者の方も大歓迎です。<br />
            「誠実・安全・品質」を大切にし、地域社会に貢献できる仕事に挑戦してみませんか？
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="bg-white p-8 rounded-sm shadow-sm border-t-4 border-[#10b981]">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <CheckCircle2 className="w-6 h-6 text-[#10b981] mr-2" />
                未経験者歓迎
              </h3>
              <p className="text-gray-600">
                先輩社員が丁寧に指導しますので、安心して仕事を覚えられます。資格取得支援制度も充実しています。
              </p>
            </div>
            <div className="bg-white p-8 rounded-sm shadow-sm border-t-4 border-[#10b981]">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <CheckCircle2 className="w-6 h-6 text-[#10b981] mr-2" />
                アットホーム
              </h3>
              <p className="text-gray-600">
                社員同士の仲が良く、風通しの良い職場環境です。困ったときはすぐに相談できる雰囲気があります。
              </p>
            </div>
            <div className="bg-white p-8 rounded-sm shadow-sm border-t-4 border-[#10b981]">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <CheckCircle2 className="w-6 h-6 text-[#10b981] mr-2" />
                安定した基盤
              </h3>
              <p className="text-gray-600">
                長年の実績と信頼により、安定した仕事量があります。腰を据えて長く働きたい方に最適です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-[#10b981] font-bold tracking-widest uppercase mb-2 block">募集要項</span>
            <h2 className="text-3xl font-bold text-gray-900">募集要項</h2>
          </div>

          <div className="border-t border-gray-200">
            <dl className="divide-y divide-gray-200">
              <div 
                className="grid grid-cols-1 md:grid-cols-4 p-6 hover:bg-[#10b981]/5 transition-all duration-300 cursor-pointer group"
                onClick={handleContactClick}
              >
                <dt className="font-bold text-gray-900 md:col-span-1 group-hover:text-[#10b981] transition-colors">職種</dt>
                <dd className="md:col-span-3 text-gray-700 group-hover:text-gray-900 transition-colors">
                  土木作業員・現場管理（施工管理）
                  <span className="ml-2 text-[#10b981] opacity-0 group-hover:opacity-100 transition-opacity text-sm">→ クリックして応募</span>
                </dd>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 p-6 hover:bg-gray-50 transition-colors">
                <dt className="font-bold text-gray-900 md:col-span-1">仕事内容</dt>
                <dd className="md:col-span-3 text-gray-700">
                  土木工事現場における作業全般、または現場管理業務。<br/>
                  主な現場は愛知県内（名古屋市中心）です。
                </dd>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 p-6 hover:bg-gray-50 transition-colors">
                <dt className="font-bold text-gray-900 md:col-span-1">雇用形態</dt>
                <dd className="md:col-span-3 text-gray-700">正社員</dd>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 p-6 hover:bg-gray-50 transition-colors">
                <dt className="font-bold text-gray-900 md:col-span-1">給与</dt>
                <dd className="md:col-span-3 text-gray-700">
                  月給 250,000円 ～ 450,000円<br/>
                  <span className="text-sm text-gray-500">※経験・能力・資格を考慮の上、決定します。</span>
                </dd>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 p-6 hover:bg-gray-50 transition-colors">
                <dt className="font-bold text-gray-900 md:col-span-1">勤務時間</dt>
                <dd className="md:col-span-3 text-gray-700">
                  8:00 ～ 17:00（休憩あり）<br/>
                  <span className="text-sm text-gray-500">※現場により多少変動あり</span>
                </dd>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 p-6 hover:bg-gray-50 transition-colors">
                <dt className="font-bold text-gray-900 md:col-span-1">休日・休暇</dt>
                <dd className="md:col-span-3 text-gray-700">
                  日曜、祝日、GW、夏季休暇、年末年始、有給休暇
                </dd>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 p-6 hover:bg-gray-50 transition-colors">
                <dt className="font-bold text-gray-900 md:col-span-1">福利厚生</dt>
                <dd className="md:col-span-3 text-gray-700">
                  社会保険完備、昇給年1回、賞与年2回、交通費支給、資格取得支援制度、制服貸与
                </dd>
              </div>
              
              <div 
                className="grid grid-cols-1 md:grid-cols-4 p-6 hover:bg-[#10b981]/5 transition-all duration-300 cursor-pointer group"
                onClick={handleContactClick}
              >
                <dt className="font-bold text-gray-900 md:col-span-1 group-hover:text-[#10b981] transition-colors">応募資格</dt>
                <dd className="md:col-span-3 text-gray-700 group-hover:text-gray-900 transition-colors">
                  普通自動車運転免許（AT限定可）<br/>
                  未経験歓迎、経験者優遇
                  <span className="ml-2 text-[#10b981] opacity-0 group-hover:opacity-100 transition-opacity text-sm">→ クリックして応募</span>
                </dd>
              </div>
            </dl>
          </div>

          <div className="mt-16 text-center">
            <a 
              href="#contact" // Ideally this would link to a contact form or entry form page
              className="inline-flex items-center justify-center px-10 py-4 bg-[#4361ee] text-white font-bold rounded-sm shadow-lg hover:bg-[#3b55d0] transition-colors duration-300 group"
              onClick={handleContactClick}
            >
              応募・お問い合わせはこちら
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="mt-4 text-gray-500 text-sm">
              お電話（052-698-3003）での応募も受け付けております。
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}