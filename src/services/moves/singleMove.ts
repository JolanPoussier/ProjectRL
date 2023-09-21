import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function fetchUniqueMove(slug: string) {
  return await prisma.move.findFirst({
    where: {
      slug: slug,
    },
  })
}
