'use client'

import style from './backArrow.module.scss'
import { useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'

export default function BackArrow() {
  const router = useRouter()
  return (
    <div className={style.main}>
      <button className={style.button} onClick={() => router.back()}>
        <ArrowLeft width={30} height={30} className={style.arrow} />
        <div className={style.text}>Retour</div>
      </button>
    </div>
  )
}
