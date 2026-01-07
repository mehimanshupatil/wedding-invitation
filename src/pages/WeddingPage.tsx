import Hero from '../components/Hero';
import EventDetails from '../components/EventDetails';
import Footer from '../components/Footer';
import MusicPlayer from '../components/MusicPlayer';
import Confetti from '../components/Confetti';
import NoiseOverlay from '../components/NoiseOverlay';
import Preloader from '../components/Preloader';
// import Countdown from '../components/Countdown';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { Event } from '../data/himanshuEvents';

interface WeddingPageProps {
    events: Event[];
}

function WeddingPage({ events }: WeddingPageProps) {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 100]);
    const y2 = useTransform(scrollY, [0, 500], [0, -100]);

    return (
        <div className="min-h-screen bg-secondary selection:bg-primary/20 font-sans relative">
            <Preloader />
            <NoiseOverlay />

            {/* Aurora Background Blobs with Parallax */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <motion.div
                    style={{ y: y1 }}
                    className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[120px] mix-blend-multiply animate-pulse"
                />
                <motion.div
                    style={{ y: y2 }}
                    className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-accent/10 blur-[120px] mix-blend-multiply animate-pulse delay-1000"
                />
            </div>

            <div className="relative z-10">
                <Confetti />
                <MusicPlayer />
                <Hero />
                {/* <Countdown /> */}
                <EventDetails events={events} />
                <Footer />
            </div>
        </div>
    );
}

export default WeddingPage;
