'use client';

import { useNavigation } from "../../contexts/NavigationContext";

export function Footer() {
  const { navigateTo } = useNavigation();

  return (
    <footer className="bg-[#0f172a] text-white py-12 border-t border-[#facc15]/20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-black tracking-[0.15em] mb-4 text-white">
          <span className="text-[#10b981]">GENBA</span>JIN INC.
        </h2>
        <div className="flex justify-center gap-6 text-sm font-black text-slate-400 mb-8">
          <button
            onClick={() => navigateTo('home' as any, 'about')}
            className="hover:text-[#facc15] transition"
          >
            会社について
          </button>
          <button
            onClick={() => navigateTo('home' as any, 'service')}
            className="hover:text-[#facc15] transition"
          >
            事業内容
          </button>
          <button
            onClick={() => navigateTo('recruit' as any)}
            className="hover:text-[#facc15] transition"
          >
            採用情報
          </button>
          <button
            onClick={() => navigateTo('contact' as any)}
            className="hover:text-[#facc15] transition"
          >
            お問い合わせ
          </button>
        </div>
        <p className="text-xs text-slate-600 tracking-[0.1em]">
          &copy; 2024 Genbajin Inc. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}