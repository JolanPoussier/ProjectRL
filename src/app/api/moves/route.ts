import { NextRequest, NextResponse } from 'next/server'
import { moveService } from '@/services/move-service'

export async function GET(_req: NextRequest) {
  const category = _req.nextUrl.searchParams.get('category')
  const orderBy = _req.nextUrl.searchParams.get('orderBy')
  const sort: 'asc' | 'desc' = _req.nextUrl.searchParams.get('sort') as 'asc' | 'desc'
  const take = parseInt(_req.nextUrl.searchParams.get('take'))
  const include = _req.nextUrl.searchParams.get('include')
  const slugSearch = _req.nextUrl.searchParams.get('input')

  try {
    const moves = await moveService.getMoves({
      orderBy,
      sort,
      take,
      include,
      where: { category, slugSearch },
    })

    if (moves) {
      return NextResponse.json({ success: true, data: moves })
    } else {
      return NextResponse.json({ success: false, error: 'Move not found' })
    }
  } catch (e: unknown) {
    console.error(e)
    return NextResponse.json({ success: false, error: e })
  }
}
