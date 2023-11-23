import Link from 'next/link'
import style from './tutorials.module.scss'
import Image from 'next/image'

export default function TutorialCard({
  video,
  thumbnail,
  title,
  author,
  language,
}: {
  video: string
  thumbnail: string
  title: string
  author: string
  language: string
}) {
  return (
    <div className={style.card}>
      <Link className={style.link} href={video} target="_blank">
        <div className={style.tutorialContainer}>
          <Image
            className={style.image}
            alt={`Image du tuto youtube ${thumbnail}`}
            src={`/img/thumbnails/tutorials/${thumbnail}.webp`}
            width={267}
            height={150}
          />
        </div>
        <div className={style.content}>
          <h3 className={style.title}>{title}</h3>
          <p className={style.author}>
            {author}
            {
              <Image
                className={style.flag}
                alt={`Image du drapeau ${language}`}
                src={`/img/language/${language}.png`}
                width={20}
                height={20}
              />
            }
          </p>
        </div>
      </Link>
    </div>
  )
}
