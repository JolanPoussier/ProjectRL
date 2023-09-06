import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  try {
    const result =
      await sql`CREATE TABLE "public"."Move" ( 
      id SERIAL PRIMARY KEY NOT NULL, 
      title VARCHAR(255) NOT NULL,
      difficulty INT NOT NULL,
      slug VARCHAR(100) NOT NULL,
      summary VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,
      views INT,
      thumbnail VARCHAR(255) NOT NULL,
      video VARCHAR(255) NOT NULL,
      "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
      "updatedAt" TIMESTAMP,
      "categoryId" INTEGER NOT NULL,
      FOREIGN KEY ("categoryId") REFERENCES "public"."Category"(id)
      );`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
