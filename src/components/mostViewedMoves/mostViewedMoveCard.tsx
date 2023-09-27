import Link from 'next/link'
import style from './mostViewedMoves.module.scss'
import starGenerator from '@/utils/starGenerator'
import Image from 'next/image'

export default function MostViewedMoveCard({
  title,
  category,
  thumbnail,
  difficulty,
  slug,
}: {
  title: string
  category: { name: string }
  thumbnail: string
  difficulty: number
  slug: string
}) {
  const star = difficulty

  return (
    <div className={style.card}>
      <Link className={style.link} href={`/${category.name}/${slug}`}>
        <div className={style.imageContainer}>
          <Image
            className={style.image}
            alt={`Image du move ${title}`}
            src={`/img/thumbnails/${thumbnail}_th.png`}
            width={150}
            height={150}
          />
        </div>
        <div className={style.content}>
          <div className={style.header}>
            <h3 className={style.title}>{title}</h3>
            <div className={style.stars}>{starGenerator({ star })}</div>
          </div>
        </div>
      </Link>
    </div>
  )
}
