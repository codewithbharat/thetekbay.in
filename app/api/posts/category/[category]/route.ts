import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma'; // Assuming prisma instance is exported from lib/prisma
import { NextRequest } from 'next/server';

// GET /api/posts/category/[category] => Get posts by category
export async function GET(req: NextRequest, { params }: { params: { category: string } }) {
  try {
    const { category } = params; // Access the category from the URL parameters

    if (!category) {
      return NextResponse.json({ error: 'Category is required' }, { status: 400 });
    }

    // Fetch posts that belong to the specified category, including category and author details
    const posts = await prisma.post.findMany({
      where: {
        category: {
          name: category, // Match posts by the category name
        },
      },
      include: {
        category: true,
        author: {
          select: {
            name: true,
            email: true,
          },
        },
      },
    });

    if (posts.length === 0) {
      return NextResponse.json({ error: 'No posts found for this category' }, { status: 404 });
    }

    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
