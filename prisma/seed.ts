import { PrismaClient, Role } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding users, categories, and posts...');

  // Seed Users
  const users = await prisma.user.createMany({
    data: [
      { name: 'Admin User', email: 'admin@example.com', password: 'securePassword123', role: Role.ADMIN },
      { name: 'Editor User', email: 'editor@example.com', password: 'editorPass456', role: Role.EDITOR },
      { name: 'General User', email: 'user@example.com', password: 'userPass789', role: Role.USER },
    ],
    skipDuplicates: true,
  });

  console.log(`${users.count} users seeded.`);

  // Seed Categories
  const categories = await prisma.category.createMany({
    data: [
      { name: 'Technology' },
      { name: 'Health' },
      { name: 'Science' },
      { name: 'Lifestyle' },
      { name: 'Business' },
    ],
    skipDuplicates: true,
  });

  console.log(`${categories.count} categories seeded.`);

  // Fetch Users and Categories for associating with Posts
  const adminUser = await prisma.user.findUnique({ where: { email: 'admin@example.com' } });
  const allCategories = await prisma.category.findMany();

  if (!adminUser || allCategories.length === 0) {
    console.log('User or Categories not found. Ensure they are seeded correctly.');
    return;
  }

  // Seed Posts
  const postsData = [
    {
      title: 'The Rise of Quantum Computing',
      content: 'Quantum computing is set to revolutionize data processing by leveraging quantum mechanics.',
      published: true,
      imageUrl: 'https://example.com/quantum.jpg',
      categoryId: allCategories.find((c) => c.name === 'Technology')?.id!,
    },
    {
      title: 'Health Benefits of a Plant-Based Diet',
      content: 'Studies show that plant-based diets can reduce the risk of chronic diseases.',
      published: true,
      imageUrl: 'https://example.com/plant-based.jpg',
      categoryId: allCategories.find((c) => c.name === 'Health')?.id!,
    },
    {
      title: 'Mars Mission 2024: Preparing for the Red Planet',
      content: 'NASA’s upcoming Mars mission aims to establish a human presence on Mars.',
      published: true,
      imageUrl: 'https://example.com/mars-mission.jpg',
      categoryId: allCategories.find((c) => c.name === 'Science')?.id!,
    },
    {
      title: 'Digital Detox: A Growing Trend',
      content: 'People are increasingly taking breaks from digital devices for mental well-being.',
      published: false,
      imageUrl: 'https://example.com/digital-detox.jpg',
      categoryId: allCategories.find((c) => c.name === 'Lifestyle')?.id!,
    },
    {
      title: 'The Role of Cryptocurrencies in Future Finance',
      content: 'Cryptocurrencies are gaining mainstream acceptance as a valid financial instrument.',
      published: true,
      imageUrl: 'https://example.com/crypto-future.jpg',
      categoryId: allCategories.find((c) => c.name === 'Business')?.id!,
    },
    // Add more posts as needed
  ].map((post) => ({
    ...post,
    slug: post.title.toLowerCase().replace(/ /g, '-'),
    ...post,
    authorId: adminUser.id,
  }));

  const posts = await prisma.post.createMany({
    data: postsData,
  });

  console.log(`${posts.count} posts seeded.`);
  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
