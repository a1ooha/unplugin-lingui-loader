export default {
  locales: ['zh', 'en', 'ja'],
  sourceLocale: 'en',
  catalogs: [
    {
      path: '<rootDir>/src/locales/{locale}/messages',
      include: ['<rootDir>/src'],
      exclude: ['**/node_modules/**'],
    },
  ],
  format: 'po',
  orderBy: 'origin',
  compileNamespace: 'es',
  extractBabelOptions: {
    presets: ['@babel/preset-typescript'],
  },
}
