import { Move, PrismaClient } from '@prisma/client'
import { getPrismaClient } from './getPrismaClient.ts'

class MoveService {
  private prismaClient: PrismaClient

  constructor() {
    this.prismaClient = getPrismaClient()
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

  public async getMoves(params: {
    orderBy?: string
    sort?: 'asc' | 'desc'
    take?: number
    include?: string
    where?: {
      slugSearch?: string
      category?: string
    }
  }): Promise<Move[]> {
    const orderByClause: Record<string, 'asc' | 'desc'> = {}
    const includeClause: Record<string, boolean> = {}
    let takeClause: number
    const whereClause: {
      slug?: {
        contains: string
      }
      category?: {
        name: string
      }
    } = {}

    if (params.orderBy) {
      orderByClause[params.orderBy] = params.sort
    }
    if (params.include) {
      includeClause[params.include] = true
    }
    if (params.take) {
      takeClause = params.take
    }
    if (params.where.category) {
      whereClause.category = {
        name: params.where.category,
      }
    }
    if (params.where.slugSearch) {
      whereClause.slug = {
        contains: params.where.slugSearch,
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
export const moveService = new MoveService()
