import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma'; // Assuming prisma instance is exported from lib/prisma
import { NextRequest } from 'next/server';

// GET /api/posts/[slug] => Get a post by its slug
export async function GET(req: NextRequest) {
  try {
    const  slug = req.nextUrl.pathname.split('/').pop(); // Access the slug from the URL parameters

    if (!slug) {
      return NextResponse.json({ error: 'Slug is required' }, { status: 400 });
    }

    // Fetch the post by slug, including the associated category and author
    const post = await prisma.post.findFirst({
      where: { slug: slug },
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

    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
