/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,ts}"],
	theme: {
		extend: {
			colors: {
				black1: "#110F0B",
				gray1: "#CACACA",
				blue1: "#205DB9",
				blue2: "#205DB9",
			},
			fontSize: { "2.75xl": "1.75rem" },
		},
	},
	plugins: [],
};
