import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(_req: NextRequest, { params }: { params: { name: string } }) {
  try {
    const movesByCategory = await prisma.move.findMany({
      where: {
        category: {
          name: params.name,
        },
      },
    })

    if (movesByCategory) {
      return NextResponse.json({ success: true, data: movesByCategory })
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
