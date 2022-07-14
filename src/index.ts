import path from 'path'
import { createUnplugin } from 'unplugin'
// @ts-expect-error - no types available
import { createCompiledCatalog, getCatalogForFile, getCatalogs } from '@lingui/cli/api'
import { getConfig } from '@lingui/conf'

export default createUnplugin(() => {
  const strict = process.env.NODE_ENV !== 'production'
  const config = getConfig()
  const formats = {
    'po': '.po',
    'po-gettext': '.po',
    'minimal': '.json',
    'lingui': '.json',
    'csv': '.csv',
  }
  const suffix = formats[config.format]

  return {
    name: 'unplugin-lingui-loader',
    transformInclude(id) {
      return id.endsWith(suffix)
    },
    transform(code, id) {
      const catalogRelativePath = path.relative(config.rootDir, id)
      const EMPTY_EXT = /\.[0-9a-z]+$/.test(id)
      const JS_EXT = /\.js+$/.test(id)

      if (!EMPTY_EXT || JS_EXT)

        throw new Error(`@lingui/snowpack-plugin: File extension is mandatory, for ex: import('./locales/en/messages${suffix}')`)

      const fileCatalog = getCatalogForFile(catalogRelativePath, getCatalogs(config))

      const { locale, catalog } = fileCatalog
      const catalogs = catalog.readAll()

      const messages = Object.keys(catalogs[locale]).reduce((acc: any, key) => {
        acc[key] = catalog.getTranslation(catalogs, locale, key, {
          fallbackLocales: config.fallbackLocales,
          sourceLocale: config.sourceLocale,
        })

        return acc
      }, {})

      const compiled = createCompiledCatalog(locale, messages, {
        strict,
        namespace: config.compileNamespace,
        pseudoLocale: config.pseudoLocale,
      })

      return compiled
    },
  }
})
