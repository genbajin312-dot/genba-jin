import { motion, AnimatePresence } from "motion/react";
import { useNavigation } from "../../contexts/NavigationContext";
import { ArrowLeft, Mail, Monitor, Smartphone, Video, Download } from "lucide-react";
import { useState } from "react";

export function ZoomGuidePage() {
  const { navigateTo } = useNavigation();
  const [activeTab, setActiveTab] = useState<'smartphone' | 'pc'>('smartphone');

  return (
    <div className="bg-white font-sans text-gray-800">
      {/* Hero Section */}
      <section className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVlJTIwZ3JhZGllbnQlMjBsYXB0b3B8ZW58MXx8fHwxNzY1MDgzMDAwfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Zoom Guide"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#2b4c9b]/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2b4c9b]/90 to-transparent" />
        </div>
        <div className="relative z-10 text-center text-white pt-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-2 tracking-wide"
          >
            Zoomガイド
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-lg font-medium opacity-90 tracking-widest"
          >
            Zoom Guide
          </motion.p>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="bg-white relative z-20 mt-8 md:mt-12 container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 max-w-4xl mx-auto">
          <button
            onClick={() => setActiveTab('smartphone')}
            className={`py-4 md:py-6 px-8 md:px-12 bg-white rounded-sm shadow-lg text-center transition-all duration-300 border-b-4 ${
              activeTab === 'smartphone'
                ? 'border-[#4361ee] text-[#4361ee]'
                : 'border-transparent text-gray-400 hover:text-gray-600'
            }`}
          >
            <span className="block text-lg md:text-xl font-bold">スマホ・タブレットをご利用の方</span>
          </button>
          <button
            onClick={() => setActiveTab('pc')}
            className={`py-4 md:py-6 px-8 md:px-12 bg-white rounded-sm shadow-lg text-center transition-all duration-300 border-b-4 ${
              activeTab === 'pc'
                ? 'border-[#4361ee] text-[#4361ee]'
                : 'border-transparent text-gray-400 hover:text-gray-600'
            }`}
          >
            <span className="block text-lg md:text-xl font-bold">パソコンをご利用の方</span>
          </button>
        </div>
      </section>

      {/* Intro Section */}
      <section className="pt-20 pb-12 text-center px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-[#4dabf7] mb-8">
            ZOOMの使用方法
          </h2>
          <p className="text-gray-600 leading-loose text-sm md:text-base max-w-3xl mx-auto">
            お手持ちのスマートフォンやパソコンにZOOMアプリをインストールすることで、オンライン商談が可能となります。
            ZOOMアプリがインストールされていないお客様は下記のリンクよりダウンロードしてください。
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-16 px-6 bg-white min-h-[600px]">
        <div className="container mx-auto max-w-6xl">
          <AnimatePresence mode="wait">
            {activeTab === 'smartphone' ? (
              <motion.div
                key="smartphone"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Section Title */}
                <div className="text-center mb-16 relative">
                  <div className="absolute top-1/2 left-0 w-full h-[2px] bg-[#4361ee] opacity-30 z-0"></div>
                  <h3 className="relative z-10 inline-block bg-white px-8 text-2xl md:text-3xl font-bold text-[#4361ee]">
                    スマートフォン・タブレットをご利用の方
                  </h3>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-20">
                  {/* Card 1 */}
                  <div className="bg-white rounded-sm shadow-lg p-6 pb-12 relative border border-gray-100 flex flex-col h-full">
                    <span className="absolute top-0 left-0 bg-white text-gray-400 px-4 py-2 font-serif text-xl border-r border-b border-gray-100 shadow-sm z-10">1</span>
                    <div className="h-48 mb-6 overflow-hidden mt-6">
                       <img 
                         src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwaW4lMjBoYW5kfGVufDF8fHx8MTc2NTA4MzAwMXww&ixlib=rb-4.1.0&q=80&w=1080" 
                         alt="Install Zoom" 
                         className="w-full h-full object-cover"
                       />
                    </div>
                    <h4 className="text-xl font-bold mb-4 text-gray-800">Zoomをインストール</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      商談当日までにモバイルアプリのインストールをしてください。IOSの方はAppStoreから、Androidの方はGoogleplayから入手してください。
                    </p>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-white rounded-sm shadow-lg p-6 pb-12 relative border border-gray-100 flex flex-col h-full">
                    <span className="absolute top-0 left-0 bg-white text-gray-400 px-4 py-2 font-serif text-xl border-r border-b border-gray-100 shadow-sm z-10">2</span>
                    <div className="h-48 mb-6 bg-black flex items-center justify-center mt-6">
                        <Mail className="w-24 h-24 text-white" />
                    </div>
                    <h4 className="text-xl font-bold mb-4 text-gray-800">招待メールを受け取る</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      当日、担当社員より招待メールをお送り致します。その招待メール内のURLをクリックしてください。自動的にZOOMが起動します。
                    </p>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-white rounded-sm shadow-lg p-6 pb-12 relative border border-gray-100 flex flex-col h-full">
                    <span className="absolute top-0 left-0 bg-white text-gray-400 px-4 py-2 font-serif text-xl border-r border-b border-gray-100 shadow-sm z-10">3</span>
                    <div className="h-48 mb-6 overflow-hidden mt-6">
                       <img 
                         src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBjb25uZWN0aW9ufGVufDF8fHx8MTc2NTA4MzAwMXww&ixlib=rb-4.1.0&q=80&w=1080" 
                         alt="Start Meeting" 
                         className="w-full h-full object-cover"
                       />
                    </div>
                    <h4 className="text-xl font-bold mb-4 text-gray-800">オンライン商談スタート</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      接続が確認できましたら商談スタートです。
                    </p>
                  </div>
                </div>

                {/* App Download Section */}
                <div className="text-center mb-16">
                  <h3 className="text-[#4361ee] text-xl font-bold mb-8">アプリを入手する</h3>
                  <div className="flex justify-center gap-4 flex-wrap">
                     <a href="#" className="w-48 hover:opacity-80 transition-opacity">
                        <img 
                          src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                          alt="Download on the App Store" 
                          className="w-full h-auto"
                        />
                     </a>
                     <a href="#" className="w-48 hover:opacity-80 transition-opacity">
                        <img 
                          src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                          alt="Get it on Google Play" 
                          className="w-full h-auto"
                        />
                     </a>
                  </div>
                </div>
                
                {/* Blue Separator Line */}
                <div className="w-full h-[2px] bg-[#4361ee] mb-12 max-w-4xl mx-auto"></div>

              </motion.div>
            ) : (
              <motion.div
                key="pc"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Section Title */}
                <div className="text-center mb-16 relative">
                  <div className="absolute top-1/2 left-0 w-full h-[2px] bg-[#4361ee] opacity-30 z-0"></div>
                  <h3 className="relative z-10 inline-block bg-white px-8 text-2xl md:text-3xl font-bold text-[#4361ee]">
                    パソコンをご利用の方
                  </h3>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-20">
                  {/* Card 1 */}
                  <div className="bg-white rounded-sm shadow-lg p-6 pb-12 relative border border-gray-100 flex flex-col h-full">
                    <span className="absolute top-0 left-0 bg-white text-gray-400 px-4 py-2 font-serif text-xl border-r border-b border-gray-100 shadow-sm z-10">1</span>
                    <div className="h-48 mb-6 overflow-hidden mt-6">
                       <img 
                         src="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBvbiUyMGRlc2slMjBtb3VzZXxlbnwxfHx8fDE3NjUwODMyMDB8MA&ixlib=rb-4.1.0&q=80&w=1080" 
                         alt="Check PC" 
                         className="w-full h-full object-cover"
                       />
                    </div>
                    <h4 className="text-xl font-bold mb-4 text-gray-800">Zoomをインストール</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      当日までにZOOMダウンロードセンターより【ミーティング用Zoomクライアント】のアプリをダウンロードし、パソコンにインストールしてください。
                    </p>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-white rounded-sm shadow-lg p-6 pb-12 relative border border-gray-100 flex flex-col h-full">
                    <span className="absolute top-0 left-0 bg-white text-gray-400 px-4 py-2 font-serif text-xl border-r border-b border-gray-100 shadow-sm z-10">2</span>
                    <div className="h-48 mb-6 bg-black flex items-center justify-center mt-6">
                        <Mail className="w-24 h-24 text-white" />
                    </div>
                    <h4 className="text-xl font-bold mb-4 text-gray-800">招待メールを受け取る</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      当日、担当社員より招待メールをお送り致します。その招待メール内のURLをクリックしてください。自動的にZOOMが起動します。
                    </p>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-white rounded-sm shadow-lg p-6 pb-12 relative border border-gray-100 flex flex-col h-full">
                    <span className="absolute top-0 left-0 bg-white text-gray-400 px-4 py-2 font-serif text-xl border-r border-b border-gray-100 shadow-sm z-10">3</span>
                    <div className="h-48 mb-6 overflow-hidden mt-6">
                       <img 
                         src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY1MDgzMjAwfDA&ixlib=rb-4.1.0&q=80&w=1080" 
                         alt="Start Meeting" 
                         className="w-full h-full object-cover"
                       />
                    </div>
                    <h4 className="text-xl font-bold mb-4 text-gray-800">オンライン商談スタート</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      接続が確認できましたら商談スタートです。
                    </p>
                  </div>
                </div>

                {/* PC Download Section */}
                <div className="text-center mb-16">
                  <a 
                    href="#" 
                    className="inline-block bg-[#4361ee] hover:bg-[#3250d5] text-white font-bold py-4 px-16 rounded-md shadow-md transition-colors text-lg"
                  >
                    PC版Zoomを入手する
                  </a>
                </div>

              </motion.div>
            )}
          </AnimatePresence>

          {/* Footer Notes */}
          <div className="border-t border-gray-100 pt-8 text-center text-xs text-gray-400 space-y-2 max-w-4xl mx-auto">
             <p>※オンライン商談はパケット通信を利用するため、Wi-fi環境でのご利用を推奨しています。</p>
             <p>※お客さまがご利用のインターネットの回線速度やセキュリティなどの影響で本サービスをご利用いただけない場合がございます。</p>
          </div>

          <div className="text-center mt-20">
             <button 
                onClick={() => navigateTo('consultation')}
                className="inline-flex items-center text-gray-500 hover:text-[#4361ee] transition-colors gap-2 font-medium"
             >
                <ArrowLeft className="w-5 h-5" />
                商談のご案内ページへ戻る
             </button>
          </div>
        </div>
      </section>
    </div>
  );
}
