'use client'

import Link from 'next/link'
import style from './page.module.scss'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import logo from 'src/assets/logo/logoMobile.png'
import burger from '@/assets/logo/menu.png'
import { useState } from 'react'

export default function MobileNavBar({ categories }: { categories: Array<any> }) {
  const params = useParams()

  const [toggleBurger, setToggleBurger] = useState(false)

  function handleToggleBurger() {
    setToggleBurger(!toggleBurger)
  }

  return (
    <div className={style.mainMobile}>
      <div
        className={toggleBurger ? style.overlayMobile_active : style.overlayMobile}
        onClick={handleToggleBurger}
      ></div>

      {/* TOCHECK Useless div to apply a flex property */}
      <div className={style.arrowFiltersFilling}></div>

      <div className={style.logo}>
        <Link href={'/'}>
          <Image src={logo} alt="Logo du site" width={90} height={90} />
        </Link>
      </div>

      <button className={style.burgerButton} onClick={handleToggleBurger}>
        <Image src={burger} alt="burger menu" width={50} height={50} />
      </button>

      <div className={toggleBurger ? style.menuBurger_active : style.menuBurger}>
        <button className={style.closeButton} onClick={handleToggleBurger}>
          x
        </button>
        <div className={style.containerMobile}>
          {categories.map(category => (
            <div key={category.id} className={style.elementMobile}>
              <Link
                onClick={handleToggleBurger}
                key={category.id}
                className={params.category === category.name ? style.linkMobile_active : style.linkMobile}
                href={`/${category.name}`}
              >
                {category.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
