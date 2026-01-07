import { MapPin, Clock, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Event } from '../data/himanshuEvents';

const EventCard = ({ title, time, date, location, delay, mapUrl }: { title: string, time: string, date: string, location: string, delay: number, mapUrl: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ delay, duration: 0.8, ease: "easeOut" }}
    className="glass-card p-10 hover:border-primary/30 transition-colors"
  >
    <h3 className="font-serif text-3xl mb-6 text-text">{title}</h3>

    <div className="space-y-4 text-stone-500 mb-8 font-light tracking-wide text-xs uppercase">
      <div className="flex items-center gap-3">
        <Calendar className="w-4 h-4 text-primary" />
        <span>{date}</span>
      </div>
      <div className="flex items-center gap-3">
        <Clock className="w-4 h-4 text-primary" />
        <span>{time}</span>
      </div>
      <div className="flex items-center gap-3">
        <MapPin className="w-4 h-4 text-primary" />
        <span>{location}</span>
      </div>
    </div>

    {/* <p className="text-stone-600 leading-relaxed font-light italic mb-8">
      {description}
    </p> */}

    <a
      href={mapUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-text border-b border-primary/50 pb-1 text-xs font-medium uppercase tracking-[0.2em] hover:text-primary hover:border-primary transition-all"
    >
      View Map
      <MapPin className="w-3 h-3" />
    </a>
  </motion.div>
);

interface EventDetailsProps {
  events: Event[];
}

const EventDetails = ({ events }: EventDetailsProps) => {
  return (
    <section className="py-32 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <span className="text-primary uppercase tracking-[0.3em] text-xs">Itinerary</span>
          <h2 className="font-serif text-5xl md:text-6xl text mt-6 font-light">The Events</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
