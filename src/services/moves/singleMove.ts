import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'
const prisma = new PrismaClient()

export async function fetchUniqueMove(slug: string) {
  try {
    const movesByInputSearch = await prisma.move.findFirst({
      where: {
        slug: slug,
      },
    })

    if (movesByInputSearch) {
      return NextResponse.json({ success: true, data: movesByInputSearch })
    } else {
      return NextResponse.json({ success: false, error: 'Move not found' })
    }
  } catch (e: unknown) {
    console.error(e)
    return NextResponse.json({ success: false, error: e })
  } finally {
    await prisma.$disconnect()
  }
}
