import { Move, PrismaClient } from '@prisma/client'
import { getPrismaClient } from './getPrismaClient.ts'
import { MoveWithCategoryName } from './types.ts'

class MoveService {
  private prismaClient: PrismaClient

  private constructor() {
    this.prismaClient = getPrismaClient()
  }

  public static create(): MoveService {
    return new MoveService()
  }

  // CRUD methods
  public async getMove(slug: string): Promise<Move> {
    const singleMove = await this.prismaClient.move.findFirst({
      where: {
        slug: slug,
      },
    })
    return singleMove
  }

  public async getMoves(category?: string, home?: boolean, input?: string): Promise<MoveWithCategoryName[]> {
    let orderByClause: {
      views?: {
        sort: 'asc' | 'desc'
      }
    } = {}
    let takeClause: number
    let includeClause: {
      category?: {
        select: {
          name: boolean
        }
      }
    } = {}
    const whereClause: {
      slug?: {
        contains: string
      }
      category?: {
        name: string
      }
    } = {}

    if (home) {
      orderByClause = {
        views: {
          sort: 'desc',
        },
      }
      takeClause = 6
      includeClause = {
        category: {
          select: {
            name: true,
          },
        },
      }
    }
    if (category) {
      whereClause.category = {
        name: category,
      }
    }
    if (input) {
      whereClause.slug = {
        contains: input,
      }
      includeClause = {
        category: {
          select: {
            name: true,
          },
        },
      }
    }
    const moves = await this.prismaClient.move.findMany({
      orderBy: orderByClause,
      where: whereClause,
      take: takeClause,
      include: includeClause,
    })
    return moves
  }
}
export const moveService = MoveService.create()
