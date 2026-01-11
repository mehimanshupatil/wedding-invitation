/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#C5A059", // Soft Gold
				secondary: "#FDFCF8", // Cream/Off-white
				accent: "#E7E5E4", // Warm Stone
				surface: "#FFFFFF",
				text: "#44403C", // Warm Dark Grey
			},
			fontFamily: {
				serif: ["Playfair Display", "serif"],
				sans: ["Inter", "sans-serif"],
			},
		},
	},
	plugins: [],
};
