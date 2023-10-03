import { NextResponse } from 'next/server'
import { categoryService } from '@/services/category-service'

export async function GET() {
  try {
    const categories = await categoryService.getCategories()

    if (categories) {
      return NextResponse.json({ success: true, data: categories })
    } else {
      return NextResponse.json({ success: false, error: 'Move not found' })
    }
  } catch (e: unknown) {
    console.error(e)
    return NextResponse.json({ success: false, error: e })
  }
}
