import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Music, Pause } from 'lucide-react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const isAttemptingPlay = useRef(false);

  useEffect(() => {
    if (audioRef.current) {
        audioRef.current.volume = 1;
    }

    const handleInteraction = async () => {
      if (audioRef.current && !isPlaying && !isAttemptingPlay.current) {
        isAttemptingPlay.current = true;
        
        try {
          await audioRef.current.play();
          setIsPlaying(true);
          // Only remove listeners after successful playback
          document.removeEventListener('click', handleInteraction);
          document.removeEventListener('touchstart', handleInteraction);
        } catch (error) {
          console.log("Auto-play failed, will retry on next interaction:", error);
          isAttemptingPlay.current = false;
        }
      }
    };

    document.addEventListener('click', handleInteraction);
    document.addEventListener('touchstart', handleInteraction);

    return () => {
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
    };
  }, [isPlaying]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <audio
        ref={audioRef}
        loop
        preload="auto"
        // src="https://incompetech.com/music/royalty-free/mp3-royaltyfree/There%20is%20Romance.mp3" 
        src="/There-is-Romance.mp3" 
      />
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={togglePlay}
        className="glass-card p-4 rounded-full text-text/80 hover:text-primary transition-colors flex items-center gap-2"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? (
          <Pause className="w-5 h-5" />
        ) : (
          <Music className="w-5 h-5" />
        )}
      </motion.button>
    </div>
  );
};

export default MusicPlayer;
