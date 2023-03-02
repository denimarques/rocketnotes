npm create vite@latest

    "name_project"

    Yes

    React

    Javascript

cd my-project

npm install -D tailwindcss postcss autoprefixer

npx tailwindcss init -p

in tailwind.config.cjs
    /** @type {import('tailwindcss').Config} */
        module.exports = {
         content: [
           "./index.html",
           "./src/**/*.{js,ts,jsx,tsx}",
         ],
         theme: {
           extend: {},
         },
         plugins: [],
    }

index.css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;


npm i @emotion/react @emotion/styled

npm i twin.macro @emotion/babel-plugin-jsx-pragmatic @babel/plugin-transform-react-jsx babel-plugin-macros

package.json
    // package.json
        "babelMacros": {
          "twin": {
            "preset": "emotion"
          }
        },


vite.config.js
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    esbuildOptions: {
      target: 'es2020',
    },
  },
  esbuild: {
    // https://github.com/vitejs/vite/issues/8644#issuecomment-1159308803
    logOverride: { 'this-is-undefined-in-esm': 'silent' },
  },
  plugins: [
    react({
      babel: {
        plugins: [
          'babel-plugin-macros',
          [
            '@emotion/babel-plugin-jsx-pragmatic',
            {
              export: 'jsx',
              import: '__cssprop',
              module: '@emotion/react',
            },
          ],
          [
            '@babel/plugin-transform-react-jsx',
            { pragma: '__cssprop' },
            'twin.macro',
          ],
        ],
      },
    }),
  ],
})

 npm i --save-dev @types/styled-components
 npm i tailwind-styled-components
 npm i twin.macro









-------------------------------- NÃO PRECISA 01/03/2023 ------------------------------------
npm i -D @types/react
// types/twin.d.ts
import 'twin.macro'
import { css as cssImport } from '@emotion/react'
import styledImport from '@emotion/styled'
import { CSSInterpolation } from '@emotion/serialize'

declare module 'twin.macro' {
  // The styled and css imports
  const styled: typeof styledImport
  const css: typeof cssImport
}

declare module 'react' {
  // The tw and css prop
  interface DOMAttributes<T> {
    tw?: string
    css?: CSSInterpolation
  }
}

