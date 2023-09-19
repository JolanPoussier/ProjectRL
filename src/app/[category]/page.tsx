'use client'

import { useCheckboxContext } from '@/contexts/CheckboxContext.tsx'
import styles from './page.module.scss'
import CategoryCard from '@/components/horizontalMoveCard/horizontalMoveCard.tsx'
import useCategories from '@/services/categories/allCategories.ts'
import minimalizeText from '@/utils/minimalizeText.ts'
import useMoveByCategory from '@/services/moves/movesSortByCategory.ts'
import { Move, Category } from '@prisma/client'

export default function Page({ params }: { params: { category: string } }) {
  const { checkboxState } = useCheckboxContext()

  let movesToShow: Move[] = []
  const categories: Category[] = useCategories() || []
  const moves = useMoveByCategory(params) || []

  console.log(moves)
  console.log(categories)

  if (categories) {
    if (categories.some(category => category.name === params.category)) {
      const currentCategory = categories.find(category => category.name === params.category) as Category
      movesToShow = moves.filter(
        move => move.categoryId === currentCategory.id && checkboxState[move.difficulty] === true,
      )
    } else {
      // recherche du paramètre passé à l'URL par la searchBar dans le tableau de tous les objets, à transformer en requète API directment
      movesToShow = moves.filter(
        move =>
          minimalizeText(move.title).includes(minimalizeText(params.category)) &&
          checkboxState[move.difficulty] == true,
      )
    }
  }

  return (
    <div className={styles.main}>
      <div className={styles.cardsContainer}>
        {movesToShow.map(move => (
          <CategoryCard {...move} key={move.slug} category={params.category} />
        ))}
      </div>
    </div>
  )
}
