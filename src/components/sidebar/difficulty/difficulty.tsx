'use client'

import style from './difficulty.module.scss'
import DifficultyRow from './difficultyRow'

type Level = {
  star: number
  difficulty: string
  ranks: string
}

const difficulty: Level[] = [
  {
    star: 1,
    difficulty: 'Facile ',
    ranks: ' <= Diamond ',
  },
  {
    star: 2,
    difficulty: 'Normal ',
    ranks: ' < GC ',
  },
  {
    star: 3,
    difficulty: 'Difficile ',
    ranks: ' > GC ',
  },
]

export default function Difficulty() {
  return (
    <div className={style.main}>
      <h3 className={style.mainTitle}>Difficulté</h3>
      <div className={style.container}>
        {difficulty.map(level => (
          <DifficultyRow key={level.ranks} {...level} id={level.star} />
        ))}
      </div>
    </div>
  )
}
