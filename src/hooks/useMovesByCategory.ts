'use client'

import { ResponseJson } from '@/services/types'
import { Move } from '@prisma/client'
import { useEffect, useState } from 'react'

export default function useMovesByCategory({ category }: { category: string }) {
  const [moves, setMoves] = useState<Move[]>([])

  useEffect(() => {
    category === 'toutescategories'
      ? fetchAllMoves()
          .then(data => {
            setMoves(data)
          })
          .catch(e => console.log(e))
      : fetchMovesByCategory({ category })
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
  const moves = await fetch(`/api/moves?category=${category}&orderBy=difficulty&sort=asc`)
  return ((await moves.json()) as ResponseJson<Move[]>).data
}
async function fetchAllMoves() {
  const moves = await fetch(`/api/moves`)
  return ((await moves.json()) as ResponseJson<Move[]>).data
}
