import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light mode
        BACKGROUND_COLOR_lm: '#fafcff',
        TEXT_COLOR_MAIN_lm: '#000a14',

        // Dark mode
        BACKGROUND_COLOR_dm: '#141829',
        TEXT_COLOR_MAIN_dm: '#F9F2D7',
        
        // Component colors
        BRAND_COLOR1: '#FFDC73',
        BRAND_COLOR2: '#012B3B',
        BRAND_COLOR_SUB: '#70BDA4',
        ACCENT_COLOR: '#F9F871',
        CUSTOM_WHITE: '#F2F2F2',
        CUSTOM_GREY: '#444655',
        CUSTOM_BLACK: '#1C1C1E',
      },
      gridTemplateColumns: {
        GRID_LAYOUT: 'repeat(12, 5.45rem)',
        GRID_LAYOUT_mb: 'repeat(6, 5.45rem)',
      },
      spacing: {
        GRID_COLUMN_GAP: '0.875rem',
        NAV_HEIGHT: '4rem',
        NAV_MOBILE: '3rem',
      },
      borderRadius: {
        NAV_BORDER_RADIUS: '9px',
      },
    },
  },
  plugins: [],
} satisfies Config;
