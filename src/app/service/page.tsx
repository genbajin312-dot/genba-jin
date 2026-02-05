'use client';

import { Business } from "../../components/home/Business";
import { ServiceFlow } from "../../components/service/ServiceFlow";
import { Strength } from "../../components/service/Strength";
import { ServiceHero } from "../../components/service/ServiceHero";
import { motion } from "motion/react";

export default function Service() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ServiceHero />
      <Business showButton={false} />
      <ServiceFlow />
      <Strength />
    </motion.div>
  );
}