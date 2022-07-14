import { useDarkMode } from 'usehooks-ts'

export default function useDark() {
  const { isDarkMode: isDark, toggle: toggleDark } = useDarkMode()

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  return {
    isDark,
    toggleDark,
  }
}
