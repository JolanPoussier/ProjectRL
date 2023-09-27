'use client'

import { Category } from '@prisma/client'
import { useEffect, useState } from 'react'

export type ResponseJson<T> = {
  success: boolean
  data: T
}

export default function useCategories() {
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    fetchCategories()
      .then(data => {
        setCategories(data)
      })
      .catch(e => console.log(e))
  }, [])

  if (categories) {
    return categories
  }
}

export async function fetchCategories() {
  const categories = await fetch('/api/category')
  return ((await categories.json()) as ResponseJson<Category[]>).data
}
