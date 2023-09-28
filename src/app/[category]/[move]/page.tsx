import MoveCard from '@/components/moveCard/moveCard'
import style from './page.module.scss'
import { fetchUniqueMove } from '@/services/moves/singleMove'
import { Move } from '@prisma/client'
import BackArrow from '@/components/backArrow/backArrow'
import { ResponseJson } from '@/services/types'

export default async function Page({ params }: { params: { category: string; move: string } }) {
  const move = await fetchUniqueMove(params.move)
  const moveToDisplay = ((await move.json()) as ResponseJson<Move>).data

  return (
    <div className={style.main}>
      <BackArrow />
      <MoveCard {...moveToDisplay} />
    </div>
  )
}
