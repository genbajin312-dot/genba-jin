'use client';

import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { Plus, ArrowRight, X } from "lucide-react";
import { useNavigation } from "../../contexts/NavigationContext";

const works = [
  {
    id: 1,
    title: "瑞穂区 造成工事",
    category: "土木工事",
    image: "https://images.unsplash.com/photo-1638207849658-e57be0cdc208?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXZpbCUyMGVuZ2luZWVyaW5nJTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc2NjEzNTI1N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "名古屋市瑞穂区における大規模造成工事。約3,000㎡の土地を整地し、宅地開発のための基盤を整備しました。",
    period: "2024年4月〜2024年8月",
    location: "愛知県名古屋市瑞穂区",
    details: [
      "敷地面積：3,000㎡",
      "工期：5ヶ月",
      "重機台数：延べ120台",
      "土量：約5,000㎥の土砂搬出"
    ]
  },
  {
    id: 2,
    title: "新築外構一式",
    category: "外構工事",
    image: "https://images.unsplash.com/photo-1720876470648-ba8b314b47ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleHRlcmlvciUyMGhvdXNlJTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc2NjEzNTI1OHww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "新築住宅の外構工事一式。駐車場、アプローチ、フェンス、植栽など、住まいの外観を美しく仕上げました。",
    period: "2024年9月〜2024年10月",
    location: "愛知県名古屋市緑区",
    details: [
      "駐車場：コンクリート舗装 2台分",
      "フェンス：アルミ製目隠しフェンス 20m",
      "門柱：天然石張り仕上げ",
      "植栽：シンボルツリー＋低木・下草"
    ]
  },
  {
    id: 3,
    title: "S邸 改修工事",
    category: "リノベーション",
    image: "https://images.unsplash.com/photo-1634586648651-f1fb9ec10d90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW5vdmF0aW9uJTIwaG91c2UlMjB3b3JrfGVufDF8fHx8MTc2NjEzNTI1OHww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "築30年の住宅を全面リノベーション。耐震補強から内装まで、現代の暮らしに合わせた快適な住空間に生まれ変わりました。",
    period: "2024年5月〜2024年7月",
    location: "愛知県名古屋市昭和区",
    details: [
      "延床面積：120㎡",
      "耐震補強工事実施",
      "水回り全面改修",
      "断熱性能向上（省エネ等級4相当）"
    ]
  },
  {
    id: 4,
    title: "公共施設 補修",
    category: "公共工事",
    image: "https://images.unsplash.com/photo-1761519609526-3989e6963210?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdWJsaWMlMjBpbmZyYXN0cnVjdHVyZSUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NjYxMzUyNTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "市立小学校の校舎外壁補修工事。ひび割れの補修とタイル張替えにより、安全性と美観を回復しました。",
    period: "2024年7月〜2024年8月",
    location: "愛知県名古屋市天白区",
    details: [
      "外壁面積：約800㎡",
      "ひび割れ補修：延長150m",
      "タイル張替え：約50㎡",
      "夏季休暇期間を利用した施工"
    ]
  },
];

function WorkItem({ item, index, onClick }: { item: typeof works[0]; index: number; onClick: () => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl"
    >
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-[#0f172a]/90 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center text-white p-4 text-center border-4 border-[#facc15]">
        <span className="text-[#facc15] text-xs font-black mb-2 tracking-[0.15em]">
          {item.category}
        </span>
        <h4 className="text-lg font-black">{item.title}</h4>
        <motion.div
          className="mt-4 w-10 h-10 rounded-full bg-[#facc15] text-[#022c22] flex items-center justify-center"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          <Plus className="w-5 h-5" />
        </motion.div>
      </div>
    </motion.div>
  );
}

export function Works({ showButton = true }: { showButton?: boolean }) {
  const { navigateTo } = useNavigation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedWork, setSelectedWork] = useState<typeof works[0] | null>(null);

  return (
    <section id="works" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-center mb-12"
        >
          <div>
            <span className="text-[#10b981] font-black tracking-[0.3em] text-sm uppercase">
              施工実績
            </span>
            <h3 className="text-3xl md:text-4xl font-black text-[#0f172a] mt-2">施工実績</h3>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {works.map((item, index) => (
            <WorkItem key={item.id} item={item} index={index} onClick={() => setSelectedWork(item)} />
          ))}
        </div>

        {showButton && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <button
              onClick={() => navigateTo('works')}
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#10b981] text-white font-black rounded-lg hover:bg-[#facc15] hover:text-[#0f172a] transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105"
            >
              すべての施工実績を見る
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </div>

      {/* モーダル */}
      {selectedWork && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedWork(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 画像ヘッダー */}
            <div className="relative h-64 md:h-80 overflow-hidden rounded-t-2xl">
              <img
                src={selectedWork.image}
                alt={selectedWork.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 to-transparent" />
              <button
                onClick={() => setSelectedWork(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="absolute bottom-6 left-6 text-white">
                <span className="text-[#facc15] font-black text-xs tracking-[0.2em] uppercase">
                  {selectedWork.category}
                </span>
                <h2 className="text-3xl font-black mt-2">{selectedWork.title}</h2>
              </div>
            </div>

            {/* コンテンツ */}
            <div className="p-8">
              <p className="text-[#0f172a]/80 mb-6 leading-relaxed">
                {selectedWork.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-50 rounded-lg p-4">
                  <div className="text-[#10b981] font-black text-xs tracking-[0.2em] mb-2">
                    工期
                  </div>
                  <div className="text-[#0f172a] font-black">
                    {selectedWork.period}
                  </div>
                </div>
                <div className="bg-slate-50 rounded-lg p-4">
                  <div className="text-[#10b981] font-black text-xs tracking-[0.2em] mb-2">
                    場所
                  </div>
                  <div className="text-[#0f172a] font-black">
                    {selectedWork.location}
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#10b981]/5 to-[#facc15]/5 rounded-lg p-6 border-2 border-[#10b981]/20">
                <h3 className="text-[#0f172a] font-black mb-4 flex items-center gap-2">
                  <div className="w-1 h-6 bg-[#10b981] rounded-full" />
                  工事内容
                </h3>
                <ul className="space-y-2">
                  {selectedWork.details.map((detail, index) => (
                    <li key={index} className="flex items-start gap-3 text-[#0f172a]/80">
                      <div className="w-1.5 h-1.5 bg-[#facc15] rounded-full mt-2 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}