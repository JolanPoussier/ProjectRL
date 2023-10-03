'use client'

import { MoveWithCategory, ResponseJson } from '@/services/types'
import { useEffect, useState } from 'react'

export default function useMostViewedMoves() {
  const [moves, setMoves] = useState<MoveWithCategory[]>([])

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
  const moves = await fetch(`/api/moves?orderBy=views&sort=desc&take=6&include=category`)
  return ((await moves.json()) as ResponseJson<MoveWithCategory[]>).data
}
