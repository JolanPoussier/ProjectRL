import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function fetchUniqueMove(slug: string) {
  return await prisma.move.findFirst({
    where: {
      slug: slug,
    },
  })
}

export async function fetchMostViewedMoves() {
  return await prisma.move.findMany({
    orderBy: {
      views: {
        sort: 'desc',
      },
    },
    take: 6,
    include: {
      category: {
        select: {
          name: true,
        },
      },
    },
  })
}
