import type { Config } from "tailwindcss";
const {
    default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

function addVariablesForColors({ addBase, theme }: any) {
    let allColors = flattenColorPalette(theme("colors"));
    let newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
    );

    addBase({
        ":root": newVars,
    });
}

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            animation: {
                aurora: "aurora 60s linear infinite",
                spotlight: "spotlight 2s ease .75s 1 forwards",
            },
            keyframes: {
                spotlight: {
                    "0%": {
                        opacity: 0,
                        transform: "translate(-72%, -62%) scale(0.5)",
                    },
                    "100%": {
                        opacity: 1,
                        transform: "translate(-50%,-40%) scale(1)",
                    },
                },
                aurora: {
                    from: {
                        backgroundPosition: "50% 50%, 50% 50%",
                    },
                    to: {
                        backgroundPosition: "350% 50%, 350% 50%",
                    },
                },
            },
        },
    },
    plugins: [addVariablesForColors],
};
export default config;
