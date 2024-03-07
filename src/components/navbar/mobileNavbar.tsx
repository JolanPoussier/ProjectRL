'use client'

import Link from 'next/link'
import style from './page.module.scss'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import logo from 'src/assets/logo/logoMobile.png'
import logoLight from 'src/assets/logo/logoMobile_light.png'
import { useEffect, useState } from 'react'
import { Category } from '@prisma/client'
import { Menu, X } from 'lucide-react'
import ThemeButton from './themeButton'

export default function MobileNavBar({ categories }: { categories: Category[] }) {
  const params = useParams()

  const [toggleBurger, setToggleBurger] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  function handleToggleBurger() {
    setToggleBurger(!toggleBurger)
  }

  return (
    <div className={`${style.mainMobile} ${isScrolled ? style.isScrolled : ''}`}>
      <div
        className={toggleBurger ? style.overlayMobile_active : style.overlayMobile}
        onClick={handleToggleBurger}
      ></div>

      {/* TOCHECK Useless div to apply a flex property */}
      <div className={style.arrowFiltersFilling}></div>

      <div className={style.logo}>
        <Link href={'/'}>
          {isDark ? (
            <Image src={logo} alt="Logo du site" width={90} height={90} />
          ) : (
            <Image src={logoLight} alt="Logo du site" width={90} height={90} />
          )}
        </Link>
      </div>
      <div className={style.rightSide}>
        <ThemeButton isDark={isDark} setIsDark={setIsDark} />
        <button className={style.burgerButton} onClick={handleToggleBurger}>
          <Menu width={50} height={50} />
        </button>

        <div className={toggleBurger ? style.menuBurger_active : style.menuBurger}>
          <button className={style.closeButton} onClick={handleToggleBurger}>
            <X size={30} />
          </button>
          <div className={style.containerMobile}>
            {categories.map(category => (
              <div key={category.id} className={style.elementMobile}>
                <Link
                  onClick={handleToggleBurger}
                  key={category.id}
                  className={`${style.linkMobile} ${params.category === category.name ? style.linkMobile_active : ''}`}
                  href={`/${category.name}`}
                >
                  {category.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
