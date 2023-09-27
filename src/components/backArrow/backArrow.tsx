'use client'

import Image from 'next/image'
import style from './backArrow.module.scss'
import backArrow from '@/assets/icons/arrowBack.png'
import { useRouter } from 'next/navigation'

export default function BackArrow() {
  const router = useRouter()
  return (
    <div className={style.main}>
      <button className={style.button} onClick={() => router.back()}>
        <Image width={30} height={30} className={style.arrow} src={backArrow} alt="back arrow by @Lolyla, Flaticon" />
        <div className={style.text}>Retour</div>
      </button>
    </div>
  )
}
