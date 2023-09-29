import { PrismaClient } from '@prisma/client'

let prismaClient: PrismaClient | null = null

// To be sure there is only one instance of prisma client
export function getPrismaClient(): PrismaClient {
  if (!prismaClient) {
    prismaClient = new PrismaClient()
  }
  return prismaClient
}

// Disconnect only when you will not reuse the db
export async function disconnect() {
  if (prismaClient) {
    await prismaClient.$disconnect()
    prismaClient = null
  }
}
