import style from './mostViewedMoves.module.scss'
import MostViewedMoveCard from './mostViewedMoveCard'
import useMostViewedMoves from '@/hooks/useMostViewedMoves'

export default function MostViewedMoves() {
  const moves = useMostViewedMoves()

  return (
    <div className={style.main}>
      <h2 className={style.title}>Les plus consultées</h2>
      <div className={style.container}>
        {moves.map(move => (
          <div key={move.id} className={style.element}>
            <MostViewedMoveCard {...move} />
          </div>
        ))}
      </div>
    </div>
  )
}
