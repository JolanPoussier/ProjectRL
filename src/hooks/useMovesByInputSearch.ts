'use client'

import { MoveWithCategoryName, ResponseJson } from '@/services/types'
import { useEffect, useState } from 'react'

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
  categoryPage ? (URLParams = `?category=${categoryPage}&input=${inputSearch}`) : (URLParams = `?input=${inputSearch}`)
  const moves = await fetch(`/api/move${URLParams}`)
  return ((await moves.json()) as ResponseJson<MoveWithCategoryName[]>).data
}
