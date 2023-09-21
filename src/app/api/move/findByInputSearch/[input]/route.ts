import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(_req: NextRequest, { params }: { params: { input: string } }) {
  try {
    const movesByInputSearch = await prisma.move.findMany({
      where: {
        slug: {
          contains: params.input,
        },
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
