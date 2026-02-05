'use client';

import { WorksStats } from "../../components/works/WorksStats";
import { WorksHero } from "../../components/works/WorksHero";
import { WorksSNS } from "../../components/works/WorksSNS";
import { motion } from "motion/react";

export default function WorksPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <WorksHero />
      <WorksSNS />
      <WorksStats />
    </motion.div>
  );
}