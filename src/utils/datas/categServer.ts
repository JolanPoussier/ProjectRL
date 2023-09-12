import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function fetchCategories() {
  const allCateg = await prisma.category.findMany()
  // const categories = await fetch('/api/category')
  const finalDatas = allCateg
  return finalDatas
}
