'use client';

import { Philosophy } from "../../components/home/Philosophy";
import { CompanyInfo } from "../../components/about/CompanyInfo";
import { Vision } from "../../components/about/Vision";
import { AboutHero } from "../../components/about/AboutHero";
import { motion } from "motion/react";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AboutHero />
      <Philosophy showButton={false} />
      <CompanyInfo />
      <Vision />
    </motion.div>
  );
}