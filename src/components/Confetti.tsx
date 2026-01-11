import { useEffect, useState } from "react";
import ReactConfetti from "react-confetti";
// Simplified Hook if react-use isn't installed, but plan said dependencies.
// I'll assume react-use strictly isn't installed based on my npm install command,
// so I should implement a simple hook or just use window.

const Confetti = () => {
	const [dimensions, setDimensions] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});

	useEffect(() => {
		const handleResize = () => {
			setDimensions({ width: window.innerWidth, height: window.innerHeight });
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const drawFlower = (ctx: CanvasRenderingContext2D) => {
		ctx.beginPath();
		for (let i = 0; i < 5; i++) {
			ctx.ellipse(0, 0, 8, 3, i * ((Math.PI * 2) / 5), 0, Math.PI * 2);
		}
		ctx.fill();
		ctx.closePath();
	};

	return (
		<div className="fixed inset-0 pointer-events-none z-40">
			<ReactConfetti
				width={dimensions.width}
				height={dimensions.height}
				recycle={true}
				numberOfPieces={80}
				gravity={0.03}
				colors={["#C5A059", "#E7E5E4", "#FFD700", "#FDFCF8", "#FFB6C1"]}
				drawShape={drawFlower}
			/>
		</div>
	);
};

export default Confetti;
