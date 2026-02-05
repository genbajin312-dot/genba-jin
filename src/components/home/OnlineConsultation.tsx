import { motion } from "motion/react";
import { useNavigation } from "../../contexts/NavigationContext";
import { ArrowRight } from "lucide-react";

export function OnlineConsultation() {
  const { navigateTo } = useNavigation();

  return (
    <section className="relative w-full bg-[#facc15] overflow-hidden">
      <div className="container mx-auto px-6 py-20 md:py-28 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-10"
          >
            <h2 className="text-3xl md:text-5xl font-black text-[#022c22] mb-8 leading-tight drop-shadow-sm">
              商談は全てオンラインで<br />
              可能です。
            </h2>
            
            <button
              onClick={() => navigateTo('consultation')}
              className="inline-flex items-center gap-3 bg-[#10b981] text-white font-black py-4 px-8 rounded-lg shadow-lg hover:bg-[#0f766e] transition-all transform hover:scale-105"
            >
              オンライン相談の詳細はこちら
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>

          {/* Image Area - Creating the look from the screenshot */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 relative h-[300px] md:h-[400px]"
          >
             {/* 
                The design shows a top-down view of a laptop on a yellow surface. 
                Using an image that blends well or masking it.
             */}
             <div className="absolute inset-0 md:-right-20 flex items-center justify-center md:justify-end">
                <img 
                  src="https://images.unsplash.com/photo-1650978813673-df28319b04f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kcyUyMHR5cGluZyUyMG9uJTIwbGFwdG9wJTIwdG9wJTIwdmlldyUyMG9mZmljZXxlbnwxfHx8fDE3NjUwNzI1Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Online Consultation"
                  className="max-w-none w-[120%] md:w-full object-contain mix-blend-multiply opacity-90 transform translate-x-10 md:translate-x-0"
                  style={{ filter: "contrast(1.1) brightness(1.1)" }}
                />
             </div>
          </motion.div>

        </div>
      </div>
      
      {/* Decorative shadow from the laptop/objects in the design */}
      <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-l from-yellow-500/20 to-transparent pointer-events-none" />
    </section>
  );
}