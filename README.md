# React with Bun + Vite

This is a [React](https://reactjs.org/) application built using [Bun](https://bun.sh/) and [Vite](https://vitejs.dev). 

\- **React** is a JavaScript library for building user interfaces. \
\- **Bun** is a fast all-in-one JavaScript runtime, package manager, and more. \
\- **Vite** is a build tool that aims to provide a faster and leaner development experience for modern web projects

| | tool | usage in this project |
|:---:|:---:|:---:|
| <img width="40px" src="/docs/images/bun.png"> | Bun | package manager, scaffolding |
| <img width="40px" src="/docs/images/vite.png"> | Vite | build, dev server |


### How was this built?

1. Install Bun `curl -fsSL https://bun.sh/install | bash`
2. Scaffold the React application with `bun create react .`
3. Install Vite with React plugin `bun add -d vite @vitejs/plugin-react`
4. Move `index.html` to root `mv public/index.html .`

5. Create Vite config `vite.config.ts`
    ```
    import { defineConfig } from 'vite'
    import react from '@vitejs/plugin-react'

    export default defineConfig({
      base: '/react-bun-vite/'
      plugins: [
        react()
      ]
    })
    ```
5. Build with Vite `bun vite build`


### Development

We can serve the React app locally using Vite or Bun:

- Run the Vite development server `bun vite dev`. http://localhost:5174
- Run the Bun development server `bun dev` http://localhost:3000

Preview the production build locally with Vite `bun vite preview`. http://localhost:4173


### Production

This application is deployed to [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages) using a GitHub Actions [workflow](https://github.com/bburrier/react-bun-vite/blob/master/.github/workflows/cd.yml).

**live**: https://bburrier.github.io/react-bun-vite/