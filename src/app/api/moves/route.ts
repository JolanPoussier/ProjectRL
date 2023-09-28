import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { moveService } from '@/services/move-services'

const prisma = new PrismaClient()

export async function GET(_req: NextRequest) {
  const category = _req.nextUrl.searchParams.get('category')
  const homePageMoves = _req.nextUrl.searchParams.get('home')
  const home = homePageMoves !== null ? true : false
  const input = _req.nextUrl.searchParams.get('input')
  console.log(category)

  try {
    const movesByCategory = await moveService.getMoves(category, home, input)

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

//Service fonctionnel pour move avec hook useMovesByCateg foncitonnel, donc ok pour ça
