'use client'

import { useCheckboxContext } from '@/contexts/CheckboxContext.tsx'
import Moves from '../../services/moves/movesFakeDatas.ts'
import styles from './page.module.scss'
import CategoryCard from '@/components/horizontalMoveCard/horizontalMoveCard.tsx'
import useCategories from '@/services/categories/allCategories.ts'
import minimalizeText from '@/utils/minimalizeText.ts'
import useMoveByCategory from '@/services/moves/movesSortByCategory.ts'
import { Move, Category } from '@prisma/client'

export default function Page({ params }: { params: { category: string } }) {
  const { checkboxState } = useCheckboxContext()

  let movesToShow: any = []
  let categories: Category[] = useCategories() || []
  let moves: Move[] = useMoveByCategory(params) || []

  console.log(moves)
  console.log(categories)

  if (categories) {
    if (categories.some(category => category.name === params.category)) {
      const currentCategory = categories.find(category => category.name === params.category) as Category
      movesToShow = moves.filter(
        move => move.categoryId === currentCategory.id && checkboxState[move.difficulty] === true,
      )
    } else {
      movesToShow = Moves.filter(
        move =>
          move.category.includes(minimalizeText(params.category)) ||
          (minimalizeText(move.title).includes(minimalizeText(params.category)) &&
            checkboxState[move.difficulty] === true),
      )
    }
  }

  return (
    <div className={styles.main}>
      <div className={styles.cardsContainer}>
        {movesToShow.map((move: any) => (
          <CategoryCard {...move} key={move.slug} category={params.category} />
        ))}
      </div>
    </div>
  )
}
