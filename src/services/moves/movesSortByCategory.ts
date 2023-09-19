'use client'

import { Move } from '@prisma/client'
import { useEffect, useState } from 'react'

export type ResponseJson<T> = {
  success: boolean
  data: T
}

export default function useMoveByCategory({ category }: { category: string }) {
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
  const moves = await fetch(`/api/move/findByCategory/${category}`)
  return ((await moves.json()) as ResponseJson<Move[]>).data
}
