/** @type {import('tailwindcss').Config} */
const url = require("url");
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        ".src/components/**/*.{ts,tsx}"
    ],
    theme: {
        fontFamily: {
            "Slab": ['Roboto Slab', 'serif']
        },
        extend: {
            backgroundImage: {
                "hero-pattern": "url('/src/assets/background.png')"
            },
            colors: {
                background_900: "#232129",
                background_800: "#312E38",
                background_700: "#3E3B47",

                white_util: "#F4EDE8",
                orange_util: "#FF9000",

                gray_100_util: "#999591",
                gray_300_util: "#666360",

                red_util: "#FF002E"
            }
        },
    },
    plugins: [require('tailwind-scrollbar')],
}
