import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function fetchCategories() {
  const allCateg = await prisma.category.findMany()
  const finalDatas = allCateg
  return finalDatas
}
