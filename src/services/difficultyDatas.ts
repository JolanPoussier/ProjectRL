type Level = {
  star: number
  difficulty: string
  ranks: string[]
}

export const difficultyDatas: Level[] = [
  {
    star: 1,
    difficulty: 'Facile ',
    ranks: ['silver', 'gold', 'platine'],
  },
  {
    star: 2,
    difficulty: 'Normal ',
    ranks: ['diamond', 'champion'],
  },
  {
    star: 3,
    difficulty: 'Difficile ',
    ranks: ['grandChampion', 'ssl'],
  },
]
