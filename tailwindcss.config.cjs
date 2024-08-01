module.exports = {
    content: [
        "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
        "./src/components/**/*.astro",
        "./views/**/*.ejs", // Include EJS files for Tailwind to scan
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
