'use client';

import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { X } from "lucide-react";

const galleryWorks = [
  {
    id: 1,
    title: "瑞穂区 大規模造成工事",
    category: "土木工事",
    location: "愛知県名古屋市瑞穂区",
    year: "2024年",
    description: "5,000㎡の宅地造成。最新の測量技術を活用し、精度の高い基盤づくりを実現。",
    image: "https://images.unsplash.com/photo-1638207849658-e57be0cdc208?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXZpbCUyMGVuZ2luZWVyaW5nJTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc2NjEzNTI1N3ww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 2,
    title: "新築住宅外構一式",
    category: "外構工事",
    location: "愛知県名古屋市",
    year: "2024年",
    description: "デザイン性と機能性を両立したエクステリア。駐車スペース、アプローチ、植栽を施工。",
    image: "https://images.unsplash.com/photo-1720876470648-ba8b314b47ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleHRlcmlvciUyMGhvdXNlJTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc2NjEzNTI1OHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 3,
    title: "S邸 全面改修工事",
    category: "リノベーション",
    location: "愛知県名古屋市",
    year: "2023年",
    description: "築30年の住宅を現代的な空間へ。耐震補強も同時に実施し、安全性を向上。",
    image: "https://images.unsplash.com/photo-1634586648651-f1fb9ec10d90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW5vdmF0aW9uJTIwaG91c2UlMjB3b3JrfGVufDF8fHx8MTc2NjEzNTI1OHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 4,
    title: "公共施設 補修工事",
    category: "公共工事",
    location: "愛知県名古屋市",
    year: "2023年",
    description: "地域の公共施設の外壁補修と防水工事。安全で快適な環境を提供。",
    image: "https://images.unsplash.com/photo-1761519609526-3989e6963210?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdWJsaWMlMjBpbmZyYXN0cnVjdHVyZSUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NjYxMzUyNTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 5,
    title: "道路改良工事",
    category: "土木工事",
    location: "愛知県",
    year: "2023年",
    description: "市道の舗装工事。排水設備も同時に整備し、快適な道路環境を実現。",
    image: "https://images.unsplash.com/photo-1636790921342-cbdc4b783de6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwd29ya2Vyc3xlbnwxfHx8fDE3NjYxMDIwNTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 6,
    title: "商業施設 駐車場整備",
    category: "土木工事",
    location: "愛知県",
    year: "2022年",
    description: "大型商業施設の駐車場造成。アスファルト舗装、ライン引き、照明設置を実施。",
    image: "https://images.unsplash.com/photo-1667604579449-14298726118b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidWlsZGluZyUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NjYxMjYzOTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function WorksGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [selectedWork, setSelectedWork] = useState<typeof galleryWorks[0] | null>(null);

  return (
    <>
      <section className="py-24 bg-gray-100 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-[#10b981] font-black tracking-[0.3em] text-sm uppercase">
              Works Gallery
            </span>
            <h3 className="text-3xl md:text-5xl font-black mt-2 text-[#0f172a]">施工実績ギャラリー</h3>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryWorks.map((work, index) => (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedWork(work)}
                className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-[#10b981]/10 text-[#10b981] text-xs font-black rounded-full mb-3">
                    {work.category}
                  </div>
                  <h4 className="font-black text-lg mb-2 text-[#0f172a] group-hover:text-[#10b981] transition">
                    {work.title}
                  </h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div>{work.location}</div>
                    <div>{work.year}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedWork && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedWork(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl max-w-4xl w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedWork.image}
                alt={selectedWork.title}
                className="w-full h-96 object-cover"
              />
              <button
                onClick={() => setSelectedWork(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-8">
              <div className="inline-block px-4 py-1.5 bg-[#10b981]/10 text-[#10b981] text-sm font-black rounded-full mb-4">
                {selectedWork.category}
              </div>
              <h3 className="text-3xl font-black mb-4 text-[#0f172a]">{selectedWork.title}</h3>
              <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                <div>
                  <div className="text-gray-500 font-black mb-1">所在地</div>
                  <div className="text-[#0f172a]">{selectedWork.location}</div>
                </div>
                <div>
                  <div className="text-gray-500 font-black mb-1">完成年</div>
                  <div className="text-[#0f172a]">{selectedWork.year}</div>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
                {selectedWork.description}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
