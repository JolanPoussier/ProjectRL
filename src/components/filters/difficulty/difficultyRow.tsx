'use client'

import style from './difficulty.module.scss'
import starGenerator from '@/utils/starGenerator'
import Checkbox from '@/UI/checkbox/checkbox'

export default function DifficultyRow({
  star,
  difficulty,
  ranks,
  id,
  difficultyState,
  setDifficulty,
}: {
  star: number
  difficulty: string
  ranks: string
  id: number
  difficultyState: Record<number, boolean>
  setDifficulty: React.Dispatch<React.SetStateAction<Record<number, boolean>>>
}) {
  return (
    <div className={style.difficultyRow}>
      <Checkbox
        classMain={style.checkbox}
        classInput={style.checkboxInput}
        checked={difficultyState[id]}
        changeFunction={() => setDifficulty({ ...difficultyState, [id]: !difficultyState[id] })}
      />
      <div className={style.starContainer}>{starGenerator({ star })}</div>
      <div className={style.rankContainer}>
        {difficulty}({ranks})
      </div>
    </div>
  )
}
