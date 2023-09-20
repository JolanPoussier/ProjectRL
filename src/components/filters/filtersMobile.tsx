'use client'

import style from './filters.module.scss'
import Difficulty from './difficulty/difficulty'
import SearchBar from './searchBar/searchBar'
import filtersArrow from '@/assets/icons/filtersMobile.png'
import { useState } from 'react'
import Image from 'next/image'

export default function FiltersMobile({
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
  const [displayFiltersMenu, setdisplayFiltersMenu] = useState(false)

  function handleDisplayFiltersMenu() {
    setdisplayFiltersMenu(!displayFiltersMenu)
  }

  return (
    <>
      <button className={style.filtersButton} onClick={handleDisplayFiltersMenu}>
        <Image src={filtersArrow} alt="Logo du site" width={35} height={35} />
      </button>
      <div className={displayFiltersMenu ? style.mainMobile_active : style.mainMobile}>
        <button className={style.closeButton} onClick={() => setdisplayFiltersMenu(!displayFiltersMenu)}>
          x
        </button>
        <div className={style.searchBar}>
          <SearchBar
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            displayModal={() => setdisplayFiltersMenu(!displayFiltersMenu)}
          />
        </div>
        <Difficulty difficultyState={difficultyState} setDifficulty={setDifficulty} />
      </div>
    </>
  )
}
