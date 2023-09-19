'use client'

import Link from 'next/link'
import style from './page.module.scss'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import logo from 'src/assets/logo/logo.png'

export default function NavBarComputer({ categories }: { categories: Array<any> }) {
  const params = useParams()

  return (
    <div className={style.main}>
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
