export interface MoveWithCategory {
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

export type ResponseJson<T> = {
  success: boolean
  data: T
}
