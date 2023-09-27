import { sql } from '@vercel/postgres'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const result = await sql`CREATE TABLE "public"."Category" ( 
      id SERIAL PRIMARY KEY NOT NULL, 
      name VARCHAR(255) NOT NULL,
      "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
      "updatedAt" TIMESTAMP
      );`
    return NextResponse.json({ result }, { status: 200 })
  } catch (error: unknown) {
    return NextResponse.json({ error }, { status: 500 })
  }
}
