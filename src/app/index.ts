import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
console.log("v")

async function main() {
  console.log("v")
  }

main()
  .then(async () => {
    console.error("v")
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })