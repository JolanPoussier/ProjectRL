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
import updateLocalStorage from '@/utils/updateLocalStorage'

export default function Page({ params }: { params: { category: string } }) {
  const searchParams = useSearchParams()
  let movesToShow: Move[] = []
  const movesByCategory = useMovesByCategory(params)
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

  if (searchParams.get('search')) {
    movesToShow = movesByCategory.filter(
      move =>
        minimalizeText(move.title).includes(minimalizeText(searchParams.get('search'))) &&
        difficultyCheckbox[move.difficulty] == true,
    )
  } else {
    movesToShow = movesByCategory.filter(move => difficultyCheckbox[move.difficulty] == true)
  }

  return (
    <div className={styles.main}>
      <Filters difficultyState={difficultyCheckbox} setDifficulty={setDifficultyCheckBox} />
      <FiltersMobile difficultyState={difficultyCheckbox} setDifficulty={setDifficultyCheckBox} />
      <div className={styles.cardsContainer}>
        {movesToShow.map(move => (
          <HorizontalMoveCard {...move} key={move.slug} category={params.category} />
        ))}
      </div>
    </div>
  )
}
