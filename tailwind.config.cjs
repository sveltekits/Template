/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
		fontFamily: {
			// "Diphylleia" 폰트를 로드하지 못할 경우
			// 디폴트 테마인 sans 폰트를 사용
			sans: ['Diphylleia', ...defaultTheme.fontFamily.sans]
		}
	},
	plugins: []
};
