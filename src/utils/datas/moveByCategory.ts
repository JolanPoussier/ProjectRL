'use client'

import { useEffect, useState } from 'react'

export default function useMoveByCategory({ category }: { category: string }) {
  const [moves, setMoves] = useState([])

  useEffect(() => {
    fetchMovesByCategory({ category }).then(data => {
      setMoves(data.data)
    })
  }, [])

  if (moves) {
    return moves
  }
}

async function fetchMovesByCategory({ category }: { category: string }) {
  const moves = await fetch(`/api/move/findByCategory/${category}`)
  const finalDatas = await moves.json()
  return finalDatas
}
