import { initFlowbite } from 'flowbite';

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {initFlowbite},
  },
};

export default config;
