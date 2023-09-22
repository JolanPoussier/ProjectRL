'use client'

import { useEffect, useState } from 'react'

export type ResponseJson<T> = {
  success: boolean
  data: T
}

export interface Move {
  id: number
  title: string
  difficulty: number
  slug: string
  summary: string
  description: string
  views: number
  thumbnail: string
  video: string
  createdAt: Date
  updatedAt: Date
  categoryId: number
  category: {
    name: string
  }
}

export default function useMostViewedMoves() {
  const [moves, setMoves] = useState<Move[]>([])

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
  const moves = await fetch(`/api/move/homePage`)
  return ((await moves.json()) as ResponseJson<Move[]>).data
}
