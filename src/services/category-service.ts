import { Category, PrismaClient } from '@prisma/client'
import { getPrismaClient } from './getPrismaClient.ts'

class CategoryService {
  private prismaClient: PrismaClient

  constructor() {
    this.prismaClient = getPrismaClient()
  }

  public static create(): CategoryService {
    return new CategoryService()
  }

  // CRUD methods
  public async getCategories(): Promise<Category[]> {
    const categories = await this.prismaClient.category.findMany()
    return categories
  }
}
export const categoryService = new CategoryService()
