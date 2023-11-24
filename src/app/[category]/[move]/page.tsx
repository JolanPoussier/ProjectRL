import MoveCard from '@/components/moveCard/moveCard'
import style from './page.module.scss'
import BackArrow from '@/components/backArrow/backArrow'
import { moveService } from '@/services/move-service'
import { tutorialService } from '@/services/tutorials-service'
import Tutorials from '@/components/tutorials/tutorials'

export default async function Page({ params }: { params: { category: string; move: string } }) {
  const moveToDisplay = await moveService.getMove(params.move)
  const tutorialsToDisplay = await tutorialService.getTutorials(moveToDisplay.id)
  console.log(tutorialsToDisplay)

  return (
    <div className={style.main}>
      <div className={style.mainContent}>
        <BackArrow />
        <MoveCard {...moveToDisplay} />
        {tutorialsToDisplay && <Tutorials arrayOfTutos={tutorialsToDisplay} />}
      </div>
    </div>
  )
}
