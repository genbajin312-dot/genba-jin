'use client';

import { ConsultationPage } from "../../components/consultation/ConsultationPage";
import { motion } from "motion/react";

export default function Page() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ConsultationPage />
    </motion.div>
  );
}
