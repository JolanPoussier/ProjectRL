'use client'

import styles from './page.module.scss'
import HorizontalMoveCard from '@/components/horizontalMoveCard/horizontalMoveCard.tsx'
import minimalizeText from '@/utils/minimalizeText.ts'
import useMoveByCategory from '@/services/moves/movesSortByCategory.ts'
import { Move } from '@prisma/client'
import Filters from '@/components/filters/filters'
import FiltersMobile from '@/components/filters/filtersMobile'
import { useState } from 'react'

export default function Page({ params }: { params: { category: string } }) {
  type CheckboxState = Record<number, boolean>

  let movesToShow: Move[] = []
  const moves = useMoveByCategory(params)
  const [searchInput, setSearchInput] = useState<string>('')
  const [difficultyCheckbox, setDifficultyCheckBox] = useState<CheckboxState>({
    1: true,
    2: true,
    3: true,
  })

  if (moves) {
    if (searchInput) {
      movesToShow = moves.filter(
        move =>
          minimalizeText(move.title).includes(minimalizeText(searchInput)) &&
          difficultyCheckbox[move.difficulty] == true,
      )
    } else {
      movesToShow = moves.filter(move => difficultyCheckbox[move.difficulty] == true)
    }
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
