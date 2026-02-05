'use client';

import { Hero } from "../components/home/Hero";
import { Philosophy } from "../components/home/Philosophy";
import { Business } from "../components/home/Business";
import { QuickSolutions } from "../components/home/QuickSolutions";
import { Reason } from "../components/home/Reason";
import { Policy } from "../components/home/Policy";
import { Works } from "../components/home/Works";
import { RecruitTeaser } from "../components/home/RecruitTeaser";
import { News } from "../components/home/News";
import { OnlineConsultation } from "../components/home/OnlineConsultation";
import { Line } from "../components/home/Line";
import { Contact } from "../components/home/Contact";
import { motion } from "motion/react";
import { useEffect } from "react";
import { useNavigation } from "../contexts/NavigationContext";

export default function Home() {
  const { scrollTarget, clearScrollTarget } = useNavigation();

  useEffect(() => {
    if (scrollTarget) {
      // Small delay to ensure the DOM is ready if we just navigated
      const timer = setTimeout(() => {
        const element = document.getElementById(scrollTarget);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          clearScrollTarget();
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [scrollTarget, clearScrollTarget]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Philosophy />
      <Business />
      <QuickSolutions />
      <Works />
      <Reason />
      <Policy />
      <Line />
      <OnlineConsultation />
      <RecruitTeaser />
      <News />
      <Contact />
    </motion.div>
  );
}