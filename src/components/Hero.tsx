import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto w-full">
        {/* Text Content */}
        <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1"
        >
            <span className="text-primary uppercase tracking-[0.4em] text-xs font-medium mb-6">Save the Date</span>
            
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-text mb-6 leading-[0.9]">
                Shremal <br />
                <span className="italic text-stone-400 ml-12">&</span> Himanshu
            </h1>

            <div className="w-24 h-px bg-primary/30 my-8 md:ml-0 mx-auto"></div>

            <p className="text-xl md:text-2xl font-light text-stone-600 mb-8 font-serif italic">
                6 • FEB • 26 • Nalasopara
            </p>

            <p className="text-stone-500 max-w-sm leading-relaxed font-light text-sm tracking-wide">
                WE INVITE YOU TO JOIN US IN CELEBRATING OUR LOVE AND NEW BEGINNINGS UNDER THE STARS.
            </p>
        </motion.div>

        {/* Image Content */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="order-1 md:order-2 relative"
        >
            <div className="relative aspect-3/4 w-full max-w-md mx-auto">
                <div className="absolute inset-0 border border-primary/20 translate-x-4 translate-y-4 z-0"></div>
                <div className="absolute inset-0 bg-stone-200 z-10 overflow-hidden shadow-2xl">
                    <img 
                        src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2670&auto=format&fit=crop" 
                        alt="Couple" 
                        className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-[2s]"
                    />
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
