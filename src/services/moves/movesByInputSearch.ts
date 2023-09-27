'use client'

import { useEffect, useState } from 'react'
import { MoveWithCategoryName } from '../responsesType'

export type ResponseJson<T> = {
  success: boolean
  data: T
}

export default function useMovesByInputSearch(inputSearch: string, categoryPage?: string) {
  const [moves, setMoves] = useState<MoveWithCategoryName[]>([])

  useEffect(() => {
    inputSearch
      ? fetchMovesByInputSearch({ inputSearch, categoryPage })
          .then(data => {
            setMoves(data)
          })
          .catch(e => console.log(e))
      : ''
  }, [inputSearch, categoryPage])

  if (moves) {
    return moves
  }
}

async function fetchMovesByInputSearch({ inputSearch, categoryPage }: { inputSearch: string; categoryPage?: string }) {
  let URLParams
  categoryPage ? (URLParams = `${inputSearch}?category=${categoryPage}`) : (URLParams = inputSearch)
  const moves = await fetch(`/api/move/findByInputSearch/${URLParams}`)
  return ((await moves.json()) as ResponseJson<MoveWithCategoryName[]>).data
}
