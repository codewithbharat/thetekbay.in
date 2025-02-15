import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma'; // Assuming prisma instance is exported from lib/prisma
import { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';



// Utility function to verify the JWT and extract user info
const verifyToken = (token: string) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    return decoded as { id: number; role: string }; // Assuming the token contains the user ID and role
  } catch {
    throw new Error('Invalid or expired token');
  }
};

// Utility function to generate a slug from the title
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric characters with hyphens
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}


// POST /api/posts => Create a new post

export async function POST(req: NextRequest) {
  // Get the authorization token from the request headers
  const token = req.headers.get('Authorization')?.split(' ')[1]; // Bearer <token>

  if (!token) {
    return NextResponse.json({ error: 'Authorization token is required' }, { status: 401 });
  }

  // Verify the token and extract the user ID
  let userId;
  try {
    const decoded = verifyToken(token);
    userId = decoded.id;
  } catch{
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
  }

  // Get the post data from the request body
  const { title, content, category, imageUrl }: { title: string; content: string; category: string; imageUrl?: string } = await req.json();



  try {

    // Generate the slug from the title
    const slug = generateSlug(title);

    let categoryId : number;
    // Find the category ID based on the category name
    const categoryData = await prisma.category.findFirst({
      where: { name: category },
    });
  
    if (!categoryData) {
       // create the category if it doesn't exist
      const newCategory = await prisma.category.create({
        data: {
          name: category,
        },
      });
  
      // Use the newly created category ID
      categoryId = newCategory.id;
    } else {
      categoryId = categoryData.id;
    }
    
    // Create the post and associate the user as the author
    const post = await prisma.post.create({
      data: {
        title,
        content,
        categoryId,
        slug,
        imageUrl,
        authorId: userId, // Use the user ID from the token as the authorId
      },
    });

    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}


// GET /api/posts => Get all posts

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get('page') || '1', 10);
    const limit = parseInt(searchParams.get('limit') || '10', 10);
    const skip = (page - 1) * limit;

    // Fetch posts with pagination
    const posts = await prisma.post.findMany({
      skip,
      take: limit,
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

    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
