import { motion } from "motion/react";
import { useState } from "react";
import { Contact } from "../home/Contact";
import { useNavigation } from "../../contexts/NavigationContext";

const steps = [
  {
    id: 1,
    title: "ご予約・ご案内",
    description: "商談予約フォームより必要事項を記入し送信してください。担当者より日時確認等の折り返し連絡をいたします。",
    image: "https://images.unsplash.com/photo-1632125956091-abc742d2a497?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZXlib2FyZCUyMGNsb3NlJTIwdXAlMjBlbnRlciUyMGtleXxlbnwxfHx8fDE3NjUwODI1OTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    color: "bg-sky-300"
  },
  {
    id: 2,
    title: "ご予約当日",
    description: "商談開始の時刻になりましたら、お送りしたURLよりZOOMへログインをしてください。ZOOMの操作方法に関しては下のZOOMガイドリンクまたは当社担当までご連絡ください。",
    image: "https://images.unsplash.com/photo-1598939372009-878cbb67122c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2luZyUyMHNtYXJ0cGhvbmUlMjBjYWZlJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzY1MDgyNTk3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    color: "bg-blue-400"
  },
  {
    id: 3,
    title: "商談",
    description: "当社担当とZOOM上で商談を行います。資料共有や画面共有を活用し、対面と変わらないスムーズな商談を実現します。",
    image: "https://images.unsplash.com/photo-1668092547893-6402c0387885?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3cml0aW5nJTIwbm90ZXMlMjBidXNpbmVzcyUyMG1lZXRpbmd8ZW58MXx8fHwxNzY1MDgyNTk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    color: "bg-blue-600"
  }
];

export function ConsultationPage() {
  const { navigateTo } = useNavigation();
  const [activeStep, setActiveStep] = useState(1);

  const scrollToStep = (id: number) => {
    const element = document.getElementById(`step-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    setActiveStep(id);
  };

  return (
    <div className="bg-white font-sans">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1620570625542-194933f7639a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBibHVlJTIwYmFja2dyb3VuZCUyMGhlYWRlcnxlbnwxfHx8fDE3NjUwODI1OTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Online Consultation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1e3a8a]/80" /> {/* Dark blue overlay */}
        </div>
        <div className="relative z-10 text-center text-white pt-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold tracking-wider mb-2"
          >
            オンライン商談のご紹介
          </motion.h1>
          <p className="text-sm md:text-base font-medium tracking-wide opacity-90">
            Online meeting
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="pt-20 pb-12 bg-white text-center relative z-10">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="inline-block mb-10 border-b-4 border-[#4361ee] pb-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              商談は全てリモートで対応可能です。
            </h2>
          </div>
          <p className="text-gray-600 leading-loose text-base md:text-lg">
            リモートワークが推奨され始めた現代ならではの新しい商談形式を現場ジンは採用しました。<br className="hidden md:inline" />
            在宅勤務やリモート会議のお客様も安心してご利用いただけます。<br className="hidden md:inline" />
            商談、契約の全てをオンライン上で完結可能です。
          </p>
        </div>
      </section>

      {/* Triangle Notch (Visual Connector) */}
      <div className="relative w-full h-12 bg-[#fffbeb] -mt-1 z-0">
         <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-4 w-0 h-0 
           border-l-[20px] border-l-transparent
           border-r-[20px] border-r-transparent
           border-t-[20px] border-t-white">
         </div>
      </div>

      {/* Benefits Section (Yellow) */}
      <section className="pb-24 pt-12 bg-[#fffbeb]">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#4361ee] mb-16">
            オンライン商談のメリット
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-transparent">
              <div className="rounded-lg overflow-hidden shadow-sm mb-6 h-64">
                <img 
                  src="https://images.unsplash.com/photo-1758876017801-f5a892ee460a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBlcnNvbiUyMHdvcmtpbmclMjBhdCUyMGRlc2slMjBsYXB0b3B8ZW58MXx8fHwxNzY1MDgyNTk3fDA&ixlib=rb-4.1.0&q=80&w=1080" 
                  alt="Place doesn't matter" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">場所を問わない</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                来社などの必要がなくなり、より効率的に業務を遂行できます。ご自宅や会議室からなど、どこからでも商談が可能です。
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-transparent">
              <div className="rounded-lg overflow-hidden shadow-sm mb-6 h-64">
                <img 
                  src="https://images.unsplash.com/photo-1489925461942-d8f490a04588?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWJsZXQlMjBjaGFydHMlMjBnbGFzc2VzJTIwYnVzaW5lc3MlMjBkZXNrfGVufDF8fHx8MTc2NTA4MjU5N3ww&ixlib=rb-4.1.0&q=80&w=1080" 
                  alt="Sharing materials" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">資料の共有ができる</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                オンライン上で資料の共有が可能です。お互いのPC画面を共有したり、その場で作業しながら情報を共有するなど効率的な商談が可能です。
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-transparent">
              <div className="rounded-lg overflow-hidden shadow-sm mb-6 h-64">
                <img 
                  src="https://images.unsplash.com/photo-1587553653608-4584852ed3c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kJTIwc2FuaXRpemVyJTIwbWFzayUyMGNvdmlkJTIwc2FmZXR5fGVufDF8fHx8MTc2NTA4MjU5OHww&ixlib=rb-4.1.0&q=80&w=1080" 
                  alt="Infection control" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">感染対策と仕事の両立</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                来社などの必要がなくなり、より効率的に業務を遂行できます。ご自宅や会議室からなど、どこからでも商談が可能です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Step Flow Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
             <div className="inline-block mb-4 border-b-4 border-[#4361ee] pb-4">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  オンライン商談の流れ
                </h2>
             </div>
             <p className="text-gray-500 mt-4">弊社ではZoomを使用しております。</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
            {/* Sticky Navigation (Desktop) */}
            <div className="hidden lg:block w-1/3 relative">
              <div className="sticky top-32">
                <h3 className="text-lg font-bold text-gray-400 mb-6 uppercase tracking-wider">Flow Steps</h3>
                <div className="space-y-4 relative border-l-2 border-gray-100 pl-6">
                  {/* Active Indicator Line */}
                  <motion.div 
                    className="absolute left-[-2px] top-0 w-[2px] h-8 bg-[#4361ee] origin-top"
                    animate={{ y: (activeStep - 1) * 48 }} // Approximate height calculation
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />

                  {steps.map((step) => (
                    <div 
                      key={step.id}
                      onClick={() => scrollToStep(step.id)}
                      className={`cursor-pointer transition-colors duration-300 h-8 flex items-center ${
                        activeStep === step.id ? "text-[#4361ee] font-bold" : "text-gray-400 hover:text-gray-600"
                      }`}
                    >
                      Step {step.id}. {step.title}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Steps Content */}
            <div className="w-full lg:w-2/3 space-y-12 md:space-y-24 lg:space-y-32">
              {steps.map((step) => (
                <motion.div 
                  id={`step-${step.id}`}
                  key={step.id}
                  className="scroll-mt-32"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  onViewportEnter={() => setActiveStep(step.id)}
                  transition={{ duration: 0.6 }}
                >
                  <div className="rounded-xl overflow-hidden shadow-lg mb-8">
                    <img 
                      src={step.image} 
                      alt={step.title} 
                      className="w-full h-64 md:h-80 object-cover"
                    />
                  </div>
                  <div className="flex gap-6">
                    <div className={`flex-shrink-0 w-16 h-16 ${step.color} text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-md`}>
                      {step.id}
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{step.title}</h3>
                      <p className="text-gray-600 leading-loose text-lg">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1684061692678-68b081bbe4ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBtb3VzZSUyMGRlc2slMjBjbG9zZSUyMHVwJTIwYmx1ZSUyMG92ZXJsYXl8ZW58MXx8fHwxNzY1MDgyNzMzfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Book now"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#4361ee]/60 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#4361ee]/80 to-transparent" />
        </div>
        <div className="relative z-10 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-thin tracking-wide mb-12">
            ご予約はこちらから
          </h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <a 
              href="#"
              onClick={(e) => { e.preventDefault(); navigateTo('contact'); }}
              className="inline-block border border-white bg-transparent hover:bg-white hover:text-[#4361ee] text-white font-bold py-3 px-10 rounded-full transition-colors duration-300 w-48 text-center"
            >
              予約フォーム
            </a>
            <a 
              href="#"
              onClick={(e) => { e.preventDefault(); navigateTo('zoom-guide'); }}
              className="inline-block border border-white bg-transparent hover:bg-white hover:text-[#4361ee] text-white font-bold py-3 px-10 rounded-full transition-colors duration-300 w-48 text-center"
            >
              Zoomガイド
            </a>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
}
