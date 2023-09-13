import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function fetchUniqueMove(slug: string) {
  const allCateg = await prisma.move.findFirst({
    where: {
      slug: slug,
    },
  })
  const finalDatas = allCateg
  return finalDatas
}
