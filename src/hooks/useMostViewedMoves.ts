'use client'

import { MoveWithCategoryName, ResponseJson } from '@/services/types'
import { useEffect, useState } from 'react'

export default function useMostViewedMoves() {
  const [moves, setMoves] = useState<MoveWithCategoryName[]>([])

  useEffect(() => {
    fetchMovesByViews()
      .then(data => {
        setMoves(data)
      })
      .catch(e => console.log(e))
  }, [])

  if (moves) {
    return moves
  }
}

async function fetchMovesByViews() {
  const moves = await fetch(`/api/moves?home=true`)
  return ((await moves.json()) as ResponseJson<MoveWithCategoryName[]>).data
}
