'use client'

import styles from './page.module.scss'
import HorizontalMoveCard from '@/components/horizontalMoveCard/horizontalMoveCard.tsx'
import useCategories from '@/services/categories/allCategories.ts'
import minimalizeText from '@/utils/minimalizeText.ts'
import useMoveByCategory from '@/services/moves/movesSortByCategory.ts'
import { Move, Category } from '@prisma/client'
import Filters from '@/components/filters/filters'
import FiltersMobile from '@/components/filters/filtersMobile'
import { useState } from 'react'

export default function Page({ params }: { params: { category: string } }) {
  type CheckboxState = Record<number, boolean>

  let movesToShow: Move[] = []
  const categories: Category[] = useCategories()
  const moves = useMoveByCategory(params)
  const [difficultyCheckbox, setDifficultyCheckBox] = useState<CheckboxState>({
    1: true,
    2: true,
    3: true,
  })

  if (categories) {
    if (categories.some(category => category.name === params.category)) {
      const currentCategory = categories.find(category => category.name === params.category)
      movesToShow = moves.filter(
        move => move.categoryId === currentCategory.id && difficultyCheckbox[move.difficulty] === true,
      )
    } else {
      // TODO
      // recherche du paramètre passé à l'URL par la searchBar dans le tableau de tous les objets, à transformer en requète API directment
      movesToShow = moves.filter(
        move =>
          minimalizeText(move.title).includes(minimalizeText(params.category)) &&
          difficultyCheckbox[move.difficulty] == true,
      )
    }
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
