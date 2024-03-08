'use client'

import style from './filters.module.scss'
import Difficulty from './difficulty/difficulty'
import SearchBar from './searchBar/searchBar'
import { useState } from 'react'
import { Play, X } from 'lucide-react'

export default function FiltersMobile({
  difficultyState,
  setDifficulty,
}: {
  difficultyState: Record<number, boolean>
  setDifficulty: React.Dispatch<React.SetStateAction<Record<number, boolean>>>
}) {
  const [displayFiltersMenu, setdisplayFiltersMenu] = useState(false)

  function handleDisplayFiltersMenu() {
    setdisplayFiltersMenu(!displayFiltersMenu)
  }

  return (
    <>
      <button className={style.filtersButton} onClick={handleDisplayFiltersMenu}>
        <Play strokeWidth={2} width={35} height={35} />
      </button>
      <div className={displayFiltersMenu ? style.mainMobile_active : style.mainMobile}>
        <button className={style.closeButton} onClick={() => setdisplayFiltersMenu(!displayFiltersMenu)}>
          <X size={30} />
        </button>
        <div className={style.searchBar}>
          <SearchBar displayModal={() => setdisplayFiltersMenu(!displayFiltersMenu)} />
        </div>
        <Difficulty difficultyState={difficultyState} setDifficulty={setDifficulty} />
      </div>
    </>
  )
}
