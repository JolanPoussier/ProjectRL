'use client'

import style from './difficulty.module.scss'
import DifficultyRow from './difficultyRow'
import { difficultyDatas } from '@/services/difficulties/difficultyDatas'

export default function Difficulty({
  difficultyState,
  setDifficulty,
}: {
  difficultyState: Record<number, boolean>
  setDifficulty: React.Dispatch<React.SetStateAction<Record<number, boolean>>>
}) {
  return (
    <div className={style.main}>
      <h3 className={style.mainTitle}>Difficulté</h3>
      <div className={style.container}>
        {difficultyDatas.map(level => (
          <DifficultyRow
            key={level.ranks}
            {...level}
            id={level.star}
            difficultyState={difficultyState}
            setDifficulty={setDifficulty}
          />
        ))}
      </div>
    </div>
  )
}
