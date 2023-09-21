import MoveCard from '../moveCard/moveCard'
import style from './mostViewedMoves.module.scss'
import Link from 'next/link'
import useMostViewedMoves from '@/services/moves/mostViewedMoves'

export default function MostViewedMoves() {
  const moves = useMostViewedMoves()

  return (
    <div className={style.main}>
      <h2 className={style.title}>Les plus consultées</h2>
      <div className={style.container}>
        {moves.map(move => (
          <div key={move.id} className={style.element}>
            <Link className={style.link} href={`/${move.category.name}/${move.slug}`}>
              <MoveCard {...move} description="" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
