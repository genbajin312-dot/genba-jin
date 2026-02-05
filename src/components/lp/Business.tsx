import { motion } from "motion/react";
import { Wrench, Package, Sparkles, Ruler, Trash2, Droplets } from "lucide-react";

const solutions = [
  {
    icon: Wrench,
    title: "養生・剥がし",
    desc: "明日から塗装なのに養生まだ…養生テープの剥がし残しがひどい…そんな時に。",
    examples: ["養生貼り", "剥がし残し除去", "部分養生"],
  },
  {
    icon: Package,
    title: "資材・ゴミ移動",
    desc: "トラックは入るけど荷下ろしの人手がない、バラバラになった資材を片付けたい時に。",
    examples: ["荷下ろし補助", "資材整理", "ゴミ出し"],
  },
  {
    icon: Sparkles,
    title: "現場清掃",
    desc: "来週検査なのに事務所がゴミ屋敷状態、仮設トイレ周りが汚すぎるといった時に。",
    examples: ["事務所清掃", "トイレ周り清掃", "現場美化"],
  },
  {
    icon: Ruler,
    title: "簡易足場・手すり",
    desc: "明日だけちょっと高いところで作業したい、もう使わない単管を片付けたい時に。",
    examples: ["簡易足場組立", "手すり設置", "単管移動"],
  },
  {
    icon: Trash2,
    title: "廃材分別・搬出",
    desc: "産廃屋さんが来るけど分別が間に合わない、ちょっとした残コン片付けたい時に。",
    examples: ["分別作業", "搬出補助", "残コン処理"],
  },
  {
    icon: Droplets,
    title: "雨養生・補修",
    desc: "強風で飛んだブルーシート張り直してほしい、雨漏り箇所に仮のビニールが欲しい時に。",
    examples: ["シート張り直し", "雨養生", "簡易補修"],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

export function Business() {
  return (
    <section id="business" className="py-20 md:py-32 bg-[#F9F9FA]">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
             <span className="text-xs font-bold tracking-[0.2em] text-[#F2A900] block mb-6 uppercase">Our Solutions</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 mb-8 leading-tight text-balance">
            専門業者を呼ぶほどじゃない<br className="hidden md:block" />
            "現場の小さな困った"を解決
          </h2>
          <p className="text-sm md:text-base text-gray-600 font-medium leading-relaxed">
            「明日までにこれやっておきたい」<br className="md:hidden" />
            現場監督様のそんな声に応える、<br className="hidden md:block" />
            機動力抜群の現場サポートサービスです。
          </p>
        </div>

        <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
              className="group bg-white p-8 rounded-3xl shadow-[0_4px_20px_-2px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_-4px_rgba(0,0,0,0.08)] transition-all duration-500 relative overflow-hidden h-full flex flex-col items-start border border-gray-100"
            >
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Icon */}
              <div className="relative w-14 h-14 bg-gray-50 text-slate-800 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#F2A900] group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:shadow-orange-200">
                <solution.icon className="w-6 h-6" strokeWidth={1.5} />
              </div>
              
              {/* Title */}
              <h3 className="relative text-xl font-bold text-slate-900 mb-4 group-hover:text-[#F2A900] transition-colors duration-300">
                {solution.title}
              </h3>
              
              {/* Desc */}
              <p className="relative text-sm text-gray-500 leading-relaxed mb-8 flex-1">
                {solution.desc}
              </p>

              {/* Simple List Tags */}
              <div className="relative w-full pt-6 border-t border-gray-100 mt-auto">
                <div className="flex flex-col gap-2">
                    {solution.examples.map((ex, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs font-medium text-gray-400 group-hover:text-gray-600 transition-colors">
                            <span className="w-1 h-1 bg-gray-300 rounded-full group-hover:bg-[#F2A900] transition-colors"></span>
                            {ex}
                        </div>
                    ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-20 text-center"
        >
             <motion.div 
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-white rounded-full border border-gray-100 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] text-sm font-medium text-gray-600 cursor-pointer hover:border-[#F2A900] hover:text-[#F2A900] hover:shadow-lg transition-all duration-300"
             >
                <Sparkles className="w-4 h-4 text-[#F2A900]" />
                <a href="https://lin.ee/G0HzvGh" target="_blank" rel="noopener noreferrer">上記以外でも「これ頼める？」とお気軽にご相談ください</a>
             </motion.div>
        </motion.div>
      </div>
    </section>
  );
}