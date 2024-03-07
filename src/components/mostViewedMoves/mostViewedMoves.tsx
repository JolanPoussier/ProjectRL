import style from './mostViewedMoves.module.scss'
import { moveService } from '@/services/move-service'
import { MoveWithCategory } from '@/services/types'
import Carousel from './carousel'

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
      <Carousel moves={moves} />
    </div>
  )
}
