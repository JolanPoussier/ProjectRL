import MoveCard from '@/components/moveCard/moveCard'
import style from './page.module.scss'
import { fetchUniqueMove } from '@/services/moves/singleMove'
import { Move } from '@prisma/client'
import BackArrow from '@/components/backArrow/backArrow'

export default async function Page({ params }: { params: { category: string; move: string } }) {
  const move: Move = await fetchUniqueMove(params.move)

  return (
    <div className={style.main}>
      <BackArrow />
      <MoveCard {...move} />
    </div>
  )
}
