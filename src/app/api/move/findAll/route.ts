import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(){
  try {
    const categoryMoves = await prisma.move.findMany({
      // where: {
      //   category: {
      //     name: request.query,
      //   },      
      // }
    });

    if (categoryMoves) {
      return NextResponse.json({ success: true, data: categoryMoves });
    } else {
      return NextResponse.json({ success: false, error: "Move not found" });
    }
  } catch (e) {
    console.error(e);
    return NextResponse.json({ success: false, error: e });
  } finally {
    await prisma.$disconnect();
  }
}
