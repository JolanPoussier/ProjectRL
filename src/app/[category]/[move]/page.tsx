import MoveCard from '@/components/moveCard/moveCard'
import style from './page.module.scss'
import { fetchUniqueMove } from '@/services/moves/singleMove'
import { Move } from '@prisma/client'

export default async function Page({ params }: { params: { category: string; move: string } }) {
  const move: Move = (await fetchUniqueMove(params.move)) as Move

  return (
    <div className={style.main}>
      <MoveCard {...move} />
    </div>
  )
}
