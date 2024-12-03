// app/api/categories/route.ts

import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'  // Ensure prisma is imported from your Prisma client instance

export async function GET() {
  try {
    // Fetch all categories from the database
    const categories = await prisma.category.findMany()

    // Return the response with categories
    return NextResponse.json(categories)
  } catch (error) {
    // Handle any errors
    return NextResponse.json({ error: 'Failed to fetch categories' }, { status: 500 })
  }
}
