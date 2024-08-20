'use client'

import Image from 'next/image'
import style from './horizontalMoveCard.module.scss'
import starGenerator from '@/utils/starGenerator'
import Link from 'next/link'

export default function HorizontalMoveCard({
  title,
  category,
  summary,
  thumbnail,
  difficulty,
  slug,
}: {
  title: string
  category: string
  summary: string
  thumbnail: string
  id: number
  difficulty: number
  slug: string
}) {
  const star = difficulty

  return (
    <div className={style.card}>
      <Link className={style.link} href={`/${category}/${slug}`}>
        <div className={style.imageContainer}>
          <Image
            className={style.image}
            alt={`Image du move ${title}`}
            src={`/img/thumbnails/${thumbnail}_th.png`}
            width={350}
            height={350}
          />
        </div>
        <div className={style.content}>
          <div className={style.header}>
            <h3 className={style.title}>{title}</h3>
            <div className={style.stars}>{starGenerator({ star })}</div>
          </div>
          <p className={style.description}>{summary}</p>
        </div>
      </Link>
    </div>
  )
}
