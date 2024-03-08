import { Moon, Sun } from 'lucide-react'
import style from './page.module.scss'
import { useEffect } from 'react'
import updateLocalStorage from '@/utils/updateLocalStorage'

export default function ThemeButton({ isDark, setIsDark }: { isDark: boolean; setIsDark: (arg: boolean) => void }) {
  useEffect(() => {
    const theme = updateLocalStorage(null, 'theme') as unknown
    console.log(theme)
    setIsDark(theme === true)
  }, [setIsDark])
  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDark)
    document.body.classList.toggle('light-theme', !isDark)
  }, [isDark])

  const changeTheme = () => {
    updateLocalStorage({ name: 'theme', value: !isDark })
    setIsDark(!isDark)
  }
  return (
    <button onClick={changeTheme} className={style.lightButton}>
      {isDark ? <Sun className={style.lightIcon} size={30} /> : <Moon className={style.lightIcon} size={30} />}
    </button>
  )
}
