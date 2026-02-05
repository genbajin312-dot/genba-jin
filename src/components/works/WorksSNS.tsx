'use client';

import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { Heart, MessageCircle, Share2, Bookmark, MapPin, Calendar, X, ChevronLeft, ChevronRight } from "lucide-react";

const snsWorks = [
  {
    id: 1,
    title: "瑞穂区 大規模造成工事",
    category: "土木工事",
    location: "愛知県名古屋市瑞穂区",
    date: "2024年8月15日",
    likes: 245,
    comments: 32,
    description: "5,000㎡の宅地造成工事が完了しました！最新の測量技術を活用し、精度の高い基盤づくりを実現しました。",
    images: [
      "https://images.unsplash.com/photo-1638207849658-e57be0cdc208?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXZpbCUyMGVuZ2luZWVyaW5nJTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc2NjEzNTI1N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    tags: ["#造成工事", "#土木", "#名古屋", "#瑞穂区"],
    user: {
      name: "現場ジン公式",
      avatar: "👷"
    }
  },
  {
    id: 2,
    title: "新築住宅外構一式",
    category: "外構工事",
    location: "愛知県名古屋市緑区",
    date: "2024年10月20日",
    likes: 312,
    comments: 45,
    description: "デザイン性と機能性を両立したエクステリアが完成✨駐車スペース、アプローチ、植栽まで丁寧に仕上げました。",
    images: [
      "https://images.unsplash.com/photo-1720876470648-ba8b314b47ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleHRlcmlvciUyMGhvdXNlJTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc2NjEzNTI1OHww&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    tags: ["#外構工事", "#エクステリア", "#新築", "#ガーデニング"],
    user: {
      name: "現場ジン公式",
      avatar: "👷"
    }
  },
  {
    id: 3,
    title: "S邸 全面リノベーション",
    category: "リノベーション",
    location: "愛知県名古屋市昭和区",
    date: "2024年7月12日",
    likes: 428,
    comments: 67,
    description: "築30年の住宅が現代的な空間に生まれ変わりました🏡耐震補強も実施し、安全性も大幅にアップ！",
    images: [
      "https://images.unsplash.com/photo-1634586648651-f1fb9ec10d90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW5vdmF0aW9uJTIwaG91c2UlMjB3b3JrfGVufDF8fHx8MTc2NjEzNTI1OHww&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    tags: ["#リノベーション", "#リフォーム", "#耐震", "#昭和区"],
    user: {
      name: "現場ジン公式",
      avatar: "👷"
    }
  },
  {
    id: 4,
    title: "公共施設 補修工事完了",
    category: "公共工事",
    location: "愛知県名古屋市天白区",
    date: "2024年8月30日",
    likes: 189,
    comments: 24,
    description: "市立小学校の外壁補修工事が無事完了しました。子どもたちの安全な学び舎を守ります🏫",
    images: [
      "https://images.unsplash.com/photo-1761519609526-3989e6963210?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdWJsaWMlMjBpbmZyYXN0cnVjdHVyZSUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NjYxMzUyNTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    tags: ["#公共工事", "#補修", "#学校", "#地域貢献"],
    user: {
      name: "現場ジン公式",
      avatar: "👷"
    }
  },
  {
    id: 5,
    title: "道路改良工事",
    category: "土木工事",
    location: "愛知県名古屋市",
    date: "2023年11月5日",
    likes: 156,
    comments: 18,
    description: "市道の舗装工事完了🛣️排水設備も整備し、快適で安全な道路環境を実現しました。",
    images: [
      "https://images.unsplash.com/photo-1636790921342-cbdc4b783de6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwd29ya2Vyc3xlbnwxfHx8fDE3NjYxMDIwNTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    tags: ["#道路工事", "#舗装", "#インフラ", "#土木"],
    user: {
      name: "現場ジン公式",
      avatar: "👷"
    }
  },
  {
    id: 6,
    title: "商業施設 駐車場整備",
    category: "土木工事",
    location: "愛知県名古屋市",
    date: "2022年9月18日",
    likes: 203,
    comments: 28,
    description: "大型商業施設の駐車場造成工事🅿️アスファルト舗装からライン引きまで一貫施工しました。",
    images: [
      "https://images.unsplash.com/photo-1667604579449-14298726118b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidWlsZGluZyUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NjYxMjYzOTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    tags: ["#駐車場", "#商業施設", "#アスファルト", "#造成"],
    user: {
      name: "現場ジン公式",
      avatar: "👷"
    }
  },
];

const categories = [
  { id: 'all', name: '全て', emoji: '🏗️' },
  { id: '土木工事', name: '土木工事', emoji: '⛏️' },
  { id: '外構工事', name: '外構工事', emoji: '🌳' },
  { id: 'リノベーション', name: 'リノベ', emoji: '🏡' },
  { id: '公共工事', name: '公共工事', emoji: '🏫' },
];

function SNSCard({ work, onClick }: { work: typeof snsWorks[0]; onClick: () => void }) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all"
    >
      {/* Header */}
      <div className="flex items-center gap-3 p-4">
        <div className="w-10 h-10 bg-gradient-to-br from-[#10b981] to-[#facc15] rounded-full flex items-center justify-center text-2xl">
          {work.user.avatar}
        </div>
        <div className="flex-1">
          <div className="font-black text-[#0f172a] text-sm">{work.user.name}</div>
          <div className="text-xs text-gray-500">{work.location}</div>
        </div>
        <div className="text-[#10b981] text-xs font-black px-3 py-1 bg-[#10b981]/10 rounded-full">
          {work.category}
        </div>
      </div>

      {/* Image */}
      <div className="relative aspect-square cursor-pointer" onClick={onClick}>
        <img
          src={work.images[0]}
          alt={work.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Actions */}
      <div className="p-4">
        <div className="flex items-center gap-4 mb-3">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setLiked(!liked)}
            className="flex items-center gap-2 group"
          >
            <Heart
              className={`w-6 h-6 transition ${
                liked ? 'fill-red-500 text-red-500' : 'text-[#0f172a] group-hover:text-red-500'
              }`}
            />
          </motion.button>
          <motion.button whileTap={{ scale: 0.9 }}>
            <MessageCircle className="w-6 h-6 text-[#0f172a] hover:text-[#10b981] transition" />
          </motion.button>
          <motion.button whileTap={{ scale: 0.9 }}>
            <Share2 className="w-6 h-6 text-[#0f172a] hover:text-[#10b981] transition" />
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setSaved(!saved)}
            className="ml-auto"
          >
            <Bookmark
              className={`w-6 h-6 transition ${
                saved ? 'fill-[#facc15] text-[#facc15]' : 'text-[#0f172a] hover:text-[#facc15]'
              }`}
            />
          </motion.button>
        </div>

        <div className="font-black text-sm text-[#0f172a] mb-2">
          {liked ? work.likes + 1 : work.likes}件のいいね
        </div>

        <div className="text-sm mb-2">
          <span className="font-black text-[#0f172a] mr-2">{work.user.name}</span>
          <span className="text-gray-700">{work.description}</span>
        </div>

        <div className="flex flex-wrap gap-2 mb-2">
          {work.tags.map((tag, index) => (
            <span key={index} className="text-xs text-[#10b981] hover:underline cursor-pointer">
              {tag}
            </span>
          ))}
        </div>

        <button className="text-gray-500 text-sm hover:text-gray-700 transition" onClick={onClick}>
          コメント{work.comments}件をすべて表示
        </button>

        <div className="text-xs text-gray-400 mt-2 uppercase">{work.date}</div>
      </div>
    </motion.div>
  );
}

export function WorksSNS() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedWork, setSelectedWork] = useState<typeof snsWorks[0] | null>(null);

  const filteredWorks = selectedCategory === 'all' 
    ? snsWorks 
    : snsWorks.filter(work => work.category === selectedCategory);

  return (
    <>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-[#10b981] font-black tracking-[0.3em] text-sm uppercase">
              Social Feed
            </span>
            <h3 className="text-3xl md:text-5xl font-black mt-2 text-[#0f172a]">施工実績フィード</h3>
            <p className="text-gray-600 mt-4">Instagram風に施工実績をチェック</p>
          </motion.div>

          {/* Story-style Category Filter */}
          <div className="flex gap-4 overflow-x-auto pb-6 mb-8 scrollbar-hide">
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex flex-col items-center gap-2 flex-shrink-0 transition ${
                  selectedCategory === cat.id ? 'opacity-100' : 'opacity-60'
                }`}
              >
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl ${
                    selectedCategory === cat.id
                      ? 'bg-gradient-to-br from-[#10b981] to-[#facc15] ring-4 ring-[#10b981]/30'
                      : 'bg-gradient-to-br from-gray-200 to-gray-300'
                  }`}
                >
                  {cat.emoji}
                </div>
                <span className="text-xs font-black text-[#0f172a]">{cat.name}</span>
              </motion.button>
            ))}
          </div>

          {/* Instagram-style Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredWorks.map((work) => (
              <SNSCard key={work.id} work={work} onClick={() => setSelectedWork(work)} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      {selectedWork && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedWork(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden grid md:grid-cols-2"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Side */}
            <div className="relative bg-black flex items-center justify-center">
              <img
                src={selectedWork.images[0]}
                alt={selectedWork.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Content Side */}
            <div className="flex flex-col max-h-[90vh]">
              {/* Header */}
              <div className="flex items-center gap-3 p-6 border-b">
                <div className="w-10 h-10 bg-gradient-to-br from-[#10b981] to-[#facc15] rounded-full flex items-center justify-center text-2xl">
                  {selectedWork.user.avatar}
                </div>
                <div className="flex-1">
                  <div className="font-black text-[#0f172a]">{selectedWork.user.name}</div>
                  <div className="text-xs text-gray-500">{selectedWork.location}</div>
                </div>
                <button
                  onClick={() => setSelectedWork(null)}
                  className="w-8 h-8 hover:bg-gray-100 rounded-full flex items-center justify-center transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6">
                <div className="mb-4">
                  <div className="inline-block px-3 py-1 bg-[#10b981]/10 text-[#10b981] text-xs font-black rounded-full mb-3">
                    {selectedWork.category}
                  </div>
                  <h3 className="text-2xl font-black text-[#0f172a] mb-3">{selectedWork.title}</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">{selectedWork.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedWork.tags.map((tag, index) => (
                      <span key={index} className="text-sm text-[#10b981]">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-3 p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-[#10b981]" />
                      <span className="text-gray-700">{selectedWork.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-[#10b981]" />
                      <span className="text-gray-700">{selectedWork.date}</span>
                    </div>
                  </div>
                </div>

                {/* Mock Comments */}
                <div className="border-t pt-4">
                  <div className="text-sm font-black text-[#0f172a] mb-3">コメント</div>
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-sm">
                        👤
                      </div>
                      <div>
                        <div className="text-sm">
                          <span className="font-black mr-2">田中様</span>
                          <span className="text-gray-700">綺麗な仕上がりですね！</span>
                        </div>
                        <div className="text-xs text-gray-400 mt-1">2日前</div>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-sm">
                        👤
                      </div>
                      <div>
                        <div className="text-sm">
                          <span className="font-black mr-2">佐藤様</span>
                          <span className="text-gray-700">さすがプロの仕事✨</span>
                        </div>
                        <div className="text-xs text-gray-400 mt-1">1日前</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions Footer */}
              <div className="border-t p-6">
                <div className="flex items-center gap-4 mb-3">
                  <Heart className="w-6 h-6 text-[#0f172a] hover:text-red-500 cursor-pointer transition" />
                  <MessageCircle className="w-6 h-6 text-[#0f172a] hover:text-[#10b981] cursor-pointer transition" />
                  <Share2 className="w-6 h-6 text-[#0f172a] hover:text-[#10b981] cursor-pointer transition" />
                  <Bookmark className="w-6 h-6 text-[#0f172a] hover:text-[#facc15] cursor-pointer transition ml-auto" />
                </div>
                <div className="font-black text-sm text-[#0f172a]">{selectedWork.likes}件のいいね</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
