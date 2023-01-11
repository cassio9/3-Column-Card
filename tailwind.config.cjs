/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				BrightOrange: "hsl(31, 77%, 52%)",
				DarkCyan: "hsl(184, 100%, 22%)",
				VeryDarkCyan: "hsl(179, 100%, 13%)",
				TransparentWhite: "hsla(0, 0%, 100%, 0.75)",
				VeryLightGray: "hsl(0, 0%, 95%)",
			},
			fontFamily: {
				LexendDeco: ["Lexend Deca", "sans-serif"],
				BigShouldersDisplay: ["Big Shoulders Display", "cursive"],
			},
		},
	},
	plugins: [],
};
