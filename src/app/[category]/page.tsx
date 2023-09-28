'use client'

import { useSearchParams } from 'next/navigation'
import styles from './page.module.scss'
import HorizontalMoveCard from '@/components/horizontalMoveCard/horizontalMoveCard.tsx'
import minimalizeText from '@/utils/minimalizeText.ts'
import { Move } from '@prisma/client'
import Filters from '@/components/filters/filters'
import FiltersMobile from '@/components/filters/filtersMobile'
import { useState } from 'react'
import useMovesByInputSearch from '@/services/moves/movesByInputSearch'
import useMovesByCategory from '@/hooks/useMovesByCategory'

export default function Page({ params }: { params: { category: string } }) {
  const searchParams = useSearchParams()

  let movesToShow: Move[] = []
  let movesToSort: Move[] = []
  // const movesByCategory = useMoveByCategory(params)
  const movesByCategory = useMovesByCategory(params)
  console.log(movesByCategory)
  const movesByInputSearch = useMovesByInputSearch(searchParams.get('search'))
  const [searchInput, setSearchInput] = useState<string>('')
  const [difficultyCheckbox, setDifficultyCheckBox] = useState<Record<number, boolean>>({
    1: true,
    2: true,
    3: true,
  })

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
