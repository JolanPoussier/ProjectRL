'use client'

import Link from 'next/link'
import style from './page.module.scss'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import logo from 'src/assets/logo/logo.png'
import logoLight from 'src/assets/logo/logo_light.png'
import { Category } from '@prisma/client'
import { useEffect, useState } from 'react'
import ThemeButton from './themeButton'

export default function NavBarComputer({ categories }: { categories: Category[] }) {
  const params = useParams()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className={`${style.main} ${isScrolled ? style.isScrolled : ''} ${!isDark ? style.lightModeCSS : ''}`}>
      <div className={style.logo}>
        <Link href={'/'}>
          {isDark ? (
            <Image src={logo} alt="Logo du site" width={240} height={60} />
          ) : (
            <Image src={logoLight} alt="Logo du site" width={240} height={60} />
          )}
        </Link>
      </div>
      <div className={style.container}>
        {categories.map(category => (
          <div key={category.id} className={style.element}>
            <Link
              key={category.id}
              className={`${style.link} ${params.category === category.name ? style.link_active : ''}`}
              href={`/${category.name}`}
            >
              {category.name}
            </Link>
          </div>
        ))}
      </div>
      <ThemeButton isDark={isDark} setIsDark={setIsDark} />
    </div>
  )
}
