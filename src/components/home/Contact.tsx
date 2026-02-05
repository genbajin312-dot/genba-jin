'use client';

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Phone, Mail, Send, ArrowRight } from "lucide-react";
import { useNavigation } from "../../contexts/NavigationContext";

export function Contact() {
  const { navigateTo } = useNavigation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <></>
  );
}