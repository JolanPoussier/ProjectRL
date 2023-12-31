'use client'

import { MoveWithCategory, ResponseJson } from '@/services/types'
import { useEffect, useState } from 'react'

export default function useMovesByInputSearch(inputSearch: string, categoryPage?: string) {
  const [moves, setMoves] = useState<MoveWithCategory[]>([])

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
  categoryPage
    ? (URLParams = `?category=${categoryPage}&input=${inputSearch}&include=category`)
    : (URLParams = `?input=${inputSearch}&include=category`)
  const moves = await fetch(`/api/moves${URLParams}`)
  return ((await moves.json()) as ResponseJson<MoveWithCategory[]>).data
}
