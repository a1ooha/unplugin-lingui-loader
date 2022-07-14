# unplugin-lingui-loader

[![NPM version](https://img.shields.io/npm/v/unplugin-lingui-loader?color=a1b858&label=)](https://www.npmjs.com/package/unplugin-lingui-loader)

It’s a good practice to use compiled message catalogs during development. However, running `compile` everytime messages are changed soon becomes tedious.

`unplugin-lingui-loader` is plugin for Vite, Rollup, Webpack, and more, which compiles messages on the fly!

[Live Demo](https://unplugin-lingui-loader.vercel.app/)

## Install

```bash
npm i -D unplugin-lingui-loader
```

<details>
<summary>Vite</summary><br>

```ts
// vite.config.ts
import PoLoader from 'unplugin-lingui-loader/vite'

export default defineConfig({
  plugins: [
    PoLoader(),
  ],
})
```

Example: [`playground/`](./playground/)

<br></details>

<details>
<summary>Rollup</summary><br>

```ts
// rollup.config.js
import PoLoader from 'unplugin-lingui-loader/rollup'

export default {
  plugins: [
    PoLoader(),
  ],
}
```

<br></details>


<details>
<summary>Webpack</summary><br>

```ts
// webpack.config.js
module.exports = {
  /* ... */
  plugins: [
    require('unplugin-lingui-loader/webpack')()
  ]
}
```

<br></details>

<details>
<summary>Nuxt</summary><br>

```ts
// nuxt.config.js
export default {
  buildModules: [
    ['unplugin-lingui-loader/nuxt'],
  ],
}
```

> This module works for both Nuxt 2 and [Nuxt Vite](https://github.com/nuxt/vite)

<br></details>

<details>
<summary>Vue CLI</summary><br>

```ts
// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [
      require('unplugin-lingui-loader/webpack')(),
    ],
  },
}
```

<br></details>

<details>
<summary>esbuild</summary><br>

```ts
// esbuild.config.js
import { build } from 'esbuild'
import PoLoader from 'unplugin-lingui-loader/esbuild'

build({
  plugins: [PoLoader()],
})
```

<br></details>
