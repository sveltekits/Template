# TailwindCsss

## ➊ install Tailwindcss

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init tailwind.config.cjs -p
--> Created Tailwind CSS config file: tailwind.config.cjs
--> Created PostCSS config file: postcss.config.js

npm install -D prettier prettier-plugin-tailwindcss
```

## ➋ Tailwind.config.cjs 파일 내용 변경

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
/** @type {import('tailwindcss').Config} */
export default {
    content: [], ==> content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {}
    },
    plugins: []
};
```

## ➌ src/app.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

// vscode에서는 플러그인
// PostCSS Language Support를 설치하면 더 이상 경고 문구가 보이지 않는다
```

## ➍ +layout.svelte

```javas
<script lang="ts">
    import '../app.css';
</script>
```

===========================================================

➊ ➋ ➌ ➍ ➎ ➏ ➐ ➑ ➒ ➊ ➋ ➌ ➍ ➎ ➏ ➐ ➑ ➒ ➓

(01)(02)(03)(04)(05)(06)(07)(08)(09)(10)(11)(12)(13)(14)(15)(16)(17)(18)(19)(20)

(一)(二)(三)(四)(六)(七)(九)(十)◎

一二三四五六七八九十
