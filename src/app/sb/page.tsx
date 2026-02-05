'use client';

import { SBPage } from "../../components/sb/SBPage";
import { motion } from "motion/react";

export default function Page() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SBPage />
    </motion.div>
  );
}
