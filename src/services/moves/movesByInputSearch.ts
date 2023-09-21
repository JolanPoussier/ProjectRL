'use client'

import { Move } from '@prisma/client'
import { useEffect, useState } from 'react'

export type ResponseJson<T> = {
  success: boolean
  data: T
}

export default function useMovesByInputSearch(inputSearch: string) {
  const [moves, setMoves] = useState<Move[]>([])

  useEffect(() => {
    inputSearch
      ? fetchMovesByInputSearch({ inputSearch })
          .then(data => {
            setMoves(data)
          })
          .catch(e => console.log(e))
      : ''
  }, [inputSearch])

  if (moves) {
    return moves
  }
}

async function fetchMovesByInputSearch({ inputSearch }: { inputSearch: string }) {
  const moves = await fetch(`/api/move/findByInputSearch/${inputSearch}`)
  return ((await moves.json()) as ResponseJson<Move[]>).data
}
