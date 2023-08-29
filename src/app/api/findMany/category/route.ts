import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()
console.log("test3")

export default async function main() {
  const result = await prisma.category.findMany();
  return NextResponse.json(result);
}
