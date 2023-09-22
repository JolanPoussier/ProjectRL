import style from './mostViewedMoves.module.scss'
import useMostViewedMoves from '@/services/moves/mostViewedMoves'
import MostViewedMoveCard from './mostViewedMoveCard'

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
