import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  try {
    const result =
      await sql`
      CREATE TABLE "public"."Post" (
        id SERIAL PRIMARY KEY NOT NULL,
        title VARCHAR(255) NOT NULL,
        "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
        content TEXT,
        published BOOLEAN NOT NULL DEFAULT false,
        "authorId" INTEGER NOT NULL,
        FOREIGN KEY ("authorId") REFERENCES "public"."User"(id)
      );

        CREATE TABLE "public"."Profile" (
        id SERIAL PRIMARY KEY NOT NULL,
        bio TEXT,
        "userId" INTEGER UNIQUE NOT NULL,
        FOREIGN KEY ("userId") REFERENCES "public"."User"(id)
        );

        CREATE TABLE "public"."User" (
            id SERIAL PRIMARY KEY NOT NULL,
            name VARCHAR(255),
            email VARCHAR(255) UNIQUE NOT NULL
          );
      `;
      return NextResponse.json({ result }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}
