import { Tutorial, PrismaClient } from '@prisma/client'
import { getPrismaClient } from './getPrismaClient.ts'

class TutorialService {
  private prismaClient: PrismaClient

  constructor() {
    this.prismaClient = getPrismaClient()
  }

  // CRUD methods
  public async getTutorials(id: number): Promise<Tutorial[]> {
    const tutorials = await this.prismaClient.tutorial.findMany({
      where: {
        moves: {
          some: {
            id: id,
          },
        },
      },
    })
    return tutorials.length === 0 ? null : tutorials
  }
}
export const tutorialService = new TutorialService()
