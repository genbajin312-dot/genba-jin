'use client';

import { motion } from "motion/react";
import { ScrollReveal } from "../ui/ScrollReveal";
import { Wrench, Package, Broom, Ruler, Trash2, Droplets, Leaf } from "lucide-react";

const solutions = [
  {
    icon: Wrench,
    title: "現場内の細かい養生・剥がし",
    examples: ["明日から塗装なのに養生まだ…", "養生テープの剥がし残しがひどい"]
  },
  {
    icon: Package,
    title: "資材・ゴミの運び出し/運び込み・整理整頓",
    examples: ["トラックは入るけど荷下ろしの人手がない", "バラバラになった資材を片付けて"]
  },
  {
    icon: Broom,
    title: "現場小屋・事務所周りの掃除・片付け",
    examples: ["来週検査なのに事務所がゴミ屋敷状態", "仮設トイレ周りが汚すぎ"]
  },
  {
    icon: Ruler,
    title: "簡易足場・簡易手すりの組立/解体・移動",
    examples: ["明日だけちょっと高いところで作業したい", "もう使わない単管を片付けて"]
  },
  {
    icon: Trash2,
    title: "残材・廃材の分別・運び出し補助",
    examples: ["産廃屋さんが来るけど分別が間に合わない", "ちょっとした残コン片付けたい"]
  },
  {
    icon: Droplets,
    title: "雨よけ・簡易シート張り直し/補修",
    examples: ["強風で飛んだブルーシート張り直して", "雨漏り箇所に仮のビニール"]
  },
  {
    icon: Leaf,
    title: "現場内の草刈り・草むしり・簡易整地",
    examples: ["施主さんが来るから見た目だけなんとかして", "フェンス際の草だけ"]
  }
];

export function QuickSolutions() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-16">
            <motion.h2 
              className="text-2xl md:text-4xl mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              専門業者を呼ぶほどじゃない<br className="md:hidden" />
              <span className="text-[#F2A900]">"現場の小さな困った"</span>を<br className="md:hidden" />即日解決します
            </motion.h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {solutions.map((solution, index) => (
            <ScrollReveal key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 p-6 md:p-8 rounded-lg hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#F2A900] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <solution.icon className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-base md:text-lg flex-1 leading-tight">
                    {solution.title}
                  </h3>
                </div>
                <div className="space-y-2 ml-16">
                  {solution.examples.map((example, exIndex) => (
                    <p key={exIndex} className="text-sm text-gray-600 leading-relaxed">
                      「{example}」
                    </p>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-center mt-12 md:mt-16"
          >
            <p className="text-gray-600 text-sm md:text-base">
              こんな「ちょっと困った」にすぐ対応します
            </p>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
