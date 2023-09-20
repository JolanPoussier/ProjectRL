'use client'

import style from './filters.module.scss'
import Difficulty from './difficulty/difficulty'
import SearchBar from './searchBar/searchBar'

export default function Filters({
  difficultyState,
  setDifficulty,
  searchInput,
  setSearchInput,
}: {
  difficultyState: Record<number, boolean>
  setDifficulty: React.Dispatch<React.SetStateAction<Record<number, boolean>>>
  searchInput: string
  setSearchInput: React.Dispatch<React.SetStateAction<string>>
}) {
  return (
    <div className={style.main}>
      <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
      <Difficulty difficultyState={difficultyState} setDifficulty={setDifficulty} />
    </div>
  )
}
