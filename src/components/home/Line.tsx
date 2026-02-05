'use client';

import { motion } from "motion/react";
import { MessageCircle, Check } from "lucide-react";

export function Line() {
  return (
    <section id="line" className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a]">
      {/* 背景装飾 */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#10b981] rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#facc15] rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-[#10b981]/20 border border-[#10b981]/50 text-[#10b981] rounded-full text-sm tracking-wider">
              公式LINE
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl mb-4 text-white">
            気軽に<span className="text-[#facc15]">相談</span>できる
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            LINEで簡単にお問い合わせ・ご相談いただけます。<br className="hidden sm:block" />
            現場のこと、求人のこと、何でもお気軽にどうぞ。
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          {/* メインカード */}
          <div className="bg-gradient-to-br from-[#1e293b]/80 to-[#0f172a]/80 backdrop-blur-xl border border-[#10b981]/30 rounded-2xl p-6 md:p-10 shadow-2xl">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* 左側：メイン情報 */}
              <div className="flex-1 w-full">
                {/* LINEロゴ・アイコン */}
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-[#06c755] to-[#00b900] rounded-3xl flex items-center justify-center shadow-[0_0_30px_rgba(6,199,85,0.4)]">
                    <MessageCircle className="w-10 h-10 md:w-12 md:h-12 text-white" strokeWidth={2.5} />
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl text-center text-white mb-6">
                  現場JIN 公式LINE
                </h3>

                {/* メリット一覧 */}
                <div className="space-y-3 mb-8">
                  {[
                    "24時間いつでも相談OK",
                    "スマホで簡単に質問できる",
                    "お仕事の最新情報をお届け",
                    "面接日程もLINEで調整可能"
                  ].map((text, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-center gap-3 text-white/90"
                    >
                      <div className="flex-shrink-0 w-6 h-6 bg-[#10b981]/20 border border-[#10b981] rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-[#10b981]" strokeWidth={3} />
                      </div>
                      <span>{text}</span>
                    </motion.div>
                  ))}
                </div>

                {/* 友だち追加ボタン */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <a
                    href="https://lin.ee/G0HzvGh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-4 md:py-5 bg-gradient-to-r from-[#06c755] to-[#00b900] text-white text-center rounded-xl shadow-[0_0_25px_rgba(6,199,85,0.3)] hover:shadow-[0_0_35px_rgba(6,199,85,0.5)] transition-all"
                  >
                    <span className="flex items-center justify-center gap-2 text-lg md:text-xl">
                      <MessageCircle className="w-6 h-6" />
                      <span className="tracking-wide">友だち追加</span>
                    </span>
                  </a>
                </motion.div>

                {/* 補足テキスト */}
                <p className="text-center text-white/50 text-sm mt-4">
                  ※ボタンを押すとLINEアプリが起動します
                </p>
              </div>

              {/* 右側：QRコード */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex-shrink-0"
              >
                <div className="bg-white p-6 rounded-2xl shadow-xl">
                  <div className="w-40 h-40 md:w-48 md:h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center relative overflow-hidden">
                    {/* QRコードプレースホルダー */}
                    <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-1 p-3">
                      {Array.from({ length: 64 }).map((_, i) => (
                        <div
                          key={i}
                          className={`${
                            Math.random() > 0.5 ? 'bg-black' : 'bg-white'
                          } rounded-sm`}
                        />
                      ))}
                    </div>
                    {/* 実際のQRコードに差し替える場合は以下を使用 */}
                    {/* <img src="/line-qr-code.png" alt="LINE QRコード" className="w-full h-full object-contain" /> */}
                  </div>
                  <p className="text-center text-gray-600 text-xs mt-3">
                    QRコードで追加
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* よくある質問 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-8 space-y-4"
          >
            <h4 className="text-center text-white/80 text-sm mb-4">よくある質問</h4>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  q: "営業時間外でもメッセージできますか？",
                  a: "はい！24時間いつでもメッセージOKです。"
                },
                {
                  q: "しつこい営業はありませんか？",
                  a: "ご安心ください。お問い合わせへの回答のみです。"
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="bg-[#1e293b]/40 backdrop-blur-sm border border-[#10b981]/20 rounded-lg p-4"
                >
                  <p className="text-[#facc15] text-sm mb-2">{faq.q}</p>
                  <p className="text-white/70 text-sm">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}