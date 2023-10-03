import MoveCard from '@/components/moveCard/moveCard'
import style from './page.module.scss'
import BackArrow from '@/components/backArrow/backArrow'
import { moveService } from '@/services/move-service'

export default async function Page({ params }: { params: { category: string; move: string } }) {
  const moveToDisplay = await moveService.getMove(params.move)

  return (
    <div className={style.main}>
      <BackArrow />
      <MoveCard {...moveToDisplay} />
    </div>
  )
}
