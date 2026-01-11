import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

const Preloader = () => {
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsVisible(false);
		}, 2500);
		return () => clearTimeout(timer);
	}, []);

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					className="fixed inset-0 z-100 flex items-center justify-center"
					initial="initial"
					animate="animate"
					exit="exit"
				>
					{/* Right Panel */}
					<motion.div
						variants={{
							initial: { x: 0 },
							exit: {
								x: "100%",
								transition: {
									duration: 0.8,
									ease: [0.76, 0, 0.24, 1],
									delay: 0.2,
								},
							},
						}}
						className="absolute right-0 top-0 h-full w-1/2 bg-secondary border-l border-primary/20"
					/>

					{/* Left Panel */}
					<motion.div
						variants={{
							initial: { x: 0 },
							exit: {
								x: "-150%",
								transition: {
									duration: 1.2,
									ease: [0.76, 0, 0.24, 1],
									delay: 0.2,
								},
							},
						}}
						className="absolute left-0 top-0 h-full w-1/2 bg-secondary border-r border-primary/20"
					>
						{/* Content */}
						<div className="w-48 h-48 border border-primary/20 rounded-full bg-secondary absolute top-1/2 left-full -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center z-10">
							<h1 className="font-serif text-5xl md:text-6xl text-text mb-2 tracking-tight">
								S <span className="text-primary italic">&</span> H
							</h1>
							<p className="text-primary uppercase tracking-[0.4em] text-xs font-light">
								6 • 2 • 26
							</p>
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default Preloader;
