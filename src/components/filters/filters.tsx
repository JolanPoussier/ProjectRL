'use client'

import style from './filters.module.scss'
import Difficulty from './difficulty/difficulty'
import SearchBar from './searchBar/searchBar'

export default function Filters({
  difficultyState,
  setDifficulty,
}: {
  difficultyState: Record<number, boolean>
  setDifficulty: React.Dispatch<React.SetStateAction<Record<number, boolean>>>
}) {
  return (
    <div className={style.main}>
      <SearchBar />
      <Difficulty difficultyState={difficultyState} setDifficulty={setDifficulty} />
    </div>
  )
}
