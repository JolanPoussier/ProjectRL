'use client'

import { useSearchParams } from 'next/navigation'
import styles from './page.module.scss'
import HorizontalMoveCard from '@/components/horizontalMoveCard/horizontalMoveCard.tsx'
import minimalizeText from '@/utils/minimalizeText.ts'
import { Move } from '@prisma/client'
import Filters from '@/components/filters/filters'
import FiltersMobile from '@/components/filters/filtersMobile'
import { useEffect, useState } from 'react'
import useMovesByCategory from '@/hooks/useMovesByCategory'
import useMovesByInputSearch from '@/hooks/useMovesByInputSearch'
import updateLocalStorage from '@/hooks/updateLocalStorage'

export default function Page({ params }: { params: { category: string } }) {
  const searchParams = useSearchParams()
  let movesToShow: Move[] = []
  let movesToSort: Move[] = []
  const movesByCategory = useMovesByCategory(params)
  const movesByInputSearch = useMovesByInputSearch(searchParams.get('search'))
  const [searchInput, setSearchInput] = useState<string>('')
  const [difficultyCheckbox, setDifficultyCheckBox] = useState<Record<number, boolean>>({
    1: true,
    2: true,
    3: true,
  })

  useEffect(() => {
    const storedDatas = updateLocalStorage(undefined, 'difficulty')
    if (storedDatas) {
      setDifficultyCheckBox(storedDatas)
    }
  }, [])

  searchParams.get('search') ? (movesToSort = movesByInputSearch) : (movesToSort = movesByCategory)

  if (searchInput) {
    movesToShow = movesToSort.filter(
      move =>
        minimalizeText(move.title).includes(minimalizeText(searchInput)) && difficultyCheckbox[move.difficulty] == true,
    )
  } else {
    movesToShow = movesToSort.filter(move => difficultyCheckbox[move.difficulty] == true)
  }

  return (
    <div className={styles.main}>
      <Filters
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        difficultyState={difficultyCheckbox}
        setDifficulty={setDifficultyCheckBox}
      />
      <FiltersMobile
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        difficultyState={difficultyCheckbox}
        setDifficulty={setDifficultyCheckBox}
      />
      <div className={styles.cardsContainer}>
        {movesToShow.map(move => (
          <HorizontalMoveCard {...move} key={move.slug} category={params.category} />
        ))}
      </div>
    </div>
  )
}
