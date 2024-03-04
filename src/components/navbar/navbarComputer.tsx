'use client'

import Link from 'next/link'
import style from './page.module.scss'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import logo from 'src/assets/logo/logo.png'
import { Category } from '@prisma/client'
import { useEffect, useState } from 'react'

export default function NavBarComputer({ categories }: { categories: Category[] }) {
  const params = useParams()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 0)
      console.log(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className={`${style.main} ${isScrolled ? style.isScrolled : ''}`}>
      <div className={style.logo}>
        <Link href={'/'}>
          <Image src={logo} alt="Logo du site" width={240} height={60} />
        </Link>
      </div>
      <div className={style.container}>
        {categories.map(category => (
          <div key={category.id} className={style.element}>
            <Link
              key={category.id}
              className={`${params.category === category.name ? style.link_active : style.link}`}
              href={`/${category.name}`}
            >
              {category.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
