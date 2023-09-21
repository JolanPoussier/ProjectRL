import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
  try {
    const homeMoves = await prisma.move.findMany({
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

    if (homeMoves) {
      return NextResponse.json({ success: true, data: homeMoves })
    } else {
      return NextResponse.json({ success: false, error: 'Move not found' })
    }
  } catch (e) {
    console.error(e)
    return NextResponse.json({ success: false, error: e })
  } finally {
    await prisma.$disconnect()
  }
}
