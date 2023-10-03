'use client'

import { ResponseJson } from '@/services/types'
import { Move } from '@prisma/client'
import { useEffect, useState } from 'react'

export default function useMovesByCategory({ category }: { category: string }) {
  const [moves, setMoves] = useState<Move[]>([])

  useEffect(() => {
    fetchMovesByCategory({ category })
      .then(data => {
        setMoves(data)
      })
      .catch(e => console.log(e))
  }, [category])

  if (moves) {
    return moves
  }
}

async function fetchMovesByCategory({ category }: { category: string }) {
  const moves = await fetch(`/api/moves?category=${category}`)
  return ((await moves.json()) as ResponseJson<Move[]>).data
}
