import style from './moveCard.module.scss'
import starGenerator from '@/utils/starGenerator'

export default function MoveCard({
  title,
  difficulty,
  description,
  video,
}: {
  title: string
  difficulty: number
  description: string
  video: string
}) {
  const star = difficulty

  return (
    <div className={style.card}>
      <div className={style.header}>
        <h3 className={style.title}>{title}</h3>
        <div className={style.stars}>{starGenerator({ star })}</div>
      </div>
      <div className={style.imageContainer}>
        <iframe
          className={style.iframeYT}
          src={video}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
      {description && <p className={style.text}>{description}</p>}
    </div>
  )
}
