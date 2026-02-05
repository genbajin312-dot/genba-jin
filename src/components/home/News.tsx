'use client';

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const newsItems = [
  {
    id: 1,
    date: "2024.01.15",
    category: "お知らせ",
    title: "施工実績を更新しました",
    isNew: true,
  },
  {
    id: 2,
    date: "2024.01.10",
    category: "採用情報",
    title: "2025年度新卒採用のエントリー受付を開始しました",
    isNew: true,
  },
  {
    id: 3,
    date: "2024.01.01",
    category: "その他",
    title: "コーポレートサイトをリニューアルしました",
    isNew: false,
  },
  {
    id: 4,
    date: "2023.12.15",
    category: "お知らせ",
    title: "年末年始休業のお知らせ",
    isNew: false,
  },
];

export function News() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return null;
}