/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,ts}"],
	theme: {
		extend: {
			colors: {
				black1: "#110F0B",
				gray1: "#CACACA",
				gray2: "#5F5F5F",
				gray3: "#DEDEDE",
				gray4: "#E8E8E8",
				blue1: "#205DB9",
				blue2: "#6383FD",
				light: "#EFF7FF",
			},
			fontSize: { "2.5xl": "1.625rem", "2.75xl": "1.75rem" },
		},
	},
	plugins: [],
};
