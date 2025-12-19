import { MapPin, Clock, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const EventCard = ({ title, time, date, location, description, delay, mapUrl }: { title: string, time: string, date: string, location: string, description: string, delay: number, mapUrl: string }) => (
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

    <p className="text-stone-600 leading-relaxed font-light italic mb-8">
      {description}
    </p>
    
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

const EventDetails = () => {
    const events = [
        {
            title: "The Ceremony",
            date: "December 12, 2025",
            time: "10:00 AM",
            location: "Grand Palace Hotel",
            description: "Join us for the traditional wedding ceremony as we exchange vows under the mandap, surrounded by flowers and blessings.",
            delay: 0.2,
            mapUrl: "https://www.google.com/maps/search/?api=1&query=Grand+Palace+Hotel+Mumbai"
        },
        {
            title: "The Reception",
            date: "December 12, 2025",
            time: "7:00 PM",
            location: "Grand Ballroom",
            description: "An evening of elegance, fine dining, and dancing. We look forward to celebrating our first night as a married couple with you.",
            delay: 0.4,
            mapUrl: "https://www.google.com/maps/search/?api=1&query=Grand+Ballroom+Mumbai"
        }
    ];

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
