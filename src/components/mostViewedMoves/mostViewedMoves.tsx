import style from './mostViewedMoves.module.scss'
import MostViewedMoveCard from './mostViewedMoveCard'
import { moveService } from '@/services/move-service'
import { MoveWithCategory } from '@/services/types'

export default async function MostViewedMoves() {
  const moves = (await moveService.getMoves({
    orderBy: 'views',
    sort: 'desc',
    take: 6,
    include: 'category',
    where: { category: null, slugSearch: null },
  })) as MoveWithCategory[]

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
