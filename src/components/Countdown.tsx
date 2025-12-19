import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Countdown = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2026-02-06T00:00:00") - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const TimeUnit = ({ value, label }: { value: number, label: string }) => (
    <div className="flex flex-col items-center mx-4 md:mx-8">
      <span className="font-serif text-4xl md:text-6xl text-text font-light">
        {value < 10 ? `0${value}` : value}
      </span>
      <span className="text-xs uppercase tracking-[0.3em] text-primary mt-2">
        {label}
      </span>
    </div>
  );

  return (
    <section className="py-20 bg-secondary relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-4 text-center"
      >
        <p className="text-stone-400 uppercase tracking-[0.3em] text-xs mb-12">Countdown to Forever</p>
        
        <div className="flex flex-wrap justify-center gap-y-8">
          <TimeUnit value={timeLeft.days} label="Days" />
          <div className="hidden md:block text-2xl text-primary/30 mt-4 self-start">/</div>
          <TimeUnit value={timeLeft.hours} label="Hours" />
          <div className="hidden md:block text-2xl text-primary/30 mt-4 self-start">/</div>
          <TimeUnit value={timeLeft.minutes} label="Mins" />
          <div className="hidden md:block text-2xl text-primary/30 mt-4 self-start">/</div>
          <TimeUnit value={timeLeft.seconds} label="Secs" />
        </div>
      </motion.div>
    </section>
  );
};

export default Countdown;
