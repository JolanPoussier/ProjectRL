import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
  try {
    const uniqueMove = await prisma.move.findFirst({
      // where: {
      //   title: name
      // }
    });

    if (uniqueMove) {
      return NextResponse.json({ success: true, data: uniqueMove });
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
