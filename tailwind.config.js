/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		container: {
			padding: {
				DEFAULT: "15px",
			},
		},
		screens: {
			sm: "640px",
			md: "768px",
			lg: "960px",
			xl: "1200px",
		},
		extend: {
			colors: {
				primary: "#021024",
				secondary: "#052659",
				lightprime: "#5483b3",
				accent: "#7da0ca",
				light: "#c1e8ff",
				hover: "#c98598",
			},
			backgroundImage: {
				explosion:
					'url("https://res.cloudinary.com/duaagiskm/image/upload/v1692305543/cv%20webp/bg-explosion_t6fdmv_zepf1q.webp")',
				circleStar:
					'url("https://res.cloudinary.com/duaagiskm/image/upload/v1692061988/circle-star_whyvuy.svg")',
				site: 'url("https://res.cloudinary.com/duaagiskm/image/upload/v1692061954/site-bg_rhkfvq.svg")',
			},
			animation: {
				"spin-slow": "spin 6s linear infinite",
			},
			fontFamily: {
				poppins: [`var(--font-poppins)`, "sans-serif"],
				sora: [`var(--font-sora)`, "sans-serif"],
			},
		},
	},
	container: {
		padding: {
			DEFAULT: "15px",
		},
	},
	plugins: [require("tailwind-scrollbar")],
};
