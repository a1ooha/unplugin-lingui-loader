import { Suspense, useEffect } from 'react'
import { i18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react'
import routes from 'virtual:generated-pages-react'
import { en, ja, zh } from 'make-plural/plurals'

import { dynamicActivate } from '~/utils'
import Footer from '~/components/Footer'

i18n.loadLocaleData({
  zh: { plurals: zh },
  en: { plurals: en },
  ja: { plurals: ja },
})

export default function App() {
  useEffect(() => {
    dynamicActivate('en')
  }, [])

  return (
      <Suspense fallback={<p>Loading...</p>}>
        <I18nProvider i18n={i18n}>
          <main className="font-sans px-4 py-10 text-center text-gray-700 dark:text-gray-200">
            {useRoutes(routes)}
            <Footer />
          </main>
        </I18nProvider>
      </Suspense>
  )
}
