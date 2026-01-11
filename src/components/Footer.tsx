import { Heart } from "lucide-react";

const Footer = () => {
	return (
		<footer className="bg-[#FAFAFA] py-20 border-t border-stone-200">
			<div className="max-w-4xl mx-auto px-4 text-center">
				<h2 className="font-serif text-4xl text-stone-800 mb-6 font-light">
					Shremal & Himanshu
				</h2>
				<p className="text-stone-500 mb-12 font-light italic tracking-wide">
					"We can't wait to celebrate with you!"
				</p>

				<div className="flex items-center justify-center gap-2 text-xs text-stone-300 uppercase tracking-[0.2em] font-light">
					<span>Made with</span>
					<Heart className="w-3 h-3 text-stone-300 fill-current" />
					<span>Music by Kevin MacLeod</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
