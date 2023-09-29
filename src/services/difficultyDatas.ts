type Level = {
  star: number
  difficulty: string
  ranks: string
}

export const difficultyDatas: Level[] = [
  {
    star: 1,
    difficulty: 'Facile ',
    ranks: ' <= Diamond ',
  },
  {
    star: 2,
    difficulty: 'Normal ',
    ranks: ' < GC ',
  },
  {
    star: 3,
    difficulty: 'Difficile ',
    ranks: ' > GC ',
  },
]
